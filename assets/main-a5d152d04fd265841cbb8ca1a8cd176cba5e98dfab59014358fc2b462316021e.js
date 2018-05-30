/******/
 (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Top App Bar
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Top App Bar into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTopAppBarAdapter = function () {
  function MDCTopAppBarAdapter() {
    _classCallCheck(this, MDCTopAppBarAdapter);
  }

  _createClass(MDCTopAppBarAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the root Element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the root Element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns true if the root Element contains the given class.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Sets the specified inline style property on the root Element to the given value.
     * @param {string} property
     * @param {string} value
     */

  }, {
    key: "setStyle",
    value: function setStyle(property, value) {}

    /**
     * Gets the height of the top app bar.
     * @return {number}
     */

  }, {
    key: "getTopAppBarHeight",
    value: function getTopAppBarHeight() {}

    /**
     * Registers an event handler on the navigation icon element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerNavigationIconInteractionHandler",
    value: function registerNavigationIconInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the navigation icon element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterNavigationIconInteractionHandler",
    value: function deregisterNavigationIconInteractionHandler(type, handler) {}

    /**
     * Emits an event when the navigation icon is clicked.
     */

  }, {
    key: "notifyNavigationIconClicked",
    value: function notifyNavigationIconClicked() {}

    /** @param {function(!Event)} handler */

  }, {
    key: "registerScrollHandler",
    value: function registerScrollHandler(handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "deregisterScrollHandler",
    value: function deregisterScrollHandler(handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /** @return {number} */

  }, {
    key: "getViewportScrollY",
    value: function getViewportScrollY() {}

    /** @return {number} */

  }, {
    key: "getTotalActionItems",
    value: function getTotalActionItems() {}
  }]);

  return MDCTopAppBarAdapter;
}();

exports.default = MDCTopAppBarAdapter;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  FIXED_CLASS: 'mdc-top-app-bar--fixed',
  FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
  SHORT_CLASS: 'mdc-top-app-bar--short',
  SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
  SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed'
};

/** @enum {number} */
var numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};

/** @enum {string} */
var strings = {
  ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
  NAVIGATION_EVENT: 'MDCTopAppBar:nav',
  NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
  ROOT_SELECTOR: '.mdc-top-app-bar',
  TITLE_SELECTOR: '.mdc-top-app-bar__title'
};

exports.strings = strings;
exports.cssClasses = cssClasses;
exports.numbers = numbers;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

exports.default = MDCFoundation;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(1);

var _adapter = __webpack_require__(0);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(2);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCTopAppBarAdapter>}
 */
var MDCTopAppBarBaseFoundation = function (_MDCFoundation) {
  _inherits(MDCTopAppBarBaseFoundation, _MDCFoundation);

  _createClass(MDCTopAppBarBaseFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {number} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }

    /**
     * {@see MDCTopAppBarAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTopAppBarAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTopAppBarAdapter} */{
          hasClass: function hasClass() /* className: string */{},
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          setStyle: function setStyle() /* property: string, value: string */{},
          getTopAppBarHeight: function getTopAppBarHeight() {},
          registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler() /* type: string, handler: EventListener */{},
          deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler() /* type: string, handler: EventListener */{},
          notifyNavigationIconClicked: function notifyNavigationIconClicked() {},
          registerScrollHandler: function registerScrollHandler() /* handler: EventListener */{},
          deregisterScrollHandler: function deregisterScrollHandler() /* handler: EventListener */{},
          registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
          deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
          getViewportScrollY: function getViewportScrollY() {
            return (/* number */0
            );
          },
          getTotalActionItems: function getTotalActionItems() {
            return (/* number */0
            );
          }
        }
      );
    }

    /**
     * @param {!MDCTopAppBarAdapter} adapter
     */

  }]);

  function MDCTopAppBarBaseFoundation( /** @type {!MDCTopAppBarAdapter} */adapter) {
    _classCallCheck(this, MDCTopAppBarBaseFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTopAppBarBaseFoundation.__proto__ || Object.getPrototypeOf(MDCTopAppBarBaseFoundation)).call(this, Object.assign(MDCTopAppBarBaseFoundation.defaultAdapter, adapter)));

    _this.navClickHandler_ = function () {
      return _this.adapter_.notifyNavigationIconClicked();
    };
    return _this;
  }

  _createClass(MDCTopAppBarBaseFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerNavigationIconInteractionHandler('click', this.navClickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterNavigationIconInteractionHandler('click', this.navClickHandler_);
    }
  }]);

  return MDCTopAppBarBaseFoundation;
}(_foundation2.default);

exports.default = MDCTopAppBarBaseFoundation;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _foundation = __webpack_require__(2);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @template F
 */
var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new _foundation2.default());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

exports.default = MDCComponent;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  _createClass(MDCRippleAdapter, [{
    key: "browserSupportsCssVars",

    /** @return {boolean} */
    value: function browserSupportsCssVars() {}

    /** @return {boolean} */

  }, {
    key: "isUnbounded",
    value: function isUnbounded() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceActive",
    value: function isSurfaceActive() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceDisabled",
    value: function isSurfaceDisabled() {}

    /** @param {string} className */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {!EventTarget} target */

  }, {
    key: "containsEventTarget",
    value: function containsEventTarget(target) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerDocumentInteractionHandler",
    value: function registerDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterDocumentInteractionHandler",
    value: function deregisterDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * @param {string} varName
     * @param {?number|string} value
     */

  }, {
    key: "updateCssVariable",
    value: function updateCssVariable(varName, value) {}

    /** @return {!ClientRect} */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /** @return {{x: number, y: number}} */

  }, {
    key: "getWindowPageOffset",
    value: function getWindowPageOffset() {}
  }]);

  return MDCRippleAdapter;
}();

exports.default = MDCRippleAdapter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-menu',
  OPEN: 'mdc-menu--open',
  ANIMATING_OPEN: 'mdc-menu--animating-open',
  ANIMATING_CLOSED: 'mdc-menu--animating-closed',
  SELECTED_LIST_ITEM: 'mdc-list-item--selected'
};

/** @enum {string} */
var strings = {
  ITEMS_SELECTOR: '.mdc-menu__items',
  SELECTED_EVENT: 'MDCMenu:selected',
  CANCEL_EVENT: 'MDCMenu:cancel',
  ARIA_DISABLED_ATTR: 'aria-disabled'
};

/** @enum {number} */
var numbers = {
  // Amount of time to wait before triggering a selected event on the menu. Note that this time
  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
  // animate before closing the menu
  SELECTED_TRIGGER_DELAY: 50,
  // Total duration of menu open animation.
  TRANSITION_OPEN_DURATION: 120,
  // Total duration of menu close animation.
  TRANSITION_CLOSE_DURATION: 75,
  // Margin left to the edge of the viewport when menu is at maximum possible height.
  MARGIN_TO_EDGE: 32,
  // Ratio of anchor width to menu width for switching from corner positioning to center positioning.
  ANCHOR_TO_MENU_WIDTH_RATIO: 0.67,
  // Ratio of vertical offset to menu height for switching from corner to mid-way origin positioning.
  OFFSET_TO_MENU_HEIGHT_RATIO: 0.1
};

/**
 * Enum for bits in the {@see Corner) bitmap.
 * @enum {number}
 */
var CornerBit = {
  BOTTOM: 1,
  CENTER: 2,
  RIGHT: 4,
  FLIP_RTL: 8
};

/**
 * Enum for representing an element corner for positioning the menu.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 *
 * @enum {number}
 */
var Corner = {
  TOP_LEFT: 0,
  TOP_RIGHT: CornerBit.RIGHT,
  BOTTOM_LEFT: CornerBit.BOTTOM,
  BOTTOM_RIGHT: CornerBit.BOTTOM | CornerBit.RIGHT,
  TOP_START: CornerBit.FLIP_RTL,
  TOP_END: CornerBit.FLIP_RTL | CornerBit.RIGHT,
  BOTTOM_START: CornerBit.BOTTOM | CornerBit.FLIP_RTL,
  BOTTOM_END: CornerBit.BOTTOM | CornerBit.RIGHT | CornerBit.FLIP_RTL
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;
exports.CornerBit = CornerBit;
exports.Corner = Corner;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(9);

var _menu = __webpack_require__(16);

var topAppBar = new _index.MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));

