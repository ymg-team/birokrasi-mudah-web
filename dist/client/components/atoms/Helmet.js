'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _stringManager = require('string-manager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function (_PureComponent) {
    _inherits(Helmet, _PureComponent);

    function Helmet() {
        _classCallCheck(this, Helmet);

        return _possibleConstructorReturn(this, (Helmet.__proto__ || Object.getPrototypeOf(Helmet)).apply(this, arguments));
    }

    _createClass(Helmet, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                description = _props.description,
                type = _props.type,
                image = _props.image,
                url = _props.url,
                script = _props.script,
                link = _props.link;

            return _react2.default.createElement(_reactHelmet2.default, {
                title: (0, _stringManager.toCamelCase)(title),
                meta: [{ 'name': 'description', 'content': description }, { 'property': 'og:type', 'content': type }, { 'property': 'og:title', 'content': (0, _stringManager.toCamelCase)(title) }, { 'property': 'og:url', 'content': url }, { 'property': 'og:image', 'content': image }, { 'property': 'og:description', 'content': description }, { 'property': 'twitter:card', 'content': type || 'summarry' }, { 'property': 'twitter:site', 'content': '@byidmore' }, { 'property': 'twitter:title', 'content': title }, { 'property': 'twitter:description', 'content': description }, { 'property': 'twitter:image', 'content': image }],
                script: script,
                link: link
            });
        }
    }]);

    return Helmet;
}(_react.PureComponent);

Helmet.defaultProps = {
    title: 'Birokrasi Mudah',
    description: 'Anda memiliki urusan apa dengan pemerintah, mari kami bantu',
    type: 'article',
    url: 'https://birokrasimuda.idmore.com',
    image: '',
    script: [],
    link: []
};
exports.default = Helmet;