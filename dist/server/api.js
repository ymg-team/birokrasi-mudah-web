'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('../../config/http');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express2.default.Router();

// routes
Router.get('/recommendation', getRecommendation);
Router.get('/hasil/:title', getResult);

exports.default = Router;

// static data for demo

function getRecommendation(req, res) {
    var q = req.query.q;

    // get data from json

    var data = require('../../static_data/results');

    data = (0, _http.jsonResponse)(200, 'success', { result: data });
    res.json(data);
}

function getResult(req, res) {
    var title = req.params.title;

    var titleSplit = title.split('-');
    var id = titleSplit[titleSplit.length - 1];
    console.log(id);

    var data = require('../../static_data/results');
    data = (0, _http.jsonResponse)(200, 'success', { result: data });
    res.json(data);
}