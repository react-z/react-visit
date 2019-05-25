# react-visit

A react component which notifies when it has been visited on the page, used for infinite scrolling.

[![npm version](https://badge.fury.io/js/react-visit.svg)](https://badge.fury.io/js/react-visit)

## Install

`npm install react-visit --save`

## Usage

Place the Visit component inside a container or component, and you can detect when your component has been visited,
and initiate some actions on the visited event. This is useful for infinite scroll.

```jsx
import Visit from 'react-visit'
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
    /*
    Set a containerElement if you are scrolling in a container/modal
    let containerElement = document.querySelector('.container')
    */

    let visitStyle = {
       position: 'absolute',
       visibility: 'hidden',
       width: '100%',
       marginTop: '-10rem',
       height: '10rem'
    }

    var divStyle = {
      height: '50rem',
      marginTop: '10rem',
      backgroundColor: 'darkblue',
      position: 'relative'
    };

    return (
      <div style={divStyle}>
        { /* some items loaded with infinite scroll */}
        <Visit visitStyle={visitStyle}
               onVisit={ () => this.handleVisit() }
               onLeave={ () => this.handleLeave() } />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
```

## Versions

## Props

- `onVisit()`

function to call when the component has been visited. This runs when the visit component is visible in the viewport.

- `onLeave()`

function to call when the component has been un-visited. This runs when the visit component is no longer visible in the viewport.

- `visitStyle`

Style object to display the visit component, usually you want the visit component hidden, but may want to give it a margin bottom or negative margin bottom margin so it will be triggered early in the case of infinite scroll.

- `containerElement`

The dom element to set the scroll event on, e.g. `document.querySelector('.container')`. If no containerElement is set react-visit will attach the scroll event to window, which is usually what you want unless in the case of a modal.

- `resetVisited`
Public function on the component to call via refs e.g. `this.refs.visit.resetVisited()` if you want to reset the visited state so you can revisit the component, for example after scrolling has added more items.

## Development
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
