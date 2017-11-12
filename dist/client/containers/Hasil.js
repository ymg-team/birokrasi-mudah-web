'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('../components/atoms/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Helmet = require('../components/atoms/Helmet');

var _Helmet2 = _interopRequireDefault(_Helmet);

var _BigResult = require('../components/molecules/BigResult');

var _BigResult2 = _interopRequireDefault(_BigResult);

var _apiCaller = require('../../utils/apiCaller');

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _lodash = require('lodash');

var _result = require('../store/result');

var _result2 = _interopRequireDefault(_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// store


var Hasil = function (_Component) {
    _inherits(Hasil, _Component);

    function Hasil() {
        _classCallCheck(this, Hasil);

        var _this = _possibleConstructorReturn(this, (Hasil.__proto__ || Object.getPrototypeOf(Hasil)).call(this));

        _this.state = {
            result: null
        };
        return _this;
    }

    _createClass(Hasil, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var title = this.props.match.params.title;

            var titlearr = title.split('-');
            var id = titlearr[titlearr.length - 1];
            // check data available on store
            var result = (0, _lodash.find)(_result2.default, function (n) {
                return n.id == id;
            });

            if (result) {
                // set result data from store
                this.setState({ result: result });
            } else {
                // fetch data
                this.fetchData(id);
            }
        }
    }, {
        key: 'fetchData',
        value: function fetchData(id) {
            var _this2 = this;

            (0, _apiCaller2.default)('get', '/api/hasil/' + id).then(function (result) {
                if (result.status == 200) (0, _result.pushData)(result);
                _this2.setState({ result: result });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = this.props.match.params.title;

            var titlearr = title.split('-');
            var id = titlearr[titlearr.length - 1];
            delete titlearr[titlearr.length - 1];
            title = titlearr.join(' ');

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Helmet2.default, {
                    title: title
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
                                    title
                                ),
                                !this.state.result ? 'Sedang memproses data...' : _react2.default.createElement(
                                    'p',
                                    null,
                                    'Update 34 OKtober 2017, oleh ',
                                    this.state.result.department
                                )
                            ),
                            !this.state.result ? null : _react2.default.createElement('div', { className: 'align-center', style: { padding: '1em 0', display: 'block' } })
                        )
                    )
                ),
                !this.state.result ? null : _react2.default.createElement(_BigResult2.default, _extends({ title: title }, this.state.result))
            );
        }
    }]);

    return Hasil;
}(_react.Component);

exports.default = Hasil;