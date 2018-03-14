/**
 *
 * @authors lld (you@example.org)
 * @date    2018-01-29 17:34:00
 * @version $Id$
 */
import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { AppState } from '../../store/app-state'

@inject('appState') @observer
export default class TopicList extends React.Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {
    // do something here
  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  changeName(event) {
    //this.props.appState.name = event.target.value
    this.props.appState.changeName(event.target.value)
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta name="description" content="This is description" />
          <title>This is topic list</title>
        </Helmet>
        <input type="text" onChange={this.changeName} />
        <span>{this.props.appState.msg}</span>
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}
