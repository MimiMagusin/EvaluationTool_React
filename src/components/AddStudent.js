import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
//import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import createStudent from '../actions/batches/create'
//import './BatchEditor.css'


class StudentEditor extends PureComponent {
  constructor(props) {
    super()

    const { firstName, lastName, profilePicture, batch } = props

    this.state = {
      firstName: firstName || '',
      lastName: lastName || '',
      profilePicture: profilePicture || '',
      batch,
      errors: {}
    }
  }

  updateFirstName(event) {
    // if (event.keyCode === 13) {
    //   event.preventDefault()
    //   this.refs.summary.medium.elements[0].focus()
    // }
    this.setState({
      firstName: event.target.value
    })
  }
  updateLastName(event) {
    this.setState({
      lastName: event.target.value
    })
  }

  updateProfilePicture(event) {
    this.setState({
      profilePicture: event.target.value
    })
  }

  updateBatch(event) {
    this.setState({
      updateBatch: event.target.value
    })
  }


  // validate() {
  //   const isTitleValid = this.validateTitle()
  //   const isSummaryValid = this.validateSummary()
  //   this.setState({
  //     errors: {
  //       title: isTitleValid ? null : 'The title can not be blank!',
  //       summary: isSummaryValid ? null : 'The summary should be at least 30 characters long!'
  //     }
  //   })
  //   return isTitleValid && isSummaryValid
  // }

  // validateTitle() {
  //   const { title } = this.state
  //   return title && title.length > 0
  // }


  saveStudent() {
    // if (!this.validate()) return

    const {
      firstName,
      lastName,
      profilePicture,
      batch,
    } = this.state

    const student = {
      firstName,
      lastName,
      profilePicture,
      batch,
    }

    this.props.save(student)

    this.setState({
      firstName: '',
      lastName: '',
      profilePicture: '',
      batch: '',
    })
  }

  render() {
    const { errors } = this.state

    return (
      <div className="editor">
        <input
          type="text"
          ref="firstName"
          className="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.updateFirstName.bind(this)} />

        { errors.firstName ? <small className="error">{errors.firstName}</small> : null }

        <input
          type="text"
          ref="lastName"
          className="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.updateLastName.bind(this)} />

        { errors.lastName ? <small className="error">{errors.lastName}</small> : null }

        <input
          type="text"
          ref="profilePicture"
          className="profilePicture"
          placeholder="Photo URL"
          value={this.state.profilePicture}
          onChange={this.updateProfilePicture.bind(this)} />

        <input
          type="number"
          ref="batch"
          className="batch"
          placeholder="batch number"
          value={this.state.batch}
          onChange={this.updateBatch.bind(this)} />



        <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createStudent }

export default connect(null, mapDispatchToProps)(StudentEditor)
