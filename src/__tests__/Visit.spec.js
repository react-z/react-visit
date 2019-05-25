/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Visit from '../Visit'

test('Visit renders correctly and matches snapshot', () => {
  const handleVisit = jest.fn()
  const handleLeave = jest.fn()

  let visitStyle = {
    position: 'absolute',
    visibility: 'hidden',
    width: '100%',
    marginTop: '-10rem',
    height: '10rem'
 }

  const component = renderer.create(
    <Visit
      visitStyle={visitStyle}
      onVisit={handleVisit}
      onLeave={handleLeave} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Visit renders the correct elements and props', () => {
  const handleVisit = jest.fn()
  const handleLeave = jest.fn()

  let visitStyle = {
    position: 'absolute',
    visibility: 'hidden',
    width: '100%',
    marginTop: '-10rem',
    height: '10rem'
 }

 const wrapper = shallow(
    <Visit
      className='visit'
      visitStyle={visitStyle}
      onVisit={handleVisit}
      onLeave={handleLeave} />
  )

  expect(wrapper.instance().props.visitStyle).toEqual(visitStyle)
  expect(wrapper.instance().props.onVisit).toEqual(handleVisit)
  expect(wrapper.instance().props.onLeave).toEqual(handleLeave)
  expect(wrapper.instance().props.className).toEqual('visit')

  expect(wrapper.find('span').length).toEqual(1)
  expect(wrapper.find('span').text()).toEqual('')
  expect(wrapper.find('span').props().className).toEqual('visit')

  setTimeout(() => {
    expect(handleVisit).toBeCalled();
  }, 0)

  // console.log(wrapper.debug())
})
