import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import Login from './utils/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './utils/logout';
import Invitation from './components/invitation';

class App extends Component {

  state = {
    user:{}
  }

  componentDidMount(){
    const user = localStorage.getItem("token")
    this.setState({user})
  }

  render(){
    const {user} = this.state;
    return (
      <React.Fragment>
        <h1 className="header">Invitation</h1>
        <Navbar user={user} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/home" component={Home} />
          <Route path="/invites" 
            render={props => <Invitation {...props} user={user} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
