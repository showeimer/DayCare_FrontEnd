import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


// Components
import Child from './Child'

// Redux Actions
import { fetchChildren } from '../actions'

// Imported Styles:
import '../styles/global.css'

// Imported Images:
import add from '../styles/images/add.png'



const Div = styled.div`
  width: 82%;
  margin: auto;
`
const H1 = styled.h1`
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin: 30px 0;
`
const Add = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  color: #fff;
  margin-bottom: 20px;
  div{
    background: url(${add}) no-repeat;
    background-size: 35px 35px;
    background-position: center;
    height: 50px;
    width: 50px;
    cursor: pointer;
  }
`

class GroupChildren extends Component {
  componentWillMount(){
    let id = parseInt(this.props.match.params.id)
    this.props.fetchChildren(id)
  }

  renderChildren() {
    let children = [];
    if(this.props.children.length) {
      children = this.props.children.map((child) => {

        return <Child key={child.id} child={child} groupChild={true}/>
      })
    return children;
    }
  }

  render(){
    console.log(this.props.children[0]);
    let group = this.props.children.length > 0 ? this.props.children[0].owner.name : null

    return (
      <Div>
        <H1>{group}</H1>
        {this.renderChildren()}
      </Div>
    )
  }



}

const mapStateToProps = state => {
  console.log(state.groupList.children)
  return {children: state.groupList.children}
}
export default connect(mapStateToProps, { fetchChildren })(GroupChildren)
