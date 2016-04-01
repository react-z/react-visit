# react-visit

[![npm version](https://badge.fury.io/js/react-search.svg)](https://badge.fury.io/js/react-search)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Install

`npm install react-visit --save`

## Usage

```jsx
import React, { Component } from 'react'
import Visit from 'react-visit'

class Test extends Component {

  _visited () {
    console.log('our test component is in view.')
  }

  render() {
    return (
      <Visit visited={this._visited.bind(this)} />
    )
  }
}
```

## Versions

## Props

## Development
    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
