'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardResult = function (_PureComponent) {
    _inherits(CardResult, _PureComponent);

    function CardResult() {
        _classCallCheck(this, CardResult);

        return _possibleConstructorReturn(this, (CardResult.__proto__ || Object.getPrototypeOf(CardResult)).apply(this, arguments));
    }

    _createClass(CardResult, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'col-6_sm-12 card-result' },
                _react2.default.createElement(
                    'div',
                    { className: 'card-result-inside' },
                    _react2.default.createElement(
                        'div',
                        { className: 'logo' },
                        _react2.default.createElement('img', { src: this.props.image, title: this.props.title })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'text' },
                        _react2.default.createElement(
                            'div',
                            { className: 'text-title' },
                            _react2.default.createElement(
                                'a',
                                { href: this.props.target },
                                this.props.target
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text-stats' },
                            'di ',
                            this.props.location,
                            _react2.default.createElement('br', null),
                            'dicari ',
                            this.props.count.search,
                            'x - oleh ',
                            this.props.count.user,
                            ' pengguna '
                        )
                    )
                )
            );
        }
    }]);

    return CardResult;
}(_react.PureComponent);

CardResult.propTypes = {
    title: _propTypes2.default.string.isRequired,
    target: _propTypes2.default.string.isRequired,
    location: _propTypes2.default.string.isRequired,
    count: _propTypes2.default.shape({
        search: _propTypes2.default.number,
        user: _propTypes2.default.number
    })
};
exports.default = CardResult;