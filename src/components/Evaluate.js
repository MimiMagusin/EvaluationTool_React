import FlatButton from 'material-ui/FlatButton';
import whichColor from './WhichColor'
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

      const redArray = students.filter(function(student){
        return student.currentEvaluation === "red"
      })

      const yellowArray = students.filter(function(student){
        return student.currentEvaluation === "yellow"
      })

      const greenArray = students.filter(function(student){
        return student.currentEvaluation === "green"
      })

      const thisColor = whichColor(redArray, yellowArray, greenArray, students)
      const student = thisColor[Math.floor(Math.random()*(students.length))]

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

const mapStateToProps = ({ students, }) => {
  return{
    students,
  }
}
const mapDispatchToProps = { fetchStudents, subscribeToStudentsService }

export default connect(mapStateToProps, mapDispatchToProps)(StudentIndex)
