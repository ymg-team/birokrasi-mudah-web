'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
    phone: 'fa fa-phone',
    web: 'fa fa-globe',
    facebook: 'fa fa-facebook',
    twitter: 'fa fa-twitter'
};

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { style: props.is_last ? { marginBottom: '2em' } : {}, className: 'grid-center' },
        _react2.default.createElement(
            'div',
            { className: 'col-8_md-12_sm-12' },
            _react2.default.createElement(
                'div',
                { className: 'big-result-card m-0' },
                _react2.default.createElement(
                    'div',
                    { className: 'big-text' },
                    _react2.default.createElement(
                        'div',
                        { className: 'big-text-right' },
                        _react2.default.createElement('i', { className: icons[props.type] }),
                        ' ',
                        props.value,
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'small',
                            null,
                            props.desc
                        )
                    )
                )
            )
        )
    );
};