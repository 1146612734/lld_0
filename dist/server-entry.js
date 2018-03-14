module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable import/no-unresolved */
module.exports = __webpack_require__(13)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(12);

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})(); /*与业务逻辑无关，存储一些纯展示的一些变量*/


var AppState = (_class = function () {
  function AppState() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { count: 0, name: 'lld' },
        count = _ref.count,
        name = _ref.name;

    _classCallCheck(this, AppState);

    _initDefineProp(this, 'count', _descriptor, this);

    _initDefineProp(this, 'name', _descriptor2, this);

    this.count = count;
    this.name = name;
  }

  AppState.prototype.add = function add() {
    this.count += 1;
  };

  AppState.prototype.changeName = function changeName(name) {
    this.name = name;
  };

  AppState.prototype.toJson = function toJson() {
    return {
      count: this.count,
      name: this.name
    };
  };

  AppState.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  _createClass(AppState, [{
    key: 'msg',
    get: function get() {
      return this.name + ' say count is ' + this.count;
    }
  }]);

  return AppState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'count', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'name', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'msg', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'msg'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'add', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'add'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeName', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'changeName'), _class.prototype)), _class);

//const appState = new AppState()

exports.default = AppState;
(0, _mobx.autorun)(function () {
  //console.log(appState.msg)
});

// setInterval(() => {
//   //appState.add()
// }, 1000)

//export default appState

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppState, 'AppState', 'D:/my-app/webpack-demos/lld_0/client/store/app-state.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.createStoreMap = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _mobxReact = __webpack_require__(4);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

//让mobx在服务端渲染的时候不会重复数据变换
(0, _mobxReact.useStaticRendering)(true);

//{appStore: xxx}

var _default = function _default(stores, routerContext, url) {
  return _react2.default.createElement(
    _mobxReact.Provider,
    stores,
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { context: routerContext, location: url },
      _react2.default.createElement(_App2.default, null)
    )
  );
};

exports.default = _default;
exports.createStoreMap = _store.createStoreMap;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'D:/my-app/webpack-demos/lld_0/client/server-entry.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _router = __webpack_require__(8);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})(); /**
       *
       * @authors Your Name (you@example.org)
       * @date    2018-01-08 16:31:26
       * @version $Id$
       */

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  App.prototype.componentDidMount = function componentDidMount() {
    // do something
  };

  App.prototype.render = function render() {
    return [_react2.default.createElement(
      'div',
      { key: 'banner' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        '\u9996\u9801'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/detail' },
        '\u8A73\u60C5\u9801'
      )
    ), _react2.default.createElement(_router2.default, { key: 'routes' })];
  };

  App.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return App;
}(_react2.default.Component);
/*export default () => {
 return(
  <div>This is App33</div>
 )
}*/
//export default () => <div>This is App33</div>


exports.default = App;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', 'D:/my-app/webpack-demos/lld_0/client/views/App.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _index = __webpack_require__(9);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(15);

var _index4 = _interopRequireDefault(_index3);

var _apiTest = __webpack_require__(16);

var _apiTest2 = _interopRequireDefault(_apiTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})(); /**
       *
       * @authors Your Name (you@example.org)
       * @date    2018-01-29 18:24:45
       * @version $Id$
       */


var _default = function _default() {
  return [_react2.default.createElement(_reactRouterDom.Route, { path: '/', render: function render() {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/list' });
    }, exact: true, key: 'first' }), _react2.default.createElement(_reactRouterDom.Route, { path: '/list', component: _index2.default, key: 'list' }), _react2.default.createElement(_reactRouterDom.Route, { path: '/detail', component: _index4.default, key: 'detail' }), _react2.default.createElement(_reactRouterDom.Route, { path: '/test', component: _apiTest2.default, key: 'test' })];
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'D:/my-app/webpack-demos/lld_0/client/config/router.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(4);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(11);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _appState = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})(); /**
       *
       * @authors lld (you@example.org)
       * @date    2018-01-29 17:34:00
       * @version $Id$
       */


var TopicList = (_dec = (0, _mobxReact.inject)('appState'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(TopicList, _React$Component);

  function TopicList() {
    _classCallCheck(this, TopicList);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.changeName = _this.changeName.bind(_this);
    return _this;
  }

  TopicList.prototype.componentDidMount = function componentDidMount() {
    // do something here
  };

  TopicList.prototype.asyncBootstrap = function asyncBootstrap() {
    var _this2 = this;

    return new Promise(function (resolve) {
      setTimeout(function () {
        _this2.props.appState.count = 3;
        resolve(true);
      });
    });
  };

  TopicList.prototype.changeName = function changeName(event) {
    //this.props.appState.name = event.target.value
    this.props.appState.changeName(event.target.value);
  };

  TopicList.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement('meta', { name: 'description', content: 'This is description' }),
        _react2.default.createElement(
          'title',
          null,
          'This is topic list'
        )
      ),
      _react2.default.createElement('input', { type: 'text', onChange: this.changeName }),
      _react2.default.createElement(
        'span',
        null,
        this.props.appState.msg
      )
    );
  };

  TopicList.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return TopicList;
}(_react2.default.Component)) || _class) || _class);
exports.default = TopicList;


