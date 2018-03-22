import React from 'react'
import PropTypes from 'prop-types'

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from 'material-ui/List';
/*import ListItem from 'material-ui/List/ListItem'
import ListItemAvater from 'material-ui/List/ListItemAvater'
import ListItemText from 'material-ui/List/ListItemText'*/
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'

import {
  topicPrimaryStyles,
  topicSecondaryStyles,
} from './styles'

const Primary = ({ classes, topic }) => {
  return (
    <div className={classes.root}>
      <span className={classes.tab}>{topic.tab}</span>
      <span className={classes.title}>{topic.title}</span>
    </div>
  )
}

const Secondary = ({ classes, topic }) => (
  <div className={classes.root}>
    <span className={classes.userName}>{topic.username}</span>
    <span className={classes.count}>
      <span className={classes.accentColor}>{topic.reply_count}</span>
      <span>/</span>
      <span>{topic.visit_count}</span>
    </span>
    <span>创建时间：{topic.create_at}</span>
  </div>
)

const StyledPrimary = withStyles(topicPrimaryStyles)(Primary)
const StyledSecondary = withStyles(topicSecondaryStyles)(Secondary)

Primary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}
Secondary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

const TopicListItem = ({ onClick, topic }) => (
  <ListItem button onClick={onClick}>
    <ListItemAvatar>
      <Avatar src={topic.image} />
    </ListItemAvatar>
    <ListItemText
      primary={<StyledPrimary topic={topic} />}
      secondary={<StyledSecondary topic={topic} />}
    />
  </ListItem>

)

TopicListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  topic: PropTypes.object.isRequired,
}

export default TopicListItem
