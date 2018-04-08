/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-29 18:09:55
 * @version $Id$
 */
import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
import Helmet from 'react-helmet'
import {
  inject,
  observer,
} from 'mobx-react'


import { withStyles } from 'material-ui/styles'
//import Paper from 'material-ui/Paper'
import { CircularProgress } from 'material-ui/Progress'

import Container from '../layout/container'

import { TopicStore } from '../../store/topic-store'
import { topicDetailStyle } from './styles'

@inject((stores) => {
  return {
    topicStore: stores.topicStore,
  }
}) @observer
class TopicDetail extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      //newReply: '',
      //showEditor: false,
    }
  }

  componentDidMount() {
    // do something here
    const {
      id,
    } = this.props.match.params
    console.log('component did mount id:', id) // eslint-disable-line
    this.props.topicStore.getTopicDetail(id).catch((err) => {
      console.log('detail did mount error:', err) // eslint-disable-line
    })
  }

  getTopic() {
    //const id = this.props.match.params.id
    const {
      id,
    } = this.props.match.params
    return this.props.topicStore.detailMap[id]
  }

  render() {
    const topic = this.getTopic()
    //const classes = this.props.classes
    const {
      classes,
    } = this.props
    if (!topic) {
      return (
        <Container>
          <section className={classes.loadingContainer}>
            <CircularProgress color="secondary" />
          </section>
        </Container>
      )
    }
    return (
      <div>
        <Container>
          <Helmet>
            <title>topic.title</title>
          </Helmet>
          <header className={classes.header}>
            <h3>{topic.title}</h3>
          </header>
          <section className={classes.body}>
            <div dangerouslySetInnerHTML={{ __html: marked(topic.content) }} />
          </section>
        </Container>
      </div>
    )
  }
}

TopicDetail.wrappedComponent.propTypes = {
  //appState: PropTypes.object.isRequired,
  topicStore: PropTypes.instanceOf(TopicStore).isRequired,
}

TopicDetail.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(topicDetailStyle)(TopicDetail)
