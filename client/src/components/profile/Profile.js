import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../styles/profile.scss';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      errors: {}
    }
  }

  render() {
    return (
      <div className="container box">
        <div className="row">
          <div className="title">Profile</div>
        <div className="top-section">
              <a href="/dashboard">/Go Back To Dashboard</a>            
        </div>
        <div className="profile-section">
          <div className="cover col-md-12 mx-auto" style={{"boxShadow" : "0 0 10px 0 #E9EDF5" , "padding" : "0"}}>
              <div className="avatar mb-10">
                <img src={require('../../images/profile-image.jpeg')} width="120px"/>
                    <div className="light "></div>
              </div>
          </div>
          <div className="main col-md-12 mx-auto" style={{"boxShadow" : "0 0 10px 0 #E9EDF5"}}>
                <p className="col-md-6 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.</p>
          </div>
          <div className="social col-md-12 mx-auto my-0" style={{"boxShadow" : "0 0 10px 0 #E9EDF5"}}>
            <ul>
                <li><a href="#"><img src={require('../../images/linkedin.png')} alt="" width="40px"/></a></li> 
                <li><a href="#"><img src={require('../../images/github.png')} alt="" width="40px"/></a></li>
                <li><a href="#"><img src={require('../../images/facebook.png')} alt="" width="40px"/></a></li>
            </ul>
          </div>
          </div>
          </div>
      </div>
    )
  }
}

export default Profile