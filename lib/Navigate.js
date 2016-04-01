'use strict';

var _reactRouterRedux = require('react-router-redux');

function Navigate(action, to) {
  return function (dispatch) {
    return dispatch(action()).then(function () {
      return dispatch((0, _reactRouterRedux.push)(to));
    });
  };
}

module.exports = Navigate;