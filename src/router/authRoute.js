import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '@/redux/actions';
import { getToken } from '@/utils/auth';

const authRoute = ({ component: Component, authTo, user, getUserByToken, ...rest }) => (
  // eslint-disable-next-line complexity
  <Route {...rest} render={props => {
    console.log('111111111', props.match.path);
    console.log('props.location', props.location);
    const isLogin = props.match.path === '/login';
    const token = getToken();
    console.log(token);
    console.log(user);
    const c = <Component {...props} />;
    const r = <Redirect to={{ pathname: authTo, state: { from: props.location.pathname } }} />;
    if (token) {
      // 如果有token 判断有没有用户信息没有就去拉取
      if (!user.id) {
        getUserByToken(token).then(
          () => !isLogin ? c : r,
          error => !isLogin ? r : c
        );
      }
      return !isLogin ? c : r;
    }
    return !isLogin ? r : c;
  }
  }
  />
);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserByToken: token => dispatch(getUser(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(authRoute);
