import React, { PureComponent } from 'react'
import Title from '../components/Title'

class BatchesContainer extends PureComponent {
  renderBatch(batch, index) {
    return null // this will come later
  }

  render() {
    return(
      <div className="batches wrapper">
        <header>
          <Title content="Batches" />
        </header>

        <main>
            { this.props.batches.map(this.renderBatch) }
        </main>
      </div>
    )
  }
}

export default BatchesContainer
