'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var React = require('react')
var theming = require('@storybook/theming')
var shared = require('@storybook/components/dist/cjs/typography/shared')
var html = require('@storybook/components')
var CopyToClipboard = require('react-copy-to-clipboard')
var designSystem = require('@storybook/design-system')

function _interopDefaultLegacy(e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e } }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React)
var CopyToClipboard__default = /*#__PURE__*/_interopDefaultLegacy(CopyToClipboard)

function _defineProperty(obj, key, value)
{
  if (key in obj)
  {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else
  {
    obj[key] = value
  }

  return obj
}

function _extends()
{
  _extends = Object.assign || function (target)
  {
    for (var i = 1; i < arguments.length; i++)
    {
      var source = arguments[i]

      for (var key in source)
      {
        if (Object.prototype.hasOwnProperty.call(source, key))
        {
          target[key] = source[key]
        }
      }
    }

    return target
  }

  return _extends.apply(this, arguments)
}

function ownKeys(object, enumerableOnly)
{
  var keys = Object.keys(object)

  if (Object.getOwnPropertySymbols)
  {
    var symbols = Object.getOwnPropertySymbols(object)
    if (enumerableOnly) symbols = symbols.filter(function (sym)
    {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable
    })
    keys.push.apply(keys, symbols)
  }

  return keys
}

function _objectSpread2(target)
{
  for (var i = 1; i < arguments.length; i++)
  {
    var source = arguments[i] != null ? arguments[i] : {}

    if (i % 2)
    {
      ownKeys(Object(source), true).forEach(function (key)
      {
        _defineProperty(target, key, source[key])
      })
    } else if (Object.getOwnPropertyDescriptors)
    {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
    } else
    {
      ownKeys(Object(source)).forEach(function (key)
      {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
      })
    }
  }

  return target
}

function _taggedTemplateLiteral(strings, raw)
{
  if (!raw)
  {
    raw = strings.slice(0)
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }))
}

function _slicedToArray(arr, i)
{
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
}

function _arrayWithHoles(arr)
{
  if (Array.isArray(arr)) return arr
}

function _iterableToArrayLimit(arr, i)
{
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return
  var _arr = []
  var _n = true
  var _d = false
  var _e = undefined

  try
  {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true)
    {
      _arr.push(_s.value)

      if (i && _arr.length === i) break
    }
  } catch (err)
  {
    _d = true
    _e = err
  } finally
  {
    try
    {
      if (!_n && _i["return"] != null) _i["return"]()
    } finally
    {
      if (_d) throw _e
    }
  }

  return _arr
}

function _unsupportedIterableToArray(o, minLen)
{
  if (!o) return
  if (typeof o === "string") return _arrayLikeToArray(o, minLen)
  var n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === "Object" && o.constructor) n = o.constructor.name
  if (n === "Map" || n === "Set") return Array.from(o)
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray(arr, len)
{
  if (len == null || len > arr.length) len = arr.length

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]

  return arr2
}

function _nonIterableRest()
{
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function createCommonjsModule(fn, basedir, module)
{
  return module = {
    path: basedir,
    exports: {},
    require: function (path, base)
    {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base)
    }
  }, fn(module, module.exports), module.exports
}

function commonjsRequire()
{
  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs')
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ?
  Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119
function z(a) { if ("object" === typeof a && null !== a) { var u = a.$$typeof; switch (u) { case c: switch (a = a.type, a) { case l: case m: case e: case g: case f: case p: return a; default: switch (a = a && a.$$typeof, a) { case k: case n: case t: case r: case h: return a; default: return u } }case d: return u } } } function A(a) { return z(a) === m } var AsyncMode = l; var ConcurrentMode = m; var ContextConsumer = k; var ContextProvider = h; var Element = c; var ForwardRef = n; var Fragment = e; var Lazy = t; var Memo = r; var Portal = d
var Profiler = g; var StrictMode = f; var Suspense = p; var isAsyncMode = function (a) { return A(a) || z(a) === l }; var isConcurrentMode = A; var isContextConsumer = function (a) { return z(a) === k }; var isContextProvider = function (a) { return z(a) === h }; var isElement = function (a) { return "object" === typeof a && null !== a && a.$$typeof === c }; var isForwardRef = function (a) { return z(a) === n }; var isFragment = function (a) { return z(a) === e }; var isLazy = function (a) { return z(a) === t }
var isMemo = function (a) { return z(a) === r }; var isPortal = function (a) { return z(a) === d }; var isProfiler = function (a) { return z(a) === g }; var isStrictMode = function (a) { return z(a) === f }; var isSuspense = function (a) { return z(a) === p }
var isValidElementType = function (a) { return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v) }; var typeOf = z

