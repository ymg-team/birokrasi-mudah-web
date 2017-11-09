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
        { className: 'grid-center' },
        _react2.default.createElement(
            'div',
            { className: 'col-8_md-12_sm-12' },
            _react2.default.createElement(
                'div',
                { className: 'title' },
                _react2.default.createElement(
                    'h2',
                    null,
                    props.title
                ),
                _react2.default.createElement(
                    'small',
                    null,
                    props.subtitle
                )
            )
        )
    );
};