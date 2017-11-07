webpackJsonp([0],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pathToRegexp = __webpack_require__(30);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

exports.default = matchPath;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderRoutes = exports.matchRoutes = undefined;

var _matchRoutes2 = __webpack_require__(76);

var _matchRoutes3 = _interopRequireDefault(_matchRoutes2);

var _renderRoutes2 = __webpack_require__(78);

var _renderRoutes3 = _interopRequireDefault(_renderRoutes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.matchRoutes = _matchRoutes3.default;
exports.renderRoutes = _renderRoutes3.default;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(23);

var _reactRouterConfig = __webpack_require__(32);

var _routes = __webpack_require__(81);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
    );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _matchPath = __webpack_require__(18);

var _matchPath2 = _interopRequireDefault(_matchPath);

var _Router = __webpack_require__(77);

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ensure we're using the exact code for default root match
var computeMatch = _Router2.default.prototype.computeMatch;

var matchRoutes = function matchRoutes(routes, pathname) {
  var branch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  routes.some(function (route) {
    var match = route.path ? (0, _matchPath2.default)(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : computeMatch(pathname); // use default "root" match

    if (match) {
      branch.push({ route: route, match: match });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });

  return branch;
};

exports.default = matchRoutes;

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _warning = __webpack_require__(1);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(3);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for putting history on context.
 */
var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;

    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? _react2.default.Children.only(children) : null;
  };

  return Router;
}(_react2.default.Component);

Router.propTypes = {
  history: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
};
Router.contextTypes = {
  router: _propTypes2.default.object
};
Router.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = Router;

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Switch = __webpack_require__(79);

var _Switch2 = _interopRequireDefault(_Switch);

var _Route = __webpack_require__(80);

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var renderRoutes = function renderRoutes(routes) {
  var extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return routes ? _react2.default.createElement(_Switch2.default, null, routes.map(function (route, i) {
    return _react2.default.createElement(_Route2.default, {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        return _react2.default.createElement(route.component, _extends({}, props, extraProps, { route: route }));
      }
    });
  })) : null;
};

exports.default = renderRoutes;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(1);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(3);

var _invariant2 = _interopRequireDefault(_invariant);

var _matchPath = __webpack_require__(18);

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for rendering the first <Route> that matches.
 */
var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, 'You should not use <Switch> outside a <Router>');
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    _react2.default.Children.forEach(children, function (element) {
      if (!_react2.default.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          sensitive = _element$props.sensitive,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
      }
    });

    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(_react2.default.Component);

Switch.contextTypes = {
  router: _propTypes2.default.shape({
    route: _propTypes2.default.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: _propTypes2.default.node,
  location: _propTypes2.default.object
};
exports.default = Switch;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _warning = __webpack_require__(1);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(3);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _matchPath = __webpack_require__(18);

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var isEmptyChildren = function isEmptyChildren(children) {
  return _react2.default.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    (0, _invariant2.default)(router, 'You should not use <Route> or withRouter() outside a <Router>');

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return path ? (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    (0, _warning2.default)(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    (0, _warning2.default)(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? _react2.default.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? _react2.default.Children.only(children) : null : null;
  };

  return Route;
}(_react2.default.Component);

Route.propTypes = {
  computedMatch: _propTypes2.default.object, // private, from <Switch>
  path: _propTypes2.default.string,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  sensitive: _propTypes2.default.bool,
  component: _propTypes2.default.func,
  render: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  location: _propTypes2.default.object
};
Route.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.object.isRequired,
    route: _propTypes2.default.object.isRequired,
    staticContext: _propTypes2.default.object
  })
};
Route.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = Route;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = __webpack_require__(82);

var _Home2 = _interopRequireDefault(_Home);

var _Default = __webpack_require__(85);

var _Default2 = _interopRequireDefault(_Default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    component: _Default2.default,
    routes: [{
        path: '/',
        exact: true,
        component: _Home2.default
    }]
}];

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BigSearch = __webpack_require__(83);

var _BigSearch2 = _interopRequireDefault(_BigSearch);

var _DeckResult = __webpack_require__(87);