var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf
}

var reactIs_development = createCommonjsModule(function (module, exports)
{



  if (process.env.NODE_ENV !== "production")
  {
    (function ()
    {

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol.for
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7

      function isValidElementType(type)
      {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE)
      }

      function typeOf(object)
      {
        if (typeof object === 'object' && object !== null)
        {
          var $$typeof = object.$$typeof

          switch ($$typeof)
          {
            case REACT_ELEMENT_TYPE:
              var type = object.type

              switch (type)
              {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type

                default:
                  var $$typeofType = type && type.$$typeof

                  switch ($$typeofType)
                  {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType

                    default:
                      return $$typeof
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof
          }
        }

        return undefined
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE
      var ContextConsumer = REACT_CONTEXT_TYPE
      var ContextProvider = REACT_PROVIDER_TYPE
      var Element = REACT_ELEMENT_TYPE
      var ForwardRef = REACT_FORWARD_REF_TYPE
      var Fragment = REACT_FRAGMENT_TYPE
      var Lazy = REACT_LAZY_TYPE
      var Memo = REACT_MEMO_TYPE
      var Portal = REACT_PORTAL_TYPE
      var Profiler = REACT_PROFILER_TYPE
      var StrictMode = REACT_STRICT_MODE_TYPE
      var Suspense = REACT_SUSPENSE_TYPE
      var hasWarnedAboutDeprecatedIsAsyncMode = false // AsyncMode should be deprecated

      function isAsyncMode(object)
      {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode)
          {
            hasWarnedAboutDeprecatedIsAsyncMode = true // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.')
          }
        }

        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
      }
      function isConcurrentMode(object)
      {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE
      }
      function isContextConsumer(object)
      {
        return typeOf(object) === REACT_CONTEXT_TYPE
      }
      function isContextProvider(object)
      {
        return typeOf(object) === REACT_PROVIDER_TYPE
      }
      function isElement(object)
      {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE
      }
      function isForwardRef(object)
      {
        return typeOf(object) === REACT_FORWARD_REF_TYPE
      }
      function isFragment(object)
      {
        return typeOf(object) === REACT_FRAGMENT_TYPE
      }
      function isLazy(object)
      {
        return typeOf(object) === REACT_LAZY_TYPE
      }
      function isMemo(object)
      {
        return typeOf(object) === REACT_MEMO_TYPE
      }
      function isPortal(object)
      {
        return typeOf(object) === REACT_PORTAL_TYPE
      }
      function isProfiler(object)
      {
        return typeOf(object) === REACT_PROFILER_TYPE
      }
      function isStrictMode(object)
      {
        return typeOf(object) === REACT_STRICT_MODE_TYPE
      }
      function isSuspense(object)
      {
        return typeOf(object) === REACT_SUSPENSE_TYPE
      }

      exports.AsyncMode = AsyncMode
      exports.ConcurrentMode = ConcurrentMode
      exports.ContextConsumer = ContextConsumer
      exports.ContextProvider = ContextProvider
      exports.Element = Element
      exports.ForwardRef = ForwardRef
      exports.Fragment = Fragment
      exports.Lazy = Lazy
      exports.Memo = Memo
      exports.Portal = Portal
      exports.Profiler = Profiler
      exports.StrictMode = StrictMode
      exports.Suspense = Suspense
      exports.isAsyncMode = isAsyncMode
      exports.isConcurrentMode = isConcurrentMode
      exports.isContextConsumer = isContextConsumer
      exports.isContextProvider = isContextProvider
      exports.isElement = isElement
      exports.isForwardRef = isForwardRef
      exports.isFragment = isFragment
      exports.isLazy = isLazy
      exports.isMemo = isMemo
      exports.isPortal = isPortal
      exports.isProfiler = isProfiler
      exports.isStrictMode = isStrictMode
      exports.isSuspense = isSuspense
      exports.isValidElementType = isValidElementType
      exports.typeOf = typeOf
    })()
  }
})

var reactIs = createCommonjsModule(function (module)
{

  if (process.env.NODE_ENV === 'production')
  {
    module.exports = reactIs_production_min
  } else
  {
    module.exports = reactIs_development
  }
})

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols
var hasOwnProperty = Object.prototype.hasOwnProperty
var propIsEnumerable = Object.prototype.propertyIsEnumerable

function toObject(val)
{
  if (val === null || val === undefined)
  {
    throw new TypeError('Object.assign cannot be called with null or undefined')
  }

  return Object(val)
}

