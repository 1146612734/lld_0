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
import Helmet from 'react-helmet'//head信息更新

import Tabs, { Tab } from 'material-ui/Tabs'
//import Button from 'material-ui/Button'//需要哪个组件 加载哪个组件

import { AppState } from '../../store/app-state'
import Container from '../layout/container'
import TopicListItem from './list-item'

@inject('appState') @observer
export default class TopicList extends React.Component {
  constructor() {
    super()
    this.state = {
      tabIndex: 0,
    }
    this.changeTab = this.changeTab.bind(this)
    this.listItemClick = this.listItemClick.bind(this)
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

  changeTab(e, index) {
    this.setState({
      tabIndex: index,
    })
  }
  /*eslint-disable*/
  listItemClick(e) {

  }
  /*eslint-ensable*/

  render() {
    const {
      tabIndex,
    } = this.state
    const topic = {
      title: 'This is a title',
      username: 'lld',
      reply_count: 12,
      visit_count: 30,
      create_at: '18/3/22',
      image: '//47.93.221.72:19091/public/images/paihang.png',
      tab: '置顶',
    }
    return (
      <Container>
        <Helmet>
          <meta name="description" content="This is description" />
          <title>This is topic list</title>
        </Helmet>
        <Tabs value={tabIndex} onChange={this.changeTab}>
          <Tab label="全部" />
          <Tab label="精华" />
          <Tab label="分享" />
          <Tab label="问答" />
          <Tab label="招聘" />
          <Tab label="客户端测试" />
        </Tabs>
        <TopicListItem onClick={this.listItemClick} topic={topic}/>
      </Container>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}
