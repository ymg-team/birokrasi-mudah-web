'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _render = require('./render');

var _render2 = _interopRequireDefault(_render);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 5000;
var App = (0, _express2.default)();

App.use('/bundle', _express2.default.static(_path2.default.resolve(__dirname + '/../../bundle')));
App.use('/css', _express2.default.static(_path2.default.resolve(__dirname + '/../../public/css')));
App.use('/images', _express2.default.static(_path2.default.resolve(__dirname + '/../../public/images')));
App.use('/js', _express2.default.static(_path2.default.resolve(__dirname + '/../../public/js')));
App.use('/libraries', _express2.default.static(_path2.default.resolve(__dirname + '/../../public/libraries')));
App.use('/api', _api2.default);
App.use('/', _render2.default);

App.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT);
});