import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Imported Styles:
import '../styles/global.css'

const Roster = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background: #fff;
  margin-bottom: 20px;
  h1{
    text-align: center;
    color: #000;
  }
  img{

  }
`
const GroupList = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  margin-bottom: 20px;
  h1{
    padding-right: 50px;
    width: 100%;
    text-align: center;
    color: #000;
  }
`
const Modify = styled.div`
  display: flex;
  align-items: center;
`

class Child extends Component {

  render(){

    if (!this.props.groupChild) {
      return (
        <Roster>
          <img src="http://fillmurray.com/50/50" />
          <h1>{this.props.child.firstName} {this.props.child.lastName}</h1>
          <Modify>
            {this.props.children}
          </Modify>
        </Roster>
      )
    }
    else {
      return (
        <Link to={`/manage/reports/${this.props.child.id}`}>
          <GroupList>
              <img src="http://fillmurray.com/50/50" />
              <h1>{this.props.child.firstName} {this.props.child.lastName}</h1>
          </GroupList>
        </Link>
      )
    }
  }
}

export default Child