function shouldUseNative()
{
  try
  {
    if (!Object.assign)
    {
      return false
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc')  // eslint-disable-line no-new-wrappers
    test1[5] = 'de'
    if (Object.getOwnPropertyNames(test1)[0] === '5')
    {
      return false
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {}
    for (var i = 0; i < 10; i++)
    {
      test2['_' + String.fromCharCode(i)] = i
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n)
    {
      return test2[n]
    })
    if (order2.join('') !== '0123456789')
    {
      return false
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {}
    'abcdefghijklmnopqrst'.split('').forEach(function (letter)
    {
      test3[letter] = letter
    })
    if (Object.keys(Object.assign({}, test3)).join('') !==
      'abcdefghijklmnopqrst')
    {
      return false
    }

    return true
  } catch (err)
  {
    // We don't expect any of the above to throw, but better to be safe.
    return false
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source)
{
  var from
  var to = toObject(target)
  var symbols

  for (var s = 1; s < arguments.length; s++)
  {
    from = Object(arguments[s])

    for (var key in from)
    {
      if (hasOwnProperty.call(from, key))
      {
        to[key] = from[key]
      }
    }

    if (getOwnPropertySymbols)
    {
      symbols = getOwnPropertySymbols(from)
      for (var i = 0; i < symbols.length; i++)
      {
        if (propIsEnumerable.call(from, symbols[i]))
        {
          to[symbols[i]] = from[symbols[i]]
        }
      }
    }
  }

  return to
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'

var ReactPropTypesSecret_1 = ReactPropTypesSecret

var printWarning = function () { }

if (process.env.NODE_ENV !== 'production')
{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1
  var loggedTypeFailures = {}
  var has = Function.call.bind(Object.prototype.hasOwnProperty)

  printWarning = function (text)
  {
    var message = 'Warning: ' + text
    if (typeof console !== 'undefined')
    {
      console.error(message)
    }
    try
    {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message)
    } catch (x) { }
  }
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack)
{
  if (process.env.NODE_ENV !== 'production')
  {
    for (var typeSpecName in typeSpecs)
    {
      if (has(typeSpecs, typeSpecName))
      {
        var error
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try
        {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function')
          {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            )
            err.name = 'Invariant Violation'
            throw err
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1)
        } catch (ex)
        {
          error = ex
        }
        if (error && !(error instanceof Error))
        {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures))
        {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true

          var stack = getStack ? getStack() : ''

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          )
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function ()
{
  if (process.env.NODE_ENV !== 'production')
  {
    loggedTypeFailures = {}
  }
}

var checkPropTypes_1 = checkPropTypes

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty)
var printWarning$1 = function () { }

if (process.env.NODE_ENV !== 'production')
{
  printWarning$1 = function (text)
  {
    var message = 'Warning: ' + text
    if (typeof console !== 'undefined')
    {
      console.error(message)
    }
    try
    {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message)
    } catch (x) { }
  }
}

function emptyFunctionThatReturnsNull()
{
  return null
}

var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess)
{
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator
  var FAUX_ITERATOR_SYMBOL = '@@iterator' // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable)
  {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL])
    if (typeof iteratorFn === 'function')
    {
      return iteratorFn
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>'

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  }

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y)
  {
    // SameValue algorithm
    if (x === y)
    {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y
    } else
    {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message)
  {
    this.message = message
    this.stack = ''
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype

  function createChainableTypeChecker(validate)
  {
    if (process.env.NODE_ENV !== 'production')
    {
      var manualPropTypeCallCache = {}
      var manualPropTypeWarningCount = 0
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret)
    {
      componentName = componentName || ANONYMOUS
      propFullName = propFullName || propName

      if (secret !== ReactPropTypesSecret_1)
      {
        if (throwOnDirectAccess)
        {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          )
          err.name = 'Invariant Violation'
          throw err
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined')
        {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          )
          {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            )
            manualPropTypeCallCache[cacheKey] = true
            manualPropTypeWarningCount++
          }
        }
      }
      if (props[propName] == null)
      {
        if (isRequired)
        {
          if (props[propName] === null)
          {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'))
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'))
        }
        return null
      } else
      {
        return validate(props, propName, componentName, location, propFullName)
      }
    }

    var chainedCheckType = checkType.bind(null, false)
    chainedCheckType.isRequired = checkType.bind(null, true)

    return chainedCheckType
  }

  function createPrimitiveTypeChecker(expectedType)
  {
    function validate(props, propName, componentName, location, propFullName, secret)
    {
      var propValue = props[propName]
      var propType = getPropType(propValue)
      if (propType !== expectedType)
      {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue)

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'))
      }
      return null
    }
    return createChainableTypeChecker(validate)
  }

  function createAnyTypeChecker()
  {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull)
  }

  function createArrayOfTypeChecker(typeChecker)
  {
    function validate(props, propName, componentName, location, propFullName)
    {
      if (typeof typeChecker !== 'function')
      {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.')
      }
      var propValue = props[propName]
      if (!Array.isArray(propValue))
      {
        var propType = getPropType(propValue)
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'))
      }
      for (var i = 0; i < propValue.length; i++)
      {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1)
        if (error instanceof Error)
        {
          return error
        }
      }
      return null
    }
    return createChainableTypeChecker(validate)
  }

  function createElementTypeChecker()
  {
    function validate(props, propName, componentName, location, propFullName)
    {
      var propValue = props[propName]
      if (!isValidElement(propValue))
      {
        var propType = getPropType(propValue)
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'))
      }
      return null
    }
    return createChainableTypeChecker(validate)
  }

  function createElementTypeTypeChecker()
  {
    function validate(props, propName, componentName, location, propFullName)
    {
      var propValue = props[propName]
      if (!reactIs.isValidElementType(propValue))
      {
        var propType = getPropType(propValue)
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'))
      }
      return null
    }
    return createChainableTypeChecker(validate)
  }

  function createInstanceTypeChecker(expectedClass)
  {
    function validate(props, propName, componentName, location, propFullName)
    {
      if (!(props[propName] instanceof expectedClass))
      {
        var expectedClassName = expectedClass.name || ANONYMOUS
        var actualClassName = getClassName(props[propName])
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'))
      }
      return null
    }
    return createChainableTypeChecker(validate)
  }

  function createEnumTypeChecker(expectedValues)
  {
    if (!Array.isArray(expectedValues))
    {
      if (process.env.NODE_ENV !== 'production')
      {
        if (arguments.length > 1)
        {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          )
        } else
        {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.')
        }
      }
      return emptyFunctionThatReturnsNull
    }

    function validate(props, propName, componentName, location, propFullName)
    {
      var propValue = props[propName]
      for (var i = 0; i < expectedValues.length; i++)
      {
        if (is(propValue, expectedValues[i]))
        {
          return null
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value)
      {
        var type = getPreciseType(value)
        if (type === 'symbol')
        {
          return String(value)
        }
        return value
      })
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'))
    }
    return createChainableTypeChecker(validate)
  }

  function createObjectOfTypeChecker(typeChecker)
  {
    function validate(props, propName, componentName, location, propFullName)
    {
      if (typeof typeChecker !== 'function')
      {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.')
      }
      var propValue = props[propName]
      var propType = getPropType(propValue)
      if (propType !== 'object')
      {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'))
      }
      for (var key in propValue)
      {
        if (has$1(propValue, key))
        {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1)
          if (error instanceof Error)
          {
            return error
          }
        }
      }
      return null
    }
    return createChainableTypeChecker(validate)
  }

  function createUnionTypeChecker(arrayOfTypeCheckers)
  {
    if (!Array.isArray(arrayOfTypeCheckers))
    {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0
      return emptyFunctionThatReturnsNull
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++)
    {
      var checker = arrayOfTypeCheckers[i]
      if (typeof checker !== 'function')
      {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        )
        return emptyFunctionThatReturnsNull
      }
    }

    function validate(props, propName, componentName, location, propFullName)
    {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++)
      {
        var checker = arrayOfTypeCheckers[i]
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null)
        {
          return null
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'))
    }
    return createChainableTypeChecker(validate)
  }

  function createNodeChecker()
  {
    function validate(props, propName, componentName, location, propFullName)
    {
      if (!isNode(props[propName]))
      {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'))
      }
      return null
    }
    return createChainableTypeChecker(validate)
  }

  function createShapeTypeChecker(shapeTypes)
  {
    function validate(props, propName, componentName, location, propFullName)
    {
      var propValue = props[propName]
      var propType = getPropType(propValue)
      if (propType !== 'object')
      {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'))
      }
      for (var key in shapeTypes)
      {
        var checker = shapeTypes[key]
        if (!checker)
        {
          continue
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1)
        if (error)
        {
          return error
        }
      }
      return null
    }
    return createChainableTypeChecker(validate)
  }

  function createStrictShapeTypeChecker(shapeTypes)
  {
    function validate(props, propName, componentName, location, propFullName)
    {
      var propValue = props[propName]
      var propType = getPropType(propValue)
      if (propType !== 'object')
      {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'))
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes)
      for (var key in allKeys)
      {
        var checker = shapeTypes[key]
        if (!checker)
        {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          )
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1)
        if (error)
        {
          return error
        }
      }
      return null
    }

    return createChainableTypeChecker(validate)
  }

  function isNode(propValue)
  {
    switch (typeof propValue)
    {
      case 'number':
      case 'string':
      case 'undefined':
        return true
      case 'boolean':
        return !propValue
      case 'object':
        if (Array.isArray(propValue))
        {
          return propValue.every(isNode)
        }
        if (propValue === null || isValidElement(propValue))
        {
          return true
        }

        var iteratorFn = getIteratorFn(propValue)
        if (iteratorFn)
        {
          var iterator = iteratorFn.call(propValue)
          var step
          if (iteratorFn !== propValue.entries)
          {
            while (!(step = iterator.next()).done)
            {
              if (!isNode(step.value))
              {
                return false
              }
            }
          } else
          {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done)
            {
              var entry = step.value
              if (entry)
              {
                if (!isNode(entry[1]))
                {
                  return false
                }
              }
            }
          }
        } else
        {
          return false
        }

        return true
      default:
        return false
    }
  }

  function isSymbol(propType, propValue)
  {
    // Native Symbol.
    if (propType === 'symbol')
    {
      return true
    }

    // falsy value can't be a Symbol
    if (!propValue)
    {
      return false
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol')
    {
      return true
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol)
    {
      return true
    }

    return false
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue)
  {
    var propType = typeof propValue
    if (Array.isArray(propValue))
    {
      return 'array'
    }
    if (propValue instanceof RegExp)
    {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object'
    }
    if (isSymbol(propType, propValue))
    {
      return 'symbol'
    }
    return propType
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue)
  {
    if (typeof propValue === 'undefined' || propValue === null)
    {
      return '' + propValue
    }
    var propType = getPropType(propValue)
    if (propType === 'object')
    {
      if (propValue instanceof Date)
      {
        return 'date'
      } else if (propValue instanceof RegExp)
      {
        return 'regexp'
      }
    }
    return propType
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value)
  {
    var type = getPreciseType(value)
    switch (type)
    {
      case 'array':
      case 'object':
        return 'an ' + type
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type
      default:
        return type
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue)
  {
    if (!propValue.constructor || !propValue.constructor.name)
    {
      return ANONYMOUS
    }
    return propValue.constructor.name
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache
  ReactPropTypes.PropTypes = ReactPropTypes

  return ReactPropTypes
}

function emptyFunction() { }
function emptyFunctionWithReset() { }
emptyFunctionWithReset.resetWarningCache = emptyFunction

var factoryWithThrowingShims = function ()
{
  function shim(props, propName, componentName, location, propFullName, secret)
  {
    if (secret === ReactPropTypesSecret_1)
    {
      // It is still safe when called from React.
      return
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    )
    err.name = 'Invariant Violation'
    throw err
  } shim.isRequired = shim
  function getShim()
  {
    return shim
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
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
  }

  ReactPropTypes.PropTypes = ReactPropTypes

  return ReactPropTypes
}

var propTypes = createCommonjsModule(function (module)
{
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== 'production')
  {
    var ReactIs = reactIs

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess)
  } else
  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims()
  }
})

