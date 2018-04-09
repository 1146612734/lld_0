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
import Paper from 'material-ui/Paper'
import { CircularProgress } from 'material-ui/Progress'
import IconReply from 'material-ui-icons/Reply'
import Button from 'material-ui/Button'

import SimpleMDE from 'react-simplemde-editor'

import Container from '../layout/container'

import { TopicStore } from '../../store/topic-store'
import { topicDetailStyle } from './styles'

import Reply from './reply'
import formatDate from '../../util/date-format'

@inject((stores) => {
  return {
    topicStore: stores.topicStore,
    user: stores.appState.user,
  }
}) @observer
class TopicDetail extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      newReply: '',
      //showEditor: false,
    }
    this.handleNewReplyChange = this.handleNewReplyChange.bind(this)
    this.goToLogin = this.goToLogin.bind(this)
    this.handleReply = this.handleReply.bind(this)
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

  handleReply() {
    const topic = this.getTopic()
    console.log(topic)
    topic.doReply(this.state.newReply)
      .then(() => {
        this.setState({
          newReply: '',
        })
      }).catch((err) => {
        console.log(err)
      })
  }

  getTopic() {
    //const id = this.props.match.params.id
    const {
      id,
    } = this.props.match.params
    return this.props.topicStore.detailMap[id]
  }

  handleNewReplyChange(value) {
    this.setState({
      newReply: value,
    })
  }

  goToLogin() {
    this.context.router.history.push('/user/login')
  }

  render() {
    const topic = this.getTopic()
    //const classes = this.props.classes
    const {
      classes,
      user,
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
        {
          topic.createdReplies && topic.createdReplies.length > 0 ?
            (
              <Paper className={classes.replies} elevation={4}>
                <header className={classes.replyHeader}>
                  <span>我的最新回复</span>
                  <span>{`${topic.createdReplies.length}条`}</span>
                </header>
                {
                  topic.createdReplies.map((reply) => (
                    <Reply
                      key={reply.id}
                      reply={Object.assign({}, reply, {
                        author: {
                          avatar_url: user.info.avatar_url,
                          loginname: user.info.loginname,
                        },
                      })}
                    />
                  ))
                }
              </Paper>
            ) :
            null
        }
        <Paper className={classes.replies} elevation={4}>
          <header className={classes.replyHeader}>
            <span>{`${topic.reply_count}`}回复</span>
            <span>{`最新回复${formatDate(topic.last_reply_at, 'yy-mm-dd h:m')}`}</span>
          </header>
          {
            user.isLogin ?
              <section className={classes.replyEditor}>
                <SimpleMDE
                  onChange={this.handleNewReplyChange}
                  value={this.state.newReply}
                  options={{
                    toolbar: false,
                    autoFocus: false,
                    spellChecker: false,
                    placeholder: '添加您的精彩回复',
                  }}
                />
                <Button
                  fab="true"
                  variant="raised"
                  color="secondary"
                  onClick={this.handleReply}
                  className={classes.replyButton}
                >
                  <IconReply />
                </Button>
              </section> :
              <section className={classes.notLoginButton}>
                <Button variant="raised" color="secondary" onClick={this.goToLogin}>登录并回复</Button>
              </section>
          }
          <section>
            {
              topic.replies.map(reply => <Reply reply={reply} key={reply.id} />)
            }
          </section>
        </Paper>
      </div>
    )
  }
}

TopicDetail.wrappedComponent.propTypes = {
  user: PropTypes.object.isRequired,
  topicStore: PropTypes.instanceOf(TopicStore).isRequired,
}

TopicDetail.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(topicDetailStyle)(TopicDetail)
