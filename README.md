# react-router-redux-link

[![npm version](https://badge.fury.io/js/react-search.svg)](https://badge.fury.io/js/react-search)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Install

`npm install react-router-redux-link --save`

## Usage

```jsx
import React, { Component } from 'react'
import Link from 'react-router-redux-link'
import { fetchAuthorData } from '../../actions/Author'

class Author extends Component {

  render() {
    return (
    	<Link to={`/${this.props.path}`} linkAction={ () => fetchAuthorData(location.origin, this.props.path) } >
          <p>this will link waiting for the redux action first</p>
        </Link>
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