function _templateObject()
{
  var data = _taggedTemplateLiteral(["\n  cursor: ", ";\n"])

  _templateObject = function _templateObject()
  {
    return data
  }

  return data
}
var Code = theming.styled(html.components.code)(_templateObject(), function (_ref)
{
  var noCopy = _ref.noCopy
  return noCopy ? 'auto' : 'pointer'
})

var Var = function Var(_ref2)
{
  var children = _ref2.children,
    noCopy = _ref2.noCopy,
    onCopyText = _ref2.onCopyText

  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    copied = _useState2[0],
    setCopied = _useState2[1]

  var handleCopy = function handleCopy(_text, result)
  {
    if (!result)
    {
      return
    }

    setCopied(true)
    setTimeout(function ()
    {
      setCopied(false)
    }, 1800)
  }

  return noCopy ? /*#__PURE__*/React__default['default'].createElement(Code, {
    noCopy: noCopy
  }, children) : /*#__PURE__*/React__default['default'].createElement(CopyToClipboard__default['default'], {
    text: children,
    onCopy: handleCopy
  }, /*#__PURE__*/React__default['default'].createElement(Code, {
    noCopy: noCopy,
    title: "Copy value"
  }, copied ? onCopyText : children))
}

Var.propTypes = {
  children: propTypes.string.isRequired,
  noCopy: propTypes.bool,
  onCopyText: propTypes.string
}
Var.defaultProps = {
  noCopy: false,
  onCopyText: 'Copied!'
}

