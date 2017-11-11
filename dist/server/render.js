'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _routes = require('../client/routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactRouter = require('react-router');

var _reactRouterConfig = require('react-router-config');

var _webpackAssets = require('../../config/webpack-assets');

var _webpackAssets2 = _interopRequireDefault(_webpackAssets);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next) {
    var context = {};
    var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRouter.StaticRouter,
        {
            location: req.url,
            context: context },
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
    ));
    if (context.url) {
        res.status(500).end('internal server error');
    } else {
        //render html + preloaded state
        res.send(renderHtml(html, {}));
    }
};

function renderHtml(html) {
    var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return ('\n        <!DOCTYPE HTML>\n        <html>\n        <head>\n            <meta charSet="UTF-8" />\n            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />\n            <meta httpEquiv="x-ua-compatible" content="ie=edge" />\n            <link href="/css/style.css" rel="stylesheet">\n            <link href="/libraries/font-awesome/css/font-awesome.min.css" rel="stylesheet">\n            <link rel="manifest" href="/manifest.json">\n            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700" rel="stylesheet">\n            <link rel="shortcut icon" href="/images/favicon.png">\n            ' + _reactHelmet2.default.rewind().title.toString() + '\n            ' + _reactHelmet2.default.rewind().meta.toString() + '\n            ' + _reactHelmet2.default.rewind().link.toString() + '\n        </head>\n        <body>\n            <div id="app">' + html + '</div>\n            <script src="/js/app.min.js"></script>\n            <script src="' + _webpackAssets2.default.vendor.js + '"></script>\n            <script src="' + _webpackAssets2.default.app.js + '"></script>\n        </body>\n        </html>\n    ').replace(/\s\s+/g, '');
}