import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router ,Route, Switch } from "react-router-dom";
import Landing from "../layout/Landing";
import Register from "../auth/Register";
import Login from "../auth/Login";
import PrivateRoute from "../private-route/PrivateRoute";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../profile/Profile";
import '../../styles/navbar.scss';

class Navbar extends Component {
  render() {

    const loginRegLink = (
      <ul style={{"listStyle" : "none" , "paddingLeft" : "0px" , "textDecoration" : "none"}}>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )


    const userLink = (
      <ul style={{"listStyle" : "none" , "paddingLeft" : "0px"}}>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Icons
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Maps
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Table List
          </Link>
        </li>
      </ul>
    )
    return (
      <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Menu</h3>
                </div>

                <ul className="list-unstyled components">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                          Home
                        </Link>
                    </li>
                      {localStorage.jwtToken ? userLink : loginRegLink}
                </ul>
            </nav>

          <div id="content" style={{}}>
              <button type="button" id="sidebarCollapse" className="navbar-btn">
                  <span></span>
                  <span></span>
                  <span></span>
              </button>
              
              <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/profile" component={Profile} />
              </Switch>
              </div>
            </div>
        </div>
    );
  }
}

export default Navbar;
