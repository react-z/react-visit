import Visit from '../lib/Visit'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  visited () {
    console.log('u visited me...')
  }

  render () {

    var divStyle = {
      height: '50rem',
      marginTop: '10rem',
      marginBottom: '10rem',
      backgroundColor: 'darkblue'
    };

    return (
      <div style={divStyle}>
        <Visit visited={ this.visited.bind(this) }  />
      </div>
    )
  }
}


ReactDOM.render(<TestComponent />, document.getElementById('root'))
