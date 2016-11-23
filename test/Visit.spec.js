import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Visit from '../src/Visit'

test('Visit component', (t) => {
  setupJsdom()

  const testVisit = () => {
    console.log('just visiting...')
  }

  const testLeave = () => {
    console.log('just leaving...')
  }

  const component = shallow(<Visit />)
  const wrapper = mount(<Visit onVisit={testVisit} onLeave={testLeave} />)

  t.equal(
    component.find('span').text(), '', 'the visit component has no text'
  )

  t.equal(
    wrapper.props().onVisit, testVisit, 'the visit component has an onVisit prop'
  )

  t.equal(
    wrapper.props().onLeave, testLeave, 'the visit component has an onLeave prop'
  )

  t.end()
});
