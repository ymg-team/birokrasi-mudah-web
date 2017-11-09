'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = require('./containers/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Hasil = require('./containers/Hasil');

var _Hasil2 = _interopRequireDefault(_Hasil);

var _NotFound = require('./containers/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Default = require('./layouts/Default');

var _Default2 = _interopRequireDefault(_Default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    component: _Default2.default,
    routes: [{
        path: '/',
        exact: true,
        component: _Home2.default
    }, {
        path: '/hasil/:title',
        exact: true,
        component: _Hasil2.default
    }, {
        path: '*',
        exact: true,
        component: _NotFound2.default
    }]
}];