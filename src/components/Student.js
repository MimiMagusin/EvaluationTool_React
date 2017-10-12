import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
//import updateStudent from '../actions/students/update'
import { Link } from 'react-router'
//import './StudentItem.css'


export class Student extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    batch: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
    currentEvaluation: PropTypes.string,
  }
  render() {
    const { _id, firstName, lastName, profilePicture, currentEvaluation, batch } = this.props

    return(
      <article className="Student">
        <h1>
          {profilePicture}
          <Link to={`/students/${_id}`}>{firstName} {lastName}</Link> <br />
          {batch}
          {currentEvaluation}
        </h1>
      </article>
    )
  }
}
