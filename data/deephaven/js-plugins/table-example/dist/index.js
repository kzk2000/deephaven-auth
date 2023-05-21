"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const ReactDOM = require("react-dom");
var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports() {
    return jsxRuntimeExports;
  },
  set exports(v) {
    jsxRuntimeExports = v;
  }
};
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
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
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
(function(module2) {
  {
    module2.exports = reactJsxRuntime_production_min;
  }
})(jsxRuntime);
var classnamesExports = {};
var classnames = {
  get exports() {
    return classnamesExports;
  },
  set exports(v) {
    classnamesExports = v;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module2) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module2.exports) {
      classNames2.default = classNames2;
      module2.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
const classNames = classnamesExports;
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}
const config = {
  disabled: false
};
const TransitionGroupContext = React.createContext(null);
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;
    if (timeout != null && typeof timeout !== "number") {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear !== void 0 ? timeout.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
    );
  };
  return Transition2;
}(React.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
const Transition$1 = Transition;
var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass = function removeClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return removeClass$1(node, c);
  });
};
var CSSTransition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames2 = _this.props.classNames;
      var isStringClassNames = typeof classNames2 === "string";
      var prefix = isStringClassNames && classNames2 ? classNames2 + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames2[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames2[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames2[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass2(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node)
        forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass(node, baseClassName);
    }
    if (activeClassName) {
      removeClass(node, activeClassName);
    }
    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props;
    _this$props.classNames;
    var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return /* @__PURE__ */ React.createElement(Transition$1, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(React.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = {};
const CSSTransition$1 = CSSTransition;
const black = "#1a171a";
const white = "#f0f0ee";
const yellow = "#fcd65b";
const green = "#9edc6f";
const blue = "#76d9e4";
const purple = "#aa9af4";
const orange = "#f37e3f";
const red = "#f95d84";
const primary = "#4878ea";
const secondary = "#5b5a5c";
const success = "#9edc6f";
const info = "#fcd65b";
const warning = "#f37e3f";
const danger = "#f95d84";
const light = "#fcfcfa";
const mid = "#929192";
const dark = "#373438";
const background = "#1a171a";
const foreground = "#f0f0ee";
const transition = "0.15s";
const ThemeExport$1 = {
  "gray-100": "#fcfcfa",
  "gray-200": "#f0f0ee",
  "gray-300": "#c0bfbf",
  "gray-400": "#929192",
  "gray-500": "#5b5a5c",
  "gray-600": "#555356",
  "gray-700": "#403e41",
  "gray-800": "#373438",
  "gray-850": "#322f33",
  "gray-900": "#211f22",
  black,
  white,
  yellow,
  green,
  blue,
  purple,
  orange,
  red,
  primary,
  "primary-hover": "#235de6",
  "primary-dark": "#343e5d",
  secondary,
  success,
  info,
  warning,
  danger,
  light,
  mid,
  dark,
  "text-muted": "#929192",
  "content-bg": "#2d2a2e",
  background,
  foreground,
  transition
};
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var transitions = {
  transitionMs: 150,
  transitionMidMs: 200,
  transitionLongMs: 300,
  transitionSlowMs: 1e3
};
const ThemeExport = Object.freeze(_objectSpread(_objectSpread({}, transitions), ThemeExport$1));
function Modal(_ref) {
  var {
    className = "theme-bg-light",
    children,
    role = "role",
    keyboard = true,
    isOpen = false,
    centered = false,
    size,
    onOpened,
    onClosed,
    toggle,
    "data-testid": dataTestId
  } = _ref;
  var element = React.useRef();
  var background2 = React.useRef(null);
  var [backgroundClicked, setBackgroundClicked] = React.useState(false);
  var handleKeyDown = React.useCallback((event) => {
    switch (event.key) {
      case "Escape":
        toggle === null || toggle === void 0 ? void 0 : toggle();
        break;
    }
  }, [toggle]);
  React.useEffect(function addKeydownEventListener() {
    if (isOpen && keyboard) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [handleKeyDown, isOpen, keyboard]);
  React.useEffect(function open() {
    if (isOpen && onOpened) {
      onOpened();
    }
  }, [onOpened, isOpen]);
  React.useEffect(function closed() {
    if (!isOpen && onClosed) {
      onClosed();
    }
  }, [onClosed, isOpen]);
  if (isOpen && !element.current) {
    element.current = document.createElement("div");
    element.current.setAttribute("style", "padding-right: 15px; display: block");
    element.current.setAttribute("role", "presentation");
    document.body.appendChild(element.current);
  }
  var onExited = () => {
    if (element.current) {
      document.body.removeChild(element.current);
      element.current = void 0;
    }
  };
  return element.current ? /* @__PURE__ */ ReactDOM.createPortal(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CSSTransition$1, {
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    in: isOpen,
    classNames: {
      appearActive: "show",
      appearDone: "show"
    },
    timeout: ThemeExport.transitionMs,
    onExited
  }, /* @__PURE__ */ React.createElement("div", {
    className: classNames("modal-backdrop fade"),
    style: {
      zIndex: 1050
    }
  })), /* @__PURE__ */ React.createElement(CSSTransition$1, {
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    in: isOpen,
    classNames: {
      appearDone: "show"
    },
    timeout: ThemeExport.transitionMs,
    onExited
  }, /* @__PURE__ */ React.createElement("div", {
    ref: background2,
    className: "modal fade",
    onMouseDown: (e) => {
      if (e.target === background2.current) {
        setBackgroundClicked(true);
      } else {
        setBackgroundClicked(false);
      }
    },
    onMouseUp: (e) => {
      if (backgroundClicked && e.target === background2.current && toggle !== void 0) {
        toggle();
      }
    },
    role: "dialog",
    style: {
      display: "block"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: classNames("modal-dialog ".concat(className), {
      "modal-lg": size === "lg",
      "modal-sm": size === "sm",
      "modal-xl": size === "xl",
      "modal-dialog-centered": centered
    }),
    style: {
      zIndex: 1040
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-content",
    role: "presentation",
    "data-testid": dataTestId
  }, children))))), element.current) : null;
}
function ModalBody(_ref) {
  var {
    className = "modal-body",
    style,
    children,
    "data-testid": dataTestId
  } = _ref;
  return /* @__PURE__ */ React.createElement("div", {
    className,
    "data-testid": dataTestId,
    style
  }, children);
}
function ModalHeader(_ref) {
  var {
    className,
    children,
    closeButton = true,
    style,
    toggle,
    "data-testid": dataTestId
  } = _ref;
  return /* @__PURE__ */ React.createElement("div", {
    className: "modal-header ".concat(className),
    style
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "modal-title"
  }, children), closeButton && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: toggle
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, "×")));
}
function ModalFooter(_ref) {
  var {
    className = "modal-footer",
    children,
    "data-testid": dataTestId
  } = _ref;
  return /* @__PURE__ */ React.createElement("div", {
    className,
    "data-testid": dataTestId
  }, children);
}
const TablePlugin = (props, ref) => {
  const { filter, table } = props;
  const [isModalOpen, setModalOpen] = React.useState(false);
  const confirmButton = React.useRef(null);
  const handleOpenModal = React.useCallback(() => {
    setModalOpen(true);
  }, []);
  const handleCloseModal = React.useCallback(() => {
    setModalOpen(false);
  }, []);
  const getMenu = React.useCallback(
    (data) => {
      const { value, column, model } = data;
      const { name, type } = column;
      const actions = [];
      actions.push({
        title: "Display value",
        group: 0,
        order: 0,
        action: () => alert(`${value}`)
      });
      actions.push({
        title: "Show Dialog",
        group: 0,
        order: 10,
        action: handleOpenModal
      });
      actions.push({
        title: "Display Table",
        group: 0,
        order: 20,
        action: () => alert(table)
      });
      actions.push({
        title: "Display Model",
        group: 0,
        order: 30,
        action: () => alert(model)
      });
      const subMenu = [];
      actions.push({
        title: "Filter Sub Menu",
        group: 0,
        order: 40,
        actions: subMenu
      });
      subMenu.push({
        title: "Filter by value",
        group: 0,
        order: 0,
        action: () => filter([
          {
            name,
            type,
            value: `${value}`
          }
        ])
      });
      subMenu.push({
        title: "Clear Filter",
        group: 0,
        order: 10,
        action: () => filter([])
      });
      return actions;
    },
    [filter, handleOpenModal, table]
  );
  React.useImperativeHandle(ref, () => ({
    getMenu
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Example Plugin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Modal,
      {
        isOpen: isModalOpen,
        className: "theme-bg-light",
        onOpened: () => {
          var _a;
          (_a = confirmButton.current) == null ? void 0 : _a.focus();
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { children: "Plugin Modal Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: "Plugin Modal Body" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "btn btn-outline-primary",
                "data-dismiss": "modal",
                onClick: handleCloseModal,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "btn btn-primary",
                onClick: handleCloseModal,
                ref: confirmButton,
                children: "Confirm"
              }
            )
          ] })
        ]
      }
    )
  ] });
};
const TablePlugin$1 = React.forwardRef(TablePlugin);
exports.TablePlugin = TablePlugin$1;
