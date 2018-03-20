/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-08 16:31:26
 * @version $Id$
 */

import React from 'react'
/*import {
  Link,
} from 'react-router-dom'*/
import Routes from '../config/router'

import AppBar from './layout/app-bar'

export default class App extends React.Component {
  componentDidMount() {
    // do something
  }

  render() {
    return [
      <AppBar />,
      <Routes key="routes" />,
    ]
  }
}
/*export default () => {
 return(
  <div>This is App33</div>
 )
}*/
//export default () => <div>This is App33</div>
