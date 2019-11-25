import React, { Component } from "react";
import { withRouter } from "react-router";
import Routes from "./Routes";
import "./App.css";
//import { NavLink } from "react-router-dom";
//import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";
//import Form from "react-bootstrap/Form";
//import FormControl from "react-bootstrap/FormControl";
//import Button from "react-bootstrap/Button";
//import Image from "react-bootstrap/Image";
// import { LinkContainer } from 'react-router-bootstrap';
//import { Auth } from "aws-amplify";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      userAccessRole: ""
    };
  }

  // TODO: dev branch change just to get on cicd for now
  // TODO: test branch change just to get on cicd for now
  // TODO: demo branch change just to get on cicd for now
  // Use componentDidMount() to load the user session with Amplify
  async componentDidMount() {
    try {
      // returns a promise, rest of app will wait for this response
      // from amplify auth with cognito
      //await Auth.currentSession();
      // if 200 OK from above with session info then execute next
      //this.userHasAuthenticated(true);

      // if OK pull role from cognito custom attribute and store in state
      //this.userHasPermission("admin");
    } catch ( err ) {

      /*
      if (err !== "No current user") {
        // eslint-disable-next-line
        alert(err);
      }
      */
    }
    // loading user session is asyn process, we need to make sure
    // that our app does not change state when it first loads
    // we wait to render until isAuthenticating is false
    this.setState({
      //isAuthenticating: false
    });
  }

  /*
  userHasPermission = accessRole => {
    this.setState({
      userAccessRole: accessRole
    });
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({
      isAuthenticated: authenticated
    });
  }

  // eslint-disable-next-line
  handleLogout = async event => {
    // returns a promise that will clear user session for logout
    await Auth.signOut();
    this.userHasAuthenticated(false);
    // use history.push from react-router4 to redirect
    // user during login flow
    this.props.history.push("/login");
  }
  */

  render() {
    const childProps = {
    /*
      // below is authentication provided by cognito
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      // Below is permissions available and passed as props
      // authorization!!
      userAccessRole: this.state.userAccessRole,
      userHasPermission: this.userHasPermission
    */
    };

    return (
      //!this.state.isAuthenticating &&
      <div className="App container">
        
        { /* These are the application's routes */ }
        <Routes childProps={ childProps } />
      </div>
    );
  }
}

// export with a HOC to give app access to router props
// access the history object's props and the closest
// <Routes>'s match withRouter().
export default withRouter(App);
