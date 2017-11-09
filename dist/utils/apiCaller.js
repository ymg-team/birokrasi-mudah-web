'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = apiCaller;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _http = require('../../config/http');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function apiCaller() {
    var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'get';
    var endpoint = arguments[1];
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return new Promise(function (resolve) {
        _superagent2.default[method.toLowerCase()](endpoint).query(params.query || {}).end(function (err, res) {
            var json = void 0;
            // error
            if (err) json = (0, _http.jsonResponse)(500);
            // get response
            json = res.body;

            resolve(json);
        });
    });
}