var _DeckResult2 = _interopRequireDefault(_DeckResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_BigSearch2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'grid-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-8_col-md-12_col-sm-12 home-help' },
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', onClick: function onClick() {
                                        return modal.show('Cara Menggunakan', 'modal-howtouse');
                                    } },
                                'Cara Menggunakan'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', onClick: function onClick() {
                                        return modal.show('Sumber Data', 'modal-datasource');
                                    } },
                                'Sumber Data'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', onClick: function onClick() {
                                        return modal.show('Kontak kami', 'modal-contact');
                                    } },
                                'Kontak Kami'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'hide', id: 'modal-howtouse' },
                    _react2.default.createElement(
                        'article',
                        null,
                        _react2.default.createElement(
                            'p',
                            null,
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum neque maximus lorem tempor sodales. Vestibulum a convallis nisi. Sed fringilla ante elit, quis rhoncus nibh congue non. Donec mollis lorem interdum dolor feugiat lacinia. Nullam eleifend tempor scelerisque. Ut aliquet erat vitae libero sodales, in egestas eros molestie. Praesent tristique nisi nec leo placerat tincidunt. Sed posuere augue in efficitur dapibus. Proin et purus sit amet nulla tincidunt lobortis eget in quam. Praesent tempor tempor pretium. Sed ornare sit amet augue sit amet convallis. Nulla tincidunt mi nulla, in scelerisque sem hendrerit non. Donec eget velit pretium dolor hendrerit malesuada tincidunt a metus. Morbi varius tellus lectus, in feugiat magna rutrum vel. Aliquam ultrices leo vitae ante maximus venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Donec felis dui, dignissim quis ornare ac, ultricies nec dolor. In sollicitudin risus nec ligula sagittis aliquam. Integer tempus molestie elit, aliquam posuere ipsum. Ut nec tristique enim, in consequat tellus. Quisque convallis volutpat elit sed ultrices. Donec ut facilisis dolor. Nulla fringilla est sem, non varius odio cursus et.   '
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'hide', id: 'modal-datasource' },
                    _react2.default.createElement(
                        'article',
                        null,
                        'this is data source'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'hide', id: 'modal-contact' },
                    _react2.default.createElement(
                        'article',
                        null,
                        'this is kontak'
                    )
                ),
                _react2.default.createElement('div', { 'class': 'm-lg' }),
                _react2.default.createElement(_DeckResult2.default, {
                    title: 'Pencarian Populer',
                    subtitle: 'Berikut adalah beberapa keperluan yang sering dicari oleh pengunjung.',
                    showmore: true
                })
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BigSearchRecomendation = __webpack_require__(84);

var _BigSearchRecomendation2 = _interopRequireDefault(_BigSearchRecomendation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bigsearch = function (_Component) {
    _inherits(Bigsearch, _Component);

    function Bigsearch() {
        _classCallCheck(this, Bigsearch);

        return _possibleConstructorReturn(this, (Bigsearch.__proto__ || Object.getPrototypeOf(Bigsearch)).apply(this, arguments));
    }

    _createClass(Bigsearch, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: 'main bigsearch' },
                _react2.default.createElement(
                    'div',
                    { className: 'grid' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-3 logo' },
                        ' ',
                        _react2.default.createElement(
                            'a',
                            { href: 'home.html', title: 'Logo Birokrasi Mudah' },
                            _react2.default.createElement('img', { src: '/images/whitelogo.png' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement('div', { className: 'm-lg' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'grid-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-8_md-12_sm-12' },
                            _react2.default.createElement(
                                'h2',
                                { style: { fontWeight: 300 } },
                                'Saya berada dari Kabupaten/Kota',
                                ' ',
                                _react2.default.createElement(
                                    'select',
                                    { className: 'home-select-white' },
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        'Bekasi'
                                    )
                                ),
                                _react2.default.createElement('br', null),
                                'dan ingin ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'mengurus...'
                                )
                            ),
                            _react2.default.createElement(
                                'form',
                                { className: 'form-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-control', style: { position: 'relative' } },
                                    _react2.default.createElement(
                                        'i',
                                        { className: 'fa fa-search icon-home-search' },
                                        ' '
                                    ),
                                    _react2.default.createElement('input', { className: 'input-lg input-outline-white input-home-search', id: 'big-search-input', type: 'text', placeholder: 'Apa yang ingin anda urus ?' }),
                                    _react2.default.createElement(
                                        'small',
                                        null,
                                        'contoh: membuat surat nikah, perpanjang STNK, dll'
                                    ),
                                    _react2.default.createElement(_BigSearchRecomendation2.default, null)
                                )
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'm-lg' })
                )
            );
        }
    }]);

    return Bigsearch;
}(_react.Component);

