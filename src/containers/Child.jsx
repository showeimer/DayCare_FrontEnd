import React, {Component} from 'react'
import styled from 'styled-components'




class Child extends Component {

  render(){
    return(
      <h1>{this.props.child.firstname} {this.props.child.lastname}</h1>
    )
  }
}

export default Child
