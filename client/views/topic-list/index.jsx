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
import querystring from 'query-string'

import Tabs, { Tab } from 'material-ui/Tabs'
import List from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'
//import Button from 'material-ui/Button'//需要哪个组件 加载哪个组件

import { AppState } from '../../store/app-state'
import { TopicStore } from '../../store/topic-store'
import Container from '../layout/container'
import TopicListItem from './list-item'
import { tabs } from '../../util/variable-define'

@inject((stores) => {
  return {
    appState: stores.appState,
    topicStore: stores.topicStore,
  }
}) @observer
export default class TopicList extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }
  constructor() {
    super()
    this.changeTab = this.changeTab.bind(this)
    this.listItemClick = this.listItemClick.bind(this)
  }

  componentDidMount() {
    // do something here
    const tab = this.getTab()
    this.props.topicStore.fetchTopics(tab)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.topicStore.fetchTopics(this.getTab(nextProps.location.search))
    }
  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  getTab(search) {
    search = search || this.props.location.search
    const query = querystring.parse(search)
    return query.tab || 'all'
  }

  changeTab(e, value) {
    this.context.router.history.push({
      pathname: '/list',
      search: `?tab=${value}`,
    })
  }

  listItemClick(topic) {
    this.context.router.history.push(`/detail/${topic.id}`)
  }

  render() {
    const {
      topicStore,
    } = this.props
    const topicList = topicStore.topics
    //const syncing = topicStore.syncing
    const {
      syncing,
      createdTopics,
    } = topicStore
    const {
      user,
    } = this.props.appState
    const tab = this.getTab()

    // const topic = {
    //   title: 'This is a title',
    //   username: 'lld',
    //   reply_count: 12,
    //   visit_count: 30,
    //   create_at: '18/3/22',
    //   image: '//47.93.221.72:19091/public/images/paihang.png',
    //   tab: '置顶',
    // }
    return (
      <Container>
        <Helmet>
          <meta name="description" content="This is description" />
          <title>话题列表</title>
        </Helmet>
        <Tabs value={tab} onChange={this.changeTab}>
          {
            Object.keys(tabs).map(tab1 => (
              <Tab key={tab1} label={tabs[tab1]} value={tab1} />
            ))
          }
        </Tabs>
        {
          createdTopics && createdTopics.length > 0 ?
            <List style={{ backgroundColor: '#dfdfdf' }}>
              {
                createdTopics.map(topic => {
                  topic = Object.assign({}, topic, {
                    author: user.info,
                  })
                  return (
                    <TopicListItem
                      key={topic.id}
                      onClick={() => this.listItemClick(topic)}
                      topic={topic}
                    />
                  )
                })
              }
            </List> :
            null
        }
        <List>
          {
            topicList.map((topic) => {
              return (
                <TopicListItem
                  key={topic.id}
                  onClick={() => this.listItemClick(topic)}
                  topic={topic}
                />
              )
            })
          }
        </List>
        {
          syncing ?
            (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  padding: '40px 0',
                }}
              >
                <CircularProgress color="secondary" size={100} />
              </div>
            ) : null
        }

      </Container>
    )
  }
}

TopicList.wrappedComponent.propTypes = {
  appState: PropTypes.instanceOf(AppState).isRequired,
  topicStore: PropTypes.instanceOf(TopicStore).isRequired,
}

TopicList.propTypes = {
  location: PropTypes.object.isRequired,
}
