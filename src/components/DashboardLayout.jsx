import React, { Component } from 'react';
import styled from 'styled-components';
import $ from "jquery";

// Imported Styles:
import '../index.css';
// Imported Images:

// Import Router
import { Link } from 'react-router-dom';

// STYLES:
// ________________________________________________
const Header = styled.div`
  position: relative;
  background: grey;
  height: 100px;
  z-index: -10;
  h1{
    font-size: 20px;
  }
`



// ________________________________________________

export default class DashboardLayout extends Component {

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

  render() {
    return (
      <div className='container'>
          <button className="js-menu menu reset" type="button">
            <span className="bar"></span>
          </button>
          <nav>
          	<ul>
              <li className='reset'><Link to='/dashboard'>My Account</Link></li>
          		<li className='reset'><Link to='/roster'>Roster</Link></li>
          		<li className='reset'><Link to='/roster'>Manage Groups</Link></li>
          		<li className='reset'><Link to='/roster'>Another link!</Link></li>
          	</ul>
          </nav>
          <Header>
            <h1>My App</h1>
          </Header>

      {this.props.children}
      </div>
    );
  }
}
