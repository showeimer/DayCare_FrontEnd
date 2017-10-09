import React, {Component} from 'react'
import styled from 'styled-components'

// Imported Styles:
import '../styles/global.css'
// Imported Images:
import pencil from '../styles/images/pencil.png'
import dele from '../styles/images/dele.png'



const Div = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background: #fff;
  margin-bottom: 20px;
  h1{
    color: #000;
  }
  img{

  }
`
const Modify = styled.div`
  display: flex;
  align-items: center;
`
const Edit = styled.span`
  height: 30px;
  width: 30px;
  background: url(${pencil}) no-repeat;
  background-position: center;
  cursor: pointer;
`
const Delete = styled.span`
  height: 30px;
  width: 30px;
  background: url(${dele}) no-repeat;
  background-position: center;
  margin: 10px;
  cursor: pointer;
`


class Child extends Component {

  render(){
    return(
      <Div>
        <img src="http://fillmurray.com/50/50"></img>
        <h1>{this.props.child.firstname} {this.props.child.lastname}</h1>
        <Modify>
          <Edit></Edit>
          <Delete></Delete>
        </Modify>
      </Div>
    )
  }
}

export default Child
