'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: 'grid' },
        _react2.default.createElement(
            'div',
            { className: 'col-12' },
            _react2.default.createElement(
                'div',
                { className: 'subtitle' },
                _react2.default.createElement(
                    'h3',
                    { className: 'title' },
                    props.title
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    props.subtitle,
                    '.'
                )
            )
        )
    );
};