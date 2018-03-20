import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styles = {
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
}

class MainAppBar extends React.Component {
  constructor() {
    super()
    this.onHomeIconClick = this.onHomeIconClick.bind(this)
    this.createButtonClick = this.createButtonClick.bind(this)
    this.loginButtonClick = this.loginButtonClick.bind(this)
  }
  /*eslint-disable*/
  onHomeIconClick() {

  }

  createButtonClick() {

  }

  loginButtonClick() {

  }
  /*eslint-ensable*/

  render() {
    const { classes } = this.props
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
            <Button color="secondary" variant="raised" size="small" onClick={this.createButtonClick}>
              新建话题
            </Button>
            <Button color="inherit" size="small" onClick={this.loginButtonClick}>
              登录
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(MainAppBar)
