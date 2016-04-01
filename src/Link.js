import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Navigate } from './Navigate'

class Link extends Component {

  static get defaultProps () {
    return {
      linkAction: undefined,
      onClick: function () {}
    }
  }

  navigate () {

    if(this.props.to === undefined){
      console.error('Error: prop to is undefined, please define a to path and an optional action')
      return
    }

    if(this.props.linkAction === undefined){
      browserHistory.push(this.props.to)
    } else {
      this.props.dispatch( fetchNavigate(this.props.linkAction, this.props.to) )
    }
    this.props.onClick()

  }

  render() {
    let style = { cursor: 'pointer' }

    return (
      <a style={style} onClick={ () => this.navigate() }>
        { this.props.children }
      </a>
    )
  }
}

export default connect()(Link)