function _templateObject3()
{
  var data = _taggedTemplateLiteral(["\n  padding: 0 8px;\n  margin: 0 0 16px;\n"])

  _templateObject3 = function _templateObject3()
  {
    return data
  }

  return data
}

function _templateObject2()
{
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -8px;\n"])

  _templateObject2 = function _templateObject2()
  {
    return data
  }

  return data
}

function _templateObject$1()
{
  var data = _taggedTemplateLiteral(["\n  & + & {\n    margin-top: 32px;\n  }\n"])

  _templateObject$1 = function _templateObject()
  {
    return data
  }

  return data
}
var Container = theming.styled.div(_templateObject$1())
var ContainerItems = theming.styled.div(_templateObject2())
var Item = theming.styled.div(_templateObject3())
var Color = theming.styled.div(shared.withReset, function (_ref)
{
  var value = _ref.value
  return {
    width: 128,
    height: 128,
    marginBottom: 4,
    borderRadius: 4,
    border: '1px solid #0000001a',
    backgroundColor: value
  }
})
var Name = theming.styled.p(shared.withReset, function (_ref2)
{
  var theme = _ref2.theme
  return {
    fontSize: theme.typography.size.s2,
    fontWeight: theme.typography.weight.bold,
    lineHeight: '24px',
    color: theme.color.defaultText
  }
})
var Swatches = function Swatches(_ref3)
{
  var children = _ref3.children
  return /*#__PURE__*/React__default['default'].createElement(Container, null, /*#__PURE__*/React__default['default'].createElement(ContainerItems, null, children))
}
var Swatch = function Swatch(_ref4)
{
  var name = _ref4.name,
    value = _ref4.value
  return /*#__PURE__*/React__default['default'].createElement(Item, null, /*#__PURE__*/React__default['default'].createElement(Color, {
    value: value
  }), /*#__PURE__*/React__default['default'].createElement(Name, null, name), /*#__PURE__*/React__default['default'].createElement(Var, null, value))
}
Swatches.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.element), propTypes.element]).isRequired
}
Swatches.defaultProps = {}
Swatch.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired
}

