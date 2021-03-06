import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { logout } from '../actions';

// Imported Styles:
import '../index.css';
// Imported Images:

// Import Router
import { Link } from 'react-router-dom';

// STYLES:
// ________________________________________________
const Header = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
  height: 100px;
  z-index: -10;
`
const H1 = styled.h1`
  position: absolute;
  font-size: 40px;
  margin-top: 25px;
  text-align: center;
  width: 100%;
  font-family: 'Lobster Two', cursive;
  &:after ${H1}{
    content: "";
    display: block;
    width: 38px;
    border: solid 2px #50E3C2;
    margin: auto;
  }
`


// ________________________________________________

class DashboardLayout extends Component {

  redirect() {
    if(!this.props.login) {
      console.log('yes');
      // return <Redirect to='/' />
    }
  }

  componentDidMount(){
    var isActive = false;

    document.querySelectorAll('.reset').forEach(e => {
      e.addEventListener('click', event => {
        if (isActive){
          document.querySelector('.menu').classList.remove('active')
          document.body.classList.remove('menu-open')
        } else {
          document.querySelector('.menu').classList.add('active')
          document.body.classList.add('menu-open')
        }
        isActive = !isActive;
      })
    })
  }

  appLogout() {
    console.log('logging out');
    logout();
  }

  render() {
    return (
      <div className='container'>
          <button className="js-menu menu reset" type="button">
            <span className="bar"></span>
          </button>
          <nav>
          	<ul>
              <li className='reset'><Link to='/dashboard'>Dashboard</Link></li>
          		<li className='reset'><Link to='/roster'>Roster</Link></li>
          		<li className='reset'><Link to='/manage/groups'>Manage Groups</Link></li>
              <li className='reset'><a href='/' onClick={this.appLogout} style={{cursor: 'pointer'}}>Logout</a></li>
          	</ul>
          </nav>
          <Header>
            <H1>inForm.</H1>
          </Header>
      {this.redirect()}
      {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login.loginSuccess
  }
}

export default connect(mapStateToProps, { logout })(DashboardLayout)
