import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'
import subscribeToStudentsService from '../actions/students/subscribe'
import Student from './Student'


class StudentIndex extends PureComponent {
  static propTypes = {
    students: PropTypes.array.isRequired,
    fetchStudents: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchStudents()
    this.props.subscribeToStudentsService()
  }

  renderStudent(student, index) {
    return <Student
      key={index} { ...student } />
  }

  render(){
    const { students } = this.props
    if (!students) {
      return (
        <h2> On its way! </h2>
      )
    }

    return(
      <div>
        { this.props.students.map(this.renderStudent.bind(this)) }
      </div>
    )
  }
}

const mapStateToProps = ({ students, }) => {
  return{
    students,
  }
}
const mapDispatchToProps = { fetchStudents, subscribeToStudentsService }

export default connect(mapStateToProps, mapDispatchToProps)(StudentIndex)
