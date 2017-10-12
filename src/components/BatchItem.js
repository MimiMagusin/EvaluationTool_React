import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
//import updateBatch from '../actions/batches/update'
import { Link } from 'react-router'
//import './BatchItem.css'


export class BatchItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    //onChange: PropTypes.func.isRequired,
  }
  render() {
    const { _id, number, startDate, endDate } = this.props

    return(
      <article className="BatchItem">
        <h1>
          <Link to={`/batches/${_id}`}>Batch #{number}</Link> <br />
          {startDate} - {endDate}
        </h1>
      </article>
    )
  }
}

//const mapDispatchToProps = { onChange: updateBatch }

//export default connect(null, mapDispatchToProps)(BatchItem)