// for menu
var menuEl = document.querySelector('#menu');
var menu = new _menu.MDCMenu(menuEl);
var menuButtonEl = document.querySelector('#menu-button');

// Toggle menu open
menuButtonEl.addEventListener('click', function () {
  menu.open = !menu.open;
});

// Listen for selected item
menuEl.addEventListener('MDCMenu:selected', function (evt) {
  var it = evt.detail.item; // get item
  var label = it.title;

  if (label == 'change-lang') document.querySelector('.d-change-lang').click();else jsel(label);
});

// Set Anchor Corner to Bottom End
menu.setAnchorCorner(Corner.BOTTOM_END);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCShortTopAppBarFoundation = exports.MDCFixedTopAppBarFoundation = exports.MDCTopAppBarFoundation = exports.MDCTopAppBarBaseFoundation = exports.MDCTopAppBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _adapter = __webpack_require__(0);

var _adapter2 = _interopRequireDefault(_adapter);

var _component = __webpack_require__(4);

var _component2 = _interopRequireDefault(_component);

var _index = __webpack_require__(10);

var _constants = __webpack_require__(1);

var _foundation = __webpack_require__(3);

var _foundation2 = _interopRequireDefault(_foundation);

var _foundation3 = __webpack_require__(13);

var _foundation4 = _interopRequireDefault(_foundation3);

var _foundation5 = __webpack_require__(14);

var _foundation6 = _interopRequireDefault(_foundation5);

var _foundation7 = __webpack_require__(15);

var _foundation8 = _interopRequireDefault(_foundation7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCTopAppBarBaseFoundation>}
 * @final
 */
var MDCTopAppBar = function (_MDCComponent) {
  _inherits(MDCTopAppBar, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTopAppBar() {
    var _ref;

    _classCallCheck(this, MDCTopAppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTopAppBar.__proto__ || Object.getPrototypeOf(MDCTopAppBar)).call.apply(_ref, [this].concat(args)));

    _this.navIcon_;
    /** @type {?Array<MDCRipple>} */
    _this.iconRipples_;
    return _this;
  }

  _createClass(MDCTopAppBar, [{
    key: 'initialize',
    value: function initialize() {
      var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return _index.MDCRipple.attachTo(el);
      };

      this.navIcon_ = this.root_.querySelector(_constants.strings.NAVIGATION_ICON_SELECTOR);

      // Get all icons in the toolbar and instantiate the ripples
      var icons = [].slice.call(this.root_.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR));
      if (this.navIcon_) {
        icons.push(this.navIcon_);
      }

      this.iconRipples_ = icons.map(function (icon) {
        var ripple = rippleFactory(icon);
        ripple.unbounded = true;
        return ripple;
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.iconRipples_.forEach(function (iconRipple) {
        return iconRipple.destroy();
      });
      _get(MDCTopAppBar.prototype.__proto__ || Object.getPrototypeOf(MDCTopAppBar.prototype), 'destroy', this).call(this);
    }

    /**
     * @param {!Element} root
     * @return {!MDCTopAppBar}
     */

  }, {
    key: 'getDefaultFoundation',


    /**
     * @return {!MDCTopAppBarBaseFoundation}
     */
    value: function getDefaultFoundation() {
      var _this2 = this;

      /** @type {!MDCTopAppBarAdapter} */
      var adapter = /** @type {!MDCTopAppBarAdapter} */Object.assign({
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setStyle: function setStyle(property, value) {
          return _this2.root_.style.setProperty(property, value);
        },
        getTopAppBarHeight: function getTopAppBarHeight() {
          return _this2.root_.clientHeight;
        },
        registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler(evtType, handler) {
          if (_this2.navIcon_) {
            _this2.navIcon_.addEventListener(evtType, handler);
          }
        },
        deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler(evtType, handler) {
          if (_this2.navIcon_) {
            _this2.navIcon_.removeEventListener(evtType, handler);
          }
        },
        notifyNavigationIconClicked: function notifyNavigationIconClicked() {
          _this2.emit(_constants.strings.NAVIGATION_EVENT, {});
        },
        registerScrollHandler: function registerScrollHandler(handler) {
          return window.addEventListener('scroll', handler);
        },
        deregisterScrollHandler: function deregisterScrollHandler(handler) {
          return window.removeEventListener('scroll', handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        getViewportScrollY: function getViewportScrollY() {
          return window.pageYOffset;
        },
        getTotalActionItems: function getTotalActionItems() {
          return _this2.root_.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR).length;
        }
      });

      /** @type {!MDCTopAppBarBaseFoundation} */
      var foundation = void 0;
      if (this.root_.classList.contains(_constants.cssClasses.SHORT_CLASS)) {
        foundation = new _foundation6.default(adapter);
      } else if (this.root_.classList.contains(_constants.cssClasses.FIXED_CLASS)) {
        foundation = new _foundation4.default(adapter);
      } else {
        foundation = new _foundation8.default(adapter);
      }

      return foundation;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTopAppBar(root);
    }
  }]);

  return MDCTopAppBar;
}(_component2.default);

exports.MDCTopAppBar = MDCTopAppBar;
exports.MDCTopAppBarBaseFoundation = _foundation2.default;
exports.MDCTopAppBarFoundation = _foundation8.default;
exports.MDCFixedTopAppBarFoundation = _foundation4.default;
exports.MDCShortTopAppBarFoundation = _foundation6.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.RippleCapableSurface = exports.MDCRippleFoundation = exports.MDCRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(4);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(5);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(11);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(6);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    var _ref;

    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  _createClass(MDCRipple, [{
    key: 'setUnbounded_',


    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     * @private
     */
    value: function setUnbounded_() {
      this.foundation_.setUnbounded(this.unbounded_);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /** @return {!MDCRippleFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new _foundation2.default(MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',


    /** @return {boolean} */
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isUnbounded = _ref2.isUnbounded,
          isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
      }
      return ripple;
    }

    /**
     * @param {!RippleCapableSurface} instance
     * @return {!MDCRippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = util.getMatchesProperty(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return util.supportsCssVariables(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(_component2.default);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

exports.MDCRipple = MDCRipple;
exports.MDCRippleFoundation = _foundation2.default;
exports.RippleCapableSurface = RippleCapableSurface;
exports.util = util;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(2);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(5);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(12);

var _util = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event)} */
    _this.deactivateHandler_ = function (e) {
      return _this.deactivate_(e);
    };

    /** @private {function(?Event=)} */
    _this.focusHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {function(?Event=)} */
    _this.blurHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    _this.previousActivationEvent_ = null;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',
    value: function isSupported_() {
      return this.adapter_.browserSupportsCssVars();
    }

    /**
     * @return {!ActivationStateType}
     */

  }, {
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationEvent: null,
        isProgrammatic: false
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_()) {
        return;
      }
      this.registerRootHandlers_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          _this2.layoutInternal_();
        }
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      if (!this.isSupported_()) {
        return;
      }

      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

        this.adapter_.removeClass(FG_ACTIVATION);
      }

      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$2.ROOT,
          UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

      requestAnimationFrame(function () {
        _this3.adapter_.removeClass(ROOT);
        _this3.adapter_.removeClass(UNBOUNDED);
        _this3.removeCssVars_();
      });
    }

    /** @private */

  }, {
    key: 'registerRootHandlers_',
    value: function registerRootHandlers_() {
      var _this4 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
      });
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    /**
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'registerDeactivationHandlers_',
    value: function registerDeactivationHandlers_(e) {
      var _this5 = this;

      if (e.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
        });
      }
    }

    /** @private */

  }, {
    key: 'deregisterRootHandlers_',
    value: function deregisterRootHandlers_() {
      var _this6 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    }

    /** @private */

  }, {
    key: 'deregisterDeactivationHandlers_',
    value: function deregisterDeactivationHandlers_() {
      var _this7 = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
      });
    }

    /** @private */

  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this8 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this9 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }

      // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

      var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this9.adapter_.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (e) {
        activatedTargets.push( /** @type {!EventTarget} */e.target);
        this.registerDeactivationHandlers_(e);
      }

      activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      }

      requestAnimationFrame(function () {
        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];

        if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
          // If space was pressed, try again within an rAF call to detect :active, because different UAs report
          // active states inconsistently when they're called within event handling code:
          // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
          // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
          // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
          // variable is set within a rAF callback for a submit button interaction (#2241).
          activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
          if (activationState.wasElementMadeActive) {
            _this9.animateActivation_();
          }
        }

        if (!activationState.wasElementMadeActive) {
          // Reset activation state immediately if element was not made active.
          _this9.activationState_ = _this9.defaultActivationState_();
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'checkElementMadeActive_',
    value: function checkElementMadeActive_(e) {
      return e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'activate',
    value: function activate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.activate_(event);
    }

    /** @private */

  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this10 = this;

      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      this.layoutInternal_();

      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this10.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * @private
     * @return {{startPoint: PointType, endPoint: PointType}}
     */

  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var _activationState_ = this.activationState_,
          activationEvent = _activationState_.activationEvent,
          wasActivatedByPointer = _activationState_.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(
        /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /** @private */

  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var _this11 = this;

      // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_2 = this.activationState_,
          hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
          isActivated = _activationState_2.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this11.adapter_.removeClass(FG_DEACTIVATION);
        }, _constants.numbers.FG_DEACTIVATION_MS);
      }
    }

    /** @private */

  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'resetActivationState_',
    value: function resetActivationState_() {
      var _this12 = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.
      setTimeout(function () {
        return _this12.previousActivationEvent_ = null;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this13 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.
      if (!activationState.isActivated) {
        return;
      }

      var state = /** @type {!ActivationStateType} */Object.assign({}, activationState);

      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this13.animateDeactivation_(evtObject, state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this13.activationState_.hasDeactivationUXRun = true;
          _this13.animateDeactivation_(e, state);
          _this13.resetActivationState_();
        });
      }
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.deactivate_(event);
    }

    /**
     * @param {Event} e
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this14 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this14.layoutInternal_();
        _this14.layoutFrame_ = 0;
      });
    }

    /** @private */

  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this15 = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);

      // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.
      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

      // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;

      this.updateLayoutCssVars_();
    }

    /** @private */

  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }

    /** @param {boolean} unbounded */

  }, {
    key: 'setUnbounded',
    value: function setUnbounded(unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    }
  }]);

  return MDCRippleFoundation;
}(_foundation2.default);

