import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'; //eslint-disable-line

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
// import { lightBlue, pink } from 'material-ui/colors'

import App from './views/App';
import AppState from './store/app-state'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#FF80AB',
      main: '#FF4081',
      dark: '#F50057',
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

const initialState = window.__INITIAL__STATE__ || {}  //eslint-disable-line

const createApp = (TheApp) => {
  // Remove the jss-server-side injected CSS
  class Main extends React.Component {
    componentDidMount() {
      const jssStyles = document.getElementById('jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return <TheApp />
    }
  }
  return Main
}

const root = document.getElementById('root');
const render = (Component) => {
  ReactDom.hydrate(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <Component />
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}
render(createApp(App))
if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default; //eslint-disable-line
    render(createApp(NextApp))
  })
}
