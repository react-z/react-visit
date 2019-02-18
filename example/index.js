import Visit from '../src/Visit'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  handleVisit () {
    console.log('u visited me...')
  }

  handleLeave () {
    console.log('u left me...')
  }

  render () {

    let visitStyle = {
       position: 'absolute',
       backgroundColor: 'pink',
       width: '100%',
       bottom: '20rem',
       height: '10rem'
    }

    var divStyle = {
      height: '150rem',
      marginTop: '10rem',
      backgroundColor: 'darkblue',
      position: 'relative'
    };

    return (
      <div style={divStyle}>
        <Visit visitStyle={visitStyle}
               onVisit={ () => this.handleVisit() }
               onLeave={ () => this.handleLeave() }  />
      </div>
    )
  }
}


ReactDOM.render(<TestComponent />, document.getElementById('root'))