function _templateObject6()
{
  var data = _taggedTemplateLiteral(["\n  color: red;\n"])

  _templateObject6 = function _templateObject6()
  {
    return data
  }

  return data
}

function _templateObject5()
{
  var data = _taggedTemplateLiteral(["\n  color: green;\n"])

  _templateObject5 = function _templateObject5()
  {
    return data
  }

  return data
}

function _templateObject4()
{
  var data = _taggedTemplateLiteral(["\n  border-top-color: red;\n"])

  _templateObject4 = function _templateObject4()
  {
    return data
  }

  return data
}

function _templateObject3$1()
{
  var data = _taggedTemplateLiteral(["\n  border-top-color: green;\n"])

  _templateObject3$1 = function _templateObject3()
  {
    return data
  }

  return data
}

function _templateObject2$1()
{
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 50%;\n  margin: 0 16px;\n  padding: 24px 32px 16px;\n  background-color: #fafafa;\n  border-top-style: solid;\n  border-top-width: 5px;\n"])

  _templateObject2$1 = function _templateObject2()
  {
    return data
  }

  return data
}

function _templateObject$2()
{
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 -16px;\n\n  & + & {\n    margin-top: 32px;\n  }\n"])

  _templateObject$2 = function _templateObject()
  {
    return data
  }

  return data
}
var Div = html.components.div
var P = html.components.p
var H4 = html.components.h4
var Container$1 = theming.styled.div(_templateObject$2())
var UsageItem = theming.styled(Div)(_templateObject2$1())
var CorrectItem = theming.styled(UsageItem)(_templateObject3$1())
var IncorrectItem = theming.styled(UsageItem)(_templateObject4())
var CorrectTitle = theming.styled(H4)(_templateObject5())
var IncorrectTitle = theming.styled(H4)(_templateObject6())
var Correct = function Correct(_ref)
{
  var title = _ref.title,
    children = _ref.children
  return /*#__PURE__*/React__default['default'].createElement(CorrectItem, null, /*#__PURE__*/React__default['default'].createElement(CorrectTitle, null, title), /*#__PURE__*/React__default['default'].createElement(P, null, children))
}
var Incorrect = function Incorrect(_ref2)
{
  var title = _ref2.title,
    children = _ref2.children
  return /*#__PURE__*/React__default['default'].createElement(IncorrectItem, null, /*#__PURE__*/React__default['default'].createElement(IncorrectTitle, null, title), /*#__PURE__*/React__default['default'].createElement(P, null, children))
}
var Usage = function Usage(_ref3)
{
  var children = _ref3.children
  return /*#__PURE__*/React__default['default'].createElement(Container$1, null, children)
}
var usagePropTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]).isRequired,
  title: propTypes.string
}
Usage.propTypes = _objectSpread2({}, usagePropTypes)
Correct.propTypes = _objectSpread2(_objectSpread2({}, usagePropTypes), {}, {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.string]).isRequired
})
Incorrect.propTypes = _objectSpread2(_objectSpread2({}, usagePropTypes), {}, {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]).isRequired
})
Correct.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  title: 'Do'
}
Incorrect.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  title: "Don't"
}

