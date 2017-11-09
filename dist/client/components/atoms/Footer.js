'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_PureComponent) {
    _inherits(Footer, _PureComponent);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'footer',
                    { className: 'grid-center align-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-5_md-6_sm-12' },
                        _react2.default.createElement(
                            'small',
                            null,
                            _react2.default.createElement(
                                'strong',
                                null,
                                'BirokrasiMudah '
                            ),
                            _react2.default.createElement('br', null),
                            'Membantu pengguna untuk mengurus birokrasi, mulai dari tahap awal hingga tahap akhir, secara detail dan interaktif.',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement('br', null),
                            'Dibuat oleh Yusuf A.H. dan Harry A.M.'
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react.PureComponent);

exports.default = Footer;