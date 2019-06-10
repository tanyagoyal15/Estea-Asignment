import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../styles/landing.scss';
import '../../styles/_common.scss';

class Landing extends Component {
  render() {
    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 landing-page">
          <h1 className="center-align bold">Welcome!!</h1>
          <b className="center-align">Please LogIn to Access Your Account</b>
            <div>
              <Link
                to="/register"
              >
                <button type="submit" className="button" style={{"margin": "20px 0"}}>Register</button>
              </Link>
            </div>
            <div>
              <Link
                to="/login"
              >
                <button type="submit" className="button" style={{"margin": "20px 0"}}>Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