function _templateObject3$2()
{
  var data = _taggedTemplateLiteral(["\n  background-color: #fffae6;\n  border-color: #fbc02d;\n"])

  _templateObject3$2 = function _templateObject3()
  {
    return data
  }

  return data
}

function _templateObject2$2()
{
  var data = _taggedTemplateLiteral(["\n  background-color: #e8f4fd;\n  border-color: #2196f3;\n"])

  _templateObject2$2 = function _templateObject2()
  {
    return data
  }

  return data
}

function _templateObject$3()
{
  var data = _taggedTemplateLiteral(["\n  padding: 0 24px;\n  border: 1px solid #0000;\n  border-left-width: 5px;\n"])

  _templateObject$3 = function _templateObject()
  {
    return data
  }

  return data
}
var Div$1 = html.components.div
var P$1 = html.components.p

var Panel = function Panel(_ref)
{
  var className = _ref.className,
    children = _ref.children,
    prefix = _ref.prefix
  return /*#__PURE__*/React__default['default'].createElement(Div$1, {
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(P$1, null, /*#__PURE__*/React__default['default'].createElement("strong", null, prefix, ":"), " ", children))
}

var StyledPanel = theming.styled(Panel)(_templateObject$3())
var InfoPanel = theming.styled(StyledPanel)(_templateObject2$2())
var WarningPanel = theming.styled(StyledPanel)(_templateObject3$2())
var Info = function Info(props)
{
  return /*#__PURE__*/React__default['default'].createElement(InfoPanel, props)
}
var Warning = function Warning(props)
{
  return /*#__PURE__*/React__default['default'].createElement(WarningPanel, props)
}
var panelPropTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]).isRequired,
  className: propTypes.string,
  prefix: propTypes.string
}
var panelDefaultProps = {
  prefix: 'Note'
}
Panel.propTypes = _objectSpread2({}, panelPropTypes)
Info.propTypes = _objectSpread2({}, panelPropTypes)
Warning.propTypes = _objectSpread2({}, panelPropTypes)
Panel.defaultProps = _objectSpread2({}, panelDefaultProps)
Info.defaultProps = _objectSpread2({}, panelDefaultProps)
Warning.defaultProps = _objectSpread2({}, panelDefaultProps)

function _templateObject3$3()
{
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n"])

  _templateObject3$3 = function _templateObject3()
  {
    return data
  }

  return data
}

function _templateObject2$3()
{
  var data = _taggedTemplateLiteral(["\n  width: 150px;\n"])

  _templateObject2$3 = function _templateObject2()
  {
    return data
  }

  return data
}

function _templateObject$4()
{
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"])

  _templateObject$4 = function _templateObject()
  {
    return data
  }

  return data
}

var widthWithUnit = function widthWithUnit()
{
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10
  var unit = arguments.length > 1 ? arguments[1] : undefined
  return "".concat(value).concat(unit)
}

