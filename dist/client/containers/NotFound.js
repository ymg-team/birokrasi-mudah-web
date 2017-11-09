'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('../components/atoms/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Helmet = require('../components/atoms/Helmet');

var _Helmet2 = _interopRequireDefault(_Helmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Helmet2.default, {
            title: 'Halaman Tidak Ditemukan'
        }),
        _react2.default.createElement(_Navbar2.default, null)
    );
};