exports.default = MDCRippleFoundation;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(1);

var _adapter = __webpack_require__(0);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(3);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCTopAppBarFoundation<!MDCFixedTopAppBarFoundation>}
 * @final
 */
var MDCFixedTopAppBarFoundation = function (_MDCTopAppBarFoundati) {
  _inherits(MDCFixedTopAppBarFoundation, _MDCTopAppBarFoundati);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCFixedTopAppBarFoundation(adapter) {
    _classCallCheck(this, MDCFixedTopAppBarFoundation);

    /** State variable for the previous scroll iteration top app bar state */
    var _this = _possibleConstructorReturn(this, (MDCFixedTopAppBarFoundation.__proto__ || Object.getPrototypeOf(MDCFixedTopAppBarFoundation)).call(this, adapter));

    _this.wasScrolled_ = false;

    _this.scrollHandler_ = function () {
      return _this.fixedScrollHandler_();
    };
    return _this;
  }

  _createClass(MDCFixedTopAppBarFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCFixedTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCFixedTopAppBarFoundation.prototype), 'init', this).call(this);
      this.adapter_.registerScrollHandler(this.scrollHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCFixedTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCFixedTopAppBarFoundation.prototype), 'destroy', this).call(this);
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }

    /**
     * Scroll handler for applying/removing the modifier class
     * on the fixed top app bar.
     */

  }, {
    key: 'fixedScrollHandler_',
    value: function fixedScrollHandler_() {
      var currentScroll = this.adapter_.getViewportScrollY();

      if (currentScroll <= 0) {
        if (this.wasScrolled_) {
          this.adapter_.removeClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
          this.wasScrolled_ = false;
        }
      } else {
        if (!this.wasScrolled_) {
          this.adapter_.addClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
          this.wasScrolled_ = true;
        }
      }
    }
  }]);

  return MDCFixedTopAppBarFoundation;
}(_foundation2.default);

exports.default = MDCFixedTopAppBarFoundation;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _adapter = __webpack_require__(0);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(3);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCTopAppBarBaseFoundation<!MDCShortTopAppBarFoundation>}
 * @final
 */
var MDCShortTopAppBarFoundation = function (_MDCTopAppBarBaseFoun) {
  _inherits(MDCShortTopAppBarFoundation, _MDCTopAppBarBaseFoun);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCShortTopAppBarFoundation(adapter) {
    _classCallCheck(this, MDCShortTopAppBarFoundation);

    // State variable for the current top app bar state
    var _this = _possibleConstructorReturn(this, (MDCShortTopAppBarFoundation.__proto__ || Object.getPrototypeOf(MDCShortTopAppBarFoundation)).call(this, adapter));

    _this.isCollapsed = false;

    _this.scrollHandler_ = function () {
      return _this.shortAppBarScrollHandler_();
    };
    return _this;
  }

  _createClass(MDCShortTopAppBarFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCShortTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCShortTopAppBarFoundation.prototype), 'init', this).call(this);
      var isAlwaysCollapsed = this.adapter_.hasClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);

      if (this.adapter_.getTotalActionItems() > 0) {
        this.adapter_.addClass(_constants.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
      }

      if (!isAlwaysCollapsed) {
        this.adapter_.registerScrollHandler(this.scrollHandler_);
        this.shortAppBarScrollHandler_();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCShortTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCShortTopAppBarFoundation.prototype), 'destroy', this).call(this);
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }

    /**
     * Scroll handler for applying/removing the collapsed modifier class
     * on the short top app bar.
     * @private
     */

  }, {
    key: 'shortAppBarScrollHandler_',
    value: function shortAppBarScrollHandler_() {
      var currentScroll = this.adapter_.getViewportScrollY();

      if (currentScroll <= 0) {
        if (this.isCollapsed) {
          this.adapter_.removeClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
          this.isCollapsed = false;
        }
      } else {
        if (!this.isCollapsed) {
          this.adapter_.addClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
          this.isCollapsed = true;
        }
      }
    }
  }]);

  return MDCShortTopAppBarFoundation;
}(_foundation2.default);

exports.default = MDCShortTopAppBarFoundation;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _adapter = __webpack_require__(0);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(3);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var INITIAL_VALUE = 0;
/**
 * @extends {MDCTopAppBarBaseFoundation<!MDCTopAppBarFoundation>}
 * @final
 */