var Table = theming.styled(html.components.table)(_templateObject$4())
var Cell = theming.styled.td(_templateObject2$3())
var StyledTile = theming.styled.div(_templateObject3$3(), function (_ref)
{
  var value = _ref.value,
    unit = _ref.unit
  return widthWithUnit(value, unit)
}, function (_ref2)
{
  var square = _ref2.square,
    value = _ref2.value,
    unit = _ref2.unit
  return square ? widthWithUnit(value, unit) : '10px'
}, function (props)
{
  return props.color
})
var Tile = function Tile(props)
{
  return /*#__PURE__*/React__default['default'].createElement(StyledTile, props)
}
var Row = function Row(_ref3)
{
  var children = _ref3.children,
    value = _ref3.value,
    unit = _ref3.unit,
    tileProps = _ref3.tileProps
  return /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement(Cell, null, children), /*#__PURE__*/React__default['default'].createElement(Cell, null, value, unit), /*#__PURE__*/React__default['default'].createElement("td", null, /*#__PURE__*/React__default['default'].createElement(StyledTile, _extends({}, tileProps, {
    value: value,
    unit: unit
  }))))
}
var SpacingScale = function SpacingScale(_ref4)
{
  var columns = _ref4.columns,
    children = _ref4.children,
    unit = _ref4.unit,
    tileProps = _ref4.tileProps
  return /*#__PURE__*/React__default['default'].createElement(Table, null, /*#__PURE__*/React__default['default'].createElement("thead", null, /*#__PURE__*/React__default['default'].createElement("tr", null, columns.map(function (c)
  {
    return /*#__PURE__*/React__default['default'].createElement("th", {
      key: c
    }, c)
  }))), /*#__PURE__*/React__default['default'].createElement("tbody", null, React__default['default'].Children.map(children, function (child)
  {
    return /*#__PURE__*/React__default['default'].cloneElement(child, {
      unit: unit,
      tileProps: tileProps
    })
  })))
}
var tilePropsPropTypes = {
  color: propTypes.string,
  square: propTypes.bool,
  unit: propTypes.oneOf(['px', 'rem'])
}
var tilePropsDefaultProps = {
  color: '#000',
  square: false,
  unit: 'px'
}
Tile.propTypes = _objectSpread2({}, tilePropsPropTypes)
Tile.defaultProps = _objectSpread2({}, tilePropsDefaultProps)
Row.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired,
  tileProps: propTypes.shape(tilePropsPropTypes),
  unit: propTypes.oneOf(['px', 'rem']),
  value: propTypes.number.isRequired
}
Row.defaultProps = {
  tileProps: tilePropsDefaultProps,
  unit: 'px'
}
SpacingScale.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]).isRequired,
  columns: propTypes.arrayOf(propTypes.string),
  tileProps: propTypes.shape(tilePropsPropTypes),
  unit: propTypes.oneOf(['px', 'rem'])
}
SpacingScale.defaultProps = {
  columns: ['Name', 'Value', 'Example'],
  tileProps: tilePropsDefaultProps,
  unit: 'px'
}

var DocsContext_1 = createCommonjsModule(function (module, exports)
{

  Object.defineProperty(exports, "__esModule", {
    value: true
  })
  exports.DocsContext = void 0



  var DocsContext = (0, React__default['default'].createContext)({})
  exports.DocsContext = DocsContext
})

function _templateObject2$4()
{
  var data = _taggedTemplateLiteral(["\n  margin-left: 0.4em;\n"])

  _templateObject2$4 = function _templateObject2()
  {
    return data
  }

  return data
}

function _templateObject$5()
{
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"])

  _templateObject$5 = function _templateObject()
  {
    return data
  }

  return data
}
var P$2 = html.components.p
var Link = theming.styled(html.components.a)(_templateObject$5())
var Text = theming.styled.span(_templateObject2$4())

var EditLink = function EditLink(_ref)
{
  var path = _ref.path,
    text = _ref.text,
    icon = _ref.icon

  var _useContext = React.useContext(DocsContext_1.DocsContext),
    repository = _useContext.parameters.repository

  if (!repository)
  {
    return /*#__PURE__*/React__default['default'].createElement(P$2, null, "Can\u2019t render EditLink: `repository` parameter is missing.")
  }

  if (!path)
  {
    return /*#__PURE__*/React__default['default'].createElement(P$2, null, "Can\u2019t render EditLink: `path` prop is missing.")
  }

  var baseUrl = repository.baseUrl,
    _repository$branch = repository.branch,
    branch = _repository$branch === void 0 ? 'master' : _repository$branch
  var href = "".concat(baseUrl, "/edit/").concat(branch, "/").concat(path)
  return /*#__PURE__*/React__default['default'].createElement(P$2, null, /*#__PURE__*/React__default['default'].createElement(Link, {
    href: href,
    rel: "noopener noreferrer",
    target: "_blank"
  }, icon && /*#__PURE__*/React__default['default'].createElement(designSystem.Icon, {
    icon: "github",
    "aria-hidden": true
  }), /*#__PURE__*/React__default['default'].createElement(Text, null, text)))
}

EditLink.propTypes = {
  icon: propTypes.bool,
  text: propTypes.string,
  path: propTypes.string.isRequired
}
EditLink.defaultProps = {
  icon: true,
  text: 'Edit this page on GitHub'
}

exports.Correct = Correct
exports.EditLink = EditLink
exports.Incorrect = Incorrect
exports.Info = Info
exports.Row = Row
exports.SpacingScale = SpacingScale
exports.Swatch = Swatch
exports.Swatches = Swatches
exports.Tile = Tile
exports.Usage = Usage
exports.Var = Var
exports.Warning = Warning
//# sourceMappingURL=index.js.map
