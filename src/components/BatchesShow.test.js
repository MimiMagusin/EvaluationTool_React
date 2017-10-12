import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import BatchesShow from './BatchesShow'
import Title from './Title'

chai.use(chaiEnzyme())

describe('<BatchesShow />', () => {
  const container = shallow(<BatchesShow batches={[]} />)

  it('is wrapped in a div with class name "batches"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('batches')
  })
})

describe('<Title />', () => {
  const title = shallow(<Title content="Hello, World" />)

  it('has a wrapping h1 tag', () => {
    expect(title).to.have.tagName('h1')
  })

  it('renders the content', () => {
   expect(title).to.have.text('Hello, World')
 })

})

describe('with a different content prop', () => {
   const title = shallow(<Title content="Something Completely Different!" />)

   it('renders a different title text', () => {
     expect(title).to.have.text('Something Completely Different!')
   })
 })
