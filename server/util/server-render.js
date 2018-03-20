const serialize=require('serialize-javascript')
const ejs=require('ejs')
const asyncBootstrap=require('react-async-bootstrapper').default
const ReactDomServer=require('react-dom/server')
const Helmet = require('react-helmet').default  //SEO友好标签

const SheetsRegistry = require('react-jss').SheetsRegistry
const create = require('jss').create
const preset = require('jss-preset-default').default
const createMuiTheme = require('material-ui/styles').createMuiTheme
const createGenerateClassName = require('material-ui/styles/createGenerateClassName').default
const colors = require('material-ui/colors')

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName]=stores[storeName].toJson()
    return result
  }, {})
}

module.exports = (bundle, template, req, res) => {
  return new Promise((resolve, reject) => {
    const createStoreMap = bundle.createStoreMap
    const createApp = bundle.default

    const routerContext = {}
    const stores = createStoreMap()
    const sheetsRegistery = new SheetsRegistry()
    const jss = create(preset())
    jss.options.createGenerateClassName = createGenerateClassName
    const  theme = createMuiTheme({
      pallete: {
        primary: {
          light: '#ffc1e3',
          main: '#f48fb1',
          dark: '#bf5f82',
          contrastText: '#fff',
        },
        secondary: {
          light: '#e6ffff',
          main: '#b3e5fc',
          dark: '#82b3c9',
          contrastText: '#fff',
        },
      },
    })
    const app=createApp(stores, routerContext, sheetsRegistery, jss, theme, req.url)

    asyncBootstrap(app).then(() => {
      if(routerContext.url){
        res.status(302).setHeader('Location', routerContext.url)
        res.end()
        return
      }
      const helmet = Helmet.rewind()

      const state = getStoreState(stores)
      const content=ReactDomServer.renderToString(app)
      const html=ejs.render(template, {
        appString: content,
        initialState: serialize(state),
        meta: helmet.meta.toString(),
        title: helmet.title.toString(),
        style: helmet.style.toString(),
        link: helmet.link.toString(),
        materialCss: sheetsRegistery.toString()
      })
      res.send(html)
      resolve()
      //res.send(template.replace('<!-- app -->',content))
    }).catch(reject)
  })
}
