'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: 'col-6_sm-12 card-result' },
        _react2.default.createElement(
            'div',
            { className: 'card-result-inside' },
            _react2.default.createElement(
                'div',
                { className: 'logo' },
                _react2.default.createElement('img', { src: props.logo, title: props.department })
            ),
            _react2.default.createElement(
                'div',
                { className: 'text' },
                _react2.default.createElement(
                    'div',
                    { className: 'text-title' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/hasil/' + props.title.replace(/ /g, '-') + '-' + props.id },
                        props.title
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'text-stats' },
                    'di ',
                    props.department,
                    _react2.default.createElement('br', null),
                    'dicari 3400x - oleh 234 pengguna '
                )
            )
        )
    );
};