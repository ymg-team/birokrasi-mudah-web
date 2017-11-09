'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SubtitleResult = require('../atoms/SubtitleResult');

var _SubtitleResult2 = _interopRequireDefault(_SubtitleResult);

var _CardMap = require('../atoms/BigResult/CardMap');

var _CardMap2 = _interopRequireDefault(_CardMap);

var _CardStep = require('../atoms/BigResult/CardStep');

var _CardStep2 = _interopRequireDefault(_CardStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BigResult = function (_Component) {
    _inherits(BigResult, _Component);

    function BigResult() {
        _classCallCheck(this, BigResult);

        return _possibleConstructorReturn(this, (BigResult.__proto__ || Object.getPrototypeOf(BigResult)).apply(this, arguments));
    }

    _createClass(BigResult, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'big-result' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(_SubtitleResult2.default, {
                        title: 'Alamat dan Jandwal',
                        subtitle: 'Berikut alamat dan jadwal untuk bisa melakukan "Perpanjang Surat Tanda Kendaraan Bermotor(STNK) di Kota Bekasi"'
                    }),
                    _react2.default.createElement(_CardMap2.default, null),
                    _react2.default.createElement(_SubtitleResult2.default, {
                        title: 'Persyaratan',
                        subtitle: 'Pastikan anda menyiapkan segala persiapan yang ada di bawah ini.'
                    }),
                    [1, 2].map(function (n, key) {
                        return _react2.default.createElement(_CardStep2.default, {
                            key: key,
                            checkbox: false,
                            is_last: key == 1
                        });
                    }),
                    _react2.default.createElement(_SubtitleResult2.default, {
                        title: 'Mekanisme',
                        subtitle: 'Silahkan mengikuti langkah-langkah dibawah ini untuk "Perpanjangan Surat Tanda Nomor Kendaraan (STNK)".'
                    }),
                    [1, 2, 3, 4, 5, 6, 7, 8].map(function (n, key) {
                        return _react2.default.createElement(_CardStep2.default, {
                            key: key,
                            checkbox: false,
                            is_last: key == 7
                        });
                    }),
                    _react2.default.createElement(_SubtitleResult2.default, {
                        title: 'Mekanisme',
                        subtitle: 'Silahkan mengikuti langkah-langkah dibawah ini untuk "Perpanjangan Surat Tanda Nomor Kendaraan (STNK)".'
                    }),
                    [1, 2, 3].map(function (n, key) {
                        return _react2.default.createElement(_CardStep2.default, {
                            key: key,
                            icon: 'fa fa-phone',
                            is_last: key == 2
                        });
                    })
                )
            );
        }
    }]);

    return BigResult;
}(_react.Component);

exports.default = BigResult;