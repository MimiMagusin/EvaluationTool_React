import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import BatchesContainer from './BatchesContainer'

chai.use(chaiEnzyme())

describe('<BatchesContainer />', () => {
  const container = shallow(<BatchesContainer batches={[]} />)

  it('is wrapped in a div with class name "batches"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('batches')
  })
})
