import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Line , Doughnut , Pie , Bar } from 'react-chartjs-2'
import { Link } from "react-router-dom";
import '../../styles/dashboard.scss';

class Dashboard extends Component {
   constructor(props) {
    super(props)
    this.state = {
      chartData : {
        labels: ['Boston' , 'Worcester' , 'SpringField' , 'Lowell' , 'Cambridge'],
        datasets : [
        {
          label : 'Population',
          data : [
            617594,
            181045,
            153060,
            106519,
            105162
          ],
          backgroundColor : [
            'rgba(243, 247, 20, 0.6)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(62, 75, 232, 0.8)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ]
        }
        ]
      }
    }
  }

 onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "100%" }} className="container ">
        <div className="row">
          <div className="title">Dashboard</div>
          <div className="top-section">
            <h5 className="left" >
              <b style={{"paddingLeft" : "20px"}}>Welcome,</b> {user.name}
            </h5>
            <div className="right" style={{"paddingRight" : "20px"}}>
              <Link
                to="/profile"
                className="user-profile"
              >
                <img src={require('../../images/girl.png')} alt="" style={{"width" : "53px", "paddingRight" : "20px"}}/>
              </Link>

              <a href='/'
              className="logout"
              onClick={this.onLogoutClick}
            >
              Logout
            </a>

            </div>
        </div>
        

          <div className="col s12 center-align container-fluid">
            
          <div className="line-chart">
          <Line
            data={this.state.chartData}
            height={100}
            // width={150}
            options={{
              title : {
                display : true,
                text : 'Largest Cities in New York',
                fontSize : 25
              },
              legend : {
                display : true,
                position : 'top'
              }
            }}
          />
          </div>
            
        

          <div className="chart col-sm-12" >
          <div className="doughnut" >
          <Doughnut
            data={this.state.chartData}
            height={280}
            options={{
              title : {
                display : true,
                fontSize : 25
              },
              legend : {
                display : true,
                position : 'top'
              }
            }}
          />
          </div>

          <div className="pie" >
          <Pie
            data={this.state.chartData}
            height={280}
            options={{
              title : {
                display : true,
                fontSize : 25
              },
              legend : {
                display : true,
                position : 'top'
              }
            }}
          />
        </div>
          
        <div className="bar" >
          <Bar
            data={this.state.chartData}
            height={300}
            options={{
              title : {
                display : true,
                fontSize : 25
              },
              legend : {
                display : true,
                position : 'top'
              }
            }}
          />
        </div>

        </div>

          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);