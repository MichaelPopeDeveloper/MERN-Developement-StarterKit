import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Private from './auth/Private';
import PrivateRoute from './auth/PrivateRoute';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/index';

import * as axios from 'axios';



const mapStateToProps = state => {
  return { state };
};

function mapDispatchToProps(dispatch) {
  return {
    logout: action => dispatch(logoutUser(action))
  };
}

interface IAppState {
  user: IUser | false
}

interface IAppProps {
  login: (user: IUser | false) => any,
  logout: () => any
}

interface IUser {
  username: string,
}

class Routes extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      user: false,
    }
  }

  componentWillMount() {
    this.auth();
  }

    auth = () => {
      axios.get('/user')
        .then(result => {
          if (result.status === 200) return this.props.login(false);
          return this.setState({ user: result.data.user });
        })
        .catch((error: Error) => this.props.logout(false)); //Display server error to user gracefully, not just keeping them logged out
    }


  render = () => {
    return (
      <Router>
        {/* <Menu /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute path="/private" {...this.state} component={Private} />
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);