var MDCTopAppBarFoundation = function (_MDCTopAppBarBaseFoun) {
  _inherits(MDCTopAppBarFoundation, _MDCTopAppBarBaseFoun);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCTopAppBarFoundation(adapter) {
    _classCallCheck(this, MDCTopAppBarFoundation);

    /**
     * Used for diffs of current scroll position vs previous scroll position
     * @private {number}
     */
    var _this = _possibleConstructorReturn(this, (MDCTopAppBarFoundation.__proto__ || Object.getPrototypeOf(MDCTopAppBarFoundation)).call(this, adapter));

    _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();

    /**
     * Used to verify when the top app bar is completely showing or completely hidden
     * @private {number}
     */
    _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();

    /**
     * wasDocked_ is used to indicate if the top app bar was docked in the previous
     * scroll handler iteration.
     * @private {boolean}
     */
    _this.wasDocked_ = true;

    /**
     * isDockedShowing_ is used to indicate if the top app bar is docked in the fully
     * shown position.
     * @private {boolean}
     */
    _this.isDockedShowing_ = true;

    /**
     * Variable for current scroll position of the top app bar
     * @private {number}
     */
    _this.currentAppBarOffsetTop_ = 0;

    /**
     * Used to prevent the top app bar from being scrolled out of view during resize events
     * @private {boolean} */
    _this.isCurrentlyBeingResized_ = false;

    /**
     * The timeout that's used to throttle the resize events
     * @private {number}
     */
    _this.resizeThrottleId_ = INITIAL_VALUE;

    /**
     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
     * @private {number}
     */
    _this.resizeDebounceId_ = INITIAL_VALUE;

    _this.scrollHandler_ = function () {
      return _this.topAppBarScrollHandler_();
    };
    _this.resizeHandler_ = function () {
      return _this.topAppBarResizeHandler_();
    };
    return _this;
  }

  _createClass(MDCTopAppBarFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTopAppBarFoundation.prototype), 'init', this).call(this);
      this.adapter_.registerScrollHandler(this.scrollHandler_);
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTopAppBarFoundation.prototype), 'destroy', this).call(this);
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      this.adapter_.setStyle('top', '');
    }

    /**
     * Function to determine if the DOM needs to update.
     * @return {boolean}
     * @private
     */

  }, {
    key: 'checkForUpdate_',
    value: function checkForUpdate_() {
      var offscreenBoundaryTop = -this.topAppBarHeight_;
      var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
      var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
      var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;

      // If it's partially showing, it can't be docked.
      if (partiallyShowing) {
        this.wasDocked_ = false;
      } else {
        // Not previously docked and not partially showing, it's now docked.
        if (!this.wasDocked_) {
          this.wasDocked_ = true;
          return true;
        } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
          this.isDockedShowing_ = hasAnyPixelsOnscreen;
          return true;
        }
      }

      return partiallyShowing;
    }

    /**
     * Function to move the top app bar if needed.
     * @private
     */

  }, {
    key: 'moveTopAppBar_',
    value: function moveTopAppBar_() {
      if (this.checkForUpdate_()) {
        // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
        // so the top app bar doesn't show if the window resizes and the new height > the old height.
        var offset = this.currentAppBarOffsetTop_;
        if (Math.abs(offset) >= this.topAppBarHeight_) {
          offset = -_constants.numbers.MAX_TOP_APP_BAR_HEIGHT;
        }

        this.adapter_.setStyle('top', offset + 'px');
      }
    }

    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     * @private
     */

  }, {
    key: 'topAppBarScrollHandler_',
    value: function topAppBarScrollHandler_() {
      var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
      var diff = currentScrollPosition - this.lastScrollPosition_;
      this.lastScrollPosition_ = currentScrollPosition;

      // If the window is being resized the lastScrollPosition_ needs to be updated but the
      // current scroll of the top app bar should stay in the same position.
      if (!this.isCurrentlyBeingResized_) {
        this.currentAppBarOffsetTop_ -= diff;

        if (this.currentAppBarOffsetTop_ > 0) {
          this.currentAppBarOffsetTop_ = 0;
        } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
          this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
        }

        this.moveTopAppBar_();
      }
    }

    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     * @private
     */

  }, {
    key: 'topAppBarResizeHandler_',
    value: function topAppBarResizeHandler_() {
      var _this2 = this;

      // Throttle resize events 10 p/s
      if (!this.resizeThrottleId_) {
        this.resizeThrottleId_ = setTimeout(function () {
          _this2.resizeThrottleId_ = INITIAL_VALUE;
          _this2.throttledResizeHandler_();
        }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
      }

      this.isCurrentlyBeingResized_ = true;

      if (this.resizeDebounceId_) {
        clearTimeout(this.resizeDebounceId_);
      }

      this.resizeDebounceId_ = setTimeout(function () {
        _this2.topAppBarScrollHandler_();
        _this2.isCurrentlyBeingResized_ = false;
        _this2.resizeDebounceId_ = INITIAL_VALUE;
      }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }

    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     * @private
     */

  }, {
    key: 'throttledResizeHandler_',
    value: function throttledResizeHandler_() {
      var currentHeight = this.adapter_.getTopAppBarHeight();
      if (this.topAppBarHeight_ !== currentHeight) {
        this.wasDocked_ = false;

        // Since the top app bar has a different height depending on the screen width, this
        // will ensure that the top app bar remains in the correct location if
        // completely hidden and a resize makes the top app bar a different height.
        this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
        this.topAppBarHeight_ = currentHeight;
      }
      this.topAppBarScrollHandler_();
    }
  }]);

  return MDCTopAppBarFoundation;
}(_foundation2.default);

exports.default = MDCTopAppBarFoundation;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CornerBit = exports.Corner = exports.AnchorMargin = exports.MDCMenu = exports.MDCMenuFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(4);

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(17);

var _foundation = __webpack_require__(18);

var _constants = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCMenuFoundation>
 */
var MDCMenu = function (_MDCComponent) {
  _inherits(MDCMenu, _MDCComponent);

  /** @param {...?} args */
  function MDCMenu() {
    var _ref;

    _classCallCheck(this, MDCMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCMenu.__proto__ || Object.getPrototypeOf(MDCMenu)).call.apply(_ref, [this].concat(args)));

    _this.previousFocus_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCMenu}
   */


  _createClass(MDCMenu, [{
    key: 'show',


    /** @param {{focusIndex: ?number}=} options */
    value: function show() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$focusIndex = _ref2.focusIndex,
          focusIndex = _ref2$focusIndex === undefined ? null : _ref2$focusIndex;

      this.foundation_.open({ focusIndex: focusIndex });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.foundation_.close();
    }

    /**
     * @param {Corner} corner Default anchor corner alignment of top-left
     *     menu corner.
     */

  }, {
    key: 'setAnchorCorner',
    value: function setAnchorCorner(corner) {
      this.foundation_.setAnchorCorner(corner);
    }

    /**
     * @param {AnchorMargin} margin
     */

  }, {
    key: 'setAnchorMargin',
    value: function setAnchorMargin(margin) {
      this.foundation_.setAnchorMargin(margin);
    }

    /**
     * Return the item container element inside the component.
     * @return {?Element}
     */

  }, {
    key: 'getOptionByIndex',


    /**
     * Return the item within the menu that is selected.
     * @param {number} index
     * @return {?Element}
     */
    value: function getOptionByIndex(index) {
      var items = this.items;

      if (index < items.length) {
        return this.items[index];
      } else {
        return null;
      }
    }

    /** @param {number} index */

  }, {
    key: 'getDefaultFoundation',


    /** @return {!MDCMenuFoundation} */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation.MDCMenuFoundation({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.itemsContainer_);
        },
        getAttributeForEventTarget: function getAttributeForEventTarget(target, attributeName) {
          return target.getAttribute(attributeName);
        },
        getInnerDimensions: function getInnerDimensions() {
          var itemsContainer = _this2.itemsContainer_;

          return { width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight };
        },
        hasAnchor: function hasAnchor() {
          return _this2.root_.parentElement && _this2.root_.parentElement.classList.contains('mdc-menu-anchor');
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return _this2.root_.parentElement.getBoundingClientRect();
        },
        getWindowDimensions: function getWindowDimensions() {
          return { width: window.innerWidth, height: window.innerHeight };
        },
        getNumberOfItems: function getNumberOfItems() {
          return _this2.items.length;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.root_.removeEventListener(type, handler);
        },
        registerBodyClickHandler: function registerBodyClickHandler(handler) {
          return document.body.addEventListener('click', handler);
        },
        deregisterBodyClickHandler: function deregisterBodyClickHandler(handler) {
          return document.body.removeEventListener('click', handler);
        },
        getIndexForEventTarget: function getIndexForEventTarget(target) {
          return _this2.items.indexOf(target);
        },
        notifySelected: function notifySelected(evtData) {
          return _this2.emit(_foundation.MDCMenuFoundation.strings.SELECTED_EVENT, {
            index: evtData.index,
            item: _this2.items[evtData.index]
          });
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit(_foundation.MDCMenuFoundation.strings.CANCEL_EVENT, {});
        },
        saveFocus: function saveFocus() {
          _this2.previousFocus_ = document.activeElement;
        },
        restoreFocus: function restoreFocus() {
          if (_this2.previousFocus_) {
            _this2.previousFocus_.focus();
          }
        },
        isFocused: function isFocused() {
          return document.activeElement === _this2.root_;
        },
        focus: function focus() {
          return _this2.root_.focus();
        },
        getFocusedItemIndex: function getFocusedItemIndex() {
          return _this2.items.indexOf(document.activeElement);
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          return _this2.items[index].focus();
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        setTransformOrigin: function setTransformOrigin(origin) {
          _this2.root_.style[(0, _util.getTransformPropertyName)(window) + '-origin'] = origin;
        },
        setPosition: function setPosition(position) {
          _this2.root_.style.left = 'left' in position ? position.left : null;
          _this2.root_.style.right = 'right' in position ? position.right : null;
          _this2.root_.style.top = 'top' in position ? position.top : null;
          _this2.root_.style.bottom = 'bottom' in position ? position.bottom : null;
        },
        setMaxHeight: function setMaxHeight(height) {
          _this2.root_.style.maxHeight = height;
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
          return _this2.items[index].setAttribute(attr, value);
        },
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
          return _this2.items[index].removeAttribute(attr);
        },
        addClassForOptionAtIndex: function addClassForOptionAtIndex(index, className) {
          return _this2.items[index].classList.add(className);
        },
        rmClassForOptionAtIndex: function rmClassForOptionAtIndex(index, className) {
          return _this2.items[index].classList.remove(className);
        }
      });
    }
  }, {
    key: 'open',


    /** @return {boolean} */
    get: function get() {
      return this.foundation_.isOpen();
    }

    /** @param {boolean} value */
    ,
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }
  }, {
    key: 'itemsContainer_',
    get: function get() {
      return this.root_.querySelector(_foundation.MDCMenuFoundation.strings.ITEMS_SELECTOR);
    }

    /**
     * Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     * @return {!Array<!Element>}
     */

  }, {
    key: 'items',
    get: function get() {
      var itemsContainer = this.itemsContainer_;

      return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
    }
  }, {
    key: 'selectedItemIndex',
    set: function set(index) {
      this.foundation_.setSelectedIndex(index);
    }

    /** @return {number} */
    ,
    get: function get() {
      return this.foundation_.getSelectedIndex();
    }

    /** @param {!boolean} rememberSelection */

  }, {
    key: 'rememberSelection',
    set: function set(rememberSelection) {
      this.foundation_.setRememberSelection(rememberSelection);
    }

    /** @param {boolean} quickOpen */

  }, {
    key: 'quickOpen',
    set: function set(quickOpen) {
      this.foundation_.setQuickOpen(quickOpen);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCMenu(root);
    }
  }]);

  return MDCMenu;
}(_component2.default);

