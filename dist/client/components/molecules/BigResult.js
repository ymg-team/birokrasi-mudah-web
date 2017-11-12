'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SubtitleResult = require('../atoms/SubtitleResult');

var _SubtitleResult2 = _interopRequireDefault(_SubtitleResult);

var _CardMap = require('../atoms/BigResult/CardMap');

var _CardMap2 = _interopRequireDefault(_CardMap);

var _CardStep = require('../atoms/BigResult/CardStep');

var _CardStep2 = _interopRequireDefault(_CardStep);

var _CardContact = require('../atoms/BigResult/CardContact');

var _CardContact2 = _interopRequireDefault(_CardContact);

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
            var _props = this.props,
                requirement = _props.requirement,
                mechanism = _props.mechanism,
                contacts = _props.contacts,
                location = _props.location,
                title = _props.title;

            return _react2.default.createElement(
                'div',
                { className: 'big-result' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(_SubtitleResult2.default, {
                        title: 'Alamat dan Jadwal',
                        subtitle: 'Berikut alamat dan jadwal untuk bisa melakukan "' + title + '" di Kota Bekasi'
                    }),
                    location && location.length > 0 ? _react2.default.createElement(_CardMap2.default, { location: location }) : _react2.default.createElement(TextNoContent, null),
                    _react2.default.createElement(_SubtitleResult2.default, {
                        title: 'Persyaratan',
                        subtitle: 'Pastikan anda menyiapkan segala persiapan yang ada di bawah ini.'
                    }),
                    requirement && requirement.length > 0 ? requirement.map(function (n, key) {
                        return _react2.default.createElement(_CardStep2.default, {
                            text: n,
                            key: key,
                            checkbox: false,
                            is_last: key == requirement.length - 1
                        });
                    }) : _react2.default.createElement(TextNoContent, null),
                    _react2.default.createElement(_SubtitleResult2.default, {
                        title: 'Mekanisme',
                        subtitle: 'Silahkan mengikuti langkah-langkah dibawah ini untuk "Perpanjangan Surat Tanda Nomor Kendaraan (STNK)".'
                    }),
                    mechanism && mechanism.length > 0 ? mechanism.map(function (n, key) {
                        return _react2.default.createElement(_CardStep2.default, {
                            text: n,
                            key: key,
                            checkbox: false,
                            is_last: key == mechanism.length - 1
                        });
                    }) : _react2.default.createElement(TextNoContent, null),
                    _react2.default.createElement(_SubtitleResult2.default, {
                        title: 'Kontak',
                        subtitle: 'Untuk keterangan lebih lanjut, silahkan hubungi kontak dibawah ini'
                    }),
                    contacts && contacts.length > 0 ? contacts.map(function (n, key) {
                        return _react2.default.createElement(_CardContact2.default, _extends({
                            key: key,
                            icon: true,
                            is_last: key == 2
                        }, n));
                    }) : _react2.default.createElement(TextNoContent, null)
                )
            );
        }
    }]);

    return BigResult;
}(_react.Component);

exports.default = BigResult;


var TextNoContent = function TextNoContent(props) {
    return _react2.default.createElement(
        'p',
        { className: 'align-center', style: { marginBottom: '2em' } },
        'Konten belum di buat admin'
    );
};