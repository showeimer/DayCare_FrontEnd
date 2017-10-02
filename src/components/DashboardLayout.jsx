import React, { Component } from 'react';
import styled from 'styled-components';

// Imported Styles:

// Imported Images:

// Import Router
import { Link } from 'react-router-dom';

// STYLES:
// ________________________________________________




// ________________________________________________

export default class DashboardLayout extends Component {
  render() {
    return (
      <div className='container'>
        <nav>

        </nav>
        {this.props.children}
      </div>
    );
  }
}