exports.MDCMenuFoundation = _foundation.MDCMenuFoundation;
exports.MDCMenu = MDCMenu;
exports.AnchorMargin = _foundation.AnchorMargin;
exports.Corner = _constants.Corner;
exports.CornerBit = _constants.CornerBit;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @type {string|undefined} */
var storedTransformPropertyName_ = void 0;

/**
 * Returns the name of the correct transform property to use on the current browser.
 * @param {!Window} globalObj
 * @param {boolean=} forceRefresh
 * @return {string}
 */
function getTransformPropertyName(globalObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

/**
 * Clamps a value between the minimum and the maximum, returning the clamped value.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return Math.min(max, Math.max(min, value));
}

/**
 * Returns the easing value to apply at time t, for a given cubic bezier curve.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Parameters are as follows:
 * - time: The current time in the animation, scaled between 0 and 1.
 * - x1: The x value of control point P1.
 * - y1: The y value of control point P1.
 * - x2: The x value of control point P2.
 * - y2: The y value of control point P2.
 * @param {number} time
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
}

/**
 * Compute a single coordinate at a position point between 0 and 1.
 * c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} t
 * @param {number} c1
 * @param {number} c2
 * @return {number}
 */
function getBezierCoordinate_(t, c1, c2) {
  // Special case start and end.
  if (t === 0 || t === 1) {
    return t;
  }

  // Step one - from 4 points to 3
  var ic0 = t * c1;
  var ic1 = c1 + t * (c2 - c1);
  var ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
  return ic0 + t * (ic1 - ic0);
}

/**
 * Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} xVal
 * @param {number} x1
 * @param {number} x2
 * @return {number}
 */
function solvePositionFromXValue_(xVal, x1, x2) {
  var EPSILON = 1e-6;
  var MAX_ITERATIONS = 8;

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  var t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  var tMin = 0;
  var tMax = 1;
  var value = 0;
  for (var i = 0; i < MAX_ITERATIONS; i++) {
    value = getBezierCoordinate_(t, x1, x2);
    var derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
    if (Math.abs(value - xVal) < EPSILON) {
      return t;
    } else if (Math.abs(derivative) < EPSILON) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (var _i = 0; Math.abs(value - xVal) > EPSILON && _i < MAX_ITERATIONS; _i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = getBezierCoordinate_(t, x1, x2);
  }
  return t;
}

exports.getTransformPropertyName = getTransformPropertyName;
exports.clamp = clamp;
exports.bezierProgress = bezierProgress;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnchorMargin = exports.MDCMenuFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(2);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(19);

var _constants = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   top: number,
 *   right: number,
 *   bottom: number,
 *   left: number
 * }}
 */
var AnchorMargin = void 0;

/* eslint-disable no-unused-vars */
/**
 * @typedef {{
 *   viewport: { width: number, height: number },
 *   viewportDistance: {top: number, right: number, bottom: number, left: number},
 *   anchorHeight: number,
 *   anchorWidth: number,
 *   menuHeight: number,
 *   menuWidth: number,
 * }}
 */
var AutoLayoutMeasurements = void 0;
/* eslint-enable no-unused-vars */

/**
 * @extends {MDCFoundation<!MDCMenuAdapter>}
 */
