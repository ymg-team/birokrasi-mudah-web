'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pushData = pushData;

var _lodash = require('lodash');

// store for result
var store = [];

// push data to the store
function pushData(data) {
    var available = (0, _lodash.find)(store, function (n) {
        return n.id == data.id;
    });

    if (!available) store.push(data);
}

exports.default = store;