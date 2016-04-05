# react-visit

a react component which notifies when it has been visited on the page

[![npm version](https://badge.fury.io/js/react-visit.svg)](https://badge.fury.io/js/react-visit)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Install

`npm install react-visit --save`

## Usage

place visit component inside your componet, now you can detect when your component has been visited,
and initiate some actions on visited event.

```jsx
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import Visit from 'react-visit'

class TestComponent extends Component {

  visited () {
    console.log('u visited me...')
  }

  render () {

    var divStyle = {
      height: '100rem',
    };

    return (
      <div style={divStyle}>
        <Visit visited={ this.visited.bind(this) }  />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))

```

## Versions

## Props

- `visited()``

function to call when the component has been visited. This runs when the visit component is visible in the viewport.

## Development
    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
