import { push } from 'react-router-redux'

function Navigate(action, to) {
  return dispatch => {
    return dispatch(action())
      .then(function() {
        return dispatch(push(to))
      })
  }
}

module.exports = Navigate
