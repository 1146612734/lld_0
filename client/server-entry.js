import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'

//将js中的css提取出来 放在头部
import { JssProvider } from 'react-jss'
import { MuiThemeProvider } from 'material-ui/styles'

import App from './views/App'
import { createStoreMap } from './store/store'

//让mobx在服务端渲染的时候不会重复数据变换
useStaticRendering(true)

//{appStore: xxx}
export default (stores, routerContext, sheetsRegistery, jss, theme, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <JssProvider registry={sheetsRegistery} jss={jss}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </StaticRouter>
  </Provider>
)

export { createStoreMap }
