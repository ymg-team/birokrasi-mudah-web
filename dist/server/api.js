'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('../../config/http');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express2.default.Router();

// routes
Router.get('/recommendation', getRecommendation);
Router.get('/hasil/:title', getResult);
Router.get('/popular', getPopular);

exports.default = Router;

// get recomendation by keyword

function getRecommendation(req, res) {
    var keyword = req.query.keyword;

    var smartSearch = require('smart-search');
    var patterns = keyword.split(' ');
    var fields = { keyword: true, id: true };
    var entries = require('../../static_data/recommendation');

    //result
    var results = smartSearch(entries, patterns, fields);
    if (results.length == 0) return res.status(201).json((0, _http.jsonResponse)(204));

    // join with available data
    var availableData = require('../../static_data/results');

    //response recommentaions
    var addedId = [];
    var recommendation = [];
    results.forEach(function (n) {
        if (!addedId.includes(n.entry.id)) {
            addedId.push(n.entry.id);
            recommendation.push((0, _lodash.find)(availableData, function (m) {
                return m.id == n.entry.id;
            }));
        }
    });

    // get data from json
    return res.status(200).json((0, _http.jsonResponse)(200, 'success', { result: recommendation }));
}

// get result by id
function getResult(req, res) {
    var title = req.params.title;

    var titleSplit = title.split('-');
    var id = titleSplit[titleSplit.length - 1];
    var data = void 0,
        result = void 0;

    data = require('../../static_data/results');
    // find data by id
    result = (0, _lodash.find)(data, function (n) {
        return n.id == id;
    });
    if (!result) data = (0, _http.jsonResponse)(204);else data = (0, _http.jsonResponse)(200, 'success', result);

    return res.status(200).json(data);
}

//get popular keyword
function getPopular(req, res) {
    var data = require('../../static_data/popular_search');
    var result = require('../../static_data/results');
    var popular_data = [];
    data.map(function (n, key) {
        popular_data.push((0, _lodash.find)(result, function (m) {
            return m.id == n;
        }));
    });

    res.status(200).json((0, _http.jsonResponse)(200, 'success', { result: popular_data }));
}