TopicList.propTypes = {
  appState: _propTypes2.default.instanceOf(_appState.AppState)
};
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TopicList, 'TopicList', 'D:/my-app/webpack-demos/lld_0/client/views/topic-list/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require, import/no-mutable-exports */

if (true) {
  module.exports = __webpack_require__(14);
} else {
  module.exports = require('./patch.dev');
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = null;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})(); /**
       *
       * @authors Your Name (you@example.org)
       * @date    2018-01-29 18:09:55
       * @version $Id$
       */


var TopicDetail = function (_React$Component) {
  _inherits(TopicDetail, _React$Component);

  function TopicDetail() {
    _classCallCheck(this, TopicDetail);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  TopicDetail.prototype.componentDidMount = function componentDidMount() {
    // do something here
  };

  TopicDetail.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      'This is topic detail'
    );
  };

  TopicDetail.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return TopicDetail;
}(_react2.default.Component);

exports.default = TopicDetail;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TopicDetail, 'TopicDetail', 'D:/my-app/webpack-demos/lld_0/client/views/topic-detail/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

/*eslint-disable*/
var TestApi = function (_React$Component) {
  _inherits(TestApi, _React$Component);

  function TestApi() {
    _classCallCheck(this, TestApi);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  TestApi.prototype.getTopics = function getTopics() {
    _axios2.default.get('api/topics').then(function (resp) {
      console.log(resp);
    }).catch(function (err) {
      console.log(err);
    });
  };

  TestApi.prototype.login = function login() {
    _axios2.default.post('/api/user/login', {
      accessToken: 'bcd80626-1f73-416e-92ae-1d7a6189156c'
    }).then(function (resp) {
      console.log(resp);
    }).catch(function (err) {
      console.log(err);
    });
  };

  TestApi.prototype.markAll = function markAll() {
    _axios2.default.post('/api/message/mark_all?needAccessToken=true').then(function (resp) {
      console.log(resp);
    }).catch(function (err) {
      console.log(err);
    });
  };

  TestApi.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'button',
        { onClick: this.getTopics },
        'topics'
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.login },
        'login'
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.markAll },
        'markAll'
      )
    );
  };

  TestApi.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return TestApi;
}(_react2.default.Component);
/*eslint-enable*/


exports.default = TestApi;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TestApi, 'TestApi', 'D:/my-app/webpack-demos/lld_0/client/views/test/api-test.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.createStoreMap = exports.AppState = undefined;

var _appState = __webpack_require__(5);

var _appState2 = _interopRequireDefault(_appState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})(); /**
       *
       * @authors Your Name (you@example.org)
       * @date    2018-01-29 18:24:03
       * @version $Id$
       */

var AppState = exports.AppState = _appState2.default;

var _default = {
  AppState: AppState
};
exports.default = _default;
var createStoreMap = exports.createStoreMap = function createStoreMap() {
  return {
    appState: new AppState()
  };
};
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppState, 'AppState', 'D:/my-app/webpack-demos/lld_0/client/store/store.js');
  reactHotLoader.register(createStoreMap, 'createStoreMap', 'D:/my-app/webpack-demos/lld_0/client/store/store.js');
  reactHotLoader.register(_default, 'default', 'D:/my-app/webpack-demos/lld_0/client/store/store.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ })
/******/ ]);