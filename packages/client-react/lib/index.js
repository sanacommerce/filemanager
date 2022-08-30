(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["FileManager"] = factory(require("react"), require("react-dom"));
	else
		root["FileManager"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_66__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 475);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(397)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(228);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(230);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(227);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(118);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(118);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(226);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ScalingCellSizeAndPositionManager__ = __webpack_require__(100);



if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellPosition', {
  value: {
    columnIndex: __webpack_require__(0).number.isRequired,
    rowIndex: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellRendererParams', {
  value: {
    columnIndex: __webpack_require__(0).number.isRequired,
    isScrolling: __webpack_require__(0).bool.isRequired,
    isVisible: __webpack_require__(0).bool.isRequired,
    key: __webpack_require__(0).string.isRequired,
    parent: __webpack_require__(0).object.isRequired,
    rowIndex: __webpack_require__(0).number.isRequired,
    style: __webpack_require__(0).object.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellRenderer', {
  value: __webpack_require__(0).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellRangeRendererParams', {
  value: {
    cellCache: __webpack_require__(0).object.isRequired,
    cellRenderer: __webpack_require__(0).func.isRequired,
    columnSizeAndPositionManager: typeof __WEBPACK_IMPORTED_MODULE_1__utils_ScalingCellSizeAndPositionManager__["a" /* default */] === 'function' ? __webpack_require__(0).instanceOf(__WEBPACK_IMPORTED_MODULE_1__utils_ScalingCellSizeAndPositionManager__["a" /* default */]).isRequired : __webpack_require__(0).any.isRequired,
    columnStartIndex: __webpack_require__(0).number.isRequired,
    columnStopIndex: __webpack_require__(0).number.isRequired,
    deferredMeasurementCache: __webpack_require__(0).object,
    horizontalOffsetAdjustment: __webpack_require__(0).number.isRequired,
    isScrolling: __webpack_require__(0).bool.isRequired,
    parent: __webpack_require__(0).object.isRequired,
    rowSizeAndPositionManager: typeof __WEBPACK_IMPORTED_MODULE_1__utils_ScalingCellSizeAndPositionManager__["a" /* default */] === 'function' ? __webpack_require__(0).instanceOf(__WEBPACK_IMPORTED_MODULE_1__utils_ScalingCellSizeAndPositionManager__["a" /* default */]).isRequired : __webpack_require__(0).any.isRequired,
    rowStartIndex: __webpack_require__(0).number.isRequired,
    rowStopIndex: __webpack_require__(0).number.isRequired,
    scrollLeft: __webpack_require__(0).number.isRequired,
    scrollTop: __webpack_require__(0).number.isRequired,
    styleCache: __webpack_require__(0).object.isRequired,
    verticalOffsetAdjustment: __webpack_require__(0).number.isRequired,
    visibleColumnIndices: __webpack_require__(0).object.isRequired,
    visibleRowIndices: __webpack_require__(0).object.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellRangeRenderer', {
  value: __webpack_require__(0).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellSizeGetter', {
  value: __webpack_require__(0).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellSize', {
  value: __webpack_require__(0).oneOfType([__webpack_require__(0).func, __webpack_require__(0).number]),
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_NoContentRenderer', {
  value: __webpack_require__(0).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Scroll', {
  value: {
    clientHeight: __webpack_require__(0).number.isRequired,
    clientWidth: __webpack_require__(0).number.isRequired,
    scrollHeight: __webpack_require__(0).number.isRequired,
    scrollLeft: __webpack_require__(0).number.isRequired,
    scrollTop: __webpack_require__(0).number.isRequired,
    scrollWidth: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ScrollbarPresenceChange', {
  value: {
    horizontal: __webpack_require__(0).bool.isRequired,
    vertical: __webpack_require__(0).bool.isRequired,
    size: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_RenderedSection', {
  value: {
    columnOverscanStartIndex: __webpack_require__(0).number.isRequired,
    columnOverscanStopIndex: __webpack_require__(0).number.isRequired,
    columnStartIndex: __webpack_require__(0).number.isRequired,
    columnStopIndex: __webpack_require__(0).number.isRequired,
    rowOverscanStartIndex: __webpack_require__(0).number.isRequired,
    rowOverscanStopIndex: __webpack_require__(0).number.isRequired,
    rowStartIndex: __webpack_require__(0).number.isRequired,
    rowStopIndex: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetterParams', {
  value: {
    direction: __webpack_require__(0).oneOf(['horizontal', 'vertical']).isRequired,
    scrollDirection: __webpack_require__(0).oneOf([-1, 1]).isRequired,
    cellCount: __webpack_require__(0).number.isRequired,
    overscanCellsCount: __webpack_require__(0).number.isRequired,
    startIndex: __webpack_require__(0).number.isRequired,
    stopIndex: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_OverscanIndices', {
  value: {
    overscanStartIndex: __webpack_require__(0).number.isRequired,
    overscanStopIndex: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter', {
  value: __webpack_require__(0).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Alignment', {
  value: __webpack_require__(0).oneOf(['auto', 'end', 'start', 'center']),
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_VisibleCellRange', {
  value: {
    start: __webpack_require__(0).number,
    stop: __webpack_require__(0).number
  },
  configurable: true
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(243), __esModule: true };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(84)('wks');
var uid = __webpack_require__(56);
var Symbol = __webpack_require__(14).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Grid__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Grid__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_0__Grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessibilityOverscanIndicesGetter__ = __webpack_require__(424);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "accessibilityOverscanIndicesGetter", function() { return __WEBPACK_IMPORTED_MODULE_1__accessibilityOverscanIndicesGetter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultCellRangeRenderer__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCellRangeRenderer", function() { return __WEBPACK_IMPORTED_MODULE_2__defaultCellRangeRenderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultOverscanIndicesGetter__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOverscanIndicesGetter", function() { return __WEBPACK_IMPORTED_MODULE_3__defaultOverscanIndicesGetter__["a"]; });









/***/ }),
/* 14 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(144)('wks');
var uid = __webpack_require__(98);
var Symbol = __webpack_require__(17).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);
var core = __webpack_require__(10);
var ctx = __webpack_require__(27);
var hide = __webpack_require__(26);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(183).default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(29);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(120);
var toPrimitive = __webpack_require__(87);
var dP = Object.defineProperty;

exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(28)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(121);
var defined = __webpack_require__(75);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(22);
var createDesc = __webpack_require__(39);
module.exports = __webpack_require__(23) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(52);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(128);
var enumBugKeys = __webpack_require__(77);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(61);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(62);
var createDesc = __webpack_require__(143);
module.exports = __webpack_require__(43) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = callIfExists;
/* harmony export (immutable) */ __webpack_exports__["b"] = hasOwnProp;
/* harmony export (immutable) */ __webpack_exports__["c"] = uniqueId;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return canUseDOM; });
function callIfExists(func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return typeof func === 'function' && func.apply(undefined, args);
}

function hasOwnProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

function uniqueId() {
    return Math.random().toString(36).substring(7);
}

var cssClasses = {
    menu: 'react-contextmenu',
    menuVisible: 'react-contextmenu--visible',
    menuWrapper: 'react-contextmenu-wrapper',
    menuItem: 'react-contextmenu-item',
    menuItemActive: 'react-contextmenu-item--active',
    menuItemDisabled: 'react-contextmenu-item--disabled',
    menuItemDivider: 'react-contextmenu-item--divider',
    menuItemSelected: 'react-contextmenu-item--selected',
    subMenu: 'react-contextmenu-submenu'
};

var store = {};

var canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ContextMenu__ = __webpack_require__(407);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return __WEBPACK_IMPORTED_MODULE_0__ContextMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContextMenuTrigger__ = __webpack_require__(161);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuTrigger", function() { return __WEBPACK_IMPORTED_MODULE_1__ContextMenuTrigger__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuItem__ = __webpack_require__(162);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return __WEBPACK_IMPORTED_MODULE_2__MenuItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SubMenu__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenu", function() { return __WEBPACK_IMPORTED_MODULE_3__SubMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connectMenu__ = __webpack_require__(408);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectMenu", function() { return __WEBPACK_IMPORTED_MODULE_4__connectMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hideMenu", function() { return __WEBPACK_IMPORTED_MODULE_5__actions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "showMenu", function() { return __WEBPACK_IMPORTED_MODULE_5__actions__["b"]; });







/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_Index", {
  value: {
    index: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_PositionInfo", {
  value: {
    x: __webpack_require__(0).number.isRequired,
    y: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_ScrollPosition", {
  value: {
    scrollLeft: __webpack_require__(0).number.isRequired,
    scrollTop: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_SizeAndPositionInfo", {
  value: {
    height: __webpack_require__(0).number.isRequired,
    width: __webpack_require__(0).number.isRequired,
    x: __webpack_require__(0).number.isRequired,
    y: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_SizeInfo", {
  value: {
    height: __webpack_require__(0).number.isRequired,
    width: __webpack_require__(0).number.isRequired
  },
  configurable: true
});

/***/ }),
/* 38 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(75);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(268)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(124)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(137)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var hide = __webpack_require__(33);
var has = __webpack_require__(44);
var SRC = __webpack_require__(98)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(42).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MENU_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MENU_HIDE; });
/* unused harmony export dispatchGlobalEvent */
/* harmony export (immutable) */ __webpack_exports__["b"] = showMenu;
/* harmony export (immutable) */ __webpack_exports__["a"] = hideMenu;




var MENU_SHOW = 'REACT_CONTEXTMENU_SHOW';
var MENU_HIDE = 'REACT_CONTEXTMENU_HIDE';

function dispatchGlobalEvent(eventName, opts) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

    // Compatibale with IE
    // @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
    var event = void 0;

    if (typeof window.CustomEvent === 'function') {
        event = new window.CustomEvent(eventName, { detail: opts });
    } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, false, true, opts);
    }

    if (target) {
        target.dispatchEvent(event);
        __WEBPACK_IMPORTED_MODULE_0_object_assign___default()(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* store */], opts);
    }
}

function showMenu() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var target = arguments[1];

    dispatchGlobalEvent(MENU_SHOW, __WEBPACK_IMPORTED_MODULE_0_object_assign___default()({}, opts, { type: MENU_SHOW }), target);
}

function hideMenu() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var target = arguments[1];

    dispatchGlobalEvent(MENU_HIDE, __WEBPACK_IMPORTED_MODULE_0_object_assign___default()({}, opts, { type: MENU_HIDE }), target);
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_CellDataGetterParams", {
  value: {
    columnData: __webpack_require__(0).any,
    dataKey: __webpack_require__(0).string.isRequired,
    rowData: __webpack_require__(0).any.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_CellRendererParams", {
  value: {
    cellData: __webpack_require__(0).any,
    columnData: __webpack_require__(0).any,
    dataKey: __webpack_require__(0).string.isRequired,
    rowData: __webpack_require__(0).any.isRequired,
    rowIndex: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_HeaderRowRendererParams", {
  value: {
    className: __webpack_require__(0).string.isRequired,
    columns: __webpack_require__(0).arrayOf(__webpack_require__(0).any).isRequired,
    style: __webpack_require__(0).any.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_HeaderRendererParams", {
  value: {
    columnData: __webpack_require__(0).any,
    dataKey: __webpack_require__(0).string.isRequired,
    disableSort: __webpack_require__(0).bool,
    label: __webpack_require__(0).any,
    sortBy: __webpack_require__(0).string,
    sortDirection: __webpack_require__(0).string
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_RowRendererParams", {
  value: {
    className: __webpack_require__(0).string.isRequired,
    columns: __webpack_require__(0).arrayOf(__webpack_require__(0).any).isRequired,
    index: __webpack_require__(0).number.isRequired,
    isScrolling: __webpack_require__(0).bool.isRequired,
    onRowClick: __webpack_require__(0).func,
    onRowDoubleClick: __webpack_require__(0).func,
    onRowMouseOver: __webpack_require__(0).func,
    onRowMouseOut: __webpack_require__(0).func,
    rowData: __webpack_require__(0).any.isRequired,
    style: __webpack_require__(0).any.isRequired
  },
  configurable: true
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArrowKeyStepper__ = __webpack_require__(411);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowKeyStepper", function() { return __WEBPACK_IMPORTED_MODULE_0__ArrowKeyStepper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AutoSizer__ = __webpack_require__(413);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AutoSizer", function() { return __WEBPACK_IMPORTED_MODULE_1__AutoSizer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CellMeasurer__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CellMeasurer", function() { return __WEBPACK_IMPORTED_MODULE_2__CellMeasurer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CellMeasurerCache", function() { return __WEBPACK_IMPORTED_MODULE_2__CellMeasurer__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collection__ = __webpack_require__(420);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return __WEBPACK_IMPORTED_MODULE_3__Collection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ColumnSizer__ = __webpack_require__(423);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnSizer", function() { return __WEBPACK_IMPORTED_MODULE_4__ColumnSizer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Grid__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "accessibilityOverscanIndicesGetter", function() { return __WEBPACK_IMPORTED_MODULE_5__Grid__["accessibilityOverscanIndicesGetter"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCellRangeRenderer", function() { return __WEBPACK_IMPORTED_MODULE_5__Grid__["defaultCellRangeRenderer"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOverscanIndicesGetter", function() { return __WEBPACK_IMPORTED_MODULE_5__Grid__["defaultOverscanIndicesGetter"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_5__Grid__["Grid"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__InfiniteLoader__ = __webpack_require__(429);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteLoader", function() { return __WEBPACK_IMPORTED_MODULE_6__InfiniteLoader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__List__ = __webpack_require__(430);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return __WEBPACK_IMPORTED_MODULE_7__List__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Masonry__ = __webpack_require__(433);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createMasonryCellPositioner", function() { return __WEBPACK_IMPORTED_MODULE_8__Masonry__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Masonry", function() { return __WEBPACK_IMPORTED_MODULE_8__Masonry__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MultiGrid__ = __webpack_require__(436);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MultiGrid", function() { return __WEBPACK_IMPORTED_MODULE_9__MultiGrid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ScrollSync__ = __webpack_require__(438);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSync", function() { return __WEBPACK_IMPORTED_MODULE_10__ScrollSync__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Table__ = __webpack_require__(440);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTableCellDataGetter", function() { return __WEBPACK_IMPORTED_MODULE_11__Table__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTableCellRenderer", function() { return __WEBPACK_IMPORTED_MODULE_11__Table__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTableHeaderRenderer", function() { return __WEBPACK_IMPORTED_MODULE_11__Table__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTableHeaderRowRenderer", function() { return __WEBPACK_IMPORTED_MODULE_11__Table__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTableRowRenderer", function() { return __WEBPACK_IMPORTED_MODULE_11__Table__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return __WEBPACK_IMPORTED_MODULE_11__Table__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return __WEBPACK_IMPORTED_MODULE_11__Table__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return __WEBPACK_IMPORTED_MODULE_11__Table__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SortIndicator", function() { return __WEBPACK_IMPORTED_MODULE_11__Table__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__WindowScroller__ = __webpack_require__(442);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WindowScroller", function() { return __WEBPACK_IMPORTED_MODULE_12__WindowScroller__["a"]; });














/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animationFrame__ = __webpack_require__(445);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationTimeout", function() { return cancelAnimationTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationTimeout", function() { return requestAnimationTimeout; });


if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_AnimationTimeoutId', {
  value: {
    id: __webpack_require__(0).number.isRequired
  },
  configurable: true
});


var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animationFrame__["a" /* caf */])(frame.id);
};

/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */
var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start = Date.now();

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animationFrame__["b" /* raf */])(timeout);
    }
  };

  var frame = {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animationFrame__["b" /* raf */])(timeout)
  };

  return frame;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(205).default;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(22).f;
var has = __webpack_require__(25);
var TAG = __webpack_require__(12)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(273);
var global = __webpack_require__(14);
var hide = __webpack_require__(26);
var Iterators = __webpack_require__(30);
var TO_STRING_TAG = __webpack_require__(12)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(58);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(32);
var IE8_DOM_DEFINE = __webpack_require__(291);
var toPrimitive = __webpack_require__(312);
var dP = Object.defineProperty;

exports.f = __webpack_require__(43) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(154);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(355),
    baseIteratee = __webpack_require__(151),
    toInteger = __webpack_require__(395);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SortDirection = {
  /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */
  ASC: 'ASC',

  /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */
  DESC: 'DESC'
};

/* harmony default export */ __webpack_exports__["a"] = SortDirection;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(190).default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(211).default;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(215).default;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(117);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _sharedComponents = __webpack_require__(221);

var _sharedComponents2 = _interopRequireDefault(_sharedComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
   arguments: <ReactElement> or <{ elementType: <string>, elementProps: <object>, callArguments: <array>}>
   return: <ReactElement>
*/
var rawToReactElement = function rawToReactElement(rawElement, key) {
  if (_react2.default.isValidElement(rawElement)) {
    return typeof key === 'undefined' ? (0, _extends3.default)({}, rawElement) : (0, _extends3.default)({}, rawElement, { key: key });
  }

  if (typeof rawElement['elementType'] === 'undefined') {
    return rawElement;
  }

  if (typeof rawElement.callArguments !== 'undefined') {
    return _sharedComponents2.default[rawElement.elementType].apply(_sharedComponents2.default, (0, _toConsumableArray3.default)(rawElement.callArguments));
  }

  if (rawElement.elementType === 'Column') {
    var rawCellRenderer = rawElement.elementProps.cellRenderer;
    var rawHeaderRenderer = rawElement.elementProps.headerRenderer;

    var cellRenderer = rawToReactElement(rawCellRenderer);
    var headerRenderer = rawToReactElement(rawHeaderRenderer);
    var columnProps = (0, _extends3.default)({}, rawElement.elementProps, {
      cellRenderer: cellRenderer,
      headerRenderer: headerRenderer
    });

    return _react2.default.createElement(_sharedComponents2.default[rawElement.elementType], (0, _extends3.default)({}, columnProps, { key: key }));
  }

  return typeof key === 'undefined' ? _react2.default.createElement(_sharedComponents2.default[rawElement.elementType], (0, _extends3.default)({}, rawElement.elementProps)) : _react2.default.createElement(_sharedComponents2.default[rawElement.elementType], (0, _extends3.default)({}, rawElement.elementProps, { key: key }));
};

exports.default = rawToReactElement;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectLastItem = exports.selectFirstItem = exports.removeFirstFromSelection = exports.removeLastFromSelection = exports.addPrevToSelection = exports.addNextToSelection = exports.selectPrev = exports.selectNext = exports.selectRange = exports.removeFromSelection = exports.addToSelection = exports.noop = exports.isDef = undefined;

var _toConsumableArray2 = __webpack_require__(117);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _findIndex2 = __webpack_require__(64);

var _findIndex3 = _interopRequireDefault(_findIndex2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDef = exports.isDef = function isDef(thing) {
  return thing !== undefined;
},
    noop = exports.noop = function noop(_) {},
    addToSelection = exports.addToSelection = function addToSelection(_ref) {
  var selection = _ref.selection,
      ids = _ref.ids,
      _ref$toHead = _ref.toHead,
      toHead = _ref$toHead === undefined ? false : _ref$toHead;

  var filteredIds = ids.filter(function (id) {
    return !selection.includes(id);
  });

  return toHead ? [].concat((0, _toConsumableArray3.default)(filteredIds), (0, _toConsumableArray3.default)(selection)) : [].concat((0, _toConsumableArray3.default)(selection), (0, _toConsumableArray3.default)(filteredIds));
},
    removeFromSelection = exports.removeFromSelection = function removeFromSelection(_ref2) {
  var selection = _ref2.selection,
      id = _ref2.id;
  return selection.filter(function (sid) {
    return sid !== id;
  });
},


// TODO: when needed, refactor utils to accept idPropName argument
// which defined unique key (currently only 'id' is supported)
selectRange = exports.selectRange = function selectRange(_ref3) {
  var items = _ref3.items,
      fromId = _ref3.fromId,
      toId = _ref3.toId;

  var fromIdIndex = (0, _findIndex3.default)(items, function (_ref4) {
    var id = _ref4.id;
    return id === fromId;
  });
  var toIdIndex = (0, _findIndex3.default)(items, function (_ref5) {
    var id = _ref5.id;
    return id === toId;
  });
  var selectionDirection = toIdIndex > fromIdIndex ? 1 : -1;
  var itemsSlice = selectionDirection === 1 ? items.slice(fromIdIndex, toIdIndex + 1) : items.slice(toIdIndex, fromIdIndex + 1);

  var selection = itemsSlice.map(function (_ref6) {
    var id = _ref6.id;
    return id;
  });

  return selection;
},
    selectNext = exports.selectNext = function selectNext(_ref7) {
  var items = _ref7.items,
      currentId = _ref7.lastSelected,
      count = _ref7.count;

  var currentIndex = (0, _findIndex3.default)(items, function (_ref8) {
    var id = _ref8.id;
    return id === currentId;
  });
  var nextIndex = currentIndex + count < items.length ? currentIndex + count : currentIndex;
  var nextId = items[nextIndex].id;

  return {
    selection: [nextId],
    scrollToIndex: nextIndex
  };
},
    selectPrev = exports.selectPrev = function selectPrev(_ref9) {
  var items = _ref9.items,
      currentId = _ref9.lastSelected,
      count = _ref9.count;

  var currentIndex = (0, _findIndex3.default)(items, function (_ref10) {
    var id = _ref10.id;
    return id === currentId;
  });

  if (currentIndex <= -1) {
    // Fix for fast selection updates
    return {
      scrollToIndex: 0
    };
  }

  var prevIndex = currentIndex - count < 0 ? currentIndex : currentIndex - count;
  var prevId = items[prevIndex].id;

  return {
    selection: [prevId],
    scrollToIndex: prevIndex
  };
},
    addNextToSelection = exports.addNextToSelection = function addNextToSelection(_ref11) {
  var selection = _ref11.selection,
      items = _ref11.items,
      lastSelected = _ref11.lastSelected,
      count = _ref11.count;

  var nextSelectionData = selectNext({ items: items, lastSelected: lastSelected, count: count });

  return {
    selection: addToSelection({
      selection: selection,
      ids: selectRange({ items: items, fromId: lastSelected, toId: nextSelectionData.selection[0] })
    }),
    scrollToIndex: nextSelectionData.scrollToIndex
  };
},
    addPrevToSelection = exports.addPrevToSelection = function addPrevToSelection(_ref12) {
  var selection = _ref12.selection,
      items = _ref12.items,
      lastSelected = _ref12.lastSelected,
      count = _ref12.count;

  var prevSelectionData = selectPrev({ items: items, lastSelected: lastSelected, count: count });

  return {
    selection: addToSelection({
      selection: selection,
      ids: selectRange({ items: items, fromId: lastSelected, toId: prevSelectionData.selection[0] }),
      toHead: true
    }),
    scrollToIndex: prevSelectionData.scrollToIndex
  };
},
    removeLastFromSelection = exports.removeLastFromSelection = function removeLastFromSelection(_ref13) {
  var selection = _ref13.selection,
      items = _ref13.items,
      count = _ref13.count;

  if (selection.length > 1) {
    var nextSelection = selection.slice(0, selection.length - count);

    return {
      selection: nextSelection,
      scrollToIndex: (0, _findIndex3.default)(items, function (_ref14) {
        var id = _ref14.id;
        return id === nextSelection[nextSelection.length - 1];
      })
    };
  }

  return {
    selection: selection,
    scrollToIndex: (0, _findIndex3.default)(items, function (_ref15) {
      var id = _ref15.id;
      return id === selection[0];
    })
  };
},
    removeFirstFromSelection = exports.removeFirstFromSelection = function removeFirstFromSelection(_ref16) {
  var selection = _ref16.selection,
      items = _ref16.items,
      count = _ref16.count;

  if (selection.length > 1) {
    var nextSelection = selection.slice(count);

    return {
      selection: nextSelection,
      scrollToIndex: (0, _findIndex3.default)(items, function (_ref17) {
        var id = _ref17.id;
        return id === nextSelection[0];
      })
    };
  }

  return {
    selection: selection,
    scrollToIndex: (0, _findIndex3.default)(items, function (_ref18) {
      var id = _ref18.id;
      return id === selection[0];
    })
  };
},
    selectFirstItem = exports.selectFirstItem = function selectFirstItem(_ref19) {
  var items = _ref19.items;
  return {
    selection: items.length ? [items[0].id] : [],
    scrollToIndex: items.length ? 0 : null
  };
},
    selectLastItem = exports.selectLastItem = function selectLastItem(_ref20) {
  var items = _ref20.items;
  return {
    selection: items.length ? [items[items.length - 1].id] : [],
    scrollToIndex: items.length ? items.length - 1 : null
  };
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(231);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(450);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(38);
var TAG = __webpack_require__(12)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(29);
var document = __webpack_require__(14).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(52);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(21);
var dPs = __webpack_require__(263);
var enumBugKeys = __webpack_require__(77);
var IE_PROTO = __webpack_require__(83)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(76)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(119).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(54);
var createDesc = __webpack_require__(39);
var toIObject = __webpack_require__(24);
var toPrimitive = __webpack_require__(87);
var has = __webpack_require__(25);
var IE8_DOM_DEFINE = __webpack_require__(120);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(16);
var core = __webpack_require__(10);
var fails = __webpack_require__(28);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(84)('keys');
var uid = __webpack_require__(56);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(85);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(29);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);
var core = __webpack_require__(10);
var LIBRARY = __webpack_require__(53);
var wksExt = __webpack_require__(89);
var defineProperty = __webpack_require__(22).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(12);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(74);
var ITERATOR = __webpack_require__(12)('iterator');
var Iterators = __webpack_require__(30);
module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(59);
var TAG = __webpack_require__(15)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 92 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(61);
var document = __webpack_require__(17).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(62).f;
var has = __webpack_require__(44);
var TAG = __webpack_require__(15)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(144)('keys');
var uid = __webpack_require__(98);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 96 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(293);
var defined = __webpack_require__(92);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(35);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var GlobalEventListener = function GlobalEventListener() {
    var _this = this;

    _classCallCheck(this, GlobalEventListener);

    this.handleShowEvent = function (event) {
        for (var id in _this.callbacks) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* hasOwnProp */])(_this.callbacks, id)) _this.callbacks[id].show(event);
        }
    };

    this.handleHideEvent = function (event) {
        for (var id in _this.callbacks) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* hasOwnProp */])(_this.callbacks, id)) _this.callbacks[id].hide(event);
        }
    };

    this.register = function (showCallback, hideCallback) {
        var id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["c" /* uniqueId */])();

        _this.callbacks[id] = {
            show: showCallback,
            hide: hideCallback
        };

        return id;
    };

    this.unregister = function (id) {
        if (id && _this.callbacks[id]) {
            delete _this.callbacks[id];
        }
    };

    this.callbacks = {};

    if (__WEBPACK_IMPORTED_MODULE_1__helpers__["d" /* canUseDOM */]) {
        window.addEventListener(__WEBPACK_IMPORTED_MODULE_0__actions__["c" /* MENU_SHOW */], this.handleShowEvent);
        window.addEventListener(__WEBPACK_IMPORTED_MODULE_0__actions__["d" /* MENU_HIDE */], this.handleHideEvent);
    }
};

/* harmony default export */ __webpack_exports__["a"] = new GlobalEventListener();

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CellSizeAndPositionManager__ = __webpack_require__(425);
/* unused harmony export DEFAULT_MAX_SCROLL_SIZE */




var babelPluginFlowReactPropTypes_proptype_VisibleCellRange = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_VisibleCellRange || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_CellSizeGetter = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_CellSizeGetter || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_Alignment = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_Alignment || __webpack_require__(0).any;



/**
 * Browsers have scroll offset limitations (eg Chrome stops scrolling at ~33.5M pixels where as Edge tops out at ~1.5M pixels).
 * After a certain position, the browser won't allow the user to scroll further (even via JavaScript scroll offset adjustments).
 * This util picks a lower ceiling for max size and artificially adjusts positions within to make it transparent for users.
 */
var DEFAULT_MAX_SCROLL_SIZE = 1500000;

/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */
var ScalingCellSizeAndPositionManager = function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
        maxScrollSize = _ref$maxScrollSize === undefined ? DEFAULT_MAX_SCROLL_SIZE : _ref$maxScrollSize,
        params = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['maxScrollSize']);

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScalingCellSizeAndPositionManager);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_3__CellSizeAndPositionManager__["a" /* default */](params);
    this._maxScrollSize = maxScrollSize;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScalingCellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: 'configure',
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }

    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */

  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
          offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }

    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }

    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }

    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
          offset = _ref4.offset;

      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });

      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: '_getOffsetPercentage',
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
          offset = _ref5.offset,
          totalSize = _ref5.totalSize;

      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: '_offsetToSafeOffset',
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
          offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: '_safeOffsetToOffset',
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
          offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);

  return ScalingCellSizeAndPositionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = ScalingCellSizeAndPositionManager;

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_RowRendererParams', {
  value: {
    index: __webpack_require__(0).number.isRequired,
    isScrolling: __webpack_require__(0).bool.isRequired,
    isVisible: __webpack_require__(0).bool.isRequired,
    key: __webpack_require__(0).string.isRequired,
    parent: __webpack_require__(0).object.isRequired,
    style: __webpack_require__(0).object.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_RowRenderer', {
  value: __webpack_require__(0).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_RenderedRows', {
  value: {
    overscanStartIndex: __webpack_require__(0).number.isRequired,
    overscanStopIndex: __webpack_require__(0).number.isRequired,
    startIndex: __webpack_require__(0).number.isRequired,
    stopIndex: __webpack_require__(0).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Scroll', {
  value: {
    clientHeight: __webpack_require__(0).number.isRequired,
    scrollHeight: __webpack_require__(0).number.isRequired,
    scrollTop: __webpack_require__(0).number.isRequired
  },
  configurable: true
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PositionCache__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_requestAnimationTimeout__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLLING_RESET_TIME_INTERVAL", function() { return DEFAULT_SCROLLING_RESET_TIME_INTERVAL; });











var babelPluginFlowReactPropTypes_proptype_AnimationTimeoutId = __webpack_require__(50).babelPluginFlowReactPropTypes_proptype_AnimationTimeoutId || __webpack_require__(0).any;

var emptyObject = {};

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * This component efficiently displays arbitrarily positioned cells using windowing techniques.
 * Cell position is determined by an injected `cellPositioner` property.
 * Windowing is vertical; this component does not support horizontal scrolling.
 *
 * Rendering occurs in two phases:
 * 1) First pass uses estimated cell sizes (provided by the cache) to determine how many cells to measure in a batch.
 *    Batch size is chosen using a fast, naive layout algorithm that stacks images in order until the viewport has been filled.
 *    After measurement is complete (componentDidMount or componentDidUpdate) this component evaluates positioned cells
 *    in order to determine if another measurement pass is required (eg if actual cell sizes were less than estimated sizes).
 *    All measurements are permanently cached (keyed by `keyMapper`) for performance purposes.
 * 2) Second pass uses the external `cellPositioner` to layout cells.
 *    At this time the positioner has access to cached size measurements for all cells.
 *    The positions it returns are cached by Masonry for fast access later.
 *    Phase one is repeated if the user scrolls beyond the current layout's bounds.
 *    If the layout is invalidated due to eg a resize, cached positions can be cleared using `recomputeCellPositions()`.
 *
 * Animation constraints:
 *   Simple animations are supported (eg translate/slide into place on initial reveal).
 *   More complex animations are not (eg flying from one position to another on resize).
 *
 * Layout constraints:
 *   This component supports multi-column layout.
 *   The height of each item may vary.
 *   The width of each item must not exceed the width of the column it is "in".
 *   The left position of all items within a column must align.
 *   (Items may not span multiple columns.)
 */

var Masonry = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Masonry, _PureComponent);

  function Masonry(props, context) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Masonry);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Masonry.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Masonry)).call(this, props, context));

    _this._invalidateOnUpdateStartIndex = null;
    _this._invalidateOnUpdateStopIndex = null;
    _this._positionCache = new __WEBPACK_IMPORTED_MODULE_8__PositionCache__["a" /* default */]();
    _this._startIndex = null;
    _this._startIndexMemoized = null;
    _this._stopIndex = null;
    _this._stopIndexMemoized = null;


    _this.state = {
      isScrolling: false,
      scrollTop: 0
    };

    _this._debounceResetIsScrollingCallback = _this._debounceResetIsScrollingCallback.bind(_this);
    _this._setScrollingContainerRef = _this._setScrollingContainerRef.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Masonry, [{
    key: 'clearCellPositions',
    value: function clearCellPositions() {
      this._positionCache = new __WEBPACK_IMPORTED_MODULE_8__PositionCache__["a" /* default */]();
      this.forceUpdate();
    }

    // HACK This method signature was intended for Grid

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref) {
      var index = _ref.rowIndex;

      if (this._invalidateOnUpdateStartIndex === null) {
        this._invalidateOnUpdateStartIndex = index;
        this._invalidateOnUpdateStopIndex = index;
      } else {
        this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, index);
        this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, index);
      }
    }
  }, {
    key: 'recomputeCellPositions',
    value: function recomputeCellPositions() {
      var stopIndex = this._positionCache.count - 1;

      this._positionCache = new __WEBPACK_IMPORTED_MODULE_8__PositionCache__["a" /* default */]();
      this._populatePositionCache(0, stopIndex);

      this.forceUpdate();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._debounceResetIsScrollingId) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(this._debounceResetIsScrollingId);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var scrollTop = this.props.scrollTop;


      if (scrollTop !== nextProps.scrollTop) {
        this._debounceResetIsScrolling();

        this.setState({
          isScrolling: true,
          scrollTop: nextProps.scrollTop
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoHeight = _props.autoHeight,
          cellCount = _props.cellCount,
          cellMeasurerCache = _props.cellMeasurerCache,
          cellRenderer = _props.cellRenderer,
          className = _props.className,
          height = _props.height,
          id = _props.id,
          keyMapper = _props.keyMapper,
          overscanByPixels = _props.overscanByPixels,
          role = _props.role,
          style = _props.style,
          tabIndex = _props.tabIndex,
          width = _props.width;
      var _state = this.state,
          isScrolling = _state.isScrolling,
          scrollTop = _state.scrollTop;


      var children = [];

      var estimateTotalHeight = this._getEstimatedTotalHeight();

      var shortestColumnSize = this._positionCache.shortestColumnSize;
      var measuredCellCount = this._positionCache.count;

      // We need to measure more cells before layout
      if (shortestColumnSize < scrollTop + height + overscanByPixels && measuredCellCount < cellCount) {
        var batchSize = Math.min(cellCount - measuredCellCount, Math.ceil((scrollTop + height + overscanByPixels - shortestColumnSize) / cellMeasurerCache.defaultHeight * width / cellMeasurerCache.defaultWidth));

        for (var _index = measuredCellCount; _index < measuredCellCount + batchSize; _index++) {
          children.push(cellRenderer({
            index: _index,
            isScrolling: isScrolling,
            key: keyMapper(_index),
            parent: this,
            style: {
              width: cellMeasurerCache.getWidth(_index)
            }
          }));
        }
      } else {
        (function () {
          var stopIndex = void 0;
          var startIndex = void 0;

          _this2._positionCache.range(Math.max(0, scrollTop - overscanByPixels), height + overscanByPixels * 2, function (index, left, top) {
            if (typeof startIndex === 'undefined') {
              startIndex = index;
              stopIndex = index;
            } else {
              startIndex = Math.min(startIndex, index);
              stopIndex = Math.max(stopIndex, index);
            }

            children.push(cellRenderer({
              index: index,
              isScrolling: isScrolling,
              key: keyMapper(index),
              parent: _this2,
              style: {
                height: cellMeasurerCache.getHeight(index),
                left: left,
                position: 'absolute',
                top: top,
                width: cellMeasurerCache.getWidth(index)
              }
            }));

            _this2._startIndex = startIndex;
            _this2._stopIndex = stopIndex;
          });
        })();
      }

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        {
          ref: this._setScrollingContainerRef,
          'aria-label': this.props['aria-label'],
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()('ReactVirtualized__Masonry', className),
          id: id,
          onScroll: this._onScroll,
          role: role,
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            boxSizing: 'border-box',
            direction: 'ltr',
            height: autoHeight ? 'auto' : height,
            overflowX: 'hidden',
            overflowY: estimateTotalHeight < height ? 'hidden' : 'auto',
            position: 'relative',
            width: width,
            WebkitOverflowScrolling: 'touch',
            willChange: 'transform'
          }, style),
          tabIndex: tabIndex },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          {
            className: 'ReactVirtualized__Masonry__innerScrollContainer',
            style: {
              width: '100%',
              height: estimateTotalHeight,
              maxWidth: '100%',
              maxHeight: estimateTotalHeight,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              position: 'relative'
            } },
          children
        )
      );
    }
  }, {
    key: '_checkInvalidateOnUpdate',
    value: function _checkInvalidateOnUpdate() {
      if (typeof this._invalidateOnUpdateStartIndex === 'number') {
        var _startIndex = this._invalidateOnUpdateStartIndex;
        var _stopIndex = this._invalidateOnUpdateStopIndex;

        this._invalidateOnUpdateStartIndex = null;
        this._invalidateOnUpdateStopIndex = null;

        // Query external layout logic for position of newly-measured cells
        this._populatePositionCache(_startIndex, _stopIndex);

        this.forceUpdate();
      }
    }
  }, {
    key: '_debounceResetIsScrolling',
    value: function _debounceResetIsScrolling() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;


      if (this._debounceResetIsScrollingId) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(this._debounceResetIsScrollingId);
      }

      this._debounceResetIsScrollingId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_requestAnimationTimeout__["requestAnimationTimeout"])(this._debounceResetIsScrollingCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_debounceResetIsScrollingCallback',
    value: function _debounceResetIsScrollingCallback() {
      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: '_getEstimatedTotalHeight',
    value: function _getEstimatedTotalHeight() {
      var _props2 = this.props,
          cellCount = _props2.cellCount,
          cellMeasurerCache = _props2.cellMeasurerCache,
          width = _props2.width;


      var estimatedColumnCount = Math.floor(width / cellMeasurerCache.defaultWidth);

      return this._positionCache.estimateTotalHeight(cellCount, estimatedColumnCount, cellMeasurerCache.defaultHeight);
    }
  }, {
    key: '_invokeOnScrollCallback',
    value: function _invokeOnScrollCallback() {
      var _props3 = this.props,
          height = _props3.height,
          onScroll = _props3.onScroll;
      var scrollTop = this.state.scrollTop;


      if (this._onScrollMemoized !== scrollTop) {
        onScroll({
          clientHeight: height,
          scrollHeight: this._getEstimatedTotalHeight(),
          scrollTop: scrollTop
        });

        this._onScrollMemoized = scrollTop;
      }
    }
  }, {
    key: '_invokeOnCellsRenderedCallback',
    value: function _invokeOnCellsRenderedCallback() {
      if (this._startIndexMemoized !== this._startIndex || this._stopIndexMemoized !== this._stopIndex) {
        var _onCellsRendered = this.props.onCellsRendered;


        _onCellsRendered({
          startIndex: this._startIndex,
          stopIndex: this._stopIndex
        });

        this._startIndexMemoized = this._startIndex;
        this._stopIndexMemoized = this._stopIndex;
      }
    }
  }, {
    key: '_populatePositionCache',
    value: function _populatePositionCache(startIndex, stopIndex) {
      var _props4 = this.props,
          cellMeasurerCache = _props4.cellMeasurerCache,
          cellPositioner = _props4.cellPositioner;


      for (var _index2 = startIndex; _index2 <= stopIndex; _index2++) {
        var _cellPositioner = cellPositioner(_index2),
            _left = _cellPositioner.left,
            _top = _cellPositioner.top;

        this._positionCache.setPosition(_index2, _left, _top, cellMeasurerCache.getHeight(_index2));
      }
    }
  }, {
    key: '_setScrollingContainerRef',
    value: function _setScrollingContainerRef(ref) {
      this._scrollingContainer = ref;
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(event) {
      var height = this.props.height;


      var eventScrollTop = event.target.scrollTop;

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.
      var scrollTop = Math.min(Math.max(0, this._getEstimatedTotalHeight() - height), eventScrollTop);

      // On iOS, we can arrive at negative offsets by swiping past the start or end.
      // Avoid re-rendering in this case as it can cause problems; see #532 for more.
      if (eventScrollTop !== scrollTop) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._debounceResetIsScrolling();

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollTop !== scrollTop) {
        this.setState({
          isScrolling: true,
          scrollTop: scrollTop
        });
      }
    }
  }]);

  return Masonry;
}(__WEBPACK_IMPORTED_MODULE_6_react__["PureComponent"]);

Masonry.defaultProps = {
  autoHeight: false,
  keyMapper: identity,
  onCellsRendered: noop,
  onScroll: noop,
  overscanByPixels: 20,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  style: emptyObject,
  tabIndex: 0
};
/* harmony default export */ __webpack_exports__["default"] = Masonry;


function identity(value) {
  return value;
}

function noop() {}

if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellMeasurerCache', {
  value: {
    defaultHeight: __webpack_require__(0).number.isRequired,
    defaultWidth: __webpack_require__(0).number.isRequired,
    getHeight: __webpack_require__(0).func.isRequired,
    getWidth: __webpack_require__(0).func.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Positioner', {
  value: __webpack_require__(0).func,
  configurable: true
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createCallbackMemoizer;

/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var cachedIndices = {};

  return function (_ref) {
    var callback = _ref.callback,
        indices = _ref.indices;

    var keys = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];

      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });

    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(184).default;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(187).default;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(191).default;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(201).default;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(208).default;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(209).default;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(210).default;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(216).default;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(217).default;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function createHistory() {
  return { stack: [], currentPointer: null };
}

function pushToHistory(_ref, item) {
  var stack = _ref.stack,
      currentPointer = _ref.currentPointer;

  if (stack[currentPointer] === item) {
    return { stack: stack, currentPointer: currentPointer };
  }

  return {
    stack: stack.slice(0, currentPointer + 1).concat([item]),
    currentPointer: currentPointer === null ? 0 : currentPointer + 1
  };
}

function getHistoryIndex(_ref2, step) {
  var stack = _ref2.stack,
      currentPointer = _ref2.currentPointer;

  var newCurrentPointerCandidate = currentPointer + step;

  var newCurrentPointer = void 0;
  if (newCurrentPointerCandidate < 0) {
    newCurrentPointer = 0;
  } else if (newCurrentPointerCandidate >= stack.length - 1) {
    newCurrentPointer = stack.length - 1;
  } else {
    newCurrentPointer = newCurrentPointerCandidate;
  }

  return newCurrentPointer;
}

function isHistoryStepPossible(_ref3, step) {
  var stack = _ref3.stack,
      currentPointer = _ref3.currentPointer;

  var newCurrentPointerCandidate = currentPointer + step;
  return !(newCurrentPointerCandidate < 0 || newCurrentPointerCandidate > stack.length - 1);
}

function doHistoryStep(_ref4, step) {
  var stack = _ref4.stack,
      currentPointer = _ref4.currentPointer;

  if (isHistoryStepPossible({ stack: stack, currentPointer: currentPointer }, step)) {
    var newCurrentPointer = getHistoryIndex({ stack: stack, currentPointer: currentPointer }, step);
    // let newCurrentComponentId = stack[newCurrentPointer];

    return {
      stack: stack,
      currentPointer: newCurrentPointer
    };
  }

  return { stack: stack, currentPointer: currentPointer };
}

exports.createHistory = createHistory;
exports.pushToHistory = pushToHistory;
exports.getHistoryIndex = getHistoryIndex;
exports.doHistoryStep = doHistoryStep;
exports.isHistoryStepPossible = isHistoryStepPossible;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withSelectionHOC = __webpack_require__(222);

var _withSelectionHOC2 = _interopRequireDefault(_withSelectionHOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _withSelectionHOC2.default;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMessage;
var translations = {
  en: {
    'common.Toolbar.moveForward': 'Move forward',
    'common.Toolbar.moveBack': 'Move back',
    'common.NoFilesFoundStub.nothingToShow': 'There are no data to display',
    'common.NoFilesFoundStub.useContextMenu': 'Use toolbar or context menu to perform available actions',
    'common.Toolbar.listView': 'List view',
    'common.Toolbar.gridView': 'Grid view'
  },
  fr: {
    'common.Toolbar.moveForward': 'Avancer',
    'common.Toolbar.moveBack': 'Revenir en arrière',
    'common.NoFilesFoundStub.nothingToShow': 'Aucun élément à afficher',
    'common.NoFilesFoundStub.useContextMenu': 'Utilisez la barre d\'outil ou le menu contextuel pour faire une action'
  },
  zh: {
    'common.Toolbar.moveForward': '向前',
    'common.Toolbar.moveBack': '后退'
  },
  de: {
    'common.Toolbar.moveForward': 'Vorwärts',
    'common.Toolbar.moveBack': 'Zurück',
    'common.NoFilesFoundStub.nothingToShow': 'Es gibt keine Daten, die angezeigt werden können',
    'common.NoFilesFoundStub.useContextMenu': 'Nutzen Sie die Symbolleiste oder das Kontextmenü, um die verfügbaren Aktionen auszuführen'
  },
  fi: {
    'common.Toolbar.moveForward': 'Siirrä eteenpäin',
    'common.Toolbar.moveBack': 'Siirrä taaksepäin'
  },
  hu: {
    'common.Toolbar.moveForward': 'Előre lépés',
    'common.Toolbar.moveBack': 'Vissza lépés'
  },
  ru: {
    'common.Toolbar.moveForward': 'Переместить вперед',
    'common.Toolbar.moveBack': 'Переместить назад',
    'common.NoFilesFoundStub.nothingToShow': 'Нет данных для отображения',
    'common.NoFilesFoundStub.useContextMenu': 'Используйте доступные действия на панели инструментов или в контекстном меню'
  },
  no: {
    'common.Toolbar.moveForward': 'Flytt fremover',
    'common.Toolbar.moveBack': 'Flytt bakover'
  },
  sv: {
    'common.Toolbar.moveForward': 'Flytta framåt',
    'common.Toolbar.moveBack': 'Flytta bakåt'
  }
};

function getMessage(locale, key, params) {
  var translationExists = translations[locale] && translations[locale][key];
  var translation = translationExists ? translations[locale][key] : translations['en'][key];
  if (!params) {
    return translation;
  }

  var re = /{\w+}/g;
  function replace(match) {
    var replacement = match.slice(1, -1);
    return params[replacement] ? params[replacement] : '';
  }

  return translation.replace(re, replace);
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(244), __esModule: true };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(223);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(233);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(232);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(14).document;
module.exports = document && document.documentElement;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(23) && !__webpack_require__(28)(function () {
  return Object.defineProperty(__webpack_require__(76)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(38);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(30);
var ITERATOR = __webpack_require__(12)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(21);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(53);
var $export = __webpack_require__(16);
var redefine = __webpack_require__(131);
var hide = __webpack_require__(26);
var has = __webpack_require__(25);
var Iterators = __webpack_require__(30);
var $iterCreate = __webpack_require__(257);
var setToStringTag = __webpack_require__(55);
var getPrototypeOf = __webpack_require__(127);
var ITERATOR = __webpack_require__(12)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(12)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(128);
var hiddenKeys = __webpack_require__(77).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(25);
var toObject = __webpack_require__(40);
var IE_PROTO = __webpack_require__(83)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(25);
var toIObject = __webpack_require__(24);
var arrayIndexOf = __webpack_require__(251)(false);
var IE_PROTO = __webpack_require__(83)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var newPromiseCapability = __webpack_require__(78);

module.exports = function (C, x) {
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(21);
var aFunction = __webpack_require__(52);
var SPECIES = __webpack_require__(12)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(27);
var invoke = __webpack_require__(255);
var html = __webpack_require__(119);
var cel = __webpack_require__(76);
var global = __webpack_require__(14);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(38)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 134 */
/***/ (function(module, exports) {



/***/ }),
/* 135 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(42);
var hide = __webpack_require__(33);
var redefine = __webpack_require__(46);
var ctx = __webpack_require__(60);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(17).document;
module.exports = document && document.documentElement;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(140);
var $export = __webpack_require__(136);
var redefine = __webpack_require__(46);
var hide = __webpack_require__(33);
var has = __webpack_require__(44);
var Iterators = __webpack_require__(45);
var $iterCreate = __webpack_require__(296);
var setToStringTag = __webpack_require__(94);
var getPrototypeOf = __webpack_require__(302);
var ITERATOR = __webpack_require__(15)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(58);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(303);
var enumBugKeys = __webpack_require__(135);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(60);
var invoke = __webpack_require__(292);
var html = __webpack_require__(138);
var cel = __webpack_require__(93);
var global = __webpack_require__(17);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(59)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(96);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _detectHover = __webpack_require__(343);

var _detectHover2 = _interopRequireDefault(_detectHover);

var _detectPointer = __webpack_require__(345);

var _detectPointer2 = _interopRequireDefault(_detectPointer);

var _detectTouchEvents = __webpack_require__(346);

var _detectTouchEvents2 = _interopRequireDefault(_detectTouchEvents);

var _detectPassiveEvents = __webpack_require__(344);

var _detectPassiveEvents2 = _interopRequireDefault(_detectPassiveEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * detectIt object structure
 * const detectIt = {
 *   deviceType: 'mouseOnly' / 'touchOnly' / 'hybrid',
 *   passiveEvents: boolean,
 *   hasTouch: boolean,
 *   hasMouse: boolean,
 *   maxTouchPoints: number,
 *   primaryHover: 'hover' / 'none',
 *   primaryPointer: 'fine' / 'coarse' / 'none',
 *   state: {
 *     detectHover,
 *     detectPointer,
 *     detectTouchEvents,
 *     detectPassiveEvents,
 *   },
 *   update() {...},
 * }
 */

function determineDeviceType(hasTouch, anyHover, anyFine, state) {
  // A hybrid device is one that both hasTouch and any input device can hover
  // or has a fine pointer.
  if (hasTouch && (anyHover || anyFine)) return 'hybrid';

  // workaround for browsers that have the touch events api,
  // and have implemented Level 4 media queries but not the
  // hover and pointer media queries, so the tests are all false (notable Firefox)
  // if it hasTouch, no pointer and hover support, and on an android assume it's touchOnly
  // if it hasTouch, no pointer and hover support, and not on an android assume it's a hybrid
  if (hasTouch && Object.keys(state.detectHover).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectHover[key] === false;
  }) && Object.keys(state.detectPointer).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectPointer[key] === false;
  })) {
    if (window.navigator && /android/.test(window.navigator.userAgent.toLowerCase())) {
      return 'touchOnly';
    }
    return 'hybrid';
  }

  // In almost all cases a device that doesn’t support touch will have a mouse,
  // but there may be rare exceptions. Note that it doesn’t work to do additional tests
  // based on hover and pointer media queries as older browsers don’t support these.
  // Essentially, 'mouseOnly' is the default.
  return hasTouch ? 'touchOnly' : 'mouseOnly';
}

var detectIt = {
  state: {
    detectHover: _detectHover2.default,
    detectPointer: _detectPointer2.default,
    detectTouchEvents: _detectTouchEvents2.default,
    detectPassiveEvents: _detectPassiveEvents2.default
  },
  update: function update() {
    detectIt.state.detectHover.update();
    detectIt.state.detectPointer.update();
    detectIt.state.detectTouchEvents.update();
    detectIt.state.detectPassiveEvents.update();
    detectIt.updateOnlyOwnProperties();
  },
  updateOnlyOwnProperties: function updateOnlyOwnProperties() {
    if (typeof window !== 'undefined') {
      detectIt.passiveEvents = detectIt.state.detectPassiveEvents.hasSupport || false;

      detectIt.hasTouch = detectIt.state.detectTouchEvents.hasSupport || false;

      detectIt.deviceType = determineDeviceType(detectIt.hasTouch, detectIt.state.detectHover.anyHover, detectIt.state.detectPointer.anyFine, detectIt.state);

      detectIt.hasMouse = detectIt.deviceType !== 'touchOnly';

      detectIt.primaryInput = detectIt.deviceType === 'mouseOnly' && 'mouse' || detectIt.deviceType === 'touchOnly' && 'touch' ||
      // deviceType is hybrid:
      detectIt.state.detectHover.hover && 'mouse' || detectIt.state.detectHover.none && 'touch' ||
      // if there's no support for hover media queries but detectIt determined it's
      // a hybrid  device, then assume it's a mouse first device
      'mouse';

      // issue with Windows Chrome on hybrid devices starting in version 59 where
      // media queries represent a touch only device, so if the browser is an
      // affected Windows Chrome version and hasTouch,
      // then assume it's a hybrid with primaryInput mouse
      // see https://github.com/rafrex/detect-it/issues/8
      var isAffectedWindowsChromeVersion = /windows/.test(window.navigator.userAgent.toLowerCase()) && /chrome/.test(window.navigator.userAgent.toLowerCase()) && parseInt(/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1], 10) >= 59;

      if (isAffectedWindowsChromeVersion && detectIt.hasTouch) {
        detectIt.deviceType = 'hybrid';
        detectIt.hasMouse = true;
        detectIt.primaryInput = 'mouse';
      }
    }
  }
};

detectIt.updateOnlyOwnProperties();
exports.default = detectIt;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(182);

exports.__esModule = true;
exports.default = scrollbarSize;

var _inDOM = _interopRequireDefault(__webpack_require__(347));

var size;

function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

module.exports = exports["default"];

/***/ }),
/* 149 */,
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(367);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 152 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 154 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(365),
    findIndex = __webpack_require__(64);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 156 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(366);

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var random = __webpack_require__(396)

var url = '_~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

/**
 * Generate secure URL-friendly unique ID.
 *
 * By default, ID will have 21 symbols to have a collision probability similar
 * to UUID v4.
 *
 * @param {number} [size=21] The number of symbols in ID.
 *
 * @return {string} Random string.
 *
 * @example
 * var nanoid = require('nanoid')
 * model.id = nanoid() //=> "Uakgb_J5m9g~0JDMbcJqL"
 *
 * @name nanoid
 */
module.exports = function (size) {
  size = size || 21
  var id = ''
  var bytes = random(size)
  for (var i = 0; i < size; i++) {
    id += url[bytes[i] & 63]
  }
  return id
}


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hoistNonReactStatic = __webpack_require__(348);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(66);

module.exports = function enhanceWithClickOutside(WrappedComponent) {
  var componentName = WrappedComponent.displayName || WrappedComponent.name;

  var EnhancedComponent = function (_React$Component) {
    _inherits(EnhancedComponent, _React$Component);

    function EnhancedComponent(props) {
      _classCallCheck(this, EnhancedComponent);

      var _this = _possibleConstructorReturn(this, (EnhancedComponent.__proto__ || Object.getPrototypeOf(EnhancedComponent)).call(this, props));

      _this.handleClickOutside = _this.handleClickOutside.bind(_this);
      return _this;
    }

    _createClass(EnhancedComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
      }
    }, {
      key: 'handleClickOutside',
      value: function handleClickOutside(e) {
        var domNode = this.__domNode;
        if ((!domNode || !domNode.contains(e.target)) && typeof this.__wrappedComponent.handleClickOutside === 'function') {
          this.__wrappedComponent.handleClickOutside(e);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            wrappedRef = _props.wrappedRef,
            rest = _objectWithoutProperties(_props, ['wrappedRef']);

        return React.createElement(WrappedComponent, _extends({}, rest, {
          ref: function ref(c) {
            _this2.__wrappedComponent = c;
            _this2.__domNode = ReactDOM.findDOMNode(c);
            wrappedRef && wrappedRef(c);
          }
        }));
      }
    }]);

    return EnhancedComponent;
  }(React.Component);

  EnhancedComponent.displayName = 'clickOutside(' + componentName + ')';

  return hoistNonReactStatic(EnhancedComponent, WrappedComponent);
};

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuItem__ = __webpack_require__(162);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var AbstractMenu = function (_Component) {
    _inherits(AbstractMenu, _Component);

    function AbstractMenu(props) {
        _classCallCheck(this, AbstractMenu);

        var _this = _possibleConstructorReturn(this, (AbstractMenu.__proto__ || Object.getPrototypeOf(AbstractMenu)).call(this, props));

        _initialiseProps.call(_this);

        _this.seletedItemRef = null;
        _this.state = {
            selectedItem: null,
            forceSubMenuOpen: false
        };
        return _this;
    }

    return AbstractMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AbstractMenu.propTypes = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.handleKeyNavigation = function (e) {
        // check for isVisible strictly here as it might be undefined when this code executes in the context of SubMenu
        // but we only need to check when it runs in the ContextMenu context
        if (_this2.state.isVisible === false) {
            return;
        }

        switch (e.keyCode) {
            case 37: // left arrow
            case 27:
                // escape
                e.preventDefault();
                _this2.hideMenu(e);
                break;
            case 38:
                // up arrow
                e.preventDefault();
                _this2.selectChildren(true);
                break;
            case 40:
                // down arrow
                e.preventDefault();
                _this2.selectChildren(false);
                break;
            case 39:
                // right arrow
                _this2.tryToOpenSubMenu(e);
                break;
            case 13:
                // enter
                e.preventDefault();
                _this2.tryToOpenSubMenu(e);
                if (_this2.seletedItemRef && _this2.seletedItemRef.ref instanceof HTMLElement) {
                    _this2.seletedItemRef.ref.click();
                }
                break;
            default:
            // do nothing
        }
    };

    this.handleForceClose = function () {
        _this2.setState({ forceSubMenuOpen: false });
    };

    this.tryToOpenSubMenu = function (e) {
        if (_this2.state.selectedItem && _this2.state.selectedItem.type === _this2.getSubMenuType()) {
            e.preventDefault();
            _this2.setState({ forceSubMenuOpen: true });
        }
    };

    this.selectChildren = function (forward) {
        var selectedItem = _this2.state.selectedItem;

        var children = [];
        var childCollector = function childCollector(child) {
            // child can be empty in case you do conditional rendering of components, in which
            // case it should not be accounted for as a real child
            if (!child) {
                return;
            }

            if ([__WEBPACK_IMPORTED_MODULE_2__MenuItem__["a" /* default */], _this2.getSubMenuType()].indexOf(child.type) < 0) {
                // Maybe the MenuItem or SubMenu is capsuled in a wrapper div or something else
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(child.props.children, childCollector);
            } else if (!child.props.divider) {
                children.push(child);
            }
        };
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(_this2.props.children, childCollector);
        var currentIndex = children.indexOf(selectedItem);
        if (currentIndex < 0) {
            _this2.setState({
                selectedItem: forward ? children[children.length - 1] : children[0],
                forceSubMenuOpen: false
            });
        } else if (forward) {
            _this2.setState({
                selectedItem: children[currentIndex - 1 < 0 ? children.length - 1 : currentIndex - 1],
                forceSubMenuOpen: false
            });
        } else {
            _this2.setState({
                selectedItem: children[currentIndex + 1 < children.length ? currentIndex + 1 : 0],
                forceSubMenuOpen: false
            });
        }
    };

    this.onChildMouseMove = function (child) {
        if (_this2.state.selectedItem !== child) {
            _this2.setState({ selectedItem: child, forceSubMenuOpen: false });
        }
    };

    this.onChildMouseLeave = function () {
        _this2.setState({ selectedItem: null, forceSubMenuOpen: false });
    };

    this.renderChildren = function (children) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
            var props = {};
            if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) return child;
            if ([__WEBPACK_IMPORTED_MODULE_2__MenuItem__["a" /* default */], _this2.getSubMenuType()].indexOf(child.type) < 0) {
                // Maybe the MenuItem or SubMenu is capsuled in a wrapper div or something else
                props.children = _this2.renderChildren(child.props.children);
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, props);
            }
            props.onMouseLeave = _this2.onChildMouseLeave.bind(_this2);
            if (child.type === _this2.getSubMenuType()) {
                // special props for SubMenu only
                props.forceOpen = _this2.state.forceSubMenuOpen && _this2.state.selectedItem === child;
                props.forceClose = _this2.handleForceClose;
                props.parentKeyNavigationHandler = _this2.handleKeyNavigation;
            }
            if (!child.props.divider && _this2.state.selectedItem === child) {
                // special props for selected item only
                props.selected = true;
                props.ref = function (ref) {
                    _this2.seletedItemRef = ref;
                };
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, props);
            }
            // onMouseMove is only needed for non selected items
            props.onMouseMove = function () {
                return _this2.onChildMouseMove(child);
            };
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, props);
        });
    };
};

/* harmony default export */ __webpack_exports__["a"] = AbstractMenu;

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__(35);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var ContextMenuTrigger = function (_Component) {
    _inherits(ContextMenuTrigger, _Component);

    function ContextMenuTrigger() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ContextMenuTrigger);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContextMenuTrigger.__proto__ || Object.getPrototypeOf(ContextMenuTrigger)).call.apply(_ref, [this].concat(args))), _this), _this.touchHandled = false, _this.handleMouseDown = function (event) {
            if (_this.props.holdToDisplay >= 0 && event.button === 0) {
                event.persist();
                event.stopPropagation();

                _this.mouseDownTimeoutId = setTimeout(function () {
                    return _this.handleContextClick(event);
                }, _this.props.holdToDisplay);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["f" /* callIfExists */])(_this.props.attributes.onMouseDown, event);
        }, _this.handleMouseUp = function (event) {
            if (event.button === 0) {
                clearTimeout(_this.mouseDownTimeoutId);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["f" /* callIfExists */])(_this.props.attributes.onMouseUp, event);
        }, _this.handleMouseOut = function (event) {
            if (event.button === 0) {
                clearTimeout(_this.mouseDownTimeoutId);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["f" /* callIfExists */])(_this.props.attributes.onMouseOut, event);
        }, _this.handleTouchstart = function (event) {
            _this.touchHandled = false;

            if (_this.props.holdToDisplay >= 0) {
                event.persist();
                event.stopPropagation();

                _this.touchstartTimeoutId = setTimeout(function () {
                    _this.handleContextClick(event);
                    _this.touchHandled = true;
                }, _this.props.holdToDisplay);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["f" /* callIfExists */])(_this.props.attributes.onTouchStart, event);
        }, _this.handleTouchEnd = function (event) {
            if (_this.touchHandled) {
                event.preventDefault();
            }
            clearTimeout(_this.touchstartTimeoutId);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["f" /* callIfExists */])(_this.props.attributes.onTouchEnd, event);
        }, _this.handleContextMenu = function (event) {
            _this.handleContextClick(event);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["f" /* callIfExists */])(_this.props.attributes.onContextMenu, event);
        }, _this.handleContextClick = function (event) {
            if (_this.props.disable) return;

            event.preventDefault();
            event.stopPropagation();

            var x = event.clientX || event.touches && event.touches[0].pageX;
            var y = event.clientY || event.touches && event.touches[0].pageY;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* hideMenu */])();

            var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["f" /* callIfExists */])(_this.props.collect, _this.props);
            var showMenuConfig = {
                position: { x: x, y: y },
                target: _this.elem,
                id: _this.props.id,
                data: data
            };
            if (data && typeof data.then === 'function') {
                // it's promise
                data.then(function (resp) {
                    showMenuConfig.data = resp;
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions__["b" /* showMenu */])(showMenuConfig);
                });
            } else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions__["b" /* showMenu */])(showMenuConfig);
            }
        }, _this.elemRef = function (c) {
            _this.elem = c;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ContextMenuTrigger, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                renderTag = _props.renderTag,
                attributes = _props.attributes,
                children = _props.children;

            var newAttrs = __WEBPACK_IMPORTED_MODULE_3_object_assign___default()({}, attributes, {
                className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuWrapper, attributes.className),
                onContextMenu: this.handleContextMenu,
                onMouseDown: this.handleMouseDown,
                onMouseUp: this.handleMouseUp,
                onTouchStart: this.handleTouchstart,
                onTouchEnd: this.handleTouchEnd,
                onMouseOut: this.handleMouseOut,
                ref: this.elemRef
            });

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(renderTag, newAttrs, children);
        }
    }]);

    return ContextMenuTrigger;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ContextMenuTrigger.propTypes = {
    id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
    attributes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    collect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    disable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    holdToDisplay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    renderTag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
ContextMenuTrigger.defaultProps = {
    attributes: {},
    collect: function collect() {
        return null;
    },

    disable: false,
    holdToDisplay: 1000,
    renderTag: 'div'
};
/* harmony default export */ __webpack_exports__["a"] = ContextMenuTrigger;

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__(35);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MenuItem = function (_Component) {
    _inherits(MenuItem, _Component);

    function MenuItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MenuItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
            event.preventDefault();

            if (_this.props.disabled || _this.props.divider) return;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["f" /* callIfExists */])(_this.props.onClick, event, __WEBPACK_IMPORTED_MODULE_3_object_assign___default()({}, _this.props.data, __WEBPACK_IMPORTED_MODULE_5__helpers__["a" /* store */].data), __WEBPACK_IMPORTED_MODULE_5__helpers__["a" /* store */].target);

            if (_this.props.preventClose) return;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* hideMenu */])();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MenuItem, [{
        key: 'render',
        value: function render() {
            var _cx,
                _this2 = this;

            var _props = this.props,
                disabled = _props.disabled,
                divider = _props.divider,
                children = _props.children,
                attributes = _props.attributes,
                selected = _props.selected;

            var menuItemClassNames = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuItem, attributes && attributes.className, (_cx = {}, _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuItemDisabled, disabled), _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuItemDivider, divider), _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuItemSelected, selected), _cx));

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                _extends({}, attributes, { className: menuItemClassNames,
                    role: 'menuitem', tabIndex: '-1', 'aria-disabled': disabled ? 'true' : 'false',
                    'aria-orientation': divider ? 'horizontal' : null,
                    ref: function ref(_ref2) {
                        _this2.ref = _ref2;
                    },
                    onMouseMove: this.props.onMouseMove, onMouseLeave: this.props.onMouseLeave,
                    onTouchEnd: this.handleClick, onClick: this.handleClick }),
                divider ? null : children
            );
        }
    }]);

    return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

MenuItem.propTypes = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    attributes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    divider: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    preventClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    selected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    onMouseMove: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    onMouseLeave: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
MenuItem.defaultProps = {
    disabled: false,
    data: {},
    divider: false,
    attributes: {},
    preventClose: false,
    onClick: function onClick() {
        return null;
    },

    children: null,
    selected: false,
    onMouseMove: function onMouseMove() {
        return null;
    },
    onMouseLeave: function onMouseLeave() {
        return null;
    }
};
/* harmony default export */ __webpack_exports__["a"] = MenuItem;

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AbstractMenu__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globalEventListener__ = __webpack_require__(99);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var SubMenu = function (_AbstractMenu) {
    _inherits(SubMenu, _AbstractMenu);

    function SubMenu(props) {
        _classCallCheck(this, SubMenu);

        var _this = _possibleConstructorReturn(this, (SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).call(this, props));

        _this.getMenuPosition = function () {
            var _window = window,
                innerWidth = _window.innerWidth,
                innerHeight = _window.innerHeight;

            var rect = _this.subMenu.getBoundingClientRect();
            var position = {};

            if (rect.bottom > innerHeight) {
                position.bottom = 0;
            } else {
                position.top = 0;
            }

            if (rect.right < innerWidth) {
                position.left = '100%';
            } else {
                position.right = '100%';
            }

            return position;
        };

        _this.getRTLMenuPosition = function () {
            var _window2 = window,
                innerHeight = _window2.innerHeight;

            var rect = _this.subMenu.getBoundingClientRect();
            var position = {};

            if (rect.bottom > innerHeight) {
                position.bottom = 0;
            } else {
                position.top = 0;
            }

            if (rect.left < 0) {
                position.left = '100%';
            } else {
                position.right = '100%';
            }

            return position;
        };

        _this.hideMenu = function () {
            if (_this.props.forceOpen) {
                _this.props.forceClose();
            }
            _this.setState({ visible: false, selectedItem: null });
        };

        _this.handleClick = function (e) {
            e.preventDefault();
        };

        _this.handleMouseEnter = function () {
            if (_this.closetimer) clearTimeout(_this.closetimer);

            if (_this.props.disabled || _this.state.visible) return;

            _this.opentimer = setTimeout(function () {
                return _this.setState({
                    visible: true,
                    selectedItem: null
                });
            }, _this.props.hoverDelay);
        };

        _this.handleMouseLeave = function () {
            if (_this.opentimer) clearTimeout(_this.opentimer);

            if (!_this.state.visible) return;

            _this.closetimer = setTimeout(function () {
                return _this.setState({
                    visible: false,
                    selectedItem: null
                });
            }, _this.props.hoverDelay);
        };

        _this.menuRef = function (c) {
            _this.menu = c;
        };

        _this.subMenuRef = function (c) {
            _this.subMenu = c;
        };

        _this.registerHandlers = function () {
            document.removeEventListener('keydown', _this.props.parentKeyNavigationHandler);
            document.addEventListener('keydown', _this.handleKeyNavigation);
        };

        _this.unregisterHandlers = function () {
            document.removeEventListener('keydown', _this.handleKeyNavigation);
            document.addEventListener('keydown', _this.props.parentKeyNavigationHandler);
        };

        _this.state = __WEBPACK_IMPORTED_MODULE_3_object_assign___default()({}, _this.state, {
            visible: false
        });
        return _this;
    }

    _createClass(SubMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.listenId = __WEBPACK_IMPORTED_MODULE_6__globalEventListener__["a" /* default */].register(function () {}, this.hideMenu);
        }
    }, {
        key: 'getSubMenuType',
        value: function getSubMenuType() {
            // eslint-disable-line class-methods-use-this
            return SubMenu;
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            this.isVisibilityChange = (this.state.visible !== nextState.visible || this.props.forceOpen !== nextProps.forceOpen) && !(this.state.visible && nextProps.forceOpen) && !(this.props.forceOpen && nextState.visible);
            return true;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            if (!this.isVisibilityChange) return;
            if (this.props.forceOpen || this.state.visible) {
                var wrapper = window.requestAnimationFrame || setTimeout;
                wrapper(function () {
                    var styles = _this2.props.rtl ? _this2.getRTLMenuPosition() : _this2.getMenuPosition();

                    _this2.subMenu.style.removeProperty('top');
                    _this2.subMenu.style.removeProperty('bottom');
                    _this2.subMenu.style.removeProperty('left');
                    _this2.subMenu.style.removeProperty('right');

                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["b" /* hasOwnProp */])(styles, 'top')) _this2.subMenu.style.top = styles.top;
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["b" /* hasOwnProp */])(styles, 'left')) _this2.subMenu.style.left = styles.left;
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["b" /* hasOwnProp */])(styles, 'bottom')) _this2.subMenu.style.bottom = styles.bottom;
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["b" /* hasOwnProp */])(styles, 'right')) _this2.subMenu.style.right = styles.right;
                    _this2.subMenu.classList.add(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuVisible);

                    _this2.registerHandlers();
                    _this2.setState({ selectedItem: null });
                });
            } else {
                var cleanup = function cleanup() {
                    _this2.subMenu.removeEventListener('transitionend', cleanup);
                    _this2.subMenu.style.removeProperty('bottom');
                    _this2.subMenu.style.removeProperty('right');
                    _this2.subMenu.style.top = 0;
                    _this2.subMenu.style.left = '100%';
                    _this2.unregisterHandlers();
                };
                this.subMenu.addEventListener('transitionend', cleanup);
                this.subMenu.classList.remove(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuVisible);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.listenId) {
                __WEBPACK_IMPORTED_MODULE_6__globalEventListener__["a" /* default */].unregister(this.listenId);
            }

            if (this.opentimer) clearTimeout(this.opentimer);

            if (this.closetimer) clearTimeout(this.closetimer);

            this.unregisterHandlers();
        }
    }, {
        key: 'render',
        value: function render() {
            var _cx;

            var _props = this.props,
                children = _props.children,
                disabled = _props.disabled,
                title = _props.title,
                selected = _props.selected;
            var visible = this.state.visible;

            var menuProps = {
                ref: this.menuRef,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuItem, __WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].subMenu),
                style: {
                    position: 'relative'
                }
            };
            var menuItemProps = {
                className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuItem, (_cx = {}, _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuItemDisabled, disabled), _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuItemActive, visible), _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menuItemSelected, selected), _cx)),
                onMouseMove: this.props.onMouseMove,
                onMouseOut: this.props.onMouseOut,
                onClick: this.handleClick
            };
            var subMenuProps = {
                ref: this.subMenuRef,
                style: {
                    position: 'absolute',
                    transition: 'opacity 1ms', // trigger transitionend event
                    top: 0,
                    left: '100%'
                },
                className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* cssClasses */].menu, this.props.className)
            };

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                _extends({}, menuProps, { role: 'menuitem', tabIndex: '-1', 'aria-haspopup': 'true' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    menuItemProps,
                    title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'nav',
                    _extends({}, subMenuProps, { role: 'menu', tabIndex: '-1' }),
                    this.renderChildren(children)
                )
            );
        }
    }]);

    return SubMenu;
}(__WEBPACK_IMPORTED_MODULE_4__AbstractMenu__["a" /* default */]);

SubMenu.propTypes = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
    title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    hoverDelay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    rtl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    selected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    onMouseMove: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    onMouseOut: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    forceOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    forceClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    parentKeyNavigationHandler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
SubMenu.defaultProps = {
    disabled: false,
    hoverDelay: 500,
    className: '',
    rtl: false,
    selected: false,
    onMouseMove: function onMouseMove() {
        return null;
    },
    onMouseOut: function onMouseOut() {
        return null;
    },
    forceOpen: false,
    forceClose: function forceClose() {
        return null;
    },
    parentKeyNavigationHandler: function parentKeyNavigationHandler() {
        return null;
    }
};
/* harmony default export */ __webpack_exports__["a"] = SubMenu;

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);






var babelPluginFlowReactPropTypes_proptype_RenderedSection = __webpack_require__(13).babelPluginFlowReactPropTypes_proptype_RenderedSection || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_ScrollIndices = __webpack_require__(412).babelPluginFlowReactPropTypes_proptype_ScrollIndices || __webpack_require__(0).any;



/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */

var ArrowKeyStepper = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ArrowKeyStepper, _React$PureComponent);

  function ArrowKeyStepper(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ArrowKeyStepper);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ArrowKeyStepper.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ArrowKeyStepper)).call(this, props));

    _this._columnStartIndex = 0;
    _this._columnStopIndex = 0;
    _this._rowStartIndex = 0;
    _this._rowStopIndex = 0;

    _this._onKeyDown = function (event) {
      var _this$props = _this.props,
          columnCount = _this$props.columnCount,
          disabled = _this$props.disabled,
          mode = _this$props.mode,
          rowCount = _this$props.rowCount;


      if (disabled) {
        return;
      }

      var _this$_getScrollState = _this._getScrollState(),
          scrollToColumnPrevious = _this$_getScrollState.scrollToColumn,
          scrollToRowPrevious = _this$_getScrollState.scrollToRow;

      var _this$_getScrollState2 = _this._getScrollState(),
          scrollToColumn = _this$_getScrollState2.scrollToColumn,
          scrollToRow = _this$_getScrollState2.scrollToRow;

      // The above cases all prevent default event event behavior.
      // This is to keep the grid from scrolling after the snap-to update.


      switch (event.key) {
        case 'ArrowDown':
          scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(_this._rowStopIndex + 1, rowCount - 1);
          break;
        case 'ArrowLeft':
          scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(_this._columnStartIndex - 1, 0);
          break;
        case 'ArrowRight':
          scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(_this._columnStopIndex + 1, columnCount - 1);
          break;
        case 'ArrowUp':
          scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(_this._rowStartIndex - 1, 0);
          break;
      }

      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();

        _this._updateScrollState({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }
    };

    _this._onSectionRendered = function (_ref) {
      var columnStartIndex = _ref.columnStartIndex,
          columnStopIndex = _ref.columnStopIndex,
          rowStartIndex = _ref.rowStartIndex,
          rowStopIndex = _ref.rowStopIndex;

      _this._columnStartIndex = columnStartIndex;
      _this._columnStopIndex = columnStopIndex;
      _this._rowStartIndex = rowStartIndex;
      _this._rowStopIndex = rowStopIndex;
    };

    _this.state = {
      scrollToColumn: props.scrollToColumn,
      scrollToRow: props.scrollToRow
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ArrowKeyStepper, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.isControlled) {
        return;
      }

      var scrollToColumn = nextProps.scrollToColumn,
          scrollToRow = nextProps.scrollToRow;
      var _props = this.props,
          prevScrollToColumn = _props.scrollToColumn,
          prevScrollToRow = _props.scrollToRow;


      if (prevScrollToColumn !== scrollToColumn && prevScrollToRow !== scrollToRow) {
        this.setState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      } else if (prevScrollToColumn !== scrollToColumn) {
        this.setState({ scrollToColumn: scrollToColumn });
      } else if (prevScrollToRow !== scrollToRow) {
        this.setState({ scrollToRow: scrollToRow });
      }
    }
  }, {
    key: 'setScrollIndexes',
    value: function setScrollIndexes(_ref2) {
      var scrollToColumn = _ref2.scrollToColumn,
          scrollToRow = _ref2.scrollToRow;

      this.setState({
        scrollToRow: scrollToRow,
        scrollToColumn: scrollToColumn
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children;

      var _getScrollState2 = this._getScrollState(),
          scrollToColumn = _getScrollState2.scrollToColumn,
          scrollToRow = _getScrollState2.scrollToRow;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: className, onKeyDown: this._onKeyDown },
        children({
          onSectionRendered: this._onSectionRendered,
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        })
      );
    }
  }, {
    key: '_getScrollState',
    value: function _getScrollState() {
      return this.props.isControlled ? this.props : this.state;
    }
  }, {
    key: '_updateScrollState',
    value: function _updateScrollState(_ref3) {
      var scrollToColumn = _ref3.scrollToColumn,
          scrollToRow = _ref3.scrollToRow;
      var _props3 = this.props,
          isControlled = _props3.isControlled,
          onScrollToChange = _props3.onScrollToChange;


      if (typeof onScrollToChange === 'function') {
        onScrollToChange({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }

      if (!isControlled) {
        this.setState({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }
    }
  }]);

  return ArrowKeyStepper;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

ArrowKeyStepper.defaultProps = {
  disabled: false,
  isControlled: false,
  mode: 'edges',
  scrollToColumn: 0,
  scrollToRow: 0
};
ArrowKeyStepper.propTypes = {
  children: __webpack_require__(0).func.isRequired,
  className: __webpack_require__(0).string,
  columnCount: __webpack_require__(0).number.isRequired,
  disabled: __webpack_require__(0).bool.isRequired,
  isControlled: __webpack_require__(0).bool.isRequired,
  mode: __webpack_require__(0).oneOf(['cells', 'edges']).isRequired,
  onScrollToChange: __webpack_require__(0).func,
  rowCount: __webpack_require__(0).number.isRequired,
  scrollToColumn: __webpack_require__(0).number.isRequired,
  scrollToRow: __webpack_require__(0).number.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = ArrowKeyStepper;

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vendor_detectElementResize__ = __webpack_require__(448);






var babelPluginFlowReactPropTypes_proptype_Size = __webpack_require__(414).babelPluginFlowReactPropTypes_proptype_Size || __webpack_require__(0).any;




/**
 * Decorator component that automatically adjusts the width and height of a single child.
 * Child component should not be declared as a child but should rather be specified by a `ChildComponent` property.
 * All other properties will be passed through to the child component.
 */

var AutoSizer = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AutoSizer, _React$PureComponent);

  function AutoSizer() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AutoSizer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = AutoSizer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(AutoSizer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    }, _this._onResize = function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;


      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.

        var height = _this._parentNode.offsetHeight || 0;
        var width = _this._parentNode.offsetWidth || 0;

        var style = window.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(style.paddingRight, 10) || 0;
        var paddingTop = parseInt(style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(style.paddingBottom, 10) || 0;

        var newHeight = height - paddingTop - paddingBottom;
        var newWidth = width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: height - paddingTop - paddingBottom,
            width: width - paddingLeft - paddingRight
          });

          onResize({ height: height, width: width });
        }
      }
    }, _this._setRef = function (autoSizer) {
      _this._autoSizer = autoSizer;
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode instanceof HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode;

        // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41
        this._detectElementResize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__vendor_detectElementResize__["a" /* default */])(nonce);
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth;
      var _state = this.state,
          height = _state.height,
          width = _state.width;

      // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = { overflow: 'visible' };
      var childParams = {};

      if (!disableHeight) {
        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        outerStyle.width = 0;
        childParams.width = width;
      }

      /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
       * Note that if default width/height props were provided this would still work with SSR.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { ref: this._setRef, style: outerStyle },
        children(childParams)
      );
    }
  }]);

  return AutoSizer;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

AutoSizer.defaultProps = {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false
};
AutoSizer.propTypes = {
  children: __webpack_require__(0).func.isRequired,
  defaultHeight: __webpack_require__(0).number,
  defaultWidth: __webpack_require__(0).number,
  disableHeight: __webpack_require__(0).bool.isRequired,
  disableWidth: __webpack_require__(0).bool.isRequired,
  nonce: __webpack_require__(0).string,
  onResize: __webpack_require__(0).func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = AutoSizer;

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* unused harmony export DEFAULT_HEIGHT */
/* unused harmony export DEFAULT_WIDTH */


var DEFAULT_HEIGHT = 30;
var DEFAULT_WIDTH = 100;

// Enables more intelligent mapping of a given column and row index to an item ID.
// This prevents a cell cache from being invalidated when its parent collection is modified.

/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCache = function () {
  function CellMeasurerCache() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CellMeasurerCache);

    this._cellHeightCache = {};
    this._cellWidthCache = {};
    this._columnWidthCache = {};
    this._rowHeightCache = {};
    this._columnCount = 0;
    this._rowCount = 0;

    this.columnWidth = function (_ref) {
      var index = _ref.index;

      var key = _this._keyMapper(0, index);

      return _this._columnWidthCache.hasOwnProperty(key) ? _this._columnWidthCache[key] : _this._defaultWidth;
    };

    this.rowHeight = function (_ref2) {
      var index = _ref2.index;

      var key = _this._keyMapper(index, 0);

      return _this._rowHeightCache.hasOwnProperty(key) ? _this._rowHeightCache[key] : _this._defaultHeight;
    };

    var defaultHeight = params.defaultHeight,
        defaultWidth = params.defaultWidth,
        fixedHeight = params.fixedHeight,
        fixedWidth = params.fixedWidth,
        keyMapper = params.keyMapper,
        minHeight = params.minHeight,
        minWidth = params.minWidth;


    this._hasFixedHeight = fixedHeight === true;
    this._hasFixedWidth = fixedWidth === true;
    this._minHeight = minHeight || 0;
    this._minWidth = minWidth || 0;
    this._keyMapper = keyMapper || defaultKeyMapper;

    this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT);
    this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH);

    if (false) {
      if (this._hasFixedHeight === false && this._hasFixedWidth === false) {
        console.warn("CellMeasurerCache should only measure a cell's width or height. " + 'You have configured CellMeasurerCache to measure both. ' + 'This will result in poor performance.');
      }

      if (this._hasFixedHeight === false && this._defaultHeight === 0) {
        console.warn('Fixed height CellMeasurerCache should specify a :defaultHeight greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }

      if (this._hasFixedWidth === false && this._defaultWidth === 0) {
        console.warn('Fixed width CellMeasurerCache should specify a :defaultWidth greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CellMeasurerCache, [{
    key: 'clear',
    value: function clear(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      delete this._cellHeightCache[key];
      delete this._cellWidthCache[key];

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: 'clearAll',
    value: function clearAll() {
      this._cellHeightCache = {};
      this._cellWidthCache = {};
      this._columnWidthCache = {};
      this._rowHeightCache = {};
      this._rowCount = 0;
      this._columnCount = 0;
    }
  }, {
    key: 'hasFixedHeight',
    value: function hasFixedHeight() {
      return this._hasFixedHeight;
    }
  }, {
    key: 'hasFixedWidth',
    value: function hasFixedWidth() {
      return this._hasFixedWidth;
    }
  }, {
    key: 'getHeight',
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedHeight) {
        return this._defaultHeight;
      } else {
        var _key = this._keyMapper(rowIndex, columnIndex);

        return this._cellHeightCache.hasOwnProperty(_key) ? Math.max(this._minHeight, this._cellHeightCache[_key]) : this._defaultHeight;
      }
    }
  }, {
    key: 'getWidth',
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedWidth) {
        return this._defaultWidth;
      } else {
        var _key2 = this._keyMapper(rowIndex, columnIndex);

        return this._cellWidthCache.hasOwnProperty(_key2) ? Math.max(this._minWidth, this._cellWidthCache[_key2]) : this._defaultWidth;
      }
    }
  }, {
    key: 'has',
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      return this._cellHeightCache.hasOwnProperty(key);
    }
  }, {
    key: 'set',
    value: function set(rowIndex, columnIndex, width, height) {
      var key = this._keyMapper(rowIndex, columnIndex);

      if (columnIndex >= this._columnCount) {
        this._columnCount = columnIndex + 1;
      }
      if (rowIndex >= this._rowCount) {
        this._rowCount = rowIndex + 1;
      }

      // Size is cached per cell so we don't have to re-measure if cells are re-ordered.
      this._cellHeightCache[key] = height;
      this._cellWidthCache[key] = width;

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: '_updateCachedColumnAndRowSizes',
    value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
      // :columnWidth and :rowHeight are derived based on all cells in a column/row.
      // Pre-cache these derived values for faster lookup later.
      // Reads are expected to occur more frequently than writes in this case.
      // Only update non-fixed dimensions though to avoid doing unnecessary work.
      if (!this._hasFixedWidth) {
        var columnWidth = 0;
        for (var i = 0; i < this._rowCount; i++) {
          columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
        }
        var columnKey = this._keyMapper(0, columnIndex);
        this._columnWidthCache[columnKey] = columnWidth;
      }
      if (!this._hasFixedHeight) {
        var rowHeight = 0;
        for (var _i = 0; _i < this._columnCount; _i++) {
          rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
        }
        var rowKey = this._keyMapper(rowIndex, 0);
        this._rowHeightCache[rowKey] = rowHeight;
      }
    }
  }, {
    key: 'defaultHeight',
    get: function get() {
      return this._defaultHeight;
    }
  }, {
    key: 'defaultWidth',
    get: function get() {
      return this._defaultWidth;
    }
  }]);

  return CellMeasurerCache;
}();

/* harmony default export */ __webpack_exports__["a"] = CellMeasurerCache;


function defaultKeyMapper(rowIndex, columnIndex) {
  return rowIndex + '-' + columnIndex;
}

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CellMeasurer__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CellMeasurerCache__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CellMeasurer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__CellMeasurerCache__["a"]; });



/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__CellMeasurer__["a" /* default */];


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectDestructuringEmpty__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectDestructuringEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectDestructuringEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_ScalingCellSizeAndPositionManager__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_createCallbackMemoizer__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_updateScrollIndexHelper__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__defaultCellRangeRenderer__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_requestAnimationTimeout__ = __webpack_require__(50);
/* unused harmony export DEFAULT_SCROLLING_RESET_TIME_INTERVAL */








var babelPluginFlowReactPropTypes_proptype_Alignment = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_Alignment || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_RenderedSection = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_RenderedSection || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_ScrollbarPresenceChange = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_ScrollbarPresenceChange || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_Scroll = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_Scroll || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_NoContentRenderer = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_NoContentRenderer || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_CellSizeGetter = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_CellSizeGetter || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_CellSize = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_CellSize || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_CellPosition = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_CellPosition || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_CellRangeRenderer = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_CellRangeRenderer || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_CellRenderer = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_CellRenderer || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_AnimationTimeoutId = __webpack_require__(50).babelPluginFlowReactPropTypes_proptype_AnimationTimeoutId || __webpack_require__(0).any;












/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

var renderNull = function renderNull() {
  return null;
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
var Grid = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Grid, _React$PureComponent);

  // Invokes onSectionRendered callback only when start/stop row or column indices change
  function Grid(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Grid);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Grid.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Grid)).call(this, props));

    _this.state = {
      isScrolling: false,
      scrollDirectionHorizontal: __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */],
      scrollDirectionVertical: __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */],
      scrollLeft: 0,
      scrollTop: 0
    };
    _this._onGridRenderedMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_createCallbackMemoizer__["a" /* default */])();
    _this._onScrollMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_createCallbackMemoizer__["a" /* default */])(false);
    _this._deferredInvalidateColumnIndex = null;
    _this._deferredInvalidateRowIndex = null;
    _this._recomputeScrollLeftFlag = false;
    _this._recomputeScrollTopFlag = false;
    _this._horizontalScrollBarSize = 0;
    _this._verticalScrollBarSize = 0;
    _this._scrollbarPresenceChanged = false;
    _this._cellCache = {};
    _this._styleCache = {};
    _this._scrollbarSizeMeasured = false;
    _this._renderedColumnStartIndex = 0;
    _this._renderedColumnStopIndex = 0;
    _this._renderedRowStartIndex = 0;
    _this._renderedRowStopIndex = 0;

    _this._debounceScrollEndedCallback = function () {
      _this._disablePointerEventsTimeoutId = null;
      _this._resetStyleCache();
    };

    _this._invokeOnGridRenderedHelper = function () {
      var onSectionRendered = _this.props.onSectionRendered;


      _this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: _this._columnStartIndex,
          columnOverscanStopIndex: _this._columnStopIndex,
          columnStartIndex: _this._renderedColumnStartIndex,
          columnStopIndex: _this._renderedColumnStopIndex,
          rowOverscanStartIndex: _this._rowStartIndex,
          rowOverscanStopIndex: _this._rowStopIndex,
          rowStartIndex: _this._renderedRowStartIndex,
          rowStopIndex: _this._renderedRowStopIndex
        }
      });
    };

    _this._setScrollingContainerRef = function (ref) {
      _this._scrollingContainer = ref;
    };

    _this._onScroll = function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target === _this._scrollingContainer) {
        _this.handleScrollEvent(event.target);
      }
    };

    _this._columnWidthGetter = _this._wrapSizeGetter(props.columnWidth);
    _this._rowHeightGetter = _this._wrapSizeGetter(props.rowHeight);

    var deferredMeasurementCache = props.deferredMeasurementCache;

    _this._columnSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_10__utils_ScalingCellSizeAndPositionManager__["a" /* default */]({
      batchAllCells: deferredMeasurementCache !== undefined && !deferredMeasurementCache.hasFixedHeight(),
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return _this._columnWidthGetter(params);
      },
      estimatedCellSize: _this._getEstimatedColumnSize(props)
    });
    _this._rowSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_10__utils_ScalingCellSizeAndPositionManager__["a" /* default */]({
      batchAllCells: deferredMeasurementCache !== undefined && !deferredMeasurementCache.hasFixedWidth(),
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return _this._rowHeightGetter(params);
      },
      estimatedCellSize: _this._getEstimatedRowSize(props)
    });
    return _this;
  }

  /**
   * Gets offsets for a given cell and alignment.
   */


  // See defaultCellRangeRenderer() for more information on the usage of these caches


  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Grid, [{
    key: 'getOffsetForCell',
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alignment = _ref.alignment,
          alignment = _ref$alignment === undefined ? this.props.scrollToAlignment : _ref$alignment,
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === undefined ? this.props.scrollToColumn : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === undefined ? this.props.scrollToRow : _ref$rowIndex;

      var offsetProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });

      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }

    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */

  }, {
    key: 'handleScrollEvent',
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeftParam = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTopParam = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop;

      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._debounceScrollEnded();

      var _props = this.props,
          autoHeight = _props.autoHeight,
          autoWidth = _props.autoWidth,
          height = _props.height,
          width = _props.width;

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = this._scrollbarSize;
      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam);

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        var _scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["c" /* SCROLL_DIRECTION_BACKWARD */] : this.state.scrollDirectionHorizontal;
        var _scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["c" /* SCROLL_DIRECTION_BACKWARD */] : this.state.scrollDirectionVertical;

        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: _scrollDirectionHorizontal,
          scrollDirectionVertical: _scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }

        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalColumnsWidth: totalColumnsWidth,
        totalRowsHeight: totalRowsHeight
      });
    }

    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex,
          rowIndex = _ref3.rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }

    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */

  }, {
    key: 'measureAllCells',
    value: function measureAllCells() {
      var _props2 = this.props,
          columnCount = _props2.columnCount,
          rowCount = _props2.rowCount;


      this._columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      this._rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }

    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$columnIndex = _ref4.columnIndex,
          columnIndex = _ref4$columnIndex === undefined ? 0 : _ref4$columnIndex,
          _ref4$rowIndex = _ref4.rowIndex,
          rowIndex = _ref4$rowIndex === undefined ? 0 : _ref4$rowIndex;

      var _props3 = this.props,
          scrollToColumn = _props3.scrollToColumn,
          scrollToRow = _props3.scrollToRow;


      this._columnSizeAndPositionManager.resetCell(columnIndex);
      this._rowSizeAndPositionManager.resetCell(rowIndex);

      // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && columnIndex <= scrollToColumn;
      this._recomputeScrollTopFlag = scrollToRow >= 0 && rowIndex <= scrollToRow;

      // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.
      this._cellCache = {};
      this._styleCache = {};

      this.forceUpdate();
    }

    /**
     * Ensure column and row are visible.
     */

  }, {
    key: 'scrollToCell',
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;


      var props = this.props;

      // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.
      if (columnCount > 1 && columnIndex !== undefined) {
        this._updateScrollLeftForScrollToColumn(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      if (rowIndex !== undefined) {
        this._updateScrollTopForScrollToRow(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props4 = this.props,
          getScrollbarSize = _props4.getScrollbarSize,
          height = _props4.height,
          scrollLeft = _props4.scrollLeft,
          scrollToColumn = _props4.scrollToColumn,
          scrollTop = _props4.scrollTop,
          scrollToRow = _props4.scrollToRow,
          width = _props4.width;

      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize();

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.
      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = getScrollbarSize();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
        this.scrollToPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
      }

      // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.
      var sizeIsBiggerThanZero = height > 0 && width > 0;
      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }
      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      }

      // Update onRowsRendered callback
      this._invokeOnGridRenderedHelper();

      // Initialize onScroll callback
      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: this._columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: this._rowSizeAndPositionManager.getTotalSize()
      });

      this._maybeCallOnScrollbarPresenceChange();
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props5 = this.props,
          autoHeight = _props5.autoHeight,
          autoWidth = _props5.autoWidth,
          columnCount = _props5.columnCount,
          height = _props5.height,
          rowCount = _props5.rowCount,
          scrollToAlignment = _props5.scrollToAlignment,
          scrollToColumn = _props5.scrollToColumn,
          scrollToRow = _props5.scrollToRow,
          width = _props5.width;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollPositionChangeReason = _state.scrollPositionChangeReason,
          scrollTop = _state.scrollTop;

      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize();

      // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218
      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.
      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (!autoHeight && scrollTop >= 0 && (scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.
      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0;

      // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;
        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_updateScrollIndexHelper__["a" /* default */])({
          cellSizeAndPositionManager: this._columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;
        this._updateScrollTopForScrollToRow(this.props);
      } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_updateScrollIndexHelper__["a" /* default */])({
          cellSizeAndPositionManager: this._rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnGridRenderedHelper();

      // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          totalColumnsWidth: totalColumnsWidth,
          totalRowsHeight: totalRowsHeight
        });
      }

      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var getScrollbarSize = this.props.getScrollbarSize;

      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
      // We handle this case in componentDidMount()

      this._scrollbarSize = getScrollbarSize();
      if (this._scrollbarSize === undefined) {
        this._scrollbarSizeMeasured = false;
        this._scrollbarSize = 0;
      } else {
        this._scrollbarSizeMeasured = true;
      }

      this._calculateChildrenToRender();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var _state2 = this.state,
          scrollLeft = _state2.scrollLeft,
          scrollTop = _state2.scrollTop;


      if (nextProps.columnCount === 0 && scrollLeft !== 0 || nextProps.rowCount === 0 && scrollTop !== 0) {
        this.scrollToPosition({
          scrollLeft: 0,
          scrollTop: 0
        });
      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        var newState = {};

        if (nextProps.scrollLeft != null) {
          newState.scrollLeft = nextProps.scrollLeft;
        }
        if (nextProps.scrollTop != null) {
          newState.scrollTop = nextProps.scrollTop;
        }

        this.scrollToPosition(newState);
      }

      if (nextProps.columnWidth !== this.props.columnWidth || nextProps.rowHeight !== this.props.rowHeight) {
        this._styleCache = {};
      }

      this._columnWidthGetter = this._wrapSizeGetter(nextProps.columnWidth);
      this._rowHeightGetter = this._wrapSizeGetter(nextProps.rowHeight);

      this._columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: this._getEstimatedColumnSize(nextProps)
      });
      this._rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: this._getEstimatedRowSize(nextProps)
      });

      var _props6 = this.props,
          columnCount = _props6.columnCount,
          rowCount = _props6.rowCount;

      // Special case when either cols or rows were 0
      // This would prevent any cells from rendering
      // So we need to reset row scroll if cols changed from 0 (and vice versa)

      if (columnCount === 0 || rowCount === 0) {
        columnCount = 0;
        rowCount = 0;
      }

      // If scrolling is controlled outside this component, clear cache when scrolling stops
      if (nextProps.autoHeight && nextProps.isScrolling === false && this.props.isScrolling === true) {
        this._resetStyleCache();
      }

      // Update scroll offsets if the size or number of cells have changed, invalidating the previous value
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__["a" /* default */])({
        cellCount: columnCount,
        cellSize: typeof this.props.columnWidth === 'number' ? this.props.columnWidth : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return _this3._columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: this.props.scrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          return _this3._updateScrollLeftForScrollToColumn(nextProps, _this3.state);
        }
      });
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__["a" /* default */])({
        cellCount: rowCount,
        cellSize: typeof this.props.rowHeight === 'number' ? this.props.rowHeight : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return _this3._rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: this.props.scrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          return _this3._updateScrollTopForScrollToRow(nextProps, _this3.state);
        }
      });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this._calculateChildrenToRender(nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          autoContainerWidth = _props7.autoContainerWidth,
          autoHeight = _props7.autoHeight,
          autoWidth = _props7.autoWidth,
          className = _props7.className,
          containerProps = _props7.containerProps,
          containerRole = _props7.containerRole,
          containerStyle = _props7.containerStyle,
          height = _props7.height,
          id = _props7.id,
          noContentRenderer = _props7.noContentRenderer,
          role = _props7.role,
          style = _props7.style,
          tabIndex = _props7.tabIndex,
          width = _props7.width;


      var isScrolling = this._isScrolling();

      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: autoWidth ? 'auto' : width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;

      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      }

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      var childrenToDisplay = this._childrenToDisplay;

      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
          ref: this._setScrollingContainerRef
        }, containerProps, {
          'aria-label': this.props['aria-label'],
          'aria-readonly': this.props['aria-readonly'],
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()('ReactVirtualized__Grid', className),
          id: id,
          onScroll: this._onScroll,
          role: role,
          style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, gridStyle, style),
          tabIndex: tabIndex }),
        childrenToDisplay.length > 0 && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          {
            className: 'ReactVirtualized__Grid__innerScrollContainer',
            role: containerRole,
            style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
              width: autoContainerWidth ? 'auto' : totalColumnsWidth,
              height: totalRowsHeight,
              maxWidth: totalColumnsWidth,
              maxHeight: totalRowsHeight,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              position: 'relative'
            }, containerStyle) },
          childrenToDisplay
        ),
        showNoContentRenderer && noContentRenderer()
      );
    }

    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: '_calculateChildrenToRender',
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
          cellRangeRenderer = props.cellRangeRenderer,
          columnCount = props.columnCount,
          deferredMeasurementCache = props.deferredMeasurementCache,
          height = props.height,
          overscanColumnCount = props.overscanColumnCount,
          overscanIndicesGetter = props.overscanIndicesGetter,
          overscanRowCount = props.overscanRowCount,
          rowCount = props.rowCount,
          width = props.width;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal,
          scrollDirectionVertical = state.scrollDirectionVertical,
          scrollLeft = state.scrollLeft,
          scrollTop = state.scrollTop;


      var isScrolling = this._isScrolling(props, state);

      this._childrenToDisplay = [];

      // Render only enough columns and rows to cover the visible area of the grid.
      if (height > 0 && width > 0) {
        var visibleColumnIndices = this._columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = this._rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });

        var horizontalOffsetAdjustment = this._columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = this._rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        });

        // Store for _invokeOnGridRenderedHelper()
        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;

        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof this._renderedColumnStartIndex === 'number' ? this._renderedColumnStartIndex : 0,
          stopIndex: typeof this._renderedColumnStopIndex === 'number' ? this._renderedColumnStopIndex : -1
        });

        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof this._renderedRowStartIndex === 'number' ? this._renderedRowStartIndex : 0,
          stopIndex: typeof this._renderedRowStopIndex === 'number' ? this._renderedRowStopIndex : -1
          // stopIndex: this._renderedRowStopIndex
        });

        // Store for _invokeOnGridRenderedHelper()
        this._columnStartIndex = overscanColumnIndices.overscanStartIndex;
        this._columnStopIndex = overscanColumnIndices.overscanStopIndex;
        this._rowStartIndex = overscanRowIndices.overscanStartIndex;
        this._rowStopIndex = overscanRowIndices.overscanStopIndex;

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: this._columnSizeAndPositionManager,
          columnStartIndex: this._columnStartIndex,
          columnStopIndex: this._columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          parent: this,
          rowSizeAndPositionManager: this._rowSizeAndPositionManager,
          rowStartIndex: this._rowStartIndex,
          rowStopIndex: this._rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        });
      }
    }

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_debounceScrollEnded',
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;


      if (this._disablePointerEventsTimeoutId) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__utils_requestAnimationTimeout__["requestAnimationTimeout"])(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_getEstimatedColumnSize',
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: '_getEstimatedRowSize',
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }

    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */

  }, {
    key: '_handleInvalidatedGridSize',
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;

        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;

        this.recomputeGridSize({ columnIndex: columnIndex, rowIndex: rowIndex });
      }
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref6) {
      var _this4 = this;

      var scrollLeft = _ref6.scrollLeft,
          scrollTop = _ref6.scrollTop,
          totalColumnsWidth = _ref6.totalColumnsWidth,
          totalRowsHeight = _ref6.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref7) {
          var scrollLeft = _ref7.scrollLeft,
              scrollTop = _ref7.scrollTop;
          var _props8 = _this4.props,
              height = _props8.height,
              onScroll = _props8.onScroll,
              width = _props8.width;


          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_isScrolling',
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + Grid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }
  }, {
    key: '_maybeCallOnScrollbarPresenceChange',
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var _onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;


        this._scrollbarPresenceChanged = false;

        _onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this._scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: 'scrollToPosition',


    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    value: function scrollToPosition(_ref8) {
      var scrollLeft = _ref8.scrollLeft,
          scrollTop = _ref8.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["c" /* SCROLL_DIRECTION_BACKWARD */];
        newState.scrollLeft = scrollLeft;
      }

      if (typeof scrollTop === 'number' && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > this.state.scrollTop ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["c" /* SCROLL_DIRECTION_BACKWARD */];
        newState.scrollTop = scrollTop;
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }, {
    key: '_wrapSizeGetter',
    value: function _wrapSizeGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: '_getCalculatedScrollLeft',
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var columnCount = props.columnCount,
          height = props.height,
          scrollToAlignment = props.scrollToAlignment,
          scrollToColumn = props.scrollToColumn,
          width = props.width;
      var scrollLeft = state.scrollLeft;


      if (columnCount > 0) {
        var finalColumn = columnCount - 1;
        var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;

        return this._columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });
      }
    }
  }, {
    key: '_updateScrollLeftForScrollToColumn',
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var scrollLeft = state.scrollLeft;

      var calculatedScrollLeft = this._getCalculatedScrollLeft(props, state);

      if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        this.scrollToPosition({
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }
    }
  }, {
    key: '_getCalculatedScrollTop',
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var height = props.height,
          rowCount = props.rowCount,
          scrollToAlignment = props.scrollToAlignment,
          scrollToRow = props.scrollToRow,
          width = props.width;
      var scrollTop = state.scrollTop;


      if (rowCount > 0) {
        var finalRow = rowCount - 1;
        var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;

        return this._rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });
      }
    }
  }, {
    key: '_resetStyleCache',
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;

      // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      this._cellCache = {};
      this._styleCache = {};

      // Copy over the visible cell styles so avoid unnecessary re-render.
      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = rowIndex + '-' + columnIndex;
          this._styleCache[key] = styleCache[key];
        }
      }

      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: '_updateScrollTopForScrollToRow',
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var scrollTop = state.scrollTop;

      var calculatedScrollTop = this._getCalculatedScrollTop(props, state);

      if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        this.scrollToPosition({
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }
    }
  }]);

  return Grid;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.PureComponent);

Grid.defaultProps = {
  'aria-label': 'grid',
  'aria-readonly': true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: __WEBPACK_IMPORTED_MODULE_14__defaultCellRangeRenderer__["a" /* default */],
  containerRole: 'rowgroup',
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: __WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize___default.a,
  noContentRenderer: renderNull,
  onScroll: function onScroll(_ref9) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectDestructuringEmpty___default()(_ref9);
  },
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
  onSectionRendered: function onSectionRendered(_ref10) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectDestructuringEmpty___default()(_ref10);
  },
  overscanColumnCount: 0,
  overscanIndicesGetter: __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["a" /* default */],
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0
};
Grid.propTypes = {
  "aria-label": __webpack_require__(0).string.isRequired,
  "aria-readonly": __webpack_require__(0).bool,
  autoContainerWidth: __webpack_require__(0).bool.isRequired,
  autoHeight: __webpack_require__(0).bool.isRequired,
  autoWidth: __webpack_require__(0).bool.isRequired,
  cellRenderer: typeof babelPluginFlowReactPropTypes_proptype_CellRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_CellRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_CellRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_CellRenderer : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_CellRenderer).isRequired,
  cellRangeRenderer: typeof babelPluginFlowReactPropTypes_proptype_CellRangeRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_CellRangeRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_CellRangeRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_CellRangeRenderer : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_CellRangeRenderer).isRequired,
  className: __webpack_require__(0).string,
  columnCount: __webpack_require__(0).number.isRequired,
  columnWidth: typeof babelPluginFlowReactPropTypes_proptype_CellSize === 'function' ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired : babelPluginFlowReactPropTypes_proptype_CellSize : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_CellSize).isRequired,
  containerProps: __webpack_require__(0).object,
  containerRole: __webpack_require__(0).string.isRequired,
  containerStyle: __webpack_require__(0).object.isRequired,
  deferredMeasurementCache: __webpack_require__(0).object,
  estimatedColumnSize: __webpack_require__(0).number.isRequired,
  estimatedRowSize: __webpack_require__(0).number.isRequired,
  getScrollbarSize: __webpack_require__(0).func.isRequired,
  height: __webpack_require__(0).number.isRequired,
  id: __webpack_require__(0).string,
  isScrolling: __webpack_require__(0).bool,
  noContentRenderer: typeof babelPluginFlowReactPropTypes_proptype_NoContentRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_NoContentRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_NoContentRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_NoContentRenderer : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_NoContentRenderer).isRequired,
  onScroll: __webpack_require__(0).func.isRequired,
  onScrollbarPresenceChange: __webpack_require__(0).func.isRequired,
  onSectionRendered: __webpack_require__(0).func.isRequired,
  overscanColumnCount: __webpack_require__(0).number.isRequired,
  overscanIndicesGetter: typeof babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter === 'function' ? babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter.isRequired ? babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter.isRequired : babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter).isRequired,
  overscanRowCount: __webpack_require__(0).number.isRequired,
  role: __webpack_require__(0).string.isRequired,
  rowHeight: typeof babelPluginFlowReactPropTypes_proptype_CellSize === 'function' ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired : babelPluginFlowReactPropTypes_proptype_CellSize : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_CellSize).isRequired,
  rowCount: __webpack_require__(0).number.isRequired,
  scrollingResetTimeInterval: __webpack_require__(0).number.isRequired,
  scrollLeft: __webpack_require__(0).number,
  scrollToAlignment: typeof babelPluginFlowReactPropTypes_proptype_Alignment === 'function' ? babelPluginFlowReactPropTypes_proptype_Alignment.isRequired ? babelPluginFlowReactPropTypes_proptype_Alignment.isRequired : babelPluginFlowReactPropTypes_proptype_Alignment : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_Alignment).isRequired,
  scrollToColumn: __webpack_require__(0).number.isRequired,
  scrollTop: __webpack_require__(0).number,
  scrollToRow: __webpack_require__(0).number.isRequired,
  style: __webpack_require__(0).object.isRequired,
  tabIndex: __webpack_require__(0).number,
  width: __webpack_require__(0).number.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = Grid;

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellRangeRenderer;


/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */

var babelPluginFlowReactPropTypes_proptype_CellRangeRendererParams = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_CellRangeRendererParams || __webpack_require__(0).any;

function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
      cellRenderer = _ref.cellRenderer,
      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
      columnStartIndex = _ref.columnStartIndex,
      columnStopIndex = _ref.columnStopIndex,
      deferredMeasurementCache = _ref.deferredMeasurementCache,
      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
      isScrolling = _ref.isScrolling,
      parent = _ref.parent,
      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
      rowStartIndex = _ref.rowStartIndex,
      rowStopIndex = _ref.rowStopIndex,
      styleCache = _ref.styleCache,
      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
      visibleColumnIndices = _ref.visibleColumnIndices,
      visibleRowIndices = _ref.visibleRowIndices;

  var renderedCells = [];

  // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.
  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();

  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = rowIndex + '-' + columnIndex;
      var style = void 0;

      // Cache style objects so shallow-compare doesn't re-render unnecessarily.
      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };

          styleCache[key] = style;
        }
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };

      var renderedCell = void 0;

      // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      if (isScrolling && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key];

        // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      if (false) {
        warnAboutMissingStyle(parent, renderedCell);
      }

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

function warnAboutMissingStyle(parent, renderedCell) {
  if (false) {
    if (renderedCell) {
      // If the direct child is a CellMeasurer, then we should check its child
      // See issue #611
      if (renderedCell.type && renderedCell.type.__internalCellMeasurerFlag) {
        renderedCell = renderedCell.props.children;
      }

      if (renderedCell && renderedCell.props && renderedCell.props.style === undefined && parent.__warnedAboutMissingStyle !== true) {
        parent.__warnedAboutMissingStyle = true;

        console.warn('Rendered cell should include style property for positioning.');
      }
    }
  }
}

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCROLL_DIRECTION_BACKWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SCROLL_DIRECTION_FORWARD; });
/* unused harmony export SCROLL_DIRECTION_HORIZONTAL */
/* unused harmony export SCROLL_DIRECTION_VERTICAL */
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultOverscanIndicesGetter;
var babelPluginFlowReactPropTypes_proptype_OverscanIndices = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_OverscanIndices || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetterParams = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetterParams || __webpack_require__(0).any;

var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
  }
}

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Grid__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);








var babelPluginFlowReactPropTypes_proptype_Scroll = __webpack_require__(13).babelPluginFlowReactPropTypes_proptype_Scroll || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_CellRendererParams = __webpack_require__(13).babelPluginFlowReactPropTypes_proptype_CellRendererParams || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_RenderedSection = __webpack_require__(13).babelPluginFlowReactPropTypes_proptype_RenderedSection || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter = __webpack_require__(13).babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_CellPosition = __webpack_require__(13).babelPluginFlowReactPropTypes_proptype_CellPosition || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_CellSize = __webpack_require__(13).babelPluginFlowReactPropTypes_proptype_CellSize || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_Alignment = __webpack_require__(13).babelPluginFlowReactPropTypes_proptype_Alignment || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_NoContentRenderer = __webpack_require__(13).babelPluginFlowReactPropTypes_proptype_NoContentRenderer || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_Scroll = __webpack_require__(101).babelPluginFlowReactPropTypes_proptype_Scroll || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_RenderedRows = __webpack_require__(101).babelPluginFlowReactPropTypes_proptype_RenderedRows || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_RowRenderer = __webpack_require__(101).babelPluginFlowReactPropTypes_proptype_RowRenderer || __webpack_require__(0).any;





/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(List, _React$PureComponent);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = List.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(List)).call.apply(_ref, [this].concat(args))), _this), _this._cellRenderer = function (_ref2) {
      var rowIndex = _ref2.rowIndex,
          style = _ref2.style,
          isScrolling = _ref2.isScrolling,
          isVisible = _ref2.isVisible,
          key = _ref2.key;
      var rowRenderer = _this.props.rowRenderer;

      // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var _Object$getOwnPropert = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(style, 'width'),
          writable = _Object$getOwnPropert.writable;

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: _this
      });
    }, _this._setRef = function (ref) {
      _this.Grid = ref;
    }, _this._onScroll = function (_ref3) {
      var clientHeight = _ref3.clientHeight,
          scrollHeight = _ref3.scrollHeight,
          scrollTop = _ref3.scrollTop;
      var onScroll = _this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }, _this._onSectionRendered = function (_ref4) {
      var rowOverscanStartIndex = _ref4.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref4.rowOverscanStopIndex,
          rowStartIndex = _ref4.rowStartIndex,
          rowStopIndex = _ref4.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(List, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref5) {
      var alignment = _ref5.alignment,
          index = _ref5.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            _scrollTop = _Grid$getOffsetForCel.scrollTop;

        return _scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$columnIndex = _ref7.columnIndex,
          columnIndex = _ref7$columnIndex === undefined ? 0 : _ref7$columnIndex,
          _ref7$rowIndex = _ref7.rowIndex,
          rowIndex = _ref7$rowIndex === undefined ? 0 : _ref7$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({ scrollTop: scrollTop });
      }
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          noRowsRenderer = _props.noRowsRenderer,
          scrollToIndex = _props.scrollToIndex,
          width = _props.width;


      var classNames = __WEBPACK_IMPORTED_MODULE_9_classnames___default()('ReactVirtualized__List', className);

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);

  return List;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.PureComponent);

List.defaultProps = {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: __WEBPACK_IMPORTED_MODULE_7__Grid__["accessibilityOverscanIndicesGetter"],
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
List.propTypes = {
  "aria-label": __webpack_require__(0).string,
  autoHeight: __webpack_require__(0).bool.isRequired,
  className: __webpack_require__(0).string,
  estimatedRowSize: __webpack_require__(0).number.isRequired,
  height: __webpack_require__(0).number.isRequired,
  noRowsRenderer: typeof babelPluginFlowReactPropTypes_proptype_NoContentRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_NoContentRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_NoContentRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_NoContentRenderer : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_NoContentRenderer).isRequired,
  onRowsRendered: __webpack_require__(0).func.isRequired,
  onScroll: __webpack_require__(0).func.isRequired,
  overscanIndicesGetter: typeof babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter === 'function' ? babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter.isRequired ? babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter.isRequired : babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter).isRequired,
  overscanRowCount: __webpack_require__(0).number.isRequired,
  rowHeight: typeof babelPluginFlowReactPropTypes_proptype_CellSize === 'function' ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired : babelPluginFlowReactPropTypes_proptype_CellSize : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_CellSize).isRequired,
  rowRenderer: typeof babelPluginFlowReactPropTypes_proptype_RowRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_RowRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_RowRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_RowRenderer : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_RowRenderer).isRequired,
  rowCount: __webpack_require__(0).number.isRequired,
  scrollToAlignment: typeof babelPluginFlowReactPropTypes_proptype_Alignment === 'function' ? babelPluginFlowReactPropTypes_proptype_Alignment.isRequired ? babelPluginFlowReactPropTypes_proptype_Alignment.isRequired : babelPluginFlowReactPropTypes_proptype_Alignment : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_Alignment).isRequired,
  scrollToIndex: __webpack_require__(0).number.isRequired,
  scrollTop: __webpack_require__(0).number,
  style: __webpack_require__(0).object.isRequired,
  tabIndex: __webpack_require__(0).number,
  width: __webpack_require__(0).number.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = List;

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__defaultHeaderRenderer__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__defaultCellRenderer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__defaultCellDataGetter__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SortDirection__ = __webpack_require__(65);











/**
 * Describes the header and cell contents of a table column.
 */

var Column = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Column, _Component);

  function Column() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Column);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Column.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Column)).apply(this, arguments));
  }

  return Column;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Column.defaultProps = {
  cellDataGetter: __WEBPACK_IMPORTED_MODULE_8__defaultCellDataGetter__["a" /* default */],
  cellRenderer: __WEBPACK_IMPORTED_MODULE_7__defaultCellRenderer__["a" /* default */],
  defaultSortDirection: __WEBPACK_IMPORTED_MODULE_9__SortDirection__["a" /* default */].ASC,
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: __WEBPACK_IMPORTED_MODULE_6__defaultHeaderRenderer__["a" /* default */],
  style: {}
};
/* harmony default export */ __webpack_exports__["a"] = Column;
Column.propTypes =  false ? {
  /** Optional aria-label value to set on the column header */
  'aria-label': PropTypes.string,

  /**
   * Callback responsible for returning a cell's data, given its :dataKey
   * ({ columnData: any, dataKey: string, rowData: any }): any
   */
  cellDataGetter: PropTypes.func,

  /**
   * Callback responsible for rendering a cell's contents.
   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
   */
  cellRenderer: PropTypes.func,

  /** Optional CSS class to apply to cell */
  className: PropTypes.string,

  /** Optional additional data passed to this column's :cellDataGetter */
  columnData: PropTypes.object,

  /** Uniquely identifies the row-data attribute corresponding to this cell */
  dataKey: PropTypes.any.isRequired,

  /** Optional direction to be used when clicked the first time */
  defaultSortDirection: PropTypes.oneOf([SortDirection.ASC, SortDirection.DESC]),

  /** If sort is enabled for the table at large, disable it for this column */
  disableSort: PropTypes.bool,

  /** Flex grow style; defaults to 0 */
  flexGrow: PropTypes.number,

  /** Flex shrink style; defaults to 1 */
  flexShrink: PropTypes.number,

  /** Optional CSS class to apply to this column's header */
  headerClassName: PropTypes.string,

  /**
   * Optional callback responsible for rendering a column header contents.
   * ({ columnData: object, dataKey: string, disableSort: boolean, label: node, sortBy: string, sortDirection: string }): PropTypes.node
   */
  headerRenderer: PropTypes.func.isRequired,

  /** Optional id to set on the column header */
  id: PropTypes.string,

  /** Header label for this column */
  label: PropTypes.node,

  /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
  maxWidth: PropTypes.number,

  /** Minimum width of column. */
  minWidth: PropTypes.number,

  /** Optional inline style to apply to cell */
  style: PropTypes.object,

  /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
  width: PropTypes.number.isRequired
} : {};

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SortDirection__ = __webpack_require__(65);
/* harmony export (immutable) */ __webpack_exports__["a"] = SortIndicator;





/**
 * Displayed beside a header to indicate that a Table is currently sorted by this column.
 */
function SortIndicator(_ref) {
  var sortDirection = _ref.sortDirection;

  var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()('ReactVirtualized__Table__sortableHeaderIcon', {
    'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === __WEBPACK_IMPORTED_MODULE_3__SortDirection__["a" /* default */].ASC,
    'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === __WEBPACK_IMPORTED_MODULE_3__SortDirection__["a" /* default */].DESC
  });

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    'svg',
    { className: classNames, width: 18, height: 18, viewBox: '0 0 24 24' },
    sortDirection === __WEBPACK_IMPORTED_MODULE_3__SortDirection__["a" /* default */].ASC ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('path', { d: 'M7 14l5-5 5 5z' }) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('path', { d: 'M7 10l5 5 5-5z' }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  );
}

SortIndicator.propTypes =  false ? {
  sortDirection: PropTypes.oneOf([SortDirection.ASC, SortDirection.DESC])
} : {};

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellDataGetter;


/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */
var babelPluginFlowReactPropTypes_proptype_CellDataGetterParams = __webpack_require__(48).babelPluginFlowReactPropTypes_proptype_CellDataGetterParams || __webpack_require__(0).any;

function defaultCellDataGetter(_ref) {
  var dataKey = _ref.dataKey,
      rowData = _ref.rowData;

  if (typeof rowData.get === 'function') {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellRenderer;


/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
var babelPluginFlowReactPropTypes_proptype_CellRendererParams = __webpack_require__(48).babelPluginFlowReactPropTypes_proptype_CellRendererParams || __webpack_require__(0).any;

function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;

  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SortIndicator__ = __webpack_require__(173);
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultHeaderRenderer;



/**
 * Default table header renderer.
 */
var babelPluginFlowReactPropTypes_proptype_HeaderRendererParams = __webpack_require__(48).babelPluginFlowReactPropTypes_proptype_HeaderRendererParams || __webpack_require__(0).any;

function defaultHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey,
      label = _ref.label,
      sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;

  var showSortIndicator = sortBy === dataKey;
  var children = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      className: 'ReactVirtualized__Table__headerTruncatedText',
      key: 'label',
      title: label },
    label
  )];

  if (showSortIndicator) {
    children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SortIndicator__["a" /* default */], { key: 'SortIndicator', sortDirection: sortDirection }));
  }

  return children;
}
defaultHeaderRenderer.propTypes = babelPluginFlowReactPropTypes_proptype_HeaderRendererParams === __webpack_require__(0).any ? {} : babelPluginFlowReactPropTypes_proptype_HeaderRendererParams;

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultHeaderRowRenderer;


var babelPluginFlowReactPropTypes_proptype_HeaderRowRendererParams = __webpack_require__(48).babelPluginFlowReactPropTypes_proptype_HeaderRowRendererParams || __webpack_require__(0).any;

function defaultHeaderRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      style = _ref.style;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: className, role: 'row', style: style },
    columns
  );
}
defaultHeaderRowRenderer.propTypes = babelPluginFlowReactPropTypes_proptype_HeaderRowRendererParams === __webpack_require__(0).any ? {} : babelPluginFlowReactPropTypes_proptype_HeaderRowRendererParams;

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultRowRenderer;



/**
 * Default row renderer for Table.
 */
var babelPluginFlowReactPropTypes_proptype_RowRendererParams = __webpack_require__(48).babelPluginFlowReactPropTypes_proptype_RowRendererParams || __webpack_require__(0).any;

function defaultRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      index = _ref.index,
      key = _ref.key,
      onRowClick = _ref.onRowClick,
      onRowDoubleClick = _ref.onRowDoubleClick,
      onRowMouseOut = _ref.onRowMouseOut,
      onRowMouseOver = _ref.onRowMouseOver,
      onRowRightClick = _ref.onRowRightClick,
      rowData = _ref.rowData,
      style = _ref.style;

  var a11yProps = {};

  if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = function (event) {
        return onRowClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function (event) {
        return onRowDoubleClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = function (event) {
        return onRowMouseOut({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = function (event) {
        return onRowMouseOver({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowRightClick) {
      a11yProps.onContextMenu = function (event) {
        return onRowRightClick({ event: event, index: index, rowData: rowData });
      };
    }
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a11yProps, {
      className: className,
      key: key,
      role: 'row',
      style: style }),
    columns
  );
}
defaultRowRenderer.propTypes = babelPluginFlowReactPropTypes_proptype_RowRendererParams === __webpack_require__(0).any ? {} : babelPluginFlowReactPropTypes_proptype_RowRendererParams;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(320);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!../postcss-loader/index.js??ref--3-2!../less-loader/index.js??ref--3-3!./styles.css", function() {
			var newContent = require("!!../css-loader/index.js!../postcss-loader/index.js??ref--3-2!../less-loader/index.js??ref--3-3!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actions = __webpack_require__(409);

// Here should be CommonJS component exports.

module.exports = {
  FileNavigator: __webpack_require__(197).default,
  FileManager: __webpack_require__(195).default,
  HeaderCell: __webpack_require__(107).default,
  LoadingCell: __webpack_require__(51).default,
  NameCell: __webpack_require__(108).default,
  Notification: __webpack_require__(68).default,
  NotificationProgressItem: __webpack_require__(110).default,
  ProgressIcon: __webpack_require__(69).default,
  SetNameDialog: __webpack_require__(112).default,
  notifUtils: __webpack_require__(214).default,
  hideContextMenu: _actions.hideMenu
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(315);
__webpack_require__(317);
__webpack_require__(318);
__webpack_require__(316);
module.exports = __webpack_require__(42).Promise;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(452);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_Component) {
  _inherits(SVG, _Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          svg = _props.svg,
          children = _props.children,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['svg', 'children', 'className']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, {
          className: 'oc-svg ' + className,
          dangerouslySetInnerHTML: { __html: svg }
        }),
        children
      );
    }
  }]);

  return SVG;
}(_react.Component);

exports.default = SVG;


SVG.propTypes = {
  style: _propTypes2.default.object,
  svg: _propTypes2.default.string,
  className: _propTypes2.default.string
};

SVG.defaultProps = {
  style: {},
  svg: '<svg></svg>',
  className: ''
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(453);

var _LoadingCell = __webpack_require__(51);

var _LoadingCell2 = _interopRequireDefault(_LoadingCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (viewLayoutOptions) {
  return function (cellProps, key) {
    if (viewLayoutOptions.loading) {
      return _react2.default.createElement(_LoadingCell2.default, null);
    }

    var data = viewLayoutOptions.getData ? viewLayoutOptions.getData(viewLayoutOptions, cellProps) : cellProps.cellData;

    return _react2.default.createElement(
      'div',
      { className: 'oc-fm--cell', key: key },
      data
    );
  };
};

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(73);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(72);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Dialog = __webpack_require__(67);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  headerText: _propTypes2.default.string,
  messageText: _propTypes2.default.string,
  cancelButtonText: _propTypes2.default.string,
  submitButtonText: _propTypes2.default.string,
  onHide: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func
};
var defaultProps = {
  headerText: 'Do you really want to remove the file?',
  messageText: 'Message',
  cancelButtonText: 'Cancel',
  submitButtonText: 'OK',
  autofocus: false,
  onHide: function onHide() {},
  onSubmit: function onSubmit() {}
};

var ConfirmDialog = function (_Component) {
  (0, _inherits3.default)(ConfirmDialog, _Component);

  function ConfirmDialog(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, ConfirmDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConfirmDialog.__proto__ || Object.getPrototypeOf(ConfirmDialog)).call(this, props));

    _this.handleKeyDown = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e.which === 13) {
                  // Enter key
                  _this.handleSubmit();
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleCancel = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.props.onHide();

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));
    _this.handleSubmit = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.props.onSubmit();

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    }));
    return _this;
  }

  (0, _createClass3.default)(ConfirmDialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.ref) {
        this.ref.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          onHide = _props.onHide,
          headerText = _props.headerText,
          messageText = _props.messageText,
          submitButtonText = _props.submitButtonText,
          cancelButtonText = _props.cancelButtonText;


      return _react2.default.createElement(
        _Dialog2.default,
        { onHide: onHide },
        _react2.default.createElement(
          'div',
          {
            tabIndex: '0',
            ref: function ref(_ref4) {
              return _this3.ref = _ref4;
            },
            className: 'oc-fm--dialog__content', onKeyDown: this.handleKeyDown
          },
          _react2.default.createElement(
            'div',
            { className: 'oc-fm--dialog__header' },
            headerText
          ),
          messageText && _react2.default.createElement(
            'div',
            { className: 'oc-fm--dialog__message' },
            messageText
          ),
          _react2.default.createElement(
            'div',
            { className: 'oc-fm--dialog__horizontal-group oc-fm--dialog__horizontal-group--to-right' },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: 'oc-fm--dialog__button oc-fm--dialog__button--default',
                onClick: this.handleCancel
              },
              cancelButtonText
            ),
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: 'oc-fm--dialog__button oc-fm--dialog__button--primary',
                onClick: this.handleSubmit
              },
              submitButtonText
            )
          )
        )
      );
    }
  }]);
  return ConfirmDialog;
}(_react.Component);

exports.default = ConfirmDialog;


ConfirmDialog.propTypes = propTypes;
ConfirmDialog.defaultProps = defaultProps;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(185).default;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(20);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(454);

var _reactContextmenu = __webpack_require__(36);

var _DropdownMenuItem = __webpack_require__(106);

var _DropdownMenuItem2 = _interopRequireDefault(_DropdownMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  icon: _propTypes2.default.shape({
    svg: _propTypes2.default.string,
    fill: _propTypes2.default.string
  })
};
var defaultProps = {
  icon: null
};

var ContextMenuItem = function (_Component) {
  (0, _inherits3.default)(ContextMenuItem, _Component);

  function ContextMenuItem(props) {
    (0, _classCallCheck3.default)(this, ContextMenuItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ContextMenuItem.__proto__ || Object.getPrototypeOf(ContextMenuItem)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ContextMenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          children = _props.children,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['icon', 'children']);


      return _react2.default.createElement(
        _reactContextmenu.MenuItem,
        null,
        _react2.default.createElement(
          _DropdownMenuItem2.default,
          (0, _extends3.default)({ icon: icon }, restProps),
          children
        )
      );
    }
  }]);
  return ContextMenuItem;
}(_react.Component);

exports.default = ContextMenuItem;


ContextMenuItem.propTypes = propTypes;
ContextMenuItem.defaultProps = defaultProps;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(20);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(455);

var _reactContextmenu = __webpack_require__(36);

var _ContextMenuItem = __webpack_require__(105);

var _ContextMenuItem2 = _interopRequireDefault(_ContextMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  triggerId: _propTypes2.default.string,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    icon: _propTypes2.default.shape({
      svg: _propTypes2.default.string,
      fill: _propTypes2.default.string
    }),
    label: _propTypes2.default.string,
    onClick: _propTypes2.default.func
  }))
};
var defaultProps = {
  triggerId: '',
  items: []
};

var ContextMenu = function (_Component) {
  (0, _inherits3.default)(ContextMenu, _Component);

  function ContextMenu() {
    (0, _classCallCheck3.default)(this, ContextMenu);
    return (0, _possibleConstructorReturn3.default)(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContextMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          triggerId = _props.triggerId,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['items', 'triggerId']);


      var childrenElement = items.map(function (item, i) {
        return _react2.default.createElement(
          _ContextMenuItem2.default,
          {
            key: i,
            onClick: item.onClick || function () {},
            icon: item.icon
          },
          _react2.default.createElement(
            'span',
            null,
            item.label
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'oc-fm--context-menu' },
        _react2.default.createElement(
          _reactContextmenu.ContextMenu,
          (0, _extends3.default)({
            id: triggerId,
            className: 'oc-fm--context-menu__content'
          }, restProps),
          childrenElement
        )
      );
    }
  }]);
  return ContextMenu;
}(_react.Component);

exports.default = ContextMenu;


ContextMenu.propTypes = propTypes;
ContextMenu.defaultProps = defaultProps;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(188).default;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(456);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  autofocus: _propTypes2.default.bool,
  onHide: _propTypes2.default.func
};
var defaultProps = {
  autofocus: false,
  onHide: function onHide() {}
};

var Dialog = function (_Component) {
  (0, _inherits3.default)(Dialog, _Component);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyDown = function (e) {
      if (e.which === 27) {
        // Esc key
        e.stopPropagation();
        _this.props.onHide();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Dialog, [{
    key: 'render',
    value: function render() {
      var autofocus = this.props.autofocus;


      return _react2.default.createElement(
        'div',
        {
          ref: function ref(_ref2) {
            return autofocus && _ref2 && _ref2.focus();
          },
          className: 'oc-fm--dialog',
          onKeyDown: this.handleKeyDown,
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          onMouseDown: function onMouseDown(e) {
            return e.stopPropagation();
          },
          onMouseUp: function onMouseUp(e) {
            return e.stopPropagation();
          },
          tabIndex: '0'
        },
        this.props.children
      );
    }
  }]);
  return Dialog;
}(_react.Component);

exports.default = Dialog;


Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(20);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(457);

var _SVG = __webpack_require__(19);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  icon: _propTypes2.default.shape({
    svg: _propTypes2.default.string,
    fill: _propTypes2.default.string
  })
};
var defaultProps = {
  icon: null
};

var DropdownMenuItem = function (_Component) {
  (0, _inherits3.default)(DropdownMenuItem, _Component);

  function DropdownMenuItem() {
    (0, _classCallCheck3.default)(this, DropdownMenuItem);
    return (0, _possibleConstructorReturn3.default)(this, (DropdownMenuItem.__proto__ || Object.getPrototypeOf(DropdownMenuItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownMenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          children = _props.children,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['icon', 'children']);


      var iconElement = icon ? _react2.default.createElement(_SVG2.default, {
        className: 'oc-fm--dropdown-menu-item__icon',
        svg: icon.svg,
        style: { fill: icon.fill || 'rgba(0, 0, 0, 0.72)' }
      }) : null;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: 'oc-fm--dropdown-menu-item' }, restProps),
        iconElement,
        children
      );
    }
  }]);
  return DropdownMenuItem;
}(_react.Component);

exports.default = DropdownMenuItem;


DropdownMenuItem.propTypes = propTypes;
DropdownMenuItem.defaultProps = defaultProps;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(458);

var _reactClickOutside = __webpack_require__(159);

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  show: _propTypes2.default.bool,
  showToTop: _propTypes2.default.bool,
  onHide: _propTypes2.default.func
};
var defaultProps = {
  show: false,
  showToTop: false,
  onHide: function onHide() {}
};

var DropdownMenu = (0, _reactClickOutside2.default)(_class = function (_Component) {
  (0, _inherits3.default)(DropdownMenu, _Component);

  function DropdownMenu(props) {
    (0, _classCallCheck3.default)(this, DropdownMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).call(this, props));

    _this.handleKeyDown = function (e) {
      var shouldHide = e.which === 27 || e.which === 9; // Hide on "Esc" or "Tab" key
      if (_this.props.show && shouldHide) {
        _this.props.onHide();
      }
    };

    _this.handleClickOutside = function () {
      if (_this.props.show) {
        _this.props.onHide();
      }
    };

    _this.state = {};
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DropdownMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          showToTop = _props.showToTop,
          onHide = _props.onHide,
          children = _props.children;


      if (!show) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'oc-fm--dropdown-menu ' + (showToTop ? 'oc-fm--dropdown-menu--to-top' : '') },
        _react.Children.toArray(children).map(function (child) {
          var childProps = (0, _extends3.default)({}, child.props, {
            onClick: function onClick(e) {
              if (child.props.onClick) {
                child.props.onClick(e);
              }
              onHide();
            }
          });

          return (0, _extends3.default)({}, child, { props: childProps });
        })
      );
    }
  }]);
  return DropdownMenu;
}(_react.Component)) || _class;

exports.default = DropdownMenu;


DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(192).default;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(20);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(459);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  className: _propTypes2.default.string
};
var defaultProps = {};

var FileManager = function (_Component) {
  (0, _inherits3.default)(FileManager, _Component);

  function FileManager(props) {
    (0, _classCallCheck3.default)(this, FileManager);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FileManager.__proto__ || Object.getPrototypeOf(FileManager)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(FileManager, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ 'data-test-id': 'filemanager', className: 'oc-fm--file-manager ' + (className || '') }, restProps),
        _react2.default.createElement(
          'div',
          { className: 'oc-fm--file-manager__navigators' },
          _react.Children.toArray(children).map(function (child, i) {
            return _react2.default.createElement(
              'div',
              { key: i, className: 'oc-fm--file-manager__navigator' },
              child
            );
          })
        )
      );
    }
  }]);
  return FileManager;
}(_react.Component);

exports.default = FileManager;


FileManager.propTypes = propTypes;
FileManager.defaultProps = defaultProps;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(194).default;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(73);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(72);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _isEqual2 = __webpack_require__(386);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _find2 = __webpack_require__(155);

var _find3 = _interopRequireDefault(_find2);

var _class, _class2, _temp2, _initialiseProps;

__webpack_require__(460);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactVirtualized = __webpack_require__(49);

var _reactClickOutside = __webpack_require__(159);

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _ListView = __webpack_require__(204);

var _ListView2 = _interopRequireDefault(_ListView);

var _GridView = __webpack_require__(200);

var _GridView2 = _interopRequireDefault(_GridView);

var _LocationBar = __webpack_require__(207);

var _LocationBar2 = _interopRequireDefault(_LocationBar);

var _Notifications = __webpack_require__(213);

var _Notifications2 = _interopRequireDefault(_Notifications);

var _Toolbar = __webpack_require__(220);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _ContextMenu = __webpack_require__(189);

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

var _rawToReactElement = __webpack_require__(70);

var _rawToReactElement2 = _interopRequireDefault(_rawToReactElement);

var _history = __webpack_require__(113);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasContext(capability, context) {
  return capability.availableInContexts && capability.availableInContexts.indexOf(context) !== -1;
}

var propTypes = {
  id: _propTypes2.default.string,
  api: _propTypes2.default.object,
  apiOptions: _propTypes2.default.object,
  capabilities: _propTypes2.default.func,
  className: _propTypes2.default.string,
  initialResourceId: _propTypes2.default.string,
  listViewLayout: _propTypes2.default.func,
  gridCellRenderer: _propTypes2.default.func,
  viewLayoutOptions: _propTypes2.default.object,
  signInRenderer: _propTypes2.default.func,
  onClickOutside: _propTypes2.default.func,
  onResourceItemClick: _propTypes2.default.func,
  onResourceItemRightClick: _propTypes2.default.func,
  onResourceItemDoubleClick: _propTypes2.default.func,
  onResourceLocationChange: _propTypes2.default.func,
  onSelectionChange: _propTypes2.default.func,
  onResourceChange: _propTypes2.default.func,
  onResourceChildrenChange: _propTypes2.default.func,
  onResourceViewModeChange: _propTypes2.default.func
};

var defaultProps = {
  id: '',
  api: 'nodeV1',
  apiOptions: {
    locale: 'en'
  },
  capabilities: function capabilities() {
    return [];
  },
  className: '',
  initialResourceId: '',
  listViewLayout: function listViewLayout() {},
  viewLayoutOptions: {},
  signInRenderer: null,
  onClickOutside: function onClickOutside(_ref) {
    var fileNavigator = _ref.fileNavigator;
    return fileNavigator.handleSelectionChange([]);
  },
  onResourceItemClick: function onResourceItemClick() {},
  onResourceItemRightClick: function onResourceItemRightClick() {},
  onResourceItemDoubleClick: function onResourceItemDoubleClick() {},
  onResourceLocationChange: function onResourceLocationChange() {},
  onSelectionChange: function onSelectionChange() {},
  onResourceChange: function onResourceChange() {},
  onResourceChildrenChange: function onResourceChildrenChange() {}
};

var MONITOR_API_AVAILABILITY_TIMEOUT = 16;

var FileNavigator = (0, _reactClickOutside2.default)(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(FileNavigator, _Component);

  function FileNavigator() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FileNavigator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = FileNavigator.__proto__ || Object.getPrototypeOf(FileNavigator)).call.apply(_ref2, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FileNavigator, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
      this.initialize();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var needToNavigate = this.props.initialResourceId !== nextProps.initialResourceId && (this.state.resource && this.state.resource.id) !== nextProps.initialResourceId;

      if (needToNavigate) {
        this.navigateToDir(nextProps.initialResourceId);
      }

      if (!(0, _isEqual3.default)(this.props.apiOptions, nextProps.apiOptions)) {
        var apiOptions = nextProps.apiOptions,
            capabilities = nextProps.capabilities;

        var capabilitiesProps = this.getCapabilitiesProps();
        var initializedCapabilities = capabilities(apiOptions, capabilitiesProps);
        this.setState({ initializedCapabilities: initializedCapabilities });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'setParentsForResource',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resource) {
        var resourceParents, resourceLocation;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getParentsForId(resource.id);

              case 2:
                resourceParents = _context.sent;
                resourceLocation = resourceParents.concat(resource);

                this.handleResourceLocationChange(resourceLocation);
                this.setStateAsync({ loadingResourceLocation: false });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setParentsForResource(_x) {
        return _ref3.apply(this, arguments);
      }

      return setParentsForResource;
    }()
  }, {
    key: 'getParentsForId',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
        var _props, api, apiOptions;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props = this.props, api = _props.api, apiOptions = _props.apiOptions;
                _context2.next = 3;
                return api.getParentsForId(apiOptions, id);

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getParentsForId(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getParentsForId;
    }()
  }, {
    key: 'getResourceById',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id) {
        var _props2, api, apiOptions, result;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _props2 = this.props, api = _props2.api, apiOptions = _props2.apiOptions;
                _context3.next = 3;
                return api.getResourceById(apiOptions, id);

              case 3:
                result = _context3.sent;
                return _context3.abrupt('return', result);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getResourceById(_x3) {
        return _ref5.apply(this, arguments);
      }

      return getResourceById;
    }()
  }, {
    key: 'getChildrenForId',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id, sortBy, sortDirection) {
        var _props3, api, apiOptions;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _props3 = this.props, api = _props3.api, apiOptions = _props3.apiOptions;
                return _context4.abrupt('return', api.getChildrenForId(apiOptions, { id: id, sortBy: sortBy, sortDirection: sortDirection }));

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getChildrenForId(_x4, _x5, _x6) {
        return _ref6.apply(this, arguments);
      }

      return getChildrenForId;
    }()
  }, {
    key: 'getResourceViewMode',
    value: function getResourceViewMode(resource) {
      var _props4 = this.props,
          api = _props4.api,
          apiOptions = _props4.apiOptions,
          gridCellRenderer = _props4.gridCellRenderer;


      if (!gridCellRenderer) return 'list';

      return api.getResourceViewMode ? api.getResourceViewMode(apiOptions, resource) : this.state.viewMode;
    }
  }, {
    key: 'getResourceChildrenBySelection',
    value: function getResourceChildrenBySelection(selection) {
      var resourceChildren = this.state.resourceChildren;

      var filteredResourceItems = resourceChildren.filter(function (o) {
        return selection.indexOf(o.id) !== -1;
      });
      return filteredResourceItems;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props5 = this.props,
          id = _props5.id,
          apiOptions = _props5.apiOptions,
          className = _props5.className,
          listViewLayout = _props5.listViewLayout,
          gridCellRenderer = _props5.gridCellRenderer,
          signInRenderer = _props5.signInRenderer,
          viewLayoutOptions = _props5.viewLayoutOptions;
      var _state = this.state,
          apiInitialized = _state.apiInitialized,
          apiSignedIn = _state.apiSignedIn,
          dialogElement = _state.dialogElement,
          history = _state.history,
          loadingResourceLocation = _state.loadingResourceLocation,
          loadingView = _state.loadingView,
          notifications = _state.notifications,
          resourceChildren = _state.resourceChildren,
          resourceLocation = _state.resourceLocation,
          selection = _state.selection,
          sortBy = _state.sortBy,
          sortDirection = _state.sortDirection;


      var viewLoadingElement = null;

      if (!apiInitialized) {
        viewLoadingElement = 'Problems with server connection';
      }

      if (!apiSignedIn) {
        viewLoadingElement = signInRenderer ? signInRenderer() : 'Not authenticated';
      }

      if (dialogElement) {
        viewLoadingElement = dialogElement;
      }

      var viewLoadingOverlay = viewLoadingElement ? _react2.default.createElement(
        'div',
        { className: 'oc-fm--file-navigator__view-loading-overlay' },
        viewLoadingElement
      ) : null;

      var locationItems = resourceLocation.map(function (o) {
        return {
          name: _this2.props.api.getResourceName(_this2.props.apiOptions, o),
          onClick: function onClick() {
            return _this2.handleLocationBarChange(o.id);
          }
        };
      });

      var rowContextMenuItems = this.getContextCapabilities({ context: 'row', isDataView: true });
      var filesViewContextMenuItems = this.getContextCapabilities({ context: 'files-view', isDataView: true });
      var toolbarItems = this.getContextCapabilities({ context: 'toolbar' });
      var newButtonItems = this.getContextCapabilities({ context: 'new-button' });

      var rowContextMenuId = 'row-context-menu-' + id;
      var filesViewContextMenuId = 'files-view-context-menu-' + id;

      var viewProps = {
        rowContextMenuId: rowContextMenuId,
        filesViewContextMenuId: filesViewContextMenuId,
        onKeyDown: this.handleViewKeyDown,
        onRowClick: this.handleResourceItemClick,
        onRowRightClick: this.handleResourceItemRightClick,
        onRowDoubleClick: this.handleResourceItemDoubleClick,
        onSelection: this.handleSelectionChange,
        onRef: this.handleViewRef,
        loading: loadingView,
        selection: selection,
        items: resourceChildren,
        layoutOptions: viewLayoutOptions,
        locale: apiOptions.locale
      };

      return _react2.default.createElement(
        'div',
        {
          id: id,
          'data-test-id': 'filenavigator',
          className: 'oc-fm--file-navigator ' + className,
          onKeyDown: this.handleKeyDown,
          ref: function ref(_ref7) {
            return _this2.containerRef = _ref7;
          }
        },
        viewLoadingOverlay,
        _react2.default.createElement(
          'div',
          { className: 'oc-fm--file-navigator__toolbar' },
          _react2.default.createElement(_Toolbar2.default, {
            items: toolbarItems,
            newButtonItems: newButtonItems,
            history: history,
            onMoveForward: this.handleHistoryChange,
            onMoveBackward: this.handleHistoryChange,
            locale: apiOptions.locale,
            viewMode: this.state.viewMode,
            onViewModeChange: this.handleViewModeChange,
            gridModeSupported: !!gridCellRenderer
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'oc-fm--file-navigator__view' },
          this.state.viewMode === 'grid' ? _react2.default.createElement(
            _GridView2.default,
            (0, _extends3.default)({}, viewProps, { cellRenderer: gridCellRenderer }),
            _react2.default.createElement(_Notifications2.default, { className: 'oc-fm--file-navigator__notifications', notifications: notifications })
          ) : _react2.default.createElement(
            _ListView2.default,
            (0, _extends3.default)({}, viewProps, {
              onSort: this.handleSort,
              sortBy: sortBy,
              sortDirection: sortDirection,
              layout: listViewLayout
            }),
            _react2.default.createElement(_Notifications2.default, { className: 'oc-fm--file-navigator__notifications', notifications: notifications })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'oc-fm--file-navigator__location-bar' },
          _react2.default.createElement(_LocationBar2.default, {
            items: locationItems,
            loading: loadingResourceLocation
          })
        ),
        _react2.default.createElement(_ContextMenu2.default, {
          triggerId: rowContextMenuId,
          items: rowContextMenuItems
        }),
        _react2.default.createElement(_ContextMenu2.default, {
          triggerId: filesViewContextMenuId,
          items: filesViewContextMenuItems
        })
      );
    }
  }]);
  return FileNavigator;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.state = {
    apiInitialized: false,
    apiSignedIn: false,
    config: {},
    dialogElement: null,
    error: null,
    loadingResourceLocation: false,
    loadingView: false,
    notifications: [],
    resource: {},
    resourceChildren: [],
    resourceLocation: [],
    history: (0, _history.createHistory)(),
    selection: [],
    sortBy: 'title',
    sortDirection: _reactVirtualized.SortDirection.ASC,
    initializedCapabilities: [],
    viewMode: 'list'
  };

  this.setStateAsync = function () {
    if (_this3._isMounted) {
      _this3.setState.apply(_this3, arguments);
    }
  };

  this.initialize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
    var _props6, apiOptions, api, capabilities, viewLayoutOptions, capabilitiesProps, initializedCapabilities, _ref9, apiInitialized, apiSignedIn;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _props6 = _this3.props, apiOptions = _props6.apiOptions, api = _props6.api, capabilities = _props6.capabilities, viewLayoutOptions = _props6.viewLayoutOptions;
            capabilitiesProps = _this3.getCapabilitiesProps();
            initializedCapabilities = capabilities(apiOptions, capabilitiesProps);
            _context5.next = 5;
            return api.init((0, _extends3.default)({}, apiOptions));

          case 5:
            _ref9 = _context5.sent;
            apiInitialized = _ref9.apiInitialized;
            apiSignedIn = _ref9.apiSignedIn;


            _this3.setStateAsync({
              apiInitialized: apiInitialized,
              apiSignedIn: apiSignedIn,
              initializedCapabilities: initializedCapabilities,
              sortBy: viewLayoutOptions.initialSortBy || 'title',
              sortDirection: viewLayoutOptions.initialSortDirection || _reactVirtualized.SortDirection.ASC,
              viewMode: viewLayoutOptions.initialViewMode || 'list'
            }, function (_) {
              if (apiSignedIn) {
                _this3.handleApiReady();
              } else {
                if (apiInitialized) {
                  _this3.handleApiSignInFail();
                } else {
                  _this3.handleApiInitFail();
                }

                _this3.monitorApiAvailability();
              }
            });

          case 9:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this3);
  }));

  this.startViewLoading = function () {
    _this3.setStateAsync({ loadingView: true, loadingResourceLocation: true });
  };

  this.stopViewLoading = function () {
    _this3.setStateAsync({ loadingView: false });
  };

  this.focusView = function () {
    _this3.viewRef.focus();
  };

  this.handleApiReady = function () {
    var initialResourceId = _this3.props.initialResourceId;

    var resourceId = _this3.state.resource.id;
    var idToNavigate = typeof resourceId === 'undefined' ? initialResourceId : resourceId;
    _this3.navigateToDir(idToNavigate);
  };

  this.monitorApiAvailability = function () {
    var api = _this3.props.api;


    _this3.apiAvailabilityTimeout = setTimeout(function () {
      if (api.hasSignedIn()) {
        _this3.setStateAsync({ apiInitialized: true, apiSignedIn: true });
        _this3.handleApiReady();
      } else {
        _this3.monitorApiAvailability();
      }
    }, MONITOR_API_AVAILABILITY_TIMEOUT);
  };

  this.handleApiInitFail = function () {
    _this3.handleResourceChildrenChange([]);
  };

  this.handleApiSignInFail = function () {
    _this3.handleSelectionChange([]);
    _this3.handleResourceChildrenChange([]);
    _this3.handleResourceChange({});
  };

  this.handleLocationBarChange = function (id) {
    var resource = _this3.state.resource;

    _this3.navigateToDir(id, resource.id);
  };

  this.handleHistoryChange = function (history) {
    _this3.setStateAsync({ history: history });

    var navigateToId = history.stack[history.currentPointer];
    _this3.navigateToDir(navigateToId, null, true, false);
  };

  this.navigateToDir = function () {
    var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(toId, idToSelect) {
      var startLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var changeHistory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      var _state2, history, sortBy, sortDirection, resource, resourceChildren, newSelection;

      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _state2 = _this3.state, history = _state2.history, sortBy = _state2.sortBy, sortDirection = _state2.sortDirection;


              if (startLoading) {
                _this3.startViewLoading();
              }

              _context6.next = 4;
              return _this3.getResourceById(toId);

            case 4:
              resource = _context6.sent;

              _this3.handleResourceChange(resource);

              _context6.next = 8;
              return _this3.getChildrenForId(resource.id, sortBy, sortDirection);

            case 8:
              resourceChildren = _context6.sent;
              newSelection = typeof idToSelect === 'undefined' || idToSelect === null ? [] : [idToSelect];


              if (changeHistory) {
                _this3.setStateAsync({ history: (0, _history.pushToHistory)(history, toId) });
              }

              _this3.handleSelectionChange(newSelection);
              _this3.handleResourceChildrenChange(resourceChildren);

              _this3.stopViewLoading();
              _this3.setParentsForResource(resource);

            case 15:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this3);
    }));

    return function (_x7, _x8) {
      return _ref10.apply(this, arguments);
    };
  }();

  this.handleClickOutside = function () {
    _this3.props.onClickOutside({ fileNavigator: _this3 });
  };

  this.handleResourceLocationChange = function (resourceLocation) {
    _this3.setStateAsync({ resourceLocation: resourceLocation });
    _this3.props.onResourceLocationChange(resourceLocation);
  };

  this.handleSelectionChange = function (selection) {
    _this3.setStateAsync({ selection: selection });
    _this3.props.onSelectionChange(selection);
  };

  this.handleResourceChildrenChange = function (resourceChildren) {
    _this3.setStateAsync({ resourceChildren: resourceChildren });
    _this3.props.onResourceChildrenChange(resourceChildren);
  };

  this.handleResourceChange = function (resource) {
    _this3.setStateAsync({ resource: resource, viewMode: _this3.getResourceViewMode(resource) });
    _this3.props.onResourceChange(resource);
  };

  this.handleSort = function () {
    var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref12) {
      var sortBy = _ref12.sortBy,
          sortDirection = _ref12.sortDirection;
      var initializedCapabilities, sortCapability, sort, newResourceChildren;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              initializedCapabilities = _this3.state.initializedCapabilities;
              sortCapability = (0, _find3.default)(initializedCapabilities, function (o) {
                return o.id === 'sort';
              });

              if (sortCapability) {
                _context7.next = 4;
                break;
              }

              return _context7.abrupt('return');

            case 4:
              sort = sortCapability.handler;

              _this3.setStateAsync({ loadingView: true });
              _context7.next = 8;
              return sort({ sortBy: sortBy, sortDirection: sortDirection });

            case 8:
              newResourceChildren = _context7.sent;

              _this3.handleResourceChildrenChange(newResourceChildren);
              _this3.setStateAsync({ sortBy: sortBy, sortDirection: sortDirection, loadingView: false });

            case 11:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this3);
    }));

    return function (_x11) {
      return _ref11.apply(this, arguments);
    };
  }();

  this.handleResourceItemClick = function () {
    var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(_ref14) {
      var event = _ref14.event,
          number = _ref14.number,
          rowData = _ref14.rowData;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _this3.props.onResourceItemClick({ event: event, number: number, rowData: rowData });

            case 1:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this3);
    }));

    return function (_x12) {
      return _ref13.apply(this, arguments);
    };
  }();

  this.handleResourceItemRightClick = function () {
    var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(_ref16) {
      var event = _ref16.event,
          number = _ref16.number,
          rowData = _ref16.rowData;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _this3.props.onResourceItemRightClick({ event: event, number: number, rowData: rowData });

            case 1:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this3);
    }));

    return function (_x13) {
      return _ref15.apply(this, arguments);
    };
  }();

  this.handleResourceItemDoubleClick = function () {
    var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(_ref18) {
      var event = _ref18.event,
          number = _ref18.number,
          rowData = _ref18.rowData;
      var loadingView, id, isDirectory;
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              loadingView = _this3.state.loadingView;
              id = rowData.id;

              if (!loadingView) {
                _context10.next = 4;
                break;
              }

              return _context10.abrupt('return');

            case 4:
              isDirectory = rowData.type === 'dir';

              if (isDirectory) {
                _this3.navigateToDir(id);
              }

              _this3.focusView();

              _this3.props.onResourceItemDoubleClick({ event: event, number: number, rowData: rowData });

            case 8:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, _this3);
    }));

    return function (_x14) {
      return _ref17.apply(this, arguments);
    };
  }();

  this.handleViewKeyDown = function () {
    var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(e) {
      var _props7, api, apiOptions, loadingView, selection, selectedResourceChildren, isDirectory, resource, parentId;

      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _props7 = _this3.props, api = _props7.api, apiOptions = _props7.apiOptions;
              loadingView = _this3.state.loadingView;

              if (!(e.which === 13 && !loadingView)) {
                _context11.next = 10;
                break;
              }

              // Enter
              selection = _this3.state.selection;

              if (!(selection.length === 1)) {
                _context11.next = 10;
                break;
              }

              // Navigate to selected resource if selected resource is single and is directory
              selectedResourceChildren = _this3.getResourceChildrenBySelection(selection);

              if (selectedResourceChildren[0]) {
                _context11.next = 8;
                break;
              }

              return _context11.abrupt('return');

            case 8:
              isDirectory = selectedResourceChildren[0].type === 'dir';


              if (isDirectory) {
                _this3.navigateToDir(selectedResourceChildren[0].id);
              }

            case 10:
              if (!(e.which === 8 && !loadingView)) {
                _context11.next = 16;
                break;
              }

              // Backspace
              // Navigate to parent directory
              resource = _this3.state.resource;
              _context11.next = 14;
              return api.getParentIdForResource(apiOptions, resource);

            case 14:
              parentId = _context11.sent;

              if (parentId) {
                _this3.navigateToDir(parentId, resource.id);
              }

            case 16:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, _this3);
    }));

    return function (_x15) {
      return _ref19.apply(this, arguments);
    };
  }();

  this.handleKeyDown = function () {
    var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(e) {
      return _regenerator2.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, _this3);
    }));

    return function (_x16) {
      return _ref20.apply(this, arguments);
    };
  }();

  this.handleViewRef = function (ref) {
    _this3.viewRef = ref;
  };

  this.showDialog = function (rawDialogElement) {
    var dialogElement = (0, _rawToReactElement2.default)(rawDialogElement);

    _this3.setStateAsync({ dialogElement: dialogElement });
  };

  this.hideDialog = function () {
    _this3.setStateAsync({ dialogElement: null });
  };

  this.updateNotifications = function (notifications) {
    _this3.setStateAsync({ notifications: notifications });
  };

  this.getCapabilitiesProps = function () {
    return {
      showDialog: _this3.showDialog,
      hideDialog: _this3.hideDialog,
      updateNotifications: _this3.updateNotifications,
      navigateToDir: _this3.navigateToDir,
      getSelection: function getSelection() {
        return _this3.state.selection;
      },
      getSelectedResources: function getSelectedResources() {
        return _this3.state.resourceChildren.filter(function (o) {
          return _this3.state.selection.some(function (s) {
            return s === o.id;
          });
        });
      },
      getResource: function getResource() {
        return _this3.state.resource;
      },
      getResourceChildren: function getResourceChildren() {
        return _this3.state.resourceChildren;
      },
      getResourceLocation: function getResourceLocation() {
        return _this3.state.resourceLocation;
      },
      getNotifications: function getNotifications() {
        return _this3.state.notifications;
      },
      getSortState: function getSortState() {
        return { sortBy: _this3.state.sortBy, sortDirection: _this3.state.sortDirection };
      }
    };
  };

  this.getContextCapabilities = function (_ref21) {
    var context = _ref21.context,
        _ref21$isDataView = _ref21.isDataView,
        isDataView = _ref21$isDataView === undefined ? false : _ref21$isDataView;
    var apiOptions = _this3.props.apiOptions;
    var initializedCapabilities = _this3.state.initializedCapabilities;

    return initializedCapabilities.filter(function (capability) {
      return (isDataView ? capability.shouldBeAvailable(apiOptions) : true) && hasContext(capability, context);
    }).map(function (capability) {
      var res = {
        id: capability.id,
        icon: capability.icon,
        label: capability.label || '',
        onClick: capability.handler || function () {}
      };

      if (!isDataView) {
        res.disabled = !capability.shouldBeAvailable(apiOptions);
      }
      return res;
    });
  };

  this.handleViewModeChange = function (viewMode) {
    _this3.setStateAsync({ viewMode: viewMode });
    _this3.props.onResourceViewModeChange && _this3.props.onResourceViewModeChange(_this3.state.resource, viewMode);
  };
}, _temp2)) || _class;

exports.default = FileNavigator;


FileNavigator.propTypes = propTypes;
FileNavigator.defaultProps = defaultProps;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(196).default;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactContextmenu = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridCell = function (_Component) {
  (0, _inherits3.default)(GridCell, _Component);

  function GridCell() {
    (0, _classCallCheck3.default)(this, GridCell);
    return (0, _possibleConstructorReturn3.default)(this, (GridCell.__proto__ || Object.getPrototypeOf(GridCell)).apply(this, arguments));
  }

  (0, _createClass3.default)(GridCell, [{
    key: 'render',
    value: function render() {
      /* eslint-disable  react/prop-types */
      var _props = this.props,
          rowIndex = _props.rowIndex,
          columnIndex = _props.columnIndex,
          index = _props.index,
          onRowClick = _props.onRowClick,
          onRowDoubleClick = _props.onRowDoubleClick,
          onRowRightClick = _props.onRowRightClick,
          cellContentRenderer = _props.cellContentRenderer,
          columnCount = _props.columnCount,
          style = _props.style,
          items = _props.items,
          selection = _props.selection,
          contextMenuId = _props.contextMenuId,
          hasTouch = _props.hasTouch,
          loading = _props.loading;
      /* eslint-enable react/prop-types */

      var rowData = items[rowIndex * columnCount + columnIndex];
      if (!rowData) return null;

      var divProps = {};

      if (onRowClick || onRowDoubleClick || onRowRightClick) {
        divProps.tabIndex = 0;

        if (onRowClick) divProps.onClick = function (event) {
          return onRowClick({ event: event, index: index, rowData: rowData });
        };

        if (onRowDoubleClick) divProps.onDoubleClick = function (event) {
          return onRowDoubleClick({ event: event, index: index, rowData: rowData });
        };

        if (onRowRightClick) divProps.onContextMenu = function (event) {
          return onRowRightClick({ event: event, index: index, rowData: rowData });
        };
      }

      var isSelected = selection.indexOf(rowData.id) !== -1;
      var itemComponent = cellContentRenderer({ item: rowData }, rowData.id);

      return _react2.default.createElement(
        _reactContextmenu.ContextMenuTrigger,
        { id: contextMenuId, holdToDisplay: hasTouch ? 1000 : -1 },
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, divProps, {
            className: 'ReactVirtualized__Table__row oc-fm--grid-view__row' + (loading ? ' oc-fm--grid-view__row--loading' : '') + (isSelected ? ' oc-fm--grid-view__row--selected' : ''),
            role: 'gridcell',
            style: style
          }),
          itemComponent
        )
      );
    }
  }]);
  return GridCell;
}(_react.Component);

exports.default = function (args) {
  return function (props) {
    return _react2.default.createElement(GridCell, (0, _extends3.default)({}, props, args));
  };
};

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _range2 = __webpack_require__(157);

var _range3 = _interopRequireDefault(_range2);

__webpack_require__(179);

__webpack_require__(461);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nanoid = __webpack_require__(158);

var _nanoid2 = _interopRequireDefault(_nanoid);

var _detectIt = __webpack_require__(147);

var _detectIt2 = _interopRequireDefault(_detectIt);

var _reactVirtualized = __webpack_require__(49);

var _reactContextmenu = __webpack_require__(36);

var _NoFilesFoundStub = __webpack_require__(109);

var _NoFilesFoundStub2 = _interopRequireDefault(_NoFilesFoundStub);

var _GridCell = __webpack_require__(198);

var _GridCell2 = _interopRequireDefault(_GridCell);

var _Cell = __webpack_require__(104);

var _Cell2 = _interopRequireDefault(_Cell);

var _ScrollOnMouseOut = __webpack_require__(111);

var _ScrollOnMouseOut2 = _interopRequireDefault(_ScrollOnMouseOut);

var _withSelectionHOC = __webpack_require__(114);

var _withSelectionHOC2 = _interopRequireDefault(_withSelectionHOC);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROW_HEIGHT = 210;
var COLUMN_WIDTH = 197;
var SCROLL_STRENGTH = ROW_HEIGHT;
var HAS_TOUCH = _detectIt2.default.deviceType === 'hasTouch';

var propTypes = {
  rowContextMenuId: _propTypes2.default.string,
  filesViewContextMenuId: _propTypes2.default.string,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string,
    type: _propTypes2.default.string,
    title: _propTypes2.default.string,
    size: _propTypes2.default.number,
    modifyDate: _propTypes2.default.number
  })),
  cellRenderer: _propTypes2.default.func.isRequired,
  layoutOptions: _propTypes2.default.object,
  selection: _propTypes2.default.arrayOf(_propTypes2.default.string),
  loading: _propTypes2.default.bool,
  onRowClick: _propTypes2.default.func,
  onRowRightClick: _propTypes2.default.func,
  onRowDoubleClick: _propTypes2.default.func,
  onScroll: _propTypes2.default.func,
  onSelection: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onRef: _propTypes2.default.func,
  locale: _propTypes2.default.string
};
var defaultProps = {
  rowContextMenuId: (0, _nanoid2.default)(),
  filesViewContextMenuId: (0, _nanoid2.default)(),
  items: [],
  layoutOptions: {},
  selection: [],
  loading: false,
  onRowClick: function onRowClick() {},
  onRowRightClick: function onRowRightClick() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  onScroll: function onScroll() {},
  onSelection: function onSelection() {},
  onKeyDown: function onKeyDown() {},
  onRef: function onRef() {},
  locale: 'en'
};

var GridView = function (_Component) {
  (0, _inherits3.default)(GridView, _Component);

  function GridView() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GridView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GridView.__proto__ || Object.getPrototypeOf(GridView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      scrollToIndex: 0,
      clientHeight: 0,
      scrollTop: 0,
      scrollHeight: 0
    }, _this.scrollToIndex = function (index) {
      _this.setState({ scrollToIndex: index });
    }, _this.handleScrollTop = function (scrollTop) {
      return _this.setState({ scrollTop: scrollTop });
    }, _this.handleScroll = function (_ref2) {
      var clientHeight = _ref2.clientHeight,
          scrollHeight = _ref2.scrollHeight,
          scrollTop = _ref2.scrollTop;

      _this.props.onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
      _this.setState((0, _extends3.default)({}, (0, _utils.isDef)(clientHeight) && { clientHeight: clientHeight }, (0, _utils.isDef)(scrollHeight) && { scrollHeight: scrollHeight }, (0, _utils.isDef)(scrollTop) && { scrollTop: scrollTop }));
    }, _this.handlePageUp = function (_) {
      var scrollTop = _this.state.scrollTop;

      var newScrollTop = scrollTop - SCROLL_STRENGTH < 0 ? 0 : scrollTop - SCROLL_STRENGTH;
      _this.handleScrollTop(newScrollTop);
    }, _this.handlePageDown = function (_) {
      var _this$state = _this.state,
          scrollTop = _this$state.scrollTop,
          scrollHeight = _this$state.scrollHeight,
          clientHeight = _this$state.clientHeight;

      var newScrollTop = scrollTop + SCROLL_STRENGTH > scrollHeight - clientHeight ? scrollHeight - clientHeight : scrollTop + SCROLL_STRENGTH;
      _this.handleScrollTop(newScrollTop);
    }, _this.handleHome = function (_) {
      return _this.handleScrollTop(0);
    }, _this.handleEnd = function (_) {
      // Scroll to the first item
      var _this$state2 = _this.state,
          clientHeight = _this$state2.clientHeight,
          scrollHeight = _this$state2.scrollHeight;

      var newScrollTop = scrollHeight - clientHeight;
      _this.handleScrollTop(newScrollTop);
    }, _this.handleKeyDown = function (e) {
      e.preventDefault();

      _this.props.onKeyDown(e);

      if (e.which === 33) {
        // PageUp
        _this.handlePageUp();
      }

      if (e.which === 34) {
        // PageDown
        _this.handlePageDown();
      }

      if (e.which === 36) {
        // Home
        _this.handleHome();
      }

      if (e.which === 35) {
        // End
        _this.handleEnd();
      }
    }, _this.handleRowClick = function (_ref3) {
      var event = _ref3.event,
          index = _ref3.index,
          rowData = _ref3.rowData;

      _this.props.onRowClick({ event: event, index: index, rowData: rowData });
    }, _this.handleRowRightClick = function (_ref4) {
      var event = _ref4.event,
          index = _ref4.index,
          rowData = _ref4.rowData;

      _this.props.onRowRightClick({ event: event, index: index, rowData: rowData });
    }, _this.handleRowDoubleClick = function (_ref5) {
      var event = _ref5.event,
          index = _ref5.index,
          rowData = _ref5.rowData;

      _this.props.onRowDoubleClick({ event: event, index: index, rowData: rowData });
    }, _this.handleSelection = function (_ref6) {
      var selection = _ref6.selection,
          scrollToIndex = _ref6.scrollToIndex;

      _this.props.onSelection(selection);
      _this.scrollToIndex(scrollToIndex);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GridView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.loading !== nextProps.loading) {
        // Force recalculate scrollHeight for appropriate handle "PageUp, PageDown, Home, End", etc. keys
        this.setState({ scrollHeight: nextProps.items.length * ROW_HEIGHT });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          rowContextMenuId = _props.rowContextMenuId,
          filesViewContextMenuId = _props.filesViewContextMenuId,
          items = _props.items,
          cellRenderer = _props.cellRenderer,
          layoutOptions = _props.layoutOptions,
          loading = _props.loading,
          onRef = _props.onRef;
      var _state = this.state,
          clientHeight = _state.clientHeight,
          scrollTop = _state.scrollTop,
          scrollHeight = _state.scrollHeight,
          scrollToIndex = _state.scrollToIndex;


      return _react2.default.createElement(
        _reactVirtualized.AutoSizer,
        null,
        function (_ref7) {
          var width = _ref7.width,
              height = _ref7.height;

          _this2.containerHeight = height;
          var columnCount = Math.floor((width - 15) / COLUMN_WIDTH);

          // Generate items for "loading placeholder"
          var itemsToRender = loading && height ? (0, _range3.default)(Math.ceil(height / ROW_HEIGHT) * columnCount).map(function () {
            return {};
          }) : items;

          return _react2.default.createElement(
            _withSelectionHOC2.default,
            {
              items: itemsToRender,
              onKeyDown: _this2.handleKeyDown,
              onSelection: _this2.handleSelection,
              onRowClick: _this2.handleRowClick,
              onRowRightClick: _this2.handleRowRightClick,
              onRowDoubleClick: _this2.handleRowDoubleClick,
              selection: _this2.props.selection,
              onRef: onRef,
              viewMode: 'grid',
              columnCount: columnCount
            },
            function (_ref8) {
              var onRowClick = _ref8.onRowClick,
                  onRowRightClick = _ref8.onRowRightClick,
                  onRowDoubleClick = _ref8.onRowDoubleClick,
                  selection = _ref8.selection;
              return _react2.default.createElement(
                'div',
                { className: 'oc-fm--grid-view' },
                _react2.default.createElement(
                  _ScrollOnMouseOut2.default,
                  {
                    onCursorAbove: _this2.handleScrollTop,
                    onCursorBellow: _this2.handleScrollTop,
                    clientHeight: clientHeight,
                    scrollHeight: scrollHeight,
                    scrollTop: scrollTop,
                    topCaptureOffset: 0,
                    bottomCaptureOffset: 0,
                    style: {
                      width: width + 'px',
                      height: height + 'px'
                    }
                  },
                  _react2.default.createElement(
                    _reactContextmenu.ContextMenuTrigger,
                    { id: filesViewContextMenuId, holdToDisplay: HAS_TOUCH ? 1000 : -1 },
                    _react2.default.createElement(_reactVirtualized.Grid, {
                      width: width,
                      height: height,
                      columnCount: columnCount,
                      rowCount: Math.ceil(itemsToRender.length / columnCount),
                      rowHeight: ROW_HEIGHT,
                      className: 'oc-fm--grid-view__table',
                      overscanRowCount: 3,
                      onScroll: _this2.handleScroll,
                      scrollToRow: scrollToIndex ? Math.floor(scrollToIndex / columnCount) : 0,
                      scrollTop: scrollTop,
                      cellRenderer: (0, _GridCell2.default)({
                        items: itemsToRender,
                        selection: selection,
                        contextMenuId: rowContextMenuId,
                        hasTouch: HAS_TOUCH,
                        onRowClick: onRowClick,
                        onRowRightClick: onRowRightClick,
                        onRowDoubleClick: onRowDoubleClick,
                        cellContentRenderer: (0, _Cell2.default)((0, _extends3.default)({}, layoutOptions, { loading: loading, width: width, height: height, getData: cellRenderer })),
                        columnCount: columnCount,
                        loading: loading
                      }),
                      columnWidth: COLUMN_WIDTH,
                      noContentRenderer: function noContentRenderer() {
                        return _react2.default.createElement(_NoFilesFoundStub2.default, { locale: _this2.props.locale });
                      }
                    })
                  )
                ),
                _this2.props.children
              );
            }
          );
        }
      );
    }
  }]);
  return GridView;
}(_react.Component);

exports.default = GridView;


GridView.propTypes = propTypes;
GridView.defaultProps = defaultProps;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(199).default;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(462);

var _SVG = __webpack_require__(19);

var _SVG2 = _interopRequireDefault(_SVG);

var _reactVirtualized = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sortASCIcon = __webpack_require__(400);
var sortDESCIcon = __webpack_require__(401);

exports.default = function () {
  return function (_ref) {
    var columnData = _ref.columnData,
        dataKey = _ref.dataKey,
        disableSort = _ref.disableSort,
        label = _ref.label,
        sortBy = _ref.sortBy,
        sortDirection = _ref.sortDirection;

    var sortIconSvg = sortDirection === _reactVirtualized.SortDirection.ASC ? sortDESCIcon : sortASCIcon;
    var sortIconElement = dataKey === sortBy ? _react2.default.createElement(_SVG2.default, { className: 'oc-fm--header-cell__sort-icon', svg: sortIconSvg }) : null;

    return _react2.default.createElement(
      'div',
      { className: 'oc-fm--header-cell' },
      label,
      sortIconElement
    );
  };
};

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _range2 = __webpack_require__(157);

var _range3 = _interopRequireDefault(_range2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nanoid = __webpack_require__(158);

var _nanoid2 = _interopRequireDefault(_nanoid);

var _detectIt = __webpack_require__(147);

var _detectIt2 = _interopRequireDefault(_detectIt);

var _reactVirtualized = __webpack_require__(49);

__webpack_require__(179);

var _reactContextmenu = __webpack_require__(36);

var _NoFilesFoundStub = __webpack_require__(109);

var _NoFilesFoundStub2 = _interopRequireDefault(_NoFilesFoundStub);

var _Row = __webpack_require__(203);

var _Row2 = _interopRequireDefault(_Row);

var _ScrollOnMouseOut = __webpack_require__(111);

var _ScrollOnMouseOut2 = _interopRequireDefault(_ScrollOnMouseOut);

var _rawToReactElement = __webpack_require__(70);

var _rawToReactElement2 = _interopRequireDefault(_rawToReactElement);

var _withSelectionHOC = __webpack_require__(114);

var _withSelectionHOC2 = _interopRequireDefault(_withSelectionHOC);

var _utils = __webpack_require__(71);

__webpack_require__(463);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TBD individual imports from 'react-virtualized' to decrease bundle size?
// ex. import Table from 'react-virtualized/dist/commonjs/Table'
var ROW_HEIGHT = 38;
var HEADER_HEIGHT = 38;
var SCROLL_STRENGTH = 80;
var HAS_TOUCH = _detectIt2.default.deviceType === 'hasTouch';

var propTypes = {
  rowContextMenuId: _propTypes2.default.string,
  filesViewContextMenuId: _propTypes2.default.string,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string,
    type: _propTypes2.default.string,
    title: _propTypes2.default.string,
    size: _propTypes2.default.number,
    modifyDate: _propTypes2.default.number
  })),
  layout: _propTypes2.default.func,
  layoutOptions: _propTypes2.default.object,
  selection: _propTypes2.default.arrayOf(_propTypes2.default.string),
  loading: _propTypes2.default.bool,
  sortBy: _propTypes2.default.string,
  sortDirection: _propTypes2.default.string,
  onRowClick: _propTypes2.default.func,
  onRowRightClick: _propTypes2.default.func,
  onRowDoubleClick: _propTypes2.default.func,
  onScroll: _propTypes2.default.func,
  onSelection: _propTypes2.default.func,
  onSort: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onRef: _propTypes2.default.func,
  locale: _propTypes2.default.string
};
var defaultProps = {
  rowContextMenuId: (0, _nanoid2.default)(),
  filesViewContextMenuId: (0, _nanoid2.default)(),
  items: [],
  layout: function layout() {
    return [];
  },
  layoutOptions: {},
  selection: [],
  loading: false,
  sortBy: 'title',
  sortDirection: _reactVirtualized.SortDirection.ASC,
  onRowClick: function onRowClick() {},
  onRowRightClick: function onRowRightClick() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  onScroll: function onScroll() {},
  onSelection: function onSelection() {},
  onSort: function onSort() {},
  onKeyDown: function onKeyDown() {},
  onRef: function onRef() {},
  locale: 'en'
};

var ListView = function (_Component) {
  (0, _inherits3.default)(ListView, _Component);

  function ListView() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ListView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListView.__proto__ || Object.getPrototypeOf(ListView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      scrollToIndex: 0,
      clientHeight: 0,
      scrollTop: 0,
      scrollHeight: 0
    }, _this.scrollToIndex = function (index) {
      _this.setState({ scrollToIndex: index });
    }, _this.handleScrollTop = function (scrollTop) {
      return _this.setState({ scrollTop: scrollTop });
    }, _this.handleScroll = function (_ref2) {
      var clientHeight = _ref2.clientHeight,
          scrollHeight = _ref2.scrollHeight,
          scrollTop = _ref2.scrollTop;

      _this.props.onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
      _this.setState((0, _extends3.default)({}, (0, _utils.isDef)(clientHeight) && { clientHeight: clientHeight }, (0, _utils.isDef)(scrollHeight) && { scrollHeight: scrollHeight }, (0, _utils.isDef)(scrollTop) && { scrollTop: scrollTop }));
    }, _this.handlePageUp = function (_) {
      var scrollTop = _this.state.scrollTop;

      var newScrollTop = scrollTop - SCROLL_STRENGTH < 0 ? 0 : scrollTop - SCROLL_STRENGTH;
      _this.handleScrollTop(newScrollTop);
    }, _this.handlePageDown = function (_) {
      var _this$state = _this.state,
          scrollTop = _this$state.scrollTop,
          scrollHeight = _this$state.scrollHeight,
          clientHeight = _this$state.clientHeight;

      var newScrollTop = scrollTop + SCROLL_STRENGTH > scrollHeight - clientHeight ? scrollHeight - clientHeight : scrollTop + SCROLL_STRENGTH;
      _this.handleScrollTop(newScrollTop);
    }, _this.handleHome = function (_) {
      return _this.handleScrollTop(0);
    }, _this.handleEnd = function (_) {
      // Scroll to the first item
      var _this$state2 = _this.state,
          clientHeight = _this$state2.clientHeight,
          scrollHeight = _this$state2.scrollHeight;

      var newScrollTop = scrollHeight - clientHeight;
      _this.handleScrollTop(newScrollTop);
    }, _this.handleKeyDown = function (e) {
      e.preventDefault();

      _this.props.onKeyDown(e);

      if (e.which === 33) {
        // PageUp
        _this.handlePageUp();
      }

      if (e.which === 34) {
        // PageDown
        _this.handlePageDown();
      }

      if (e.which === 36) {
        // Home
        _this.handleHome();
      }

      if (e.which === 35) {
        // End
        _this.handleEnd();
      }
    }, _this.handleSort = function (_ref3) {
      var sortBy = _ref3.sortBy,
          sortDirection = _ref3.sortDirection;

      _this.props.onSort({ sortBy: sortBy, sortDirection: sortDirection });
    }, _this.handleRowClick = function (_ref4) {
      var event = _ref4.event,
          index = _ref4.index,
          rowData = _ref4.rowData;

      _this.props.onRowClick({ event: event, index: index, rowData: rowData });
    }, _this.handleRowRightClick = function (_ref5) {
      var event = _ref5.event,
          index = _ref5.index,
          rowData = _ref5.rowData;

      _this.props.onRowRightClick({ event: event, index: index, rowData: rowData });
    }, _this.handleRowDoubleClick = function (_ref6) {
      var event = _ref6.event,
          index = _ref6.index,
          rowData = _ref6.rowData;

      _this.props.onRowDoubleClick({ event: event, index: index, rowData: rowData });
    }, _this.handleSelection = function (_ref7) {
      var selection = _ref7.selection,
          scrollToIndex = _ref7.scrollToIndex;

      _this.props.onSelection(selection);
      _this.scrollToIndex(scrollToIndex);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ListView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.loading !== nextProps.loading) {
        // Force recalculate scrollHeight for appropriate handle "PageUp, PageDown, Home, End", etc. keys
        this.setState({ scrollHeight: nextProps.items.length * ROW_HEIGHT });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          rowContextMenuId = _props.rowContextMenuId,
          filesViewContextMenuId = _props.filesViewContextMenuId,
          items = _props.items,
          layout = _props.layout,
          layoutOptions = _props.layoutOptions,
          loading = _props.loading,
          onRef = _props.onRef,
          sortBy = _props.sortBy,
          sortDirection = _props.sortDirection;
      var _state = this.state,
          clientHeight = _state.clientHeight,
          scrollTop = _state.scrollTop,
          scrollHeight = _state.scrollHeight,
          scrollToIndex = _state.scrollToIndex;


      var itemsToRender = null;
      if (loading && this.containerHeight) {
        // Generate items for "loading placeholder"
        var itemsCount = Math.floor(this.containerHeight / ROW_HEIGHT - 1);
        itemsToRender = (0, _range3.default)(itemsCount).map(function (_) {
          return {};
        });
      } else {
        itemsToRender = items;
      }

      return _react2.default.createElement(
        _reactVirtualized.AutoSizer,
        null,
        function (_ref8) {
          var width = _ref8.width,
              height = _ref8.height;
          return (_this2.containerHeight = height) && _react2.default.createElement(
            _withSelectionHOC2.default,
            {
              items: itemsToRender,
              onKeyDown: _this2.handleKeyDown,
              onSelection: _this2.handleSelection,
              onRowClick: _this2.handleRowClick,
              onRowRightClick: _this2.handleRowRightClick,
              onRowDoubleClick: _this2.handleRowDoubleClick,
              selection: _this2.props.selection,
              onRef: onRef
            },
            function (_ref9) {
              var onRowClick = _ref9.onRowClick,
                  onRowRightClick = _ref9.onRowRightClick,
                  onRowDoubleClick = _ref9.onRowDoubleClick,
                  selection = _ref9.selection,
                  lastSelected = _ref9.lastSelected;
              return _react2.default.createElement(
                'div',
                {
                  className: 'oc-fm--list-view'
                },
                _react2.default.createElement(
                  _ScrollOnMouseOut2.default,
                  {
                    onCursorAbove: _this2.handleScrollTop,
                    onCursorBellow: _this2.handleScrollTop,
                    clientHeight: clientHeight,
                    scrollHeight: scrollHeight,
                    scrollTop: scrollTop,
                    topCaptureOffset: 40,
                    bottomCaptureOffset: 0,
                    style: {
                      width: width + 'px',
                      height: height + 'px'
                    }
                  },
                  _react2.default.createElement(
                    _reactContextmenu.ContextMenuTrigger,
                    { id: filesViewContextMenuId, holdToDisplay: HAS_TOUCH ? 1000 : -1 },
                    _react2.default.createElement(
                      _reactVirtualized.Table,
                      {
                        width: width,
                        height: height,
                        rowCount: itemsToRender.length,
                        rowGetter: function rowGetter(_ref10) {
                          var index = _ref10.index;
                          return itemsToRender[index];
                        },
                        rowHeight: ROW_HEIGHT,
                        headerHeight: HEADER_HEIGHT,
                        className: 'oc-fm--list-view__table',
                        gridClassName: 'oc-fm--list-view__grid',
                        overscanRowCount: 10,
                        onScroll: _this2.handleScroll,
                        scrollToIndex: scrollToIndex,
                        scrollTop: scrollTop,
                        sort: _this2.handleSort // eslint-disable-line react/jsx-handler-names
                        , sortBy: sortBy,
                        sortDirection: sortDirection,
                        rowRenderer: (0, _Row2.default)({
                          selection: selection, lastSelected: lastSelected, loading: loading, contextMenuId: rowContextMenuId, hasTouch: HAS_TOUCH
                        }),
                        noRowsRenderer: function noRowsRenderer() {
                          return _react2.default.createElement(_NoFilesFoundStub2.default, { locale: _this2.props.locale });
                        },
                        onRowClick: onRowClick,
                        onRowRightClick: onRowRightClick,
                        onRowDoubleClick: onRowDoubleClick
                      },
                      layout((0, _extends3.default)({}, layoutOptions, { loading: loading, width: width, height: height })).map(function (rawLayoutChild, i) {
                        return (0, _rawToReactElement2.default)(rawLayoutChild, i);
                      })
                    )
                  )
                ),
                _this2.props.children
              );
            }
          );
        }
      );
    }
  }]);
  return ListView;
}(_react.Component);

exports.default = ListView;


ListView.propTypes = propTypes;
ListView.defaultProps = defaultProps;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactContextmenu = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copied from https://github.com/bvaughn/react-virtualized/blob/04d1221133a1c59be24c8af90ae09e46000372b5/source/Table/defaultRowRenderer.js#L1

// TODO Make sure this component can be optimised using "shouldComponentUpdate"

var Row = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'render',
    value: function render() {
      /* eslint-disable  react/prop-types */
      var _props = this.props,
          className = _props.className,
          columns = _props.columns,
          index = _props.index,
          onRowClick = _props.onRowClick,
          onRowDoubleClick = _props.onRowDoubleClick,
          onRowMouseOut = _props.onRowMouseOut,
          onRowMouseOver = _props.onRowMouseOver,
          onRowRightClick = _props.onRowRightClick,
          rowData = _props.rowData,
          style = _props.style,
          selection = _props.selection,
          lastSelected = _props.lastSelected,
          loading = _props.loading,
          contextMenuId = _props.contextMenuId,
          hasTouch = _props.hasTouch;
      /* eslint-enable react/prop-types */

      var a11yProps = {};

      if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
        a11yProps['aria-label'] = 'row';
        a11yProps.tabIndex = 0;

        if (onRowClick) {
          a11yProps.onClick = function (event) {
            return onRowClick({ event: event, index: index, rowData: rowData });
          };
        }
        if (onRowDoubleClick) {
          a11yProps.onDoubleClick = function (event) {
            return onRowDoubleClick({ event: event, index: index, rowData: rowData });
          };
        }
        if (onRowMouseOut) {
          a11yProps.onMouseOut = function (event) {
            return onRowMouseOut({ event: event, index: index, rowData: rowData });
          };
        }
        if (onRowMouseOver) {
          a11yProps.onMouseOver = function (event) {
            return onRowMouseOver({ event: event, index: index, rowData: rowData });
          };
        }
        if (onRowRightClick) {
          a11yProps.onContextMenu = function (event) {
            return onRowRightClick({ event: event, index: index, rowData: rowData });
          };
        }
      }

      var isSelected = selection.indexOf(rowData.id) !== -1;
      var isLastSelected = lastSelected === rowData.id;

      return _react2.default.createElement(
        _reactContextmenu.ContextMenuTrigger,
        { id: contextMenuId, holdToDisplay: hasTouch ? 1000 : -1 },
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, a11yProps, {
            className: '\n              ReactVirtualized__Table__row\n              oc-fm--list-view__row\n              ' + (!loading && isSelected ? 'oc-fm--list-view__row--selected' : '') + '\n              ' + (!loading && isLastSelected ? 'oc-fm--list-view__row--last-selected' : '') + '\n              ' + (loading ? 'oc-fm--list-view__row--loading' : '') + '\n            ',
            key: rowData.id,
            role: 'row',
            style: style
          }),
          columns
        )
      );
    }
  }]);
  return Row;
}(_react.Component);

exports.default = function (_ref) {
  var selection = _ref.selection,
      lastSelected = _ref.lastSelected,
      loading = _ref.loading,
      contextMenuId = _ref.contextMenuId;
  return function (props) {
    return _react2.default.createElement(Row, (0, _extends3.default)({}, props, {
      selection: selection,
      lastSelected: lastSelected,
      loading: loading,
      contextMenuId: contextMenuId
    }));
  };
};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(202).default;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(464);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'oc-fm--loading-cell' },
    _react2.default.createElement(
      'div',
      { className: 'oc-fm--loading-cell__content' },
      '\xA0'
    )
  );
};

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(465);

var _SVG = __webpack_require__(19);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrowIcon = __webpack_require__(405);

var propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    onClick: _propTypes2.default.func
  })),
  loading: _propTypes2.default.bool
};
var defaultProps = {
  items: [],
  loading: false
};

var LocationBar = function (_Component) {
  (0, _inherits3.default)(LocationBar, _Component);

  function LocationBar(props) {
    (0, _classCallCheck3.default)(this, LocationBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LocationBar.__proto__ || Object.getPrototypeOf(LocationBar)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(LocationBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          loading = _props.loading;


      if (!items.length) {
        return _react2.default.createElement(
          'div',
          { className: 'oc-fm--location-bar__item oc-fm--location-bar__item--disabled' },
          _react2.default.createElement(
            'div',
            { className: 'oc-fm--location-bar__item-name' },
            _react2.default.createElement(
              'span',
              null,
              '\xA0'
            )
          )
        );
      }

      var itemsElement = items.map(function (item, i) {
        var arrow = i < items.length - 1 ? _react2.default.createElement(_SVG2.default, { className: 'oc-fm--location-bar__item-arrow', svg: arrowIcon }) : null;

        return _react2.default.createElement(
          'div',
          {
            key: i,
            tabIndex: '0',
            onClick: item.onClick // eslint-disable-line react/jsx-handler-names
            , className: '\n            oc-fm--location-bar__item\n            ' + (i === items.length - 1 ? 'oc-fm--location-bar__item--last' : '') + '\n          '
          },
          _react2.default.createElement(
            'div',
            {
              className: '\n              oc-fm--location-bar__item-name\n              ' + (loading ? 'oc-fm--location-bar__item-name--loading' : '') + '\n            ',
              name: item.name
            },
            item.name
          ),
          arrow
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'oc-fm--location-bar' },
        itemsElement
      );
    }
  }]);
  return LocationBar;
}(_react.Component);

exports.default = LocationBar;


LocationBar.propTypes = propTypes;
LocationBar.defaultProps = defaultProps;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(206).default;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(466);

var _SVG = __webpack_require__(19);

var _SVG2 = _interopRequireDefault(_SVG);

var _LoadingCell = __webpack_require__(51);

var _LoadingCell2 = _interopRequireDefault(_LoadingCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var loading = _ref.loading,
      getIcon = _ref.getIcon;
  return function (cellProps) {
    if (loading) {
      return _react2.default.createElement(_LoadingCell2.default, null);
    }

    var _getIcon = getIcon(cellProps.rowData),
        svg = _getIcon.svg,
        fill = _getIcon.fill;

    return _react2.default.createElement(
      'div',
      { className: 'oc-fm--name-cell' },
      _react2.default.createElement(
        'div',
        { className: 'oc-fm--name-cell__icon' },
        _react2.default.createElement(_SVG2.default, {
          className: 'oc-fm--name-cell__icon-image',
          svg: svg,
          style: { fill: fill }
        })
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'oc-fm--name-cell__title',
          title: cellProps.cellData || ''
        },
        cellProps.cellData || ''
      )
    );
  };
};

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVG = __webpack_require__(19);

var _SVG2 = _interopRequireDefault(_SVG);

var _translations = __webpack_require__(115);

var _translations2 = _interopRequireDefault(_translations);

__webpack_require__(467);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nothingToShowIcon = __webpack_require__(399);

var NoFilesFoundStub = function NoFilesFoundStub(_ref) {
  var locale = _ref.locale;
  return _react2.default.createElement(
    'div',
    { className: 'oc-fm--no-files-found-stub' },
    _react2.default.createElement(_SVG2.default, {
      className: 'oc-fm--no-files-found-stub__icon',
      svg: nothingToShowIcon
    }),
    _react2.default.createElement(
      'div',
      { className: 'oc-fm--no-files-found-stub__title' },
      (0, _translations2.default)(locale, "common.NoFilesFoundStub.nothingToShow")
    ),
    _react2.default.createElement(
      'div',
      { className: 'oc-fm--no-files-found-stub__sub-title' },
      (0, _translations2.default)(locale, "common.NoFilesFoundStub.useContextMenu")
    )
  );
};

NoFilesFoundStub.propTypes = {
  locale: _propTypes2.default.string
};

NoFilesFoundStub.defaultProps = {
  locale: 'en'
};

exports.default = NoFilesFoundStub;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(468);

var _ProgressIcon = __webpack_require__(69);

var _ProgressIcon2 = _interopRequireDefault(_ProgressIcon);

var _SVG = __webpack_require__(19);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  icon: _propTypes2.default.shape({ svg: _propTypes2.default.string, fill: _propTypes2.default.string }),
  title: _propTypes2.default.node,
  progress: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  onProgressClick: _propTypes2.default.func
};
var defaultProps = {
  icon: null,
  title: '',
  progress: 100,
  onClick: function onClick() {},
  onProgressClick: function onProgressClick() {}
};

var NotificationProgressItem = function (_Component) {
  (0, _inherits3.default)(NotificationProgressItem, _Component);

  function NotificationProgressItem() {
    (0, _classCallCheck3.default)(this, NotificationProgressItem);
    return (0, _possibleConstructorReturn3.default)(this, (NotificationProgressItem.__proto__ || Object.getPrototypeOf(NotificationProgressItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotificationProgressItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          title = _props.title,
          progress = _props.progress;


      var iconElement = icon ? _react2.default.createElement(
        'div',
        { className: 'oc-fm--notification-progress-item__icon' },
        _react2.default.createElement(_SVG2.default, { svg: icon.svg, style: { fill: icon.fill || 'rgba(0, 0, 0, 0.72)' } })
      ) : null;

      var titleElement = title ? _react2.default.createElement(
        'div',
        { className: 'oc-fm--notification-progress-item__title', title: title },
        title
      ) : null;

      return _react2.default.createElement(
        'div',
        { className: 'oc-fm--notification-progress-item' },
        iconElement,
        titleElement,
        _react2.default.createElement(
          'div',
          { className: 'oc-fm--notification-progress-item__progress-icon' },
          _react2.default.createElement(_ProgressIcon2.default, { radius: 12, progress: progress })
        )
      );
    }
  }]);
  return NotificationProgressItem;
}(_react.Component);

exports.default = NotificationProgressItem;


NotificationProgressItem.propTypes = propTypes;
NotificationProgressItem.defaultProps = defaultProps;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(469);

var _SVG = __webpack_require__(19);

var _SVG2 = _interopRequireDefault(_SVG);

var _rawToReactElement = __webpack_require__(70);

var _rawToReactElement2 = _interopRequireDefault(_rawToReactElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var minimizeIcon = __webpack_require__(404);
var maximizeIcon = __webpack_require__(406);
var closeIcon = __webpack_require__(402);

var propTypes = {
  closable: _propTypes2.default.bool,
  minimizable: _propTypes2.default.bool,
  onCancel: _propTypes2.default.func,
  onHide: _propTypes2.default.func,
  cancelButtonText: _propTypes2.default.string,
  progressText: _propTypes2.default.node,
  title: _propTypes2.default.node,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape({
    elementType: _propTypes2.default.string,
    elementProps: _propTypes2.default.object
  })), _propTypes2.default.arrayOf(_propTypes2.default.node)])
};
var defaultProps = {
  closable: false,
  minimizable: true,
  onCancel: function onCancel() {},
  onHide: function onHide() {},
  progressText: '',
  cancelButtonText: 'Cancel',
  title: '',
  children: []
};

var Notification = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification(props) {
    (0, _classCallCheck3.default)(this, Notification);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

    _this.handleToggleClick = function () {
      _this.setState({ minimized: !_this.state.minimized });
    };

    _this.handleCancelClick = function () {
      _this.props.onCancel();
    };

    _this.state = {
      minimized: false
    };
    return _this;
  }

  (0, _createClass3.default)(Notification, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          onHide = _props.onHide,
          minimizable = _props.minimizable,
          closable = _props.closable,
          progressText = _props.progressText,
          cancelButtonText = _props.cancelButtonText,
          children = _props.children;
      var minimized = this.state.minimized;


      var toggleElement = minimizable && (progressText || children) ? _react2.default.createElement(
        'div',
        { tabIndex: '0', className: 'oc-fm--notification__header-icon', onClick: this.handleToggleClick },
        _react2.default.createElement(_SVG2.default, {
          svg: minimized ? maximizeIcon : minimizeIcon,
          style: { fill: '#f5f5f5' }
        })
      ) : null;

      var closeElement = closable ? _react2.default.createElement(
        'div',
        { tabIndex: '0', className: 'oc-fm--notification__header-icon', onClick: onHide },
        _react2.default.createElement(_SVG2.default, {
          svg: closeIcon,
          style: { fill: '#f5f5f5' }
        })
      ) : null;

      var progressMessageElement = progressText ? _react2.default.createElement(
        'div',
        { className: 'oc-fm--notification__progress' },
        _react2.default.createElement(
          'div',
          { className: 'oc-fm--notification__progress-text' },
          progressText
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.handleCancelClick, className: 'oc-fm--notification__cancel-button' },
          cancelButtonText
        )
      ) : null;

      var itemsElement = _react2.default.createElement(
        'div',
        { className: 'oc-fm--notification__items' },
        children.map(function (rawChild, i) {
          if (_react2.default.isValidElement(rawChild)) {
            return (0, _extends3.default)({}, rawChild, { key: i });
          }

          return (0, _rawToReactElement2.default)(rawChild, i);
        })
      );

      return _react2.default.createElement(
        'div',
        { className: 'oc-fm--notification' },
        _react2.default.createElement(
          'div',
          { className: 'oc-fm--notification__header' },
          _react2.default.createElement(
            'div',
            { title: title, className: 'oc-fm--notification__header-title' },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'oc-fm--notification__header-icons' },
            toggleElement,
            closeElement
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: '\n            oc-fm--notification__content\n            ' + (minimized ? 'oc-fm--notification__content--minimized' : '') + '\n          '
          },
          progressMessageElement,
          itemsElement
        )
      );
    }
  }]);
  return Notification;
}(_react.Component);

exports.default = Notification;


Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(470);

var _Notification = __webpack_require__(68);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  notifications: _propTypes2.default.arrayOf(_propTypes2.default.object),
  className: _propTypes2.default.string
};
var defaultProps = {
  notifications: [],
  className: ''
};

var Notifications = function (_Component) {
  (0, _inherits3.default)(Notifications, _Component);

  function Notifications(props) {
    (0, _classCallCheck3.default)(this, Notifications);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Notifications.__proto__ || Object.getPrototypeOf(Notifications)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Notifications, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          notifications = _props.notifications,
          className = _props.className;


      var notificationsElement = notifications.map(function (notification, i) {
        var props = (0, _extends3.default)({}, notification, {
          children: (notification.children || []).map(function (o) {
            return (0, _extends3.default)({}, o.element, { key: o.element.id });
          })
        });

        return _react2.default.createElement(
          'div',
          { key: i, className: 'oc-fm--notifications__item' },
          _react2.default.createElement(_Notification2.default, props)
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'oc-fm--notifications ' + (className || '') },
        notificationsElement
      );
    }
  }]);
  return Notifications;
}(_react.Component);

exports.default = Notifications;


Notifications.propTypes = propTypes;
Notifications.defaultProps = defaultProps;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(212).default;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _extend2 = __webpack_require__(382);

var _extend3 = _interopRequireDefault(_extend2);

var _findIndex2 = __webpack_require__(64);

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _find2 = __webpack_require__(155);

var _find3 = _interopRequireDefault(_find2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addNotification(notifications, id, props) {
  var index = (0, _findIndex3.default)(notifications, function (o) {
    return o.id === id;
  });
  if (index !== -1) {
    console.error('Can\'t add notification: ' + id + ' already exists');
    return notifications;
  }
  return notifications.concat([(0, _extends3.default)({ id: id, children: props.children || [] }, props)]);
}

function updateNotification(notifications, id, props) {
  return notifications.map(function (o) {
    if (o.id !== id) {
      return o;
    }

    return (0, _extend3.default)({}, o, props);
  });
}

function getNotification(notifications, id) {
  return (0, _find3.default)(notifications, function (o) {
    return o.id === id;
  });
}

function removeNotification(notifications, id) {
  return notifications.filter(function (o) {
    return o.id !== id;
  });
}

function addChild(notificationChildren, id, element) {
  return notificationChildren.concat([{ id: id, element: element }]);
}

function removeChild(notificationChildren, id) {
  return notificationChildren.filter(function (o) {
    return o.id !== id;
  });
}

function updateChild(notificationChildren, id, element) {
  return notificationChildren.map(function (o) {
    if (o.id !== id) {
      return o;
    }

    return (0, _extend3.default)({}, o, (0, _extends3.default)({ id: id }, element));
  });
}

function getChild(notificationChildren, id) {
  return (0, _find3.default)(notificationChildren, function (o) {
    return o.id === id;
  });
}

exports.default = {
  addNotification: addNotification,
  updateNotification: updateNotification,
  removeNotification: removeNotification,
  getNotification: getNotification,
  addChild: addChild,
  removeChild: removeChild,
  updateChild: updateChild,
  getChild: getChild
};

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(471);

var _SVG = __webpack_require__(19);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Inspired by https://codepen.io/xgad/post/svg-radial-progress-meters

var completeIcon = __webpack_require__(403);

var propTypes = {
  progress: _propTypes2.default.number,
  radius: _propTypes2.default.number
};
var defaultProps = {
  progress: 0,
  radius: 12
};

var viewportSize = 120;
var circlePos = viewportSize / 2;

var ProgressIcon = function (_Component) {
  (0, _inherits3.default)(ProgressIcon, _Component);

  function ProgressIcon() {
    (0, _classCallCheck3.default)(this, ProgressIcon);
    return (0, _possibleConstructorReturn3.default)(this, (ProgressIcon.__proto__ || Object.getPrototypeOf(ProgressIcon)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProgressIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          progress = _props.progress,
          radius = _props.radius;


      var size = radius * 2 + 'px';

      if (progress === 100) {
        return _react2.default.createElement(
          'div',
          {
            className: 'oc-fm--progress-icon',
            style: { width: size, height: size }
          },
          _react2.default.createElement(_SVG2.default, {
            className: 'oc-fm--progress-icon__complete',
            svg: completeIcon,
            style: { fill: '#fff', width: size, height: size }
          })
        );
      }

      var strokeWidth = Math.log(radius) * 5;
      var circleRadius = 60 - strokeWidth / 2;
      var circumference = 2 * Math.PI * circleRadius;
      var dashOffset = circumference * (1 - progress / 100);

      return _react2.default.createElement(
        'div',
        {
          className: 'oc-fm--progress-icon',
          style: { width: size, height: size }
        },
        _react2.default.createElement(
          'svg',
          { className: 'oc-fm--progress-icon__svg', viewBox: '0 0 ' + viewportSize + ' ' + viewportSize },
          _react2.default.createElement('circle', {
            className: 'oc-fm--progress-icon__svg-meter',
            cx: circlePos,
            cy: circlePos,
            r: circleRadius,
            strokeWidth: strokeWidth
          }),
          _react2.default.createElement('circle', {
            className: 'oc-fm--progress-icon__svg-value',
            cx: circlePos,
            cy: circlePos,
            r: circleRadius,
            strokeWidth: strokeWidth,
            strokeDashoffset: dashOffset,
            strokeDasharray: circumference
          })
        )
      );
    }
  }]);
  return ProgressIcon;
}(_react.Component);

exports.default = ProgressIcon;


ProgressIcon.propTypes = propTypes;
ProgressIcon.defaultProps = defaultProps;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(20);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// XXX - scroll with mouse out doesn't work on ListView. If it can be fixed by another way, it welcome.
// TODO - remove this PERFECT component

var SCROLL_STRENGTH = 20;
var TIMEOUT_TIME = 16;

var propTypes = {
  onCursorAbove: _propTypes2.default.func,
  onCursorBellow: _propTypes2.default.func,
  topCaptureOffset: _propTypes2.default.number,
  bottomCaptureOffset: _propTypes2.default.number,
  scrollHeight: _propTypes2.default.number,
  clientHeight: _propTypes2.default.number,
  scrollTop: _propTypes2.default.number
};
var defaultProps = {
  onCursorAbove: function onCursorAbove() {},
  onCursorBellow: function onCursorBellow() {},
  topCaptureOffset: 12,
  bottomCaptureOffset: 12,
  scrollHeight: 0,
  clientHeight: 0,
  scrollTop: 0
};

var ScrollOnMouseOut = function (_Component) {
  (0, _inherits3.default)(ScrollOnMouseOut, _Component);

  function ScrollOnMouseOut(props) {
    (0, _classCallCheck3.default)(this, ScrollOnMouseOut);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ScrollOnMouseOut.__proto__ || Object.getPrototypeOf(ScrollOnMouseOut)).call(this, props));

    _this.handleMouseDown = function () {
      _this.setState({ captureCursor: true });
    };

    _this.startCaptureCursor = function () {
      window.addEventListener('mousemove', _this.handleMouseMove, true);
    };

    _this.stopCaptureCursor = function () {
      _this.clearTimeout();
      window.removeEventListener('mousemove', _this.handleMouseMove, true);
    };

    _this.handleCursorAbove = function () {
      var scrollTop = _this.props.scrollTop;


      var newScrollTop = scrollTop - SCROLL_STRENGTH < 0 ? 0 : scrollTop - SCROLL_STRENGTH;

      _this.timeout = window.setTimeout(function () {
        _this.clearTimeout();
        if (!_this.state.isCursorBellow && !_this.state.isCursorAbove) {
          _this.clearTimeout();
          return;
        }

        _this.props.onCursorAbove(newScrollTop);
        _this.handleCursorAbove();
      }, TIMEOUT_TIME);
    };

    _this.handleCursorBellow = function () {
      var _this$props = _this.props,
          clientHeight = _this$props.clientHeight,
          scrollHeight = _this$props.scrollHeight,
          scrollTop = _this$props.scrollTop;


      var newScrollTop = scrollTop + SCROLL_STRENGTH > scrollHeight - clientHeight ? scrollHeight - clientHeight : scrollTop + SCROLL_STRENGTH;

      _this.timeout = window.setTimeout(function () {
        _this.clearTimeout();
        if (!_this.state.isCursorBellow && !_this.state.isCursorAbove) {
          _this.clearTimeout();
          return;
        }

        _this.props.onCursorBellow(newScrollTop);
        _this.handleCursorBellow();
      }, TIMEOUT_TIME);
    };

    _this.clearTimeout = function () {
      window.clearTimeout(_this.timeout);
    };

    _this.state = {
      captureCursor: false,
      isCursorAbove: false,
      isCursorBellow: false
    };

    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleWindowMouseUp = _this.handleWindowMouseUp.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ScrollOnMouseOut, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('mouseup', this.handleWindowMouseUp);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.captureCursor) {
        this.startCaptureCursor();
      } else {
        this.stopCaptureCursor();
      }

      if (nextState.isCursorAbove && this.state.isCursorAbove !== nextState.isCursorAbove) {
        this.handleCursorAbove();
      } else if (nextState.isCursorBellow && this.state.isCursorBellow !== nextState.isCursorBellow) {
        this.handleCursorBellow();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopCaptureCursor();
      this.clearTimeout();
      window.removeEventListener('mouseup', this.handleWindowMouseUp);
    }
  }, {
    key: 'handleWindowMouseUp',
    value: function handleWindowMouseUp() {
      this.setState({ captureCursor: false });
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      var _props = this.props,
          topCaptureOffset = _props.topCaptureOffset,
          bottomCaptureOffset = _props.bottomCaptureOffset;


      var rect = this.containerRef.getBoundingClientRect();
      var isCursorAbove = e.clientY < rect.top + topCaptureOffset;
      var isCursorBellow = e.clientY > rect.bottom - bottomCaptureOffset;

      if (isCursorAbove) {
        this.setState({ isCursorAbove: true, isCursorBellow: false });
      } else if (isCursorBellow) {
        this.setState({ isCursorAbove: false, isCursorBellow: true });
      } else {
        this.setState({ isCursorAbove: false, isCursorBellow: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          onCursorAbove = _props2.onCursorAbove,
          onCursorBellow = _props2.onCursorBellow,
          topCaptureOffset = _props2.topCaptureOffset,
          bottomCaptureOffset = _props2.bottomCaptureOffset,
          scrollHeight = _props2.scrollHeight,
          clientHeight = _props2.clientHeight,
          scrollTop = _props2.scrollTop,
          restProps = (0, _objectWithoutProperties3.default)(_props2, ['onCursorAbove', 'onCursorBellow', 'topCaptureOffset', 'bottomCaptureOffset', 'scrollHeight', 'clientHeight', 'scrollTop']);


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, restProps, {
          ref: function ref(_ref) {
            return _this2.containerRef = _ref;
          },
          onMouseDown: this.handleMouseDown
        }),
        this.props.children
      );
    }
  }]);
  return ScrollOnMouseOut;
}(_react.Component);

exports.default = ScrollOnMouseOut;


ScrollOnMouseOut.propTypes = propTypes;
ScrollOnMouseOut.defaultProps = defaultProps;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(73);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(72);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(472);

var _Dialog = __webpack_require__(67);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  cancelButtonText: _propTypes2.default.string,
  headerText: _propTypes2.default.string,
  messageText: _propTypes2.default.string,
  inputLabelText: _propTypes2.default.string,
  initialValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onHide: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onValidate: _propTypes2.default.func,
  submitButtonText: _propTypes2.default.string
};
var defaultProps = {
  cancelButtonText: 'Cancel',
  headerText: 'Set name',
  messageText: '',
  inputLabelText: '',
  initialValue: '',
  onChange: function onChange() {},
  onHide: function onHide() {},
  onSubmit: function onSubmit() {},
  onValidate: function onValidate() {},
  submitButtonText: 'Create'
};

var SetNameDialog = function (_Component) {
  (0, _inherits3.default)(SetNameDialog, _Component);

  function SetNameDialog(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, SetNameDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SetNameDialog.__proto__ || Object.getPrototypeOf(SetNameDialog)).call(this, props));

    _this.handleChange = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var validationError;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({ value: e.target.value });
                _context.next = 3;
                return _this.props.onValidate(e.target.value);

              case 3:
                validationError = _context.sent;

                if (_this._isMounted) {
                  _this.setState({ validationError: validationError, valid: !validationError });
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleKeyDown = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (e.which === 13) {
                  // Enter key
                  if (!_this.state.validationError && _this.state.value) {
                    _this.handleSubmit(_this.state.value);
                  }
                }

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleSubmitButtonClick = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(e) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this.state.validationError && _this.state.value) {
                  _this.handleSubmit(_this.state.value);
                }

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.handleSubmit = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var validationError;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this.props.onSubmit(_this.state.value);

            case 2:
              validationError = _context4.sent;


              if (validationError && _this._isMounted) {
                _this.setState({ validationError: validationError });
              }

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this2);
    }));

    _this.handleFocus = function (e) {
      // Move caret to the end
      var tmpValue = e.target.value;
      e.target.value = ''; // eslint-disable-line no-param-reassign
      e.target.value = tmpValue; // eslint-disable-line no-param-reassign
    };

    _this.state = {
      value: props.initialValue,
      validationError: null,
      valid: false
    };
    return _this;
  }

  (0, _createClass3.default)(SetNameDialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onHide = _props.onHide,
          headerText = _props.headerText,
          inputLabelText = _props.inputLabelText,
          messageText = _props.messageText,
          submitButtonText = _props.submitButtonText,
          cancelButtonText = _props.cancelButtonText;
      var _state = this.state,
          value = _state.value,
          validationError = _state.validationError,
          valid = _state.valid;


      var showValidationErrorElement = typeof validationError === 'string' && validationError;
      var validationErrorElement = _react2.default.createElement(
        'div',
        {
          className: '\n          oc-fm--dialog__validation-error\n          ' + (showValidationErrorElement ? '' : 'oc-fm--dialog__validation-error--hidden') + '\n        '
        },
        validationError || _react2.default.createElement(
          'span',
          null,
          '\xA0'
        )
      );

      return _react2.default.createElement(
        _Dialog2.default,
        { onHide: onHide },
        _react2.default.createElement(
          'div',
          { className: 'oc-fm--dialog__content', onKeyDown: this.handleKeyDown },
          _react2.default.createElement(
            'div',
            { className: 'oc-fm--dialog__header' },
            headerText
          ),
          messageText && _react2.default.createElement(
            'div',
            { className: 'oc-fm--dialog__message' },
            messageText
          ),
          inputLabelText && _react2.default.createElement(
            'div',
            { className: 'oc-fm--dialog__input-label' },
            inputLabelText
          ),
          _react2.default.createElement('input', {
            ref: function ref(_ref5) {
              return _ref5 && _ref5.focus();
            },
            spellCheck: false,
            className: '\n              oc-fm--dialog__input\n              oc-fm--dialog__input--margin-bottom\n              ' + (validationError ? '' : 'oc-fm--dialog__input--error') + '\n            ',
            value: value,
            onChange: this.handleChange,
            onFocus: this.handleFocus
          }),
          validationErrorElement,
          _react2.default.createElement(
            'div',
            { className: 'oc-fm--dialog__horizontal-group oc-fm--dialog__horizontal-group--to-right' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'oc-fm--dialog__button oc-fm--dialog__button--default', onClick: onHide },
              cancelButtonText
            ),
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: 'oc-fm--dialog__button oc-fm--dialog__button--primary',
                onClick: this.handleSubmitButtonClick,
                disabled: !valid
              },
              submitButtonText
            )
          )
        )
      );
    }
  }]);
  return SetNameDialog;
}(_react.Component);

exports.default = SetNameDialog;


SetNameDialog.propTypes = propTypes;
SetNameDialog.defaultProps = defaultProps;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(473);

var _SVG = __webpack_require__(19);

var _SVG2 = _interopRequireDefault(_SVG);

var _DropdownMenu = __webpack_require__(193);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownMenuItem = __webpack_require__(106);

var _DropdownMenuItem2 = _interopRequireDefault(_DropdownMenuItem);

var _history = __webpack_require__(113);

var _translations = __webpack_require__(115);

var _translations2 = _interopRequireDefault(_translations);

var _iconsSvg = __webpack_require__(219);

var _iconsSvg2 = _interopRequireDefault(_iconsSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    icon: _propTypes2.default.object,
    onClick: _propTypes2.default.func
  })),
  newButtonItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    icon: _propTypes2.default.object,
    onClick: _propTypes2.default.func
  })),
  newButtonText: _propTypes2.default.string,
  history: _propTypes2.default.shape({
    stack: _propTypes2.default.array,
    currentPointer: _propTypes2.default.number
  }),
  onMoveBackward: _propTypes2.default.func,
  onMoveForward: _propTypes2.default.func,
  locale: _propTypes2.default.string,
  viewMode: _propTypes2.default.string.isRequired,
  onViewModeChange: _propTypes2.default.func.isRequired,
  gridModeSupported: _propTypes2.default.bool
};
var defaultProps = {
  history: [],
  items: [],
  newButtonItems: [],
  locale: 'en'
};

var ICON_COLOR = '#424242';

var Toolbar = function (_Component) {
  (0, _inherits3.default)(Toolbar, _Component);

  function Toolbar(props) {
    (0, _classCallCheck3.default)(this, Toolbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));

    _this.handleShowDropdownMenu = function () {
      _this.setState({ showDropdownMenu: true });
    };

    _this.handleHideDropdownMenu = function () {
      _this.setState({ showDropdownMenu: false });
    };

    _this.handleMoveBackward = function () {
      var history = _this.props.history;

      var newHistory = (0, _history.doHistoryStep)(history, -1);
      _this.props.onMoveBackward(newHistory);
    };

    _this.handleMoveForward = function () {
      var history = _this.props.history;

      var newHistory = (0, _history.doHistoryStep)(history, 1);
      _this.props.onMoveForward(newHistory);
    };

    _this.state = {
      showDropdownMenu: false
    };
    return _this;
  }

  (0, _createClass3.default)(Toolbar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          newButtonItems = _props.newButtonItems,
          newButtonText = _props.newButtonText,
          history = _props.history,
          viewMode = _props.viewMode,
          onViewModeChange = _props.onViewModeChange,
          gridModeSupported = _props.gridModeSupported,
          onMoveBackward = _props.onMoveBackward,
          onMoveForward = _props.onMoveForward;
      var showDropdownMenu = this.state.showDropdownMenu;


      var itemsElement = items.length ? _react2.default.createElement(
        'div',
        { 'data-test-id': 'toolbar', className: 'oc-fm--toolbar__items' },
        items.map(function (item, i) {
          return _react2.default.createElement(
            'button',
            {
              type: 'button',
              key: i,
              'data-test-id': 'toolbar-item--' + item.id,
              disabled: item.disabled,
              className: 'oc-fm--toolbar__item',
              title: item.label || '',
              onClick: !item.disabled && item.onClick || function () {}
            },
            _react2.default.createElement(_SVG2.default, {
              className: 'oc-fm--toolbar__item-icon',
              svg: item.icon && item.icon.svg,
              style: { fill: item.icon && item.icon.fill || ICON_COLOR }
            })
          );
        })
      ) : null;

      var newButtonElement = newButtonText ? _react2.default.createElement(
        'button',
        {
          type: 'button',
          onClick: this.handleShowDropdownMenu,
          className: 'oc-fm--toolbar__new-button'
        },
        newButtonText
      ) : newButtonItems.map(function (item, i) {
        return _react2.default.createElement(
          'button',
          {
            key: i,
            'data-test-id': 'toolbar-item--' + item.id,
            disabled: item.disabled,
            className: 'oc-fm--toolbar__item',
            title: item.label || '',
            onClick: !item.disabled && item.onClick || function () {}
          },
          _react2.default.createElement(_SVG2.default, {
            className: 'oc-fm--toolbar__item-icon',
            svg: item.icon && item.icon.svg,
            style: { fill: item.icon && item.icon.fill || ICON_COLOR }
          })
        );
      });

      var dropdownMenuItems = newButtonItems.map(function (item, i) {
        return _react2.default.createElement(
          _DropdownMenuItem2.default,
          { key: i, icon: item.icon, onClick: item.onClick || function () {} },
          _react2.default.createElement(
            'span',
            null,
            item.label
          )
        );
      });

      var dropdownMenuElement = showDropdownMenu ? _react2.default.createElement(
        _DropdownMenu2.default,
        {
          show: showDropdownMenu,
          onHide: this.handleHideDropdownMenu
        },
        dropdownMenuItems
      ) : null;

      var newButtonContainer = newButtonText ? _react2.default.createElement(
        'div',
        { className: 'oc-fm--toolbar__new-button-container' },
        newButtonElement,
        dropdownMenuElement
      ) : _react2.default.createElement(
        'div',
        { 'data-test-id': 'toolbar', className: 'oc-fm--toolbar__items' },
        newButtonElement
      );

      var getMessage = _translations2.default.bind(null, this.props.locale);

      var navButtons = _react2.default.createElement(
        'div',
        { className: 'oc-fm--toolbar__nav-buttons' },
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            disabled: !(0, _history.isHistoryStepPossible)(history, -1),
            className: 'oc-fm--toolbar__item',
            title: getMessage('common.Toolbar.moveBack'),
            onClick: function onClick() {
              return _this2.handleMoveBackward();
            }
          },
          _react2.default.createElement(_SVG2.default, {
            className: 'oc-fm--toolbar__item-icon',
            svg: _iconsSvg2.default.moveBackward,
            style: { fill: ICON_COLOR }
          })
        ),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            disabled: !(0, _history.isHistoryStepPossible)(history, 1),
            className: 'oc-fm--toolbar__item',
            title: getMessage('common.Toolbar.moveForward'),
            onClick: function onClick() {
              return _this2.handleMoveForward();
            }
          },
          _react2.default.createElement(_SVG2.default, {
            className: 'oc-fm--toolbar__item-icon',
            svg: _iconsSvg2.default.moveForward,
            style: { fill: ICON_COLOR }
          })
        )
      );

      var viewLayoutButtons = gridModeSupported && _react2.default.createElement(
        'div',
        { className: 'oc-fm--toolbar__items' },
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            disabled: viewMode === 'list',
            className: 'oc-fm--toolbar__item',
            title: getMessage('common.Toolbar.listView'),
            onClick: function onClick() {
              return onViewModeChange('list');
            }
          },
          _react2.default.createElement(_SVG2.default, {
            className: 'oc-fm--toolbar__item-icon',
            svg: _iconsSvg2.default.list,
            style: { fill: ICON_COLOR }
          })
        ),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            disabled: viewMode === 'grid',
            className: 'oc-fm--toolbar__item',
            title: getMessage('common.Toolbar.gridView'),
            onClick: function onClick() {
              return onViewModeChange('grid');
            }
          },
          _react2.default.createElement(_SVG2.default, {
            className: 'oc-fm--toolbar__item-icon',
            svg: _iconsSvg2.default.grid,
            style: { fill: ICON_COLOR }
          })
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'oc-fm--toolbar' },
        navButtons,
        viewLayoutButtons,
        newButtonContainer,
        itemsElement
      );
    }
  }]);
  return Toolbar;
}(_react.Component);

exports.default = Toolbar;


Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // https://raw.githubusercontent.com/OpusCapita/svg-icons/master/svg/arrow_back.svg
  moveBackward: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\"><path d=\"M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z\"/></svg>",
  // https://raw.githubusercontent.com/OpusCapita/svg-icons/master/svg/arrow_forward.svg
  moveForward: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\"><path d=\"M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z\"/></svg>",
  // https://raw.githubusercontent.com/OpusCapita/svg-icons/master/svg/list.svg
  list: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\"><path d=\"M8 21c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM8 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 24c-1.67 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.33-3-3-3zm6 5h28v-4H14v4zm0-12h28v-4H14v4zm0-16v4h28v-4H14z\"/></svg>",
  // https://raw.githubusercontent.com/OpusCapita/svg-icons/master/svg/grid_on.svg
  grid: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\"><path d=\"M40 4H8C5.79 4 4 5.79 4 8v32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM16 40H8v-8h8v8zm0-12H8v-8h8v8zm0-12H8V8h8v8zm12 24h-8v-8h8v8zm0-12h-8v-8h8v8zm0-12h-8V8h8v8zm12 24h-8v-8h8v8zm0-12h-8v-8h8v8zm0-12h-8V8h8v8z\"/></svg>"
};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __webpack_require__(218).default;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Cell = __webpack_require__(104);

var _Cell2 = _interopRequireDefault(_Cell);

var _ConfirmDialog = __webpack_require__(186);

var _ConfirmDialog2 = _interopRequireDefault(_ConfirmDialog);

var _ContextMenuItem = __webpack_require__(105);

var _ContextMenuItem2 = _interopRequireDefault(_ContextMenuItem);

var _Dialog = __webpack_require__(67);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _HeaderCell = __webpack_require__(107);

var _HeaderCell2 = _interopRequireDefault(_HeaderCell);

var _LoadingCell = __webpack_require__(51);

var _LoadingCell2 = _interopRequireDefault(_LoadingCell);

var _NameCell = __webpack_require__(108);

var _NameCell2 = _interopRequireDefault(_NameCell);

var _Notification = __webpack_require__(68);

var _Notification2 = _interopRequireDefault(_Notification);

var _NotificationProgressItem = __webpack_require__(110);

var _NotificationProgressItem2 = _interopRequireDefault(_NotificationProgressItem);

var _ProgressIcon = __webpack_require__(69);

var _ProgressIcon2 = _interopRequireDefault(_ProgressIcon);

var _SetNameDialog = __webpack_require__(112);

var _SetNameDialog2 = _interopRequireDefault(_SetNameDialog);

var _reactVirtualized = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Cell: _Cell2.default,
  Column: _reactVirtualized.Column,
  ConfirmDialog: _ConfirmDialog2.default,
  ContextMenuItem: _ContextMenuItem2.default,
  Dialog: _Dialog2.default,
  HeaderCell: _HeaderCell2.default,
  LoadingCell: _LoadingCell2.default,
  NameCell: _NameCell2.default,
  Notification: _Notification2.default,
  NotificationProgressItem: _NotificationProgressItem2.default,
  ProgressIcon: _ProgressIcon2.default,
  SetNameDialog: _SetNameDialog2.default
};

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(20);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _findIndex2 = __webpack_require__(64);

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _class, _temp2, _initialiseProps;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(474);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithSelection = (_temp2 = _class = function (_PureComponent) {
  (0, _inherits3.default)(WithSelection, _PureComponent);

  function WithSelection() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WithSelection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithSelection.__proto__ || Object.getPrototypeOf(WithSelection)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(WithSelection, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selection.length === 1) {
        // When FileNavigator navigates to parent dir, this last selected should be rigth
        this.lastSelected = nextProps.selection[0];
      }
    }

    // ref to wrapped container

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          selection = _props.selection;


      return _react2.default.createElement(
        'div',
        {
          onKeyDown: this.handleKeyDown,
          tabIndex: '0',
          ref: this.handleRef,
          className: 'oc-fm--withSelectionHOC'
        },
        children({
          selection: selection,
          onRowClick: this.handleRowClick,
          onRowRightClick: this.handleRowRightClick,
          onRowDoubleClick: this.handleRowDoubleClick,
          lastSelected: this.lastSelected
        })
      );
    }
  }]);
  return WithSelection;
}(_react.PureComponent), _class.propTypes = {
  onSelection: _propTypes2.default.func,
  onRowClick: _propTypes2.default.func,
  onRowRightClick: _propTypes2.default.func,
  onRowDoubleClick: _propTypes2.default.func,
  onRef: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  items: _propTypes2.default.arrayOf(_propTypes2.default.object),
  idPropName: _propTypes2.default.string,
  selection: _propTypes2.default.array,
  viewMode: _propTypes2.default.string,
  columnCount: _propTypes2.default.number
}, _class.defaultProps = {
  onSelection: _utils.noop,
  onRowClick: _utils.noop,
  onRowRightClick: _utils.noop,
  onRowDoubleClick: _utils.noop,
  onRef: _utils.noop,
  items: [],
  idPropName: 'id',
  selection: [],
  viewMode: 'list',
  columnCount: 1
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleSelection = function (_ref2) {
    var selection = _ref2.selection,
        scrollToIndex = _ref2.scrollToIndex;
    return _this2.props.onSelection({ selection: selection, scrollToIndex: scrollToIndex });
  };

  this.handleSelectEvent = function (_ref3) {
    var selection = _ref3.selection,
        scrollToIndex = _ref3.scrollToIndex;
    var _props2 = _this2.props,
        items = _props2.items,
        idPropName = _props2.idPropName;

    _this2.lastSelected = items[scrollToIndex][idPropName];
    _this2.handleSelection({ selection: selection, scrollToIndex: scrollToIndex });
  };

  this.handleRowClick = function (_ref4) {
    var event = _ref4.event,
        rowData = _ref4.rowData,
        args = (0, _objectWithoutProperties3.default)(_ref4, ['event', 'rowData']);
    var _props3 = _this2.props,
        items = _props3.items,
        idPropName = _props3.idPropName,
        selection = _props3.selection;

    var id = rowData[idPropName];
    _this2.lastSelected = id;

    if (event.ctrlKey || event.metaKey) {
      // metaKey is for handling "Command" key on MacOS
      _this2.rangeSelectionStartedAt = id;

      _this2.handleSelection({
        selection: selection.indexOf(id) !== -1 ? (0, _utils.removeFromSelection)({ selection: selection, id: id }) : (0, _utils.addToSelection)({ selection: selection, ids: [id] })
      });
    } else if (event.shiftKey) {
      _this2.rangeSelectionStartedAt = _this2.rangeSelectionStartedAt || selection.length === 1 && selection[0];
      _this2.handleSelection({
        selection: (0, _utils.selectRange)({
          items: items,
          fromId: _this2.rangeSelectionStartedAt,
          toId: id
        })
      });
    } else {
      _this2.rangeSelectionStartedAt = null;
      _this2.handleSelection({ selection: [id] });
    }

    _this2.props.onRowClick((0, _extends3.default)({ event: event, rowData: rowData }, args));
  };

  this.handleRowRightClick = function (_ref5) {
    var rowData = _ref5.rowData,
        args = (0, _objectWithoutProperties3.default)(_ref5, ['rowData']);
    var _props4 = _this2.props,
        idPropName = _props4.idPropName,
        selection = _props4.selection;

    if (selection.indexOf(rowData[idPropName]) === -1) {
      _this2.handleSelection({ selection: [rowData[idPropName]] });
    }

    _this2.props.onRowRightClick((0, _extends3.default)({ rowData: rowData }, args));
  };

  this.handleRowDoubleClick = function (_ref6) {
    var rowData = _ref6.rowData,
        args = (0, _objectWithoutProperties3.default)(_ref6, ['rowData']);

    _this2.props.onRowDoubleClick((0, _extends3.default)({ rowData: rowData }, args));
  };

  this.handleKeyDown = function (e) {
    e.preventDefault();

    var _props5 = _this2.props,
        items = _props5.items,
        onKeyDown = _props5.onKeyDown,
        idPropName = _props5.idPropName,
        selection = _props5.selection,
        viewMode = _props5.viewMode,
        columnCount = _props5.columnCount;

    // Debounce frequent events for performance reasons

    var keyDownTime = new Date().getTime();
    if (_this2.lastKeyDownTime && keyDownTime - _this2.lastKeyDownTime < 128) {
      return;
    }
    _this2.lastKeyDownTime = keyDownTime;

    if (onKeyDown) {
      onKeyDown(e);
    }

    // Up arrow in list mode or Left arrow in grid mode
    if ((e.which === 38 && viewMode === 'list' || e.which === 37 && viewMode === 'grid') && !e.shiftKey) {
      if (!items.length) return;

      if (!selection.length) {
        _this2.handleSelectEvent((0, _utils.selectLastItem)({ items: items }));
      } else {
        _this2.handleSelectEvent((0, _utils.selectPrev)({ items: items, lastSelected: _this2.lastSelected, count: 1 }));
      }
    }

    // Down arrow in list mode or Right arrow in grid mode
    if ((e.which === 40 && viewMode === 'list' || e.which === 39 && viewMode === 'grid') && !e.shiftKey) {
      if (!items.length) return;

      if (!selection.length) {
        _this2.handleSelectEvent((0, _utils.selectFirstItem)({ items: items }));
      } else {
        _this2.handleSelectEvent((0, _utils.selectNext)({ items: items, lastSelected: _this2.lastSelected, count: 1 }));
      }
    }

    // Up arrow in grid mode
    if (e.which === 38 && viewMode === 'grid' && !e.shiftKey) {
      if (!items.length) return;

      if (!selection.length) {
        _this2.handleSelectEvent((0, _utils.selectLastItem)({ items: items }));
      } else {
        _this2.handleSelectEvent((0, _utils.selectPrev)({ items: items, lastSelected: _this2.lastSelected, count: columnCount }));
      }
    }

    // Down arrow in grid mode
    if (e.which === 40 && viewMode === 'grid' && !e.shiftKey) {
      if (!items.length) return;

      if (!selection.length) {
        _this2.handleSelectEvent((0, _utils.selectFirstItem)({ items: items }));
      } else {
        _this2.handleSelectEvent((0, _utils.selectNext)({ items: items, lastSelected: _this2.lastSelected, count: columnCount }));
      }
    }

    // Up arrow in list mode or Left arrow in grid mode holding Shift key
    if ((e.which === 38 && viewMode === 'list' || e.which === 37 && viewMode === 'grid') && e.shiftKey) {
      if (!items.length) return;

      if (!selection.length) {
        _this2.handleSelectEvent((0, _utils.selectLastItem)({ items: items }));
        return;
      }

      if (_this2.lastSelected === items[0].id) return;

      var fromIdIndex = (0, _findIndex3.default)(items, function (item) {
        return item.id === _this2.lastSelected;
      });
      var nextIdIndex = fromIdIndex > 0 ? fromIdIndex - 1 : 0;
      var nextId = items[nextIdIndex].id;
      var selectionDirection = selection.indexOf(nextId) === -1 ? -1 : 1;

      var selectionData = selectionDirection === -1 ? (0, _utils.addPrevToSelection)({ selection: selection, items: items, lastSelected: _this2.lastSelected, count: 1 }) : (0, _utils.removeLastFromSelection)({ selection: selection, items: items, count: 1 });

      _this2.handleSelectEvent(selectionData);
    }

    // Down arrow in list mode or Right arrow in grid mode holding Shift key
    if ((e.which === 40 && viewMode === 'list' || e.which === 39 && viewMode === 'grid') && e.shiftKey) {
      if (!items.length) return;

      if (!selection.length) {
        _this2.handleSelectEvent((0, _utils.selectFirstItem)({ items: items }));
        return;
      }

      if (_this2.lastSelected === items[items.length - 1].id) return;

      var _fromIdIndex = (0, _findIndex3.default)(items, function (item) {
        return item.id === _this2.lastSelected;
      });
      var _nextIdIndex = _fromIdIndex + 1 < items.length ? _fromIdIndex + 1 : items.length - 1;
      var _nextId = items[_nextIdIndex].id;
      var _selectionDirection = selection.indexOf(_nextId) === -1 ? -1 : 1;

      var _selectionData = _selectionDirection === -1 ? (0, _utils.addNextToSelection)({ selection: selection, items: items, lastSelected: _this2.lastSelected, count: 1 }) : (0, _utils.removeFirstFromSelection)({ selection: selection, items: items, count: 1 });

      _this2.handleSelectEvent(_selectionData);
    }

    // Up arrow in grid mode holding Shift key
    if (e.which === 38 && viewMode === 'grid' && e.shiftKey) {
      if (!items.length) return;

      if (!selection.length) {
        _this2.handleSelectEvent((0, _utils.selectLastItem)({ items: items }));
        return;
      }

      if (_this2.lastSelected === items[0].id) return;

      var _fromIdIndex2 = (0, _findIndex3.default)(items, function (item) {
        return item.id === _this2.lastSelected;
      });
      var _nextIdIndex2 = _fromIdIndex2 - columnCount > 0 ? _fromIdIndex2 - columnCount : 0;
      var _nextId2 = items[_nextIdIndex2].id;
      var _selectionDirection2 = selection.indexOf(_nextId2) === -1 ? -1 : 1;

      var _selectionData2 = _selectionDirection2 === -1 ? (0, _utils.addPrevToSelection)({ selection: selection, items: items, lastSelected: _this2.lastSelected, count: columnCount }) : (0, _utils.removeLastFromSelection)({ selection: selection, items: items, count: columnCount });

      _this2.handleSelectEvent(_selectionData2);
    }

    // Down arrow in grid mode holding Shift key
    if (e.which === 40 && viewMode === 'grid' && e.shiftKey) {
      if (!items.length) return;

      if (!selection.length) {
        _this2.handleSelectEvent((0, _utils.selectFirstItem)({ items: items }));
        return;
      }

      if (_this2.lastSelected === items[items.length - 1].id) return;

      var _fromIdIndex3 = (0, _findIndex3.default)(items, function (item) {
        return item.id === _this2.lastSelected;
      });
      var _nextIdIndex3 = _fromIdIndex3 + columnCount < items.length ? _fromIdIndex3 + columnCount : items.length - 1;
      var _nextId3 = items[_nextIdIndex3].id;
      var _selectionDirection3 = selection.indexOf(_nextId3) === -1 ? -1 : 1;

      var _selectionData3 = _selectionDirection3 === -1 ? (0, _utils.addNextToSelection)({ selection: selection, items: items, lastSelected: _this2.lastSelected, count: columnCount }) : (0, _utils.removeFirstFromSelection)({ selection: selection, items: items, count: columnCount });

      _this2.handleSelectEvent(_selectionData3);
    }

    if (e.which === 65 && (e.ctrlKey || e.metaKey)) {
      // Ctrl + A or Command + A
      // Select all
      var allIds = items.map(function (item) {
        return item[idPropName];
      });
      _this2.handleSelection({ selection: allIds });
    }

    if (e.which === 27) {
      // Esc
      // Clear selection
      _this2.handleSelection({ selection: [] });
    }

    if (_this2.ref) {
      _this2.ref.focus(); // XXX fix for loosing focus on key navigation
    }
  };

  this.handleRef = function (ref) {
    _this2.ref = ref;
    _this2.props.onRef(ref);
  };
}, _temp2);
exports.default = WithSelection;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(236), __esModule: true };

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(237), __esModule: true };

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(238), __esModule: true };

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(239), __esModule: true };

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(240), __esModule: true };

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(241), __esModule: true };

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(242), __esModule: true };

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(245), __esModule: true };

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(246), __esModule: true };

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(247), __esModule: true };

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(248), __esModule: true };

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(225);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(224);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(272);
module.exports = __webpack_require__(10).Array.from;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
__webpack_require__(41);
module.exports = __webpack_require__(270);


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
__webpack_require__(41);
module.exports = __webpack_require__(271);


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(274);
module.exports = __webpack_require__(10).Object.assign;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(275);
var $Object = __webpack_require__(10).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(276);
var $Object = __webpack_require__(10).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(277);
var $Object = __webpack_require__(10).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(278);
module.exports = __webpack_require__(10).Object.getPrototypeOf;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(279);
module.exports = __webpack_require__(10).Object.keys;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(280);
module.exports = __webpack_require__(10).Object.setPrototypeOf;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
__webpack_require__(41);
__webpack_require__(57);
__webpack_require__(281);
__webpack_require__(283);
__webpack_require__(284);
module.exports = __webpack_require__(10).Promise;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(282);
__webpack_require__(134);
__webpack_require__(285);
__webpack_require__(286);
module.exports = __webpack_require__(10).Symbol;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(57);
module.exports = __webpack_require__(89).f('iterator');


/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(24);
var toLength = __webpack_require__(86);
var toAbsoluteIndex = __webpack_require__(269);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(22);
var createDesc = __webpack_require__(39);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(81);
var pIE = __webpack_require__(54);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(27);
var call = __webpack_require__(123);
var isArrayIter = __webpack_require__(122);
var anObject = __webpack_require__(21);
var toLength = __webpack_require__(86);
var getIterFn = __webpack_require__(90);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 255 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(38);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(79);
var descriptor = __webpack_require__(39);
var setToStringTag = __webpack_require__(55);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(26)(IteratorPrototype, __webpack_require__(12)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(31);
var toIObject = __webpack_require__(24);
module.exports = function (object, el) {
  var O = toIObject(object);
  var keys = getKeys(O);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) if (O[key = keys[index++]] === el) return key;
};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(56)('meta');
var isObject = __webpack_require__(29);
var has = __webpack_require__(25);
var setDesc = __webpack_require__(22).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(28)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);
var macrotask = __webpack_require__(133).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(38)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(81);
var pIE = __webpack_require__(54);
var toObject = __webpack_require__(40);
var IObject = __webpack_require__(121);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(28)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(22);
var anObject = __webpack_require__(21);
var getKeys = __webpack_require__(31);

module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(24);
var gOPN = __webpack_require__(126).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(26);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(29);
var anObject = __webpack_require__(21);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(27)(Function.call, __webpack_require__(80).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(14);
var core = __webpack_require__(10);
var dP = __webpack_require__(22);
var DESCRIPTORS = __webpack_require__(23);
var SPECIES = __webpack_require__(12)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(85);
var defined = __webpack_require__(75);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(85);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var get = __webpack_require__(90);
module.exports = __webpack_require__(10).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(74);
var ITERATOR = __webpack_require__(12)('iterator');
var Iterators = __webpack_require__(30);
module.exports = __webpack_require__(10).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(27);
var $export = __webpack_require__(16);
var toObject = __webpack_require__(40);
var call = __webpack_require__(123);
var isArrayIter = __webpack_require__(122);
var toLength = __webpack_require__(86);
var createProperty = __webpack_require__(252);
var getIterFn = __webpack_require__(90);

$export($export.S + $export.F * !__webpack_require__(125)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(249);
var step = __webpack_require__(258);
var Iterators = __webpack_require__(30);
var toIObject = __webpack_require__(24);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(124)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(16);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(262) });


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(79) });


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(23), 'Object', { defineProperty: __webpack_require__(22).f });


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(24);
var $getOwnPropertyDescriptor = __webpack_require__(80).f;

__webpack_require__(82)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(40);
var $getPrototypeOf = __webpack_require__(127);

__webpack_require__(82)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(40);
var $keys = __webpack_require__(31);

__webpack_require__(82)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(16);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(266).set });


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(53);
var global = __webpack_require__(14);
var ctx = __webpack_require__(27);
var classof = __webpack_require__(74);
var $export = __webpack_require__(16);
var isObject = __webpack_require__(29);
var aFunction = __webpack_require__(52);
var anInstance = __webpack_require__(250);
var forOf = __webpack_require__(254);
var speciesConstructor = __webpack_require__(132);
var task = __webpack_require__(133).set;
var microtask = __webpack_require__(261)();
var newPromiseCapabilityModule = __webpack_require__(78);
var perform = __webpack_require__(129);
var promiseResolve = __webpack_require__(130);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(12)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var sameConstructor = LIBRARY ? function (a, b) {
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
} : function (a, b) {
  return a === b;
};
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(265)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return sameConstructor($Promise, C)
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(55)($Promise, PROMISE);
__webpack_require__(267)(PROMISE);
Wrapper = __webpack_require__(10)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
    return promiseResolve(this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(125)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(14);
var has = __webpack_require__(25);
var DESCRIPTORS = __webpack_require__(23);
var $export = __webpack_require__(16);
var redefine = __webpack_require__(131);
var META = __webpack_require__(260).KEY;
var $fails = __webpack_require__(28);
var shared = __webpack_require__(84);
var setToStringTag = __webpack_require__(55);
var uid = __webpack_require__(56);
var wks = __webpack_require__(12);
var wksExt = __webpack_require__(89);
var wksDefine = __webpack_require__(88);
var keyOf = __webpack_require__(259);
var enumKeys = __webpack_require__(253);
var isArray = __webpack_require__(256);
var anObject = __webpack_require__(21);
var toIObject = __webpack_require__(24);
var toPrimitive = __webpack_require__(87);
var createDesc = __webpack_require__(39);
var _create = __webpack_require__(79);
var gOPNExt = __webpack_require__(264);
var $GOPD = __webpack_require__(80);
var $DP = __webpack_require__(22);
var $keys = __webpack_require__(31);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(126).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(54).f = $propertyIsEnumerable;
  __webpack_require__(81).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(53)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key) {
    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(26)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(16);
var core = __webpack_require__(10);
var global = __webpack_require__(14);
var speciesConstructor = __webpack_require__(132);
var promiseResolve = __webpack_require__(130);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(16);
var newPromiseCapability = __webpack_require__(78);
var perform = __webpack_require__(129);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88)('asyncIterator');


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88)('observable');


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(15)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(33)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(97);
var toLength = __webpack_require__(146);
var toAbsoluteIndex = __webpack_require__(310);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(60);
var call = __webpack_require__(295);
var isArrayIter = __webpack_require__(294);
var anObject = __webpack_require__(32);
var toLength = __webpack_require__(146);
var getIterFn = __webpack_require__(313);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(43) && !__webpack_require__(137)(function () {
  return Object.defineProperty(__webpack_require__(93)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 292 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(59);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(45);
var ITERATOR = __webpack_require__(15)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(32);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(300);
var descriptor = __webpack_require__(143);
var setToStringTag = __webpack_require__(94);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(33)(IteratorPrototype, __webpack_require__(15)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(15)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 298 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var macrotask = __webpack_require__(145).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(59)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(32);
var dPs = __webpack_require__(301);
var enumBugKeys = __webpack_require__(135);
var IE_PROTO = __webpack_require__(95)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(93)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(138).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(62);
var anObject = __webpack_require__(32);
var getKeys = __webpack_require__(142);

module.exports = __webpack_require__(43) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(44);
var toObject = __webpack_require__(311);
var IE_PROTO = __webpack_require__(95)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(44);
var toIObject = __webpack_require__(97);
var arrayIndexOf = __webpack_require__(289)(false);
var IE_PROTO = __webpack_require__(95)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 304 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var newPromiseCapability = __webpack_require__(141);

module.exports = function (C, x) {
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(46);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(17);
var dP = __webpack_require__(62);
var DESCRIPTORS = __webpack_require__(43);
var SPECIES = __webpack_require__(15)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(32);
var aFunction = __webpack_require__(58);
var SPECIES = __webpack_require__(15)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(96);
var defined = __webpack_require__(92);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(96);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(92);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(61);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(91);
var ITERATOR = __webpack_require__(15)('iterator');
var Iterators = __webpack_require__(45);
module.exports = __webpack_require__(42).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(287);
var step = __webpack_require__(298);
var Iterators = __webpack_require__(45);
var toIObject = __webpack_require__(97);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(139)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(91);
var test = {};
test[__webpack_require__(15)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(46)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(140);
var global = __webpack_require__(17);
var ctx = __webpack_require__(60);
var classof = __webpack_require__(91);
var $export = __webpack_require__(136);
var isObject = __webpack_require__(61);
var aFunction = __webpack_require__(58);
var anInstance = __webpack_require__(288);
var forOf = __webpack_require__(290);
var speciesConstructor = __webpack_require__(308);
var task = __webpack_require__(145).set;
var microtask = __webpack_require__(299)();
var newPromiseCapabilityModule = __webpack_require__(141);
var perform = __webpack_require__(304);
var promiseResolve = __webpack_require__(305);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(15)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var sameConstructor = LIBRARY ? function (a, b) {
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
} : function (a, b) {
  return a === b;
};
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(306)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return sameConstructor($Promise, C)
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(94)($Promise, PROMISE);
__webpack_require__(307)(PROMISE);
Wrapper = __webpack_require__(42)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
    return promiseResolve(this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(297)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(309)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(139)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(314);
var getKeys = __webpack_require__(142);
var redefine = __webpack_require__(46);
var global = __webpack_require__(17);
var hide = __webpack_require__(33);
var Iterators = __webpack_require__(45);
var wks = __webpack_require__(15);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-svg {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: 24px;\n  height: 24px;\n}\n.oc-svg svg {\n  height: 100%;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/* Collection default theme */\n/* Grid default theme */\n/* Table default theme */\n.ReactVirtualized__Table__headerRow {\n  font-weight: 700;\n  text-transform: uppercase;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.ReactVirtualized__Table__row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.ReactVirtualized__Table__headerTruncatedText {\n  display: inline-block;\n  max-width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.ReactVirtualized__Table__headerColumn,\n.ReactVirtualized__Table__rowColumn {\n  margin-right: 10px;\n  min-width: 0px;\n}\n.ReactVirtualized__Table__rowColumn {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ReactVirtualized__Table__headerColumn:first-of-type,\n.ReactVirtualized__Table__rowColumn:first-of-type {\n  margin-left: 10px;\n}\n.ReactVirtualized__Table__sortableHeaderColumn {\n  cursor: pointer;\n}\n.ReactVirtualized__Table__sortableHeaderIconContainer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.ReactVirtualized__Table__sortableHeaderIcon {\n  -ms-flex: 0 0 24px;\n  flex: 0 0 24px;\n  height: 1em;\n  width: 1em;\n  fill: currentColor;\n}\n/* List default theme */\n", ""]);

// exports


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--cell-mixin {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.oc-fm--cell-mixin:hover {\n  cursor: default;\n}\n.oc-fm--cell {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.oc-fm--cell:hover {\n  cursor: default;\n}\n", ""]);

// exports


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--context-menu__content {\n  background: #fff;\n  z-index: 999;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 2px;\n  overflow: hidden;\n  width: 240px;\n}\n.oc-fm--context-menu .react-contextmenu-item--divider {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.oc-fm--context-menu .react-contextmenu-item:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--dialog {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  padding: 12px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 16px, rgba(0, 0, 0, 0.15) 0px 1px 4px;\n}\n.oc-fm--dialog:focus {\n  outline: none;\n}\n.oc-fm--dialog__content {\n  width: 320px;\n  max-width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: start;\n      align-items: flex-start;\n}\n.oc-fm--dialog__content:focus {\n  outline: none;\n}\n.oc-fm--dialog__header {\n  text-align: left;\n  font-weight: bold;\n  font-size: 24px;\n  color: #424242;\n  margin-bottom: 12px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.oc-fm--dialog__message {\n  text-align: left;\n  font-size: 14px;\n  color: #424242;\n  margin-bottom: 12px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.oc-fm--dialog__input-label {\n  text-align: left;\n  font-weight: bold;\n  font-size: 14px;\n  color: #424242;\n  margin-bottom: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.oc-fm--dialog__button {\n  padding: 6px 24px;\n  border: 1px solid #ddd;\n  border-radius: 2px;\n  color: rgba(0, 0, 0, 0.72);\n  background-color: #fff;\n  font-size: 14px;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.oc-fm--dialog__button:hover:not([disabled]),\n.oc-fm--dialog__button:focus {\n  outline: none;\n}\n.oc-fm--dialog__button[disabled] {\n  background-color: #ddd;\n  color: #777;\n  box-shadow: none;\n}\n.oc-fm--dialog__button--default {\n  color: rgba(0, 0, 0, 0.72);\n  background-color: #fff;\n}\n.oc-fm--dialog__button--default:focus:not([disabled]),\n.oc-fm--dialog__button--default:hover:not([disabled]) {\n  background-color: #f5f5f5;\n}\n.oc-fm--dialog__button--primary {\n  color: #fff;\n  background-color: #2196F3;\n}\n.oc-fm--dialog__button--primary:focus:not([disabled]),\n.oc-fm--dialog__button--primary:hover:not([disabled]) {\n  background-color: #1976d2;\n}\n.oc-fm--dialog__input {\n  color: rgba(0, 0, 0, 0.72);\n  font-size: 14px;\n  padding: 6px 12px;\n  border-radius: 2px;\n  border: 1px solid #ddd;\n  width: 100%;\n}\n.oc-fm--dialog__input:focus {\n  outline: none;\n}\n.oc-fm--dialog__input--margin-bottom {\n  margin-bottom: 2px;\n}\n.oc-fm--dialog__horizontal-group {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  margin-top: 24px;\n  border-top: 1px solid #eee;\n  padding-top: 12px;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.oc-fm--dialog__horizontal-group > .oc-fm--dialog__button {\n  margin-right: 8px;\n}\n.oc-fm--dialog__horizontal-group > .oc-fm--dialog__button:last-child {\n  margin-right: 0;\n}\n.oc-fm--dialog__horizontal-group--to-right {\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n.oc-fm--dialog__validation-error {\n  font-size: 12px;\n  color: #e53935;\n  border-radius: 2px;\n  text-align: left;\n  font-weight: bold;\n  width: 100%;\n  opacity: 1;\n  transition: opacity 80ms ease-in-out;\n}\n.oc-fm--dialog__validation-error--hidden {\n  opacity: 0;\n  transition: opacity 80ms ease-in-out;\n}\n", ""]);

// exports


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--dropdown-menu-item {\n  padding: 8px 12px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.oc-fm--dropdown-menu-item:hover {\n  cursor: pointer;\n  background-color: #f5f5f5;\n}\n.oc-fm--dropdown-menu-item__icon {\n  margin-right: 12px;\n  fill: rgba(0, 0, 0, 0.72);\n}\n", ""]);

// exports


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@keyframes keyframes-oc-fm--dropdown-menu-appearing {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes keyframes-oc-fm--dropdown-menu-appearing--to-top {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.oc-fm--dropdown-menu {\n  background: #fff;\n  z-index: 999;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 2px;\n  overflow: hidden;\n  width: 240px;\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  transform: translate(0, 100%);\n  animation: keyframes-oc-fm--dropdown-menu-appearing 80ms;\n  animation-timing-function: ease-in-out;\n}\n.oc-fm--dropdown-menu--to-top {\n  top: -4px;\n  bottom: auto;\n  transform: translate(0, -100%);\n  animation: keyframes-oc-fm--dropdown-menu-appearing--to-top 80ms;\n}\n", ""]);

// exports


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--file-manager {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.oc-fm--file-manager svg {\n  transform: scale(1);\n}\n.oc-fm--file-manager__navigators {\n  -ms-flex: 1;\n      flex: 1;\n  display: -ms-flexbox;\n  display: flex;\n}\n.oc-fm--file-manager__navigator {\n  -ms-flex: 1;\n      flex: 1;\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n}\n.oc-fm--file-manager__navigator:last-child {\n  border-right: none;\n}\n", ""]);

// exports


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--file-navigator {\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.oc-fm--file-navigator__toolbar {\n  padding: 8px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.oc-fm--file-navigator__view {\n  -ms-flex: 1;\n      flex: 1;\n  overflow: hidden;\n}\n.oc-fm--file-navigator__location-bar {\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  position: relative;\n  z-index: 10;\n}\n.oc-fm--file-navigator__notifications {\n  width: 280px;\n  position: absolute;\n  right: 24px;\n  bottom: 12px;\n  z-index: 10;\n}\n@keyframes keyframes-oc-fm--file-navigator__view-loading-overlay-appearing {\n  0% {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.78);\n  }\n}\n@keyframes keyframes-oc-fm--file-navigator__view-loading-overlay-spinner-appearing {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.oc-fm--file-navigator__view-loading-overlay {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  font-size: 24px;\n  background-color: rgba(0, 0, 0, 0.78);\n  color: #fff;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 20;\n  animation: keyframes-oc-fm--file-navigator__view-loading-overlay-appearing 240ms;\n  animation-timing-function: ease-in-out;\n}\n.oc-fm--file-navigator__view-loading-overlay-spinner {\n  width: 48px;\n  height: 48px;\n  animation: keyframes-oc-fm--file-navigator__view-loading-overlay-spinner-appearing 240ms;\n  animation-timing-function: ease-in-out;\n}\n", ""]);

// exports


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@keyframes keyframes-oc-fm--grid-view-row-appearing {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.oc-fm--grid-view {\n  will-change: opacity;\n  height: 100%;\n  width: 100%;\n}\n.oc-fm--grid-view .oc-fm--cell {\n  height: 100%;\n  padding: 0.25em;\n}\n.oc-fm--grid-view .oc-fm--name-cell {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n}\n.oc-fm--grid-view .oc-fm--name-cell__icon {\n  width: auto;\n  height: auto;\n  margin: 0;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  border-radius: 0;\n}\n.oc-fm--grid-view .oc-fm--name-cell__icon-image {\n  width: 48px;\n  height: 48px;\n}\n.oc-fm--grid-view .oc-fm--name-cell__title {\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n  padding: 0 0.25em;\n  word-break: break-all;\n  text-align: center;\n}\n.oc-fm--grid-view__table {\n  color: #424242;\n  overflow-x: hidden !important;\n}\n.oc-fm--grid-view__row {\n  animation: keyframes-oc-fm--grid-view-row-appearing 150ms;\n  animation-timing-function: ease-in-out;\n  display: block;\n}\n.oc-fm--grid-view__row:hover:not(.oc-fm--grid-view__row--selected):not(.oc-fm--grid-view__row--loading) {\n  background-color: #f5f5f5;\n}\n.oc-fm--grid-view__row:hover:not(.oc-fm--grid-view__row--selected) .oc-fm--name-cell__icon {\n  background-color: transparent;\n}\n.oc-fm--grid-view__row--loading {\n  pointer-events: none;\n}\n.oc-fm--grid-view__row .oc-fm--loading-cell {\n  padding: 0.5em;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n.oc-fm--grid-view__row .oc-fm--loading-cell:before {\n  content: '';\n  display: block;\n  width: 48px;\n  height: 48px;\n  margin: auto;\n  background: #f5f5f5;\n}\n.oc-fm--grid-view__row .oc-fm--loading-cell__content {\n  width: 100%;\n  overflow: hidden;\n}\n.oc-fm--grid-view__row--selected {\n  position: relative;\n  background-color: #2196F3;\n  color: #fff;\n  border-bottom-color: transparent;\n}\n", ""]);

// exports


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--header-cell {\n  text-transform: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.oc-fm--header-cell__sort-icon {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n      align-items: flex-start;\n  fill: rgba(0, 0, 0, 0.72);\n}\n", ""]);

// exports


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@keyframes keyframes-oc-fm--list-view-row-appearing {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.oc-fm--list-view {\n  will-change: opacity;\n  height: 100%;\n  width: 100%;\n}\n.oc-fm--list-view__table {\n  color: #424242;\n}\n.oc-fm--list-view__grid:focus {\n  outline: none;\n}\n.oc-fm--list-view__row {\n  animation: keyframes-oc-fm--list-view-row-appearing 150ms;\n  animation-timing-function: ease-in-out;\n}\n.oc-fm--list-view__row:hover:not(.oc-fm--list-view__row--selected):not(.oc-fm--list-view__row--loading) {\n  background-color: #f5f5f5;\n}\n.oc-fm--list-view__row:hover:not(.oc-fm--list-view__row--selected) .oc-fm--name-cell__icon {\n  background-color: transparent;\n}\n.oc-fm--list-view__row--selected {\n  position: relative;\n  background-color: #2196F3;\n  color: #fff;\n  border-bottom-color: transparent;\n}\n.oc-fm--list-view .ReactVirtualized__Table__headerRow {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.oc-fm--list-view .ReactVirtualized__Table__row:focus {\n  outline: none;\n}\n.oc-fm--list-view .ReactVirtualized__Table__sortableHeaderColumn:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--cell-mixin {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.oc-fm--cell-mixin:hover {\n  cursor: default;\n}\n@keyframes keyframes-oc-fm--loading-pattern {\n  0% {\n    left: -100px;\n  }\n  100% {\n    left: 200px;\n  }\n}\n.oc-fm--loading-pattern:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: -100px;\n  width: 120px;\n  height: 80px;\n  opacity: 1;\n  transform: rotate(10deg);\n  background: rgba(255, 255, 255, 0.12);\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);\n  animation-name: keyframes-oc-fm--loading-pattern;\n  animation-duration: 0.8s;\n  animation-timing-function: ease;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n}\n.oc-fm--loading-cell {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.oc-fm--loading-cell:hover {\n  cursor: default;\n}\n.oc-fm--loading-cell__content {\n  background-color: #f5f5f5;\n  position: relative;\n}\n.oc-fm--loading-cell__content:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: -100px;\n  width: 120px;\n  height: 80px;\n  opacity: 1;\n  transform: rotate(10deg);\n  background: rgba(255, 255, 255, 0.12);\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);\n  animation-name: keyframes-oc-fm--loading-pattern;\n  animation-duration: 0.8s;\n  animation-timing-function: ease;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n}\n", ""]);

// exports


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@keyframes keyframes-oc-fm--loading-pattern {\n  0% {\n    left: -100px;\n  }\n  100% {\n    left: 200px;\n  }\n}\n.oc-fm--loading-pattern:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: -100px;\n  width: 120px;\n  height: 80px;\n  opacity: 1;\n  transform: rotate(10deg);\n  background: rgba(255, 255, 255, 0.12);\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);\n  animation-name: keyframes-oc-fm--loading-pattern;\n  animation-duration: 0.8s;\n  animation-timing-function: ease;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n}\n@keyframes keyframes-oc-fm--location-bar-item-appearing {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.oc-fm--location-bar {\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  overflow-x: auto;\n  position: relative;\n}\n.oc-fm--location-bar__item {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  color: #424242;\n  border: 1px solid transparent;\n  animation: keyframes-oc-fm--location-bar-item-appearing 150ms;\n  animation-timing-function: ease-in-out;\n}\n.oc-fm--location-bar__item:first-child .oc-fm--location-bar__item-name {\n  margin-left: 0;\n}\n.oc-fm--location-bar__item:hover {\n  cursor: pointer;\n  background: #f5f5f5;\n}\n.oc-fm--location-bar__item:focus {\n  outline: none;\n}\n.oc-fm--location-bar__item--last {\n  padding-right: 0;\n}\n.oc-fm--location-bar__item-name {\n  font-weight: bold;\n  font-size: 14px;\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 4px 8px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.oc-fm--location-bar__item--disabled {\n  pointer-events: none;\n}\n.oc-fm--location-bar__item-name--loading:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: -100px;\n  width: 120px;\n  height: 80px;\n  opacity: 1;\n  transform: rotate(10deg);\n  background: rgba(255, 255, 255, 0.12);\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);\n  animation-name: keyframes-oc-fm--loading-pattern;\n  animation-duration: 0.8s;\n  animation-timing-function: ease;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n}\n.oc-fm--location-bar__item-arrow {\n  width: 18px;\n  heigth: 18px;\n  fill: #777;\n  margin-left: -4px;\n}\n", ""]);

// exports


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--cell-mixin {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.oc-fm--cell-mixin:hover {\n  cursor: default;\n}\n.oc-fm--name-cell {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.oc-fm--name-cell:hover {\n  cursor: default;\n}\n.oc-fm--name-cell__title {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-weight: bold;\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n}\n.oc-fm--name-cell__title:hover {\n  cursor: default;\n}\n.oc-fm--name-cell__icon {\n  width: 34px;\n  height: 34px;\n  margin-right: 10px;\n  background: #fff;\n  border-radius: 50%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex: 0 0 auto;\n      flex: 0 0 auto;\n}\n.oc-fm--name-cell__icon-image {\n  width: 24px;\n  height: 24px;\n  background-size: cover;\n}\n", ""]);

// exports


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--no-files-found-stub {\n  will-change: opacity;\n  padding: 12px;\n  height: 100%;\n  opacity: 0.78;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-bottom: 8px;\n  background-color: #f5f5f5;\n  text-align: center;\n  animation: keyframes-oc-fm--list-view__no-rows-appearing 300ms;\n  animation-timing-function: ease-in-out;\n}\n.oc-fm--no-files-found-stub__icon {\n  fill: rgba(0, 0, 0, 0.72);\n  width: 64px;\n  height: 64px;\n}\n.oc-fm--no-files-found-stub__title {\n  font-size: 24px;\n}\n", ""]);

// exports


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--notification-progress-item {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 8px 12px;\n}\n.oc-fm--notification-progress-item__title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 8px;\n  display: inline;\n  white-space: nowrap;\n}\n.oc-fm--notification-progress-item__icon,\n.oc-fm--notification-progress-item__progress-icon {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.oc-fm--notification-progress-item__icon {\n  margin-right: 8px;\n}\n.oc-fm--notification-progress-item__progress-icon {\n  margin-left: auto;\n}\n", ""]);

// exports


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@keyframes keyframes-oc-fm--notification-appearing {\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.oc-fm--notification {\n  border-radius: 2px;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 16px, rgba(0, 0, 0, 0.15) 0px 1px 4px;\n  animation: keyframes-oc-fm--notification-appearing 240ms;\n  animation-timing-function: ease-in-out;\n  background-color: #fff;\n  pointer-events: auto;\n}\n.oc-fm--notification__content {\n  max-height: 240px;\n  overflow: auto;\n  will-change: max-height;\n  transition: max-height 180ms ease-in-out;\n}\n.oc-fm--notification__content--minimized {\n  max-height: 0;\n  will-change: max-height;\n  transition: max-height 180ms ease-in-out;\n}\n.oc-fm--notification__header {\n  display: -ms-flexbox;\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.72);\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 8px 12px;\n}\n.oc-fm--notification__header-title {\n  color: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.oc-fm--notification__header-title:hover {\n  cursor: default;\n}\n.oc-fm--notification__header-icons {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.oc-fm--notification__header-icon {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n      align-items: center;\n  position: relative;\n  border-radius: 2px;\n  overflow: hidden;\n  border: 1px solid transparent;\n}\n.oc-fm--notification__header-icon:focus {\n  border: 1px solid rgba(0, 0, 0, 0.22);\n  outline: none;\n}\n.oc-fm--notification__header-icon:hover {\n  cursor: pointer;\n}\n.oc-fm--notification__header-icon:hover:after {\n  content: '';\n  background-color: rgba(255, 255, 255, 0.22);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.oc-fm--notification__progress {\n  background: #f5f5f5;\n  padding: 2px 12px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.oc-fm--notification__progress-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.oc-fm--notification__cancel-button {\n  border: 1px solid transparent;\n  background-color: transparent;\n  box-shadow: none;\n  color: #006070;\n  padding: 2px 8px;\n  margin-right: -8px;\n  position: relative;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.oc-fm--notification__cancel-button:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.oc-fm--notification__cancel-button:focus {\n  outline: none;\n  border: 1px solid rgba(0, 0, 0, 0.22);\n}\n", ""]);

// exports


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--notifications {\n  pointer-events: none;\n}\n.oc-fm--notifications__item {\n  margin-bottom: 12px;\n}\n", ""]);

// exports


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@keyframes keyframes-oc-fm--progress-icon-appearing {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.oc-fm--progress-icon {\n  animation: keyframes-oc-fm--progress-icon-appearing 240ms;\n  animation-timing-function: ease-in-out;\n}\n.oc-fm--progress-icon__complete {\n  background-color: #4caf50;\n  border-radius: 50%;\n}\n.oc-fm--progress-icon__svg {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.oc-fm--progress-icon__svg-meter,\n.oc-fm--progress-icon__svg-value {\n  fill: none;\n}\n.oc-fm--progress-icon__svg-meter {\n  stroke: rgba(0, 0, 0, 0.08);\n}\n.oc-fm--progress-icon__svg-value {\n  stroke: #4caf50;\n}\n", ""]);

// exports


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--toolbar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.oc-fm--toolbar__items {\n  display: -ms-flexbox;\n  display: flex;\n  padding-right: 6px;\n  margin-right: 6px;\n  border-right: 1px solid #f5f5f5;\n}\n.oc-fm--toolbar__items:last-child {\n  padding-right: 0;\n  margin-right: 0;\n  border-right: none;\n}\n.oc-fm--toolbar__item {\n  width: 32px;\n  height: 32px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  background-color: #fff;\n  padding: 0;\n}\n.oc-fm--toolbar__item:focus {\n  border: 1px solid rgba(0, 0, 0, 0.22);\n  outline: none;\n}\n.oc-fm--toolbar__item:hover,\n.oc-fm--toolbar__item:focus {\n  cursor: pointer;\n  background-color: #f5f5f5;\n}\n.oc-fm--toolbar__item:active {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.oc-fm--toolbar__item[disabled] {\n  opacity: 0.22;\n}\n.oc-fm--toolbar__item[disabled]:hover {\n  cursor: default;\n  background-color: #fff;\n}\n.oc-fm--toolbar__item-icon {\n  width: 24px;\n  height: 24px;\n}\n.oc-fm--toolbar__new-button-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  position: relative;\n}\n.oc-fm--toolbar__new-button {\n  color: #fff;\n  background-color: #2196F3;\n  padding: 6px 24px;\n  border: none;\n  border-radius: 2px;\n  font-size: 14px;\n  font-weight: bold;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.oc-fm--toolbar__new-button:hover:not([disabled]),\n.oc-fm--toolbar__new-button:focus {\n  background-color: #1976d2;\n  outline: none;\n}\n.oc-fm--toolbar__new-button[disabled] {\n  background-color: #ccc;\n  color: #555;\n  box-shadow: none;\n}\n.oc-fm--toolbar__nav-buttons {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: auto;\n}\n", ""]);

// exports


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".oc-fm--withSelectionHOC:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectHover = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      detectHover.hover = window.matchMedia('(hover: hover)').matches;
      detectHover.none = window.matchMedia('(hover: none)').matches || window.matchMedia('(hover: on-demand)').matches;
      detectHover.anyHover = window.matchMedia('(any-hover: hover)').matches;
      detectHover.anyNone = window.matchMedia('(any-hover: none)').matches || window.matchMedia('(any-hover: on-demand)').matches;
    }
  }
};

detectHover.update();
exports.default = detectHover;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafgraph/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectPointer = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      detectPointer.fine = window.matchMedia('(pointer: fine)').matches;
      detectPointer.coarse = window.matchMedia('(pointer: coarse)').matches;
      detectPointer.none = window.matchMedia('(pointer: none)').matches;
      detectPointer.anyFine = window.matchMedia('(any-pointer: fine)').matches;
      detectPointer.anyCoarse = window.matchMedia('(any-pointer: coarse)').matches;
      detectPointer.anyNone = window.matchMedia('(any-pointer: none)').matches;
    }
  }
};

detectPointer.update();
exports.default = detectPointer;

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectTouchEvents = {
  update: function update() {
    if (typeof window !== 'undefined') {
      detectTouchEvents.hasSupport = 'ontouchstart' in window;
      detectTouchEvents.browserSupportsApi = Boolean(window.TouchEvent);
    }
  }
};

detectTouchEvents.update();
exports.default = detectTouchEvents;

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 349 */,
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(156);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(374),
    listCacheDelete = __webpack_require__(375),
    listCacheGet = __webpack_require__(376),
    listCacheHas = __webpack_require__(377),
    listCacheSet = __webpack_require__(378);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 352 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 353 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(150),
    eq = __webpack_require__(154);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 355 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 356 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 357 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(359),
    isObjectLike = __webpack_require__(390);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(351),
    equalArrays = __webpack_require__(368),
    equalByTag = __webpack_require__(369),
    equalObjects = __webpack_require__(370),
    getTag = __webpack_require__(373),
    isArray = __webpack_require__(156),
    isBuffer = __webpack_require__(385),
    isTypedArray = __webpack_require__(391);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 360 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(383),
    overRest = __webpack_require__(379),
    setToString = __webpack_require__(380);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(357);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(354),
    baseAssignValue = __webpack_require__(150);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(361),
    isIterateeCall = __webpack_require__(152);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(151),
    isArrayLike = __webpack_require__(384),
    keys = __webpack_require__(392);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(360),
    isIterateeCall = __webpack_require__(152),
    toFinite = __webpack_require__(394);

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(372);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(350),
    arraySome = __webpack_require__(353),
    cacheHas = __webpack_require__(362);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 369 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(371);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(153);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 372 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 373 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 374 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(63);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(63);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(63);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(63);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(352);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 380 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(363),
    createAssigner = __webpack_require__(364),
    keysIn = __webpack_require__(393);

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

module.exports = assignIn;


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381);


/***/ }),
/* 383 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(387),
    isLength = __webpack_require__(388);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 385 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(358);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(356),
    isObject = __webpack_require__(389);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 388 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 389 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 390 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 391 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(153);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 393 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 394 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 395 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 396 */
/***/ (function(module, exports) {

var crypto = window.crypto || window.msCrypto

module.exports = function (bytes) {
  return crypto.getRandomValues(new Uint8Array(bytes))
}


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(398);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 399 */
/***/ (function(module, exports) {

module.exports = "<svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" focusable=\"false\"><path d=\"M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-2 18h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z\"/></svg>"

/***/ }),
/* 400 */
/***/ (function(module, exports) {

module.exports = "<svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" focusable=\"false\"><path d=\"M14 20l10 10 10-10z\"/></svg>"

/***/ }),
/* 401 */
/***/ (function(module, exports) {

module.exports = "<svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" focusable=\"false\"><path d=\"M14 28l10-10 10 10z\"/></svg>"

/***/ }),
/* 402 */
/***/ (function(module, exports) {

module.exports = "<svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" focusable=\"false\"><path d=\"M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z\"/></svg>"

/***/ }),
/* 403 */
/***/ (function(module, exports) {

module.exports = "<svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" focusable=\"false\"><path d=\"M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z\"/></svg>"

/***/ }),
/* 404 */
/***/ (function(module, exports) {

module.exports = "<svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" focusable=\"false\"><path d=\"M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z\"/></svg>"

/***/ }),
/* 405 */
/***/ (function(module, exports) {

module.exports = "<svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" focusable=\"false\"><path d=\"M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z\"/></svg>"

/***/ }),
/* 406 */
/***/ (function(module, exports) {

module.exports = "<svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" focusable=\"false\"><path d=\"M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z\"/></svg>"

/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globalEventListener__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AbstractMenu__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SubMenu__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers__ = __webpack_require__(35);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var ContextMenu = function (_AbstractMenu) {
    _inherits(ContextMenu, _AbstractMenu);

    function ContextMenu(props) {
        _classCallCheck(this, ContextMenu);

        var _this = _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, props));

        _this.registerHandlers = function () {
            document.addEventListener('mousedown', _this.handleOutsideClick);
            document.addEventListener('ontouchstart', _this.handleOutsideClick);
            document.addEventListener('scroll', _this.handleHide);
            document.addEventListener('contextmenu', _this.handleHide);
            document.addEventListener('keydown', _this.handleKeyNavigation);
            window.addEventListener('resize', _this.handleHide);
        };

        _this.unregisterHandlers = function () {
            document.removeEventListener('mousedown', _this.handleOutsideClick);
            document.removeEventListener('ontouchstart', _this.handleOutsideClick);
            document.removeEventListener('scroll', _this.handleHide);
            document.removeEventListener('contextmenu', _this.handleHide);
            document.removeEventListener('keydown', _this.handleKeyNavigation);
            window.removeEventListener('resize', _this.handleHide);
        };

        _this.handleShow = function (e) {
            if (e.detail.id !== _this.props.id || _this.state.isVisible) return;

            var _e$detail$position = e.detail.position,
                x = _e$detail$position.x,
                y = _e$detail$position.y;


            _this.setState({ isVisible: true, x: x, y: y });
            _this.registerHandlers();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__helpers__["f" /* callIfExists */])(_this.props.onShow, e);
        };

        _this.handleHide = function (e) {
            if (_this.state.isVisible && (!e.detail || !e.detail.id || e.detail.id === _this.props.id)) {
                _this.unregisterHandlers();
                _this.setState({ isVisible: false, selectedItem: null, forceSubMenuOpen: false });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__helpers__["f" /* callIfExists */])(_this.props.onHide, e);
            }
        };

        _this.handleOutsideClick = function (e) {
            if (!_this.menu.contains(e.target)) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions__["a" /* hideMenu */])();
        };

        _this.handleMouseLeave = function (event) {
            event.preventDefault();

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__helpers__["f" /* callIfExists */])(_this.props.onMouseLeave, event, __WEBPACK_IMPORTED_MODULE_3_object_assign___default()({}, _this.props.data, __WEBPACK_IMPORTED_MODULE_8__helpers__["a" /* store */].data), __WEBPACK_IMPORTED_MODULE_8__helpers__["a" /* store */].target);

            if (_this.props.hideOnLeave) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions__["a" /* hideMenu */])();
        };

        _this.handleContextMenu = function (e) {
            if (true) {
                e.preventDefault();
            }
            _this.handleHide(e);
        };

        _this.hideMenu = function (e) {
            if (e.keyCode === 27) {
                // enter
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions__["a" /* hideMenu */])();
            }
        };

        _this.getMenuPosition = function () {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var menuStyles = {
                top: y,
                left: x
            };

            if (!_this.menu) return menuStyles;

            var _window = window,
                innerWidth = _window.innerWidth,
                innerHeight = _window.innerHeight;

            var rect = _this.menu.getBoundingClientRect();

            if (y + rect.height > innerHeight) {
                menuStyles.top -= rect.height;
            }

            if (x + rect.width > innerWidth) {
                menuStyles.left -= rect.width;
            }

            if (menuStyles.top < 0) {
                menuStyles.top = rect.height < innerHeight ? (innerHeight - rect.height) / 2 : 0;
            }

            if (menuStyles.left < 0) {
                menuStyles.left = rect.width < innerWidth ? (innerWidth - rect.width) / 2 : 0;
            }

            return menuStyles;
        };

        _this.menuRef = function (c) {
            _this.menu = c;
        };

        _this.state = __WEBPACK_IMPORTED_MODULE_3_object_assign___default()({}, _this.state, {
            x: 0,
            y: 0,
            isVisible: false
        });
        return _this;
    }

    _createClass(ContextMenu, [{
        key: 'getSubMenuType',
        value: function getSubMenuType() {
            // eslint-disable-line class-methods-use-this
            return __WEBPACK_IMPORTED_MODULE_6__SubMenu__["a" /* default */];
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.listenId = __WEBPACK_IMPORTED_MODULE_4__globalEventListener__["a" /* default */].register(this.handleShow, this.handleHide);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            if (this.state.isVisible) {
                var wrapper = window.requestAnimationFrame || setTimeout;

                wrapper(function () {
                    var _state = _this2.state,
                        x = _state.x,
                        y = _state.y;

                    var _getMenuPosition = _this2.getMenuPosition(x, y),
                        top = _getMenuPosition.top,
                        left = _getMenuPosition.left;

                    wrapper(function () {
                        if (!_this2.menu) return;
                        _this2.menu.style.top = top + 'px';
                        _this2.menu.style.left = left + 'px';
                        _this2.menu.style.opacity = 1;
                        _this2.menu.style.pointerEvents = 'auto';
                    });
                });
            } else {
                if (!this.menu) return;
                this.menu.style.opacity = 0;
                this.menu.style.pointerEvents = 'none';
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.listenId) {
                __WEBPACK_IMPORTED_MODULE_4__globalEventListener__["a" /* default */].unregister(this.listenId);
            }

            this.unregisterHandlers();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className;
            var isVisible = this.state.isVisible;

            var style = { position: 'fixed', opacity: 0, pointerEvents: 'none' };
            var menuClassnames = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__helpers__["e" /* cssClasses */].menu, className, _defineProperty({}, __WEBPACK_IMPORTED_MODULE_8__helpers__["e" /* cssClasses */].menuVisible, isVisible));

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                {
                    role: 'menu', tabIndex: '-1', ref: this.menuRef, style: style, className: menuClassnames,
                    onContextMenu: this.handleContextMenu, onMouseLeave: this.handleMouseLeave },
                this.renderChildren(children)
            );
        }
    }]);

    return ContextMenu;
}(__WEBPACK_IMPORTED_MODULE_5__AbstractMenu__["a" /* default */]);

ContextMenu.propTypes = {
    id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
    data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    hideOnLeave: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    onHide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    onMouseLeave: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    onShow: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
ContextMenu.defaultProps = {
    className: '',
    data: {},
    hideOnLeave: false,
    onHide: function onHide() {
        return null;
    },
    onMouseLeave: function onMouseLeave() {
        return null;
    },
    onShow: function onShow() {
        return null;
    }
};
/* harmony default export */ __webpack_exports__["a"] = ContextMenu;

/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContextMenuTrigger__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globalEventListener__ = __webpack_require__(99);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }






// collect ContextMenuTrigger's expected props to NOT pass them on as part of the context
var ignoredTriggerProps = [].concat(_toConsumableArray(Object.keys(__WEBPACK_IMPORTED_MODULE_1__ContextMenuTrigger__["a" /* default */].propTypes)), ['children']);

// expect the id of the menu to be responsible for as outer parameter
/* harmony default export */ __webpack_exports__["a"] = function (menuId) {
    // expect menu component to connect as inner parameter
    // <Child/> is presumably a wrapper of <ContextMenu/>
    return function (Child) {
        // return wrapper for <Child/> that forwards the ContextMenuTrigger's additional props
        return function (_Component) {
            _inherits(ConnectMenu, _Component);

            function ConnectMenu(props) {
                _classCallCheck(this, ConnectMenu);

                var _this = _possibleConstructorReturn(this, (ConnectMenu.__proto__ || Object.getPrototypeOf(ConnectMenu)).call(this, props));

                _this.handleShow = function (e) {
                    if (e.detail.id !== menuId) return;

                    // the onShow event's detail.data object holds all ContextMenuTrigger props
                    var data = e.detail.data;

                    var filteredData = {};

                    for (var key in data) {
                        // exclude props the ContextMenuTrigger is expecting itself
                        if (!ignoredTriggerProps.includes(key)) {
                            filteredData[key] = data[key];
                        }
                    }
                    _this.setState({ trigger: filteredData });
                };

                _this.handleHide = function () {
                    _this.setState({ trigger: null });
                };

                _this.state = { trigger: null };
                return _this;
            }

            _createClass(ConnectMenu, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    this.listenId = __WEBPACK_IMPORTED_MODULE_2__globalEventListener__["a" /* default */].register(this.handleShow, this.handleHide);
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    if (this.listenId) {
                        __WEBPACK_IMPORTED_MODULE_2__globalEventListener__["a" /* default */].unregister(this.listenId);
                    }
                }
            }, {
                key: 'render',
                value: function render() {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Child, _extends({}, this.props, { id: menuId, trigger: this.state.trigger }));
                }
            }]);

            return ConnectMenu;
        }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
    };
};

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MENU_HIDE = exports.MENU_SHOW = undefined;
exports.dispatchGlobalEvent = dispatchGlobalEvent;
exports.showMenu = showMenu;
exports.hideMenu = hideMenu;

var _objectAssign = __webpack_require__(34);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _helpers = __webpack_require__(410);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MENU_SHOW = exports.MENU_SHOW = 'REACT_CONTEXTMENU_SHOW';
var MENU_HIDE = exports.MENU_HIDE = 'REACT_CONTEXTMENU_HIDE';

function dispatchGlobalEvent(eventName, opts) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

    // Compatibale with IE
    // @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
    var event = void 0;

    if (typeof window.CustomEvent === 'function') {
        event = new window.CustomEvent(eventName, { detail: opts });
    } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, false, true, opts);
    }

    if (target) {
        target.dispatchEvent(event);
        (0, _objectAssign2.default)(_helpers.store, opts);
    }
}

function showMenu() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var target = arguments[1];

    dispatchGlobalEvent(MENU_SHOW, (0, _objectAssign2.default)({}, opts, { type: MENU_SHOW }), target);
}

function hideMenu() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var target = arguments[1];

    dispatchGlobalEvent(MENU_HIDE, (0, _objectAssign2.default)({}, opts, { type: MENU_HIDE }), target);
}

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.callIfExists = callIfExists;
exports.hasOwnProp = hasOwnProp;
exports.uniqueId = uniqueId;
function callIfExists(func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return typeof func === 'function' && func.apply(undefined, args);
}

function hasOwnProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

function uniqueId() {
    return Math.random().toString(36).substring(7);
}

var cssClasses = exports.cssClasses = {
    menu: 'react-contextmenu',
    menuVisible: 'react-contextmenu--visible',
    menuWrapper: 'react-contextmenu-wrapper',
    menuItem: 'react-contextmenu-item',
    menuItemActive: 'react-contextmenu-item--active',
    menuItemDisabled: 'react-contextmenu-item--disabled',
    menuItemDivider: 'react-contextmenu-item--divider',
    menuItemSelected: 'react-contextmenu-item--selected',
    subMenu: 'react-contextmenu-submenu'
};

var store = exports.store = {};

var canUseDOM = exports.canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArrowKeyStepper__ = __webpack_require__(164);
/* unused harmony reexport default */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ArrowKeyStepper__["a"]; });






/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_ScrollIndices", {
  value: {
    scrollToColumn: __webpack_require__(0).number.isRequired,
    scrollToRow: __webpack_require__(0).number.isRequired
  },
  configurable: true
});

/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AutoSizer__ = __webpack_require__(165);
/* unused harmony reexport default */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__AutoSizer__["a"]; });






/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_Size", {
  value: {
    height: __webpack_require__(0).number.isRequired,
    width: __webpack_require__(0).number.isRequired
  },
  configurable: true
});

/***/ }),
/* 415 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CellMeasurerCache_js__ = __webpack_require__(166);









/**
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */
var CellMeasurer = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(CellMeasurer, _React$PureComponent);

  function CellMeasurer() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, CellMeasurer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = CellMeasurer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(CellMeasurer)).call.apply(_ref, [this].concat(args))), _this), _this._measure = function () {
      var _this$props = _this.props,
          cache = _this$props.cache,
          _this$props$columnInd = _this$props.columnIndex,
          columnIndex = _this$props$columnInd === undefined ? 0 : _this$props$columnInd,
          parent = _this$props.parent,
          _this$props$rowIndex = _this$props.rowIndex,
          rowIndex = _this$props$rowIndex === undefined ? _this.props.index || 0 : _this$props$rowIndex;

      var _this$_getCellMeasure = _this._getCellMeasurements(),
          height = _this$_getCellMeasure.height,
          width = _this$_getCellMeasure.width;

      if (height !== cache.getHeight(rowIndex, columnIndex) || width !== cache.getWidth(rowIndex, columnIndex)) {
        cache.set(rowIndex, columnIndex, width, height);

        if (parent && typeof parent.recomputeGridSize === 'function') {
          parent.recomputeGridSize({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(CellMeasurer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._maybeMeasureCell();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._maybeMeasureCell();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return typeof children === 'function' ? children({ measure: this._measure }) : children;
    }
  }, {
    key: '_getCellMeasurements',
    value: function _getCellMeasurements() {
      var cache = this.props.cache;


      var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_dom__["findDOMNode"])(this);

      // TODO Check for a bad combination of fixedWidth and missing numeric width or vice versa with height

      if (node instanceof HTMLElement) {
        var styleWidth = node.style.width;
        var styleHeight = node.style.height;

        // If we are re-measuring a cell that has already been measured,
        // It will have a hard-coded width/height from the previous measurement.
        // The fact that we are measuring indicates this measurement is probably stale,
        // So explicitly clear it out (eg set to "auto") so we can recalculate.
        // See issue #593 for more info.
        // Even if we are measuring initially- if we're inside of a MultiGrid component,
        // Explicitly clear width/height before measuring to avoid being tainted by another Grid.
        // eg top/left Grid renders before bottom/right Grid
        // Since the CellMeasurerCache is shared between them this taints derived cell size values.
        if (!cache.hasFixedWidth()) {
          node.style.width = 'auto';
        }
        if (!cache.hasFixedHeight()) {
          node.style.height = 'auto';
        }

        var height = Math.ceil(node.offsetHeight);
        var width = Math.ceil(node.offsetWidth);

        // Reset after measuring to avoid breaking styles; see #660
        if (styleWidth) {
          node.style.width = styleWidth;
        }
        if (styleHeight) {
          node.style.height = styleHeight;
        }

        return { height: height, width: width };
      } else {
        return { height: 0, width: 0 };
      }
    }
  }, {
    key: '_maybeMeasureCell',
    value: function _maybeMeasureCell() {
      var _props = this.props,
          cache = _props.cache,
          _props$columnIndex = _props.columnIndex,
          columnIndex = _props$columnIndex === undefined ? 0 : _props$columnIndex,
          parent = _props.parent,
          _props$rowIndex = _props.rowIndex,
          rowIndex = _props$rowIndex === undefined ? this.props.index || 0 : _props$rowIndex;


      if (!cache.has(rowIndex, columnIndex)) {
        var _getCellMeasurements2 = this._getCellMeasurements(),
            height = _getCellMeasurements2.height,
            width = _getCellMeasurements2.width;

        cache.set(rowIndex, columnIndex, width, height);

        // If size has changed, let Grid know to re-render.
        if (parent && typeof parent.invalidateCellSizeAfterRender === 'function') {
          parent.invalidateCellSizeAfterRender({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }
  }]);

  return CellMeasurer;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

// Used for DEV mode warning check


CellMeasurer.__internalCellMeasurerFlag = false;
CellMeasurer.propTypes = {
  cache: typeof __WEBPACK_IMPORTED_MODULE_7__CellMeasurerCache_js__["a" /* default */] === 'function' ? __webpack_require__(0).instanceOf(__WEBPACK_IMPORTED_MODULE_7__CellMeasurerCache_js__["a" /* default */]).isRequired : __webpack_require__(0).any.isRequired,
  children: __webpack_require__(0).oneOfType([__webpack_require__(0).func, typeof (__WEBPACK_IMPORTED_MODULE_5_react___default.a.Element == null ? {} : __WEBPACK_IMPORTED_MODULE_5_react___default.a.Element) === 'function' ? __webpack_require__(0).instanceOf(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Element == null ? {} : __WEBPACK_IMPORTED_MODULE_5_react___default.a.Element) : __webpack_require__(0).any]).isRequired,
  columnIndex: __webpack_require__(0).number,
  index: __webpack_require__(0).number,
  parent: __webpack_require__(0).shape({
    invalidateCellSizeAfterRender: __webpack_require__(0).func,
    recomputeGridSize: __webpack_require__(0).func
  }).isRequired,
  rowIndex: __webpack_require__(0).number
};
/* harmony default export */ __webpack_exports__["a"] = CellMeasurer;
if (false) {
  CellMeasurer.__internalCellMeasurerFlag = true;
}

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CollectionView__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_calculateSizeAndPositionData__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_getUpdatedOffsetForIndex__ = __webpack_require__(446);













/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */
var babelPluginFlowReactPropTypes_proptype_SizeInfo = __webpack_require__(37).babelPluginFlowReactPropTypes_proptype_SizeInfo || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_ScrollPosition = __webpack_require__(37).babelPluginFlowReactPropTypes_proptype_ScrollPosition || __webpack_require__(0).any;

var Collection = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Collection, _PureComponent);

  function Collection(props, context) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Collection);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Collection.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Collection)).call(this, props, context));

    _this._cellMetadata = [];
    _this._lastRenderedCellIndices = [];

    // Cell cache during scroll (for perforamnce)
    _this._cellCache = [];

    _this._isScrollingChange = _this._isScrollingChange.bind(_this);
    _this._setCollectionViewRef = _this._setCollectionViewRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Collection, [{
    key: 'forceUpdate',
    value: function forceUpdate() {
      if (this._collectionView !== undefined) {
        this._collectionView.forceUpdate();
      }
    }

    /** See Collection#recomputeCellSizesAndPositions */

  }, {
    key: 'recomputeCellSizesAndPositions',
    value: function recomputeCellSizesAndPositions() {
      this._cellCache = [];
      this._collectionView.recomputeCellSizesAndPositions();
    }

    /** React lifecycle methods */

  }, {
    key: 'render',
    value: function render() {
      var props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(this.props, []);

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__CollectionView__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        cellLayoutManager: this,
        isScrollingChange: this._isScrollingChange,
        ref: this._setCollectionViewRef
      }, props));
    }

    /** CellLayoutManager interface */

  }, {
    key: 'calculateSizeAndPositionData',
    value: function calculateSizeAndPositionData() {
      var _props = this.props,
          cellCount = _props.cellCount,
          cellSizeAndPositionGetter = _props.cellSizeAndPositionGetter,
          sectionSize = _props.sectionSize;


      var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_calculateSizeAndPositionData__["a" /* default */])({
        cellCount: cellCount,
        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
        sectionSize: sectionSize
      });

      this._cellMetadata = data.cellMetadata;
      this._sectionManager = data.sectionManager;
      this._height = data.height;
      this._width = data.width;
    }

    /**
     * Returns the most recently rendered set of cell indices.
     */

  }, {
    key: 'getLastRenderedIndices',
    value: function getLastRenderedIndices() {
      return this._lastRenderedCellIndices;
    }

    /**
     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
     */

  }, {
    key: 'getScrollPositionForCell',
    value: function getScrollPositionForCell(_ref) {
      var align = _ref.align,
          cellIndex = _ref.cellIndex,
          height = _ref.height,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          width = _ref.width;
      var cellCount = this.props.cellCount;


      if (cellIndex >= 0 && cellIndex < cellCount) {
        var cellMetadata = this._cellMetadata[cellIndex];

        scrollLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_getUpdatedOffsetForIndex__["a" /* default */])({
          align: align,
          cellOffset: cellMetadata.x,
          cellSize: cellMetadata.width,
          containerSize: width,
          currentOffset: scrollLeft,
          targetIndex: cellIndex
        });

        scrollTop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_getUpdatedOffsetForIndex__["a" /* default */])({
          align: align,
          cellOffset: cellMetadata.y,
          cellSize: cellMetadata.height,
          containerSize: height,
          currentOffset: scrollTop,
          targetIndex: cellIndex
        });
      }

      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }
  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return {
        height: this._height,
        width: this._width
      };
    }
  }, {
    key: 'cellRenderers',
    value: function cellRenderers(_ref2) {
      var _this2 = this;

      var height = _ref2.height,
          isScrolling = _ref2.isScrolling,
          width = _ref2.width,
          x = _ref2.x,
          y = _ref2.y;
      var _props2 = this.props,
          cellGroupRenderer = _props2.cellGroupRenderer,
          cellRenderer = _props2.cellRenderer;

      // Store for later calls to getLastRenderedIndices()

      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
        height: height,
        width: width,
        x: x,
        y: y
      });

      return cellGroupRenderer({
        cellCache: this._cellCache,
        cellRenderer: cellRenderer,
        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
          var index = _ref3.index;
          return _this2._sectionManager.getCellMetadata({ index: index });
        },
        indices: this._lastRenderedCellIndices,
        isScrolling: isScrolling
      });
    }
  }, {
    key: '_isScrollingChange',
    value: function _isScrollingChange(isScrolling) {
      if (!isScrolling) {
        this._cellCache = [];
      }
    }
  }, {
    key: '_setCollectionViewRef',
    value: function _setCollectionViewRef(ref) {
      this._collectionView = ref;
    }
  }]);

  return Collection;
}(__WEBPACK_IMPORTED_MODULE_8_react__["PureComponent"]);

Collection.defaultProps = {
  'aria-label': 'grid',
  cellGroupRenderer: defaultCellGroupRenderer
};
/* harmony default export */ __webpack_exports__["a"] = Collection;
Collection.propTypes =  false ? {
  'aria-label': PropTypes.string,

  /**
   * Number of cells in Collection.
   */
  cellCount: PropTypes.number.isRequired,

  /**
   * Responsible for rendering a group of cells given their indices.
   * Should implement the following interface: ({
   *   cellSizeAndPositionGetter:Function,
   *   indices: Array<number>,
   *   cellRenderer: Function
   * }): Array<PropTypes.node>
   */
  cellGroupRenderer: PropTypes.func.isRequired,

  /**
   * Responsible for rendering a cell given an row and column index.
   * Should implement the following interface: ({ index: number, key: string, style: object }): PropTypes.element
   */
  cellRenderer: PropTypes.func.isRequired,

  /**
   * Callback responsible for returning size and offset/position information for a given cell (index).
   * ({ index: number }): { height: number, width: number, x: number, y: number }
   */
  cellSizeAndPositionGetter: PropTypes.func.isRequired,

  /**
   * Optionally override the size of the sections a Collection's cells are split into.
   */
  sectionSize: PropTypes.number
} : {};


function defaultCellGroupRenderer(_ref4) {
  var cellCache = _ref4.cellCache,
      cellRenderer = _ref4.cellRenderer,
      cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter,
      indices = _ref4.indices,
      isScrolling = _ref4.isScrolling;

  return indices.map(function (index) {
    var cellMetadata = cellSizeAndPositionGetter({ index: index });

    var cellRendererProps = {
      index: index,
      isScrolling: isScrolling,
      key: index,
      style: {
        height: cellMetadata.height,
        left: cellMetadata.x,
        position: 'absolute',
        top: cellMetadata.y,
        width: cellMetadata.width
      }
    };

    // Avoid re-creating cells while scrolling.
    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
    // If a scroll is in progress- cache and reuse cells.
    // This cache will be thrown away once scrolling complets.
    if (isScrolling) {
      if (!(index in cellCache)) {
        cellCache[index] = cellRenderer(cellRendererProps);
      }

      return cellCache[index];
    } else {
      return cellRenderer(cellRendererProps);
    }
  }).filter(function (renderedCell) {
    return !!renderedCell;
  });
}

/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_createCallbackMemoizer__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize__);












// @TODO Merge Collection and CollectionView

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */

var CollectionView = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(CollectionView, _PureComponent);

  function CollectionView(props, context) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, CollectionView);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CollectionView.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(CollectionView)).call(this, props, context));

    _this.state = {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    };

    _this._calculateSizeAndPositionDataOnNextUpdate = false;

    // Invokes callbacks only when their values have changed.
    _this._onSectionRenderedMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_createCallbackMemoizer__["a" /* default */])();
    _this._onScrollMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_createCallbackMemoizer__["a" /* default */])(false);

    // Bind functions to instance so they don't lose context when passed around.
    _this._invokeOnSectionRenderedHelper = _this._invokeOnSectionRenderedHelper.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._setScrollingContainerRef = _this._setScrollingContainerRef.bind(_this);
    _this._updateScrollPositionForScrollToCell = _this._updateScrollPositionForScrollToCell.bind(_this);
    return _this;
  }

  /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */


  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(CollectionView, [{
    key: 'recomputeCellSizesAndPositions',
    value: function recomputeCellSizesAndPositions() {
      this._calculateSizeAndPositionDataOnNextUpdate = true;
      this.forceUpdate();
    }

    /* ---------------------------- Component lifecycle methods ---------------------------- */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          cellLayoutManager = _props.cellLayoutManager,
          scrollLeft = _props.scrollLeft,
          scrollToCell = _props.scrollToCell,
          scrollTop = _props.scrollTop;

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize___default()();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollToCell >= 0) {
        this._updateScrollPositionForScrollToCell();
      } else if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
      }

      // Update onSectionRendered callback.
      this._invokeOnSectionRenderedHelper();

      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge.height,
          totalWidth = _cellLayoutManager$ge.width;

      // Initialize onScroll callback.


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalHeight: totalHeight,
        totalWidth: totalWidth
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props2 = this.props,
          height = _props2.height,
          scrollToAlignment = _props2.scrollToAlignment,
          scrollToCell = _props2.scrollToCell,
          width = _props2.width;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollPositionChangeReason = _state.scrollPositionChangeReason,
          scrollTop = _state.scrollTop;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Update scroll offsets if the current :scrollToCell values requires it
      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
        this._updateScrollPositionForScrollToCell();
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnSectionRenderedHelper();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var cellLayoutManager = this.props.cellLayoutManager;


      cellLayoutManager.calculateSizeAndPositionData();

      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
      // We handle this case in componentDidMount()
      this._scrollbarSize = __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize___default()();
      if (this._scrollbarSize === undefined) {
        this._scrollbarSizeMeasured = false;
        this._scrollbarSize = 0;
      } else {
        this._scrollbarSizeMeasured = true;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _state2 = this.state,
          scrollLeft = _state2.scrollLeft,
          scrollTop = _state2.scrollTop;


      if (nextProps.cellCount === 0 && (scrollLeft !== 0 || scrollTop !== 0)) {
        this._setScrollPosition({
          scrollLeft: 0,
          scrollTop: 0
        });
      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        this._setScrollPosition({
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        });
      }

      if (nextProps.cellCount !== this.props.cellCount || nextProps.cellLayoutManager !== this.props.cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
        nextProps.cellLayoutManager.calculateSizeAndPositionData();
      }

      if (this._calculateSizeAndPositionDataOnNextUpdate) {
        this._calculateSizeAndPositionDataOnNextUpdate = false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          autoHeight = _props3.autoHeight,
          cellCount = _props3.cellCount,
          cellLayoutManager = _props3.cellLayoutManager,
          className = _props3.className,
          height = _props3.height,
          horizontalOverscanSize = _props3.horizontalOverscanSize,
          id = _props3.id,
          noContentRenderer = _props3.noContentRenderer,
          style = _props3.style,
          verticalOverscanSize = _props3.verticalOverscanSize,
          width = _props3.width;
      var _state3 = this.state,
          isScrolling = _state3.isScrolling,
          scrollLeft = _state3.scrollLeft,
          scrollTop = _state3.scrollTop;

      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge2.height,
          totalWidth = _cellLayoutManager$ge2.width;

      // Safely expand the rendered area by the specified overscan amount


      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
      var top = Math.max(0, scrollTop - verticalOverscanSize);
      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);

      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
        height: bottom - top,
        isScrolling: isScrolling,
        width: right - left,
        x: left,
        y: top
      }) : [];

      var collectionStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
        width: width,
        willChange: 'transform'
      };

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0;

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        {
          ref: this._setScrollingContainerRef,
          'aria-label': this.props['aria-label'],
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()('ReactVirtualized__Collection', className),
          id: id,
          onScroll: this._onScroll,
          role: 'grid',
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, collectionStyle, style),
          tabIndex: 0 },
        cellCount > 0 && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          {
            className: 'ReactVirtualized__Collection__innerScrollContainer',
            style: {
              height: totalHeight,
              maxHeight: totalHeight,
              maxWidth: totalWidth,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              width: totalWidth
            } },
          childrenToDisplay
        ),
        cellCount === 0 && noContentRenderer()
      );
    }

    /* ---------------------------- Helper methods ---------------------------- */

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Collection.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_enablePointerEventsAfterDelay',
    value: function _enablePointerEventsAfterDelay() {
      var _this2 = this;

      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(function () {
        var isScrollingChange = _this2.props.isScrollingChange;


        isScrollingChange(false);

        _this2._disablePointerEventsTimeoutId = null;
        _this2.setState({
          isScrolling: false
        });
      }, IS_SCROLLING_TIMEOUT);
    }
  }, {
    key: '_invokeOnSectionRenderedHelper',
    value: function _invokeOnSectionRenderedHelper() {
      var _props4 = this.props,
          cellLayoutManager = _props4.cellLayoutManager,
          onSectionRendered = _props4.onSectionRendered;


      this._onSectionRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          indices: cellLayoutManager.getLastRenderedIndices()
        }
      });
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref) {
      var _this3 = this;

      var scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          totalHeight = _ref.totalHeight,
          totalWidth = _ref.totalWidth;

      this._onScrollMemoizer({
        callback: function callback(_ref2) {
          var scrollLeft = _ref2.scrollLeft,
              scrollTop = _ref2.scrollTop;
          var _props5 = _this3.props,
              height = _props5.height,
              onScroll = _props5.onScroll,
              width = _props5.width;


          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_setScrollingContainerRef',
    value: function _setScrollingContainerRef(ref) {
      this._scrollingContainer = ref;
    }
  }, {
    key: '_setScrollPosition',
    value: function _setScrollPosition(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }, {
    key: '_updateScrollPositionForScrollToCell',
    value: function _updateScrollPositionForScrollToCell() {
      var _props6 = this.props,
          cellLayoutManager = _props6.cellLayoutManager,
          height = _props6.height,
          scrollToAlignment = _props6.scrollToAlignment,
          scrollToCell = _props6.scrollToCell,
          width = _props6.width;
      var _state4 = this.state,
          scrollLeft = _state4.scrollLeft,
          scrollTop = _state4.scrollTop;


      if (scrollToCell >= 0) {
        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
          align: scrollToAlignment,
          cellIndex: scrollToCell,
          height: height,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          width: width
        });

        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
          this._setScrollPosition(scrollPosition);
        }
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== this._scrollingContainer) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._enablePointerEventsAfterDelay();

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
      var _props7 = this.props,
          cellLayoutManager = _props7.cellLayoutManager,
          height = _props7.height,
          isScrollingChange = _props7.isScrollingChange,
          width = _props7.width;

      var scrollbarSize = this._scrollbarSize;

      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge3.height,
          totalWidth = _cellLayoutManager$ge3.width;

      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop));

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
        // All things considered, this seems to be the best current work around that I'm aware of.
        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;

        // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)
        if (!this.state.isScrolling) {
          isScrollingChange(true);
        }

        this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: scrollPositionChangeReason,
          scrollTop: scrollTop
        });
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalWidth: totalWidth,
        totalHeight: totalHeight
      });
    }
  }]);

  return CollectionView;
}(__WEBPACK_IMPORTED_MODULE_7_react__["PureComponent"]);

CollectionView.defaultProps = {
  'aria-label': 'grid',
  horizontalOverscanSize: 0,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  scrollToAlignment: 'auto',
  scrollToCell: -1,
  style: {},
  verticalOverscanSize: 0
};
/* harmony default export */ __webpack_exports__["a"] = CollectionView;
CollectionView.propTypes =  false ? {
  'aria-label': PropTypes.string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: PropTypes.bool,

  /**
   * Number of cells in collection.
   */
  cellCount: PropTypes.number.isRequired,

  /**
   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
   */
  cellLayoutManager: PropTypes.object.isRequired,

  /**
   * Optional custom CSS class name to attach to root Collection element.
   */
  className: PropTypes.string,

  /**
   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
   */
  height: PropTypes.number.isRequired,

  /**
   * Optional custom id to attach to root Collection element.
   */
  id: PropTypes.string,

  /**
   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  horizontalOverscanSize: PropTypes.number.isRequired,

  isScrollingChange: PropTypes.func,

  /**
   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
   */
  noContentRenderer: PropTypes.func.isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
   */
  onScroll: PropTypes.func.isRequired,

  /**
   * Callback invoked with information about the section of the Collection that was just rendered.
   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
   */
  onSectionRendered: PropTypes.func.isRequired,

  /**
   * Horizontal offset.
   */
  scrollLeft: PropTypes.number,

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  scrollToAlignment: PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /**
   * Cell index to ensure visible (by forcefully scrolling if necessary).
   */
  scrollToCell: PropTypes.number.isRequired,

  /**
   * Vertical offset.
   */
  scrollTop: PropTypes.number,

  /**
   * Optional custom inline style to attach to root Collection element.
   */
  style: PropTypes.object,

  /**
   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  verticalOverscanSize: PropTypes.number.isRequired,

  /**
   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
   */
  width: PropTypes.number.isRequired
} : {};

/***/ }),
/* 418 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



/**
 * A section of the Window.
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
 */
var babelPluginFlowReactPropTypes_proptype_SizeAndPositionInfo = __webpack_require__(37).babelPluginFlowReactPropTypes_proptype_SizeAndPositionInfo || __webpack_require__(0).any; /** @rlow */


var babelPluginFlowReactPropTypes_proptype_Index = __webpack_require__(37).babelPluginFlowReactPropTypes_proptype_Index || __webpack_require__(0).any;

var Section = function () {
  function Section(_ref) {
    var height = _ref.height,
        width = _ref.width,
        x = _ref.x,
        y = _ref.y;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Section);

    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;

    this._indexMap = {};
    this._indices = [];
  }

  /** Add a cell to this section. */


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Section, [{
    key: 'addCellIndex',
    value: function addCellIndex(_ref2) {
      var index = _ref2.index;

      if (!this._indexMap[index]) {
        this._indexMap[index] = true;
        this._indices.push(index);
      }
    }

    /** Get all cell indices that have been added to this section. */

  }, {
    key: 'getCellIndices',
    value: function getCellIndices() {
      return this._indices;
    }

    /** Intended for debugger/test purposes only */

  }, {
    key: 'toString',
    value: function toString() {
      return this.x + ',' + this.y + ' ' + this.width + 'x' + this.height;
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["a"] = Section;

/***/ }),
/* 419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Section__ = __webpack_require__(418);



/**
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * 
 */


var babelPluginFlowReactPropTypes_proptype_SizeAndPositionInfo = __webpack_require__(37).babelPluginFlowReactPropTypes_proptype_SizeAndPositionInfo || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_Index = __webpack_require__(37).babelPluginFlowReactPropTypes_proptype_Index || __webpack_require__(0).any;

var SECTION_SIZE = 100;

/**
 * Contains 0 to many Sections.
 * Grows (and adds Sections) dynamically as cells are registered.
 * Automatically adds cells to the appropriate Section(s).
 */
var SectionManager = function () {
  function SectionManager() {
    var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SECTION_SIZE;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SectionManager);

    this._sectionSize = sectionSize;

    this._cellMetadata = [];
    this._sections = {};
  }

  /**
   * Gets all cell indices contained in the specified region.
   * A region may encompass 1 or more Sections.
   */


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SectionManager, [{
    key: 'getCellIndices',
    value: function getCellIndices(_ref) {
      var height = _ref.height,
          width = _ref.width,
          x = _ref.x,
          y = _ref.y;

      var indices = {};

      this.getSections({ height: height, width: width, x: x, y: y }).forEach(function (section) {
        return section.getCellIndices().forEach(function (index) {
          indices[index] = index;
        });
      });

      // Object keys are strings; this function returns numbers
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(indices).map(function (index) {
        return indices[index];
      });
    }

    /** Get size and position information for the cell specified. */

  }, {
    key: 'getCellMetadata',
    value: function getCellMetadata(_ref2) {
      var index = _ref2.index;

      return this._cellMetadata[index];
    }

    /** Get all Sections overlapping the specified region. */

  }, {
    key: 'getSections',
    value: function getSections(_ref3) {
      var height = _ref3.height,
          width = _ref3.width,
          x = _ref3.x,
          y = _ref3.y;

      var sectionXStart = Math.floor(x / this._sectionSize);
      var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
      var sectionYStart = Math.floor(y / this._sectionSize);
      var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);

      var sections = [];

      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
          var key = sectionX + '.' + sectionY;

          if (!this._sections[key]) {
            this._sections[key] = new __WEBPACK_IMPORTED_MODULE_3__Section__["a" /* default */]({
              height: this._sectionSize,
              width: this._sectionSize,
              x: sectionX * this._sectionSize,
              y: sectionY * this._sectionSize
            });
          }

          sections.push(this._sections[key]);
        }
      }

      return sections;
    }

    /** Total number of Sections based on the currently registered cells. */

  }, {
    key: 'getTotalSectionCount',
    value: function getTotalSectionCount() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this._sections).length;
    }

    /** Intended for debugger/test purposes only */

  }, {
    key: 'toString',
    value: function toString() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this._sections).map(function (index) {
        return _this._sections[index].toString();
      });
    }

    /** Adds a cell to the appropriate Sections and registers it metadata for later retrievable. */

  }, {
    key: 'registerCell',
    value: function registerCell(_ref4) {
      var cellMetadatum = _ref4.cellMetadatum,
          index = _ref4.index;

      this._cellMetadata[index] = cellMetadatum;

      this.getSections(cellMetadatum).forEach(function (section) {
        return section.addCellIndex({ index: index });
      });
    }
  }]);

  return SectionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = SectionManager;

/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collection__ = __webpack_require__(416);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Collection__["a"]; });


/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__Collection__["a" /* default */];


/***/ }),
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SectionManager__ = __webpack_require__(419);
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateSizeAndPositionData;


function calculateSizeAndPositionData(_ref) {
  var cellCount = _ref.cellCount,
      cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter,
      sectionSize = _ref.sectionSize;

  var cellMetadata = [];
  var sectionManager = new __WEBPACK_IMPORTED_MODULE_0__SectionManager__["a" /* default */](sectionSize);
  var height = 0;
  var width = 0;

  for (var index = 0; index < cellCount; index++) {
    var cellMetadatum = cellSizeAndPositionGetter({ index: index });

    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
      throw Error('Invalid metadata returned for cell ' + index + ':\n        x:' + cellMetadatum.x + ', y:' + cellMetadatum.y + ', width:' + cellMetadatum.width + ', height:' + cellMetadatum.height);
    }

    height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
    width = Math.max(width, cellMetadatum.x + cellMetadatum.width);

    cellMetadata[index] = cellMetadatum;
    sectionManager.registerCell({
      cellMetadatum: cellMetadatum,
      index: index
    });
  }

  return {
    cellMetadata: cellMetadata,
    height: height,
    sectionManager: sectionManager,
    width: width
  };
}

/***/ }),
/* 422 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);








/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */

var ColumnSizer = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ColumnSizer, _PureComponent);

  function ColumnSizer(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ColumnSizer);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ColumnSizer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ColumnSizer)).call(this, props, context));

    _this._registerChild = _this._registerChild.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ColumnSizer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          columnMaxWidth = _props.columnMaxWidth,
          columnMinWidth = _props.columnMinWidth,
          columnCount = _props.columnCount,
          width = _props.width;


      if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
        if (this._registeredChild) {
          this._registeredChild.recomputeGridSize();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          columnMaxWidth = _props2.columnMaxWidth,
          columnMinWidth = _props2.columnMinWidth,
          columnCount = _props2.columnCount,
          width = _props2.width;


      var safeColumnMinWidth = columnMinWidth || 1;

      var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;

      var columnWidth = width / columnCount;
      columnWidth = Math.max(safeColumnMinWidth, columnWidth);
      columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
      columnWidth = Math.floor(columnWidth);

      var adjustedWidth = Math.min(width, columnWidth * columnCount);

      return children({
        adjustedWidth: adjustedWidth,
        columnWidth: columnWidth,
        getColumnWidth: function getColumnWidth() {
          return columnWidth;
        },
        registerChild: this._registerChild
      });
    }
  }, {
    key: '_registerChild',
    value: function _registerChild(child) {
      if (child && typeof child.recomputeGridSize !== 'function') {
        throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
      }

      this._registeredChild = child;

      if (this._registeredChild) {
        this._registeredChild.recomputeGridSize();
      }
    }
  }]);

  return ColumnSizer;
}(__WEBPACK_IMPORTED_MODULE_6_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = ColumnSizer;
ColumnSizer.propTypes =  false ? {
  /**
   * Function responsible for rendering a virtualized Grid.
   * This function should implement the following signature:
   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
   *
   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
   * The :registerChild should be passed to the Grid's :ref property.
   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
   */
  children: PropTypes.func.isRequired,

  /** Optional maximum allowed column width */
  columnMaxWidth: PropTypes.number,

  /** Optional minimum allowed column width */
  columnMinWidth: PropTypes.number,

  /** Number of columns in Grid or Table child */
  columnCount: PropTypes.number.isRequired,

  /** Width of Grid or Table child */
  width: PropTypes.number.isRequired
} : {};

/***/ }),
/* 423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ColumnSizer__ = __webpack_require__(422);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ColumnSizer__["a"]; });


/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__ColumnSizer__["a" /* default */];


/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SCROLL_DIRECTION_BACKWARD */
/* unused harmony export SCROLL_DIRECTION_FORWARD */
/* unused harmony export SCROLL_DIRECTION_HORIZONTAL */
/* unused harmony export SCROLL_DIRECTION_VERTICAL */
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultOverscanIndicesGetter;
var babelPluginFlowReactPropTypes_proptype_OverscanIndices = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_OverscanIndices || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetterParams = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetterParams || __webpack_require__(0).any;

var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}

/***/ }),
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var babelPluginFlowReactPropTypes_proptype_VisibleCellRange = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_VisibleCellRange || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_CellSizeGetter = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_CellSizeGetter || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_Alignment = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_Alignment || __webpack_require__(0).any;

/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */

var CellSizeAndPositionManager = function () {

  // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
  function CellSizeAndPositionManager(_ref) {
    var _ref$batchAllCells = _ref.batchAllCells,
        batchAllCells = _ref$batchAllCells === undefined ? false : _ref$batchAllCells,
        cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CellSizeAndPositionManager);

    this._cellSizeAndPositionData = {};
    this._lastMeasuredIndex = -1;
    this._lastBatchedIndex = -1;

    this._batchAllCells = batchAllCells;
    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
  }

  // Used in deferred mode to track which cells have been queued for measurement.

  // Cache of size and position data for cells, mapped by cell index.
  // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: 'configure',
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize;

      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment() {
      return 0;
    }

    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error('Requested index ' + index + ' is outside of range 0..' + this._cellCount);
      }

      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var _size = this._cellSizeGetter({ index: i });

          // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.
          if (_size === undefined || isNaN(_size)) {
            throw Error('Invalid size returned for cell ' + i + ' of value ' + _size);
          } else if (_size === null) {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: 0
            };

            this._lastBatchedIndex = index;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: _size
            };

            _offset += _size;

            this._lastMeasuredIndex = index;
          }
        }
      }

      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }

    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
      var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
      var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
      return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
    }

    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;

      var idealOffset = void 0;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;
        case 'end':
          idealOffset = minOffset;
          break;
        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();

      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(params) {
      // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
      // eg we can't know a row's height without measuring the height of all columns within that row.
      if (this._batchAllCells) {
        return {
          start: 0,
          stop: this._cellCount - 1
        };
      }

      var containerSize = params.containerSize,
          offset = params.offset;


      var totalSize = this.getTotalSize();

      if (totalSize === 0) {
        return {};
      }

      var maxOffset = offset + containerSize;
      var start = this._findNearestCell(offset);

      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;

      var stop = start;

      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;

        offset += this.getSizeAndPositionOfCell(stop).size;
      }

      return {
        start: start,
        stop: stop
      };
    }

    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: '_binarySearch',
    value: function _binarySearch(high, low, offset) {
      while (low <= high) {
        var middle = low + Math.floor((high - low) / 2);
        var _currentOffset = this.getSizeAndPositionOfCell(middle).offset;

        if (_currentOffset === offset) {
          return middle;
        } else if (_currentOffset < offset) {
          low = middle + 1;
        } else if (_currentOffset > offset) {
          high = middle - 1;
        }
      }

      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    }
  }, {
    key: '_exponentialSearch',
    value: function _exponentialSearch(index, offset) {
      var interval = 1;

      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }

      return this._binarySearch(Math.min(index, this._cellCount - 1), Math.floor(index / 2), offset);
    }

    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: '_findNearestCell',
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error('Invalid offset ' + offset + ' specified');
      }

      // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.
      offset = Math.max(0, offset);

      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch(lastMeasuredIndex, 0, offset);
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch(lastMeasuredIndex, offset);
      }
    }
  }]);

  return CellSizeAndPositionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = CellSizeAndPositionManager;

/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateSizeAndPositionDataAndUpdateScrollOffset;


function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
      cellSize = _ref.cellSize,
      computeMetadataCallback = _ref.computeMetadataCallback,
      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
      nextCellsCount = _ref.nextCellsCount,
      nextCellSize = _ref.nextCellSize,
      nextScrollToIndex = _ref.nextScrollToIndex,
      scrollToIndex = _ref.scrollToIndex,
      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps);

    // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.
    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/**
 * Helper method that determines when to recalculate row or column metadata.
 */

/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScalingCellSizeAndPositionManager_js__ = __webpack_require__(100);
/* harmony export (immutable) */ __webpack_exports__["a"] = updateScrollIndexHelper;
var babelPluginFlowReactPropTypes_proptype_CellSize = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_CellSize || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_Alignment = __webpack_require__(8).babelPluginFlowReactPropTypes_proptype_Alignment || __webpack_require__(0).any;



/**
 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
 */

function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
      previousCellsCount = _ref.previousCellsCount,
      previousCellSize = _ref.previousCellSize,
      previousScrollToAlignment = _ref.previousScrollToAlignment,
      previousScrollToIndex = _ref.previousScrollToIndex,
      previousSize = _ref.previousSize,
      scrollOffset = _ref.scrollOffset,
      scrollToAlignment = _ref.scrollToAlignment,
      scrollToIndex = _ref.scrollToIndex,
      size = _ref.size,
      sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero,
      updateScrollIndexCallback = _ref.updateScrollIndexCallback;

  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize;

  // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.
  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex);

    // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}

/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_createCallbackMemoizer__ = __webpack_require__(103);
/* unused harmony export isRangeVisible */
/* unused harmony export scanForUnloadedRanges */
/* unused harmony export forceUpdateReactVirtualizedComponent */









/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */

var InfiniteLoader = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(InfiniteLoader, _PureComponent);

  function InfiniteLoader(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, InfiniteLoader);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (InfiniteLoader.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(InfiniteLoader)).call(this, props, context));

    _this._loadMoreRowsMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_createCallbackMemoizer__["a" /* default */])();

    _this._onRowsRendered = _this._onRowsRendered.bind(_this);
    _this._registerChild = _this._registerChild.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(InfiniteLoader, [{
    key: 'resetLoadMoreRowsCache',
    value: function resetLoadMoreRowsCache(autoReload) {
      this._loadMoreRowsMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_createCallbackMemoizer__["a" /* default */])();

      if (autoReload) {
        this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children({
        onRowsRendered: this._onRowsRendered,
        registerChild: this._registerChild
      });
    }
  }, {
    key: '_loadUnloadedRanges',
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;

      var loadMoreRows = this.props.loadMoreRows;


      unloadedRanges.forEach(function (unloadedRange) {
        var promise = loadMoreRows(unloadedRange);
        if (promise) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: unloadedRange.startIndex,
              stopIndex: unloadedRange.stopIndex
            })) {
              if (_this2._registeredChild) {
                forceUpdateReactVirtualizedComponent(_this2._registeredChild, _this2._lastRenderedStartIndex);
              }
            }
          });
        }
      });
    }
  }, {
    key: '_onRowsRendered',
    value: function _onRowsRendered(_ref) {
      var startIndex = _ref.startIndex,
          stopIndex = _ref.stopIndex;

      this._lastRenderedStartIndex = startIndex;
      this._lastRenderedStopIndex = stopIndex;

      this._doStuff(startIndex, stopIndex);
    }
  }, {
    key: '_doStuff',
    value: function _doStuff(startIndex, stopIndex) {
      var _this3 = this;

      var _props = this.props,
          isRowLoaded = _props.isRowLoaded,
          minimumBatchSize = _props.minimumBatchSize,
          rowCount = _props.rowCount,
          threshold = _props.threshold;


      var unloadedRanges = scanForUnloadedRanges({
        isRowLoaded: isRowLoaded,
        minimumBatchSize: minimumBatchSize,
        rowCount: rowCount,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
      });

      // For memoize comparison
      var squashedUnloadedRanges = unloadedRanges.reduce(function (reduced, unloadedRange) {
        return reduced.concat([unloadedRange.startIndex, unloadedRange.stopIndex]);
      }, []);

      this._loadMoreRowsMemoizer({
        callback: function callback() {
          _this3._loadUnloadedRanges(unloadedRanges);
        },
        indices: { squashedUnloadedRanges: squashedUnloadedRanges }
      });
    }
  }, {
    key: '_registerChild',
    value: function _registerChild(registeredChild) {
      this._registeredChild = registeredChild;
    }
  }]);

  return InfiniteLoader;
}(__WEBPACK_IMPORTED_MODULE_5_react__["PureComponent"]);

/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */


InfiniteLoader.defaultProps = {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15
};
/* harmony default export */ __webpack_exports__["a"] = InfiniteLoader;
InfiniteLoader.propTypes =  false ? {
  /**
   * Function responsible for rendering a virtualized component.
   * This function should implement the following signature:
   * ({ onRowsRendered, registerChild }) => PropTypes.element
   *
   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
   * The :registerChild callback should be set as the virtualized component's :ref.
   */
  children: PropTypes.func.isRequired,

  /**
   * Function responsible for tracking the loaded state of each row.
   * It should implement the following signature: ({ index: number }): boolean
   */
  isRowLoaded: PropTypes.func.isRequired,

  /**
   * Callback to be invoked when more rows must be loaded.
   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
   * The returned Promise should be resolved once row data has finished loading.
   * It will be used to determine when to refresh the list with the newly-loaded data.
   * This callback may be called multiple times in reaction to a single scroll event.
   */
  loadMoreRows: PropTypes.func.isRequired,

  /**
   * Minimum number of rows to be loaded at a time.
   * This property can be used to batch requests to reduce HTTP requests.
   */
  minimumBatchSize: PropTypes.number.isRequired,

  /**
   * Number of rows in list; can be arbitrary high number if actual number is unknown.
   */
  rowCount: PropTypes.number.isRequired,

  /**
   * Threshold at which to pre-fetch data.
   * A threshold X means that data will start loading when a user scrolls within X rows.
   * This value defaults to 15.
   */
  threshold: PropTypes.number.isRequired
} : {};
function isRangeVisible(_ref2) {
  var lastRenderedStartIndex = _ref2.lastRenderedStartIndex,
      lastRenderedStopIndex = _ref2.lastRenderedStopIndex,
      startIndex = _ref2.startIndex,
      stopIndex = _ref2.stopIndex;

  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}

/**
 * Returns all of the ranges within a larger range that contain unloaded rows.
 */
function scanForUnloadedRanges(_ref3) {
  var isRowLoaded = _ref3.isRowLoaded,
      minimumBatchSize = _ref3.minimumBatchSize,
      rowCount = _ref3.rowCount,
      startIndex = _ref3.startIndex,
      stopIndex = _ref3.stopIndex;

  var unloadedRanges = [];

  var rangeStartIndex = null;
  var rangeStopIndex = null;

  for (var index = startIndex; index <= stopIndex; index++) {
    var loaded = isRowLoaded({ index: index });

    if (!loaded) {
      rangeStopIndex = index;
      if (rangeStartIndex === null) {
        rangeStartIndex = index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push({
        startIndex: rangeStartIndex,
        stopIndex: rangeStopIndex
      });

      rangeStartIndex = rangeStopIndex = null;
    }
  }

  // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.
  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);

    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
      if (!isRowLoaded({ index: _index })) {
        rangeStopIndex = _index;
      } else {
        break;
      }
    }

    unloadedRanges.push({
      startIndex: rangeStartIndex,
      stopIndex: rangeStopIndex
    });
  }

  // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.
  if (unloadedRanges.length) {
    var firstUnloadedRange = unloadedRanges[0];

    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
      var _index2 = firstUnloadedRange.startIndex - 1;

      if (!isRowLoaded({ index: _index2 })) {
        firstUnloadedRange.startIndex = _index2;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
}

/**
 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
 * Else the inner Grid will not be re-rendered and visuals may be stale.
 *
 * Additionally, while a Grid is scrolling the cells can be cached,
 * So it's important to invalidate that cache by recalculating sizes
 * before forcing a rerender.
 */
function forceUpdateReactVirtualizedComponent(component) {
  var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;

  if (recomputeSize) {
    recomputeSize.call(component, currentIndex);
  } else {
    component.forceUpdate();
  }
}

/***/ }),
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InfiniteLoader__ = __webpack_require__(428);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__InfiniteLoader__["a"]; });


/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__InfiniteLoader__["a" /* default */];


/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List__ = __webpack_require__(171);
/* unused harmony reexport default */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__List__["a"]; });






/***/ }),
/* 431 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendor_intervalTree__ = __webpack_require__(449);





// Position cache requirements:
//   O(log(n)) lookup of cells to render for a given viewport size
//   O(1) lookup of shortest measured column (so we know when to enter phase 1)
var PositionCache = function () {
  function PositionCache() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, PositionCache);

    this._columnSizeMap = {};
    this._intervalTree = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__vendor_intervalTree__["a" /* default */])();
    this._leftMap = {};
  }
  // Tracks the height of each column


  // Store tops and bottoms of each cell for fast intersection lookup.


  // Maps cell index to x coordinates for quick lookup.


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(PositionCache, [{
    key: 'estimateTotalHeight',
    value: function estimateTotalHeight(cellCount, columnCount, defaultCellHeight) {
      var unmeasuredCellCount = cellCount - this.count;
      return this.tallestColumnSize + Math.ceil(unmeasuredCellCount / columnCount) * defaultCellHeight;
    }

    // Render all cells visible within the viewport range defined.

  }, {
    key: 'range',
    value: function range(scrollTop, clientHeight, renderCallback) {
      var _this = this;

      this._intervalTree.queryInterval(scrollTop, scrollTop + clientHeight, function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 3),
            top = _ref2[0],
            _ = _ref2[1],
            index = _ref2[2];

        return renderCallback(index, _this._leftMap[index], top);
      });
    }
  }, {
    key: 'setPosition',
    value: function setPosition(index, left, top, height) {
      this._intervalTree.insert([top, top + height, index]);
      this._leftMap[index] = left;

      var columnSizeMap = this._columnSizeMap;
      var columnHeight = columnSizeMap[left];
      if (columnHeight === undefined) {
        columnSizeMap[left] = top + height;
      } else {
        columnSizeMap[left] = Math.max(columnHeight, top + height);
      }
    }
  }, {
    key: 'count',
    get: function get() {
      return this._intervalTree.count;
    }
  }, {
    key: 'shortestColumnSize',
    get: function get() {
      var columnSizeMap = this._columnSizeMap;

      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = size === 0 ? height : Math.min(size, height);
      }

      return size;
    }
  }, {
    key: 'tallestColumnSize',
    get: function get() {
      var columnSizeMap = this._columnSizeMap;

      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = Math.max(size, height);
      }

      return size;
    }
  }]);

  return PositionCache;
}();

/* harmony default export */ __webpack_exports__["a"] = PositionCache;

/***/ }),
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createCellPositioner;
var babelPluginFlowReactPropTypes_proptype_Positioner = __webpack_require__(102).babelPluginFlowReactPropTypes_proptype_Positioner || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_CellMeasurerCache = __webpack_require__(102).babelPluginFlowReactPropTypes_proptype_CellMeasurerCache || __webpack_require__(0).any;

function createCellPositioner(_ref) {
  var cellMeasurerCache = _ref.cellMeasurerCache,
      columnCount = _ref.columnCount,
      columnWidth = _ref.columnWidth,
      _ref$spacer = _ref.spacer,
      spacer = _ref$spacer === undefined ? 0 : _ref$spacer;

  var columnHeights = void 0;

  initOrResetDerivedValues();

  function cellPositioner(index) {
    // Find the shortest column and use it.
    var columnIndex = 0;
    for (var i = 1; i < columnHeights.length; i++) {
      if (columnHeights[i] < columnHeights[columnIndex]) {
        columnIndex = i;
      }
    }

    var left = columnIndex * (columnWidth + spacer);
    var top = columnHeights[columnIndex] || 0;

    columnHeights[columnIndex] = top + cellMeasurerCache.getHeight(index) + spacer;

    return {
      left: left,
      top: top
    };
  }

  function initOrResetDerivedValues() {
    // Track the height of each column.
    // Layout algorithm below always inserts into the shortest column.
    columnHeights = [];
    for (var i = 0; i < columnCount; i++) {
      columnHeights[i] = 0;
    }
  }

  function reset(params) {
    columnCount = params.columnCount;
    columnWidth = params.columnWidth;
    spacer = params.spacer;

    initOrResetDerivedValues();
  }

  cellPositioner.reset = reset;

  return cellPositioner;
}

/***/ }),
/* 433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createCellPositioner__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Masonry__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createCellPositioner__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Masonry__["default"]; });



/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_1__Masonry__["default"];


/***/ }),
/* 434 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CellMeasurer__ = __webpack_require__(167);




/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCacheDecorator = function () {
  function CellMeasurerCacheDecorator() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CellMeasurerCacheDecorator);

    this.columnWidth = function (_ref) {
      var index = _ref.index;

      _this._cellMeasurerCache.columnWidth({
        index: index + _this._columnIndexOffset
      });
    };

    this.rowHeight = function (_ref2) {
      var index = _ref2.index;

      _this._cellMeasurerCache.rowHeight({
        index: index + _this._rowIndexOffset
      });
    };

    var cellMeasurerCache = params.cellMeasurerCache,
        _params$columnIndexOf = params.columnIndexOffset,
        columnIndexOffset = _params$columnIndexOf === undefined ? 0 : _params$columnIndexOf,
        _params$rowIndexOffse = params.rowIndexOffset,
        rowIndexOffset = _params$rowIndexOffse === undefined ? 0 : _params$rowIndexOffse;


    this._cellMeasurerCache = cellMeasurerCache;
    this._columnIndexOffset = columnIndexOffset;
    this._rowIndexOffset = rowIndexOffset;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CellMeasurerCacheDecorator, [{
    key: 'clear',
    value: function clear(rowIndex, columnIndex) {
      this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'clearAll',
    value: function clearAll() {
      this._cellMeasurerCache.clearAll();
    }
  }, {
    key: 'hasFixedHeight',
    value: function hasFixedHeight() {
      return this._cellMeasurerCache.hasFixedHeight();
    }
  }, {
    key: 'hasFixedWidth',
    value: function hasFixedWidth() {
      return this._cellMeasurerCache.hasFixedWidth();
    }
  }, {
    key: 'getHeight',
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'getWidth',
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'has',
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'set',
    value: function set(rowIndex, columnIndex, width, height) {
      this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width, height);
    }
  }, {
    key: 'defaultHeight',
    get: function get() {
      return this._cellMeasurerCache.defaultHeight;
    }
  }, {
    key: 'defaultWidth',
    get: function get() {
      return this._cellMeasurerCache.defaultWidth;
    }
  }]);

  return CellMeasurerCacheDecorator;
}();

/* harmony default export */ __webpack_exports__["a"] = CellMeasurerCacheDecorator;

/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Grid__ = __webpack_require__(13);












var SCROLLBAR_SIZE_BUFFER = 20;

/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */

var MultiGrid = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(MultiGrid, _PureComponent);

  function MultiGrid(props, context) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, MultiGrid);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MultiGrid.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(MultiGrid)).call(this, props, context));

    _this.state = {
      scrollLeft: 0,
      scrollTop: 0,
      scrollbarSize: 0,
      showHorizontalScrollbar: false,
      showVerticalScrollbar: false
    };

    _this._deferredInvalidateColumnIndex = null;
    _this._deferredInvalidateRowIndex = null;

    _this._bottomLeftGridRef = _this._bottomLeftGridRef.bind(_this);
    _this._bottomRightGridRef = _this._bottomRightGridRef.bind(_this);
    _this._cellRendererBottomLeftGrid = _this._cellRendererBottomLeftGrid.bind(_this);
    _this._cellRendererBottomRightGrid = _this._cellRendererBottomRightGrid.bind(_this);
    _this._cellRendererTopRightGrid = _this._cellRendererTopRightGrid.bind(_this);
    _this._columnWidthRightGrid = _this._columnWidthRightGrid.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onScrollbarPresenceChange = _this._onScrollbarPresenceChange.bind(_this);
    _this._onScrollLeft = _this._onScrollLeft.bind(_this);
    _this._onScrollTop = _this._onScrollTop.bind(_this);
    _this._rowHeightBottomGrid = _this._rowHeightBottomGrid.bind(_this);
    _this._topLeftGridRef = _this._topLeftGridRef.bind(_this);
    _this._topRightGridRef = _this._topRightGridRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(MultiGrid, [{
    key: 'forceUpdateGrids',
    value: function forceUpdateGrids() {
      this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
      this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
      this._topLeftGrid && this._topLeftGrid.forceUpdate();
      this._topRightGrid && this._topRightGrid.forceUpdate();
    }

    /** See Grid#invalidateCellSizeAfterRender */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === undefined ? 0 : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === undefined ? 0 : _ref$rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllCells',
    value: function measureAllCells() {
      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
      this._topLeftGrid && this._topLeftGrid.measureAllCells();
      this._topRightGrid && this._topRightGrid.measureAllCells();
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$columnIndex = _ref2.columnIndex,
          columnIndex = _ref2$columnIndex === undefined ? 0 : _ref2$columnIndex,
          _ref2$rowIndex = _ref2.rowIndex,
          rowIndex = _ref2$rowIndex === undefined ? 0 : _ref2$rowIndex;

      var _props = this.props,
          fixedColumnCount = _props.fixedColumnCount,
          fixedRowCount = _props.fixedRowCount;


      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);

      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: adjustedRowIndex
      });
      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: adjustedRowIndex
      });
      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: rowIndex
      });
      this._topRightGrid && this._topRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: rowIndex
      });

      this._leftGridWidth = null;
      this._topGridHeight = null;
      this._maybeCalculateCachedStyles(null, this.props, null, this.state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          scrollLeft = _props2.scrollLeft,
          scrollTop = _props2.scrollTop;


      if (scrollLeft > 0 || scrollTop > 0) {
        var newState = {};

        if (scrollLeft > 0) {
          newState.scrollLeft = scrollLeft;
        }

        if (scrollTop > 0) {
          newState.scrollTop = scrollTop;
        }

        this.setState(newState);
      }
      this._handleInvalidatedGridSize();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._handleInvalidatedGridSize();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props3 = this.props,
          deferredMeasurementCache = _props3.deferredMeasurementCache,
          fixedColumnCount = _props3.fixedColumnCount,
          fixedRowCount = _props3.fixedRowCount;


      this._maybeCalculateCachedStyles(null, this.props, null, this.state);

      if (deferredMeasurementCache) {
        this._deferredMeasurementCacheBottomLeftGrid = fixedRowCount > 0 ? new __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__["a" /* default */]({
          cellMeasurerCache: deferredMeasurementCache,
          columnIndexOffset: 0,
          rowIndexOffset: fixedRowCount
        }) : deferredMeasurementCache;

        this._deferredMeasurementCacheBottomRightGrid = fixedColumnCount > 0 || fixedRowCount > 0 ? new __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__["a" /* default */]({
          cellMeasurerCache: deferredMeasurementCache,
          columnIndexOffset: fixedColumnCount,
          rowIndexOffset: fixedRowCount
        }) : deferredMeasurementCache;

        this._deferredMeasurementCacheTopRightGrid = fixedColumnCount > 0 ? new __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__["a" /* default */]({
          cellMeasurerCache: deferredMeasurementCache,
          columnIndexOffset: fixedColumnCount,
          rowIndexOffset: 0
        }) : deferredMeasurementCache;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextState) {
      var _props4 = this.props,
          columnWidth = _props4.columnWidth,
          fixedColumnCount = _props4.fixedColumnCount,
          fixedRowCount = _props4.fixedRowCount,
          rowHeight = _props4.rowHeight;


      if (columnWidth !== nextProps.columnWidth || fixedColumnCount !== nextProps.fixedColumnCount) {
        this._leftGridWidth = null;
      }

      if (fixedRowCount !== nextProps.fixedRowCount || rowHeight !== nextProps.rowHeight) {
        this._topGridHeight = null;
      }

      if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        var newState = {};

        if (nextProps.scrollLeft != null && nextProps.scrollLeft >= 0) {
          newState.scrollLeft = nextProps.scrollLeft;
        }

        if (nextProps.scrollTop != null && nextProps.scrollTop >= 0) {
          newState.scrollTop = nextProps.scrollTop;
        }

        this.setState(newState);
      }

      this._maybeCalculateCachedStyles(this.props, nextProps, this.state, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          onScroll = _props5.onScroll,
          onSectionRendered = _props5.onSectionRendered,
          scrollLeftProp = _props5.scrollLeft,
          scrollToColumn = _props5.scrollToColumn,
          scrollTopProp = _props5.scrollTop,
          scrollToRow = _props5.scrollToRow,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props5, ['onScroll', 'onSectionRendered', 'scrollLeft', 'scrollToColumn', 'scrollTop', 'scrollToRow']);

      // Don't render any of our Grids if there are no cells.
      // This mirrors what Grid does,
      // And prevents us from recording inaccurage measurements when used with CellMeasurer.


      if (this.props.width === 0 || this.props.height === 0) {
        return null;
      }

      // scrollTop and scrollLeft props are explicitly filtered out and ignored

      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollTop = _state.scrollTop;


      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        'div',
        { style: this._containerOuterStyle },
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          'div',
          { style: this._containerTopStyle },
          this._renderTopLeftGrid(rest),
          this._renderTopRightGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
            onScroll: onScroll,
            scrollLeft: scrollLeft
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          'div',
          { style: this._containerBottomStyle },
          this._renderBottomLeftGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
            onScroll: onScroll,
            scrollTop: scrollTop
          })),
          this._renderBottomRightGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
            onScroll: onScroll,
            onSectionRendered: onSectionRendered,
            scrollLeft: scrollLeft,
            scrollToColumn: scrollToColumn,
            scrollToRow: scrollToRow,
            scrollTop: scrollTop
          }))
        )
      );
    }
  }, {
    key: '_bottomLeftGridRef',
    value: function _bottomLeftGridRef(ref) {
      this._bottomLeftGrid = ref;
    }
  }, {
    key: '_bottomRightGridRef',
    value: function _bottomRightGridRef(ref) {
      this._bottomRightGrid = ref;
    }
  }, {
    key: '_cellRendererBottomLeftGrid',
    value: function _cellRendererBottomLeftGrid(_ref3) {
      var rowIndex = _ref3.rowIndex,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref3, ['rowIndex']);

      var _props6 = this.props,
          cellRenderer = _props6.cellRenderer,
          fixedRowCount = _props6.fixedRowCount,
          rowCount = _props6.rowCount;


      if (rowIndex === rowCount - fixedRowCount) {
        return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement('div', {
          key: rest.key,
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest.style, {
            height: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
          parent: this,
          rowIndex: rowIndex + fixedRowCount
        }));
      }
    }
  }, {
    key: '_cellRendererBottomRightGrid',
    value: function _cellRendererBottomRightGrid(_ref4) {
      var columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref4, ['columnIndex', 'rowIndex']);

      var _props7 = this.props,
          cellRenderer = _props7.cellRenderer,
          fixedColumnCount = _props7.fixedColumnCount,
          fixedRowCount = _props7.fixedRowCount;


      return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
        columnIndex: columnIndex + fixedColumnCount,
        parent: this,
        rowIndex: rowIndex + fixedRowCount
      }));
    }
  }, {
    key: '_cellRendererTopRightGrid',
    value: function _cellRendererTopRightGrid(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref5, ['columnIndex']);

      var _props8 = this.props,
          cellRenderer = _props8.cellRenderer,
          columnCount = _props8.columnCount,
          fixedColumnCount = _props8.fixedColumnCount;


      if (columnIndex === columnCount - fixedColumnCount) {
        return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement('div', {
          key: rest.key,
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest.style, {
            width: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
          columnIndex: columnIndex + fixedColumnCount,
          parent: this
        }));
      }
    }
  }, {
    key: '_columnWidthRightGrid',
    value: function _columnWidthRightGrid(_ref6) {
      var index = _ref6.index;
      var _props9 = this.props,
          columnCount = _props9.columnCount,
          fixedColumnCount = _props9.fixedColumnCount,
          columnWidth = _props9.columnWidth;
      var _state2 = this.state,
          scrollbarSize = _state2.scrollbarSize,
          showHorizontalScrollbar = _state2.showHorizontalScrollbar;

      // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showHorizontalScrollbar && index === columnCount - fixedColumnCount) {
        return scrollbarSize;
      }

      return typeof columnWidth === 'function' ? columnWidth({ index: index + fixedColumnCount }) : columnWidth;
    }
  }, {
    key: '_getBottomGridHeight',
    value: function _getBottomGridHeight(props) {
      var height = props.height;


      var topGridHeight = this._getTopGridHeight(props);

      return height - topGridHeight;
    }
  }, {
    key: '_getLeftGridWidth',
    value: function _getLeftGridWidth(props) {
      var fixedColumnCount = props.fixedColumnCount,
          columnWidth = props.columnWidth;


      if (this._leftGridWidth == null) {
        if (typeof columnWidth === 'function') {
          var leftGridWidth = 0;

          for (var index = 0; index < fixedColumnCount; index++) {
            leftGridWidth += columnWidth({ index: index });
          }

          this._leftGridWidth = leftGridWidth;
        } else {
          this._leftGridWidth = columnWidth * fixedColumnCount;
        }
      }

      return this._leftGridWidth;
    }
  }, {
    key: '_getRightGridWidth',
    value: function _getRightGridWidth(props) {
      var width = props.width;


      var leftGridWidth = this._getLeftGridWidth(props);

      return width - leftGridWidth;
    }
  }, {
    key: '_getTopGridHeight',
    value: function _getTopGridHeight(props) {
      var fixedRowCount = props.fixedRowCount,
          rowHeight = props.rowHeight;


      if (this._topGridHeight == null) {
        if (typeof rowHeight === 'function') {
          var topGridHeight = 0;

          for (var index = 0; index < fixedRowCount; index++) {
            topGridHeight += rowHeight({ index: index });
          }

          this._topGridHeight = topGridHeight;
        } else {
          this._topGridHeight = rowHeight * fixedRowCount;
        }
      }

      return this._topGridHeight;
    }
  }, {
    key: '_handleInvalidatedGridSize',
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;

        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;

        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
        this.forceUpdate();
      }
    }

    /**
     * Avoid recreating inline styles each render; this bypasses Grid's shallowCompare.
     * This method recalculates styles only when specific props change.
     */

  }, {
    key: '_maybeCalculateCachedStyles',
    value: function _maybeCalculateCachedStyles(prevProps, props) {
      var columnWidth = props.columnWidth,
          enableFixedColumnScroll = props.enableFixedColumnScroll,
          enableFixedRowScroll = props.enableFixedRowScroll,
          height = props.height,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowHeight = props.rowHeight,
          style = props.style,
          styleBottomLeftGrid = props.styleBottomLeftGrid,
          styleBottomRightGrid = props.styleBottomRightGrid,
          styleTopLeftGrid = props.styleTopLeftGrid,
          styleTopRightGrid = props.styleTopRightGrid,
          width = props.width;


      var firstRender = !prevProps;
      var sizeChange = firstRender || height !== prevProps.height || width !== prevProps.width;
      var leftSizeChange = firstRender || columnWidth !== prevProps.columnWidth || fixedColumnCount !== prevProps.fixedColumnCount;
      var topSizeChange = firstRender || fixedRowCount !== prevProps.fixedRowCount || rowHeight !== prevProps.rowHeight;

      if (firstRender || sizeChange || style !== prevProps.style) {
        this._containerOuterStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          height: height,
          overflow: 'visible', // Let :focus outline show through
          width: width
        }, style);
      }

      if (firstRender || sizeChange || topSizeChange) {
        this._containerTopStyle = {
          height: this._getTopGridHeight(props),
          position: 'relative',
          width: width
        };

        this._containerBottomStyle = {
          height: height - this._getTopGridHeight(props),
          overflow: 'visible', // Let :focus outline show through
          position: 'relative',
          width: width
        };
      }

      if (firstRender || styleBottomLeftGrid !== prevProps.styleBottomLeftGrid) {
        this._bottomLeftGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: 0,
          overflowX: 'hidden',
          overflowY: enableFixedColumnScroll ? 'auto' : 'hidden',
          position: 'absolute'
        }, styleBottomLeftGrid);
      }

      if (firstRender || leftSizeChange || styleBottomRightGrid !== prevProps.styleBottomRightGrid) {
        this._bottomRightGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: this._getLeftGridWidth(props),
          position: 'absolute'
        }, styleBottomRightGrid);
      }

      if (firstRender || styleTopLeftGrid !== prevProps.styleTopLeftGrid) {
        this._topLeftGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopLeftGrid);
      }

      if (firstRender || leftSizeChange || styleTopRightGrid !== prevProps.styleTopRightGrid) {
        this._topRightGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: this._getLeftGridWidth(props),
          overflowX: enableFixedRowScroll ? 'auto' : 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopRightGrid);
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft,
          scrollTop = scrollInfo.scrollTop;

      this.setState({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });
      var onScroll = this.props.onScroll;
      if (onScroll) {
        onScroll(scrollInfo);
      }
    }
  }, {
    key: '_onScrollbarPresenceChange',
    value: function _onScrollbarPresenceChange(_ref7) {
      var horizontal = _ref7.horizontal,
          size = _ref7.size,
          vertical = _ref7.vertical;
      var _state3 = this.state,
          showHorizontalScrollbar = _state3.showHorizontalScrollbar,
          showVerticalScrollbar = _state3.showVerticalScrollbar;


      if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
        this.setState({
          scrollbarSize: size,
          showHorizontalScrollbar: horizontal,
          showVerticalScrollbar: vertical
        });
      }
    }
  }, {
    key: '_onScrollLeft',
    value: function _onScrollLeft(scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft;

      this._onScroll({
        scrollLeft: scrollLeft,
        scrollTop: this.state.scrollTop
      });
    }
  }, {
    key: '_onScrollTop',
    value: function _onScrollTop(scrollInfo) {
      var scrollTop = scrollInfo.scrollTop;

      this._onScroll({
        scrollTop: scrollTop,
        scrollLeft: this.state.scrollLeft
      });
    }
  }, {
    key: '_renderBottomLeftGrid',
    value: function _renderBottomLeftGrid(props) {
      var enableFixedColumnScroll = props.enableFixedColumnScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          scrollTop = props.scrollTop;
      var showVerticalScrollbar = this.state.showVerticalScrollbar;


      if (!fixedColumnCount) {
        return null;
      }

      var additionalRowCount = showVerticalScrollbar ? 1 : 0;

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererBottomLeftGrid,
        className: this.props.classNameBottomLeftGrid,
        columnCount: fixedColumnCount,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
        height: this._getBottomGridHeight(props),
        onScroll: enableFixedColumnScroll ? this._onScrollTop : undefined,
        ref: this._bottomLeftGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
        rowHeight: this._rowHeightBottomGrid,
        scrollTop: scrollTop,
        style: this._bottomLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: '_renderBottomRightGrid',
    value: function _renderBottomRightGrid(props) {
      var columnCount = props.columnCount,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          scrollToColumn = props.scrollToColumn,
          scrollToRow = props.scrollToRow;


      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererBottomRightGrid,
        className: this.props.classNameBottomRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
        height: this._getBottomGridHeight(props),
        onScroll: this._onScroll,
        onScrollbarPresenceChange: this._onScrollbarPresenceChange,
        ref: this._bottomRightGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollToColumn: scrollToColumn - fixedColumnCount,
        scrollToRow: scrollToRow - fixedRowCount,
        style: this._bottomRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: '_renderTopLeftGrid',
    value: function _renderTopLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount;


      if (!fixedColumnCount || !fixedRowCount) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        className: this.props.classNameTopLeftGrid,
        columnCount: fixedColumnCount,
        height: this._getTopGridHeight(props),
        ref: this._topLeftGridRef,
        rowCount: fixedRowCount,
        style: this._topLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: '_renderTopRightGrid',
    value: function _renderTopRightGrid(props) {
      var columnCount = props.columnCount,
          enableFixedRowScroll = props.enableFixedRowScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          scrollLeft = props.scrollLeft;
      var showHorizontalScrollbar = this.state.showHorizontalScrollbar;


      if (!fixedRowCount) {
        return null;
      }

      var additionalColumnCount = showHorizontalScrollbar ? 1 : 0;

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererTopRightGrid,
        className: this.props.classNameTopRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
        height: this._getTopGridHeight(props),
        onScroll: enableFixedRowScroll ? this._onScrollLeft : undefined,
        ref: this._topRightGridRef,
        rowCount: fixedRowCount,
        scrollLeft: scrollLeft,
        style: this._topRightGridStyle,
        tabIndex: null,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: '_rowHeightBottomGrid',
    value: function _rowHeightBottomGrid(_ref8) {
      var index = _ref8.index;
      var _props10 = this.props,
          fixedRowCount = _props10.fixedRowCount,
          rowCount = _props10.rowCount,
          rowHeight = _props10.rowHeight;
      var _state4 = this.state,
          scrollbarSize = _state4.scrollbarSize,
          showVerticalScrollbar = _state4.showVerticalScrollbar;

      // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showVerticalScrollbar && index === rowCount - fixedRowCount) {
        return scrollbarSize;
      }

      return typeof rowHeight === 'function' ? rowHeight({ index: index + fixedRowCount }) : rowHeight;
    }
  }, {
    key: '_topLeftGridRef',
    value: function _topLeftGridRef(ref) {
      this._topLeftGrid = ref;
    }
  }, {
    key: '_topRightGridRef',
    value: function _topRightGridRef(ref) {
      this._topRightGrid = ref;
    }
  }]);

  return MultiGrid;
}(__WEBPACK_IMPORTED_MODULE_8_react__["PureComponent"]);

MultiGrid.defaultProps = {
  classNameBottomLeftGrid: '',
  classNameBottomRightGrid: '',
  classNameTopLeftGrid: '',
  classNameTopRightGrid: '',
  enableFixedColumnScroll: false,
  enableFixedRowScroll: false,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {}
};
/* harmony default export */ __webpack_exports__["a"] = MultiGrid;
MultiGrid.propTypes =  false ? {
  classNameBottomLeftGrid: PropTypes.string.isRequired,
  classNameBottomRightGrid: PropTypes.string.isRequired,
  classNameTopLeftGrid: PropTypes.string.isRequired,
  classNameTopRightGrid: PropTypes.string.isRequired,
  enableFixedColumnScroll: PropTypes.bool.isRequired,
  enableFixedRowScroll: PropTypes.bool.isRequired,
  fixedColumnCount: PropTypes.number.isRequired,
  fixedRowCount: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  styleBottomLeftGrid: PropTypes.object.isRequired,
  styleBottomRightGrid: PropTypes.object.isRequired,
  styleTopLeftGrid: PropTypes.object.isRequired,
  styleTopRightGrid: PropTypes.object.isRequired
} : {};

/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MultiGrid__ = __webpack_require__(435);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__MultiGrid__["a"]; });


/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__MultiGrid__["a" /* default */];


/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);








/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */

var ScrollSync = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ScrollSync, _PureComponent);

  function ScrollSync(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScrollSync);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ScrollSync.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ScrollSync)).call(this, props, context));

    _this.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0
    };

    _this._onScroll = _this._onScroll.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScrollSync, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          clientHeight = _state.clientHeight,
          clientWidth = _state.clientWidth,
          scrollHeight = _state.scrollHeight,
          scrollLeft = _state.scrollLeft,
          scrollTop = _state.scrollTop,
          scrollWidth = _state.scrollWidth;


      return children({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        onScroll: this._onScroll,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref) {
      var clientHeight = _ref.clientHeight,
          clientWidth = _ref.clientWidth,
          scrollHeight = _ref.scrollHeight,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          scrollWidth = _ref.scrollWidth;

      this.setState({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }]);

  return ScrollSync;
}(__WEBPACK_IMPORTED_MODULE_6_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = ScrollSync;
ScrollSync.propTypes =  false ? {
  /**
   * Function responsible for rendering 2 or more virtualized components.
   * This function should implement the following signature:
   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
   */
  children: PropTypes.func.isRequired
} : {};

/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScrollSync__ = __webpack_require__(437);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ScrollSync__["a"]; });


/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__ScrollSync__["a" /* default */];


/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Column__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Grid__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__defaultRowRenderer__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__defaultHeaderRowRenderer__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__SortDirection__ = __webpack_require__(65);







var babelPluginFlowReactPropTypes_proptype_CellPosition = __webpack_require__(13).babelPluginFlowReactPropTypes_proptype_CellPosition || __webpack_require__(0).any;











/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */

var Table = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Table, _PureComponent);

  function Table(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Table);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Table.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Table)).call(this, props));

    _this.state = {
      scrollbarWidth: 0
    };

    _this._createColumn = _this._createColumn.bind(_this);
    _this._createRow = _this._createRow.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
    _this._setRef = _this._setRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Table, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment,
          index = _ref.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index
        }),
            scrollTop = _Grid$getOffsetForCel.scrollTop;

        return scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$columnIndex = _ref3.columnIndex,
          columnIndex = _ref3$columnIndex === undefined ? 0 : _ref3$columnIndex,
          _ref3$rowIndex = _ref3.rowIndex,
          rowIndex = _ref3$rowIndex === undefined ? 0 : _ref3$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index
        });
      }
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({ scrollTop: scrollTop });
      }
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeader = _props.disableHeader,
          gridClassName = _props.gridClassName,
          gridStyle = _props.gridStyle,
          headerHeight = _props.headerHeight,
          headerRowRenderer = _props.headerRowRenderer,
          height = _props.height,
          id = _props.id,
          noRowsRenderer = _props.noRowsRenderer,
          rowClassName = _props.rowClassName,
          rowStyle = _props.rowStyle,
          scrollToIndex = _props.scrollToIndex,
          style = _props.style,
          width = _props.width;
      var scrollbarWidth = this.state.scrollbarWidth;


      var availableRowsHeight = disableHeader ? height : height - headerHeight;

      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: -1 }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: -1 }) : rowStyle;

      // Precompute and cache column styles before rendering rows and columns to speed things up
      this._cachedColumnStyles = [];
      __WEBPACK_IMPORTED_MODULE_9_react___default.a.Children.toArray(children).forEach(function (column, index) {
        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);

        _this2._cachedColumnStyles[index] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, flexStyles, {
          overflow: 'hidden'
        });
      });

      // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table', className),
          id: id,
          role: 'grid',
          style: style },
        !disableHeader && headerRowRenderer({
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__headerRow', rowClass),
          columns: this._getHeaderColumns(),
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rowStyleObject, {
            height: headerHeight,
            overflow: 'hidden',
            paddingRight: scrollbarWidth,
            width: width
          })
        }),
        __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
          autoContainerWidth: true,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__Grid', gridClassName),
          cellRenderer: this._createRow,
          columnWidth: width,
          columnCount: 1,
          height: availableRowsHeight,
          id: undefined,
          noContentRenderer: noRowsRenderer,
          onScroll: this._onScroll,
          onSectionRendered: this._onSectionRendered,
          ref: this._setRef,
          role: 'rowgroup',
          scrollbarWidth: scrollbarWidth,
          scrollToRow: scrollToIndex,
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, gridStyle, {
            overflowX: 'hidden'
          })
        }))
      );
    }
  }, {
    key: '_createColumn',
    value: function _createColumn(_ref4) {
      var column = _ref4.column,
          columnIndex = _ref4.columnIndex,
          isScrolling = _ref4.isScrolling,
          parent = _ref4.parent,
          rowData = _ref4.rowData,
          rowIndex = _ref4.rowIndex;
      var _column$props = column.props,
          cellDataGetter = _column$props.cellDataGetter,
          cellRenderer = _column$props.cellRenderer,
          className = _column$props.className,
          columnData = _column$props.columnData,
          dataKey = _column$props.dataKey,
          id = _column$props.id;


      var cellData = cellDataGetter({ columnData: columnData, dataKey: dataKey, rowData: rowData });
      var renderedCell = cellRenderer({
        cellData: cellData,
        columnData: columnData,
        columnIndex: columnIndex,
        dataKey: dataKey,
        isScrolling: isScrolling,
        parent: parent,
        rowData: rowData,
        rowIndex: rowIndex
      });

      var style = this._cachedColumnStyles[columnIndex];

      var title = typeof renderedCell === 'string' ? renderedCell : null;

      var a11yProps = {
        role: 'gridcell'
      };

      if (id) {
        a11yProps['aria-describedby'] = id;
      }

      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a11yProps, {
          key: 'Row' + rowIndex + '-Col' + columnIndex,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__rowColumn', className),
          style: style,
          title: title }),
        renderedCell
      );
    }
  }, {
    key: '_createHeader',
    value: function _createHeader(_ref5) {
      var column = _ref5.column,
          index = _ref5.index;
      var _props2 = this.props,
          headerClassName = _props2.headerClassName,
          headerStyle = _props2.headerStyle,
          onHeaderClick = _props2.onHeaderClick,
          sort = _props2.sort,
          sortBy = _props2.sortBy,
          sortDirection = _props2.sortDirection;
      var _column$props2 = column.props,
          dataKey = _column$props2.dataKey,
          disableSort = _column$props2.disableSort,
          headerRenderer = _column$props2.headerRenderer,
          id = _column$props2.id,
          label = _column$props2.label,
          columnData = _column$props2.columnData,
          defaultSortDirection = _column$props2.defaultSortDirection;

      var sortEnabled = !disableSort && sort;

      var classNames = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
        ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
      });
      var style = this._getFlexStyleForColumn(column, headerStyle);

      var renderedHeader = headerRenderer({
        columnData: columnData,
        dataKey: dataKey,
        disableSort: disableSort,
        label: label,
        sortBy: sortBy,
        sortDirection: sortDirection
      });

      var a11yProps = {
        role: 'columnheader'
      };

      if (sortEnabled || onHeaderClick) {
        (function () {
          // If this is a sortable header, clicking it should update the table data's sorting.
          var isFirstTimeSort = sortBy !== dataKey;

          // If this is the firstTime sort of this column, use the column default sort order.
          // Otherwise, invert the direction of the sort.
          var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].DESC ? __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].ASC : __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].DESC;

          var onClick = function onClick(event) {
            sortEnabled && sort({
              sortBy: dataKey,
              sortDirection: newSortDirection
            });
            onHeaderClick && onHeaderClick({ columnData: columnData, dataKey: dataKey, event: event });
          };

          var onKeyDown = function onKeyDown(event) {
            if (event.key === 'Enter' || event.key === ' ') {
              onClick(event);
            }
          };

          a11yProps['aria-label'] = column.props['aria-label'] || label || dataKey;
          a11yProps.tabIndex = 0;
          a11yProps.onClick = onClick;
          a11yProps.onKeyDown = onKeyDown;
        })();
      }

      if (sortBy === dataKey) {
        a11yProps['aria-sort'] = sortDirection === __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].ASC ? 'ascending' : 'descending';
      }

      if (id) {
        a11yProps.id = id;
      }

      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a11yProps, {
          key: 'Header-Col' + index,
          className: classNames,
          style: style }),
        renderedHeader
      );
    }
  }, {
    key: '_createRow',
    value: function _createRow(_ref6) {
      var _this3 = this;

      var index = _ref6.rowIndex,
          isScrolling = _ref6.isScrolling,
          key = _ref6.key,
          parent = _ref6.parent,
          style = _ref6.style;
      var _props3 = this.props,
          children = _props3.children,
          onRowClick = _props3.onRowClick,
          onRowDoubleClick = _props3.onRowDoubleClick,
          onRowRightClick = _props3.onRowRightClick,
          onRowMouseOver = _props3.onRowMouseOver,
          onRowMouseOut = _props3.onRowMouseOut,
          rowClassName = _props3.rowClassName,
          rowGetter = _props3.rowGetter,
          rowRenderer = _props3.rowRenderer,
          rowStyle = _props3.rowStyle;
      var scrollbarWidth = this.state.scrollbarWidth;


      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: index }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: index }) : rowStyle;
      var rowData = rowGetter({ index: index });

      var columns = __WEBPACK_IMPORTED_MODULE_9_react___default.a.Children.toArray(children).map(function (column, columnIndex) {
        return _this3._createColumn({
          column: column,
          columnIndex: columnIndex,
          isScrolling: isScrolling,
          parent: parent,
          rowData: rowData,
          rowIndex: index,
          scrollbarWidth: scrollbarWidth
        });
      });

      var className = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__row', rowClass);
      var flattenedStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, rowStyleObject, {
        height: this._getRowHeight(index),
        overflow: 'hidden',
        paddingRight: scrollbarWidth
      });

      return rowRenderer({
        className: className,
        columns: columns,
        index: index,
        isScrolling: isScrolling,
        key: key,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowRightClick: onRowRightClick,
        onRowMouseOver: onRowMouseOver,
        onRowMouseOut: onRowMouseOut,
        rowData: rowData,
        style: flattenedStyle
      });
    }

    /**
     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
     */

  }, {
    key: '_getFlexStyleForColumn',
    value: function _getFlexStyleForColumn(column) {
      var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var flexValue = column.props.flexGrow + ' ' + column.props.flexShrink + ' ' + column.props.width + 'px';

      var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, customStyle, {
        flex: flexValue,
        msFlex: flexValue,
        WebkitFlex: flexValue
      });

      if (column.props.maxWidth) {
        style.maxWidth = column.props.maxWidth;
      }

      if (column.props.minWidth) {
        style.minWidth = column.props.minWidth;
      }

      return style;
    }
  }, {
    key: '_getHeaderColumns',
    value: function _getHeaderColumns() {
      var _this4 = this;

      var _props4 = this.props,
          children = _props4.children,
          disableHeader = _props4.disableHeader;

      var items = disableHeader ? [] : __WEBPACK_IMPORTED_MODULE_9_react___default.a.Children.toArray(children);

      return items.map(function (column, index) {
        return _this4._createHeader({ column: column, index: index });
      });
    }
  }, {
    key: '_getRowHeight',
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;


      return typeof rowHeight === 'function' ? rowHeight({ index: rowIndex }) : rowHeight;
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref7) {
      var clientHeight = _ref7.clientHeight,
          scrollHeight = _ref7.scrollHeight,
          scrollTop = _ref7.scrollTop;
      var onScroll = this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }
  }, {
    key: '_onSectionRendered',
    value: function _onSectionRendered(_ref8) {
      var rowOverscanStartIndex = _ref8.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref8.rowOverscanStopIndex,
          rowStartIndex = _ref8.rowStartIndex,
          rowStopIndex = _ref8.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }, {
    key: '_setRef',
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: '_setScrollbarWidth',
    value: function _setScrollbarWidth() {
      if (this.Grid) {
        var _Grid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_dom__["findDOMNode"])(this.Grid);
        var clientWidth = _Grid.clientWidth || 0;
        var offsetWidth = _Grid.offsetWidth || 0;
        var scrollbarWidth = offsetWidth - clientWidth;

        this.setState({ scrollbarWidth: scrollbarWidth });
      }
    }
  }]);

  return Table;
}(__WEBPACK_IMPORTED_MODULE_9_react__["PureComponent"]);

Table.defaultProps = {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanIndicesGetter: __WEBPACK_IMPORTED_MODULE_11__Grid__["accessibilityOverscanIndicesGetter"],
  overscanRowCount: 10,
  rowRenderer: __WEBPACK_IMPORTED_MODULE_12__defaultRowRenderer__["a" /* default */],
  headerRowRenderer: __WEBPACK_IMPORTED_MODULE_13__defaultHeaderRowRenderer__["a" /* default */],
  rowStyle: {},
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
/* harmony default export */ __webpack_exports__["a"] = Table;
Table.propTypes =  false ? {
  'aria-label': PropTypes.string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: PropTypes.bool,

  /** One or more Columns describing the data displayed in this row */
  children: function children(props) {
    var children = React.Children.toArray(props.children);
    for (var i = 0; i < children.length; i++) {
      var childType = children[i].type;
      if (childType !== Column && !(childType.prototype instanceof Column)) {
        return new Error('Table only accepts children of type Column');
      }
    }
  },

  /** Optional CSS class name */
  className: PropTypes.string,

  /** Disable rendering the header at all */
  disableHeader: PropTypes.bool,

  /**
   * Used to estimate the total height of a Table before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: PropTypes.number.isRequired,

  /** Optional custom CSS class name to attach to inner Grid element. */
  gridClassName: PropTypes.string,

  /** Optional inline style to attach to inner Grid element. */
  gridStyle: PropTypes.object,

  /** Optional CSS class to apply to all column headers */
  headerClassName: PropTypes.string,

  /** Fixed height of header row */
  headerHeight: PropTypes.number.isRequired,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: any[],
   *   style: any
   * }): PropTypes.node
   */
  headerRowRenderer: PropTypes.func,

  /** Optional custom inline style to attach to table header columns. */
  headerStyle: PropTypes.object,

  /** Fixed/available height for out DOM element */
  height: PropTypes.number.isRequired,

  /** Optional id */
  id: PropTypes.string,

  /** Optional renderer to be used in place of table body rows when rowCount is 0 */
  noRowsRenderer: PropTypes.func,

  /**
  * Optional callback when a column's header is clicked.
  * ({ columnData: any, dataKey: string }): void
  */
  onHeaderClick: PropTypes.func,

  /**
   * Callback invoked when a user clicks on a table row.
   * ({ index: number }): void
   */
  onRowClick: PropTypes.func,

  /**
   * Callback invoked when a user double-clicks on a table row.
   * ({ index: number }): void
   */
  onRowDoubleClick: PropTypes.func,

  /**
   * Callback invoked when the mouse leaves a table row.
   * ({ index: number }): void
   */
  onRowMouseOut: PropTypes.func,

  /**
   * Callback invoked when a user moves the mouse over a table row.
   * ({ index: number }): void
   */
  onRowMouseOver: PropTypes.func,

  /**
   * Callback invoked when a user right-clicks on a table row.
   * ({ index: number }): void
   */
  onRowRightClick: PropTypes.func,

  /**
   * Callback invoked with information about the slice of rows that were just rendered.
   * ({ startIndex, stopIndex }): void
   */
  onRowsRendered: PropTypes.func,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, scrollHeight, scrollTop }): void
   */
  onScroll: PropTypes.func.isRequired,

  /** See Grid#overscanIndicesGetter */
  overscanIndicesGetter: PropTypes.func.isRequired,

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: PropTypes.number.isRequired,

  /**
   * Optional CSS class to apply to all table rows (including the header row).
   * This property can be a CSS class name (string) or a function that returns a class name.
   * If a function is provided its signature should be: ({ index: number }): string
   */
  rowClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /**
   * Callback responsible for returning a data row given an index.
   * ({ index: number }): any
   */
  rowGetter: PropTypes.func.isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * ({ index: number }): number
   */
  rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** Number of rows in table. */
  rowCount: PropTypes.number.isRequired,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: Array,
   *   index: number,
   *   isScrolling: boolean,
   *   onRowClick: ?Function,
   *   onRowDoubleClick: ?Function,
   *   onRowMouseOver: ?Function,
   *   onRowMouseOut: ?Function,
   *   rowData: any,
   *   style: any
   * }): PropTypes.node
   */
  rowRenderer: PropTypes.func,

  /** Optional custom inline style to attach to table rows. */
  rowStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,

  /** See Grid#scrollToAlignment */
  scrollToAlignment: PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: PropTypes.number.isRequired,

  /** Vertical offset. */
  scrollTop: PropTypes.number,

  /**
   * Sort function to be called if a sortable header is clicked.
   * ({ sortBy: string, sortDirection: SortDirection }): void
   */
  sort: PropTypes.func,

  /** Table data is currently sorted by this :dataKey (if it is sorted at all) */
  sortBy: PropTypes.string,

  /** Table data is currently sorted in this direction (if it is sorted at all) */
  sortDirection: PropTypes.oneOf([SortDirection.ASC, SortDirection.DESC]),

  /** Optional inline style */
  style: PropTypes.object,

  /** Tab index for focus */
  tabIndex: PropTypes.number,

  /** Width of list */
  width: PropTypes.number.isRequired
} : {};

/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultCellDataGetter__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultCellRenderer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultHeaderRowRenderer_js__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultHeaderRenderer__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultRowRenderer__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Column__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SortDirection__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SortIndicator__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Table__ = __webpack_require__(439);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultCellDataGetter__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__defaultCellRenderer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__defaultHeaderRowRenderer_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__defaultHeaderRenderer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__defaultRowRenderer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__Column__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__SortDirection__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__SortIndicator__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__Table__["a"]; });










/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_8__Table__["a" /* default */];


/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_onScroll__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_dimensions__ = __webpack_require__(443);
/* unused harmony export IS_SCROLLING_TIMEOUT */











/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

var WindowScroller = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(WindowScroller, _PureComponent);

  function WindowScroller(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, WindowScroller);

    // Handle server-side rendering case
    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WindowScroller.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(WindowScroller)).call(this, props));

    var _ref = typeof window !== 'undefined' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["a" /* getDimensions */])(props.scrollElement || window) : { width: 0, height: 0 },
        width = _ref.width,
        height = _ref.height;

    _this.state = {
      height: height,
      width: width,
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    };

    _this._onResize = _this._onResize.bind(_this);
    _this._onChildScroll = _this._onChildScroll.bind(_this);
    _this.__handleWindowScrollEvent = _this.__handleWindowScrollEvent.bind(_this);
    _this.__resetIsScrolling = _this.__resetIsScrolling.bind(_this);
    return _this;
  }

  // Can’t use defaultProps for scrollElement without breaking server-side rendering


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(WindowScroller, [{
    key: 'updatePosition',
    value: function updatePosition(scrollElement) {
      var onResize = this.props.onResize;
      var _state = this.state,
          height = _state.height,
          width = _state.width;


      scrollElement = scrollElement || this.props.scrollElement || window;
      var offset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["b" /* getPositionOffset */])(__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this), scrollElement);
      this._positionFromTop = offset.top;
      this._positionFromLeft = offset.left;

      var dimensions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["a" /* getDimensions */])(scrollElement);
      if (height !== dimensions.height || width !== dimensions.width) {
        this.setState({
          height: dimensions.height,
          width: dimensions.width
        });
        onResize({
          height: dimensions.height,
          width: dimensions.width
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement || window;

      this.updatePosition(scrollElement);

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["a" /* registerScrollListener */])(this, scrollElement);

      window.addEventListener('resize', this._onResize, false);

      this._isMounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var scrollElement = this.props.scrollElement || window;
      var nextScrollElement = nextProps.scrollElement || window;

      if (scrollElement !== nextScrollElement) {
        this.updatePosition(nextScrollElement);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["b" /* unregisterScrollListener */])(this, scrollElement);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["a" /* registerScrollListener */])(this, nextScrollElement);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["b" /* unregisterScrollListener */])(this, this.props.scrollElement || window);
      window.removeEventListener('resize', this._onResize, false);

      this._isMounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state2 = this.state,
          isScrolling = _state2.isScrolling,
          scrollTop = _state2.scrollTop,
          scrollLeft = _state2.scrollLeft,
          height = _state2.height,
          width = _state2.width;


      return children({
        onChildScroll: this._onChildScroll,
        height: height,
        isScrolling: isScrolling,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        width: width
      });
    }
  }, {
    key: '_onChildScroll',
    value: function _onChildScroll(_ref2) {
      var scrollTop = _ref2.scrollTop;

      if (this.state.scrollTop === scrollTop) {
        return;
      }

      var scrollElement = this.scrollElement;

      if (typeof scrollElement.scrollTo === 'function') {
        scrollElement.scrollTo(0, scrollTop + this._positionFromTop);
      } else {
        scrollElement.scrollTop = scrollTop + this._positionFromTop;
      }
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      this.updatePosition();
    }

    // Referenced by utils/onScroll

  }, {
    key: '__handleWindowScrollEvent',
    value: function __handleWindowScrollEvent() {
      if (!this._isMounted) {
        return;
      }

      var onScroll = this.props.onScroll;


      var scrollElement = this.props.scrollElement || window;
      var scrollOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["c" /* getScrollOffset */])(scrollElement);
      var scrollLeft = Math.max(0, scrollOffset.left - this._positionFromLeft);
      var scrollTop = Math.max(0, scrollOffset.top - this._positionFromTop);

      this.setState({
        isScrolling: true,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      onScroll({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });
    }

    // Referenced by utils/onScroll

  }, {
    key: '__resetIsScrolling',
    value: function __resetIsScrolling() {
      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: 'scrollElement',
    get: function get() {
      return this.props.scrollElement || window;
    }
  }]);

  return WindowScroller;
}(__WEBPACK_IMPORTED_MODULE_6_react__["PureComponent"]);

WindowScroller.defaultProps = {
  onResize: function onResize() {},
  onScroll: function onScroll() {},
  scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT
};
/* harmony default export */ __webpack_exports__["a"] = WindowScroller;
WindowScroller.propTypes =  false ? {
  /**
   * Function responsible for rendering children.
   * This function should implement the following signature:
   * ({ height, isScrolling, scrollLeft, scrollTop, width }) => PropTypes.element
   */
  children: PropTypes.func.isRequired,

  /** Callback to be invoked on-resize: ({ height, width }) */
  onResize: PropTypes.func.isRequired,

  /** Callback to be invoked on-scroll: ({ scrollLeft, scrollTop }) */
  onScroll: PropTypes.func.isRequired,

  /** Element to attach scroll event listeners. Defaults to window. */
  scrollElement: PropTypes.any,

  /**
   * Wait this amount of time after the last scroll event before resetting child `pointer-events`.
   */
  scrollingResetTimeInterval: PropTypes.number.isRequired
} : {};

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WindowScroller__ = __webpack_require__(441);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__WindowScroller__["a"]; });
/* unused harmony reexport IS_SCROLLING_TIMEOUT */


/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__WindowScroller__["a" /* default */];


/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDimensions;
/* harmony export (immutable) */ __webpack_exports__["b"] = getPositionOffset;
/* harmony export (immutable) */ __webpack_exports__["c"] = getScrollOffset;
/**
 * Gets the dimensions of the element, accounting for API differences between
 * `window` and other DOM elements.
 */

function getDimensions(element) {
  if (element === window) {
    return {
      height: typeof window.innerHeight === 'number' ? window.innerHeight : 0,
      width: typeof window.innerWidth === 'number' ? window.innerWidth : 0
    };
  }

  var _element$getBoundingC = element.getBoundingClientRect(),
      width = _element$getBoundingC.width,
      height = _element$getBoundingC.height;

  return { width: width, height: height };
}

/**
 * Gets the vertical and horizontal position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top or left position will be a negative number and this element’s top or left will be increased (by that amount).
 */
function getPositionOffset(element, container) {
  var scrollOffset = container === window ? { top: 0, left: 0 } : getScrollOffset(container);
  var containerElement = container === window ? document.documentElement : container;
  var elementRect = element.getBoundingClientRect();
  var containerRect = containerElement.getBoundingClientRect();
  return {
    top: elementRect.top + scrollOffset.top - containerRect.top,
    left: elementRect.left + scrollOffset.left - containerRect.left
  };
}

/**
 * Gets the vertical and horizontal scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */
function getScrollOffset(element) {
  if (element === window) {
    return {
      top: 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop,
      left: 'scrollX' in window ? window.scrollX : document.documentElement.scrollLeft
    };
  } else {
    return {
      top: element.scrollTop,
      left: element.scrollLeft
    };
  }
}

/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_requestAnimationTimeout__ = __webpack_require__(50);
/* harmony export (immutable) */ __webpack_exports__["a"] = registerScrollListener;
/* harmony export (immutable) */ __webpack_exports__["b"] = unregisterScrollListener;


var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    document.body.style.pointerEvents = originalBodyPointerEvents;

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(disablePointerEventsTimeoutId);
  }

  var maximumTimeout = 0;
  mountedInstances.forEach(function (instance) {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });

  disablePointerEventsTimeoutId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_requestAnimationTimeout__["requestAnimationTimeout"])(enablePointerEventsAfterDelayCallback, maximumTimeout);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null) {
    originalBodyPointerEvents = document.body.style.pointerEvents;

    document.body.style.pointerEvents = 'none';
  }
  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent(event);
    }
  });
}

function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }
  mountedInstances.push(component);
}

function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });
  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);
    if (disablePointerEventsTimeoutId) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}

/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caf; });


// Properly handle server-side rendering.
var win = void 0;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
}

// requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  return win.setTimeout(callback, 1000 / 60);
};

var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function (id) {
  win.clearTimeout(id);
};

var raf = request;
var caf = cancel;

/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUpdatedOffsetForIndex;
/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */
function getUpdatedOffsetForIndex(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === undefined ? 'auto' : _ref$align,
      cellOffset = _ref.cellOffset,
      cellSize = _ref.cellSize,
      containerSize = _ref.containerSize,
      currentOffset = _ref.currentOffset;

  var maxOffset = cellOffset;
  var minOffset = maxOffset - containerSize + cellSize;

  switch (align) {
    case 'start':
      return maxOffset;
    case 'end':
      return minOffset;
    case 'center':
      return maxOffset - (containerSize - cellSize) / 2;
    default:
      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
  }
}

/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/binary-search-bounds
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/

function _GEA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x >= y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _GEP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) >= 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function dispatchBsearchGE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _GTA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x > y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _GTP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) > 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function dispatchBsearchGT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LTA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x < y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _LTP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) < 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function dispatchBsearchLT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LEA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x <= y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _LEP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) <= 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function dispatchBsearchLE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _EQA(a, l, h, y) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x === y) {
      return m;
    } else if (x <= y) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function _EQP(a, l, h, y, c) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c(x, y);
    if (p === 0) {
      return m;
    } else if (p <= 0) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function dispatchBsearchEQ(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _EQP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _EQA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

/* harmony default export */ __webpack_exports__["a"] = {
  ge: dispatchBsearchGE,
  gt: dispatchBsearchGT,
  lt: dispatchBsearchLT,
  le: dispatchBsearchLE,
  eq: dispatchBsearchEQ
};

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createDetectElementResize;
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 **/

function createDetectElementResize(nonce) {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = this;
  }

  var attachEvent = typeof document !== 'undefined' && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };
      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = document.createElement('fakeelement');
      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }

    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles() {
    if (!document.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');

      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }
        createStyles();
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__ = __webpack_require__(447);
/* harmony export (immutable) */ __webpack_exports__["a"] = createWrapper;
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/interval-tree-1d
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax in an upstream dependency.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/



var NOT_FOUND = 0;
var SUCCESS = 1;
var EMPTY = 2;

function IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
  this.mid = mid;
  this.left = left;
  this.right = right;
  this.leftPoints = leftPoints;
  this.rightPoints = rightPoints;
  this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}

var proto = IntervalTreeNode.prototype;

function copy(a, b) {
  a.mid = b.mid;
  a.left = b.left;
  a.right = b.right;
  a.leftPoints = b.leftPoints;
  a.rightPoints = b.rightPoints;
  a.count = b.count;
}

function rebuild(node, intervals) {
  var ntree = createIntervalTree(intervals);
  node.mid = ntree.mid;
  node.left = ntree.left;
  node.right = ntree.right;
  node.leftPoints = ntree.leftPoints;
  node.rightPoints = ntree.rightPoints;
  node.count = ntree.count;
}

function rebuildWithInterval(node, interval) {
  var intervals = node.intervals([]);
  intervals.push(interval);
  rebuild(node, intervals);
}

function rebuildWithoutInterval(node, interval) {
  var intervals = node.intervals([]);
  var idx = intervals.indexOf(interval);
  if (idx < 0) {
    return NOT_FOUND;
  }
  intervals.splice(idx, 1);
  rebuild(node, intervals);
  return SUCCESS;
}

proto.intervals = function (result) {
  result.push.apply(result, this.leftPoints);
  if (this.left) {
    this.left.intervals(result);
  }
  if (this.right) {
    this.right.intervals(result);
  }
  return result;
};

proto.insert = function (interval) {
  var weight = this.count - this.leftPoints.length;
  this.count += 1;
  if (interval[1] < this.mid) {
    if (this.left) {
      if (4 * (this.left.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.left.insert(interval);
      }
    } else {
      this.left = createIntervalTree([interval]);
    }
  } else if (interval[0] > this.mid) {
    if (this.right) {
      if (4 * (this.right.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.right.insert(interval);
      }
    } else {
      this.right = createIntervalTree([interval]);
    }
  } else {
    var l = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.leftPoints, interval, compareBegin);
    var r = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.rightPoints, interval, compareEnd);
    this.leftPoints.splice(l, 0, interval);
    this.rightPoints.splice(r, 0, interval);
  }
};

proto.remove = function (interval) {
  var weight = this.count - this.leftPoints;
  if (interval[1] < this.mid) {
    if (!this.left) {
      return NOT_FOUND;
    }
    var rw = this.right ? this.right.count : 0;
    if (4 * rw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r = this.left.remove(interval);
    if (r === EMPTY) {
      this.left = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }
    return r;
  } else if (interval[0] > this.mid) {
    if (!this.right) {
      return NOT_FOUND;
    }
    var lw = this.left ? this.left.count : 0;
    if (4 * lw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r = this.right.remove(interval);
    if (r === EMPTY) {
      this.right = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }
    return r;
  } else {
    if (this.count === 1) {
      if (this.leftPoints[0] === interval) {
        return EMPTY;
      } else {
        return NOT_FOUND;
      }
    }
    if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
      if (this.left && this.right) {
        var p = this;
        var n = this.left;
        while (n.right) {
          p = n;
          n = n.right;
        }
        if (p === this) {
          n.right = this.right;
        } else {
          var l = this.left;
          var r = this.right;
          p.count -= n.count;
          p.right = n.left;
          n.left = l;
          n.right = r;
        }
        copy(this, n);
        this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
      } else if (this.left) {
        copy(this, this.left);
      } else {
        copy(this, this.right);
      }
      return SUCCESS;
    }
    for (var l = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.leftPoints, interval, compareBegin); l < this.leftPoints.length; ++l) {
      if (this.leftPoints[l][0] !== interval[0]) {
        break;
      }
      if (this.leftPoints[l] === interval) {
        this.count -= 1;
        this.leftPoints.splice(l, 1);
        for (var r = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.rightPoints, interval, compareEnd); r < this.rightPoints.length; ++r) {
          if (this.rightPoints[r][1] !== interval[1]) {
            break;
          } else if (this.rightPoints[r] === interval) {
            this.rightPoints.splice(r, 1);
            return SUCCESS;
          }
        }
      }
    }
    return NOT_FOUND;
  }
};

function reportLeftRange(arr, hi, cb) {
  for (var i = 0; i < arr.length && arr[i][0] <= hi; ++i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

function reportRightRange(arr, lo, cb) {
  for (var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

function reportRange(arr, cb) {
  for (var i = 0; i < arr.length; ++i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

proto.queryPoint = function (x, cb) {
  if (x < this.mid) {
    if (this.left) {
      var r = this.left.queryPoint(x, cb);
      if (r) {
        return r;
      }
    }
    return reportLeftRange(this.leftPoints, x, cb);
  } else if (x > this.mid) {
    if (this.right) {
      var r = this.right.queryPoint(x, cb);
      if (r) {
        return r;
      }
    }
    return reportRightRange(this.rightPoints, x, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

proto.queryInterval = function (lo, hi, cb) {
  if (lo < this.mid && this.left) {
    var r = this.left.queryInterval(lo, hi, cb);
    if (r) {
      return r;
    }
  }
  if (hi > this.mid && this.right) {
    var r = this.right.queryInterval(lo, hi, cb);
    if (r) {
      return r;
    }
  }
  if (hi < this.mid) {
    return reportLeftRange(this.leftPoints, hi, cb);
  } else if (lo > this.mid) {
    return reportRightRange(this.rightPoints, lo, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

function compareNumbers(a, b) {
  return a - b;
}

function compareBegin(a, b) {
  var d = a[0] - b[0];
  if (d) {
    return d;
  }
  return a[1] - b[1];
}

function compareEnd(a, b) {
  var d = a[1] - b[1];
  if (d) {
    return d;
  }
  return a[0] - b[0];
}

function createIntervalTree(intervals) {
  if (intervals.length === 0) {
    return null;
  }
  var pts = [];
  for (var i = 0; i < intervals.length; ++i) {
    pts.push(intervals[i][0], intervals[i][1]);
  }
  pts.sort(compareNumbers);

  var mid = pts[pts.length >> 1];

  var leftIntervals = [];
  var rightIntervals = [];
  var centerIntervals = [];
  for (var i = 0; i < intervals.length; ++i) {
    var s = intervals[i];
    if (s[1] < mid) {
      leftIntervals.push(s);
    } else if (mid < s[0]) {
      rightIntervals.push(s);
    } else {
      centerIntervals.push(s);
    }
  }

  //Split center intervals
  var leftPoints = centerIntervals;
  var rightPoints = centerIntervals.slice();
  leftPoints.sort(compareBegin);
  rightPoints.sort(compareEnd);

  return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
}

//User friendly wrapper that makes it possible to support empty trees
function IntervalTree(root) {
  this.root = root;
}

var tproto = IntervalTree.prototype;

tproto.insert = function (interval) {
  if (this.root) {
    this.root.insert(interval);
  } else {
    this.root = new IntervalTreeNode(interval[0], null, null, [interval], [interval]);
  }
};

tproto.remove = function (interval) {
  if (this.root) {
    var r = this.root.remove(interval);
    if (r === EMPTY) {
      this.root = null;
    }
    return r !== NOT_FOUND;
  }
  return false;
};

tproto.queryPoint = function (p, cb) {
  if (this.root) {
    return this.root.queryPoint(p, cb);
  }
};

tproto.queryInterval = function (lo, hi, cb) {
  if (lo <= hi && this.root) {
    return this.root.queryInterval(lo, hi, cb);
  }
};

Object.defineProperty(tproto, 'count', {
  get: function get() {
    if (this.root) {
      return this.root.count;
    }
    return 0;
  }
});

Object.defineProperty(tproto, 'intervals', {
  get: function get() {
    if (this.root) {
      return this.root.intervals([]);
    }
    return [];
  }
});

function createWrapper(intervals) {
  if (!intervals || intervals.length === 0) {
    return new IntervalTree(null);
  }
  return new IntervalTree(createIntervalTree(intervals));
}

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(451);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 451 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../css-loader/index.js!../../../../postcss-loader/index.js??ref--3-2!../../../../less-loader/index.js??ref--3-3!./SVG.less", function() {
			var newContent = require("!!../../../../css-loader/index.js!../../../../postcss-loader/index.js??ref--3-2!../../../../less-loader/index.js??ref--3-3!./SVG.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./Cell.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./Cell.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(322);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./ContextMenuItem.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./ContextMenuItem.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(323);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./ContextMenu.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./ContextMenu.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(324);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./Dialog.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./Dialog.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./DropdownMenuItem.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./DropdownMenuItem.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./DropdownMenu.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./DropdownMenu.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./FileManager.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./FileManager.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(328);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./FileNavigator.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./FileNavigator.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(329);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./GridView.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./GridView.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(330);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./HeaderCell.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./HeaderCell.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(331);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./ListView.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./ListView.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(332);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./LoadingCell.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./LoadingCell.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(333);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./LocationBar.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./LocationBar.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(334);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./NameCell.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./NameCell.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(335);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./NoFilesFoundStub.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./NoFilesFoundStub.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(336);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./NotificationProgressItem.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./NotificationProgressItem.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(337);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./Notification.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./Notification.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./Notifications.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./Notifications.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(339);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./ProgressIcon.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./ProgressIcon.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./SetNameDialog.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./SetNameDialog.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(341);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./Toolbar.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./Toolbar.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(342);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./withSelectionHOC.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js??ref--3-2!../../../../node_modules/less-loader/index.js??ref--3-3!./withSelectionHOC.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(181);
module.exports = __webpack_require__(180);


/***/ })
/******/ ]);
});