import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import {BatchItem} from './BatchItem'
//import BatchEditor from './BatcheEditor'
import fetchBatches from '../actions/batches/fetch'
import subscribeToBatchesService from '../actions/batches/subscribe'
//import './BatchesContainer.css'

export class BatchesContainer extends PureComponent {
  static propTypes = {
    batches: PropTypes.array.isRequired,
    fetchBatches: PropTypes.func.isRequired,
  }

  componentWillMount() {
    //const {fetchBatches, subscribeToBatchesService, subscribed } = this.props
    this.props.fetchBatches()
    this.props.subscribeToBatchesService()
  }

  renderBatch(batch, index) {
    return <BatchItem
      key={index} { ...batch } />
  }

  render() {
  const { batches} = this.props
    if (!batches) {
      return (
        <h2> Nothing Yet! </h2>
      )
    }

    return(
      <div className="batches wrapper">
        <header>
          <Title content=" All Batches" />
        </header>

        <main>
          { this.props.batches.map(this.renderBatch.bind(this)) }
        </main>
      </div>
    )
  }
}


const mapStateToProps = ({ batches, }) => {
  return{
    batches,
    // subscribed: subscriptions.includes('batches')
  }
}

const mapDispatchToProps = { fetchBatches, subscribeToBatchesService }


export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
