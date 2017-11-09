'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _reactRouterConfig = require('react-router-config');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
    );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));