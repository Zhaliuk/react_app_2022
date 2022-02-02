/*! For license information please see index.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
        962: e => {
            var t = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable;

            function o(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }

            e.exports = function () {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                        return t[e]
                    })).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                        n[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function (e, u) {
                for (var i, a, c = o(e), f = 1; f < arguments.length; f++) {
                    for (var l in i = Object(arguments[f])) r.call(i, l) && (c[l] = i[l]);
                    if (t) {
                        a = t(i);
                        for (var s = 0; s < a.length; s++) n.call(i, a[s]) && (c[a[s]] = i[a[s]])
                    }
                }
                return c
            }
        }, 145: (e, t, r) => {
            var n = r(962), o = 60103, u = 60106;
            t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
            var i = 60109, a = 60110, c = 60112;
            t.Suspense = 60113;
            var f = 60115, l = 60116;
            if ("function" == typeof Symbol && Symbol.for) {
                var s = Symbol.for;
                o = s("react.element"), u = s("react.portal"), t.Fragment = s("react.fragment"), t.StrictMode = s("react.strict_mode"), t.Profiler = s("react.profiler"), i = s("react.provider"), a = s("react.context"), c = s("react.forward_ref"), t.Suspense = s("react.suspense"), f = s("react.memo"), l = s("react.lazy")
            }
            var p = "function" == typeof Symbol && Symbol.iterator;

            function d(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            var y = {
                isMounted: function () {
                    return !1
                }, enqueueForceUpdate: function () {
                }, enqueueReplaceState: function () {
                }, enqueueSetState: function () {
                }
            }, v = {};

            function h(e, t, r) {
                this.props = e, this.context = t, this.refs = v, this.updater = r || y
            }

            function _() {
            }

            function b(e, t, r) {
                this.props = e, this.context = t, this.refs = v, this.updater = r || y
            }

            h.prototype.isReactComponent = {}, h.prototype.setState = function (e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error(d(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }, h.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, _.prototype = h.prototype;
            var m = b.prototype = new _;
            m.constructor = b, n(m, h.prototype), m.isPureReactComponent = !0;
            var j = {current: null}, O = Object.prototype.hasOwnProperty,
                g = {key: !0, ref: !0, __self: !0, __source: !0};

            function w(e, t, r) {
                var n, u = {}, i = null, a = null;
                if (null != t) for (n in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (i = "" + t.key), t) O.call(t, n) && !g.hasOwnProperty(n) && (u[n] = t[n]);
                var c = arguments.length - 2;
                if (1 === c) u.children = r; else if (1 < c) {
                    for (var f = Array(c), l = 0; l < c; l++) f[l] = arguments[l + 2];
                    u.children = f
                }
                if (e && e.defaultProps) for (n in c = e.defaultProps) void 0 === u[n] && (u[n] = c[n]);
                return {$$typeof: o, type: e, key: i, ref: a, props: u, _owner: j.current}
            }

            function S(e) {
                return "object" == typeof e && null !== e && e.$$typeof === o
            }

            var E = /\/+/g;

            function P(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function (e) {
                    var t = {"=": "=0", ":": "=2"};
                    return "$" + e.replace(/[=:]/g, (function (e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function k(e, t, r, n, i) {
                var a = typeof e;
                "undefined" !== a && "boolean" !== a || (e = null);
                var c = !1;
                if (null === e) c = !0; else switch (a) {
                    case"string":
                    case"number":
                        c = !0;
                        break;
                    case"object":
                        switch (e.$$typeof) {
                            case o:
                            case u:
                                c = !0
                        }
                }
                if (c) return i = i(c = e), e = "" === n ? "." + P(c, 0) : n, Array.isArray(i) ? (r = "", null != e && (r = e.replace(E, "$&/") + "/"), k(i, t, r, "", (function (e) {
                    return e
                }))) : null != i && (S(i) && (i = function (e, t) {
                    return {$$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
                }(i, r + (!i.key || c && c.key === i.key ? "" : ("" + i.key).replace(E, "$&/") + "/") + e)), t.push(i)), 1;
                if (c = 0, n = "" === n ? "." : n + ":", Array.isArray(e)) for (var f = 0; f < e.length; f++) {
                    var l = n + P(a = e[f], f);
                    c += k(a, t, r, l, i)
                } else if (l = function (e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                }(e), "function" == typeof l) for (e = l.call(e), f = 0; !(a = e.next()).done;) c += k(a = a.value, t, r, l = n + P(a, f++), i); else if ("object" === a) throw t = "" + e, Error(d(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                return c
            }

            function $(e, t, r) {
                if (null == e) return e;
                var n = [], o = 0;
                return k(e, n, "", "", (function (e) {
                    return t.call(r, e, o++)
                })), n
            }

            function C(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    t = t(), e._status = 0, e._result = t, t.then((function (t) {
                        0 === e._status && (t = t.default, e._status = 1, e._result = t)
                    }), (function (t) {
                        0 === e._status && (e._status = 2, e._result = t)
                    }))
                }
                if (1 === e._status) return e._result;
                throw e._result
            }

            var R = {current: null};

            function x() {
                var e = R.current;
                if (null === e) throw Error(d(321));
                return e
            }

            var M = {
                ReactCurrentDispatcher: R,
                ReactCurrentBatchConfig: {transition: 0},
                ReactCurrentOwner: j,
                IsSomeRendererActing: {current: !1},
                assign: n
            };
            t.Children = {
                map: $, forEach: function (e, t, r) {
                    $(e, (function () {
                        t.apply(this, arguments)
                    }), r)
                }, count: function (e) {
                    var t = 0;
                    return $(e, (function () {
                        t++
                    })), t
                }, toArray: function (e) {
                    return $(e, (function (e) {
                        return e
                    })) || []
                }, only: function (e) {
                    if (!S(e)) throw Error(d(143));
                    return e
                }
            }, t.Component = h, t.PureComponent = b, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.cloneElement = function (e, t, r) {
                if (null == e) throw Error(d(267, e));
                var u = n({}, e.props), i = e.key, a = e.ref, c = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (a = t.ref, c = j.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var f = e.type.defaultProps;
                    for (l in t) O.call(t, l) && !g.hasOwnProperty(l) && (u[l] = void 0 === t[l] && void 0 !== f ? f[l] : t[l])
                }
                var l = arguments.length - 2;
                if (1 === l) u.children = r; else if (1 < l) {
                    f = Array(l);
                    for (var s = 0; s < l; s++) f[s] = arguments[s + 2];
                    u.children = f
                }
                return {$$typeof: o, type: e.type, key: i, ref: a, props: u, _owner: c}
            }, t.createContext = function (e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: a,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {$$typeof: i, _context: e}, e.Consumer = e
            }, t.createElement = w, t.createFactory = function (e) {
                var t = w.bind(null, e);
                return t.type = e, t
            }, t.createRef = function () {
                return {current: null}
            }, t.forwardRef = function (e) {
                return {$$typeof: c, render: e}
            }, t.isValidElement = S, t.lazy = function (e) {
                return {$$typeof: l, _payload: {_status: -1, _result: e}, _init: C}
            }, t.memo = function (e, t) {
                return {$$typeof: f, type: e, compare: void 0 === t ? null : t}
            }, t.useCallback = function (e, t) {
                return x().useCallback(e, t)
            }, t.useContext = function (e, t) {
                return x().useContext(e, t)
            }, t.useDebugValue = function () {
            }, t.useEffect = function (e, t) {
                return x().useEffect(e, t)
            }, t.useImperativeHandle = function (e, t, r) {
                return x().useImperativeHandle(e, t, r)
            }, t.useLayoutEffect = function (e, t) {
                return x().useLayoutEffect(e, t)
            }, t.useMemo = function (e, t) {
                return x().useMemo(e, t)
            }, t.useReducer = function (e, t, r) {
                return x().useReducer(e, t, r)
            }, t.useRef = function (e) {
                return x().useRef(e)
            }, t.useState = function (e) {
                return x().useState(e)
            }, t.version = "17.0.2"
        }, 114: (e, t, r) => {
            e.exports = r(145)
        }, 107: function (e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0, get: function () {
                        return t[r]
                    }
                })
            } : function (e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }), o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                Object.defineProperty(e, "default", {enumerable: !0, value: t})
            } : function (e, t) {
                e.default = t
            }), u = this && this.__importStar || function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                return o(t, e), t
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.Header = void 0;
            const i = u(r(114));
            t.Header = function () {
                return i.createElement("header", null, i.createElement("h1", null, "App React"))
            }
        }, 802: function (e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0, get: function () {
                        return t[r]
                    }
                })
            } : function (e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }), o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                Object.defineProperty(e, "default", {enumerable: !0, value: t})
            } : function (e, t) {
                e.default = t
            }), u = this && this.__importStar || function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                return o(t, e), t
            };
            Object.defineProperty(t, "__esModule", {value: !0});
            const i = u(r(114)), a = u(r(107));
            window.addEventListener("load", (() => {
                a.render(i.createElement(Header, null), document.getElementById("react_root"))
            }))
        }
    }, t = {};
    !function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var u = t[n] = {exports: {}};
        return e[n].call(u.exports, u, u.exports, r), u.exports
    }(802)
})();