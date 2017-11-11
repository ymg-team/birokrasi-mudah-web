'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Subtitle = require('../atoms/Subtitle');

var _Subtitle2 = _interopRequireDefault(_Subtitle);

var _CardDeckResult = require('../atoms/CardDeckResult');

var _CardDeckResult2 = _interopRequireDefault(_CardDeckResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeckResult = function (_Component) {
    _inherits(DeckResult, _Component);

    function DeckResult() {
        _classCallCheck(this, DeckResult);

        return _possibleConstructorReturn(this, (DeckResult.__proto__ || Object.getPrototypeOf(DeckResult)).apply(this, arguments));
    }

    _createClass(DeckResult, [{
        key: 'generateCards',
        value: function generateCards() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'deck-result' },
                _react2.default.createElement('div', { className: 'container' }),
                _react2.default.createElement(_Subtitle2.default, {
                    title: this.props.title,
                    subtitle: this.props.subtitle
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'deck-result-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'grid' },
                            this.props.data.map(function (n, key) {
                                return _react2.default.createElement(_CardDeckResult2.default, _extends({ key: key }, n));
                            })
                        )
                    )
                )
            );
        }
    }]);

    return DeckResult;
}(_react.Component);

exports.default = DeckResult;