import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './emailvarify.css'
export class Emailvarify extends Component {
  render() {
    return (
      <div>
        <h1>Verification Link Has Been Sent to your email</h1>
        <Link to="/login">Go to Login</Link>
      </div>
    )
  }
}

export default Emailvarify