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

var Recomendation = function (_PureComponent) {
    _inherits(Recomendation, _PureComponent);

    function Recomendation() {
        _classCallCheck(this, Recomendation);

        return _possibleConstructorReturn(this, (Recomendation.__proto__ || Object.getPrototypeOf(Recomendation)).apply(this, arguments));
    }

    _createClass(Recomendation, [{
        key: 'render',
        value: function render() {
            console.log(this.props.loading);
            return _react2.default.createElement(
                'div',
                { className: 'deck-result', id: 'bigsearch-recomendation' },
                _react2.default.createElement(
                    'div',
                    { className: 'deck-result-content bg-white', style: { padding: 0 } },
                    _react2.default.createElement('div', { className: 'grid', id: 'bigsearch-recomendation-result' })
                )
            );
        }
    }]);

    return Recomendation;
}(_react.PureComponent);

exports.default = Recomendation;


var Loading = function Loading() {
    return _react2.default.createElement(
        'div',
        { className: 'col-12 card-result card-result-small' },
        _react2.default.createElement(
            'div',
            { className: 'card-result-inside' },
            'mengamil data...'
        )
    );
};