import React, { Component } from 'react';
import styled from 'styled-components';

// Imported Styles:

// Imported Images:

// Import Router
import { Link } from 'react-router-dom';

// STYLES:
// ________________________________________________
const Header = styled.div`
  background: grey;
  height: 100px;
`



// ________________________________________________

export default class DashboardLayout extends Component {
  render() {
    return (
      <div className='container'>
        <Header>
          <button class="js-menu menu" type="button">
          	<span class="bar"></span>
          </button>
        </Header>


<nav>
	<ul>
		<li>Link</li>
		<li>Link</li>
		<li>Link</li>
		<li>Link</li>
	</ul>
</nav>

<nav>

</nav>
{this.props.children}



      </div>
    );
  }
}
