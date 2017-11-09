'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('../components/atoms/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Helmet = require('../components/atoms/Helmet');

var _Helmet2 = _interopRequireDefault(_Helmet);

var _BigResult = require('../components/molecules/BigResult');

var _BigResult2 = _interopRequireDefault(_BigResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hasil = function (_Component) {
    _inherits(Hasil, _Component);

    function Hasil() {
        _classCallCheck(this, Hasil);

        return _possibleConstructorReturn(this, (Hasil.__proto__ || Object.getPrototypeOf(Hasil)).apply(this, arguments));
    }

    _createClass(Hasil, [{
        key: 'render',
        value: function render() {
            var title = this.props.match.params.title;

            title = title.split('-');
            var id = title[title.length - 1];
            console.log(id);
            // console.log(title)
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Helmet2.default, {
                    title: 'this is title'
                }),
                _react2.default.createElement(_Navbar2.default, null),
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
                                { className: 'subtitle align-center' },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'title' },
                                    'Cara Perpanjang Surat Tanda Kendaraan Bermotor(STNK) di Kota Bekasi'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Update 34 Februaru 2017, oleh Samsat Kota Bekasi'
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'align-center' },
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { className: 'btn btn-outline-white', href: 'javascript', style: { marginRight: '.5em' }, title: 'Simpan untuk dibuka dikemudian hari' },
                                    ' ',
                                    _react2.default.createElement(
                                        'i',
                                        { className: 'fa fa-save' },
                                        ' '
                                    ),
                                    '\xA0Simpan'
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { className: 'btn btn-outline-white', href: 'javascript', title: 'Download dalam bentuk PDF' },
                                    _react2.default.createElement(
                                        'i',
                                        { className: 'fa fa-download' },
                                        ' '
                                    ),
                                    '\xA0Download'
                                )
                            ),
                            _react2.default.createElement('br', null)
                        )
                    )
                ),
                _react2.default.createElement(_BigResult2.default, null)
            );
        }
    }]);

    return Hasil;
}(_react.Component);

exports.default = Hasil;