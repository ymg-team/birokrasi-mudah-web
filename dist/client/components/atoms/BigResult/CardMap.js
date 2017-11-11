'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardMap = function (_Component) {
    _inherits(CardMap, _Component);

    function CardMap() {
        _classCallCheck(this, CardMap);

        return _possibleConstructorReturn(this, (CardMap.__proto__ || Object.getPrototypeOf(CardMap)).apply(this, arguments));
    }

    _createClass(CardMap, [{
        key: 'render',
        value: function render() {
            var location = this.props.location;

            console.log(location[0]);
            return _react2.default.createElement(
                'div',
                { className: 'grid-center' },
                _react2.default.createElement(Card, _extends({ show_more: location.length > 1 }, location[0])),
                location.length > 1 ? _react2.default.createElement(
                    'div',
                    { id: 'modal-maps', className: 'hide' },
                    _react2.default.createElement(
                        'div',
                        { className: 'grid-center' },
                        location.map(function (n, key) {
                            return _react2.default.createElement(Card, _extends({ key: key }, n));
                        })
                    )
                ) : null
            );
        }
    }]);

    return CardMap;
}(_react.Component);

exports.default = CardMap;


var Card = function Card(props) {
    return _react2.default.createElement(
        'div',
        { className: 'col-8_md-12_sm-12' },
        _react2.default.createElement(
            'div',
            { className: 'big-result-card big-result-card--map' },
            _react2.default.createElement(
                'div',
                { className: 'big-result-card-map-embed' },
                _react2.default.createElement('iframe', { className: 'map', src: '//www.google.com/maps/embed/v1/place?q=' + props.coordinat.lat + ',' + props.coordinat.lng + '&zoom=17&key=AIzaSyALC1j4_h9NQGFcK3wtYHVDxn8fFhwB210' })
            ),
            _react2.default.createElement(
                'div',
                { className: 'big-result-card-map-text' },
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        props.name
                    ),
                    _react2.default.createElement('br', null),
                    props.desc
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Jadwal ',
                        _react2.default.createElement(
                            'span',
                            { className: 'text-red' },
                            '(hari ini tutup)'
                        )
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Senin - Jum\'at :\xA0 ',
                    _react2.default.createElement(
                        'strong',
                        null,
                        '07:00 - 14:00 WIB '
                    ),
                    _react2.default.createElement('br', null),
                    'Sabtu :\xA0',
                    _react2.default.createElement(
                        'strong',
                        null,
                        '07:00 - 15:00 WIB '
                    )
                ),
                props.show_more ? _react2.default.createElement(
                    'a',
                    {
                        className: 'btn btn-outline-white',
                        href: 'javascript:;',
                        onClick: function onClick() {
                            modal.show('Lokasi Tersedia', 'modal-maps');
                        },
                        style: { display: 'block', textDecoration: 'none', textAlign: 'center' } },
                    'Tampilan lokasi lainnya'
                ) : null
            )
        )
    );
};