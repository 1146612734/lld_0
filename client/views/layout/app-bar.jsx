import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {
  inject,
  observer,
} from 'mobx-react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styles = (theme) => {
  return {
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    newtopicButton: {
      backgroundColor: theme.palette.primary.light,
      color: '#fff',
    },
  }
}

@inject((stores) => {
  return {
    appState: stores.appState,
  }
}) @observer
class MainAppBar extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }
  constructor() {
    super()
    this.onHomeIconClick = this.onHomeIconClick.bind(this)
    this.createButtonClick = this.createButtonClick.bind(this)
    this.loginButtonClick = this.loginButtonClick.bind(this)
  }

  onHomeIconClick() {
    this.context.router.history.push('/list?tab=all')
  }

  createButtonClick() {
    this.context.router.history.push('/topic/create')
  }

  loginButtonClick() {
    if (this.props.appState.user.isLogin) {
      this.context.router.history.push('/user/info')
    } else {
      this.context.router.history.push('/user/login')
    }
  }

  render() {
    const { classes } = this.props
    const {
      user,
    } = this.props.appState
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.onHomeIconClick}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              JNode
            </Typography>
            <Button className={classes.newtopicButton} color="primary" variant="raised" size="small" onClick={this.createButtonClick}>
              新建话题
            </Button>
            <Button color="inherit" size="small" onClick={this.loginButtonClick}>
              {
                user.isLogin ? user.info.loginName : '登录'
              }
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

MainAppBar.wrappedComponent.propTypes = {
  appState: PropTypes.object.isRequired,
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(MainAppBar)