exports.default = Bigsearch;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recomendation = function (_PureComponent) {
    _inherits(Recomendation, _PureComponent);

    function Recomendation() {
        _classCallCheck(this, Recomendation);

        return _possibleConstructorReturn(this, (Recomendation.__proto__ || Object.getPrototypeOf(Recomendation)).apply(this, arguments));
    }

    _createClass(Recomendation, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'deck-result', id: 'bigsearch-recomendation' },
                _react2.default.createElement(
                    'div',
                    { className: 'deck-result-content bg-white', style: { padding: 0 } },
                    _react2.default.createElement('div', { className: 'grid', id: 'bigsearch-recomendation-result' })
                )
            );
        }
    }]);

    return Recomendation;
}(_react.PureComponent);

exports.default = Recomendation;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultLayout = function (_PureComponent) {
    _inherits(DefaultLayout, _PureComponent);

    function DefaultLayout() {
        _classCallCheck(this, DefaultLayout);

        return _possibleConstructorReturn(this, (DefaultLayout.__proto__ || Object.getPrototypeOf(DefaultLayout)).apply(this, arguments));
    }

    _createClass(DefaultLayout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper', id: 'wrapper' },
                    (0, _reactRouterConfig.renderRoutes)(this.props.route.routes)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'modal', id: 'modal' },
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
                                    { className: 'modal-title' },
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'this is title of modal'
                                    ),
                                    _react2.default.createElement('button', { className: 'btn-modal-close btn btn-white fa fa-close', onClick: function onClick() {
                                            return modal.close();
                                        }, title: 'Tampilkan berikutnya', type: 'button', style: { marginLeft: '1.5em' } })
                                ),
                                _react2.default.createElement('div', { className: 'modal-content' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DefaultLayout;
}(_react.PureComponent);

exports.default = DefaultLayout;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Subtitle = __webpack_require__(88);

var _Subtitle2 = _interopRequireDefault(_Subtitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeckResult = function (_Component) {
    _inherits(DeckResult, _Component);

    function DeckResult() {
        _classCallCheck(this, DeckResult);

        return _possibleConstructorReturn(this, (DeckResult.__proto__ || Object.getPrototypeOf(DeckResult)).apply(this, arguments));
    }

    _createClass(DeckResult, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'deck-result' },
                _react2.default.createElement('div', { className: 'container' }),
                _react2.default.createElement(_Subtitle2.default, {
                    title: this.props.title,
                    subtitle: this.props.subtitle
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'deck-result-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'grid' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-6_sm-12 card-result' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card-result-inside' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'logo' },
                                        ' ',
                                        _react2.default.createElement('img', { src: 'images/logos/polda-metro-jaya.png', title: 'polda metro jaya' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'text' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-title' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'result.html' },
                                                'Cara perpanjang STNK'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-stats' },
                                            'di Polda metro jaya',
                                            _react2.default.createElement('br', null),
                                            'dicari 3400x - oleh 234 pengguna '
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-6_sm-12 card-result' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card-result-inside' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'logo' },
                                        ' ',
                                        _react2.default.createElement('img', { src: 'images/logos/kua.png', title: 'KUA' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'text' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-title' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'result.html' },
                                                'Membuat surat nikah'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-stats' },
                                            'di KUA daerah 1',
                                            _react2.default.createElement('br', null),
                                            'dicari 3400x - oleh 234 pengguna '
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-6_sm-12 card-result' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card-result-inside' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'logo' },
                                        ' ',
                                        _react2.default.createElement('img', { src: 'images/logos/bp2t.png', title: 'KUA' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'text' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-title' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'result.html' },
                                                'Membuat surat izin usaha'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-stats' },
                                            'di KUA daerah 1',
                                            _react2.default.createElement('br', null),
                                            'dicari 3400x - oleh 234 pengguna '
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DeckResult;
}(_react.Component);

exports.default = DeckResult;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: 'grid' },
        _react2.default.createElement(
            'div',
            { className: 'col-12' },
            _react2.default.createElement(
                'div',
                { className: 'subtitle' },
                _react2.default.createElement(
                    'h3',
                    { className: 'title' },
                    props.title
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    props.subtitle,
                    '.'
                )
            )
        )
    );
};

/***/ })

},[33]);