var MDCMenuFoundation = function (_MDCFoundation) {
  _inherits(MDCMenuFoundation, _MDCFoundation);

  _createClass(MDCMenuFoundation, null, [{
    key: 'cssClasses',

    /** @return enum{cssClasses} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum{strings} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return enum{numbers} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }

    /** @return enum{number} */

  }, {
    key: 'Corner',
    get: function get() {
      return _constants.Corner;
    }

    /**
     * {@see MDCMenuAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCMenuAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCMenuAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {
            return false;
          },
          hasNecessaryDom: function hasNecessaryDom() {
            return false;
          },
          getAttributeForEventTarget: function getAttributeForEventTarget() {},
          getInnerDimensions: function getInnerDimensions() {
            return {};
          },
          hasAnchor: function hasAnchor() {
            return false;
          },
          getAnchorDimensions: function getAnchorDimensions() {
            return {};
          },
          getWindowDimensions: function getWindowDimensions() {
            return {};
          },
          getNumberOfItems: function getNumberOfItems() {
            return 0;
          },
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {},
          registerBodyClickHandler: function registerBodyClickHandler() {},
          deregisterBodyClickHandler: function deregisterBodyClickHandler() {},
          getIndexForEventTarget: function getIndexForEventTarget() {
            return 0;
          },
          notifySelected: function notifySelected() {},
          notifyCancel: function notifyCancel() {},
          saveFocus: function saveFocus() {},
          restoreFocus: function restoreFocus() {},
          isFocused: function isFocused() {
            return false;
          },
          focus: function focus() {},
          getFocusedItemIndex: function getFocusedItemIndex() {
            return -1;
          },
          focusItemAtIndex: function focusItemAtIndex() {},
          isRtl: function isRtl() {
            return false;
          },
          setTransformOrigin: function setTransformOrigin() {},
          setPosition: function setPosition() {},
          setMaxHeight: function setMaxHeight() {},
          setAttrForOptionAtIndex: function setAttrForOptionAtIndex() {},
          rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex() {},
          addClassForOptionAtIndex: function addClassForOptionAtIndex() {},
          rmClassForOptionAtIndex: function rmClassForOptionAtIndex() {}
        }
      );
    }

    /** @param {!MDCMenuAdapter} adapter */

  }]);

  function MDCMenuFoundation(adapter) {
    _classCallCheck(this, MDCMenuFoundation);

    /** @private {function(!Event)} */
    var _this = _possibleConstructorReturn(this, (MDCMenuFoundation.__proto__ || Object.getPrototypeOf(MDCMenuFoundation)).call(this, Object.assign(MDCMenuFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = function (evt) {
      return _this.handlePossibleSelected_(evt);
    };
    /** @private {function(!Event)} */
    _this.keydownHandler_ = function (evt) {
      return _this.handleKeyboardDown_(evt);
    };
    /** @private {function(!Event)} */
    _this.keyupHandler_ = function (evt) {
      return _this.handleKeyboardUp_(evt);
    };
    /** @private {function(!Event)} */
    _this.documentClickHandler_ = function (evt) {
      return _this.handleDocumentClick_(evt);
    };
    /** @private {boolean} */
    _this.isOpen_ = false;
    /** @private {number} */
    _this.openAnimationEndTimerId_ = 0;
    /** @private {number} */
    _this.closeAnimationEndTimerId_ = 0;
    /** @private {number} */
    _this.selectedTriggerTimerId_ = 0;
    /** @private {number} */
    _this.animationRequestId_ = 0;
    /** @private {!{ width: number, height: number }} */
    _this.dimensions_;
    /** @private {number} */
    _this.itemHeight_;
    /** @private {Corner} */
    _this.anchorCorner_ = _constants.Corner.TOP_START;
    /** @private {AnchorMargin} */
    _this.anchorMargin_ = { top: 0, right: 0, bottom: 0, left: 0 };
    /** @private {?AutoLayoutMeasurements} */
    _this.measures_ = null;
    /** @private {number} */
    _this.selectedIndex_ = -1;
    /** @private {boolean} */
    _this.rememberSelection_ = false;
    /** @private {boolean} */
    _this.quickOpen_ = false;

    // A keyup event on the menu needs to have a corresponding keydown
    // event on the menu. If the user opens the menu with a keydown event on a
    // button, the menu will only get the key up event causing buggy behavior with selected elements.
    /** @private {boolean} */
    _this.keyDownWithinMenu_ = false;
    return _this;
  }

  _createClass(MDCMenuFoundation, [{
    key: 'init',
    value: function init() {
      var _MDCMenuFoundation$cs = MDCMenuFoundation.cssClasses,
          ROOT = _MDCMenuFoundation$cs.ROOT,
          OPEN = _MDCMenuFoundation$cs.OPEN;


      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      }

      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      clearTimeout(this.selectedTriggerTimerId_);
      clearTimeout(this.openAnimationEndTimerId_);
      clearTimeout(this.closeAnimationEndTimerId_);
      // Cancel any currently running animations.
      cancelAnimationFrame(this.animationRequestId_);
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
    }

    /**
     * @param {!Corner} corner Default anchor corner alignment of top-left menu corner.
     */

  }, {
    key: 'setAnchorCorner',
    value: function setAnchorCorner(corner) {
      this.anchorCorner_ = corner;
    }

    /**
     * @param {!AnchorMargin} margin 4-plet of margins from anchor.
     */

  }, {
    key: 'setAnchorMargin',
    value: function setAnchorMargin(margin) {
      this.anchorMargin_.top = typeof margin.top === 'number' ? margin.top : 0;
      this.anchorMargin_.right = typeof margin.right === 'number' ? margin.right : 0;
      this.anchorMargin_.bottom = typeof margin.bottom === 'number' ? margin.bottom : 0;
      this.anchorMargin_.left = typeof margin.left === 'number' ? margin.left : 0;
    }

    /** @param {boolean} rememberSelection */

  }, {
    key: 'setRememberSelection',
    value: function setRememberSelection(rememberSelection) {
      this.rememberSelection_ = rememberSelection;
      this.setSelectedIndex(-1);
    }

    /** @param {boolean} quickOpen */

  }, {
    key: 'setQuickOpen',
    value: function setQuickOpen(quickOpen) {
      this.quickOpen_ = quickOpen;
    }

    /**
     * @param {?number} focusIndex
     * @private
     */

  }, {
    key: 'focusOnOpen_',
    value: function focusOnOpen_(focusIndex) {
      if (focusIndex === null) {
        // If this instance of MDCMenu remembers selections, and the user has
        // made a selection, then focus the last selected item
        if (this.rememberSelection_ && this.selectedIndex_ >= 0) {
          this.adapter_.focusItemAtIndex(this.selectedIndex_);
          return;
        }

        this.adapter_.focus();
        // If that doesn't work, focus first item instead.
        if (!this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        }
      } else {
        this.adapter_.focusItemAtIndex(focusIndex);
      }
    }

    /**
     * Handle clicks and cancel the menu if not a child list-item
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'handleDocumentClick_',
    value: function handleDocumentClick_(evt) {
      var el = evt.target;

      while (el && el !== document.documentElement) {
        if (this.adapter_.getIndexForEventTarget(el) !== -1) {
          return;
        }
        el = el.parentNode;
      }

      this.adapter_.notifyCancel();
      this.close(evt);
    }
  }, {
    key: 'handleKeyboardDown_',


    /**
     * Handle keys that we want to repeat on hold (tab and arrows).
     * @param {!Event} evt
     * @return {boolean}
     * @private
     */
    value: function handleKeyboardDown_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key,
          shiftKey = evt.shiftKey;

      var isTab = key === 'Tab' || keyCode === 9;
      var isArrowUp = key === 'ArrowUp' || keyCode === 38;
      var isArrowDown = key === 'ArrowDown' || keyCode === 40;
      var isSpace = key === 'Space' || keyCode === 32;
      var isEnter = key === 'Enter' || keyCode === 13;
      // The menu needs to know if the keydown event was triggered on the menu
      this.keyDownWithinMenu_ = isEnter || isSpace;

      var focusedItemIndex = this.adapter_.getFocusedItemIndex();
      var lastItemIndex = this.adapter_.getNumberOfItems() - 1;

      if (shiftKey && isTab && focusedItemIndex === 0) {
        this.adapter_.focusItemAtIndex(lastItemIndex);
        evt.preventDefault();
        return false;
      }

      if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
        this.adapter_.focusItemAtIndex(0);
        evt.preventDefault();
        return false;
      }

      // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
      if (isArrowUp || isArrowDown || isSpace) {
        evt.preventDefault();
      }

      if (isArrowUp) {
        if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(lastItemIndex);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
        }
      } else if (isArrowDown) {
        if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
        }
      }

      return true;
    }

    /**
     * Handle keys that we don't want to repeat on hold (Enter, Space, Escape).
     * @param {!Event} evt
     * @return {boolean}
     * @private
     */

  }, {
    key: 'handleKeyboardUp_',
    value: function handleKeyboardUp_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key;

      var isEnter = key === 'Enter' || keyCode === 13;
      var isSpace = key === 'Space' || keyCode === 32;
      var isEscape = key === 'Escape' || keyCode === 27;

      if (isEnter || isSpace) {
        // If the keydown event didn't occur on the menu, then it should
        // disregard the possible selected event.
        if (this.keyDownWithinMenu_) {
          this.handlePossibleSelected_(evt);
        }
        this.keyDownWithinMenu_ = false;
      }

      if (isEscape) {
        this.adapter_.notifyCancel();
        this.close();
      }

      return true;
    }

    /**
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'handlePossibleSelected_',
    value: function handlePossibleSelected_(evt) {
      var _this2 = this;

      if (this.adapter_.getAttributeForEventTarget(evt.target, _constants.strings.ARIA_DISABLED_ATTR) === 'true') {
        return;
      }
      var targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
      if (targetIndex < 0) {
        return;
      }
      // Debounce multiple selections
      if (this.selectedTriggerTimerId_) {
        return;
      }
      this.selectedTriggerTimerId_ = setTimeout(function () {
        _this2.selectedTriggerTimerId_ = 0;
        _this2.close();
        if (_this2.rememberSelection_) {
          _this2.setSelectedIndex(targetIndex);
        }
        _this2.adapter_.notifySelected({ index: targetIndex });
      }, _constants.numbers.SELECTED_TRIGGER_DELAY);
    }

    /**
     * @return {AutoLayoutMeasurements} Measurements used to position menu popup.
     */

  }, {
    key: 'getAutoLayoutMeasurements_',
    value: function getAutoLayoutMeasurements_() {
      var anchorRect = this.adapter_.getAnchorDimensions();
      var viewport = this.adapter_.getWindowDimensions();

      return {
        viewport: viewport,
        viewportDistance: {
          top: anchorRect.top,
          right: viewport.width - anchorRect.right,
          left: anchorRect.left,
          bottom: viewport.height - anchorRect.bottom
        },
        anchorHeight: anchorRect.height,
        anchorWidth: anchorRect.width,
        menuHeight: this.dimensions_.height,
        menuWidth: this.dimensions_.width
      };
    }

    /**
     * Computes the corner of the anchor from which to animate and position the menu.
     * @return {Corner}
     * @private
     */

  }, {
    key: 'getOriginCorner_',
    value: function getOriginCorner_() {
      // Defaults: open from the top left.
      var corner = _constants.Corner.TOP_LEFT;

      var _measures_ = this.measures_,
          viewportDistance = _measures_.viewportDistance,
          anchorHeight = _measures_.anchorHeight,
          anchorWidth = _measures_.anchorWidth,
          menuHeight = _measures_.menuHeight,
          menuWidth = _measures_.menuWidth;

      var isBottomAligned = Boolean(this.anchorCorner_ & _constants.CornerBit.BOTTOM);
      var availableTop = isBottomAligned ? viewportDistance.top + anchorHeight + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
      var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorHeight - this.anchorMargin_.top;

      var topOverflow = menuHeight - availableTop;
      var bottomOverflow = menuHeight - availableBottom;
      if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
        corner |= _constants.CornerBit.BOTTOM;
      }

      var isRtl = this.adapter_.isRtl();
      var isFlipRtl = Boolean(this.anchorCorner_ & _constants.CornerBit.FLIP_RTL);
      var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & _constants.CornerBit.RIGHT);
      var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
      var availableLeft = isAlignedRight ? viewportDistance.left + anchorWidth + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
      var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorWidth - this.anchorMargin_.left;

      var leftOverflow = menuWidth - availableLeft;
      var rightOverflow = menuWidth - availableRight;

      if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
        corner |= _constants.CornerBit.RIGHT;
      }

      return corner;
    }

    /**
     * @param {Corner} corner Origin corner of the menu.
     * @return {number} Horizontal offset of menu origin corner from corresponding anchor corner.
     * @private
     */

  }, {
    key: 'getHorizontalOriginOffset_',
    value: function getHorizontalOriginOffset_(corner) {
      var anchorWidth = this.measures_.anchorWidth;

      var isRightAligned = Boolean(corner & _constants.CornerBit.RIGHT);
      var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & _constants.CornerBit.RIGHT);
      var x = 0;
      if (isRightAligned) {
        var rightOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.left : this.anchorMargin_.right;
        x = rightOffset;
      } else {
        var leftOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.right : this.anchorMargin_.left;
        x = leftOffset;
      }
      return x;
    }

    /**
     * @param {Corner} corner Origin corner of the menu.
     * @return {number} Vertical offset of menu origin corner from corresponding anchor corner.
     * @private
     */

  }, {
    key: 'getVerticalOriginOffset_',
    value: function getVerticalOriginOffset_(corner) {
      var _measures_2 = this.measures_,
          viewport = _measures_2.viewport,
          viewportDistance = _measures_2.viewportDistance,
          anchorHeight = _measures_2.anchorHeight,
          menuHeight = _measures_2.menuHeight;

      var isBottomAligned = Boolean(corner & _constants.CornerBit.BOTTOM);
      var MARGIN_TO_EDGE = MDCMenuFoundation.numbers.MARGIN_TO_EDGE;

      var avoidVerticalOverlap = Boolean(this.anchorCorner_ & _constants.CornerBit.BOTTOM);
      var canOverlapVertically = !avoidVerticalOverlap;
      var y = 0;

      if (isBottomAligned) {
        y = avoidVerticalOverlap ? anchorHeight - this.anchorMargin_.top : -this.anchorMargin_.bottom;
        // adjust for when menu can overlap anchor, but too tall to be aligned to bottom
        // anchor corner. Bottom margin is ignored in such cases.
        if (canOverlapVertically && menuHeight > viewportDistance.top + anchorHeight) {
          y = -(Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) - (viewportDistance.top + anchorHeight));
        }
      } else {
        y = avoidVerticalOverlap ? anchorHeight + this.anchorMargin_.bottom : this.anchorMargin_.top;
        // adjust for when menu can overlap anchor, but too tall to be aligned to top
        // anchor corners. Top margin is ignored in that case.
        if (canOverlapVertically && menuHeight > viewportDistance.bottom + anchorHeight) {
          y = -(Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) - (viewportDistance.bottom + anchorHeight));
        }
      }
      return y;
    }

    /**
     * @param {Corner} corner Origin corner of the menu.
     * @return {number} Maximum height of the menu, based on available space. 0 indicates should not be set.
     * @private
     */

  }, {
    key: 'getMenuMaxHeight_',
    value: function getMenuMaxHeight_(corner) {
      var maxHeight = 0;
      var viewportDistance = this.measures_.viewportDistance;

      var isBottomAligned = Boolean(corner & _constants.CornerBit.BOTTOM);

      // When maximum height is not specified, it is handled from css.
      if (this.anchorCorner_ & _constants.CornerBit.BOTTOM) {
        if (isBottomAligned) {
          maxHeight = viewportDistance.top + this.anchorMargin_.top;
        } else {
          maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom;
        }
      }

      return maxHeight;
    }

    /** @private */

  }, {
    key: 'autoPosition_',
    value: function autoPosition_() {
      var _position;

      if (!this.adapter_.hasAnchor()) {
        return;
      }

      // Compute measurements for autoposition methods reuse.
      this.measures_ = this.getAutoLayoutMeasurements_();

      var corner = this.getOriginCorner_();
      var maxMenuHeight = this.getMenuMaxHeight_(corner);
      var verticalAlignment = corner & _constants.CornerBit.BOTTOM ? 'bottom' : 'top';
      var horizontalAlignment = corner & _constants.CornerBit.RIGHT ? 'right' : 'left';
      var horizontalOffset = this.getHorizontalOriginOffset_(corner);
      var verticalOffset = this.getVerticalOriginOffset_(corner);
      var position = (_position = {}, _defineProperty(_position, horizontalAlignment, horizontalOffset ? horizontalOffset + 'px' : '0'), _defineProperty(_position, verticalAlignment, verticalOffset ? verticalOffset + 'px' : '0'), _position);
      var _measures_3 = this.measures_,
          anchorWidth = _measures_3.anchorWidth,
          menuHeight = _measures_3.menuHeight,
          menuWidth = _measures_3.menuWidth;
      // Center align when anchor width is comparable or greater than menu, otherwise keep corner.

      if (anchorWidth / menuWidth > _constants.numbers.ANCHOR_TO_MENU_WIDTH_RATIO) {
        horizontalAlignment = 'center';
      }

      // Adjust vertical origin when menu is positioned with significant offset from anchor. This is done so that
      // scale animation is "anchored" on the anchor.
      if (!(this.anchorCorner_ & _constants.CornerBit.BOTTOM) && Math.abs(verticalOffset / menuHeight) > _constants.numbers.OFFSET_TO_MENU_HEIGHT_RATIO) {
        var verticalOffsetPercent = Math.abs(verticalOffset / menuHeight) * 100;
        var originPercent = corner & _constants.CornerBit.BOTTOM ? 100 - verticalOffsetPercent : verticalOffsetPercent;
        verticalAlignment = Math.round(originPercent * 100) / 100 + '%';
      }

      this.adapter_.setTransformOrigin(horizontalAlignment + ' ' + verticalAlignment);
      this.adapter_.setPosition(position);
      this.adapter_.setMaxHeight(maxMenuHeight ? maxMenuHeight + 'px' : '');

      // Clear measures after positioning is complete.
      this.measures_ = null;
    }

    /**
     * Open the menu.
     * @param {{focusIndex: ?number}=} options
     */

  }, {
    key: 'open',
    value: function open() {
      var _this3 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$focusIndex = _ref.focusIndex,
          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

      this.adapter_.saveFocus();

      if (!this.quickOpen_) {
        this.adapter_.addClass(MDCMenuFoundation.cssClasses.ANIMATING_OPEN);
      }

      this.animationRequestId_ = requestAnimationFrame(function () {
        _this3.dimensions_ = _this3.adapter_.getInnerDimensions();
        _this3.autoPosition_();
        _this3.adapter_.addClass(MDCMenuFoundation.cssClasses.OPEN);
        _this3.focusOnOpen_(focusIndex);
        _this3.adapter_.registerBodyClickHandler(_this3.documentClickHandler_);
        if (!_this3.quickOpen_) {
          _this3.openAnimationEndTimerId_ = setTimeout(function () {
            _this3.openAnimationEndTimerId_ = 0;
            _this3.adapter_.removeClass(MDCMenuFoundation.cssClasses.ANIMATING_OPEN);
          }, _constants.numbers.TRANSITION_OPEN_DURATION);
        }
      });
      this.isOpen_ = true;
    }

    /**
     * Closes the menu.
     * @param {Event=} evt
     */

  }, {
    key: 'close',
    value: function close() {
      var _this4 = this;

      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var targetIsDisabled = evt ? this.adapter_.getAttributeForEventTarget(evt.target, _constants.strings.ARIA_DISABLED_ATTR) === 'true' : false;

      if (targetIsDisabled) {
        return;
      }

      this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);

      if (!this.quickOpen_) {
        this.adapter_.addClass(MDCMenuFoundation.cssClasses.ANIMATING_CLOSED);
      }

      requestAnimationFrame(function () {
        _this4.adapter_.removeClass(MDCMenuFoundation.cssClasses.OPEN);
        if (!_this4.quickOpen_) {
          _this4.closeAnimationEndTimerId_ = setTimeout(function () {
            _this4.closeAnimationEndTimerId_ = 0;
            _this4.adapter_.removeClass(MDCMenuFoundation.cssClasses.ANIMATING_CLOSED);
          }, _constants.numbers.TRANSITION_CLOSE_DURATION);
        }
      });
      this.isOpen_ = false;
      this.adapter_.restoreFocus();
    }

    /** @return {boolean} */

  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }

    /** @return {number} */

  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex() {
      return this.selectedIndex_;
    }

    /**
     * @param {number} index Index of the item to set as selected.
     */

  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      if (index === this.selectedIndex_) {
        return;
      }

      var prevSelectedIndex = this.selectedIndex_;
      if (prevSelectedIndex >= 0) {
        this.adapter_.rmAttrForOptionAtIndex(prevSelectedIndex, 'aria-selected');
        this.adapter_.rmClassForOptionAtIndex(prevSelectedIndex, _constants.cssClasses.SELECTED_LIST_ITEM);
      }

      this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfItems() ? index : -1;
      if (this.selectedIndex_ >= 0) {
        this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
        this.adapter_.addClassForOptionAtIndex(this.selectedIndex_, _constants.cssClasses.SELECTED_LIST_ITEM);
      }
    }
  }]);

  return MDCMenuFoundation;
}(_foundation2.default);

