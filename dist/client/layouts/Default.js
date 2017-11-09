'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = require('react-router-config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultLayout = function (_PureComponent) {
    _inherits(DefaultLayout, _PureComponent);

    function DefaultLayout() {
        _classCallCheck(this, DefaultLayout);

        return _possibleConstructorReturn(this, (DefaultLayout.__proto__ || Object.getPrototypeOf(DefaultLayout)).apply(this, arguments));
    }

    _createClass(DefaultLayout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper', id: 'wrapper' },
                    (0, _reactRouterConfig.renderRoutes)(this.props.route.routes),
                    _react2.default.createElement(
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
                                    ' ',
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
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'modal', id: 'modal' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'grid' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'modal-title' },
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'this is title of modal'
                                    ),
                                    _react2.default.createElement('button', { className: 'btn-modal-close btn btn-white fa fa-close', onClick: function onClick() {
                                            return modal.close();
                                        }, title: 'Tampilkan berikutnya', type: 'button', style: { marginLeft: '1.5em' } })
                                ),
                                _react2.default.createElement('div', { className: 'modal-content' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DefaultLayout;
}(_react.PureComponent);

exports.default = DefaultLayout;