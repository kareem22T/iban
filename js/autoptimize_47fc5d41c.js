/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              a = 1;
            a <= 3;
            a++
          ) {
            if (+o[a] < +n[a]) return 1;
            if (+n[a] < +o[a]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    s.migrateVersion = "3.4.1";
    var t = Object.create(null);
    (s.migrateDisablePatches = function () {
      for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0;
    }),
      (s.migrateEnablePatches = function () {
        for (var e = 0; e < arguments.length; e++) delete t[arguments[e]];
      }),
      (s.migrateIsPatchEnabled = function (e) {
        return !t[e];
      }),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0") && !e("5.0.0")) ||
          n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),
        s.migrateWarnings &&
          n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (s.migrateMute ? "" : " with logging active") +
            ", version " +
            s.migrateVersion
        ));
    var o = {};
    function u(e, t) {
      var r = n.console;
      !s.migrateIsPatchEnabled(e) ||
        (s.migrateDeduplicateWarnings && o[t]) ||
        ((o[t] = !0),
        s.migrateWarnings.push(t + " [" + e + "]"),
        r &&
          r.warn &&
          !s.migrateMute &&
          (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()));
    }
    function r(e, t, r, n, o) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n, o), r;
        },
        set: function (e) {
          u(n, o), (r = e);
        },
      });
    }
    function a(e, t, r, n, o) {
      var a = e[t];
      e[t] = function () {
        return (
          o && u(n, o),
          (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        );
      };
    }
    function c(e, t, r, n, o) {
      if (!o) throw new Error("No warning message provided");
      return a(e, t, r, n, o), 0;
    }
    function i(e, t, r, n) {
      return a(e, t, r, n), 0;
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (o = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        u("quirks", "jQuery is not compatible with Quirks Mode");
    var d,
      l,
      p,
      f = {},
      m = s.fn.init,
      y = s.find,
      h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    for (d in (i(
      s.fn,
      "init",
      function (e) {
        var t = Array.prototype.slice.call(arguments);
        return (
          s.migrateIsPatchEnabled("selector-empty-id") &&
            "string" == typeof e &&
            "#" === e &&
            (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
            (t[0] = [])),
          m.apply(this, t)
        );
      },
      "selector-empty-id"
    ),
    (s.fn.init.prototype = s.fn),
    i(
      s,
      "find",
      function (t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t))
          try {
            n.document.querySelector(t);
          } catch (e) {
            t = t.replace(g, function (e, t, r, n) {
              return "[" + t + r + '"' + n + '"]';
            });
            try {
              n.document.querySelector(t),
                u(
                  "selector-hash",
                  "Attribute selector with '#' must be quoted: " + r[0]
                ),
                (r[0] = t);
            } catch (e) {
              u(
                "selector-hash",
                "Attribute selector with '#' was not fixed: " + r[0]
              );
            }
          }
        return y.apply(this, r);
      },
      "selector-hash"
    ),
    y))
      Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
    c(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "size",
      "jQuery.fn.size() is deprecated and removed; use the .length property"
    ),
      c(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "parseJSON",
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      c(
        s,
        "holdReady",
        s.holdReady,
        "holdReady",
        "jQuery.holdReady is deprecated"
      ),
      c(
        s,
        "unique",
        s.uniqueSort,
        "unique",
        "jQuery.unique is deprecated; use jQuery.uniqueSort"
      ),
      r(
        s.expr,
        "filters",
        s.expr.pseudos,
        "expr-pre-pseudos",
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
      ),
      r(
        s.expr,
        ":",
        s.expr.pseudos,
        "expr-pre-pseudos",
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e("3.1.1") &&
        c(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(v, "$1");
          },
          "trim",
          "jQuery.trim is deprecated; use String.prototype.trim"
        ),
      e("3.2.0") &&
        (c(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "nodeName",
          "jQuery.nodeName is deprecated"
        ),
        c(
          s,
          "isArray",
          Array.isArray,
          "isArray",
          "jQuery.isArray is deprecated; use Array.isArray"
        )),
      e("3.3.0") &&
        (c(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "isNumeric",
          "jQuery.isNumeric() is deprecated"
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        c(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "type",
          "jQuery.type is deprecated"
        ),
        c(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "isFunction",
          "jQuery.isFunction() is deprecated"
        ),
        c(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "isWindow",
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
        ((l = s.ajax),
        (p = /(=)\?(?=&|$)|\?\?/),
        i(
          s,
          "ajax",
          function () {
            var e = l.apply(this, arguments);
            return (
              e.promise &&
                (c(
                  e,
                  "success",
                  e.done,
                  "jqXHR-methods",
                  "jQXHR.success is deprecated and removed"
                ),
                c(
                  e,
                  "error",
                  e.fail,
                  "jqXHR-methods",
                  "jQXHR.error is deprecated and removed"
                ),
                c(
                  e,
                  "complete",
                  e.always,
                  "jqXHR-methods",
                  "jQXHR.complete is deprecated and removed"
                )),
              e
            );
          },
          "jqXHR-methods"
        ),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (p.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  p.test(e.data))) &&
              u(
                "jsonp-promotion",
                "JSON-to-JSONP auto-promotion is deprecated"
              );
          }));
    var j = s.fn.removeAttr,
      b = s.fn.toggleClass,
      w = /\S+/g;
    function x(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    i(
      s.fn,
      "removeAttr",
      function (e) {
        var r = this,
          n = !1;
        return (
          s.each(e.match(w), function (e, t) {
            s.expr.match.bool.test(t) &&
              r.each(function () {
                if (!1 !== s(this).prop(t)) return !(n = !0);
              }),
              n &&
                (u(
                  "removeAttr-bool",
                  "jQuery.fn.removeAttr no longer sets boolean properties: " + t
                ),
                r.prop(t, !1));
          }),
          j.apply(this, arguments)
        );
      },
      "removeAttr-bool"
    ),
      i(
        s.fn,
        "toggleClass",
        function (t) {
          return void 0 !== t && "boolean" != typeof t
            ? b.apply(this, arguments)
            : (u(
                "toggleClass-bool",
                "jQuery.fn.toggleClass( boolean ) is deprecated"
              ),
              this.each(function () {
                var e = (this.getAttribute && this.getAttribute("class")) || "";
                e && s.data(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!e && !1 !== t && s.data(this, "__className__")) || ""
                    );
              }));
        },
        "toggleClass-bool"
      );
    var Q,
      A,
      R = !1,
      C = /^[a-z]/,
      N =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (R = !0), (e = r.apply(this, arguments)), (R = !1), e;
          });
      }),
      i(
        s,
        "swap",
        function (e, t, r, n) {
          var o,
            a,
            i = {};
          for (a in (R ||
            u("swap", "jQuery.swap() is undocumented and deprecated"),
          t))
            (i[a] = e.style[a]), (e.style[a] = t[a]);
          for (a in ((o = r.apply(e, n || [])), t)) e.style[a] = i[a];
          return o;
        },
        "swap"
      ),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u("cssProps", "jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      e("4.0.0")
        ? ((A = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          }),
          "undefined" != typeof Proxy
            ? (s.cssNumber = new Proxy(A, {
                get: function () {
                  return (
                    u("css-number", "jQuery.cssNumber is deprecated"),
                    Reflect.get.apply(this, arguments)
                  );
                },
                set: function () {
                  return (
                    u("css-number", "jQuery.cssNumber is deprecated"),
                    Reflect.set.apply(this, arguments)
                  );
                },
              }))
            : (s.cssNumber = A))
        : (A = s.cssNumber),
      (Q = s.fn.css),
      i(
        s.fn,
        "css",
        function (e, t) {
          var r,
            n,
            o = this;
          return e && "object" == typeof e && !Array.isArray(e)
            ? (s.each(e, function (e, t) {
                s.fn.css.call(o, e, t);
              }),
              this)
            : ("number" == typeof t &&
                ((r = x(e)),
                (n = r),
                (C.test(n) && N.test(n[0].toUpperCase() + n.slice(1))) ||
                  A[r] ||
                  u(
                    "css-number",
                    'Number-typed values are deprecated for jQuery.fn.css( "' +
                      e +
                      '", value )'
                  )),
              Q.apply(this, arguments));
        },
        "css-number"
      );
    var S,
      P,
      k,
      H,
      E = s.data;
    i(
      s,
      "data",
      function (e, t, r) {
        var n, o, a;
        if (t && "object" == typeof t && 2 === arguments.length) {
          for (a in ((n = s.hasData(e) && E.call(this, e)), (o = {}), t))
            a !== x(a)
              ? (u(
                  "data-camelCase",
                  "jQuery.data() always sets/gets camelCased names: " + a
                ),
                (n[a] = t[a]))
              : (o[a] = t[a]);
          return E.call(this, e, o), t;
        }
        return t &&
          "string" == typeof t &&
          t !== x(t) &&
          (n = s.hasData(e) && E.call(this, e)) &&
          t in n
          ? (u(
              "data-camelCase",
              "jQuery.data() always sets/gets camelCased names: " + t
            ),
            2 < arguments.length && (n[t] = r),
            n[t])
          : E.apply(this, arguments);
      },
      "data-camelCase"
    ),
      s.fx &&
        ((k = s.Tween.prototype.run),
        (H = function (e) {
          return e;
        }),
        i(
          s.Tween.prototype,
          "run",
          function () {
            1 < s.easing[this.easing].length &&
              (u(
                "easing-one-arg",
                "'jQuery.easing." +
                  this.easing.toString() +
                  "' should use only one argument"
              ),
              (s.easing[this.easing] = H)),
              k.apply(this, arguments);
          },
          "easing-one-arg"
        ),
        (S = s.fx.interval),
        (P = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return (
                n.document.hidden || u("fx-interval", P),
                s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
              );
            },
            set: function (e) {
              u("fx-interval", P), (S = e);
            },
          }));
    var M = s.fn.load,
      q = s.event.add,
      O = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      r(
        s.event.props,
        "concat",
        s.event.props.concat,
        "event-old-patch",
        "jQuery.event.props.concat() is deprecated and removed"
      ),
      i(
        s.event,
        "fix",
        function (e) {
          var t,
            r = e.type,
            n = this.fixHooks[r],
            o = s.event.props;
          if (o.length) {
            u(
              "event-old-patch",
              "jQuery.event.props are deprecated and removed: " + o.join()
            );
            while (o.length) s.event.addProp(o.pop());
          }
          if (
            n &&
            !n._migrated_ &&
            ((n._migrated_ = !0),
            u(
              "event-old-patch",
              "jQuery.event.fixHooks are deprecated and removed: " + r
            ),
            (o = n.props) && o.length)
          )
            while (o.length) s.event.addProp(o.pop());
          return (t = O.call(this, e)), n && n.filter ? n.filter(t, e) : t;
        },
        "event-old-patch"
      ),
      i(
        s.event,
        "add",
        function (e, t) {
          return (
            e === n &&
              "load" === t &&
              "complete" === n.document.readyState &&
              u(
                "load-after-event",
                "jQuery(window).on('load'...) called after load event occurred"
              ),
            q.apply(this, arguments)
          );
        },
        "load-after-event"
      ),
      s.each(["load", "unload", "error"], function (e, t) {
        i(
          s.fn,
          t,
          function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0]
              ? M.apply(this, e)
              : (u(
                  "shorthand-removed-v3",
                  "jQuery.fn." + t + "() is deprecated"
                ),
                e.splice(0, 0, t),
                arguments.length
                  ? this.on.apply(this, e)
                  : (this.triggerHandler.apply(this, e), this));
          },
          "shorthand-removed-v3"
        );
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, r) {
          c(
            s.fn,
            r,
            function (e, t) {
              return 0 < arguments.length
                ? this.on(r, null, e, t)
                : this.trigger(r);
            },
            "shorthand-deprecated-v3",
            "jQuery.fn." + r + "() event shorthand is deprecated"
          );
        }
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document &&
            u("ready-event", "'ready' event is deprecated");
        },
      }),
      c(
        s.fn,
        "bind",
        function (e, t, r) {
          return this.on(e, null, t, r);
        },
        "pre-on-methods",
        "jQuery.fn.bind() is deprecated"
      ),
      c(
        s.fn,
        "unbind",
        function (e, t) {
          return this.off(e, null, t);
        },
        "pre-on-methods",
        "jQuery.fn.unbind() is deprecated"
      ),
      c(
        s.fn,
        "delegate",
        function (e, t, r, n) {
          return this.on(t, e, r, n);
        },
        "pre-on-methods",
        "jQuery.fn.delegate() is deprecated"
      ),
      c(
        s.fn,
        "undelegate",
        function (e, t, r) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", r);
        },
        "pre-on-methods",
        "jQuery.fn.undelegate() is deprecated"
      ),
      c(
        s.fn,
        "hover",
        function (e, t) {
          return this.on("mouseenter", e).on("mouseleave", t || e);
        },
        "pre-on-methods",
        "jQuery.fn.hover() is deprecated"
      );
    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    var F =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.migrateEnablePatches("self-closed-tags");
    }),
      i(
        s,
        "htmlPrefilter",
        function (e) {
          var t, r;
          return (
            (r = (t = e).replace(F, "<$1></$2>")) !== t &&
              T(t) !== T(r) &&
              u(
                "self-closed-tags",
                "HTML tags must be properly nested and closed: " + t
              ),
            e.replace(F, "<$1></$2>")
          );
        },
        "self-closed-tags"
      ),
      s.migrateDisablePatches("self-closed-tags");
    var D,
      W,
      _,
      I = s.fn.offset;
    return (
      i(
        s.fn,
        "offset",
        function () {
          var e = this[0];
          return !e || (e.nodeType && e.getBoundingClientRect)
            ? I.apply(this, arguments)
            : (u(
                "offset-valid-elem",
                "jQuery.fn.offset() requires a valid DOM element"
              ),
              arguments.length ? this : void 0);
        },
        "offset-valid-elem"
      ),
      s.ajax &&
        ((D = s.param),
        i(
          s,
          "param",
          function (e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return (
              void 0 === t &&
                r &&
                (u(
                  "param-ajax-traditional",
                  "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
                ),
                (t = r)),
              D.call(this, e, t)
            );
          },
          "param-ajax-traditional"
        )),
      c(
        s.fn,
        "andSelf",
        s.fn.addBack,
        "andSelf",
        "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
      ),
      s.Deferred &&
        ((W = s.Deferred),
        (_ = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        i(
          s,
          "Deferred",
          function (e) {
            var a = W(),
              i = a.promise();
            function t() {
              var o = arguments;
              return s
                .Deferred(function (n) {
                  s.each(_, function (e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && "function" == typeof e.promise
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[t[0] + "With"](
                            this === i ? n.promise() : this,
                            r ? [e] : arguments
                          );
                    });
                  }),
                    (o = null);
                })
                .promise();
            }
            return (
              c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
              c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
              e && e.call(a, a),
              a
            );
          },
          "deferred-pipe"
        ),
        (s.Deferred.exceptionHook = W.exceptionHook)),
      s
    );
  });
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!(function () {
  "use strict";
  function e(e) {
    e.fn._fadeIn = e.fn.fadeIn;
    var t = e.noop || function () {},
      o = /MSIE/.test(navigator.userAgent),
      n =
        /MSIE 6.0/.test(navigator.userAgent) &&
        !/MSIE 8.0/.test(navigator.userAgent),
      i =
        (document.documentMode,
        "function" ==
          typeof document.createElement("div").style.setExpression &&
          document.createElement("div").style.setExpression);
    (e.blockUI = function (e) {
      d(window, e);
    }),
      (e.unblockUI = function (e) {
        a(window, e);
      }),
      (e.growlUI = function (t, o, n, i) {
        var s = e('<div class="growlUI"></div>');
        t && s.append("<h1>" + t + "</h1>"),
          o && s.append("<h2>" + o + "</h2>"),
          n === undefined && (n = 3e3);
        var l = function (t) {
          (t = t || {}),
            e.blockUI({
              message: s,
              fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
              fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
              timeout: "undefined" != typeof t.timeout ? t.timeout : n,
              centerY: !1,
              showOverlay: !1,
              onUnblock: i,
              css: e.blockUI.defaults.growlCSS,
            });
        };
        l();
        s.css("opacity");
        s.on("mouseover", function () {
          l({ fadeIn: 0, timeout: 3e4 });
          var t = e(".blockMsg");
          t.stop(), t.fadeTo(300, 1);
        }).on("mouseout", function () {
          e(".blockMsg").fadeOut(1e3);
        });
      }),
      (e.fn.block = function (t) {
        if (this[0] === window) return e.blockUI(t), this;
        var o = e.extend({}, e.blockUI.defaults, t || {});
        return (
          this.each(function () {
            var t = e(this);
            (o.ignoreIfBlocked && t.data("blockUI.isBlocked")) ||
              t.unblock({ fadeOut: 0 });
          }),
          this.each(function () {
            "static" == e.css(this, "position") &&
              ((this.style.position = "relative"),
              e(this).data("blockUI.static", !0)),
              (this.style.zoom = 1),
              d(this, t);
          })
        );
      }),
      (e.fn.unblock = function (t) {
        return this[0] === window
          ? (e.unblockUI(t), this)
          : this.each(function () {
              a(this, t);
            });
      }),
      (e.blockUI.version = 2.7),
      (e.blockUI.defaults = {
        message: "<h1>Please wait...</h1>",
        title: null,
        draggable: !0,
        theme: !1,
        css: {
          padding: 0,
          margin: 0,
          width: "30%",
          top: "40%",
          left: "35%",
          textAlign: "center",
          color: "#000",
          border: "3px solid #aaa",
          backgroundColor: "#fff",
          cursor: "wait",
        },
        themedCSS: { width: "30%", top: "40%", left: "35%" },
        overlayCSS: { backgroundColor: "#000", opacity: 0.6, cursor: "wait" },
        cursorReset: "default",
        growlCSS: {
          width: "350px",
          top: "10px",
          left: "",
          right: "10px",
          border: "none",
          padding: "5px",
          opacity: 0.6,
          cursor: "default",
          color: "#fff",
          backgroundColor: "#000",
          "-webkit-border-radius": "10px",
          "-moz-border-radius": "10px",
          "border-radius": "10px",
        },
        iframeSrc: /^https/i.test(window.location.href || "")
          ? "javascript:false"
          : "about:blank",
        forceIframe: !1,
        baseZ: 1e3,
        centerX: !0,
        centerY: !0,
        allowBodyStretch: !0,
        bindEvents: !0,
        constrainTabKey: !0,
        fadeIn: 200,
        fadeOut: 400,
        timeout: 0,
        showOverlay: !0,
        focusInput: !0,
        focusableElements: ":input:enabled:visible",
        onBlock: null,
        onUnblock: null,
        onOverlayClick: null,
        quirksmodeOffsetHack: 4,
        blockMsgClass: "blockMsg",
        ignoreIfBlocked: !1,
      });
    var s = null,
      l = [];
    function d(d, c) {
      var u,
        b,
        h = d == window,
        k = c && c.message !== undefined ? c.message : undefined;
      if (
        !(c = e.extend({}, e.blockUI.defaults, c || {})).ignoreIfBlocked ||
        !e(d).data("blockUI.isBlocked")
      ) {
        if (
          ((c.overlayCSS = e.extend(
            {},
            e.blockUI.defaults.overlayCSS,
            c.overlayCSS || {}
          )),
          (u = e.extend({}, e.blockUI.defaults.css, c.css || {})),
          c.onOverlayClick && (c.overlayCSS.cursor = "pointer"),
          (b = e.extend({}, e.blockUI.defaults.themedCSS, c.themedCSS || {})),
          (k = k === undefined ? c.message : k),
          h && s && a(window, { fadeOut: 0 }),
          k && "string" != typeof k && (k.parentNode || k.jquery))
        ) {
          var y = k.jquery ? k[0] : k,
            m = {};
          e(d).data("blockUI.history", m),
            (m.el = y),
            (m.parent = y.parentNode),
            (m.display = y.style.display),
            (m.position = y.style.position),
            m.parent && m.parent.removeChild(y);
        }
        e(d).data("blockUI.onUnblock", c.onUnblock);
        var g,
          v,
          I,
          w,
          U = c.baseZ;
        (g =
          o || c.forceIframe
            ? e(
                '<iframe class="blockUI" style="z-index:' +
                  U++ +
                  ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' +
                  c.iframeSrc +
                  '"></iframe>'
              )
            : e('<div class="blockUI" style="display:none"></div>')),
          (v = c.theme
            ? e(
                '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' +
                  U++ +
                  ';display:none"></div>'
              )
            : e(
                '<div class="blockUI blockOverlay" style="z-index:' +
                  U++ +
                  ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'
              )),
          c.theme && h
            ? ((w =
                '<div class="blockUI ' +
                c.blockMsgClass +
                ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' +
                (U + 10) +
                ';display:none;position:fixed">'),
              c.title &&
                (w +=
                  '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' +
                  (c.title || "&nbsp;") +
                  "</div>"),
              (w += '<div class="ui-widget-content ui-dialog-content"></div>'),
              (w += "</div>"))
            : c.theme
            ? ((w =
                '<div class="blockUI ' +
                c.blockMsgClass +
                ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' +
                (U + 10) +
                ';display:none;position:absolute">'),
              c.title &&
                (w +=
                  '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' +
                  (c.title || "&nbsp;") +
                  "</div>"),
              (w += '<div class="ui-widget-content ui-dialog-content"></div>'),
              (w += "</div>"))
            : (w = h
                ? '<div class="blockUI ' +
                  c.blockMsgClass +
                  ' blockPage" style="z-index:' +
                  (U + 10) +
                  ';display:none;position:fixed"></div>'
                : '<div class="blockUI ' +
                  c.blockMsgClass +
                  ' blockElement" style="z-index:' +
                  (U + 10) +
                  ';display:none;position:absolute"></div>'),
          (I = e(w)),
          k &&
            (c.theme ? (I.css(b), I.addClass("ui-widget-content")) : I.css(u)),
          c.theme || v.css(c.overlayCSS),
          v.css("position", h ? "fixed" : "absolute"),
          (o || c.forceIframe) && g.css("opacity", 0);
        var x = [g, v, I],
          C = e(h ? "body" : d);
        e.each(x, function () {
          this.appendTo(C);
        }),
          c.theme &&
            c.draggable &&
            e.fn.draggable &&
            I.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" });
        var S =
          i &&
          (!e.support.boxModel || e("object,embed", h ? null : d).length > 0);
        if (n || S) {
          if (
            (h &&
              c.allowBodyStretch &&
              e.support.boxModel &&
              e("html,body").css("height", "100%"),
            (n || !e.support.boxModel) && !h)
          )
            var E = p(d, "borderTopWidth"),
              O = p(d, "borderLeftWidth"),
              T = E ? "(0 - " + E + ")" : 0,
              M = O ? "(0 - " + O + ")" : 0;
          e.each(x, function (e, t) {
            var o = t[0].style;
            if (((o.position = "absolute"), e < 2))
              h
                ? o.setExpression(
                    "height",
                    "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" +
                      c.quirksmodeOffsetHack +
                      ') + "px"'
                  )
                : o.setExpression(
                    "height",
                    'this.parentNode.offsetHeight + "px"'
                  ),
                h
                  ? o.setExpression(
                      "width",
                      'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'
                    )
                  : o.setExpression(
                      "width",
                      'this.parentNode.offsetWidth + "px"'
                    ),
                M && o.setExpression("left", M),
                T && o.setExpression("top", T);
            else if (c.centerY)
              h &&
                o.setExpression(
                  "top",
                  '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'
                ),
                (o.marginTop = 0);
            else if (!c.centerY && h) {
              var n =
                "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " +
                (c.css && c.css.top ? parseInt(c.css.top, 10) : 0) +
                ') + "px"';
              o.setExpression("top", n);
            }
          });
        }
        if (
          (k &&
            (c.theme ? I.find(".ui-widget-content").append(k) : I.append(k),
            (k.jquery || k.nodeType) && e(k).show()),
          (o || c.forceIframe) && c.showOverlay && g.show(),
          c.fadeIn)
        ) {
          var B = c.onBlock ? c.onBlock : t,
            j = c.showOverlay && !k ? B : t,
            H = k ? B : t;
          c.showOverlay && v._fadeIn(c.fadeIn, j), k && I._fadeIn(c.fadeIn, H);
        } else
          c.showOverlay && v.show(),
            k && I.show(),
            c.onBlock && c.onBlock.bind(I)();
        if (
          (r(1, d, c),
          h
            ? ((s = I[0]),
              (l = e(c.focusableElements, s)),
              c.focusInput && setTimeout(f, 20))
            : (function (e, t, o) {
                var n = e.parentNode,
                  i = e.style,
                  s =
                    (n.offsetWidth - e.offsetWidth) / 2 -
                    p(n, "borderLeftWidth"),
                  l =
                    (n.offsetHeight - e.offsetHeight) / 2 -
                    p(n, "borderTopWidth");
                t && (i.left = s > 0 ? s + "px" : "0");
                o && (i.top = l > 0 ? l + "px" : "0");
              })(I[0], c.centerX, c.centerY),
          c.timeout)
        ) {
          var z = setTimeout(function () {
            h ? e.unblockUI(c) : e(d).unblock(c);
          }, c.timeout);
          e(d).data("blockUI.timeout", z);
        }
      }
    }
    function a(t, o) {
      var n,
        i,
        d = t == window,
        a = e(t),
        u = a.data("blockUI.history"),
        f = a.data("blockUI.timeout");
      f && (clearTimeout(f), a.removeData("blockUI.timeout")),
        (o = e.extend({}, e.blockUI.defaults, o || {})),
        r(0, t, o),
        null === o.onUnblock &&
          ((o.onUnblock = a.data("blockUI.onUnblock")),
          a.removeData("blockUI.onUnblock")),
        (i = d
          ? e(document.body)
              .children()
              .filter(".blockUI")
              .add("body > .blockUI")
          : a.find(">.blockUI")),
        o.cursorReset &&
          (i.length > 1 && (i[1].style.cursor = o.cursorReset),
          i.length > 2 && (i[2].style.cursor = o.cursorReset)),
        d && (s = l = null),
        o.fadeOut
          ? ((n = i.length),
            i.stop().fadeOut(o.fadeOut, function () {
              0 == --n && c(i, u, o, t);
            }))
          : c(i, u, o, t);
    }
    function c(t, o, n, i) {
      var s = e(i);
      if (!s.data("blockUI.isBlocked")) {
        t.each(function (e, t) {
          this.parentNode && this.parentNode.removeChild(this);
        }),
          o &&
            o.el &&
            ((o.el.style.display = o.display),
            (o.el.style.position = o.position),
            (o.el.style.cursor = "default"),
            o.parent && o.parent.appendChild(o.el),
            s.removeData("blockUI.history")),
          s.data("blockUI.static") && s.css("position", "static"),
          "function" == typeof n.onUnblock && n.onUnblock(i, n);
        var l = e(document.body),
          d = l.width(),
          a = l[0].style.width;
        l.width(d - 1).width(d), (l[0].style.width = a);
      }
    }
    function r(t, o, n) {
      var i = o == window,
        l = e(o);
      if (
        (t || ((!i || s) && (i || l.data("blockUI.isBlocked")))) &&
        (l.data("blockUI.isBlocked", t),
        i && n.bindEvents && (!t || n.showOverlay))
      ) {
        var d =
          "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
        t ? e(document).on(d, n, u) : e(document).off(d, u);
      }
    }
    function u(t) {
      if (
        "keydown" === t.type &&
        t.keyCode &&
        9 == t.keyCode &&
        s &&
        t.data.constrainTabKey
      ) {
        var o = l,
          n = !t.shiftKey && t.target === o[o.length - 1],
          i = t.shiftKey && t.target === o[0];
        if (n || i)
          return (
            setTimeout(function () {
              f(i);
            }, 10),
            !1
          );
      }
      var d = t.data,
        a = e(t.target);
      return (
        a.hasClass("blockOverlay") && d.onOverlayClick && d.onOverlayClick(t),
        a.parents("div." + d.blockMsgClass).length > 0 ||
          0 === a.parents().children().filter("div.blockUI").length
      );
    }
    function f(e) {
      if (l) {
        var t = l[!0 === e ? l.length - 1 : 0];
        t && t.trigger("focus");
      }
    }
    function p(t, o) {
      return parseInt(e.css(t, o), 10) || 0;
    }
  }
  "function" == typeof define && define.amd && define.amd.jQuery
    ? define(["jquery"], e)
    : e(jQuery);
})();
jQuery(function (t) {
  if ("undefined" == typeof wc_add_to_cart_params) return !1;
  var a = function () {
    (this.requests = []),
      (this.addRequest = this.addRequest.bind(this)),
      (this.run = this.run.bind(this)),
      t(document.body)
        .on(
          "click",
          ".add_to_cart_button:not(.wc-interactive)",
          { addToCartHandler: this },
          this.onAddToCart
        )
        .on(
          "click",
          ".remove_from_cart_button",
          { addToCartHandler: this },
          this.onRemoveFromCart
        )
        .on("added_to_cart", this.updateButton)
        .on("ajax_request_not_sent.adding_to_cart", this.updateButton)
        .on(
          "added_to_cart removed_from_cart",
          { addToCartHandler: this },
          this.updateFragments
        );
  };
  (a.prototype.addRequest = function (t) {
    this.requests.push(t), 1 === this.requests.length && this.run();
  }),
    (a.prototype.run = function () {
      var a = this,
        e = a.requests[0].complete;
      (a.requests[0].complete = function () {
        "function" == typeof e && e(),
          a.requests.shift(),
          a.requests.length > 0 && a.run();
      }),
        t.ajax(this.requests[0]);
    }),
    (a.prototype.onAddToCart = function (a) {
      var e = t(this);
      if (e.is(".ajax_add_to_cart")) {
        if (!e.attr("data-product_id")) return !0;
        if (
          (a.preventDefault(),
          e.removeClass("added"),
          e.addClass("loading"),
          !1 ===
            t(document.body).triggerHandler(
              "should_send_ajax_request.adding_to_cart",
              [e]
            ))
        )
          return (
            t(document.body).trigger("ajax_request_not_sent.adding_to_cart", [
              !1,
              !1,
              e,
            ]),
            !0
          );
        var r = {};
        t.each(e.data(), function (t, a) {
          r[t] = a;
        }),
          t.each(e[0].dataset, function (t, a) {
            r[t] = a;
          }),
          t(document.body).trigger("adding_to_cart", [e, r]),
          a.data.addToCartHandler.addRequest({
            type: "POST",
            url: wc_add_to_cart_params.wc_ajax_url
              .toString()
              .replace("%%endpoint%%", "add_to_cart"),
            data: r,
            success: function (a) {
              a &&
                (a.error && a.product_url
                  ? (window.location = a.product_url)
                  : "yes" !== wc_add_to_cart_params.cart_redirect_after_add
                  ? t(document.body).trigger("added_to_cart", [
                      a.fragments,
                      a.cart_hash,
                      e,
                    ])
                  : (window.location = wc_add_to_cart_params.cart_url));
            },
            dataType: "json",
          });
      }
    }),
    (a.prototype.onRemoveFromCart = function (a) {
      var e = t(this),
        r = e.closest(".woocommerce-mini-cart-item");
      a.preventDefault(),
        r.block({ message: null, overlayCSS: { opacity: 0.6 } }),
        a.data.addToCartHandler.addRequest({
          type: "POST",
          url: wc_add_to_cart_params.wc_ajax_url
            .toString()
            .replace("%%endpoint%%", "remove_from_cart"),
          data: { cart_item_key: e.data("cart_item_key") },
          success: function (a) {
            a && a.fragments
              ? t(document.body).trigger("removed_from_cart", [
                  a.fragments,
                  a.cart_hash,
                  e,
                ])
              : (window.location = e.attr("href"));
          },
          error: function () {
            window.location = e.attr("href");
          },
          dataType: "json",
        });
    }),
    (a.prototype.updateButton = function (a, e, r, d) {
      (d = void 0 !== d && d) &&
        (d.removeClass("loading"),
        e && d.addClass("added"),
        e &&
          !wc_add_to_cart_params.is_cart &&
          0 === d.parent().find(".added_to_cart").length &&
          d.after(
            '<a href="' +
              wc_add_to_cart_params.cart_url +
              '" class="added_to_cart wc-forward" title="' +
              wc_add_to_cart_params.i18n_view_cart +
              '">' +
              wc_add_to_cart_params.i18n_view_cart +
              "</a>"
          ),
        t(document.body).trigger("wc_cart_button_updated", [d]));
    }),
    (a.prototype.updateFragments = function (a, e) {
      e &&
        (t.each(e, function (a) {
          t(a)
            .addClass("updating")
            .fadeTo("400", "0.6")
            .block({ message: null, overlayCSS: { opacity: 0.6 } });
        }),
        t.each(e, function (a, e) {
          t(a).replaceWith(e), t(a).stop(!0).css("opacity", "1").unblock();
        }),
        t(document.body).trigger("wc_fragments_loaded"));
    }),
    new a();
});
/*! js-cookie v3.0.5 | MIT */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
      (function () {
        var n = e.Cookies,
          o = (e.Cookies = t());
        o.noConflict = function () {
          return (e.Cookies = n), o;
        };
      })());
})(this, function () {
  "use strict";
  function e(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) e[o] = n[o];
    }
    return e;
  }
  return (function t(n, o) {
    function r(t, r, i) {
      if ("undefined" != typeof document) {
        "number" == typeof (i = e({}, o, i)).expires &&
          (i.expires = new Date(Date.now() + 864e5 * i.expires)),
          i.expires && (i.expires = i.expires.toUTCString()),
          (t = encodeURIComponent(t)
            .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
            .replace(/[()]/g, escape));
        var c = "";
        for (var u in i)
          i[u] &&
            ((c += "; " + u), !0 !== i[u] && (c += "=" + i[u].split(";")[0]));
        return (document.cookie = t + "=" + n.write(r, t) + c);
      }
    }
    return Object.create(
      {
        set: r,
        get: function (e) {
          if ("undefined" != typeof document && (!arguments.length || e)) {
            for (
              var t = document.cookie ? document.cookie.split("; ") : [],
                o = {},
                r = 0;
              r < t.length;
              r++
            ) {
              var i = t[r].split("="),
                c = i.slice(1).join("=");
              try {
                var u = decodeURIComponent(i[0]);
                if (((o[u] = n.read(c, u)), e === u)) break;
              } catch (f) {}
            }
            return e ? o[e] : o;
          }
        },
        remove: function (t, n) {
          r(t, "", e({}, n, { expires: -1 }));
        },
        withAttributes: function (n) {
          return t(this.converter, e({}, this.attributes, n));
        },
        withConverter: function (n) {
          return t(e({}, this.converter, n), this.attributes);
        },
      },
      {
        attributes: { value: Object.freeze(o) },
        converter: { value: Object.freeze(n) },
      }
    );
  })(
    {
      read: function (e) {
        return (
          '"' === e[0] && (e = e.slice(1, -1)),
          e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        );
      },
      write: function (e) {
        return encodeURIComponent(e).replace(
          /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
          decodeURIComponent
        );
      },
    },
    { path: "/" }
  );
});
jQuery(function (o) {
  o(".woocommerce-ordering").on("change", "select.orderby", function () {
    o(this).closest("form").trigger("submit");
  }),
    o("input.qty:not(.product-quantity input.qty)").each(function () {
      var e = parseFloat(o(this).attr("min"));
      e >= 0 && parseFloat(o(this).val()) < e && o(this).val(e);
    });
  var e =
    "store_notice" + (o(".woocommerce-store-notice").data("noticeId") || "");
  "hidden" === Cookies.get(e)
    ? o(".woocommerce-store-notice").hide()
    : o(".woocommerce-store-notice").show(),
    o(".woocommerce-store-notice__dismiss-link").on("click", function (s) {
      Cookies.set(e, "hidden", { path: "/" }),
        o(".woocommerce-store-notice").hide(),
        s.preventDefault();
    }),
    o(".woocommerce-input-wrapper span.description").length &&
      o(document.body).on("click", function () {
        o(".woocommerce-input-wrapper span.description:visible")
          .prop("aria-hidden", !0)
          .slideUp(250);
      }),
    o(".woocommerce-input-wrapper").on("click", function (o) {
      o.stopPropagation();
    }),
    o(".woocommerce-input-wrapper :input")
      .on("keydown", function (e) {
        var s = o(this).parent().find("span.description");
        if (27 === e.which && s.length && s.is(":visible"))
          return s.prop("aria-hidden", !0).slideUp(250), e.preventDefault(), !1;
      })
      .on("click focus", function () {
        var e = o(this).parent(),
          s = e.find("span.description");
        e.addClass("currentTarget"),
          o(
            ".woocommerce-input-wrapper:not(.currentTarget) span.description:visible"
          )
            .prop("aria-hidden", !0)
            .slideUp(250),
          s.length &&
            s.is(":hidden") &&
            s.prop("aria-hidden", !1).slideDown(250),
          e.removeClass("currentTarget");
      }),
    (o.scroll_to_notices = function (e) {
      e.length &&
        o("html, body").animate({ scrollTop: e.offset().top - 100 }, 1e3);
    }),
    o('.woocommerce form .woocommerce-Input[type="password"]').wrap(
      '<span class="password-input"></span>'
    ),
    o(".woocommerce form input")
      .filter(":password")
      .parent("span")
      .addClass("password-input"),
    o(".password-input").append('<span class="show-password-input"></span>'),
    o(".show-password-input").on("click", function () {
      o(this).hasClass("display-password")
        ? o(this).removeClass("display-password")
        : o(this).addClass("display-password"),
        o(this).hasClass("display-password")
          ? o(this).siblings(['input[type="password"]']).prop("type", "text")
          : o(this).siblings('input[type="text"]').prop("type", "password");
    }),
    o("a.coming-soon-footer-banner-dismiss").on("click", function (e) {
      var s = o(e.target);
      o.ajax({
        type: "post",
        url: s.data("rest-url"),
        data: { meta: { woocommerce_coming_soon_banner_dismissed: "yes" } },
        beforeSend: function (o) {
          o.setRequestHeader("X-WP-Nonce", s.data("rest-nonce"));
        },
        complete: function () {
          o("#coming-soon-footer-banner").hide();
        },
      });
    });
});
(function ($) {
  "use strict";
  $(window).on("elementor/frontend/init", function () {
    var width = $(window).width();
    var height = $(window).height();
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/global",
      function ($scope) {
        if ($(".jarallax").length) {
          $(".jarallax").jarallax();
        }
        if ($(".jarallax-video").length) {
          $("body").addClass("background-enabled");
          $(".jarallax-video").jarallax();
        }
        if ($(".started-carousel").length) {
          var slider_container = $(".started-carousel .swiper-container");
          var is_autoplaytime = slider_container.data("autoplaytime");
          var is_loop = slider_container.data("loop");
          var started_slider = new Swiper(
            ".started-carousel .swiper-container",
            {
              init: false,
              loop: is_loop,
              spaceBetween: 0,
              effect: "fade",
              slidesPerView: 1,
              simulateTouch: false,
              autoplay: {
                delay: is_autoplaytime,
                disableOnInteraction: false,
                waitForTransition: false,
              },
              navigation: {
                nextEl: ".started .swiper-button-next",
                prevEl: ".started .swiper-button-prev",
              },
            }
          );
          started_slider.on("slideChange", function () {
            var index = started_slider.realIndex;
            var total = started_slider.slides.length;
            $(".started-carousel .swiper-slide").removeClass("first");
            $(".started-carousel .swiper-slide").each(function (i, slide) {
              if (index - 1 >= i) {
                $(slide).addClass("swiper-clip-active");
              } else {
                $(slide).removeClass("swiper-clip-active");
              }
            });
            $(".started-carousel .swiper-slide").each(function (i, slide) {
              $(slide).css({ "z-index": total - i });
            });
          });
          started_slider.init();
        }
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/widget",
      function ($scope) {}
    );
  });
})(jQuery);
!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var t;
    "undefined" != typeof window
      ? (t = window)
      : "undefined" != typeof global
      ? (t = global)
      : "undefined" != typeof self && (t = self),
      (t.sbjs = e());
  }
})(function () {
  return (function e(t, r, n) {
    function a(s, o) {
      if (!r[s]) {
        if (!t[s]) {
          var c = "function" == typeof require && require;
          if (!o && c) return c(s, !0);
          if (i) return i(s, !0);
          var u = new Error("Cannot find module '" + s + "'");
          throw ((u.code = "MODULE_NOT_FOUND"), u);
        }
        var p = (r[s] = { exports: {} });
        t[s][0].call(
          p.exports,
          function (e) {
            var r = t[s][1][e];
            return a(r || e);
          },
          p,
          p.exports,
          e,
          t,
          r,
          n
        );
      }
      return r[s].exports;
    }
    for (
      var i = "function" == typeof require && require, s = 0;
      s < n.length;
      s++
    )
      a(n[s]);
    return a;
  })(
    {
      1: [
        function (e, t, r) {
          "use strict";
          var n = e("./init"),
            a = {
              init: function (e) {
                (this.get = n(e)),
                  e &&
                    e.callback &&
                    "function" == typeof e.callback &&
                    e.callback(this.get);
              },
            };
          t.exports = a;
        },
        { "./init": 6 },
      ],
      2: [
        function (e, t, r) {
          "use strict";
          var n = e("./terms"),
            a = e("./helpers/utils"),
            i = {
              containers: {
                current: "sbjs_current",
                current_extra: "sbjs_current_add",
                first: "sbjs_first",
                first_extra: "sbjs_first_add",
                session: "sbjs_session",
                udata: "sbjs_udata",
                promocode: "sbjs_promo",
              },
              service: { migrations: "sbjs_migrations" },
              delimiter: "|||",
              aliases: {
                main: {
                  type: "typ",
                  source: "src",
                  medium: "mdm",
                  campaign: "cmp",
                  content: "cnt",
                  term: "trm",
                  id: "id",
                  platform: "plt",
                  format: "fmt",
                  tactic: "tct",
                },
                extra: { fire_date: "fd", entrance_point: "ep", referer: "rf" },
                session: { pages_seen: "pgs", current_page: "cpg" },
                udata: { visits: "vst", ip: "uip", agent: "uag" },
                promo: "code",
              },
              pack: {
                main: function (e) {
                  return (
                    i.aliases.main.type +
                    "=" +
                    e.type +
                    i.delimiter +
                    i.aliases.main.source +
                    "=" +
                    e.source +
                    i.delimiter +
                    i.aliases.main.medium +
                    "=" +
                    e.medium +
                    i.delimiter +
                    i.aliases.main.campaign +
                    "=" +
                    e.campaign +
                    i.delimiter +
                    i.aliases.main.content +
                    "=" +
                    e.content +
                    i.delimiter +
                    i.aliases.main.term +
                    "=" +
                    e.term +
                    i.delimiter +
                    i.aliases.main.id +
                    "=" +
                    e.id +
                    i.delimiter +
                    i.aliases.main.platform +
                    "=" +
                    e.platform +
                    i.delimiter +
                    i.aliases.main.format +
                    "=" +
                    e.format +
                    i.delimiter +
                    i.aliases.main.tactic +
                    "=" +
                    e.tactic
                  );
                },
                extra: function (e) {
                  return (
                    i.aliases.extra.fire_date +
                    "=" +
                    a.setDate(new Date(), e) +
                    i.delimiter +
                    i.aliases.extra.entrance_point +
                    "=" +
                    document.location.href +
                    i.delimiter +
                    i.aliases.extra.referer +
                    "=" +
                    (document.referrer || n.none)
                  );
                },
                user: function (e, t) {
                  return (
                    i.aliases.udata.visits +
                    "=" +
                    e +
                    i.delimiter +
                    i.aliases.udata.ip +
                    "=" +
                    t +
                    i.delimiter +
                    i.aliases.udata.agent +
                    "=" +
                    navigator.userAgent
                  );
                },
                session: function (e) {
                  return (
                    i.aliases.session.pages_seen +
                    "=" +
                    e +
                    i.delimiter +
                    i.aliases.session.current_page +
                    "=" +
                    document.location.href
                  );
                },
                promo: function (e) {
                  return (
                    i.aliases.promo +
                    "=" +
                    a.setLeadingZeroToInt(
                      a.randomInt(e.min, e.max),
                      e.max.toString().length
                    )
                  );
                },
              },
            };
          t.exports = i;
        },
        { "./helpers/utils": 5, "./terms": 9 },
      ],
      3: [
        function (e, t, r) {
          "use strict";
          var n = e("../data").delimiter;
          t.exports = {
            useBase64: !1,
            setBase64Flag: function (e) {
              this.useBase64 = e;
            },
            encodeData: function (e) {
              return encodeURIComponent(e)
                .replace(/\!/g, "%21")
                .replace(/\~/g, "%7E")
                .replace(/\*/g, "%2A")
                .replace(/\'/g, "%27")
                .replace(/\(/g, "%28")
                .replace(/\)/g, "%29");
            },
            decodeData: function (e) {
              try {
                return decodeURIComponent(e)
                  .replace(/\%21/g, "!")
                  .replace(/\%7E/g, "~")
                  .replace(/\%2A/g, "*")
                  .replace(/\%27/g, "'")
                  .replace(/\%28/g, "(")
                  .replace(/\%29/g, ")");
              } catch (t) {
                try {
                  return unescape(e);
                } catch (r) {
                  return "";
                }
              }
            },
            set: function (e, t, r, n, a) {
              var i, s;
              if (r) {
                var o = new Date();
                o.setTime(o.getTime() + 60 * r * 1e3),
                  (i = "; expires=" + o.toGMTString());
              } else i = "";
              s = n && !a ? ";domain=." + n : "";
              var c = this.encodeData(t);
              this.useBase64 && (c = btoa(c).replace(/=+$/, "")),
                (document.cookie =
                  this.encodeData(e) + "=" + c + i + s + "; path=/");
            },
            get: function (e) {
              for (
                var t = this.encodeData(e) + "=",
                  r = document.cookie.split(";"),
                  n = 0;
                n < r.length;
                n++
              ) {
                for (var a = r[n]; " " === a.charAt(0); )
                  a = a.substring(1, a.length);
                if (0 === a.indexOf(t)) {
                  var i = a.substring(t.length, a.length);
                  if (/^[A-Za-z0-9+/]+$/.test(i))
                    try {
                      i = atob(i.padEnd(4 * Math.ceil(i.length / 4), "="));
                    } catch (s) {}
                  return this.decodeData(i);
                }
              }
              return null;
            },
            destroy: function (e, t, r) {
              this.set(e, "", -1, t, r);
            },
            parse: function (e) {
              var t = [],
                r = {};
              if ("string" == typeof e) t.push(e);
              else for (var a in e) e.hasOwnProperty(a) && t.push(e[a]);
              for (var i = 0; i < t.length; i++) {
                var s;
                (r[this.unsbjs(t[i])] = {}),
                  (s = this.get(t[i]) ? this.get(t[i]).split(n) : []);
                for (var o = 0; o < s.length; o++) {
                  var c = s[o].split("="),
                    u = c.splice(0, 1);
                  u.push(c.join("=")),
                    (r[this.unsbjs(t[i])][u[0]] = this.decodeData(u[1]));
                }
              }
              return r;
            },
            unsbjs: function (e) {
              return e.replace("sbjs_", "");
            },
          };
        },
        { "../data": 2 },
      ],
      4: [
        function (e, t, r) {
          "use strict";
          t.exports = {
            parse: function (e) {
              for (
                var t = this.parseOptions,
                  r = t.parser[t.strictMode ? "strict" : "loose"].exec(e),
                  n = {},
                  a = 14;
                a--;

              )
                n[t.key[a]] = r[a] || "";
              return (
                (n[t.q.name] = {}),
                n[t.key[12]].replace(t.q.parser, function (e, r, a) {
                  r && (n[t.q.name][r] = a);
                }),
                n
              );
            },
            parseOptions: {
              strictMode: !1,
              key: [
                "source",
                "protocol",
                "authority",
                "userInfo",
                "user",
                "password",
                "host",
                "port",
                "relative",
                "path",
                "directory",
                "file",
                "query",
                "anchor",
              ],
              q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
              parser: {
                strict:
                  /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose:
                  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
              },
            },
            getParam: function (e) {
              for (
                var t = {},
                  r = (e || window.location.search.substring(1)).split("&"),
                  n = 0;
                n < r.length;
                n++
              ) {
                var a = r[n].split("=");
                if ("undefined" == typeof t[a[0]]) t[a[0]] = a[1];
                else if ("string" == typeof t[a[0]]) {
                  var i = [t[a[0]], a[1]];
                  t[a[0]] = i;
                } else t[a[0]].push(a[1]);
              }
              return t;
            },
            getHost: function (e) {
              return this.parse(e).host.replace("www.", "");
            },
          };
        },
        {},
      ],
      5: [
        function (e, t, r) {
          "use strict";
          t.exports = {
            escapeRegexp: function (e) {
              return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            setDate: function (e, t) {
              var r = e.getTimezoneOffset() / 60,
                n = e.getHours(),
                a = t || 0 === t ? t : -r;
              return (
                e.setHours(n + r + a),
                e.getFullYear() +
                  "-" +
                  this.setLeadingZeroToInt(e.getMonth() + 1, 2) +
                  "-" +
                  this.setLeadingZeroToInt(e.getDate(), 2) +
                  " " +
                  this.setLeadingZeroToInt(e.getHours(), 2) +
                  ":" +
                  this.setLeadingZeroToInt(e.getMinutes(), 2) +
                  ":" +
                  this.setLeadingZeroToInt(e.getSeconds(), 2)
              );
            },
            setLeadingZeroToInt: function (e, t) {
              for (var r = e + ""; r.length < t; ) r = "0" + r;
              return r;
            },
            randomInt: function (e, t) {
              return Math.floor(Math.random() * (t - e + 1)) + e;
            },
          };
        },
        {},
      ],
      6: [
        function (e, t, r) {
          "use strict";
          var n = e("./data"),
            a = e("./terms"),
            i = e("./helpers/cookies"),
            s = e("./helpers/uri"),
            o = e("./helpers/utils"),
            c = e("./params"),
            u = e("./migrations");
          t.exports = function (e) {
            var t,
              r,
              p,
              f,
              m,
              d,
              l,
              g,
              h,
              y,
              _,
              v,
              b,
              x = c.fetch(e),
              k = s.getParam(),
              w = x.domain.host,
              q = x.domain.isolate,
              I = x.lifetime;
            function j(e) {
              switch (e) {
                case a.traffic.utm:
                  (t = a.traffic.utm),
                    (r =
                      "undefined" != typeof k.utm_source
                        ? k.utm_source
                        : "undefined" != typeof k.gclid
                        ? "google"
                        : "undefined" != typeof k.yclid
                        ? "yandex"
                        : a.none),
                    (p =
                      "undefined" != typeof k.utm_medium
                        ? k.utm_medium
                        : "undefined" != typeof k.gclid
                        ? "cpc"
                        : "undefined" != typeof k.yclid
                        ? "cpc"
                        : a.none),
                    (f =
                      "undefined" != typeof k.utm_campaign
                        ? k.utm_campaign
                        : "undefined" != typeof k[x.campaign_param]
                        ? k[x.campaign_param]
                        : "undefined" != typeof k.gclid
                        ? "google_cpc"
                        : "undefined" != typeof k.yclid
                        ? "yandex_cpc"
                        : a.none),
                    (m =
                      "undefined" != typeof k.utm_content
                        ? k.utm_content
                        : "undefined" != typeof k[x.content_param]
                        ? k[x.content_param]
                        : a.none),
                    (l = k.utm_id || a.none),
                    (g = k.utm_source_platform || a.none),
                    (h = k.utm_creative_format || a.none),
                    (y = k.utm_marketing_tactic || a.none),
                    (d =
                      "undefined" != typeof k.utm_term
                        ? k.utm_term
                        : "undefined" != typeof k[x.term_param]
                        ? k[x.term_param]
                        : (function () {
                            var e = document.referrer;
                            if (k.utm_term) return k.utm_term;
                            if (
                              !(
                                e &&
                                s.parse(e).host &&
                                s
                                  .parse(e)
                                  .host.match(/^(?:.*\.)?yandex\..{2,9}$/i)
                              )
                            )
                              return !1;
                            try {
                              return s.getParam(
                                s.parse(document.referrer).query
                              ).text;
                            } catch (t) {
                              return !1;
                            }
                          })() || a.none);
                  break;
                case a.traffic.organic:
                  (t = a.traffic.organic),
                    (r = r || s.getHost(document.referrer)),
                    (p = a.referer.organic),
                    (f = a.none),
                    (m = a.none),
                    (d = a.none),
                    (l = a.none),
                    (g = a.none),
                    (h = a.none),
                    (y = a.none);
                  break;
                case a.traffic.referral:
                  (t = a.traffic.referral),
                    (r = r || s.getHost(document.referrer)),
                    (p = p || a.referer.referral),
                    (f = a.none),
                    (m = s.parse(document.referrer).path),
                    (d = a.none),
                    (l = a.none),
                    (g = a.none),
                    (h = a.none),
                    (y = a.none);
                  break;
                case a.traffic.typein:
                  (t = a.traffic.typein),
                    (r = x.typein_attributes.source),
                    (p = x.typein_attributes.medium),
                    (f = a.none),
                    (m = a.none),
                    (d = a.none),
                    (l = a.none),
                    (g = a.none),
                    (h = a.none),
                    (y = a.none);
                  break;
                default:
                  (t = a.oops),
                    (r = a.oops),
                    (p = a.oops),
                    (f = a.oops),
                    (m = a.oops),
                    (d = a.oops),
                    (l = a.oops),
                    (g = a.oops),
                    (h = a.oops),
                    (y = a.oops);
              }
              var i = {
                type: t,
                source: r,
                medium: p,
                campaign: f,
                content: m,
                term: d,
                id: l,
                platform: g,
                format: h,
                tactic: y,
              };
              return n.pack.main(i);
            }
            function R(e) {
              var t = document.referrer;
              switch (e) {
                case a.traffic.organic:
                  return (
                    !!t &&
                    H(t) &&
                    (function (e) {
                      var t = new RegExp(
                          "^(?:.*\\.)?" +
                            o.escapeRegexp("yandex") +
                            "\\..{2,9}$"
                        ),
                        n = new RegExp(".*" + o.escapeRegexp("text") + "=.*"),
                        a = new RegExp(
                          "^(?:www\\.)?" +
                            o.escapeRegexp("google") +
                            "\\..{2,9}$"
                        );
                      if (
                        s.parse(e).query &&
                        s.parse(e).host.match(t) &&
                        s.parse(e).query.match(n)
                      )
                        return (r = "yandex"), !0;
                      if (s.parse(e).host.match(a)) return (r = "google"), !0;
                      if (!s.parse(e).query) return !1;
                      for (var i = 0; i < x.organics.length; i++) {
                        if (
                          s
                            .parse(e)
                            .host.match(
                              new RegExp(
                                "^(?:.*\\.)?" +
                                  o.escapeRegexp(x.organics[i].host) +
                                  "$",
                                "i"
                              )
                            ) &&
                          s
                            .parse(e)
                            .query.match(
                              new RegExp(
                                ".*" +
                                  o.escapeRegexp(x.organics[i].param) +
                                  "=.*",
                                "i"
                              )
                            )
                        )
                          return (
                            (r = x.organics[i].display || x.organics[i].host),
                            !0
                          );
                        if (i + 1 === x.organics.length) return !1;
                      }
                    })(t)
                  );
                case a.traffic.referral:
                  return (
                    !!t &&
                    H(t) &&
                    (function (e) {
                      if (!(x.referrals.length > 0))
                        return (r = s.getHost(e)), !0;
                      for (var t = 0; t < x.referrals.length; t++) {
                        if (
                          s
                            .parse(e)
                            .host.match(
                              new RegExp(
                                "^(?:.*\\.)?" +
                                  o.escapeRegexp(x.referrals[t].host) +
                                  "$",
                                "i"
                              )
                            )
                        )
                          return (
                            (r = x.referrals[t].display || x.referrals[t].host),
                            (p = x.referrals[t].medium || a.referer.referral),
                            !0
                          );
                        if (t + 1 === x.referrals.length)
                          return (r = s.getHost(e)), !0;
                      }
                    })(t)
                  );
                default:
                  return !1;
              }
            }
            function H(e) {
              if (x.domain) {
                if (q) return s.getHost(e) !== s.getHost(w);
                var t = new RegExp(
                  "^(?:.*\\.)?" + o.escapeRegexp(w) + "$",
                  "i"
                );
                return !s.getHost(e).match(t);
              }
              return s.getHost(e) !== s.getHost(document.location.href);
            }
            function D() {
              i.set(
                n.containers.current_extra,
                n.pack.extra(x.timezone_offset),
                I,
                w,
                q
              ),
                i.get(n.containers.first_extra) ||
                  i.set(
                    n.containers.first_extra,
                    n.pack.extra(x.timezone_offset),
                    I,
                    w,
                    q
                  );
            }
            return (
              i.setBase64Flag(x.base64),
              u.go(I, w, q),
              i.set(
                n.containers.current,
                (function () {
                  var e;
                  if (
                    "undefined" != typeof k.utm_source ||
                    "undefined" != typeof k.utm_medium ||
                    "undefined" != typeof k.utm_campaign ||
                    "undefined" != typeof k.utm_content ||
                    "undefined" != typeof k.utm_term ||
                    "undefined" != typeof k.utm_id ||
                    "undefined" != typeof k.utm_source_platform ||
                    "undefined" != typeof k.utm_creative_format ||
                    "undefined" != typeof k.utm_marketing_tactic ||
                    "undefined" != typeof k.gclid ||
                    "undefined" != typeof k.yclid ||
                    "undefined" != typeof k[x.campaign_param] ||
                    "undefined" != typeof k[x.term_param] ||
                    "undefined" != typeof k[x.content_param]
                  )
                    D(), (e = j(a.traffic.utm));
                  else if (R(a.traffic.organic))
                    D(), (e = j(a.traffic.organic));
                  else if (
                    !i.get(n.containers.session) &&
                    R(a.traffic.referral)
                  )
                    D(), (e = j(a.traffic.referral));
                  else {
                    if (
                      i.get(n.containers.first) ||
                      i.get(n.containers.current)
                    )
                      return i.get(n.containers.current);
                    D(), (e = j(a.traffic.typein));
                  }
                  return e;
                })(),
                I,
                w,
                q
              ),
              i.get(n.containers.first) ||
                i.set(n.containers.first, i.get(n.containers.current), I, w, q),
              i.get(n.containers.udata)
                ? ((_ =
                    parseInt(
                      i.parse(n.containers.udata)[i.unsbjs(n.containers.udata)][
                        n.aliases.udata.visits
                      ]
                    ) || 1),
                  (_ = i.get(n.containers.session) ? _ : _ + 1),
                  (v = n.pack.user(_, x.user_ip)))
                : ((_ = 1), (v = n.pack.user(_, x.user_ip))),
              i.set(n.containers.udata, v, I, w, q),
              i.get(n.containers.session)
                ? ((b =
                    parseInt(
                      i.parse(n.containers.session)[
                        i.unsbjs(n.containers.session)
                      ][n.aliases.session.pages_seen]
                    ) || 1),
                  (b += 1))
                : (b = 1),
              i.set(
                n.containers.session,
                n.pack.session(b),
                x.session_length,
                w,
                q
              ),
              x.promocode &&
                !i.get(n.containers.promocode) &&
                i.set(
                  n.containers.promocode,
                  n.pack.promo(x.promocode),
                  I,
                  w,
                  q
                ),
              i.parse(n.containers)
            );
          };
        },
        {
          "./data": 2,
          "./helpers/cookies": 3,
          "./helpers/uri": 4,
          "./helpers/utils": 5,
          "./migrations": 7,
          "./params": 8,
          "./terms": 9,
        },
      ],
      7: [
        function (e, t, r) {
          "use strict";
          var n = e("./data"),
            a = e("./helpers/cookies");
          t.exports = {
            go: function (e, t, r) {
              var i,
                s = this.migrations,
                o = { l: e, d: t, i: r };
              if (a.get(n.containers.first) || a.get(n.service.migrations)) {
                if (!a.get(n.service.migrations))
                  for (i = 0; i < s.length; i++) s[i].go(s[i].id, o);
              } else {
                var c = [];
                for (i = 0; i < s.length; i++) c.push(s[i].id);
                var u = "";
                for (i = 0; i < c.length; i++)
                  (u += c[i] + "=1"), i < c.length - 1 && (u += n.delimiter);
                a.set(n.service.migrations, u, o.l, o.d, o.i);
              }
            },
            migrations: [
              {
                id: "1418474375998",
                version: "1.0.0-beta",
                go: function (e, t) {
                  var r = e + "=1",
                    i = e + "=0",
                    s = function (e, t, r) {
                      return t || r ? e : n.delimiter;
                    };
                  try {
                    var o = [];
                    for (var c in n.containers)
                      n.containers.hasOwnProperty(c) && o.push(n.containers[c]);
                    for (var u = 0; u < o.length; u++)
                      if (a.get(o[u])) {
                        var p = a.get(o[u]).replace(/(\|)?\|(\|)?/g, s);
                        a.destroy(o[u], t.d, t.i),
                          a.destroy(o[u], t.d, !t.i),
                          a.set(o[u], p, t.l, t.d, t.i);
                      }
                    a.get(n.containers.session) &&
                      a.set(
                        n.containers.session,
                        n.pack.session(0),
                        t.l,
                        t.d,
                        t.i
                      ),
                      a.set(n.service.migrations, r, t.l, t.d, t.i);
                  } catch (f) {
                    a.set(n.service.migrations, i, t.l, t.d, t.i);
                  }
                },
              },
            ],
          };
        },
        { "./data": 2, "./helpers/cookies": 3 },
      ],
      8: [
        function (e, t, r) {
          "use strict";
          var n = e("./terms"),
            a = e("./helpers/uri");
          t.exports = {
            fetch: function (e) {
              var t = e || {},
                r = {};
              if (
                ((r.lifetime = this.validate.checkFloat(t.lifetime) || 6),
                (r.lifetime = parseInt(30 * r.lifetime * 24 * 60)),
                (r.session_length =
                  this.validate.checkInt(t.session_length) || 30),
                (r.timezone_offset = this.validate.checkInt(t.timezone_offset)),
                (r.base64 = t.base64 || !1),
                (r.campaign_param = t.campaign_param || !1),
                (r.term_param = t.term_param || !1),
                (r.content_param = t.content_param || !1),
                (r.user_ip = t.user_ip || n.none),
                t.promocode
                  ? ((r.promocode = {}),
                    (r.promocode.min = parseInt(t.promocode.min) || 1e5),
                    (r.promocode.max = parseInt(t.promocode.max) || 999999))
                  : (r.promocode = !1),
                t.typein_attributes &&
                t.typein_attributes.source &&
                t.typein_attributes.medium
                  ? ((r.typein_attributes = {}),
                    (r.typein_attributes.source = t.typein_attributes.source),
                    (r.typein_attributes.medium = t.typein_attributes.medium))
                  : (r.typein_attributes = {
                      source: "(direct)",
                      medium: "(none)",
                    }),
                t.domain && this.validate.isString(t.domain)
                  ? (r.domain = { host: t.domain, isolate: !1 })
                  : t.domain && t.domain.host
                  ? (r.domain = t.domain)
                  : (r.domain = {
                      host: a.getHost(document.location.hostname),
                      isolate: !1,
                    }),
                (r.referrals = []),
                t.referrals && t.referrals.length > 0)
              )
                for (var i = 0; i < t.referrals.length; i++)
                  t.referrals[i].host && r.referrals.push(t.referrals[i]);
              if (((r.organics = []), t.organics && t.organics.length > 0))
                for (var s = 0; s < t.organics.length; s++)
                  t.organics[s].host &&
                    t.organics[s].param &&
                    r.organics.push(t.organics[s]);
              return (
                r.organics.push({
                  host: "bing.com",
                  param: "q",
                  display: "bing",
                }),
                r.organics.push({
                  host: "yahoo.com",
                  param: "p",
                  display: "yahoo",
                }),
                r.organics.push({
                  host: "about.com",
                  param: "q",
                  display: "about",
                }),
                r.organics.push({
                  host: "aol.com",
                  param: "q",
                  display: "aol",
                }),
                r.organics.push({
                  host: "ask.com",
                  param: "q",
                  display: "ask",
                }),
                r.organics.push({
                  host: "globososo.com",
                  param: "q",
                  display: "globo",
                }),
                r.organics.push({
                  host: "go.mail.ru",
                  param: "q",
                  display: "go.mail.ru",
                }),
                r.organics.push({
                  host: "rambler.ru",
                  param: "query",
                  display: "rambler",
                }),
                r.organics.push({
                  host: "tut.by",
                  param: "query",
                  display: "tut.by",
                }),
                r.referrals.push({ host: "t.co", display: "twitter.com" }),
                r.referrals.push({
                  host: "plus.url.google.com",
                  display: "plus.google.com",
                }),
                r
              );
            },
            validate: {
              checkFloat: function (e) {
                return !(!e || !this.isNumeric(parseFloat(e))) && parseFloat(e);
              },
              checkInt: function (e) {
                return !(!e || !this.isNumeric(parseInt(e))) && parseInt(e);
              },
              isNumeric: function (e) {
                return !isNaN(e);
              },
              isString: function (e) {
                return "[object String]" === Object.prototype.toString.call(e);
              },
            },
          };
        },
        { "./helpers/uri": 4, "./terms": 9 },
      ],
      9: [
        function (e, t, r) {
          "use strict";
          t.exports = {
            traffic: {
              utm: "utm",
              organic: "organic",
              referral: "referral",
              typein: "typein",
            },
            referer: {
              referral: "referral",
              organic: "organic",
              social: "social",
            },
            none: "(none)",
            oops: "(Houston, we have a problem)",
          };
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
!(function (t) {
  "use strict";
  const e = t.params,
    n =
      (document.querySelector.bind(document),
      (t, e) => e.split(".").reduce((t, e) => t && t[e], t)),
    i = () => null,
    s = (t) => (null === t || t === undefined ? "" : t),
    o = "wc/store/checkout";
  function a(t) {
    window.wp &&
      window.wp.data &&
      window.wp.data.dispatch &&
      window.wc &&
      window.wc.wcBlocksData &&
      window.wp.data
        .dispatch(window.wc.wcBlocksData.CHECKOUT_STORE_KEY)
        .__internalSetExtensionData("woocommerce/order-attribution", t, !0);
  }
  function r() {
    return "undefined" != typeof sbjs;
  }
  function c() {
    if (
      window.wp &&
      window.wp.data &&
      "function" == typeof window.wp.data.subscribe
    ) {
      const e = window.wp.data.subscribe(function () {
        e(), a(t.getAttributionData());
      }, o);
    }
  }
  (t.getAttributionData = function () {
    const s = e.allowTracking && r() ? n : i,
      o = r() ? sbjs.get : {},
      a = Object.entries(t.fields).map(([t, e]) => [t, s(o, e)]);
    return Object.fromEntries(a);
  }),
    (t.setOrderTracking = function (n) {
      if (((e.allowTracking = n), n)) {
        if (!r()) return;
        sbjs.init({
          lifetime: Number(e.lifetime),
          session_length: Number(e.session),
          base64: Boolean(e.base64),
          timezone_offset: "0",
        });
      } else
        !(function () {
          const t = window.location.hostname;
          [
            "sbjs_current",
            "sbjs_current_add",
            "sbjs_first",
            "sbjs_first_add",
            "sbjs_session",
            "sbjs_udata",
            "sbjs_migrations",
            "sbjs_promo",
          ].forEach((e) => {
            document.cookie = `${e}=; path=/; max-age=-999; domain=.${t};`;
          });
        })();
      const i = t.getAttributionData();
      !(function (t) {
        for (const e of document.querySelectorAll(
          "wc-order-attribution-inputs"
        ))
          e.values = t;
      })(i),
        a(i);
    }),
    t.setOrderTracking(e.allowTracking),
    "loading" === document.readyState
      ? document.addEventListener("DOMContentLoaded", c)
      : c(),
    window.customElements.define(
      "wc-order-attribution-inputs",
      class extends HTMLElement {
        constructor() {
          if (
            (super(),
            (this._fieldNames = Object.keys(t.fields)),
            this.hasOwnProperty("_values"))
          ) {
            let t = this.values;
            delete this.values, (this.values = t || {});
          }
        }
        connectedCallback() {
          this.innerHTML = "";
          const t = new DocumentFragment();
          for (const n of this._fieldNames) {
            const i = document.createElement("input");
            (i.type = "hidden"),
              (i.name = `${e.prefix}${n}`),
              (i.value = s((this.values && this.values[n]) || "")),
              t.appendChild(i);
          }
          this.appendChild(t);
        }
        set values(t) {
          if (((this._values = t), this.isConnected))
            for (const t of this._fieldNames) {
              const n = this.querySelector(`input[name="${e.prefix}${t}"]`);
              n
                ? (n.value = s(this.values[t]))
                : console.warn(
                    `Field "${t}" not found. ` +
                      "Most likely, the '<wc-order-attribution-inputs>' element was manipulated."
                  );
            }
        }
        get values() {
          return this._values;
        }
      }
    );
})(window.wc_order_attribution);
(function ($) {
  "use strict";
  var isIe = /(trident|msie)/i.test(navigator.userAgent);
  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener(
      "hashchange",
      function () {
        var id = location.hash.substring(1),
          element;
        if (!/^[A-z0-9_-]+$/.test(id)) {
          return;
        }
        element = document.getElementById(id);
        if (element) {
          if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
            element.tabIndex = -1;
          }
          element.focus();
        }
      },
      false
    );
  }
})();
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    factory(require("jquery"));
  } else {
    factory(window.jQuery || window.Zepto);
  }
})(function ($) {
  var CLOSE_EVENT = "Close",
    BEFORE_CLOSE_EVENT = "BeforeClose",
    AFTER_CLOSE_EVENT = "AfterClose",
    BEFORE_APPEND_EVENT = "BeforeAppend",
    MARKUP_PARSE_EVENT = "MarkupParse",
    OPEN_EVENT = "Open",
    CHANGE_EVENT = "Change",
    NS = "mfp",
    EVENT_NS = "." + NS,
    READY_CLASS = "mfp-ready",
    REMOVING_CLASS = "mfp-removing",
    PREVENT_CLOSE_CLASS = "mfp-prevent-close";
  var mfp,
    MagnificPopup = function () {},
    _isJQ = !!window.jQuery,
    _prevStatus,
    _window = $(window),
    _document,
    _prevContentType,
    _wrapClasses,
    _currPopupType;
  var _mfpOn = function (name, f) {
      mfp.ev.on(NS + name + EVENT_NS, f);
    },
    _getEl = function (className, appendTo, html, raw) {
      var el = document.createElement("div");
      el.className = "mfp-" + className;
      if (html) {
        el.innerHTML = html;
      }
      if (!raw) {
        el = $(el);
        if (appendTo) {
          el.appendTo(appendTo);
        }
      } else if (appendTo) {
        appendTo.appendChild(el);
      }
      return el;
    },
    _mfpTrigger = function (e, data) {
      mfp.ev.triggerHandler(NS + e, data);
      if (mfp.st.callbacks) {
        e = e.charAt(0).toLowerCase() + e.slice(1);
        if (mfp.st.callbacks[e]) {
          mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
        }
      }
    },
    _getCloseBtn = function (type) {
      if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
        mfp.currTemplate.closeBtn = $(
          mfp.st.closeMarkup.replace("%title%", mfp.st.tClose)
        );
        _currPopupType = type;
      }
      return mfp.currTemplate.closeBtn;
    },
    _checkInstance = function () {
      if (!$.magnificPopup.instance) {
        mfp = new MagnificPopup();
        mfp.init();
        $.magnificPopup.instance = mfp;
      }
    },
    supportsTransitions = function () {
      var s = document.createElement("p").style,
        v = ["ms", "O", "Moz", "Webkit"];
      if (s["transition"] !== undefined) {
        return true;
      }
      while (v.length) {
        if (v.pop() + "Transition" in s) {
          return true;
        }
      }
      return false;
    };
  MagnificPopup.prototype = {
    constructor: MagnificPopup,
    init: function () {
      var appVersion = navigator.appVersion;
      mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
      mfp.isAndroid = /android/gi.test(appVersion);
      mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
      mfp.supportsTransition = supportsTransitions();
      mfp.probablyMobile =
        mfp.isAndroid ||
        mfp.isIOS ||
        /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
          navigator.userAgent
        );
      _document = $(document);
      mfp.popupsCache = {};
    },
    open: function (data) {
      var i;
      if (data.isObj === false) {
        mfp.items = data.items.toArray();
        mfp.index = 0;
        var items = data.items,
          item;
        for (i = 0; i < items.length; i++) {
          item = items[i];
          if (item.parsed) {
            item = item.el[0];
          }
          if (item === data.el[0]) {
            mfp.index = i;
            break;
          }
        }
      } else {
        mfp.items = $.isArray(data.items) ? data.items : [data.items];
        mfp.index = data.index || 0;
      }
      if (mfp.isOpen) {
        mfp.updateItemHTML();
        return;
      }
      mfp.types = [];
      _wrapClasses = "";
      if (data.mainEl && data.mainEl.length) {
        mfp.ev = data.mainEl.eq(0);
      } else {
        mfp.ev = _document;
      }
      if (data.key) {
        if (!mfp.popupsCache[data.key]) {
          mfp.popupsCache[data.key] = {};
        }
        mfp.currTemplate = mfp.popupsCache[data.key];
      } else {
        mfp.currTemplate = {};
      }
      mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
      mfp.fixedContentPos =
        mfp.st.fixedContentPos === "auto"
          ? !mfp.probablyMobile
          : mfp.st.fixedContentPos;
      if (mfp.st.modal) {
        mfp.st.closeOnContentClick = false;
        mfp.st.closeOnBgClick = false;
        mfp.st.showCloseBtn = false;
        mfp.st.enableEscapeKey = false;
      }
      if (!mfp.bgOverlay) {
        mfp.bgOverlay = _getEl("bg").on("click" + EVENT_NS, function () {
          mfp.close();
        });
        mfp.wrap = _getEl("wrap")
          .attr("tabindex", -1)
          .on("click" + EVENT_NS, function (e) {
            if (mfp._checkIfClose(e.target)) {
              mfp.close();
            }
          });
        mfp.container = _getEl("container", mfp.wrap);
      }
      mfp.contentContainer = _getEl("content");
      if (mfp.st.preloader) {
        mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading);
      }
      var modules = $.magnificPopup.modules;
      for (i = 0; i < modules.length; i++) {
        var n = modules[i];
        n = n.charAt(0).toUpperCase() + n.slice(1);
        mfp["init" + n].call(mfp);
      }
      _mfpTrigger("BeforeOpen");
      if (mfp.st.showCloseBtn) {
        if (!mfp.st.closeBtnInside) {
          mfp.wrap.append(_getCloseBtn());
        } else {
          _mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
            values.close_replaceWith = _getCloseBtn(item.type);
          });
          _wrapClasses += " mfp-close-btn-in";
        }
      }
      if (mfp.st.alignTop) {
        _wrapClasses += " mfp-align-top";
      }
      if (mfp.fixedContentPos) {
        mfp.wrap.css({
          overflow: mfp.st.overflowY,
          overflowX: "hidden",
          overflowY: mfp.st.overflowY,
        });
      } else {
        mfp.wrap.css({ top: _window.scrollTop(), position: "absolute" });
      }
      if (
        mfp.st.fixedBgPos === false ||
        (mfp.st.fixedBgPos === "auto" && !mfp.fixedContentPos)
      ) {
        mfp.bgOverlay.css({ height: _document.height(), position: "absolute" });
      }
      if (mfp.st.enableEscapeKey) {
        _document.on("keyup" + EVENT_NS, function (e) {
          if (e.keyCode === 27) {
            mfp.close();
          }
        });
      }
      _window.on("resize" + EVENT_NS, function () {
        mfp.updateSize();
      });
      if (!mfp.st.closeOnContentClick) {
        _wrapClasses += " mfp-auto-cursor";
      }
      if (_wrapClasses) mfp.wrap.addClass(_wrapClasses);
      var windowHeight = (mfp.wH = _window.height());
      var windowStyles = {};
      if (mfp.fixedContentPos) {
        if (mfp._hasScrollBar(windowHeight)) {
          var s = mfp._getScrollbarSize();
          if (s) {
            windowStyles.marginRight = s;
          }
        }
      }
      if (mfp.fixedContentPos) {
        if (!mfp.isIE7) {
          windowStyles.overflow = "hidden";
        } else {
          $("body, html").css("overflow", "hidden");
        }
      }
      var classesToadd = mfp.st.mainClass;
      if (mfp.isIE7) {
        classesToadd += " mfp-ie7";
      }
      if (classesToadd) {
        mfp._addClassToMFP(classesToadd);
      }
      mfp.updateItemHTML();
      _mfpTrigger("BuildControls");
      $("html").css(windowStyles);
      mfp.bgOverlay
        .add(mfp.wrap)
        .prependTo(mfp.st.prependTo || $(document.body));
      mfp._lastFocusedEl = document.activeElement;
      setTimeout(function () {
        if (mfp.content) {
          mfp._addClassToMFP(READY_CLASS);
          mfp._setFocus();
        } else {
          mfp.bgOverlay.addClass(READY_CLASS);
        }
        _document.on("focusin" + EVENT_NS, mfp._onFocusIn);
      }, 16);
      mfp.isOpen = true;
      mfp.updateSize(windowHeight);
      _mfpTrigger(OPEN_EVENT);
      return data;
    },
    close: function () {
      if (!mfp.isOpen) return;
      _mfpTrigger(BEFORE_CLOSE_EVENT);
      mfp.isOpen = false;
      if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
        mfp._addClassToMFP(REMOVING_CLASS);
        setTimeout(function () {
          mfp._close();
        }, mfp.st.removalDelay);
      } else {
        mfp._close();
      }
    },
    _close: function () {
      _mfpTrigger(CLOSE_EVENT);
      var classesToRemove = REMOVING_CLASS + " " + READY_CLASS + " ";
      mfp.bgOverlay.detach();
      mfp.wrap.detach();
      mfp.container.empty();
      if (mfp.st.mainClass) {
        classesToRemove += mfp.st.mainClass + " ";
      }
      mfp._removeClassFromMFP(classesToRemove);
      if (mfp.fixedContentPos) {
        var windowStyles = { marginRight: "" };
        if (mfp.isIE7) {
          $("body, html").css("overflow", "");
        } else {
          windowStyles.overflow = "";
        }
        $("html").css(windowStyles);
      }
      _document.off("keyup" + EVENT_NS + " focusin" + EVENT_NS);
      mfp.ev.off(EVENT_NS);
      mfp.wrap.attr("class", "mfp-wrap").removeAttr("style");
      mfp.bgOverlay.attr("class", "mfp-bg");
      mfp.container.attr("class", "mfp-container");
      if (
        mfp.st.showCloseBtn &&
        (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)
      ) {
        if (mfp.currTemplate.closeBtn) mfp.currTemplate.closeBtn.detach();
      }
      if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
        $(mfp._lastFocusedEl).focus();
      }
      mfp.currItem = null;
      mfp.content = null;
      mfp.currTemplate = null;
      mfp.prevHeight = 0;
      _mfpTrigger(AFTER_CLOSE_EVENT);
    },
    updateSize: function (winHeight) {
      if (mfp.isIOS) {
        var zoomLevel =
          document.documentElement.clientWidth / window.innerWidth;
        var height = window.innerHeight * zoomLevel;
        mfp.wrap.css("height", height);
        mfp.wH = height;
      } else {
        mfp.wH = winHeight || _window.height();
      }
      if (!mfp.fixedContentPos) {
        mfp.wrap.css("height", mfp.wH);
      }
      _mfpTrigger("Resize");
    },
    updateItemHTML: function () {
      var item = mfp.items[mfp.index];
      mfp.contentContainer.detach();
      if (mfp.content) mfp.content.detach();
      if (!item.parsed) {
        item = mfp.parseEl(mfp.index);
      }
      var type = item.type;
      _mfpTrigger("BeforeChange", [
        mfp.currItem ? mfp.currItem.type : "",
        type,
      ]);
      mfp.currItem = item;
      if (!mfp.currTemplate[type]) {
        var markup = mfp.st[type] ? mfp.st[type].markup : false;
        _mfpTrigger("FirstMarkupParse", markup);
        if (markup) {
          mfp.currTemplate[type] = $(markup);
        } else {
          mfp.currTemplate[type] = true;
        }
      }
      if (_prevContentType && _prevContentType !== item.type) {
        mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
      }
      var newContent = mfp[
        "get" + type.charAt(0).toUpperCase() + type.slice(1)
      ](item, mfp.currTemplate[type]);
      mfp.appendContent(newContent, type);
      item.preloaded = true;
      _mfpTrigger(CHANGE_EVENT, item);
      _prevContentType = item.type;
      mfp.container.prepend(mfp.contentContainer);
      _mfpTrigger("AfterChange");
    },
    appendContent: function (newContent, type) {
      mfp.content = newContent;
      if (newContent) {
        if (
          mfp.st.showCloseBtn &&
          mfp.st.closeBtnInside &&
          mfp.currTemplate[type] === true
        ) {
          if (!mfp.content.find(".mfp-close").length) {
            mfp.content.append(_getCloseBtn());
          }
        } else {
          mfp.content = newContent;
        }
      } else {
        mfp.content = "";
      }
      _mfpTrigger(BEFORE_APPEND_EVENT);
      mfp.container.addClass("mfp-" + type + "-holder");
      mfp.contentContainer.append(mfp.content);
    },
    parseEl: function (index) {
      var item = mfp.items[index],
        type;
      if (item.tagName) {
        item = { el: $(item) };
      } else {
        type = item.type;
        item = { data: item, src: item.src };
      }
      if (item.el) {
        var types = mfp.types;
        for (var i = 0; i < types.length; i++) {
          if (item.el.hasClass("mfp-" + types[i])) {
            type = types[i];
            break;
          }
        }
        item.src = item.el.attr("data-mfp-src");
        if (!item.src) {
          item.src = item.el.attr("href");
        }
      }
      item.type = type || mfp.st.type || "inline";
      item.index = index;
      item.parsed = true;
      mfp.items[index] = item;
      _mfpTrigger("ElementParse", item);
      return mfp.items[index];
    },
    addGroup: function (el, options) {
      var eHandler = function (e) {
        e.mfpEl = this;
        mfp._openClick(e, el, options);
      };
      if (!options) {
        options = {};
      }
      var eName = "click.magnificPopup";
      options.mainEl = el;
      if (options.items) {
        options.isObj = true;
        el.off(eName).on(eName, eHandler);
      } else {
        options.isObj = false;
        if (options.delegate) {
          el.off(eName).on(eName, options.delegate, eHandler);
        } else {
          options.items = el;
          el.off(eName).on(eName, eHandler);
        }
      }
    },
    _openClick: function (e, el, options) {
      var midClick =
        options.midClick !== undefined
          ? options.midClick
          : $.magnificPopup.defaults.midClick;
      if (
        !midClick &&
        (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)
      ) {
        return;
      }
      var disableOn =
        options.disableOn !== undefined
          ? options.disableOn
          : $.magnificPopup.defaults.disableOn;
      if (disableOn) {
        if ($.isFunction(disableOn)) {
          if (!disableOn.call(mfp)) {
            return true;
          }
        } else {
          if (_window.width() < disableOn) {
            return true;
          }
        }
      }
      if (e.type) {
        e.preventDefault();
        if (mfp.isOpen) {
          e.stopPropagation();
        }
      }
      options.el = $(e.mfpEl);
      if (options.delegate) {
        options.items = el.find(options.delegate);
      }
      mfp.open(options);
    },
    updateStatus: function (status, text) {
      if (mfp.preloader) {
        if (_prevStatus !== status) {
          mfp.container.removeClass("mfp-s-" + _prevStatus);
        }
        if (!text && status === "loading") {
          text = mfp.st.tLoading;
        }
        var data = { status: status, text: text };
        _mfpTrigger("UpdateStatus", data);
        status = data.status;
        text = data.text;
        mfp.preloader.html(text);
        mfp.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        });
        mfp.container.addClass("mfp-s-" + status);
        _prevStatus = status;
      }
    },
    _checkIfClose: function (target) {
      if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
        return;
      }
      var closeOnContent = mfp.st.closeOnContentClick;
      var closeOnBg = mfp.st.closeOnBgClick;
      if (closeOnContent && closeOnBg) {
        return true;
      } else {
        if (
          !mfp.content ||
          $(target).hasClass("mfp-close") ||
          (mfp.preloader && target === mfp.preloader[0])
        ) {
          return true;
        }
        if (target !== mfp.content[0] && !$.contains(mfp.content[0], target)) {
          if (closeOnBg) {
            if ($.contains(document, target)) {
              return true;
            }
          }
        } else if (closeOnContent) {
          return true;
        }
      }
      return false;
    },
    _addClassToMFP: function (cName) {
      mfp.bgOverlay.addClass(cName);
      mfp.wrap.addClass(cName);
    },
    _removeClassFromMFP: function (cName) {
      this.bgOverlay.removeClass(cName);
      mfp.wrap.removeClass(cName);
    },
    _hasScrollBar: function (winHeight) {
      return (
        (mfp.isIE7 ? _document.height() : document.body.scrollHeight) >
        (winHeight || _window.height())
      );
    },
    _setFocus: function () {
      (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    },
    _onFocusIn: function (e) {
      if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
        mfp._setFocus();
        return false;
      }
    },
    _parseMarkup: function (template, values, item) {
      var arr;
      if (item.data) {
        values = $.extend(item.data, values);
      }
      _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
      $.each(values, function (key, value) {
        if (value === undefined || value === false) {
          return true;
        }
        arr = key.split("_");
        if (arr.length > 1) {
          var el = template.find(EVENT_NS + "-" + arr[0]);
          if (el.length > 0) {
            var attr = arr[1];
            if (attr === "replaceWith") {
              if (el[0] !== value[0]) {
                el.replaceWith(value);
              }
            } else if (attr === "img") {
              if (el.is("img")) {
                el.attr("src", value);
              } else {
                el.replaceWith(
                  $("<img>").attr("src", value).attr("class", el.attr("class"))
                );
              }
            } else {
              el.attr(arr[1], value);
            }
          }
        } else {
          template.find(EVENT_NS + "-" + key).html(value);
        }
      });
    },
    _getScrollbarSize: function () {
      if (mfp.scrollbarSize === undefined) {
        var scrollDiv = document.createElement("div");
        scrollDiv.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
        document.body.appendChild(scrollDiv);
        mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }
      return mfp.scrollbarSize;
    },
  };
  $.magnificPopup = {
    instance: null,
    proto: MagnificPopup.prototype,
    modules: [],
    open: function (options, index) {
      _checkInstance();
      if (!options) {
        options = {};
      } else {
        options = $.extend(true, {}, options);
      }
      options.isObj = true;
      options.index = index || 0;
      return this.instance.open(options);
    },
    close: function () {
      return $.magnificPopup.instance && $.magnificPopup.instance.close();
    },
    registerModule: function (name, module) {
      if (module.options) {
        $.magnificPopup.defaults[name] = module.options;
      }
      $.extend(this.proto, module.proto);
      this.modules.push(name);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: false,
      mainClass: "",
      preloader: true,
      focus: "",
      closeOnContentClick: false,
      closeOnBgClick: true,
      closeBtnInside: true,
      showCloseBtn: true,
      enableEscapeKey: true,
      modal: false,
      alignTop: false,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup:
        '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: true,
    },
  };
  $.fn.magnificPopup = function (options) {
    _checkInstance();
    var jqEl = $(this);
    if (typeof options === "string") {
      if (options === "open") {
        var items,
          itemOpts = _isJQ ? jqEl.data("magnificPopup") : jqEl[0].magnificPopup,
          index = parseInt(arguments[1], 10) || 0;
        if (itemOpts.items) {
          items = itemOpts.items[index];
        } else {
          items = jqEl;
          if (itemOpts.delegate) {
            items = items.find(itemOpts.delegate);
          }
          items = items.eq(index);
        }
        mfp._openClick({ mfpEl: items }, jqEl, itemOpts);
      } else {
        if (mfp.isOpen)
          mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
      }
    } else {
      options = $.extend(true, {}, options);
      if (_isJQ) {
        jqEl.data("magnificPopup", options);
      } else {
        jqEl[0].magnificPopup = options;
      }
      mfp.addGroup(jqEl, options);
    }
    return jqEl;
  };
  var INLINE_NS = "inline",
    _hiddenClass,
    _inlinePlaceholder,
    _lastInlineElement,
    _putInlineElementsBack = function () {
      if (_lastInlineElement) {
        _inlinePlaceholder
          .after(_lastInlineElement.addClass(_hiddenClass))
          .detach();
        _lastInlineElement = null;
      }
    };
  $.magnificPopup.registerModule(INLINE_NS, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        mfp.types.push(INLINE_NS);
        _mfpOn(CLOSE_EVENT + "." + INLINE_NS, function () {
          _putInlineElementsBack();
        });
      },
      getInline: function (item, template) {
        _putInlineElementsBack();
        if (item.src) {
          var inlineSt = mfp.st.inline,
            el = $(item.src);
          if (el.length) {
            var parent = el[0].parentNode;
            if (parent && parent.tagName) {
              if (!_inlinePlaceholder) {
                _hiddenClass = inlineSt.hiddenClass;
                _inlinePlaceholder = _getEl(_hiddenClass);
                _hiddenClass = "mfp-" + _hiddenClass;
              }
              _lastInlineElement = el
                .after(_inlinePlaceholder)
                .detach()
                .removeClass(_hiddenClass);
            }
            mfp.updateStatus("ready");
          } else {
            mfp.updateStatus("error", inlineSt.tNotFound);
            el = $("<div>");
          }
          item.inlineElement = el;
          return el;
        }
        mfp.updateStatus("ready");
        mfp._parseMarkup(template, {}, item);
        return template;
      },
    },
  });
  var AJAX_NS = "ajax",
    _ajaxCur,
    _removeAjaxCursor = function () {
      if (_ajaxCur) {
        $(document.body).removeClass(_ajaxCur);
      }
    },
    _destroyAjaxRequest = function () {
      _removeAjaxCursor();
      if (mfp.req) {
        mfp.req.abort();
      }
    };
  $.magnificPopup.registerModule(AJAX_NS, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        mfp.types.push(AJAX_NS);
        _ajaxCur = mfp.st.ajax.cursor;
        _mfpOn(CLOSE_EVENT + "." + AJAX_NS, _destroyAjaxRequest);
        _mfpOn("BeforeChange." + AJAX_NS, _destroyAjaxRequest);
      },
      getAjax: function (item) {
        if (_ajaxCur) {
          $(document.body).addClass(_ajaxCur);
        }
        mfp.updateStatus("loading");
        var opts = $.extend(
          {
            url: item.src,
            success: function (data, textStatus, jqXHR) {
              var temp = { data: data, xhr: jqXHR };
              _mfpTrigger("ParseAjax", temp);
              mfp.appendContent($(temp.data), AJAX_NS);
              item.finished = true;
              _removeAjaxCursor();
              mfp._setFocus();
              setTimeout(function () {
                mfp.wrap.addClass(READY_CLASS);
              }, 16);
              mfp.updateStatus("ready");
              _mfpTrigger("AjaxContentAdded");
            },
            error: function () {
              _removeAjaxCursor();
              item.finished = item.loadError = true;
              mfp.updateStatus(
                "error",
                mfp.st.ajax.tError.replace("%url%", item.src)
              );
            },
          },
          mfp.st.ajax.settings
        );
        mfp.req = $.ajax(opts);
        return "";
      },
    },
  });
  var _imgInterval,
    _getTitle = function (item) {
      if (item.data && item.data.title !== undefined) return item.data.title;
      var src = mfp.st.image.titleSrc;
      if (src) {
        if ($.isFunction(src)) {
          return src.call(mfp, item);
        } else if (item.el) {
          return item.el.attr(src) || "";
        }
      }
      return "";
    };
  $.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure">' +
        '<div class="mfp-close"></div>' +
        "<figure>" +
        '<div class="mfp-img"></div>' +
        "<figcaption>" +
        '<div class="mfp-bottom-bar">' +
        '<div class="mfp-title"></div>' +
        '<div class="mfp-counter"></div>' +
        "</div>" +
        "</figcaption>" +
        "</figure>" +
        "</div>",
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: true,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var imgSt = mfp.st.image,
          ns = ".image";
        mfp.types.push("image");
        _mfpOn(OPEN_EVENT + ns, function () {
          if (mfp.currItem.type === "image" && imgSt.cursor) {
            $(document.body).addClass(imgSt.cursor);
          }
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
          if (imgSt.cursor) {
            $(document.body).removeClass(imgSt.cursor);
          }
          _window.off("resize" + EVENT_NS);
        });
        _mfpOn("Resize" + ns, mfp.resizeImage);
        if (mfp.isLowIE) {
          _mfpOn("AfterChange", mfp.resizeImage);
        }
      },
      resizeImage: function () {
        var item = mfp.currItem;
        if (!item || !item.img) return;
        if (mfp.st.image.verticalFit) {
          var decr = 0;
          if (mfp.isLowIE) {
            decr =
              parseInt(item.img.css("padding-top"), 10) +
              parseInt(item.img.css("padding-bottom"), 10);
          }
          item.img.css("max-height", mfp.wH - decr);
        }
      },
      _onImageHasSize: function (item) {
        if (item.img) {
          item.hasSize = true;
          if (_imgInterval) {
            clearInterval(_imgInterval);
          }
          item.isCheckingImgSize = false;
          _mfpTrigger("ImageHasSize", item);
          if (item.imgHidden) {
            if (mfp.content) mfp.content.removeClass("mfp-loading");
            item.imgHidden = false;
          }
        }
      },
      findImageSize: function (item) {
        var counter = 0,
          img = item.img[0],
          mfpSetInterval = function (delay) {
            if (_imgInterval) {
              clearInterval(_imgInterval);
            }
            _imgInterval = setInterval(function () {
              if (img.naturalWidth > 0) {
                mfp._onImageHasSize(item);
                return;
              }
              if (counter > 200) {
                clearInterval(_imgInterval);
              }
              counter++;
              if (counter === 3) {
                mfpSetInterval(10);
              } else if (counter === 40) {
                mfpSetInterval(50);
              } else if (counter === 100) {
                mfpSetInterval(500);
              }
            }, delay);
          };
        mfpSetInterval(1);
      },
      getImage: function (item, template) {
        var guard = 0,
          onLoadComplete = function () {
            if (item) {
              if (item.img[0].complete) {
                item.img.off(".mfploader");
                if (item === mfp.currItem) {
                  mfp._onImageHasSize(item);
                  mfp.updateStatus("ready");
                }
                item.hasSize = true;
                item.loaded = true;
                _mfpTrigger("ImageLoadComplete");
              } else {
                guard++;
                if (guard < 200) {
                  setTimeout(onLoadComplete, 100);
                } else {
                  onLoadError();
                }
              }
            }
          },
          onLoadError = function () {
            if (item) {
              item.img.off(".mfploader");
              if (item === mfp.currItem) {
                mfp._onImageHasSize(item);
                mfp.updateStatus(
                  "error",
                  imgSt.tError.replace("%url%", item.src)
                );
              }
              item.hasSize = true;
              item.loaded = true;
              item.loadError = true;
            }
          },
          imgSt = mfp.st.image;
        var el = template.find(".mfp-img");
        if (el.length) {
          var img = document.createElement("img");
          img.className = "mfp-img";
          if (item.el && item.el.find("img").length) {
            img.alt = item.el.find("img").attr("alt");
          }
          item.img = $(img)
            .on("load.mfploader", onLoadComplete)
            .on("error.mfploader", onLoadError);
          img.src = item.src;
          if (el.is("img")) {
            item.img = item.img.clone();
          }
          img = item.img[0];
          if (img.naturalWidth > 0) {
            item.hasSize = true;
          } else if (!img.width) {
            item.hasSize = false;
          }
        }
        mfp._parseMarkup(
          template,
          { title: _getTitle(item), img_replaceWith: item.img },
          item
        );
        mfp.resizeImage();
        if (item.hasSize) {
          if (_imgInterval) clearInterval(_imgInterval);
          if (item.loadError) {
            template.addClass("mfp-loading");
            mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
          } else {
            template.removeClass("mfp-loading");
            mfp.updateStatus("ready");
          }
          return template;
        }
        mfp.updateStatus("loading");
        item.loading = true;
        if (!item.hasSize) {
          item.imgHidden = true;
          template.addClass("mfp-loading");
          mfp.findImageSize(item);
        }
        return template;
      },
    },
  });
  var hasMozTransform,
    getHasMozTransform = function () {
      if (hasMozTransform === undefined) {
        hasMozTransform =
          document.createElement("p").style.MozTransform !== undefined;
      }
      return hasMozTransform;
    };
  $.magnificPopup.registerModule("zoom", {
    options: {
      enabled: false,
      easing: "ease-in-out",
      duration: 300,
      opener: function (element) {
        return element.is("img") ? element : element.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var zoomSt = mfp.st.zoom,
          ns = ".zoom",
          image;
        if (!zoomSt.enabled || !mfp.supportsTransition) {
          return;
        }
        var duration = zoomSt.duration,
          getElToAnimate = function (image) {
            var newImg = image
                .clone()
                .removeAttr("style")
                .removeAttr("class")
                .addClass("mfp-animated-image"),
              transition =
                "all " + zoomSt.duration / 1000 + "s " + zoomSt.easing,
              cssObj = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden",
              },
              t = "transition";
            cssObj["-webkit-" + t] =
              cssObj["-moz-" + t] =
              cssObj["-o-" + t] =
              cssObj[t] =
                transition;
            newImg.css(cssObj);
            return newImg;
          },
          showMainContent = function () {
            mfp.content.css("visibility", "visible");
          },
          openTimeout,
          animatedImg;
        _mfpOn("BuildControls" + ns, function () {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.content.css("visibility", "hidden");
            image = mfp._getItemToZoom();
            if (!image) {
              showMainContent();
              return;
            }
            animatedImg = getElToAnimate(image);
            animatedImg.css(mfp._getOffset());
            mfp.wrap.append(animatedImg);
            openTimeout = setTimeout(function () {
              animatedImg.css(mfp._getOffset(true));
              openTimeout = setTimeout(function () {
                showMainContent();
                setTimeout(function () {
                  animatedImg.remove();
                  image = animatedImg = null;
                  _mfpTrigger("ZoomAnimationEnded");
                }, 16);
              }, duration);
            }, 16);
          }
        });
        _mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.st.removalDelay = duration;
            if (!image) {
              image = mfp._getItemToZoom();
              if (!image) {
                return;
              }
              animatedImg = getElToAnimate(image);
            }
            animatedImg.css(mfp._getOffset(true));
            mfp.wrap.append(animatedImg);
            mfp.content.css("visibility", "hidden");
            setTimeout(function () {
              animatedImg.css(mfp._getOffset());
            }, 16);
          }
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {
            showMainContent();
            if (animatedImg) {
              animatedImg.remove();
            }
            image = null;
          }
        });
      },
      _allowZoom: function () {
        return mfp.currItem.type === "image";
      },
      _getItemToZoom: function () {
        if (mfp.currItem.hasSize) {
          return mfp.currItem.img;
        } else {
          return false;
        }
      },
      _getOffset: function (isLarge) {
        var el;
        if (isLarge) {
          el = mfp.currItem.img;
        } else {
          el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
        }
        var offset = el.offset();
        var paddingTop = parseInt(el.css("padding-top"), 10);
        var paddingBottom = parseInt(el.css("padding-bottom"), 10);
        offset.top -= $(window).scrollTop() - paddingTop;
        var obj = {
          width: el.width(),
          height:
            (_isJQ ? el.innerHeight() : el[0].offsetHeight) -
            paddingBottom -
            paddingTop,
        };
        if (getHasMozTransform()) {
          obj["-moz-transform"] = obj["transform"] =
            "translate(" + offset.left + "px," + offset.top + "px)";
        } else {
          obj.left = offset.left;
          obj.top = offset.top;
        }
        return obj;
      },
    },
  });
  var IFRAME_NS = "iframe",
    _emptyPage = "//about:blank",
    _fixIframeBugs = function (isShowing) {
      if (mfp.currTemplate[IFRAME_NS]) {
        var el = mfp.currTemplate[IFRAME_NS].find("iframe");
        if (el.length) {
          if (!isShowing) {
            el[0].src = _emptyPage;
          }
          if (mfp.isIE8) {
            el.css("display", isShowing ? "block" : "none");
          }
        }
      }
    };
  $.magnificPopup.registerModule(IFRAME_NS, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' +
        "</div>",
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "https://player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        mfp.types.push(IFRAME_NS);
        _mfpOn("BeforeChange", function (e, prevType, newType) {
          if (prevType !== newType) {
            if (prevType === IFRAME_NS) {
              _fixIframeBugs();
            } else if (newType === IFRAME_NS) {
              _fixIframeBugs(true);
            }
          }
        });
        _mfpOn(CLOSE_EVENT + "." + IFRAME_NS, function () {
          _fixIframeBugs();
        });
      },
      getIframe: function (item, template) {
        var embedSrc = item.src;
        var iframeSt = mfp.st.iframe;
        $.each(iframeSt.patterns, function () {
          if (embedSrc.indexOf(this.index) > -1) {
            if (this.id) {
              if (typeof this.id === "string") {
                embedSrc = embedSrc.substr(
                  embedSrc.lastIndexOf(this.id) + this.id.length,
                  embedSrc.length
                );
              } else {
                embedSrc = this.id.call(this, embedSrc);
              }
            }
            embedSrc = this.src.replace("%id%", embedSrc);
            return false;
          }
        });
        var dataObj = {};
        if (iframeSt.srcAction) {
          dataObj[iframeSt.srcAction] = embedSrc;
        }
        mfp._parseMarkup(template, dataObj, item);
        mfp.updateStatus("ready");
        return template;
      },
    },
  });
  var _getLoopedId = function (index) {
      var numSlides = mfp.items.length;
      if (index > numSlides - 1) {
        return index - numSlides;
      } else if (index < 0) {
        return numSlides + index;
      }
      return index;
    },
    _replaceCurrTotal = function (text, curr, total) {
      return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
    };
  $.magnificPopup.registerModule("gallery", {
    options: {
      enabled: false,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: true,
      arrows: true,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var gSt = mfp.st.gallery,
          ns = ".mfp-gallery";
        mfp.direction = true;
        if (!gSt || !gSt.enabled) return false;
        _wrapClasses += " mfp-gallery";
        _mfpOn(OPEN_EVENT + ns, function () {
          if (gSt.navigateByImgClick) {
            mfp.wrap.on("click" + ns, ".mfp-img", function () {
              if (mfp.items.length > 1) {
                mfp.next();
                return false;
              }
            });
          }
          _document.on("keydown" + ns, function (e) {
            if (e.keyCode === 37) {
              mfp.prev();
            } else if (e.keyCode === 39) {
              mfp.next();
            }
          });
        });
        _mfpOn("UpdateStatus" + ns, function (e, data) {
          if (data.text) {
            data.text = _replaceCurrTotal(
              data.text,
              mfp.currItem.index,
              mfp.items.length
            );
          }
        });
        _mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
          var l = mfp.items.length;
          values.counter =
            l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : "";
        });
        _mfpOn("BuildControls" + ns, function () {
          if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
            var markup = gSt.arrowMarkup,
              arrowLeft = (mfp.arrowLeft = $(
                markup
                  .replace(/%title%/gi, gSt.tPrev)
                  .replace(/%dir%/gi, "left")
              ).addClass(PREVENT_CLOSE_CLASS)),
              arrowRight = (mfp.arrowRight = $(
                markup
                  .replace(/%title%/gi, gSt.tNext)
                  .replace(/%dir%/gi, "right")
              ).addClass(PREVENT_CLOSE_CLASS));
            arrowLeft.click(function () {
              mfp.prev();
            });
            arrowRight.click(function () {
              mfp.next();
            });
            mfp.container.append(arrowLeft.add(arrowRight));
          }
        });
        _mfpOn(CHANGE_EVENT + ns, function () {
          if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
          mfp._preloadTimeout = setTimeout(function () {
            mfp.preloadNearbyImages();
            mfp._preloadTimeout = null;
          }, 16);
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
          _document.off(ns);
          mfp.wrap.off("click" + ns);
          mfp.arrowRight = mfp.arrowLeft = null;
        });
      },
      next: function () {
        mfp.direction = true;
        mfp.index = _getLoopedId(mfp.index + 1);
        mfp.updateItemHTML();
      },
      prev: function () {
        mfp.direction = false;
        mfp.index = _getLoopedId(mfp.index - 1);
        mfp.updateItemHTML();
      },
      goTo: function (newIndex) {
        mfp.direction = newIndex >= mfp.index;
        mfp.index = newIndex;
        mfp.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var p = mfp.st.gallery.preload,
          preloadBefore = Math.min(p[0], mfp.items.length),
          preloadAfter = Math.min(p[1], mfp.items.length),
          i;
        for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
          mfp._preloadItem(mfp.index + i);
        }
        for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
          mfp._preloadItem(mfp.index - i);
        }
      },
      _preloadItem: function (index) {
        index = _getLoopedId(index);
        if (mfp.items[index].preloaded) {
          return;
        }
        var item = mfp.items[index];
        if (!item.parsed) {
          item = mfp.parseEl(index);
        }
        _mfpTrigger("LazyLoad", item);
        if (item.type === "image") {
          item.img = $('<img class="mfp-img" />')
            .on("load.mfploader", function () {
              item.hasSize = true;
            })
            .on("error.mfploader", function () {
              item.hasSize = true;
              item.loadError = true;
              _mfpTrigger("LazyLoadError", item);
            })
            .attr("src", item.src);
        }
        item.preloaded = true;
      },
    },
  });
  var RETINA_NS = "retina";
  $.magnificPopup.registerModule(RETINA_NS, {
    options: {
      replaceSrc: function (item) {
        return item.src.replace(/\.\w+$/, function (m) {
          return "@2x" + m;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var st = mfp.st.retina,
            ratio = st.ratio;
          ratio = !isNaN(ratio) ? ratio : ratio();
          if (ratio > 1) {
            _mfpOn("ImageHasSize" + "." + RETINA_NS, function (e, item) {
              item.img.css({
                "max-width": item.img[0].naturalWidth / ratio,
                width: "100%",
              });
            });
            _mfpOn("ElementParse" + "." + RETINA_NS, function (e, item) {
              item.src = st.replaceSrc(item, ratio);
            });
          }
        }
      },
    },
  });
  _checkInstance();
});
/*! Grained.js
 * Author : Sarath Saleem  - https://github.com/sarathsaleem
 * MIT license: http://opensource.org/licenses/MIT
 * GitHub : https://github.com/sarathsaleem/grained
 * v0.0.1
 */
(function (window, doc) {
  "use strict";
  function grained(ele, opt) {
    var element = null,
      elementId = null,
      selectorElement = null;
    if (typeof ele === "string") {
      element = doc.getElementById(ele.split("#")[1]);
    }
    if (!element) {
      console.error("Grained: cannot find the element with id " + ele);
      return;
    } else {
      elementId = element.id;
    }
    if (element.style.position !== "absolute") {
      element.style.position = "relative";
    }
    element.style.overflow = "hidden";
    var prefixes = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"];
    var options = {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.1,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1,
      grainChaos: 0.5,
      grainSpeed: 20,
    };
    Object.keys(opt).forEach(function (key) {
      options[key] = opt[key];
    });
    var generateNoise = function () {
      var canvas = doc.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = options.patternWidth;
      canvas.height = options.patternHeight;
      for (var w = 0; w < options.patternWidth; w += options.grainDensity) {
        for (var h = 0; h < options.patternHeight; h += options.grainDensity) {
          var rgb = (Math.random() * 256) | 0;
          ctx.fillStyle =
            "rgba(" + [rgb, rgb, rgb, options.grainOpacity].join() + ")";
          ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
        }
      }
      return canvas.toDataURL("image/png");
    };
    function addCSSRule(sheet, selector, rules, index) {
      var ins = "";
      if (selector.length) {
        ins = selector + "{" + rules + "}";
      } else {
        ins = rules;
      }
      if ("insertRule" in sheet) {
        sheet.insertRule(ins, index);
      } else if ("addRule" in sheet) {
        sheet.addRule(selector, rules, index);
      }
    }
    var noise = generateNoise();
    var animation = "",
      keyFrames = [
        "0%:-10%,10%",
        "10%:-25%,0%",
        "20%:-30%,10%",
        "30%:-30%,30%",
        "40%::-20%,20%",
        "50%:-15%,10%",
        "60%:-20%,20%",
        "70%:-5%,20%",
        "80%:-25%,5%",
        "90%:-30%,25%",
        "100%:-10%,10%",
      ];
    var pre = prefixes.length;
    while (pre--) {
      animation += "@" + prefixes[pre] + "keyframes grained{";
      for (var key = 0; key < keyFrames.length; key++) {
        var keyVal = keyFrames[key].split(":");
        animation += keyVal[0] + "{";
        animation += prefixes[pre] + "transform:translate(" + keyVal[1] + ");";
        animation += "}";
      }
      animation += "}";
    }
    var animationAdded = doc.getElementById("grained-animation");
    if (animationAdded) {
      animationAdded.parentElement.removeChild(animationAdded);
    }
    var style = doc.createElement("style");
    style.type = "text/css";
    style.id = "grained-animation";
    style.innerHTML = animation;
    doc.body.appendChild(style);
    var styleAdded = doc.getElementById("grained-animation-" + elementId);
    if (styleAdded) {
      styleAdded.parentElement.removeChild(styleAdded);
    }
    style = doc.createElement("style");
    style.type = "text/css";
    style.id = "grained-animation-" + elementId;
    doc.body.appendChild(style);
    var rule = "background-image: url(" + noise + ");";
    rule +=
      'position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;';
    pre = prefixes.length;
    if (options.animate) {
      while (pre--) {
        rule += prefixes[pre] + "animation-name:grained;";
        rule += prefixes[pre] + "animation-iteration-count: infinite;";
        rule +=
          prefixes[pre] + "animation-duration: " + options.grainChaos + "s;";
        rule +=
          prefixes[pre] +
          "animation-timing-function: steps(" +
          options.grainSpeed +
          ", end);";
      }
    }
    selectorElement = "#" + elementId + "::before";
    addCSSRule(style.sheet, selectorElement, rule);
  }
  window.grained = grained;
})(window, document);
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
        t());
})(this, function () {
  "use strict";
  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function t(s, a) {
    void 0 === s && (s = {}),
      void 0 === a && (a = {}),
      Object.keys(a).forEach((i) => {
        void 0 === s[i]
          ? (s[i] = a[i])
          : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
      });
  }
  const s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function a() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  const i = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }
  class n extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function l(e) {
    void 0 === e && (e = []);
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...l(e)) : t.push(e);
      }),
      t
    );
  }
  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function d(e, t) {
    const s = r(),
      i = a();
    let l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);
    if ("string" == typeof e) {
      const s = e.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"),
          0 === s.indexOf("<tr") && (e = "tbody"),
          (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
          0 === s.indexOf("<tbody") && (e = "table"),
          0 === s.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          l.push(t.childNodes[e]);
      } else
        l = (function (e, t) {
          if ("string" != typeof e) return [e];
          const s = [],
            a = t.querySelectorAll(e);
          for (let e = 0; e < a.length; e += 1) s.push(a[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }
    return new n(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(l)
    );
  }
  d.fn = n.prototype;
  const c = {
    addClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...a);
        }),
        this
      );
    },
    removeClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...a);
        }),
        this
      );
    },
    hasClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(" ")));
      return (
        o(this, (e) => a.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(" ")));
      this.forEach((e) => {
        a.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      let [a, i, r, n] = t;
      function l(e) {
        const t = e.target;
        if (!t) return;
        const s = e.target.dom7EventData || [];
        if ((s.indexOf(e) < 0 && s.unshift(e), d(t).is(i))) r.apply(t, s);
        else {
          const e = d(t).parents();
          for (let t = 0; t < e.length; t += 1)
            d(e[t]).is(i) && r.apply(e[t], s);
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }
      "function" == typeof t[1] && (([a, r, n] = t), (i = void 0)),
        n || (n = !1);
      const c = a.split(" ");
      let p;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (i)
          for (p = 0; p < c.length; p += 1) {
            const e = c[p];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: r, proxyListener: l }),
              t.addEventListener(e, l, n);
          }
        else
          for (p = 0; p < c.length; p += 1) {
            const e = c[p];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: r, proxyListener: o }),
              t.addEventListener(e, o, n);
          }
      }
      return this;
    },
    off: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      let [a, i, r, n] = t;
      "function" == typeof t[1] && (([a, r, n] = t), (i = void 0)),
        n || (n = !1);
      const l = a.split(" ");
      for (let e = 0; e < l.length; e += 1) {
        const t = l[e];
        for (let e = 0; e < this.length; e += 1) {
          const s = this[e];
          let a;
          if (
            (!i && s.dom7Listeners
              ? (a = s.dom7Listeners[t])
              : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]),
            a && a.length)
          )
            for (let e = a.length - 1; e >= 0; e -= 1) {
              const i = a[e];
              (r && i.listener === r) ||
              (r &&
                i.listener &&
                i.listener.dom7proxy &&
                i.listener.dom7proxy === r)
                ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                : r ||
                  (s.removeEventListener(t, i.proxyListener, n),
                  a.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function () {
      const e = r();
      for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
        s[a] = arguments[a];
      const i = s[0].split(" "),
        n = s[1];
      for (let t = 0; t < i.length; t += 1) {
        const a = i[t];
        for (let t = 0; t < this.length; t += 1) {
          const i = this[t];
          if (e.CustomEvent) {
            const t = new e.CustomEvent(a, {
              detail: n,
              bubbles: !0,
              cancelable: !0,
            });
            (i.dom7EventData = s.filter((e, t) => t > 0)),
              i.dispatchEvent(t),
              (i.dom7EventData = []),
              delete i.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function s(a) {
            a.target === this && (e.call(this, a), t.off("transitionend", s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = r(),
          t = a(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          l = s.clientTop || n.clientTop || 0,
          o = s.clientLeft || n.clientLeft || 0,
          d = s === e ? e.scrollY : s.scrollTop,
          c = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + d - l, left: i.left + c - o };
      }
      return null;
    },
    css: function (e, t) {
      const s = r();
      let a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (const t in e) this[a].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = r(),
        s = a(),
        i = this[0];
      let l, o;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
          if (l[o] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return d([]);
      if (e < 0) {
        const s = t + e;
        return d(s < 0 ? [] : [this[s]]);
      }
      return d([this[e]]);
    },
    append: function () {
      let e;
      const t = a();
      for (let s = 0; s < arguments.length; s += 1) {
        e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        for (let s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const a = t.createElement("div");
            for (a.innerHTML = e; a.firstChild; )
              this[s].appendChild(a.firstChild);
          } else if (e instanceof n)
            for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
          else this[s].appendChild(e);
      }
      return this;
    },
    prepend: function (e) {
      const t = a();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          const a = t.createElement("div");
          for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof n)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
            ? d([this[0].nextElementSibling])
            : d([])
          : this[0].nextElementSibling
          ? d([this[0].nextElementSibling])
          : d([])
        : d([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.nextElementSibling; ) {
        const a = s.nextElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && d(t.previousElementSibling).is(e)
            ? d([t.previousElementSibling])
            : d([])
          : t.previousElementSibling
          ? d([t.previousElementSibling])
          : d([]);
      }
      return d([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.previousElementSibling; ) {
        const a = s.previousElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return d(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let a = this[s].parentNode;
        for (; a; ) e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
      }
      return d(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].querySelectorAll(e);
        for (let e = 0; e < a.length; e += 1) t.push(a[e]);
      }
      return d(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].children;
        for (let s = 0; s < a.length; s += 1)
          (e && !d(a[s]).is(e)) || t.push(a[s]);
      }
      return d(t);
    },
    filter: function (e) {
      return d(o(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  function p(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function u() {
    return Date.now();
  }
  function h(e, t) {
    void 0 === t && (t = "x");
    const s = r();
    let a, i, n;
    const l = (function (e) {
      const t = r();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = l.transform || l.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (n = new s.WebKitCSSMatrix("none" === i ? "" : i)))
        : ((n =
            l.MozTransform ||
            l.OTransform ||
            l.MsTransform ||
            l.msTransform ||
            l.transform ||
            l
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (a = n.toString().split(","))),
      "x" === t &&
        (i = s.WebKitCSSMatrix
          ? n.m41
          : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      "y" === t &&
        (i = s.WebKitCSSMatrix
          ? n.m42
          : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }
  function m(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function f(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function g() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < arguments.length; s += 1) {
      const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
      if (null != a && !f(a)) {
        const s = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, i = s.length; t < i; t += 1) {
          const i = s[t],
            r = Object.getOwnPropertyDescriptor(a, i);
          void 0 !== r &&
            r.enumerable &&
            (m(e[i]) && m(a[i])
              ? a[i].__swiper__
                ? (e[i] = a[i])
                : g(e[i], a[i])
              : !m(e[i]) && m(a[i])
              ? ((e[i] = {}), a[i].__swiper__ ? (e[i] = a[i]) : g(e[i], a[i]))
              : (e[i] = a[i]));
        }
      }
    }
    return e;
  }
  function v(e, t, s) {
    e.style.setProperty(t, s);
  }
  function w(e) {
    let { swiper: t, targetPosition: s, side: a } = e;
    const i = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > n ? "next" : "prev",
      p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
      u = () => {
        (l = new Date().getTime()), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = 0.5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), p(c, s)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [a]: c });
            }),
            void i.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  let b, x, y;
  function E() {
    return (
      b ||
        (b = (function () {
          const e = r(),
            t = a();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      b
    );
  }
  function C(e) {
    return (
      void 0 === e && (e = {}),
      x ||
        (x = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const s = E(),
            a = r(),
            i = a.navigator.platform,
            n = t || a.navigator.userAgent,
            l = { ios: !1, android: !1 },
            o = a.screen.width,
            d = a.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === i;
          let f = "MacIntel" === i;
          return (
            !p &&
              f &&
              s.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${o}x${d}`) >= 0 &&
              ((p = n.match(/(Version)\/([\d.]+)/)),
              p || (p = [0, 1, "13_0_0"]),
              (f = !1)),
            c && !m && ((l.os = "android"), (l.android = !0)),
            (p || h || u) && ((l.os = "ios"), (l.ios = !0)),
            l
          );
        })(e)),
      x
    );
  }
  function T() {
    return (
      y ||
        (y = (function () {
          const e = r();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      y
    );
  }
  Object.keys(c).forEach((e) => {
    Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
  });
  var $ = {
    on(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      const i = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e][i](t);
        }),
        a
      );
    },
    once(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
          r[n] = arguments[n];
        t.apply(a, r);
      }
      return (i.__emitterProxy = t), a.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const a = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((a, i) => {
                  (a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(i, 1);
                });
          }),
          s)
        : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
        r[n] = arguments[n];
      "string" == typeof r[0] || Array.isArray(r[0])
        ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
        : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
        s.unshift(a);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(a, [t, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(a, s);
              });
        }),
        e
      );
    },
  };
  var S = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : a[0].clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : a[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(a.css("padding-left") || 0, 10) -
            parseInt(a.css("padding-right") || 0, 10)),
          (s =
            s -
            parseInt(a.css("padding-top") || 0, 10) -
            parseInt(a.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const a = e.params,
        { $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e,
        o = e.virtual && a.virtual.enabled,
        d = o ? e.virtual.slides.length : e.slides.length,
        c = i.children(`.${e.params.slideClass}`),
        p = o ? e.virtual.slides.length : c.length;
      let u = [];
      const h = [],
        m = [];
      let f = a.slidesOffsetBefore;
      "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
      let g = a.slidesOffsetAfter;
      "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
      const w = e.snapGrid.length,
        b = e.slidesGrid.length;
      let x = a.spaceBetween,
        y = -f,
        E = 0,
        C = 0;
      if (void 0 === r) return;
      "string" == typeof x &&
        x.indexOf("%") >= 0 &&
        (x = (parseFloat(x.replace("%", "")) / 100) * r),
        (e.virtualSize = -x),
        n
          ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        a.centeredSlides &&
          a.cssMode &&
          (v(e.wrapperEl, "--swiper-centered-offset-before", ""),
          v(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const T = a.grid && a.grid.rows > 1 && e.grid;
      let $;
      T && e.grid.initSlides(p);
      const S =
        "auto" === a.slidesPerView &&
        a.breakpoints &&
        Object.keys(a.breakpoints).filter(
          (e) => void 0 !== a.breakpoints[e].slidesPerView
        ).length > 0;
      for (let i = 0; i < p; i += 1) {
        $ = 0;
        const n = c.eq(i);
        if (
          (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display"))
        ) {
          if ("auto" === a.slidesPerView) {
            S && (c[i].style[t("width")] = "");
            const r = getComputedStyle(n[0]),
              l = n[0].style.transform,
              o = n[0].style.webkitTransform;
            if (
              (l && (n[0].style.transform = "none"),
              o && (n[0].style.webkitTransform = "none"),
              a.roundLengths)
            )
              $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
            else {
              const e = s(r, "width"),
                t = s(r, "padding-left"),
                a = s(r, "padding-right"),
                i = s(r, "margin-left"),
                l = s(r, "margin-right"),
                o = r.getPropertyValue("box-sizing");
              if (o && "border-box" === o) $ = e + i + l;
              else {
                const { clientWidth: s, offsetWidth: r } = n[0];
                $ = e + t + a + i + l + (r - s);
              }
            }
            l && (n[0].style.transform = l),
              o && (n[0].style.webkitTransform = o),
              a.roundLengths && ($ = Math.floor($));
          } else
            ($ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView),
              a.roundLengths && ($ = Math.floor($)),
              c[i] && (c[i].style[t("width")] = `${$}px`);
          c[i] && (c[i].swiperSlideSize = $),
            m.push($),
            a.centeredSlides
              ? ((y = y + $ / 2 + E / 2 + x),
                0 === E && 0 !== i && (y = y - r / 2 - x),
                0 === i && (y = y - r / 2 - x),
                Math.abs(y) < 0.001 && (y = 0),
                a.roundLengths && (y = Math.floor(y)),
                C % a.slidesPerGroup == 0 && u.push(y),
                h.push(y))
              : (a.roundLengths && (y = Math.floor(y)),
                (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(y),
                h.push(y),
                (y = y + $ + x)),
            (e.virtualSize += $ + x),
            (E = $),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + g),
        n &&
          l &&
          ("slide" === a.effect || "coverflow" === a.effect) &&
          i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
        a.setWrapperSize &&
          i.css({ [t("width")]: `${e.virtualSize + a.spaceBetween}px` }),
        T && e.grid.updateWrapperSize($, u, t),
        !a.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < u.length; s += 1) {
          let i = u[s];
          a.roundLengths && (i = Math.floor(i)),
            u[s] <= e.virtualSize - r && t.push(i);
        }
        (u = t),
          Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - r);
      }
      if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
        const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
        c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({
          [s]: `${x}px`,
        });
      }
      if (a.centeredSlides && a.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t) => {
          e += t + (a.spaceBetween ? a.spaceBetween : 0);
        }),
          (e -= a.spaceBetween);
        const t = e - r;
        u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
      }
      if (a.centerInsufficientSlides) {
        let e = 0;
        if (
          (m.forEach((t) => {
            e += t + (a.spaceBetween ? a.spaceBetween : 0);
          }),
          (e -= a.spaceBetween),
          e < r)
        ) {
          const t = (r - e) / 2;
          u.forEach((e, s) => {
            u[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: m,
        }),
        a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
      ) {
        v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
          v(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - m[m.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (p !== d && e.emit("slidesLengthChange"),
        u.length !== w &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== b && e.emit("slidesGridLengthChange"),
        a.watchSlidesProgress && e.updateSlidesOffset(),
        !(o || a.cssMode || ("slide" !== a.effect && "fade" !== a.effect)))
      ) {
        const t = `${a.containerModifierClass}backface-hidden`,
          s = e.$el.hasClass(t);
        p <= a.maxBackfaceHiddenSlides
          ? s || e.$el.addClass(t)
          : s && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const n = (e) =>
        a
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || d([])).each((e) => {
            s.push(e);
          });
        else
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !a) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1)
        if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = e.isHorizontal()
          ? t[s].offsetLeft
          : t[s].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: a, rtlTranslate: i, snapGrid: r } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e),
        a.removeClass(s.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < a.length; e += 1) {
        const l = a[e];
        let o = l.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
        const d =
            (n + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          c =
            (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          p = -(n - o),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(l),
          t.visibleSlidesIndexes.push(e),
          a.eq(e).addClass(s.slideVisibleClass)),
          (l.progress = i ? -d : d),
          (l.originalProgress = i ? -c : c);
      }
      t.visibleSlides = d(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      let { progress: i, isBeginning: r, isEnd: n } = t;
      const l = r,
        o = n;
      0 === a
        ? ((i = 0), (r = !0), (n = !0))
        : ((i = (e - t.minTranslate()) / a), (r = i <= 0), (n = i >= 1)),
        Object.assign(t, { progress: i, isBeginning: r, isEnd: n }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !l && t.emit("reachBeginning toEdge"),
        n && !o && t.emit("reachEnd toEdge"),
        ((l && !r) || (o && !n)) && t.emit("fromEdge"),
        t.emit("progress", i);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          $wrapperEl: a,
          activeIndex: i,
          realIndex: r,
        } = e,
        n = e.virtual && s.virtual.enabled;
      let l;
      t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
      ),
        (l = n
          ? e.$wrapperEl.find(
              `.${s.slideClass}[data-swiper-slide-index="${i}"]`
            )
          : t.eq(i)),
        l.addClass(s.slideActiveClass),
        s.loop &&
          (l.hasClass(s.slideDuplicateClass)
            ? a
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass)
            : a
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass));
      let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
      let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop &&
        0 === d.length &&
        ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
        s.loop &&
          (o.hasClass(s.slideDuplicateClass)
            ? a
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${o.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass)
            : a
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${o.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass),
          d.hasClass(s.slideDuplicateClass)
            ? a
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)
            : a
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: a,
          snapGrid: i,
          params: r,
          activeIndex: n,
          realIndex: l,
          snapIndex: o,
        } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < a.length; e += 1)
          void 0 !== a[e + 1]
            ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
              ? (c = e)
              : s >= a[e] && s < a[e + 1] && (c = e + 1)
            : s >= a[e] && (c = e);
        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (i.indexOf(s) >= 0) d = i.indexOf(s);
      else {
        const e = Math.min(r.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / r.slidesPerGroup);
      }
      if ((d >= i.length && (d = i.length - 1), c === n))
        return void (d !== o && ((t.snapIndex = d), t.emit("snapIndexChange")));
      const p = parseInt(
        t.slides.eq(c).attr("data-swiper-slide-index") || c,
        10
      );
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: n,
        activeIndex: c,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        l !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        a = d(e).closest(`.${s.slideClass}`)[0];
      let i,
        r = !1;
      if (a)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === a) {
            (r = !0), (i = e);
            break;
          }
      if (!a || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = a),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              d(a).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = i),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  var M = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = h(i[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: a,
          params: i,
          $wrapperEl: r,
          wrapperEl: n,
          progress: l,
        } = s;
      let o,
        d = 0,
        c = 0;
      s.isHorizontal() ? (d = a ? -e : e) : (c = e),
        i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        i.cssMode
          ? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -d
              : -c)
          : i.virtualTranslate ||
            r.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? d : c);
      const p = s.maxTranslate() - s.minTranslate();
      (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
        o !== l && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === a && (a = !0);
      const r = this,
        { params: n, wrapperEl: l } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = a && e > o ? o : a && e < d ? d : e),
        r.updateProgress(c),
        n.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              w({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, i),
              r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit("transitionEnd"));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function P(e) {
    let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
    const { activeIndex: r, previousIndex: n } = t;
    let l = a;
    if (
      (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
      t.emit(`transition${i}`),
      s && r !== n)
    ) {
      if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`),
        "next" === l
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`);
    }
  }
  var k = {
    slideTo: function (e, t, s, a, i) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        "number" != typeof e && "string" != typeof e)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: m,
      } = r;
      if ((r.animating && l.preventInteractionOnTransition) || (!m && !a && !i))
        return !1;
      const f = Math.min(r.params.slidesPerGroupSkip, n);
      let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1);
      const v = -o[g];
      if (l.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * d[e]),
            a = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < a - (a - s) / 2
              ? (n = e)
              : t >= s && t < a && (n = e + 1)
            : t >= s && (n = e);
        }
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          v > r.translate &&
          v > r.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      let b;
      if (
        (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
        r.updateProgress(v),
        (b = n > p ? "next" : n < p ? "prev" : "reset"),
        (u && -v === r.translate) || (!u && v === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== l.effect && r.setTranslate(v),
          "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = u ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._swiperImmediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              w({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(v),
        r.updateActiveIndex(n),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, a),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, b));
              }),
            r.$wrapperEl[0].addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            ),
            r.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, a) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        "string" == typeof e)
      ) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const i = this;
      let r = e;
      return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        { animating: i, enabled: r, params: n } = a;
      if (!r) return a;
      let l = n.slidesPerGroup;
      "auto" === n.slidesPerView &&
        1 === n.slidesPerGroup &&
        n.slidesPerGroupAuto &&
        (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
      if (n.loop) {
        if (i && n.loopPreventsSlide) return !1;
        a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
      }
      return n.rewind && a.isEnd
        ? a.slideTo(0, e, t, s)
        : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        {
          params: i,
          animating: r,
          snapGrid: n,
          slidesGrid: l,
          rtlTranslate: o,
          enabled: d,
        } = a;
      if (!d) return a;
      if (i.loop) {
        if (r && i.loopPreventsSlide) return !1;
        a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = c(o ? a.translate : -a.translate),
        u = n.map((e) => c(e));
      let h = n[u.indexOf(p) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        n.forEach((t, s) => {
          p >= t && (e = s);
        }),
          void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
      }
      let m = 0;
      if (
        (void 0 !== h &&
          ((m = l.indexOf(h)),
          m < 0 && (m = a.activeIndex - 1),
          "auto" === i.slidesPerView &&
            1 === i.slidesPerGroup &&
            i.slidesPerGroupAuto &&
            ((m = m - a.slidesPerViewDynamic("previous", !0) + 1),
            (m = Math.max(m, 0)))),
        i.rewind && a.isBeginning)
      ) {
        const i =
          a.params.virtual && a.params.virtual.enabled && a.virtual
            ? a.virtual.slides.length - 1
            : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }
      return a.slideTo(m, e, t, s);
    },
    slideReset: function (e, t, s) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, s)
      );
    },
    slideToClosest: function (e, t, s, a) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === a && (a = 0.5);
      const i = this;
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, i.slidesGrid.length - 1)),
        i.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        a =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - a / 2 ||
              r > e.slides.length - e.loopedSlides + a / 2
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                p(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - a
            ? (e.loopFix(),
              (r = s
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              p(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  var z = {
    loopCreate: function () {
      const e = this,
        t = a(),
        { params: s, $wrapperEl: i } = e,
        r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
      r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let n = r.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (n.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let a = 0; a < e; a += 1) {
            const e = d(t.createElement("div")).addClass(
              `${s.slideClass} ${s.slideBlankClass}`
            );
            r.append(e);
          }
          n = r.children(`.${s.slideClass}`);
        }
      }
      "auto" !== s.slidesPerView ||
        s.loopedSlides ||
        (s.loopedSlides = n.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(s.loopedSlides || s.slidesPerView, 10)
        )),
        (e.loopedSlides += s.loopAdditionalSlides),
        e.loopedSlides > n.length &&
          e.params.loopedSlidesLimit &&
          (e.loopedSlides = n.length);
      const l = [],
        o = [];
      n.each((e, t) => {
        d(e).attr("data-swiper-slide-index", t);
      });
      for (let t = 0; t < e.loopedSlides; t += 1) {
        const e = t - Math.floor(t / n.length) * n.length;
        o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0]);
      }
      for (let e = 0; e < o.length; e += 1)
        r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = l.length - 1; e >= 0; e -= 1)
        r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: a,
        allowSlidePrev: i,
        allowSlideNext: r,
        snapGrid: n,
        rtlTranslate: l,
      } = e;
      let o;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -n[t] - e.getTranslate();
      if (t < a) {
        (o = s.length - 3 * a + t), (o += a);
        e.slideTo(o, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((l ? -e.translate : e.translate) - d);
      } else if (t >= s.length - a) {
        (o = -s.length + t + a), (o += a);
        e.slideTo(o, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((l ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: s } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        s.removeAttr("data-swiper-slide-index");
    },
  };
  function L(e) {
    const t = this,
      s = a(),
      i = r(),
      n = t.touchEventsData,
      { params: l, touches: o, enabled: c } = t;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = e;
    p.originalEvent && (p = p.originalEvent);
    let h = d(p.target);
    if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === p.type),
      !n.isTouchEvent && "which" in p && 3 === p.which)
    )
      return;
    if (!n.isTouchEvent && "button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const m = !!l.noSwipingClass && "" !== l.noSwipingClass,
      f = e.composedPath ? e.composedPath() : e.path;
    m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
    const g = l.noSwipingSelector
        ? l.noSwipingSelector
        : `.${l.noSwipingClass}`,
      v = !(!p.target || !p.target.shadowRoot);
    if (
      l.noSwiping &&
      (v
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t)
            );
          })(g, h[0])
        : h.closest(g)[0])
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    (o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX),
      (o.currentY =
        "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY);
    const w = o.currentX,
      b = o.currentY,
      x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
      y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (x && (w <= y || w >= i.innerWidth - y)) {
      if ("prevent" !== x) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (o.startX = w),
      (o.startY = b),
      (n.touchStartTime = u()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== p.type)
    ) {
      let e = !0;
      h.is(n.focusableElements) &&
        ((e = !1), "SELECT" === h[0].nodeName && (n.isTouched = !1)),
        s.activeElement &&
          d(s.activeElement).is(n.focusableElements) &&
          s.activeElement !== h[0] &&
          s.activeElement.blur();
      const a = e && t.allowTouchMove && l.touchStartPreventDefault;
      (!l.touchStartForcePreventDefault && !a) ||
        h[0].isContentEditable ||
        p.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", p);
  }
  function O(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: l, enabled: o } = s;
    if (!o) return;
    let c = e;
    if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", c)
      );
    if (i.isTouchEvent && "touchmove" !== c.type) return;
    const p =
        "touchmove" === c.type &&
        c.targetTouches &&
        (c.targetTouches[0] || c.changedTouches[0]),
      h = "touchmove" === c.type ? p.pageX : c.pageX,
      m = "touchmove" === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return (n.startX = h), void (n.startY = m);
    if (!s.allowTouchMove)
      return (
        d(c.target).is(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(n, { startX: h, startY: m, currentX: h, currentY: m }),
          (i.touchStartTime = u()))
        )
      );
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if (
          (m < n.startY && s.translate <= s.maxTranslate()) ||
          (m > n.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (h < n.startX && s.translate <= s.maxTranslate()) ||
        (h > n.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      c.target === t.activeElement &&
      d(c.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", c),
      c.targetTouches && c.targetTouches.length > 1)
    )
      return;
    (n.currentX = h), (n.currentY = m);
    const f = n.currentX - n.startX,
      g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) ||
      (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : f * f + g * g >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", c),
      void 0 === i.startMoving &&
        ((n.currentX === n.startX && n.currentY === n.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && c.cancelable && c.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
      i.isMoved ||
        (r.loop && !r.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        !r.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", c)),
      s.emit("sliderMove", c),
      (i.isMoved = !0);
    let v = s.isHorizontal() ? f : g;
    (n.diff = v),
      (v *= r.touchRatio),
      l && (v = -v),
      (s.swipeDirection = v > 0 ? "prev" : "next"),
      (i.currentTranslate = v + i.startTranslate);
    let w = !0,
      b = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (b = 0),
      v > 0 && i.currentTranslate > s.minTranslate()
        ? ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + v) ** b))
        : v < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - v) ** b)),
      w && (c.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function I(e) {
    const t = this,
      s = t.touchEventsData,
      { params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l } = t;
    if (!l) return;
    let o = e;
    if (
      (o.originalEvent && (o = o.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", o),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && a.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    a.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = u(),
      c = d - s.touchStartTime;
    if (t.allowClick) {
      const e = o.path || (o.composedPath && o.composedPath());
      t.updateClickedSlide((e && e[0]) || o.target),
        t.emit("tap click", o),
        c < 300 &&
          d - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", o);
    }
    if (
      ((s.lastClickTime = u()),
      p(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === i.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (h = a.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      a.cssMode)
    )
      return;
    if (t.params.freeMode && a.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    let m = 0,
      f = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < n.length;
      e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== n[e + t]
        ? h >= n[e] && h < n[e + t] && ((m = e), (f = n[e + t] - n[e]))
        : h >= n[e] && ((m = e), (f = n[n.length - 1] - n[n.length - 2]));
    }
    let g = null,
      v = null;
    a.rewind &&
      (t.isBeginning
        ? (v =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (g = 0));
    const w = (h - n[m]) / f,
      b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (c > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (w >= a.longSwipesRatio
          ? t.slideTo(a.rewind && t.isEnd ? g : m + b)
          : t.slideTo(m)),
        "prev" === t.swipeDirection &&
          (w > 1 - a.longSwipesRatio
            ? t.slideTo(m + b)
            : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio
            ? t.slideTo(v)
            : t.slideTo(m));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
        ? o.target === t.navigation.nextEl
          ? t.slideTo(m + b)
          : t.slideTo(m)
        : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b),
          "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
    }
  }
  function A() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = a),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function D(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function G() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
    if (!a) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let N = !1;
  function B() {}
  const H = (e, t) => {
    const s = a(),
      {
        params: i,
        touchEvents: r,
        el: n,
        wrapperEl: l,
        device: o,
        support: d,
      } = e,
      c = !!i.nested,
      p = "on" === t ? "addEventListener" : "removeEventListener",
      u = t;
    if (d.touch) {
      const t = !(
        "touchstart" !== r.start ||
        !d.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      n[p](r.start, e.onTouchStart, t),
        n[p](
          r.move,
          e.onTouchMove,
          d.passiveListener ? { passive: !1, capture: c } : c
        ),
        n[p](r.end, e.onTouchEnd, t),
        r.cancel && n[p](r.cancel, e.onTouchEnd, t);
    } else
      n[p](r.start, e.onTouchStart, !1),
        s[p](r.move, e.onTouchMove, c),
        s[p](r.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      n[p]("click", e.onClick, !0),
      i.cssMode && l[p]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[u](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            A,
            !0
          )
        : e[u]("observerUpdate", A, !0);
  };
  var X = {
    attachEvents: function () {
      const e = this,
        t = a(),
        { params: s, support: i } = e;
      (e.onTouchStart = L.bind(e)),
        (e.onTouchMove = O.bind(e)),
        (e.onTouchEnd = I.bind(e)),
        s.cssMode && (e.onScroll = G.bind(e)),
        (e.onClick = D.bind(e)),
        i.touch && !N && (t.addEventListener("touchstart", B), (N = !0)),
        H(e, "on");
    },
    detachEvents: function () {
      H(this, "off");
    },
  };
  const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var R = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: a, $el: i, device: r, support: n } = e,
        l = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((a) => {
                    e[a] && s.push(t + a);
                  })
                : "string" == typeof e && s.push(t + e);
            }),
            s
          );
        })(
          [
            "initialized",
            s.direction,
            { "pointer-events": !n.touch },
            { "free-mode": e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: a },
            { grid: s.grid && s.grid.rows > 1 },
            {
              "grid-column":
                s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
            },
            { android: r.android },
            { ios: r.ios },
            { "css-mode": s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
            { "watch-progress": s.watchSlidesProgress },
          ],
          s.containerModifierClass
        );
      t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  var W = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function q(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
        i = s[a];
      "object" == typeof i && null !== i
        ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 &&
            !0 === e[a] &&
            (e[a] = { auto: !0 }),
          a in e && "enabled" in i
            ? (!0 === e[a] && (e[a] = { enabled: !0 }),
              "object" != typeof e[a] ||
                "enabled" in e[a] ||
                (e[a].enabled = !0),
              e[a] || (e[a] = { enabled: !1 }),
              g(t, s))
            : g(t, s))
        : g(t, s);
    };
  }
  const j = {
      eventsEmitter: $,
      update: S,
      translate: M,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          a.cssMode ||
            (a.autoHeight && s.updateAutoHeight(),
            P({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          (s.animating = !1),
            a.cssMode ||
              (s.setTransition(0),
              P({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: k,
      loop: z,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = "move"), (s.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: X,
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: s,
              loopedSlides: a = 0,
              params: i,
              $el: r,
            } = e,
            n = i.breakpoints;
          if (!n || (n && 0 === Object.keys(n).length)) return;
          const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
          if (!l || e.currentBreakpoint === l) return;
          const o = (l in n ? n[l] : void 0) || e.originalParams,
            d = Y(e, i),
            c = Y(e, o),
            p = i.enabled;
          d && !c
            ? (r.removeClass(
                `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !d &&
              c &&
              (r.addClass(`${i.containerModifierClass}grid`),
              ((o.grid.fill && "column" === o.grid.fill) ||
                (!o.grid.fill && "column" === i.grid.fill)) &&
                r.addClass(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const s = i[t] && i[t].enabled,
                a = o[t] && o[t].enabled;
              s && !a && e[t].disable(), !s && a && e[t].enable();
            });
          const u = o.direction && o.direction !== i.direction,
            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
          u && s && e.changeDirection(), g(e.params, o);
          const m = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            p && !m ? e.disable() : !p && m && e.enable(),
            (e.currentBreakpoint = l),
            e.emit("_beforeBreakpoint", o),
            h &&
              s &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - a + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", o);
        },
        getBreakpoint: function (e, t, s) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
            return;
          let a = !1;
          const i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: n * t, point: e };
              }
              return { value: e, point: e };
            });
          l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < l.length; e += 1) {
            const { point: r, value: n } = l[e];
            "window" === t
              ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r)
              : n <= s.clientWidth && (a = r);
          }
          return a || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: a } = s;
          if (a) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: R,
      images: {
        loadImage: function (e, t, s, a, i, n) {
          const l = r();
          let o;
          function c() {
            n && n();
          }
          d(e).parent("picture")[0] || (e.complete && i)
            ? c()
            : t
            ? ((o = new l.Image()),
              (o.onload = c),
              (o.onerror = c),
              a && (o.sizes = a),
              s && (o.srcset = s),
              t && (o.src = t))
            : c();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const a = e.imagesToLoad[s];
            e.loadImage(
              a,
              a.currentSrc || a.getAttribute("src"),
              a.srcset || a.getAttribute("srcset"),
              a.sizes || a.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    _ = {};
  class V {
    constructor() {
      let e, t;
      for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
        a[i] = arguments[i];
      if (
        (1 === a.length &&
        a[0].constructor &&
        "Object" === Object.prototype.toString.call(a[0]).slice(8, -1)
          ? (t = a[0])
          : ([e, t] = a),
        t || (t = {}),
        (t = g({}, t)),
        e && !t.el && (t.el = e),
        t.el && d(t.el).length > 1)
      ) {
        const e = [];
        return (
          d(t.el).each((s) => {
            const a = g({}, t, { el: s });
            e.push(new V(a));
          }),
          e
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = E()),
        (r.device = C({ userAgent: t.userAgent })),
        (r.browser = T()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
      const n = {};
      r.modules.forEach((e) => {
        e({
          swiper: r,
          extendParams: q(t, n),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const l = g({}, W, n);
      return (
        (r.params = g({}, l, _, t)),
        (r.originalParams = g({}, r.params)),
        (r.passedParams = g({}, t)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((e) => {
            r.on(e, r.params.on[e]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = d),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: e,
          classNames: [],
          slides: d(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === r.params.direction,
          isVertical: () => "vertical" === r.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (r.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              r.support.touch || !r.params.simulateTouch
                ? r.touchEventsTouch
                : r.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: u(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        r.emit("_swiper"),
        r.params.init && r.init(),
        r
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s) => {
        const a = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = a[l].swiperSlideSize;
        for (let s = l + 1; s < a.length; s += 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < a.length; e += 1) {
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          i[l] - i[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (a(), e.params.autoHeight && e.updateAutoHeight())
          : ((i =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            i || a()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        a = s.params.direction;
      return (
        e || (e = "horizontal" === a ? "vertical" : "horizontal"),
        e === a ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${a}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = d(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let r = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = d(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children ? s.children(i()) : d(s).children(i());
      })();
      if (0 === r.length && t.params.createElements) {
        const e = a().createElement("div");
        (r = d(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            r.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: a, $el: i, $wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i.removeAttr("style"),
            r.removeAttr("style"),
            n &&
              n.length &&
              n
                .removeClass(
                  [
                    a.slideVisibleClass,
                    a.slideActiveClass,
                    a.slideNextClass,
                    a.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      g(_, e);
    }
    static get extendedDefaults() {
      return _;
    }
    static get defaults() {
      return W;
    }
    static installModule(e) {
      V.prototype.__modules__ || (V.prototype.__modules__ = []);
      const t = V.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => V.installModule(e)), V)
        : (V.installModule(e), V);
    }
  }
  function F(e, t, s, i) {
    const r = a();
    return (
      e.params.createElements &&
        Object.keys(i).forEach((a) => {
          if (!s[a] && !0 === s.auto) {
            let n = e.$el.children(`.${i[a]}`)[0];
            n ||
              ((n = r.createElement("div")),
              (n.className = i[a]),
              e.$el.append(n)),
              (s[a] = n),
              (t[a] = n);
          }
        }),
      s
    );
  }
  function U(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function K(e) {
    const t = this,
      { $wrapperEl: s, params: a } = t;
    if ((a.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
      for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
    else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update();
  }
  function Z(e) {
    const t = this,
      { params: s, $wrapperEl: a, activeIndex: i } = t;
    s.loop && t.loopDestroy();
    let r = i + 1;
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
      r = i + e.length;
    } else a.prepend(e);
    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
  }
  function Q(e, t) {
    const s = this,
      { $wrapperEl: a, params: i, activeIndex: r } = s;
    let n = r;
    i.loop &&
      ((n -= s.loopedSlides),
      s.loopDestroy(),
      (s.slides = a.children(`.${i.slideClass}`)));
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides.eq(t);
      e.remove(), d.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
      o = n > e ? n + t.length : n;
    } else a.append(t);
    for (let e = 0; e < d.length; e += 1) a.append(d[e]);
    i.loop && s.loopCreate(),
      i.observer || s.update(),
      i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function J(e) {
    const t = this,
      { params: s, $wrapperEl: a, activeIndex: i } = t;
    let r = i;
    s.loop &&
      ((r -= t.loopedSlides),
      t.loopDestroy(),
      (t.slides = a.children(`.${s.slideClass}`)));
    let n,
      l = r;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1)
        (n = e[s]), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      l = Math.max(l, 0);
    } else (n = e), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), (l = Math.max(l, 0));
    s.loop && t.loopCreate(),
      s.observer || t.update(),
      s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }
  function ee() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function te(e) {
    const {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d,
    } = e;
    let c;
    a("beforeInit", () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`),
        l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }),
      a("setTranslate", () => {
        s.params.effect === t && i();
      }),
      a("setTransition", (e, a) => {
        s.params.effect === t && r(a);
      }),
      a("transitionEnd", () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          s.slides.each((e) => {
            s.$(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .remove();
          }),
            o();
        }
      }),
      a("virtualUpdate", () => {
        s.params.effect === t &&
          (s.slides.length || (c = !0),
          requestAnimationFrame(() => {
            c && s.slides && s.slides.length && (i(), (c = !1));
          }));
      });
  }
  function se(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : t;
  }
  function ae(e) {
    let { swiper: t, duration: s, transformEl: a, allSlides: i } = e;
    const { slides: r, activeIndex: n, $wrapperEl: l } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      (e = i ? (a ? r.find(a) : r) : a ? r.eq(n).find(a) : r.eq(n)),
        e.transitionEnd(() => {
          if (s) return;
          if (!t || t.destroyed) return;
          (s = !0), (t.animating = !1);
          const e = ["webkitTransitionEnd", "transitionend"];
          for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
        });
    }
  }
  function ie(e, t, s) {
    const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
      i = e.transformEl ? t.find(e.transformEl) : t;
    let r = i.children(`.${a}`);
    return (
      r.length ||
        ((r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`)),
        i.append(r)),
      r
    );
  }
  Object.keys(j).forEach((e) => {
    Object.keys(j[e]).forEach((t) => {
      V.prototype[t] = j[e][t];
    });
  }),
    V.use([
      function (e) {
        let { swiper: t, on: s, emit: a } = e;
        const i = r();
        let n = null,
          l = null;
        const o = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (a("beforeResize"), a("resize"));
          },
          d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange");
          };
        s("init", () => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((n = new ResizeObserver((e) => {
                l = i.requestAnimationFrame(() => {
                  const { width: s, height: a } = t;
                  let i = s,
                    r = a;
                  e.forEach((e) => {
                    let { contentBoxSize: s, contentRect: a, target: n } = e;
                    (n && n !== t.el) ||
                      ((i = a ? a.width : (s[0] || s).inlineSize),
                      (r = a ? a.height : (s[0] || s).blockSize));
                  }),
                    (i === s && r === a) || o();
                });
              })),
              n.observe(t.el))
            : (i.addEventListener("resize", o),
              i.addEventListener("orientationchange", d));
        }),
          s("destroy", () => {
            l && i.cancelAnimationFrame(l),
              n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
              i.removeEventListener("resize", o),
              i.removeEventListener("orientationchange", d);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = [],
          l = r(),
          o = function (e, t) {
            void 0 === t && (t = {});
            const s = new (l.MutationObserver || l.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                  i("observerUpdate", e[0]);
                };
                l.requestAnimationFrame
                  ? l.requestAnimationFrame(t)
                  : l.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              n.push(s);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          a("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) o(e[t]);
              }
              o(t.$el[0], { childList: t.params.observeSlideChildren }),
                o(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          a("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const re = [
    function (e) {
      let t,
        { swiper: s, extendParams: a, on: i, emit: r } = e;
      function n(e, t) {
        const a = s.params.virtual;
        if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        const i = a.renderSlide
          ? d(a.renderSlide.call(s, e, t))
          : d(
              `<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
            );
        return (
          i.attr("data-swiper-slide-index") ||
            i.attr("data-swiper-slide-index", t),
          a.cache && (s.virtual.cache[t] = i),
          i
        );
      }
      function l(e) {
        const {
            slidesPerView: t,
            slidesPerGroup: a,
            centeredSlides: i,
          } = s.params,
          { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual,
          { from: d, to: c, slides: p, slidesGrid: u, offset: h } = s.virtual;
        s.params.cssMode || s.updateActiveIndex();
        const m = s.activeIndex || 0;
        let f, g, v;
        (f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"),
          i
            ? ((g = Math.floor(t / 2) + a + o), (v = Math.floor(t / 2) + a + l))
            : ((g = t + (a - 1) + o), (v = a + l));
        const w = Math.max((m || 0) - v, 0),
          b = Math.min((m || 0) + g, p.length - 1),
          x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
        function y() {
          s.updateSlides(),
            s.updateProgress(),
            s.updateSlidesClasses(),
            s.lazy && s.params.lazy.enabled && s.lazy.load(),
            r("virtualUpdate");
        }
        if (
          (Object.assign(s.virtual, {
            from: w,
            to: b,
            offset: x,
            slidesGrid: s.slidesGrid,
          }),
          d === w && c === b && !e)
        )
          return (
            s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`),
            s.updateProgress(),
            void r("virtualUpdate")
          );
        if (s.params.virtual.renderExternal)
          return (
            s.params.virtual.renderExternal.call(s, {
              offset: x,
              from: w,
              to: b,
              slides: (function () {
                const e = [];
                for (let t = w; t <= b; t += 1) e.push(p[t]);
                return e;
              })(),
            }),
            void (s.params.virtual.renderExternalUpdate
              ? y()
              : r("virtualUpdate"))
          );
        const E = [],
          C = [];
        if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
        else
          for (let e = d; e <= c; e += 1)
            (e < w || e > b) &&
              s.$wrapperEl
                .find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`)
                .remove();
        for (let t = 0; t < p.length; t += 1)
          t >= w &&
            t <= b &&
            (void 0 === c || e
              ? C.push(t)
              : (t > c && C.push(t), t < d && E.push(t)));
        C.forEach((e) => {
          s.$wrapperEl.append(n(p[e], e));
        }),
          E.sort((e, t) => t - e).forEach((e) => {
            s.$wrapperEl.prepend(n(p[e], e));
          }),
          s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`),
          y();
      }
      a({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      }),
        (s.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: [],
        }),
        i("beforeInit", () => {
          s.params.virtual.enabled &&
            ((s.virtual.slides = s.params.virtual.slides),
            s.classNames.push(`${s.params.containerModifierClass}virtual`),
            (s.params.watchSlidesProgress = !0),
            (s.originalParams.watchSlidesProgress = !0),
            s.params.initialSlide || l());
        }),
        i("setTranslate", () => {
          s.params.virtual.enabled &&
            (s.params.cssMode && !s._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  l();
                }, 100)))
              : l());
        }),
        i("init update resize", () => {
          s.params.virtual.enabled &&
            s.params.cssMode &&
            v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
        }),
        Object.assign(s.virtual, {
          appendSlide: function (e) {
            if ("object" == typeof e && "length" in e)
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.push(e[t]);
            else s.virtual.slides.push(e);
            l(!0);
          },
          prependSlide: function (e) {
            const t = s.activeIndex;
            let a = t + 1,
              i = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.unshift(e[t]);
              (a = t + e.length), (i = e.length);
            } else s.virtual.slides.unshift(e);
            if (s.params.virtual.cache) {
              const e = s.virtual.cache,
                t = {};
              Object.keys(e).forEach((s) => {
                const a = e[s],
                  r = a.attr("data-swiper-slide-index");
                r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                  (t[parseInt(s, 10) + i] = a);
              }),
                (s.virtual.cache = t);
            }
            l(!0), s.slideTo(a, 0);
          },
          removeSlide: function (e) {
            if (null == e) return;
            let t = s.activeIndex;
            if (Array.isArray(e))
              for (let a = e.length - 1; a >= 0; a -= 1)
                s.virtual.slides.splice(e[a], 1),
                  s.params.virtual.cache && delete s.virtual.cache[e[a]],
                  e[a] < t && (t -= 1),
                  (t = Math.max(t, 0));
            else
              s.virtual.slides.splice(e, 1),
                s.params.virtual.cache && delete s.virtual.cache[e],
                e < t && (t -= 1),
                (t = Math.max(t, 0));
            l(!0), s.slideTo(t, 0);
          },
          removeAllSlides: function () {
            (s.virtual.slides = []),
              s.params.virtual.cache && (s.virtual.cache = {}),
              l(!0),
              s.slideTo(0, 0);
          },
          update: l,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const l = a(),
        o = r();
      function c(e) {
        if (!t.enabled) return;
        const { rtlTranslate: s } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          h = 38 === i,
          m = 40 === i;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && u) || (t.isVertical() && m) || c)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && p) || (t.isVertical() && h) || d)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (l.activeElement &&
              l.activeElement.nodeName &&
              ("input" === l.activeElement.nodeName.toLowerCase() ||
                "textarea" === l.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (d || c || p || u || h || m)
          ) {
            let e = !1;
            if (
              t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
              0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
            )
              return;
            const a = t.$el,
              i = a[0].clientWidth,
              r = a[0].clientHeight,
              n = o.innerWidth,
              l = o.innerHeight,
              d = t.$el.offset();
            s && (d.left -= t.$el[0].scrollLeft);
            const c = [
              [d.left, d.top],
              [d.left + i, d.top],
              [d.left, d.top + r],
              [d.left + i, d.top + r],
            ];
            for (let t = 0; t < c.length; t += 1) {
              const s = c[t];
              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                if (0 === s[0] && 0 === s[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((d || c || p || u) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
              (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
            : ((d || c || h || m) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (c || m) && t.slideNext(),
              (d || h) && t.slidePrev()),
            n("keyPress", i);
        }
      }
      function p() {
        t.keyboard.enabled ||
          (d(l).on("keydown", c), (t.keyboard.enabled = !0));
      }
      function u() {
        t.keyboard.enabled &&
          (d(l).off("keydown", c), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        i("init", () => {
          t.params.keyboard.enabled && p();
        }),
        i("destroy", () => {
          t.keyboard.enabled && u();
        }),
        Object.assign(t.keyboard, { enable: p, disable: u });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      let l;
      s({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
        },
      }),
        (t.mousewheel = { enabled: !1 });
      let o,
        c = u();
      const h = [];
      function m() {
        t.enabled && (t.mouseEntered = !0);
      }
      function f() {
        t.enabled && (t.mouseEntered = !1);
      }
      function g(e) {
        return (
          !(
            t.params.mousewheel.thresholdDelta &&
            e.delta < t.params.mousewheel.thresholdDelta
          ) &&
          !(
            t.params.mousewheel.thresholdTime &&
            u() - c < t.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && u() - c < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), i("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), i("scroll", e.raw)),
            (c = new n.Date().getTime()),
            !1))
        );
      }
      function v(e) {
        let s = e,
          a = !0;
        if (!t.enabled) return;
        const r = t.params.mousewheel;
        t.params.cssMode && s.preventDefault();
        let n = t.$el;
        if (
          ("container" !== t.params.mousewheel.eventsTarget &&
            (n = d(t.params.mousewheel.eventsTarget)),
          !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges)
        )
          return !0;
        s.originalEvent && (s = s.originalEvent);
        let c = 0;
        const m = t.rtlTranslate ? -1 : 1,
          f = (function (e) {
            let t = 0,
              s = 0,
              a = 0,
              i = 0;
            return (
              "detail" in e && (s = e.detail),
              "wheelDelta" in e && (s = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (a = 10 * t),
              (i = 10 * s),
              "deltaY" in e && (i = e.deltaY),
              "deltaX" in e && (a = e.deltaX),
              e.shiftKey && !a && ((a = i), (i = 0)),
              (a || i) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((a *= 40), (i *= 40))
                  : ((a *= 800), (i *= 800))),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: a, pixelY: i }
            );
          })(s);
        if (r.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
            c = -f.pixelX * m;
          } else {
            if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
            c = -f.pixelY;
          }
        else
          c =
            Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
        if (0 === c) return !0;
        r.invert && (c = -c);
        let v = t.getTranslate() + c * r.sensitivity;
        if (
          (v >= t.minTranslate() && (v = t.minTranslate()),
          v <= t.maxTranslate() && (v = t.maxTranslate()),
          (a =
            !!t.params.loop ||
            !(v === t.minTranslate() || v === t.maxTranslate())),
          a && t.params.nested && s.stopPropagation(),
          t.params.freeMode && t.params.freeMode.enabled)
        ) {
          const e = { time: u(), delta: Math.abs(c), direction: Math.sign(c) },
            a =
              o &&
              e.time < o.time + 500 &&
              e.delta <= o.delta &&
              e.direction === o.direction;
          if (!a) {
            (o = void 0), t.params.loop && t.loopFix();
            let n = t.getTranslate() + c * r.sensitivity;
            const d = t.isBeginning,
              u = t.isEnd;
            if (
              (n >= t.minTranslate() && (n = t.minTranslate()),
              n <= t.maxTranslate() && (n = t.maxTranslate()),
              t.setTransition(0),
              t.setTranslate(n),
              t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses(),
              ((!d && t.isBeginning) || (!u && t.isEnd)) &&
                t.updateSlidesClasses(),
              t.params.freeMode.sticky)
            ) {
              clearTimeout(l), (l = void 0), h.length >= 15 && h.shift();
              const s = h.length ? h[h.length - 1] : void 0,
                a = h[0];
              if (
                (h.push(e),
                s && (e.delta > s.delta || e.direction !== s.direction))
              )
                h.splice(0);
              else if (
                h.length >= 15 &&
                e.time - a.time < 500 &&
                a.delta - e.delta >= 1 &&
                e.delta <= 6
              ) {
                const s = c > 0 ? 0.8 : 0.2;
                (o = e),
                  h.splice(0),
                  (l = p(() => {
                    t.slideToClosest(t.params.speed, !0, void 0, s);
                  }, 0));
              }
              l ||
                (l = p(() => {
                  (o = e),
                    h.splice(0),
                    t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (a || i("scroll", s),
              t.params.autoplay &&
                t.params.autoplayDisableOnInteraction &&
                t.autoplay.stop(),
              n === t.minTranslate() || n === t.maxTranslate())
            )
              return !0;
          }
        } else {
          const s = {
            time: u(),
            delta: Math.abs(c),
            direction: Math.sign(c),
            raw: e,
          };
          h.length >= 2 && h.shift();
          const a = h.length ? h[h.length - 1] : void 0;
          if (
            (h.push(s),
            a
              ? (s.direction !== a.direction ||
                  s.delta > a.delta ||
                  s.time > a.time + 150) &&
                g(s)
              : g(s),
            (function (e) {
              const s = t.params.mousewheel;
              if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
              } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                return !0;
              return !1;
            })(s))
          )
            return !0;
        }
        return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
      }
      function w(e) {
        let s = t.$el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (s = d(t.params.mousewheel.eventsTarget)),
          s[e]("mouseenter", m),
          s[e]("mouseleave", f),
          s[e]("wheel", v);
      }
      function b() {
        return t.params.cssMode
          ? (t.wrapperEl.removeEventListener("wheel", v), !0)
          : !t.mousewheel.enabled && (w("on"), (t.mousewheel.enabled = !0), !0);
      }
      function x() {
        return t.params.cssMode
          ? (t.wrapperEl.addEventListener(event, v), !0)
          : !!t.mousewheel.enabled &&
              (w("off"), (t.mousewheel.enabled = !1), !0);
      }
      a("init", () => {
        !t.params.mousewheel.enabled && t.params.cssMode && x(),
          t.params.mousewheel.enabled && b();
      }),
        a("destroy", () => {
          t.params.cssMode && b(), t.mousewheel.enabled && x();
        }),
        Object.assign(t.mousewheel, { enable: b, disable: x });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      function r(e) {
        let s;
        return (
          e &&
            ((s = d(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              s.length > 1 &&
              1 === t.$el.find(e).length &&
              (s = t.$el.find(e))),
          s
        );
      }
      function n(e, s) {
        const a = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[s ? "addClass" : "removeClass"](a.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
      }
      function l() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: s } = t.navigation;
        n(s, t.isBeginning && !t.params.rewind),
          n(e, t.isEnd && !t.params.rewind);
      }
      function o(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), i("navigationPrev"));
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), i("navigationNext"));
      }
      function p() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = F(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const s = r(e.nextEl),
          a = r(e.prevEl);
        s && s.length > 0 && s.on("click", c),
          a && a.length > 0 && a.on("click", o),
          Object.assign(t.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: a,
            prevEl: a && a[0],
          }),
          t.enabled ||
            (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
      }
      function u() {
        const { $nextEl: e, $prevEl: s } = t.navigation;
        e &&
          e.length &&
          (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", o),
            s.removeClass(t.params.navigation.disabledClass));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        a("init", () => {
          !1 === t.params.navigation.enabled ? h() : (p(), l());
        }),
        a("toEdge fromEdge lock unlock", () => {
          l();
        }),
        a("destroy", () => {
          u();
        }),
        a("enable disable", () => {
          const { $nextEl: e, $prevEl: s } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            s &&
              s[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        a("click", (e, s) => {
          const { $nextEl: a, $prevEl: r } = t.navigation,
            n = s.target;
          if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === n || t.pagination.el.contains(n))
            )
              return;
            let e;
            a
              ? (e = a.hasClass(t.params.navigation.hiddenClass))
              : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              a && a.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass);
          }
        });
      const h = () => {
        t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.$el.removeClass(t.params.navigation.navigationDisabledClass),
            p(),
            l();
        },
        disable: h,
        update: l,
        init: p,
        destroy: u,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const r = "swiper-pagination";
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let l = 0;
      function o() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function c(e, s) {
        const { bulletActiveClass: a } = t.params.pagination;
        e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
      }
      function p() {
        const e = t.rtl,
          s = t.params.pagination;
        if (o()) return;
        const a =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let p;
        const u = t.params.loop
          ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((p = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides),
              p > u - 1 && (p -= u),
              p < 0 && "bullets" !== t.params.paginationType && (p = u + p))
            : (p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const a = t.pagination.bullets;
          let i, o, u;
          if (
            (s.dynamicBullets &&
              ((n = a
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              r.css(
                t.isHorizontal() ? "width" : "height",
                n * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((l += p - (t.previousIndex - t.loopedSlides || 0)),
                l > s.dynamicMainBullets - 1
                  ? (l = s.dynamicMainBullets - 1)
                  : l < 0 && (l = 0)),
              (i = Math.max(p - l, 0)),
              (o = i + (Math.min(a.length, s.dynamicMainBullets) - 1)),
              (u = (o + i) / 2)),
            a.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            r.length > 1)
          )
            a.each((e) => {
              const t = d(e),
                a = t.index();
              a === p && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (a >= i &&
                    a <= o &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  a === i && c(t, "prev"),
                  a === o && c(t, "next"));
            });
          else {
            const e = a.eq(p),
              r = e.index();
            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = a.eq(i),
                n = a.eq(o);
              for (let e = i; e <= o; e += 1)
                a.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= a.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                  a.eq(a.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else c(e, "prev"), c(n, "next");
              else c(e, "prev"), c(n, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(a.length, s.dynamicMainBullets + 4),
              r = (n * i - n) / 2 - u * n,
              l = e ? "right" : "left";
            a.css(t.isHorizontal() ? l : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
            r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let e;
          e = s.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const a = (p + 1) / u;
          let i = 1,
            n = 1;
          "horizontal" === e ? (i = a) : (n = a),
            r
              .find(U(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`)
              .transition(t.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0]))
          : i("paginationUpdate", r[0]),
          t.params.watchOverflow &&
            t.enabled &&
            r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (o()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          a = t.pagination.$el;
        let r = "";
        if ("bullets" === e.type) {
          let i = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            i > s &&
            (i = s);
          for (let s = 0; s < i; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          a.html(r), (t.pagination.bullets = a.find(U(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          a.html(r)),
          "progressbar" === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            a.html(r)),
          "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
      }
      function h() {
        t.params.pagination = F(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s = d(e.el);
        0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            s.length > 1 &&
            ((s = t.$el.find(e.el)),
            s.length > 1 &&
              (s = s.filter((e) => d(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (l = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            s.addClass(e.progressbarOppositeClass),
          e.clickable &&
            s.on("click", U(e.bulletClass), function (e) {
              e.preventDefault();
              let s = d(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }),
          Object.assign(t.pagination, { $el: s, el: s[0] }),
          t.enabled || s.addClass(e.lockClass));
      }
      function m() {
        const e = t.params.pagination;
        if (o()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off("click", U(e.bulletClass));
      }
      a("init", () => {
        !1 === t.params.pagination.enabled ? f() : (h(), u(), p());
      }),
        a("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && p();
        }),
        a("snapIndexChange", () => {
          t.params.loop || p();
        }),
        a("slidesLengthChange", () => {
          t.params.loop && (u(), p());
        }),
        a("snapGridLengthChange", () => {
          t.params.loop || (u(), p());
        }),
        a("destroy", () => {
          m();
        }),
        a("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        a("lock unlock", () => {
          p();
        }),
        a("click", (e, s) => {
          const a = s.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !d(a).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && a === t.navigation.nextEl) ||
                (t.navigation.prevEl && a === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            i(!0 === e ? "paginationShow" : "paginationHide"),
              r.toggleClass(t.params.pagination.hiddenClass);
          }
        });
      const f = () => {
        t.$el.addClass(t.params.pagination.paginationDisabledClass),
          t.pagination.$el &&
            t.pagination.$el.addClass(
              t.params.pagination.paginationDisabledClass
            ),
          m();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.$el.removeClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el &&
              t.pagination.$el.removeClass(
                t.params.pagination.paginationDisabledClass
              ),
            h(),
            u(),
            p();
        },
        disable: f,
        render: u,
        update: p,
        init: h,
        destroy: m,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      const n = a();
      let l,
        o,
        c,
        u,
        h = !1,
        m = null,
        f = null;
      function g() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e, rtlTranslate: s, progress: a } = t,
          { $dragEl: i, $el: r } = e,
          n = t.params.scrollbar;
        let l = o,
          d = (c - o) * a;
        s
          ? ((d = -d),
            d > 0 ? ((l = o - d), (d = 0)) : -d + o > c && (l = c + d))
          : d < 0
          ? ((l = o + d), (d = 0))
          : d + o > c && (l = c - d),
          t.isHorizontal()
            ? (i.transform(`translate3d(${d}px, 0, 0)`),
              (i[0].style.width = `${l}px`))
            : (i.transform(`translate3d(0px, ${d}px, 0)`),
              (i[0].style.height = `${l}px`)),
          n.hide &&
            (clearTimeout(m),
            (r[0].style.opacity = 1),
            (m = setTimeout(() => {
              (r[0].style.opacity = 0), r.transition(400);
            }, 1e3)));
      }
      function v() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e } = t,
          { $dragEl: s, $el: a } = e;
        (s[0].style.width = ""),
          (s[0].style.height = ""),
          (c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight),
          (u =
            t.size /
            (t.virtualSize +
              t.params.slidesOffsetBefore -
              (t.params.centeredSlides ? t.snapGrid[0] : 0))),
          (o =
            "auto" === t.params.scrollbar.dragSize
              ? c * u
              : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal()
            ? (s[0].style.width = `${o}px`)
            : (s[0].style.height = `${o}px`),
          (a[0].style.display = u >= 1 ? "none" : ""),
          t.params.scrollbar.hide && (a[0].style.opacity = 0),
          t.params.watchOverflow &&
            t.enabled &&
            e.$el[t.isLocked ? "addClass" : "removeClass"](
              t.params.scrollbar.lockClass
            );
      }
      function w(e) {
        return t.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      }
      function b(e) {
        const { scrollbar: s, rtlTranslate: a } = t,
          { $el: i } = s;
        let r;
        (r =
          (w(e) -
            i.offset()[t.isHorizontal() ? "left" : "top"] -
            (null !== l ? l : o / 2)) /
          (c - o)),
          (r = Math.max(Math.min(r, 1), 0)),
          a && (r = 1 - r);
        const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
        t.updateProgress(n),
          t.setTranslate(n),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
      }
      function x(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, $wrapperEl: i } = t,
          { $el: n, $dragEl: o } = a;
        (h = !0),
          (l =
            e.target === o[0] || e.target === o
              ? w(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          i.transition(100),
          o.transition(100),
          b(e),
          clearTimeout(f),
          n.transition(0),
          s.hide && n.css("opacity", 1),
          t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
          r("scrollbarDragStart", e);
      }
      function y(e) {
        const { scrollbar: s, $wrapperEl: a } = t,
          { $el: i, $dragEl: n } = s;
        h &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          b(e),
          a.transition(0),
          i.transition(0),
          n.transition(0),
          r("scrollbarDragMove", e));
      }
      function E(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, $wrapperEl: i } = t,
          { $el: n } = a;
        h &&
          ((h = !1),
          t.params.cssMode &&
            (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
          s.hide &&
            (clearTimeout(f),
            (f = p(() => {
              n.css("opacity", 0), n.transition(400);
            }, 1e3))),
          r("scrollbarDragEnd", e),
          s.snapOnRelease && t.slideToClosest());
      }
      function C(e) {
        const {
            scrollbar: s,
            touchEventsTouch: a,
            touchEventsDesktop: i,
            params: r,
            support: l,
          } = t,
          o = s.$el;
        if (!o) return;
        const d = o[0],
          c = !(!l.passiveListener || !r.passiveListeners) && {
            passive: !1,
            capture: !1,
          },
          p = !(!l.passiveListener || !r.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
        if (!d) return;
        const u = "on" === e ? "addEventListener" : "removeEventListener";
        l.touch
          ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p))
          : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p));
      }
      function T() {
        const { scrollbar: e, $el: s } = t;
        t.params.scrollbar = F(
          t,
          t.originalParams.scrollbar,
          t.params.scrollbar,
          { el: "swiper-scrollbar" }
        );
        const a = t.params.scrollbar;
        if (!a.el) return;
        let i = d(a.el);
        t.params.uniqueNavElements &&
          "string" == typeof a.el &&
          i.length > 1 &&
          1 === s.find(a.el).length &&
          (i = s.find(a.el)),
          i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
        let r = i.find(`.${t.params.scrollbar.dragClass}`);
        0 === r.length &&
          ((r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
          i.append(r)),
          Object.assign(e, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }),
          a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"),
          i &&
            i[t.enabled ? "removeClass" : "addClass"](
              t.params.scrollbar.lockClass
            );
      }
      function $() {
        const e = t.params.scrollbar,
          s = t.scrollbar.$el;
        s &&
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.params.scrollbar.el && t.scrollbar.el && C("off");
      }
      s({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
          scrollbarDisabledClass: "swiper-scrollbar-disabled",
          horizontalClass: "swiper-scrollbar-horizontal",
          verticalClass: "swiper-scrollbar-vertical",
        },
      }),
        (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
        i("init", () => {
          !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g());
        }),
        i("update resize observerUpdate lock unlock", () => {
          v();
        }),
        i("setTranslate", () => {
          g();
        }),
        i("setTransition", (e, s) => {
          !(function (e) {
            t.params.scrollbar.el &&
              t.scrollbar.el &&
              t.scrollbar.$dragEl.transition(e);
          })(s);
        }),
        i("enable disable", () => {
          const { $el: e } = t.scrollbar;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.scrollbar.lockClass
            );
        }),
        i("destroy", () => {
          $();
        });
      const S = () => {
        t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.$el &&
            t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
          $();
      };
      Object.assign(t.scrollbar, {
        enable: () => {
          t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
            t.scrollbar.$el &&
              t.scrollbar.$el.removeClass(
                t.params.scrollbar.scrollbarDisabledClass
              ),
            T(),
            v(),
            g();
        },
        disable: S,
        updateSize: v,
        setTranslate: g,
        init: T,
        destroy: $,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ parallax: { enabled: !1 } });
      const i = (e, s) => {
          const { rtl: a } = t,
            i = d(e),
            r = a ? -1 : 1,
            n = i.attr("data-swiper-parallax") || "0";
          let l = i.attr("data-swiper-parallax-x"),
            o = i.attr("data-swiper-parallax-y");
          const c = i.attr("data-swiper-parallax-scale"),
            p = i.attr("data-swiper-parallax-opacity");
          if (
            (l || o
              ? ((l = l || "0"), (o = o || "0"))
              : t.isHorizontal()
              ? ((l = n), (o = "0"))
              : ((o = n), (l = "0")),
            (l =
              l.indexOf("%") >= 0
                ? parseInt(l, 10) * s * r + "%"
                : l * s * r + "px"),
            (o =
              o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px"),
            null != p)
          ) {
            const e = p - (p - 1) * (1 - Math.abs(s));
            i[0].style.opacity = e;
          }
          if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
          else {
            const e = c - (c - 1) * (1 - Math.abs(s));
            i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
          }
        },
        r = () => {
          const { $el: e, slides: s, progress: a, snapGrid: r } = t;
          e
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each((e) => {
              i(e, a);
            }),
            s.each((e, s) => {
              let n = e.progress;
              t.params.slidesPerGroup > 1 &&
                "auto" !== t.params.slidesPerView &&
                (n += Math.ceil(s / 2) - a * (r.length - 1)),
                (n = Math.min(Math.max(n, -1), 1)),
                d(e)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((e) => {
                    i(e, n);
                  });
            });
        };
      a("beforeInit", () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0));
      }),
        a("init", () => {
          t.params.parallax.enabled && r();
        }),
        a("setTranslate", () => {
          t.params.parallax.enabled && r();
        }),
        a("setTransition", (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { $el: s } = t;
              s.find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).each((t) => {
                const s = d(t);
                let a =
                  parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (a = 0), s.transition(a);
              });
            })(s);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      s({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      }),
        (t.zoom = { enabled: !1 });
      let l,
        o,
        c,
        p = 1,
        u = !1;
      const m = {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3,
        },
        f = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        g = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let v = 1;
      function w(e) {
        if (e.targetTouches.length < 2) return 1;
        const t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          a = e.targetTouches[1].pageX,
          i = e.targetTouches[1].pageY;
        return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
      }
      function b(e) {
        const s = t.support,
          a = t.params.zoom;
        if (((o = !1), (c = !1), !s.gestures)) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (o = !0), (m.scaleStart = w(e));
        }
        (m.$slideEl && m.$slideEl.length) ||
        ((m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
        0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)),
        (m.$imageEl = m.$slideEl
          .find(`.${a.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
        (m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
        0 !== m.$imageWrapEl.length)
          ? (m.$imageEl && m.$imageEl.transition(0), (u = !0))
          : (m.$imageEl = void 0);
      }
      function x(e) {
        const s = t.support,
          a = t.params.zoom,
          i = t.zoom;
        if (!s.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (c = !0), (m.scaleMove = w(e));
        }
        m.$imageEl && 0 !== m.$imageEl.length
          ? (s.gestures
              ? (i.scale = e.scale * p)
              : (i.scale = (m.scaleMove / m.scaleStart) * p),
            i.scale > m.maxRatio &&
              (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** 0.5),
            i.scale < a.minRatio &&
              (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5),
            m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
          : "gesturechange" === e.type && b(e);
      }
      function y(e) {
        const s = t.device,
          a = t.support,
          i = t.params.zoom,
          r = t.zoom;
        if (!a.gestures) {
          if (!o || !c) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !s.android)
          )
            return;
          (o = !1), (c = !1);
        }
        m.$imageEl &&
          0 !== m.$imageEl.length &&
          ((r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio)),
          m.$imageEl
            .transition(t.params.speed)
            .transform(`translate3d(0,0,0) scale(${r.scale})`),
          (p = r.scale),
          (u = !1),
          1 === r.scale && (m.$slideEl = void 0));
      }
      function E(e) {
        const s = t.zoom;
        if (!m.$imageEl || 0 === m.$imageEl.length) return;
        if (((t.allowClick = !1), !f.isTouched || !m.$slideEl)) return;
        f.isMoved ||
          ((f.width = m.$imageEl[0].offsetWidth),
          (f.height = m.$imageEl[0].offsetHeight),
          (f.startX = h(m.$imageWrapEl[0], "x") || 0),
          (f.startY = h(m.$imageWrapEl[0], "y") || 0),
          (m.slideWidth = m.$slideEl[0].offsetWidth),
          (m.slideHeight = m.$slideEl[0].offsetHeight),
          m.$imageWrapEl.transition(0));
        const a = f.width * s.scale,
          i = f.height * s.scale;
        if (!(a < m.slideWidth && i < m.slideHeight)) {
          if (
            ((f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
            (f.maxX = -f.minX),
            (f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
            (f.maxY = -f.minY),
            (f.touchesCurrent.x =
              "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (f.touchesCurrent.y =
              "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
            !f.isMoved && !u)
          ) {
            if (
              t.isHorizontal() &&
              ((Math.floor(f.minX) === Math.floor(f.startX) &&
                f.touchesCurrent.x < f.touchesStart.x) ||
                (Math.floor(f.maxX) === Math.floor(f.startX) &&
                  f.touchesCurrent.x > f.touchesStart.x))
            )
              return void (f.isTouched = !1);
            if (
              !t.isHorizontal() &&
              ((Math.floor(f.minY) === Math.floor(f.startY) &&
                f.touchesCurrent.y < f.touchesStart.y) ||
                (Math.floor(f.maxY) === Math.floor(f.startY) &&
                  f.touchesCurrent.y > f.touchesStart.y))
            )
              return void (f.isTouched = !1);
          }
          e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            (f.isMoved = !0),
            (f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX),
            (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY),
            f.currentX < f.minX &&
              (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
            f.currentX > f.maxX &&
              (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
            f.currentY < f.minY &&
              (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
            f.currentY > f.maxY &&
              (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
            g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
            g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
            g.prevTime || (g.prevTime = Date.now()),
            (g.x =
              (f.touchesCurrent.x - g.prevPositionX) /
              (Date.now() - g.prevTime) /
              2),
            (g.y =
              (f.touchesCurrent.y - g.prevPositionY) /
              (Date.now() - g.prevTime) /
              2),
            Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
            Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
            (g.prevPositionX = f.touchesCurrent.x),
            (g.prevPositionY = f.touchesCurrent.y),
            (g.prevTime = Date.now()),
            m.$imageWrapEl.transform(
              `translate3d(${f.currentX}px, ${f.currentY}px,0)`
            );
        }
      }
      function C() {
        const e = t.zoom;
        m.$slideEl &&
          t.previousIndex !== t.activeIndex &&
          (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"),
          (e.scale = 1),
          (p = 1),
          (m.$slideEl = void 0),
          (m.$imageEl = void 0),
          (m.$imageWrapEl = void 0));
      }
      function T(e) {
        const s = t.zoom,
          a = t.params.zoom;
        if (
          (m.$slideEl ||
            (e &&
              e.target &&
              (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
            m.$slideEl ||
              (t.params.virtual && t.params.virtual.enabled && t.virtual
                ? (m.$slideEl = t.$wrapperEl.children(
                    `.${t.params.slideActiveClass}`
                  ))
                : (m.$slideEl = t.slides.eq(t.activeIndex))),
            (m.$imageEl = m.$slideEl
              .find(`.${a.containerClass}`)
              .eq(0)
              .find("picture, img, svg, canvas, .swiper-zoom-target")
              .eq(0)),
            (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`))),
          !m.$imageEl ||
            0 === m.$imageEl.length ||
            !m.$imageWrapEl ||
            0 === m.$imageWrapEl.length)
        )
          return;
        let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
        t.params.cssMode &&
          ((t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.touchAction = "none")),
          m.$slideEl.addClass(`${a.zoomedSlideClass}`),
          void 0 === f.touchesStart.x && e
            ? ((i =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((i = f.touchesStart.x), (r = f.touchesStart.y)),
          (s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
          (p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
          e
            ? (($ = m.$slideEl[0].offsetWidth),
              (S = m.$slideEl[0].offsetHeight),
              (l = m.$slideEl.offset().left + n.scrollX),
              (o = m.$slideEl.offset().top + n.scrollY),
              (c = l + $ / 2 - i),
              (u = o + S / 2 - r),
              (v = m.$imageEl[0].offsetWidth),
              (w = m.$imageEl[0].offsetHeight),
              (b = v * s.scale),
              (x = w * s.scale),
              (y = Math.min($ / 2 - b / 2, 0)),
              (E = Math.min(S / 2 - x / 2, 0)),
              (C = -y),
              (T = -E),
              (h = c * s.scale),
              (g = u * s.scale),
              h < y && (h = y),
              h > C && (h = C),
              g < E && (g = E),
              g > T && (g = T))
            : ((h = 0), (g = 0)),
          m.$imageWrapEl
            .transition(300)
            .transform(`translate3d(${h}px, ${g}px,0)`),
          m.$imageEl
            .transition(300)
            .transform(`translate3d(0,0,0) scale(${s.scale})`);
      }
      function $() {
        const e = t.zoom,
          s = t.params.zoom;
        m.$slideEl ||
          (t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (m.$slideEl = t.$wrapperEl.children(
                `.${t.params.slideActiveClass}`
              ))
            : (m.$slideEl = t.slides.eq(t.activeIndex)),
          (m.$imageEl = m.$slideEl
            .find(`.${s.containerClass}`)
            .eq(0)
            .find("picture, img, svg, canvas, .swiper-zoom-target")
            .eq(0)),
          (m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`))),
          m.$imageEl &&
            0 !== m.$imageEl.length &&
            m.$imageWrapEl &&
            0 !== m.$imageWrapEl.length &&
            (t.params.cssMode &&
              ((t.wrapperEl.style.overflow = ""),
              (t.wrapperEl.style.touchAction = "")),
            (e.scale = 1),
            (p = 1),
            m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
            (m.$slideEl = void 0));
      }
      function S(e) {
        const s = t.zoom;
        s.scale && 1 !== s.scale ? $() : T(e);
      }
      function M() {
        const e = t.support;
        return {
          passiveListener: !(
            "touchstart" !== t.touchEvents.start ||
            !e.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 },
          activeListenerWithCapture: !e.passiveListener || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function P() {
        return `.${t.params.slideClass}`;
      }
      function k(e) {
        const { passiveListener: s } = M(),
          a = P();
        t.$wrapperEl[e]("gesturestart", a, b, s),
          t.$wrapperEl[e]("gesturechange", a, x, s),
          t.$wrapperEl[e]("gestureend", a, y, s);
      }
      function z() {
        l || ((l = !0), k("on"));
      }
      function L() {
        l && ((l = !1), k("off"));
      }
      function O() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const s = t.support,
          { passiveListener: a, activeListenerWithCapture: i } = M(),
          r = P();
        s.gestures
          ? (t.$wrapperEl.on(t.touchEvents.start, z, a),
            t.$wrapperEl.on(t.touchEvents.end, L, a))
          : "touchstart" === t.touchEvents.start &&
            (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
            t.$wrapperEl.on(t.touchEvents.move, r, x, i),
            t.$wrapperEl.on(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel &&
              t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
          t.$wrapperEl.on(
            t.touchEvents.move,
            `.${t.params.zoom.containerClass}`,
            E,
            i
          );
      }
      function I() {
        const e = t.zoom;
        if (!e.enabled) return;
        const s = t.support;
        e.enabled = !1;
        const { passiveListener: a, activeListenerWithCapture: i } = M(),
          r = P();
        s.gestures
          ? (t.$wrapperEl.off(t.touchEvents.start, z, a),
            t.$wrapperEl.off(t.touchEvents.end, L, a))
          : "touchstart" === t.touchEvents.start &&
            (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
            t.$wrapperEl.off(t.touchEvents.move, r, x, i),
            t.$wrapperEl.off(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel &&
              t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
          t.$wrapperEl.off(
            t.touchEvents.move,
            `.${t.params.zoom.containerClass}`,
            E,
            i
          );
      }
      Object.defineProperty(t.zoom, "scale", {
        get: () => v,
        set(e) {
          if (v !== e) {
            const t = m.$imageEl ? m.$imageEl[0] : void 0,
              s = m.$slideEl ? m.$slideEl[0] : void 0;
            i("zoomChange", e, t, s);
          }
          v = e;
        },
      }),
        a("init", () => {
          t.params.zoom.enabled && O();
        }),
        a("destroy", () => {
          I();
        }),
        a("touchStart", (e, s) => {
          t.zoom.enabled &&
            (function (e) {
              const s = t.device;
              m.$imageEl &&
                0 !== m.$imageEl.length &&
                (f.isTouched ||
                  (s.android && e.cancelable && e.preventDefault(),
                  (f.isTouched = !0),
                  (f.touchesStart.x =
                    "touchstart" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (f.touchesStart.y =
                    "touchstart" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY)));
            })(s);
        }),
        a("touchEnd", (e, s) => {
          t.zoom.enabled &&
            (function () {
              const e = t.zoom;
              if (!m.$imageEl || 0 === m.$imageEl.length) return;
              if (!f.isTouched || !f.isMoved)
                return (f.isTouched = !1), void (f.isMoved = !1);
              (f.isTouched = !1), (f.isMoved = !1);
              let s = 300,
                a = 300;
              const i = g.x * s,
                r = f.currentX + i,
                n = g.y * a,
                l = f.currentY + n;
              0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)),
                0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
              const o = Math.max(s, a);
              (f.currentX = r), (f.currentY = l);
              const d = f.width * e.scale,
                c = f.height * e.scale;
              (f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                (f.maxX = -f.minX),
                (f.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
                (f.maxY = -f.minY),
                (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                m.$imageWrapEl
                  .transition(o)
                  .transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
            })();
        }),
        a("doubleTap", (e, s) => {
          !t.animating &&
            t.params.zoom.enabled &&
            t.zoom.enabled &&
            t.params.zoom.toggle &&
            S(s);
        }),
        a("transitionEnd", () => {
          t.zoom.enabled && t.params.zoom.enabled && C();
        }),
        a("slideChange", () => {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
        }),
        Object.assign(t.zoom, {
          enable: O,
          disable: I,
          in: T,
          out: $,
          toggle: S,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      s({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      }),
        (t.lazy = {});
      let n = !1,
        l = !1;
      function o(e, s) {
        void 0 === s && (s = !0);
        const a = t.params.lazy;
        if (void 0 === e) return;
        if (0 === t.slides.length) return;
        const r =
            t.virtual && t.params.virtual.enabled
              ? t.$wrapperEl.children(
                  `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : t.slides.eq(e),
          n = r.find(
            `.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`
          );
        !r.hasClass(a.elementClass) ||
          r.hasClass(a.loadedClass) ||
          r.hasClass(a.loadingClass) ||
          n.push(r[0]),
          0 !== n.length &&
            n.each((e) => {
              const n = d(e);
              n.addClass(a.loadingClass);
              const l = n.attr("data-background"),
                c = n.attr("data-src"),
                p = n.attr("data-srcset"),
                u = n.attr("data-sizes"),
                h = n.parent("picture");
              t.loadImage(n[0], c || l, p, u, !1, () => {
                if (null != t && t && (!t || t.params) && !t.destroyed) {
                  if (
                    (l
                      ? (n.css("background-image", `url("${l}")`),
                        n.removeAttr("data-background"))
                      : (p &&
                          (n.attr("srcset", p), n.removeAttr("data-srcset")),
                        u && (n.attr("sizes", u), n.removeAttr("data-sizes")),
                        h.length &&
                          h.children("source").each((e) => {
                            const t = d(e);
                            t.attr("data-srcset") &&
                              (t.attr("srcset", t.attr("data-srcset")),
                              t.removeAttr("data-srcset"));
                          }),
                        c && (n.attr("src", c), n.removeAttr("data-src"))),
                    n.addClass(a.loadedClass).removeClass(a.loadingClass),
                    r.find(`.${a.preloaderClass}`).remove(),
                    t.params.loop && s)
                  ) {
                    const e = r.attr("data-swiper-slide-index");
                    if (r.hasClass(t.params.slideDuplicateClass)) {
                      o(
                        t.$wrapperEl
                          .children(
                            `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                          )
                          .index(),
                        !1
                      );
                    } else {
                      o(
                        t.$wrapperEl
                          .children(
                            `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                          )
                          .index(),
                        !1
                      );
                    }
                  }
                  i("lazyImageReady", r[0], n[0]),
                    t.params.autoHeight && t.updateAutoHeight();
                }
              }),
                i("lazyImageLoad", r[0], n[0]);
            });
      }
      function c() {
        const { $wrapperEl: e, params: s, slides: a, activeIndex: i } = t,
          r = t.virtual && s.virtual.enabled,
          n = s.lazy;
        let c = s.slidesPerView;
        function p(t) {
          if (r) {
            if (
              e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`)
                .length
            )
              return !0;
          } else if (a[t]) return !0;
          return !1;
        }
        function u(e) {
          return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
        }
        if (
          ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress)
        )
          e.children(`.${s.slideVisibleClass}`).each((e) => {
            o(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
          });
        else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e);
        else o(i);
        if (n.loadPrevNext)
          if (c > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
            const e = n.loadPrevNextAmount,
              t = Math.ceil(c),
              s = Math.min(i + t + Math.max(e, t), a.length),
              r = Math.max(i - Math.max(t, e), 0);
            for (let e = i + t; e < s; e += 1) p(e) && o(e);
            for (let e = r; e < i; e += 1) p(e) && o(e);
          } else {
            const t = e.children(`.${s.slideNextClass}`);
            t.length > 0 && o(u(t));
            const a = e.children(`.${s.slidePrevClass}`);
            a.length > 0 && o(u(a));
          }
      }
      function p() {
        const e = r();
        if (!t || t.destroyed) return;
        const s = t.params.lazy.scrollingElement
            ? d(t.params.lazy.scrollingElement)
            : d(e),
          a = s[0] === e,
          i = a ? e.innerWidth : s[0].offsetWidth,
          l = a ? e.innerHeight : s[0].offsetHeight,
          o = t.$el.offset(),
          { rtlTranslate: u } = t;
        let h = !1;
        u && (o.left -= t.$el[0].scrollLeft);
        const m = [
          [o.left, o.top],
          [o.left + t.width, o.top],
          [o.left, o.top + t.height],
          [o.left + t.width, o.top + t.height],
        ];
        for (let e = 0; e < m.length; e += 1) {
          const t = m[e];
          if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
            if (0 === t[0] && 0 === t[1]) continue;
            h = !0;
          }
        }
        const f = !(
          "touchstart" !== t.touchEvents.start ||
          !t.support.passiveListener ||
          !t.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        h
          ? (c(), s.off("scroll", p, f))
          : n || ((n = !0), s.on("scroll", p, f));
      }
      a("beforeInit", () => {
        t.params.lazy.enabled &&
          t.params.preloadImages &&
          (t.params.preloadImages = !1);
      }),
        a("init", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
        }),
        a("scroll", () => {
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.freeMode.sticky &&
            c();
        }),
        a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
        }),
        a("transitionStart", () => {
          t.params.lazy.enabled &&
            (t.params.lazy.loadOnTransitionStart ||
              (!t.params.lazy.loadOnTransitionStart && !l)) &&
            (t.params.lazy.checkInView ? p() : c());
        }),
        a("transitionEnd", () => {
          t.params.lazy.enabled &&
            !t.params.lazy.loadOnTransitionStart &&
            (t.params.lazy.checkInView ? p() : c());
        }),
        a("slideChange", () => {
          const {
            lazy: e,
            cssMode: s,
            watchSlidesProgress: a,
            touchReleaseOnEdges: i,
            resistanceRatio: r,
          } = t.params;
          e.enabled && (s || (a && (i || 0 === r))) && c();
        }),
        a("destroy", () => {
          t.$el &&
            t.$el
              .find(`.${t.params.lazy.loadingClass}`)
              .removeClass(t.params.lazy.loadingClass);
        }),
        Object.assign(t.lazy, { load: c, loadInSlide: o });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      function i(e, t) {
        const s = (function () {
          let e, t, s;
          return (a, i) => {
            for (t = -1, e = a.length; e - t > 1; )
              (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
            return e;
          };
        })();
        let a, i;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((i = s(this.x, e)),
                (a = i - 1),
                ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                  (this.x[i] - this.x[a]) +
                  this.y[a])
              : 0;
          }),
          this
        );
      }
      function r() {
        t.controller.control &&
          t.controller.spline &&
          ((t.controller.spline = void 0), delete t.controller.spline);
      }
      s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (t.controller = { control: void 0 }),
        a("beforeInit", () => {
          t.controller.control = t.params.controller.control;
        }),
        a("update", () => {
          r();
        }),
        a("resize", () => {
          r();
        }),
        a("observerUpdate", () => {
          r();
        }),
        a("setTranslate", (e, s, a) => {
          t.controller.control && t.controller.setTranslate(s, a);
        }),
        a("setTransition", (e, s, a) => {
          t.controller.control && t.controller.setTransition(s, a);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, s) {
            const a = t.controller.control;
            let r, n;
            const l = t.constructor;
            function o(e) {
              const s = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by &&
                (!(function (e) {
                  t.controller.spline ||
                    (t.controller.spline = t.params.loop
                      ? new i(t.slidesGrid, e.slidesGrid)
                      : new i(t.snapGrid, e.snapGrid));
                })(e),
                (n = -t.controller.spline.interpolate(-s))),
                (n && "container" !== t.params.controller.by) ||
                  ((r =
                    (e.maxTranslate() - e.minTranslate()) /
                    (t.maxTranslate() - t.minTranslate())),
                  (n = (s - t.minTranslate()) * r + e.minTranslate())),
                t.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(a))
              for (let e = 0; e < a.length; e += 1)
                a[e] !== s && a[e] instanceof l && o(a[e]);
            else a instanceof l && s !== a && o(a);
          },
          setTransition: function (e, s) {
            const a = t.constructor,
              i = t.controller.control;
            let r;
            function n(s) {
              s.setTransition(e, t),
                0 !== e &&
                  (s.transitionStart(),
                  s.params.autoHeight &&
                    p(() => {
                      s.updateAutoHeight();
                    }),
                  s.$wrapperEl.transitionEnd(() => {
                    i &&
                      (s.params.loop &&
                        "slide" === t.params.controller.by &&
                        s.loopFix(),
                      s.transitionEnd());
                  }));
            }
            if (Array.isArray(i))
              for (r = 0; r < i.length; r += 1)
                i[r] !== s && i[r] instanceof a && n(i[r]);
            else i instanceof a && s !== i && n(i);
          },
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (t.a11y = { clicked: !1 });
      let i = null;
      function r(e) {
        const t = i;
        0 !== t.length && (t.html(""), t.html(e));
      }
      function n(e) {
        e.attr("tabIndex", "0");
      }
      function l(e) {
        e.attr("tabIndex", "-1");
      }
      function o(e, t) {
        e.attr("role", t);
      }
      function c(e, t) {
        e.attr("aria-roledescription", t);
      }
      function p(e, t) {
        e.attr("aria-label", t);
      }
      function u(e) {
        e.attr("aria-disabled", !0);
      }
      function h(e) {
        e.attr("aria-disabled", !1);
      }
      function m(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const s = t.params.a11y,
          a = d(e.target);
        t.navigation &&
          t.navigation.$nextEl &&
          a.is(t.navigation.$nextEl) &&
          ((t.isEnd && !t.params.loop) || t.slideNext(),
          t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
          t.navigation &&
            t.navigation.$prevEl &&
            a.is(t.navigation.$prevEl) &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
            t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
          t.pagination &&
            a.is(U(t.params.pagination.bulletClass)) &&
            a[0].click();
      }
      function f() {
        return (
          t.pagination && t.pagination.bullets && t.pagination.bullets.length
        );
      }
      function g() {
        return f() && t.params.pagination.clickable;
      }
      const v = (e, t, s) => {
          n(e),
            "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)),
            p(e, s),
            (function (e, t) {
              e.attr("aria-controls", t);
            })(e, t);
        },
        w = () => {
          t.a11y.clicked = !0;
        },
        b = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t.destroyed || (t.a11y.clicked = !1);
            });
          });
        },
        x = (e) => {
          if (t.a11y.clicked) return;
          const s = e.target.closest(`.${t.params.slideClass}`);
          if (!s || !t.slides.includes(s)) return;
          const a = t.slides.indexOf(s) === t.activeIndex,
            i =
              t.params.watchSlidesProgress &&
              t.visibleSlides &&
              t.visibleSlides.includes(s);
          a ||
            i ||
            (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
            (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
            t.slideTo(t.slides.indexOf(s), 0));
        },
        y = () => {
          const e = t.params.a11y;
          e.itemRoleDescriptionMessage &&
            c(d(t.slides), e.itemRoleDescriptionMessage),
            e.slideRole && o(d(t.slides), e.slideRole);
          const s = t.params.loop
            ? t.slides.filter(
                (e) => !e.classList.contains(t.params.slideDuplicateClass)
              ).length
            : t.slides.length;
          e.slideLabelMessage &&
            t.slides.each((a, i) => {
              const r = d(a),
                n = t.params.loop
                  ? parseInt(r.attr("data-swiper-slide-index"), 10)
                  : i;
              p(
                r,
                e.slideLabelMessage
                  .replace(/\{\{index\}\}/, n + 1)
                  .replace(/\{\{slidesLength\}\}/, s)
              );
            });
        },
        E = () => {
          const e = t.params.a11y;
          t.$el.append(i);
          const s = t.$el;
          e.containerRoleDescriptionMessage &&
            c(s, e.containerRoleDescriptionMessage),
            e.containerMessage && p(s, e.containerMessage);
          const a = t.$wrapperEl,
            r =
              e.id ||
              a.attr("id") ||
              `swiper-wrapper-${
                ((n = 16),
                void 0 === n && (n = 16),
                "x"
                  .repeat(n)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  ))
              }`;
          var n;
          const l =
            t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          var o;
          let d, u;
          (o = r),
            a.attr("id", o),
            (function (e, t) {
              e.attr("aria-live", t);
            })(a, l),
            y(),
            t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl),
            t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl),
            d && d.length && v(d, r, e.nextSlideMessage),
            u && u.length && v(u, r, e.prevSlideMessage),
            g() &&
              t.pagination.$el.on(
                "keydown",
                U(t.params.pagination.bulletClass),
                m
              ),
            t.$el.on("focus", x, !0),
            t.$el.on("pointerdown", w, !0),
            t.$el.on("pointerup", b, !0);
        };
      a("beforeInit", () => {
        i = d(
          `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
        );
      }),
        a("afterInit", () => {
          t.params.a11y.enabled && E();
        }),
        a(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            t.params.a11y.enabled && y();
          }
        ),
        a("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled &&
            (function () {
              if (t.params.loop || t.params.rewind || !t.navigation) return;
              const { $nextEl: e, $prevEl: s } = t.navigation;
              s &&
                s.length > 0 &&
                (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))),
                e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
            })();
        }),
        a("paginationUpdate", () => {
          t.params.a11y.enabled &&
            (function () {
              const e = t.params.a11y;
              f() &&
                t.pagination.bullets.each((s) => {
                  const a = d(s);
                  t.params.pagination.clickable &&
                    (n(a),
                    t.params.pagination.renderBullet ||
                      (o(a, "button"),
                      p(
                        a,
                        e.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          a.index() + 1
                        )
                      ))),
                    a.is(`.${t.params.pagination.bulletActiveClass}`)
                      ? a.attr("aria-current", "true")
                      : a.removeAttr("aria-current");
                });
            })();
        }),
        a("destroy", () => {
          t.params.a11y.enabled &&
            (function () {
              let e, s;
              i && i.length > 0 && i.remove(),
                t.navigation &&
                  t.navigation.$nextEl &&
                  (e = t.navigation.$nextEl),
                t.navigation &&
                  t.navigation.$prevEl &&
                  (s = t.navigation.$prevEl),
                e && e.off("keydown", m),
                s && s.off("keydown", m),
                g() &&
                  t.pagination.$el.off(
                    "keydown",
                    U(t.params.pagination.bulletClass),
                    m
                  ),
                t.$el.off("focus", x, !0),
                t.$el.off("pointerdown", w, !0),
                t.$el.off("pointerup", b, !0);
            })();
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides",
          keepQuery: !1,
        },
      });
      let i = !1,
        n = {};
      const l = (e) =>
          e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        o = (e) => {
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const a = s.pathname
              .slice(1)
              .split("/")
              .filter((e) => "" !== e),
            i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        d = (e, s) => {
          const a = r();
          if (!i || !t.params.history.enabled) return;
          let n;
          n = t.params.url ? new URL(t.params.url) : a.location;
          const o = t.slides.eq(s);
          let d = l(o.attr("data-history"));
          if (t.params.history.root.length > 0) {
            let s = t.params.history.root;
            "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
              (d = `${s}/${e}/${d}`);
          } else n.pathname.includes(e) || (d = `${e}/${d}`);
          t.params.history.keepQuery && (d += n.search);
          const c = a.history.state;
          (c && c.value === d) ||
            (t.params.history.replaceState
              ? a.history.replaceState({ value: d }, null, d)
              : a.history.pushState({ value: d }, null, d));
        },
        c = (e, s, a) => {
          if (s)
            for (let i = 0, r = t.slides.length; i < r; i += 1) {
              const r = t.slides.eq(i);
              if (
                l(r.attr("data-history")) === s &&
                !r.hasClass(t.params.slideDuplicateClass)
              ) {
                const s = r.index();
                t.slideTo(s, e, a);
              }
            }
          else t.slideTo(0, e, a);
        },
        p = () => {
          (n = o(t.params.url)), c(t.params.speed, n.value, !1);
        };
      a("init", () => {
        t.params.history.enabled &&
          (() => {
            const e = r();
            if (t.params.history) {
              if (!e.history || !e.history.pushState)
                return (
                  (t.params.history.enabled = !1),
                  void (t.params.hashNavigation.enabled = !0)
                );
              (i = !0),
                (n = o(t.params.url)),
                (n.key || n.value) &&
                  (c(0, n.value, t.params.runCallbacksOnInit),
                  t.params.history.replaceState ||
                    e.addEventListener("popstate", p));
            }
          })();
      }),
        a("destroy", () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              t.params.history.replaceState ||
                e.removeEventListener("popstate", p);
            })();
        }),
        a("transitionEnd _freeModeNoMomentumRelease", () => {
          i && d(t.params.history.key, t.activeIndex);
        }),
        a("slideChange", () => {
          i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: i, on: n } = e,
        l = !1;
      const o = a(),
        c = r();
      s({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
      const p = () => {
          i("hashChange");
          const e = o.location.hash.replace("#", "");
          if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
            const s = t.$wrapperEl
              .children(`.${t.params.slideClass}[data-hash="${e}"]`)
              .index();
            if (void 0 === s) return;
            t.slideTo(s);
          }
        },
        u = () => {
          if (l && t.params.hashNavigation.enabled)
            if (
              t.params.hashNavigation.replaceState &&
              c.history &&
              c.history.replaceState
            )
              c.history.replaceState(
                null,
                null,
                `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""
              ),
                i("hashSet");
            else {
              const e = t.slides.eq(t.activeIndex),
                s = e.attr("data-hash") || e.attr("data-history");
              (o.location.hash = s || ""), i("hashSet");
            }
        };
      n("init", () => {
        t.params.hashNavigation.enabled &&
          (() => {
            if (
              !t.params.hashNavigation.enabled ||
              (t.params.history && t.params.history.enabled)
            )
              return;
            l = !0;
            const e = o.location.hash.replace("#", "");
            if (e) {
              const s = 0;
              for (let a = 0, i = t.slides.length; a < i; a += 1) {
                const i = t.slides.eq(a);
                if (
                  (i.attr("data-hash") || i.attr("data-history")) === e &&
                  !i.hasClass(t.params.slideDuplicateClass)
                ) {
                  const e = i.index();
                  t.slideTo(e, s, t.params.runCallbacksOnInit, !0);
                }
              }
            }
            t.params.hashNavigation.watchState && d(c).on("hashchange", p);
          })();
      }),
        n("destroy", () => {
          t.params.hashNavigation.enabled &&
            t.params.hashNavigation.watchState &&
            d(c).off("hashchange", p);
        }),
        n("transitionEnd _freeModeNoMomentumRelease", () => {
          l && u();
        }),
        n("slideChange", () => {
          l && t.params.cssMode && u();
        });
    },
    function (e) {
      let t,
        { swiper: s, extendParams: i, on: r, emit: n } = e;
      function l() {
        if (!s.size)
          return (s.autoplay.running = !1), void (s.autoplay.paused = !1);
        const e = s.slides.eq(s.activeIndex);
        let a = s.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
          clearTimeout(t),
          (t = p(() => {
            let e;
            s.params.autoplay.reverseDirection
              ? s.params.loop
                ? (s.loopFix(),
                  (e = s.slidePrev(s.params.speed, !0, !0)),
                  n("autoplay"))
                : s.isBeginning
                ? s.params.autoplay.stopOnLastSlide
                  ? d()
                  : ((e = s.slideTo(
                      s.slides.length - 1,
                      s.params.speed,
                      !0,
                      !0
                    )),
                    n("autoplay"))
                : ((e = s.slidePrev(s.params.speed, !0, !0)), n("autoplay"))
              : s.params.loop
              ? (s.loopFix(),
                (e = s.slideNext(s.params.speed, !0, !0)),
                n("autoplay"))
              : s.isEnd
              ? s.params.autoplay.stopOnLastSlide
                ? d()
                : ((e = s.slideTo(0, s.params.speed, !0, !0)), n("autoplay"))
              : ((e = s.slideNext(s.params.speed, !0, !0)), n("autoplay")),
              ((s.params.cssMode && s.autoplay.running) || !1 === e) && l();
          }, a));
      }
      function o() {
        return (
          void 0 === t &&
          !s.autoplay.running &&
          ((s.autoplay.running = !0), n("autoplayStart"), l(), !0)
        );
      }
      function d() {
        return (
          !!s.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (s.autoplay.running = !1),
          n("autoplayStop"),
          !0)
        );
      }
      function c(e) {
        s.autoplay.running &&
          (s.autoplay.paused ||
            (t && clearTimeout(t),
            (s.autoplay.paused = !0),
            0 !== e && s.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  s.$wrapperEl[0].addEventListener(e, h);
                })
              : ((s.autoplay.paused = !1), l())));
      }
      function u() {
        const e = a();
        "hidden" === e.visibilityState && s.autoplay.running && c(),
          "visible" === e.visibilityState &&
            s.autoplay.paused &&
            (l(), (s.autoplay.paused = !1));
      }
      function h(e) {
        s &&
          !s.destroyed &&
          s.$wrapperEl &&
          e.target === s.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, h);
          }),
          (s.autoplay.paused = !1),
          s.autoplay.running ? l() : d());
      }
      function m() {
        s.params.autoplay.disableOnInteraction
          ? d()
          : (n("autoplayPause"), c()),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, h);
          });
      }
      function f() {
        s.params.autoplay.disableOnInteraction ||
          ((s.autoplay.paused = !1), n("autoplayResume"), l());
      }
      (s.autoplay = { running: !1, paused: !1 }),
        i({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        r("init", () => {
          if (s.params.autoplay.enabled) {
            o();
            a().addEventListener("visibilitychange", u),
              s.params.autoplay.pauseOnMouseEnter &&
                (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f));
          }
        }),
        r("beforeTransitionStart", (e, t, a) => {
          s.autoplay.running &&
            (a || !s.params.autoplay.disableOnInteraction
              ? s.autoplay.pause(t)
              : d());
        }),
        r("sliderFirstMove", () => {
          s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction ? d() : c());
        }),
        r("touchEnd", () => {
          s.params.cssMode &&
            s.autoplay.paused &&
            !s.params.autoplay.disableOnInteraction &&
            l();
        }),
        r("destroy", () => {
          s.$el.off("mouseenter", m),
            s.$el.off("mouseleave", f),
            s.autoplay.running && d();
          a().removeEventListener("visibilitychange", u);
        }),
        Object.assign(s.autoplay, { pause: c, run: l, start: o, stop: d });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let i = !1,
        r = !1;
      function n() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          a = e.clickedSlide;
        if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let i;
        if (
          ((i = e.params.loop
            ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10)
            : s),
          t.params.loop)
        ) {
          let e = t.activeIndex;
          t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
            (t.loopFix(),
            (t._clientLeft = t.$wrapperEl[0].clientLeft),
            (e = t.activeIndex));
          const s = t.slides
              .eq(e)
              .prevAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index(),
            a = t.slides
              .eq(e)
              .nextAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index();
          i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s;
        }
        t.slideTo(i);
      }
      function l() {
        const { thumbs: e } = t.params;
        if (i) return !1;
        i = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            });
        else if (m(e.swiper)) {
          const a = Object.assign({}, e.swiper);
          Object.assign(a, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(a)),
            (r = !0);
        }
        return (
          t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
          t.thumbs.swiper.on("tap", n),
          !0
        );
      }
      function o(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const a =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        let i = 1;
        const r = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (i = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (i = 1),
          (i = Math.floor(i)),
          s.slides.removeClass(r),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < i; e += 1)
            s.$wrapperEl
              .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
              .addClass(r);
        else
          for (let e = 0; e < i; e += 1)
            s.slides.eq(t.realIndex + e).addClass(r);
        const n = t.params.thumbs.autoScrollOffset,
          l = n && !s.params.loop;
        if (t.realIndex !== s.realIndex || l) {
          let i,
            r,
            o = s.activeIndex;
          if (s.params.loop) {
            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
              (s.loopFix(),
              (s._clientLeft = s.$wrapperEl[0].clientLeft),
              (o = s.activeIndex));
            const e = s.slides
                .eq(o)
                .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index(),
              a = s.slides
                .eq(o)
                .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index();
            (i =
              void 0 === e
                ? a
                : void 0 === a
                ? e
                : a - o == o - e
                ? s.params.slidesPerGroup > 1
                  ? a
                  : o
                : a - o < o - e
                ? a
                : e),
              (r = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (i = t.realIndex), (r = i > t.previousIndex ? "next" : "prev");
          l && (i += "next" === r ? n : -1 * n),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(i) < 0 &&
              (s.params.centeredSlides
                ? (i =
                    i > o
                      ? i - Math.floor(a / 2) + 1
                      : i + Math.floor(a / 2) - 1)
                : i > o && s.params.slidesPerGroup,
              s.slideTo(i, e ? 0 : void 0));
        }
      }
      (t.thumbs = { swiper: null }),
        a("beforeInit", () => {
          const { thumbs: e } = t.params;
          e && e.swiper && (l(), o(!0));
        }),
        a("slideChange update resize observerUpdate", () => {
          o();
        }),
        a("setTransition", (e, s) => {
          const a = t.thumbs.swiper;
          a && !a.destroyed && a.setTransition(s);
        }),
        a("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && r && e.destroy();
        }),
        Object.assign(t.thumbs, { init: l, update: o });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: a, once: i } = e;
      s({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(t, {
          freeMode: {
            onTouchStart: function () {
              const e = t.getTranslate();
              t.setTranslate(e),
                t.setTransition(0),
                (t.touchEventsData.velocities.length = 0),
                t.freeMode.onTouchEnd({
                  currentPos: t.rtl ? t.translate : -t.translate,
                });
            },
            onTouchMove: function () {
              const { touchEventsData: e, touches: s } = t;
              0 === e.velocities.length &&
                e.velocities.push({
                  position: s[t.isHorizontal() ? "startX" : "startY"],
                  time: e.touchStartTime,
                }),
                e.velocities.push({
                  position: s[t.isHorizontal() ? "currentX" : "currentY"],
                  time: u(),
                });
            },
            onTouchEnd: function (e) {
              let { currentPos: s } = e;
              const {
                  params: r,
                  $wrapperEl: n,
                  rtlTranslate: l,
                  snapGrid: o,
                  touchEventsData: d,
                } = t,
                c = u() - d.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate())
                t.slides.length < o.length
                  ? t.slideTo(o.length - 1)
                  : t.slideTo(t.slides.length - 1);
              else {
                if (r.freeMode.momentum) {
                  if (d.velocities.length > 1) {
                    const e = d.velocities.pop(),
                      s = d.velocities.pop(),
                      a = e.position - s.position,
                      i = e.time - s.time;
                    (t.velocity = a / i),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                        (t.velocity = 0),
                      (i > 150 || u() - e.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= r.freeMode.momentumVelocityRatio),
                    (d.velocities.length = 0);
                  let e = 1e3 * r.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let c = t.translate + s;
                  l && (c = -c);
                  let p,
                    h = !1;
                  const m =
                    20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                  let f;
                  if (c < t.maxTranslate())
                    r.freeMode.momentumBounce
                      ? (c + t.maxTranslate() < -m &&
                          (c = t.maxTranslate() - m),
                        (p = t.maxTranslate()),
                        (h = !0),
                        (d.allowMomentumBounce = !0))
                      : (c = t.maxTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (c > t.minTranslate())
                    r.freeMode.momentumBounce
                      ? (c - t.minTranslate() > m && (c = t.minTranslate() + m),
                        (p = t.minTranslate()),
                        (h = !0),
                        (d.allowMomentumBounce = !0))
                      : (c = t.minTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (r.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < o.length; t += 1)
                      if (o[t] > -c) {
                        e = t;
                        break;
                      }
                    (c =
                      Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) ||
                      "next" === t.swipeDirection
                        ? o[e]
                        : o[e - 1]),
                      (c = -c);
                  }
                  if (
                    (f &&
                      i("transitionEnd", () => {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  ) {
                    if (
                      ((e = l
                        ? Math.abs((-c - t.translate) / t.velocity)
                        : Math.abs((c - t.translate) / t.velocity)),
                      r.freeMode.sticky)
                    ) {
                      const s = Math.abs((l ? -c : c) - t.translate),
                        a = t.slidesSizesGrid[t.activeIndex];
                      e =
                        s < a
                          ? r.speed
                          : s < 2 * a
                          ? 1.5 * r.speed
                          : 2.5 * r.speed;
                    }
                  } else if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode.momentumBounce && h
                    ? (t.updateProgress(p),
                      t.setTransition(e),
                      t.setTranslate(c),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      n.transitionEnd(() => {
                        t &&
                          !t.destroyed &&
                          d.allowMomentumBounce &&
                          (a("momentumBounce"),
                          t.setTransition(r.speed),
                          setTimeout(() => {
                            t.setTranslate(p),
                              n.transitionEnd(() => {
                                t && !t.destroyed && t.transitionEnd();
                              });
                          }, 0));
                      }))
                    : t.velocity
                    ? (a("_freeModeNoMomentumRelease"),
                      t.updateProgress(c),
                      t.setTransition(e),
                      t.setTranslate(c),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        n.transitionEnd(() => {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(c),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else {
                  if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode && a("_freeModeNoMomentumRelease");
                }
                (!r.freeMode.momentum || c >= r.longSwipesMs) &&
                  (t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses());
              }
            },
          },
        });
    },
    function (e) {
      let t,
        s,
        a,
        { swiper: i, extendParams: r } = e;
      r({ grid: { rows: 1, fill: "column" } }),
        (i.grid = {
          initSlides: (e) => {
            const { slidesPerView: r } = i.params,
              { rows: n, fill: l } = i.params.grid;
            (s = t / n),
              (a = Math.floor(e / n)),
              (t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n),
              "auto" !== r && "row" === l && (t = Math.max(t, r * n));
          },
          updateSlide: (e, r, n, l) => {
            const { slidesPerGroup: o, spaceBetween: d } = i.params,
              { rows: c, fill: p } = i.params.grid;
            let u, h, m;
            if ("row" === p && o > 1) {
              const s = Math.floor(e / (o * c)),
                a = e - c * o * s,
                i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
              (m = Math.floor(a / i)),
                (h = a - m * i + s * o),
                (u = h + (m * t) / c),
                r.css({ "-webkit-order": u, order: u });
            } else
              "column" === p
                ? ((h = Math.floor(e / c)),
                  (m = e - h * c),
                  (h > a || (h === a && m === c - 1)) &&
                    ((m += 1), m >= c && ((m = 0), (h += 1))))
                : ((m = Math.floor(e / s)), (h = e - m * s));
            r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
          },
          updateWrapperSize: (e, s, a) => {
            const {
                spaceBetween: r,
                centeredSlides: n,
                roundLengths: l,
              } = i.params,
              { rows: o } = i.params.grid;
            if (
              ((i.virtualSize = (e + r) * t),
              (i.virtualSize = Math.ceil(i.virtualSize / o) - r),
              i.$wrapperEl.css({ [a("width")]: `${i.virtualSize + r}px` }),
              n)
            ) {
              s.splice(0, s.length);
              const e = [];
              for (let t = 0; t < s.length; t += 1) {
                let a = s[t];
                l && (a = Math.floor(a)),
                  s[t] < i.virtualSize + s[0] && e.push(a);
              }
              s.push(...e);
            }
          },
        });
    },
    function (e) {
      let { swiper: t } = e;
      Object.assign(t, {
        appendSlide: K.bind(t),
        prependSlide: Z.bind(t),
        addSlide: Q.bind(t),
        removeSlide: J.bind(t),
        removeAllSlides: ee.bind(t),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ fadeEffect: { crossFade: !1, transformEl: null } }),
        te({
          effect: "fade",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e } = t,
              s = t.params.fadeEffect;
            for (let a = 0; a < e.length; a += 1) {
              const e = t.slides.eq(a);
              let i = -e[0].swiperSlideOffset;
              t.params.virtualTranslate || (i -= t.translate);
              let r = 0;
              t.isHorizontal() || ((r = i), (i = 0));
              const n = t.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(e[0].progress), 0)
                : 1 + Math.min(Math.max(e[0].progress, -1), 0);
              se(s, e)
                .css({ opacity: n })
                .transform(`translate3d(${i}px, ${r}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.fadeEffect;
            (s ? t.slides.find(s) : t.slides).transition(e),
              ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      const i = (e, t, s) => {
        let a = s
            ? e.find(".swiper-slide-shadow-left")
            : e.find(".swiper-slide-shadow-top"),
          i = s
            ? e.find(".swiper-slide-shadow-right")
            : e.find(".swiper-slide-shadow-bottom");
        0 === a.length &&
          ((a = d(
            `<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`
          )),
          e.append(a)),
          0 === i.length &&
            ((i = d(
              `<div class="swiper-slide-shadow-${
                s ? "right" : "bottom"
              }"></div>`
            )),
            e.append(i)),
          a.length && (a[0].style.opacity = Math.max(-t, 0)),
          i.length && (i[0].style.opacity = Math.max(t, 0));
      };
      te({
        effect: "cube",
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
              $el: e,
              $wrapperEl: s,
              slides: a,
              width: r,
              height: n,
              rtlTranslate: l,
              size: o,
              browser: c,
            } = t,
            p = t.params.cubeEffect,
            u = t.isHorizontal(),
            h = t.virtual && t.params.virtual.enabled;
          let m,
            f = 0;
          p.shadow &&
            (u
              ? ((m = s.find(".swiper-cube-shadow")),
                0 === m.length &&
                  ((m = d('<div class="swiper-cube-shadow"></div>')),
                  s.append(m)),
                m.css({ height: `${r}px` }))
              : ((m = e.find(".swiper-cube-shadow")),
                0 === m.length &&
                  ((m = d('<div class="swiper-cube-shadow"></div>')),
                  e.append(m))));
          for (let e = 0; e < a.length; e += 1) {
            const t = a.eq(e);
            let s = e;
            h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
            let r = 90 * s,
              n = Math.floor(r / 360);
            l && ((r = -r), (n = Math.floor(-r / 360)));
            const d = Math.max(Math.min(t[0].progress, 1), -1);
            let c = 0,
              m = 0,
              g = 0;
            s % 4 == 0
              ? ((c = 4 * -n * o), (g = 0))
              : (s - 1) % 4 == 0
              ? ((c = 0), (g = 4 * -n * o))
              : (s - 2) % 4 == 0
              ? ((c = o + 4 * n * o), (g = o))
              : (s - 3) % 4 == 0 && ((c = -o), (g = 3 * o + 4 * o * n)),
              l && (c = -c),
              u || ((m = c), (c = 0));
            const v = `rotateX(${u ? 0 : -r}deg) rotateY(${
              u ? r : 0
            }deg) translate3d(${c}px, ${m}px, ${g}px)`;
            d <= 1 &&
              d > -1 &&
              ((f = 90 * s + 90 * d), l && (f = 90 * -s - 90 * d)),
              t.transform(v),
              p.slideShadows && i(t, d, u);
          }
          if (
            (s.css({
              "-webkit-transform-origin": `50% 50% -${o / 2}px`,
              "transform-origin": `50% 50% -${o / 2}px`,
            }),
            p.shadow)
          )
            if (u)
              m.transform(
                `translate3d(0px, ${r / 2 + p.shadowOffset}px, ${
                  -r / 2
                }px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`
              );
            else {
              const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                s = p.shadowScale,
                a = p.shadowScale / t,
                i = p.shadowOffset;
              m.transform(
                `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${
                  -n / 2 / a
                }px) rotateX(-90deg)`
              );
            }
          const g = c.isSafari || c.isWebView ? -o / 2 : 0;
          s.transform(
            `translate3d(0px,0,${g}px) rotateX(${
              t.isHorizontal() ? 0 : f
            }deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`
          ),
            s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`);
        },
        setTransition: (e) => {
          const { $el: s, slides: a } = t;
          a
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
            t.params.cubeEffect.shadow &&
              !t.isHorizontal() &&
              s.find(".swiper-cube-shadow").transition(e);
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.each((t) => {
            const s = Math.max(Math.min(t.progress, 1), -1);
            i(d(t), s, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
      });
      const i = (e, s, a) => {
        let i = t.isHorizontal()
            ? e.find(".swiper-slide-shadow-left")
            : e.find(".swiper-slide-shadow-top"),
          r = t.isHorizontal()
            ? e.find(".swiper-slide-shadow-right")
            : e.find(".swiper-slide-shadow-bottom");
        0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")),
          0 === r.length &&
            (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")),
          i.length && (i[0].style.opacity = Math.max(-s, 0)),
          r.length && (r[0].style.opacity = Math.max(s, 0));
      };
      te({
        effect: "flip",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, rtlTranslate: s } = t,
            a = t.params.flipEffect;
          for (let r = 0; r < e.length; r += 1) {
            const n = e.eq(r);
            let l = n[0].progress;
            t.params.flipEffect.limitRotation &&
              (l = Math.max(Math.min(n[0].progress, 1), -1));
            const o = n[0].swiperSlideOffset;
            let d = -180 * l,
              c = 0,
              p = t.params.cssMode ? -o - t.translate : -o,
              u = 0;
            t.isHorizontal()
              ? s && (d = -d)
              : ((u = p), (p = 0), (c = -d), (d = 0)),
              (n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length),
              a.slideShadows && i(n, l, a);
            const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
            se(a, n).transform(h);
          }
        },
        setTransition: (e) => {
          const { transformEl: s } = t.params.flipEffect;
          (s ? t.slides.find(s) : t.slides)
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
            ae({ swiper: t, duration: e, transformEl: s });
        },
        recreateShadows: () => {
          const e = t.params.flipEffect;
          t.slides.each((s) => {
            const a = d(s);
            let r = a[0].progress;
            t.params.flipEffect.limitRotation &&
              (r = Math.max(Math.min(s.progress, 1), -1)),
              i(a, r, e);
          });
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
          transformEl: null,
        },
      }),
        te({
          effect: "coverflow",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { width: e, height: s, slides: a, slidesSizesGrid: i } = t,
              r = t.params.coverflowEffect,
              n = t.isHorizontal(),
              l = t.translate,
              o = n ? e / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              c = r.depth;
            for (let e = 0, t = a.length; e < t; e += 1) {
              const t = a.eq(e),
                s = i[e],
                l = (o - t[0].swiperSlideOffset - s / 2) / s,
                p =
                  "function" == typeof r.modifier
                    ? r.modifier(l)
                    : l * r.modifier;
              let u = n ? d * p : 0,
                h = n ? 0 : d * p,
                m = -c * Math.abs(p),
                f = r.stretch;
              "string" == typeof f &&
                -1 !== f.indexOf("%") &&
                (f = (parseFloat(r.stretch) / 100) * s);
              let g = n ? 0 : f * p,
                v = n ? f * p : 0,
                w = 1 - (1 - r.scale) * Math.abs(p);
              Math.abs(v) < 0.001 && (v = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(u) < 0.001 && (u = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(w) < 0.001 && (w = 0);
              const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
              if (
                (se(r, t).transform(b),
                (t[0].style.zIndex = 1 - Math.abs(Math.round(p))),
                r.slideShadows)
              ) {
                let e = n
                    ? t.find(".swiper-slide-shadow-left")
                    : t.find(".swiper-slide-shadow-top"),
                  s = n
                    ? t.find(".swiper-slide-shadow-right")
                    : t.find(".swiper-slide-shadow-bottom");
                0 === e.length && (e = ie(r, t, n ? "left" : "top")),
                  0 === s.length && (s = ie(r, t, n ? "right" : "bottom")),
                  e.length && (e[0].style.opacity = p > 0 ? p : 0),
                  s.length && (s[0].style.opacity = -p > 0 ? -p : 0);
              }
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.coverflowEffect;
            (s ? t.slides.find(s) : t.slides)
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e);
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const i = (e) => ("string" == typeof e ? e : `${e}px`);
      te({
        effect: "creative",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, $wrapperEl: s, slidesSizesGrid: a } = t,
            r = t.params.creativeEffect,
            { progressMultiplier: n } = r,
            l = t.params.centeredSlides;
          if (l) {
            const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
            s.transform(`translateX(calc(50% - ${e}px))`);
          }
          for (let s = 0; s < e.length; s += 1) {
            const a = e.eq(s),
              o = a[0].progress,
              d = Math.min(
                Math.max(a[0].progress, -r.limitProgress),
                r.limitProgress
              );
            let c = d;
            l ||
              (c = Math.min(
                Math.max(a[0].originalProgress, -r.limitProgress),
                r.limitProgress
              ));
            const p = a[0].swiperSlideOffset,
              u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              h = [0, 0, 0];
            let m = !1;
            t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
            let f = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            d < 0
              ? ((f = r.next), (m = !0))
              : d > 0 && ((f = r.prev), (m = !0)),
              u.forEach((e, t) => {
                u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(
                  d * n
                )}))`;
              }),
              h.forEach((e, t) => {
                h[t] = f.rotate[t] * Math.abs(d * n);
              }),
              (a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length);
            const g = u.join(", "),
              v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
              w =
                c < 0
                  ? `scale(${1 + (1 - f.scale) * c * n})`
                  : `scale(${1 - (1 - f.scale) * c * n})`,
              b =
                c < 0
                  ? 1 + (1 - f.opacity) * c * n
                  : 1 - (1 - f.opacity) * c * n,
              x = `translate3d(${g}) ${v} ${w}`;
            if ((m && f.shadow) || !m) {
              let e = a.children(".swiper-slide-shadow");
              if ((0 === e.length && f.shadow && (e = ie(r, a)), e.length)) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const y = se(r, a);
            y.transform(x).css({ opacity: b }),
              f.origin && y.css("transform-origin", f.origin);
          }
        },
        setTransition: (e) => {
          const { transformEl: s } = t.params.creativeEffect;
          (s ? t.slides.find(s) : t.slides)
            .transition(e)
            .find(".swiper-slide-shadow")
            .transition(e),
            ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        cardsEffect: {
          slideShadows: !0,
          transformEl: null,
          rotate: !0,
          perSlideRotate: 2,
          perSlideOffset: 8,
        },
      }),
        te({
          effect: "cards",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e, activeIndex: s } = t,
              a = t.params.cardsEffect,
              { startTranslate: i, isTouched: r } = t.touchEventsData,
              n = t.translate;
            for (let l = 0; l < e.length; l += 1) {
              const o = e.eq(l),
                d = o[0].progress,
                c = Math.min(Math.max(d, -4), 4);
              let p = o[0].swiperSlideOffset;
              t.params.centeredSlides &&
                !t.params.cssMode &&
                t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                t.params.centeredSlides &&
                  t.params.cssMode &&
                  (p -= e[0].swiperSlideOffset);
              let u = t.params.cssMode ? -p - t.translate : -p,
                h = 0;
              const m = -100 * Math.abs(c);
              let f = 1,
                g = -a.perSlideRotate * c,
                v = a.perSlideOffset - 0.75 * Math.abs(c);
              const w =
                  t.virtual && t.params.virtual.enabled
                    ? t.virtual.from + l
                    : l,
                b =
                  (w === s || w === s - 1) &&
                  c > 0 &&
                  c < 1 &&
                  (r || t.params.cssMode) &&
                  n < i,
                x =
                  (w === s || w === s + 1) &&
                  c < 0 &&
                  c > -1 &&
                  (r || t.params.cssMode) &&
                  n > i;
              if (b || x) {
                const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                (g += -28 * c * e),
                  (f += -0.5 * e),
                  (v += 96 * e),
                  (h = -25 * e * Math.abs(c) + "%");
              }
              if (
                ((u =
                  c < 0
                    ? `calc(${u}px + (${v * Math.abs(c)}%))`
                    : c > 0
                    ? `calc(${u}px + (-${v * Math.abs(c)}%))`
                    : `${u}px`),
                !t.isHorizontal())
              ) {
                const e = h;
                (h = u), (u = e);
              }
              const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c),
                E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${
                  a.rotate ? g : 0
                }deg)\n        scale(${y})\n      `;
              if (a.slideShadows) {
                let e = o.find(".swiper-slide-shadow");
                0 === e.length && (e = ie(a, o)),
                  e.length &&
                    (e[0].style.opacity = Math.min(
                      Math.max((Math.abs(c) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
              se(a, o).transform(E);
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.cardsEffect;
            (s ? t.slides.find(s) : t.slides)
              .transition(e)
              .find(".swiper-slide-shadow")
              .transition(e),
              ae({ swiper: t, duration: e, transformEl: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
  ];
  return V.use(re), V;
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  var pluses = /\+/g;
  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }
  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }
  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }
  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    }
    try {
      s = decodeURIComponent(s.replace(pluses, " "));
      return config.json ? JSON.parse(s) : s;
    } catch (e) {}
  }
  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }
  var config = ($.cookie = function (key, value, options) {
    if (arguments.length > 1 && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);
      if (typeof options.expires === "number") {
        var days = options.expires,
          t = (options.expires = new Date());
        t.setMilliseconds(t.getMilliseconds() + days * 864e5);
      }
      return (document.cookie = [
        encode(key),
        "=",
        stringifyCookieValue(value),
        options.expires ? "; expires=" + options.expires.toUTCString() : "",
        options.path ? "; path=" + options.path : "",
        options.domain ? "; domain=" + options.domain : "",
        options.secure ? "; secure" : "",
      ].join(""));
    }
    var result = key ? undefined : {},
      cookies = document.cookie ? document.cookie.split("; ") : [],
      i = 0,
      l = cookies.length;
    for (; i < l; i++) {
      var parts = cookies[i].split("="),
        name = decode(parts.shift()),
        cookie = parts.join("=");
      if (key === name) {
        result = read(cookie, value);
        break;
      }
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }
    return result;
  });
  config.defaults = {};
  $.removeCookie = function (key, options) {
    $.cookie(key, "", $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };
});
/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 JÃ¶rn Zaefferer
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  $.extend($.fn, {
    validate: function (options) {
      if (!this.length) {
        if (options && options.debug && window.console) {
          console.warn("Nothing selected, can't validate, returning nothing.");
        }
        return;
      }
      var validator = $.data(this[0], "validator");
      if (validator) {
        return validator;
      }
      this.attr("novalidate", "novalidate");
      validator = new $.validator(options, this[0]);
      $.data(this[0], "validator", validator);
      if (validator.settings.onsubmit) {
        this.on("click.validate", ":submit", function (event) {
          validator.submitButton = event.currentTarget;
          if ($(this).hasClass("cancel")) {
            validator.cancelSubmit = true;
          }
          if ($(this).attr("formnovalidate") !== undefined) {
            validator.cancelSubmit = true;
          }
        });
        this.on("submit.validate", function (event) {
          if (validator.settings.debug) {
            event.preventDefault();
          }
          function handle() {
            var hidden, result;
            if (
              validator.submitButton &&
              (validator.settings.submitHandler || validator.formSubmitted)
            ) {
              hidden = $("<input type='hidden'/>")
                .attr("name", validator.submitButton.name)
                .val($(validator.submitButton).val())
                .appendTo(validator.currentForm);
            }
            if (validator.settings.submitHandler) {
              result = validator.settings.submitHandler.call(
                validator,
                validator.currentForm,
                event
              );
              if (hidden) {
                hidden.remove();
              }
              if (result !== undefined) {
                return result;
              }
              return false;
            }
            return true;
          }
          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }
          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }
            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }
      return validator;
    },
    valid: function () {
      var valid, validator, errorList;
      if ($(this[0]).is("form")) {
        valid = this.validate().form();
      } else {
        errorList = [];
        valid = true;
        validator = $(this[0].form).validate();
        this.each(function () {
          valid = validator.element(this) && valid;
          if (!valid) {
            errorList = errorList.concat(validator.errorList);
          }
        });
        validator.errorList = errorList;
      }
      return valid;
    },
    rules: function (command, argument) {
      var element = this[0],
        settings,
        staticRules,
        existingRules,
        data,
        param,
        filtered;
      if (element == null) {
        return;
      }
      if (!element.form && element.hasAttribute("contenteditable")) {
        element.form = this.closest("form")[0];
        element.name = this.attr("name");
      }
      if (element.form == null) {
        return;
      }
      if (command) {
        settings = $.data(element.form, "validator").settings;
        staticRules = settings.rules;
        existingRules = $.validator.staticRules(element);
        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument));
            delete existingRules.messages;
            staticRules[element.name] = existingRules;
            if (argument.messages) {
              settings.messages[element.name] = $.extend(
                settings.messages[element.name],
                argument.messages
              );
            }
            break;
          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }
            filtered = {};
            $.each(argument.split(/\s/), function (index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];
            });
            return filtered;
        }
      }
      data = $.validator.normalizeRules(
        $.extend(
          {},
          $.validator.classRules(element),
          $.validator.attributeRules(element),
          $.validator.dataRules(element),
          $.validator.staticRules(element)
        ),
        element
      );
      if (data.required) {
        param = data.required;
        delete data.required;
        data = $.extend({ required: param }, data);
      }
      if (data.remote) {
        param = data.remote;
        delete data.remote;
        data = $.extend(data, { remote: param });
      }
      return data;
    },
  });
  $.extend($.expr.pseudos || $.expr[":"], {
    blank: function (a) {
      return !$.trim("" + $(a).val());
    },
    filled: function (a) {
      var val = $(a).val();
      return val !== null && !!$.trim("" + val);
    },
    unchecked: function (a) {
      return !$(a).prop("checked");
    },
  });
  $.validator = function (options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  };
  $.validator.format = function (source, params) {
    if (arguments.length === 1) {
      return function () {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    }
    if (params === undefined) {
      return source;
    }
    if (arguments.length > 2 && params.constructor !== Array) {
      params = $.makeArray(arguments).slice(1);
    }
    if (params.constructor !== Array) {
      params = [params];
    }
    $.each(params, function (i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
        return n;
      });
    });
    return source;
  };
  $.extend($.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: false,
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function (element) {
        this.lastActive = element;
        if (this.settings.focusCleanup) {
          if (this.settings.unhighlight) {
            this.settings.unhighlight.call(
              this,
              element,
              this.settings.errorClass,
              this.settings.validClass
            );
          }
          this.hideThese(this.errorsFor(element));
        }
      },
      onfocusout: function (element) {
        if (
          !this.checkable(element) &&
          (element.name in this.submitted || !this.optional(element))
        ) {
          this.element(element);
        }
      },
      onkeyup: function (element, event) {
        var excludedKeys = [
          16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225,
        ];
        if (
          (event.which === 9 && this.elementValue(element) === "") ||
          $.inArray(event.keyCode, excludedKeys) !== -1
        ) {
          return;
        } else if (
          element.name in this.submitted ||
          element.name in this.invalid
        ) {
          this.element(element);
        }
      },
      onclick: function (element) {
        if (element.name in this.submitted) {
          this.element(element);
        } else if (element.parentNode.name in this.submitted) {
          this.element(element.parentNode);
        }
      },
      highlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name)
            .addClass(errorClass)
            .removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name)
            .removeClass(errorClass)
            .addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      },
    },
    setDefaults: function (settings) {
      $.extend($.validator.defaults, settings);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: $.validator.format(
        "Please enter no more than {0} characters."
      ),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format(
        "Please enter a value between {0} and {1} characters long."
      ),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format(
        "Please enter a value less than or equal to {0}."
      ),
      min: $.validator.format(
        "Please enter a value greater than or equal to {0}."
      ),
      step: $.validator.format("Please enter a multiple of {0}."),
    },
    autoCreateRanges: false,
    prototype: {
      init: function () {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext =
          (this.labelContainer.length && this.labelContainer) ||
          $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(
          this.settings.errorLabelContainer
        );
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();
        var groups = (this.groups = {}),
          rules;
        $.each(this.settings.groups, function (key, value) {
          if (typeof value === "string") {
            value = value.split(/\s/);
          }
          $.each(value, function (index, name) {
            groups[name] = key;
          });
        });
        rules = this.settings.rules;
        $.each(rules, function (key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });
        function delegate(event) {
          if (!this.form && this.hasAttribute("contenteditable")) {
            this.form = $(this).closest("form")[0];
            this.name = $(this).attr("name");
          }
          var validator = $.data(this.form, "validator"),
            eventType = "on" + event.type.replace(/^validate/, ""),
            settings = validator.settings;
          if (settings[eventType] && !$(this).is(settings.ignore)) {
            settings[eventType].call(validator, this, event);
          }
        }
        $(this.currentForm)
          .on(
            "focusin.validate focusout.validate keyup.validate",
            ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
              "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
              "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
              "[type='radio'], [type='checkbox'], [contenteditable], [type='button']",
            delegate
          )
          .on(
            "click.validate",
            "select, option, [type='radio'], [type='checkbox']",
            delegate
          );
        if (this.settings.invalidHandler) {
          $(this.currentForm).on(
            "invalid-form.validate",
            this.settings.invalidHandler
          );
        }
      },
      form: function () {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);
        if (!this.valid()) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        }
        this.showErrors();
        return this.valid();
      },
      checkForm: function () {
        this.prepareForm();
        for (
          var i = 0, elements = (this.currentElements = this.elements());
          elements[i];
          i++
        ) {
          this.check(elements[i]);
        }
        return this.valid();
      },
      element: function (element) {
        var cleanElement = this.clean(element),
          checkElement = this.validationTargetFor(cleanElement),
          v = this,
          result = true,
          rs,
          group;
        if (checkElement === undefined) {
          delete this.invalid[cleanElement.name];
        } else {
          this.prepareElement(checkElement);
          this.currentElements = $(checkElement);
          group = this.groups[checkElement.name];
          if (group) {
            $.each(this.groups, function (name, testgroup) {
              if (testgroup === group && name !== checkElement.name) {
                cleanElement = v.validationTargetFor(
                  v.clean(v.findByName(name))
                );
                if (cleanElement && cleanElement.name in v.invalid) {
                  v.currentElements.push(cleanElement);
                  result = v.check(cleanElement) && result;
                }
              }
            });
          }
          rs = this.check(checkElement) !== false;
          result = result && rs;
          if (rs) {
            this.invalid[checkElement.name] = false;
          } else {
            this.invalid[checkElement.name] = true;
          }
          if (!this.numberOfInvalids()) {
            this.toHide = this.toHide.add(this.containers);
          }
          this.showErrors();
          $(element).attr("aria-invalid", !rs);
        }
        return result;
      },
      showErrors: function (errors) {
        if (errors) {
          var validator = this;
          $.extend(this.errorMap, errors);
          this.errorList = $.map(this.errorMap, function (message, name) {
            return { message: message, element: validator.findByName(name)[0] };
          });
          this.successList = $.grep(this.successList, function (element) {
            return !(element.name in errors);
          });
        }
        if (this.settings.showErrors) {
          this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
          this.defaultShowErrors();
        }
      },
      resetForm: function () {
        if ($.fn.resetForm) {
          $(this.currentForm).resetForm();
        }
        this.invalid = {};
        this.submitted = {};
        this.prepareForm();
        this.hideErrors();
        var elements = this.elements()
          .removeData("previousValue")
          .removeAttr("aria-invalid");
        this.resetElements(elements);
      },
      resetElements: function (elements) {
        var i;
        if (this.settings.unhighlight) {
          for (i = 0; elements[i]; i++) {
            this.settings.unhighlight.call(
              this,
              elements[i],
              this.settings.errorClass,
              ""
            );
            this.findByName(elements[i].name).removeClass(
              this.settings.validClass
            );
          }
        } else {
          elements
            .removeClass(this.settings.errorClass)
            .removeClass(this.settings.validClass);
        }
      },
      numberOfInvalids: function () {
        return this.objectLength(this.invalid);
      },
      objectLength: function (obj) {
        var count = 0,
          i;
        for (i in obj) {
          if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
            count++;
          }
        }
        return count;
      },
      hideErrors: function () {
        this.hideThese(this.toHide);
      },
      hideThese: function (errors) {
        errors.not(this.containers).text("");
        this.addWrapper(errors).hide();
      },
      valid: function () {
        return this.size() === 0;
      },
      size: function () {
        return this.errorList.length;
      },
      focusInvalid: function () {
        if (this.settings.focusInvalid) {
          try {
            $(
              this.findLastActive() ||
                (this.errorList.length && this.errorList[0].element) ||
                []
            )
              .filter(":visible")
              .focus()
              .trigger("focusin");
          } catch (e) {}
        }
      },
      findLastActive: function () {
        var lastActive = this.lastActive;
        return (
          lastActive &&
          $.grep(this.errorList, function (n) {
            return n.element.name === lastActive.name;
          }).length === 1 &&
          lastActive
        );
      },
      elements: function () {
        var validator = this,
          rulesCache = {};
        return $(this.currentForm)
          .find("input, select, textarea, [contenteditable]")
          .not(":submit, :reset, :image, :disabled")
          .not(this.settings.ignore)
          .filter(function () {
            var name = this.name || $(this).attr("name");
            if (!name && validator.settings.debug && window.console) {
              console.error("%o has no name assigned", this);
            }
            if (this.hasAttribute("contenteditable")) {
              this.form = $(this).closest("form")[0];
              this.name = name;
            }
            if (
              name in rulesCache ||
              !validator.objectLength($(this).rules())
            ) {
              return false;
            }
            rulesCache[name] = true;
            return true;
          });
      },
      clean: function (selector) {
        return $(selector)[0];
      },
      errors: function () {
        var errorClass = this.settings.errorClass.split(" ").join(".");
        return $(
          this.settings.errorElement + "." + errorClass,
          this.errorContext
        );
      },
      resetInternals: function () {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
      },
      reset: function () {
        this.resetInternals();
        this.currentElements = $([]);
      },
      prepareForm: function () {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function (element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },
      elementValue: function (element) {
        var $element = $(element),
          type = element.type,
          val,
          idx;
        if (type === "radio" || type === "checkbox") {
          return this.findByName(element.name).filter(":checked").val();
        } else if (
          type === "number" &&
          typeof element.validity !== "undefined"
        ) {
          return element.validity.badInput ? "NaN" : $element.val();
        }
        if (element.hasAttribute("contenteditable")) {
          val = $element.text();
        } else {
          val = $element.val();
        }
        if (type === "file") {
          if (val.substr(0, 12) === "C:\\fakepath\\") {
            return val.substr(12);
          }
          idx = val.lastIndexOf("/");
          if (idx >= 0) {
            return val.substr(idx + 1);
          }
          idx = val.lastIndexOf("\\");
          if (idx >= 0) {
            return val.substr(idx + 1);
          }
          return val;
        }
        if (typeof val === "string") {
          return val.replace(/\r/g, "");
        }
        return val;
      },
      check: function (element) {
        element = this.validationTargetFor(this.clean(element));
        var rules = $(element).rules(),
          rulesCount = $.map(rules, function (n, i) {
            return i;
          }).length,
          dependencyMismatch = false,
          val = this.elementValue(element),
          result,
          method,
          rule,
          normalizer;
        if (typeof rules.normalizer === "function") {
          normalizer = rules.normalizer;
        } else if (typeof this.settings.normalizer === "function") {
          normalizer = this.settings.normalizer;
        }
        if (normalizer) {
          val = normalizer.call(element, val);
          if (typeof val !== "string") {
            throw new TypeError("The normalizer should return a string value.");
          }
          delete rules.normalizer;
        }
        for (method in rules) {
          rule = { method: method, parameters: rules[method] };
          try {
            result = $.validator.methods[method].call(
              this,
              val,
              element,
              rule.parameters
            );
            if (result === "dependency-mismatch" && rulesCount === 1) {
              dependencyMismatch = true;
              continue;
            }
            dependencyMismatch = false;
            if (result === "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }
            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            if (this.settings.debug && window.console) {
              console.log(
                "Exception occurred when checking element " +
                  element.id +
                  ", check the '" +
                  rule.method +
                  "' method.",
                e
              );
            }
            if (e instanceof TypeError) {
              e.message +=
                ".  Exception occurred when checking element " +
                element.id +
                ", check the '" +
                rule.method +
                "' method.";
            }
            throw e;
          }
        }
        if (dependencyMismatch) {
          return;
        }
        if (this.objectLength(rules)) {
          this.successList.push(element);
        }
        return true;
      },
      customDataMessage: function (element, method) {
        return (
          $(element).data(
            "msg" +
              method.charAt(0).toUpperCase() +
              method.substring(1).toLowerCase()
          ) || $(element).data("msg")
        );
      },
      customMessage: function (name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor === String ? m : m[method]);
      },
      findDefined: function () {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) {
            return arguments[i];
          }
        }
        return undefined;
      },
      defaultMessage: function (element, rule) {
        if (typeof rule === "string") {
          rule = { method: rule };
        }
        var message = this.findDefined(
            this.customMessage(element.name, rule.method),
            this.customDataMessage(element, rule.method),
            (!this.settings.ignoreTitle && element.title) || undefined,
            $.validator.messages[rule.method],
            "<strong>Warning: No message defined for " +
              element.name +
              "</strong>"
          ),
          theregex = /\$?\{(\d+)\}/g;
        if (typeof message === "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = $.validator.format(
            message.replace(theregex, "{$1}"),
            rule.parameters
          );
        }
        return message;
      },
      formatAndAdd: function (element, rule) {
        var message = this.defaultMessage(element, rule);
        this.errorList.push({
          message: message,
          element: element,
          method: rule.method,
        });
        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },
      addWrapper: function (toToggle) {
        if (this.settings.wrapper) {
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }
        return toToggle;
      },
      defaultShowErrors: function () {
        var i, elements, error;
        for (i = 0; this.errorList[i]; i++) {
          error = this.errorList[i];
          if (this.settings.highlight) {
            this.settings.highlight.call(
              this,
              error.element,
              this.settings.errorClass,
              this.settings.validClass
            );
          }
          this.showLabel(error.element, error.message);
        }
        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }
        if (this.settings.success) {
          for (i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }
        if (this.settings.unhighlight) {
          for (i = 0, elements = this.validElements(); elements[i]; i++) {
            this.settings.unhighlight.call(
              this,
              elements[i],
              this.settings.errorClass,
              this.settings.validClass
            );
          }
        }
        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },
      validElements: function () {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function () {
        return $(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function (element, message) {
        var place,
          group,
          errorID,
          v,
          error = this.errorsFor(element),
          elementID = this.idOrName(element),
          describedBy = $(element).attr("aria-describedby");
        if (error.length) {
          error
            .removeClass(this.settings.validClass)
            .addClass(this.settings.errorClass);
          error.html(message);
        } else {
          error = $("<" + this.settings.errorElement + ">")
            .attr("id", elementID + "-error")
            .addClass(this.settings.errorClass)
            .html(message || "");
          place = error;
          if (this.settings.wrapper) {
            place = error
              .hide()
              .show()
              .wrap("<" + this.settings.wrapper + "/>")
              .parent();
          }
          if (this.labelContainer.length) {
            this.labelContainer.append(place);
          } else if (this.settings.errorPlacement) {
            this.settings.errorPlacement.call(this, place, $(element));
          } else {
            place.insertAfter(element);
          }
          if (error.is("label")) {
            error.attr("for", elementID);
          } else if (
            error.parents("label[for='" + this.escapeCssMeta(elementID) + "']")
              .length === 0
          ) {
            errorID = error.attr("id");
            if (!describedBy) {
              describedBy = errorID;
            } else if (
              !describedBy.match(
                new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b")
              )
            ) {
              describedBy += " " + errorID;
            }
            $(element).attr("aria-describedby", describedBy);
            group = this.groups[element.name];
            if (group) {
              v = this;
              $.each(v.groups, function (name, testgroup) {
                if (testgroup === group) {
                  $(
                    "[name='" + v.escapeCssMeta(name) + "']",
                    v.currentForm
                  ).attr("aria-describedby", error.attr("id"));
                }
              });
            }
          }
        }
        if (!message && this.settings.success) {
          error.text("");
          if (typeof this.settings.success === "string") {
            error.addClass(this.settings.success);
          } else {
            this.settings.success(error, element);
          }
        }
        this.toShow = this.toShow.add(error);
      },
      errorsFor: function (element) {
        var name = this.escapeCssMeta(this.idOrName(element)),
          describer = $(element).attr("aria-describedby"),
          selector = "label[for='" + name + "'], label[for='" + name + "'] *";
        if (describer) {
          selector =
            selector +
            ", #" +
            this.escapeCssMeta(describer).replace(/\s+/g, ", #");
        }
        return this.errors().filter(selector);
      },
      escapeCssMeta: function (string) {
        return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function (element) {
        return (
          this.groups[element.name] ||
          (this.checkable(element) ? element.name : element.id || element.name)
        );
      },
      validationTargetFor: function (element) {
        if (this.checkable(element)) {
          element = this.findByName(element.name);
        }
        return $(element).not(this.settings.ignore)[0];
      },
      checkable: function (element) {
        return /radio|checkbox/i.test(element.type);
      },
      findByName: function (name) {
        return $(this.currentForm).find(
          "[name='" + this.escapeCssMeta(name) + "']"
        );
      },
      getLength: function (value, element) {
        switch (element.nodeName.toLowerCase()) {
          case "select":
            return $("option:selected", element).length;
          case "input":
            if (this.checkable(element)) {
              return this.findByName(element.name).filter(":checked").length;
            }
        }
        return value.length;
      },
      depend: function (param, element) {
        return this.dependTypes[typeof param]
          ? this.dependTypes[typeof param](param, element)
          : true;
      },
      dependTypes: {
        boolean: function (param) {
          return param;
        },
        string: function (param, element) {
          return !!$(param, element.form).length;
        },
        function: function (param, element) {
          return param(element);
        },
      },
      optional: function (element) {
        var val = this.elementValue(element);
        return (
          !$.validator.methods.required.call(this, val, element) &&
          "dependency-mismatch"
        );
      },
      startRequest: function (element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          $(element).addClass(this.settings.pendingClass);
          this.pending[element.name] = true;
        }
      },
      stopRequest: function (element, valid) {
        this.pendingRequest--;
        if (this.pendingRequest < 0) {
          this.pendingRequest = 0;
        }
        delete this.pending[element.name];
        $(element).removeClass(this.settings.pendingClass);
        if (
          valid &&
          this.pendingRequest === 0 &&
          this.formSubmitted &&
          this.form()
        ) {
          $(this.currentForm).submit();
          if (this.submitButton) {
            $(
              "input:hidden[name='" + this.submitButton.name + "']",
              this.currentForm
            ).remove();
          }
          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },
      previousValue: function (element, method) {
        method = (typeof method === "string" && method) || "remote";
        return (
          $.data(element, "previousValue") ||
          $.data(element, "previousValue", {
            old: null,
            valid: true,
            message: this.defaultMessage(element, { method: method }),
          })
        );
      },
      destroy: function () {
        this.resetForm();
        $(this.currentForm)
          .off(".validate")
          .removeData("validator")
          .find(".validate-equalTo-blur")
          .off(".validate-equalTo")
          .removeClass("validate-equalTo-blur");
      },
    },
    classRuleSettings: {
      required: { required: true },
      email: { email: true },
      url: { url: true },
      date: { date: true },
      dateISO: { dateISO: true },
      number: { number: true },
      digits: { digits: true },
      creditcard: { creditcard: true },
    },
    addClassRules: function (className, rules) {
      if (className.constructor === String) {
        this.classRuleSettings[className] = rules;
      } else {
        $.extend(this.classRuleSettings, className);
      }
    },
    classRules: function (element) {
      var rules = {},
        classes = $(element).attr("class");
      if (classes) {
        $.each(classes.split(" "), function () {
          if (this in $.validator.classRuleSettings) {
            $.extend(rules, $.validator.classRuleSettings[this]);
          }
        });
      }
      return rules;
    },
    normalizeAttributeRule: function (rules, type, method, value) {
      if (
        /min|max|step/.test(method) &&
        (type === null || /number|range|text/.test(type))
      ) {
        value = Number(value);
        if (isNaN(value)) {
          value = undefined;
        }
      }
      if (value || value === 0) {
        rules[method] = value;
      } else if (type === method && type !== "range") {
        rules[method] = true;
      }
    },
    attributeRules: function (element) {
      var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method,
        value;
      for (method in $.validator.methods) {
        if (method === "required") {
          value = element.getAttribute(method);
          if (value === "") {
            value = true;
          }
          value = !!value;
        } else {
          value = $element.attr(method);
        }
        this.normalizeAttributeRule(rules, type, method, value);
      }
      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }
      return rules;
    },
    dataRules: function (element) {
      var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method,
        value;
      for (method in $.validator.methods) {
        value = $element.data(
          "rule" +
            method.charAt(0).toUpperCase() +
            method.substring(1).toLowerCase()
        );
        this.normalizeAttributeRule(rules, type, method, value);
      }
      return rules;
    },
    staticRules: function (element) {
      var rules = {},
        validator = $.data(element.form, "validator");
      if (validator.settings.rules) {
        rules =
          $.validator.normalizeRule(validator.settings.rules[element.name]) ||
          {};
      }
      return rules;
    },
    normalizeRules: function (rules, element) {
      $.each(rules, function (prop, val) {
        if (val === false) {
          delete rules[prop];
          return;
        }
        if (val.param || val.depends) {
          var keepRule = true;
          switch (typeof val.depends) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;
            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }
          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            $.data(element.form, "validator").resetElements($(element));
            delete rules[prop];
          }
        }
      });
      $.each(rules, function (rule, parameter) {
        rules[rule] =
          $.isFunction(parameter) && rule !== "normalizer"
            ? parameter(element)
            : parameter;
      });
      $.each(["minlength", "maxlength"], function () {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(["rangelength", "range"], function () {
        var parts;
        if (rules[this]) {
          if ($.isArray(rules[this])) {
            rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
          } else if (typeof rules[this] === "string") {
            parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
            rules[this] = [Number(parts[0]), Number(parts[1])];
          }
        }
      });
      if ($.validator.autoCreateRanges) {
        if (rules.min != null && rules.max != null) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }
        if (rules.minlength != null && rules.maxlength != null) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }
      return rules;
    },
    normalizeRule: function (data) {
      if (typeof data === "string") {
        var transformed = {};
        $.each(data.split(/\s/), function () {
          transformed[this] = true;
        });
        data = transformed;
      }
      return data;
    },
    addMethod: function (name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] =
        message !== undefined ? message : $.validator.messages[name];
      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },
    methods: {
      required: function (value, element, param) {
        if (!this.depend(param, element)) {
          return "dependency-mismatch";
        }
        if (element.nodeName.toLowerCase() === "select") {
          var val = $(element).val();
          return val && val.length > 0;
        }
        if (this.checkable(element)) {
          return this.getLength(value, element) > 0;
        }
        return value.length > 0;
      },
      email: function (value, element) {
        return (
          this.optional(element) ||
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            value
          )
        );
      },
      url: function (value, element) {
        return (
          this.optional(element) ||
          /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
            value
          )
        );
      },
      date: function (value, element) {
        return (
          this.optional(element) ||
          !/Invalid|NaN/.test(new Date(value).toString())
        );
      },
      dateISO: function (value, element) {
        return (
          this.optional(element) ||
          /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
            value
          )
        );
      },
      number: function (value, element) {
        return (
          this.optional(element) ||
          /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
        );
      },
      digits: function (value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },
      minlength: function (value, element, param) {
        var length = $.isArray(value)
          ? value.length
          : this.getLength(value, element);
        return this.optional(element) || length >= param;
      },
      maxlength: function (value, element, param) {
        var length = $.isArray(value)
          ? value.length
          : this.getLength(value, element);
        return this.optional(element) || length <= param;
      },
      rangelength: function (value, element, param) {
        var length = $.isArray(value)
          ? value.length
          : this.getLength(value, element);
        return (
          this.optional(element) || (length >= param[0] && length <= param[1])
        );
      },
      min: function (value, element, param) {
        return this.optional(element) || value >= param;
      },
      max: function (value, element, param) {
        return this.optional(element) || value <= param;
      },
      range: function (value, element, param) {
        return (
          this.optional(element) || (value >= param[0] && value <= param[1])
        );
      },
      step: function (value, element, param) {
        var type = $(element).attr("type"),
          errorMessage =
            "Step attribute on input type " + type + " is not supported.",
          supportedTypes = ["text", "number", "range"],
          re = new RegExp("\\b" + type + "\\b"),
          notSupported = type && !re.test(supportedTypes.join()),
          decimalPlaces = function (num) {
            var match = ("" + num).match(/(?:\.(\d+))?$/);
            if (!match) {
              return 0;
            }
            return match[1] ? match[1].length : 0;
          },
          toInt = function (num) {
            return Math.round(num * Math.pow(10, decimals));
          },
          valid = true,
          decimals;
        if (notSupported) {
          throw new Error(errorMessage);
        }
        decimals = decimalPlaces(param);
        if (
          decimalPlaces(value) > decimals ||
          toInt(value) % toInt(param) !== 0
        ) {
          valid = false;
        }
        return this.optional(element) || valid;
      },
      equalTo: function (value, element, param) {
        var target = $(param);
        if (
          this.settings.onfocusout &&
          target.not(".validate-equalTo-blur").length
        ) {
          target
            .addClass("validate-equalTo-blur")
            .on("blur.validate-equalTo", function () {
              $(element).valid();
            });
        }
        return value === target.val();
      },
      remote: function (value, element, param, method) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }
        method = (typeof method === "string" && method) || "remote";
        var previous = this.previousValue(element, method),
          validator,
          data,
          optionDataString;
        if (!this.settings.messages[element.name]) {
          this.settings.messages[element.name] = {};
        }
        previous.originalMessage =
          previous.originalMessage ||
          this.settings.messages[element.name][method];
        this.settings.messages[element.name][method] = previous.message;
        param = (typeof param === "string" && { url: param }) || param;
        optionDataString = $.param($.extend({ data: value }, param.data));
        if (previous.old === optionDataString) {
          return previous.valid;
        }
        previous.old = optionDataString;
        validator = this;
        this.startRequest(element);
        data = {};
        data[element.name] = value;
        $.ajax(
          $.extend(
            true,
            {
              mode: "abort",
              port: "validate" + element.name,
              dataType: "json",
              data: data,
              context: validator.currentForm,
              success: function (response) {
                var valid = response === true || response === "true",
                  errors,
                  message,
                  submitted;
                validator.settings.messages[element.name][method] =
                  previous.originalMessage;
                if (valid) {
                  submitted = validator.formSubmitted;
                  validator.resetInternals();
                  validator.toHide = validator.errorsFor(element);
                  validator.formSubmitted = submitted;
                  validator.successList.push(element);
                  validator.invalid[element.name] = false;
                  validator.showErrors();
                } else {
                  errors = {};
                  message =
                    response ||
                    validator.defaultMessage(element, {
                      method: method,
                      parameters: value,
                    });
                  errors[element.name] = previous.message = message;
                  validator.invalid[element.name] = true;
                  validator.showErrors(errors);
                }
                previous.valid = valid;
                validator.stopRequest(element, valid);
              },
            },
            param
          )
        );
        return "pending";
      },
    },
  });
  var pendingRequests = {},
    ajax;
  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function (settings, _, xhr) {
      var port = settings.port;
      if (settings.mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = xhr;
      }
    });
  } else {
    ajax = $.ajax;
    $.ajax = function (settings) {
      var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
        port = ("port" in settings ? settings : $.ajaxSettings).port;
      if (mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = ajax.apply(this, arguments);
        return pendingRequests[port];
      }
      return ajax.apply(this, arguments);
    };
  }
  return $;
});
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function (global, factory) {
  if (typeof define == "function" && define.amd) {
    define("ev-emitter/ev-emitter", factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory();
  } else {
    global.EvEmitter = factory();
  }
})(typeof window != "undefined" ? window : this, function () {
  function EvEmitter() {}
  var proto = EvEmitter.prototype;
  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    var events = (this._events = this._events || {});
    var listeners = (events[eventName] = events[eventName] || []);
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }
    return this;
  };
  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    this.on(eventName, listener);
    var onceEvents = (this._onceEvents = this._onceEvents || {});
    var onceListeners = (onceEvents[eventName] = onceEvents[eventName] || {});
    onceListeners[listener] = true;
    return this;
  };
  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }
    return this;
  };
  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    listeners = listeners.slice(0);
    args = args || [];
    var onceListeners = this._onceEvents && this._onceEvents[eventName];
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        this.off(eventName, listener);
        delete onceListeners[listener];
      }
      listener.apply(this, args);
    }
    return this;
  };
  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };
  return EvEmitter;
});
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function (window, factory) {
  "use strict";
  if (typeof define == "function" && define.amd) {
    define(["ev-emitter/ev-emitter"], function (EvEmitter) {
      return factory(window, EvEmitter);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(window, require("ev-emitter"));
  } else {
    window.imagesLoaded = factory(window, window.EvEmitter);
  }
})(
  typeof window !== "undefined" ? window : this,
  function factory(window, EvEmitter) {
    var $ = window.jQuery;
    var console = window.console;
    function extend(a, b) {
      for (var prop in b) {
        a[prop] = b[prop];
      }
      return a;
    }
    var arraySlice = Array.prototype.slice;
    function makeArray(obj) {
      if (Array.isArray(obj)) {
        return obj;
      }
      var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
      if (isArrayLike) {
        return arraySlice.call(obj);
      }
      return [obj];
    }
    function ImagesLoaded(elem, options, onAlways) {
      if (!(this instanceof ImagesLoaded)) {
        return new ImagesLoaded(elem, options, onAlways);
      }
      var queryElem = elem;
      if (typeof elem == "string") {
        queryElem = document.querySelectorAll(elem);
      }
      if (!queryElem) {
        console.error("Bad element for imagesLoaded " + (queryElem || elem));
        return;
      }
      this.elements = makeArray(queryElem);
      this.options = extend({}, this.options);
      if (typeof options == "function") {
        onAlways = options;
      } else {
        extend(this.options, options);
      }
      if (onAlways) {
        this.on("always", onAlways);
      }
      this.getImages();
      if ($) {
        this.jqDeferred = new $.Deferred();
      }
      setTimeout(this.check.bind(this));
    }
    ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
    ImagesLoaded.prototype.options = {};
    ImagesLoaded.prototype.getImages = function () {
      this.images = [];
      this.elements.forEach(this.addElementImages, this);
    };
    ImagesLoaded.prototype.addElementImages = function (elem) {
      if (elem.nodeName == "IMG") {
        this.addImage(elem);
      }
      if (this.options.background === true) {
        this.addElementBackgroundImages(elem);
      }
      var nodeType = elem.nodeType;
      if (!nodeType || !elementNodeTypes[nodeType]) {
        return;
      }
      var childImgs = elem.querySelectorAll("img");
      for (var i = 0; i < childImgs.length; i++) {
        var img = childImgs[i];
        this.addImage(img);
      }
      if (typeof this.options.background == "string") {
        var children = elem.querySelectorAll(this.options.background);
        for (i = 0; i < children.length; i++) {
          var child = children[i];
          this.addElementBackgroundImages(child);
        }
      }
    };
    var elementNodeTypes = { 1: true, 9: true, 11: true };
    ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
      var style = getComputedStyle(elem);
      if (!style) {
        return;
      }
      var reURL = /url\((['"])?(.*?)\1\)/gi;
      var matches = reURL.exec(style.backgroundImage);
      while (matches !== null) {
        var url = matches && matches[2];
        if (url) {
          this.addBackground(url, elem);
        }
        matches = reURL.exec(style.backgroundImage);
      }
    };
    ImagesLoaded.prototype.addImage = function (img) {
      var loadingImage = new LoadingImage(img);
      this.images.push(loadingImage);
    };
    ImagesLoaded.prototype.addBackground = function (url, elem) {
      var background = new Background(url, elem);
      this.images.push(background);
    };
    ImagesLoaded.prototype.check = function () {
      var _this = this;
      this.progressedCount = 0;
      this.hasAnyBroken = false;
      if (!this.images.length) {
        this.complete();
        return;
      }
      function onProgress(image, elem, message) {
        setTimeout(function () {
          _this.progress(image, elem, message);
        });
      }
      this.images.forEach(function (loadingImage) {
        loadingImage.once("progress", onProgress);
        loadingImage.check();
      });
    };
    ImagesLoaded.prototype.progress = function (image, elem, message) {
      this.progressedCount++;
      this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
      this.emitEvent("progress", [this, image, elem]);
      if (this.jqDeferred && this.jqDeferred.notify) {
        this.jqDeferred.notify(this, image);
      }
      if (this.progressedCount == this.images.length) {
        this.complete();
      }
      if (this.options.debug && console) {
        console.log("progress: " + message, image, elem);
      }
    };
    ImagesLoaded.prototype.complete = function () {
      var eventName = this.hasAnyBroken ? "fail" : "done";
      this.isComplete = true;
      this.emitEvent(eventName, [this]);
      this.emitEvent("always", [this]);
      if (this.jqDeferred) {
        var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[jqMethod](this);
      }
    };
    function LoadingImage(img) {
      this.img = img;
    }
    LoadingImage.prototype = Object.create(EvEmitter.prototype);
    LoadingImage.prototype.check = function () {
      var isComplete = this.getIsImageComplete();
      if (isComplete) {
        this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
        return;
      }
      this.proxyImage = new Image();
      this.proxyImage.addEventListener("load", this);
      this.proxyImage.addEventListener("error", this);
      this.img.addEventListener("load", this);
      this.img.addEventListener("error", this);
      this.proxyImage.src = this.img.src;
    };
    LoadingImage.prototype.getIsImageComplete = function () {
      return this.img.complete && this.img.naturalWidth;
    };
    LoadingImage.prototype.confirm = function (isLoaded, message) {
      this.isLoaded = isLoaded;
      this.emitEvent("progress", [this, this.img, message]);
    };
    LoadingImage.prototype.handleEvent = function (event) {
      var method = "on" + event.type;
      if (this[method]) {
        this[method](event);
      }
    };
    LoadingImage.prototype.onload = function () {
      this.confirm(true, "onload");
      this.unbindEvents();
    };
    LoadingImage.prototype.onerror = function () {
      this.confirm(false, "onerror");
      this.unbindEvents();
    };
    LoadingImage.prototype.unbindEvents = function () {
      this.proxyImage.removeEventListener("load", this);
      this.proxyImage.removeEventListener("error", this);
      this.img.removeEventListener("load", this);
      this.img.removeEventListener("error", this);
    };
    function Background(url, element) {
      this.url = url;
      this.element = element;
      this.img = new Image();
    }
    Background.prototype = Object.create(LoadingImage.prototype);
    Background.prototype.check = function () {
      this.img.addEventListener("load", this);
      this.img.addEventListener("error", this);
      this.img.src = this.url;
      var isComplete = this.getIsImageComplete();
      if (isComplete) {
        this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
        this.unbindEvents();
      }
    };
    Background.prototype.unbindEvents = function () {
      this.img.removeEventListener("load", this);
      this.img.removeEventListener("error", this);
    };
    Background.prototype.confirm = function (isLoaded, message) {
      this.isLoaded = isLoaded;
      this.emitEvent("progress", [this, this.element, message]);
    };
    ImagesLoaded.makeJQueryPlugin = function (jQuery) {
      jQuery = jQuery || window.jQuery;
      if (!jQuery) {
        return;
      }
      $ = jQuery;
      $.fn.imagesLoaded = function (options, callback) {
        var instance = new ImagesLoaded(this, options, callback);
        return instance.jqDeferred.promise($(this));
      };
    };
    ImagesLoaded.makeJQueryPlugin();
    return ImagesLoaded;
  }
);
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("jquery-bridget/jquery-bridget", ["jquery"], function (jQuery) {
      return factory(window, jQuery);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(window, require("jquery"));
  } else {
    window.jQueryBridget = factory(window, window.jQuery);
  }
})(window, function factory(window, jQuery) {
  "use strict";
  var arraySlice = Array.prototype.slice;
  var console = window.console;
  var logError =
    typeof console == "undefined"
      ? function () {}
      : function (message) {
          console.error(message);
        };
  function jQueryBridget(namespace, PluginClass, $) {
    $ = $ || jQuery || window.jQuery;
    if (!$) {
      return;
    }
    if (!PluginClass.prototype.option) {
      PluginClass.prototype.option = function (opts) {
        if (!$.isPlainObject(opts)) {
          return;
        }
        this.options = $.extend(true, this.options, opts);
      };
    }
    $.fn[namespace] = function (arg0) {
      if (typeof arg0 == "string") {
        var args = arraySlice.call(arguments, 1);
        return methodCall(this, arg0, args);
      }
      plainCall(this, arg0);
      return this;
    };
    function methodCall($elems, methodName, args) {
      var returnValue;
      var pluginMethodStr = "$()." + namespace + '("' + methodName + '")';
      $elems.each(function (i, elem) {
        var instance = $.data(elem, namespace);
        if (!instance) {
          logError(
            namespace +
              " not initialized. Cannot call methods, i.e. " +
              pluginMethodStr
          );
          return;
        }
        var method = instance[methodName];
        if (!method || methodName.charAt(0) == "_") {
          logError(pluginMethodStr + " is not a valid method");
          return;
        }
        var value = method.apply(instance, args);
        returnValue = returnValue === undefined ? value : returnValue;
      });
      return returnValue !== undefined ? returnValue : $elems;
    }
    function plainCall($elems, options) {
      $elems.each(function (i, elem) {
        var instance = $.data(elem, namespace);
        if (instance) {
          instance.option(options);
          instance._init();
        } else {
          instance = new PluginClass(elem, options);
          $.data(elem, namespace, instance);
        }
      });
    }
    updateJQuery($);
  }
  function updateJQuery($) {
    if (!$ || ($ && $.bridget)) {
      return;
    }
    $.bridget = jQueryBridget;
  }
  updateJQuery(jQuery || window.jQuery);
  return jQueryBridget;
});
(function (global, factory) {
  if (typeof define == "function" && define.amd) {
    define("ev-emitter/ev-emitter", factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory();
  } else {
    global.EvEmitter = factory();
  }
})(typeof window != "undefined" ? window : this, function () {
  function EvEmitter() {}
  var proto = EvEmitter.prototype;
  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    var events = (this._events = this._events || {});
    var listeners = (events[eventName] = events[eventName] || []);
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }
    return this;
  };
  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    this.on(eventName, listener);
    var onceEvents = (this._onceEvents = this._onceEvents || {});
    var onceListeners = (onceEvents[eventName] = onceEvents[eventName] || {});
    onceListeners[listener] = true;
    return this;
  };
  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }
    return this;
  };
  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    listeners = listeners.slice(0);
    args = args || [];
    var onceListeners = this._onceEvents && this._onceEvents[eventName];
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        this.off(eventName, listener);
        delete onceListeners[listener];
      }
      listener.apply(this, args);
    }
    return this;
  };
  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };
  return EvEmitter;
});
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("get-size/get-size", factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory();
  } else {
    window.getSize = factory();
  }
})(window, function factory() {
  "use strict";
  function getStyleSize(value) {
    var num = parseFloat(value);
    var isValid = value.indexOf("%") == -1 && !isNaN(num);
    return isValid && num;
  }
  function noop() {}
  var logError =
    typeof console == "undefined"
      ? noop
      : function (message) {
          console.error(message);
        };
  var measurements = [
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBottom",
    "borderLeftWidth",
    "borderRightWidth",
    "borderTopWidth",
    "borderBottomWidth",
  ];
  var measurementsLength = measurements.length;
  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0,
    };
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      size[measurement] = 0;
    }
    return size;
  }
  function getStyle(elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      logError(
        "Style returned " +
          style +
          ". Are you running this code in a hidden iframe on Firefox? " +
          "See https://bit.ly/getsizebug1"
      );
    }
    return style;
  }
  var isSetup = false;
  var isBoxSizeOuter;
  function setup() {
    if (isSetup) {
      return;
    }
    isSetup = true;
    var div = document.createElement("div");
    div.style.width = "200px";
    div.style.padding = "1px 2px 3px 4px";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "1px 2px 3px 4px";
    div.style.boxSizing = "border-box";
    var body = document.body || document.documentElement;
    body.appendChild(div);
    var style = getStyle(div);
    isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;
    body.removeChild(div);
  }
  function getSize(elem) {
    setup();
    if (typeof elem == "string") {
      elem = document.querySelector(elem);
    }
    if (!elem || typeof elem != "object" || !elem.nodeType) {
      return;
    }
    var style = getStyle(elem);
    if (style.display == "none") {
      return getZeroSize();
    }
    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;
    var isBorderBox = (size.isBorderBox = style.boxSizing == "border-box");
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      var value = style[measurement];
      var num = parseFloat(value);
      size[measurement] = !isNaN(num) ? num : 0;
    }
    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;
    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
    var styleWidth = getStyleSize(style.width);
    if (styleWidth !== false) {
      size.width =
        styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }
    var styleHeight = getStyleSize(style.height);
    if (styleHeight !== false) {
      size.height =
        styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }
    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);
    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;
    return size;
  }
  return getSize;
});
(function (window, factory) {
  "use strict";
  if (typeof define == "function" && define.amd) {
    define("desandro-matches-selector/matches-selector", factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory();
  } else {
    window.matchesSelector = factory();
  }
})(window, function factory() {
  "use strict";
  var matchesMethod = (function () {
    var ElemProto = window.Element.prototype;
    if (ElemProto.matches) {
      return "matches";
    }
    if (ElemProto.matchesSelector) {
      return "matchesSelector";
    }
    var prefixes = ["webkit", "moz", "ms", "o"];
    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var method = prefix + "MatchesSelector";
      if (ElemProto[method]) {
        return method;
      }
    }
  })();
  return function matchesSelector(elem, selector) {
    return elem[matchesMethod](selector);
  };
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("fizzy-ui-utils/utils", [
      "desandro-matches-selector/matches-selector",
    ], function (matchesSelector) {
      return factory(window, matchesSelector);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(window, require("desandro-matches-selector"));
  } else {
    window.fizzyUIUtils = factory(window, window.matchesSelector);
  }
})(window, function factory(window, matchesSelector) {
  var utils = {};
  utils.extend = function (a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  };
  utils.modulo = function (num, div) {
    return ((num % div) + div) % div;
  };
  var arraySlice = Array.prototype.slice;
  utils.makeArray = function (obj) {
    if (Array.isArray(obj)) {
      return obj;
    }
    if (obj === null || obj === undefined) {
      return [];
    }
    var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
    if (isArrayLike) {
      return arraySlice.call(obj);
    }
    return [obj];
  };
  utils.removeFrom = function (ary, obj) {
    var index = ary.indexOf(obj);
    if (index != -1) {
      ary.splice(index, 1);
    }
  };
  utils.getParent = function (elem, selector) {
    while (elem.parentNode && elem != document.body) {
      elem = elem.parentNode;
      if (matchesSelector(elem, selector)) {
        return elem;
      }
    }
  };
  utils.getQueryElement = function (elem) {
    if (typeof elem == "string") {
      return document.querySelector(elem);
    }
    return elem;
  };
  utils.handleEvent = function (event) {
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  utils.filterFindElements = function (elems, selector) {
    elems = utils.makeArray(elems);
    var ffElems = [];
    elems.forEach(function (elem) {
      if (!(elem instanceof HTMLElement)) {
        return;
      }
      if (!selector) {
        ffElems.push(elem);
        return;
      }
      if (matchesSelector(elem, selector)) {
        ffElems.push(elem);
      }
      var childElems = elem.querySelectorAll(selector);
      for (var i = 0; i < childElems.length; i++) {
        ffElems.push(childElems[i]);
      }
    });
    return ffElems;
  };
  utils.debounceMethod = function (_class, methodName, threshold) {
    threshold = threshold || 100;
    var method = _class.prototype[methodName];
    var timeoutName = methodName + "Timeout";
    _class.prototype[methodName] = function () {
      var timeout = this[timeoutName];
      clearTimeout(timeout);
      var args = arguments;
      var _this = this;
      this[timeoutName] = setTimeout(function () {
        method.apply(_this, args);
        delete _this[timeoutName];
      }, threshold);
    };
  };
  utils.docReady = function (callback) {
    var readyState = document.readyState;
    if (readyState == "complete" || readyState == "interactive") {
      setTimeout(callback);
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
  };
  utils.toDashed = function (str) {
    return str
      .replace(/(.)([A-Z])/g, function (match, $1, $2) {
        return $1 + "-" + $2;
      })
      .toLowerCase();
  };
  var console = window.console;
  utils.htmlInit = function (WidgetClass, namespace) {
    utils.docReady(function () {
      var dashedNamespace = utils.toDashed(namespace);
      var dataAttr = "data-" + dashedNamespace;
      var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
      var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
      var elems = utils
        .makeArray(dataAttrElems)
        .concat(utils.makeArray(jsDashElems));
      var dataOptionsAttr = dataAttr + "-options";
      var jQuery = window.jQuery;
      elems.forEach(function (elem) {
        var attr =
          elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
        var options;
        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
          if (console) {
            console.error(
              "Error parsing " +
                dataAttr +
                " on " +
                elem.className +
                ": " +
                error
            );
          }
          return;
        }
        var instance = new WidgetClass(elem, options);
        if (jQuery) {
          jQuery.data(elem, namespace, instance);
        }
      });
    });
  };
  return utils;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("outlayer/item", [
      "ev-emitter/ev-emitter",
      "get-size/get-size",
    ], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(require("ev-emitter"), require("get-size"));
  } else {
    window.Outlayer = {};
    window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
  }
})(window, function factory(EvEmitter, getSize) {
  "use strict";
  function isEmptyObj(obj) {
    for (var prop in obj) {
      return false;
    }
    prop = null;
    return true;
  }
  var docElemStyle = document.documentElement.style;
  var transitionProperty =
    typeof docElemStyle.transition == "string"
      ? "transition"
      : "WebkitTransition";
  var transformProperty =
    typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
  var transitionEndEvent = {
    WebkitTransition: "webkitTransitionEnd",
    transition: "transitionend",
  }[transitionProperty];
  var vendorProperties = {
    transform: transformProperty,
    transition: transitionProperty,
    transitionDuration: transitionProperty + "Duration",
    transitionProperty: transitionProperty + "Property",
    transitionDelay: transitionProperty + "Delay",
  };
  function Item(element, layout) {
    if (!element) {
      return;
    }
    this.element = element;
    this.layout = layout;
    this.position = { x: 0, y: 0 };
    this._create();
  }
  var proto = (Item.prototype = Object.create(EvEmitter.prototype));
  proto.constructor = Item;
  proto._create = function () {
    this._transn = { ingProperties: {}, clean: {}, onEnd: {} };
    this.css({ position: "absolute" });
  };
  proto.handleEvent = function (event) {
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  proto.getSize = function () {
    this.size = getSize(this.element);
  };
  proto.css = function (style) {
    var elemStyle = this.element.style;
    for (var prop in style) {
      var supportedProp = vendorProperties[prop] || prop;
      elemStyle[supportedProp] = style[prop];
    }
  };
  proto.getPosition = function () {
    var style = getComputedStyle(this.element);
    var isOriginLeft = this.layout._getOption("originLeft");
    var isOriginTop = this.layout._getOption("originTop");
    var xValue = style[isOriginLeft ? "left" : "right"];
    var yValue = style[isOriginTop ? "top" : "bottom"];
    var x = parseFloat(xValue);
    var y = parseFloat(yValue);
    var layoutSize = this.layout.size;
    if (xValue.indexOf("%") != -1) {
      x = (x / 100) * layoutSize.width;
    }
    if (yValue.indexOf("%") != -1) {
      y = (y / 100) * layoutSize.height;
    }
    x = isNaN(x) ? 0 : x;
    y = isNaN(y) ? 0 : y;
    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
    y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
    this.position.x = x;
    this.position.y = y;
  };
  proto.layoutPosition = function () {
    var layoutSize = this.layout.size;
    var style = {};
    var isOriginLeft = this.layout._getOption("originLeft");
    var isOriginTop = this.layout._getOption("originTop");
    var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
    var xProperty = isOriginLeft ? "left" : "right";
    var xResetProperty = isOriginLeft ? "right" : "left";
    var x = this.position.x + layoutSize[xPadding];
    style[xProperty] = this.getXValue(x);
    style[xResetProperty] = "";
    var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
    var yProperty = isOriginTop ? "top" : "bottom";
    var yResetProperty = isOriginTop ? "bottom" : "top";
    var y = this.position.y + layoutSize[yPadding];
    style[yProperty] = this.getYValue(y);
    style[yResetProperty] = "";
    this.css(style);
    this.emitEvent("layout", [this]);
  };
  proto.getXValue = function (x) {
    var isHorizontal = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !isHorizontal
      ? (x / this.layout.size.width) * 100 + "%"
      : x + "px";
  };
  proto.getYValue = function (y) {
    var isHorizontal = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && isHorizontal
      ? (y / this.layout.size.height) * 100 + "%"
      : y + "px";
  };
  proto._transitionTo = function (x, y) {
    this.getPosition();
    var curX = this.position.x;
    var curY = this.position.y;
    var didNotMove = x == this.position.x && y == this.position.y;
    this.setPosition(x, y);
    if (didNotMove && !this.isTransitioning) {
      this.layoutPosition();
      return;
    }
    var transX = x - curX;
    var transY = y - curY;
    var transitionStyle = {};
    transitionStyle.transform = this.getTranslate(transX, transY);
    this.transition({
      to: transitionStyle,
      onTransitionEnd: { transform: this.layoutPosition },
      isCleaning: true,
    });
  };
  proto.getTranslate = function (x, y) {
    var isOriginLeft = this.layout._getOption("originLeft");
    var isOriginTop = this.layout._getOption("originTop");
    x = isOriginLeft ? x : -x;
    y = isOriginTop ? y : -y;
    return "translate3d(" + x + "px, " + y + "px, 0)";
  };
  proto.goTo = function (x, y) {
    this.setPosition(x, y);
    this.layoutPosition();
  };
  proto.moveTo = proto._transitionTo;
  proto.setPosition = function (x, y) {
    this.position.x = parseFloat(x);
    this.position.y = parseFloat(y);
  };
  proto._nonTransition = function (args) {
    this.css(args.to);
    if (args.isCleaning) {
      this._removeStyles(args.to);
    }
    for (var prop in args.onTransitionEnd) {
      args.onTransitionEnd[prop].call(this);
    }
  };
  proto.transition = function (args) {
    if (!parseFloat(this.layout.options.transitionDuration)) {
      this._nonTransition(args);
      return;
    }
    var _transition = this._transn;
    for (var prop in args.onTransitionEnd) {
      _transition.onEnd[prop] = args.onTransitionEnd[prop];
    }
    for (prop in args.to) {
      _transition.ingProperties[prop] = true;
      if (args.isCleaning) {
        _transition.clean[prop] = true;
      }
    }
    if (args.from) {
      this.css(args.from);
      var h = this.element.offsetHeight;
      h = null;
    }
    this.enableTransition(args.to);
    this.css(args.to);
    this.isTransitioning = true;
  };
  function toDashedAll(str) {
    return str.replace(/([A-Z])/g, function ($1) {
      return "-" + $1.toLowerCase();
    });
  }
  var transitionProps = "opacity," + toDashedAll(transformProperty);
  proto.enableTransition = function () {
    if (this.isTransitioning) {
      return;
    }
    var duration = this.layout.options.transitionDuration;
    duration = typeof duration == "number" ? duration + "ms" : duration;
    this.css({
      transitionProperty: transitionProps,
      transitionDuration: duration,
      transitionDelay: this.staggerDelay || 0,
    });
    this.element.addEventListener(transitionEndEvent, this, false);
  };
  proto.onwebkitTransitionEnd = function (event) {
    this.ontransitionend(event);
  };
  proto.onotransitionend = function (event) {
    this.ontransitionend(event);
  };
  var dashedVendorProperties = { "-webkit-transform": "transform" };
  proto.ontransitionend = function (event) {
    if (event.target !== this.element) {
      return;
    }
    var _transition = this._transn;
    var propertyName =
      dashedVendorProperties[event.propertyName] || event.propertyName;
    delete _transition.ingProperties[propertyName];
    if (isEmptyObj(_transition.ingProperties)) {
      this.disableTransition();
    }
    if (propertyName in _transition.clean) {
      this.element.style[event.propertyName] = "";
      delete _transition.clean[propertyName];
    }
    if (propertyName in _transition.onEnd) {
      var onTransitionEnd = _transition.onEnd[propertyName];
      onTransitionEnd.call(this);
      delete _transition.onEnd[propertyName];
    }
    this.emitEvent("transitionEnd", [this]);
  };
  proto.disableTransition = function () {
    this.removeTransitionStyles();
    this.element.removeEventListener(transitionEndEvent, this, false);
    this.isTransitioning = false;
  };
  proto._removeStyles = function (style) {
    var cleanStyle = {};
    for (var prop in style) {
      cleanStyle[prop] = "";
    }
    this.css(cleanStyle);
  };
  var cleanTransitionStyle = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: "",
  };
  proto.removeTransitionStyles = function () {
    this.css(cleanTransitionStyle);
  };
  proto.stagger = function (delay) {
    delay = isNaN(delay) ? 0 : delay;
    this.staggerDelay = delay + "ms";
  };
  proto.removeElem = function () {
    this.element.parentNode.removeChild(this.element);
    this.css({ display: "" });
    this.emitEvent("remove", [this]);
  };
  proto.remove = function () {
    if (
      !transitionProperty ||
      !parseFloat(this.layout.options.transitionDuration)
    ) {
      this.removeElem();
      return;
    }
    this.once("transitionEnd", function () {
      this.removeElem();
    });
    this.hide();
  };
  proto.reveal = function () {
    delete this.isHidden;
    this.css({ display: "" });
    var options = this.layout.options;
    var onTransitionEnd = {};
    var transitionEndProperty =
      this.getHideRevealTransitionEndProperty("visibleStyle");
    onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
    this.transition({
      from: options.hiddenStyle,
      to: options.visibleStyle,
      isCleaning: true,
      onTransitionEnd: onTransitionEnd,
    });
  };
  proto.onRevealTransitionEnd = function () {
    if (!this.isHidden) {
      this.emitEvent("reveal");
    }
  };
  proto.getHideRevealTransitionEndProperty = function (styleProperty) {
    var optionStyle = this.layout.options[styleProperty];
    if (optionStyle.opacity) {
      return "opacity";
    }
    for (var prop in optionStyle) {
      return prop;
    }
  };
  proto.hide = function () {
    this.isHidden = true;
    this.css({ display: "" });
    var options = this.layout.options;
    var onTransitionEnd = {};
    var transitionEndProperty =
      this.getHideRevealTransitionEndProperty("hiddenStyle");
    onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
    this.transition({
      from: options.visibleStyle,
      to: options.hiddenStyle,
      isCleaning: true,
      onTransitionEnd: onTransitionEnd,
    });
  };
  proto.onHideTransitionEnd = function () {
    if (this.isHidden) {
      this.css({ display: "none" });
      this.emitEvent("hide");
    }
  };
  proto.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: "",
    });
  };
  return Item;
});
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
(function (window, factory) {
  "use strict";
  if (typeof define == "function" && define.amd) {
    define("outlayer/outlayer", [
      "ev-emitter/ev-emitter",
      "get-size/get-size",
      "fizzy-ui-utils/utils",
      "./item",
    ], function (EvEmitter, getSize, utils, Item) {
      return factory(window, EvEmitter, getSize, utils, Item);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(
      window,
      require("ev-emitter"),
      require("get-size"),
      require("fizzy-ui-utils"),
      require("./item")
    );
  } else {
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }
})(window, function factory(window, EvEmitter, getSize, utils, Item) {
  "use strict";
  var console = window.console;
  var jQuery = window.jQuery;
  var noop = function () {};
  var GUID = 0;
  var instances = {};
  function Outlayer(element, options) {
    var queryElement = utils.getQueryElement(element);
    if (!queryElement) {
      if (console) {
        console.error(
          "Bad element for " +
            this.constructor.namespace +
            ": " +
            (queryElement || element)
        );
      }
      return;
    }
    this.element = queryElement;
    if (jQuery) {
      this.$element = jQuery(this.element);
    }
    this.options = utils.extend({}, this.constructor.defaults);
    this.option(options);
    var id = ++GUID;
    this.element.outlayerGUID = id;
    instances[id] = this;
    this._create();
    var isInitLayout = this._getOption("initLayout");
    if (isInitLayout) {
      this.layout();
    }
  }
  Outlayer.namespace = "outlayer";
  Outlayer.Item = Item;
  Outlayer.defaults = {
    containerStyle: { position: "relative" },
    initLayout: true,
    originLeft: true,
    originTop: true,
    resize: true,
    resizeContainer: true,
    transitionDuration: "0.4s",
    hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
    visibleStyle: { opacity: 1, transform: "scale(1)" },
  };
  var proto = Outlayer.prototype;
  utils.extend(proto, EvEmitter.prototype);
  proto.option = function (opts) {
    utils.extend(this.options, opts);
  };
  proto._getOption = function (option) {
    var oldOption = this.constructor.compatOptions[option];
    return oldOption && this.options[oldOption] !== undefined
      ? this.options[oldOption]
      : this.options[option];
  };
  Outlayer.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer",
  };
  proto._create = function () {
    this.reloadItems();
    this.stamps = [];
    this.stamp(this.options.stamp);
    utils.extend(this.element.style, this.options.containerStyle);
    var canBindResize = this._getOption("resize");
    if (canBindResize) {
      this.bindResize();
    }
  };
  proto.reloadItems = function () {
    this.items = this._itemize(this.element.children);
  };
  proto._itemize = function (elems) {
    var itemElems = this._filterFindItemElements(elems);
    var Item = this.constructor.Item;
    var items = [];
    for (var i = 0; i < itemElems.length; i++) {
      var elem = itemElems[i];
      var item = new Item(elem, this);
      items.push(item);
    }
    return items;
  };
  proto._filterFindItemElements = function (elems) {
    return utils.filterFindElements(elems, this.options.itemSelector);
  };
  proto.getItemElements = function () {
    return this.items.map(function (item) {
      return item.element;
    });
  };
  proto.layout = function () {
    this._resetLayout();
    this._manageStamps();
    var layoutInstant = this._getOption("layoutInstant");
    var isInstant =
      layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, isInstant);
    this._isLayoutInited = true;
  };
  proto._init = proto.layout;
  proto._resetLayout = function () {
    this.getSize();
  };
  proto.getSize = function () {
    this.size = getSize(this.element);
  };
  proto._getMeasurement = function (measurement, size) {
    var option = this.options[measurement];
    var elem;
    if (!option) {
      this[measurement] = 0;
    } else {
      if (typeof option == "string") {
        elem = this.element.querySelector(option);
      } else if (option instanceof HTMLElement) {
        elem = option;
      }
      this[measurement] = elem ? getSize(elem)[size] : option;
    }
  };
  proto.layoutItems = function (items, isInstant) {
    items = this._getItemsForLayout(items);
    this._layoutItems(items, isInstant);
    this._postLayout();
  };
  proto._getItemsForLayout = function (items) {
    return items.filter(function (item) {
      return !item.isIgnored;
    });
  };
  proto._layoutItems = function (items, isInstant) {
    this._emitCompleteOnItems("layout", items);
    if (!items || !items.length) {
      return;
    }
    var queue = [];
    items.forEach(function (item) {
      var position = this._getItemLayoutPosition(item);
      position.item = item;
      position.isInstant = isInstant || item.isLayoutInstant;
      queue.push(position);
    }, this);
    this._processLayoutQueue(queue);
  };
  proto._getItemLayoutPosition = function () {
    return { x: 0, y: 0 };
  };
  proto._processLayoutQueue = function (queue) {
    this.updateStagger();
    queue.forEach(function (obj, i) {
      this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
    }, this);
  };
  proto.updateStagger = function () {
    var stagger = this.options.stagger;
    if (stagger === null || stagger === undefined) {
      this.stagger = 0;
      return;
    }
    this.stagger = getMilliseconds(stagger);
    return this.stagger;
  };
  proto._positionItem = function (item, x, y, isInstant, i) {
    if (isInstant) {
      item.goTo(x, y);
    } else {
      item.stagger(i * this.stagger);
      item.moveTo(x, y);
    }
  };
  proto._postLayout = function () {
    this.resizeContainer();
  };
  proto.resizeContainer = function () {
    var isResizingContainer = this._getOption("resizeContainer");
    if (!isResizingContainer) {
      return;
    }
    var size = this._getContainerSize();
    if (size) {
      this._setContainerMeasure(size.width, true);
      this._setContainerMeasure(size.height, false);
    }
  };
  proto._getContainerSize = noop;
  proto._setContainerMeasure = function (measure, isWidth) {
    if (measure === undefined) {
      return;
    }
    var elemSize = this.size;
    if (elemSize.isBorderBox) {
      measure += isWidth
        ? elemSize.paddingLeft +
          elemSize.paddingRight +
          elemSize.borderLeftWidth +
          elemSize.borderRightWidth
        : elemSize.paddingBottom +
          elemSize.paddingTop +
          elemSize.borderTopWidth +
          elemSize.borderBottomWidth;
    }
    measure = Math.max(measure, 0);
    this.element.style[isWidth ? "width" : "height"] = measure + "px";
  };
  proto._emitCompleteOnItems = function (eventName, items) {
    var _this = this;
    function onComplete() {
      _this.dispatchEvent(eventName + "Complete", null, [items]);
    }
    var count = items.length;
    if (!items || !count) {
      onComplete();
      return;
    }
    var doneCount = 0;
    function tick() {
      doneCount++;
      if (doneCount == count) {
        onComplete();
      }
    }
    items.forEach(function (item) {
      item.once(eventName, tick);
    });
  };
  proto.dispatchEvent = function (type, event, args) {
    var emitArgs = event ? [event].concat(args) : args;
    this.emitEvent(type, emitArgs);
    if (jQuery) {
      this.$element = this.$element || jQuery(this.element);
      if (event) {
        var $event = jQuery.Event(event);
        $event.type = type;
        this.$element.trigger($event, args);
      } else {
        this.$element.trigger(type, args);
      }
    }
  };
  proto.ignore = function (elem) {
    var item = this.getItem(elem);
    if (item) {
      item.isIgnored = true;
    }
  };
  proto.unignore = function (elem) {
    var item = this.getItem(elem);
    if (item) {
      delete item.isIgnored;
    }
  };
  proto.stamp = function (elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }
    this.stamps = this.stamps.concat(elems);
    elems.forEach(this.ignore, this);
  };
  proto.unstamp = function (elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }
    elems.forEach(function (elem) {
      utils.removeFrom(this.stamps, elem);
      this.unignore(elem);
    }, this);
  };
  proto._find = function (elems) {
    if (!elems) {
      return;
    }
    if (typeof elems == "string") {
      elems = this.element.querySelectorAll(elems);
    }
    elems = utils.makeArray(elems);
    return elems;
  };
  proto._manageStamps = function () {
    if (!this.stamps || !this.stamps.length) {
      return;
    }
    this._getBoundingRect();
    this.stamps.forEach(this._manageStamp, this);
  };
  proto._getBoundingRect = function () {
    var boundingRect = this.element.getBoundingClientRect();
    var size = this.size;
    this._boundingRect = {
      left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
      top: boundingRect.top + size.paddingTop + size.borderTopWidth,
      right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
      bottom:
        boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth),
    };
  };
  proto._manageStamp = noop;
  proto._getElementOffset = function (elem) {
    var boundingRect = elem.getBoundingClientRect();
    var thisRect = this._boundingRect;
    var size = getSize(elem);
    var offset = {
      left: boundingRect.left - thisRect.left - size.marginLeft,
      top: boundingRect.top - thisRect.top - size.marginTop,
      right: thisRect.right - boundingRect.right - size.marginRight,
      bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom,
    };
    return offset;
  };
  proto.handleEvent = utils.handleEvent;
  proto.bindResize = function () {
    window.addEventListener("resize", this);
    this.isResizeBound = true;
  };
  proto.unbindResize = function () {
    window.removeEventListener("resize", this);
    this.isResizeBound = false;
  };
  proto.onresize = function () {
    this.resize();
  };
  utils.debounceMethod(Outlayer, "onresize", 100);
  proto.resize = function () {
    if (!this.isResizeBound || !this.needsResizeLayout()) {
      return;
    }
    this.layout();
  };
  proto.needsResizeLayout = function () {
    var size = getSize(this.element);
    var hasSizes = this.size && size;
    return hasSizes && size.innerWidth !== this.size.innerWidth;
  };
  proto.addItems = function (elems) {
    var items = this._itemize(elems);
    if (items.length) {
      this.items = this.items.concat(items);
    }
    return items;
  };
  proto.appended = function (elems) {
    var items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    this.layoutItems(items, true);
    this.reveal(items);
  };
  proto.prepended = function (elems) {
    var items = this._itemize(elems);
    if (!items.length) {
      return;
    }
    var previousItems = this.items.slice(0);
    this.items = items.concat(previousItems);
    this._resetLayout();
    this._manageStamps();
    this.layoutItems(items, true);
    this.reveal(items);
    this.layoutItems(previousItems);
  };
  proto.reveal = function (items) {
    this._emitCompleteOnItems("reveal", items);
    if (!items || !items.length) {
      return;
    }
    var stagger = this.updateStagger();
    items.forEach(function (item, i) {
      item.stagger(i * stagger);
      item.reveal();
    });
  };
  proto.hide = function (items) {
    this._emitCompleteOnItems("hide", items);
    if (!items || !items.length) {
      return;
    }
    var stagger = this.updateStagger();
    items.forEach(function (item, i) {
      item.stagger(i * stagger);
      item.hide();
    });
  };
  proto.revealItemElements = function (elems) {
    var items = this.getItems(elems);
    this.reveal(items);
  };
  proto.hideItemElements = function (elems) {
    var items = this.getItems(elems);
    this.hide(items);
  };
  proto.getItem = function (elem) {
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      if (item.element == elem) {
        return item;
      }
    }
  };
  proto.getItems = function (elems) {
    elems = utils.makeArray(elems);
    var items = [];
    elems.forEach(function (elem) {
      var item = this.getItem(elem);
      if (item) {
        items.push(item);
      }
    }, this);
    return items;
  };
  proto.remove = function (elems) {
    var removeItems = this.getItems(elems);
    this._emitCompleteOnItems("remove", removeItems);
    if (!removeItems || !removeItems.length) {
      return;
    }
    removeItems.forEach(function (item) {
      item.remove();
      utils.removeFrom(this.items, item);
    }, this);
  };
  proto.destroy = function () {
    var style = this.element.style;
    style.height = "";
    style.position = "";
    style.width = "";
    this.items.forEach(function (item) {
      item.destroy();
    });
    this.unbindResize();
    var id = this.element.outlayerGUID;
    delete instances[id];
    delete this.element.outlayerGUID;
    if (jQuery) {
      jQuery.removeData(this.element, this.constructor.namespace);
    }
  };
  Outlayer.data = function (elem) {
    elem = utils.getQueryElement(elem);
    var id = elem && elem.outlayerGUID;
    return id && instances[id];
  };
  Outlayer.create = function (namespace, options) {
    var Layout = subclass(Outlayer);
    Layout.defaults = utils.extend({}, Outlayer.defaults);
    utils.extend(Layout.defaults, options);
    Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
    Layout.namespace = namespace;
    Layout.data = Outlayer.data;
    Layout.Item = subclass(Item);
    utils.htmlInit(Layout, namespace);
    if (jQuery && jQuery.bridget) {
      jQuery.bridget(namespace, Layout);
    }
    return Layout;
  };
  function subclass(Parent) {
    function SubClass() {
      Parent.apply(this, arguments);
    }
    SubClass.prototype = Object.create(Parent.prototype);
    SubClass.prototype.constructor = SubClass;
    return SubClass;
  }
  var msUnits = { ms: 1, s: 1000 };
  function getMilliseconds(time) {
    if (typeof time == "number") {
      return time;
    }
    var matches = time.match(/(^\d*\.?\d*)(\w*)/);
    var num = matches && matches[1];
    var unit = matches && matches[2];
    if (!num.length) {
      return 0;
    }
    num = parseFloat(num);
    var mult = msUnits[unit] || 1;
    return num * mult;
  }
  Outlayer.Item = Item;
  return Outlayer;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("isotope-layout/js/item", ["outlayer/outlayer"], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(require("outlayer"));
  } else {
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(window.Outlayer);
  }
})(window, function factory(Outlayer) {
  "use strict";
  function Item() {
    Outlayer.Item.apply(this, arguments);
  }
  var proto = (Item.prototype = Object.create(Outlayer.Item.prototype));
  var _create = proto._create;
  proto._create = function () {
    this.id = this.layout.itemGUID++;
    _create.call(this);
    this.sortData = {};
  };
  proto.updateSortData = function () {
    if (this.isIgnored) {
      return;
    }
    this.sortData.id = this.id;
    this.sortData["original-order"] = this.id;
    this.sortData.random = Math.random();
    var getSortData = this.layout.options.getSortData;
    var sorters = this.layout._sorters;
    for (var key in getSortData) {
      var sorter = sorters[key];
      this.sortData[key] = sorter(this.element, this);
    }
  };
  var _destroy = proto.destroy;
  proto.destroy = function () {
    _destroy.apply(this, arguments);
    this.css({ display: "" });
  };
  return Item;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("isotope-layout/js/layout-mode", [
      "get-size/get-size",
      "outlayer/outlayer",
    ], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(require("get-size"), require("outlayer"));
  } else {
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
  }
})(window, function factory(getSize, Outlayer) {
  "use strict";
  function LayoutMode(isotope) {
    this.isotope = isotope;
    if (isotope) {
      this.options = isotope.options[this.namespace];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }
  var proto = LayoutMode.prototype;
  var facadeMethods = [
    "_resetLayout",
    "_getItemLayoutPosition",
    "_manageStamp",
    "_getContainerSize",
    "_getElementOffset",
    "needsResizeLayout",
    "_getOption",
  ];
  facadeMethods.forEach(function (methodName) {
    proto[methodName] = function () {
      return Outlayer.prototype[methodName].apply(this.isotope, arguments);
    };
  });
  proto.needsVerticalResizeLayout = function () {
    var size = getSize(this.isotope.element);
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };
  proto._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments);
  };
  proto.getColumnWidth = function () {
    this.getSegmentSize("column", "Width");
  };
  proto.getRowHeight = function () {
    this.getSegmentSize("row", "Height");
  };
  proto.getSegmentSize = function (segment, size) {
    var segmentName = segment + size;
    var outerSize = "outer" + size;
    this._getMeasurement(segmentName, outerSize);
    if (this[segmentName]) {
      return;
    }
    var firstItemSize = this.getFirstItemSize();
    this[segmentName] =
      (firstItemSize && firstItemSize[outerSize]) ||
      this.isotope.size["inner" + size];
  };
  proto.getFirstItemSize = function () {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize(firstItem.element);
  };
  proto.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments);
  };
  proto.getSize = function () {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };
  LayoutMode.modes = {};
  LayoutMode.create = function (namespace, options) {
    function Mode() {
      LayoutMode.apply(this, arguments);
    }
    Mode.prototype = Object.create(proto);
    Mode.prototype.constructor = Mode;
    if (options) {
      Mode.options = options;
    }
    Mode.prototype.namespace = namespace;
    LayoutMode.modes[namespace] = Mode;
    return Mode;
  };
  return LayoutMode;
});
/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("masonry-layout/masonry", [
      "outlayer/outlayer",
      "get-size/get-size",
    ], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(require("outlayer"), require("get-size"));
  } else {
    window.Masonry = factory(window.Outlayer, window.getSize);
  }
})(window, function factory(Outlayer, getSize) {
  var Masonry = Outlayer.create("masonry");
  Masonry.compatOptions.fitWidth = "isFitWidth";
  var proto = Masonry.prototype;
  proto._resetLayout = function () {
    this.getSize();
    this._getMeasurement("columnWidth", "outerWidth");
    this._getMeasurement("gutter", "outerWidth");
    this.measureColumns();
    this.colYs = [];
    for (var i = 0; i < this.cols; i++) {
      this.colYs.push(0);
    }
    this.maxY = 0;
    this.horizontalColIndex = 0;
  };
  proto.measureColumns = function () {
    this.getContainerWidth();
    if (!this.columnWidth) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      this.columnWidth =
        (firstItemElem && getSize(firstItemElem).outerWidth) ||
        this.containerWidth;
    }
    var columnWidth = (this.columnWidth += this.gutter);
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    var excess = columnWidth - (containerWidth % columnWidth);
    var mathMethod = excess && excess < 1 ? "round" : "floor";
    cols = Math[mathMethod](cols);
    this.cols = Math.max(cols, 1);
  };
  proto.getContainerWidth = function () {
    var isFitWidth = this._getOption("fitWidth");
    var container = isFitWidth ? this.element.parentNode : this.element;
    var size = getSize(container);
    this.containerWidth = size && size.innerWidth;
  };
  proto._getItemLayoutPosition = function (item) {
    item.getSize();
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
    var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
    colSpan = Math.min(colSpan, this.cols);
    var colPosMethod = this.options.horizontalOrder
      ? "_getHorizontalColPosition"
      : "_getTopColPosition";
    var colPosition = this[colPosMethod](colSpan, item);
    var position = { x: this.columnWidth * colPosition.col, y: colPosition.y };
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for (var i = colPosition.col; i < setMax; i++) {
      this.colYs[i] = setHeight;
    }
    return position;
  };
  proto._getTopColPosition = function (colSpan) {
    var colGroup = this._getTopColGroup(colSpan);
    var minimumY = Math.min.apply(Math, colGroup);
    return { col: colGroup.indexOf(minimumY), y: minimumY };
  };
  proto._getTopColGroup = function (colSpan) {
    if (colSpan < 2) {
      return this.colYs;
    }
    var colGroup = [];
    var groupCount = this.cols + 1 - colSpan;
    for (var i = 0; i < groupCount; i++) {
      colGroup[i] = this._getColGroupY(i, colSpan);
    }
    return colGroup;
  };
  proto._getColGroupY = function (col, colSpan) {
    if (colSpan < 2) {
      return this.colYs[col];
    }
    var groupColYs = this.colYs.slice(col, col + colSpan);
    return Math.max.apply(Math, groupColYs);
  };
  proto._getHorizontalColPosition = function (colSpan, item) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    col = isOver ? 0 : col;
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
    return { col: col, y: this._getColGroupY(col, colSpan) };
  };
  proto._manageStamp = function (stamp) {
    var stampSize = getSize(stamp);
    var offset = this._getElementOffset(stamp);
    var isOriginLeft = this._getOption("originLeft");
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor(firstX / this.columnWidth);
    firstCol = Math.max(0, firstCol);
    var lastCol = Math.floor(lastX / this.columnWidth);
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min(this.cols - 1, lastCol);
    var isOriginTop = this._getOption("originTop");
    var stampMaxY =
      (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
    for (var i = firstCol; i <= lastCol; i++) {
      this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
    }
  };
  proto._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var size = { height: this.maxY };
    if (this._getOption("fitWidth")) {
      size.width = this._getContainerFitWidth();
    }
    return size;
  };
  proto._getContainerFitWidth = function () {
    var unusedCols = 0;
    var i = this.cols;
    while (--i) {
      if (this.colYs[i] !== 0) {
        break;
      }
      unusedCols++;
    }
    return (this.cols - unusedCols) * this.columnWidth - this.gutter;
  };
  proto.needsResizeLayout = function () {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };
  return Masonry;
});
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("isotope-layout/js/layout-modes/masonry", [
      "../layout-mode",
      "masonry-layout/masonry",
    ], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(
      require("../layout-mode"),
      require("masonry-layout")
    );
  } else {
    factory(window.Isotope.LayoutMode, window.Masonry);
  }
})(window, function factory(LayoutMode, Masonry) {
  "use strict";
  var MasonryMode = LayoutMode.create("masonry");
  var proto = MasonryMode.prototype;
  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true,
  };
  for (var method in Masonry.prototype) {
    if (!keepModeMethods[method]) {
      proto[method] = Masonry.prototype[method];
    }
  }
  var measureColumns = proto.measureColumns;
  proto.measureColumns = function () {
    this.items = this.isotope.filteredItems;
    measureColumns.call(this);
  };
  var _getOption = proto._getOption;
  proto._getOption = function (option) {
    if (option == "fitWidth") {
      return this.options.isFitWidth !== undefined
        ? this.options.isFitWidth
        : this.options.fitWidth;
    }
    return _getOption.apply(this.isotope, arguments);
  };
  return MasonryMode;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("isotope-layout/js/layout-modes/fit-rows", [
      "../layout-mode",
    ], factory);
  } else if (typeof exports == "object") {
    module.exports = factory(require("../layout-mode"));
  } else {
    factory(window.Isotope.LayoutMode);
  }
})(window, function factory(LayoutMode) {
  "use strict";
  var FitRows = LayoutMode.create("fitRows");
  var proto = FitRows.prototype;
  proto._resetLayout = function () {
    this.x = 0;
    this.y = 0;
    this.maxY = 0;
    this._getMeasurement("gutter", "outerWidth");
  };
  proto._getItemLayoutPosition = function (item) {
    item.getSize();
    var itemWidth = item.size.outerWidth + this.gutter;
    var containerWidth = this.isotope.size.innerWidth + this.gutter;
    if (this.x !== 0 && itemWidth + this.x > containerWidth) {
      this.x = 0;
      this.y = this.maxY;
    }
    var position = { x: this.x, y: this.y };
    this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
    this.x += itemWidth;
    return position;
  };
  proto._getContainerSize = function () {
    return { height: this.maxY };
  };
  return FitRows;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("isotope-layout/js/layout-modes/vertical", [
      "../layout-mode",
    ], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(require("../layout-mode"));
  } else {
    factory(window.Isotope.LayoutMode);
  }
})(window, function factory(LayoutMode) {
  "use strict";
  var Vertical = LayoutMode.create("vertical", { horizontalAlignment: 0 });
  var proto = Vertical.prototype;
  proto._resetLayout = function () {
    this.y = 0;
  };
  proto._getItemLayoutPosition = function (item) {
    item.getSize();
    var x =
      (this.isotope.size.innerWidth - item.size.outerWidth) *
      this.options.horizontalAlignment;
    var y = this.y;
    this.y += item.size.outerHeight;
    return { x: x, y: y };
  };
  proto._getContainerSize = function () {
    return { height: this.y };
  };
  return Vertical;
});
/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define([
      "outlayer/outlayer",
      "get-size/get-size",
      "desandro-matches-selector/matches-selector",
      "fizzy-ui-utils/utils",
      "isotope-layout/js/item",
      "isotope-layout/js/layout-mode",
      "isotope-layout/js/layout-modes/masonry",
      "isotope-layout/js/layout-modes/fit-rows",
      "isotope-layout/js/layout-modes/vertical",
    ], function (Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
      return factory(
        window,
        Outlayer,
        getSize,
        matchesSelector,
        utils,
        Item,
        LayoutMode
      );
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(
      window,
      require("outlayer"),
      require("get-size"),
      require("desandro-matches-selector"),
      require("fizzy-ui-utils"),
      require("isotope-layout/js/item"),
      require("isotope-layout/js/layout-mode"),
      require("isotope-layout/js/layout-modes/masonry"),
      require("isotope-layout/js/layout-modes/fit-rows"),
      require("isotope-layout/js/layout-modes/vertical")
    );
  } else {
    window.Isotope = factory(
      window,
      window.Outlayer,
      window.getSize,
      window.matchesSelector,
      window.fizzyUIUtils,
      window.Isotope.Item,
      window.Isotope.LayoutMode
    );
  }
})(
  window,
  function factory(
    window,
    Outlayer,
    getSize,
    matchesSelector,
    utils,
    Item,
    LayoutMode
  ) {
    var jQuery = window.jQuery;
    var trim = String.prototype.trim
      ? function (str) {
          return str.trim();
        }
      : function (str) {
          return str.replace(/^\s+|\s+$/g, "");
        };
    var Isotope = Outlayer.create("isotope", {
      layoutMode: "masonry",
      isJQueryFiltering: true,
      sortAscending: true,
    });
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
    var proto = Isotope.prototype;
    proto._create = function () {
      this.itemGUID = 0;
      this._sorters = {};
      this._getSorters();
      Outlayer.prototype._create.call(this);
      this.modes = {};
      this.filteredItems = this.items;
      this.sortHistory = ["original-order"];
      for (var name in LayoutMode.modes) {
        this._initLayoutMode(name);
      }
    };
    proto.reloadItems = function () {
      this.itemGUID = 0;
      Outlayer.prototype.reloadItems.call(this);
    };
    proto._itemize = function () {
      var items = Outlayer.prototype._itemize.apply(this, arguments);
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.id = this.itemGUID++;
      }
      this._updateItemsSortData(items);
      return items;
    };
    proto._initLayoutMode = function (name) {
      var Mode = LayoutMode.modes[name];
      var initialOpts = this.options[name] || {};
      this.options[name] = Mode.options
        ? utils.extend(Mode.options, initialOpts)
        : initialOpts;
      this.modes[name] = new Mode(this);
    };
    proto.layout = function () {
      if (!this._isLayoutInited && this._getOption("initLayout")) {
        this.arrange();
        return;
      }
      this._layout();
    };
    proto._layout = function () {
      var isInstant = this._getIsInstant();
      this._resetLayout();
      this._manageStamps();
      this.layoutItems(this.filteredItems, isInstant);
      this._isLayoutInited = true;
    };
    proto.arrange = function (opts) {
      this.option(opts);
      this._getIsInstant();
      var filtered = this._filter(this.items);
      this.filteredItems = filtered.matches;
      this._bindArrangeComplete();
      if (this._isInstant) {
        this._noTransition(this._hideReveal, [filtered]);
      } else {
        this._hideReveal(filtered);
      }
      this._sort();
      this._layout();
    };
    proto._init = proto.arrange;
    proto._hideReveal = function (filtered) {
      this.reveal(filtered.needReveal);
      this.hide(filtered.needHide);
    };
    proto._getIsInstant = function () {
      var isLayoutInstant = this._getOption("layoutInstant");
      var isInstant =
        isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
      this._isInstant = isInstant;
      return isInstant;
    };
    proto._bindArrangeComplete = function () {
      var isLayoutComplete, isHideComplete, isRevealComplete;
      var _this = this;
      function arrangeParallelCallback() {
        if (isLayoutComplete && isHideComplete && isRevealComplete) {
          _this.dispatchEvent("arrangeComplete", null, [_this.filteredItems]);
        }
      }
      this.once("layoutComplete", function () {
        isLayoutComplete = true;
        arrangeParallelCallback();
      });
      this.once("hideComplete", function () {
        isHideComplete = true;
        arrangeParallelCallback();
      });
      this.once("revealComplete", function () {
        isRevealComplete = true;
        arrangeParallelCallback();
      });
    };
    proto._filter = function (items) {
      var filter = this.options.filter;
      filter = filter || "*";
      var matches = [];
      var hiddenMatched = [];
      var visibleUnmatched = [];
      var test = this._getFilterTest(filter);
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.isIgnored) {
          continue;
        }
        var isMatched = test(item);
        if (isMatched) {
          matches.push(item);
        }
        if (isMatched && item.isHidden) {
          hiddenMatched.push(item);
        } else if (!isMatched && !item.isHidden) {
          visibleUnmatched.push(item);
        }
      }
      return {
        matches: matches,
        needReveal: hiddenMatched,
        needHide: visibleUnmatched,
      };
    };
    proto._getFilterTest = function (filter) {
      if (jQuery && this.options.isJQueryFiltering) {
        return function (item) {
          return jQuery(item.element).is(filter);
        };
      }
      if (typeof filter == "function") {
        return function (item) {
          return filter(item.element);
        };
      }
      return function (item) {
        return matchesSelector(item.element, filter);
      };
    };
    proto.updateSortData = function (elems) {
      var items;
      if (elems) {
        elems = utils.makeArray(elems);
        items = this.getItems(elems);
      } else {
        items = this.items;
      }
      this._getSorters();
      this._updateItemsSortData(items);
    };
    proto._getSorters = function () {
      var getSortData = this.options.getSortData;
      for (var key in getSortData) {
        var sorter = getSortData[key];
        this._sorters[key] = mungeSorter(sorter);
      }
    };
    proto._updateItemsSortData = function (items) {
      var len = items && items.length;
      for (var i = 0; len && i < len; i++) {
        var item = items[i];
        item.updateSortData();
      }
    };
    var mungeSorter = (function () {
      function mungeSorter(sorter) {
        if (typeof sorter != "string") {
          return sorter;
        }
        var args = trim(sorter).split(" ");
        var query = args[0];
        var attrMatch = query.match(/^\[(.+)\]$/);
        var attr = attrMatch && attrMatch[1];
        var getValue = getValueGetter(attr, query);
        var parser = Isotope.sortDataParsers[args[1]];
        sorter = parser
          ? function (elem) {
              return elem && parser(getValue(elem));
            }
          : function (elem) {
              return elem && getValue(elem);
            };
        return sorter;
      }
      function getValueGetter(attr, query) {
        if (attr) {
          return function getAttribute(elem) {
            return elem.getAttribute(attr);
          };
        }
        return function getChildText(elem) {
          var child = elem.querySelector(query);
          return child && child.textContent;
        };
      }
      return mungeSorter;
    })();
    Isotope.sortDataParsers = {
      parseInt: function (val) {
        return parseInt(val, 10);
      },
      parseFloat: function (val) {
        return parseFloat(val);
      },
    };
    proto._sort = function () {
      if (!this.options.sortBy) {
        return;
      }
      var sortBys = utils.makeArray(this.options.sortBy);
      if (!this._getIsSameSortBy(sortBys)) {
        this.sortHistory = sortBys.concat(this.sortHistory);
      }
      var itemSorter = getItemSorter(
        this.sortHistory,
        this.options.sortAscending
      );
      this.filteredItems.sort(itemSorter);
    };
    proto._getIsSameSortBy = function (sortBys) {
      for (var i = 0; i < sortBys.length; i++) {
        if (sortBys[i] != this.sortHistory[i]) {
          return false;
        }
      }
      return true;
    };
    function getItemSorter(sortBys, sortAsc) {
      return function sorter(itemA, itemB) {
        for (var i = 0; i < sortBys.length; i++) {
          var sortBy = sortBys[i];
          var a = itemA.sortData[sortBy];
          var b = itemB.sortData[sortBy];
          if (a > b || a < b) {
            var isAscending =
              sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
            var direction = isAscending ? 1 : -1;
            return (a > b ? 1 : -1) * direction;
          }
        }
        return 0;
      };
    }
    proto._mode = function () {
      var layoutMode = this.options.layoutMode;
      var mode = this.modes[layoutMode];
      if (!mode) {
        throw new Error("No layout mode: " + layoutMode);
      }
      mode.options = this.options[layoutMode];
      return mode;
    };
    proto._resetLayout = function () {
      Outlayer.prototype._resetLayout.call(this);
      this._mode()._resetLayout();
    };
    proto._getItemLayoutPosition = function (item) {
      return this._mode()._getItemLayoutPosition(item);
    };
    proto._manageStamp = function (stamp) {
      this._mode()._manageStamp(stamp);
    };
    proto._getContainerSize = function () {
      return this._mode()._getContainerSize();
    };
    proto.needsResizeLayout = function () {
      return this._mode().needsResizeLayout();
    };
    proto.appended = function (elems) {
      var items = this.addItems(elems);
      if (!items.length) {
        return;
      }
      var filteredItems = this._filterRevealAdded(items);
      this.filteredItems = this.filteredItems.concat(filteredItems);
    };
    proto.prepended = function (elems) {
      var items = this._itemize(elems);
      if (!items.length) {
        return;
      }
      this._resetLayout();
      this._manageStamps();
      var filteredItems = this._filterRevealAdded(items);
      this.layoutItems(this.filteredItems);
      this.filteredItems = filteredItems.concat(this.filteredItems);
      this.items = items.concat(this.items);
    };
    proto._filterRevealAdded = function (items) {
      var filtered = this._filter(items);
      this.hide(filtered.needHide);
      this.reveal(filtered.matches);
      this.layoutItems(filtered.matches, true);
      return filtered.matches;
    };
    proto.insert = function (elems) {
      var items = this.addItems(elems);
      if (!items.length) {
        return;
      }
      var i, item;
      var len = items.length;
      for (i = 0; i < len; i++) {
        item = items[i];
        this.element.appendChild(item.element);
      }
      var filteredInsertItems = this._filter(items).matches;
      for (i = 0; i < len; i++) {
        items[i].isLayoutInstant = true;
      }
      this.arrange();
      for (i = 0; i < len; i++) {
        delete items[i].isLayoutInstant;
      }
      this.reveal(filteredInsertItems);
    };
    var _remove = proto.remove;
    proto.remove = function (elems) {
      elems = utils.makeArray(elems);
      var removeItems = this.getItems(elems);
      _remove.call(this, elems);
      var len = removeItems && removeItems.length;
      for (var i = 0; len && i < len; i++) {
        var item = removeItems[i];
        utils.removeFrom(this.filteredItems, item);
      }
    };
    proto.shuffle = function () {
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        item.sortData.random = Math.random();
      }
      this.options.sortBy = "random";
      this._sort();
      this._layout();
    };
    proto._noTransition = function (fn, args) {
      var transitionDuration = this.options.transitionDuration;
      this.options.transitionDuration = 0;
      var returnValue = fn.apply(this, args);
      this.options.transitionDuration = transitionDuration;
      return returnValue;
    };
    proto.getFilteredItemElements = function () {
      return this.filteredItems.map(function (item) {
        return item.element;
      });
    };
    return Isotope;
  }
);
/*!
 * simpleParallax - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images,
 * @date: 13-06-2019 16:24:29,
 * @version: 5.1.0,
 * @link: https://simpleparallax.com/
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd)
    define("simpleParallax", [], factory);
  else if (typeof exports === "object") exports["simpleParallax"] = factory();
  else root["simpleParallax"] = factory();
})(window, function () {
  return (function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
      var module = (installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {},
      });
      modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      module.l = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function (exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, { enumerable: true, get: getter });
      }
    };
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
    __webpack_require__.t = function (value, mode) {
      if (mode & 1) value = __webpack_require__(value);
      if (mode & 8) return value;
      if (mode & 4 && typeof value === "object" && value && value.__esModule)
        return value;
      var ns = Object.create(null);
      __webpack_require__.r(ns);
      Object.defineProperty(ns, "default", { enumerable: true, value: value });
      if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      return ns;
    };
    __webpack_require__.n = function (module) {
      var getter =
        module && module.__esModule
          ? function getDefault() {
              return module["default"];
            }
          : function getModuleExports() {
              return module;
            };
      __webpack_require__.d(getter, "a", getter);
      return getter;
    };
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__((__webpack_require__.s = 0));
  })([
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Viewport = (function () {
        function Viewport() {
          _classCallCheck(this, Viewport);
          this.positions = { top: 0, bottom: 0, height: 0 };
        }
        _createClass(Viewport, [
          {
            key: "setViewportTop",
            value: function setViewportTop() {
              this.positions.top = window.pageYOffset;
              return this.positions;
            },
          },
          {
            key: "setViewportBottom",
            value: function setViewportBottom() {
              this.positions.bottom =
                this.positions.top + this.positions.height;
              return this.positions;
            },
          },
          {
            key: "setViewportHeight",
            value: function setViewportHeight() {
              this.positions.height = document.documentElement.clientHeight;
              return this.positions;
            },
          },
          {
            key: "setViewportAll",
            value: function setViewportAll() {
              this.positions.top = window.pageYOffset;
              this.positions.bottom =
                this.positions.top + this.positions.height;
              this.positions.height = document.documentElement.clientHeight;
              return this.positions;
            },
          },
        ]);
        return Viewport;
      })();
      var viewport = Viewport;
      var convertToArray = function convertToArray(elements) {
        if (
          NodeList.prototype.isPrototypeOf(elements) ||
          HTMLCollection.prototype.isPrototypeOf(elements)
        )
          return Array.from(elements);
        if (typeof elements === "string" || elements instanceof String)
          return document.querySelectorAll(elements);
        return [elements];
      };
      var helpers_convertToArray = convertToArray;
      var cssTransform = function cssTransform() {
        var prefixes =
          "transform webkitTransform mozTransform oTransform msTransform".split(
            " "
          );
        var transform;
        var i = 0;
        while (transform === undefined) {
          transform =
            document.createElement("div").style[prefixes[i]] !== undefined
              ? prefixes[i]
              : undefined;
          i += 1;
        }
        return transform;
      };
      var helpers_cssTransform = cssTransform();
      var isImageLoaded = function isImageLoaded(image) {
        if (!image) {
          return false;
        }
        if (!image.complete) {
          return false;
        }
        if (
          typeof image.naturalWidth !== "undefined" &&
          image.naturalWidth === 0
        ) {
          return false;
        }
        return true;
      };
      var helpers_isImageLoaded = isImageLoaded;
      function _toConsumableArray(arr) {
        return (
          _arrayWithoutHoles(arr) ||
          _iterableToArray(arr) ||
          _nonIterableSpread()
        );
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _iterableToArray(iter) {
        if (
          Symbol.iterator in Object(iter) ||
          Object.prototype.toString.call(iter) === "[object Arguments]"
        )
          return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function parallax_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function parallax_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function parallax_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          parallax_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) parallax_defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var parallax_ParallaxInstance = (function () {
        function ParallaxInstance(element, options) {
          parallax_classCallCheck(this, ParallaxInstance);
          this.element = element;
          this.elementContainer = element;
          this.settings = options;
          this.isVisible = true;
          this.isInit = false;
          this.oldTranslateValue = -1;
          this.init = this.init.bind(this);
          if (helpers_isImageLoaded(element)) {
            this.init();
          } else {
            this.element.addEventListener("load", this.init);
          }
        }
        parallax_createClass(ParallaxInstance, [
          {
            key: "init",
            value: function init() {
              if (this.isInit) return;
              if (this.element.closest(".simpleParallax")) return;
              if (this.settings.overflow === false) {
                this.wrapElement(this.element);
              }
              this.setStyle();
              this.getElementOffset();
              this.intersectionObserver();
              this.getTranslateValue();
              this.animate();
              this.isInit = true;
            },
          },
          {
            key: "wrapElement",
            value: function wrapElement() {
              var elementToWrap =
                this.element.closest("picture") || this.element;
              var wrapper = document.createElement("div");
              wrapper.classList.add("simpleParallax");
              wrapper.style.overflow = "hidden";
              elementToWrap.parentNode.insertBefore(wrapper, elementToWrap);
              wrapper.appendChild(elementToWrap);
              this.elementContainer = wrapper;
            },
          },
          {
            key: "unWrapElement",
            value: function unWrapElement() {
              var wrapper = this.elementContainer;
              wrapper.replaceWith.apply(
                wrapper,
                _toConsumableArray(wrapper.childNodes)
              );
            },
          },
          {
            key: "setStyle",
            value: function setStyle() {
              if (this.settings.overflow === false) {
                this.element.style[helpers_cssTransform] = "scale(".concat(
                  this.settings.scale,
                  ")"
                );
              }
              if (this.settings.delay > 0) {
                this.element.style.transition = "transform "
                  .concat(this.settings.delay, "s ")
                  .concat(this.settings.transition);
              }
              this.element.style.willChange = "transform";
            },
          },
          {
            key: "unSetStyle",
            value: function unSetStyle() {
              this.element.style.willChange = "";
              this.element.style[helpers_cssTransform] = "";
              this.element.style.transition = "";
            },
          },
          {
            key: "getElementOffset",
            value: function getElementOffset() {
              var positions = this.elementContainer.getBoundingClientRect();
              this.elementHeight = positions.height;
              this.elementTop =
                positions.top + simpleParallax_viewport.positions.top;
              this.elementBottom = this.elementHeight + this.elementTop;
            },
          },
          {
            key: "buildThresholdList",
            value: function buildThresholdList() {
              var thresholds = [];
              for (var i = 1.0; i <= this.elementHeight; i++) {
                var ratio = i / this.elementHeight;
                thresholds.push(ratio);
              }
              return thresholds;
            },
          },
          {
            key: "intersectionObserver",
            value: function intersectionObserver() {
              var options = {
                root: null,
                threshold: this.buildThresholdList(),
              };
              this.observer = new IntersectionObserver(
                this.intersectionObserverCallback.bind(this),
                options
              );
              this.observer.observe(this.element);
            },
          },
          {
            key: "intersectionObserverCallback",
            value: function intersectionObserverCallback(entries) {
              for (var i = entries.length - 1; i >= 0; i--) {
                if (entries[i].isIntersecting) {
                  this.isVisible = true;
                } else {
                  this.isVisible = false;
                }
              }
            },
          },
          {
            key: "checkIfVisible",
            value: function checkIfVisible() {
              return (
                this.elementBottom > simpleParallax_viewport.positions.top &&
                this.elementTop < simpleParallax_viewport.positions.bottom
              );
            },
          },
          {
            key: "getRangeMax",
            value: function getRangeMax() {
              var elementImageHeight = this.element.clientHeight;
              this.rangeMax =
                elementImageHeight * this.settings.scale - elementImageHeight;
            },
          },
          {
            key: "getTranslateValue",
            value: function getTranslateValue() {
              var percentage = (
                (simpleParallax_viewport.positions.bottom - this.elementTop) /
                ((simpleParallax_viewport.positions.height +
                  this.elementHeight) /
                  100)
              ).toFixed(1);
              percentage = Math.min(100, Math.max(0, percentage));
              if (this.oldPercentage === percentage) {
                return false;
              }
              if (!this.rangeMax) {
                this.getRangeMax();
              }
              this.translateValue = (
                (percentage / 100) * this.rangeMax -
                this.rangeMax / 2
              ).toFixed(0);
              if (this.oldTranslateValue === this.translateValue) {
                return false;
              }
              this.oldPercentage = percentage;
              this.oldTranslateValue = this.translateValue;
              return true;
            },
          },
          {
            key: "animate",
            value: function animate() {
              var translateValueY = 0;
              var translateValueX = 0;
              var inlineCss;
              if (
                this.settings.orientation.includes("left") ||
                this.settings.orientation.includes("right")
              ) {
                translateValueX = "".concat(
                  this.settings.orientation.includes("left")
                    ? this.translateValue * -1
                    : this.translateValue,
                  "px"
                );
              }
              if (
                this.settings.orientation.includes("up") ||
                this.settings.orientation.includes("down")
              ) {
                translateValueY = "".concat(
                  this.settings.orientation.includes("up")
                    ? this.translateValue * -1
                    : this.translateValue,
                  "px"
                );
              }
              if (this.settings.overflow === false) {
                inlineCss = "translate3d("
                  .concat(translateValueX, ", ")
                  .concat(translateValueY, ", 0) scale(")
                  .concat(this.settings.scale, ")");
              } else {
                inlineCss = "translate3d("
                  .concat(translateValueX, ", ")
                  .concat(translateValueY, ", 0)");
              }
              this.element.style[helpers_cssTransform] = inlineCss;
            },
          },
        ]);
        return ParallaxInstance;
      })();
      var parallax = parallax_ParallaxInstance;
      __webpack_require__.d(__webpack_exports__, "viewport", function () {
        return simpleParallax_viewport;
      });
      __webpack_require__.d(__webpack_exports__, "default", function () {
        return simpleParallax_SimpleParallax;
      });
      function simpleParallax_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function simpleParallax_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function simpleParallax_createClass(
        Constructor,
        protoProps,
        staticProps
      ) {
        if (protoProps)
          simpleParallax_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          simpleParallax_defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var simpleParallax_viewport = new viewport();
      var intersectionObserverAvailable = true;
      var isInit = false;
      var instances = [];
      var instancesLength;
      var frameID;
      var resizeID;
      var simpleParallax_SimpleParallax = (function () {
        function SimpleParallax(elements, options) {
          simpleParallax_classCallCheck(this, SimpleParallax);
          if (!elements) return;
          this.elements = helpers_convertToArray(elements);
          this.defaults = {
            delay: 0.4,
            orientation: "up",
            scale: 1.3,
            overflow: false,
            transition: "cubic-bezier(0,0,0,1)",
            breakpoint: false,
          };
          this.settings = Object.assign(this.defaults, options);
          if (
            this.settings.breakpoint &&
            document.documentElement.clientWidth <= this.settings.breakpoint
          ) {
            return;
          }
          if (!("IntersectionObserver" in window))
            intersectionObserverAvailable = false;
          this.lastPosition = -1;
          this.resizeIsDone = this.resizeIsDone.bind(this);
          this.handleResize = this.handleResize.bind(this);
          this.proceedRequestAnimationFrame =
            this.proceedRequestAnimationFrame.bind(this);
          this.init();
        }
        simpleParallax_createClass(SimpleParallax, [
          {
            key: "init",
            value: function init() {
              simpleParallax_viewport.setViewportAll();
              for (var i = this.elements.length - 1; i >= 0; i--) {
                var instance = new parallax(this.elements[i], this.settings);
                instances.push(instance);
              }
              instancesLength = instances.length;
              if (!isInit) {
                this.proceedRequestAnimationFrame();
                window.addEventListener("resize", this.resizeIsDone);
                isInit = true;
              }
            },
          },
          {
            key: "resizeIsDone",
            value: function resizeIsDone() {
              clearTimeout(resizeID);
              resizeID = setTimeout(this.handleResize, 500);
            },
          },
          {
            key: "handleResize",
            value: function handleResize() {
              simpleParallax_viewport.setViewportAll();
              if (
                this.settings.breakpoint &&
                document.documentElement.clientWidth <= this.settings.breakpoint
              ) {
                this.destroy();
              }
              for (var i = instancesLength - 1; i >= 0; i--) {
                instances[i].getElementOffset();
                instances[i].getRangeMax();
              }
              this.lastPosition = -1;
            },
          },
          {
            key: "proceedRequestAnimationFrame",
            value: function proceedRequestAnimationFrame() {
              simpleParallax_viewport.setViewportTop();
              if (this.lastPosition === simpleParallax_viewport.positions.top) {
                frameID = window.requestAnimationFrame(
                  this.proceedRequestAnimationFrame
                );
                return;
              }
              simpleParallax_viewport.setViewportBottom();
              for (var i = instancesLength - 1; i >= 0; i--) {
                this.proceedElement(instances[i]);
              }
              frameID = window.requestAnimationFrame(
                this.proceedRequestAnimationFrame
              );
              this.lastPosition = simpleParallax_viewport.positions.top;
            },
          },
          {
            key: "proceedElement",
            value: function proceedElement(instance) {
              var isVisible = false;
              if (!intersectionObserverAvailable) {
                isVisible = instance.checkIfVisible();
              } else {
                isVisible = instance.isVisible;
              }
              if (!isVisible) return;
              if (!instance.getTranslateValue()) {
                return;
              }
              instance.animate();
            },
          },
          {
            key: "destroy",
            value: function destroy() {
              var _this = this;
              var instancesToDestroy = [];
              instances = instances.filter(function (instance) {
                if (_this.elements.includes(instance.element)) {
                  instancesToDestroy.push(instance);
                } else {
                  return instance;
                }
              });
              for (var i = instancesToDestroy.length - 1; i >= 0; i--) {
                instancesToDestroy[i].unSetStyle();
                if (this.settings.overflow === false) {
                  instancesToDestroy[i].unWrapElement();
                }
              }
              instancesLength = instances.length;
              if (!instancesLength) {
                window.cancelAnimationFrame(frameID);
                window.removeEventListener("resize", this.handleResize);
              }
            },
          },
        ]);
        return SimpleParallax;
      })();
    },
  ])["default"];
});
/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Typed = e())
    : (t.Typed = e());
})(this, function () {
  return (function (t) {
    function e(n) {
      if (s[n]) return s[n].exports;
      var i = (s[n] = { exports: {}, id: n, loaded: !1 });
      return t[n].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports;
    }
    var s = {};
    return (e.m = t), (e.c = s), (e.p = ""), e(0);
  })([
    function (t, e, s) {
      "use strict";
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        r = s(1),
        o = s(3),
        a = (function () {
          function t(e, s) {
            n(this, t), r.initializer.load(this, s, e), this.begin();
          }
          return (
            i(t, [
              {
                key: "toggle",
                value: function () {
                  this.pause.status ? this.start() : this.stop();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.typingComplete ||
                    this.pause.status ||
                    (this.toggleBlinking(!0),
                    (this.pause.status = !0),
                    this.options.onStop(this.arrayPos, this));
                },
              },
              {
                key: "start",
                value: function () {
                  this.typingComplete ||
                    (this.pause.status &&
                      ((this.pause.status = !1),
                      this.pause.typewrite
                        ? this.typewrite(
                            this.pause.curString,
                            this.pause.curStrPos
                          )
                        : this.backspace(
                            this.pause.curString,
                            this.pause.curStrPos
                          ),
                      this.options.onStart(this.arrayPos, this)));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.reset(!1), this.options.onDestroy(this);
                },
              },
              {
                key: "reset",
                value: function () {
                  var t =
                    arguments.length <= 0 ||
                    void 0 === arguments[0] ||
                    arguments[0];
                  clearInterval(this.timeout),
                    this.replaceText(""),
                    this.cursor &&
                      this.cursor.parentNode &&
                      (this.cursor.parentNode.removeChild(this.cursor),
                      (this.cursor = null)),
                    (this.strPos = 0),
                    (this.arrayPos = 0),
                    (this.curLoop = 0),
                    t &&
                      (this.insertCursor(),
                      this.options.onReset(this),
                      this.begin());
                },
              },
              {
                key: "begin",
                value: function () {
                  var t = this;
                  this.options.onBegin(this),
                    (this.typingComplete = !1),
                    this.shuffleStringsIfNeeded(this),
                    this.insertCursor(),
                    this.bindInputFocusEvents && this.bindFocusEvents(),
                    (this.timeout = setTimeout(function () {
                      t.currentElContent && 0 !== t.currentElContent.length
                        ? t.backspace(
                            t.currentElContent,
                            t.currentElContent.length
                          )
                        : t.typewrite(
                            t.strings[t.sequence[t.arrayPos]],
                            t.strPos
                          );
                    }, this.startDelay));
                },
              },
              {
                key: "typewrite",
                value: function (t, e) {
                  var s = this;
                  this.fadeOut &&
                    this.el.classList.contains(this.fadeOutClass) &&
                    (this.el.classList.remove(this.fadeOutClass),
                    this.cursor &&
                      this.cursor.classList.remove(this.fadeOutClass));
                  var n = this.humanizer(this.typeSpeed),
                    i = 1;
                  return this.pause.status === !0
                    ? void this.setPauseStatus(t, e, !0)
                    : void (this.timeout = setTimeout(function () {
                        e = o.htmlParser.typeHtmlChars(t, e, s);
                        var n = 0,
                          r = t.substr(e);
                        if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                          var a = 1;
                          (r = /\d+/.exec(r)[0]),
                            (a += r.length),
                            (n = parseInt(r)),
                            (s.temporaryPause = !0),
                            s.options.onTypingPaused(s.arrayPos, s),
                            (t = t.substring(0, e) + t.substring(e + a)),
                            s.toggleBlinking(!0);
                        }
                        if ("`" === r.charAt(0)) {
                          for (
                            ;
                            "`" !== t.substr(e + i).charAt(0) &&
                            (i++, !(e + i > t.length));

                          );
                          var u = t.substring(0, e),
                            l = t.substring(u.length + 1, e + i),
                            c = t.substring(e + i + 1);
                          (t = u + l + c), i--;
                        }
                        s.timeout = setTimeout(function () {
                          s.toggleBlinking(!1),
                            e >= t.length
                              ? s.doneTyping(t, e)
                              : s.keepTyping(t, e, i),
                            s.temporaryPause &&
                              ((s.temporaryPause = !1),
                              s.options.onTypingResumed(s.arrayPos, s));
                        }, n);
                      }, n));
                },
              },
              {
                key: "keepTyping",
                value: function (t, e, s) {
                  0 === e &&
                    (this.toggleBlinking(!1),
                    this.options.preStringTyped(this.arrayPos, this)),
                    (e += s);
                  var n = t.substr(0, e);
                  this.replaceText(n), this.typewrite(t, e);
                },
              },
              {
                key: "doneTyping",
                value: function (t, e) {
                  var s = this;
                  this.options.onStringTyped(this.arrayPos, this),
                    this.toggleBlinking(!0),
                    (this.arrayPos === this.strings.length - 1 &&
                      (this.complete(),
                      this.loop === !1 || this.curLoop === this.loopCount)) ||
                      (this.timeout = setTimeout(function () {
                        s.backspace(t, e);
                      }, this.backDelay));
                },
              },
              {
                key: "backspace",
                value: function (t, e) {
                  var s = this;
                  if (this.pause.status === !0)
                    return void this.setPauseStatus(t, e, !1);
                  if (this.fadeOut) return this.initFadeOut();
                  this.toggleBlinking(!1);
                  var n = this.humanizer(this.backSpeed);
                  this.timeout = setTimeout(function () {
                    e = o.htmlParser.backSpaceHtmlChars(t, e, s);
                    var n = t.substr(0, e);
                    if ((s.replaceText(n), s.smartBackspace)) {
                      var i = s.strings[s.arrayPos + 1];
                      i && n === i.substr(0, e)
                        ? (s.stopNum = e)
                        : (s.stopNum = 0);
                    }
                    e > s.stopNum
                      ? (e--, s.backspace(t, e))
                      : e <= s.stopNum &&
                        (s.arrayPos++,
                        s.arrayPos === s.strings.length
                          ? ((s.arrayPos = 0),
                            s.options.onLastStringBackspaced(),
                            s.shuffleStringsIfNeeded(),
                            s.begin())
                          : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
                  }, n);
                },
              },
              {
                key: "complete",
                value: function () {
                  this.options.onComplete(this),
                    this.loop ? this.curLoop++ : (this.typingComplete = !0);
                },
              },
              {
                key: "setPauseStatus",
                value: function (t, e, s) {
                  (this.pause.typewrite = s),
                    (this.pause.curString = t),
                    (this.pause.curStrPos = e);
                },
              },
              {
                key: "toggleBlinking",
                value: function (t) {
                  this.cursor &&
                    (this.pause.status ||
                      (this.cursorBlinking !== t &&
                        ((this.cursorBlinking = t),
                        t
                          ? this.cursor.classList.add("typed-cursor--blink")
                          : this.cursor.classList.remove(
                              "typed-cursor--blink"
                            ))));
                },
              },
              {
                key: "humanizer",
                value: function (t) {
                  return Math.round((Math.random() * t) / 2) + t;
                },
              },
              {
                key: "shuffleStringsIfNeeded",
                value: function () {
                  this.shuffle &&
                    (this.sequence = this.sequence.sort(function () {
                      return Math.random() - 0.5;
                    }));
                },
              },
              {
                key: "initFadeOut",
                value: function () {
                  var t = this;
                  return (
                    (this.el.className += " " + this.fadeOutClass),
                    this.cursor &&
                      (this.cursor.className += " " + this.fadeOutClass),
                    setTimeout(function () {
                      t.arrayPos++,
                        t.replaceText(""),
                        t.strings.length > t.arrayPos
                          ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
                          : (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
                    }, this.fadeOutDelay)
                  );
                },
              },
              {
                key: "replaceText",
                value: function (t) {
                  this.attr
                    ? this.el.setAttribute(this.attr, t)
                    : this.isInput
                    ? (this.el.value = t)
                    : "html" === this.contentType
                    ? (this.el.innerHTML = t)
                    : (this.el.textContent = t);
                },
              },
              {
                key: "bindFocusEvents",
                value: function () {
                  var t = this;
                  this.isInput &&
                    (this.el.addEventListener("focus", function (e) {
                      t.stop();
                    }),
                    this.el.addEventListener("blur", function (e) {
                      (t.el.value && 0 !== t.el.value.length) || t.start();
                    }));
                },
              },
              {
                key: "insertCursor",
                value: function () {
                  this.showCursor &&
                    (this.cursor ||
                      ((this.cursor = document.createElement("span")),
                      (this.cursor.className = "typed-cursor"),
                      this.cursor.setAttribute("aria-hidden", !0),
                      (this.cursor.innerHTML = this.cursorChar),
                      this.el.parentNode &&
                        this.el.parentNode.insertBefore(
                          this.cursor,
                          this.el.nextSibling
                        )));
                },
              },
            ]),
            t
          );
        })();
      (e["default"] = a), (t.exports = e["default"]);
    },
    function (t, e, s) {
      "use strict";
      function n(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var s = arguments[e];
              for (var n in s)
                Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            }
            return t;
          },
        o = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        a = s(2),
        u = n(a),
        l = (function () {
          function t() {
            i(this, t);
          }
          return (
            o(t, [
              {
                key: "load",
                value: function (t, e, s) {
                  if (
                    ("string" == typeof s
                      ? (t.el = document.querySelector(s))
                      : (t.el = s),
                    (t.options = r({}, u["default"], e)),
                    (t.isInput = "input" === t.el.tagName.toLowerCase()),
                    (t.attr = t.options.attr),
                    (t.bindInputFocusEvents = t.options.bindInputFocusEvents),
                    (t.showCursor = !t.isInput && t.options.showCursor),
                    (t.cursorChar = t.options.cursorChar),
                    (t.cursorBlinking = !0),
                    (t.elContent = t.attr
                      ? t.el.getAttribute(t.attr)
                      : t.el.textContent),
                    (t.contentType = t.options.contentType),
                    (t.typeSpeed = t.options.typeSpeed),
                    (t.startDelay = t.options.startDelay),
                    (t.backSpeed = t.options.backSpeed),
                    (t.smartBackspace = t.options.smartBackspace),
                    (t.backDelay = t.options.backDelay),
                    (t.fadeOut = t.options.fadeOut),
                    (t.fadeOutClass = t.options.fadeOutClass),
                    (t.fadeOutDelay = t.options.fadeOutDelay),
                    (t.isPaused = !1),
                    (t.strings = t.options.strings.map(function (t) {
                      return t.trim();
                    })),
                    "string" == typeof t.options.stringsElement
                      ? (t.stringsElement = document.querySelector(
                          t.options.stringsElement
                        ))
                      : (t.stringsElement = t.options.stringsElement),
                    t.stringsElement)
                  ) {
                    (t.strings = []), (t.stringsElement.style.display = "none");
                    var n = Array.prototype.slice.apply(
                        t.stringsElement.children
                      ),
                      i = n.length;
                    if (i)
                      for (var o = 0; o < i; o += 1) {
                        var a = n[o];
                        t.strings.push(a.innerHTML.trim());
                      }
                  }
                  (t.strPos = 0),
                    (t.arrayPos = 0),
                    (t.stopNum = 0),
                    (t.loop = t.options.loop),
                    (t.loopCount = t.options.loopCount),
                    (t.curLoop = 0),
                    (t.shuffle = t.options.shuffle),
                    (t.sequence = []),
                    (t.pause = {
                      status: !1,
                      typewrite: !0,
                      curString: "",
                      curStrPos: 0,
                    }),
                    (t.typingComplete = !1);
                  for (var o in t.strings) t.sequence[o] = o;
                  (t.currentElContent = this.getCurrentElContent(t)),
                    (t.autoInsertCss = t.options.autoInsertCss),
                    this.appendAnimationCss(t);
                },
              },
              {
                key: "getCurrentElContent",
                value: function (t) {
                  var e = "";
                  return (e = t.attr
                    ? t.el.getAttribute(t.attr)
                    : t.isInput
                    ? t.el.value
                    : "html" === t.contentType
                    ? t.el.innerHTML
                    : t.el.textContent);
                },
              },
              {
                key: "appendAnimationCss",
                value: function (t) {
                  var e = "data-typed-js-css";
                  if (
                    t.autoInsertCss &&
                    (t.showCursor || t.fadeOut) &&
                    !document.querySelector("[" + e + "]")
                  ) {
                    var s = document.createElement("style");
                    (s.type = "text/css"), s.setAttribute(e, !0);
                    var n = "";
                    t.showCursor &&
                      (n +=
                        "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                      t.fadeOut &&
                        (n +=
                          "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                      0 !== s.length &&
                        ((s.innerHTML = n), document.body.appendChild(s));
                  }
                },
              },
            ]),
            t
          );
        })();
      e["default"] = l;
      var c = new l();
      e.initializer = c;
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = {
        strings: [
          "These are the default values...",
          "You know what you should do?",
          "Use your own!",
          "Have a great day!",
        ],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        smartBackspace: !0,
        shuffle: !1,
        backDelay: 700,
        fadeOut: !1,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,
        loop: !1,
        loopCount: 1 / 0,
        showCursor: !0,
        cursorChar: "|",
        autoInsertCss: !0,
        attr: null,
        bindInputFocusEvents: !1,
        contentType: "html",
        onBegin: function (t) {},
        onComplete: function (t) {},
        preStringTyped: function (t, e) {},
        onStringTyped: function (t, e) {},
        onLastStringBackspaced: function (t) {},
        onTypingPaused: function (t, e) {},
        onTypingResumed: function (t, e) {},
        onReset: function (t) {},
        onStop: function (t, e) {},
        onStart: function (t, e) {},
        onDestroy: function (t) {},
      };
      (e["default"] = s), (t.exports = e["default"]);
    },
    function (t, e) {
      "use strict";
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        i = (function () {
          function t() {
            s(this, t);
          }
          return (
            n(t, [
              {
                key: "typeHtmlChars",
                value: function (t, e, s) {
                  if ("html" !== s.contentType) return e;
                  var n = t.substr(e).charAt(0);
                  if ("<" === n || "&" === n) {
                    var i = "";
                    for (
                      i = "<" === n ? ">" : ";";
                      t.substr(e + 1).charAt(0) !== i &&
                      (e++, !(e + 1 > t.length));

                    );
                    e++;
                  }
                  return e;
                },
              },
              {
                key: "backSpaceHtmlChars",
                value: function (t, e, s) {
                  if ("html" !== s.contentType) return e;
                  var n = t.substr(e).charAt(0);
                  if (">" === n || ";" === n) {
                    var i = "";
                    for (
                      i = ">" === n ? "<" : "&";
                      t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0));

                    );
                    e--;
                  }
                  return e;
                },
              },
            ]),
            t
          );
        })();
      e["default"] = i;
      var r = new i();
      e.htmlParser = r;
    },
  ]);
});
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.7
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value: value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__((__webpack_require__.s = 11));
})([
  ,
  ,
  function (module, exports, __webpack_require__) {
    "use strict";
    module.exports = function (callback) {
      if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
      ) {
        callback.call();
      } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState === "interactive") callback.call();
        });
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
      }
    };
  },
  ,
  function (module, exports, __webpack_require__) {
    "use strict";
    (function (global) {
      var win;
      if (typeof window !== "undefined") {
        win = window;
      } else if (typeof global !== "undefined") {
        win = global;
      } else if (typeof self !== "undefined") {
        win = self;
      } else {
        win = {};
      }
      module.exports = win;
    }).call(this, __webpack_require__(5));
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
    var g;
    g = (function () {
      return this;
    })();
    try {
      g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
      if (
        (typeof window === "undefined" ? "undefined" : _typeof(window)) ===
        "object"
      )
        g = window;
    }
    module.exports = g;
  },
  ,
  ,
  ,
  ,
  ,
  function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(12);
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _global = __webpack_require__(4);
    var _jarallax = __webpack_require__(13);
    var _jarallax2 = _interopRequireDefault(_jarallax);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var oldPlugin = _global.window.jarallax;
    _global.window.jarallax = _jarallax2.default;
    _global.window.jarallax.noConflict = function () {
      _global.window.jarallax = oldPlugin;
      return this;
    };
    if (typeof _global.jQuery !== "undefined") {
      var jQueryPlugin = function jQueryPlugin() {
        var args = arguments || [];
        Array.prototype.unshift.call(args, this);
        var res = _jarallax2.default.apply(_global.window, args);
        return (typeof res === "undefined" ? "undefined" : _typeof(res)) !==
          "object"
          ? res
          : this;
      };
      jQueryPlugin.constructor = _jarallax2.default.constructor;
      var oldJqPlugin = _global.jQuery.fn.jarallax;
      _global.jQuery.fn.jarallax = jQueryPlugin;
      _global.jQuery.fn.jarallax.noConflict = function () {
        _global.jQuery.fn.jarallax = oldJqPlugin;
        return this;
      };
    }
    (0, _liteReady2.default)(function () {
      (0, _jarallax2.default)(document.querySelectorAll("[data-jarallax]"));
    });
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    (function (global) {
      Object.defineProperty(exports, "__esModule", { value: true });
      var _slicedToArray = (function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (
              var _i = arr[Symbol.iterator](), _s;
              !(_n = (_s = _i.next()).done);
              _n = true
            ) {
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
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          }
        };
      })();
      var _createClass = (function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();
      var _typeof =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
      var _liteReady = __webpack_require__(2);
      var _liteReady2 = _interopRequireDefault(_liteReady);
      var _rafl = __webpack_require__(14);
      var _rafl2 = _interopRequireDefault(_rafl);
      var _global = __webpack_require__(4);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var isIE =
        navigator.userAgent.indexOf("MSIE ") > -1 ||
        navigator.userAgent.indexOf("Trident/") > -1 ||
        navigator.userAgent.indexOf("Edge/") > -1;
      var supportTransform = (function () {
        var prefixes = "transform WebkitTransform MozTransform".split(" ");
        var div = document.createElement("div");
        for (var i = 0; i < prefixes.length; i++) {
          if (div && div.style[prefixes[i]] !== undefined) {
            return prefixes[i];
          }
        }
        return false;
      })();
      var wndW = void 0;
      var wndH = void 0;
      var wndY = void 0;
      var forceResizeParallax = false;
      var forceScrollParallax = false;
      function updateWndVars(e) {
        wndW =
          _global.window.innerWidth || document.documentElement.clientWidth;
        wndH =
          _global.window.innerHeight || document.documentElement.clientHeight;
        if (
          (typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" &&
          (e.type === "load" || e.type === "dom-loaded")
        ) {
          forceResizeParallax = true;
        }
      }
      updateWndVars();
      _global.window.addEventListener("resize", updateWndVars);
      _global.window.addEventListener("orientationchange", updateWndVars);
      _global.window.addEventListener("load", updateWndVars);
      (0, _liteReady2.default)(function () {
        updateWndVars({ type: "dom-loaded" });
      });
      var jarallaxList = [];
      var oldPageData = false;
      function updateParallax() {
        if (!jarallaxList.length) {
          return;
        }
        if (_global.window.pageYOffset !== undefined) {
          wndY = _global.window.pageYOffset;
        } else {
          wndY = (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
        }
        var isResized =
          forceResizeParallax ||
          !oldPageData ||
          oldPageData.width !== wndW ||
          oldPageData.height !== wndH;
        var isScrolled =
          forceScrollParallax ||
          isResized ||
          !oldPageData ||
          oldPageData.y !== wndY;
        forceResizeParallax = false;
        forceScrollParallax = false;
        if (isResized || isScrolled) {
          jarallaxList.forEach(function (item) {
            if (isResized) {
              item.onResize();
            }
            if (isScrolled) {
              item.onScroll();
            }
          });
          oldPageData = { width: wndW, height: wndH, y: wndY };
        }
        (0, _rafl2.default)(updateParallax);
      }
      var resizeObserver = global.ResizeObserver
        ? new global.ResizeObserver(function (entry) {
            if (entry && entry.length) {
              (0, _rafl2.default)(function () {
                entry.forEach(function (item) {
                  if (item.target && item.target.jarallax) {
                    if (!forceResizeParallax) {
                      item.target.jarallax.onResize();
                    }
                    forceScrollParallax = true;
                  }
                });
              });
            }
          })
        : false;
      var instanceID = 0;
      var Jarallax = (function () {
        function Jarallax(item, userOptions) {
          _classCallCheck(this, Jarallax);
          var self = this;
          self.instanceID = instanceID++;
          self.$item = item;
          self.defaults = {
            type: "scroll",
            speed: 0.5,
            imgSrc: null,
            imgElement: ".jarallax-img",
            imgSize: "cover",
            imgPosition: "50% 50%",
            imgRepeat: "no-repeat",
            keepImg: false,
            elementInViewport: null,
            zIndex: -100,
            disableParallax: false,
            disableVideo: false,
            automaticResize: true,
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: true,
            videoPlayOnlyVisible: true,
            onScroll: null,
            onInit: null,
            onDestroy: null,
            onCoverImage: null,
          };
          var deprecatedDataAttribute =
            self.$item.getAttribute("data-jarallax");
          var oldDataOptions = JSON.parse(deprecatedDataAttribute || "{}");
          if (deprecatedDataAttribute) {
            console.warn(
              "Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53"
            );
          }
          var dataOptions = self.$item.dataset || {};
          var pureDataOptions = {};
          Object.keys(dataOptions).forEach(function (key) {
            var loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
            if (
              loweCaseOption &&
              typeof self.defaults[loweCaseOption] !== "undefined"
            ) {
              pureDataOptions[loweCaseOption] = dataOptions[key];
            }
          });
          self.options = self.extend(
            {},
            self.defaults,
            oldDataOptions,
            pureDataOptions,
            userOptions
          );
          self.pureOptions = self.extend({}, self.options);
          Object.keys(self.options).forEach(function (key) {
            if (self.options[key] === "true") {
              self.options[key] = true;
            } else if (self.options[key] === "false") {
              self.options[key] = false;
            }
          });
          self.options.speed = Math.min(
            2,
            Math.max(-1, parseFloat(self.options.speed))
          );
          if (self.options.noAndroid || self.options.noIos) {
            console.warn(
              "Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"
            );
            if (!self.options.disableParallax) {
              if (self.options.noIos && self.options.noAndroid) {
                self.options.disableParallax = /iPad|iPhone|iPod|Android/;
              } else if (self.options.noIos) {
                self.options.disableParallax = /iPad|iPhone|iPod/;
              } else if (self.options.noAndroid) {
                self.options.disableParallax = /Android/;
              }
            }
          }
          if (typeof self.options.disableParallax === "string") {
            self.options.disableParallax = new RegExp(
              self.options.disableParallax
            );
          }
          if (self.options.disableParallax instanceof RegExp) {
            var disableParallaxRegexp = self.options.disableParallax;
            self.options.disableParallax = function () {
              return disableParallaxRegexp.test(navigator.userAgent);
            };
          }
          if (typeof self.options.disableParallax !== "function") {
            self.options.disableParallax = function () {
              return false;
            };
          }
          if (typeof self.options.disableVideo === "string") {
            self.options.disableVideo = new RegExp(self.options.disableVideo);
          }
          if (self.options.disableVideo instanceof RegExp) {
            var disableVideoRegexp = self.options.disableVideo;
            self.options.disableVideo = function () {
              return disableVideoRegexp.test(navigator.userAgent);
            };
          }
          if (typeof self.options.disableVideo !== "function") {
            self.options.disableVideo = function () {
              return false;
            };
          }
          var elementInVP = self.options.elementInViewport;
          if (
            elementInVP &&
            (typeof elementInVP === "undefined"
              ? "undefined"
              : _typeof(elementInVP)) === "object" &&
            typeof elementInVP.length !== "undefined"
          ) {
            var _elementInVP = elementInVP;
            var _elementInVP2 = _slicedToArray(_elementInVP, 1);
            elementInVP = _elementInVP2[0];
          }
          if (!(elementInVP instanceof Element)) {
            elementInVP = null;
          }
          self.options.elementInViewport = elementInVP;
          self.image = {
            src: self.options.imgSrc || null,
            $container: null,
            useImgTag: false,
            position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent)
              ? "absolute"
              : "fixed",
          };
          if (self.initImg() && self.canInitParallax()) {
            self.init();
          }
        }
        _createClass(Jarallax, [
          {
            key: "css",
            value: function css(el, styles) {
              if (typeof styles === "string") {
                return _global.window
                  .getComputedStyle(el)
                  .getPropertyValue(styles);
              }
              if (styles.transform && supportTransform) {
                styles[supportTransform] = styles.transform;
              }
              Object.keys(styles).forEach(function (key) {
                el.style[key] = styles[key];
              });
              return el;
            },
          },
          {
            key: "extend",
            value: function extend(out) {
              var _arguments = arguments;
              out = out || {};
              Object.keys(arguments).forEach(function (i) {
                if (!_arguments[i]) {
                  return;
                }
                Object.keys(_arguments[i]).forEach(function (key) {
                  out[key] = _arguments[i][key];
                });
              });
              return out;
            },
          },
          {
            key: "getWindowData",
            value: function getWindowData() {
              return { width: wndW, height: wndH, y: wndY };
            },
          },
          {
            key: "initImg",
            value: function initImg() {
              var self = this;
              var $imgElement = self.options.imgElement;
              if ($imgElement && typeof $imgElement === "string") {
                $imgElement = self.$item.querySelector($imgElement);
              }
              if (!($imgElement instanceof Element)) {
                $imgElement = null;
              }
              if ($imgElement) {
                if (self.options.keepImg) {
                  self.image.$item = $imgElement.cloneNode(true);
                } else {
                  self.image.$item = $imgElement;
                  self.image.$itemParent = $imgElement.parentNode;
                }
                self.image.useImgTag = true;
              }
              if (self.image.$item) {
                return true;
              }
              if (self.image.src === null) {
                self.image.src = self
                  .css(self.$item, "background-image")
                  .replace(/^url\(['"]?/g, "")
                  .replace(/['"]?\)$/g, "");
              }
              return !(!self.image.src || self.image.src === "none");
            },
          },
          {
            key: "canInitParallax",
            value: function canInitParallax() {
              return supportTransform && !this.options.disableParallax();
            },
          },
          {
            key: "init",
            value: function init() {
              var self = this;
              var containerStyles = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none",
              };
              var imageStyles = {};
              if (!self.options.keepImg) {
                var curStyle = self.$item.getAttribute("style");
                if (curStyle) {
                  self.$item.setAttribute(
                    "data-jarallax-original-styles",
                    curStyle
                  );
                }
                if (self.image.useImgTag) {
                  var curImgStyle = self.image.$item.getAttribute("style");
                  if (curImgStyle) {
                    self.image.$item.setAttribute(
                      "data-jarallax-original-styles",
                      curImgStyle
                    );
                  }
                }
              }
              if (self.css(self.$item, "position") === "static") {
                self.css(self.$item, { position: "relative" });
              }
              if (self.css(self.$item, "z-index") === "auto") {
                self.css(self.$item, { zIndex: 0 });
              }
              self.image.$container = document.createElement("div");
              self.css(self.image.$container, containerStyles);
              self.css(self.image.$container, {
                "z-index": self.options.zIndex,
              });
              if (isIE) {
                self.css(self.image.$container, { opacity: 0.9999 });
              }
              self.image.$container.setAttribute(
                "id",
                "jarallax-container-" + self.instanceID
              );
              self.$item.appendChild(self.image.$container);
              if (self.image.useImgTag) {
                imageStyles = self.extend(
                  {
                    "object-fit": self.options.imgSize,
                    "object-position": self.options.imgPosition,
                    "font-family":
                      "object-fit: " +
                      self.options.imgSize +
                      "; object-position: " +
                      self.options.imgPosition +
                      ";",
                    "max-width": "none",
                  },
                  containerStyles,
                  imageStyles
                );
              } else {
                self.image.$item = document.createElement("div");
                if (self.image.src) {
                  imageStyles = self.extend(
                    {
                      "background-position": self.options.imgPosition,
                      "background-size": self.options.imgSize,
                      "background-repeat": self.options.imgRepeat,
                      "background-image": 'url("' + self.image.src + '")',
                    },
                    containerStyles,
                    imageStyles
                  );
                }
              }
              if (
                self.options.type === "opacity" ||
                self.options.type === "scale" ||
                self.options.type === "scale-opacity" ||
                self.options.speed === 1
              ) {
                self.image.position = "absolute";
              }
              if (self.image.position === "fixed") {
                var parentWithTransform = 0;
                var $itemParents = self.$item;
                while (
                  $itemParents !== null &&
                  $itemParents !== document &&
                  parentWithTransform === 0
                ) {
                  var parentTransform =
                    self.css($itemParents, "-webkit-transform") ||
                    self.css($itemParents, "-moz-transform") ||
                    self.css($itemParents, "transform");
                  if (parentTransform && parentTransform !== "none") {
                    parentWithTransform = 1;
                    self.image.position = "absolute";
                  }
                  $itemParents = $itemParents.parentNode;
                }
              }
              imageStyles.position = self.image.position;
              self.css(self.image.$item, imageStyles);
              self.image.$container.appendChild(self.image.$item);
              self.onResize();
              self.onScroll(true);
              if (self.options.automaticResize && resizeObserver) {
                resizeObserver.observe(self.$item);
              }
              if (self.options.onInit) {
                self.options.onInit.call(self);
              }
              if (self.css(self.$item, "background-image") !== "none") {
                self.css(self.$item, { "background-image": "none" });
              }
              self.addToParallaxList();
            },
          },
          {
            key: "addToParallaxList",
            value: function addToParallaxList() {
              jarallaxList.push(this);
              if (jarallaxList.length === 1) {
                updateParallax();
              }
            },
          },
          {
            key: "removeFromParallaxList",
            value: function removeFromParallaxList() {
              var self = this;
              jarallaxList.forEach(function (item, key) {
                if (item.instanceID === self.instanceID) {
                  jarallaxList.splice(key, 1);
                }
              });
            },
          },
          {
            key: "destroy",
            value: function destroy() {
              var self = this;
              self.removeFromParallaxList();
              var originalStylesTag = self.$item.getAttribute(
                "data-jarallax-original-styles"
              );
              self.$item.removeAttribute("data-jarallax-original-styles");
              if (!originalStylesTag) {
                self.$item.removeAttribute("style");
              } else {
                self.$item.setAttribute("style", originalStylesTag);
              }
              if (self.image.useImgTag) {
                var originalStylesImgTag = self.image.$item.getAttribute(
                  "data-jarallax-original-styles"
                );
                self.image.$item.removeAttribute(
                  "data-jarallax-original-styles"
                );
                if (!originalStylesImgTag) {
                  self.image.$item.removeAttribute("style");
                } else {
                  self.image.$item.setAttribute("style", originalStylesTag);
                }
                if (self.image.$itemParent) {
                  self.image.$itemParent.appendChild(self.image.$item);
                }
              }
              if (self.$clipStyles) {
                self.$clipStyles.parentNode.removeChild(self.$clipStyles);
              }
              if (self.image.$container) {
                self.image.$container.parentNode.removeChild(
                  self.image.$container
                );
              }
              if (self.options.onDestroy) {
                self.options.onDestroy.call(self);
              }
              delete self.$item.jarallax;
            },
          },
          {
            key: "clipContainer",
            value: function clipContainer() {
              if (this.image.position !== "fixed") {
                return;
              }
              var self = this;
              var rect = self.image.$container.getBoundingClientRect();
              var width = rect.width,
                height = rect.height;
              if (!self.$clipStyles) {
                self.$clipStyles = document.createElement("style");
                self.$clipStyles.setAttribute("type", "text/css");
                self.$clipStyles.setAttribute(
                  "id",
                  "jarallax-clip-" + self.instanceID
                );
                var head =
                  document.head || document.getElementsByTagName("head")[0];
                head.appendChild(self.$clipStyles);
              }
              var styles =
                "#jarallax-container-" +
                self.instanceID +
                " {\n           clip: rect(0 " +
                width +
                "px " +
                height +
                "px 0);\n           clip: rect(0, " +
                width +
                "px, " +
                height +
                "px, 0);\n        }";
              if (self.$clipStyles.styleSheet) {
                self.$clipStyles.styleSheet.cssText = styles;
              } else {
                self.$clipStyles.innerHTML = styles;
              }
            },
          },
          {
            key: "coverImage",
            value: function coverImage() {
              var self = this;
              var rect = self.image.$container.getBoundingClientRect();
              var contH = rect.height;
              var speed = self.options.speed;
              var isScroll =
                self.options.type === "scroll" ||
                self.options.type === "scroll-opacity";
              var scrollDist = 0;
              var resultH = contH;
              var resultMT = 0;
              if (isScroll) {
                if (speed < 0) {
                  scrollDist = speed * Math.max(contH, wndH);
                  if (wndH < contH) {
                    scrollDist -= speed * (contH - wndH);
                  }
                } else {
                  scrollDist = speed * (contH + wndH);
                }
                if (speed > 1) {
                  resultH = Math.abs(scrollDist - wndH);
                } else if (speed < 0) {
                  resultH = scrollDist / speed + Math.abs(scrollDist);
                } else {
                  resultH += (wndH - contH) * (1 - speed);
                }
                scrollDist /= 2;
              }
              self.parallaxScrollDistance = scrollDist;
              if (isScroll) {
                resultMT = (wndH - resultH) / 2;
              } else {
                resultMT = (contH - resultH) / 2;
              }
              self.css(self.image.$item, {
                height: resultH + "px",
                marginTop: resultMT + "px",
                left: self.image.position === "fixed" ? rect.left + "px" : "0",
                width: rect.width + "px",
              });
              if (self.options.onCoverImage) {
                self.options.onCoverImage.call(self);
              }
              return {
                image: { height: resultH, marginTop: resultMT },
                container: rect,
              };
            },
          },
          {
            key: "isVisible",
            value: function isVisible() {
              return this.isElementInViewport || false;
            },
          },
          {
            key: "onScroll",
            value: function onScroll(force) {
              var self = this;
              var rect = self.$item.getBoundingClientRect();
              var contT = rect.top;
              var contH = rect.height;
              var styles = {};
              var viewportRect = rect;
              if (self.options.elementInViewport) {
                viewportRect =
                  self.options.elementInViewport.getBoundingClientRect();
              }
              self.isElementInViewport =
                viewportRect.bottom >= 0 &&
                viewportRect.right >= 0 &&
                viewportRect.top <= wndH &&
                viewportRect.left <= wndW;
              if (force ? false : !self.isElementInViewport) {
                return;
              }
              var beforeTop = Math.max(0, contT);
              var beforeTopEnd = Math.max(0, contH + contT);
              var afterTop = Math.max(0, -contT);
              var beforeBottom = Math.max(0, contT + contH - wndH);
              var beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
              var afterBottom = Math.max(0, -contT + wndH - contH);
              var fromViewportCenter =
                1 - (2 * (wndH - contT)) / (wndH + contH);
              var visiblePercent = 1;
              if (contH < wndH) {
                visiblePercent = 1 - (afterTop || beforeBottom) / contH;
              } else if (beforeTopEnd <= wndH) {
                visiblePercent = beforeTopEnd / wndH;
              } else if (beforeBottomEnd <= wndH) {
                visiblePercent = beforeBottomEnd / wndH;
              }
              if (
                self.options.type === "opacity" ||
                self.options.type === "scale-opacity" ||
                self.options.type === "scroll-opacity"
              ) {
                styles.transform = "translate3d(0,0,0)";
                styles.opacity = visiblePercent;
              }
              if (
                self.options.type === "scale" ||
                self.options.type === "scale-opacity"
              ) {
                var scale = 1;
                if (self.options.speed < 0) {
                  scale -= self.options.speed * visiblePercent;
                } else {
                  scale += self.options.speed * (1 - visiblePercent);
                }
                styles.transform = "scale(" + scale + ") translate3d(0,0,0)";
              }
              if (
                self.options.type === "scroll" ||
                self.options.type === "scroll-opacity"
              ) {
                var positionY =
                  self.parallaxScrollDistance * fromViewportCenter;
                if (self.image.position === "absolute") {
                  positionY -= contT;
                }
                styles.transform = "translate3d(0," + positionY + "px,0)";
              }
              self.css(self.image.$item, styles);
              if (self.options.onScroll) {
                self.options.onScroll.call(self, {
                  section: rect,
                  beforeTop: beforeTop,
                  beforeTopEnd: beforeTopEnd,
                  afterTop: afterTop,
                  beforeBottom: beforeBottom,
                  beforeBottomEnd: beforeBottomEnd,
                  afterBottom: afterBottom,
                  visiblePercent: visiblePercent,
                  fromViewportCenter: fromViewportCenter,
                });
              }
            },
          },
          {
            key: "onResize",
            value: function onResize() {
              this.coverImage();
              this.clipContainer();
            },
          },
        ]);
        return Jarallax;
      })();
      var plugin = function plugin(items) {
        if (
          (typeof HTMLElement === "undefined"
            ? "undefined"
            : _typeof(HTMLElement)) === "object"
            ? items instanceof HTMLElement
            : items &&
              (typeof items === "undefined" ? "undefined" : _typeof(items)) ===
                "object" &&
              items !== null &&
              items.nodeType === 1 &&
              typeof items.nodeName === "string"
        ) {
          items = [items];
        }
        var options = arguments[1];
        var args = Array.prototype.slice.call(arguments, 2);
        var len = items.length;
        var k = 0;
        var ret = void 0;
        for (k; k < len; k++) {
          if (
            (typeof options === "undefined"
              ? "undefined"
              : _typeof(options)) === "object" ||
            typeof options === "undefined"
          ) {
            if (!items[k].jarallax) {
              items[k].jarallax = new Jarallax(items[k], options);
            }
          } else if (items[k].jarallax) {
            ret = items[k].jarallax[options].apply(items[k].jarallax, args);
          }
          if (typeof ret !== "undefined") {
            return ret;
          }
        }
        return items;
      };
      plugin.constructor = Jarallax;
      exports.default = plugin;
    }).call(this, __webpack_require__(5));
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    var global = __webpack_require__(4);
    var request =
      global.requestAnimationFrame ||
      global.webkitRequestAnimationFrame ||
      global.mozRequestAnimationFrame ||
      fallback;
    var prev = +new Date();
    function fallback(fn) {
      var curr = +new Date();
      var ms = Math.max(0, 16 - (curr - prev));
      var req = setTimeout(fn, ms);
      return (prev = curr), req;
    }
    var cancel =
      global.cancelAnimationFrame ||
      global.webkitCancelAnimationFrame ||
      global.mozCancelAnimationFrame ||
      clearTimeout;
    if (Function.prototype.bind) {
      request = request.bind(global);
      cancel = cancel.bind(global);
    }
    exports = module.exports = request;
    exports.cancel = cancel;
  },
]);
/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value: value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__((__webpack_require__.s = 6));
})([
  ,
  ,
  function (module, exports, __webpack_require__) {
    "use strict";
    module.exports = function (callback) {
      if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
      ) {
        callback.call();
      } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState === "interactive") callback.call();
        });
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
      }
    };
  },
  ,
  function (module, exports, __webpack_require__) {
    "use strict";
    (function (global) {
      var win;
      if (typeof window !== "undefined") {
        win = window;
      } else if (typeof global !== "undefined") {
        win = global;
      } else if (typeof self !== "undefined") {
        win = self;
      } else {
        win = {};
      }
      module.exports = win;
    }).call(this, __webpack_require__(5));
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
    var g;
    g = (function () {
      return this;
    })();
    try {
      g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
      if (
        (typeof window === "undefined" ? "undefined" : _typeof(window)) ===
        "object"
      )
        g = window;
    }
    module.exports = g;
  },
  function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(7);
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    var _videoWorker = __webpack_require__(8);
    var _videoWorker2 = _interopRequireDefault(_videoWorker);
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _jarallaxVideo = __webpack_require__(10);
    var _jarallaxVideo2 = _interopRequireDefault(_jarallaxVideo);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    _global2.default.VideoWorker =
      _global2.default.VideoWorker || _videoWorker2.default;
    (0, _jarallaxVideo2.default)();
    (0, _liteReady2.default)(function () {
      if (typeof jarallax !== "undefined") {
        jarallax(document.querySelectorAll("[data-jarallax-video]"));
      }
    });
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    module.exports = __webpack_require__(9);
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
    var _createClass = (function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    })();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function Deferred() {
      this._done = [];
      this._fail = [];
    }
    Deferred.prototype = {
      execute: function execute(list, args) {
        var i = list.length;
        args = Array.prototype.slice.call(args);
        while (i--) {
          list[i].apply(null, args);
        }
      },
      resolve: function resolve() {
        this.execute(this._done, arguments);
      },
      reject: function reject() {
        this.execute(this._fail, arguments);
      },
      done: function done(callback) {
        this._done.push(callback);
      },
      fail: function fail(callback) {
        this._fail.push(callback);
      },
    };
    var ID = 0;
    var YoutubeAPIadded = 0;
    var VimeoAPIadded = 0;
    var loadingYoutubePlayer = 0;
    var loadingVimeoPlayer = 0;
    var loadingYoutubeDefer = new Deferred();
    var loadingVimeoDefer = new Deferred();
    var VideoWorker = (function () {
      function VideoWorker(url, options) {
        _classCallCheck(this, VideoWorker);
        var self = this;
        self.url = url;
        self.options_default = {
          autoplay: false,
          loop: false,
          mute: false,
          volume: 100,
          showContols: true,
          startTime: 0,
          endTime: 0,
        };
        self.options = self.extend({}, self.options_default, options);
        self.videoID = self.parseURL(url);
        if (self.videoID) {
          self.ID = ID++;
          self.loadAPI();
          self.init();
        }
      }
      _createClass(VideoWorker, [
        {
          key: "extend",
          value: function extend(out) {
            var _arguments = arguments;
            out = out || {};
            Object.keys(arguments).forEach(function (i) {
              if (!_arguments[i]) {
                return;
              }
              Object.keys(_arguments[i]).forEach(function (key) {
                out[key] = _arguments[i][key];
              });
            });
            return out;
          },
        },
        {
          key: "parseURL",
          value: function parseURL(url) {
            function getYoutubeID(ytUrl) {
              var regExp =
                /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
              var match = ytUrl.match(regExp);
              return match && match[1].length === 11 ? match[1] : false;
            }
            function getVimeoID(vmUrl) {
              var regExp =
                /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
              var match = vmUrl.match(regExp);
              return match && match[3] ? match[3] : false;
            }
            function getLocalVideos(locUrl) {
              var videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
              var result = {};
              var ready = 0;
              videoFormats.forEach(function (val) {
                var match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                if (match && match[1] && match[2]) {
                  result[match[1] === "ogv" ? "ogg" : match[1]] = match[2];
                  ready = 1;
                }
              });
              return ready ? result : false;
            }
            var Youtube = getYoutubeID(url);
            var Vimeo = getVimeoID(url);
            var Local = getLocalVideos(url);
            if (Youtube) {
              this.type = "youtube";
              return Youtube;
            } else if (Vimeo) {
              this.type = "vimeo";
              return Vimeo;
            } else if (Local) {
              this.type = "local";
              return Local;
            }
            return false;
          },
        },
        {
          key: "isValid",
          value: function isValid() {
            return !!this.videoID;
          },
        },
        {
          key: "on",
          value: function on(name, callback) {
            this.userEventsList = this.userEventsList || [];
            (
              this.userEventsList[name] || (this.userEventsList[name] = [])
            ).push(callback);
          },
        },
        {
          key: "off",
          value: function off(name, callback) {
            var _this = this;
            if (!this.userEventsList || !this.userEventsList[name]) {
              return;
            }
            if (!callback) {
              delete this.userEventsList[name];
            } else {
              this.userEventsList[name].forEach(function (val, key) {
                if (val === callback) {
                  _this.userEventsList[name][key] = false;
                }
              });
            }
          },
        },
        {
          key: "fire",
          value: function fire(name) {
            var _this2 = this;
            var args = [].slice.call(arguments, 1);
            if (
              this.userEventsList &&
              typeof this.userEventsList[name] !== "undefined"
            ) {
              this.userEventsList[name].forEach(function (val) {
                if (val) {
                  val.apply(_this2, args);
                }
              });
            }
          },
        },
        {
          key: "play",
          value: function play(start) {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.playVideo) {
              if (typeof start !== "undefined") {
                self.player.seekTo(start || 0);
              }
              if (YT.PlayerState.PLAYING !== self.player.getPlayerState()) {
                self.player.playVideo();
              }
            }
            if (self.type === "vimeo") {
              if (typeof start !== "undefined") {
                self.player.setCurrentTime(start);
              }
              self.player.getPaused().then(function (paused) {
                if (paused) {
                  self.player.play();
                }
              });
            }
            if (self.type === "local") {
              if (typeof start !== "undefined") {
                self.player.currentTime = start;
              }
              if (self.player.paused) {
                self.player.play();
              }
            }
          },
        },
        {
          key: "pause",
          value: function pause() {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.pauseVideo) {
              if (YT.PlayerState.PLAYING === self.player.getPlayerState()) {
                self.player.pauseVideo();
              }
            }
            if (self.type === "vimeo") {
              self.player.getPaused().then(function (paused) {
                if (!paused) {
                  self.player.pause();
                }
              });
            }
            if (self.type === "local") {
              if (!self.player.paused) {
                self.player.pause();
              }
            }
          },
        },
        {
          key: "mute",
          value: function mute() {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.mute) {
              self.player.mute();
            }
            if (self.type === "vimeo" && self.player.setVolume) {
              self.player.setVolume(0);
            }
            if (self.type === "local") {
              self.$video.muted = true;
            }
          },
        },
        {
          key: "unmute",
          value: function unmute() {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.mute) {
              self.player.unMute();
            }
            if (self.type === "vimeo" && self.player.setVolume) {
              self.player.setVolume(self.options.volume);
            }
            if (self.type === "local") {
              self.$video.muted = false;
            }
          },
        },
        {
          key: "setVolume",
          value: function setVolume() {
            var volume =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : false;
            var self = this;
            if (!self.player || !volume) {
              return;
            }
            if (self.type === "youtube" && self.player.setVolume) {
              self.player.setVolume(volume);
            }
            if (self.type === "vimeo" && self.player.setVolume) {
              self.player.setVolume(volume);
            }
            if (self.type === "local") {
              self.$video.volume = volume / 100;
            }
          },
        },
        {
          key: "getVolume",
          value: function getVolume(callback) {
            var self = this;
            if (!self.player) {
              callback(false);
              return;
            }
            if (self.type === "youtube" && self.player.getVolume) {
              callback(self.player.getVolume());
            }
            if (self.type === "vimeo" && self.player.getVolume) {
              self.player.getVolume().then(function (volume) {
                callback(volume);
              });
            }
            if (self.type === "local") {
              callback(self.$video.volume * 100);
            }
          },
        },
        {
          key: "getMuted",
          value: function getMuted(callback) {
            var self = this;
            if (!self.player) {
              callback(null);
              return;
            }
            if (self.type === "youtube" && self.player.isMuted) {
              callback(self.player.isMuted());
            }
            if (self.type === "vimeo" && self.player.getVolume) {
              self.player.getVolume().then(function (volume) {
                callback(!!volume);
              });
            }
            if (self.type === "local") {
              callback(self.$video.muted);
            }
          },
        },
        {
          key: "getImageURL",
          value: function getImageURL(callback) {
            var self = this;
            if (self.videoImage) {
              callback(self.videoImage);
              return;
            }
            if (self.type === "youtube") {
              var availableSizes = [
                "maxresdefault",
                "sddefault",
                "hqdefault",
                "0",
              ];
              var step = 0;
              var tempImg = new Image();
              tempImg.onload = function () {
                if (
                  (this.naturalWidth || this.width) !== 120 ||
                  step === availableSizes.length - 1
                ) {
                  self.videoImage =
                    "https://img.youtube.com/vi/" +
                    self.videoID +
                    "/" +
                    availableSizes[step] +
                    ".jpg";
                  callback(self.videoImage);
                } else {
                  step++;
                  this.src =
                    "https://img.youtube.com/vi/" +
                    self.videoID +
                    "/" +
                    availableSizes[step] +
                    ".jpg";
                }
              };
              tempImg.src =
                "https://img.youtube.com/vi/" +
                self.videoID +
                "/" +
                availableSizes[step] +
                ".jpg";
            }
            if (self.type === "vimeo") {
              var request = new XMLHttpRequest();
              request.open(
                "GET",
                "https://vimeo.com/api/v2/video/" + self.videoID + ".json",
                true
              );
              request.onreadystatechange = function () {
                if (this.readyState === 4) {
                  if (this.status >= 200 && this.status < 400) {
                    var response = JSON.parse(this.responseText);
                    self.videoImage = response[0].thumbnail_large;
                    callback(self.videoImage);
                  } else {
                  }
                }
              };
              request.send();
              request = null;
            }
          },
        },
        {
          key: "getIframe",
          value: function getIframe(callback) {
            this.getVideo(callback);
          },
        },
        {
          key: "getVideo",
          value: function getVideo(callback) {
            var self = this;
            if (self.$video) {
              callback(self.$video);
              return;
            }
            self.onAPIready(function () {
              var hiddenDiv = void 0;
              if (!self.$video) {
                hiddenDiv = document.createElement("div");
                hiddenDiv.style.display = "none";
              }
              if (self.type === "youtube") {
                self.playerOptions = {};
                self.playerOptions.videoId = self.videoID;
                self.playerOptions.playerVars = {
                  autohide: 1,
                  rel: 0,
                  autoplay: 0,
                  playsinline: 1,
                };
                if (!self.options.showContols) {
                  self.playerOptions.playerVars.iv_load_policy = 3;
                  self.playerOptions.playerVars.modestbranding = 1;
                  self.playerOptions.playerVars.controls = 0;
                  self.playerOptions.playerVars.showinfo = 0;
                  self.playerOptions.playerVars.disablekb = 1;
                }
                var ytStarted = void 0;
                var ytProgressInterval = void 0;
                self.playerOptions.events = {
                  onReady: function onReady(e) {
                    if (self.options.mute) {
                      e.target.mute();
                    } else if (self.options.volume) {
                      e.target.setVolume(self.options.volume);
                    }
                    if (self.options.autoplay) {
                      self.play(self.options.startTime);
                    }
                    self.fire("ready", e);
                    if (self.options.loop && !self.options.endTime) {
                      var secondsOffset = 0.1;
                      self.options.endTime =
                        self.player.getDuration() - secondsOffset;
                    }
                    setInterval(function () {
                      self.getVolume(function (volume) {
                        if (self.options.volume !== volume) {
                          self.options.volume = volume;
                          self.fire("volumechange", e);
                        }
                      });
                    }, 150);
                  },
                  onStateChange: function onStateChange(e) {
                    if (self.options.loop && e.data === YT.PlayerState.ENDED) {
                      self.play(self.options.startTime);
                    }
                    if (!ytStarted && e.data === YT.PlayerState.PLAYING) {
                      ytStarted = 1;
                      self.fire("started", e);
                    }
                    if (e.data === YT.PlayerState.PLAYING) {
                      self.fire("play", e);
                    }
                    if (e.data === YT.PlayerState.PAUSED) {
                      self.fire("pause", e);
                    }
                    if (e.data === YT.PlayerState.ENDED) {
                      self.fire("ended", e);
                    }
                    if (e.data === YT.PlayerState.PLAYING) {
                      ytProgressInterval = setInterval(function () {
                        self.fire("timeupdate", e);
                        if (
                          self.options.endTime &&
                          self.player.getCurrentTime() >= self.options.endTime
                        ) {
                          if (self.options.loop) {
                            self.play(self.options.startTime);
                          } else {
                            self.pause();
                          }
                        }
                      }, 150);
                    } else {
                      clearInterval(ytProgressInterval);
                    }
                  },
                };
                var firstInit = !self.$video;
                if (firstInit) {
                  var div = document.createElement("div");
                  div.setAttribute("id", self.playerID);
                  hiddenDiv.appendChild(div);
                  document.body.appendChild(hiddenDiv);
                }
                self.player =
                  self.player ||
                  new window.YT.Player(self.playerID, self.playerOptions);
                if (firstInit) {
                  self.$video = document.getElementById(self.playerID);
                  self.videoWidth =
                    parseInt(self.$video.getAttribute("width"), 10) || 1280;
                  self.videoHeight =
                    parseInt(self.$video.getAttribute("height"), 10) || 720;
                }
              }
              if (self.type === "vimeo") {
                self.playerOptions = {
                  id: self.videoID,
                  autopause: 0,
                  transparent: 0,
                  autoplay: self.options.autoplay ? 1 : 0,
                  loop: self.options.loop ? 1 : 0,
                  muted: self.options.mute ? 1 : 0,
                };
                if (self.options.volume) {
                  self.playerOptions.volume = self.options.volume;
                }
                if (!self.options.showContols) {
                  self.playerOptions.badge = 0;
                  self.playerOptions.byline = 0;
                  self.playerOptions.portrait = 0;
                  self.playerOptions.title = 0;
                }
                if (!self.$video) {
                  var playerOptionsString = "";
                  Object.keys(self.playerOptions).forEach(function (key) {
                    if (playerOptionsString !== "") {
                      playerOptionsString += "&";
                    }
                    playerOptionsString +=
                      key + "=" + encodeURIComponent(self.playerOptions[key]);
                  });
                  self.$video = document.createElement("iframe");
                  self.$video.setAttribute("id", self.playerID);
                  self.$video.setAttribute(
                    "src",
                    "https://player.vimeo.com/video/" +
                      self.videoID +
                      "?" +
                      playerOptionsString
                  );
                  self.$video.setAttribute("frameborder", "0");
                  self.$video.setAttribute("mozallowfullscreen", "");
                  self.$video.setAttribute("allowfullscreen", "");
                  hiddenDiv.appendChild(self.$video);
                  document.body.appendChild(hiddenDiv);
                }
                self.player =
                  self.player ||
                  new Vimeo.Player(self.$video, self.playerOptions);
                if (self.options.startTime && self.options.autoplay) {
                  self.player.setCurrentTime(self.options.startTime);
                }
                self.player.getVideoWidth().then(function (width) {
                  self.videoWidth = width || 1280;
                });
                self.player.getVideoHeight().then(function (height) {
                  self.videoHeight = height || 720;
                });
                var vmStarted = void 0;
                self.player.on("timeupdate", function (e) {
                  if (!vmStarted) {
                    self.fire("started", e);
                    vmStarted = 1;
                  }
                  self.fire("timeupdate", e);
                  if (self.options.endTime) {
                    if (
                      self.options.endTime &&
                      e.seconds >= self.options.endTime
                    ) {
                      if (self.options.loop) {
                        self.play(self.options.startTime);
                      } else {
                        self.pause();
                      }
                    }
                  }
                });
                self.player.on("play", function (e) {
                  self.fire("play", e);
                  if (self.options.startTime && e.seconds === 0) {
                    self.play(self.options.startTime);
                  }
                });
                self.player.on("pause", function (e) {
                  self.fire("pause", e);
                });
                self.player.on("ended", function (e) {
                  self.fire("ended", e);
                });
                self.player.on("loaded", function (e) {
                  self.fire("ready", e);
                });
                self.player.on("volumechange", function (e) {
                  self.fire("volumechange", e);
                });
              }
              function addSourceToLocal(element, src, type) {
                var source = document.createElement("source");
                source.src = src;
                source.type = type;
                element.appendChild(source);
              }
              if (self.type === "local") {
                if (!self.$video) {
                  self.$video = document.createElement("video");
                  if (self.options.showContols) {
                    self.$video.controls = true;
                  }
                  if (self.options.mute) {
                    self.$video.muted = true;
                  } else if (self.$video.volume) {
                    self.$video.volume = self.options.volume / 100;
                  }
                  if (self.options.loop) {
                    self.$video.loop = true;
                  }
                  self.$video.setAttribute("playsinline", "");
                  self.$video.setAttribute("webkit-playsinline", "");
                  self.$video.setAttribute("id", self.playerID);
                  hiddenDiv.appendChild(self.$video);
                  document.body.appendChild(hiddenDiv);
                  Object.keys(self.videoID).forEach(function (key) {
                    addSourceToLocal(
                      self.$video,
                      self.videoID[key],
                      "video/" + key
                    );
                  });
                }
                self.player = self.player || self.$video;
                var locStarted = void 0;
                self.player.addEventListener("playing", function (e) {
                  if (!locStarted) {
                    self.fire("started", e);
                  }
                  locStarted = 1;
                });
                self.player.addEventListener("timeupdate", function (e) {
                  self.fire("timeupdate", e);
                  if (self.options.endTime) {
                    if (
                      self.options.endTime &&
                      this.currentTime >= self.options.endTime
                    ) {
                      if (self.options.loop) {
                        self.play(self.options.startTime);
                      } else {
                        self.pause();
                      }
                    }
                  }
                });
                self.player.addEventListener("play", function (e) {
                  self.fire("play", e);
                });
                self.player.addEventListener("pause", function (e) {
                  self.fire("pause", e);
                });
                self.player.addEventListener("ended", function (e) {
                  self.fire("ended", e);
                });
                self.player.addEventListener("loadedmetadata", function () {
                  self.videoWidth = this.videoWidth || 1280;
                  self.videoHeight = this.videoHeight || 720;
                  self.fire("ready");
                  if (self.options.autoplay) {
                    self.play(self.options.startTime);
                  }
                });
                self.player.addEventListener("volumechange", function (e) {
                  self.getVolume(function (volume) {
                    self.options.volume = volume;
                  });
                  self.fire("volumechange", e);
                });
              }
              callback(self.$video);
            });
          },
        },
        {
          key: "init",
          value: function init() {
            var self = this;
            self.playerID = "VideoWorker-" + self.ID;
          },
        },
        {
          key: "loadAPI",
          value: function loadAPI() {
            var self = this;
            if (YoutubeAPIadded && VimeoAPIadded) {
              return;
            }
            var src = "";
            if (self.type === "youtube" && !YoutubeAPIadded) {
              YoutubeAPIadded = 1;
              src = "https://www.youtube.com/iframe_api";
            }
            if (self.type === "vimeo" && !VimeoAPIadded) {
              VimeoAPIadded = 1;
              src = "https://player.vimeo.com/api/player.js";
            }
            if (!src) {
              return;
            }
            var tag = document.createElement("script");
            var head = document.getElementsByTagName("head")[0];
            tag.src = src;
            head.appendChild(tag);
            head = null;
            tag = null;
          },
        },
        {
          key: "onAPIready",
          value: function onAPIready(callback) {
            var self = this;
            if (self.type === "youtube") {
              if (
                (typeof YT === "undefined" || YT.loaded === 0) &&
                !loadingYoutubePlayer
              ) {
                loadingYoutubePlayer = 1;
                window.onYouTubeIframeAPIReady = function () {
                  window.onYouTubeIframeAPIReady = null;
                  loadingYoutubeDefer.resolve("done");
                  callback();
                };
              } else if (
                (typeof YT === "undefined" ? "undefined" : _typeof(YT)) ===
                  "object" &&
                YT.loaded === 1
              ) {
                callback();
              } else {
                loadingYoutubeDefer.done(function () {
                  callback();
                });
              }
            }
            if (self.type === "vimeo") {
              if (typeof Vimeo === "undefined" && !loadingVimeoPlayer) {
                loadingVimeoPlayer = 1;
                var vimeoInterval = setInterval(function () {
                  if (typeof Vimeo !== "undefined") {
                    clearInterval(vimeoInterval);
                    loadingVimeoDefer.resolve("done");
                    callback();
                  }
                }, 20);
              } else if (typeof Vimeo !== "undefined") {
                callback();
              } else {
                loadingVimeoDefer.done(function () {
                  callback();
                });
              }
            }
            if (self.type === "local") {
              callback();
            }
          },
        },
      ]);
      return VideoWorker;
    })();
    exports.default = VideoWorker;
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = jarallaxVideo;
    var _videoWorker = __webpack_require__(8);
    var _videoWorker2 = _interopRequireDefault(_videoWorker);
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function jarallaxVideo() {
      var jarallax =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : _global2.default.jarallax;
      if (typeof jarallax === "undefined") {
        return;
      }
      var Jarallax = jarallax.constructor;
      var defInit = Jarallax.prototype.init;
      Jarallax.prototype.init = function () {
        var self = this;
        defInit.apply(self);
        if (self.video && !self.options.disableVideo()) {
          self.video.getVideo(function (video) {
            var $parent = video.parentNode;
            self.css(video, {
              position: self.image.position,
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
              width: "100%",
              height: "100%",
              maxWidth: "none",
              maxHeight: "none",
              margin: 0,
              zIndex: -1,
            });
            self.$video = video;
            self.image.$container.appendChild(video);
            $parent.parentNode.removeChild($parent);
          });
        }
      };
      var defCoverImage = Jarallax.prototype.coverImage;
      Jarallax.prototype.coverImage = function () {
        var self = this;
        var imageData = defCoverImage.apply(self);
        var node = self.image.$item ? self.image.$item.nodeName : false;
        if (
          imageData &&
          self.video &&
          node &&
          (node === "IFRAME" || node === "VIDEO")
        ) {
          var h = imageData.image.height;
          var w = (h * self.image.width) / self.image.height;
          var ml = (imageData.container.width - w) / 2;
          var mt = imageData.image.marginTop;
          if (imageData.container.width > w) {
            w = imageData.container.width;
            h = (w * self.image.height) / self.image.width;
            ml = 0;
            mt += (imageData.image.height - h) / 2;
          }
          if (node === "IFRAME") {
            h += 400;
            mt -= 200;
          }
          self.css(self.$video, {
            width: w + "px",
            marginLeft: ml + "px",
            height: h + "px",
            marginTop: mt + "px",
          });
        }
        return imageData;
      };
      var defInitImg = Jarallax.prototype.initImg;
      Jarallax.prototype.initImg = function () {
        var self = this;
        var defaultResult = defInitImg.apply(self);
        if (!self.options.videoSrc) {
          self.options.videoSrc =
            self.$item.getAttribute("data-jarallax-video") || null;
        }
        if (self.options.videoSrc) {
          self.defaultInitImgResult = defaultResult;
          return true;
        }
        return defaultResult;
      };
      var defCanInitParallax = Jarallax.prototype.canInitParallax;
      Jarallax.prototype.canInitParallax = function () {
        var self = this;
        var defaultResult = defCanInitParallax.apply(self);
        if (!self.options.videoSrc) {
          return defaultResult;
        }
        var video = new _videoWorker2.default(self.options.videoSrc, {
          autoplay: true,
          loop: self.options.videoLoop,
          showContols: false,
          startTime: self.options.videoStartTime || 0,
          endTime: self.options.videoEndTime || 0,
          mute: self.options.videoVolume ? 0 : 1,
          volume: self.options.videoVolume || 0,
        });
        if (video.isValid()) {
          if (!defaultResult) {
            if (!self.defaultInitImgResult) {
              video.getImageURL(function (url) {
                var curStyle = self.$item.getAttribute("style");
                if (curStyle) {
                  self.$item.setAttribute(
                    "data-jarallax-original-styles",
                    curStyle
                  );
                }
                self.css(self.$item, {
                  "background-image": 'url("' + url + '")',
                  "background-position": "center",
                  "background-size": "cover",
                });
              });
            }
          } else {
            video.on("ready", function () {
              if (self.options.videoPlayOnlyVisible) {
                var oldOnScroll = self.onScroll;
                self.onScroll = function () {
                  oldOnScroll.apply(self);
                  if (
                    self.options.videoLoop ||
                    (!self.options.videoLoop && !self.videoEnded)
                  ) {
                    if (self.isVisible()) {
                      video.play();
                    } else {
                      video.pause();
                    }
                  }
                };
              } else {
                video.play();
              }
            });
            video.on("started", function () {
              self.image.$default_item = self.image.$item;
              self.image.$item = self.$video;
              self.image.width = self.video.videoWidth || 1280;
              self.image.height = self.video.videoHeight || 720;
              self.coverImage();
              self.clipContainer();
              self.onScroll();
              if (self.image.$default_item) {
                self.image.$default_item.style.display = "none";
              }
            });
            video.on("ended", function () {
              self.videoEnded = true;
              if (!self.options.videoLoop) {
                if (self.image.$default_item) {
                  self.image.$item = self.image.$default_item;
                  self.image.$item.style.display = "block";
                  self.coverImage();
                  self.clipContainer();
                  self.onScroll();
                }
              }
            });
            self.video = video;
            if (!self.defaultInitImgResult) {
              if (video.type !== "local") {
                video.getImageURL(function (url) {
                  self.image.src = url;
                  self.init();
                });
                return false;
              }
              self.image.src =
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
              return true;
            }
          }
        }
        return defaultResult;
      };
      var defDestroy = Jarallax.prototype.destroy;
      Jarallax.prototype.destroy = function () {
        var self = this;
        if (self.image.$default_item) {
          self.image.$item = self.image.$default_item;
          delete self.image.$default_item;
        }
        defDestroy.apply(self);
      };
    }
  },
]);
/*!
 * Name    : Elements Extension for Jarallax
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value: value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__((__webpack_require__.s = 0));
})([
  function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(1);
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _jarallaxElement = __webpack_require__(3);
    var _jarallaxElement2 = _interopRequireDefault(_jarallaxElement);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    (0, _jarallaxElement2.default)();
    (0, _liteReady2.default)(function () {
      if (typeof jarallax !== "undefined") {
        jarallax(document.querySelectorAll("[data-jarallax-element]"));
      }
    });
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    module.exports = function (callback) {
      if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
      ) {
        callback.call();
      } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState === "interactive") callback.call();
        });
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
      }
    };
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = jarallaxElement;
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function jarallaxElement() {
      var jarallax =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : _global2.default.jarallax;
      if (typeof jarallax === "undefined") {
        return;
      }
      var Jarallax = jarallax.constructor;
      [
        "initImg",
        "canInitParallax",
        "init",
        "destroy",
        "clipContainer",
        "coverImage",
        "isVisible",
        "onScroll",
        "onResize",
      ].forEach(function (key) {
        var def = Jarallax.prototype[key];
        Jarallax.prototype[key] = function () {
          var self = this;
          var args = arguments || [];
          if (
            key === "initImg" &&
            self.$item.getAttribute("data-jarallax-element") !== null
          ) {
            self.options.type = "element";
            self.pureOptions.speed =
              self.$item.getAttribute("data-jarallax-element") ||
              self.pureOptions.speed;
          }
          if (self.options.type !== "element") {
            return def.apply(self, args);
          }
          self.pureOptions.threshold =
            self.$item.getAttribute("data-threshold") || "";
          switch (key) {
            case "init":
              var speedArr = self.pureOptions.speed.split(" ");
              self.options.speed = self.pureOptions.speed || 0;
              self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
              self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
              var thresholdArr = self.pureOptions.threshold.split(" ");
              self.options.thresholdY = thresholdArr[0]
                ? parseFloat(thresholdArr[0])
                : null;
              self.options.thresholdX = thresholdArr[1]
                ? parseFloat(thresholdArr[1])
                : null;
              break;
            case "onResize":
              var defTransform = self.css(self.$item, "transform");
              self.css(self.$item, { transform: "" });
              var rect = self.$item.getBoundingClientRect();
              self.itemData = {
                width: rect.width,
                height: rect.height,
                y: rect.top + self.getWindowData().y,
                x: rect.left,
              };
              self.css(self.$item, { transform: defTransform });
              break;
            case "onScroll":
              var wnd = self.getWindowData();
              var centerPercent =
                (wnd.y +
                  wnd.height / 2 -
                  self.itemData.y -
                  self.itemData.height / 2) /
                (wnd.height / 2);
              var moveY = centerPercent * self.options.speedY;
              var moveX = centerPercent * self.options.speedX;
              var my = moveY;
              var mx = moveX;
              if (
                self.options.thresholdY !== null &&
                moveY > self.options.thresholdY
              )
                my = 0;
              if (
                self.options.thresholdX !== null &&
                moveX > self.options.thresholdX
              )
                mx = 0;
              self.css(self.$item, {
                transform: "translate3d(" + mx + "px," + my + "px,0)",
              });
              break;
            case "initImg":
            case "isVisible":
            case "clipContainer":
            case "coverImage":
              return true;
          }
          return def.apply(self, args);
        };
      });
    }
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    (function (global) {
      var win;
      if (typeof window !== "undefined") {
        win = window;
      } else if (typeof global !== "undefined") {
        win = global;
      } else if (typeof self !== "undefined") {
        win = self;
      } else {
        win = {};
      }
      module.exports = win;
    }).call(this, __webpack_require__(5));
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
    var g;
    g = (function () {
      return this;
    })();
    try {
      g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
      if (
        (typeof window === "undefined" ? "undefined" : _typeof(window)) ===
        "object"
      )
        g = window;
    }
    module.exports = g;
  },
]);
(function ($) {
  "use strict";
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
  $(window).on("load", function () {
    var preload = $(".preloader");
    preload.find(".spinner").fadeOut(function () {
      preload.fadeOut();
    });
    $(".lines").addClass("finish");
    setTimeout(function () {
      $(".lines").addClass("ready");
    }, 1200);
  });
  if ($(".typed-subtitle").length && $(".h-subtitle p").length > 1) {
    $(".typed-subtitle").each(function () {
      var typedSpeed = $(this).data("tspeed");
      var backSpeed = $(this).data("tdelay");
      var $this = $(this)[0];
      var $string = $(this).prev(".typing-subtitle")[0];
      var typed = new Typed($this, {
        typeSpeed: typedSpeed,
        backDelay: backSpeed,
        stringsElement: $string,
        loop: true,
      });
    });
  }
  setTimeout(function () {
    $(".h-subtitles").addClass("ready");
    if ($(".typed-bread").length) {
      var typed_b = new Typed(".typed-bread", {
        stringsElement: ".typing-bread",
        showCursor: false,
      });
    }
  }, 1000);
  var url_hash = location.hash;
  var sectionElem = $(url_hash);
  if (url_hash.indexOf("#section-") == 0 && sectionElem.length) {
    $("body, html").animate({ scrollTop: $(url_hash).offset().top - 68 }, 400);
  }
  if ($(".jarallax").length) {
    $(".jarallax").jarallax();
  }
  if ($(".started-carousel").length) {
    var slider_container = $(".started-carousel .swiper-container");
    var is_autoplaytime = slider_container.data("autoplaytime");
    var is_loop = slider_container.data("loop");
    var started_slider = new Swiper(".started-carousel .swiper-container", {
      init: false,
      loop: is_loop,
      spaceBetween: 0,
      effect: "fade",
      slidesPerView: 1,
      simulateTouch: false,
      autoplay: {
        delay: is_autoplaytime,
        disableOnInteraction: false,
        waitForTransition: false,
      },
      navigation: {
        nextEl: ".started .swiper-button-next",
        prevEl: ".started .swiper-button-prev",
      },
    });
    started_slider.on("slideChange", function () {
      var index = started_slider.realIndex;
      var total = started_slider.slides.length;
      $(".started-carousel .swiper-slide").removeClass("first");
      $(".started-carousel .swiper-slide").each(function (i, slide) {
        if (index - 1 >= i) {
          $(slide).addClass("swiper-clip-active");
        } else {
          $(slide).removeClass("swiper-clip-active");
        }
      });
      $(".started-carousel .swiper-slide").each(function (i, slide) {
        $(slide).css({ "z-index": total - i });
      });
    });
    started_slider.init();
  }
  if ($(".reviews-carousel").length) {
    var is_autoplay = true;
    var rev_slider = $(".reviews-carousel .swiper-container");
    var is_loop = rev_slider.data("loop");
    var is_autoplaytime = rev_slider.data("autoplaytime");
    if (!is_autoplaytime) {
      is_autoplay = false;
    }
    var is_slidesview = rev_slider.data("slidesview");
    var is_spacebetween = rev_slider.data("spacebetween");
    var rev_slider = new Swiper(".reviews-carousel .swiper-container", {
      loop: is_loop,
      spaceBetween: is_spacebetween,
      slidesPerView: is_slidesview,
      autoplay: { delay: is_autoplaytime },
      autoplay: is_autoplay,
      navigation: {
        nextEl: ".reviews-carousel .swiper-button-next",
        prevEl: ".reviews-carousel .swiper-button-prev",
      },
      pagination: {
        el: ".reviews-carousel .swiper-pagination",
        type: "bullets",
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: is_spacebetween },
        720: { slidesPerView: is_slidesview, spaceBetween: is_spacebetween },
      },
    });
  }
  if ($(".team-carousel").length) {
    var t_is_autoplay = true;
    var team_slider = $(".team-carousel .swiper-container");
    var t_is_autoplaytime = team_slider.data("autoplaytime");
    if (!t_is_autoplaytime) {
      t_is_autoplay = false;
    }
    var t_is_loop = team_slider.data("loop");
    var t_is_slidesview = team_slider.data("slidesview");
    var t_is_spacebetween = team_slider.data("spacebetween");
    var team_slider = new Swiper(".team-carousel .swiper-container", {
      loop: t_is_loop,
      spaceBetween: t_is_spacebetween,
      slidesPerView: t_is_slidesview,
      autoplay: { delay: t_is_autoplaytime },
      autoplay: t_is_autoplay,
      navigation: {
        nextEl: ".team-carousel .swiper-button-next",
        prevEl: ".team-carousel .swiper-button-prev",
      },
      pagination: { el: ".team-carousel .swiper-pagination", type: "bullets" },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: t_is_spacebetween },
        720: {
          slidesPerView: t_is_slidesview,
          spaceBetween: t_is_spacebetween,
        },
      },
    });
  }
  var skin_dir = $(".mode-switch-btn").data("ui-dir") + "/assets/css/";
  var skin_ui = $(".mode-switch-btn").data("ui");
  var skin = $.cookie("skin");
  if (skin != undefined) {
    if (skin_ui == "1") {
      $("#mode-switch-radio").prop("checked", true);
    }
    if (skin_ui == "0") {
      $("#mode-switch-radio").prop("checked", false);
    }
  }
  if (skin_ui != undefined) {
    if (skin == "1") {
      if ($("#cvio-light-css").length) {
        $("#cvio-light-css").attr("href", skin_dir + "light.css");
      } else {
        $("head").append(
          '<link rel="stylesheet" id="cvio-light-css" type="text/css" href="' +
            skin_dir +
            "light.css" +
            '">'
        );
      }
      $("#cvio-light-css").prop("checked", true);
    }
    if (skin == "0") {
      $("#cvio-light-css").attr("href", "");
      $("#mode-switch-radio").prop("checked", false);
    }
  }
  $("#mode-switch-radio").on("change", function () {
    if (this.checked) {
      $.cookie("skin", "1", { expires: 7, path: "/" });
      $("#mode-switch-radio").prop("checked", true);
      if ($("#cvio-light-css").length) {
        $("#cvio-light-css").attr("href", skin_dir + "light.css");
      } else {
        $("head").append(
          '<link rel="stylesheet" id="cvio-light-css" type="text/css" href="' +
            skin_dir +
            "light.css" +
            '">'
        );
      }
    } else {
      $.cookie("skin", "0", { expires: 7, path: "/" });
      $("#mode-switch-radio").prop("checked", false);
      $("#cvio-light-css").attr("href", "");
    }
  });
  var width = $(window).width();
  var height = $(window).height();
  $(".section.started").css({ height: height });
  $(".logged-in .section.started").css({ height: height - 32 });
  if (width < 783) {
    $(".section.started").css({ height: height });
    $(".logged-in .section.started").css({ height: height - 46 });
  }
  if ($(".section.started").hasClass("background-enabled")) {
    $("body").addClass("background-enabled");
  }
  if ($("#grained_container").length) {
    var grained_options = {
      animate: true,
      patternWidth: 400,
      patternHeight: 400,
      grainOpacity: 0.15,
      grainDensity: 3,
      grainWidth: 1,
      grainHeight: 1,
    };
    grained("#grained_container", grained_options);
  }
  if (width > 1199 && $(".cursor-follower").length) {
    $(window).on("mousemove", function (e) {
      var x = e.pageX;
      var y = e.pageY;
      var newposX = x;
      var newposY = y;
      $(".cursor-follower").css(
        "transform",
        "translate3d(" + newposX + "px," + newposY + "px,0px)"
      );
    });
    $("a, .btn-group").on({
      mouseenter: function (e) {
        cursor_over();
      },
      mouseleave: function (e) {
        cursor_out();
      },
    });
  }
  function cursor_over() {
    $(".cursor-follower-inner")
      .stop()
      .animate(
        { width: 86, height: 86, opacity: 0.1, margin: "-43px 0 0 -43px" },
        500
      );
  }
  function cursor_out() {
    $(".cursor-follower-inner")
      .stop()
      .animate(
        { width: 26, height: 26, opacity: 0.4, margin: "-13px 0 0 -13px" },
        500
      );
  }
  $(".hover-masks a").each(function () {
    var mask_val = $(this).html();
    $(this).wrapInner('<span class="mask-lnk"></span>');
    $(this).append(
      '<span class="mask-lnk mask-lnk-hover">' + mask_val + "</span>"
    );
  });
  $(".hover-animated .circle").on({
    mouseenter: function (e) {
      if ($(this).find(".ink").length === 0) {
        $(this).prepend("<span class='ink'></span>");
      }
      var ink = $(this).find(".ink");
      ink.removeClass("animate");
      if (!ink.height() && !ink.width()) {
        var d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({ height: d, width: d });
      }
      var x = e.pageX - $(this).offset().left - ink.width() / 2;
      var y = e.pageY - $(this).offset().top - ink.height() / 2;
      ink.css({ top: y + "px", left: x + "px" }).addClass("ink-animate");
      $(".cursor-follower").addClass("hide");
    },
    mouseleave: function (e) {
      var ink = $(this).find(".ink");
      var x = e.pageX - $(this).offset().left - ink.width() / 2;
      var y = e.pageY - $(this).offset().top - ink.height() / 2;
      ink.css({ top: y + "px", left: x + "px" }).removeClass("ink-animate");
      $(".cursor-follower").removeClass("hide");
    },
  });
  $("header .top-menu, .typed-bread, .popup-box .bts, .animate-to-page").on(
    "click",
    "a",
    function () {
      var link = $(this).attr("href");
      if (link.indexOf("#section-") == 0) {
        if (!$("body").hasClass("home")) {
          location.href = "/" + link;
        }
        $("body, html").animate({ scrollTop: $(link).offset().top - 68 }, 400);
        if ($("header").hasClass("active")) {
          $(".menu-btn").trigger("click");
        }
      } else {
        if (!$(this).parent().hasClass("new-tab-link")) {
          $(".lines").removeClass("finish");
          $(".lines").removeClass("ready");
          $(".lines").addClass("no-lines");
          setTimeout(function () {
            location.href = "" + link;
          }, 800);
        }
      }
      if (!$(this).parent().hasClass("new-tab-link")) {
        return false;
      }
    }
  );
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= $(".section.started").height()) {
      $("body").removeClass("background-enabled");
    } else {
      if ($(".section.started").hasClass("background-enabled")) {
        $("body").addClass("background-enabled");
      }
    }
    if ($(this).scrollTop() >= 100 && $(".section").length > 1) {
      $(".header").addClass("fixed");
      $(".footer").addClass("fixed");
      $("body").removeClass("background-enabled");
      $(".mouse_btn").fadeOut();
    }
    if ($(this).scrollTop() <= 100 && $(".section").length > 1) {
      $(".header").removeClass("fixed");
      $(".footer").removeClass("fixed");
      $(".mouse_btn").fadeIn();
    }
    if (
      $(this).scrollTop() <= 100 &&
      $(".section").length > 1 &&
      $(".section.started").hasClass("background-enabled")
    ) {
      $("body").addClass("background-enabled");
    }
  });
  $("header").on("click", ".menu-btn", function () {
    if ($("header").hasClass("active")) {
      $("header").removeClass("active");
      $(".footer .soc").fadeIn();
      $("body").addClass("loaded");
      if ($(".video-bg").length) {
        $("body").addClass("background-enabled");
      }
    } else {
      $("header").addClass("active");
      $(".footer .soc").hide();
      $("body").removeClass("loaded");
      $("body").removeClass("background-enabled");
    }
    return false;
  });
  $(".top-menu li.menu-item-has-children").each(function () {
    $(this).append('<span class="open-lnk"></span>');
  });
  $(".top-menu").on("click", ".open-lnk", function () {
    if ($(this).closest("li").hasClass("menu-item-has-children")) {
      if ($(this).closest("li").hasClass("active")) {
        $(this).closest("li").removeClass("active");
        $(this).closest("li").find("> ul").slideUp();
      } else {
        $(this).closest("li").addClass("active");
        $(this).closest("li").find("> ul").slideDown();
      }
    }
  });
  $(".section.about").on("click touchstart", ".btn", function () {
    location.href = $(this).attr("href");
  });
  $(".section").on("click", ".mouse_btn", function () {
    $("body, html").animate({ scrollTop: height - 150 }, 800);
  });
  if ($(".section").length > 1) {
    $(".mouse_btn").show();
  }
  var $container = $(".portfolio-items");
  $container.imagesLoaded(function () {
    $container.isotope({ percentPosition: true, itemSelector: ".box-item" });
    $(document).on("lazyloaded", function (e) {
      $container.isotope("reloadItems").isotope();
    });
    if ($(".portfolio-items.portfolio-new").length) {
      var s_parallax = document.getElementsByClassName("wp-post-image");
      new simpleParallax(s_parallax);
    }
  });
  $(".filters").on("click", ".btn-group", function () {
    var filterValue = $(this).find("input").val();
    $container.isotope({ filter: filterValue });
    $(".filters .btn-group label").removeClass("glitch-effect");
    $(this).find("label").addClass("glitch-effect");
  });
  if (
    /\.(?:jpg|jpeg|gif|png)$/i.test($(".gallery-item:first a").attr("href"))
  ) {
    $(".gallery-item a").magnificPopup({
      gallery: { enabled: true },
      type: "image",
      closeBtnInside: false,
      mainClass: "mfp-fade",
    });
  }
  $(".has-popup-media").magnificPopup({
    type: "inline",
    overflowY: "auto",
    closeBtnInside: true,
    mainClass: "mfp-fade",
  });
  $(".has-popup-image").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-fade",
    image: { verticalFit: true },
  });
  $(".has-popup-video").magnificPopup({
    disableOn: 700,
    type: "iframe",
    iframe: {
      patterns: {
        youtube_short: {
          index: "youtu.be/",
          id: "youtu.be/",
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
    },
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    mainClass: "mfp-fade",
    callbacks: {
      markupParse: function (template, values, item) {
        template.find("iframe").attr("allow", "autoplay");
      },
    },
  });
  $(".has-popup-music").magnificPopup({
    disableOn: 700,
    type: "iframe",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    mainClass: "mfp-fade",
  });
  $(".has-popup-gallery").on("click", function () {
    var gallery = $(this).attr("href");
    $(gallery)
      .magnificPopup({
        delegate: "a",
        type: "image",
        closeOnContentClick: false,
        mainClass: "mfp-fade",
        removalDelay: 160,
        fixedContentPos: false,
        gallery: { enabled: true },
        callbacks: {
          markupParse: function (template, values, item) {
            values.title = item.el.attr("title");
          },
        },
      })
      .magnificPopup("open");
    return false;
  });
  if ($(".jarallax-video").length) {
    $("body").addClass("background-enabled");
    $(".jarallax-video").jarallax();
  }
  if ($(".section").length && $(".top-menu li a").length) {
    $(window).on("scroll", function () {
      var scrollPos = $(window).scrollTop();
      $(".top-menu ul li a").each(function () {
        if ($(this).attr("href").indexOf("#section-") == 0) {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.length) {
            if (refElement.offset().top <= scrollPos + 70) {
              $(".top-menu ul li").removeClass("current-menu-item");
              currLink.closest("li").addClass("current-menu-item");
            }
          }
          if (scrollPos == 0) {
            $(".top-menu ul li").removeClass("current-menu-item");
          }
        }
      });
    });
  }
  $(".single-post-text").each(function () {
    $(this).find("iframe").wrap('<div class="embed-container"></div>');
  });
  function skills() {
    var skills_dotted = $(".skills.dotted .progress");
    var skills_dotted_w = skills_dotted.width();
    if (skills_dotted.length) {
      skills_dotted.append(
        '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
      );
      skills_dotted
        .find(".percentage")
        .append(
          '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
        );
      skills_dotted.find(".percentage .da").css({ width: skills_dotted_w });
    }
  }
  skills();
  var skills_circles = $(".skills.circles .progress");
  if (skills_circles.length) {
    skills_circles.append(
      '<div class="slice"><div class="bar"></div><div class="fill"></div></div>'
    );
  }
  if (width < 1024) {
    $(".header").on("click", ".cart-btn", function () {
      if ($(this).hasClass("active")) {
        $(this).find(".cart-widget").removeClass("is-active");
        $(this).removeClass("active");
      } else {
        $(this).find(".cart-widget").addClass("is-active");
        $(this).addClass("active");
      }
    });
  }
  $(window).resize(function () {
    var width = $(window).width();
    var height = $(window).height();
    $(".section.started").css({ height: height });
    $(".logged-in .section.started").css({ height: height - 32 });
    if (width < 783) {
      $(".section.started").css({ height: height });
      $(".logged-in .section.started").css({ height: height - 46 });
    }
    var skills_dotted = $(".skills-list.dotted .progress");
    var skills_dotted_w = skills_dotted.width();
    if (skills_dotted.length) {
      skills_dotted.find(".percentage .da").css({ width: skills_dotted_w + 1 });
    }
  });
  if ($("#map").length) {
    initMap();
  }
})(jQuery);
function initMap() {
  var myLatlng = new google.maps.LatLng(48.859003, 2.345275);
  var styles = [
    {
      stylers: [
        { hue: "#ff1a00" },
        { invert_lightness: true },
        { saturation: -100 },
        { lightness: 33 },
        { gamma: 0.5 },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#2D333C" }],
    },
    { elementType: "labels", stylers: [{ visibility: "off" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    {
      featureType: "administrative.land_parcel",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative.neighborhood",
      stylers: [{ visibility: "off" }],
    },
  ];
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
    mapTypeControl: false,
    disableDefaultUI: true,
    zoomControl: false,
    scrollwheel: false,
    styles: styles,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
/*! elementor - v3.23.0 - 25-07-2024 */
(() => {
  "use strict";
  var e,
    r,
    _,
    t,
    a,
    i = {},
    n = {};
  function __webpack_require__(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var _ = (n[e] = { exports: {} });
    return i[e].call(_.exports, _, _.exports, __webpack_require__), _.exports;
  }
  (__webpack_require__.m = i),
    (e = []),
    (__webpack_require__.O = (r, _, t, a) => {
      if (!_) {
        var i = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [_, t, a] = e[u], n = !0, c = 0; c < _.length; c++)
            (!1 & a || i >= a) &&
            Object.keys(__webpack_require__.O).every((e) =>
              __webpack_require__.O[e](_[c])
            )
              ? _.splice(c--, 1)
              : ((n = !1), a < i && (i = a));
          if (n) {
            e.splice(u--, 1);
            var o = t();
            void 0 !== o && (r = o);
          }
        }
        return r;
      }
      a = a || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
      e[u] = [_, t, a];
    }),
    (_ = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (__webpack_require__.t = function (e, t) {
      if ((1 & t && (e = this(e)), 8 & t)) return e;
      if ("object" == typeof e && e) {
        if (4 & t && e.__esModule) return e;
        if (16 & t && "function" == typeof e.then) return e;
      }
      var a = Object.create(null);
      __webpack_require__.r(a);
      var i = {};
      r = r || [null, _({}), _([]), _(_)];
      for (var n = 2 & t && e; "object" == typeof n && !~r.indexOf(n); n = _(n))
        Object.getOwnPropertyNames(n).forEach((r) => (i[r] = () => e[r]));
      return (i.default = () => e), __webpack_require__.d(a, i), a;
    }),
    (__webpack_require__.d = (e, r) => {
      for (var _ in r)
        __webpack_require__.o(r, _) &&
          !__webpack_require__.o(e, _) &&
          Object.defineProperty(e, _, { enumerable: !0, get: r[_] });
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = (e) =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce(
          (r, _) => (__webpack_require__.f[_](e, r), r),
          []
        )
      )),
    (__webpack_require__.u = (e) =>
      723 === e
        ? "lightbox.26bf6b6c4232d8789c0e.bundle.min.js"
        : 48 === e
        ? "text-path.2bc8a9cd0e50cf1a5a9c.bundle.min.js"
        : 209 === e
        ? "accordion.8799675460c73eb48972.bundle.min.js"
        : 745 === e
        ? "alert.cbc2a0fee74ee3ed0419.bundle.min.js"
        : 120 === e
        ? "counter.02cef29c589e742d4c8c.bundle.min.js"
        : 192 === e
        ? "progress.985f012a6336ab21cb44.bundle.min.js"
        : 520 === e
        ? "tabs.c2af5be7f9cb3cdcf3d5.bundle.min.js"
        : 181 === e
        ? "toggle.31881477c45ff5cf9d4d.bundle.min.js"
        : 791 === e
        ? "video.78c625e89ab767d621c5.bundle.min.js"
        : 268 === e
        ? "image-carousel.4455c6362492d9067512.bundle.min.js"
        : 357 === e
        ? "text-editor.2c35aafbe5bf0e127950.bundle.min.js"
        : 52 === e
        ? "wp-audio.75f0ced143febb8cd31a.bundle.min.js"
        : 413 === e
        ? "container.c65a2a923085e1120e75.bundle.min.js"
        : void 0),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = (e, r) =>
      Object.prototype.hasOwnProperty.call(e, r)),
    (t = {}),
    (a = "elementor:"),
    (__webpack_require__.l = (e, r, _, i) => {
      if (t[e]) t[e].push(r);
      else {
        var n, c;
        if (void 0 !== _)
          for (
            var o = document.getElementsByTagName("script"), u = 0;
            u < o.length;
            u++
          ) {
            var b = o[u];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == a + _
            ) {
              n = b;
              break;
            }
          }
        n ||
          ((c = !0),
          ((n = document.createElement("script")).charset = "utf-8"),
          (n.timeout = 120),
          __webpack_require__.nc &&
            n.setAttribute("nonce", __webpack_require__.nc),
          n.setAttribute("data-webpack", a + _),
          (n.src = e)),
          (t[e] = [r]);
        var onScriptComplete = (r, _) => {
            (n.onerror = n.onload = null), clearTimeout(p);
            var a = t[e];
            if (
              (delete t[e],
              n.parentNode && n.parentNode.removeChild(n),
              a && a.forEach((e) => e(_)),
              r)
            )
              return r(_);
          },
          p = setTimeout(
            onScriptComplete.bind(null, void 0, { type: "timeout", target: n }),
            12e4
          );
        (n.onerror = onScriptComplete.bind(null, n.onerror)),
          (n.onload = onScriptComplete.bind(null, n.onload)),
          c && document.head.appendChild(n);
      }
    }),
    (__webpack_require__.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      __webpack_require__.g.importScripts &&
        (e = __webpack_require__.g.location + "");
      var r = __webpack_require__.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var _ = r.getElementsByTagName("script");
        if (_.length) for (var t = _.length - 1; t > -1 && !e; ) e = _[t--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (__webpack_require__.p = e);
    })(),
    (() => {
      var e = { 162: 0 };
      (__webpack_require__.f.j = (r, _) => {
        var t = __webpack_require__.o(e, r) ? e[r] : void 0;
        if (0 !== t)
          if (t) _.push(t[2]);
          else if (162 != r) {
            var a = new Promise((_, a) => (t = e[r] = [_, a]));
            _.push((t[2] = a));
            var i = __webpack_require__.p + __webpack_require__.u(r),
              n = new Error();
            __webpack_require__.l(
              i,
              (_) => {
                if (
                  __webpack_require__.o(e, r) &&
                  (0 !== (t = e[r]) && (e[r] = void 0), t)
                ) {
                  var a = _ && ("load" === _.type ? "missing" : _.type),
                    i = _ && _.target && _.target.src;
                  (n.message =
                    "Loading chunk " + r + " failed.\n(" + a + ": " + i + ")"),
                    (n.name = "ChunkLoadError"),
                    (n.type = a),
                    (n.request = i),
                    t[1](n);
                }
              },
              "chunk-" + r,
              r
            );
          } else e[r] = 0;
      }),
        (__webpack_require__.O.j = (r) => 0 === e[r]);
      var webpackJsonpCallback = (r, _) => {
          var t,
            a,
            [i, n, c] = _,
            o = 0;
          if (i.some((r) => 0 !== e[r])) {
            for (t in n)
              __webpack_require__.o(n, t) && (__webpack_require__.m[t] = n[t]);
            if (c) var u = c(__webpack_require__);
          }
          for (r && r(_); o < i.length; o++)
            (a = i[o]),
              __webpack_require__.o(e, a) && e[a] && e[a][0](),
              (e[a] = 0);
          return __webpack_require__.O(u);
        },
        r = (self.webpackChunkelementor = self.webpackChunkelementor || []);
      r.forEach(webpackJsonpCallback.bind(null, 0)),
        (r.push = webpackJsonpCallback.bind(null, r.push.bind(r)));
    })();
})();
/*! elementor - v3.23.0 - 25-07-2024 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
  [354],
  {
    381: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = (e, t) => {
        t = Array.isArray(t) ? t : [t];
        for (const n of t)
          if (e.constructor.name === n.prototype[Symbol.toStringTag]) return !0;
        return !1;
      };
    },
    8135: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.ViewModule {
        getDefaultSettings() {
          return {
            selectors: {
              elements: ".elementor-element",
              nestedDocumentElements: ".elementor .elementor-element",
            },
            classes: { editMode: "elementor-edit-mode" },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return {
            $elements: this.$element
              .find(e.elements)
              .not(this.$element.find(e.nestedDocumentElements)),
          };
        }
        getDocumentSettings(e) {
          let t;
          if (this.isEdit) {
            t = {};
            const e = elementor.settings.page.model;
            jQuery.each(e.getActiveControls(), (n) => {
              t[n] = e.attributes[n];
            });
          } else t = this.$element.data("elementor-settings") || {};
          return this.getItems(t, e);
        }
        runElementsHandlers() {
          this.elements.$elements.each((e, t) =>
            setTimeout(() =>
              elementorFrontend.elementsHandler.runReadyTrigger(t)
            )
          );
        }
        onInit() {
          (this.$element = this.getSettings("$element")),
            super.onInit(),
            (this.isEdit = this.$element.hasClass(
              this.getSettings("classes.editMode")
            )),
            this.isEdit
              ? elementor.on("document:loaded", () => {
                  elementor.settings.page.model.on(
                    "change",
                    this.onSettingsChange.bind(this)
                  );
                })
              : this.runElementsHandlers();
        }
        onSettingsChange() {}
      }
      t.default = _default;
    },
    6752: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(3090));
      class NestedTitleKeyboardHandler extends s.default {
        __construct(e) {
          super.__construct(e),
            (this.directionNext = "next"),
            (this.directionPrevious = "previous"),
            (this.focusableElementSelector =
              'audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], [contenteditable], [href], [tabindex]:not([tabindex="-1"])');
        }
        getWidgetNumber() {
          return this.$element
            .find("> .elementor-widget-container > .e-n-tabs, > .e-n-tabs")
            .attr("data-widget-number");
        }
        getDefaultSettings() {
          return {
            selectors: {
              itemTitle: `[id*="e-n-tab-title-${this.getWidgetNumber()}"]`,
              itemContainer: `[id*="e-n-tab-content-${this.getWidgetNumber()}"]`,
            },
            ariaAttributes: {
              titleStateAttribute: "aria-selected",
              activeTitleSelector: '[aria-selected="true"]',
            },
            datasets: { titleIndex: "data-tab-index" },
            keyDirection: {
              ArrowLeft: elementorFrontendConfig.is_rtl
                ? this.directionNext
                : this.directionPrevious,
              ArrowUp: this.directionPrevious,
              ArrowRight: elementorFrontendConfig.is_rtl
                ? this.directionPrevious
                : this.directionNext,
              ArrowDown: this.directionNext,
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return {
            $itemTitles: this.findElement(e.itemTitle),
            $itemContainers: this.findElement(e.itemContainer),
            $focusableContainerElements: this.getFocusableElements(
              this.findElement(e.itemContainer)
            ),
          };
        }
        getFocusableElements(e) {
          return e
            .find(this.focusableElementSelector)
            .not("[disabled], [inert]");
        }
        getKeyDirectionValue(e) {
          const t = this.getSettings("keyDirection")[e.key];
          return this.directionNext === t ? 1 : -1;
        }
        getTitleIndex(e) {
          const { titleIndex: t } = this.getSettings("datasets");
          return e.getAttribute(t);
        }
        getTitleFilterSelector(e) {
          const { titleIndex: t } = this.getSettings("datasets");
          return `[${t}="${e}"]`;
        }
        getActiveTitleElement() {
          const e = this.getSettings("ariaAttributes").activeTitleSelector;
          return this.elements.$itemTitles.filter(e);
        }
        onInit() {
          super.onInit(...arguments);
        }
        bindEvents() {
          this.elements.$itemTitles.on(this.getTitleEvents()),
            this.elements.$focusableContainerElements.on(
              this.getContentElementEvents()
            );
        }
        unbindEvents() {
          this.elements.$itemTitles.off(this.getTitleEvents()),
            this.elements.$focusableContainerElements
              .children()
              .off(this.getContentElementEvents());
        }
        getTitleEvents() {
          return { keydown: this.handleTitleKeyboardNavigation.bind(this) };
        }
        getContentElementEvents() {
          return {
            keydown: this.handleContentElementKeyboardNavigation.bind(this),
          };
        }
        isDirectionKey(e) {
          return [
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
          ].includes(e.key);
        }
        isActivationKey(e) {
          return ["Enter", " "].includes(e.key);
        }
        handleTitleKeyboardNavigation(e) {
          if (this.isDirectionKey(e)) {
            e.preventDefault();
            const t = parseInt(this.getTitleIndex(e.currentTarget)) || 1,
              n = this.elements.$itemTitles.length,
              i = this.getTitleIndexFocusUpdated(e, t, n);
            this.changeTitleFocus(i), e.stopPropagation();
          } else if (this.isActivationKey(e)) {
            if ((e.preventDefault(), this.handeTitleLinkEnterOrSpaceEvent(e)))
              return;
            const t = this.getTitleIndex(e.currentTarget);
            elementorFrontend.elements.$window.trigger(
              "elementor/nested-elements/activate-by-keyboard",
              { widgetId: this.getID(), titleIndex: t }
            );
          } else "Escape" === e.key && this.handleTitleEscapeKeyEvents(e);
        }
        handeTitleLinkEnterOrSpaceEvent(e) {
          const t = "a" === e?.currentTarget?.tagName?.toLowerCase();
          return (
            !elementorFrontend.isEditMode() &&
              t &&
              (e?.currentTarget?.click(), e.stopPropagation()),
            t
          );
        }
        getTitleIndexFocusUpdated(e, t, n) {
          let i = 0;
          switch (e.key) {
            case "Home":
              i = 1;
              break;
            case "End":
              i = n;
              break;
            default:
              const s = this.getKeyDirectionValue(e);
              i = n < t + s ? 1 : 0 === t + s ? n : t + s;
          }
          return i;
        }
        changeTitleFocus(e) {
          const t = this.elements.$itemTitles.filter(
            this.getTitleFilterSelector(e)
          );
          this.setTitleTabindex(e), t.trigger("focus");
        }
        setTitleTabindex(e) {
          this.elements.$itemTitles.attr("tabindex", "-1");
          this.elements.$itemTitles
            .filter(this.getTitleFilterSelector(e))
            .attr("tabindex", "0");
        }
        handleTitleEscapeKeyEvents() {}
        handleContentElementKeyboardNavigation(e) {
          "Tab" !== e.key || e.shiftKey
            ? "Escape" === e.key &&
              (e.preventDefault(),
              e.stopPropagation(),
              this.handleContentElementEscapeEvents(e))
            : this.handleContentElementTabEvents(e);
        }
        handleContentElementEscapeEvents() {
          this.getActiveTitleElement().trigger("focus");
        }
        handleContentElementTabEvents() {}
      }
      t.default = NestedTitleKeyboardHandler;
    },
    1292: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(2821));
      class CarouselHandlerBase extends s.default {
        getDefaultSettings() {
          return {
            selectors: {
              carousel: `.${elementorFrontend.config.swiperClass}`,
              swiperWrapper: ".swiper-wrapper",
              slideContent: ".swiper-slide",
              swiperArrow: ".elementor-swiper-button",
              paginationWrapper: ".swiper-pagination",
              paginationBullet: ".swiper-pagination-bullet",
              paginationBulletWrapper: ".swiper-pagination-bullets",
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors"),
            t = {
              $swiperContainer: this.$element.find(e.carousel),
              $swiperWrapper: this.$element.find(e.swiperWrapper),
              $swiperArrows: this.$element.find(e.swiperArrow),
              $paginationWrapper: this.$element.find(e.paginationWrapper),
              $paginationBullets: this.$element.find(e.paginationBullet),
              $paginationBulletWrapper: this.$element.find(
                e.paginationBulletWrapper
              ),
            };
          return (t.$slides = t.$swiperContainer.find(e.slideContent)), t;
        }
        getSwiperSettings() {
          const e = this.getElementSettings(),
            t = +e.slides_to_show || 3,
            n = 1 === t,
            i = elementorFrontend.config.responsive.activeBreakpoints,
            s = { mobile: 1, tablet: n ? 1 : 2 },
            r = {
              slidesPerView: t,
              loop: "yes" === e.infinite,
              speed: e.speed,
              handleElementorBreakpoints: !0,
              breakpoints: {},
            };
          let o = t;
          Object.keys(i)
            .reverse()
            .forEach((t) => {
              const n = s[t] ? s[t] : o;
              (r.breakpoints[i[t].value] = {
                slidesPerView: +e["slides_to_show_" + t] || n,
                slidesPerGroup: +e["slides_to_scroll_" + t] || 1,
              }),
                e.image_spacing_custom &&
                  (r.breakpoints[i[t].value].spaceBetween =
                    this.getSpaceBetween(t)),
                (o = +e["slides_to_show_" + t] || n);
            }),
            "yes" === e.autoplay &&
              (r.autoplay = {
                delay: e.autoplay_speed,
                disableOnInteraction: "yes" === e.pause_on_interaction,
              }),
            n
              ? ((r.effect = e.effect),
                "fade" === e.effect && (r.fadeEffect = { crossFade: !0 }))
              : (r.slidesPerGroup = +e.slides_to_scroll || 1),
            e.image_spacing_custom && (r.spaceBetween = this.getSpaceBetween());
          const a = "arrows" === e.navigation || "both" === e.navigation,
            l =
              "dots" === e.navigation ||
              "both" === e.navigation ||
              e.pagination;
          return (
            a &&
              (r.navigation = {
                prevEl: ".elementor-swiper-button-prev",
                nextEl: ".elementor-swiper-button-next",
              }),
            l &&
              (r.pagination = {
                el: `.elementor-element-${this.getID()} .swiper-pagination`,
                type: e.pagination ? e.pagination : "bullets",
                clickable: !0,
                renderBullet: (e, t) =>
                  `<span class="${t}" data-bullet-index="${e}" aria-label="${
                    elementorFrontend.config.i18n
                      .a11yCarouselPaginationBulletMessage
                  } ${e + 1}"></span>`,
              }),
            "yes" === e.lazyload &&
              (r.lazy = { loadPrevNext: !0, loadPrevNextAmount: 1 }),
            (r.a11y = {
              enabled: !0,
              prevSlideMessage:
                elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,
              nextSlideMessage:
                elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,
              firstSlideMessage:
                elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,
              lastSlideMessage:
                elementorFrontend.config.i18n.a11yCarouselLastSlideMessage,
            }),
            (r.on = {
              slideChangeTransitionEnd: () => {
                this.a11ySetSlideAriaHidden();
              },
              slideChange: () => {
                this.a11ySetPaginationTabindex(), this.handleElementHandlers();
              },
              init: () => {
                this.a11ySetWidgetAriaDetails(),
                  this.a11ySetPaginationTabindex(),
                  this.a11ySetSlideAriaHidden("initialisation");
              },
            }),
            this.applyOffsetSettings(e, r, t),
            r
          );
        }
        getOffsetWidth() {
          const e = elementorFrontend.getCurrentDeviceMode();
          return (
            elementorFrontend.utils.controls.getResponsiveControlValue(
              this.getElementSettings(),
              "offset_width",
              "size",
              e
            ) || 0
          );
        }
        applyOffsetSettings(e, t, n) {
          const i = e.offset_sides;
          if (
            !(
              elementorFrontend.isEditMode() &&
              "NestedCarousel" === this.constructor.name
            ) &&
            i &&
            "none" !== i
          )
            switch (i) {
              case "right":
                this.forceSliderToShowNextSlideWhenOnLast(t, n),
                  this.addClassToSwiperContainer("offset-right");
                break;
              case "left":
                this.addClassToSwiperContainer("offset-left");
                break;
              case "both":
                this.forceSliderToShowNextSlideWhenOnLast(t, n),
                  this.addClassToSwiperContainer("offset-both");
            }
        }
        forceSliderToShowNextSlideWhenOnLast(e, t) {
          e.slidesPerView = t + 0.001;
        }
        addClassToSwiperContainer(e) {
          this.getDefaultElements().$swiperContainer[0].classList.add(e);
        }
        async onInit() {
          if (
            (super.onInit(...arguments),
            !this.elements.$swiperContainer.length ||
              2 > this.elements.$slides.length)
          )
            return;
          await this.initSwiper();
          "yes" === this.getElementSettings().pause_on_hover &&
            this.togglePauseOnHover(!0);
        }
        async initSwiper() {
          const e = elementorFrontend.utils.swiper;
          (this.swiper = await new e(
            this.elements.$swiperContainer,
            this.getSwiperSettings()
          )),
            this.elements.$swiperContainer.data("swiper", this.swiper);
        }
        bindEvents() {
          this.elements.$swiperArrows.on(
            "keydown",
            this.onDirectionArrowKeydown.bind(this)
          ),
            this.elements.$paginationWrapper.on(
              "keydown",
              ".swiper-pagination-bullet",
              this.onDirectionArrowKeydown.bind(this)
            ),
            this.elements.$swiperContainer.on(
              "keydown",
              ".swiper-slide",
              this.onDirectionArrowKeydown.bind(this)
            ),
            this.$element
              .find(":focusable")
              .on("focus", this.onFocusDisableAutoplay.bind(this)),
            elementorFrontend.elements.$window.on(
              "resize",
              this.getSwiperSettings.bind(this)
            );
        }
        unbindEvents() {
          this.elements.$swiperArrows.off(),
            this.elements.$paginationWrapper.off(),
            this.elements.$swiperContainer.off(),
            this.$element.find(":focusable").off(),
            elementorFrontend.elements.$window.off("resize");
        }
        onDirectionArrowKeydown(e) {
          const t = elementorFrontend.config.is_rtl,
            n = e.originalEvent.code,
            i = t ? "ArrowLeft" : "ArrowRight";
          if (!(-1 !== ["ArrowLeft", "ArrowRight"].indexOf(n))) return !0;
          (t ? "ArrowRight" : "ArrowLeft") === n
            ? this.swiper.slidePrev()
            : i === n && this.swiper.slideNext();
        }
        onFocusDisableAutoplay() {
          this.swiper.autoplay.stop();
        }
        updateSwiperOption(e) {
          const t = this.getElementSettings()[e],
            n = this.swiper.params;
          switch (e) {
            case "autoplay_speed":
              n.autoplay.delay = t;
              break;
            case "speed":
              n.speed = t;
          }
          this.swiper.update();
        }
        getChangeableProperties() {
          return {
            pause_on_hover: "pauseOnHover",
            autoplay_speed: "delay",
            speed: "speed",
            arrows_position: "arrows_position",
          };
        }
        onElementChange(e) {
          if (0 === e.indexOf("image_spacing_custom"))
            return void this.updateSpaceBetween(e);
          if (this.getChangeableProperties()[e])
            if ("pause_on_hover" === e) {
              const e = this.getElementSettings("pause_on_hover");
              this.togglePauseOnHover("yes" === e);
            } else this.updateSwiperOption(e);
        }
        onEditSettingsChange(e) {
          "activeItemIndex" === e &&
            this.swiper.slideToLoop(
              this.getEditSettings("activeItemIndex") - 1
            );
        }
        getSpaceBetween() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          return (
            elementorFrontend.utils.controls.getResponsiveControlValue(
              this.getElementSettings(),
              "image_spacing_custom",
              "size",
              e
            ) || 0
          );
        }
        updateSpaceBetween(e) {
          const t = e.match("image_spacing_custom_(.*)"),
            n = t ? t[1] : "desktop",
            i = this.getSpaceBetween(n);
          "desktop" !== n &&
            (this.swiper.params.breakpoints[
              elementorFrontend.config.responsive.activeBreakpoints[n].value
            ].spaceBetween = i),
            (this.swiper.params.spaceBetween = i),
            this.swiper.update();
        }
        getPaginationBullets() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "array";
          const t = this.$element.find(
            this.getSettings("selectors").paginationBullet
          );
          return "array" === e ? Array.from(t) : t;
        }
        a11ySetWidgetAriaDetails() {
          const e = this.$element;
          e.attr("aria-roledescription", "carousel"),
            e.attr(
              "aria-label",
              elementorFrontend.config.i18n.a11yCarouselWrapperAriaLabel
            );
        }
        a11ySetPaginationTabindex() {
          const e = this.swiper?.params?.pagination.bulletClass,
            t = this.swiper?.params?.pagination.bulletActiveClass;
          this.getPaginationBullets().forEach((e) => {
            e.classList?.contains(t) || e.removeAttribute("tabindex");
          });
          const n = "ArrowLeft" === event?.code || "ArrowRight" === event?.code;
          event?.target?.classList?.contains(e) &&
            n &&
            this.$element.find(`.${t}`).trigger("focus");
        }
        getSwiperWrapperTranformXValue() {
          let e = this.elements.$swiperWrapper[0]?.style.transform;
          return (
            (e = e.replace("translate3d(", "")),
            (e = e.split(",")),
            (e = parseInt(e[0].replace("px", ""))),
            e || 0
          );
        }
        a11ySetSlideAriaHidden() {
          if (
            "number" !=
            typeof ("initialisation" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "")
              ? 0
              : this.swiper?.activeIndex)
          )
            return;
          const e = this.getSwiperWrapperTranformXValue(),
            t = this.elements.$swiperWrapper[0].clientWidth;
          this.elements.$swiperContainer
            .find(this.getSettings("selectors").slideContent)
            .each((n, i) => {
              0 <= i.offsetLeft + e && t > i.offsetLeft + e
                ? (i.removeAttribute("aria-hidden"), i.removeAttribute("inert"))
                : (i.setAttribute("aria-hidden", !0),
                  i.setAttribute("inert", ""));
            });
        }
        handleElementHandlers() {}
      }
      t.default = CarouselHandlerBase;
    },
    2821: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(3090));
      class SwiperHandlerBase extends s.default {
        getInitialSlide() {
          const e = this.getEditSettings();
          return e.activeItemIndex ? e.activeItemIndex - 1 : 0;
        }
        getSlidesCount() {
          return this.elements.$slides.length;
        }
        togglePauseOnHover(e) {
          e
            ? this.elements.$swiperContainer.on({
                mouseenter: () => {
                  this.swiper.autoplay.stop();
                },
                mouseleave: () => {
                  this.swiper.autoplay.start();
                },
              })
            : this.elements.$swiperContainer.off("mouseenter mouseleave");
        }
        handleKenBurns() {
          const e = this.getSettings();
          this.$activeImageBg &&
            this.$activeImageBg.removeClass(e.classes.kenBurnsActive),
            (this.activeItemIndex = this.swiper
              ? this.swiper.activeIndex
              : this.getInitialSlide()),
            this.swiper
              ? (this.$activeImageBg = jQuery(
                  this.swiper.slides[this.activeItemIndex]
                ).children("." + e.classes.slideBackground))
              : (this.$activeImageBg = jQuery(
                  this.elements.$slides[0]
                ).children("." + e.classes.slideBackground)),
            this.$activeImageBg.addClass(e.classes.kenBurnsActive);
        }
      }
      t.default = SwiperHandlerBase;
    },
    3090: (e) => {
      "use strict";
      e.exports = elementorModules.ViewModule.extend({
        $element: null,
        editorListeners: null,
        onElementChange: null,
        onEditSettingsChange: null,
        onPageSettingsChange: null,
        isEdit: null,
        __construct(e) {
          this.isActive(e) &&
            ((this.$element = e.$element),
            (this.isEdit = this.$element.hasClass(
              "elementor-element-edit-mode"
            )),
            this.isEdit && this.addEditorListeners());
        },
        isActive: () => !0,
        isElementInTheCurrentDocument() {
          return (
            !!elementorFrontend.isEditMode() &&
            elementor.documents.currentDocument.id.toString() ===
              this.$element[0].closest(".elementor").dataset.elementorId
          );
        },
        findElement(e) {
          var t = this.$element;
          return t.find(e).filter(function () {
            return jQuery(this).parent().closest(".elementor-element").is(t);
          });
        },
        getUniqueHandlerID(e, t) {
          return (
            e || (e = this.getModelCID()),
            t || (t = this.$element),
            e + t.attr("data-element_type") + this.getConstructorID()
          );
        },
        initEditorListeners() {
          var e = this;
          if (
            ((e.editorListeners = [
              {
                event: "element:destroy",
                to: elementor.channels.data,
                callback(t) {
                  t.cid === e.getModelCID() && e.onDestroy();
                },
              },
            ]),
            e.onElementChange)
          ) {
            const t = e.getWidgetType() || e.getElementType();
            let n = "change";
            "global" !== t && (n += ":" + t),
              e.editorListeners.push({
                event: n,
                to: elementor.channels.editor,
                callback(t, n) {
                  e.getUniqueHandlerID(n.model.cid, n.$el) ===
                    e.getUniqueHandlerID() &&
                    e.onElementChange(t.model.get("name"), t, n);
                },
              });
          }
          e.onEditSettingsChange &&
            e.editorListeners.push({
              event: "change:editSettings",
              to: elementor.channels.editor,
              callback(t, n) {
                if (n.model.cid !== e.getModelCID()) return;
                const i = Object.keys(t.changed)[0];
                e.onEditSettingsChange(i, t.changed[i]);
              },
            }),
            ["page"].forEach(function (t) {
              var n = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
              e[n] &&
                e.editorListeners.push({
                  event: "change",
                  to: elementor.settings[t].model,
                  callback(t) {
                    e[n](t.changed);
                  },
                });
            });
        },
        getEditorListeners() {
          return (
            this.editorListeners || this.initEditorListeners(),
            this.editorListeners
          );
        },
        addEditorListeners() {
          var e = this.getUniqueHandlerID();
          this.getEditorListeners().forEach(function (t) {
            elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to);
          });
        },
        removeEditorListeners() {
          var e = this.getUniqueHandlerID();
          this.getEditorListeners().forEach(function (t) {
            elementorFrontend.removeListeners(e, t.event, null, t.to);
          });
        },
        getElementType() {
          return this.$element.data("element_type");
        },
        getWidgetType() {
          const e = this.$element.data("widget_type");
          if (e) return e.split(".")[0];
        },
        getID() {
          return this.$element.data("id");
        },
        getModelCID() {
          return this.$element.data("model-cid");
        },
        getElementSettings(e) {
          let t = {};
          const n = this.getModelCID();
          if (this.isEdit && n) {
            const e = elementorFrontend.config.elements.data[n],
              i = e.attributes;
            let s = i.widgetType || i.elType;
            i.isInner && (s = "inner-" + s);
            let r = elementorFrontend.config.elements.keys[s];
            r ||
              ((r = elementorFrontend.config.elements.keys[s] = []),
              jQuery.each(e.controls, (e, t) => {
                (t.frontend_available || t.editor_available) && r.push(e);
              })),
              jQuery.each(e.getActiveControls(), function (e) {
                if (-1 !== r.indexOf(e)) {
                  let n = i[e];
                  n.toJSON && (n = n.toJSON()), (t[e] = n);
                }
              });
          } else t = this.$element.data("settings") || {};
          return this.getItems(t, e);
        },
        getEditSettings(e) {
          var t = {};
          return (
            this.isEdit &&
              (t =
                elementorFrontend.config.elements.editSettings[
                  this.getModelCID()
                ].attributes),
            this.getItems(t, e)
          );
        },
        getCurrentDeviceSetting(e) {
          return elementorFrontend.getCurrentDeviceSetting(
            this.getElementSettings(),
            e
          );
        },
        onInit() {
          this.isActive(this.getSettings()) &&
            elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
        },
        onDestroy() {
          this.isEdit && this.removeEditorListeners(),
            this.unbindEvents && this.unbindEvents();
        },
      });
    },
    2263: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(3090));
      class StretchedElement extends s.default {
        getStretchedClass() {
          return "e-stretched";
        }
        getStretchSettingName() {
          return "stretch_element";
        }
        getStretchActiveValue() {
          return "yes";
        }
        bindEvents() {
          const e = this.getUniqueHandlerID();
          elementorFrontend.addListenerOnce(e, "resize", this.stretch),
            elementorFrontend.addListenerOnce(
              e,
              "sticky:stick",
              this.stretch,
              this.$element
            ),
            elementorFrontend.addListenerOnce(
              e,
              "sticky:unstick",
              this.stretch,
              this.$element
            ),
            elementorFrontend.isEditMode() &&
              ((this.onKitChangeStretchContainerChange =
                this.onKitChangeStretchContainerChange.bind(this)),
              elementor.channels.editor.on(
                "kit:change:stretchContainer",
                this.onKitChangeStretchContainerChange
              ));
        }
        unbindEvents() {
          elementorFrontend.removeListeners(
            this.getUniqueHandlerID(),
            "resize",
            this.stretch
          ),
            elementorFrontend.isEditMode() &&
              elementor.channels.editor.off(
                "kit:change:stretchContainer",
                this.onKitChangeStretchContainerChange
              );
        }
        isActive(e) {
          return (
            elementorFrontend.isEditMode() ||
            e.$element.hasClass(this.getStretchedClass())
          );
        }
        getStretchElementForConfig() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          return e ? this.$element.find(e) : this.$element;
        }
        getStretchElementConfig() {
          return {
            element: this.getStretchElementForConfig(),
            selectors: { container: this.getStretchContainer() },
            considerScrollbar:
              elementorFrontend.isEditMode() && elementorFrontend.config.is_rtl,
          };
        }
        initStretch() {
          (this.stretch = this.stretch.bind(this)),
            (this.stretchElement =
              new elementorModules.frontend.tools.StretchElement(
                this.getStretchElementConfig()
              ));
        }
        getStretchContainer() {
          return (
            elementorFrontend.getKitSettings("stretched_section_container") ||
            window
          );
        }
        isStretchSettingEnabled() {
          return (
            this.getElementSettings(this.getStretchSettingName()) ===
            this.getStretchActiveValue()
          );
        }
        stretch() {
          this.isStretchSettingEnabled() && this.stretchElement.stretch();
        }
        onInit() {
          this.isActive(this.getSettings()) &&
            (this.initStretch(), super.onInit(...arguments), this.stretch());
        }
        onElementChange(e) {
          this.getStretchSettingName() === e &&
            (this.isStretchSettingEnabled()
              ? this.stretch()
              : this.stretchElement.reset());
        }
        onKitChangeStretchContainerChange() {
          this.stretchElement.setSettings(
            "selectors.container",
            this.getStretchContainer()
          ),
            this.stretch();
        }
      }
      t.default = StretchedElement;
    },
    6412: (e, t, n) => {
      "use strict";
      var i = n(3203),
        s = i(n(5955)),
        r = i(n(8135)),
        o = i(n(5658)),
        a = i(n(2263)),
        l = i(n(3090)),
        c = i(n(2821)),
        u = i(n(1292)),
        d = i(n(7323)),
        h = i(n(32)),
        m = i(n(1519)),
        g = i(n(6752));
      s.default.frontend = {
        Document: r.default,
        tools: { StretchElement: o.default },
        handlers: {
          Base: l.default,
          StretchedElement: a.default,
          SwiperBase: c.default,
          CarouselBase: u.default,
          NestedTabs: d.default,
          NestedAccordion: h.default,
          NestedTitleKeyboardHandler: g.default,
          ContactButtonsHandler: m.default,
        },
      };
    },
    5658: (e) => {
      "use strict";
      e.exports = elementorModules.ViewModule.extend({
        getDefaultSettings: () => ({
          element: null,
          direction: elementorFrontend.config.is_rtl ? "right" : "left",
          selectors: { container: window },
          considerScrollbar: !1,
          cssOutput: "inline",
        }),
        getDefaultElements() {
          return { $element: jQuery(this.getSettings("element")) };
        },
        stretch() {
          const e = this.getSettings();
          let t;
          try {
            t = jQuery(e.selectors.container);
          } catch (e) {}
          (t && t.length) ||
            (t = jQuery(this.getDefaultSettings().selectors.container)),
            this.reset();
          var n = this.elements.$element,
            i = t.innerWidth(),
            s = n.offset().left,
            r = "fixed" === n.css("position"),
            o = r ? 0 : s,
            a = window === t[0];
          if (!a) {
            var l = t.offset().left;
            r && (o = l), s > l && (o = s - l);
          }
          if (e.considerScrollbar && a) {
            o -= window.innerWidth - i;
          }
          r ||
            (elementorFrontend.config.is_rtl && (o = i - (n.outerWidth() + o)),
            (o = -o)),
            e.margin && (o += e.margin);
          var c = {};
          let u = i;
          e.margin && (u -= 2 * e.margin),
            (c.width = u + "px"),
            (c[e.direction] = o + "px"),
            "variables" !== e.cssOutput
              ? n.css(c)
              : this.applyCssVariables(n, c);
        },
        reset() {
          const e = {},
            t = this.getSettings(),
            n = this.elements.$element;
          "variables" !== t.cssOutput
            ? ((e.width = ""), (e[t.direction] = ""), n.css(e))
            : this.resetCssVariables(n);
        },
        applyCssVariables(e, t) {
          e.css("--stretch-width", t.width),
            t.left
              ? e.css("--stretch-left", t.left)
              : e.css("--stretch-right", t.right);
        },
        resetCssVariables(e) {
          e.css({
            "--stretch-width": "",
            "--stretch-left": "",
            "--stretch-right": "",
          });
        },
      });
    },
    6630: (e, t) => {
      "use strict";
      function getChildrenWidth(e) {
        let t = 0;
        const n = e[0].parentNode,
          i = getComputedStyle(n),
          s = parseFloat(i.gap) || 0;
        for (let n = 0; n < e.length; n++) t += e[n].offsetWidth + s;
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.changeScrollStatus = function changeScrollStatus(e, t) {
          "mousedown" === t.type
            ? (e.classList.add("e-scroll"), (e.dataset.pageX = t.pageX))
            : (e.classList.remove("e-scroll", "e-scroll-active"),
              (e.dataset.pageX = ""));
        }),
        (t.setHorizontalScrollAlignment = function setHorizontalScrollAlignment(
          e
        ) {
          let {
            element: t,
            direction: n,
            justifyCSSVariable: i,
            horizontalScrollStatus: s,
          } = e;
          if (!t) return;
          !(function isHorizontalScroll(e, t) {
            return (
              e.clientWidth < getChildrenWidth(e.children) && "enable" === t
            );
          })(t, s)
            ? t.style.setProperty(i, "")
            : (function initialScrollPosition(e, t, n) {
                const i = elementorFrontend.config.is_rtl;
                if ("end" === t)
                  e.style.setProperty(n, "start"),
                    (e.scrollLeft = i
                      ? -1 * getChildrenWidth(e.children)
                      : getChildrenWidth(e.children));
                else e.style.setProperty(n, "start"), (e.scrollLeft = 0);
              })(t, n, i);
        }),
        (t.setHorizontalTitleScrollValues =
          function setHorizontalTitleScrollValues(e, t, n) {
            const i = e.classList.contains("e-scroll"),
              s = "enable" === t,
              r = e.scrollWidth > e.clientWidth;
            if (!i || !s || !r) return;
            n.preventDefault();
            const o = parseFloat(e.dataset.pageX),
              a = n.pageX - o;
            let l = 0;
            l = 20 < a ? 5 : -20 > a ? -5 : a;
            (e.scrollLeft = e.scrollLeft - l),
              e.classList.add("e-scroll-active");
          });
    },
    2618: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        n(740);
      var s = i(n(7597)),
        r = i(n(381));
      class ArgsObject extends s.default {
        static getInstanceType() {
          return "ArgsObject";
        }
        constructor(e) {
          super(), (this.args = e);
        }
        requireArgument(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.args;
          if (!Object.prototype.hasOwnProperty.call(t, e))
            throw Error(`${e} is required.`);
        }
        requireArgumentType(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : this.args;
          if ((this.requireArgument(e, n), typeof n[e] !== t))
            throw Error(`${e} invalid type: ${t}.`);
        }
        requireArgumentInstance(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : this.args;
          if (
            (this.requireArgument(e, n),
            !(n[e] instanceof t || (0, r.default)(n[e], t)))
          )
            throw Error(`${e} invalid instance.`);
        }
        requireArgumentConstructor(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : this.args;
          if (
            (this.requireArgument(e, n),
            n[e].constructor.toString() !== t.prototype.constructor.toString())
          )
            throw Error(`${e} invalid constructor type.`);
        }
      }
      t.default = ArgsObject;
    },
    869: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.ForceMethodImplementation = void 0),
        n(740);
      class ForceMethodImplementation extends Error {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          super(
            `${e.isStatic ? "static " : ""}${
              e.fullName
            }() should be implemented, please provide '${
              e.functionName || e.fullName
            }' functionality.`,
            t
          ),
            Object.keys(t).length && console.error(t),
            Error.captureStackTrace(this, ForceMethodImplementation);
        }
      }
      t.ForceMethodImplementation = ForceMethodImplementation;
      t.default = (e) => {
        const t = Error().stack.split("\n")[2].trim(),
          n = t.startsWith("at new") ? "constructor" : t.split(" ")[1],
          i = {};
        if (
          ((i.functionName = n), (i.fullName = n), i.functionName.includes("."))
        ) {
          const e = i.functionName.split(".");
          (i.className = e[0]), (i.functionName = e[1]);
        } else i.isStatic = !0;
        throw new ForceMethodImplementation(i, e);
      };
    },
    7597: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class InstanceType {
        static [Symbol.hasInstance](e) {
          let t = super[Symbol.hasInstance](e);
          if (e && !e.constructor.getInstanceType) return t;
          if (
            e &&
            (e.instanceTypes || (e.instanceTypes = []),
            t ||
              (this.getInstanceType() === e.constructor.getInstanceType() &&
                (t = !0)),
            t)
          ) {
            const t =
              this.getInstanceType === InstanceType.getInstanceType
                ? "BaseInstanceType"
                : this.getInstanceType();
            -1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t);
          }
          return (
            !t &&
              e &&
              (t =
                e.instanceTypes &&
                Array.isArray(e.instanceTypes) &&
                -1 !== e.instanceTypes.indexOf(this.getInstanceType())),
            t
          );
        }
        static getInstanceType() {
          elementorModules.ForceMethodImplementation();
        }
        constructor() {
          let e = new.target;
          const t = [];
          for (; e.__proto__ && e.__proto__.name; )
            t.push(e.__proto__), (e = e.__proto__);
          t.reverse().forEach((e) => this instanceof e);
        }
      }
      t.default = InstanceType;
    },
    1192: (e, t, n) => {
      "use strict";
      n(740);
      const Module = function () {
        const e = jQuery,
          t = arguments,
          n = this,
          i = {};
        let s;
        (this.getItems = function (e, t) {
          if (t) {
            const n = t.split("."),
              i = n.splice(0, 1);
            if (!n.length) return e[i];
            if (!e[i]) return;
            return this.getItems(e[i], n.join("."));
          }
          return e;
        }),
          (this.getSettings = function (e) {
            return this.getItems(s, e);
          }),
          (this.setSettings = function (t, i, r) {
            if ((r || (r = s), "object" == typeof t)) return e.extend(r, t), n;
            const o = t.split("."),
              a = o.splice(0, 1);
            return o.length
              ? (r[a] || (r[a] = {}), n.setSettings(o.join("."), i, r[a]))
              : ((r[a] = i), n);
          }),
          (this.getErrorMessage = function (e, t) {
            let n;
            if ("forceMethodImplementation" === e)
              n = `The method '${t}' must to be implemented in the inheritor child.`;
            else n = "An error occurs";
            return n;
          }),
          (this.forceMethodImplementation = function (e) {
            throw new Error(
              this.getErrorMessage("forceMethodImplementation", e)
            );
          }),
          (this.on = function (t, s) {
            if ("object" == typeof t)
              return (
                e.each(t, function (e) {
                  n.on(e, this);
                }),
                n
              );
            return (
              t.split(" ").forEach(function (e) {
                i[e] || (i[e] = []), i[e].push(s);
              }),
              n
            );
          }),
          (this.off = function (e, t) {
            if (!i[e]) return n;
            if (!t) return delete i[e], n;
            const s = i[e].indexOf(t);
            return (
              -1 !== s && (delete i[e][s], (i[e] = i[e].filter((e) => e))), n
            );
          }),
          (this.trigger = function (t) {
            const s = "on" + t[0].toUpperCase() + t.slice(1),
              r = Array.prototype.slice.call(arguments, 1);
            n[s] && n[s].apply(n, r);
            const o = i[t];
            return o
              ? (e.each(o, function (e, t) {
                  t.apply(n, r);
                }),
                n)
              : n;
          }),
          n.__construct.apply(n, t),
          e.each(n, function (e) {
            const t = n[e];
            "function" == typeof t &&
              (n[e] = function () {
                return t.apply(n, arguments);
              });
          }),
          (function () {
            s = n.getDefaultSettings();
            const i = t[0];
            i && e.extend(!0, s, i);
          })(),
          n.trigger("init");
      };
      (Module.prototype.__construct = function () {}),
        (Module.prototype.getDefaultSettings = function () {
          return {};
        }),
        (Module.prototype.getConstructorID = function () {
          return this.constructor.name;
        }),
        (Module.extend = function (e) {
          const t = jQuery,
            n = this,
            child = function () {
              return n.apply(this, arguments);
            };
          return (
            t.extend(child, n),
            ((child.prototype = Object.create(
              t.extend({}, n.prototype, e)
            )).constructor = child),
            (child.__super__ = n.prototype),
            child
          );
        }),
        (e.exports = Module);
    },
    6516: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(2640)).default.extend({
        getDefaultSettings: () => ({
          container: null,
          items: null,
          columnsCount: 3,
          verticalSpaceBetween: 30,
        }),
        getDefaultElements() {
          return {
            $container: jQuery(this.getSettings("container")),
            $items: jQuery(this.getSettings("items")),
          };
        },
        run() {
          var e = [],
            t = this.elements.$container.position().top,
            n = this.getSettings(),
            i = n.columnsCount;
          (t += parseInt(this.elements.$container.css("margin-top"), 10)),
            this.elements.$items.each(function (s) {
              var r = Math.floor(s / i),
                o = jQuery(this),
                a =
                  o[0].getBoundingClientRect().height + n.verticalSpaceBetween;
              if (r) {
                var l = o.position(),
                  c = s % i,
                  u = l.top - t - e[c];
                (u -= parseInt(o.css("margin-top"), 10)),
                  (u *= -1),
                  o.css("margin-top", u + "px"),
                  (e[c] += a);
              } else e.push(a);
            });
        },
      });
      t.default = s;
    },
    400: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = class Scroll {
        static scrollObserver(e) {
          let t = 0;
          const n = {
            root: e.root || null,
            rootMargin: e.offset || "0px",
            threshold: (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              const t = [];
              if (e > 0 && e <= 100) {
                const n = 100 / e;
                for (let e = 0; e <= 100; e += n) t.push(e / 100);
              } else t.push(0);
              return t;
            })(e.sensitivity),
          };
          return new IntersectionObserver(function handleIntersect(n) {
            const i = n[0].boundingClientRect.y,
              s = n[0].isIntersecting,
              r = i < t ? "down" : "up",
              o = Math.abs(
                parseFloat((100 * n[0].intersectionRatio).toFixed(2))
              );
            e.callback({
              sensitivity: e.sensitivity,
              isInViewport: s,
              scrollPercentage: o,
              intersectionScrollDirection: r,
            }),
              (t = i);
          }, n);
        }
        static getElementViewportPercentage(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = e[0].getBoundingClientRect(),
            i = t.start || 0,
            s = t.end || 0,
            r = (window.innerHeight * i) / 100,
            o = (window.innerHeight * s) / 100,
            a = n.top - window.innerHeight,
            l = 0 - a + r,
            c = n.top + r + e.height() - a + o,
            u = Math.max(0, Math.min(l / c, 1));
          return parseFloat((100 * u).toFixed(2));
        }
        static getPageScrollPercentage() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          const n = e.start || 0,
            i = e.end || 0,
            s =
              t ||
              document.documentElement.scrollHeight -
                document.documentElement.clientHeight,
            r = (s * n) / 100,
            o = s + r + (s * i) / 100;
          return (
            ((document.documentElement.scrollTop +
              document.body.scrollTop +
              r) /
              o) *
            100
          );
        }
      };
    },
    2640: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(1192)).default.extend({
        elements: null,
        getDefaultElements: () => ({}),
        bindEvents() {},
        onInit() {
          this.initElements(), this.bindEvents();
        },
        initElements() {
          this.elements = this.getDefaultElements();
        },
      });
      t.default = s;
    },
    5955: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(1192)),
        r = i(n(2640)),
        o = i(n(2618)),
        a = i(n(6516)),
        l = i(n(400)),
        c = i(n(869)),
        u = (window.elementorModules = {
          Module: s.default,
          ViewModule: r.default,
          ArgsObject: o.default,
          ForceMethodImplementation: c.default,
          utils: { Masonry: a.default, Scroll: l.default },
        });
      t.default = u;
    },
    1519: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(3231)),
        r = i(n(3090));
      class ContactButtonsHandler extends r.default {
        constructor() {
          super(...arguments), (0, s.default)(this, "clicks", []);
        }
        getDefaultSettings() {
          return {
            selectors: {
              main: ".e-contact-buttons",
              content: ".e-contact-buttons__content",
              contentWrapper: ".e-contact-buttons__content-wrapper",
              chatButton: ".e-contact-buttons__chat-button",
              closeButton: ".e-contact-buttons__close-button",
              messageBubbleTime: ".e-contact-buttons__message-bubble-time",
              contactButtonCore: ".e-contact-buttons__send-button",
            },
            constants: {
              entranceAnimation: "style_chat_box_entrance_animation",
              exitAnimation: "style_chat_box_exit_animation",
              chatButtonAnimation: "style_chat_button_animation",
              animated: "animated",
              animatedWrapper: "animated-wrapper",
              visible: "visible",
              reverse: "reverse",
              hidden: "hidden",
              hasAnimations: "has-animations",
              hasEntranceAnimation: "has-entrance-animation",
              none: "none",
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return {
            main: this.$element[0].querySelector(e.main),
            content: this.$element[0].querySelector(e.content),
            contentWrapper: this.$element[0].querySelector(e.contentWrapper),
            chatButton: this.$element[0].querySelector(e.chatButton),
            closeButton: this.$element[0].querySelector(e.closeButton),
            messageBubbleTime: this.$element[0].querySelector(
              e.messageBubbleTime
            ),
          };
        }
        getResponsiveSetting(e) {
          const t = elementorFrontend.getCurrentDeviceMode();
          return elementorFrontend.utils.controls.getResponsiveControlValue(
            this.getElementSettings(),
            e,
            "",
            t
          );
        }
        bindEvents() {
          this.elements.closeButton &&
            this.elements.closeButton.addEventListener(
              "click",
              this.closeChatBox.bind(this)
            ),
            this.elements.chatButton &&
              (this.elements.chatButton.addEventListener(
                "click",
                this.onChatButtonClick.bind(this)
              ),
              this.elements.chatButton.addEventListener(
                "animationend",
                this.removeChatButtonAnimationClasses.bind(this)
              )),
            this.elements.content &&
              this.elements.content.addEventListener(
                "animationend",
                this.removeAnimationClasses.bind(this)
              ),
            this.elements.contentWrapper &&
              (this.elements.contentWrapper.addEventListener(
                "click",
                this.onChatButtonTrackClick.bind(this)
              ),
              window.addEventListener(
                "keyup",
                this.onDocumentKeyup.bind(this)
              )),
            window.addEventListener("beforeunload", () => {
              this.clicks.length > 0 && this.sendClicks();
            });
        }
        contentWrapperIsHidden(e) {
          if (!this.elements.contentWrapper) return !1;
          const { hidden: t } = this.getSettings("constants");
          return !0 === e
            ? (this.elements.contentWrapper.classList.add(t),
              void this.elements.contentWrapper.setAttribute(
                "aria-hidden",
                "true"
              ))
            : !1 === e
            ? (this.elements.contentWrapper.classList.remove(t),
              void this.elements.contentWrapper.setAttribute(
                "aria-hidden",
                "false"
              ))
            : this.elements.contentWrapper.classList.contains(t);
        }
        onDocumentKeyup(e) {
          27 === e.keyCode &&
            this.elements.main &&
            !this.contentWrapperIsHidden() &&
            this.elements.main.contains(document.activeElement) &&
            this.closeChatBox();
        }
        onChatButtonTrackClick(e) {
          const t = e.target || e.srcElement,
            n = this.getSettings("selectors");
          (t.matches(n.contactButtonCore) || t.closest(n.contactButtonCore)) &&
            this.getDocumentIdAndTrack(t, n);
        }
        getDocumentIdAndTrack(e, t) {
          let n = e.closest(t.main).dataset.documentId;
          n || (n = e.closest(t.elementorWrapper).dataset.elementorId),
            this.trackClick(n);
        }
        trackClick(e) {
          e &&
            (this.clicks.push(e),
            this.clicks.length >= 10 && this.sendClicks());
        }
        sendClicks() {
          const e = new FormData();
          e.append("action", "elementor_send_clicks"),
            e.append(
              "_nonce",
              elementorFrontendConfig?.nonces?.floatingButtonsClickTracking
            ),
            this.clicks.forEach((t) => e.append("clicks[]", t)),
            fetch(elementorFrontendConfig?.urls?.ajaxurl, {
              method: "POST",
              body: e,
            }).then(() => {
              this.clicks = [];
            });
        }
        removeAnimationClasses() {
          if (!this.elements.content) return;
          const {
              reverse: e,
              entranceAnimation: t,
              exitAnimation: n,
              animated: i,
              visible: s,
            } = this.getSettings("constants"),
            r = this.elements.content.classList.contains(e),
            o = this.getResponsiveSetting(t),
            a = this.getResponsiveSetting(n);
          r
            ? (this.elements.content.classList.remove(i),
              this.elements.content.classList.remove(e),
              a && this.elements.content.classList.remove(a),
              this.elements.content.classList.remove(s))
            : (this.elements.content.classList.remove(i),
              o && this.elements.content.classList.remove(o),
              this.elements.content.classList.add(s));
        }
        chatBoxEntranceAnimation() {
          const {
              entranceAnimation: e,
              animated: t,
              animatedWrapper: n,
              none: i,
            } = this.getSettings("constants"),
            s = this.getResponsiveSetting(e);
          s &&
            i !== s &&
            (this.elements.content &&
              (this.elements.content.classList.add(t),
              this.elements.content.classList.add(s)),
            this.elements.contentWrapper &&
              this.elements.contentWrapper.classList.remove(n));
        }
        chatBoxExitAnimation() {
          const {
              reverse: e,
              exitAnimation: t,
              animated: n,
              animatedWrapper: i,
              none: s,
            } = this.getSettings("constants"),
            r = this.getResponsiveSetting(t);
          r &&
            s !== r &&
            (this.elements.content &&
              (this.elements.content.classList.add(n),
              this.elements.content.classList.add(e),
              this.elements.content.classList.add(r)),
            this.elements.contentWrapper &&
              this.elements.contentWrapper.classList.add(i));
        }
        openChatBox() {
          const { hasAnimations: e, visible: t } =
            this.getSettings("constants");
          this.elements.main && this.elements.main.classList.contains(e)
            ? this.chatBoxEntranceAnimation()
            : this.elements.content && this.elements.content.classList.add(t),
            this.elements.contentWrapper &&
              (this.contentWrapperIsHidden(!1),
              elementorFrontend.isEditMode() ||
                (this.elements.contentWrapper.setAttribute("tabindex", "0"),
                this.elements.contentWrapper.focus({ focusVisible: !0 }))),
            this.elements.chatButton &&
              this.elements.chatButton.setAttribute("aria-expanded", "true"),
            this.elements.closeButton &&
              this.elements.closeButton.setAttribute("aria-expanded", "true");
        }
        closeChatBox() {
          const { hasAnimations: e, visible: t } =
            this.getSettings("constants");
          this.elements.main && this.elements.main.classList.contains(e)
            ? this.chatBoxExitAnimation()
            : this.elements.content &&
              this.elements.content.classList.remove(t),
            this.elements.contentWrapper && this.contentWrapperIsHidden(!0),
            this.elements.chatButton &&
              (this.elements.chatButton.setAttribute("aria-expanded", "false"),
              this.elements.chatButton.focus({ focusVisible: !0 })),
            this.elements.closeButton &&
              this.elements.closeButton.setAttribute("aria-expanded", "false");
        }
        onChatButtonClick() {
          this.elements.contentWrapper && this.contentWrapperIsHidden()
            ? this.openChatBox()
            : this.closeChatBox();
        }
        initMessageBubbleTime() {
          if (!this.elements.messageBubbleTime) return;
          const e =
            "12h" === this.elements.messageBubbleTime.dataset.timeFormat;
          this.elements.messageBubbleTime.innerHTML = new Intl.DateTimeFormat(
            "default",
            { hour12: e, hour: "numeric", minute: "numeric" }
          ).format(new Date());
        }
        removeChatButtonAnimationClasses() {
          if (!this.elements.chatButton) return;
          const { chatButtonAnimation: e, visible: t } =
            this.getSettings("constants");
          this.elements.chatButton.classList.remove(e),
            this.elements.chatButton.classList.add(t);
        }
        initChatButtonEntranceAnimation() {
          const { none: e, chatButtonAnimation: t } =
              this.getSettings("constants"),
            n = this.getResponsiveSetting(t);
          n && e !== n && this.elements.chatButton.classList.add(n);
        }
        initDefaultState() {
          if (this.elements.contentWrapper) {
            const e = this.contentWrapperIsHidden();
            this.elements.chatButton &&
              this.elements.chatButton.setAttribute("aria-expanded", !e),
              this.elements.closeButton &&
                this.elements.closeButton.setAttribute("aria-expanded", !e);
          }
          elementorFrontend.isEditMode() &&
            "floating-buttons" === elementor?.config?.document?.type &&
            this.openChatBox();
        }
        onInit() {
          const { hasEntranceAnimation: e } = this.getSettings("constants");
          super.onInit(...arguments),
            this.elements.messageBubbleTime && this.initMessageBubbleTime(),
            this.initDefaultState(),
            this.elements.chatButton &&
              this.elements.chatButton.classList.contains(e) &&
              this.initChatButtonEntranceAnimation();
        }
      }
      t.default = ContactButtonsHandler;
    },
    7148: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(6752));
      class NestedAccordionTitleKeyboardHandler extends s.default {
        __construct() {
          super.__construct(...arguments);
          const e = arguments.length <= 0 ? void 0 : arguments[0];
          this.toggleTitle = e.toggleTitle;
        }
        getDefaultSettings() {
          return {
            ...super.getDefaultSettings(),
            selectors: {
              itemTitle: ".e-n-accordion-item-title",
              itemContainer: ".e-n-accordion-item > .e-con",
            },
            ariaAttributes: {
              titleStateAttribute: "aria-expanded",
              activeTitleSelector: '[aria-expanded="true"]',
            },
            datasets: { titleIndex: "data-accordion-index" },
          };
        }
        handeTitleLinkEnterOrSpaceEvent(e) {
          this.toggleTitle(e);
        }
        handleContentElementEscapeEvents(e) {
          this.getActiveTitleElement().trigger("focus"), this.toggleTitle(e);
        }
        handleTitleEscapeKeyEvents(e) {
          const t = e?.currentTarget?.parentElement,
            n = t?.open;
          n && this.toggleTitle(e);
        }
      }
      t.default = NestedAccordionTitleKeyboardHandler;
    },
    32: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(3090)),
        r = i(n(7148));
      class NestedAccordion extends s.default {
        constructor() {
          super(...arguments), (this.animations = new Map());
        }
        getDefaultSettings() {
          return {
            selectors: {
              accordion: ".e-n-accordion",
              accordionContentContainers: ".e-n-accordion > .e-con",
              accordionItems: ".e-n-accordion-item",
              accordionItemTitles: ".e-n-accordion-item-title",
              accordionItemTitlesText: ".e-n-accordion-item-title-text",
              accordionContent: ".e-n-accordion-item > .e-con",
              directAccordionItems: ":scope > .e-n-accordion-item",
              directAccordionItemTitles:
                ":scope > .e-n-accordion-item > .e-n-accordion-item-title",
            },
            default_state: "expanded",
            attributes: {
              index: "data-accordion-index",
              ariaLabelledBy: "aria-labelledby",
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return {
            $accordion: this.findElement(e.accordion),
            $contentContainers: this.findElement(e.accordionContentContainers),
            $accordionItems: this.findElement(e.accordionItems),
            $accordionTitles: this.findElement(e.accordionItemTitles),
            $accordionContent: this.findElement(e.accordionContent),
          };
        }
        onInit() {
          super.onInit(...arguments),
            elementorFrontend.isEditMode() &&
              !elementorCommon.config.experimentalFeatures
                .e_nested_atomic_repeaters &&
              this.interlaceContainers(),
            this.injectKeyboardHandler();
        }
        injectKeyboardHandler() {
          "nested-accordion.default" === this.getSettings("elementName") &&
            new r.default({
              $element: this.$element,
              toggleTitle: this.clickListener.bind(this),
            });
        }
        interlaceContainers() {
          const { $contentContainers: e, $accordionItems: t } =
            this.getDefaultElements();
          e.each((e, n) => {
            t[e].appendChild(n);
          });
        }
        linkContainer(e) {
          const {
              container: t,
              index: n,
              targetContainer: i,
              action: { type: s },
            } = e.detail,
            r = t.view.$el;
          if (t.model.get("id") === this.$element.data("id")) {
            const { $accordionItems: e } = this.getDefaultElements();
            let t, o;
            switch (s) {
              case "move":
                [t, o] = this.move(r, n, i, e);
                break;
              case "duplicate":
                [t, o] = this.duplicate(r, n, i, e);
            }
            void 0 !== t && t.appendChild(o),
              this.updateIndexValues(),
              this.updateListeners(r),
              elementor.$preview[0].contentWindow.dispatchEvent(
                new CustomEvent("elementor/elements/link-data-bindings")
              );
          }
        }
        move(e, t, n, i) {
          return [i[t], n.view.$el[0]];
        }
        duplicate(e, t, n, i) {
          return [i[t + 1], n.view.$el[0]];
        }
        updateIndexValues() {
          const { $accordionContent: e, $accordionItems: t } =
              this.getDefaultElements(),
            n = this.getSettings(),
            i = t[0].getAttribute("id").slice(0, -1);
          t.each((t, s) => {
            s.setAttribute("id", `${i}${t}`),
              s
                .querySelector(n.selectors.accordionItemTitles)
                .setAttribute(n.attributes.index, t + 1),
              s
                .querySelector(n.selectors.accordionItemTitles)
                .setAttribute("aria-controls", `${i}${t}`),
              s
                .querySelector(n.selectors.accordionItemTitlesText)
                .setAttribute("data-binding-index", t + 1),
              e[t].setAttribute(n.attributes.ariaLabelledBy, `${i}${t}`);
          });
        }
        updateListeners(e) {
          (this.elements.$accordionTitles = e.find(
            this.getSettings("selectors.accordionItemTitles")
          )),
            (this.elements.$accordionItems = e.find(
              this.getSettings("selectors.accordionItems")
            )),
            this.elements.$accordionTitles.on(
              "click",
              this.clickListener.bind(this)
            );
        }
        bindEvents() {
          this.elements.$accordionTitles.on(
            "click",
            this.clickListener.bind(this)
          ),
            elementorFrontend.elements.$window.on(
              "elementor/nested-container/atomic-repeater",
              this.linkContainer.bind(this)
            );
        }
        unbindEvents() {
          this.elements.$accordionTitles.off();
        }
        clickListener(e) {
          e.preventDefault(), (this.elements = this.getDefaultElements());
          const t = this.getSettings(),
            n = e?.currentTarget?.closest(t.selectors.accordionItems),
            i = e?.currentTarget?.closest(t.selectors.accordion),
            s = n.querySelector(t.selectors.accordionItemTitles),
            r = n.querySelector(t.selectors.accordionContent),
            { max_items_expended: o } = this.getElementSettings(),
            a = i.querySelectorAll(t.selectors.directAccordionItems),
            l = i.querySelectorAll(t.selectors.directAccordionItemTitles);
          "one" === o && this.closeAllItems(a, l),
            n.open
              ? this.closeAccordionItem(n, s)
              : this.prepareOpenAnimation(n, s, r);
        }
        animateItem(e, t, n, i) {
          e.style.overflow = "hidden";
          let s = this.animations.get(e);
          s && s.cancel(),
            (s = e.animate(
              { height: [t, n] },
              { duration: this.getAnimationDuration() }
            )),
            (s.onfinish = () => this.onAnimationFinish(e, i)),
            this.animations.set(e, s),
            e.querySelector("summary")?.setAttribute("aria-expanded", i);
        }
        closeAccordionItem(e, t) {
          const n = `${e.offsetHeight}px`,
            i = `${t.offsetHeight}px`;
          this.animateItem(e, n, i, !1);
        }
        prepareOpenAnimation(e, t, n) {
          (e.style.overflow = "hidden"),
            (e.style.height = `${e.offsetHeight}px`),
            (e.open = !0),
            window.requestAnimationFrame(() => this.openAccordionItem(e, t, n));
        }
        openAccordionItem(e, t, n) {
          const i = `${e.offsetHeight}px`,
            s = `${t.offsetHeight + n.offsetHeight}px`;
          this.animateItem(e, i, s, !0);
        }
        onAnimationFinish(e, t) {
          (e.open = t),
            this.animations.set(e, null),
            (e.style.height = e.style.overflow = "");
        }
        closeAllItems(e, t) {
          t.forEach((t, n) => {
            this.closeAccordionItem(e[n], t);
          });
        }
        getAnimationDuration() {
          const { size: e, unit: t } = this.getElementSettings(
            "n_accordion_animation_duration"
          );
          return e * ("ms" === t ? 1 : 1e3);
        }
      }
      t.default = NestedAccordion;
    },
    7323: (e, t, n) => {
      "use strict";
      var i = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(3090)),
        r = n(6630);
      class NestedTabs extends s.default {
        getTabTitleFilterSelector(e) {
          return `[${this.getSettings("dataAttributes").tabIndex}="${e}"]`;
        }
        getTabContentFilterSelector(e) {
          return `*:nth-child(${e})`;
        }
        getTabIndex(e) {
          return e.getAttribute(this.getSettings("dataAttributes").tabIndex);
        }
        getActiveTabIndex() {
          const e = this.getSettings(),
            t = e.ariaAttributes.activeTitleSelector,
            n = e.dataAttributes.tabIndex;
          return this.elements.$tabTitles.filter(t).attr(n) || null;
        }
        getWidgetNumber() {
          return this.$element
            .find("> .elementor-widget-container > .e-n-tabs, > .e-n-tabs")
            .attr("data-widget-number");
        }
        getDefaultSettings() {
          const e = this.getWidgetNumber();
          return {
            selectors: {
              widgetContainer: `[data-widget-number="${e}"]`,
              tabTitle: `[aria-controls*="e-n-tab-content-${e}"]`,
              tabTitleIcon: `[id*="e-n-tab-title-${e}"] > .e-n-tab-icon`,
              tabTitleText: `[id*="e-n-tab-title-${e}"] > .e-n-tab-title-text`,
              tabContent: `[data-widget-number="${e}"] > .e-n-tabs-content > .e-con`,
              headingContainer: `[data-widget-number="${e}"] > .e-n-tabs-heading`,
              activeTabContentContainers: `[id*="e-n-tab-content-${e}"].e-active`,
            },
            classes: { active: "e-active" },
            dataAttributes: { tabIndex: "data-tab-index" },
            ariaAttributes: {
              titleStateAttribute: "aria-selected",
              activeTitleSelector: '[aria-selected="true"]',
            },
            showTabFn: "show",
            hideTabFn: "hide",
            toggleSelf: !1,
            hidePrevious: !0,
            autoExpand: !0,
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return {
            $widgetContainer: this.findElement(e.widgetContainer),
            $tabTitles: this.findElement(e.tabTitle),
            $tabContents: this.findElement(e.tabContent),
            $headingContainer: this.findElement(e.headingContainer),
          };
        }
        getKeyboardNavigationSettings() {
          return this.getSettings();
        }
        activateDefaultTab() {
          const e = this.getSettings(),
            t = this.getEditSettings("activeItemIndex") || 1,
            n = { showTabFn: e.showTabFn, hideTabFn: e.hideTabFn };
          this.setSettings({ showTabFn: "show", hideTabFn: "hide" }),
            this.changeActiveTab(t),
            this.setSettings(n),
            this.elements.$widgetContainer.addClass("e-activated");
        }
        deactivateActiveTab(e) {
          const t = this.getSettings(),
            n = t.classes.active,
            i = t.ariaAttributes.activeTitleSelector,
            s = "." + n,
            r = this.elements.$tabTitles.filter(i),
            o = this.elements.$tabContents.filter(s);
          return (
            this.setTabDeactivationAttributes(r, e),
            o.removeClass(n),
            o[t.hideTabFn](0, () => this.onHideTabContent(o)),
            o
          );
        }
        getTitleActivationAttributes() {
          return {
            tabindex: "0",
            [this.getSettings("ariaAttributes").titleStateAttribute]: "true",
          };
        }
        setTabDeactivationAttributes(e) {
          const t = this.getSettings("ariaAttributes").titleStateAttribute;
          e.attr({ tabindex: "-1", [t]: "false" });
        }
        onHideTabContent() {}
        activateTab(e) {
          const t = this.getSettings(),
            n = t.classes.active,
            i = "show" === t.showTabFn ? 0 : 400;
          let s = this.elements.$tabTitles.filter(
              this.getTabTitleFilterSelector(e)
            ),
            r = this.elements.$tabContents.filter(
              this.getTabContentFilterSelector(e)
            );
          if (!s.length) {
            const t = Math.max(e - 1, 1);
            (s = this.elements.$tabTitles.filter(
              this.getTabTitleFilterSelector(t)
            )),
              (r = this.elements.$tabContents.filter(
                this.getTabContentFilterSelector(t)
              ));
          }
          s.attr(this.getTitleActivationAttributes()),
            r.addClass(n),
            r[t.showTabFn](i, () => this.onShowTabContent(r));
        }
        onShowTabContent(e) {
          elementorFrontend.elements.$window.trigger(
            "elementor-pro/motion-fx/recalc"
          ),
            elementorFrontend.elements.$window.trigger(
              "elementor/nested-tabs/activate",
              e
            ),
            elementorFrontend.elements.$window.trigger(
              "elementor/bg-video/recalc"
            );
        }
        isActiveTab(e) {
          const t = this.getSettings(),
            n =
              "true" ===
              this.elements.$tabTitles
                .filter(`[${t.dataAttributes.tabIndex}="${e}"]`)
                .attr(t.ariaAttributes.titleStateAttribute),
            i = this.elements.$tabContents
              .filter(this.getTabContentFilterSelector(e))
              .hasClass(this.getActiveClass());
          return n && i;
        }
        onTabClick(e) {
          e.preventDefault(),
            this.changeActiveTab(
              e.currentTarget?.getAttribute(
                this.getSettings("dataAttributes").tabIndex
              ),
              !0
            );
        }
        getTabEvents() {
          return { click: this.onTabClick.bind(this) };
        }
        getHeadingEvents() {
          const e = this.elements.$headingContainer[0];
          return {
            mousedown: r.changeScrollStatus.bind(this, e),
            mouseup: r.changeScrollStatus.bind(this, e),
            mouseleave: r.changeScrollStatus.bind(this, e),
            mousemove: r.setHorizontalTitleScrollValues.bind(
              this,
              e,
              this.getHorizontalScrollSetting()
            ),
          };
        }
        bindEvents() {
          this.elements.$tabTitles.on(this.getTabEvents()),
            this.elements.$headingContainer.on(this.getHeadingEvents()),
            elementorFrontend.elements.$window.on(
              "resize",
              this.onResizeUpdateHorizontalScrolling.bind(this)
            ),
            elementorFrontend.elements.$window.on(
              "resize",
              this.setTouchMode.bind(this)
            ),
            elementorFrontend.elements.$window.on(
              "elementor/nested-tabs/activate",
              this.reInitSwipers
            ),
            elementorFrontend.elements.$window.on(
              "elementor/nested-elements/activate-by-keyboard",
              this.changeActiveTabByKeyboard.bind(this)
            ),
            elementorFrontend.elements.$window.on(
              "elementor/nested-container/atomic-repeater",
              this.linkContainer.bind(this)
            );
        }
        unbindEvents() {
          this.elements.$tabTitles.off(),
            this.elements.$headingContainer.off(),
            this.elements.$tabContents.children().off(),
            elementorFrontend.elements.$window.off(
              "resize",
              this.onResizeUpdateHorizontalScrolling.bind(this)
            ),
            elementorFrontend.elements.$window.off(
              "resize",
              this.setTouchMode.bind(this)
            ),
            elementorFrontend.elements.$window.off(
              "elementor/nested-tabs/activate",
              this.reInitSwipers
            ),
            elementorFrontend.elements.$window.off(
              "elementor/nested-elements/activate-by-keyboard",
              this.changeActiveTabByKeyboard.bind(this)
            ),
            elementorFrontend.elements.$window.off(
              "elementor/nested-container/atomic-repeater",
              this.linkContainer.bind(this)
            );
        }
        reInitSwipers(e, t) {
          const n = t.querySelectorAll(
            `.${elementorFrontend.config.swiperClass}`
          );
          for (const e of n) {
            if (!e.swiper) return;
            (e.swiper.initialized = !1), e.swiper.init();
          }
        }
        onInit() {
          super.onInit(...arguments),
            this.getSettings("autoExpand") && this.activateDefaultTab(),
            (0, r.setHorizontalScrollAlignment)(
              this.getHorizontalScrollingSettings()
            ),
            this.setTouchMode(),
            "nested-tabs.default" === this.getSettings("elementName") &&
              new elementorModules.frontend.handlers.NestedTitleKeyboardHandler(
                this.getKeyboardNavigationSettings()
              );
        }
        onEditSettingsChange(e, t) {
          "activeItemIndex" === e && this.changeActiveTab(t, !1);
        }
        onElementChange(e) {
          this.checkSliderPropsToWatch(e) &&
            (0, r.setHorizontalScrollAlignment)(
              this.getHorizontalScrollingSettings()
            );
        }
        checkSliderPropsToWatch(e) {
          return (
            0 === e.indexOf("horizontal_scroll") ||
            "breakpoint_selector" === e ||
            0 === e.indexOf("tabs_justify_horizontal") ||
            0 === e.indexOf("tabs_title_space_between")
          );
        }
        changeActiveTab(e) {
          if (
            arguments.length > 1 &&
            void 0 !== arguments[1] &&
            arguments[1] &&
            this.isEdit &&
            this.isElementInTheCurrentDocument()
          )
            return window.top.$e.run("document/repeater/select", {
              container: elementor.getContainer(this.$element.attr("data-id")),
              index: parseInt(e),
            });
          const t = this.isActiveTab(e),
            n = this.getSettings();
          if (
            ((!n.toggleSelf && t) ||
              !n.hidePrevious ||
              this.deactivateActiveTab(e),
            !n.hidePrevious && t && this.deactivateActiveTab(e),
            !t)
          ) {
            if (this.isAccordionVersion())
              return void this.activateMobileTab(e);
            this.activateTab(e);
          }
        }
        changeActiveTabByKeyboard(e, t) {
          t.widgetId.toString() === this.getID().toString() &&
            this.changeActiveTab(t.titleIndex, !0);
        }
        activateMobileTab(e) {
          setTimeout(() => {
            this.activateTab(e), this.forceActiveTabToBeInViewport(e);
          }, 10);
        }
        forceActiveTabToBeInViewport(e) {
          if (!elementorFrontend.isEditMode()) return;
          const t = this.elements.$tabTitles.filter(
            this.getTabTitleFilterSelector(e)
          );
          elementor.helpers.isInViewport(t[0]) ||
            t[0].scrollIntoView({ block: "center" });
        }
        getActiveClass() {
          return this.getSettings().classes.active;
        }
        getTabsDirection() {
          const e = elementorFrontend.getCurrentDeviceMode();
          return elementorFrontend.utils.controls.getResponsiveControlValue(
            this.getElementSettings(),
            "tabs_justify_horizontal",
            "",
            e
          );
        }
        getHorizontalScrollSetting() {
          const e = elementorFrontend.getCurrentDeviceMode();
          return elementorFrontend.utils.controls.getResponsiveControlValue(
            this.getElementSettings(),
            "horizontal_scroll",
            "",
            e
          );
        }
        isAccordionVersion() {
          return "contents" === this.elements.$headingContainer.css("display");
        }
        setTouchMode() {
          const e = this.getSettings("selectors").widgetContainer;
          if (elementorFrontend.isEditMode() || "resize" === event?.type) {
            const t = ["mobile", "mobile_extra", "tablet", "tablet_extra"],
              n = elementorFrontend.getCurrentDeviceMode();
            if (-1 !== t.indexOf(n))
              return void this.$element.find(e).attr("data-touch-mode", "true");
          } else if ("ontouchstart" in window)
            return void this.$element.find(e).attr("data-touch-mode", "true");
          this.$element.find(e).attr("data-touch-mode", "false");
        }
        linkContainer(e) {
          const { container: t } = e.detail,
            n = t.model.get("id"),
            i = this.$element.data("id"),
            s = t.view.$el;
          if (
            (n === i &&
              (this.updateIndexValues(),
              this.updateListeners(s),
              elementor.$preview[0].contentWindow.dispatchEvent(
                new CustomEvent("elementor/elements/link-data-bindings")
              )),
            !this.getActiveTabIndex())
          ) {
            const t = e.detail.index + 1 || 1;
            this.changeActiveTab(t);
          }
        }
        updateListeners(e) {
          (this.elements.$tabContents = e.find(
            this.getSettings("selectors.tabContent")
          )),
            (this.elements.$tabTitles = e.find(
              this.getSettings("selectors.tabTitle")
            )),
            this.elements.$tabTitles.on(this.getTabEvents());
        }
        updateIndexValues() {
          const {
              $widgetContainer: e,
              $tabContents: t,
              $tabTitles: n,
            } = this.getDefaultElements(),
            i = this.getSettings(),
            s = i.dataAttributes.tabIndex,
            r = e.data("widgetNumber");
          n.each((e, n) => {
            const o = e + 1,
              a = `e-n-tab-title-${r}${o}`,
              l = `e-n-tab-content-${r}${o}`;
            n.setAttribute("id", a),
              n.setAttribute("style", `--n-tabs-title-order: ${o}`),
              n.setAttribute(s, o),
              n.setAttribute("aria-controls", l),
              n
                .querySelector(i.selectors.tabTitleIcon)
                ?.setAttribute("data-binding-index", o),
              n
                .querySelector(i.selectors.tabTitleText)
                .setAttribute("data-binding-index", o),
              t[e].setAttribute("aria-labelledby", a),
              t[e].setAttribute(s, o),
              t[e].setAttribute("id", l),
              t[e].setAttribute("style", `--n-tabs-title-order: ${o}`);
          });
        }
        onResizeUpdateHorizontalScrolling() {
          (0, r.setHorizontalScrollAlignment)(
            this.getHorizontalScrollingSettings()
          );
        }
        getHorizontalScrollingSettings() {
          return {
            element: this.elements.$headingContainer[0],
            direction: this.getTabsDirection(),
            justifyCSSVariable: "--n-tabs-heading-justify-content",
            horizontalScrollStatus: this.getHorizontalScrollSetting(),
          };
        }
      }
      t.default = NestedTabs;
    },
    5089: (e, t, n) => {
      "use strict";
      var i = n(930),
        s = n(9268),
        r = TypeError;
      e.exports = function (e) {
        if (i(e)) return e;
        throw r(s(e) + " is not a function");
      };
    },
    1378: (e, t, n) => {
      "use strict";
      var i = n(930),
        s = String,
        r = TypeError;
      e.exports = function (e) {
        if ("object" == typeof e || i(e)) return e;
        throw r("Can't set " + s(e) + " as a prototype");
      };
    },
    6112: (e, t, n) => {
      "use strict";
      var i = n(8759),
        s = String,
        r = TypeError;
      e.exports = function (e) {
        if (i(e)) return e;
        throw r(s(e) + " is not an object");
      };
    },
    6198: (e, t, n) => {
      "use strict";
      var i = n(4088),
        s = n(7740),
        r = n(2871),
        createMethod = function (e) {
          return function (t, n, o) {
            var a,
              l = i(t),
              c = r(l),
              u = s(o, c);
            if (e && n != n) {
              for (; c > u; ) if ((a = l[u++]) != a) return !0;
            } else
              for (; c > u; u++)
                if ((e || u in l) && l[u] === n) return e || u || 0;
            return !e && -1;
          };
        };
      e.exports = { includes: createMethod(!0), indexOf: createMethod(!1) };
    },
    2306: (e, t, n) => {
      "use strict";
      var i = n(8240),
        s = i({}.toString),
        r = i("".slice);
      e.exports = function (e) {
        return r(s(e), 8, -1);
      };
    },
    375: (e, t, n) => {
      "use strict";
      var i = n(2371),
        s = n(930),
        r = n(2306),
        o = n(211)("toStringTag"),
        a = Object,
        l =
          "Arguments" ==
          r(
            (function () {
              return arguments;
            })()
          );
      e.exports = i
        ? r
        : function (e) {
            var t, n, i;
            return void 0 === e
              ? "Undefined"
              : null === e
              ? "Null"
              : "string" ==
                typeof (n = (function (e, t) {
                  try {
                    return e[t];
                  } catch (e) {}
                })((t = a(e)), o))
              ? n
              : l
              ? r(t)
              : "Object" == (i = r(t)) && s(t.callee)
              ? "Arguments"
              : i;
          };
    },
    8474: (e, t, n) => {
      "use strict";
      var i = n(9606),
        s = n(6095),
        r = n(4399),
        o = n(7826);
      e.exports = function (e, t, n) {
        for (var a = s(t), l = o.f, c = r.f, u = 0; u < a.length; u++) {
          var d = a[u];
          i(e, d) || (n && i(n, d)) || l(e, d, c(t, d));
        }
      };
    },
    2585: (e, t, n) => {
      "use strict";
      var i = n(5283),
        s = n(7826),
        r = n(5736);
      e.exports = i
        ? function (e, t, n) {
            return s.f(e, t, r(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          };
    },
    5736: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
    1343: (e, t, n) => {
      "use strict";
      var i = n(930),
        s = n(7826),
        r = n(3712),
        o = n(9444);
      e.exports = function (e, t, n, a) {
        a || (a = {});
        var l = a.enumerable,
          c = void 0 !== a.name ? a.name : t;
        if ((i(n) && r(n, c, a), a.global)) l ? (e[t] = n) : o(t, n);
        else {
          try {
            a.unsafe ? e[t] && (l = !0) : delete e[t];
          } catch (e) {}
          l
            ? (e[t] = n)
            : s.f(e, t, {
                value: n,
                enumerable: !1,
                configurable: !a.nonConfigurable,
                writable: !a.nonWritable,
              });
        }
        return e;
      };
    },
    9444: (e, t, n) => {
      "use strict";
      var i = n(2086),
        s = Object.defineProperty;
      e.exports = function (e, t) {
        try {
          s(i, e, { value: t, configurable: !0, writable: !0 });
        } catch (n) {
          i[e] = t;
        }
        return t;
      };
    },
    5283: (e, t, n) => {
      "use strict";
      var i = n(3677);
      e.exports = !i(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    7886: (e) => {
      "use strict";
      var t = "object" == typeof document && document.all,
        n = void 0 === t && void 0 !== t;
      e.exports = { all: t, IS_HTMLDDA: n };
    },
    821: (e, t, n) => {
      "use strict";
      var i = n(2086),
        s = n(8759),
        r = i.document,
        o = s(r) && s(r.createElement);
      e.exports = function (e) {
        return o ? r.createElement(e) : {};
      };
    },
    4999: (e) => {
      "use strict";
      e.exports =
        ("undefined" != typeof navigator && String(navigator.userAgent)) || "";
    },
    1448: (e, t, n) => {
      "use strict";
      var i,
        s,
        r = n(2086),
        o = n(4999),
        a = r.process,
        l = r.Deno,
        c = (a && a.versions) || (l && l.version),
        u = c && c.v8;
      u && (s = (i = u.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
        !s &&
          o &&
          (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
          (i = o.match(/Chrome\/(\d+)/)) &&
          (s = +i[1]),
        (e.exports = s);
    },
    8684: (e) => {
      "use strict";
      e.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    79: (e, t, n) => {
      "use strict";
      var i = n(8240),
        s = Error,
        r = i("".replace),
        o = String(s("zxcasd").stack),
        a = /\n\s*at [^:]*:[^\n]*/,
        l = a.test(o);
      e.exports = function (e, t) {
        if (l && "string" == typeof e && !s.prepareStackTrace)
          for (; t--; ) e = r(e, a, "");
        return e;
      };
    },
    8395: (e, t, n) => {
      "use strict";
      var i = n(2585),
        s = n(79),
        r = n(2114),
        o = Error.captureStackTrace;
      e.exports = function (e, t, n, a) {
        r && (o ? o(e, t) : i(e, "stack", s(n, a)));
      };
    },
    2114: (e, t, n) => {
      "use strict";
      var i = n(3677),
        s = n(5736);
      e.exports = !i(function () {
        var e = Error("a");
        return (
          !("stack" in e) ||
          (Object.defineProperty(e, "stack", s(1, 7)), 7 !== e.stack)
        );
      });
    },
    1695: (e, t, n) => {
      "use strict";
      var i = n(2086),
        s = n(4399).f,
        r = n(2585),
        o = n(1343),
        a = n(9444),
        l = n(8474),
        c = n(7189);
      e.exports = function (e, t) {
        var n,
          u,
          d,
          h,
          m,
          g = e.target,
          p = e.global,
          f = e.stat;
        if ((n = p ? i : f ? i[g] || a(g, {}) : (i[g] || {}).prototype))
          for (u in t) {
            if (
              ((h = t[u]),
              (d = e.dontCallGetSet ? (m = s(n, u)) && m.value : n[u]),
              !c(p ? u : g + (f ? "." : "#") + u, e.forced) && void 0 !== d)
            ) {
              if (typeof h == typeof d) continue;
              l(h, d);
            }
            (e.sham || (d && d.sham)) && r(h, "sham", !0), o(n, u, h, e);
          }
      };
    },
    3677: (e) => {
      "use strict";
      e.exports = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    7258: (e, t, n) => {
      "use strict";
      var i = n(6059),
        s = Function.prototype,
        r = s.apply,
        o = s.call;
      e.exports =
        ("object" == typeof Reflect && Reflect.apply) ||
        (i
          ? o.bind(r)
          : function () {
              return o.apply(r, arguments);
            });
    },
    6059: (e, t, n) => {
      "use strict";
      var i = n(3677);
      e.exports = !i(function () {
        var e = function () {}.bind();
        return "function" != typeof e || e.hasOwnProperty("prototype");
      });
    },
    9413: (e, t, n) => {
      "use strict";
      var i = n(6059),
        s = Function.prototype.call;
      e.exports = i
        ? s.bind(s)
        : function () {
            return s.apply(s, arguments);
          };
    },
    4398: (e, t, n) => {
      "use strict";
      var i = n(5283),
        s = n(9606),
        r = Function.prototype,
        o = i && Object.getOwnPropertyDescriptor,
        a = s(r, "name"),
        l = a && "something" === function something() {}.name,
        c = a && (!i || (i && o(r, "name").configurable));
      e.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
    },
    1518: (e, t, n) => {
      "use strict";
      var i = n(8240),
        s = n(5089);
      e.exports = function (e, t, n) {
        try {
          return i(s(Object.getOwnPropertyDescriptor(e, t)[n]));
        } catch (e) {}
      };
    },
    8240: (e, t, n) => {
      "use strict";
      var i = n(6059),
        s = Function.prototype,
        r = s.call,
        o = i && s.bind.bind(r, r);
      e.exports = i
        ? o
        : function (e) {
            return function () {
              return r.apply(e, arguments);
            };
          };
    },
    563: (e, t, n) => {
      "use strict";
      var i = n(2086),
        s = n(930);
      e.exports = function (e, t) {
        return arguments.length < 2
          ? ((n = i[e]), s(n) ? n : void 0)
          : i[e] && i[e][t];
        var n;
      };
    },
    2964: (e, t, n) => {
      "use strict";
      var i = n(5089),
        s = n(1858);
      e.exports = function (e, t) {
        var n = e[t];
        return s(n) ? void 0 : i(n);
      };
    },
    2086: function (e, t, n) {
      "use strict";
      var check = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        check("object" == typeof globalThis && globalThis) ||
        check("object" == typeof window && window) ||
        check("object" == typeof self && self) ||
        check("object" == typeof n.g && n.g) ||
        (function () {
          return this;
        })() ||
        this ||
        Function("return this")();
    },
    9606: (e, t, n) => {
      "use strict";
      var i = n(8240),
        s = n(3060),
        r = i({}.hasOwnProperty);
      e.exports =
        Object.hasOwn ||
        function hasOwn(e, t) {
          return r(s(e), t);
        };
    },
    7153: (e) => {
      "use strict";
      e.exports = {};
    },
    6761: (e, t, n) => {
      "use strict";
      var i = n(5283),
        s = n(3677),
        r = n(821);
      e.exports =
        !i &&
        !s(function () {
          return (
            7 !=
            Object.defineProperty(r("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    5974: (e, t, n) => {
      "use strict";
      var i = n(8240),
        s = n(3677),
        r = n(2306),
        o = Object,
        a = i("".split);
      e.exports = s(function () {
        return !o("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == r(e) ? a(e, "") : o(e);
          }
        : o;
    },
    5070: (e, t, n) => {
      "use strict";
      var i = n(930),
        s = n(8759),
        r = n(7530);
      e.exports = function (e, t, n) {
        var o, a;
        return (
          r &&
            i((o = t.constructor)) &&
            o !== n &&
            s((a = o.prototype)) &&
            a !== n.prototype &&
            r(e, a),
          e
        );
      };
    },
    9277: (e, t, n) => {
      "use strict";
      var i = n(8240),
        s = n(930),
        r = n(4489),
        o = i(Function.toString);
      s(r.inspectSource) ||
        (r.inspectSource = function (e) {
          return o(e);
        }),
        (e.exports = r.inspectSource);
    },
    8945: (e, t, n) => {
      "use strict";
      var i = n(8759),
        s = n(2585);
      e.exports = function (e, t) {
        i(t) && "cause" in t && s(e, "cause", t.cause);
      };
    },
    3278: (e, t, n) => {
      "use strict";
      var i,
        s,
        r,
        o = n(640),
        a = n(2086),
        l = n(8759),
        c = n(2585),
        u = n(9606),
        d = n(4489),
        h = n(8944),
        m = n(7153),
        g = "Object already initialized",
        p = a.TypeError,
        f = a.WeakMap;
      if (o || d.state) {
        var b = d.state || (d.state = new f());
        (b.get = b.get),
          (b.has = b.has),
          (b.set = b.set),
          (i = function (e, t) {
            if (b.has(e)) throw p(g);
            return (t.facade = e), b.set(e, t), t;
          }),
          (s = function (e) {
            return b.get(e) || {};
          }),
          (r = function (e) {
            return b.has(e);
          });
      } else {
        var v = h("state");
        (m[v] = !0),
          (i = function (e, t) {
            if (u(e, v)) throw p(g);
            return (t.facade = e), c(e, v, t), t;
          }),
          (s = function (e) {
            return u(e, v) ? e[v] : {};
          }),
          (r = function (e) {
            return u(e, v);
          });
      }
      e.exports = {
        set: i,
        get: s,
        has: r,
        enforce: function (e) {
          return r(e) ? s(e) : i(e, {});
        },
        getterFor: function (e) {
          return function (t) {
            var n;
            if (!l(t) || (n = s(t)).type !== e)
              throw p("Incompatible receiver, " + e + " required");
            return n;
          };
        },
      };
    },
    930: (e, t, n) => {
      "use strict";
      var i = n(7886),
        s = i.all;
      e.exports = i.IS_HTMLDDA
        ? function (e) {
            return "function" == typeof e || e === s;
          }
        : function (e) {
            return "function" == typeof e;
          };
    },
    7189: (e, t, n) => {
      "use strict";
      var i = n(3677),
        s = n(930),
        r = /#|\.prototype\./,
        isForced = function (e, t) {
          var n = a[o(e)];
          return n == c || (n != l && (s(t) ? i(t) : !!t));
        },
        o = (isForced.normalize = function (e) {
          return String(e).replace(r, ".").toLowerCase();
        }),
        a = (isForced.data = {}),
        l = (isForced.NATIVE = "N"),
        c = (isForced.POLYFILL = "P");
      e.exports = isForced;
    },
    1858: (e) => {
      "use strict";
      e.exports = function (e) {
        return null == e;
      };
    },
    8759: (e, t, n) => {
      "use strict";
      var i = n(930),
        s = n(7886),
        r = s.all;
      e.exports = s.IS_HTMLDDA
        ? function (e) {
            return "object" == typeof e ? null !== e : i(e) || e === r;
          }
        : function (e) {
            return "object" == typeof e ? null !== e : i(e);
          };
    },
    3296: (e) => {
      "use strict";
      e.exports = !1;
    },
    2071: (e, t, n) => {
      "use strict";
      var i = n(563),
        s = n(930),
        r = n(5516),
        o = n(1876),
        a = Object;
      e.exports = o
        ? function (e) {
            return "symbol" == typeof e;
          }
        : function (e) {
            var t = i("Symbol");
            return s(t) && r(t.prototype, a(e));
          };
    },
    2871: (e, t, n) => {
      "use strict";
      var i = n(4005);
      e.exports = function (e) {
        return i(e.length);
      };
    },
    3712: (e, t, n) => {
      "use strict";
      var i = n(8240),
        s = n(3677),
        r = n(930),
        o = n(9606),
        a = n(5283),
        l = n(4398).CONFIGURABLE,
        c = n(9277),
        u = n(3278),
        d = u.enforce,
        h = u.get,
        m = String,
        g = Object.defineProperty,
        p = i("".slice),
        f = i("".replace),
        b = i([].join),
        v =
          a &&
          !s(function () {
            return 8 !== g(function () {}, "length", { value: 8 }).length;
          }),
        y = String(String).split("String"),
        S = (e.exports = function (e, t, n) {
          "Symbol(" === p(m(t), 0, 7) &&
            (t = "[" + f(m(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
            n && n.getter && (t = "get " + t),
            n && n.setter && (t = "set " + t),
            (!o(e, "name") || (l && e.name !== t)) &&
              (a ? g(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
            v &&
              n &&
              o(n, "arity") &&
              e.length !== n.arity &&
              g(e, "length", { value: n.arity });
          try {
            n && o(n, "constructor") && n.constructor
              ? a && g(e, "prototype", { writable: !1 })
              : e.prototype && (e.prototype = void 0);
          } catch (e) {}
          var i = d(e);
          return (
            o(i, "source") || (i.source = b(y, "string" == typeof t ? t : "")),
            e
          );
        });
      Function.prototype.toString = S(function toString() {
        return (r(this) && h(this).source) || c(this);
      }, "toString");
    },
    5681: (e) => {
      "use strict";
      var t = Math.ceil,
        n = Math.floor;
      e.exports =
        Math.trunc ||
        function trunc(e) {
          var i = +e;
          return (i > 0 ? n : t)(i);
        };
    },
    1879: (e, t, n) => {
      "use strict";
      var i = n(4059);
      e.exports = function (e, t) {
        return void 0 === e ? (arguments.length < 2 ? "" : t) : i(e);
      };
    },
    7826: (e, t, n) => {
      "use strict";
      var i = n(5283),
        s = n(6761),
        r = n(8202),
        o = n(6112),
        a = n(2258),
        l = TypeError,
        c = Object.defineProperty,
        u = Object.getOwnPropertyDescriptor,
        d = "enumerable",
        h = "configurable",
        m = "writable";
      t.f = i
        ? r
          ? function defineProperty(e, t, n) {
              if (
                (o(e),
                (t = a(t)),
                o(n),
                "function" == typeof e &&
                  "prototype" === t &&
                  "value" in n &&
                  m in n &&
                  !n[m])
              ) {
                var i = u(e, t);
                i &&
                  i[m] &&
                  ((e[t] = n.value),
                  (n = {
                    configurable: h in n ? n[h] : i[h],
                    enumerable: d in n ? n[d] : i[d],
                    writable: !1,
                  }));
              }
              return c(e, t, n);
            }
          : c
        : function defineProperty(e, t, n) {
            if ((o(e), (t = a(t)), o(n), s))
              try {
                return c(e, t, n);
              } catch (e) {}
            if ("get" in n || "set" in n) throw l("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
          };
    },
    4399: (e, t, n) => {
      "use strict";
      var i = n(5283),
        s = n(9413),
        r = n(7446),
        o = n(5736),
        a = n(4088),
        l = n(2258),
        c = n(9606),
        u = n(6761),
        d = Object.getOwnPropertyDescriptor;
      t.f = i
        ? d
        : function getOwnPropertyDescriptor(e, t) {
            if (((e = a(e)), (t = l(t)), u))
              try {
                return d(e, t);
              } catch (e) {}
            if (c(e, t)) return o(!s(r.f, e, t), e[t]);
          };
    },
    62: (e, t, n) => {
      "use strict";
      var i = n(1352),
        s = n(8684).concat("length", "prototype");
      t.f =
        Object.getOwnPropertyNames ||
        function getOwnPropertyNames(e) {
          return i(e, s);
        };
    },
    6952: (e, t) => {
      "use strict";
      t.f = Object.getOwnPropertySymbols;
    },
    5516: (e, t, n) => {
      "use strict";
      var i = n(8240);
      e.exports = i({}.isPrototypeOf);
    },
    1352: (e, t, n) => {
      "use strict";
      var i = n(8240),
        s = n(9606),
        r = n(4088),
        o = n(6198).indexOf,
        a = n(7153),
        l = i([].push);
      e.exports = function (e, t) {
        var n,
          i = r(e),
          c = 0,
          u = [];
        for (n in i) !s(a, n) && s(i, n) && l(u, n);
        for (; t.length > c; ) s(i, (n = t[c++])) && (~o(u, n) || l(u, n));
        return u;
      };
    },
    7446: (e, t) => {
      "use strict";
      var n = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        s = i && !n.call({ 1: 2 }, 1);
      t.f = s
        ? function propertyIsEnumerable(e) {
            var t = i(this, e);
            return !!t && t.enumerable;
          }
        : n;
    },
    7530: (e, t, n) => {
      "use strict";
      var i = n(1518),
        s = n(6112),
        r = n(1378);
      e.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                t = !1,
                n = {};
              try {
                (e = i(Object.prototype, "__proto__", "set"))(n, []),
                  (t = n instanceof Array);
              } catch (e) {}
              return function setPrototypeOf(n, i) {
                return s(n), r(i), t ? e(n, i) : (n.__proto__ = i), n;
              };
            })()
          : void 0);
    },
    7999: (e, t, n) => {
      "use strict";
      var i = n(9413),
        s = n(930),
        r = n(8759),
        o = TypeError;
      e.exports = function (e, t) {
        var n, a;
        if ("string" === t && s((n = e.toString)) && !r((a = i(n, e))))
          return a;
        if (s((n = e.valueOf)) && !r((a = i(n, e)))) return a;
        if ("string" !== t && s((n = e.toString)) && !r((a = i(n, e))))
          return a;
        throw o("Can't convert object to primitive value");
      };
    },
    6095: (e, t, n) => {
      "use strict";
      var i = n(563),
        s = n(8240),
        r = n(62),
        o = n(6952),
        a = n(6112),
        l = s([].concat);
      e.exports =
        i("Reflect", "ownKeys") ||
        function ownKeys(e) {
          var t = r.f(a(e)),
            n = o.f;
          return n ? l(t, n(e)) : t;
        };
    },
    1632: (e, t, n) => {
      "use strict";
      var i = n(7826).f;
      e.exports = function (e, t, n) {
        n in e ||
          i(e, n, {
            configurable: !0,
            get: function () {
              return t[n];
            },
            set: function (e) {
              t[n] = e;
            },
          });
      };
    },
    9586: (e, t, n) => {
      "use strict";
      var i = n(1858),
        s = TypeError;
      e.exports = function (e) {
        if (i(e)) throw s("Can't call method on " + e);
        return e;
      };
    },
    8944: (e, t, n) => {
      "use strict";
      var i = n(9197),
        s = n(5422),
        r = i("keys");
      e.exports = function (e) {
        return r[e] || (r[e] = s(e));
      };
    },
    4489: (e, t, n) => {
      "use strict";
      var i = n(2086),
        s = n(9444),
        r = "__core-js_shared__",
        o = i[r] || s(r, {});
      e.exports = o;
    },
    9197: (e, t, n) => {
      "use strict";
      var i = n(3296),
        s = n(4489);
      (e.exports = function (e, t) {
        return s[e] || (s[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.32.0",
        mode: i ? "pure" : "global",
        copyright: "Â© 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",
        source: "https://github.com/zloirock/core-js",
      });
    },
    5558: (e, t, n) => {
      "use strict";
      var i = n(1448),
        s = n(3677),
        r = n(2086).String;
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !s(function () {
          var e = Symbol();
          return (
            !r(e) ||
            !(Object(e) instanceof Symbol) ||
            (!Symbol.sham && i && i < 41)
          );
        });
    },
    7740: (e, t, n) => {
      "use strict";
      var i = n(9502),
        s = Math.max,
        r = Math.min;
      e.exports = function (e, t) {
        var n = i(e);
        return n < 0 ? s(n + t, 0) : r(n, t);
      };
    },
    4088: (e, t, n) => {
      "use strict";
      var i = n(5974),
        s = n(9586);
      e.exports = function (e) {
        return i(s(e));
      };
    },
    9502: (e, t, n) => {
      "use strict";
      var i = n(5681);
      e.exports = function (e) {
        var t = +e;
        return t != t || 0 === t ? 0 : i(t);
      };
    },
    4005: (e, t, n) => {
      "use strict";
      var i = n(9502),
        s = Math.min;
      e.exports = function (e) {
        return e > 0 ? s(i(e), 9007199254740991) : 0;
      };
    },
    3060: (e, t, n) => {
      "use strict";
      var i = n(9586),
        s = Object;
      e.exports = function (e) {
        return s(i(e));
      };
    },
    1288: (e, t, n) => {
      "use strict";
      var i = n(9413),
        s = n(8759),
        r = n(2071),
        o = n(2964),
        a = n(7999),
        l = n(211),
        c = TypeError,
        u = l("toPrimitive");
      e.exports = function (e, t) {
        if (!s(e) || r(e)) return e;
        var n,
          l = o(e, u);
        if (l) {
          if (
            (void 0 === t && (t = "default"), (n = i(l, e, t)), !s(n) || r(n))
          )
            return n;
          throw c("Can't convert object to primitive value");
        }
        return void 0 === t && (t = "number"), a(e, t);
      };
    },
    2258: (e, t, n) => {
      "use strict";
      var i = n(1288),
        s = n(2071);
      e.exports = function (e) {
        var t = i(e, "string");
        return s(t) ? t : t + "";
      };
    },
    2371: (e, t, n) => {
      "use strict";
      var i = {};
      (i[n(211)("toStringTag")] = "z"),
        (e.exports = "[object z]" === String(i));
    },
    4059: (e, t, n) => {
      "use strict";
      var i = n(375),
        s = String;
      e.exports = function (e) {
        if ("Symbol" === i(e))
          throw TypeError("Cannot convert a Symbol value to a string");
        return s(e);
      };
    },
    9268: (e) => {
      "use strict";
      var t = String;
      e.exports = function (e) {
        try {
          return t(e);
        } catch (e) {
          return "Object";
        }
      };
    },
    5422: (e, t, n) => {
      "use strict";
      var i = n(8240),
        s = 0,
        r = Math.random(),
        o = i((1).toString);
      e.exports = function (e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++s + r, 36);
      };
    },
    1876: (e, t, n) => {
      "use strict";
      var i = n(5558);
      e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    8202: (e, t, n) => {
      "use strict";
      var i = n(5283),
        s = n(3677);
      e.exports =
        i &&
        s(function () {
          return (
            42 !=
            Object.defineProperty(function () {}, "prototype", {
              value: 42,
              writable: !1,
            }).prototype
          );
        });
    },
    640: (e, t, n) => {
      "use strict";
      var i = n(2086),
        s = n(930),
        r = i.WeakMap;
      e.exports = s(r) && /native code/.test(String(r));
    },
    211: (e, t, n) => {
      "use strict";
      var i = n(2086),
        s = n(9197),
        r = n(9606),
        o = n(5422),
        a = n(5558),
        l = n(1876),
        c = i.Symbol,
        u = s("wks"),
        d = l ? c.for || c : (c && c.withoutSetter) || o;
      e.exports = function (e) {
        return r(u, e) || (u[e] = a && r(c, e) ? c[e] : d("Symbol." + e)), u[e];
      };
    },
    1557: (e, t, n) => {
      "use strict";
      var i = n(563),
        s = n(9606),
        r = n(2585),
        o = n(5516),
        a = n(7530),
        l = n(8474),
        c = n(1632),
        u = n(5070),
        d = n(1879),
        h = n(8945),
        m = n(8395),
        g = n(5283),
        p = n(3296);
      e.exports = function (e, t, n, f) {
        var b = "stackTraceLimit",
          v = f ? 2 : 1,
          y = e.split("."),
          S = y[y.length - 1],
          w = i.apply(null, y);
        if (w) {
          var E = w.prototype;
          if ((!p && s(E, "cause") && delete E.cause, !n)) return w;
          var T = i("Error"),
            x = t(function (e, t) {
              var n = d(f ? t : e, void 0),
                i = f ? new w(e) : new w();
              return (
                void 0 !== n && r(i, "message", n),
                m(i, x, i.stack, 2),
                this && o(E, this) && u(i, this, x),
                arguments.length > v && h(i, arguments[v]),
                i
              );
            });
          if (
            ((x.prototype = E),
            "Error" !== S
              ? a
                ? a(x, T)
                : l(x, T, { name: !0 })
              : g && b in w && (c(x, w, b), c(x, w, "prepareStackTrace")),
            l(x, w),
            !p)
          )
            try {
              E.name !== S && r(E, "name", S), (E.constructor = x);
            } catch (e) {}
          return x;
        }
      };
    },
    740: (e, t, n) => {
      "use strict";
      var i = n(1695),
        s = n(2086),
        r = n(7258),
        o = n(1557),
        a = "WebAssembly",
        l = s[a],
        c = 7 !== Error("e", { cause: 7 }).cause,
        exportGlobalErrorCauseWrapper = function (e, t) {
          var n = {};
          (n[e] = o(e, t, c)),
            i({ global: !0, constructor: !0, arity: 1, forced: c }, n);
        },
        exportWebAssemblyErrorCauseWrapper = function (e, t) {
          if (l && l[e]) {
            var n = {};
            (n[e] = o(a + "." + e, t, c)),
              i(
                { target: a, stat: !0, constructor: !0, arity: 1, forced: c },
                n
              );
          }
        };
      exportGlobalErrorCauseWrapper("Error", function (e) {
        return function Error(t) {
          return r(e, this, arguments);
        };
      }),
        exportGlobalErrorCauseWrapper("EvalError", function (e) {
          return function EvalError(t) {
            return r(e, this, arguments);
          };
        }),
        exportGlobalErrorCauseWrapper("RangeError", function (e) {
          return function RangeError(t) {
            return r(e, this, arguments);
          };
        }),
        exportGlobalErrorCauseWrapper("ReferenceError", function (e) {
          return function ReferenceError(t) {
            return r(e, this, arguments);
          };
        }),
        exportGlobalErrorCauseWrapper("SyntaxError", function (e) {
          return function SyntaxError(t) {
            return r(e, this, arguments);
          };
        }),
        exportGlobalErrorCauseWrapper("TypeError", function (e) {
          return function TypeError(t) {
            return r(e, this, arguments);
          };
        }),
        exportGlobalErrorCauseWrapper("URIError", function (e) {
          return function URIError(t) {
            return r(e, this, arguments);
          };
        }),
        exportWebAssemblyErrorCauseWrapper("CompileError", function (e) {
          return function CompileError(t) {
            return r(e, this, arguments);
          };
        }),
        exportWebAssemblyErrorCauseWrapper("LinkError", function (e) {
          return function LinkError(t) {
            return r(e, this, arguments);
          };
        }),
        exportWebAssemblyErrorCauseWrapper("RuntimeError", function (e) {
          return function RuntimeError(t) {
            return r(e, this, arguments);
          };
        });
    },
    3231: (e, t, n) => {
      var i = n(4040);
      (e.exports = function _defineProperty(e, t, n) {
        return (
          (t = i(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    3203: (e) => {
      (e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    6027: (e, t, n) => {
      var i = n(7501).default;
      (e.exports = function toPrimitive(e, t) {
        if ("object" != i(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var s = n.call(e, t || "default");
          if ("object" != i(s)) return s;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    4040: (e, t, n) => {
      var i = n(7501).default,
        s = n(6027);
      (e.exports = function toPropertyKey(e) {
        var t = s(e, "string");
        return "symbol" == i(t) ? t : String(t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    7501: (e) => {
      function _typeof(t) {
        return (
          (e.exports = _typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          _typeof(t)
        );
      }
      (e.exports = _typeof),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
  (e) => {
    var t;
    (t = 6412), e((e.s = t));
  },
]);
!(function () {
  "use strict";
  function Waypoint(options) {
    if (!options) throw new Error("No options passed to Waypoint constructor");
    if (!options.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!options.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + keyCounter),
      (this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)),
      (this.element = this.options.element),
      (this.adapter = new Waypoint.Adapter(this.element)),
      (this.callback = options.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = Waypoint.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = Waypoint.Context.findOrCreateByElement(
        this.options.context
      )),
      Waypoint.offsetAliases[this.options.offset] &&
        (this.options.offset = Waypoint.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (allWaypoints[this.key] = this),
      (keyCounter += 1);
  }
  var keyCounter = 0,
    allWaypoints = {};
  (Waypoint.prototype.queueTrigger = function (direction) {
    this.group.queueTrigger(this, direction);
  }),
    (Waypoint.prototype.trigger = function (args) {
      this.enabled && this.callback && this.callback.apply(this, args);
    }),
    (Waypoint.prototype.destroy = function () {
      this.context.remove(this),
        this.group.remove(this),
        delete allWaypoints[this.key];
    }),
    (Waypoint.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (Waypoint.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (Waypoint.prototype.next = function () {
      return this.group.next(this);
    }),
    (Waypoint.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (Waypoint.invokeAll = function (method) {
      var allWaypointsArray = [];
      for (var waypointKey in allWaypoints)
        allWaypointsArray.push(allWaypoints[waypointKey]);
      for (var i = 0, end = allWaypointsArray.length; i < end; i++)
        allWaypointsArray[i][method]();
    }),
    (Waypoint.destroyAll = function () {
      Waypoint.invokeAll("destroy");
    }),
    (Waypoint.disableAll = function () {
      Waypoint.invokeAll("disable");
    }),
    (Waypoint.enableAll = function () {
      Waypoint.Context.refreshAll();
      for (var waypointKey in allWaypoints)
        allWaypoints[waypointKey].enabled = !0;
      return this;
    }),
    (Waypoint.refreshAll = function () {
      Waypoint.Context.refreshAll();
    }),
    (Waypoint.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (Waypoint.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (Waypoint.adapters = []),
    (Waypoint.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (Waypoint.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = Waypoint);
})(),
  (function () {
    "use strict";
    function requestAnimationFrameShim(callback) {
      window.setTimeout(callback, 1e3 / 60);
    }
    function Context(element) {
      (this.element = element),
        (this.Adapter = Waypoint.Adapter),
        (this.adapter = new this.Adapter(element)),
        (this.key = "waypoint-context-" + keyCounter),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (element.waypointContextKey = this.key),
        (contexts[element.waypointContextKey] = this),
        (keyCounter += 1),
        Waypoint.windowContext ||
          ((Waypoint.windowContext = !0),
          (Waypoint.windowContext = new Context(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var keyCounter = 0,
      contexts = {},
      Waypoint = window.Waypoint,
      oldWindowLoad = window.onload;
    (Context.prototype.add = function (waypoint) {
      var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[axis][waypoint.key] = waypoint), this.refresh();
    }),
      (Context.prototype.checkEmpty = function () {
        var horizontalEmpty = this.Adapter.isEmptyObject(
            this.waypoints.horizontal
          ),
          verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
          isWindow = this.element == this.element.window;
        horizontalEmpty &&
          verticalEmpty &&
          !isWindow &&
          (this.adapter.off(".waypoints"), delete contexts[this.key]);
      }),
      (Context.prototype.createThrottledResizeHandler = function () {
        function resizeHandler() {
          self.handleResize(), (self.didResize = !1);
        }
        var self = this;
        this.adapter.on("resize.waypoints", function () {
          self.didResize ||
            ((self.didResize = !0),
            Waypoint.requestAnimationFrame(resizeHandler));
        });
      }),
      (Context.prototype.createThrottledScrollHandler = function () {
        function scrollHandler() {
          self.handleScroll(), (self.didScroll = !1);
        }
        var self = this;
        this.adapter.on("scroll.waypoints", function () {
          (self.didScroll && !Waypoint.isTouch) ||
            ((self.didScroll = !0),
            Waypoint.requestAnimationFrame(scrollHandler));
        });
      }),
      (Context.prototype.handleResize = function () {
        Waypoint.Context.refreshAll();
      }),
      (Context.prototype.handleScroll = function () {
        var triggeredGroups = {},
          axes = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var axisKey in axes) {
          var axis = axes[axisKey],
            isForward = axis.newScroll > axis.oldScroll,
            direction = isForward ? axis.forward : axis.backward;
          for (var waypointKey in this.waypoints[axisKey]) {
            var waypoint = this.waypoints[axisKey][waypointKey];
            if (null !== waypoint.triggerPoint) {
              var wasBeforeTriggerPoint =
                  axis.oldScroll < waypoint.triggerPoint,
                nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
                crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
                crossedBackward =
                  !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
              (crossedForward || crossedBackward) &&
                (waypoint.queueTrigger(direction),
                (triggeredGroups[waypoint.group.id] = waypoint.group));
            }
          }
        }
        for (var groupKey in triggeredGroups)
          triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll,
        };
      }),
      (Context.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? Waypoint.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (Context.prototype.remove = function (waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty();
      }),
      (Context.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? Waypoint.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (Context.prototype.destroy = function () {
        var allWaypoints = [];
        for (var axis in this.waypoints)
          for (var waypointKey in this.waypoints[axis])
            allWaypoints.push(this.waypoints[axis][waypointKey]);
        for (var i = 0, end = allWaypoints.length; i < end; i++)
          allWaypoints[i].destroy();
      }),
      (Context.prototype.refresh = function () {
        var axes,
          isWindow = this.element == this.element.window,
          contextOffset = isWindow ? void 0 : this.adapter.offset(),
          triggeredGroups = {};
        this.handleScroll(),
          (axes = {
            horizontal: {
              contextOffset: isWindow ? 0 : contextOffset.left,
              contextScroll: isWindow ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: isWindow ? 0 : contextOffset.top,
              contextScroll: isWindow ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var axisKey in axes) {
          var axis = axes[axisKey];
          for (var waypointKey in this.waypoints[axisKey]) {
            var contextModifier,
              wasBeforeScroll,
              nowAfterScroll,
              triggeredBackward,
              triggeredForward,
              waypoint = this.waypoints[axisKey][waypointKey],
              adjustment = waypoint.options.offset,
              oldTriggerPoint = waypoint.triggerPoint,
              elementOffset = 0,
              freshWaypoint = null == oldTriggerPoint;
            waypoint.element !== waypoint.element.window &&
              (elementOffset = waypoint.adapter.offset()[axis.offsetProp]),
              "function" == typeof adjustment
                ? (adjustment = adjustment.apply(waypoint))
                : "string" == typeof adjustment &&
                  ((adjustment = parseFloat(adjustment)),
                  waypoint.options.offset.indexOf("%") > -1 &&
                    (adjustment = Math.ceil(
                      (axis.contextDimension * adjustment) / 100
                    ))),
              (contextModifier = axis.contextScroll - axis.contextOffset),
              (waypoint.triggerPoint = Math.floor(
                elementOffset + contextModifier - adjustment
              )),
              (wasBeforeScroll = oldTriggerPoint < axis.oldScroll),
              (nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll),
              (triggeredBackward = wasBeforeScroll && nowAfterScroll),
              (triggeredForward = !wasBeforeScroll && !nowAfterScroll),
              !freshWaypoint && triggeredBackward
                ? (waypoint.queueTrigger(axis.backward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group))
                : !freshWaypoint && triggeredForward
                ? (waypoint.queueTrigger(axis.forward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group))
                : freshWaypoint &&
                  axis.oldScroll >= waypoint.triggerPoint &&
                  (waypoint.queueTrigger(axis.forward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group));
          }
        }
        return (
          Waypoint.requestAnimationFrame(function () {
            for (var groupKey in triggeredGroups)
              triggeredGroups[groupKey].flushTriggers();
          }),
          this
        );
      }),
      (Context.findOrCreateByElement = function (element) {
        return Context.findByElement(element) || new Context(element);
      }),
      (Context.refreshAll = function () {
        for (var contextId in contexts) contexts[contextId].refresh();
      }),
      (Context.findByElement = function (element) {
        return contexts[element.waypointContextKey];
      }),
      (window.onload = function () {
        oldWindowLoad && oldWindowLoad(), Context.refreshAll();
      }),
      (Waypoint.requestAnimationFrame = function (callback) {
        var requestFn =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          requestAnimationFrameShim;
        requestFn.call(window, callback);
      }),
      (Waypoint.Context = Context);
  })(),
  (function () {
    "use strict";
    function byTriggerPoint(a, b) {
      return a.triggerPoint - b.triggerPoint;
    }
    function byReverseTriggerPoint(a, b) {
      return b.triggerPoint - a.triggerPoint;
    }
    function Group(options) {
      (this.name = options.name),
        (this.axis = options.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (groups[this.axis][this.name] = this);
    }
    var groups = { vertical: {}, horizontal: {} },
      Waypoint = window.Waypoint;
    (Group.prototype.add = function (waypoint) {
      this.waypoints.push(waypoint);
    }),
      (Group.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (Group.prototype.flushTriggers = function () {
        for (var direction in this.triggerQueues) {
          var waypoints = this.triggerQueues[direction],
            reverse = "up" === direction || "left" === direction;
          waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
          for (var i = 0, end = waypoints.length; i < end; i += 1) {
            var waypoint = waypoints[i];
            (waypoint.options.continuous || i === waypoints.length - 1) &&
              waypoint.trigger([direction]);
          }
        }
        this.clearTriggerQueues();
      }),
      (Group.prototype.next = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints),
          isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1];
      }),
      (Group.prototype.previous = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null;
      }),
      (Group.prototype.queueTrigger = function (waypoint, direction) {
        this.triggerQueues[direction].push(waypoint);
      }),
      (Group.prototype.remove = function (waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        index > -1 && this.waypoints.splice(index, 1);
      }),
      (Group.prototype.first = function () {
        return this.waypoints[0];
      }),
      (Group.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (Group.findOrCreate = function (options) {
        return groups[options.axis][options.name] || new Group(options);
      }),
      (Waypoint.Group = Group);
  })(),
  (function () {
    "use strict";
    function JQueryAdapter(element) {
      this.$element = $(element);
    }
    var $ = window.jQuery,
      Waypoint = window.Waypoint;
    $.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (i, method) {
        JQueryAdapter.prototype[method] = function () {
          var args = Array.prototype.slice.call(arguments);
          return this.$element[method].apply(this.$element, args);
        };
      }
    ),
      $.each(["extend", "inArray", "isEmptyObject"], function (i, method) {
        JQueryAdapter[method] = $[method];
      }),
      Waypoint.adapters.push({ name: "jquery", Adapter: JQueryAdapter }),
      (Waypoint.Adapter = JQueryAdapter);
  })(),
  (function () {
    "use strict";
    function createExtension(framework) {
      return function () {
        var waypoints = [],
          overrides = arguments[0];
        return (
          framework.isFunction(arguments[0]) &&
            ((overrides = framework.extend({}, arguments[1])),
            (overrides.handler = arguments[0])),
          this.each(function () {
            var options = framework.extend({}, overrides, { element: this });
            "string" == typeof options.context &&
              (options.context = framework(this).closest(options.context)[0]),
              waypoints.push(new Waypoint(options));
          }),
          waypoints
        );
      };
    }
    var Waypoint = window.Waypoint;
    window.jQuery &&
      (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)),
      window.Zepto &&
        (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto));
  })();
/*! jQuery UI - v1.13.3 - 2024-04-26
 * https://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (x) {
  "use strict";
  var t, e, i, n, W, C, o, s, r, l, a, h, u;
  function E(t, e, i) {
    return [
      parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1),
      parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1),
    ];
  }
  function L(t, e) {
    return parseInt(x.css(t, e), 10) || 0;
  }
  function N(t) {
    return null != t && t === t.window;
  }
  (x.ui = x.ui || {}),
    (x.ui.version = "1.13.3"),
    /*!
     * jQuery UI :data 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     */
    x.extend(x.expr.pseudos, {
      data: x.expr.createPseudo
        ? x.expr.createPseudo(function (e) {
            return function (t) {
              return !!x.data(t, e);
            };
          })
        : function (t, e, i) {
            return !!x.data(t, i[3]);
          },
    }),
    /*!
     * jQuery UI Disable Selection 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     */
    x.fn.extend({
      disableSelection:
        ((t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown"),
        function () {
          return this.on(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        }),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    }),
    /*!
     * jQuery UI Focusable 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     */
    (x.ui.focusable = function (t, e) {
      var i,
        n,
        o,
        s = t.nodeName.toLowerCase();
      return "area" === s
        ? ((o = (i = t.parentNode).name),
          !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) &&
            0 < (i = x("img[usemap='#" + o + "']")).length &&
            i.is(":visible"))
        : (/^(input|select|textarea|button|object)$/.test(s)
            ? (n = !t.disabled) &&
              (o = x(t).closest("fieldset")[0]) &&
              (n = !o.disabled)
            : (n = ("a" === s && t.href) || e),
          n &&
            x(t).is(":visible") &&
            (function (t) {
              var e = t.css("visibility");
              for (; "inherit" === e; )
                (t = t.parent()), (e = t.css("visibility"));
              return "visible" === e;
            })(x(t)));
    }),
    x.extend(x.expr.pseudos, {
      focusable: function (t) {
        return x.ui.focusable(t, null != x.attr(t, "tabindex"));
      },
    }),
    (x.fn._form = function () {
      return "string" == typeof this[0].form
        ? this.closest("form")
        : x(this[0].form);
    }),
    /*!
     * jQuery UI Form Reset Mixin 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     */
    (x.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = x(this);
        setTimeout(function () {
          var t = e.data("ui-form-reset-instances");
          x.each(t, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        var t;
        (this.form = this.element._form()),
          this.form.length &&
            ((t = this.form.data("ui-form-reset-instances") || []).length ||
              this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t));
      },
      _unbindFormResetHandler: function () {
        var t;
        this.form.length &&
          ((t = this.form.data("ui-form-reset-instances")).splice(
            x.inArray(this, t),
            1
          ),
          t.length
            ? this.form.data("ui-form-reset-instances", t)
            : this.form
                .removeData("ui-form-reset-instances")
                .off("reset.ui-form-reset"));
      },
    }),
    (x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    /*!
     * jQuery UI Support for jQuery core 1.8.x and newer 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     *
     */
    x.expr.pseudos || (x.expr.pseudos = x.expr[":"]),
    x.uniqueSort || (x.uniqueSort = x.unique),
    x.escapeSelector ||
      ((e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g),
      (i = function (t, e) {
        return e
          ? "\0" === t
            ? "ï¿½"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      }),
      (x.escapeSelector = function (t) {
        return (t + "").replace(e, i);
      })),
    (x.fn.even && x.fn.odd) ||
      x.fn.extend({
        even: function () {
          return this.filter(function (t) {
            return t % 2 == 0;
          });
        },
        odd: function () {
          return this.filter(function (t) {
            return t % 2 == 1;
          });
        },
      }),
    /*!
     * jQuery UI Keycode 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     */
    (x.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    /*!
     * jQuery UI Labels 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     */
    (x.fn.labels = function () {
      var t, e, i;
      return this.length
        ? this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((e = this.eq(0).parents("label")),
            (t = this.attr("id")) &&
              ((i = (i = this.eq(0).parents().last()).add(
                (i.length ? i : this).siblings()
              )),
              (t = "label[for='" + x.escapeSelector(t) + "']"),
              (e = e.add(i.find(t).addBack(t)))),
            this.pushStack(e))
        : this.pushStack([]);
    }),
    (x.ui.plugin = {
      add: function (t, e, i) {
        var n,
          o = x.ui[t].prototype;
        for (n in i)
          (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([e, i[n]]);
      },
      call: function (t, e, i, n) {
        var o,
          s = t.plugins[e];
        if (
          s &&
          (n ||
            (t.element[0].parentNode &&
              11 !== t.element[0].parentNode.nodeType))
        )
          for (o = 0; o < s.length; o++)
            t.options[s[o][0]] && s[o][1].apply(t.element, i);
      },
    }),
    /*!
     * jQuery UI Position 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     *
     * https://api.jqueryui.com/position/
     */
    (W = Math.max),
    (C = Math.abs),
    (o = /left|center|right/),
    (s = /top|center|bottom/),
    (r = /[\+\-]\d+(\.[\d]+)?%?/),
    (l = /^\w+/),
    (a = /%$/),
    (h = x.fn.position),
    (x.position = {
      scrollbarWidth: function () {
        var t, e, i;
        return void 0 !== n
          ? n
          : ((i = (e = x(
              "<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"
            )).children()[0]),
            x("body").append(e),
            (t = i.offsetWidth),
            e.css("overflow", "scroll"),
            t === (i = i.offsetWidth) && (i = e[0].clientWidth),
            e.remove(),
            (n = t - i));
      },
      getScrollInfo: function (t) {
        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
          i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
          e =
            "scroll" === e ||
            ("auto" === e && t.width < t.element[0].scrollWidth);
        return {
          width:
            "scroll" === i ||
            ("auto" === i && t.height < t.element[0].scrollHeight)
              ? x.position.scrollbarWidth()
              : 0,
          height: e ? x.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (t) {
        var e = x(t || window),
          i = N(e[0]),
          n = !!e[0] && 9 === e[0].nodeType;
        return {
          element: e,
          isWindow: i,
          isDocument: n,
          offset: !i && !n ? x(t).offset() : { left: 0, top: 0 },
          scrollLeft: e.scrollLeft(),
          scrollTop: e.scrollTop(),
          width: e.outerWidth(),
          height: e.outerHeight(),
        };
      },
    }),
    (x.fn.position = function (f) {
      var c, d, p, g, m, v, y, w, b, _, t, e;
      return f && f.of
        ? ((v =
            "string" == typeof (f = x.extend({}, f)).of
              ? x(document).find(f.of)
              : x(f.of)),
          (y = x.position.getWithinInfo(f.within)),
          (w = x.position.getScrollInfo(y)),
          (b = (f.collision || "flip").split(" ")),
          (_ = {}),
          (e =
            9 === (e = (t = v)[0]).nodeType
              ? {
                  width: t.width(),
                  height: t.height(),
                  offset: { top: 0, left: 0 },
                }
              : N(e)
              ? {
                  width: t.width(),
                  height: t.height(),
                  offset: { top: t.scrollTop(), left: t.scrollLeft() },
                }
              : e.preventDefault
              ? { width: 0, height: 0, offset: { top: e.pageY, left: e.pageX } }
              : {
                  width: t.outerWidth(),
                  height: t.outerHeight(),
                  offset: t.offset(),
                }),
          v[0].preventDefault && (f.at = "left top"),
          (d = e.width),
          (p = e.height),
          (m = x.extend({}, (g = e.offset))),
          x.each(["my", "at"], function () {
            var t,
              e,
              i = (f[this] || "").split(" ");
            ((i =
              1 === i.length
                ? o.test(i[0])
                  ? i.concat(["center"])
                  : s.test(i[0])
                  ? ["center"].concat(i)
                  : ["center", "center"]
                : i)[0] = o.test(i[0]) ? i[0] : "center"),
              (i[1] = s.test(i[1]) ? i[1] : "center"),
              (t = r.exec(i[0])),
              (e = r.exec(i[1])),
              (_[this] = [t ? t[0] : 0, e ? e[0] : 0]),
              (f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]);
          }),
          1 === b.length && (b[1] = b[0]),
          "right" === f.at[0]
            ? (m.left += d)
            : "center" === f.at[0] && (m.left += d / 2),
          "bottom" === f.at[1]
            ? (m.top += p)
            : "center" === f.at[1] && (m.top += p / 2),
          (c = E(_.at, d, p)),
          (m.left += c[0]),
          (m.top += c[1]),
          this.each(function () {
            var i,
              t,
              r = x(this),
              l = r.outerWidth(),
              a = r.outerHeight(),
              e = L(this, "marginLeft"),
              n = L(this, "marginTop"),
              o = l + e + L(this, "marginRight") + w.width,
              s = a + n + L(this, "marginBottom") + w.height,
              h = x.extend({}, m),
              u = E(_.my, r.outerWidth(), r.outerHeight());
            "right" === f.my[0]
              ? (h.left -= l)
              : "center" === f.my[0] && (h.left -= l / 2),
              "bottom" === f.my[1]
                ? (h.top -= a)
                : "center" === f.my[1] && (h.top -= a / 2),
              (h.left += u[0]),
              (h.top += u[1]),
              (i = { marginLeft: e, marginTop: n }),
              x.each(["left", "top"], function (t, e) {
                x.ui.position[b[t]] &&
                  x.ui.position[b[t]][e](h, {
                    targetWidth: d,
                    targetHeight: p,
                    elemWidth: l,
                    elemHeight: a,
                    collisionPosition: i,
                    collisionWidth: o,
                    collisionHeight: s,
                    offset: [c[0] + u[0], c[1] + u[1]],
                    my: f.my,
                    at: f.at,
                    within: y,
                    elem: r,
                  });
              }),
              f.using &&
                (t = function (t) {
                  var e = g.left - h.left,
                    i = e + d - l,
                    n = g.top - h.top,
                    o = n + p - a,
                    s = {
                      target: {
                        element: v,
                        left: g.left,
                        top: g.top,
                        width: d,
                        height: p,
                      },
                      element: {
                        element: r,
                        left: h.left,
                        top: h.top,
                        width: l,
                        height: a,
                      },
                      horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                      vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle",
                    };
                  d < l && C(e + i) < d && (s.horizontal = "center"),
                    p < a && C(n + o) < p && (s.vertical = "middle"),
                    W(C(e), C(i)) > W(C(n), C(o))
                      ? (s.important = "horizontal")
                      : (s.important = "vertical"),
                    f.using.call(this, t, s);
                }),
              r.offset(x.extend(h, { using: t }));
          }))
        : h.apply(this, arguments);
    }),
    (x.ui.position = {
      fit: {
        left: function (t, e) {
          var i,
            n = e.within,
            o = n.isWindow ? n.scrollLeft : n.offset.left,
            n = n.width,
            s = t.left - e.collisionPosition.marginLeft,
            r = o - s,
            l = s + e.collisionWidth - n - o;
          e.collisionWidth > n
            ? 0 < r && l <= 0
              ? ((i = t.left + r + e.collisionWidth - n - o), (t.left += r - i))
              : (t.left =
                  !(0 < l && r <= 0) && l < r ? o + n - e.collisionWidth : o)
            : 0 < r
            ? (t.left += r)
            : 0 < l
            ? (t.left -= l)
            : (t.left = W(t.left - s, t.left));
        },
        top: function (t, e) {
          var i,
            n = e.within,
            n = n.isWindow ? n.scrollTop : n.offset.top,
            o = e.within.height,
            s = t.top - e.collisionPosition.marginTop,
            r = n - s,
            l = s + e.collisionHeight - o - n;
          e.collisionHeight > o
            ? 0 < r && l <= 0
              ? ((i = t.top + r + e.collisionHeight - o - n), (t.top += r - i))
              : (t.top =
                  !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n)
            : 0 < r
            ? (t.top += r)
            : 0 < l
            ? (t.top -= l)
            : (t.top = W(t.top - s, t.top));
        },
      },
      flip: {
        left: function (t, e) {
          var i = e.within,
            n = i.offset.left + i.scrollLeft,
            o = i.width,
            i = i.isWindow ? i.scrollLeft : i.offset.left,
            s = t.left - e.collisionPosition.marginLeft,
            r = s - i,
            s = s + e.collisionWidth - o - i,
            l =
              "left" === e.my[0]
                ? -e.elemWidth
                : "right" === e.my[0]
                ? e.elemWidth
                : 0,
            a =
              "left" === e.at[0]
                ? e.targetWidth
                : "right" === e.at[0]
                ? -e.targetWidth
                : 0,
            h = -2 * e.offset[0];
          r < 0
            ? ((o = t.left + l + a + h + e.collisionWidth - o - n) < 0 ||
                o < C(r)) &&
              (t.left += l + a + h)
            : 0 < s &&
              (0 <
                (n = t.left - e.collisionPosition.marginLeft + l + a + h - i) ||
                C(n) < s) &&
              (t.left += l + a + h);
        },
        top: function (t, e) {
          var i = e.within,
            n = i.offset.top + i.scrollTop,
            o = i.height,
            i = i.isWindow ? i.scrollTop : i.offset.top,
            s = t.top - e.collisionPosition.marginTop,
            r = s - i,
            s = s + e.collisionHeight - o - i,
            l =
              "top" === e.my[1]
                ? -e.elemHeight
                : "bottom" === e.my[1]
                ? e.elemHeight
                : 0,
            a =
              "top" === e.at[1]
                ? e.targetHeight
                : "bottom" === e.at[1]
                ? -e.targetHeight
                : 0,
            h = -2 * e.offset[1];
          r < 0
            ? ((o = t.top + l + a + h + e.collisionHeight - o - n) < 0 ||
                o < C(r)) &&
              (t.top += l + a + h)
            : 0 < s &&
              (0 <
                (n = t.top - e.collisionPosition.marginTop + l + a + h - i) ||
                C(n) < s) &&
              (t.top += l + a + h);
        },
      },
      flipfit: {
        left: function () {
          x.ui.position.flip.left.apply(this, arguments),
            x.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          x.ui.position.flip.top.apply(this, arguments),
            x.ui.position.fit.top.apply(this, arguments);
        },
      },
    }),
    (x.ui.safeActiveElement = function (e) {
      var i;
      try {
        i = e.activeElement;
      } catch (t) {
        i = e.body;
      }
      return (i = (i = i || e.body).nodeName ? i : e.body);
    }),
    (x.ui.safeBlur = function (t) {
      t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur");
    }),
    /*!
     * jQuery UI Scroll Parent 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     */
    (x.fn.scrollParent = function (t) {
      var e = this.css("position"),
        i = "absolute" === e,
        n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        t = this.parents()
          .filter(function () {
            var t = x(this);
            return (
              (!i || "static" !== t.css("position")) &&
              n.test(
                t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")
              )
            );
          })
          .eq(0);
      return "fixed" !== e && t.length
        ? t
        : x(this[0].ownerDocument || document);
    }),
    /*!
     * jQuery UI Tabbable 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     */
    x.extend(x.expr.pseudos, {
      tabbable: function (t) {
        var e = x.attr(t, "tabindex"),
          i = null != e;
        return (!i || 0 <= e) && x.ui.focusable(t, i);
      },
    }),
    /*!
     * jQuery UI Unique ID 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     */
    x.fn.extend({
      uniqueId:
        ((u = 0),
        function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++u);
          });
        }),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id");
        });
      },
    });
  /*!
   * jQuery UI Widget 1.13.3
   * https://jqueryui.com
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license.
   * https://jquery.org/license
   */
  var f,
    c = 0,
    d = Array.prototype.hasOwnProperty,
    p = Array.prototype.slice;
  (x.cleanData =
    ((f = x.cleanData),
    function (t) {
      for (var e, i, n = 0; null != (i = t[n]); n++)
        (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
      f(t);
    })),
    (x.widget = function (t, i, e) {
      var n,
        o,
        s,
        r = {},
        l = t.split(".")[0],
        a = l + "-" + (t = t.split(".")[1]);
      return (
        e || ((e = i), (i = x.Widget)),
        Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
        (x.expr.pseudos[a.toLowerCase()] = function (t) {
          return !!x.data(t, a);
        }),
        (x[l] = x[l] || {}),
        (n = x[l][t]),
        (o = x[l][t] =
          function (t, e) {
            if (!this || !this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e);
          }),
        x.extend(o, n, {
          version: e.version,
          _proto: x.extend({}, e),
          _childConstructors: [],
        }),
        ((s = new i()).options = x.widget.extend({}, s.options)),
        x.each(e, function (e, n) {
          function o() {
            return i.prototype[e].apply(this, arguments);
          }
          function s(t) {
            return i.prototype[e].apply(this, t);
          }
          r[e] =
            "function" != typeof n
              ? n
              : function () {
                  var t,
                    e = this._super,
                    i = this._superApply;
                  return (
                    (this._super = o),
                    (this._superApply = s),
                    (t = n.apply(this, arguments)),
                    (this._super = e),
                    (this._superApply = i),
                    t
                  );
                };
        }),
        (o.prototype = x.widget.extend(
          s,
          { widgetEventPrefix: (n && s.widgetEventPrefix) || t },
          r,
          { constructor: o, namespace: l, widgetName: t, widgetFullName: a }
        )),
        n
          ? (x.each(n._childConstructors, function (t, e) {
              var i = e.prototype;
              x.widget(i.namespace + "." + i.widgetName, o, e._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        x.widget.bridge(t, o),
        o
      );
    }),
    (x.widget.extend = function (t) {
      for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
        for (e in n[o])
          (i = n[o][e]),
            d.call(n[o], e) &&
              void 0 !== i &&
              (x.isPlainObject(i)
                ? (t[e] = x.isPlainObject(t[e])
                    ? x.widget.extend({}, t[e], i)
                    : x.widget.extend({}, i))
                : (t[e] = i));
      return t;
    }),
    (x.widget.bridge = function (s, e) {
      var r = e.prototype.widgetFullName || s;
      x.fn[s] = function (i) {
        var t = "string" == typeof i,
          n = p.call(arguments, 1),
          o = this;
        return (
          t
            ? this.length || "instance" !== i
              ? this.each(function () {
                  var t,
                    e = x.data(this, r);
                  return "instance" === i
                    ? ((o = e), !1)
                    : e
                    ? "function" != typeof e[i] || "_" === i.charAt(0)
                      ? x.error(
                          "no such method '" +
                            i +
                            "' for " +
                            s +
                            " widget instance"
                        )
                      : (t = e[i].apply(e, n)) !== e && void 0 !== t
                      ? ((o = t && t.jquery ? o.pushStack(t.get()) : t), !1)
                      : void 0
                    : x.error(
                        "cannot call methods on " +
                          s +
                          " prior to initialization; attempted to call method '" +
                          i +
                          "'"
                      );
                })
              : (o = void 0)
            : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))),
              this.each(function () {
                var t = x.data(this, r);
                t
                  ? (t.option(i || {}), t._init && t._init())
                  : x.data(this, r, new e(i, this));
              })),
          o
        );
      };
    }),
    (x.Widget = function () {}),
    (x.Widget._childConstructors = []),
    (x.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (t, e) {
        (e = x(e || this.defaultElement || this)[0]),
          (this.element = x(e)),
          (this.uuid = c++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = x()),
          (this.hoverable = x()),
          (this.focusable = x()),
          (this.classesElementLookup = {}),
          e !== this &&
            (x.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === e && this.destroy();
              },
            }),
            (this.document = x(e.style ? e.ownerDocument : e.document || e)),
            (this.window = x(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = x.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: x.noop,
      _create: x.noop,
      _init: x.noop,
      destroy: function () {
        var i = this;
        this._destroy(),
          x.each(this.classesElementLookup, function (t, e) {
            i._removeClass(e, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: x.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, e) {
        var i,
          n,
          o,
          s = t;
        if (0 === arguments.length) return x.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((s = {}), (t = (i = t.split(".")).shift()), i.length)) {
            for (
              n = s[t] = x.widget.extend({}, this.options[t]), o = 0;
              o < i.length - 1;
              o++
            )
              (n[i[o]] = n[i[o]] || {}), (n = n[i[o]]);
            if (((t = i.pop()), 1 === arguments.length))
              return void 0 === n[t] ? null : n[t];
            n[t] = e;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            s[t] = e;
          }
        return this._setOptions(s), this;
      },
      _setOptions: function (t) {
        for (var e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (t) {
        var e, i, n;
        for (e in t)
          (n = this.classesElementLookup[e]),
            t[e] !== this.options.classes[e] &&
              n &&
              n.length &&
              ((i = x(n.get())),
              this._removeClass(n, e),
              i.addClass(
                this._classes({ element: i, keys: e, classes: t, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (o) {
        var s = [],
          r = this;
        function t(t, e) {
          for (var i, n = 0; n < t.length; n++)
            (i = r.classesElementLookup[t[n]] || x()),
              (i = o.add
                ? ((function () {
                    var i = [];
                    o.element.each(function (t, e) {
                      x
                        .map(r.classesElementLookup, function (t) {
                          return t;
                        })
                        .some(function (t) {
                          return t.is(e);
                        }) || i.push(e);
                    }),
                      r._on(x(i), { remove: "_untrackClassesElement" });
                  })(),
                  x(x.uniqueSort(i.get().concat(o.element.get()))))
                : x(i.not(o.element).get())),
              (r.classesElementLookup[t[n]] = i),
              s.push(t[n]),
              e && o.classes[t[n]] && s.push(o.classes[t[n]]);
        }
        return (
          (o = x.extend(
            { element: this.element, classes: this.options.classes || {} },
            o
          )).keys && t(o.keys.match(/\S+/g) || [], !0),
          o.extra && t(o.extra.match(/\S+/g) || []),
          s.join(" ")
        );
      },
      _untrackClassesElement: function (i) {
        var n = this;
        x.each(n.classesElementLookup, function (t, e) {
          -1 !== x.inArray(i.target, e) &&
            (n.classesElementLookup[t] = x(e.not(i.target).get()));
        }),
          this._off(x(i.target));
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, n) {
        var o = "string" == typeof t || null === t,
          e = {
            extra: o ? e : i,
            keys: o ? t : e,
            element: o ? this.element : t,
            add: (n = "boolean" == typeof n ? n : i),
          };
        return e.element.toggleClass(this._classes(e), n), this;
      },
      _on: function (o, s, t) {
        var r,
          l = this;
        "boolean" != typeof o && ((t = s), (s = o), (o = !1)),
          t
            ? ((s = r = x(s)), (this.bindings = this.bindings.add(s)))
            : ((t = s), (s = this.element), (r = this.widget())),
          x.each(t, function (t, e) {
            function i() {
              if (
                o ||
                (!0 !== l.options.disabled &&
                  !x(this).hasClass("ui-state-disabled"))
              )
                return ("string" == typeof e ? l[e] : e).apply(l, arguments);
            }
            "string" != typeof e &&
              (i.guid = e.guid = e.guid || i.guid || x.guid++);
            var t = t.match(/^([\w:-]*)\s*(.*)$/),
              n = t[1] + l.eventNamespace,
              t = t[2];
            t ? r.on(n, t, i) : s.on(n, i);
          });
      },
      _off: function (t, e) {
        (e =
          (e || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.off(e),
          (this.bindings = x(this.bindings.not(t).get())),
          (this.focusable = x(this.focusable.not(t).get())),
          (this.hoverable = x(this.hoverable.not(t).get()));
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments);
        }, e || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              this._addClass(x(t.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (t) {
              this._removeClass(x(t.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              this._addClass(x(t.currentTarget), null, "ui-state-focus");
            },
            focusout: function (t) {
              this._removeClass(x(t.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (t, e, i) {
        var n,
          o,
          s = this.options[t];
        if (
          ((i = i || {}),
          ((e = x.Event(e)).type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (e.target = this.element[0]),
          (o = e.originalEvent))
        )
          for (n in o) n in e || (e[n] = o[n]);
        return (
          this.element.trigger(e, i),
          !(
            ("function" == typeof s &&
              !1 === s.apply(this.element[0], [e].concat(i))) ||
            e.isDefaultPrevented()
          )
        );
      },
    }),
    x.each({ show: "fadeIn", hide: "fadeOut" }, function (s, r) {
      x.Widget.prototype["_" + s] = function (e, t, i) {
        var n,
          o = (t = "string" == typeof t ? { effect: t } : t)
            ? (!0 !== t && "number" != typeof t && t.effect) || r
            : s;
        "number" == typeof (t = t || {})
          ? (t = { duration: t })
          : !0 === t && (t = {}),
          (n = !x.isEmptyObject(t)),
          (t.complete = i),
          t.delay && e.delay(t.delay),
          n && x.effects && x.effects.effect[o]
            ? e[s](t)
            : o !== s && e[o]
            ? e[o](t.duration, t.easing, i)
            : e.queue(function (t) {
                x(this)[s](), i && i.call(e[0]), t();
              });
      };
    });
});
/*! elementor - v3.23.0 - 25-07-2024 */
("use strict");
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
  [819],
  {
    9220: (e, t, n) => {
      var o = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = o(n(8135));
      class _default extends elementorModules.ViewModule {
        constructor() {
          super(...arguments),
            (this.documents = {}),
            this.initDocumentClasses(),
            this.attachDocumentsClasses();
        }
        getDefaultSettings() {
          return { selectors: { document: ".elementor" } };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return { $documents: jQuery(e.document) };
        }
        initDocumentClasses() {
          (this.documentClasses = { base: i.default }),
            elementorFrontend.hooks.doAction(
              "elementor/frontend/documents-manager/init-classes",
              this
            );
        }
        addDocumentClass(e, t) {
          this.documentClasses[e] = t;
        }
        attachDocumentsClasses() {
          this.elements.$documents.each((e, t) =>
            this.attachDocumentClass(jQuery(t))
          );
        }
        attachDocumentClass(e) {
          const t = e.data(),
            n = t.elementorId,
            o = t.elementorType,
            i = this.documentClasses[o] || this.documentClasses.base;
          this.documents[n] = new i({ $element: e, id: n });
        }
      }
      t.default = _default;
    },
    9804: (e, t, n) => {
      var o = n(3203),
        i = o(n(6397)),
        s = o(n(8704)),
        r = o(n(4985)),
        a = o(n(7537)),
        l = o(n(355)),
        d = o(n(2804)),
        c = o(n(3384));
      e.exports = function (e) {
        var t = this;
        const o = {};
        (this.elementsHandlers = {
          "accordion.default": () => n.e(209).then(n.bind(n, 8470)),
          "alert.default": () => n.e(745).then(n.bind(n, 9269)),
          "counter.default": () => n.e(120).then(n.bind(n, 7884)),
          "progress.default": () => n.e(192).then(n.bind(n, 1351)),
          "tabs.default": () => n.e(520).then(n.bind(n, 9459)),
          "toggle.default": () => n.e(181).then(n.bind(n, 2)),
          "video.default": () => n.e(791).then(n.bind(n, 5363)),
          "image-carousel.default": () => n.e(268).then(n.bind(n, 5914)),
          "text-editor.default": () => n.e(357).then(n.bind(n, 1327)),
          "wp-widget-media_audio.default": () => n.e(52).then(n.bind(n, 7602)),
        }),
          elementorFrontendConfig.experimentalFeatures["nested-elements"] &&
            (this.elementsHandlers["nested-tabs.default"] = () =>
              Promise.resolve().then(n.bind(n, 7323))),
          elementorFrontendConfig.experimentalFeatures["nested-elements"] &&
            (this.elementsHandlers["nested-accordion.default"] = () =>
              Promise.resolve().then(n.bind(n, 32))),
          elementorFrontendConfig.experimentalFeatures["floating-buttons"] &&
            (this.elementsHandlers["contact-buttons.default"] = () =>
              Promise.resolve().then(n.bind(n, 1519)));
        const addElementsHandlers = () => {
            (this.elementsHandlers.section = [
              d.default,
              ...s.default,
              l.default,
              c.default,
            ]),
              (this.elementsHandlers.container = [...s.default]),
              elementorFrontend.isEditMode() &&
                this.elementsHandlers.container.push(...r.default),
              (this.elementsHandlers.column = a.default),
              e.each(this.elementsHandlers, (e, t) => {
                const n = e.split(".");
                e = n[0];
                const o = n[1] || null;
                this.attachHandler(e, t, o);
              });
          },
          isClassHandler = (e) => e.prototype?.getUniqueHandlerID;
        (this.addHandler = function (t, n) {
          const i = n.$element.data("model-cid");
          let s;
          if (i) {
            (s = t.prototype.getConstructorID()), o[i] || (o[i] = {});
            const e = o[i][s];
            e && e.onDestroy();
          }
          const r = new t(n);
          elementorFrontend.hooks.doAction(
            `frontend/element_handler_ready/${n.elementName}`,
            n.$element,
            e
          ),
            i && (o[i][s] = r);
        }),
          (this.attachHandler = (e, n, o) => {
            Array.isArray(n) || (n = [n]),
              n.forEach((n) =>
                (function (e, n) {
                  let o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "default";
                  o = o ? "." + o : "";
                  const i = e + o;
                  elementorFrontend.hooks.addAction(
                    `frontend/element_ready/${i}`,
                    (e) => {
                      if (isClassHandler(n))
                        t.addHandler(n, { $element: e, elementName: i }, !0);
                      else {
                        const o = n();
                        if (!o) return;
                        o instanceof Promise
                          ? o.then((n) => {
                              let { default: o } = n;
                              t.addHandler(
                                o,
                                { $element: e, elementName: i },
                                !0
                              );
                            })
                          : t.addHandler(
                              o,
                              { $element: e, elementName: i },
                              !0
                            );
                      }
                    }
                  );
                })(e, n, o)
              );
          }),
          (this.getHandler = function (e) {
            const t = this.elementsHandlers[e];
            return isClassHandler(t)
              ? t
              : new Promise((e) => {
                  t().then((t) => {
                    let { default: n } = t;
                    e(n);
                  });
                });
          }),
          (this.getHandlers = function (e) {
            return (
              elementorDevTools.deprecation.deprecated(
                "getHandlers",
                "3.1.0",
                "elementorFrontend.elementsHandler.getHandler"
              ),
              e ? this.getHandler(e) : this.elementsHandlers
            );
          }),
          (this.runReadyTrigger = function (t) {
            const n =
              !!t.closest('[data-delay-child-handlers="true"]') &&
              0 !== t.closest('[data-delay-child-handlers="true"]').length;
            if (elementorFrontend.config.is_static || n) return;
            const o = jQuery(t),
              i = o.attr("data-element_type");
            if (
              i &&
              (elementorFrontend.hooks.doAction(
                "frontend/element_ready/global",
                o,
                e
              ),
              elementorFrontend.hooks.doAction(
                `frontend/element_ready/${i}`,
                o,
                e
              ),
              "widget" === i)
            ) {
              const t = o.attr("data-widget_type");
              elementorFrontend.hooks.doAction(
                `frontend/element_ready/${t}`,
                o,
                e
              );
            }
          }),
          (this.init = () => {
            elementorFrontend.hooks.addAction(
              "frontend/element_ready/global",
              i.default
            ),
              addElementsHandlers();
          });
      };
    },
    5654: (e, t, n) => {
      var o = n(3203);
      n(59);
      var i = o(n(9220)),
        s = o(n(5107)),
        r = o(n(3308)),
        a = o(n(1604)),
        l = o(n(1911)),
        d = o(n(4773)),
        c = o(n(2064)),
        u = o(n(8628)),
        h = o(n(8646)),
        m = o(n(6866)),
        g = o(n(4375)),
        p = o(n(6404)),
        f = o(n(6046)),
        v = o(n(1322)),
        b = n(6028);
      const y = n(9469),
        _ = n(9804),
        w = n(3346);
      class Frontend extends elementorModules.ViewModule {
        constructor() {
          super(...arguments),
            (this.config = elementorFrontendConfig),
            (this.config.legacyMode = {
              get elementWrappers() {
                return (
                  elementorFrontend.isEditMode() &&
                    window.top.elementorDevTools.deprecation.deprecated(
                      "elementorFrontend.config.legacyMode.elementWrappers",
                      "3.1.0"
                    ),
                  !1
                );
              },
            }),
            this.populateActiveBreakpointsConfig();
        }
        get Module() {
          return (
            this.isEditMode() &&
              parent.elementorDevTools.deprecation.deprecated(
                "elementorFrontend.Module",
                "2.5.0",
                "elementorModules.frontend.handlers.Base"
              ),
            elementorModules.frontend.handlers.Base
          );
        }
        getDefaultSettings() {
          return {
            selectors: { elementor: ".elementor", adminBar: "#wpadminbar" },
          };
        }
        getDefaultElements() {
          const e = {
            window,
            $window: jQuery(window),
            $document: jQuery(document),
            $head: jQuery(document.head),
            $body: jQuery(document.body),
            $deviceMode: jQuery("<span>", {
              id: "elementor-device-mode",
              class: "elementor-screen-only",
            }),
          };
          return e.$body.append(e.$deviceMode), e;
        }
        bindEvents() {
          this.elements.$window.on("resize", () => this.setDeviceModeData());
        }
        getElements(e) {
          return this.getItems(this.elements, e);
        }
        getPageSettings(e) {
          const t = this.isEditMode()
            ? elementor.settings.page.model.attributes
            : this.config.settings.page;
          return this.getItems(t, e);
        }
        getGeneralSettings(e) {
          return (
            this.isEditMode() &&
              parent.elementorDevTools.deprecation.deprecated(
                "getGeneralSettings()",
                "3.0.0",
                "getKitSettings() and remove the `elementor_` prefix"
              ),
            this.getKitSettings(`elementor_${e}`)
          );
        }
        getKitSettings(e) {
          return this.getItems(this.config.kit, e);
        }
        getCurrentDeviceMode() {
          return getComputedStyle(
            this.elements.$deviceMode[0],
            ":after"
          ).content.replace(/"/g, "");
        }
        getDeviceSetting(e, t, n) {
          if ("widescreen" === e) return this.getWidescreenSetting(t, n);
          const o = elementorFrontend.breakpoints.getActiveBreakpointsList({
            largeToSmall: !0,
            withDesktop: !0,
          });
          let i = o.indexOf(e);
          for (; i > 0; ) {
            const e = t[n + "_" + o[i]];
            if (e || 0 === e) return e;
            i--;
          }
          return t[n];
        }
        getWidescreenSetting(e, t) {
          const n = t + "_widescreen";
          let o;
          return (o = e[n] ? e[n] : e[t]), o;
        }
        getCurrentDeviceSetting(e, t) {
          return this.getDeviceSetting(
            elementorFrontend.getCurrentDeviceMode(),
            e,
            t
          );
        }
        isEditMode() {
          return this.config.environmentMode.edit;
        }
        isWPPreviewMode() {
          return this.config.environmentMode.wpPreview;
        }
        initDialogsManager() {
          let e;
          this.getDialogsManager = () => (
            e || (e = new DialogsManager.Instance()), e
          );
        }
        initOnReadyComponents() {
          (this.utils = {
            youtube: new a.default(),
            vimeo: new l.default(),
            baseVideoLoader: new d.default(),
            anchors: new w(),
            get lightbox() {
              return h.default.getLightbox();
            },
            urlActions: new c.default(),
            swiper: u.default,
            environment: r.default,
            assetsLoader: new m.default(),
            escapeHTML: b.escapeHTML,
            events: p.default,
            controls: new v.default(),
          }),
            (this.modules = {
              StretchElement: elementorModules.frontend.tools.StretchElement,
              Masonry: elementorModules.utils.Masonry,
            }),
            this.elementsHandler.init(),
            this.isEditMode()
              ? elementor.once("document:loaded", () => this.onDocumentLoaded())
              : this.onDocumentLoaded();
        }
        initOnReadyElements() {
          this.elements.$wpAdminBar = this.elements.$document.find(
            this.getSettings("selectors.adminBar")
          );
        }
        addUserAgentClasses() {
          for (const [e, t] of Object.entries(r.default))
            t && this.elements.$body.addClass("e--ua-" + e);
        }
        setDeviceModeData() {
          this.elements.$body.attr(
            "data-elementor-device-mode",
            this.getCurrentDeviceMode()
          );
        }
        addListenerOnce(e, t, n, o) {
          if ((o || (o = this.elements.$window), this.isEditMode()))
            if ((this.removeListeners(e, t, o), o instanceof jQuery)) {
              const i = t + "." + e;
              o.on(i, n);
            } else o.on(t, n, e);
          else o.on(t, n);
        }
        removeListeners(e, t, n, o) {
          if ((o || (o = this.elements.$window), o instanceof jQuery)) {
            const i = t + "." + e;
            o.off(i, n);
          } else o.off(t, n, e);
        }
        debounce(e, t) {
          let n;
          return function () {
            const o = this,
              i = arguments,
              s = !n;
            clearTimeout(n),
              (n = setTimeout(() => {
                (n = null), e.apply(o, i);
              }, t)),
              s && e.apply(o, i);
          };
        }
        waypoint(e, t, n) {
          n = jQuery.extend({ offset: "100%", triggerOnce: !0 }, n);
          return e.elementorWaypoint(function () {
            const e = this.element || this,
              o = t.apply(e, arguments);
            return n.triggerOnce && this.destroy && this.destroy(), o;
          }, n);
        }
        muteMigrationTraces() {
          (jQuery.migrateMute = !0), (jQuery.migrateTrace = !1);
        }
        initModules() {
          const e = { shapes: f.default };
          elementorFrontend.trigger("elementor/modules/init:before"),
            elementorFrontend.trigger("elementor/modules/init/before"),
            Object.entries(e).forEach((e) => {
              let [t, n] = e;
              this.modulesHandlers[t] = new n();
            });
        }
        populateActiveBreakpointsConfig() {
          (this.config.responsive.activeBreakpoints = {}),
            Object.entries(this.config.responsive.breakpoints).forEach((e) => {
              let [t, n] = e;
              n.is_enabled && (this.config.responsive.activeBreakpoints[t] = n);
            });
        }
        init() {
          (this.hooks = new y()),
            (this.breakpoints = new g.default(this.config.responsive)),
            (this.storage = new s.default()),
            (this.elementsHandler = new _(jQuery)),
            (this.modulesHandlers = {}),
            this.addUserAgentClasses(),
            this.setDeviceModeData(),
            this.initDialogsManager(),
            this.isEditMode() && this.muteMigrationTraces(),
            p.default.dispatch(
              this.elements.$window,
              "elementor/frontend/init"
            ),
            this.initModules(),
            this.initOnReadyElements(),
            this.initOnReadyComponents();
        }
        onDocumentLoaded() {
          (this.documentsManager = new i.default()),
            this.trigger("components:init"),
            new h.default();
        }
      }
      (window.elementorFrontend = new Frontend()),
        elementorFrontend.isEditMode() ||
          jQuery(() => elementorFrontend.init());
    },
    4058: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class BackgroundSlideshow extends elementorModules.frontend.handlers
        .SwiperBase {
        getDefaultSettings() {
          return {
            classes: {
              swiperContainer: `elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,
              swiperWrapper: "swiper-wrapper",
              swiperSlide: "elementor-background-slideshow__slide swiper-slide",
              swiperPreloader: "swiper-lazy-preloader",
              slideBackground: "elementor-background-slideshow__slide__image",
              kenBurns: "elementor-ken-burns",
              kenBurnsActive: "elementor-ken-burns--active",
              kenBurnsIn: "elementor-ken-burns--in",
              kenBurnsOut: "elementor-ken-burns--out",
            },
          };
        }
        getSwiperOptions() {
          const e = this.getElementSettings(),
            t = {
              grabCursor: !1,
              slidesPerView: 1,
              slidesPerGroup: 1,
              loop: "yes" === e.background_slideshow_loop,
              speed: e.background_slideshow_transition_duration,
              autoplay: {
                delay: e.background_slideshow_slide_duration,
                stopOnLastSlide: !e.background_slideshow_loop,
              },
              handleElementorBreakpoints: !0,
              on: {
                slideChange: () => {
                  e.background_slideshow_ken_burns && this.handleKenBurns();
                },
              },
            };
          switch (
            ("yes" === e.background_slideshow_loop &&
              (t.loopedSlides = this.getSlidesCount()),
            e.background_slideshow_slide_transition)
          ) {
            case "fade":
              (t.effect = "fade"), (t.fadeEffect = { crossFade: !0 });
              break;
            case "slide_down":
              (t.autoplay.reverseDirection = !0), (t.direction = "vertical");
              break;
            case "slide_up":
              t.direction = "vertical";
          }
          return (
            "yes" === e.background_slideshow_lazyload &&
              (t.lazy = { loadPrevNext: !0, loadPrevNextAmount: 1 }),
            t
          );
        }
        buildSwiperElements() {
          const e = this.getSettings("classes"),
            t = this.getElementSettings(),
            n =
              "slide_left" === t.background_slideshow_slide_transition
                ? "ltr"
                : "rtl",
            o = jQuery("<div>", { class: e.swiperContainer, dir: n }),
            i = jQuery("<div>", { class: e.swiperWrapper }),
            s = t.background_slideshow_ken_burns,
            r = "yes" === t.background_slideshow_lazyload;
          let a = e.slideBackground;
          if (s) {
            a += " " + e.kenBurns;
            const n =
              "in" === t.background_slideshow_ken_burns_zoom_direction
                ? "kenBurnsIn"
                : "kenBurnsOut";
            a += " " + e[n];
          }
          r && (a += " swiper-lazy"),
            (this.elements.$slides = jQuery()),
            t.background_slideshow_gallery.forEach((t) => {
              const n = jQuery("<div>", { class: e.swiperSlide });
              let o;
              if (r) {
                const n = jQuery("<div>", { class: e.swiperPreloader });
                (o = jQuery("<div>", { class: a, "data-background": t.url })),
                  o.append(n);
              } else
                o = jQuery("<div>", {
                  class: a,
                  style: 'background-image: url("' + t.url + '");',
                });
              n.append(o),
                i.append(n),
                (this.elements.$slides = this.elements.$slides.add(n));
            }),
            o.append(i),
            this.$element.prepend(o),
            (this.elements.$backgroundSlideShowContainer = o);
        }
        async initSlider() {
          if (1 >= this.getSlidesCount()) return;
          const e = this.getElementSettings(),
            t = elementorFrontend.utils.swiper;
          (this.swiper = await new t(
            this.elements.$backgroundSlideShowContainer,
            this.getSwiperOptions()
          )),
            this.elements.$backgroundSlideShowContainer.data(
              "swiper",
              this.swiper
            ),
            e.background_slideshow_ken_burns && this.handleKenBurns();
        }
        activate() {
          this.buildSwiperElements(), this.initSlider();
        }
        deactivate() {
          this.swiper &&
            (this.swiper.destroy(),
            this.elements.$backgroundSlideShowContainer.remove());
        }
        run() {
          "slideshow" === this.getElementSettings("background_background")
            ? this.activate()
            : this.deactivate();
        }
        onInit() {
          super.onInit(),
            this.getElementSettings("background_slideshow_gallery") &&
              this.run();
        }
        onDestroy() {
          super.onDestroy(), this.deactivate();
        }
        onElementChange(e) {
          "background_background" === e && this.run();
        }
      }
      t.default = BackgroundSlideshow;
    },
    9501: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class BackgroundVideo extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return {
            selectors: {
              backgroundVideoContainer: ".elementor-background-video-container",
              backgroundVideoEmbed: ".elementor-background-video-embed",
              backgroundVideoHosted: ".elementor-background-video-hosted",
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors"),
            t = {
              $backgroundVideoContainer: this.$element.find(
                e.backgroundVideoContainer
              ),
            };
          return (
            (t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(
              e.backgroundVideoEmbed
            )),
            (t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(
              e.backgroundVideoHosted
            )),
            t
          );
        }
        calcVideosSize(e) {
          let t = "16:9";
          "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
          const n = this.elements.$backgroundVideoContainer.outerWidth(),
            o = this.elements.$backgroundVideoContainer.outerHeight(),
            i = t.split(":"),
            s = i[0] / i[1],
            r = n / o > s;
          return { width: r ? n : o * s, height: r ? n / s : o };
        }
        changeVideoSize() {
          if ("hosted" !== this.videoType && !this.player) return;
          let e;
          if (
            ("youtube" === this.videoType
              ? (e = jQuery(this.player.getIframe()))
              : "vimeo" === this.videoType
              ? (e = jQuery(this.player.element))
              : "hosted" === this.videoType &&
                (e = this.elements.$backgroundVideoHosted),
            !e)
          )
            return;
          const t = this.calcVideosSize(e);
          e.width(t.width).height(t.height);
        }
        startVideoLoop(e) {
          if (!this.player.getIframe().contentWindow) return;
          const t = this.getElementSettings(),
            n = t.background_video_start || 0,
            o = t.background_video_end;
          if (!t.background_play_once || e) {
            if ((this.player.seekTo(n), o)) {
              setTimeout(() => {
                this.startVideoLoop(!1);
              }, 1e3 * (o - n + 1));
            }
          } else this.player.stopVideo();
        }
        prepareVimeoVideo(e, t) {
          const n = this.getElementSettings(),
            o = {
              url: t,
              width: this.elements.$backgroundVideoContainer.outerWidth().width,
              autoplay: !0,
              loop: !n.background_play_once,
              transparent: !0,
              background: !0,
              muted: !0,
            };
          n.background_privacy_mode && (o.dnt = !0),
            (this.player = new e.Player(
              this.elements.$backgroundVideoContainer,
              o
            )),
            this.handleVimeoStartEndTimes(n),
            this.player.ready().then(() => {
              jQuery(this.player.element).addClass(
                "elementor-background-video-embed"
              ),
                this.changeVideoSize();
            });
        }
        handleVimeoStartEndTimes(e) {
          e.background_video_start &&
            this.player.on("play", (t) => {
              0 === t.seconds &&
                this.player.setCurrentTime(e.background_video_start);
            }),
            this.player.on("timeupdate", (t) => {
              e.background_video_end &&
                e.background_video_end < t.seconds &&
                (e.background_play_once
                  ? this.player.pause()
                  : this.player.setCurrentTime(e.background_video_start)),
                this.player.getDuration().then((n) => {
                  e.background_video_start &&
                    !e.background_video_end &&
                    t.seconds > n - 0.5 &&
                    this.player.setCurrentTime(e.background_video_start);
                });
            });
        }
        prepareYTVideo(e, t) {
          const n = this.elements.$backgroundVideoContainer,
            o = this.getElementSettings();
          let i = e.PlayerState.PLAYING;
          window.chrome && (i = e.PlayerState.UNSTARTED);
          const s = {
            videoId: t,
            events: {
              onReady: () => {
                this.player.mute(),
                  this.changeVideoSize(),
                  this.startVideoLoop(!0),
                  this.player.playVideo();
              },
              onStateChange: (t) => {
                switch (t.data) {
                  case i:
                    n.removeClass("elementor-invisible elementor-loading");
                    break;
                  case e.PlayerState.ENDED:
                    "function" == typeof this.player.seekTo &&
                      this.player.seekTo(o.background_video_start || 0),
                      o.background_play_once && this.player.destroy();
                }
              },
            },
            playerVars: { controls: 0, rel: 0, playsinline: 1 },
          };
          o.background_privacy_mode &&
            ((s.host = "https://www.youtube-nocookie.com"),
            (s.origin = window.location.hostname)),
            n.addClass("elementor-loading elementor-invisible"),
            (this.player = new e.Player(
              this.elements.$backgroundVideoEmbed[0],
              s
            ));
        }
        activate() {
          let e,
            t = this.getElementSettings("background_video_link");
          const n = this.getElementSettings("background_play_once");
          if (
            (-1 !== t.indexOf("vimeo.com")
              ? ((this.videoType = "vimeo"),
                (this.apiProvider = elementorFrontend.utils.vimeo))
              : t.match(
                  /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/
                ) &&
                ((this.videoType = "youtube"),
                (this.apiProvider = elementorFrontend.utils.youtube)),
            this.apiProvider)
          )
            (e = this.apiProvider.getVideoIDFromURL(t)),
              this.apiProvider.onApiReady((n) => {
                "youtube" === this.videoType && this.prepareYTVideo(n, e),
                  "vimeo" === this.videoType && this.prepareVimeoVideo(n, t);
              });
          else {
            this.videoType = "hosted";
            const e = this.getElementSettings("background_video_start"),
              o = this.getElementSettings("background_video_end");
            (e || o) && (t += "#t=" + (e || 0) + (o ? "," + o : "")),
              this.elements.$backgroundVideoHosted
                .attr("src", t)
                .one("canplay", this.changeVideoSize.bind(this)),
              n &&
                this.elements.$backgroundVideoHosted.on("ended", () => {
                  this.elements.$backgroundVideoHosted.hide();
                });
          }
          elementorFrontend.elements.$window.on(
            "resize elementor/bg-video/recalc",
            this.changeVideoSize
          );
        }
        deactivate() {
          ("youtube" === this.videoType && this.player.getIframe()) ||
          "vimeo" === this.videoType
            ? this.player.destroy()
            : this.elements.$backgroundVideoHosted
                .removeAttr("src")
                .off("ended"),
            elementorFrontend.elements.$window.off(
              "resize",
              this.changeVideoSize
            );
        }
        run() {
          const e = this.getElementSettings();
          (e.background_play_on_mobile ||
            "mobile" !== elementorFrontend.getCurrentDeviceMode()) &&
            ("video" === e.background_background && e.background_video_link
              ? this.activate()
              : this.deactivate());
        }
        onInit() {
          super.onInit(...arguments),
            (this.changeVideoSize = this.changeVideoSize.bind(this)),
            this.run();
        }
        onElementChange(e) {
          "background_background" === e && this.run();
        }
      }
      t.default = BackgroundVideo;
    },
    8704: (e, t, n) => {
      var o = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = o(n(4058)),
        s = o(n(9501)),
        r = [i.default, s.default];
      t.default = r;
    },
    7537: (e, t, n) => {
      var o = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = [o(n(4058)).default];
      t.default = i;
    },
    4985: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = [
        () => n.e(413).then(n.bind(n, 2929)),
        () => n.e(413).then(n.bind(n, 343)),
        () => n.e(413).then(n.bind(n, 8073)),
      ];
      t.default = o;
    },
    6397: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class GlobalHandler extends elementorModules.frontend.handlers.Base {
        getWidgetType() {
          return "global";
        }
        animate() {
          const e = this.$element,
            t = this.getAnimation();
          if ("none" === t) return void e.removeClass("elementor-invisible");
          const n = this.getElementSettings(),
            o = n._animation_delay || n.animation_delay || 0;
          e.removeClass(t),
            this.currentAnimation && e.removeClass(this.currentAnimation),
            (this.currentAnimation = t),
            setTimeout(() => {
              e.removeClass("elementor-invisible").addClass("animated " + t);
            }, o);
        }
        getAnimation() {
          return (
            this.getCurrentDeviceSetting("animation") ||
            this.getCurrentDeviceSetting("_animation")
          );
        }
        onInit() {
          if ((super.onInit(...arguments), this.getAnimation())) {
            const e = elementorModules.utils.Scroll.scrollObserver({
              callback: (t) => {
                t.isInViewport &&
                  (this.animate(), e.unobserve(this.$element[0]));
              },
            });
            e.observe(this.$element[0]);
          }
        }
        onElementChange(e) {
          /^_?animation/.test(e) && this.animate();
        }
      }
      t.default = (e) => {
        elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
          $element: e,
        });
      };
    },
    355: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class HandlesPosition extends elementorModules.frontend.handlers.Base {
        isActive() {
          return elementorFrontend.isEditMode();
        }
        isFirstSection() {
          return (
            this.$element[0] ===
            document.querySelector(
              ".elementor-edit-mode .elementor-top-section"
            )
          );
        }
        isOverflowHidden() {
          return "hidden" === this.$element.css("overflow");
        }
        getOffset() {
          if ("body" === elementor.config.document.container)
            return this.$element.offset().top;
          const e = jQuery(elementor.config.document.container);
          return this.$element.offset().top - e.offset().top;
        }
        setHandlesPosition() {
          const e = elementor.documents.getCurrent();
          if (!e || !e.container.isEditable()) return;
          const t = "elementor-section--handles-inside";
          if (elementor.settings.page.model.attributes.scroll_snap)
            return void this.$element.addClass(t);
          const n = this.isOverflowHidden();
          if (!n && !this.isFirstSection()) return;
          const o = n ? 0 : this.getOffset();
          if (o < 25) {
            this.$element.addClass(t);
            const e = this.$element.find(
              "> .elementor-element-overlay > .elementor-editor-section-settings"
            );
            o < -5 ? e.css("top", -o) : e.css("top", "");
          } else this.$element.removeClass(t);
        }
        onInit() {
          this.isActive() &&
            (this.setHandlesPosition(),
            this.$element.on("mouseenter", this.setHandlesPosition.bind(this)));
        }
      }
      t.default = HandlesPosition;
    },
    3384: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class Shapes extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return {
            selectors: { container: "> .elementor-shape-%s" },
            svgURL: elementorFrontend.config.urls.assets + "shapes/",
          };
        }
        getDefaultElements() {
          const e = {},
            t = this.getSettings("selectors");
          return (
            (e.$topContainer = this.$element.find(
              t.container.replace("%s", "top")
            )),
            (e.$bottomContainer = this.$element.find(
              t.container.replace("%s", "bottom")
            )),
            e
          );
        }
        isActive() {
          return elementorFrontend.isEditMode();
        }
        getSvgURL(e, t) {
          let n = this.getSettings("svgURL") + t + ".svg";
          return (
            elementor.config.additional_shapes &&
              e in elementor.config.additional_shapes &&
              ((n = elementor.config.additional_shapes[e]),
              -1 < t.indexOf("-negative") &&
                (n = n.replace(".svg", "-negative.svg"))),
            n
          );
        }
        buildSVG(e) {
          const t = "shape_divider_" + e,
            n = this.getElementSettings(t),
            o = this.elements["$" + e + "Container"];
          if ((o.attr("data-shape", n), !n)) return void o.empty();
          let i = n;
          this.getElementSettings(t + "_negative") && (i += "-negative");
          const s = this.getSvgURL(n, i);
          jQuery.get(s, (e) => {
            o.empty().append(e.childNodes[0]);
          }),
            this.setNegative(e);
        }
        setNegative(e) {
          this.elements["$" + e + "Container"].attr(
            "data-negative",
            !!this.getElementSettings("shape_divider_" + e + "_negative")
          );
        }
        onInit() {
          this.isActive(this.getSettings()) &&
            (super.onInit(...arguments),
            ["top", "bottom"].forEach((e) => {
              this.getElementSettings("shape_divider_" + e) && this.buildSVG(e);
            }));
        }
        onElementChange(e) {
          const t = e.match(/^shape_divider_(top|bottom)$/);
          if (t) return void this.buildSVG(t[1]);
          const n = e.match(/^shape_divider_(top|bottom)_negative$/);
          n && (this.buildSVG(n[1]), this.setNegative(n[1]));
        }
      }
      t.default = Shapes;
    },
    2804: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class StretchedSection extends elementorModules.frontend.handlers
        .StretchedElement {
        getStretchedClass() {
          return "elementor-section-stretched";
        }
        getStretchSettingName() {
          return "stretch_section";
        }
        getStretchActiveValue() {
          return "section-stretched";
        }
      }
      t.default = StretchedSection;
    },
    3346: (e, t, n) => {
      var o = n(6028);
      e.exports = elementorModules.ViewModule.extend({
        getDefaultSettings: () => ({
          scrollDuration: 500,
          selectors: {
            links: 'a[href*="#"]',
            targets: ".elementor-element, .elementor-menu-anchor",
            scrollable: (0, o.isScrollSnapActive)() ? "body" : "html, body",
          },
        }),
        getDefaultElements() {
          return {
            $scrollable: jQuery(this.getSettings("selectors").scrollable),
          };
        },
        bindEvents() {
          elementorFrontend.elements.$document.on(
            "click",
            this.getSettings("selectors.links"),
            this.handleAnchorLinks
          );
        },
        handleAnchorLinks(e) {
          var t,
            n = e.currentTarget,
            i = location.pathname === n.pathname;
          if (location.hostname === n.hostname && i && !(n.hash.length < 2)) {
            try {
              t = jQuery(n.hash).filter(this.getSettings("selectors.targets"));
            } catch (e) {
              return;
            }
            if (t.length) {
              var s = t.offset().top,
                r = elementorFrontend.elements.$wpAdminBar,
                a = jQuery(
                  ".elementor-section.elementor-sticky--active:visible"
                );
              r.length > 0 && (s -= r.height()),
                a.length > 0 &&
                  (s -= Math.max.apply(
                    null,
                    a
                      .map(function () {
                        return jQuery(this).outerHeight();
                      })
                      .get()
                  )),
                e.preventDefault(),
                (s = elementorFrontend.hooks.applyFilters(
                  "frontend/handlers/menu_anchor/scroll_top_distance",
                  s
                )),
                (0, o.isScrollSnapActive)() &&
                  elementorFrontend.elements.$body.css(
                    "scroll-snap-type",
                    "none"
                  ),
                this.elements.$scrollable.animate(
                  { scrollTop: s },
                  this.getSettings("scrollDuration"),
                  "linear",
                  () => {
                    (0, o.isScrollSnapActive)() &&
                      elementorFrontend.elements.$body.css(
                        "scroll-snap-type",
                        ""
                      );
                  }
                );
            }
          }
        },
        onInit() {
          elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
        },
      });
    },
    6866: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class AssetsLoader {
        getScriptElement(e) {
          const t = document.createElement("script");
          return (t.src = e), t;
        }
        getStyleElement(e) {
          const t = document.createElement("link");
          return (t.rel = "stylesheet"), (t.href = e), t;
        }
        load(e, t) {
          const n = AssetsLoader.assets[e][t];
          return (
            n.loader ||
              (n.loader = new Promise((t) => {
                const o =
                  "style" === e
                    ? this.getStyleElement(n.src)
                    : this.getScriptElement(n.src);
                o.onload = () => t(!0);
                const i = "head" === n.parent ? n.parent : "body";
                document[i].appendChild(o);
              })),
            n.loader
          );
        }
      }
      t.default = AssetsLoader;
      const n = elementorFrontendConfig.environmentMode.isScriptDebug
          ? ""
          : ".min",
        o = elementorFrontendConfig.experimentalFeatures.e_swiper_latest
          ? `${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${n}.js?ver=8.4.5`
          : `${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`;
      AssetsLoader.assets = {
        script: {
          dialog: {
            src: `${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`,
          },
          "share-link": {
            src: `${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`,
          },
          swiper: { src: o },
        },
        style: {},
      };
    },
    1322: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = class Controls {
        getControlValue(e, t, n) {
          let o;
          return (o = "object" == typeof e[t] && n ? e[t][n] : e[t]), o;
        }
        getResponsiveControlValue(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const o =
              (arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null) || elementorFrontend.getCurrentDeviceMode(),
            i = this.getControlValue(e, t, n);
          if ("widescreen" === o) {
            const o = this.getControlValue(e, `${t}_widescreen`, n);
            return o || 0 === o ? o : i;
          }
          const s = elementorFrontend.breakpoints.getActiveBreakpointsList({
            withDesktop: !0,
          });
          let r = o,
            a = s.indexOf(o),
            l = "";
          for (; a <= s.length; ) {
            if ("desktop" === r) {
              l = i;
              break;
            }
            const o = `${t}_${r}`,
              d = this.getControlValue(e, o, n);
            if (d || 0 === d) {
              l = d;
              break;
            }
            a++, (r = s[a]);
          }
          return l;
        }
      };
    },
    8646: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class LightboxManager extends elementorModules.ViewModule {
        static getLightbox() {
          const e = new Promise((e) => {
              n.e(723)
                .then(n.t.bind(n, 3896, 23))
                .then((t) => {
                  let { default: n } = t;
                  return e(new n());
                });
            }),
            t = elementorFrontend.utils.assetsLoader.load("script", "dialog"),
            o = elementorFrontend.utils.assetsLoader.load(
              "script",
              "share-link"
            );
          return Promise.all([e, t, o]).then(() => e);
        }
        getDefaultSettings() {
          return { selectors: { links: "a, [data-elementor-lightbox]" } };
        }
        getDefaultElements() {
          return { $links: jQuery(this.getSettings("selectors.links")) };
        }
        isLightboxLink(e) {
          if (
            "a" === e.tagName.toLowerCase() &&
            (e.hasAttribute("download") ||
              !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href)) &&
            !e.dataset.elementorLightboxVideo
          )
            return !1;
          const t = elementorFrontend.getKitSettings("global_image_lightbox"),
            n = e.dataset.elementorOpenLightbox;
          return "yes" === n || (t && "no" !== n);
        }
        async onLinkClick(e) {
          const t = e.currentTarget,
            n = jQuery(e.target),
            o = elementorFrontend.isEditMode(),
            i =
              o &&
              elementor.$previewContents
                .find("body")
                .hasClass("elementor-editor__ui-state__color-picker"),
            s = !!n.closest(".elementor-edit-area").length;
          if (!this.isLightboxLink(t))
            return void (o && s && e.preventDefault());
          if (
            (e.preventDefault(),
            o && !elementor.getPreferences("lightbox_in_editor"))
          )
            return;
          if (i) return;
          (await LightboxManager.getLightbox()).createLightbox(t);
        }
        bindEvents() {
          elementorFrontend.elements.$document.on(
            "click",
            this.getSettings("selectors.links"),
            (e) => this.onLinkClick(e)
          );
        }
        onInit() {
          super.onInit(...arguments),
            elementorFrontend.isEditMode() ||
              this.elements.$links.each((e, t) => {
                if (this.isLightboxLink(t))
                  return LightboxManager.getLightbox(), !1;
              });
        }
      }
      t.default = LightboxManager;
    },
    8628: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = class Swiper {
        constructor(e, t) {
          return (
            (this.config = t),
            this.config.breakpoints && (this.config = this.adjustConfig(t)),
            e instanceof jQuery && (e = e[0]),
            e
              .closest(".elementor-widget-wrap")
              ?.classList.add("e-swiper-container"),
            e.closest(".elementor-widget")?.classList.add("e-widget-swiper"),
            new Promise((t) => {
              elementorFrontend.utils.assetsLoader
                .load("script", "swiper")
                .then(() => t(this.createSwiperInstance(e, this.config)));
            })
          );
        }
        createSwiperInstance(e, t) {
          const n = window.Swiper;
          return (n.prototype.adjustConfig = this.adjustConfig), new n(e, t);
        }
        adjustConfig(e) {
          if (!e.handleElementorBreakpoints) return e;
          const t = elementorFrontend.config.responsive.activeBreakpoints,
            n = elementorFrontend.breakpoints.getBreakpointValues();
          return (
            Object.keys(e.breakpoints).forEach((o) => {
              const i = parseInt(o);
              let s;
              if (i === t.mobile.value || i + 1 === t.mobile.value) s = 0;
              else if (
                !t.widescreen ||
                (i !== t.widescreen.value && i + 1 !== t.widescreen.value)
              ) {
                const e = n.findIndex((e) => i === e || i + 1 === e);
                s = n[e - 1];
              } else s = i;
              (e.breakpoints[s] = e.breakpoints[o]),
                (e.breakpoints[o] = {
                  slidesPerView: e.slidesPerView,
                  slidesPerGroup: e.slidesPerGroup ? e.slidesPerGroup : 1,
                });
            }),
            e
          );
        }
      };
    },
    2064: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        n(5719);
      class _default extends elementorModules.ViewModule {
        getDefaultSettings() {
          return {
            selectors: {
              links:
                'a[href^="%23elementor-action"], a[href^="#elementor-action"]',
            },
          };
        }
        bindEvents() {
          elementorFrontend.elements.$document.on(
            "click",
            this.getSettings("selectors.links"),
            this.runLinkAction.bind(this)
          );
        }
        initActions() {
          this.actions = {
            lightbox: async (e) => {
              const t = await elementorFrontend.utils.lightbox;
              e.slideshow
                ? t.openSlideshow(e.slideshow, e.url)
                : (e.id && (e.type = "image"), t.showModal(e));
            },
          };
        }
        addAction(e, t) {
          this.actions[e] = t;
        }
        runAction(e) {
          const t = (e = decodeURIComponent(e)).match(/action=(.+?)&/);
          if (!t) return;
          const n = this.actions[t[1]];
          if (!n) return;
          let o = {};
          const i = e.match(/settings=(.+)/);
          i && (o = JSON.parse(atob(i[1]))), (o.previousEvent = event);
          for (
            var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), a = 1;
            a < s;
            a++
          )
            r[a - 1] = arguments[a];
          n(o, ...r);
        }
        runLinkAction(e) {
          e.preventDefault(),
            this.runAction(jQuery(e.currentTarget).attr("href"), e);
        }
        runHashAction() {
          if (!location.hash) return;
          const e = document.querySelector(
            `[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`
          );
          e && this.runAction(e.getAttribute("data-e-action-hash"));
        }
        createActionHash(e, t) {
          return encodeURIComponent(
            `#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`
          );
        }
        onInit() {
          super.onInit(),
            this.initActions(),
            elementorFrontend.on(
              "components:init",
              this.runHashAction.bind(this)
            );
        }
      }
      t.default = _default;
    },
    6028: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isScrollSnapActive = t.escapeHTML = void 0);
      t.escapeHTML = (e) => {
        const t = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        };
        return e.replace(/[&<>'"]/g, (e) => t[e] || e);
      };
      t.isScrollSnapActive = () =>
        "yes" ===
        (elementorFrontend.isEditMode()
          ? elementor.settings.page.model.attributes?.scroll_snap
          : elementorFrontend.config.settings.page?.scroll_snap);
    },
    4773: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class BaseLoader extends elementorModules.ViewModule {
        getDefaultSettings() {
          return { isInserted: !1, selectors: { firstScript: "script:first" } };
        }
        getDefaultElements() {
          return {
            $firstScript: jQuery(this.getSettings("selectors.firstScript")),
          };
        }
        insertAPI() {
          this.elements.$firstScript.before(
            jQuery("<script>", { src: this.getApiURL() })
          ),
            this.setSettings("isInserted", !0);
        }
        getVideoIDFromURL(e) {
          const t = e.match(this.getURLRegex());
          return t && t[1];
        }
        onApiReady(e) {
          this.getSettings("isInserted") || this.insertAPI(),
            this.isApiLoaded()
              ? e(this.getApiObject())
              : setTimeout(() => {
                  this.onApiReady(e);
                }, 350);
        }
        getAutoplayURL(e) {
          return e.replace("&autoplay=0", "") + "&autoplay=1";
        }
      }
      t.default = BaseLoader;
    },
    1911: (e, t, n) => {
      var o = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = o(n(4773));
      class VimeoLoader extends i.default {
        getApiURL() {
          return "https://player.vimeo.com/api/player.js";
        }
        getURLRegex() {
          return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/;
        }
        isApiLoaded() {
          return window.Vimeo;
        }
        getApiObject() {
          return Vimeo;
        }
        getAutoplayURL(e) {
          const t = e.match(/#t=[^&]*/);
          return e.replace(t[0], "") + t;
        }
      }
      t.default = VimeoLoader;
    },
    1604: (e, t, n) => {
      var o = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = o(n(4773));
      class YoutubeLoader extends i.default {
        getApiURL() {
          return "https://www.youtube.com/iframe_api";
        }
        getURLRegex() {
          return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/;
        }
        isApiLoaded() {
          return window.YT && YT.loaded;
        }
        getApiObject() {
          return YT;
        }
      }
      t.default = YoutubeLoader;
    },
    59: (e, t, n) => {
      n.p = elementorFrontendConfig.urls.assets + "js/";
    },
    4375: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class Breakpoints extends elementorModules.Module {
        constructor(e) {
          super(), (this.responsiveConfig = e);
        }
        getActiveBreakpointsList() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e = { largeToSmall: !1, withDesktop: !1, ...e };
          const t = Object.keys(this.responsiveConfig.activeBreakpoints);
          if (e.withDesktop) {
            const e = -1 === t.indexOf("widescreen") ? t.length : t.length - 1;
            t.splice(e, 0, "desktop");
          }
          return e.largeToSmall && t.reverse(), t;
        }
        getBreakpointValues() {
          const { activeBreakpoints: e } = this.responsiveConfig,
            t = [];
          return (
            Object.values(e).forEach((e) => {
              t.push(e.value);
            }),
            t
          );
        }
        getDesktopPreviousDeviceKey() {
          let e = "";
          const { activeBreakpoints: t } = this.responsiveConfig,
            n = Object.keys(t),
            o = n.length;
          return (e = "min" === t[n[o - 1]].direction ? n[o - 2] : n[o - 1]), e;
        }
        getDesktopMinPoint() {
          const { activeBreakpoints: e } = this.responsiveConfig;
          return e[this.getDesktopPreviousDeviceKey()].value + 1;
        }
        getDeviceMinBreakpoint(e) {
          if ("desktop" === e) return this.getDesktopMinPoint();
          const { activeBreakpoints: t } = this.responsiveConfig,
            n = Object.keys(t);
          let o;
          if (n[0] === e) o = 320;
          else if ("widescreen" === e)
            o = t[e]
              ? t[e].value
              : this.responsiveConfig.breakpoints.widescreen;
          else {
            const i = n.indexOf(e);
            o = t[n[i - 1]].value + 1;
          }
          return o;
        }
        getActiveMatchRegex() {
          return new RegExp(
            this.getActiveBreakpointsList()
              .map((e) => "_" + e)
              .join("|") + "$"
          );
        }
      }
      t.default = Breakpoints;
    },
    6404: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.Events = void 0);
      class Events {
        static dispatch(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
          (e = e instanceof jQuery ? e[0] : e),
            o && e.dispatchEvent(new CustomEvent(o, { detail: n })),
            e.dispatchEvent(new CustomEvent(t, { detail: n }));
        }
      }
      t.Events = Events;
      var n = Events;
      t.default = n;
    },
    9469: (e) => {
      e.exports = function () {
        var e,
          t = Array.prototype.slice,
          n = { actions: {}, filters: {} };
        function _removeHook(e, t, o, i) {
          var s, r, a;
          if (n[e][t])
            if (o)
              if (((s = n[e][t]), i))
                for (a = s.length; a--; )
                  (r = s[a]).callback === o &&
                    r.context === i &&
                    s.splice(a, 1);
              else
                for (a = s.length; a--; ) s[a].callback === o && s.splice(a, 1);
            else n[e][t] = [];
        }
        function _addHook(e, t, o, i, s) {
          var r = { callback: o, priority: i, context: s },
            a = n[e][t];
          if (a) {
            var l = !1;
            if (
              (jQuery.each(a, function () {
                if (this.callback === o) return (l = !0), !1;
              }),
              l)
            )
              return;
            a.push(r),
              (a = (function _hookInsertSort(e) {
                for (var t, n, o, i = 1, s = e.length; i < s; i++) {
                  for (
                    t = e[i], n = i;
                    (o = e[n - 1]) && o.priority > t.priority;

                  )
                    (e[n] = e[n - 1]), --n;
                  e[n] = t;
                }
                return e;
              })(a));
          } else a = [r];
          n[e][t] = a;
        }
        function _runHook(e, t, o) {
          var i,
            s,
            r = n[e][t];
          if (!r) return "filters" === e && o[0];
          if (((s = r.length), "filters" === e))
            for (i = 0; i < s; i++) o[0] = r[i].callback.apply(r[i].context, o);
          else for (i = 0; i < s; i++) r[i].callback.apply(r[i].context, o);
          return "filters" !== e || o[0];
        }
        return (
          (e = {
            removeFilter: function removeFilter(t, n) {
              return "string" == typeof t && _removeHook("filters", t, n), e;
            },
            applyFilters: function applyFilters() {
              var n = t.call(arguments),
                o = n.shift();
              return "string" == typeof o ? _runHook("filters", o, n) : e;
            },
            addFilter: function addFilter(t, n, o, i) {
              return (
                "string" == typeof t &&
                  "function" == typeof n &&
                  _addHook("filters", t, n, (o = parseInt(o || 10, 10)), i),
                e
              );
            },
            removeAction: function removeAction(t, n) {
              return "string" == typeof t && _removeHook("actions", t, n), e;
            },
            doAction: function doAction() {
              var n = t.call(arguments),
                o = n.shift();
              return "string" == typeof o && _runHook("actions", o, n), e;
            },
            addAction: function addAction(t, n, o, i) {
              return (
                "string" == typeof t &&
                  "function" == typeof n &&
                  _addHook("actions", t, n, (o = parseInt(o || 10, 10)), i),
                e
              );
            },
          }),
          e
        );
      };
    },
    3308: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      const matchUserAgent = (e) => n.indexOf(e) >= 0,
        n = navigator.userAgent,
        o =
          (!!window.opr && !!opr.addons) ||
          !!window.opera ||
          matchUserAgent(" OPR/"),
        i = matchUserAgent("Firefox"),
        s =
          /^((?!chrome|android).)*safari/i.test(n) ||
          /constructor/i.test(window.HTMLElement) ||
          "[object SafariRemoteNotification]" ===
            (
              !window.safari ||
              ("undefined" != typeof safari && safari.pushNotification)
            ).toString(),
        r = /Trident|MSIE/.test(n) && !!document.documentMode,
        a = (!r && !!window.StyleMedia) || matchUserAgent("Edg"),
        l = !!window.chrome && matchUserAgent("Chrome") && !(a || o),
        d = matchUserAgent("Chrome") && !!window.CSS,
        c = matchUserAgent("AppleWebKit") && !d;
      var u = {
        isTouchDevice:
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0,
        appleWebkit: c,
        blink: d,
        chrome: l,
        edge: a,
        firefox: i,
        ie: r,
        mac: matchUserAgent("Macintosh"),
        opera: o,
        safari: s,
        webkit: matchUserAgent("AppleWebKit"),
      };
      t.default = u;
    },
    5107: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        get(e, t) {
          let n;
          t = t || {};
          try {
            n = t.session ? sessionStorage : localStorage;
          } catch (t) {
            return e ? void 0 : {};
          }
          let o = n.getItem("elementor");
          (o = o ? JSON.parse(o) : {}), o.__expiration || (o.__expiration = {});
          const i = o.__expiration;
          let s = [];
          e ? i[e] && (s = [e]) : (s = Object.keys(i));
          let r = !1;
          return (
            s.forEach((e) => {
              new Date(i[e]) < new Date() &&
                (delete o[e], delete i[e], (r = !0));
            }),
            r && this.save(o, t.session),
            e ? o[e] : o
          );
        }
        set(e, t, n) {
          n = n || {};
          const o = this.get(null, n);
          if (((o[e] = t), n.lifetimeInSeconds)) {
            const t = new Date();
            t.setTime(t.getTime() + 1e3 * n.lifetimeInSeconds),
              (o.__expiration[e] = t.getTime());
          }
          this.save(o, n.session);
        }
        save(e, t) {
          let n;
          try {
            n = t ? sessionStorage : localStorage;
          } catch (e) {
            return;
          }
          n.setItem("elementor", JSON.stringify(e));
        }
      }
      t.default = _default;
    },
    6046: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler("text-path", () =>
              n.e(48).then(n.bind(n, 6468))
            );
        }
      }
      t.default = _default;
    },
    1855: (e, t, n) => {
      var o = n(5516),
        i = TypeError;
      e.exports = function (e, t) {
        if (o(t, e)) return e;
        throw i("Incorrect invocation");
      };
    },
    3621: (e) => {
      e.exports = {
        IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
        DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
        HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
        WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
        InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
        NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
        NoModificationAllowedError: {
          s: "NO_MODIFICATION_ALLOWED_ERR",
          c: 7,
          m: 1,
        },
        NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
        NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
        InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
        InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
        SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
        InvalidModificationError: {
          s: "INVALID_MODIFICATION_ERR",
          c: 13,
          m: 1,
        },
        NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
        InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
        ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
        TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
        SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
        NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
        AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
        URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
        QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
        TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
        InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
        DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 },
      };
    },
    5719: (e, t, n) => {
      var o = n(1695),
        i = n(2086),
        s = n(563),
        r = n(5736),
        a = n(7826).f,
        l = n(9606),
        d = n(1855),
        c = n(5070),
        u = n(1879),
        h = n(3621),
        m = n(79),
        g = n(5283),
        p = n(3296),
        f = "DOMException",
        v = s("Error"),
        b = s(f),
        y = function DOMException() {
          d(this, _);
          var e = arguments.length,
            t = u(e < 1 ? void 0 : arguments[0]),
            n = u(e < 2 ? void 0 : arguments[1], "Error"),
            o = new b(t, n),
            i = v(t);
          return (
            (i.name = f), a(o, "stack", r(1, m(i.stack, 1))), c(o, this, y), o
          );
        },
        _ = (y.prototype = b.prototype),
        w = "stack" in v(f),
        k = "stack" in new b(1, 2),
        S = b && g && Object.getOwnPropertyDescriptor(i, f),
        E = !(!S || (S.writable && S.configurable)),
        M = w && !E && !k;
      o(
        { global: !0, constructor: !0, forced: p || M },
        { DOMException: M ? y : b }
      );
      var C = s(f),
        A = C.prototype;
      if (A.constructor !== C)
        for (var D in (p || a(A, "constructor", r(1, C)), h))
          if (l(h, D)) {
            var $ = h[D],
              R = $.s;
            l(C, R) || a(C, R, r(6, $.c));
          }
    },
  },
  (e) => {
    e.O(0, [354], () => {
      return (t = 5654), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
