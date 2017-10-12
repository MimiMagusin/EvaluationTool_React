import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'
import subscribeToBatchesService from '../actions/batches/subscribe'
import AddStudent from './AddStudent'


class BatchesShow extends PureComponent {
  static propTypes = {
    student: PropTypes.number,
    fetchStudents: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchBatches()
    this.props.subscribeToBatchesService()
  }

  render(){
    const { number } = this.props
    return(
      <div>
        {...student}
      </div>
    )
  }
}

const mapStateToProps = ({ batches }, { params }) => {
  const batch = batches.reduce((prev, next) => {
    if (next._id === params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...batch
  }
}
const mapDispatchToProps = { fetchBatches, subscribeToBatchesService }

export default connect(mapStateToProps, mapDispatchToProps)(BatchesShow)
