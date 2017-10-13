import FlatButton from 'material-ui/FlatButton';
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
      // if (!students) {
      //   return (
      //     <h2> On its way! </h2>
      //   )
      // }

    return(
      <div>
        { this.props.students.map(this.renderStudent.bind(this)) }
        <div>
          <FlatButton label="Red" className="red"/>
          <FlatButton label="Green" className="green" />
          <FlatButton label="Yellow" className="yellow"/>
          <input />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ students }, { params }) => {
  const batch = students.reduce((prev, next) => {
    if (next._id === params.studentsId) {
      return next
    }
    return prev
  }, {})

  return {
    ...batch
  }
}

const mapDispatchToProps = { fetchStudents, subscribeToStudentsService }

export default connect(mapStateToProps, mapDispatchToProps)(StudentIndex)
