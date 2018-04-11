/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-29 18:24:45
 * @version $Id$
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom'

import {
  observer,
  inject,
} from 'mobx-react'

import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'
import TestApi from '../views/test/api-test'
import UserLogin from '../views/user/login'
import UserInfo from '../views/user/info'
import CreateTopic from '../views/topic-create/index'

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (
        isLogin ?
          <Component {...props} /> :
          <Redirect
            to={{
              pathname: '/user/login',
              search: `?from=${rest.path}`,
            }}
          />
      )
    }
  />
)

const InjectedPrivateRoute = withRouter(inject(({ appState }) => {
  return {
    isLogin: appState.user.isLogin,
  }
})(observer(PrivateRoute)))

PrivateRoute.propTypes = {
  isLogin: PropTypes.bool,
  component: PropTypes.element.isRequired,
}
PrivateRoute.defaultProps = {
  isLogin: false,
}

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} exact key="first" />,
  <Route path="/list" component={TopicList} key="list" />,
  <Route path="/detail/:id" component={TopicDetail} key="detail" />,
  <Route path="/test" component={TestApi} key="test" />,
  <Route path="/user/login" component={UserLogin} key="login" />,
  <InjectedPrivateRoute path="/user/info" component={UserInfo} key="userinfo" />,
  <InjectedPrivateRoute path="/topic/create" component={CreateTopic} key="createtopic" />,
]
