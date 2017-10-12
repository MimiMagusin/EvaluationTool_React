// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Student from './Student'
import fetchStudents from '../actions/students/fetch'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};


export class StudentShow extends PureComponent {
  static propTypes = {

    students: PropTypes.string.isRequired,
    fetchStudents: PropTypes.func.isRequired,


  }

componentWillMount() {
        this.props.fetchStudents()
      }

renderStudent(student, index) {
    return <Student
      key={index} { ...student } />
  }

render() {
  const { students } = this.props
    return(
      <article className="StudentShow">
        <div>

          <p>{ this.renderStudent(this.props.students[1]) }</p>
          <div>
            <FloatingActionButton style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton style={style}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
        </div>
      </article>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, { fetchStudents })(StudentShow)