exports.MDCMenuFoundation = MDCMenuFoundation;
exports.AnchorMargin = AnchorMargin;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Menu. Provides an interface for managing
 * - classes
 * - dom
 * - focus
 * - position
 * - dimensions
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCMenuAdapter = function () {
  function MDCMenuAdapter() {
    _classCallCheck(this, MDCMenuAdapter);
  }

  _createClass(MDCMenuAdapter, [{
    key: "addClass",

    /** @param {string} className */
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /** @return {boolean} */

  }, {
    key: "hasNecessaryDom",
    value: function hasNecessaryDom() {}

    /**
     * @param {EventTarget} target
     * @param {string} attributeName
     * @return {string}
     */

  }, {
    key: "getAttributeForEventTarget",
    value: function getAttributeForEventTarget(target, attributeName) {}

    /** @return {{ width: number, height: number }} */

  }, {
    key: "getInnerDimensions",
    value: function getInnerDimensions() {}

    /** @return {boolean} */

  }, {
    key: "hasAnchor",
    value: function hasAnchor() {}

    /** @return {{width: number, height: number, top: number, right: number, bottom: number, left: number}} */

  }, {
    key: "getAnchorDimensions",
    value: function getAnchorDimensions() {}

    /** @return {{ width: number, height: number }} */

  }, {
    key: "getWindowDimensions",
    value: function getWindowDimensions() {}

    /** @return {number} */

  }, {
    key: "getNumberOfItems",
    value: function getNumberOfItems() {}

    /**
     * @param {string} type
     * @param {function(!Event)} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(type, handler) {}

    /**
     * @param {string} type
     * @param {function(!Event)} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(type, handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "registerBodyClickHandler",
    value: function registerBodyClickHandler(handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "deregisterBodyClickHandler",
    value: function deregisterBodyClickHandler(handler) {}

    /**
     * @param {EventTarget} target
     * @return {number}
     */

  }, {
    key: "getIndexForEventTarget",
    value: function getIndexForEventTarget(target) {}

    /** @param {{index: number}} evtData */

  }, {
    key: "notifySelected",
    value: function notifySelected(evtData) {}
  }, {
    key: "notifyCancel",
    value: function notifyCancel() {}
  }, {
    key: "saveFocus",
    value: function saveFocus() {}
  }, {
    key: "restoreFocus",
    value: function restoreFocus() {}

    /** @return {boolean} */

  }, {
    key: "isFocused",
    value: function isFocused() {}
  }, {
    key: "focus",
    value: function focus() {}

    /** @return {number} */

  }, {
    key: "getFocusedItemIndex",
    value: function getFocusedItemIndex() /* number */{}

    /** @param {number} index */

  }, {
    key: "focusItemAtIndex",
    value: function focusItemAtIndex(index) {}

    /** @return {boolean} */

  }, {
    key: "isRtl",
    value: function isRtl() {}

    /** @param {string} origin */

  }, {
    key: "setTransformOrigin",
    value: function setTransformOrigin(origin) {}

    /** @param {{
    *   top: (string|undefined),
    *   right: (string|undefined),
    *   bottom: (string|undefined),
    *   left: (string|undefined)
    * }} position */

  }, {
    key: "setPosition",
    value: function setPosition(position) {}

    /** @param {string} height */

  }, {
    key: "setMaxHeight",
    value: function setMaxHeight(height) {}

    /**
     * @param {number} index
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: "setAttrForOptionAtIndex",
    value: function setAttrForOptionAtIndex(index, attr, value) {}

    /**
     * @param {number} index
     * @param {string} attr
     */

  }, {
    key: "rmAttrForOptionAtIndex",
    value: function rmAttrForOptionAtIndex(index, attr) {}

    /**
     * @param {number} index
     * @param {string} className
     */

  }, {
    key: "addClassForOptionAtIndex",
    value: function addClassForOptionAtIndex(index, className) {}

    /**
     * @param {number} index
     * @param {string} className
     */

  }, {
    key: "rmClassForOptionAtIndex",
    value: function rmClassForOptionAtIndex(index, className) {}
  }]);

  return MDCMenuAdapter;
}();

exports.MDCMenuAdapter = MDCMenuAdapter;

/***/ })
/******/ ]);


// add scroll section hack functions
function jsel(label) {
    $('html, body').animate({
        scrollTop: $("#"+label).offset().top -
        $('.mdc-top-app-bar').height() - 2
    }, 1000);

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
}
;
