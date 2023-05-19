/*
 * BiwaScheme 0.7.5 - R6RS/R7RS Scheme in JavaScript
 *
 * Copyright (c) 2007-2023 Yutaka HARA (http://www.biwascheme.org/)
 * Licensed under the MIT license.
 */
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = Object.getPrototypeOf,
    i = n.slice,
    a = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    s = n.push,
    o = n.indexOf,
    u = {},
    c = u.toString,
    l = u.hasOwnProperty,
    f = l.toString,
    d = f.call(Object),
    h = {},
    p = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    m = function (e) {
      return null != e && e === e.window;
    },
    _ = e.document,
    b = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function g(e, t, n) {
    var r,
      i,
      a = (n = n || _).createElement("script");
    if (((a.text = e), t))
      for (r in b)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          a.setAttribute(r, i);
    n.head.appendChild(a).parentNode.removeChild(a);
  }
  function y(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? u[c.call(e)] || "object"
      : typeof e;
  }
  var v = "3.6.0",
    w = function (e, t) {
      return new w.fn.init(e, t);
    };
  function x(e) {
    var t = !!e && "length" in e && e.length,
      n = y(e);
    return (
      !p(e) &&
      !m(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  (w.fn = w.prototype = {
    jquery: v,
    constructor: w,
    length: 0,
    toArray: function () {
      return i.call(this);
    },
    get: function (e) {
      return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = w.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return w.each(this, e);
    },
    map: function (e) {
      return this.pushStack(
        w.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(i.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        w.grep(this, function (e, t) {
          return (t + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        w.grep(this, function (e, t) {
          return t % 2;
        })
      );
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice,
  }),
    (w.extend = w.fn.extend = function () {
      var e,
        t,
        n,
        r,
        i,
        a,
        s = arguments[0] || {},
        o = 1,
        u = arguments.length,
        c = !1;
      for (
        "boolean" == typeof s && ((c = s), (s = arguments[o] || {}), o++),
          "object" == typeof s || p(s) || (s = {}),
          o === u && ((s = this), o--);
        o < u;
        o++
      )
        if (null != (e = arguments[o]))
          for (t in e)
            (r = e[t]),
              "__proto__" !== t &&
                s !== r &&
                (c && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                  ? ((n = s[t]),
                    (a =
                      i && !Array.isArray(n)
                        ? []
                        : i || w.isPlainObject(n)
                        ? n
                        : {}),
                    (i = !1),
                    (s[t] = w.extend(c, a, r)))
                  : void 0 !== r && (s[t] = r));
      return s;
    }),
    w.extend({
      expando: "jQuery" + (v + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== c.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = l.call(t, "constructor") && t.constructor) &&
              f.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        g(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (x(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (x(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : o.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, a = e.length, s = !n; i < a; i++)
          !t(e[i], i) !== s && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          s = 0,
          o = [];
        if (x(e))
          for (r = e.length; s < r; s++)
            null != (i = t(e[s], s, n)) && o.push(i);
        else for (s in e) null != (i = t(e[s], s, n)) && o.push(i);
        return a(o);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        u["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var S =
    /*!
     * Sizzle CSS Selector Engine v2.3.6
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2021-02-16
     */
    (function (e) {
      var t,
        n,
        r,
        i,
        a,
        s,
        o,
        u,
        c,
        l,
        f,
        d,
        h,
        p,
        m,
        _,
        b,
        g,
        y,
        v = "sizzle" + 1 * new Date(),
        w = e.document,
        x = 0,
        S = 0,
        C = ue(),
        E = ue(),
        P = ue(),
        k = ue(),
        T = function (e, t) {
          return e === t && (f = !0), 0;
        },
        j = {}.hasOwnProperty,
        B = [],
        q = B.pop,
        D = B.push,
        A = B.push,
        $ = B.slice,
        N = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        L =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        R = "[\\x20\\t\\r\\n\\f]",
        O =
          "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        M =
          "\\[[\\x20\\t\\r\\n\\f]*(" +
          O +
          ")(?:" +
          R +
          "*([*^$|!~]?=)" +
          R +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          O +
          "))|)" +
          R +
          "*\\]",
        I =
          ":(" +
          O +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          M +
          ")*)|.*)\\)|)",
        H = new RegExp(R + "+", "g"),
        F = new RegExp(
          "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
          "g"
        ),
        W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
        z = new RegExp(
          "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
        ),
        U = new RegExp(R + "|>"),
        V = new RegExp(I),
        X = new RegExp("^" + O + "$"),
        G = {
          ID: new RegExp("^#(" + O + ")"),
          CLASS: new RegExp("^\\.(" + O + ")"),
          TAG: new RegExp("^(" + O + "|[*])"),
          ATTR: new RegExp("^" + M),
          PSEUDO: new RegExp("^" + I),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + L + ")$", "i"),
          needsContext: new RegExp(
            "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp(
          "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        ne = function (e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return (
            t ||
            (n < 0
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
          );
        },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
          return t
            ? "\0" === e
              ? "�"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        ae = function () {
          d();
        },
        se = ve(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        A.apply((B = $.call(w.childNodes)), w.childNodes),
          B[w.childNodes.length].nodeType;
      } catch (e) {
        A = {
          apply: B.length
            ? function (e, t) {
                D.apply(e, $.call(t));
              }
            : function (e, t) {
                for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                e.length = n - 1;
              },
        };
      }
      function oe(e, t, r, i) {
        var a,
          o,
          c,
          l,
          f,
          p,
          b,
          g = t && t.ownerDocument,
          w = t ? t.nodeType : 9;
        if (
          ((r = r || []),
          "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
        )
          return r;
        if (!i && (d(t), (t = t || h), m)) {
          if (11 !== w && (f = Z.exec(e)))
            if ((a = f[1])) {
              if (9 === w) {
                if (!(c = t.getElementById(a))) return r;
                if (c.id === a) return r.push(c), r;
              } else if (
                g &&
                (c = g.getElementById(a)) &&
                y(t, c) &&
                c.id === a
              )
                return r.push(c), r;
            } else {
              if (f[2]) return A.apply(r, t.getElementsByTagName(e)), r;
              if (
                (a = f[3]) &&
                n.getElementsByClassName &&
                t.getElementsByClassName
              )
                return A.apply(r, t.getElementsByClassName(a)), r;
            }
          if (
            n.qsa &&
            !k[e + " "] &&
            (!_ || !_.test(e)) &&
            (1 !== w || "object" !== t.nodeName.toLowerCase())
          ) {
            if (((b = e), (g = t), 1 === w && (U.test(e) || z.test(e)))) {
              for (
                ((g = (ee.test(e) && be(t.parentNode)) || t) === t &&
                  n.scope) ||
                  ((l = t.getAttribute("id"))
                    ? (l = l.replace(re, ie))
                    : t.setAttribute("id", (l = v))),
                  o = (p = s(e)).length;
                o--;

              )
                p[o] = (l ? "#" + l : ":scope") + " " + ye(p[o]);
              b = p.join(",");
            }
            try {
              return A.apply(r, g.querySelectorAll(b)), r;
            } catch (t) {
              k(e, !0);
            } finally {
              l === v && t.removeAttribute("id");
            }
          }
        }
        return u(e.replace(F, "$1"), t, r, i);
      }
      function ue() {
        var e = [];
        return function t(n, i) {
          return (
            e.push(n + " ") > r.cacheLength && delete t[e.shift()],
            (t[n + " "] = i)
          );
        };
      }
      function ce(e) {
        return (e[v] = !0), e;
      }
      function le(e) {
        var t = h.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function fe(e, t) {
        for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
      }
      function de(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function he(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function pe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function me(e) {
        return function (t) {
          return "form" in t
            ? t.parentNode && !1 === t.disabled
              ? "label" in t
                ? "label" in t.parentNode
                  ? t.parentNode.disabled === e
                  : t.disabled === e
                : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
              : t.disabled === e
            : "label" in t && t.disabled === e;
        };
      }
      function _e(e) {
        return ce(function (t) {
          return (
            (t = +t),
            ce(function (n, r) {
              for (var i, a = e([], n.length, t), s = a.length; s--; )
                n[(i = a[s])] && (n[i] = !(r[i] = n[i]));
            })
          );
        });
      }
      function be(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (t in ((n = oe.support = {}),
      (a = oe.isXML = function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
      (d = oe.setDocument = function (e) {
        var t,
          i,
          s = e ? e.ownerDocument || e : w;
        return s != h && 9 === s.nodeType && s.documentElement
          ? ((p = (h = s).documentElement),
            (m = !a(h)),
            w != h &&
              (i = h.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener("unload", ae, !1)
                : i.attachEvent && i.attachEvent("onunload", ae)),
            (n.scope = le(function (e) {
              return (
                p.appendChild(e).appendChild(h.createElement("div")),
                void 0 !== e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (n.attributes = le(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = le(function (e) {
              return (
                e.appendChild(h.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = K.test(h.getElementsByClassName)),
            (n.getById = le(function (e) {
              return (
                (p.appendChild(e).id = v),
                !h.getElementsByName || !h.getElementsByName(v).length
              );
            })),
            n.getById
              ? ((r.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((r.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var n,
                      r,
                      i,
                      a = t.getElementById(e);
                    if (a) {
                      if ((n = a.getAttributeNode("id")) && n.value === e)
                        return [a];
                      for (i = t.getElementsByName(e), r = 0; (a = i[r++]); )
                        if ((n = a.getAttributeNode("id")) && n.value === e)
                          return [a];
                    }
                    return [];
                  }
                })),
            (r.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    a = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = a[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return a;
                }),
            (r.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && m)
                  return t.getElementsByClassName(e);
              }),
            (b = []),
            (_ = []),
            (n.qsa = K.test(h.querySelectorAll)) &&
              (le(function (e) {
                var t;
                (p.appendChild(e).innerHTML =
                  "<a id='" +
                  v +
                  "'></a><select id='" +
                  v +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    _.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    _.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + L + ")"),
                  e.querySelectorAll("[id~=" + v + "-]").length || _.push("~="),
                  (t = h.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    _.push(
                      "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                    ),
                  e.querySelectorAll(":checked").length || _.push(":checked"),
                  e.querySelectorAll("a#" + v + "+*").length ||
                    _.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  _.push("[\\r\\n\\f]");
              }),
              le(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    _.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    _.push(":enabled", ":disabled"),
                  (p.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    _.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  _.push(",.*:");
              })),
            (n.matchesSelector = K.test(
              (g =
                p.matches ||
                p.webkitMatchesSelector ||
                p.mozMatchesSelector ||
                p.oMatchesSelector ||
                p.msMatchesSelector)
            )) &&
              le(function (e) {
                (n.disconnectedMatch = g.call(e, "*")),
                  g.call(e, "[s!='']:x"),
                  b.push("!=", I);
              }),
            (_ = _.length && new RegExp(_.join("|"))),
            (b = b.length && new RegExp(b.join("|"))),
            (t = K.test(p.compareDocumentPosition)),
            (y =
              t || K.test(p.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (T = t
              ? function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var r =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e == h || (e.ownerDocument == w && y(w, e))
                        ? -1
                        : t == h || (t.ownerDocument == w && y(w, t))
                        ? 1
                        : l
                        ? N(l, e) - N(l, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    a = t.parentNode,
                    s = [e],
                    o = [t];
                  if (!i || !a)
                    return e == h
                      ? -1
                      : t == h
                      ? 1
                      : i
                      ? -1
                      : a
                      ? 1
                      : l
                      ? N(l, e) - N(l, t)
                      : 0;
                  if (i === a) return de(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) o.unshift(n);
                  for (; s[r] === o[r]; ) r++;
                  return r
                    ? de(s[r], o[r])
                    : s[r] == w
                    ? -1
                    : o[r] == w
                    ? 1
                    : 0;
                }),
            h)
          : h;
      }),
      (oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function (e, t) {
        if (
          (d(e),
          n.matchesSelector &&
            m &&
            !k[t + " "] &&
            (!b || !b.test(t)) &&
            (!_ || !_.test(t)))
        )
          try {
            var r = g.call(e, t);
            if (
              r ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {
            k(t, !0);
          }
        return oe(t, h, null, [e]).length > 0;
      }),
      (oe.contains = function (e, t) {
        return (e.ownerDocument || e) != h && d(e), y(e, t);
      }),
      (oe.attr = function (e, t) {
        (e.ownerDocument || e) != h && d(e);
        var i = r.attrHandle[t.toLowerCase()],
          a = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
        return void 0 !== a
          ? a
          : n.attributes || !m
          ? e.getAttribute(t)
          : (a = e.getAttributeNode(t)) && a.specified
          ? a.value
          : null;
      }),
      (oe.escape = function (e) {
        return (e + "").replace(re, ie);
      }),
      (oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (oe.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          a = 0;
        if (
          ((f = !n.detectDuplicates),
          (l = !n.sortStable && e.slice(0)),
          e.sort(T),
          f)
        ) {
          for (; (t = e[a++]); ) t === e[a] && (i = r.push(a));
          for (; i--; ) e.splice(r[i], 1);
        }
        return (l = null), e;
      }),
      (i = oe.getText = function (e) {
        var t,
          n = "",
          r = 0,
          a = e.nodeType;
        if (a) {
          if (1 === a || 9 === a || 11 === a) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
          } else if (3 === a || 4 === a) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += i(t);
        return n;
      }),
      (r = oe.selectors = {
        cacheLength: 50,
        createPseudo: ce,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    V.test(n) &&
                    (t = s(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = C[e + " "];
            return (
              t ||
              ((t = new RegExp(
                "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + R + "|$)"
              )) &&
                C(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (r) {
              var i = oe.attr(r, e);
              return null == i
                ? "!=" === t
                : !t ||
                    ((i += ""),
                    "=" === t
                      ? i === n
                      : "!=" === t
                      ? i !== n
                      : "^=" === t
                      ? n && 0 === i.indexOf(n)
                      : "*=" === t
                      ? n && i.indexOf(n) > -1
                      : "$=" === t
                      ? n && i.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + i.replace(H, " ") + " ").indexOf(n) > -1
                      : "|=" === t &&
                        (i === n || i.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var a = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              o = "of-type" === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, u) {
                  var c,
                    l,
                    f,
                    d,
                    h,
                    p,
                    m = a !== s ? "nextSibling" : "previousSibling",
                    _ = t.parentNode,
                    b = o && t.nodeName.toLowerCase(),
                    g = !u && !o,
                    y = !1;
                  if (_) {
                    if (a) {
                      for (; m; ) {
                        for (d = t; (d = d[m]); )
                          if (
                            o
                              ? d.nodeName.toLowerCase() === b
                              : 1 === d.nodeType
                          )
                            return !1;
                        p = m = "only" === e && !p && "nextSibling";
                      }
                      return !0;
                    }
                    if (((p = [s ? _.firstChild : _.lastChild]), s && g)) {
                      for (
                        y =
                          (h =
                            (c =
                              (l =
                                (f = (d = _)[v] || (d[v] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] || [])[0] === x &&
                            c[1]) && c[2],
                          d = h && _.childNodes[h];
                        (d = (++h && d && d[m]) || (y = h = 0) || p.pop());

                      )
                        if (1 === d.nodeType && ++y && d === t) {
                          l[e] = [x, h, y];
                          break;
                        }
                    } else if (
                      (g &&
                        (y = h =
                          (c =
                            (l =
                              (f = (d = t)[v] || (d[v] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]),
                      !1 === y)
                    )
                      for (
                        ;
                        (d = (++h && d && d[m]) || (y = h = 0) || p.pop()) &&
                        ((o
                          ? d.nodeName.toLowerCase() !== b
                          : 1 !== d.nodeType) ||
                          !++y ||
                          (g &&
                            ((l =
                              (f = d[v] || (d[v] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] = [x, y]),
                          d !== t));

                      );
                    return (y -= i) === r || (y % r == 0 && y / r >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              i =
                r.pseudos[e] ||
                r.setFilters[e.toLowerCase()] ||
                oe.error("unsupported pseudo: " + e);
            return i[v]
              ? i(t)
              : i.length > 1
              ? ((n = [e, e, "", t]),
                r.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ce(function (e, n) {
                      for (var r, a = i(e, t), s = a.length; s--; )
                        e[(r = N(e, a[s]))] = !(n[r] = a[s]);
                    })
                  : function (e) {
                      return i(e, 0, n);
                    })
              : i;
          },
        },
        pseudos: {
          not: ce(function (e) {
            var t = [],
              n = [],
              r = o(e.replace(F, "$1"));
            return r[v]
              ? ce(function (e, t, n, i) {
                  for (var a, s = r(e, null, i, []), o = e.length; o--; )
                    (a = s[o]) && (e[o] = !(t[o] = a));
                })
              : function (e, i, a) {
                  return (t[0] = e), r(t, null, a, n), (t[0] = null), !n.pop();
                };
          }),
          has: ce(function (e) {
            return function (t) {
              return oe(e, t).length > 0;
            };
          }),
          contains: ce(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return (t.textContent || i(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: ce(function (e) {
            return (
              X.test(e || "") || oe.error("unsupported lang: " + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = m
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === p;
          },
          focus: function (e) {
            return (
              e === h.activeElement &&
              (!h.hasFocus || h.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: me(!1),
          disabled: me(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !r.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: _e(function () {
            return [0];
          }),
          last: _e(function (e, t) {
            return [t - 1];
          }),
          eq: _e(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: _e(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: _e(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: _e(function (e, t, n) {
            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
            return e;
          }),
          gt: _e(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }),
      (r.pseudos.nth = r.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        r.pseudos[t] = he(t);
      for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
      function ge() {}
      function ye(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function ve(e, t, n) {
        var r = t.dir,
          i = t.next,
          a = i || r,
          s = n && "parentNode" === a,
          o = S++;
        return t.first
          ? function (t, n, i) {
              for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
              return !1;
            }
          : function (t, n, u) {
              var c,
                l,
                f,
                d = [x, o];
              if (u) {
                for (; (t = t[r]); )
                  if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
              } else
                for (; (t = t[r]); )
                  if (1 === t.nodeType || s)
                    if (
                      ((l =
                        (f = t[v] || (t[v] = {}))[t.uniqueID] ||
                        (f[t.uniqueID] = {})),
                      i && i === t.nodeName.toLowerCase())
                    )
                      t = t[r] || t;
                    else {
                      if ((c = l[a]) && c[0] === x && c[1] === o)
                        return (d[2] = c[2]);
                      if (((l[a] = d), (d[2] = e(t, n, u)))) return !0;
                    }
              return !1;
            };
      }
      function we(e) {
        return e.length > 1
          ? function (t, n, r) {
              for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
              return !0;
            }
          : e[0];
      }
      function xe(e, t, n, r, i) {
        for (var a, s = [], o = 0, u = e.length, c = null != t; o < u; o++)
          (a = e[o]) && ((n && !n(a, r, i)) || (s.push(a), c && t.push(o)));
        return s;
      }
      function Se(e, t, n, r, i, a) {
        return (
          r && !r[v] && (r = Se(r)),
          i && !i[v] && (i = Se(i, a)),
          ce(function (a, s, o, u) {
            var c,
              l,
              f,
              d = [],
              h = [],
              p = s.length,
              m =
                a ||
                (function (e, t, n) {
                  for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                  return n;
                })(t || "*", o.nodeType ? [o] : o, []),
              _ = !e || (!a && t) ? m : xe(m, d, e, o, u),
              b = n ? (i || (a ? e : p || r) ? [] : s) : _;
            if ((n && n(_, b, o, u), r))
              for (c = xe(b, h), r(c, [], o, u), l = c.length; l--; )
                (f = c[l]) && (b[h[l]] = !(_[h[l]] = f));
            if (a) {
              if (i || e) {
                if (i) {
                  for (c = [], l = b.length; l--; )
                    (f = b[l]) && c.push((_[l] = f));
                  i(null, (b = []), c, u);
                }
                for (l = b.length; l--; )
                  (f = b[l]) &&
                    (c = i ? N(a, f) : d[l]) > -1 &&
                    (a[c] = !(s[c] = f));
              }
            } else (b = xe(b === s ? b.splice(p, b.length) : b)), i ? i(null, s, b, u) : A.apply(s, b);
          })
        );
      }
      function Ce(e) {
        for (
          var t,
            n,
            i,
            a = e.length,
            s = r.relative[e[0].type],
            o = s || r.relative[" "],
            u = s ? 1 : 0,
            l = ve(
              function (e) {
                return e === t;
              },
              o,
              !0
            ),
            f = ve(
              function (e) {
                return N(t, e) > -1;
              },
              o,
              !0
            ),
            d = [
              function (e, n, r) {
                var i =
                  (!s && (r || n !== c)) ||
                  ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                return (t = null), i;
              },
            ];
          u < a;
          u++
        )
          if ((n = r.relative[e[u].type])) d = [ve(we(d), n)];
          else {
            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[v]) {
              for (i = ++u; i < a && !r.relative[e[i].type]; i++);
              return Se(
                u > 1 && we(d),
                u > 1 &&
                  ye(
                    e
                      .slice(0, u - 1)
                      .concat({ value: " " === e[u - 2].type ? "*" : "" })
                  ).replace(F, "$1"),
                n,
                u < i && Ce(e.slice(u, i)),
                i < a && Ce((e = e.slice(i))),
                i < a && ye(e)
              );
            }
            d.push(n);
          }
        return we(d);
      }
      return (
        (ge.prototype = r.filters = r.pseudos),
        (r.setFilters = new ge()),
        (s = oe.tokenize = function (e, t) {
          var n,
            i,
            a,
            s,
            o,
            u,
            c,
            l = E[e + " "];
          if (l) return t ? 0 : l.slice(0);
          for (o = e, u = [], c = r.preFilter; o; ) {
            for (s in ((n && !(i = W.exec(o))) ||
              (i && (o = o.slice(i[0].length) || o), u.push((a = []))),
            (n = !1),
            (i = z.exec(o)) &&
              ((n = i.shift()),
              a.push({ value: n, type: i[0].replace(F, " ") }),
              (o = o.slice(n.length))),
            r.filter))
              !(i = G[s].exec(o)) ||
                (c[s] && !(i = c[s](i))) ||
                ((n = i.shift()),
                a.push({ value: n, type: s, matches: i }),
                (o = o.slice(n.length)));
            if (!n) break;
          }
          return t ? o.length : o ? oe.error(e) : E(e, u).slice(0);
        }),
        (o = oe.compile = function (e, t) {
          var n,
            i = [],
            a = [],
            o = P[e + " "];
          if (!o) {
            for (t || (t = s(e)), n = t.length; n--; )
              (o = Ce(t[n]))[v] ? i.push(o) : a.push(o);
            (o = P(
              e,
              (function (e, t) {
                var n = t.length > 0,
                  i = e.length > 0,
                  a = function (a, s, o, u, l) {
                    var f,
                      p,
                      _,
                      b = 0,
                      g = "0",
                      y = a && [],
                      v = [],
                      w = c,
                      S = a || (i && r.find.TAG("*", l)),
                      C = (x += null == w ? 1 : Math.random() || 0.1),
                      E = S.length;
                    for (
                      l && (c = s == h || s || l);
                      g !== E && null != (f = S[g]);
                      g++
                    ) {
                      if (i && f) {
                        for (
                          p = 0, s || f.ownerDocument == h || (d(f), (o = !m));
                          (_ = e[p++]);

                        )
                          if (_(f, s || h, o)) {
                            u.push(f);
                            break;
                          }
                        l && (x = C);
                      }
                      n && ((f = !_ && f) && b--, a && y.push(f));
                    }
                    if (((b += g), n && g !== b)) {
                      for (p = 0; (_ = t[p++]); ) _(y, v, s, o);
                      if (a) {
                        if (b > 0)
                          for (; g--; ) y[g] || v[g] || (v[g] = q.call(u));
                        v = xe(v);
                      }
                      A.apply(u, v),
                        l &&
                          !a &&
                          v.length > 0 &&
                          b + t.length > 1 &&
                          oe.uniqueSort(u);
                    }
                    return l && ((x = C), (c = w)), y;
                  };
                return n ? ce(a) : a;
              })(a, i)
            )),
              (o.selector = e);
          }
          return o;
        }),
        (u = oe.select = function (e, t, n, i) {
          var a,
            u,
            c,
            l,
            f,
            d = "function" == typeof e && e,
            h = !i && s((e = d.selector || e));
          if (((n = n || []), 1 === h.length)) {
            if (
              (u = h[0] = h[0].slice(0)).length > 2 &&
              "ID" === (c = u[0]).type &&
              9 === t.nodeType &&
              m &&
              r.relative[u[1].type]
            ) {
              if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              d && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            for (
              a = G.needsContext.test(e) ? 0 : u.length;
              a-- && ((c = u[a]), !r.relative[(l = c.type)]);

            )
              if (
                (f = r.find[l]) &&
                (i = f(
                  c.matches[0].replace(te, ne),
                  (ee.test(u[0].type) && be(t.parentNode)) || t
                ))
              ) {
                if ((u.splice(a, 1), !(e = i.length && ye(u))))
                  return A.apply(n, i), n;
                break;
              }
          }
          return (
            (d || o(e, h))(
              i,
              t,
              !m,
              n,
              !t || (ee.test(e) && be(t.parentNode)) || t
            ),
            n
          );
        }),
        (n.sortStable = v.split("").sort(T).join("") === v),
        (n.detectDuplicates = !!f),
        d(),
        (n.sortDetached = le(function (e) {
          return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
        })),
        le(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          fe("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (n.attributes &&
          le(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        le(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          fe(L, function (e, t, n) {
            var r;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
          }),
        oe
      );
    })(e);
  (w.find = S),
    (w.expr = S.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = S.uniqueSort),
    (w.text = S.getText),
    (w.isXMLDoc = S.isXML),
    (w.contains = S.contains),
    (w.escapeSelector = S.escape);
  var C = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    E = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    P = w.expr.match.needsContext;
  function k(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return p(t)
      ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return o.call(t, e) > -1 !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
        return r > 1 ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && P.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var B,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || B), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : _, !0)
          ),
          T.test(r[1]) && w.isPlainObject(t))
        )
          for (r in t) p(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = _.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : p(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (B = w(_));
  var D = /^(?:parents|prev(?:Until|All))/,
    A = { children: !0, contents: !0, next: !0, prev: !0 };
  function $(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        a = [],
        s = "string" != typeof e && w(e);
      if (!P.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              a.push(n);
              break;
            }
      return this.pushStack(a.length > 1 ? w.uniqueSort(a) : a);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? o.call(w(e), this[0])
          : o.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return C(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return C(e, "parentNode", n);
        },
        next: function (e) {
          return $(e, "nextSibling");
        },
        prev: function (e) {
          return $(e, "previousSibling");
        },
        nextAll: function (e) {
          return C(e, "nextSibling");
        },
        prevAll: function (e) {
          return C(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return C(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return C(e, "previousSibling", n);
        },
        siblings: function (e) {
          return E((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return E(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (k(e, "template") && (e = e.content || e),
              w.merge([], e.childNodes));
        },
      },
      function (e, t) {
        w.fn[e] = function (n, r) {
          var i = w.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = w.filter(r, i)),
            this.length > 1 &&
              (A[e] || w.uniqueSort(i), D.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var N = /[^\x20\t\r\n\f]+/g;
  function L(e) {
    return e;
  }
  function R(e) {
    throw e;
  }
  function O(e, t, n, r) {
    var i;
    try {
      e && p((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && p((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? (function (e) {
            var t = {};
            return (
              w.each(e.match(N) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : w.extend({}, e);
    var t,
      n,
      r,
      i,
      a = [],
      s = [],
      o = -1,
      u = function () {
        for (i = i || e.once, r = t = !0; s.length; o = -1)
          for (n = s.shift(); ++o < a.length; )
            !1 === a[o].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((o = a.length), (n = !1));
        e.memory || (n = !1), (t = !1), i && (a = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            a &&
              (n && !t && ((o = a.length - 1), s.push(n)),
              (function t(n) {
                w.each(n, function (n, r) {
                  p(r)
                    ? (e.unique && c.has(r)) || a.push(r)
                    : r && r.length && "string" !== y(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; (n = w.inArray(t, a, n)) > -1; )
                a.splice(n, 1), n <= o && o--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? w.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (i = s = []), (a = n = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (i = s = []), n || t || (a = n = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return c;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              w.Callbacks("memory"),
              w.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, r) {
                    var i = p(e[r[4]]) && e[r[4]];
                    a[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && p(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[r[0] + "With"](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, r, i) {
              var a = 0;
              function s(t, n, r, i) {
                return function () {
                  var o = this,
                    u = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < a)) {
                        if ((e = r.apply(o, u)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          p(c)
                            ? i
                              ? c.call(e, s(a, n, L, i), s(a, n, R, i))
                              : (a++,
                                c.call(
                                  e,
                                  s(a, n, L, i),
                                  s(a, n, R, i),
                                  s(a, n, L, n.notifyWith)
                                ))
                            : (r !== L && ((o = void 0), (u = [e])),
                              (i || n.resolveWith)(o, u));
                      }
                    },
                    l = i
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (e) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(e, l.stackTrace),
                              t + 1 >= a &&
                                (r !== R && ((o = void 0), (u = [e])),
                                n.rejectWith(o, u));
                          }
                        };
                  t
                    ? l()
                    : (w.Deferred.getStackHook &&
                        (l.stackTrace = w.Deferred.getStackHook()),
                      e.setTimeout(l));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(s(0, e, p(i) ? i : L, e.notifyWith)),
                    n[1][3].add(s(0, e, p(t) ? t : L)),
                    n[2][3].add(s(0, e, p(r) ? r : R));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, i) : i;
            },
          },
          a = {};
        return (
          w.each(n, function (e, t) {
            var s = t[2],
              o = t[5];
            (i[t[1]] = s.add),
              o &&
                s.add(
                  function () {
                    r = o;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (a[t[0]] = function () {
                return (
                  a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                );
              }),
              (a[t[0] + "With"] = s.fireWith);
          }),
          i.promise(a),
          t && t.call(a, a),
          a
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          a = i.call(arguments),
          s = w.Deferred(),
          o = function (e) {
            return function (n) {
              (r[e] = this),
                (a[e] = arguments.length > 1 ? i.call(arguments) : n),
                --t || s.resolveWith(r, a);
            };
          };
        if (
          t <= 1 &&
          (O(e, s.done(o(n)).resolve, s.reject, !t),
          "pending" === s.state() || p(a[n] && a[n].then))
        )
          return s.then();
        for (; n--; ) O(a[n], o(n), s.reject);
        return s.promise();
      },
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      M.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var I = w.Deferred();
  function H() {
    _.removeEventListener("DOMContentLoaded", H),
      e.removeEventListener("load", H),
      w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      I.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0),
          (!0 !== e && --w.readyWait > 0) || I.resolveWith(_, [w]));
      },
    }),
    (w.ready.then = I.then),
    "complete" === _.readyState ||
    ("loading" !== _.readyState && !_.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (_.addEventListener("DOMContentLoaded", H),
        e.addEventListener("load", H));
  var F = function (e, t, n, r, i, a, s) {
      var o = 0,
        u = e.length,
        c = null == n;
      if ("object" === y(n))
        for (o in ((i = !0), n)) F(e, t, o, n[o], !0, a, s);
      else if (
        void 0 !== r &&
        ((i = !0),
        p(r) || (s = !0),
        c &&
          (s
            ? (t.call(e, r), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(w(e), n);
              }))),
        t)
      )
        for (; o < u; o++) t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)));
      return i ? e : c ? t.call(e) : u ? t(e[0], n) : a;
    },
    W = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(W, "ms-").replace(z, U);
  }
  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = w.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            X(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(N) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 === t || w.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = (function (e) {
            return (
              "true" === e ||
              ("false" !== e &&
                ("null" === e
                  ? null
                  : e === +e + ""
                  ? +e
                  : J.test(e)
                  ? JSON.parse(e)
                  : e))
            );
          })(n);
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          a = this[0],
          s = a && a.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = Q.get(a)), 1 === a.nodeType && !Y.get(a, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (r = s[n].name).indexOf("data-") &&
                ((r = V(r.slice(5))), Z(a, r, i[r]));
            Y.set(a, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              Q.set(this, e);
            })
          : F(
              this,
              function (t) {
                var n;
                if (a && void 0 === t)
                  return void 0 !== (n = Q.get(a, e)) ||
                    void 0 !== (n = Z(a, e))
                    ? n
                    : void 0;
                this.each(function () {
                  Q.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, w.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          a = w._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete a.stop,
            i.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              a
            )),
          !r && a && a.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = w.Deferred(),
          a = this,
          s = this.length,
          o = function () {
            --r || i.resolveWith(a, [a]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = Y.get(a[s], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(o));
        return o(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = _.documentElement,
    ie = function (e) {
      return w.contains(e.ownerDocument, e);
    },
    ae = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
      );
    });
  var se = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === w.css(e, "display"))
    );
  };
  function oe(e, t, n, r) {
    var i,
      a,
      s = 20,
      o = r
        ? function () {
            return r.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      u = o(),
      c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      l =
        e.nodeType &&
        (w.cssNumber[t] || ("px" !== c && +u)) &&
        te.exec(w.css(e, t));
    if (l && l[3] !== c) {
      for (u /= 2, c = c || l[3], l = +u || 1; s--; )
        w.style(e, t, l + c),
          (1 - a) * (1 - (a = o() / u || 0.5)) <= 0 && (s = 0),
          (l /= a);
      (l *= 2), w.style(e, t, l + c), (n = n || []);
    }
    return (
      n &&
        ((l = +l || +u || 0),
        (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = c), (r.start = l), (r.end = i))),
      i
    );
  }
  var ue = {};
  function ce(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = ue[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = w.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (ue[r] = i),
      i)
    );
  }
  function le(e, t) {
    for (var n, r, i = [], a = 0, s = e.length; a < s; a++)
      (r = e[a]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[a] = Y.get(r, "display") || null),
              i[a] || (r.style.display = "")),
            "" === r.style.display && se(r) && (i[a] = ce(r)))
          : "none" !== n && ((i[a] = "none"), Y.set(r, "display", n)));
    for (a = 0; a < s; a++) null != i[a] && (e[a].style.display = i[a]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var fe,
    de,
    he = /^(?:checkbox|radio)$/i,
    pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    me = /^$|^module$|\/(?:java|ecma)script/i;
  (fe = _.createDocumentFragment().appendChild(_.createElement("div"))),
    (de = _.createElement("input")).setAttribute("type", "radio"),
    de.setAttribute("checked", "checked"),
    de.setAttribute("name", "t"),
    fe.appendChild(de),
    (h.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (fe.innerHTML = "<textarea>x</textarea>"),
    (h.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
    (fe.innerHTML = "<option></option>"),
    (h.option = !!fe.lastChild);
  var _e = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function be(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && k(e, t)) ? w.merge([e], n) : n
    );
  }
  function ge(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (_e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead),
    (_e.th = _e.td),
    h.option ||
      (_e.optgroup = _e.option = [
        1,
        "<select multiple='multiple'>",
        "</select>",
      ]);
  var ye = /<|&#?\w+;/;
  function ve(e, t, n, r, i) {
    for (
      var a,
        s,
        o,
        u,
        c,
        l,
        f = t.createDocumentFragment(),
        d = [],
        h = 0,
        p = e.length;
      h < p;
      h++
    )
      if ((a = e[h]) || 0 === a)
        if ("object" === y(a)) w.merge(d, a.nodeType ? [a] : a);
        else if (ye.test(a)) {
          for (
            s = s || f.appendChild(t.createElement("div")),
              o = (pe.exec(a) || ["", ""])[1].toLowerCase(),
              u = _e[o] || _e._default,
              s.innerHTML = u[1] + w.htmlPrefilter(a) + u[2],
              l = u[0];
            l--;

          )
            s = s.lastChild;
          w.merge(d, s.childNodes), ((s = f.firstChild).textContent = "");
        } else d.push(t.createTextNode(a));
    for (f.textContent = "", h = 0; (a = d[h++]); )
      if (r && w.inArray(a, r) > -1) i && i.push(a);
      else if (
        ((c = ie(a)), (s = be(f.appendChild(a), "script")), c && ge(s), n)
      )
        for (l = 0; (a = s[l++]); ) me.test(a.type || "") && n.push(a);
    return f;
  }
  var we = /^([^.]*)(?:\.(.+)|)/;
  function xe() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return _.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, a) {
    var s, o;
    if ("object" == typeof t) {
      for (o in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, o, n, r, t[o], a);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Se;
    else if (!i) return e;
    return (
      1 === a &&
        ((s = i),
        (i = function (e) {
          return w().off(e), s.apply(this, arguments);
        }),
        (i.guid = s.guid || (s.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, i, r, n);
      })
    );
  }
  function Pe(e, t, n) {
    n
      ? (Y.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var r,
              a,
              s = Y.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (s.length)
                (w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((s = i.call(arguments)),
                Y.set(this, t, s),
                (r = n(this, t)),
                this[t](),
                s !== (a = Y.get(this, t)) || r ? Y.set(this, t, !1) : (a = {}),
                s !== a)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), a && a.value
                );
            } else
              s.length &&
                (Y.set(this, t, {
                  value: w.event.trigger(
                    w.extend(s[0], w.Event.prototype),
                    s.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, t) && w.event.add(e, t, xe);
  }
  (w.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var a,
        s,
        o,
        u,
        c,
        l,
        f,
        d,
        h,
        p,
        m,
        _ = Y.get(e);
      if (X(e))
        for (
          n.handler && ((n = (a = n).handler), (i = a.selector)),
            i && w.find.matchesSelector(re, i),
            n.guid || (n.guid = w.guid++),
            (u = _.events) || (u = _.events = Object.create(null)),
            (s = _.handle) ||
              (s = _.handle = function (t) {
                return void 0 !== w && w.event.triggered !== t.type
                  ? w.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
            c = (t = (t || "").match(N) || [""]).length;
          c--;

        )
          (h = m = (o = we.exec(t[c]) || [])[1]),
            (p = (o[2] || "").split(".").sort()),
            h &&
              ((f = w.event.special[h] || {}),
              (h = (i ? f.delegateType : f.bindType) || h),
              (f = w.event.special[h] || {}),
              (l = w.extend(
                {
                  type: h,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: p.join("."),
                },
                a
              )),
              (d = u[h]) ||
                (((d = u[h] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, p, s)) ||
                  (e.addEventListener && e.addEventListener(h, s))),
              f.add &&
                (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
              (w.event.global[h] = !0));
    },
    remove: function (e, t, n, r, i) {
      var a,
        s,
        o,
        u,
        c,
        l,
        f,
        d,
        h,
        p,
        m,
        _ = Y.hasData(e) && Y.get(e);
      if (_ && (u = _.events)) {
        for (c = (t = (t || "").match(N) || [""]).length; c--; )
          if (
            ((h = m = (o = we.exec(t[c]) || [])[1]),
            (p = (o[2] || "").split(".").sort()),
            h)
          ) {
            for (
              f = w.event.special[h] || {},
                d = u[(h = (r ? f.delegateType : f.bindType) || h)] || [],
                o =
                  o[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = a = d.length;
              a--;

            )
              (l = d[a]),
                (!i && m !== l.origType) ||
                  (n && n.guid !== l.guid) ||
                  (o && !o.test(l.namespace)) ||
                  (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                  (d.splice(a, 1),
                  l.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, l));
            s &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, p, _.handle)) ||
                w.removeEvent(e, h, _.handle),
              delete u[h]);
          } else for (h in u) w.event.remove(e, h + t[c], n, r, !0);
        w.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        a,
        s,
        o = new Array(arguments.length),
        u = w.event.fix(e),
        c = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        l = w.event.special[u.type] || {};
      for (o[0] = u, t = 1; t < arguments.length; t++) o[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, u))
      ) {
        for (
          s = w.event.handlers.call(this, u, c), t = 0;
          (i = s[t++]) && !u.isPropagationStopped();

        )
          for (
            u.currentTarget = i.elem, n = 0;
            (a = i.handlers[n++]) && !u.isImmediatePropagationStopped();

          )
            (u.rnamespace &&
              !1 !== a.namespace &&
              !u.rnamespace.test(a.namespace)) ||
              ((u.handleObj = a),
              (u.data = a.data),
              void 0 !==
                (r = (
                  (w.event.special[a.origType] || {}).handle || a.handler
                ).apply(i.elem, o)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        a,
        s,
        o = [],
        u = t.delegateCount,
        c = e.target;
      if (u && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (a = [], s = {}, n = 0; n < u; n++)
              void 0 === s[(i = (r = t[n]).selector + " ")] &&
                (s[i] = r.needsContext
                  ? w(i, this).index(c) > -1
                  : w.find(i, this, null, [c]).length),
                s[i] && a.push(r);
            a.length && o.push({ elem: c, handlers: a });
          }
      return (
        (c = this), u < t.length && o.push({ elem: c, handlers: t.slice(u) }), o
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: p(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            he.test(t.type) && t.click && k(t, "input") && Pe(t, "click", xe),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            he.test(t.type) && t.click && k(t, "input") && Pe(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (he.test(t.type) &&
              t.click &&
              k(t, "input") &&
              Y.get(t, "click")) ||
            k(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? xe
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = xe),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = xe),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = xe),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      w.event.addProp
    ),
    w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      w.event.special[e] = {
        setup: function () {
          return Pe(this, e, Ce), !1;
        },
        trigger: function () {
          return Pe(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              a = e.handleObj;
            return (
              (i && (i === r || w.contains(r, i))) ||
                ((e.type = a.origType),
                (n = a.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            w(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Se),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Be(e, t) {
    return (
      (k(e, "table") &&
        k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        w(e).children("tbody")[0]) ||
      e
    );
  }
  function qe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function De(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Ae(e, t) {
    var n, r, i, a, s, o;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (o = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), o))
          for (n = 0, r = o[i].length; n < r; n++) w.event.add(t, i, o[i][n]);
      Q.hasData(e) && ((a = Q.access(e)), (s = w.extend({}, a)), Q.set(t, s));
    }
  }
  function $e(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && he.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function Ne(e, t, n, r) {
    t = a(t);
    var i,
      s,
      o,
      u,
      c,
      l,
      f = 0,
      d = e.length,
      m = d - 1,
      _ = t[0],
      b = p(_);
    if (b || (d > 1 && "string" == typeof _ && !h.checkClone && Te.test(_)))
      return e.each(function (i) {
        var a = e.eq(i);
        b && (t[0] = _.call(this, i, a.html())), Ne(a, t, n, r);
      });
    if (
      d &&
      ((s = (i = ve(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === i.childNodes.length && (i = s),
      s || r)
    ) {
      for (u = (o = w.map(be(i, "script"), qe)).length; f < d; f++)
        (c = i),
          f !== m &&
            ((c = w.clone(c, !0, !0)), u && w.merge(o, be(c, "script"))),
          n.call(e[f], c, f);
      if (u)
        for (l = o[o.length - 1].ownerDocument, w.map(o, De), f = 0; f < u; f++)
          (c = o[f]),
            me.test(c.type || "") &&
              !Y.access(c, "globalEval") &&
              w.contains(l, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? w._evalUrl &&
                  !c.noModule &&
                  w._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    l
                  )
                : g(c.textContent.replace(je, ""), c, l));
    }
    return e;
  }
  function Le(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, a = 0; null != (r = i[a]); a++)
      n || 1 !== r.nodeType || w.cleanData(be(r)),
        r.parentNode &&
          (n && ie(r) && ge(be(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        a,
        s,
        o = e.cloneNode(!0),
        u = ie(e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (s = be(o), r = 0, i = (a = be(e)).length; r < i; r++)
          $e(a[r], s[r]);
      if (t)
        if (n)
          for (a = a || be(e), s = s || be(o), r = 0, i = a.length; r < i; r++)
            Ae(a[r], s[r]);
        else Ae(e, o);
      return (
        (s = be(o, "script")).length > 0 && ge(s, !u && be(e, "script")), o
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = w.event.special, a = 0; void 0 !== (n = e[a]); a++)
        if (X(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Le(this, e, !0);
      },
      remove: function (e) {
        return Le(this, e);
      },
      text: function (e) {
        return F(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Ne(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Be(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ne(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Be(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Ne(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ne(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(be(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return F(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !_e[(pe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(be(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Ne(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(be(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, r = [], i = w(e), a = i.length - 1, o = 0; o <= a; o++)
            (n = o === a ? this : this.clone(!0)),
              w(i[o])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Oe = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Me = function (e, t, n) {
      var r,
        i,
        a = {};
      for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = a[i];
      return r;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function He(e, t, n) {
    var r,
      i,
      a,
      s,
      o = e.style;
    return (
      (n = n || Oe(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (s = w.style(e, t)),
        !h.pixelBoxStyles() &&
          Re.test(s) &&
          Ie.test(t) &&
          ((r = o.width),
          (i = o.minWidth),
          (a = o.maxWidth),
          (o.minWidth = o.maxWidth = o.width = s),
          (s = n.width),
          (o.width = r),
          (o.minWidth = i),
          (o.maxWidth = a))),
      void 0 !== s ? s + "" : s
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (l) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(c).appendChild(l);
        var t = e.getComputedStyle(l);
        (r = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (l.style.right = "60%"),
          (s = 36 === n(t.right)),
          (i = 36 === n(t.width)),
          (l.style.position = "absolute"),
          (a = 12 === n(l.offsetWidth / 3)),
          re.removeChild(c),
          (l = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var r,
      i,
      a,
      s,
      o,
      u,
      c = _.createElement("div"),
      l = _.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === l.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), i;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), r;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), a;
        },
        reliableTrDimensions: function () {
          var t, n, r, i;
          return (
            null == o &&
              ((t = _.createElement("table")),
              (n = _.createElement("tr")),
              (r = _.createElement("div")),
              (t.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "border:1px solid"),
              (n.style.height = "1px"),
              (r.style.height = "9px"),
              (r.style.display = "block"),
              re.appendChild(t).appendChild(n).appendChild(r),
              (i = e.getComputedStyle(n)),
              (o =
                parseInt(i.height, 10) +
                  parseInt(i.borderTopWidth, 10) +
                  parseInt(i.borderBottomWidth, 10) ===
                n.offsetHeight),
              re.removeChild(t)),
            o
          );
        },
      }));
  })();
  var We = ["Webkit", "Moz", "ms"],
    ze = _.createElement("div").style,
    Ue = {};
  function Ve(e) {
    var t = w.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = We.length;
                n--;

              )
                if ((e = We[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Xe = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, a) {
    var s = "width" === t ? 1 : 0,
      o = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (u += w.css(e, n + ne[s], !0, i)),
        r
          ? ("content" === n && (u -= w.css(e, "padding" + ne[s], !0, i)),
            "margin" !== n &&
              (u -= w.css(e, "border" + ne[s] + "Width", !0, i)))
          : ((u += w.css(e, "padding" + ne[s], !0, i)),
            "padding" !== n
              ? (u += w.css(e, "border" + ne[s] + "Width", !0, i))
              : (o += w.css(e, "border" + ne[s] + "Width", !0, i)));
    return (
      !r &&
        a >= 0 &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - a - u - o - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Oe(e),
      i =
        (!h.boxSizingReliable() || n) &&
        "border-box" === w.css(e, "boxSizing", !1, r),
      a = i,
      s = He(e, t, r),
      o = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Re.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!h.boxSizingReliable() && i) ||
        (!h.reliableTrDimensions() && k(e, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === w.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === w.css(e, "boxSizing", !1, r)),
        (a = o in e) && (s = e[o])),
      (s = parseFloat(s) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), a, r, s) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = He(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
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
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          a,
          s,
          o = V(t),
          u = Ge.test(t),
          c = e.style;
        if (
          (u || (t = Ve(o)), (s = w.cssHooks[t] || w.cssHooks[o]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
        "string" === (a = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = oe(e, t, i)), (a = "number")),
          null != n &&
            n == n &&
            ("number" !== a ||
              u ||
              (n += (i && i[3]) || (w.cssNumber[o] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
              (u ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        a,
        s,
        o = V(t);
      return (
        Ge.test(t) || (t = Ve(o)),
        (s = w.cssHooks[t] || w.cssHooks[o]) &&
          "get" in s &&
          (i = s.get(e, !0, n)),
        void 0 === i && (i = He(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((a = parseFloat(i)), !0 === n || isFinite(a) ? a || 0 : i)
          : i
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !Xe.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, t, r)
              : Me(e, Ye, function () {
                  return Ze(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            a = Oe(e),
            s = !h.scrollboxSize() && "absolute" === a.position,
            o = (s || r) && "border-box" === w.css(e, "boxSizing", !1, a),
            u = r ? Ke(e, t, r, o, a) : 0;
          return (
            o &&
              s &&
              (u -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(a[t]) -
                  Ke(e, t, "border", !1, a) -
                  0.5
              )),
            u &&
              (i = te.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Je(0, n, u)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = Fe(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(He(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + ne[r] + t] = a[r] || a[r - 2] || a[0];
          return i;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Je);
    }),
    w.fn.extend({
      css: function (e, t) {
        return F(
          this,
          function (e, t, n) {
            var r,
              i,
              a = {},
              s = 0;
            if (Array.isArray(t)) {
              for (r = Oe(e), i = t.length; s < i; s++)
                a[t[s]] = w.css(e, t[s], !1, r);
              return a;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (w.Tween = et),
    (et.prototype = {
      constructor: et,
      init: function (e, t, n, r, i, a) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = a || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = w.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }),
    (et.prototype.init.prototype = et.prototype),
    (et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!w.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (et.propHooks.scrollTop = et.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = et.prototype.init),
    (w.fx.step = {});
  var tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function at() {
    nt &&
      (!1 === _.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(at)
        : e.setTimeout(at, w.fx.interval),
      w.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function ot(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
        a = 0,
        s = i.length;
      a < s;
      a++
    )
      if ((r = i[a].call(n, t, e))) return r;
  }
  function ct(e, t, n) {
    var r,
      i,
      a = 0,
      s = ct.prefilters.length,
      o = w.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = tt || st(),
            n = Math.max(0, c.startTime + c.duration - t),
            r = 1 - (n / c.duration || 0),
            a = 0,
            s = c.tweens.length;
          a < s;
          a++
        )
          c.tweens[a].run(r);
        return (
          o.notifyWith(e, [c, r, n]),
          r < 1 && s
            ? n
            : (s || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1)
        );
      },
      c = o.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: tt || st(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = w.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? c.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) c.tweens[n].run(1);
          return (
            t
              ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t]))
              : o.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      l = c.props;
    for (
      !(function (e, t) {
        var n, r, i, a, s;
        for (n in e)
          if (
            ((i = t[(r = V(n))]),
            (a = e[n]),
            Array.isArray(a) && ((i = a[1]), (a = e[n] = a[0])),
            n !== r && ((e[r] = a), delete e[n]),
            (s = w.cssHooks[r]) && ("expand" in s))
          )
            for (n in ((a = s.expand(a)), delete e[r], a))
              (n in e) || ((e[n] = a[n]), (t[n] = i));
          else t[r] = i;
      })(l, c.opts.specialEasing);
      a < s;
      a++
    )
      if ((r = ct.prefilters[a].call(c, e, l, c.opts)))
        return (
          p(r.stop) &&
            (w._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      w.map(l, ut, c),
      p(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      w.fx.timer(w.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (w.Animation = w.extend(ct, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return oe(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      p(e) ? ((t = e), (e = ["*"])) : (e = e.match(N));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ct.tweeners[n] = ct.tweeners[n] || []),
          ct.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          a,
          s,
          o,
          u,
          c,
          l,
          f = "width" in t || "height" in t,
          d = this,
          h = {},
          p = e.style,
          m = e.nodeType && se(e),
          _ = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (s = w._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (o = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || o();
            })),
          s.unqueued++,
          d.always(function () {
            d.always(function () {
              s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (a = a || "toggle" === i),
              i === (m ? "hide" : "show"))
            ) {
              if ("show" !== i || !_ || void 0 === _[r]) continue;
              m = !0;
            }
            h[r] = (_ && _[r]) || w.style(e, r);
          }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (c = _ && _.display) && (c = Y.get(e, "display")),
            "none" === (l = w.css(e, "display")) &&
              (c
                ? (l = c)
                : (le([e], !0),
                  (c = e.style.display || c),
                  (l = w.css(e, "display")),
                  le([e]))),
            ("inline" === l || ("inline-block" === l && null != c)) &&
              "none" === w.css(e, "float") &&
              (u ||
                (d.done(function () {
                  p.display = c;
                }),
                null == c && ((l = p.display), (c = "none" === l ? "" : l))),
              (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            d.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (u = !1),
          h))
            u ||
              (_
                ? "hidden" in _ && (m = _.hidden)
                : (_ = Y.access(e, "fxshow", { display: c })),
              a && (_.hidden = !m),
              m && le([e], !0),
              d.done(function () {
                for (r in (m || le([e]), Y.remove(e, "fxshow"), h))
                  w.style(e, r, h[r]);
              })),
              (u = ut(m ? _[r] : 0, r, d)),
              r in _ ||
                ((_[r] = u.start), m && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (p(e) && e),
              duration: e,
              easing: (n && t) || (t && !p(t) && t),
            };
      return (
        w.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in w.fx.speeds
              ? (r.duration = w.fx.speeds[r.duration])
              : (r.duration = w.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          p(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }),
        r
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(se)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = w.isEmptyObject(e),
          a = w.speed(t, n, r),
          s = function () {
            var t = ct(this, w.extend({}, e), a);
            (i || Y.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          i || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              a = w.timers,
              s = Y.get(this);
            if (i) s[i] && s[i].stop && r(s[i]);
            else for (i in s) s[i] && s[i].stop && it.test(i) && r(s[i]);
            for (i = a.length; i--; )
              a[i].elem !== this ||
                (null != e && a[i].queue !== e) ||
                (a[i].anim.stop(n), (t = !1), a.splice(i, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Y.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              a = w.timers,
              s = r ? r.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = a.length;
              t--;

            )
              a[t].elem === this &&
                a[t].queue === e &&
                (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; t < s; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ot(t, !0), e, r, i);
      };
    }),
    w.each(
      {
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (tt = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      nt || ((nt = !0), at());
    }),
    (w.fx.stop = function () {
      nt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = _.createElement("input"),
        t = _.createElement("select").appendChild(_.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = _.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var lt,
    ft = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return F(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var r,
          i,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === a && w.isXMLDoc(e)) ||
                (i =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? lt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = w.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && k(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(N);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (lt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ft[t] || w.find.attr;
      ft[t] = function (e, t, r) {
        var i,
          a,
          s = t.toLowerCase();
        return (
          r ||
            ((a = ft[s]),
            (ft[s] = i),
            (i = null != n(e, t, r) ? s : null),
            (ft[s] = a)),
          i
        );
      };
    });
  var dt = /^(?:input|select|textarea|button)$/i,
    ht = /^(?:a|area)$/i;
  function pt(e) {
    return (e.match(N) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function _t(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(N)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return F(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var r,
          i,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return (
            (1 === a && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (i = w.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : dt.test(e.nodeName) || (ht.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          r,
          i,
          a,
          s,
          o,
          u = 0;
        if (p(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, mt(this)));
          });
        if ((t = _t(e)).length)
          for (; (n = this[u++]); )
            if (((i = mt(n)), (r = 1 === n.nodeType && " " + pt(i) + " "))) {
              for (s = 0; (a = t[s++]); )
                r.indexOf(" " + a + " ") < 0 && (r += a + " ");
              i !== (o = pt(r)) && n.setAttribute("class", o);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          r,
          i,
          a,
          s,
          o,
          u = 0;
        if (p(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, mt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = _t(e)).length)
          for (; (n = this[u++]); )
            if (((i = mt(n)), (r = 1 === n.nodeType && " " + pt(i) + " "))) {
              for (s = 0; (a = t[s++]); )
                for (; r.indexOf(" " + a + " ") > -1; )
                  r = r.replace(" " + a + " ", " ");
              i !== (o = pt(r)) && n.setAttribute("class", o);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          r = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && r
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : p(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, mt(this), t), t);
            })
          : this.each(function () {
              var t, i, a, s;
              if (r)
                for (i = 0, a = w(this), s = _t(e); (t = s[i++]); )
                  a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = mt(this)) && Y.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : Y.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (1 === n.nodeType && (" " + pt(mt(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var bt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = p(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, w(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : Array.isArray(i) &&
                  (i = w.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(bt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : pt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              a = e.selectedIndex,
              s = "select-one" === e.type,
              o = s ? null : [],
              u = s ? a + 1 : i.length;
            for (r = a < 0 ? u : s ? a : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === a) &&
                !n.disabled &&
                (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), s)) return t;
                o.push(t);
              }
            return o;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, a = w.makeArray(t), s = i.length;
              s--;

            )
              ((r = i[s]).selected =
                w.inArray(w.valHooks.option.get(r), a) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), a;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = w.inArray(w(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var gt = /^(?:focusinfocus|focusoutblur)$/,
    yt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, r, i) {
      var a,
        s,
        o,
        u,
        c,
        f,
        d,
        h,
        b = [r || _],
        g = l.call(t, "type") ? t.type : t,
        y = l.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = o = r = r || _),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !gt.test(g + w.event.triggered) &&
          (g.indexOf(".") > -1 &&
            ((y = g.split(".")), (g = y.shift()), y.sort()),
          (c = g.indexOf(":") < 0 && "on" + g),
          ((t = t[w.expando]
            ? t
            : new w.Event(g, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
          (t.namespace = y.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[g] || {}),
          i || !d.trigger || !1 !== d.trigger.apply(r, n)))
      ) {
        if (!i && !d.noBubble && !m(r)) {
          for (
            u = d.delegateType || g, gt.test(u + g) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            b.push(s), (o = s);
          o === (r.ownerDocument || _) &&
            b.push(o.defaultView || o.parentWindow || e);
        }
        for (a = 0; (s = b[a++]) && !t.isPropagationStopped(); )
          (h = s),
            (t.type = a > 1 ? u : d.bindType || g),
            (f =
              (Y.get(s, "events") || Object.create(null))[t.type] &&
              Y.get(s, "handle")) && f.apply(s, n),
            (f = c && s[c]) &&
              f.apply &&
              X(s) &&
              ((t.result = f.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = g),
          i ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(b.pop(), n)) ||
            !X(r) ||
            (c &&
              p(r[g]) &&
              !m(r) &&
              ((o = r[c]) && (r[c] = null),
              (w.event.triggered = g),
              t.isPropagationStopped() && h.addEventListener(g, yt),
              r[g](),
              t.isPropagationStopped() && h.removeEventListener(g, yt),
              (w.event.triggered = void 0),
              o && (r[c] = o))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this.document || this,
              i = Y.access(r, t);
            i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this.document || this,
              i = Y.access(r, t) - 1;
            i
              ? Y.access(r, t, i)
              : (r.removeEventListener(e, n, !0), Y.remove(r, t));
          },
        };
      });
  var vt = e.location,
    wt = { guid: Date.now() },
    xt = /\?/;
  w.parseXML = function (t) {
    var n, r;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {}
    return (
      (r = n && n.getElementsByTagName("parsererror")[0]),
      (n && !r) ||
        w.error(
          "Invalid XML: " +
            (r
              ? w
                  .map(r.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : t)
        ),
      n
    );
  };
  var St = /\[\]$/,
    Ct = /\r?\n/g,
    Et = /^(?:submit|button|image|reset|file)$/i,
    Pt = /^(?:input|select|textarea|keygen)/i;
  function kt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      w.each(t, function (t, i) {
        n || St.test(e)
          ? r(e, i)
          : kt(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== y(t)) r(e, t);
    else for (i in t) kt(e + "[" + i + "]", t[i], n, r);
  }
  (w.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = p(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) kt(n, e[n], t, i);
    return r.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              Pt.test(this.nodeName) &&
              !Et.test(e) &&
              (this.checked || !he.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Ct, "\r\n") };
                })
              : { name: t.name, value: n.replace(Ct, "\r\n") };
          })
          .get();
      },
    });
  var Tt = /%20/g,
    jt = /#.*$/,
    Bt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Dt = /^(?:GET|HEAD)$/,
    At = /^\/\//,
    $t = {},
    Nt = {},
    Lt = "*/".concat("*"),
    Rt = _.createElement("a");
  function Ot(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        a = t.toLowerCase().match(N) || [];
      if (p(n))
        for (; (r = a[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function Mt(e, t, n, r) {
    var i = {},
      a = e === Nt;
    function s(o) {
      var u;
      return (
        (i[o] = !0),
        w.each(e[o] || [], function (e, o) {
          var c = o(t, n, r);
          return "string" != typeof c || a || i[c]
            ? a
              ? !(u = c)
              : void 0
            : (t.dataTypes.unshift(c), s(c), !1);
        }),
        u
      );
    }
    return s(t.dataTypes[0]) || (!i["*"] && s("*"));
  }
  function It(e, t) {
    var n,
      r,
      i = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && w.extend(!0, e, r), e;
  }
  (Rt.href = vt.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: vt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          vt.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Lt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? It(It(e, w.ajaxSettings), t) : It(w.ajaxSettings, e);
      },
      ajaxPrefilter: Ot($t),
      ajaxTransport: Ot(Nt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var r,
          i,
          a,
          s,
          o,
          u,
          c,
          l,
          f,
          d,
          h = w.ajaxSetup({}, n),
          p = h.context || h,
          m = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
          b = w.Deferred(),
          g = w.Callbacks("once memory"),
          y = h.statusCode || {},
          v = {},
          x = {},
          S = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = qt.exec(a)); )
                    s[t[1].toLowerCase() + " "] = (
                      s[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (v[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) C.always(e[C.status]);
                else for (t in e) y[t] = [y[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || S;
              return r && r.abort(t), E(0, t), this;
            },
          };
        if (
          (b.promise(C),
          (h.url = ((t || h.url || vt.href) + "").replace(
            At,
            vt.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(N) || [""]),
          null == h.crossDomain)
        ) {
          u = _.createElement("a");
          try {
            (u.href = h.url),
              (u.href = u.href),
              (h.crossDomain =
                Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = w.param(h.data, h.traditional)),
          Mt($t, h, n, C),
          c)
        )
          return C;
        for (f in ((l = w.event && h.global) &&
          0 == w.active++ &&
          w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Dt.test(h.type)),
        (i = h.url.replace(jt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(Tt, "+"))
          : ((d = h.url.slice(i.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((i += (xt.test(i) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((i = i.replace(Bt, "$1")),
              (d = (xt.test(i) ? "&" : "?") + "_=" + wt.guid++ + d)),
            (h.url = i + d)),
        h.ifModified &&
          (w.lastModified[i] &&
            C.setRequestHeader("If-Modified-Since", w.lastModified[i]),
          w.etag[i] && C.setRequestHeader("If-None-Match", w.etag[i])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          C.setRequestHeader("Content-Type", h.contentType),
        C.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + Lt + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          C.setRequestHeader(f, h.headers[f]);
        if (h.beforeSend && (!1 === h.beforeSend.call(p, C, h) || c))
          return C.abort();
        if (
          ((S = "abort"),
          g.add(h.complete),
          C.done(h.success),
          C.fail(h.error),
          (r = Mt(Nt, h, n, C)))
        ) {
          if (((C.readyState = 1), l && m.trigger("ajaxSend", [C, h]), c))
            return C;
          h.async &&
            h.timeout > 0 &&
            (o = e.setTimeout(function () {
              C.abort("timeout");
            }, h.timeout));
          try {
            (c = !1), r.send(v, E);
          } catch (e) {
            if (c) throw e;
            E(-1, e);
          }
        } else E(-1, "No Transport");
        function E(t, n, s, u) {
          var f,
            d,
            _,
            v,
            x,
            S = n;
          c ||
            ((c = !0),
            o && e.clearTimeout(o),
            (r = void 0),
            (a = u || ""),
            (C.readyState = t > 0 ? 4 : 0),
            (f = (t >= 200 && t < 300) || 304 === t),
            s &&
              (v = (function (e, t, n) {
                for (
                  var r, i, a, s, o = e.contents, u = e.dataTypes;
                  "*" === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in o)
                    if (o[i] && o[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) a = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      a = i;
                      break;
                    }
                    s || (s = i);
                  }
                  a = a || s;
                }
                if (a) return a !== u[0] && u.unshift(a), n[a];
              })(h, C, s)),
            !f &&
              w.inArray("script", h.dataTypes) > -1 &&
              w.inArray("json", h.dataTypes) < 0 &&
              (h.converters["text script"] = function () {}),
            (v = (function (e, t, n, r) {
              var i,
                a,
                s,
                o,
                u,
                c = {},
                l = e.dataTypes.slice();
              if (l[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
              for (a = l.shift(); a; )
                if (
                  (e.responseFields[a] && (n[e.responseFields[a]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = a),
                  (a = l.shift()))
                )
                  if ("*" === a) a = u;
                  else if ("*" !== u && u !== a) {
                    if (!(s = c[u + " " + a] || c["* " + a]))
                      for (i in c)
                        if (
                          (o = i.split(" "))[1] === a &&
                          (s = c[u + " " + o[0]] || c["* " + o[0]])
                        ) {
                          !0 === s
                            ? (s = c[i])
                            : !0 !== c[i] && ((a = o[0]), l.unshift(o[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + u + " to " + a,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(h, v, C, f)),
            f
              ? (h.ifModified &&
                  ((x = C.getResponseHeader("Last-Modified")) &&
                    (w.lastModified[i] = x),
                  (x = C.getResponseHeader("etag")) && (w.etag[i] = x)),
                204 === t || "HEAD" === h.type
                  ? (S = "nocontent")
                  : 304 === t
                  ? (S = "notmodified")
                  : ((S = v.state), (d = v.data), (f = !(_ = v.error))))
              : ((_ = S), (!t && S) || ((S = "error"), t < 0 && (t = 0))),
            (C.status = t),
            (C.statusText = (n || S) + ""),
            f ? b.resolveWith(p, [d, S, C]) : b.rejectWith(p, [C, S, _]),
            C.statusCode(y),
            (y = void 0),
            l && m.trigger(f ? "ajaxSuccess" : "ajaxError", [C, h, f ? d : _]),
            g.fireWith(p, [C, S]),
            l &&
              (m.trigger("ajaxComplete", [C, h]),
              --w.active || w.event.trigger("ajaxStop")));
        }
        return C;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, "script");
      },
    }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, r, i) {
        return (
          p(n) && ((i = i || r), (r = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    w.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (w._evalUrl = function (e, t, n) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          w.globalEval(e, t, n);
        },
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (p(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return p(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = p(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Ht = { 0: 200, 1223: 204 },
    Ft = w.ajaxSettings.xhr();
  (h.cors = !!Ft && "withCredentials" in Ft),
    (h.ajax = Ft = !!Ft),
    w.ajaxTransport(function (t) {
      var n, r;
      if (h.cors || (Ft && !t.crossDomain))
        return {
          send: function (i, a) {
            var s,
              o = t.xhr();
            if (
              (o.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) o[s] = t.xhrFields[s];
            for (s in (t.mimeType &&
              o.overrideMimeType &&
              o.overrideMimeType(t.mimeType),
            t.crossDomain ||
              i["X-Requested-With"] ||
              (i["X-Requested-With"] = "XMLHttpRequest"),
            i))
              o.setRequestHeader(s, i[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n = r = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null),
                  "abort" === e
                    ? o.abort()
                    : "error" === e
                    ? "number" != typeof o.status
                      ? a(0, "error")
                      : a(o.status, o.statusText)
                    : a(
                        Ht[o.status] || o.status,
                        o.statusText,
                        "text" !== (o.responseType || "text") ||
                          "string" != typeof o.responseText
                          ? { binary: o.response }
                          : { text: o.responseText },
                        o.getAllResponseHeaders()
                      ));
              };
            }),
              (o.onload = n()),
              (r = o.onerror = o.ontimeout = n("error")),
              void 0 !== o.onabort
                ? (o.onabort = r)
                : (o.onreadystatechange = function () {
                    4 === o.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              o.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (r, i) {
            (t = w("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && i("error" === e.type ? 404 : 200, e.type);
                })
              )),
              _.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Wt,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || w.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        a,
        s,
        o =
          !1 !== t.jsonp &&
          (Ut.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(t.data) &&
              "data");
      if (o || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback = p(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          o
            ? (t[o] = t[o].replace(Ut, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return s || w.error(i + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (a = e[i]),
          (e[i] = function () {
            s = arguments;
          }),
          r.always(function () {
            void 0 === a ? w(e).removeProp(i) : (e[i] = a),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), zt.push(i)),
              s && p(a) && a(s[0]),
              (s = a = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument =
      (((Wt = _.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Wt.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((r = (t = _.implementation.createHTMLDocument(
                  ""
                )).createElement("base")).href = _.location.href),
                t.head.appendChild(r))
              : (t = _)),
          (a = !n && []),
          (i = T.exec(e))
            ? [t.createElement(i[1])]
            : ((i = ve([e], t, a)),
              a && a.length && w(a).remove(),
              w.merge([], i.childNodes)));
      var r, i, a;
    }),
    (w.fn.load = function (e, t, n) {
      var r,
        i,
        a,
        s = this,
        o = e.indexOf(" ");
      return (
        o > -1 && ((r = pt(e.slice(o))), (e = e.slice(0, o))),
        p(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        s.length > 0 &&
          w
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (a = arguments),
                s.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, a || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          a,
          s,
          o,
          u,
          c = w.css(e, "position"),
          l = w(e),
          f = {};
        "static" === c && (e.style.position = "relative"),
          (o = l.offset()),
          (a = w.css(e, "top")),
          (u = w.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (a + u).indexOf("auto") > -1
            ? ((s = (r = l.position()).top), (i = r.left))
            : ((s = parseFloat(a) || 0), (i = parseFloat(u) || 0)),
          p(t) && (t = t.call(e, n, w.extend({}, o))),
          null != t.top && (f.top = t.top - o.top + s),
          null != t.left && (f.left = t.left - o.left + i),
          "using" in t ? t.using.call(e, f) : l.css(f);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (i.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - w.css(r, "marginTop", !0),
            left: t.left - i.left - w.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === w.css(e, "position");

          )
            e = e.offsetParent;
          return e || re;
        });
      },
    }),
    w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      e,
      t
    ) {
      var n = "pageYOffset" === t;
      w.fn[e] = function (r) {
        return F(
          this,
          function (e, r, i) {
            var a;
            if (
              (m(e) ? (a = e) : 9 === e.nodeType && (a = e.defaultView),
              void 0 === i)
            )
              return a ? a[t] : e[r];
            a
              ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset)
              : (e[r] = i);
          },
          e,
          r,
          arguments.length
        );
      };
    }),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = Fe(h.pixelPosition, function (e, n) {
        if (n)
          return (n = He(e, t)), Re.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (
        n,
        r
      ) {
        w.fn[r] = function (i, a) {
          var s = arguments.length && (n || "boolean" != typeof i),
            o = n || (!0 === i || !0 === a ? "margin" : "border");
          return F(
            this,
            function (t, n, i) {
              var a;
              return m(t)
                ? 0 === r.indexOf("outer")
                  ? t["inner" + e]
                  : t.document.documentElement["client" + e]
                : 9 === t.nodeType
                ? ((a = t.documentElement),
                  Math.max(
                    t.body["scroll" + e],
                    a["scroll" + e],
                    t.body["offset" + e],
                    a["offset" + e],
                    a["client" + e]
                  ))
                : void 0 === i
                ? w.css(t, n, o)
                : w.style(t, n, i, o);
            },
            t,
            s ? i : void 0,
            s
          );
        };
      });
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.proxy = function (e, t) {
    var n, r, a;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), p(e)))
      return (
        (r = i.call(arguments, 2)),
        (a = function () {
          return e.apply(t || this, r.concat(i.call(arguments)));
        }),
        (a.guid = e.guid = e.guid || w.guid++),
        a
      );
  }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = k),
    (w.isFunction = p),
    (w.isWindow = m),
    (w.camelCase = V),
    (w.type = y),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (w.trim = function (e) {
      return null == e ? "" : (e + "").replace(Vt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Xt = e.jQuery,
    Gt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Gt), t && e.jQuery === w && (e.jQuery = Xt), w;
    }),
    void 0 === t && (e.jQuery = e.$ = w),
    w
  );
});
var BiwaScheme = (function () {
  const TopEnv = {},
    CoreEnv = {},
    nil = {
      toString: function () {
        return "nil";
      },
      to_write: function () {
        return "()";
      },
      to_array: function () {
        return [];
      },
      length: function () {
        return 0;
      },
    },
    undef = new Object();
  undef.toString = function () {
    return "#<undef>";
  };
  const max_trace_size = 40,
    suppress_deprecation_warning = !1,
    VERSION = "0.7.5",
    GitCommit = "7a92b7c3cd5abbb1212309bef72874414996e4e7";
  var idCounter = 0;
  function uniqueId(e) {
    var t = ++idCounter + "";
    return e ? e + t : t;
  }
  const escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
  };
  function escape(e) {
    return Object.entries(escapeMap).reduce(
      (e, [t, n]) => e.replaceAll(t, n),
      e
    );
  }
  const Symbols = {};
  class BiwaSymbol {
    constructor(e) {
      (this.name = e), (Symbols[e] = this);
    }
    inspect() {
      return "'" + this.name;
    }
    toString() {
      return "'" + this.name;
    }
    to_write() {
      return this.name;
    }
  }
  const Sym = function (e, t) {
      return void 0 === Symbols[e]
        ? new BiwaSymbol(e)
        : Symbols[e] instanceof BiwaSymbol
        ? Symbols[e]
        : new BiwaSymbol(e);
    },
    gensym = function (e = "__gensym") {
      return Sym(uniqueId(e));
    };
  class Pause {
    constructor(e) {
      this.on_pause = e;
    }
    set_state(e, t, n, r, i) {
      (this.interpreter = e),
        (this.x = t),
        (this.f = n),
        (this.c = r),
        (this.s = i);
    }
    ready() {
      this.on_pause(this);
    }
    resume(e) {
      return this.interpreter.resume(!0, e, this.x, this.f, this.c, this.s);
    }
  }
  const eof = new Object();
  class Port {
    constructor(e, t) {
      (this.is_open = !0),
        (this.is_binary = !1),
        (this.is_input = e),
        (this.is_output = t);
    }
    close() {
      this.is_open = !1;
    }
    inspect() {
      return "#<Port>";
    }
    to_write() {
      return "#<Port>";
    }
  }
  (Port.StringOutput = class extends Port {
    constructor() {
      super(!1, !0), (this.buffer = []);
    }
    put_string(e) {
      this.buffer.push(e);
    }
    output_string(e) {
      return this.buffer.join("");
    }
  }),
    (Port.StringInput = class extends Port {
      constructor(e) {
        super(!0, !1), (this.str = e);
      }
      get_string(e) {
        return e(this.str);
      }
    }),
    (Port.NullInput = class extends Port {
      constructor() {
        super(!0, !1);
      }
      get_string(e) {
        return e("");
      }
    }),
    (Port.NullOutput = class extends Port {
      constructor(e) {
        super(!1, !0), (this.output_function = e);
      }
      put_string(e) {}
    }),
    (Port.CustomOutput = class extends Port {
      constructor(e) {
        super(!1, !0), (this.output_function = e);
      }
      put_string(e) {
        this.output_function(e);
      }
    }),
    (Port.CustomInput = class extends Port {
      constructor(e) {
        super(!0, !1), (this.input_function = e);
      }
      get_string(e) {
        var t = this.input_function;
        return new Pause(function (n) {
          t(function (t) {
            n.resume(e(t));
          });
        });
      }
    }),
    (Port.current_input = new Port.NullInput()),
    (Port.current_output = new Port.NullOutput()),
    (Port.current_error = new Port.NullOutput());
  class Closure {
    constructor(e, t, n, r) {
      (this.body = e),
        (this.freevars = t),
        (this.dotpos = n),
        (this.expected_args = r);
    }
    to_write() {
      return "#<Closure>";
    }
  }
  const isClosure = function (e) {
      return e instanceof Closure;
    },
    isNil = function (e) {
      return e === nil;
    },
    isUndef = function (e) {
      return e === undef;
    },
    isBoolean = (e) => "boolean" == typeof e,
    isString = (e) => "string" == typeof e,
    isFunction = (e) => "function" == typeof e,
    isSymbol = function (e) {
      return e instanceof BiwaSymbol;
    },
    isPort = function (e) {
      return e instanceof Port;
    },
    isVector = function (e) {
      return e instanceof Array;
    },
    isProcedure = function (e) {
      return isClosure(e) || "function" == typeof e;
    },
    lt = function (e, t) {
      return typeof e != typeof t ? compareFn(typeof e, typeof t) : e < t;
    };
  class BiwaError extends Error {
    constructor(e, t = null) {
      super(`${e}${null === t ? "" : `: ${to_write$1(t)}`}`), (this.form = t);
    }
    toString() {
      return this.message;
    }
  }
  class Bug extends BiwaError {
    constructor(e) {
      super("[BUG] " + e);
    }
  }
  class UserError extends BiwaError {
    constructor(e) {
      this.message = e;
    }
  }
  class BiwaSet {
    constructor() {
      var e;
      for (this.arr = [], e = 0; e < arguments.length; e++)
        this.arr[e] = arguments[e];
    }
    equals(e) {
      if (this.arr.length != e.arr.length) return !1;
      var t = [...this.arr],
        n = [...e.arr];
      t.sort(), n.sort();
      for (var r = 0; r < this.arr.length; r++) if (t[r] != n[r]) return !1;
      return !0;
    }
    set_cons(e) {
      var t = new BiwaSet(e);
      return (t.arr = [...this.arr]), t.arr.push(e), t;
    }
    set_union() {
      var e = new BiwaSet();
      e.arr = [...this.arr];
      for (var t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        if (!(n instanceof BiwaSet))
          throw new BiwaError("set_union: arguments must be a set");
        for (var r = 0; r < n.arr.length; r++) e.add(n.arr[r]);
      }
      return e;
    }
    set_intersect(e) {
      if (!(e instanceof BiwaSet))
        throw new BiwaError("set_intersect: arguments must be a set");
      for (var t = new BiwaSet(), n = 0; n < this.arr.length; n++)
        e.member(this.arr[n]) && t.add(this.arr[n]);
      return t;
    }
    set_minus(e) {
      if (!(e instanceof BiwaSet))
        throw new BiwaError("set_minus: arguments must be a set");
      for (var t = new BiwaSet(), n = 0; n < this.arr.length; n++)
        e.member(this.arr[n]) || t.add(this.arr[n]);
      return t;
    }
    add(e) {
      this.member(e) || this.arr.push(e);
    }
    member(e) {
      for (var t = 0; t < this.arr.length; t++) if (this.arr[t] == e) return !0;
      return !1;
    }
    rindex(e) {
      for (var t = this.arr.length - 1; t >= 0; t--)
        if (this.arr[t] == e) return this.arr.length - 1 - t;
      return null;
    }
    index(e) {
      for (var t = 0; t < this.arr.length; t++) if (this.arr[t] == e) return t;
      return null;
    }
    inspect() {
      return "Set(" + this.arr.join(", ") + ")";
    }
    toString() {
      return this.inspect();
    }
    size() {
      return this.arr.length;
    }
  }
  class Pair {
    constructor(e, t) {
      (this.car = e), (this.cdr = t);
    }
    caar(e) {
      return this._get(["car", "car"], e);
    }
    cadr(e) {
      return this._get(["cdr", "car"], e);
    }
    cdar(e) {
      return this._get(["car", "cdr"], e);
    }
    cddr(e) {
      return this._get(["cdr", "cdr"], e);
    }
    _get(e, t = "unexpected") {
      let n = this;
      for (const r of e) {
        if (!n.hasOwnProperty(r)) throw t;
        n = n[r];
      }
      return n;
    }
    first() {
      return this.car;
    }
    second() {
      return this.cdr.car;
    }
    third() {
      return this.cdr.cdr.car;
    }
    fourth() {
      return this.cdr.cdr.cdr.car;
    }
    fifth() {
      return this.cdr.cdr.cdr.cdr.car;
    }
    to_array() {
      for (var e = [], t = this; t instanceof Pair; t = t.cdr) e.push(t.car);
      return e;
    }
    length() {
      for (var e = 0, t = this; t instanceof Pair; t = t.cdr) e++;
      return e;
    }
    last_cdr() {
      var e;
      for (e = this; e instanceof Pair; e = e.cdr);
      return e;
    }
    forEach(e) {
      for (var t = this; t instanceof Pair; t = t.cdr) e(t.car);
      return t;
    }
    foreach(e) {
      for (var t = this; t instanceof Pair; t = t.cdr) e(t.car);
      return t;
    }
    map(e) {
      for (var t = [], n = this; isPair(n); n = n.cdr) t.push(e(n.car));
      return t;
    }
    mapList(e) {
      return array_to_list(this.map(e));
    }
    async mapAsync(e) {
      const t = [];
      for (var n = this; isPair(n); n = n.cdr) t.push(await e(n.car));
      return array_to_list(t);
    }
    concat(e) {
      for (var t = this; t instanceof Pair && t.cdr != nil; ) t = t.cdr;
      return (t.cdr = e), this;
    }
    inspect(e) {
      e || (e = inspect);
      var t = [],
        n = this.foreach(function (n) {
          t.push(e(n));
        });
      return n != nil && (t.push("."), t.push(e(n))), "(" + t.join(" ") + ")";
    }
    toString() {
      return this.inspect();
    }
    to_display(e) {
      return this.inspect(e);
    }
    to_write() {
      return this.inspect(to_write$1);
    }
  }
  const isPair = function (e) {
      return e instanceof Pair;
    },
    isList = function (e) {
      if (e === nil) return !0;
      if (!(e instanceof Pair)) return !1;
      for (var t = e, n = e.cdr; ; ) {
        if (n === nil) return !0;
        if (n === t) return !1;
        if (!(n instanceof Pair)) return !1;
        if (n.cdr === nil) return !0;
        if (!(n.cdr instanceof Pair)) return !1;
        (n = n.cdr.cdr), (t = t.cdr);
      }
    },
    array_to_list_ = function (e, t) {
      for (var n = nil, r = e.length - 1; r >= 0; r--) {
        var i = e[r];
        t && Array.isArray(i) && !i.is_vector && (i = array_to_list_(i, t)),
          (n = new Pair(i, n));
      }
      return n;
    },
    List = function () {
      var e = Array.from(arguments);
      return array_to_list_(e, !1);
    },
    array_to_list = function (e) {
      return array_to_list_(e, !1);
    },
    deep_array_to_list = function (e) {
      return array_to_list_(e, !0);
    },
    Cons = function (e, t) {
      return new Pair(e, t);
    },
    js_obj_to_alist = function (e) {
      if (void 0 === e) return nil;
      var t = [];
      return (
        Object.keys(e).forEach(function (n) {
          t.push(new Pair(n, e[n]));
        }),
        array_to_list(t)
      );
    },
    alist_to_js_obj = function (e) {
      if (e === nil) return {};
      var t = {};
      return (
        e.foreach(function (e) {
          t[e.car] = e.cdr;
        }),
        t
      );
    },
    truncate = function (e, t) {
      return e.length > t ? e.slice(0, t) + "..." : e;
    },
    write_simple = function (e) {
      if (void 0 === e) return "undefined";
      if (null === e) return "null";
      if ("function" == typeof e)
        return (
          "#<Function " +
          (e.fname ? e.fname : e.toSource ? truncate(e.toSource(), 40) : "") +
          ">"
        );
      if ("string" == typeof e)
        return (
          '"' +
          e
            .replace(/\\|\"/g, function (e) {
              return "\\" + e;
            })
            .replace(/\x07/g, "\\a")
            .replace(/\x08/g, "\\b")
            .replace(/\t/g, "\\t")
            .replace(/\n/g, "\\n")
            .replace(/\v/g, "\\v")
            .replace(/\f/g, "\\f")
            .replace(/\r/g, "\\r") +
          '"'
        );
      if (Array.isArray(e))
        return (
          "#(" +
          e
            .map(function (e) {
              return write_simple(e);
            })
            .join(" ") +
          ")"
        );
      if ("function" == typeof e.to_write) return e.to_write();
      if (isNaN(e) && "number" == typeof e) return "+nan.0";
      switch (e) {
        case !0:
          return "#t";
        case !1:
          return "#f";
        case 1 / 0:
          return "+inf.0";
        case -1 / 0:
          return "-inf.0";
      }
      return inspect(e);
    },
    to_display = function (e) {
      return void 0 === e
        ? "undefined"
        : null === e
        ? "null"
        : e.to_display
        ? e.to_display(to_display)
        : "string" == typeof e.valueOf()
        ? e
        : e instanceof BiwaSymbol
        ? e.name
        : e instanceof Array
        ? "#(" + e.map(to_display).join(" ") + ")"
        : write_simple(e);
    },
    inspect = function (e, t) {
      try {
        return void 0 === e
          ? "undefined"
          : null === e
          ? "null"
          : !0 === e
          ? "#t"
          : !1 === e
          ? "#f"
          : e.inspect
          ? e.inspect()
          : "string" == typeof e
          ? '"' + e.replace(/"/g, '\\"') + '"'
          : Array.isArray(e)
          ? "[" + e.map(inspect).join(", ") + "]"
          : t && t.fallback
          ? t.fallback
          : e.toString();
      } catch (e) {
        if (e instanceof RangeError) return "...";
        throw e;
      }
    };
  function write(e) {
    const t = _preprocess(e);
    return t.cyclic ? _write_shared(e, t) : write_simple(e);
  }
  function _preprocess(e) {
    const t = {
      objs: new Set(),
      shared_objs: new Set(),
      parents: new Set(),
      cyclic: !1,
    };
    _gather_information(e, t);
    const n = new Map();
    for (const e of t.shared_objs) n.set(e, null);
    return { ids: n, last_id: -1, cyclic: t.cyclic };
  }
  function _gather_information(e, t) {
    t.parents.has(e) && (t.cyclic = !0),
      t.shared_objs.has(e) ||
        (t.objs.has(e)
          ? t.shared_objs.add(e)
          : (t.objs.add(e),
            isPair(e)
              ? (t.parents.add(e),
                _gather_information(e.car, t),
                _gather_information(e.cdr, t),
                t.parents.delete(e))
              : isVector(e) &&
                (t.parents.add(e),
                e.forEach((e) => {
                  _gather_information(e, t);
                }),
                t.parents.delete(e))));
  }
  function write_shared(e) {
    return _write_shared(e, _preprocess(e));
  }
  function _write_shared(e, t) {
    let n = "";
    if (t.ids.has(e)) {
      const r = t.ids.get(e);
      if (null !== r) return `#${r}#`;
      {
        const r = t.last_id + 1;
        t.ids.set(e, r), (t.last_id = r), (n += `#${r}=`);
      }
    }
    if (isPair(e)) {
      const r = [];
      r.push(_write_shared(e.car, t));
      for (let n = e.cdr; n !== nil; n = n.cdr) {
        if (!isPair(n) || t.ids.has(n)) {
          r.push("."), r.push(_write_shared(n, t));
          break;
        }
        r.push(_write_shared(n.car, t));
      }
      n += "(" + r.join(" ") + ")";
    } else if (isVector(e)) {
      n += "#(" + e.map((e) => _write_shared(e, t)).join(" ") + ")";
    } else n += write_simple(e);
    return n;
  }
  const to_write$1 = write,
    eq = function (e, t) {
      return e === t;
    },
    eqv = function (e, t) {
      return e == t && typeof e == typeof t;
    },
    equal = function (e, t) {
      return to_write$1(e) == to_write$1(t);
    },
    Chars = {};
  class Char {
    constructor(e) {
      Chars[(this.value = e)] = this;
    }
    to_write() {
      switch (this.value) {
        case "\n":
          return "#\\newline";
        case " ":
          return "#\\space";
        case "\t":
          return "#\\tab";
        default:
          return "#\\" + this.value;
      }
    }
    to_display() {
      return this.value;
    }
    inspect() {
      return this.to_write();
    }
  }
  Char.get = function (e) {
    if ("string" != typeof e)
      throw new Bug("Char.get: " + inspect(e) + " is not a string");
    return void 0 === Chars[e] ? new Char(e) : Chars[e];
  };
  const isChar = function (e) {
    return e instanceof Char;
  };
  class Call {
    constructor(e, t, n) {
      (this.proc = e),
        (this.args = t),
        (this.after =
          n ||
          function (e) {
            return e[0];
          });
    }
    inspect() {
      return "#<Call args=" + this.args.inspect() + ">";
    }
    toString() {
      return "#<Call>";
    }
    to_write() {
      return "#<Call>";
    }
  }
  const Iterator = {
    ForArray: class {
      constructor(e) {
        (this.arr = e), (this.i = 0);
      }
      has_next() {
        return this.i < this.arr.length;
      }
      next() {
        return this.arr[this.i++];
      }
    },
    ForString: class {
      constructor(e) {
        (this.str = e), (this.i = 0);
      }
      has_next() {
        return this.i < this.str.length;
      }
      next() {
        return Char.get(this.str.charAt(this.i++));
      }
    },
    ForList: class {
      constructor(e) {
        this.ls = e;
      }
      has_next() {
        return this.ls instanceof Pair && this.ls != nil;
      }
      next() {
        var e = this.ls;
        return (this.ls = this.ls.cdr), e;
      }
    },
    ForMulti: class {
      constructor(e) {
        (this.objs = e),
          (this.size = e.length),
          (this.iterators = e.map(function (e) {
            return Iterator.of(e);
          }));
      }
      has_next() {
        for (var e = 0; e < this.size; e++)
          if (!this.iterators[e].has_next()) return !1;
        return !0;
      }
      next() {
        return this.iterators.map(function (e) {
          return e.next();
        });
      }
    },
    of: function (e) {
      switch (!0) {
        case e instanceof Array:
          return new this.ForArray(e);
        case "string" == typeof e:
          return new this.ForString(e);
        case e instanceof Pair:
        case e === nil:
          return new this.ForList(e);
        default:
          throw new Bug("Iterator.of: unknown class: " + inspect(e));
      }
    },
  };
  (Call.default_callbacks = {
    call: function (e) {
      return new Call(this.proc, [e]);
    },
    result: function () {},
    finish: function () {},
  }),
    (Call.foreach = function (e, t, n) {
      n || (n = !1),
        ["call", "result", "finish"].forEach(function (e) {
          t[e] || (t[e] = Call.default_callbacks[e]);
        });
      var r = null,
        i = null,
        a = function (s) {
          if (r) {
            var o = t.result(s[0], i);
            if (void 0 !== o) return o;
          } else r = n ? new Iterator.ForMulti(e) : Iterator.of(e);
          if (r.has_next()) {
            i = r.next();
            var u = t.call(i);
            return (u.after = a), u;
          }
          return t.finish();
        };
      return a(null);
    }),
    (Call.multi_foreach = function (e, t) {
      return Call.foreach(e, t, !0);
    });
  class Syntax {
    constructor(e, t) {
      (this.sname = e), (this.func = t);
    }
    transform(e) {
      if (!this.func)
        throw new Bug(
          "sorry, syntax " + this.sname + " is a pseudo syntax now"
        );
      return this.func(e);
    }
    inspect() {
      return "#<Syntax " + this.sname + ">";
    }
  }
  (CoreEnv.define = new Syntax("define")),
    (CoreEnv.begin = new Syntax("begin")),
    (CoreEnv.quote = new Syntax("quote")),
    (CoreEnv.lambda = new Syntax("lambda")),
    (CoreEnv.if = new Syntax("if")),
    (CoreEnv["set!"] = new Syntax("set!"));
  class VMCode {
    constructor(e) {
      if (!isVector(e)) throw (console.error(e), "not array");
      this.il = e;
    }
    to_write() {
      return "#<VMCode>";
    }
  }
  class Compiler {
    constructor() {}
    is_tail(e) {
      return "return" == e[0];
    }
    collect_free(e, t, n) {
      for (var r = n, i = e.arr, a = 0; a < i.length; a++)
        r = this.compile_refer(i[a], t, ["argument", r]);
      return r;
    }
    compile_refer(e, t, n) {
      return this.compile_lookup(
        e,
        t,
        function (e) {
          return ["refer-local", e, n];
        },
        function (e) {
          return ["refer-free", e, n];
        },
        function (e) {
          return ["refer-global", e, n];
        }
      );
    }
    compile_lookup(e, t, n, r, i) {
      var a,
        s = t[0],
        o = t[1];
      return null != (a = s.index(e))
        ? n(a)
        : null != (a = o.index(e))
        ? r(a)
        : i(e.name);
    }
    make_boxes(e, t, n) {
      for (var r = 0, i = []; t instanceof Pair; )
        e.member(t.car) && i.push(r), r++, (t = t.cdr);
      for (var a = n, s = i.length - 1; s >= 0; s--) a = ["box", i[s], a];
      return a;
    }
    find_sets(e, t) {
      var n = null;
      if (e instanceof BiwaSymbol) n = new BiwaSet();
      else if (e instanceof Pair)
        switch (e.first()) {
          case Sym("define"):
            var r = e.third();
            n = this.find_sets(r, t);
          case Sym("begin"):
            n = this.find_sets(e.cdr, t);
            break;
          case Sym("quote"):
            n = new BiwaSet();
            break;
          case Sym("lambda"):
            var i = e.second(),
              a = e.cdr.cdr;
            n =
              i instanceof Pair
                ? this.find_sets(a, t.set_minus(to_set(i)))
                : this.find_sets(a, t.set_minus(new BiwaSet(i)));
            break;
          case Sym("if"):
            var s = e.second(),
              o = e.third(),
              u = e.fourth();
            n = this.find_sets(s, t).set_union(
              this.find_sets(o, t),
              this.find_sets(u, t)
            );
            break;
          case Sym("set!"):
            var c = e.second(),
              l = e.third();
            n = t.member(c)
              ? this.find_sets(l, t).set_cons(c)
              : this.find_sets(l, t);
            break;
          case Sym("call/cc"):
            r = e.second();
            n = this.find_sets(r, t);
            break;
          default:
            for (var f = new BiwaSet(), d = e; d instanceof Pair; d = d.cdr)
              f = f.set_union(this.find_sets(d.car, t));
            n = f;
        }
      else n = new BiwaSet();
      if (null == n) throw new Bug("find_sets() exited in unusual way");
      return n;
    }
    find_free(e, t, n) {
      var r = null;
      if (e instanceof BiwaSymbol)
        r = n.member(e) ? new BiwaSet(e) : new BiwaSet();
      else if (e instanceof Pair)
        switch (e.first()) {
          case Sym("define"):
            var i = e.third();
            r = this.find_free(i, t, n);
            break;
          case Sym("begin"):
            r = this.find_free(e.cdr, t, n);
            break;
          case Sym("quote"):
            r = new BiwaSet();
            break;
          case Sym("lambda"):
            var a = e.second(),
              s = e.cdr.cdr;
            r =
              a instanceof Pair
                ? this.find_free(s, t.set_union(to_set(a)), n)
                : this.find_free(s, t.set_cons(a), n);
            break;
          case Sym("if"):
            var o = e.second(),
              u = e.third(),
              c = e.fourth();
            r = this.find_free(o, t, n).set_union(
              this.find_free(u, t, n),
              this.find_free(c, t, n)
            );
            break;
          case Sym("set!"):
            var l = e.second();
            i = e.third();
            r = n.member(l)
              ? this.find_free(i, t, n).set_cons(l)
              : this.find_free(i, t, n);
            break;
          case Sym("call/cc"):
            i = e.second();
            r = this.find_free(i, t, n);
            break;
          default:
            for (var f = new BiwaSet(), d = e; d instanceof Pair; d = d.cdr)
              f = f.set_union(this.find_free(d.car, t, n));
            r = f;
        }
      else r = new BiwaSet();
      if (null == r) throw new Bug("find_free() exited in unusual way");
      return r;
    }
    find_dot_pos(e) {
      for (var t = 0; e instanceof Pair; e = e.cdr, ++t);
      return e != nil ? t : -1;
    }
    last_pair(e) {
      if (e instanceof Pair) for (; e.cdr instanceof Pair; e = e.cdr);
      return e;
    }
    dotted2proper(e) {
      if (e === nil) return nil;
      if (e instanceof Pair) {
        var t = this.last_pair(e);
        if (t instanceof Pair && t.cdr === nil) return e;
        var n = (function (e) {
          for (var t = nil; e instanceof Pair; e = e.cdr)
            t = new Pair(e.car, t);
          return (function (e) {
            for (var t = nil; e instanceof Pair; ) {
              var n = e.cdr;
              (e.cdr = t), (t = e), (e = n);
            }
            return t;
          })(t);
        })(e);
        return (this.last_pair(n).cdr = new Pair(t.cdr, nil)), n;
      }
      return new Pair(e, nil);
    }
    compile(e, t, n, r, i) {
      for (var a = null; ; ) {
        if (e instanceof BiwaSymbol)
          return this.compile_refer(e, t, n.member(e) ? ["indirect", i] : i);
        if (!(e instanceof Pair)) return ["constant", e, i];
        switch (e.first()) {
          case Sym("define"):
            (e = (a = this._compile_define(e, i))[0]), (i = a[1]);
            break;
          case Sym("begin"):
            for (var s = [], o = e.cdr; o instanceof Pair; o = o.cdr)
              s.push(o.car);
            for (var u = i, c = s.length - 1; c >= 0; c--)
              u = this.compile(s[c], t, n, r, u);
            return u;
          case Sym("quote"):
            if (e.length() < 2)
              throw new BiwaError("Invalid quote: " + e.to_write());
            return ["constant", e.second(), i];
          case Sym("lambda"):
            return this._compile_lambda(e, t, n, r, i);
          case Sym("if"):
            if (e.length() < 3 || e.length() > 4)
              throw new BiwaError("Invalid if: " + e.to_write());
            var l = e.second(),
              f = e.third(),
              d = e.fourth();
            (f = this.compile(f, t, n, r, i)),
              (d = this.compile(d, t, n, r, i));
            (e = l), (i = ["test", f, d]);
            break;
          case Sym("set!"):
            if (3 != e.length())
              throw new BiwaError("Invalid set!: " + e.to_write());
            var h = e.second(),
              p =
                ((e = e.third()),
                this.compile_lookup(
                  h,
                  t,
                  function (e) {
                    return ["assign-local", e, i];
                  },
                  function (e) {
                    return ["assign-free", e, i];
                  },
                  function (e) {
                    return ["assign-global", e, i];
                  }
                ));
            i = p;
            break;
          case Sym("call/cc"):
            (e = e.second()),
              (u = [
                "conti",
                this.is_tail(i) ? t[0].size() + 1 : 0,
                [
                  "argument",
                  [
                    "constant",
                    1,
                    [
                      "argument",
                      this.compile(
                        e,
                        t,
                        n,
                        r,
                        this.is_tail(i)
                          ? ["shift", 1, ["tco_hinted_apply"]]
                          : ["apply"]
                      ),
                    ],
                  ],
                ],
              ]);
            return this.is_tail(i) ? u : ["frame", u, i];
          default:
            var m = e.car,
              _ = e.cdr;
            u = this.compile(
              m,
              t,
              n,
              r,
              this.is_tail(i)
                ? ["shift", _.length(), ["tco_hinted_apply"]]
                : ["apply"]
            );
            u = this.compile(_.length(), t, n, r, ["argument", u]);
            for (o = _; o instanceof Pair; o = o.cdr)
              u = this.compile(o.car, t, n, r, ["argument", u]);
            return this.is_tail(i) ? u : ["frame", u, i];
        }
      }
    }
    _compile_define(e, t) {
      if (1 == e.length())
        throw new BiwaError("Invalid `define': " + e.to_write());
      var n = e.cdr.car,
        r = e.cdr.cdr;
      if (n instanceof BiwaSymbol) {
        if (r === nil) e = undef;
        else {
          if (r.cdr !== nil)
            throw new BiwaError("Invalid `define': " + e.to_write());
          e = r.car;
        }
        TopEnv.hasOwnProperty(n.name) || (TopEnv[n.name] = undef),
          (t = ["assign-global", n.name, t]);
      } else {
        if (!(n instanceof Pair))
          throw new BiwaError("define: symbol or pair expected but got " + n);
        var i = n.car,
          a = n.cdr;
        (e = new Pair(Sym("lambda"), new Pair(a, r))),
          TopEnv.hasOwnProperty(n.name) || (TopEnv[i.name] = undef),
          (t = ["assign-global", i.name, t]);
      }
      return [e, t];
    }
    _compile_lambda(e, t, n, r, i) {
      if (e.length() < 3)
        throw new BiwaError("Invalid lambda: " + e.to_write());
      var a = e.cdr.car,
        s = e.cdr.cdr,
        o = Compiler.transform_internal_define(s);
      if (isPair(o) && isSymbol(o.car) && "letrec*" == o.car.name)
        var u = Compiler.expand(o);
      else u = new Pair(Sym("begin"), e.cdr.cdr);
      var c = this.find_dot_pos(a),
        l = this.dotted2proper(a),
        f = this.find_free(u, to_set(l), r),
        d = this.find_sets(u, to_set(l)),
        h = this.compile(
          u,
          [to_set(l), f],
          d.set_union(n.set_intersect(f)),
          r.set_union(to_set(l)),
          ["return"]
        ),
        p = [
          "close",
          a instanceof Pair ? a.length() : 0,
          f.size(),
          this.make_boxes(d, l, h),
          i,
          c,
        ];
      return this.collect_free(f, t, p);
    }
    run(e) {
      const t = this.compile(
        e,
        [new BiwaSet(), new BiwaSet()],
        new BiwaSet(),
        new BiwaSet(),
        ["halt"]
      );
      return new VMCode(t);
    }
  }
  (Compiler.compile = function (e, t) {
    return (e = Compiler.expand(e)), new Compiler().run(e, t);
  }),
    (Compiler.expand = function (e, t) {
      var n = Compiler.expand;
      t || (t = {});
      var r = null;
      if (e instanceof Pair)
        switch (e.car) {
          case Sym("define"):
            var i = e.cdr.car,
              a = e.cdr.cdr;
            r = new Pair(Sym("define"), new Pair(i, n(a, t)));
            break;
          case Sym("begin"):
            r = new Pair(Sym("begin"), n(e.cdr, t));
            break;
          case Sym("quote"):
            r = e;
            break;
          case Sym("lambda"):
            var s = e.cdr.car,
              o = e.cdr.cdr;
            r = new Pair(Sym("lambda"), new Pair(s, n(o, t)));
            break;
          case Sym("if"):
            var u = e.second(),
              c = e.third(),
              l = e.fourth();
            r = List(Sym("if"), n(u, t), n(c, t), n(l, t));
            break;
          case Sym("set!"):
            var f = e.second();
            e = e.third();
            r = List(Sym("set!"), f, n(e, t));
            break;
          case Sym("call-with-current-continuation"):
          case Sym("call/cc"):
            e = e.second();
            r = List(Sym("call/cc"), n(e, t));
            break;
          default:
            var d = null;
            if (
              (isSymbol(e.car) &&
                (TopEnv[e.car.name] instanceof Syntax
                  ? (d = TopEnv[e.car.name])
                  : CoreEnv[e.car.name] instanceof Syntax &&
                    (d = CoreEnv[e.car.name])),
              d)
            ) {
              var h;
              for (
                t.modified = !0, r = d.transform(e);
                (r = n(r, (h = {}))), h.modified;

              );
            } else {
              var p,
                m = n(e.car, t);
              if (!(e.cdr instanceof Pair) && e.cdr !== nil)
                throw new BiwaError(
                  "proper list required for function application or macro use: " +
                    to_write(e)
                );
              (p = array_to_list(
                e.cdr.to_array().map(function (e) {
                  return n(e, t);
                })
              )),
                (r = new Pair(m, p));
            }
        }
      else r = e;
      return r;
    });
  var is_definition = function (e) {
      return isPair(e) && Sym("define") === e.car;
    },
    define_to_lambda_bind = function (e) {
      var t = e.cdr.car,
        n = e.cdr.cdr;
      if (isSymbol(t)) return new Pair((r = t), n);
      var r = t.car,
        i = new Pair(Sym("lambda"), new Pair(t.cdr, n));
      return List(r, i);
    };
  function to_set(e) {
    if (e === nil) return new BiwaSet();
    for (var t = new BiwaSet(), n = e; n instanceof Pair; n = n.cdr)
      t.add(n.car);
    return t;
  }
  Compiler.transform_internal_define = function (e) {
    for (var t = [], n = e; is_definition(n.car); ) t.push(n.car), (n = n.cdr);
    var r = n;
    if (0 == t.length) return e;
    var i = List.apply(null, t.map(define_to_lambda_bind));
    return new Pair(Sym("letrec*"), new Pair(i, r));
  };
  const make_assert = function (e) {
      return function () {
        const t = "";
        e.apply(this, [t].concat(Array.from(arguments)));
      };
    },
    make_simple_assert = function (e, t, n) {
      return make_assert(function (n, r, i) {
        const a = i ? "(" + i + "): " : "";
        if (!t(r))
          throw new BiwaError(a + e + " required, but got " + to_write$1(r));
      });
    };
  class Hashtable {
    constructor(e, t, n) {
      (this.mutable = void 0 === n || !!n),
        (this.hash_proc = e),
        (this.equiv_proc = t),
        (this.pairs_of = {});
    }
    clear() {
      this.pairs_of = {};
    }
    candidate_pairs(e) {
      return this.pairs_of[e];
    }
    add_pair(e, t, n) {
      var r = this.pairs_of[e];
      r ? r.push([t, n]) : (this.pairs_of[e] = [[t, n]]);
    }
    remove_pair(e, t) {
      var n = this.pairs_of[e],
        r = n.indexOf(t);
      if (-1 == r) throw new Bug("Hashtable#remove_pair: pair not found!");
      n.splice(r, 1);
    }
    create_copy(e) {
      var t = new Hashtable(this.hash_proc, this.equiv_proc, e);
      return (
        Object.keys(this.pairs_of).forEach((e) => {
          let n = this.pairs_of[e].map((e) => [...e]);
          t.pairs_of[e] = n;
        }),
        t
      );
    }
    size() {
      var e = 0;
      return (
        this._apply_pair(function (t) {
          e++;
        }),
        e
      );
    }
    keys() {
      return this._apply_pair(function (e) {
        return e[0];
      });
    }
    values() {
      return this._apply_pair(function (e) {
        return e[1];
      });
    }
    _apply_pair(e) {
      var t = [];
      return (
        Object.values(this.pairs_of).forEach(function (n) {
          n.forEach(function (n) {
            t.push(e(n));
          });
        }),
        t
      );
    }
    to_write() {
      return "#<Hashtable size=" + this.size() + ">";
    }
  }
  const isHashtable = function (e) {
      return e instanceof Hashtable;
    },
    isMutableHashtable = function (e) {
      return e instanceof Hashtable && e.mutable;
    };
  (Hashtable.equal_hash = function (e) {
    return to_write$1(e[0]);
  }),
    (Hashtable.eq_hash = Hashtable.equal_hash),
    (Hashtable.eqv_hash = Hashtable.equal_hash),
    (Hashtable.string_hash = function (e) {
      return e[0];
    }),
    (Hashtable.string_ci_hash = function (e) {
      return "string" == typeof e[0] ? e[0].toLowerCase() : e[0];
    }),
    (Hashtable.symbol_hash = function (e) {
      return e[0] instanceof BiwaSymbol ? e[0].name : e[0];
    }),
    (Hashtable.eq_equiv = function (e) {
      return eq(e[0], e[1]);
    }),
    (Hashtable.eqv_equiv = function (e) {
      return eqv(e[0], e[1]);
    });
  class Complex {
    constructor(e, t) {
      (this.real = e), (this.imag = t);
    }
    magnitude() {
      return Math.sqrt(this.real * this.real + this.imag * this.imag);
    }
    angle() {
      return Math.atan2(this.imag, this.real);
    }
    isReal() {
      return 0 == this.imag;
    }
    isRational() {
      return 0 == this.imag && isRational(this.real);
    }
    isInteger() {
      return 0 == this.imag && isInteger(this.real);
    }
    toString(e) {
      if (0 === this.real && 0 === this.imag) return "0";
      var t = "";
      if (0 !== this.imag) {
        switch ((this.imag > 0 && 0 !== this.real && (t += "+"), this.imag)) {
          case 1:
            break;
          case -1:
            t += "-";
            break;
          default:
            t += this.imag.toString(e);
        }
        t += "i";
      }
      var n = "";
      return 0 !== this.real && (n += this.real.toString(e)), n + t;
    }
  }
  (Complex.from_polar = function (e, t) {
    var n = e * Math.cos(t),
      r = e * Math.sin(t);
    return new Complex(n, r);
  }),
    (Complex.assure = function (e) {
      return e instanceof Complex ? e : new Complex(e, 0);
    });
  class Rational$1 {
    constructor(e, t) {
      (this.numerator = e), (this.denominator = t);
    }
    isInteger() {}
  }
  const isNumber = function (e) {
      return (
        e instanceof Complex || e instanceof Rational$1 || "number" == typeof e
      );
    },
    isComplex = isNumber,
    isReal = function (e) {
      return e instanceof Complex || e instanceof Rational$1
        ? e.isReal()
        : "number" == typeof e;
    },
    isRational = function (e) {
      return e instanceof Complex
        ? e.isRational()
        : e instanceof Rational$1 || "number" == typeof e;
    },
    isInteger = function (e) {
      return e instanceof Complex || e instanceof Rational$1
        ? e.isInteger()
        : "number" == typeof e && e % 1 == 0;
    };
  class Unterminated extends BiwaError {}
  const DIGITS = {
      2: /^[01]+/,
      8: /^[0-7]+/,
      10: /^[0-9]+/,
      16: /^[0-9a-fA-F]+/,
    },
    PAREN = { "(": ")", "{": "}", "[": "]" },
    NAMED_CHARS = {
      alarm: "",
      backspace: "\b",
      delete: "",
      escape: "",
      newline: "\n",
      null: "\0",
      return: "\r",
      space: " ",
      tab: "\t",
    },
    NAMED_CHARS_REXP = new RegExp(
      "^(" + Object.keys(NAMED_CHARS).join("|") + ")\\b"
    ),
    ESCAPE_SEQUENCES = { a: "", b: "\b", t: "\t", n: "\n", r: "\r" };
  class Parser {
    constructor(e) {
      (this.txt = e),
        (this.i = 0),
        (this.foldCase = !1),
        (this.labelledData = []);
    }
    insert(e) {
      const t = this.txt;
      this.txt = t.slice(0, this.i) + e + t.slice(this.i);
    }
    inspect() {
      return `#<Parser (${this.i}/${this.txt.length})>`;
    }
    getObject() {
      let e;
      if ((this._skipAtmosphere(), this.done())) e = Parser.EOS;
      else
        switch (this.txt[this.i]) {
          case "#":
            this.i++, (e = this._parseSharp());
            break;
          case "(":
          case "[":
          case "{":
            e = this._parseList();
            break;
          case '"':
            e = this._parseString();
            break;
          case "|":
            e = this._parseEnclosedSymbol();
            break;
          case "'":
            this.i++, (e = this._parseQuote("quote"));
            break;
          case "`":
            this.i++, (e = this._parseQuote("quasiquote"));
            break;
          case ",":
            this.i++,
              "@" == this.txt[this.i]
                ? (this.i++, (e = this._parseQuote("unquote-splicing")))
                : (e = this._parseQuote("unquote"));
            break;
          default:
            e = this._parseDecimalNumberOrIdentifier();
        }
      return e;
    }
    _getObjectOrThrowUnterminated(e) {
      const t = this.getObject();
      if (t === Parser.EOS) throw new Unterminated(e);
      return t;
    }
    _skipWhitespace() {
      for (; this.i < this.txt.length; )
        switch (this.txt[i]) {
          case " ":
          case "\t":
          case "\n":
            i++;
            break;
          default:
            return;
        }
    }
    _skipAtmosphere() {
      for (; this.i < this.txt.length; )
        switch (this.txt[this.i]) {
          case " ":
          case "\t":
          case "\n":
            this.i++;
            break;
          case ";":
            const e = this.match(/^;[^\n]*(\n|$)/);
            this.i += e[0].length;
            break;
          case "#":
            if (";" == this.txt[this.i + 1])
              (this.i += "#;".length),
                this._skipAtmosphere(),
                this._getObjectOrThrowUnterminated("missing argument for `#;`");
            else if ("|" == this.txt[this.i + 1])
              (this.i += "#|".length), this._skipBlockComment();
            else if (this.match(/^#!fold-case/))
              (this.i += "#!fold-case".length), (this.foldCase = !0);
            else {
              if (!this.match(/^#!no-fold-case/)) return;
              (this.i += "#!no-fold-case".length), (this.foldCase = !1);
            }
            break;
          default:
            return;
        }
    }
    _skipBlockComment() {
      let e = 1;
      for (; this.i < this.txt.length; ) {
        const t = this.match(/\|#/);
        if (null === t) break;
        const n = /#\|/.exec(this.txt.slice(this.i, t.index));
        if (n) e++, (this.i += n.index + "#|".length);
        else if (((this.i += t.index + "|#".length), e--, 0 == e)) return;
      }
      throw new Unterminated(
        "unterminated block comment (`|#` not found)",
        this.rest()
      );
    }
    _parseQuote(e) {
      this._skipAtmosphere();
      const t = this._getObjectOrThrowUnterminated(`unterminated ${e}`);
      return List(Sym(e), t);
    }
    _parseSharp() {
      switch (this.txt[this.i]) {
        case "t":
          return this.match(/^true/) ? (this.i += "true".length) : this.i++, !0;
        case "f":
          return (
            this.match(/^false/) ? (this.i += "false".length) : this.i++, !1
          );
        case "\\":
          return this.i++, this._parseChar();
        case "(":
          return this.i++, this._parseVector();
        case "u":
          if (this.match(/^u8\(/))
            throw new BiwaError(
              "bytevectors are not supported yet",
              this.rest(-1)
            );
          break;
        case "e":
        case "i":
        case "b":
        case "o":
        case "d":
        case "x":
          return this.i--, this._parsePrefixedNumber();
        default:
          if (this.match(/^\d/)) return this._parseDatumLabel();
      }
      throw new BiwaError("unknown #-syntax", this.rest(-1));
    }
    _parseChar() {
      let e = this.match(NAMED_CHARS_REXP);
      if (e) return (this.i += e[0].length), Char.get(NAMED_CHARS[e[1]]);
      if (((e = this.match(/^x([a-zA-Z0-9]+)/)), e))
        return (
          (this.i += e[0].length),
          Char.get(String.fromCharCode(parseInt(e[1], 16)))
        );
      if (this.done())
        throw new Unterminated("got EOS on char literal", this.rest(-2));
      {
        const e = this.txt[this.i];
        return this.i++, Char.get(e);
      }
    }
    _parseVector() {
      this.i;
      const e = [];
      e: for (; this.i < this.txt.length; )
        switch ((this._skipAtmosphere(), this.txt[this.i])) {
          case ")":
            this.i++;
            break e;
          case "]":
          case "}":
            throw new BiwaError("extra close paren", this.rest());
          default:
            e.push(this.getObject());
        }
      return e;
    }
    _parsePrefixedNumber() {
      let e = 10;
      return (
        this.match(/^#[iIeE]/) && (this.i += 2),
        this.match(/^#[bB]/)
          ? ((e = 2), (this.i += 2))
          : this.match(/^#[oO]/)
          ? ((e = 8), (this.i += 2))
          : this.match(/^#[dD]/)
          ? ((e = 10), (this.i += 2))
          : this.match(/^#[xX]/) && ((e = 16), (this.i += 2)),
        this.match(/^#[iIeE]/) && (this.i += 2),
        this._parseComplexNumber(e)
      );
    }
    _parseComplexNumber(e) {
      const t = this._parseRealNumber(e),
        n = this.txt[this.i];
      return "@" == n
        ? (this.i++, this._parsePolarComplexNumber(t, e))
        : "+" == n || "-" == n
        ? (this.i--, this._parseOrthoComplexNumber(t, e))
        : t;
    }
    _parsePolarComplexNumber(e, t) {
      const n = this._parseRealNumber(t);
      return Complex.from_polar(e, n);
    }
    _parseOrthoComplexNumber(e, t) {
      const n = this._parseRealNumber(t);
      if (this.match(/^[iI]/)) return this.i++, new Complex(e, n);
      throw new BiwaError(
        "invalid complex number format (missing `i`)",
        this.rest()
      );
    }
    _parseRealNumber(e, t = !1) {
      if (t && 10 != e) throw new Bug("base must be 10 if maybeSymbol");
      let n = "";
      const r = this.match(/^(\+|-)(inf.0|nan.0)/);
      if (r)
        return (
          (this.i += "+inf.0".length),
          ("inf.0" == r[2] ? 1 / 0 : NaN) * ("+" == r[1] ? 1 : -1)
        );
      let i = 1;
      this.match(/^\+/)
        ? (this.i++, (n += "+"))
        : this.match(/^\-/) && (this.i++, (n += "-"), (i = -1));
      let a = null;
      const s = this.match(DIGITS[e]);
      if (s) (this.i += s[0].length), (n += s[0]), (a = parseInt(s[0], e) * i);
      else if (10 == e && "." == this.txt[this.i]);
      else if (!t)
        throw new BiwaError("invalid char in number literal", this.rest());
      if ("/" == this.txt[this.i]) {
        this.i++;
        const r = this.match(DIGITS[e]);
        if (r) {
          this.i += r[0].length;
          const t = parseInt(r[0], e);
          return new Rational(a, t);
        }
        if (!t)
          throw new BiwaError(
            "invalid char in rational number literal",
            this.rest()
          );
        n += "/";
      }
      if (10 == e) {
        this.i -= n.length;
        const e = this.match(/^[+-]?(\d+\.\d*|\.?\d+)([eE][+-]?\d+)?/);
        if (e) return (this.i += e[0].length), parseFloat(e[0]);
        this.i += n.length;
      }
      if (t) return n;
      throw new BiwaError(
        `invalid chars in number literal (${n})`,
        this.rest()
      );
    }
    _parseDatumLabel() {
      const e = this.match(/^(\d+)(=|#)/);
      if (e) {
        this.i += e[0].length;
        const t = parseInt(e[1]);
        if ("=" == e[2]) {
          const e = this._getObjectOrThrowUnterminated(
            "got EOS for labelled datum"
          );
          return (this.labelledData[t] = e), e;
        }
        if (this.labelledData.hasOwnProperty(t)) return this.labelledData[t];
        throw new BiwaError("undefined datum reference", this.rest(-1));
      }
      throw new BiwaError("unknown #-syntax", this.rest(-1));
    }
    _parseList() {
      const e = this.i,
        t = this.txt[this.i];
      this.i++;
      const n = PAREN[t];
      let r = !1,
        i = nil,
        a = i;
      for (; this.i < this.txt.length; ) {
        this._skipAtmosphere();
        const t = this.txt[this.i];
        if (t == n) return this.i++, i;
        if (")" == t || "]" == t || "}" == t)
          throw new BiwaError("extra close paren", this.rest());
        if ("." == t && this.match(/^\.[\s]/)) {
          if (i === nil)
            throw new BiwaError("no list element before `.`", this.from(e));
          (r = !0), this.i++;
          const t = this.getObject();
          if (t === Parser.EOS)
            throw new Unterminated("found EOS after `.` in list", this.from(e));
          a.cdr = t;
        } else {
          if (r)
            throw new BiwaError(
              "more than one element after `.`",
              this.from(e)
            );
          {
            const t = this.getObject();
            if (t === Parser.EOS)
              throw (
                ((this.i = e),
                new Unterminated("found EOS in list", this.rest()))
              );
            const n = new Pair(t, nil);
            i === nil ? (i = n) : (a.cdr = n), (a = n);
          }
        }
      }
      throw ((this.i = e), new Unterminated("found EOS in list", this.rest()));
    }
    _parseString() {
      const e = this.match(/^"((\\"|[^"])*)"/);
      if (e) {
        this.i += e[0].length;
        const t = e[1].replaceAll(/\\\s*\n\s*/g, "");
        return this._replaceEscapedChars(t);
      }
      throw new Unterminated("invalid string literal", this.rest());
    }
    _parseEnclosedSymbol() {
      const e = this.match(/^\|((\\\||[^\|])*)\|/);
      if (e)
        return (this.i += e[0].length), Sym(this._replaceEscapedChars(e[1]));
      throw new Unterminated("invalid symbol literal", this.rest());
    }
    _replaceEscapedChars(e) {
      return e
        .replaceAll(/\\x([0-9a-f]+);/gi, (e, t) =>
          String.fromCharCode(parseInt(t, 16))
        )
        .replaceAll(/\\(.)/g, (e, t) => ESCAPE_SEQUENCES[t] || t);
    }
    _parseDecimalNumberOrIdentifier() {
      const e = this.txt[this.i];
      if ("#" == e) throw new Bug("#-syntax must be parsed beforehand");
      if (void 0 === e) throw new Bug("EOS must be handled beforehand");
      let t = this._parseRealNumber(10, !0);
      if (isString(t)) {
        const e = this.match(/^[^\s)}\]]+/);
        return (
          e && ((this.i += e[0].length), (t += e[0])),
          this.foldCase && (t = t.toLowerCase()),
          Sym(t)
        );
      }
      return t;
    }
    rest(e = 0) {
      return this.txt.slice(this.i + e);
    }
    from(e) {
      return this.txt.slice(e);
    }
    match(e, t = 0) {
      return e.exec(this.rest(t));
    }
    done() {
      return this.i >= this.txt.length;
    }
  }
  (Parser.EOS = new Object()),
    (Parser.EOS.toString = () => "#<BiwaScheme.Parser.EOS>"),
    (Parser.parse = (e) => {
      const t = new Parser(e),
        n = [];
      for (;;) {
        var r = t.getObject();
        if (r === Parser.EOS) break;
        n.push(r);
      }
      return n;
    }),
    (Parser.Unterminated = Unterminated);
  class Interpreter {
    constructor() {
      var e = null,
        t = null;
      2 == arguments.length
        ? ((e = arguments[0]), (t = arguments[1]))
        : 1 == arguments.length && arguments[0] instanceof Interpreter
        ? (e = arguments[0])
        : 1 == arguments.length &&
          "function" == typeof arguments[0] &&
          (t = arguments[0]),
        (this.stack = []),
        (this.on_error = t || (e ? e.on_error : function (e) {})),
        (this.after_evaluate = function () {}),
        (this.last_refer = e ? e.last_refer : null),
        (this.call_stack = e ? [...e.call_stack] : []),
        (this.tco_counter = []),
        (this.max_trace_size = e ? e.max_trace_size : max_trace_size),
        (this.current_dynamic_winder = Interpreter.DynamicWind.ROOT);
    }
    inspect() {
      return [
        "#<Interpreter: stack size=>",
        this.stack.length,
        " ",
        "after_evaluate=",
        inspect(this.after_evaluate),
        ">",
      ].join("");
    }
    push(e, t) {
      return (this.stack[t] = e), t + 1;
    }
    save_stack(e) {
      for (var t = [], n = 0; n < e; n++) t[n] = this.stack[n];
      return {
        stack: t,
        last_refer: this.last_refer,
        call_stack: [...this.call_stack],
        tco_counter: [...this.tco_counter],
      };
    }
    restore_stack(e) {
      const t = e.stack,
        n = t.length;
      for (var r = 0; r < n; r++) this.stack[r] = t[r];
      return (
        (this.last_refer = e.last_refer),
        (this.call_stack = [...e.call_stack]),
        (this.tco_counter = [...e.tco_counter]),
        n
      );
    }
    capture_continuation(e, t) {
      var n = this.push(t, e);
      return this.closure(
        ["nuate1", this.save_stack(n), this.current_dynamic_winder],
        1,
        0,
        null,
        -1
      );
    }
    shift_args(e, t, n) {
      for (var r = e; r >= 0; r--)
        this.index_set(n, r + t + 1, this.index(n, r));
      return n - t - 1;
    }
    index(e, t) {
      return this.stack[e - 1 - t];
    }
    index_set(e, t, n) {
      this.stack[e - 1 - t] = n;
    }
    closure(e, t, n, r, i) {
      const a = [];
      for (var s = 0; s < n; s++) a[s] = this.index(r, s);
      return new Closure(e, a, i, -1 == i ? t : void 0);
    }
    run_dump_hook(e, t, n, r, i) {
      var a, s;
      if (this.dumper) a = this.dumper;
      else {
        if (!Interpreter.dumper) return;
        a = Interpreter.dumper;
      }
      a &&
        ((s = { a: e, f: n, c: r, s: i, x: t, stack: this.stack }), a.dump(s));
    }
    _execute(e, t, n, r, i) {
      for (var a = null; ; )
        switch ((this.run_dump_hook(e, t, n, r, i), t[0])) {
          case "halt":
            return e;
          case "refer-local":
            var s = t[1];
            t = t[2];
            (e = this.index(n, s + 1)), (this.last_refer = "(anon)");
            break;
          case "refer-free":
            (s = t[1]), (t = t[2]);
            (e = r.freevars[s]), (this.last_refer = "(anon)");
            break;
          case "refer-global":
            var o = t[1];
            t = t[2];
            if (TopEnv.hasOwnProperty(o)) var u = TopEnv[o];
            else {
              if (!CoreEnv.hasOwnProperty(o))
                throw new BiwaError("execute: unbound symbol: " + inspect(o));
              u = CoreEnv[o];
            }
            (e = u), (this.last_refer = o || "(anon)");
            break;
          case "indirect":
            t = t[1];
            e = e[0];
            break;
          case "constant":
            var c = t[1];
            t = t[2];
            (e = c), (this.last_refer = "(anon)");
            break;
          case "close":
            var l = t,
              f = l[1],
              d = ((s = l[2]), l[3]),
              h = ((t = l[4]), l[5]);
            (e = this.closure(d, f, s, i, h)), (i -= s);
            break;
          case "box":
            (s = t[1]), (t = t[2]);
            this.index_set(i, s + 1, [this.index(i, s + 1)]);
            break;
          case "test":
            var p = t[1],
              m = t[2];
            t = !1 !== e ? p : m;
            break;
          case "assign-global":
            var _ = t[1];
            t = t[2];
            if (!TopEnv.hasOwnProperty(_) && !CoreEnv.hasOwnProperty(_))
              throw new BiwaError("global variable '" + _ + "' is not defined");
            (TopEnv[_] = e), (e = undef);
            break;
          case "assign-local":
            (s = t[1]), (t = t[2]);
            (this.index(n, s + 1)[0] = e), (e = undef);
            break;
          case "assign-free":
            (s = t[1]), (t = t[2]);
            (r.freevars[s][0] = e), (e = undef);
            break;
          case "conti":
            (s = t[1]), (t = t[2]);
            e = this.capture_continuation(i, s);
            break;
          case "nuate1":
            var b = t[1],
              g = t[2],
              y = this.current_dynamic_winder,
              v = Interpreter.DynamicWind.listWinders(y, g);
            t = Interpreter.DynamicWind.joinWinders(v, [
              "refer-local",
              0,
              ["nuate2", b],
            ]);
            break;
          case "nuate2":
            (b = t[1]), (t = ["return"]);
            i = this.restore_stack(b);
            break;
          case "frame":
            a = t[2];
            (t = t[1]),
              (i = this.push(a, this.push(n, this.push(r, i)))),
              (this.tco_counter[this.tco_counter.length] = 0);
            break;
          case "argument":
            t = t[1];
            i = this.push(e, i);
            break;
          case "shift":
            (s = t[1]), (t = t[2]);
            var w = this.index(i, s + 1);
            i = this.shift_args(s, w, i);
            break;
          case "tco_hinted_apply":
            this.tco_counter[this.tco_counter.length - 1]++,
              (t = ["apply"].concat(t.slice(1)));
            break;
          case "apply":
            var x = e;
            this.call_stack.push(this.last_refer),
              this.call_stack.length > this.max_trace_size &&
                this.call_stack.shift();
            w = this.index(i, 0);
            if (isClosure(x)) {
              (e = x), (t = x.body);
              const a = x.dotpos;
              if (a >= 0) {
                for (var S = nil, C = w; --C >= a; )
                  S = new Pair(this.index(i, C + 1), S);
                if (a >= w) {
                  for (C = 0; C < w + 1; C++)
                    this.index_set(i, C - 1, this.index(i, C));
                  i++, this.index_set(i, 0, this.index(i, 0) + 1);
                }
                this.index_set(i, a + 1, S);
              } else if (void 0 !== x.expected_args && w != x.expected_args) {
                var E =
                  "Function call error: got " +
                  w +
                  " but wanted " +
                  x.expected_args;
                throw new BiwaError(E);
              }
              (n = i), (r = x);
            } else {
              if (!(x instanceof Function))
                throw new BiwaError(inspect(x) + " is not a function");
              var P = [];
              for (C = 0; C < w; C++) P.push(this.index(i, C + 1));
              var k = x(P, this);
              if (k instanceof Pause) {
                var T = k;
                return T.set_state(this, ["return"], n, r, i), T.ready(), T;
              }
              if (k instanceof Call) {
                var j = [
                    "frame",
                    [
                      "argument",
                      [
                        "constant",
                        1,
                        ["argument", ["constant", k.after, ["apply"]]],
                      ],
                    ],
                    ["return"],
                  ],
                  B = [
                    "constant",
                    k.args.length,
                    [
                      "argument",
                      ["constant", k.proc, ["apply", k.args.length]],
                    ],
                  ];
                t = [
                  "frame",
                  k.args.reduce(function (e, t) {
                    return ["constant", t, ["argument", e]];
                  }, B),
                  j,
                ];
              } else (e = k), (t = ["return"]);
            }
            break;
          case "return":
            var q = i - (s = this.index(i, 0));
            (t = this.index(q, 1)),
              (n = this.index(q, 2)),
              (r = this.index(q, 3)),
              (i = q - 3 - 1);
            var D = 1 + this.tco_counter[this.tco_counter.length - 1];
            this.call_stack.splice(-D), this.tco_counter.pop();
            break;
          default:
            throw new Bug("unknown opecode type: " + t[0]);
        }
      return e;
    }
    evaluate(e, t) {
      (this.call_stack = []),
        (this.parser = new Parser(e)),
        (this.compiler = new Compiler()),
        t && (this.after_evaluate = t),
        (this.is_top = !0),
        (this.file_stack = []);
      try {
        return this.resume(!1);
      } catch (e) {
        return (
          (e.message = e.message + " [" + this.call_stack.join(", ") + "]"),
          this.on_error(e)
        );
      }
    }
    resume(e, t, n, r, i, a) {
      for (var s = undef; ; ) {
        if (e) (s = this._execute(t, n, r, i, a)), (e = !1);
        else {
          if (!this.parser) break;
          var o = this.parser.getObject();
          if (o === Parser.EOS) break;
          o = Compiler.expand(o);
          const e = this.compiler.run(o);
          s = this._execute(o, e.il, 0, [], 0);
        }
        if (s instanceof Pause) return s;
      }
      return this.after_evaluate(s), s;
    }
    evaluate_vmcode(e) {
      (this.call_stack = []), (this.is_top = !0), (this.file_stack = []);
      try {
        const t = this._execute(undef, e.il, 0, [], 0);
        return t instanceof Pause || this.after_evaluate(t), t;
      } catch (e) {
        return (
          (e.message = e.message + " [" + this.call_stack.join(", ") + "]"),
          this.on_error(e)
        );
      }
    }
    invoke_closure(e, t) {
      t || (t = []);
      for (
        var n = t.length,
          r = ["constant", n, ["argument", ["constant", e, ["apply"]]]],
          i = 0;
        i < n;
        i++
      )
        r = ["constant", t[i], ["argument", r]];
      return this._execute(e, ["frame", r, ["halt"]], 0, e, 0);
    }
    compile(e) {
      var t = Interpreter.read(e);
      return Compiler.compile(t);
    }
    push_dynamic_winder(e, t) {
      this.current_dynamic_winder = new Interpreter.DynamicWind(
        this.current_dynamic_winder,
        e,
        t
      );
    }
    pop_dynamic_winder(e, t) {
      this.current_dynamic_winder = this.current_dynamic_winder.parent;
    }
  }
  (Interpreter.read = function (e) {
    var t = new Parser(e).getObject();
    return t == Parser.EOS ? eof : t;
  }),
    (Interpreter.expand = function () {
      throw "Interpreter.expand is moved to Compiler.expand";
    }),
    (Interpreter.DynamicWind = class {
      constructor(e, t, n) {
        (this.parent = e), (this.before = t), (this.after = n);
      }
    }),
    (Interpreter.DynamicWind.ROOT = { _: "this is ROOT." }),
    (Interpreter.DynamicWind.listWinders = function (e, t) {
      for (var n = [e]; e !== Interpreter.DynamicWind.ROOT; )
        (e = e.parent), n.push(e);
      for (var r, i = []; ; ) {
        var a = n.find(function (e) {
          return e === t;
        });
        if (a) {
          r = a;
          break;
        }
        i.push(t), (t = t.parent);
      }
      for (var s = [], o = 0; o < n.length && n[o] !== r; o++)
        s.push(n[o].after);
      return (
        i.reverse(),
        i.forEach(function (e) {
          s.push(e.before);
        }),
        s
      );
    }),
    (Interpreter.DynamicWind.joinWinders = function (e, t) {
      return e.reduceRight(function (e, t) {
        return [
          "frame",
          ["constant", 0, ["argument", ["constant", t, ["apply"]]]],
          e,
        ];
      }, t);
    });
  class BiwaPromise {
    constructor(e, t) {
      this.box = [e, t];
    }
    is_done() {
      return this.box[0];
    }
    value() {
      if (!this.is_done()) throw new Bug("this promise is not calculated yet");
      return this.box[1];
    }
    thunk() {
      if (this.is_done()) throw new Bug("this promise does not know the thunk");
      return this.box[1];
    }
    update_with(e) {
      (this.box[0] = e.box[0]), (this.box[1] = e.box[1]), (e.box = this.box);
    }
  }
  const isPromise = function (e) {
    return e instanceof BiwaPromise;
  };
  (BiwaPromise.fresh = function (e) {
    return new BiwaPromise(!1, e);
  }),
    (BiwaPromise.done = function (e) {
      return new BiwaPromise(!0, e);
    });
  const check_arity = function (e, t, n, r) {
      if (t < n)
        throw new BiwaError(
          r && r == n
            ? e +
              ": wrong number of arguments (expected: " +
              n +
              " got: " +
              t +
              ")"
            : e + ": too few arguments (at least: " + n + " got: " + t + ")"
        );
      if (r && r < t)
        throw new BiwaError(
          e + ": too many arguments (at most: " + r + " got: " + t + ")"
        );
    },
    define_libfunc = function (e, t, n, r) {
      var i = function (i, a) {
        return check_arity(e, i.length, t, n), r(i, a);
      };
      (r.fname = e),
        (i.inspect = function () {
          return this.fname;
        }),
        (CoreEnv[e] = i);
    },
    alias_libfunc = function (e, t) {
      CoreEnv[e]
        ? Array.isArray(t)
          ? t.map(function (t) {
              alias_libfunc(e, t);
            })
          : "string" == typeof t
          ? (CoreEnv[t] = CoreEnv[e])
          : console.error(
              "[BUG] bad alias for library function `" +
                e +
                "': " +
                t.toString()
            )
        : console.error(
            "[BUG] library function `" +
              e +
              "' does not exist, so can't alias it."
          );
    },
    define_syntax = function (e, t) {
      var n = new Syntax(e, t);
      CoreEnv[e] = n;
    },
    define_scmfunc = function (e, t, n, r) {
      new Interpreter().evaluate("(define " + e + " " + r + "\n)");
    },
    assert_number = make_simple_assert("number", function (e) {
      return "number" == typeof e || e instanceof Complex;
    }),
    assert_integer = make_simple_assert("integer", function (e) {
      return "number" == typeof e && e % 1 == 0;
    }),
    assert_real = make_simple_assert("real number", function (e) {
      return "number" == typeof e;
    }),
    assert_between = make_assert(function (e, t, n, r) {
      if ("number" != typeof t || t != Math.round(t))
        throw new BiwaError(e + ": number required, but got " + to_write$1(t));
      if (t < n || r < t)
        throw new BiwaError(
          e +
            ": number must be between " +
            n +
            " and " +
            r +
            ", but got " +
            to_write$1(t)
        );
    }),
    assert_string = make_simple_assert("string", isString),
    assert_char = make_simple_assert("character", isChar),
    assert_symbol = make_simple_assert("symbol", isSymbol),
    assert_port = make_simple_assert("port", isPort),
    assert_pair = make_simple_assert("pair", isPair),
    assert_list = make_simple_assert("list", isList),
    assert_vector = make_simple_assert("vector", isVector),
    assert_hashtable = make_simple_assert("hashtable", isHashtable),
    assert_mutable_hashtable = make_simple_assert(
      "mutable hashtable",
      isMutableHashtable
    ),
    assert_promise = make_simple_assert("promise", isPromise),
    assert_function = make_simple_assert("JavaScript function", isFunction),
    assert_closure = make_simple_assert("scheme closure", isClosure),
    assert_procedure = make_simple_assert("scheme/js function", function (e) {
      return isClosure(e) || isFunction(e);
    }),
    assert_date = make_simple_assert("date", function (e) {
      return e instanceof Date;
    }),
    assert = make_assert(function (e, t, n, r) {
      if (!t) throw new BiwaError((r || e) + ": " + n);
    }),
    deprecate = function (e, t, n) {
      var r =
        e +
        " is deprecated and will be removed in BiwaScheme " +
        t +
        ". Please use " +
        n +
        " instead";
      console.warn(r);
    },
    parse_fraction = function (e) {
      assert_string(e);
      var t = e.split("/");
      if (2 !== t.length) return !1;
      var n = t[0],
        r = t[1],
        i = parse_integer(n, 10),
        a = parse_integer(r, 10);
      return !1 !== i && !1 !== a && !(a <= 0) && i / a;
    },
    is_valid_integer_notation = function (e, t) {
      if ((assert_string(e), assert_integer(t), t < 2 || t > 36)) return !1;
      var n = "0123456789abcdefghijklmnopqrstuvwxyz".slice(0, t);
      return new RegExp("^[+-]?[" + n + "]+$", "ig").test(e);
    },
    parse_integer = function (e, t) {
      if ((assert_string(e), assert_integer(t), t < 2 || t > 36)) return !1;
      if (!is_valid_integer_notation(e, t)) return !1;
      var n = parseInt(e, t);
      return !Number.isNaN(n) && n;
    },
    is_valid_float_notation = function (e) {
      assert_string(e);
      return (
        !(
          !/^[+-]?[0-9]+[.]?[0-9]*e[+-]?[0-9]+$/i.test(e) &&
          !/(^[+-]?[0-9]*[.][0-9]+$)|(^[+-]?[0-9]+[.][0-9]*$)/.test(e)
        ) || is_valid_integer_notation(e, 10)
      );
    },
    parse_float = function (e) {
      if ((assert_string(e), !is_valid_float_notation(e))) return !1;
      var t = new Number(e).valueOf();
      return !Number.isNaN(t) && !!Number.isFinite(t) && t;
    },
    Enumeration = {
      EnumType: class {
        constructor(e) {
          this.members = [...new Set(e)];
        }
        universe() {
          return new Enumeration.EnumSet(this, this.members);
        }
        indexer() {
          return (e) => {
            assert_symbol(e[0], "(enum-set indexer)");
            var t = this.members.indexOf(e[0]);
            return -1 !== t && t;
          };
        }
        constructor_() {
          return (e) => {
            assert_list(e[0], "(enum-set constructor)");
            var t = e[0].to_array();
            return (
              t.forEach(function (e) {
                assert_symbol(e, "(enum-set constructor)");
              }),
              new Enumeration.EnumSet(this, t)
            );
          };
        }
      },
      EnumSet: class {
        constructor(e, t) {
          (this.enum_type = e),
            (this.symbols = e.members.filter((e) => t.includes(e)));
        }
        symbol_list() {
          return array_to_list(this.symbols);
        }
        is_member(e) {
          return this.symbols.includes(e);
        }
        is_subset(e) {
          return (
            !this.symbols.some((t) => !e.symbols.includes(t)) &&
            (this.enum_type === e.enum_type ||
              this.enum_type.members.every((t) =>
                e.enum_type.members.includes(t)
              ))
          );
        }
        equal_to(e) {
          return this.is_subset(e) && e.is_subset(this);
        }
        union(e) {
          var t = this.enum_type.members.filter(
            (t) => this.symbols.includes(t) || e.symbols.includes(t)
          );
          return new Enumeration.EnumSet(this.enum_type, t);
        }
        intersection(e) {
          var t = this.symbols.filter((t) => e.symbols.includes(t));
          return new Enumeration.EnumSet(this.enum_type, t);
        }
        difference(e) {
          var t = this.symbols.filter((t) => !e.symbols.includes(t));
          return new Enumeration.EnumSet(this.enum_type, t);
        }
        complement() {
          var e = this.enum_type.members.filter(
            (e) => !this.symbols.includes(e)
          );
          return new Enumeration.EnumSet(this.enum_type, e);
        }
        projection(e) {
          var t = this.symbols.filter((t) => e.enum_type.members.includes(t));
          return new Enumeration.EnumSet(e.enum_type, t);
        }
        toString() {
          return "#<EnumSet " + inspect(this.symbols) + ">";
        }
      },
    },
    isEnumSet = function (e) {
      return e instanceof Enumeration.EnumSet;
    },
    assert_enum_set = make_simple_assert("enum_set", isEnumSet),
    memoize = function (e, t) {
      const n = e.prototype;
      t.forEach((e) => {
        (n["compute_" + e] = n[e]),
          (n[e] = function () {
            return (
              this.hasOwnProperty("cached_" + e) ||
                (this["cached_" + e] = this["compute_" + e].apply(
                  this,
                  Array.from(arguments)
                )),
              this["cached_" + e]
            );
          });
      });
    };
  memoize(Enumeration.EnumSet, ["symbol_list"]),
    memoize(Enumeration.EnumType, ["universe", "indexer", "constructor_"]);
  class Record {
    constructor(e, t) {
      assert_record_td(e, "new Record"), (this.rtd = e), (this.fields = t);
    }
    get(e) {
      return this.fields[e];
    }
    set(e, t) {
      this.fields[e] = t;
    }
    toString() {
      var e = to_write$1(this.fields);
      return "#<Record " + this.rtd.name + " " + e + ">";
    }
  }
  const isRecord = function (e) {
    return e instanceof Record;
  };
  (Record._DefinedTypes = {}),
    (Record.define_type = function (e, t, n) {
      return (Record._DefinedTypes[e] = { rtd: t, cd: n });
    }),
    (Record.get_type = function (e) {
      return Record._DefinedTypes[e];
    }),
    (Record.RTD = class {
      constructor(e, t, n, r, i, a) {
        (this.name = e),
          (this.parent_rtd = t),
          (this.is_base_type = !t),
          n
            ? ((this.uid = n), (this.generative = !1))
            : ((this.uid = this._generate_new_uid()), (this.generative = !0)),
          (this.sealed = !!r),
          (this.opaque = t.opaque || !!i),
          (this.fields = a.map(function (e) {
            return { name: e[0], mutable: !!e[1] };
          }));
      }
      field_name(e) {
        for (
          var t = this._field_names(), n = this.parent_rtd;
          n;
          n = n.parent_rtd
        )
          t = n._field_names() + t;
        return t[e];
      }
      _field_names() {
        return this.fields.map(function (e) {
          return e.name;
        });
      }
      _generate_new_uid() {
        return Sym(uniqueId("__record_td_uid"));
      }
      toString() {
        return "#<RecordTD " + name + ">";
      }
    }),
    (Record.RTD.NongenerativeRecords = {});
  const isRecordTD = function (e) {
    return e instanceof Record.RTD;
  };
  Record.CD = class {
    constructor(e, t, n) {
      this._check(e, t, n),
        (this.rtd = e),
        (this.parent_cd = t),
        n
          ? ((this.has_custom_protocol = !0), (this.protocol = n))
          : ((this.has_custom_protocol = !1),
            e.parent_rtd
              ? (this.protocol = this._default_protocol_for_derived_types())
              : (this.protocol = this._default_protocol_for_base_types()));
    }
    _check(e, t, n) {
      if (e.is_base_type && t)
        throw new Error(
          "Record.CD.new: cannot specify parent cd of a base type"
        );
      if (t && e.parent_rtd && t.rtd != e.parent_rtd)
        throw new Error(
          "Record.CD.new: mismatched parents between rtd and parent_cd"
        );
      if (e.parent_rtd && !t && n)
        throw new Error(
          "Record.CD.new: protocol must be #f when parent_cd is not given"
        );
      if (t && t.has_custom_protocol && !n)
        throw new Error(
          "Record.CD.new: protocol must be specified when parent_cd has a custom protocol"
        );
    }
    _default_protocol_for_base_types() {
      return function (e) {
        var t = e[0];
        return assert_procedure(t, "_default_protocol/base"), t;
      };
    }
    _default_protocol_for_derived_types() {
      var e = this.rtd;
      return function (t) {
        var n = t[0];
        assert_procedure(n, "_default_protocol/n");
        return function (t) {
          var r = e.fields.length,
            i = t.length - r,
            a = t.slice(0, i),
            s = t.slice(i);
          return new Call(n, a, function (e) {
            var t = e[0];
            return (
              assert_procedure(t, "_default_protocol/p"),
              new Call(t, s, function (e) {
                var t = e[0];
                return assert_record(t, "_default_protocol/result"), t;
              })
            );
          });
        };
      };
    }
    toString() {
      return "#<RecordCD " + this.rtd.name + ">";
    }
    record_constructor() {
      var e = this.parent_cd ? this._make_n([], this.rtd) : this._make_p();
      return (
        (e = e.bind(this)),
        new Call(this.protocol, [e], function (e) {
          var t = e[0];
          return assert_procedure(t, "record_constructor"), t;
        })
      );
    }
    _make_p() {
      return function (e) {
        return new Record(this.rtd, e);
      };
    }
    _make_n(e, t) {
      var n = this.parent_cd;
      return n
        ? function (r) {
            return function (i) {
              var a = [].concat(i[0]).concat(e),
                s = n._make_n(a, t);
              return new Call(n.protocol, [s], function (e) {
                var t = e[0];
                return (
                  assert_procedure(t, "_make_n"),
                  new Call(t, r, function (e) {
                    var t = e[0];
                    return assert_record(t), t;
                  })
                );
              });
            };
          }
        : function (n) {
            var r = n.concat(e);
            return new Record(t, r);
          };
    }
  };
  const isRecordCD = function (e) {
      return e instanceof Record.CD;
    },
    assert_record = make_simple_assert("record", isRecord),
    assert_record_td = make_simple_assert("record type descriptor", isRecordTD),
    assert_record_cd = make_simple_assert(
      "record constructor descriptor",
      isRecordCD
    );
  class Values$1 {
    constructor(e) {
      this.content = e;
    }
    to_write() {
      return "#<Values " + this.content.map(to_write$1).join(" ") + ">";
    }
  }
  const Console = {};
  define_libfunc("html-escape", 1, 1, function (e) {
    return assert_string(e[0]), escape(e[0]);
  });
  const inspect_objs = function (e) {
    return e.map(inspect).join(", ");
  };
  define_libfunc("inspect", 1, null, function (e) {
    return inspect_objs(e);
  }),
    define_libfunc("inspect!", 1, null, function (e) {
      return Console.puts(inspect_objs(e)), undef;
    });
  const json2sexp = function (e) {
    switch (!0) {
      case "number" == typeof e || "string" == typeof e || !0 === e || !1 === e:
        return e;
      case Array.isArray(e):
        return array_to_list(e.map(json2sexp));
      case "object" == typeof e:
        var t = nil;
        for (key in e) t = new Pair(new Pair(key, json2sexp(e[key])), t);
        return t;
      default:
        throw new Error(
          "json->sexp: detected invalid value for json: " + inspect(e)
        );
    }
  };
  define_libfunc("json->sexp", 1, 1, function (e) {
    return json2sexp(e[0]);
  }),
    define_libfunc("vector-push!", 2, null, function (e) {
      assert_vector(e[0]);
      for (var t = 1; t < e.length; t++) e[0].push(e[t]);
      return e[0];
    }),
    define_libfunc("identity", 1, 1, function (e) {
      return e[0];
    }),
    define_syntax("inc!", function (e) {
      var t = e.cdr.car;
      return List(Sym("begin"), List(Sym("set!"), t, List(Sym("+"), t, 1)), t);
    }),
    define_syntax("dec!", function (e) {
      var t = e.cdr.car;
      return List(Sym("begin"), List(Sym("set!"), t, List(Sym("-"), t, 1)), t);
    }),
    define_libfunc("string-concat", 1, 1, function (e) {
      return assert_list(e[0]), e[0].to_array().join("");
    }),
    define_libfunc("string-split", 2, 2, function (e) {
      return (
        assert_string(e[0]),
        assert_string(e[1]),
        array_to_list(e[0].split(e[1]))
      );
    }),
    define_libfunc("string-join", 1, 2, function (e) {
      assert_list(e[0]);
      var t = "";
      return e[1] && (assert_string(e[1]), (t = e[1])), e[0].to_array().join(t);
    }),
    define_libfunc("intersperse", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      assert_list(n);
      var r = [];
      return (
        n
          .to_array()
          .reverse()
          .forEach(function (e) {
            r.push(e), r.push(t);
          }),
        r.pop(),
        array_to_list(r)
      );
    }),
    define_libfunc("map-with-index", 2, null, function (e) {
      var t = e.shift(),
        n = e;
      n.forEach(assert_list);
      var r = [],
        i = 0;
      return Call.multi_foreach(n, {
        call: function (e) {
          var n = e.map(function (e) {
            return e.car;
          });
          return n.unshift(i), i++, new Call(t, n);
        },
        result: function (e) {
          r.push(e);
        },
        finish: function () {
          return array_to_list(r);
        },
      });
    }),
    define_syntax("dotimes", function (e) {
      var t = e.cdr.car,
        n = e.cdr.cdr,
        r = t.car,
        i = t.cdr.car,
        a = t.cdr.cdr.car,
        s = gensym(),
        o = deep_array_to_list([
          [s, i],
          [r, 0, [Sym("+"), r, 1]],
        ]),
        u = deep_array_to_list([[Sym(">="), r, s], a]);
      return new Pair(Sym("do"), new Pair(o, new Pair(u, n)));
    });
  var sort_with_comp = function (e, t, n) {
    return e.sort(function (e, r) {
      return new Interpreter(n).invoke_closure(t, [e, r]);
    });
  };
  define_libfunc("list-sort/comp", 1, 2, function (e, t) {
    return (
      assert_procedure(e[0]),
      assert_list(e[1]),
      array_to_list(sort_with_comp(e[1].to_array(), e[0], t))
    );
  }),
    define_libfunc("vector-sort/comp", 1, 2, function (e, t) {
      return (
        assert_procedure(e[0]),
        assert_vector(e[1]),
        sort_with_comp([...e[1]], e[0], t)
      );
    }),
    define_libfunc("vector-sort/comp!", 1, 2, function (e, t) {
      return (
        assert_procedure(e[0]),
        assert_vector(e[1]),
        sort_with_comp(e[1], e[0], t),
        undef
      );
    });
  var rearrange_args = function (e, t) {
    var n = [],
      r = new Compiler().find_dot_pos(e);
    if (-1 == r) n = t;
    else {
      for (var i = 0; i < r; i++) n[i] = t[i];
      n[i] = array_to_list(t.slice(i));
    }
    return n;
  };
  define_syntax("define-macro", function (e) {
    var t,
      n = e.cdr.car;
    if (n instanceof Pair) {
      var r = n.car;
      t = n.cdr;
      var i = e.cdr.cdr,
        a = new Pair(Sym("lambda"), new Pair(t, i));
    } else {
      (r = n), (a = e.cdr.cdr.car);
      t = a.cdr.car;
    }
    var s = Compiler.compile(a).il;
    if (0 != s[2])
      throw new Bug(
        "you cannot use free variables in macro expander (or define-macro must be on toplevel)"
      );
    var o = new Closure(s[3], [], -1, void 0);
    return (
      (TopEnv[r.name] = new Syntax(r.name, function (e) {
        var n = e.to_array();
        n.shift();
        var r = new Interpreter(),
          i = rearrange_args(t, n);
        return r.invoke_closure(o, i);
      })),
      undef
    );
  });
  var macroexpand_1 = function (e) {
    if (e instanceof Pair) {
      if (
        !(e.car instanceof BiwaSymbol && TopEnv[e.car.name] instanceof Syntax)
      )
        throw new Error(
          "macroexpand-1: `" + to_write$1(e) + "' is not a macro"
        );
      e = TopEnv[e.car.name].transform(e);
    }
    return e;
  };
  define_syntax("%macroexpand", function (e) {
    var t = Compiler.expand(e.cdr.car);
    return List(Sym("quote"), t);
  }),
    define_syntax("%macroexpand-1", function (e) {
      var t = macroexpand_1(e.cdr.car);
      return List(Sym("quote"), t);
    }),
    define_libfunc("macroexpand", 1, 1, function (e) {
      return Compiler.expand(e[0]);
    }),
    define_libfunc("macroexpand-1", 1, 1, function (e) {
      return macroexpand_1(e[0]);
    }),
    define_libfunc("gensym", 0, 1, function (e) {
      return null == e[0] ? gensym() : (assert_string(e[0]), gensym(e[0]));
    }),
    define_libfunc("print", 1, null, function (e) {
      return (
        e.map(function (e) {
          Console.puts(to_display(e), !0);
        }),
        Console.puts(""),
        undef
      );
    }),
    define_libfunc("write-to-string", 1, 1, function (e) {
      return to_write$1(e[0]);
    }),
    define_libfunc("read-from-string", 1, 1, function (e) {
      return assert_string(e[0]), Interpreter.read(e[0]);
    }),
    define_libfunc("port-closed?", 1, 1, function (e) {
      return assert_port(e[0]), !e[0].is_open;
    }),
    define_libfunc("with-output-to-port", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      assert_port(t), assert_procedure(n);
      var r = Port.current_output;
      return (
        (Port.current_output = t),
        new Call(n, [t], function (e) {
          return t.close(), (Port.current_output = r), e[0];
        })
      );
    }),
    define_syntax("let1", function (e) {
      var t = e.cdr.car,
        n = e.cdr.cdr.car,
        r = e.cdr.cdr.cdr;
      return new Pair(
        new Pair(Sym("lambda"), new Pair(new Pair(t, nil), r)),
        new Pair(n, nil)
      );
    });
  var assert_regexp = function (e, t) {
    if (!(e instanceof RegExp))
      throw new Error(t + ": regexp required, but got " + to_write$1(e));
  };
  define_libfunc("string->regexp", 1, 1, function (e) {
    return assert_string(e[0], "string->regexp"), new RegExp(e[0]);
  }),
    define_libfunc("regexp?", 1, 1, function (e) {
      return e[0] instanceof RegExp;
    }),
    define_libfunc("regexp->string", 1, 1, function (e) {
      return (
        assert_regexp(e[0], "regexp->string"), e[0].toString().slice(1, -1)
      );
    }),
    define_libfunc("regexp-exec", 2, 2, function (e) {
      var t = e[0];
      "string" == typeof e[0] && (t = new RegExp(e[0])),
        assert_regexp(t, "regexp-exec"),
        assert_string(e[1], "regexp-exec");
      var n = t.exec(e[1]);
      return null !== n && array_to_list(n);
    }),
    define_libfunc("regexp-replace-all", 3, 3, function (e) {
      var t = e[0];
      if ("string" == typeof t) var n = new RegExp(t, "g");
      else {
        assert_regexp(t);
        n = new RegExp(t.source, "g");
      }
      return assert_string(e[1]), assert_string(e[2]), e[1].replace(n, e[2]);
    }),
    define_libfunc("js-eval", 1, 1, function (ar) {
      return eval(ar[0]);
    }),
    define_libfunc("js-ref", 2, 2, function (e) {
      return "string" == typeof e[1] || Number.isInteger(e[1])
        ? e[0][e[1]]
        : (assert_symbol(e[1]), e[0][e[1].name]);
    }),
    define_libfunc("js-set!", 3, 3, function (e) {
      return assert_string(e[1]), (e[0][e[1]] = e[2]), undef;
    }),
    define_libfunc("js-call", 1, null, function (e) {
      var t = e.shift();
      assert_function(t);
      return t.apply(null, e);
    }),
    define_libfunc("js-invoke", 2, null, function (e) {
      var t = e.shift(),
        n = e.shift();
      if (t[n]) return t[n].apply(t, e);
      throw new Error("js-invoke: function " + n + " is not defined");
    }),
    define_libfunc("js-invocation", 2, null, function (ar, intp) {
      var receiver = ar.shift();
      isSymbol(receiver) && (receiver = eval(receiver.name));
      var v = receiver;
      return (
        ar.forEach(function (e) {
          if (isSymbol(e)) v = v[e.name];
          else {
            if (!isList(e))
              throw new BiwaError(
                "js-invocation: expected list or symbol for callspec but got " +
                  inspect(e)
              );
            var t = e.to_array();
            assert_symbol(t[0]);
            var n = t.shift().name;
            if (
              ((t = t.map(function (e) {
                if (isClosure(e)) return js_closure(e, intp);
                if (isList(e)) {
                  var t = {};
                  return (
                    e.foreach(function (e) {
                      assert_symbol(e.car), (t[e.car.name] = e.cdr);
                    }),
                    t
                  );
                }
                return e;
              })),
              "function" === (v[n], !1))
            )
              throw new BiwaError(
                "js-invocation: the method `" + n + "' not found"
              );
            v = v[n].apply(v, t);
          }
        }),
        v
      );
    }),
    define_syntax("..", function (e) {
      if (e.cdr == nil) throw new Error("malformed ..");
      return new Pair(Sym("js-invocation"), e.cdr);
    }),
    define_libfunc("js-new", 1, null, function (ar, intp) {
      var array_to_obj = function (e) {
          if (e.length % 2 != 0)
            throw new Error("js-new: odd number of key-value pair");
          for (var t = {}, n = 0; n < e.length; n += 2) {
            var r = e[n],
              i = e[n + 1];
            assert_symbol(r),
              isClosure(i) && (i = js_closure(i, intp)),
              (t[r.name] = i);
          }
          return t;
        },
        ctor = ar.shift();
      if (("string" == typeof ctor && (ctor = eval(ctor)), 0 == ar.length))
        return new ctor();
      for (var args = [], i = 0; i < ar.length; i++) {
        if (ar[i] instanceof BiwaSymbol) {
          args.push(array_to_obj(ar.slice(i)));
          break;
        }
        args.push(ar[i]);
      }
      return new (Function.prototype.bind.apply(ctor, [null].concat(args)))();
    }),
    define_libfunc("js-obj", 0, null, function (e) {
      if (e.length % 2 != 0)
        throw new Error("js-obj: number of arguments must be even");
      var t = {};
      for (let n = 0; n < e.length / 2; n++)
        assert_string(e[2 * n]), (t[e[2 * n]] = e[2 * n + 1]);
      return t;
    });
  const js_closure = function (e, t) {
    var n = new Interpreter(t);
    return function () {
      return n.invoke_closure(e, Array.from(arguments));
    };
  };
  define_libfunc("js-closure", 1, 1, function (e, t) {
    return assert_closure(e[0]), js_closure(e[0], t);
  }),
    define_libfunc("js-null?", 1, 1, function (e) {
      return null === e[0];
    }),
    define_libfunc("js-undefined?", 1, 1, function (e) {
      return void 0 === e[0];
    }),
    define_libfunc("js-function?", 1, 1, function (e) {
      return "function" == typeof e[0];
    }),
    define_libfunc("js-array-to-list", 1, 1, function (e) {
      return (
        deprecate("js-array-to-list", "1.0", "js-array->list"),
        array_to_list(e[0])
      );
    }),
    define_libfunc("js-array->list", 1, 1, function (e) {
      return array_to_list(e[0]);
    }),
    define_libfunc("list-to-js-array", 1, 1, function (e) {
      return (
        deprecate("list-to-js-array", "1.0", "list->js-array"), e[0].to_array()
      );
    }),
    define_libfunc("list->js-array", 1, 1, function (e) {
      return e[0].to_array();
    }),
    define_libfunc("alist-to-js-obj", 1, 1, function (e) {
      return (
        deprecate("alist-to-js-obj", "1.0", "alist->js-obj"),
        alist_to_js_obj(e[0])
      );
    }),
    define_libfunc("alist->js-obj", 1, 1, function (e) {
      return assert_list(e[0]), alist_to_js_obj(e[0]);
    }),
    define_libfunc("js-obj-to-alist", 1, 1, function (e) {
      return (
        deprecate("js-obj-to-alist", "1.0", "js-obj->alist"),
        js_obj_to_alist(e[0])
      );
    }),
    define_libfunc("js-obj->alist", 1, 1, function (e) {
      return js_obj_to_alist(e[0]);
    }),
    define_libfunc("timer", 2, 2, function (e, t) {
      var n = e[0],
        r = e[1];
      assert_closure(n), assert_real(r);
      var i = new Interpreter(t);
      return (
        setTimeout(function () {
          i.invoke_closure(n);
        }, 1e3 * r),
        undef
      );
    }),
    define_libfunc("set-timer!", 2, 2, function (e, t) {
      var n = e[0],
        r = e[1];
      assert_closure(n), assert_real(r);
      var i = new Interpreter(t);
      return setInterval(function () {
        i.invoke_closure(n);
      }, 1e3 * r);
    }),
    define_libfunc("clear-timer!", 1, 1, function (e) {
      var t = e[0];
      return clearInterval(t), undef;
    }),
    define_libfunc("sleep", 1, 1, function (e) {
      var t = e[0];
      return (
        assert_real(t),
        new Pause(function (e) {
          setTimeout(function () {
            e.resume(nil);
          }, 1e3 * t);
        })
      );
    });
  var define_console_func = function (e) {
    define_libfunc("console-" + e, 1, null, function (t) {
      var n = window.console;
      if (n) {
        var r = t.map(function (e) {
          return inspect(e, { fallback: e });
        });
        n[e].apply(n, r);
      }
      return t[0];
    });
  };
  define_console_func("debug"),
    define_console_func("log"),
    define_console_func("info"),
    define_console_func("warn"),
    define_console_func("error"),
    define_syntax("cond", function (e) {
      var t = e.cdr;
      if (!(t instanceof Pair) || t === nil)
        throw new BiwaError(
          "malformed cond: cond needs list but got " + write_ss(t)
        );
      var n = null;
      return (
        t
          .to_array()
          .reverse()
          .forEach(function (e) {
            if (!(e instanceof Pair))
              throw new BiwaError("bad clause in cond: " + write_ss(e));
            if (e.car === Sym("else")) {
              if (null !== n)
                throw new BiwaError(
                  "'else' clause of cond followed by more clauses: " +
                    write_ss(t)
                );
              n =
                e.cdr !== nil &&
                (e.cdr.cdr === nil ? e.cdr.car : new Pair(Sym("begin"), e.cdr));
            } else {
              var r = e.car;
              if (e.cdr === nil) n = List(Sym("or"), r, n);
              else if (e.cdr.cdr === nil) n = List(Sym("if"), r, e.cdr.car, n);
              else if (e.cdr.car === Sym("=>")) {
                r = e.car;
                var i = e.cdr.cdr.car,
                  a = gensym();
                n = List(
                  Sym("let"),
                  List(List(a, r)),
                  List(Sym("if"), r, List(i, a), n)
                );
              } else n = List(Sym("if"), r, new Pair(Sym("begin"), e.cdr), n);
            }
          }),
        n
      );
    }),
    define_syntax("case", function (e) {
      var t = gensym();
      if (e.cdr === nil)
        throw new BiwaError("case: at least one clause is required");
      if (e.cdr instanceof Pair) {
        var n = e.cdr.car,
          r = e.cdr.cdr,
          i = void 0;
        return (
          r
            .to_array()
            .reverse()
            .forEach(function (e) {
              if (e.car === Sym("else")) {
                if (void 0 !== i)
                  throw new BiwaError(
                    "case: 'else' clause followed by more clauses: " +
                      write_ss(r)
                  );
                i = new Pair(Sym("begin"), e.cdr);
              } else
                i = List(
                  Sym("if"),
                  new Pair(
                    Sym("or"),
                    array_to_list(
                      e.car.to_array().map(function (e) {
                        return List(Sym("eqv?"), t, List(Sym("quote"), e));
                      })
                    )
                  ),
                  new Pair(Sym("begin"), e.cdr),
                  i
                );
            }),
          new Pair(Sym("let1"), new Pair(t, new Pair(n, new Pair(i, nil))))
        );
      }
      throw new BiwaError("case: proper list is required");
    }),
    define_syntax("and", function (e) {
      if (e.cdr == nil) return !0;
      var t = e.cdr.to_array(),
        n = t.length - 1,
        r = t[n];
      for (n -= 1; n >= 0; n--) r = List(Sym("if"), t[n], r, !1);
      return r;
    }),
    define_syntax("or", function (e) {
      for (var t = e.cdr.to_array(), n = !1, r = t.length - 1; r >= 0; r--)
        n = List(Sym("if"), t[r], t[r], n);
      return n;
    }),
    define_syntax("let", function (e) {
      var t = null;
      e.cdr.car instanceof BiwaSymbol && ((t = e.cdr.car), (e = e.cdr));
      var n = e.cdr.car,
        r = e.cdr.cdr;
      if (!(n instanceof Pair) && n != nil)
        throw new BiwaError(
          "let: need a pair for bindings: got " + to_write$1(n)
        );
      for (var i = nil, a = nil, s = n; s instanceof Pair; s = s.cdr) {
        if (!(s.car instanceof Pair))
          throw new BiwaError(
            "let: need a pair for bindings: got " + to_write$1(s.car)
          );
        (i = new Pair(s.car.car, i)), (a = new Pair(s.car.cdr.car, a));
      }
      var o = null;
      if (t) {
        (i = array_to_list(i.to_array().reverse())),
          (a = array_to_list(a.to_array().reverse()));
        var u = new Pair(Sym("lambda"), new Pair(i, r)),
          c = new Pair(t, a);
        o = List(Sym("letrec"), new Pair(List(t, u), nil), c);
      } else o = new Pair(new Pair(Sym("lambda"), new Pair(i, r)), a);
      return o;
    }),
    define_syntax("let*", function (e) {
      var t = e.cdr.car,
        n = e.cdr.cdr;
      if (t === nil) return new Pair(Sym("let"), new Pair(nil, n));
      if (!(t instanceof Pair))
        throw new BiwaError(
          "let*: need a pair for bindings: got " + to_write$1(t)
        );
      var r = null;
      return (
        t
          .to_array()
          .reverse()
          .forEach(function (e) {
            r = new Pair(
              Sym("let"),
              new Pair(new Pair(e, nil), null == r ? n : new Pair(r, nil))
            );
          }),
        r
      );
    });
  var expand_letrec_star = function (e) {
    var t = e.cdr.car,
      n = e.cdr.cdr;
    if (!(t instanceof Pair))
      throw new BiwaError(
        "letrec*: need a pair for bindings: got " + to_write$1(t)
      );
    var r = n;
    t.to_array()
      .reverse()
      .forEach(function (e) {
        r = new Pair(new Pair(Sym("set!"), e), r);
      });
    var i = nil;
    return (
      t
        .to_array()
        .reverse()
        .forEach(function (e) {
          i = new Pair(new Pair(e.car, new Pair(undef, nil)), i);
        }),
      new Pair(Sym("let"), new Pair(i, r))
    );
  };
  define_syntax("letrec", expand_letrec_star),
    define_syntax("letrec*", expand_letrec_star),
    define_syntax("let-values", function (e) {
      var t = e.cdr.car,
        n = e.cdr.cdr,
        r = nil,
        i = nil;
      t.to_array()
        .reverse()
        .forEach(function (e) {
          var t = e.cdr.car,
            n = gensym(),
            a = new Pair(
              n,
              new Pair(
                new Pair(Sym("lambda"), new Pair(nil, new Pair(t, nil))),
                nil
              )
            );
          r = new Pair(a, r);
          var s = e.car;
          i = new Pair(new Pair(s, new Pair(new Pair(n, nil), nil)), i);
        });
      var a = new Pair(Sym("let*-values"), new Pair(i, n));
      return new Pair(Sym("let"), new Pair(r, new Pair(a, nil)));
    }),
    define_syntax("let*-values", function (e) {
      var t = e.cdr.car,
        n = e.cdr.cdr,
        r = null;
      return (
        t
          .to_array()
          .reverse()
          .forEach(function (e) {
            var t = e.car,
              i = e.cdr.car;
            r = new Pair(
              Sym("call-with-values"),
              new Pair(
                new Pair(Sym("lambda"), new Pair(nil, new Pair(i, nil))),
                new Pair(
                  new Pair(
                    Sym("lambda"),
                    new Pair(t, null == r ? n : new Pair(r, nil))
                  ),
                  nil
                )
              )
            );
          }),
        r
      );
    }),
    define_libfunc("eqv?", 2, 2, function (e) {
      return eqv(e[0], e[1]);
    }),
    define_libfunc("eq?", 2, 2, function (e) {
      return eq(e[0], e[1]);
    }),
    define_libfunc("equal?", 2, 2, function (e) {
      return equal(e[0], e[1]);
    }),
    define_libfunc("procedure?", 1, 1, function (e) {
      return isProcedure(e[0]);
    }),
    define_libfunc("number?", 1, 1, function (e) {
      return isNumber(e[0]);
    }),
    define_libfunc("complex?", 1, 1, function (e) {
      return isComplex(e[0]);
    }),
    define_libfunc("real?", 1, 1, function (e) {
      return isReal(e[0]);
    }),
    define_libfunc("rational?", 1, 1, function (e) {
      return isRational(e[0]);
    }),
    define_libfunc("integer?", 1, 1, function (e) {
      return isInteger(e[0]);
    }),
    define_libfunc("=", 2, null, function (e) {
      var t = e[0];
      assert_number(e[0]);
      for (var n = 1; n < e.length; n++) {
        if ((assert_number(e[n]), real_part(e[n]) != real_part(t))) return !1;
        if (imag_part(e[n]) != imag_part(t)) return !1;
      }
      return !0;
    }),
    define_libfunc("<", 2, null, function (e) {
      assert_number(e[0]);
      for (var t = 1; t < e.length; t++)
        if ((assert_number(e[t]), !(e[t - 1] < e[t]))) return !1;
      return !0;
    }),
    define_libfunc(">", 2, null, function (e) {
      assert_number(e[0]);
      for (var t = 1; t < e.length; t++)
        if ((assert_number(e[t]), !(e[t - 1] > e[t]))) return !1;
      return !0;
    }),
    define_libfunc("<=", 2, null, function (e) {
      assert_number(e[0]);
      for (var t = 1; t < e.length; t++)
        if ((assert_number(e[t]), !(e[t - 1] <= e[t]))) return !1;
      return !0;
    }),
    define_libfunc(">=", 2, null, function (e) {
      assert_number(e[0]);
      for (var t = 1; t < e.length; t++)
        if ((assert_number(e[t]), !(e[t - 1] >= e[t]))) return !1;
      return !0;
    }),
    define_libfunc("zero?", 1, 1, function (e) {
      return assert_number(e[0]), 0 === e[0];
    }),
    define_libfunc("positive?", 1, 1, function (e) {
      return assert_number(e[0]), e[0] > 0;
    }),
    define_libfunc("negative?", 1, 1, function (e) {
      return assert_number(e[0]), e[0] < 0;
    }),
    define_libfunc("odd?", 1, 1, function (e) {
      return assert_number(e[0]), e[0] % 2 == 1 || e[0] % 2 == -1;
    }),
    define_libfunc("even?", 1, 1, function (e) {
      return assert_number(e[0]), e[0] % 2 == 0;
    }),
    define_libfunc("finite?", 1, 1, function (e) {
      return (
        assert_number(e[0]), e[0] != 1 / 0 && e[0] != -1 / 0 && !isNaN(e[0])
      );
    }),
    define_libfunc("infinite?", 1, 1, function (e) {
      return assert_number(e[0]), e[0] == 1 / 0 || e[0] == -1 / 0;
    }),
    define_libfunc("nan?", 1, 1, function (e) {
      return assert_number(e[0]), isNaN(e[0]);
    }),
    define_libfunc("max", 2, null, function (e) {
      for (var t = 0; t < e.length; t++) assert_number(e[t]);
      return Math.max.apply(null, e);
    }),
    define_libfunc("min", 2, null, function (e) {
      for (var t = 0; t < e.length; t++) assert_number(e[t]);
      return Math.min.apply(null, e);
    });
  var complex_or_real = function (e, t) {
      return 0 === t ? e : new Complex(e, t);
    },
    polar_or_real = function (e, t) {
      return 0 === t ? e : Complex.from_polar(e, t);
    };
  define_libfunc("+", 0, null, function (e) {
    for (var t = 0, n = 0, r = 0; r < e.length; r++)
      assert_number(e[r]), (t += real_part(e[r])), (n += imag_part(e[r]));
    return complex_or_real(t, n);
  });
  var the_magnitude = function (e) {
      return e instanceof Complex ? e.magnitude() : e;
    },
    the_angle = function (e) {
      return e instanceof Complex ? e.angle() : 0;
    };
  define_libfunc("*", 0, null, function (e) {
    for (var t = 1, n = 0, r = 0; r < e.length; r++)
      assert_number(e[r]), (t *= the_magnitude(e[r])), (n += the_angle(e[r]));
    return polar_or_real(t, n);
  }),
    define_libfunc("-", 1, null, function (e) {
      var t = e.length;
      if ((assert_number(e[0]), 1 == t))
        return e[0] instanceof Complex
          ? new Complex(-real_part(e[0]), -imag_part(e[0]))
          : -e[0];
      for (var n = real_part(e[0]), r = imag_part(e[0]), i = 1; i < t; i++)
        assert_number(e[i]), (n -= real_part(e[i])), (r -= imag_part(e[i]));
      return complex_or_real(n, r);
    }),
    define_libfunc("/", 1, null, function (e) {
      var t = e.length;
      if ((assert_number(e[0]), 1 == t))
        return e[0] instanceof Complex
          ? Complex.from_polar(1 / the_magnitude(e[0]), -the_angle(e[0]))
          : 1 / e[0];
      for (var n = the_magnitude(e[0]), r = the_angle(e[0]), i = 1; i < t; i++)
        assert_number(e[i]), (n /= the_magnitude(e[i])), (r -= the_angle(e[i]));
      return polar_or_real(n, r);
    }),
    define_libfunc("abs", 1, 1, function (e) {
      return assert_number(e[0]), Math.abs(e[0]);
    });
  var div = function (e, t) {
      return Math.floor(e / t);
    },
    mod = function (e, t) {
      return e - Math.floor(e / t) * t;
    },
    div0 = function (e, t) {
      return e > 0 ? Math.floor(e / t) : Math.ceil(e / t);
    },
    mod0 = function (e, t) {
      return e > 0 ? e - Math.floor(e / t) * t : e - Math.ceil(e / t) * t;
    };
  define_libfunc("div-and-mod", 2, 2, function (e) {
    return (
      assert_number(e[0]),
      assert_number(e[1]),
      new Values$1([div(e[0], e[1]), mod(e[0], e[1])])
    );
  }),
    define_libfunc("div", 2, 2, function (e) {
      return assert_number(e[0]), assert_number(e[1]), div(e[0], e[1]);
    }),
    define_libfunc("mod", 2, 2, function (e) {
      return assert_number(e[0]), assert_number(e[1]), mod(e[0], e[1]);
    }),
    define_libfunc("div0-and-mod0", 2, 2, function (e) {
      return (
        assert_number(e[0]),
        assert_number(e[1]),
        new Values$1([div0(e[0], e[1]), mod0(e[0], e[1])])
      );
    }),
    define_libfunc("div0", 2, 2, function (e) {
      return assert_number(e[0]), assert_number(e[1]), div0(e[0], e[1]);
    }),
    define_libfunc("mod0", 2, 2, function (e) {
      return assert_number(e[0]), assert_number(e[1]), mod0(e[0], e[1]);
    }),
    alias_libfunc("div-and-mod", "floor/"),
    alias_libfunc("div", "floor-quotient"),
    alias_libfunc("mod", "floor-remainder");
  var truncate_q = function (e, t) {
      return Math.trunc(e / t);
    },
    truncate_r = function (e, t) {
      return e - Math.trunc(e / t) * t;
    };
  define_libfunc("truncate/", 2, 2, function (e) {
    return (
      assert_number(e[0]),
      assert_number(e[1]),
      new Values$1([truncate_q(e[0], e[1]), truncate_r(e[0], e[1])])
    );
  }),
    define_libfunc("truncate-quotient", 2, 2, function (e) {
      return assert_number(e[0]), assert_number(e[1]), truncate_q(e[0], e[1]);
    }),
    define_libfunc("truncate-remainder", 2, 2, function (e) {
      return assert_number(e[0]), assert_number(e[1]), truncate_r(e[0], e[1]);
    }),
    alias_libfunc("truncate-quotient", "quotient"),
    alias_libfunc("truncate-remainder", "remainder"),
    alias_libfunc("floor-remainder", "modulo"),
    define_libfunc("numerator", 1, 1, function (e) {
      if ((assert_number(e[0]), e[0] instanceof Rational$1))
        return e[0].numerator;
      throw new Bug("todo");
    }),
    define_libfunc("denominator", 1, 1, function (e) {
      if ((assert_number(e[0]), e[0] instanceof Rational$1))
        return e[0].denominator;
      throw new Bug("todo");
    }),
    define_libfunc("floor", 1, 1, function (e) {
      return assert_number(e[0]), Math.floor(e[0]);
    }),
    define_libfunc("ceiling", 1, 1, function (e) {
      return assert_number(e[0]), Math.ceil(e[0]);
    }),
    define_libfunc("truncate", 1, 1, function (e) {
      return assert_number(e[0]), e[0] < 0 ? Math.ceil(e[0]) : Math.floor(e[0]);
    }),
    define_libfunc("round", 1, 1, function (e) {
      return assert_number(e[0]), Math.round(e[0]);
    }),
    define_libfunc("exp", 1, 1, function (e) {
      return assert_number(e[0]), Math.exp(e[0]);
    }),
    define_libfunc("log", 1, 2, function (e) {
      var t = e[0],
        n = e[1];
      return (
        assert_number(t),
        n ? (assert_number(n), Math.log(t) / Math.log(n)) : Math.log(t)
      );
    }),
    define_libfunc("sin", 1, 1, function (e) {
      return assert_number(e[0]), Math.sin(e[0]);
    }),
    define_libfunc("cos", 1, 1, function (e) {
      return assert_number(e[0]), Math.cos(e[0]);
    }),
    define_libfunc("tan", 1, 1, function (e) {
      return assert_number(e[0]), Math.tan(e[0]);
    }),
    define_libfunc("asin", 1, 1, function (e) {
      return assert_number(e[0]), Math.asin(e[0]);
    }),
    define_libfunc("acos", 1, 1, function (e) {
      return assert_number(e[0]), Math.acos(e[0]);
    }),
    define_libfunc("atan", 1, 2, function (e) {
      return (
        assert_number(e[0]),
        2 == e.length
          ? (assert_number(e[1]), Math.atan2(e[0], e[1]))
          : Math.atan(e[0])
      );
    }),
    define_libfunc("sqrt", 1, 1, function (e) {
      return assert_number(e[0]), Math.sqrt(e[0]);
    }),
    define_libfunc("exact-integer-sqrt", 1, 1, function (e) {
      assert_number(e[0]);
      var t = Math.sqrt(e[0]),
        n = t - (t % 1),
        r = e[0] - n * n;
      return new Values$1([n, r]);
    }),
    define_libfunc("expt", 2, 2, function (e) {
      return assert_number(e[0]), assert_number(e[1]), Math.pow(e[0], e[1]);
    }),
    define_libfunc("make-rectangular", 2, 2, function (e) {
      return assert_number(e[0]), assert_number(e[1]), new Complex(e[0], e[1]);
    }),
    define_libfunc("make-polar", 2, 2, function (e) {
      return (
        assert_number(e[0]), assert_number(e[1]), Complex.from_polar(e[0], e[1])
      );
    });
  var real_part = function (e) {
      return Complex.assure(e).real;
    },
    imag_part = function (e) {
      return Complex.assure(e).imag;
    },
    get;
  define_libfunc("real-part", 1, 1, function (e) {
    return assert_number(e[0]), real_part(e[0]);
  }),
    define_libfunc("imag-part", 1, 1, function (e) {
      return assert_number(e[0]), Complex.assure(e[0]).imag;
    }),
    define_libfunc("magnitude", 1, 1, function (e) {
      return assert_number(e[0]), Complex.assure(e[0]).magnitude();
    }),
    define_libfunc("angle", 1, 1, function (e) {
      return assert_number(e[0]), Complex.assure(e[0]).angle();
    }),
    define_libfunc("number->string", 1, 3, function (e) {
      var t = e[0],
        n = e[1];
      if (e[2])
        throw new Bug("number->string: precision is not yet implemented");
      return (n = n || 10), t.toString(n);
    }),
    define_libfunc("string->number", 1, 3, function (e) {
      var t = e[0];
      if ("+inf.0" === t) return 1 / 0;
      if ("-inf.0" === t) return -1 / 0;
      if ("+nan.0" === t) return NaN;
      var n = e[1],
        r = parse_integer(t, 0 === n ? 0 : n || 10);
      if (!1 !== r) return r;
      if (void 0 !== n && 10 !== n) return !1;
      var i = parse_float(t);
      if (!1 !== i) return i;
      var a = parse_fraction(t);
      return !1 !== a && a;
    }),
    define_libfunc("not", 1, 1, function (e) {
      return !1 === e[0];
    }),
    define_libfunc("boolean?", 1, 1, function (e) {
      return !1 === e[0] || !0 === e[0];
    }),
    define_libfunc("boolean=?", 2, null, function (e) {
      for (var t = e.length, n = 1; n < t; n++) if (e[n] != e[0]) return !1;
      return !0;
    }),
    define_libfunc("pair?", 1, 1, function (e) {
      return e[0] instanceof Pair;
    }),
    define_libfunc("cons", 2, 2, function (e) {
      return new Pair(e[0], e[1]);
    }),
    define_libfunc("car", 1, 1, function (e) {
      if (!(e[0] instanceof Pair))
        throw new BiwaError("Attempt to apply car on " + e[0]);
      return e[0].car;
    }),
    define_libfunc("cdr", 1, 1, function (e) {
      if (!(e[0] instanceof Pair))
        throw new BiwaError("Attempt to apply cdr on " + e[0]);
      return e[0].cdr;
    }),
    define_libfunc("set-car!", 2, 2, function (e) {
      if (!(e[0] instanceof Pair))
        throw new BiwaError("Attempt to apply set-car! on " + e[0]);
      return (e[0].car = e[1]), undef;
    }),
    define_libfunc("set-cdr!", 2, 2, function (e) {
      if (!(e[0] instanceof Pair))
        throw new BiwaError("Attempt to apply set-cdr! on " + e[0]);
      return (e[0].cdr = e[1]), undef;
    }),
    (get = function (e, t, n) {
      var r = n;
      return (
        t.forEach(function (t) {
          if (!(r instanceof Pair))
            throw new BiwaError(
              e + ": attempt to get " + (t ? "cdr" : "car") + " of " + r
            );
          r = t ? r.cdr : r.car;
        }),
        r
      );
    }),
    define_libfunc("caar", 1, 1, function (e) {
      return get("caar", [0, 0], e[0]);
    }),
    define_libfunc("cadr", 1, 1, function (e) {
      return get("cadr", [1, 0], e[0]);
    }),
    define_libfunc("cdar", 1, 1, function (e) {
      return get("cadr", [0, 1], e[0]);
    }),
    define_libfunc("cddr", 1, 1, function (e) {
      return get("cadr", [1, 1], e[0]);
    }),
    define_libfunc("caaar", 1, 1, function (e) {
      return get("caaar", [0, 0, 0], e[0]);
    }),
    define_libfunc("caadr", 1, 1, function (e) {
      return get("caadr", [1, 0, 0], e[0]);
    }),
    define_libfunc("cadar", 1, 1, function (e) {
      return get("cadar", [0, 1, 0], e[0]);
    }),
    define_libfunc("caddr", 1, 1, function (e) {
      return get("caddr", [1, 1, 0], e[0]);
    }),
    define_libfunc("cdaar", 1, 1, function (e) {
      return get("cdaar", [0, 0, 1], e[0]);
    }),
    define_libfunc("cdadr", 1, 1, function (e) {
      return get("cdadr", [1, 0, 1], e[0]);
    }),
    define_libfunc("cddar", 1, 1, function (e) {
      return get("cddar", [0, 1, 1], e[0]);
    }),
    define_libfunc("cdddr", 1, 1, function (e) {
      return get("cdddr", [1, 1, 1], e[0]);
    }),
    define_libfunc("caaaar", 1, 1, function (e) {
      return get("caaaar", [0, 0, 0, 0], e[0]);
    }),
    define_libfunc("caaadr", 1, 1, function (e) {
      return get("caaadr", [1, 0, 0, 0], e[0]);
    }),
    define_libfunc("caadar", 1, 1, function (e) {
      return get("caadar", [0, 1, 0, 0], e[0]);
    }),
    define_libfunc("caaddr", 1, 1, function (e) {
      return get("caaddr", [1, 1, 0, 0], e[0]);
    }),
    define_libfunc("cadaar", 1, 1, function (e) {
      return get("cadaar", [0, 0, 1, 0], e[0]);
    }),
    define_libfunc("cadadr", 1, 1, function (e) {
      return get("cadadr", [1, 0, 1, 0], e[0]);
    }),
    define_libfunc("caddar", 1, 1, function (e) {
      return get("caddar", [0, 1, 1, 0], e[0]);
    }),
    define_libfunc("cadddr", 1, 1, function (e) {
      return get("cadddr", [1, 1, 1, 0], e[0]);
    }),
    define_libfunc("cdaaar", 1, 1, function (e) {
      return get("cdaaar", [0, 0, 0, 1], e[0]);
    }),
    define_libfunc("cdaadr", 1, 1, function (e) {
      return get("cdaadr", [1, 0, 0, 1], e[0]);
    }),
    define_libfunc("cdadar", 1, 1, function (e) {
      return get("cdadar", [0, 1, 0, 1], e[0]);
    }),
    define_libfunc("cdaddr", 1, 1, function (e) {
      return get("cdaddr", [1, 1, 0, 1], e[0]);
    }),
    define_libfunc("cddaar", 1, 1, function (e) {
      return get("cddaar", [0, 0, 1, 1], e[0]);
    }),
    define_libfunc("cddadr", 1, 1, function (e) {
      return get("cddadr", [1, 0, 1, 1], e[0]);
    }),
    define_libfunc("cdddar", 1, 1, function (e) {
      return get("cdddar", [0, 1, 1, 1], e[0]);
    }),
    define_libfunc("cddddr", 1, 1, function (e) {
      return get("cddddr", [1, 1, 1, 1], e[0]);
    }),
    define_libfunc("null?", 1, 1, function (e) {
      return e[0] === nil;
    }),
    define_libfunc("list?", 1, 1, function (e) {
      return isList(e[0]);
    }),
    define_libfunc("list", 0, null, function (e) {
      for (var t = nil, n = e.length - 1; n >= 0; n--) t = new Pair(e[n], t);
      return t;
    }),
    define_libfunc("length", 1, 1, function (e) {
      assert_list(e[0]);
      for (var t = 0, n = e[0]; n != nil; n = n.cdr) t++;
      return t;
    }),
    define_libfunc("append", 1, null, function (e) {
      for (var t = e.length, n = e[--t]; t--; )
        e[t]
          .to_array()
          .reverse()
          .forEach(function (e) {
            n = new Pair(e, n);
          });
      return n;
    }),
    define_libfunc("reverse", 1, 1, function (e) {
      if (e[0] == nil) return nil;
      assert_pair(e[0]);
      for (var t = nil, n = e[0]; n != nil; n = n.cdr) t = new Pair(n.car, t);
      return t;
    }),
    define_libfunc("list-tail", 2, 2, function (e) {
      if ((assert_pair(e[0]), assert_integer(e[1]), e[1] < 0))
        throw new BiwaError("list-tail: index out of range (" + e[1] + ")");
      for (var t = e[0], n = 0; n < e[1]; n++) {
        if (!(t instanceof Pair))
          throw new BiwaError("list-tail: the list is shorter than " + e[1]);
        t = t.cdr;
      }
      return t;
    }),
    define_libfunc("list-ref", 2, 2, function (e) {
      if ((assert_pair(e[0]), assert_integer(e[1]), e[1] < 0))
        throw new BiwaError("list-tail: index out of range (" + e[1] + ")");
      for (var t = e[0], n = 0; n < e[1]; n++) {
        if (!(t instanceof Pair))
          throw new BiwaError("list-ref: the list is shorter than " + e[1]);
        t = t.cdr;
      }
      return t.car;
    }),
    define_libfunc("map", 2, null, function (e) {
      var t = e.shift(),
        n = e;
      n.forEach(assert_list);
      var r = [];
      return Call.multi_foreach(n, {
        call: function (e) {
          return new Call(
            t,
            e.map(function (e) {
              return e.car;
            })
          );
        },
        result: function (e) {
          r.push(e);
        },
        finish: function () {
          return array_to_list(r);
        },
      });
    }),
    define_libfunc("for-each", 2, null, function (e) {
      var t = e.shift(),
        n = e;
      return (
        n.forEach(assert_list),
        Call.multi_foreach(n, {
          call: function (e) {
            return new Call(
              t,
              e.map(function (e) {
                return e.car;
              })
            );
          },
          finish: function () {
            return undef;
          },
        })
      );
    }),
    define_libfunc("symbol?", 1, 1, function (e) {
      return e[0] instanceof BiwaSymbol;
    }),
    define_libfunc("symbol->string", 1, 1, function (e) {
      return assert_symbol(e[0]), e[0].name;
    }),
    define_libfunc("symbol=?", 2, null, function (e) {
      assert_symbol(e[0]);
      for (var t = 1; t < e.length; t++)
        if ((assert_symbol(e[t]), e[t] != e[0])) return !1;
      return !0;
    }),
    define_libfunc("string->symbol", 1, 1, function (e) {
      return assert_string(e[0]), Sym(e[0]);
    }),
    define_libfunc("char?", 1, 1, function (e) {
      return e[0] instanceof Char;
    }),
    define_libfunc("char->integer", 1, 1, function (e) {
      return assert_char(e[0]), e[0].value.charCodeAt(0);
    }),
    define_libfunc("integer->char", 1, 1, function (e) {
      return assert_integer(e[0]), Char.get(String.fromCharCode(e[0]));
    });
  var make_char_compare_func = function (e) {
    return function (t) {
      assert_char(t[0]);
      for (var n = 1; n < t.length; n++)
        if ((assert_char(t[n]), !e(t[n - 1].value, t[n].value))) return !1;
      return !0;
    };
  };
  define_libfunc(
    "char=?",
    2,
    null,
    make_char_compare_func(function (e, t) {
      return e == t;
    })
  ),
    define_libfunc(
      "char<?",
      2,
      null,
      make_char_compare_func(function (e, t) {
        return e < t;
      })
    ),
    define_libfunc(
      "char>?",
      2,
      null,
      make_char_compare_func(function (e, t) {
        return e > t;
      })
    ),
    define_libfunc(
      "char<=?",
      2,
      null,
      make_char_compare_func(function (e, t) {
        return e <= t;
      })
    ),
    define_libfunc(
      "char>=?",
      2,
      null,
      make_char_compare_func(function (e, t) {
        return e >= t;
      })
    ),
    define_libfunc("string?", 1, 1, function (e) {
      return "string" == typeof e[0];
    }),
    define_libfunc("make-string", 1, 2, function (e) {
      assert_integer(e[0]);
      var t = " ";
      e[1] && (assert_char(e[1]), (t = e[1].value));
      var n = "";
      return (
        Array(e[0])
          .fill()
          .map(() => {
            n += t;
          }),
        n
      );
    }),
    define_libfunc("string", 0, null, function (e) {
      if (0 == e.length) return "";
      for (var t = 0; t < e.length; t++) assert_char(e[t]);
      return e
        .map(function (e) {
          return e.value;
        })
        .join("");
    }),
    define_libfunc("string-length", 1, 1, function (e) {
      return assert_string(e[0]), e[0].length;
    }),
    define_libfunc("string-ref", 2, 2, function (e) {
      return (
        assert_string(e[0]),
        assert_between(e[1], 0, e[0].length - 1),
        Char.get(e[0].charAt([e[1]]))
      );
    }),
    define_libfunc("string=?", 2, null, function (e) {
      assert_string(e[0]);
      for (var t = 1; t < e.length; t++)
        if ((assert_string(e[t]), e[0] != e[t])) return !1;
      return !0;
    }),
    define_libfunc("string<?", 2, null, function (e) {
      assert_string(e[0]);
      for (var t = 1; t < e.length; t++)
        if ((assert_string(e[t]), !(e[t - 1] < e[t]))) return !1;
      return !0;
    }),
    define_libfunc("string>?", 2, null, function (e) {
      assert_string(e[0]);
      for (var t = 1; t < e.length; t++)
        if ((assert_string(e[t]), !(e[t - 1] > e[t]))) return !1;
      return !0;
    }),
    define_libfunc("string<=?", 2, null, function (e) {
      assert_string(e[0]);
      for (var t = 1; t < e.length; t++)
        if ((assert_string(e[t]), !(e[t - 1] <= e[t]))) return !1;
      return !0;
    }),
    define_libfunc("string>=?", 2, null, function (e) {
      assert_string(e[0]);
      for (var t = 1; t < e.length; t++)
        if ((assert_string(e[t]), !(e[t - 1] >= e[t]))) return !1;
      return !0;
    }),
    define_libfunc("substring", 3, 3, function (e) {
      if (
        (assert_string(e[0]),
        assert_integer(e[1]),
        assert_integer(e[2]),
        e[1] < 0)
      )
        throw new BiwaError("substring: start too small: " + e[1]);
      if (e[2] < 0) throw new BiwaError("substring: end too small: " + e[2]);
      if (e[0].length + 1 <= e[1])
        throw new BiwaError("substring: start too big: " + e[1]);
      if (e[0].length + 1 <= e[2])
        throw new BiwaError("substring: end too big: " + e[2]);
      if (!(e[1] <= e[2]))
        throw new BiwaError(
          "substring: not start <= end: " + e[1] + ", " + e[2]
        );
      return e[0].substring(e[1], e[2]);
    }),
    define_libfunc("string-append", 0, null, function (e) {
      for (var t = 0; t < e.length; t++) assert_string(e[t]);
      return e.join("");
    }),
    define_libfunc("string->list", 1, 1, function (e) {
      return (
        assert_string(e[0]),
        array_to_list(
          e[0].split("").map(function (e) {
            return Char.get(e[0]);
          })
        )
      );
    }),
    define_libfunc("list->string", 1, 1, function (e) {
      return (
        assert_list(e[0]),
        e[0]
          .to_array()
          .map(function (e) {
            return e.value;
          })
          .join("")
      );
    }),
    define_libfunc("string-for-each", 2, null, function (e) {
      var t = e.shift(),
        n = e;
      return (
        n.forEach(assert_string),
        Call.multi_foreach(n, {
          call: function (e) {
            return new Call(t, e);
          },
          finish: function () {
            return undef;
          },
        })
      );
    }),
    define_libfunc("string-copy", 1, 1, function (e) {
      return assert_string(e[0]), e[0];
    }),
    define_libfunc("vector?", 1, 1, function (e) {
      return isVector(e[0]);
    }),
    define_libfunc("make-vector", 1, 2, function (e) {
      assert_integer(e[0]);
      var t = new Array(e[0]);
      if (2 == e.length) for (var n = 0; n < e[0]; n++) t[n] = e[1];
      return t;
    }),
    define_libfunc("vector", 0, null, function (e) {
      return e;
    }),
    define_libfunc("vector-length", 1, 1, function (e) {
      return assert_vector(e[0]), e[0].length;
    }),
    define_libfunc("vector-ref", 2, 2, function (e) {
      return (
        assert_vector(e[0]),
        assert_integer(e[1]),
        assert_between(e[1], 0, e[0].length - 1),
        e[0][e[1]]
      );
    }),
    define_libfunc("vector-set!", 3, 3, function (e) {
      return (
        assert_vector(e[0]), assert_integer(e[1]), (e[0][e[1]] = e[2]), undef
      );
    }),
    define_libfunc("vector->list", 1, 1, function (e) {
      return assert_vector(e[0]), array_to_list(e[0]);
    }),
    define_libfunc("list->vector", 1, 1, function (e) {
      return assert_list(e[0]), e[0].to_array();
    }),
    define_libfunc("vector-fill!", 2, 2, function (e) {
      assert_vector(e[0]);
      for (var t = e[0], n = e[1], r = 0; r < t.length; r++) t[r] = n;
      return t;
    }),
    define_libfunc("vector-map", 2, null, function (e) {
      var t = e.shift(),
        n = e;
      n.forEach(assert_vector);
      var r = [];
      return Call.multi_foreach(n, {
        call: function (e) {
          return new Call(t, e);
        },
        result: function (e) {
          r.push(e);
        },
        finish: function () {
          return r;
        },
      });
    }),
    define_libfunc("vector-for-each", 2, null, function (e) {
      var t = e.shift(),
        n = e;
      return (
        n.forEach(assert_vector),
        Call.multi_foreach(n, {
          call: function (e) {
            return new Call(t, e);
          },
          finish: function () {
            return undef;
          },
        })
      );
    }),
    define_libfunc("apply", 2, null, function (e) {
      var t = e.shift(),
        n = e.pop(),
        r = e;
      return (r = r.concat(n.to_array())), new Call(t, r);
    }),
    define_syntax("call-with-current-continuation", function (e) {
      return new Pair(Sym("call/cc"), e.cdr);
    }),
    define_libfunc("values", 0, null, function (e) {
      return 1 == e.length ? e[0] : new Values$1(e);
    }),
    define_libfunc("call-with-values", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      return (
        assert_procedure(t),
        assert_procedure(n),
        new Call(t, [], function (e) {
          var t = e[0];
          return new Call(n, t instanceof Values$1 ? t.content : [t]);
        })
      );
    }),
    define_libfunc("dynamic-wind", 3, 3, function (e, t) {
      var n = e[0],
        r = e[1],
        i = e[2];
      return new Call(n, [], function () {
        return (
          t.push_dynamic_winder(n, i),
          new Call(r, [], function (e) {
            var n = e[0];
            return (
              t.pop_dynamic_winder(),
              new Call(i, [], function () {
                return n;
              })
            );
          })
        );
      });
    });
  var expand_qq = function (e, t) {
    if (e instanceof BiwaSymbol || e === nil) return List(Sym("quote"), e);
    if (e instanceof Pair) {
      var n = e.car;
      return n instanceof Pair && n.car === Sym("unquote-splicing")
        ? 1 == t
          ? e.cdr === nil
            ? e.car.cdr.car
            : List(Sym("append"), e.car.cdr.car, expand_qq(e.cdr, t))
          : List(
              Sym("cons"),
              List(
                Sym("list"),
                List(Sym("quote"), Sym("unquote-splicing")),
                expand_qq(e.car.cdr.car, t - 1)
              ),
              expand_qq(e.cdr, t)
            )
        : n === Sym("unquote")
        ? 1 == t
          ? e.cdr.car
          : List(
              Sym("list"),
              List(Sym("quote"), Sym("unquote")),
              expand_qq(e.cdr.car, t - 1)
            )
        : n === Sym("quasiquote")
        ? List(
            Sym("list"),
            List(Sym("quote"), Sym("quasiquote")),
            expand_qq(e.cdr.car, t + 1)
          )
        : List(Sym("cons"), expand_qq(e.car, t), expand_qq(e.cdr, t));
    }
    if (e instanceof Array) {
      for (var r = [[]], i = 0; i < e.length; i++)
        if (e[i] instanceof Pair && e[i].car === Sym("unquote-splicing"))
          if (1 == t) {
            ((a = List(Sym("list->vector"), e[i].cdr.car)).splicing = !0),
              r.push(a),
              r.push([]);
          } else {
            var a = List(
              Sym("cons"),
              List(
                Sym("list"),
                List(Sym("quote"), Sym("unquote-splicing")),
                expand_qq(e[i].car.cdr.car, t - 1)
              ),
              expand_qq(e[i].cdr, t)
            );
            r[r.length - 1].push(a);
          }
        else r[r.length - 1].push(expand_qq(e[i], t));
      var s = r.map(function (e) {
        return e.splicing ? e : Cons(Sym("vector"), array_to_list(e));
      });
      return 1 == s.length
        ? Cons(Sym("vector"), array_to_list(r[0]))
        : Cons(Sym("vector-append"), array_to_list(s));
    }
    return e;
  };
  define_syntax("quasiquote", function (e) {
    return expand_qq(e.cdr.car, 1);
  }),
    define_syntax("unquote", function (e) {
      throw new BiwaError("unquote(,) must be inside quasiquote(`)");
    }),
    define_syntax("unquote-splicing", function (e) {
      throw new BiwaError("unquote-splicing(,@) must be inside quasiquote(`)");
    }),
    define_libfunc("string-upcase", 1, 1, function (e) {
      return assert_string(e[0]), e[0].toUpperCase();
    }),
    define_libfunc("string-downcase", 1, 1, function (e) {
      return assert_string(e[0]), e[0].toLowerCase();
    });
  const make_string_ci_function = function (e) {
    return function (t) {
      assert_string(t[0]);
      for (var n = t[0].toUpperCase(), r = 1; r < t.length; r++)
        if ((assert_string(t[r]), !e(n, t[r].toUpperCase()))) return !1;
      return !0;
    };
  };
  define_libfunc(
    "string-ci=?",
    2,
    null,
    make_string_ci_function(function (e, t) {
      return e == t;
    })
  ),
    define_libfunc(
      "string-ci<?",
      2,
      null,
      make_string_ci_function(function (e, t) {
        return e < t;
      })
    ),
    define_libfunc(
      "string-ci>?",
      2,
      null,
      make_string_ci_function(function (e, t) {
        return e > t;
      })
    ),
    define_libfunc(
      "string-ci<=?",
      2,
      null,
      make_string_ci_function(function (e, t) {
        return e <= t;
      })
    ),
    define_libfunc(
      "string-ci>=?",
      2,
      null,
      make_string_ci_function(function (e, t) {
        return e >= t;
      })
    ),
    define_libfunc("find", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      return (
        assert_list(n),
        Call.foreach(n, {
          call: function (e) {
            return new Call(t, [e.car]);
          },
          result: function (e, t) {
            if (e) return t.car;
          },
          finish: function () {
            return !1;
          },
        })
      );
    }),
    define_libfunc("for-all", 2, null, function (e) {
      var t = e.shift(),
        n = e;
      n.forEach(assert_list);
      var r = !0;
      return Call.multi_foreach(n, {
        call: function (e) {
          return new Call(
            t,
            e.map(function (e) {
              return e.car;
            })
          );
        },
        result: function (e, t) {
          if (!1 === e) return !1;
          r = e;
        },
        finish: function () {
          return r;
        },
      });
    }),
    define_libfunc("exists", 2, null, function (e) {
      var t = e.shift(),
        n = e;
      return (
        n.forEach(assert_list),
        Call.multi_foreach(n, {
          call: function (e) {
            return new Call(
              t,
              e.map(function (e) {
                return e.car;
              })
            );
          },
          result: function (e, t) {
            if (!1 !== e) return e;
          },
          finish: function () {
            return !1;
          },
        })
      );
    }),
    define_libfunc("filter", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      assert_list(n);
      var r = [];
      return Call.foreach(n, {
        call: function (e) {
          return new Call(t, [e.car]);
        },
        result: function (e, t) {
          e && r.push(t.car);
        },
        finish: function () {
          return array_to_list(r);
        },
      });
    }),
    define_libfunc("partition", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      assert_list(n);
      var r = [],
        i = [];
      return Call.foreach(n, {
        call: function (e) {
          return new Call(t, [e.car]);
        },
        result: function (e, t) {
          e ? r.push(t.car) : i.push(t.car);
        },
        finish: function () {
          return new Values$1([array_to_list(r), array_to_list(i)]);
        },
      });
    }),
    define_libfunc("fold-left", 3, null, function (e) {
      var t = e.shift(),
        n = e.shift(),
        r = e;
      return (
        r.forEach(assert_list),
        Call.multi_foreach(r, {
          call: function (e) {
            var r = e.map(function (e) {
              return e.car;
            });
            return r.unshift(n), new Call(t, r);
          },
          result: function (e, t) {
            n = e;
          },
          finish: function () {
            return n;
          },
        })
      );
    }),
    define_libfunc("fold-right", 3, null, function (e) {
      var t = e.shift(),
        n = e.shift(),
        r = e.map(function (e) {
          return assert_list(e), array_to_list(e.to_array().reverse());
        });
      return Call.multi_foreach(r, {
        call: function (e) {
          var r = e.map(function (e) {
            return e.car;
          });
          return r.push(n), new Call(t, r);
        },
        result: function (e, t) {
          n = e;
        },
        finish: function () {
          return n;
        },
      });
    }),
    define_libfunc("remp", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      assert_list(n);
      var r = [];
      return Call.foreach(n, {
        call: function (e) {
          return new Call(t, [e.car]);
        },
        result: function (e, t) {
          e || r.push(t.car);
        },
        finish: function () {
          return array_to_list(r);
        },
      });
    });
  var make_remover = function (e) {
    return function (t) {
      var n = t[0],
        r = t[1];
      assert_list(r);
      var i = [];
      return Call.foreach(r, {
        call: function (t) {
          return new Call(TopEnv[e] || CoreEnv[e], [n, t.car]);
        },
        result: function (e, t) {
          e || i.push(t.car);
        },
        finish: function () {
          return array_to_list(i);
        },
      });
    };
  };
  define_libfunc("remove", 2, 2, make_remover("equal?")),
    define_libfunc("remv", 2, 2, make_remover("eqv?")),
    define_libfunc("remq", 2, 2, make_remover("eq?")),
    define_libfunc("memp", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      return (
        assert_list(n),
        Call.foreach(n, {
          call: function (e) {
            return new Call(t, [e.car]);
          },
          result: function (e, t) {
            if (e) return t;
          },
          finish: function () {
            return !1;
          },
        })
      );
    });
  var make_finder = function (e) {
    return function (t) {
      var n = t[0],
        r = t[1];
      return (
        assert_list(r),
        Call.foreach(r, {
          call: function (t) {
            return new Call(TopEnv[e] || CoreEnv[e], [n, t.car]);
          },
          result: function (e, t) {
            if (e) return t;
          },
          finish: function () {
            return !1;
          },
        })
      );
    };
  };
  define_libfunc("member", 2, 2, make_finder("equal?")),
    define_libfunc("memv", 2, 2, make_finder("eqv?")),
    define_libfunc("memq", 2, 2, make_finder("eq?")),
    define_libfunc("assp", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      return (
        assert_list(n),
        Call.foreach(n, {
          call: function (e) {
            if (e.car.car) return new Call(t, [e.car.car]);
            throw new BiwaError(
              "ass*: pair required but got " + to_write$1(e.car)
            );
          },
          result: function (e, t) {
            if (e) return t.car;
          },
          finish: function () {
            return !1;
          },
        })
      );
    });
  var make_assoc = function (e, t) {
    return function (n) {
      var r = n[0],
        i = n[1];
      return (
        assert_list(i),
        Call.foreach(i, {
          call: function (n) {
            if (!isPair(n.car))
              throw new BiwaError(
                e + ": pair required but got " + to_write$1(n.car)
              );
            var i = TopEnv[t] || CoreEnv[t];
            return new Call(i, [r, n.car.car]);
          },
          result: function (e, t) {
            if (e) return t.car;
          },
          finish: function () {
            return !1;
          },
        })
      );
    };
  };
  define_libfunc("assoc", 2, 2, make_assoc("assoc", "equal?")),
    define_libfunc("assv", 2, 2, make_assoc("assv", "eqv?")),
    define_libfunc("assq", 2, 2, make_assoc("assq", "eq?")),
    define_libfunc("cons*", 1, null, function (e) {
      if (1 == e.length) return e[0];
      var t = null;
      return (
        e.reverse().forEach(function (e) {
          t = t ? new Pair(e, t) : e;
        }),
        t
      );
    }),
    (function () {
      var e = function (e, n, r) {
          return e.length <= 1 ? r(e) : t(e, n, r, [[0, e.length, !1]], !1);
        },
        t = function (e, r, i, a, s) {
          for (;;) {
            var o = a[a.length - 1][0],
              u = a[a.length - 1][1],
              c = a[a.length - 1][2],
              l = u - o;
            if (l >= 2 && !s) a.push([o, o + (l >> 1), !0]);
            else {
              if (!c) {
                a.pop();
                var f = a[a.length - 1][0],
                  d = e.slice(f, o),
                  h = e.slice(o, u);
                return n(d, h, r, [], 0, 0, function (n) {
                  for (var s = 0; s < n.length; s++) e[f + s] = n[s];
                  return 1 == a.length ? i(e) : t(e, r, i, a, !0);
                });
              }
              a.pop();
              var p = a[a.length - 1][1];
              a.push([u, p, !1]), (s = !1);
            }
          }
        },
        n = function (e, t, r, i, a, s, o) {
          var u = e.length,
            c = t.length;
          if (a < u && s < c)
            return new Call(r, [t[s], e[a]], function (u) {
              return (
                u[0] ? (i.push(t[s]), (s += 1)) : (i.push(e[a]), (a += 1)),
                n(e, t, r, i, a, s, o)
              );
            });
          for (; a < u; ) i.push(e[a]), (a += 1);
          for (; s < c; ) i.push(t[s]), (s += 1);
          return o(i);
        },
        r = function (e, t) {
          return lt(e, t) ? -1 : lt(t, e) ? 1 : 0;
        };
      define_libfunc("list-sort", 1, 2, function (t) {
        return t[1]
          ? (assert_procedure(t[0]),
            assert_list(t[1]),
            e(t[1].to_array(), t[0], function (e) {
              return array_to_list(e);
            }))
          : (assert_list(t[0]), array_to_list(t[0].to_array().sort(r)));
      }),
        define_libfunc("vector-sort", 1, 2, function (t) {
          return t[1]
            ? (assert_procedure(t[0]),
              assert_vector(t[1]),
              e([...t[1]], t[0], function (e) {
                return e;
              }))
            : (assert_vector(t[0]), [...t[0]].sort(r));
        }),
        define_libfunc("vector-sort!", 1, 2, function (t) {
          return t[1]
            ? (assert_procedure(t[0]),
              assert_vector(t[1]),
              e(t[1], t[0], function (e) {
                return undef;
              }))
            : (assert_vector(t[0]), t[0].sort(r), undef);
        });
    })(),
    define_syntax("when", function (e) {
      var t = e.cdr.car,
        n = e.cdr.cdr;
      return new Pair(
        Sym("if"),
        new Pair(t, new Pair(new Pair(Sym("begin"), n), new Pair(undef, nil)))
      );
    }),
    define_syntax("unless", function (e) {
      var t = e.cdr.car,
        n = e.cdr.cdr;
      return new Pair(
        Sym("if"),
        new Pair(
          new Pair(Sym("not"), new Pair(t, nil)),
          new Pair(new Pair(Sym("begin"), n), new Pair(undef, nil))
        )
      );
    }),
    define_syntax("do", function (e) {
      if (!isPair(e.cdr)) throw new BiwaError("do: no variables of do");
      var t = e.cdr.car;
      if (!isPair(t))
        throw new BiwaError("do: variables must be given as a list");
      if (!isPair(e.cdr.cdr))
        throw new BiwaError("do: no resulting form of do");
      var n = e.cdr.cdr.car,
        r = e.cdr.cdr.cdr,
        i = gensym(),
        a = array_to_list(
          t.map(function (e) {
            var t = e.to_array();
            return List(t[0], t[1]);
          })
        ),
        s = n.car,
        o = new Pair(Sym("begin"), n.cdr),
        u = new Pair(
          i,
          array_to_list(
            t.map(function (e) {
              var t = e.to_array();
              return t[2] || t[0];
            })
          )
        ),
        c = new Pair(Sym("begin"), r).concat(List(u));
      return List(Sym("let"), i, a, List(Sym("if"), s, o, c));
    }),
    define_syntax("case-lambda", function (e) {
      if (!isPair(e.cdr))
        throw new BiwaError("case-lambda: at least 1 clause required");
      var t = e.cdr.to_array(),
        n = gensym(),
        r = List(Sym("raise"), "case-lambda: no matching clause found");
      return (
        t.reverse().forEach(function (e) {
          if (!isPair(e))
            throw new BiwaError(
              "case-lambda: clause must be a pair: " + to_write$1(e)
            );
          var t = e.car,
            i = e.cdr;
          if (t === nil)
            r = List(
              Sym("if"),
              List(Sym("null?"), n),
              new Pair(Sym("begin"), i),
              r
            );
          else if (isPair(t)) {
            var a = t.length(),
              s = t.last_cdr(),
              o = Sym(s === nil ? "=" : ">="),
              u = new Pair(Sym("lambda"), new Pair(t, i));
            r = List(
              Sym("if"),
              List(o, List(Sym("length"), n), a),
              List(Sym("apply"), u, n),
              r
            );
          } else {
            if (!isSymbol(t))
              throw new BiwaError(
                "case-lambda: invalid formals: " + to_write$1(t)
              );
            r = new Pair(Sym("let1"), new Pair(t, new Pair(n, i)));
          }
        }),
        List(Sym("lambda"), n, r)
      );
    }),
    define_syntax("define-record-type", function (e) {
      var t = e.cdr.car,
        n = e.cdr.cdr;
      if (isSymbol(t))
        var r = t,
          i = Sym("make-" + t.name),
          a = Sym(t.name + "?");
      else {
        assert_list(t);
        (r = t.car), (i = t.cdr.car), (a = t.cdr.cdr.car);
        assert_symbol(r), assert_symbol(i), assert_symbol(a);
      }
      var s,
        o = !1,
        u = !1,
        c = !1,
        l = !1,
        f = !1,
        d = !1,
        h = [];
      n.to_array().forEach(function (e) {
        switch (e.car) {
          case Sym("fields"):
            h = e.cdr.to_array().map(function (e, t) {
              if (isSymbol(e))
                return {
                  name: e,
                  idx: t,
                  mutable: !1,
                  accessor_name: null,
                  mutator_name: null,
                };
              switch ((assert_list(e), assert_symbol(e.car), e.car)) {
                case Sym("immutable"):
                  var n = e.cdr.car;
                  return (
                    assert_symbol(n),
                    isNil(e.cdr.cdr)
                      ? { name: n, idx: t, mutable: !1 }
                      : {
                          name: n,
                          idx: t,
                          mutable: !1,
                          accessor_name: e.cdr.cdr.car,
                        }
                  );
                case Sym("mutable"):
                  n = e.cdr.car;
                  return (
                    assert_symbol(n),
                    isNil(e.cdr.cdr)
                      ? { name: n, idx: t, mutable: !0 }
                      : {
                          name: n,
                          idx: t,
                          mutable: !0,
                          accessor_name: e.cdr.cdr.car,
                          mutator_name: e.cdr.cdr.cdr.car,
                        }
                  );
                default:
                  throw new BiwaError(
                    "define-record-type: field definition must start with `immutable' or `mutable' but got " +
                      inspect(e.car)
                  );
              }
            });
            break;
          case Sym("parent"):
            (s = e.cdr.car), assert_symbol(s);
            break;
          case Sym("protocol"):
            d = e.cdr.car;
            break;
          case Sym("sealed"):
            o = !!e.cdr.car;
            break;
          case Sym("opaque"):
            u = !!e.cdr.car;
            break;
          case Sym("nongenerative"):
            c = e.cdr.car;
            break;
          case Sym("parent-rtd"):
            (l = e.cdr.car), (f = e.cdr.cdr.car);
            break;
          default:
            throw new BiwaError(
              "define-record-type: unknown clause `" + to_write$1(e.car) + "'"
            );
        }
      }),
        s &&
          ((l = [Sym("record-type-descriptor"), s]),
          (f = [Sym("record-constructor-descriptor"), s]));
      var p = [Sym("record-type-descriptor"), r],
        m = [Sym("record-constructor-descriptor"), r],
        _ = h.map(function (e) {
          return List(Sym(e.mutable ? "mutable" : "immutable"), e.name);
        });
      _.is_vector = !0;
      var b = [
          Sym("make-record-type-descriptor"),
          [Sym("quote"), r],
          l,
          c,
          o,
          u,
          _,
        ],
        g = [Sym("make-record-constructor-descriptor"), Sym("__rtd"), f, d],
        y = [
          Sym("let*"),
          [
            [Sym("__rtd"), b],
            [Sym("__cd"), g],
          ],
          [
            Sym("_define-record-type"),
            [Sym("quote"), r],
            Sym("__rtd"),
            Sym("__cd"),
          ],
        ],
        v = h.map(function (e) {
          var t = e.accessor_name || Sym(r.name + "-" + e.name.name);
          return [Sym("define"), t, [Sym("record-accessor"), p, e.idx]];
        }),
        w = h.filter(function (e) {
          return e.mutable;
        });
      return (
        (w = w.map(function (e) {
          var t = e.mutator_name || Sym(r.name + "-" + e.name.name + "-set!");
          return [Sym("define"), t, [Sym("record-mutator"), p, e.idx]];
        })),
        deep_array_to_list(
          [
            Sym("begin"),
            y,
            [Sym("define"), i, [Sym("record-constructor"), m]],
            [Sym("define"), a, [Sym("record-predicate"), p]],
          ]
            .concat(v)
            .concat(w)
        )
      );
    }),
    define_libfunc("_define-record-type", 3, 3, function (e) {
      return (
        assert_symbol(e[0]),
        assert_record_td(e[1]),
        assert_record_cd(e[2]),
        Record.define_type(e[0].name, e[1], e[2]),
        undef
      );
    }),
    define_syntax("record-type-descriptor", function (e) {
      return deep_array_to_list([
        Sym("_record-type-descriptor"),
        [Sym("quote"), e.cdr.car],
      ]);
    }),
    define_libfunc("_record-type-descriptor", 1, 1, function (e) {
      assert_symbol(e[0]);
      var t = Record.get_type(e[0].name);
      if (t) return t.rtd;
      throw new BiwaError(
        "record-type-descriptor: unknown record type " + e[0].name
      );
    }),
    define_syntax("record-constructor-descriptor", function (e) {
      return deep_array_to_list([
        Sym("_record-constructor-descriptor"),
        [Sym("quote"), e.cdr.car],
      ]);
    }),
    define_libfunc("_record-constructor-descriptor", 1, 1, function (e) {
      assert_symbol(e[0]);
      var t = Record.get_type(e[0].name);
      if (t) return t.cd;
      throw new BiwaError(
        "record-constructor-descriptor: unknown record type " + e[0].name
      );
    }),
    define_libfunc("make-record-type-descriptor", 6, 6, function (e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        s = e[5];
      if ((assert_symbol(t), n && assert_record_td(n), r)) {
        assert_symbol(r);
        var o = Record.RTD.NongenerativeRecords[r.name];
        if (o) return o;
      }
      (i = !!i), (a = !!a), assert_vector(s);
      for (var u = 0; u < s.length; u++) {
        var c = s[u];
        assert_symbol(c.car, "mutability"),
          assert_symbol(c.cdr.car, "field name"),
          (s[u] = [c.cdr.car.name, c.car == Sym("mutable")]);
      }
      var l = new Record.RTD(t, n, r, i, a, s);
      return r && (Record.RTD.NongenerativeRecords[r.name] = l), l;
    }),
    define_libfunc("record-type-descriptor?", 1, 1, function (e) {
      return e[0] instanceof Record.RTD;
    }),
    define_libfunc("make-record-constructor-descriptor", 3, 3, function (e) {
      var t = e[0],
        n = e[1],
        r = e[2];
      return (
        assert_record_td(t),
        n && assert_record_cd(n),
        r && assert_procedure(r),
        new Record.CD(t, n, r)
      );
    }),
    define_libfunc("record-constructor", 1, 1, function (e) {
      var t = e[0];
      return assert_record_cd(t), t.record_constructor();
    }),
    define_libfunc("record-predicate", 1, 1, function (e) {
      var t = e[0];
      return (
        assert_record_td(t),
        function (e) {
          var n = e[0];
          if (n instanceof Record) {
            if (n.rtd === t) return !0;
            for (let e = n.rtd; e; e = e.parent_rtd) if (e == t) return !0;
            return !1;
          }
          return !1;
        }
      );
    }),
    define_libfunc("record-accessor", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      assert_record_td(t), assert_integer(n);
      for (var r = t.parent_rtd; r; r = r.parent_rtd) n += r.fields.length;
      return function (e) {
        var r = e[0],
          i =
            t.name.name +
            "-" +
            t.field_name(n) +
            ": " +
            to_write$1(r) +
            " is not a " +
            t.name.name;
        assert(isRecord(r), i);
        for (var a = !1, s = r.rtd; s; s = s.parent_rtd) s == t && (a = !0);
        return assert(a, i), r.get(n);
      };
    }),
    define_libfunc("record-mutator", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      assert_record_td(t), assert_integer(n);
      for (var r = t.parent_rtd; r; r = r.parent_rtd) n += r.fields.length;
      return function (e) {
        var r = e[0],
          i = e[1],
          a = t.field_name(n);
        assert_record(r),
          assert(
            r.rtd === t,
            a + ": " + to_write$1(r) + " is not a " + t.name.name
          ),
          assert(
            !r.rtd.sealed,
            a + ": " + t.name.name + " is sealed (can't mutate)"
          ),
          r.set(n, i);
      };
    }),
    define_libfunc("record?", 1, 1, function (e) {
      var t = e[0];
      return !!isRecord(t) && !t.rtd.opaque;
    }),
    define_libfunc("record-rtd", 1, 1, function (e) {
      return assert_record(e[0]), e[0].rtd;
    }),
    define_libfunc("record-type-name", 1, 1, function (e) {
      return assert_record_td(e[0]), e[0].name;
    }),
    define_libfunc("record-type-parent", 1, 1, function (e) {
      return assert_record_td(e[0]), e[0].parent_rtd;
    }),
    define_libfunc("record-type-uid", 1, 1, function (e) {
      return assert_record_td(e[0]), e[0].uid;
    }),
    define_libfunc("record-type-generative?", 1, 1, function (e) {
      return assert_record_td(e[0]), e[0].generative;
    }),
    define_libfunc("record-type-sealed?", 1, 1, function (e) {
      return assert_record_td(e[0]), e[0].sealed;
    }),
    define_libfunc("record-type-opaque?", 1, 1, function (e) {
      return assert_record_td(e[0]), e[0].opaque;
    }),
    define_libfunc("record-type-field-names", 1, 1, function (e) {
      return (
        assert_record_td(e[0]),
        e[0].fields.map(function (e) {
          return e.name;
        })
      );
    }),
    define_libfunc("record-field-mutable?", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      assert_record_td(e[0]), assert_integer(n);
      for (var r = t.parent_rtd; r; r = r.parent_rtd) n += r.fields.length;
      return e[0].fields[n].mutable;
    }),
    define_libfunc("raise", 1, 1, function (e) {
      throw new UserError(to_write$1(e[0]));
    }),
    define_libfunc("port?", 1, 1, function (e) {
      return e[0] instanceof Port;
    }),
    define_libfunc("textual-port?", 1, 1, function (e) {
      return assert_port(e[0]), !e[0].is_binary;
    }),
    define_libfunc("binary-port?", 1, 1, function (e) {
      return assert_port(e[0]), e[0].is_binary;
    }),
    define_libfunc("close-port", 1, 1, function (e) {
      return assert_port(e[0]), e[0].close(), undef;
    }),
    define_libfunc("call-with-port", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      return (
        assert_port(t),
        assert_closure(n),
        new Call(n, [t], function (e) {
          return t.close(), e[0];
        })
      );
    }),
    define_libfunc("call-with-string-output-port", 1, 1, function (e) {
      var t = e[0];
      assert_procedure(t);
      var n = new Port.StringOutput();
      return new Call(t, [n], function (e) {
        return n.close(), n.output_string();
      });
    }),
    define_libfunc("put-char", 2, 2, function (e) {
      return (
        assert_port(e[0]), assert_char(e[1]), e[0].put_string(e[1].value), undef
      );
    }),
    define_libfunc("put-string", 2, 2, function (e) {
      return (
        assert_port(e[0]), assert_string(e[1]), e[0].put_string(e[1]), undef
      );
    }),
    define_libfunc("put-datum", 2, 2, function (e) {
      return assert_port(e[0]), e[0].put_string(to_write$1(e[1])), undef;
    }),
    define_libfunc("eof-object", 0, 0, function (e) {
      return eof;
    }),
    define_libfunc("eof-object?", 1, 1, function (e) {
      return e[0] === eof;
    }),
    define_libfunc("input-port?", 1, 1, function (e) {
      return assert_port(e[0]), e[0].is_input;
    }),
    define_libfunc("output-port?", 1, 1, function (e) {
      return assert_port(e[0]), e[0].is_output;
    }),
    define_libfunc("current-input-port", 0, 0, function (e) {
      return Port.current_input;
    }),
    define_libfunc("current-output-port", 0, 0, function (e) {
      return Port.current_output;
    }),
    define_libfunc("current-error-port", 0, 0, function (e) {
      return Port.current_error;
    }),
    define_libfunc("close-input-port", 1, 1, function (e) {
      if ((assert_port(e[0]), !e[0].is_input))
        throw new BiwaError("close-input-port: port is not input port");
      return e[0].close(), undef;
    }),
    define_libfunc("close-output-port", 1, 1, function (e) {
      if ((assert_port(e[0]), !e[0].is_output))
        throw new BiwaError("close-output-port: port is not output port");
      return e[0].close(), undef;
    }),
    define_libfunc("read", 0, 1, function (e) {
      var t = e[0] || Port.current_input;
      return (
        assert_port(t),
        t.get_string(function (e) {
          return Interpreter.read(e);
        })
      );
    }),
    define_libfunc("write-char", 1, 2, function (e) {
      var t = e[1] || Port.current_output;
      return assert_char(e[0]), t.put_string(e[0].value), undef;
    }),
    define_libfunc("newline", 0, 1, function (e) {
      return (e[0] || Port.current_output).put_string("\n"), undef;
    }),
    define_libfunc("display", 1, 2, function (e) {
      return (e[1] || Port.current_output).put_string(to_display(e[0])), undef;
    }),
    define_libfunc("write", 1, 2, function (e) {
      var t = e[1] || Port.current_output;
      return assert_port(t), t.put_string(to_write$1(e[0])), undef;
    }),
    define_libfunc("write-shared", 1, 2, function (e) {
      var t = e[1] || Port.current_output;
      return assert_port(t), t.put_string(write_shared(e[0])), undef;
    }),
    define_libfunc("write-simple", 1, 2, function (e) {
      var t = e[1] || Port.current_output;
      return assert_port(t), t.put_string(write_simple(e[0])), undef;
    }),
    define_libfunc("bitwise-not", 1, 1, function (e) {
      return ~e[0];
    }),
    define_libfunc("bitwise-and", 1, null, function (e) {
      return e.reduce(function (e, t) {
        return e & t;
      });
    }),
    define_libfunc("bitwise-ior", 1, null, function (e) {
      return e.reduce(function (e, t) {
        return e | t;
      });
    }),
    define_libfunc("bitwise-xor", 1, null, function (e) {
      return e.reduce(function (e, t) {
        return e ^ t;
      });
    }),
    define_libfunc("bitwise-if", 3, 3, function (e) {
      return (e[0] & e[1]) | (~e[0] & e[2]);
    }),
    define_libfunc("bitwise-bit-count", 1, 1, function (e) {
      for (var t = Math.abs(e[0]), n = 0; 0 != t; t >>= 1) 1 & t && n++;
      return n;
    }),
    define_libfunc("bitwise-length", 1, 1, function (e) {
      for (var t = Math.abs(e[0]), n = 0; 0 != t; t >>= 1) n++;
      return n;
    }),
    define_libfunc("bitwise-first-bit-set", 1, 1, function (e) {
      var t = Math.abs(e[0]),
        n = 0;
      if (0 == t) return -1;
      for (; 0 != t; t >>= 1) {
        if (1 & t) return n;
        n++;
      }
    }),
    define_libfunc("bitwise-bit-set?", 2, 2, function (e) {
      return !!(e[0] & (1 << e[1]));
    }),
    define_libfunc("bitwise-copy-bit", 3, 3, function (e) {
      var t = 1 << e[1];
      return (t & (e[2] << e[1])) | (~t & e[0]);
    }),
    define_libfunc("bitwise-bit-field", 3, 3, function (e) {
      return (~(-1 << e[2]) & e[0]) >> e[1];
    }),
    define_libfunc("bitwise-copy-bit-field", 4, 4, function (e) {
      var t = e[0],
        n = e[1],
        r = ~(-1 << e[2]) & (-1 << n);
      return (r & (e[3] << n)) | (~r & t);
    }),
    define_libfunc("bitwise-arithmetic-shift", 2, 2, function (e) {
      return e[1] >= 0 ? e[0] << e[1] : e[0] >> -e[1];
    }),
    define_libfunc("bitwise-arithmetic-shift-left", 2, 2, function (e) {
      return e[0] << e[1];
    }),
    define_libfunc("bitwise-arithmetic-shift-right", 2, 2, function (e) {
      return e[0] >> e[1];
    }),
    define_libfunc("bitwise-rotate-bit-field", 4, 4, function (e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = r - n;
      if (a <= 0) return t;
      var s = (~(-1 << r) & t) >> n,
        o = ~(-1 << r) & (-1 << n);
      return (o & (((s << (i %= a)) | (s >> (a - i))) << n)) | (~o & t);
    }),
    define_libfunc("bitwise-reverse-bit-field", 3, 3, function (e) {
      for (
        var t = e[0],
          n = e[0],
          r = e[1],
          i = e[2],
          a = (~(-1 << i) & n) >> r,
          s = 0;
        s < i - r;
        s++, a >>= 1
      ) {
        var o = i - 1 - s,
          u = 1 << o;
        t = (u & ((1 & a) << o)) | (~u & t);
      }
      return t;
    }),
    define_libfunc("make-eq-hashtable", 0, 1, function (e) {
      return new Hashtable(Hashtable.eq_hash, Hashtable.eq_equiv);
    }),
    define_libfunc("make-eqv-hashtable", 0, 1, function (e) {
      return new Hashtable(Hashtable.eqv_hash, Hashtable.eqv_equiv);
    }),
    define_libfunc("make-hashtable", 2, 3, function (e) {
      return (
        assert_procedure(e[0]),
        assert_procedure(e[1]),
        new Hashtable(e[0], e[1])
      );
    }),
    define_libfunc("hashtable?", 1, 1, function (e) {
      return e[0] instanceof Hashtable;
    }),
    define_libfunc("hashtable-size", 1, 1, function (e) {
      return assert_hashtable(e[0]), e[0].keys().length;
    });
  const find_hash_pair = function (e, t, n) {
    return new Call(e.hash_proc, [t], function (r) {
      var i = r[0],
        a = e.candidate_pairs(i);
      return a
        ? Call.foreach(a, {
            call: function (n) {
              return new Call(e.equiv_proc, [t, n[0]]);
            },
            result: function (e, t) {
              if (e) return n.on_found(t, i);
            },
            finish: function () {
              return n.on_not_found(i);
            },
          })
        : n.on_not_found(i);
    });
  };
  define_libfunc("hashtable-ref", 3, 3, function (e) {
    var t = e[0],
      n = e[1],
      r = e[2];
    return (
      assert_hashtable(t),
      find_hash_pair(t, n, {
        on_found: function (e) {
          return e[1];
        },
        on_not_found: function (e) {
          return r;
        },
      })
    );
  }),
    define_libfunc("hashtable-set!", 3, 3, function (e) {
      var t = e[0],
        n = e[1],
        r = e[2];
      return (
        assert_hashtable(t),
        assert(t.mutable, "hashtable is not mutable"),
        find_hash_pair(t, n, {
          on_found: function (e) {
            return (e[1] = r), undef;
          },
          on_not_found: function (e) {
            return t.add_pair(e, n, r), undef;
          },
        })
      );
    }),
    define_libfunc("hashtable-delete!", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      return (
        assert_hashtable(t),
        assert(t.mutable, "hashtable is not mutable"),
        find_hash_pair(t, n, {
          on_found: function (e, n) {
            return t.remove_pair(n, e), undef;
          },
          on_not_found: function (e) {
            return undef;
          },
        })
      );
    }),
    define_libfunc("hashtable-contains?", 2, 2, function (e) {
      var t = e[0],
        n = e[1];
      return (
        assert_hashtable(t),
        find_hash_pair(t, n, {
          on_found: function (e) {
            return !0;
          },
          on_not_found: function (e) {
            return !1;
          },
        })
      );
    }),
    define_libfunc("hashtable-update!", 4, 4, function (e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        i = e[3];
      return (
        assert_hashtable(t),
        assert(t.mutable, "hashtable is not mutable"),
        assert_procedure(r),
        find_hash_pair(t, n, {
          on_found: function (e, t) {
            return new Call(r, [e[1]], function (t) {
              return (e[1] = t[0]), undef;
            });
          },
          on_not_found: function (e) {
            return new Call(r, [i], function (r) {
              return t.add_pair(e, n, r[0]), undef;
            });
          },
        })
      );
    }),
    define_libfunc("hashtable-copy", 1, 2, function (e) {
      var t = void 0 !== e[1] && !!e[1];
      return assert_hashtable(e[0]), e[0].create_copy(t);
    }),
    define_libfunc("hashtable-clear!", 0, 1, function (e) {
      return (
        assert_hashtable(e[0]),
        assert(e[0].mutable, "hashtable is not mutable"),
        e[0].clear(),
        undef
      );
    }),
    define_libfunc("hashtable-keys", 1, 1, function (e) {
      return assert_hashtable(e[0]), e[0].keys();
    }),
    define_libfunc("hashtable-entries", 1, 1, function (e) {
      return assert_hashtable(e[0]), new Values$1([e[0].keys(), e[0].values()]);
    }),
    define_libfunc("hashtable-equivalence-function", 1, 1, function (e) {
      return assert_hashtable(e[0]), e[0].equiv_proc;
    }),
    define_libfunc("hashtable-hash-function", 1, 1, function (e) {
      return assert_hashtable(e[0]), e[0].hash_proc;
    }),
    define_libfunc("hashtable-mutable?", 1, 1, function (e) {
      return assert_hashtable(e[0]), e[0].mutable;
    }),
    define_libfunc("equal-hash", 0, 0, function (e) {
      return Hashtable.equal_hash;
    }),
    define_libfunc("string-hash", 0, 0, function (e) {
      return Hashtable.string_hash;
    }),
    define_libfunc("string-ci-hash", 0, 0, function (e) {
      return Hashtable.string_ci_hash;
    }),
    define_libfunc("symbol-hash", 0, 0, function (e) {
      return Hashtable.symbol_hash;
    }),
    define_libfunc("make-enumeration", 1, 1, function (e) {
      assert_list(e[0]);
      var t = e[0].to_array();
      return new Enumeration.EnumType(t).universe();
    }),
    define_libfunc("enum-set-universe", 1, 1, function (e) {
      return assert_enum_set(e[0]), e[0].enum_type.universe();
    }),
    define_libfunc("enum-set-indexer", 1, 1, function (e) {
      return assert_enum_set(e[0]), e[0].enum_type.indexer();
    }),
    define_libfunc("enum-set-constructor", 1, 1, function (e) {
      return assert_enum_set(e[0]), e[0].enum_type.constructor_();
    }),
    define_libfunc("enum-set->list", 1, 1, function (e) {
      return assert_enum_set(e[0]), e[0].symbol_list();
    }),
    define_libfunc("enum-set-member?", 2, 2, function (e) {
      return assert_symbol(e[0]), assert_enum_set(e[1]), e[1].is_member(e[0]);
    }),
    define_libfunc("enum-set-subset?", 2, 2, function (e) {
      return assert_enum_set(e[0]), assert_enum_set(e[1]), e[0].is_subset(e[1]);
    }),
    define_libfunc("enum-set=?", 2, 2, function (e) {
      return assert_enum_set(e[0]), assert_enum_set(e[1]), e[0].equal_to(e[1]);
    }),
    define_libfunc("enum-set-union", 2, 2, function (e) {
      return (
        assert_enum_set(e[0]),
        assert_enum_set(e[1]),
        assert(
          e[0].enum_type === e[1].enum_type,
          "two enum-sets must be the same enum-type",
          "enum-set-union"
        ),
        e[0].union(e[1])
      );
    }),
    define_libfunc("enum-set-intersection", 2, 2, function (e) {
      return (
        assert_enum_set(e[0]), assert_enum_set(e[1]), e[0].intersection(e[1])
      );
    }),
    define_libfunc("enum-set-difference", 2, 2, function (e) {
      return (
        assert_enum_set(e[0]), assert_enum_set(e[1]), e[0].difference(e[1])
      );
    }),
    define_libfunc("enum-set-complement", 1, 1, function (e) {
      return assert_enum_set(e[0]), e[0].complement();
    }),
    define_libfunc("enum-set-projection", 2, 2, function (e) {
      return (
        assert_enum_set(e[0]), assert_enum_set(e[1]), e[0].projection(e[1])
      );
    }),
    define_syntax("define-enumeration", function (e) {
      var t = e.cdr.car;
      assert(
        isSymbol(t),
        "expected symbol for type_name",
        "define-enumeration"
      ),
        (t = t.name);
      var n = e.cdr.cdr.car;
      assert(
        isList(n),
        "expected list of symbol for members",
        "define-enumeration"
      ),
        (n = n.to_array());
      var r = e.cdr.cdr.cdr.car;
      assert(
        isSymbol(r),
        "expected symbol for constructor_name",
        "define-enumeration"
      ),
        (r = r.name);
      var i = new Enumeration.EnumType(n);
      define_syntax(t, function (e) {
        assert(!isNil(e.cdr), "an argument is needed", t);
        var n = e.cdr.car;
        return (
          assert_symbol(n, t),
          assert(
            i.members.includes(n),
            n.name +
              " is not included in the universe: " +
              to_write$1(i.members),
            t
          ),
          List(Sym("quote"), n)
        );
      }),
        define_syntax(r, function (e) {
          assert_list(e.cdr, r);
          var t = e.cdr.to_array();
          return (
            t.forEach(function (e) {
              assert_symbol(e, r),
                assert(
                  i.members.includes(e),
                  e.name +
                    " is not included in the universe: " +
                    to_write$1(i.members),
                  r
                );
            }),
            new Enumeration.EnumSet(i, t)
          );
        });
    }),
    define_libfunc("eval", 1, 1, function (e, t) {
      var n = e[0];
      return new Interpreter(t).evaluate(to_write$1(n));
    }),
    define_syntax("delay", function (e) {
      if (e.cdr === nil) throw new BiwaError("malformed delay: no argument");
      if (e.cdr.cdr !== nil)
        throw new BiwaError(
          "malformed delay: too many arguments: " + write_ss(e)
        );
      var t = e.cdr.car;
      return new Pair(
        Sym(" procedure->promise"),
        new Pair(
          new Pair(
            Sym("lambda"),
            new Pair(
              nil,
              new Pair(new Pair(Sym("make-promise"), new Pair(t, nil)), nil)
            )
          )
        )
      );
    }),
    define_syntax("delay-force", function (e) {
      if (e.cdr === nil)
        throw new BiwaError("malformed delay-force: no argument");
      if (e.cdr.cdr !== nil)
        throw new BiwaError(
          "malformed delay-force: too many arguments: " + write_ss(e)
        );
      var t = e.cdr.car;
      return new Pair(
        Sym(" procedure->promise"),
        new Pair(new Pair(Sym("lambda"), new Pair(nil, new Pair(t, nil))), nil)
      );
    });
  var force = function (e) {
    return e.is_done()
      ? e.value()
      : new Call(e.thunk(), [], function (t) {
          assert_promise(t[0]);
          var n = t[0];
          return e.is_done() ? e.value() : (e.update_with(n), force(n));
        });
  };
  define_libfunc("force", 1, 1, function (e, t) {
    return assert_promise(e[0]), force(e[0]);
  }),
    define_libfunc("promise?", 1, 1, function (e, t) {
      return e[0] instanceof BiwaPromise;
    }),
    define_libfunc("make-promise", 1, 1, function (e, t) {
      var n = e[0];
      return n instanceof BiwaPromise ? n : BiwaPromise.done(n);
    }),
    define_libfunc(" procedure->promise", 1, 1, function (e, t) {
      return assert_procedure(e[0]), BiwaPromise.fresh(e[0]);
    }),
    define_libfunc("make-parameter", 1, 2, function (e, t) {
      let n;
      const r = e[1],
        i = function (e) {
          if (0 == e.length) return n;
          {
            const t = n;
            return r
              ? new Call(r, [e[0]], (e) => ((n = e[0]), t))
              : ((n = e[0]), t);
          }
        };
      if (r) return new Call(r, [e[0]], (e) => ((n = e), i));
      {
        const t = e[0];
        return (n = t), i;
      }
    }),
    define_syntax("parameterize", function (e) {
      const t = e.cdr.car.to_array(),
        n = e.cdr.cdr,
        r = t.map(() => gensym()),
        i = List(...t.map((e, t) => List(r[t], e.cdr.car))),
        a = Cons(
          Sym("begin"),
          List(...t.map((e, t) => List(Sym("set!"), r[t], List(e.car, r[t]))))
        ),
        s = List(Sym("lambda"), nil, a),
        o = Cons(Sym("lambda"), Cons(nil, n)),
        u = List(Sym("lambda"), nil, a);
      return List(Sym("let"), i, List(Sym("dynamic-wind"), s, o, u));
    }),
    define_libfunc("iota", 1, 3, function (e) {
      var t = e[0],
        n = e[1] || 0,
        r = void 0 === e[2] ? 1 : e[2];
      assert_integer(t), assert_number(n), assert_number(r);
      for (var i = [], a = n, s = 0; s < t; s++) i.push(a), (a += r);
      return array_to_list(i);
    });
  var copy_pair = function (e) {
    var t = isPair(e.car) ? copy_pair(e.car) : e.car,
      n = isPair(e.cdr) ? copy_pair(e.cdr) : e.cdr;
    return new Pair(t, n);
  };
  define_libfunc("list-copy", 1, 1, function (e) {
    return isPair(e[0]) ? copy_pair(e[0]) : nil;
  }),
    define_libfunc("open-input-string", 1, 1, function (e) {
      return assert_string(e[0]), new Port.StringInput(e[0]);
    }),
    define_libfunc("open-output-string", 0, 0, function (e) {
      return new Port.StringOutput();
    }),
    define_libfunc("get-output-string", 1, 1, function (e) {
      if ((assert_port(e[0]), !(e[0] instanceof Port.StringOutput)))
        throw new Error(
          "get-output-string: port must be made by 'open-output-string'"
        );
      return e[0].output_string();
    }),
    define_syntax("receive", function (e) {
      assert(isPair(e.cdr), "missing formals", "receive");
      var t = e.cdr.car;
      assert(isPair(e.cdr.cdr), "missing expression", "receive");
      var n = e.cdr.cdr.car,
        r = e.cdr.cdr.cdr;
      return deep_array_to_list([
        Sym("call-with-values"),
        [Sym("lambda"), nil, n],
        new Pair(Sym("lambda"), new Pair(t, r)),
      ]);
    }),
    define_libfunc("current-date", 0, 1, function (e) {
      return new Date();
    }),
    define_libfunc("date?", 1, 1, function (e) {
      return e[0] instanceof Date;
    }),
    define_libfunc("date-nanosecond", 1, 1, function (e) {
      return assert_date(e[0]), 1e6 * e[0].getMilliseconds();
    }),
    define_libfunc("date-millisecond", 1, 1, function (e) {
      return assert_date(e[0]), e[0].getMilliseconds();
    }),
    define_libfunc("date-second", 1, 1, function (e) {
      return assert_date(e[0]), e[0].getSeconds();
    }),
    define_libfunc("date-minute", 1, 1, function (e) {
      return assert_date(e[0]), e[0].getMinutes();
    }),
    define_libfunc("date-hour", 1, 1, function (e) {
      return assert_date(e[0]), e[0].getHours();
    }),
    define_libfunc("date-day", 1, 1, function (e) {
      return assert_date(e[0]), e[0].getDate();
    }),
    define_libfunc("date-month", 1, 1, function (e) {
      return assert_date(e[0]), e[0].getMonth() + 1;
    }),
    define_libfunc("date-year", 1, 1, function (e) {
      return assert_date(e[0]), e[0].getFullYear();
    }),
    define_libfunc("date-week-day", 1, 1, function (e) {
      return assert_date(e[0]), e[0].getDay();
    });
  const date_names = {
      weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      full_weekday: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      month: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      full_month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Octorber",
        "November",
        "December",
      ],
    },
    date2string = function (e, t) {
      var n = function (e) {
          return e < 10 ? "0" + e : "" + e;
        },
        r = function (e) {
          return e < 10 ? " " + e : "" + e;
        },
        i = {
          a: function (e) {
            return date_names.weekday[e.getDay()];
          },
          A: function (e) {
            return date_names.full_weekday[e.getDay()];
          },
          b: function (e) {
            return date_names.month[e.getMonth()];
          },
          B: function (e) {
            return date_names.full_month[e.getMonth()];
          },
          c: function (e) {
            return e.toString();
          },
          d: function (e) {
            return n(e.getDate());
          },
          D: function (e) {
            return i.d(e) + i.m(e) + i.y(e);
          },
          e: function (e) {
            return r(e.getDate());
          },
          f: function (e) {
            return e.getSeconds() + e.getMilliseconds() / 1e3;
          },
          h: function (e) {
            return date_names.month[e.getMonth()];
          },
          H: function (e) {
            return n(e.getHours());
          },
          I: function (e) {
            var t = e.getHours();
            return n(t < 13 ? t : t - 12);
          },
          j: function (e) {
            throw new Bug("not implemented: day of year");
          },
          k: function (e) {
            return r(e.getHours());
          },
          l: function (e) {
            var t = e.getHours();
            return r(t < 13 ? t : t - 12);
          },
          m: function (e) {
            return n(e.getMonth() + 1);
          },
          M: function (e) {
            return n(e.getMinutes());
          },
          n: function (e) {
            return "\n";
          },
          N: function (e) {
            throw new Bug("not implemented: nanoseconds");
          },
          p: function (e) {
            return e.getHours() < 13 ? "AM" : "PM";
          },
          r: function (e) {
            return i.I(e) + ":" + i.M(e) + ":" + i.S(e) + " " + i.p(e);
          },
          s: function (e) {
            return Math.floor(e.getTime() / 1e3);
          },
          S: function (e) {
            return n(e.getSeconds());
          },
          t: function (e) {
            return "\t";
          },
          T: function (e) {
            return i.H(e) + ":" + i.M(e) + ":" + i.S(e);
          },
          U: function (e) {
            throw new Bug("not implemented: weeknum(0~, Sun)");
          },
          V: function (e) {
            return (function (e) {
              var t = new Date(e.getFullYear(), 0, 4),
                n = new Date(e.getFullYear(), 0, 4);
              return (
                t.getDay() >= date_names.weekday.indexOf("Thu")
                  ? n.setDate(t.getDate() - (t.getDay() + 1))
                  : n.setDate(t.getDate() + (7 - t.getDay() + 1)),
                Math.ceil((e - n) / 864e5 / 7)
              );
            })(e);
          },
          w: function (e) {
            return e.getDay();
          },
          W: function (e) {
            throw new Bug("not implemented: weeknum(0~, Mon)");
          },
          x: function (e) {
            throw new Bug("not implemented: weeknum(1~, Mon)");
          },
          X: function (e) {
            return i.Y(e) + "/" + i.m(e) + "/" + i.d(e);
          },
          y: function (e) {
            return e.getFullYear() % 100;
          },
          Y: function (e) {
            return e.getFullYear();
          },
          z: function (e) {
            throw new Bug("not implemented: time-zone");
          },
          Z: function (e) {
            throw new Bug("not implemented: symbol time zone");
          },
          1: function (e) {
            throw new Bug("not implemented: ISO-8601 year-month-day format");
          },
          2: function (e) {
            throw new Bug(
              "not implemented: ISO-8601 hour-minute-second-timezone format"
            );
          },
          3: function (e) {
            throw new Bug(
              "not implemented: ISO-8601 hour-minute-second format"
            );
          },
          4: function (e) {
            throw new Bug(
              "not implemented: ISO-8601 year-month-day-hour-minute-second-timezone format"
            );
          },
          5: function (e) {
            throw new Bug(
              "not implemented: ISO-8601 year-month-day-hour-minute-second format"
            );
          },
        };
      return t.replace(/~([\w1-5~])/g, function (t, n) {
        var r = i[n];
        return r ? r(e) : "~" == n ? "~" : n;
      });
    };
  define_libfunc("date->string", 1, 2, function (e) {
    return (
      assert_date(e[0]),
      e[1] ? (assert_string(e[1]), date2string(e[0], e[1])) : e[0].toString()
    );
  }),
    define_libfunc("parse-date", 1, 1, function (e) {
      return assert_string(e[0]), new Date(Date.parse(e[0]));
    }),
    define_libfunc("random-integer", 1, 1, function (e) {
      var t = e[0];
      if ((assert_integer(t), t < 0))
        throw new Error("random-integer: the argument must be >= 0");
      return Math.floor(Math.random() * e[0]);
    }),
    define_libfunc("random-real", 0, 0, function (e) {
      return Math.random();
    }),
    define_libfunc("format", 1, null, function (e) {
      if ("string" == typeof e[0])
        var t = null,
          n = e.shift();
      else if (!1 === e[0]) {
        e.shift();
        (t = null), (n = e.shift());
      } else if (!0 === e[0]) {
        e.shift();
        (t = Port.current_output), (n = e.shift());
      } else {
        (t = e.shift()), (n = e.shift());
        assert_port(t);
      }
      var r = n
        .replace(/~[as]/g, function (t) {
          return (
            assert(e.length > 0, "insufficient number of arguments", "format"),
            "~a" == t ? to_display(e.shift()) : to_write$1(e.shift())
          );
        })
        .replace(/~%/, "\n")
        .replace(/~~/, "~");
      return t ? (t.put_string(r), undef) : r;
    });
  const user_write_ss = function (e) {
    return Console.puts(write_shared(e[0]), !0), undef;
  };
  define_libfunc("write/ss", 1, 2, user_write_ss),
    define_libfunc("write-with-shared-structure", 1, 2, user_write_ss),
    define_libfunc("write*", 1, 2, user_write_ss),
    define_libfunc("vector-append", 2, null, function (e) {
      var t = [];
      return t.concat.apply(t, e);
    }),
    define_libfunc("vector-copy", 1, 1, function (e) {
      return assert_vector(e[0]), [...e[0]];
    });
  var BiwaScheme$1 = {
    TopEnv: TopEnv,
    CoreEnv: CoreEnv,
    nil: nil,
    undef: undef,
    max_trace_size: max_trace_size,
    suppress_deprecation_warning: suppress_deprecation_warning,
    Version: VERSION,
    VERSION: VERSION,
    GitCommit: GitCommit,
    eq: eq,
    eqv: eqv,
    equal: equal,
    isNil: isNil,
    isUndef: isUndef,
    isBoolean: isBoolean,
    isString: isString,
    isSymbol: isSymbol,
    isPort: isPort,
    isPair: isPair,
    isList: isList,
    isVector: isVector,
    isHashtable: isHashtable,
    isMutableHashtable: isMutableHashtable,
    isProcedure: isProcedure,
    lt: lt,
    to_write: to_write$1,
    to_display: to_display,
    inspect: inspect,
    write_ss: write_shared,
    to_write_ss: write_shared,
    Call: Call,
    Char: Char,
    isChar: isChar,
    Closure: Closure,
    isClosure: isClosure,
    Compiler: Compiler,
    Enumeration: Enumeration,
    isEnumSet: isEnumSet,
    Error: BiwaError,
    Bug: Bug,
    UserError: UserError,
    Hashtable: Hashtable,
    Interpreter: Interpreter,
    Complex: Complex,
    Rational: Rational$1,
    isNumber: isNumber,
    isComplex: isComplex,
    isReal: isReal,
    isRational: isRational,
    isInteger: isInteger,
    Pair: Pair,
    List: List,
    array_to_list: array_to_list,
    deep_array_to_list: deep_array_to_list,
    Cons: Cons,
    Parser: Parser,
    Pause: Pause,
    Port: Port,
    eof: eof,
    Promise: BiwaPromise,
    isPromise: isPromise,
    Record: Record,
    isRecord: isRecord,
    isRecordTD: isRecordTD,
    isRecordCD: isRecordCD,
    Set: BiwaSet,
    Symbol: BiwaSymbol,
    Sym: Sym,
    gensym: gensym,
    Syntax: Syntax,
    Values: Values$1,
    VMCode: VMCode,
    define_libfunc: define_libfunc,
    define_scmfunc: define_scmfunc,
    parse_fraction: parse_fraction,
    is_valid_integer_notation: is_valid_integer_notation,
    parse_integer: parse_integer,
    is_valid_float_notation: is_valid_float_notation,
    parse_float: parse_float,
    assert_number: assert_number,
    assert_integer: assert_integer,
    assert_real: assert_real,
    assert_between: assert_between,
    assert_string: assert_string,
    assert_char: assert_char,
    assert_symbol: assert_symbol,
    assert_port: assert_port,
    assert_pair: assert_pair,
    assert_list: assert_list,
    assert_vector: assert_vector,
    assert_hashtable: assert_hashtable,
    assert_mutable_hashtable: assert_mutable_hashtable,
    assert_promise: assert_promise,
    assert_function: assert_function,
    assert_closure: assert_closure,
    assert_procedure: assert_procedure,
    assert_date: assert_date,
    assert: assert,
  };
  (Console.puts = function (e, t) {
    Port.current_output.put_string(e + (t ? "" : "\n"));
  }),
    (Console.p = function () {
      Port.current_output.put_string(
        "p> " + Array.arrayFrom(arguments).map(inspect).join(" ")
      );
    });
  const current_input = new Port.CustomInput(function (e) {
      const t = document.querySelector("#bs-console"),
        n = document.createElement("form");
      (n.innerHTML =
        "<input id='webscheme-read-line' type='text'><input type='submit' value='ok'>"),
        t.appendChild(n),
        n.addEventListener("submit", function () {
          const t = document.querySelector("#webscheme-read-line").value;
          return n.remove(), e(t), !1;
        });
    }),
    current_output = new Port.CustomOutput(function (e) {
      const t = document.querySelector("#bs-console");
      if (!t) return;
      const n = document.createElement("span");
      (n.innerHTML = escape(e).replace(/\n/g, "<br>").replace(/ /g, "&nbsp;")),
        t.appendChild(n);
    }),
    current_error = current_output,
    $$1 = window.jQuery;
  define_libfunc("read-line", 0, 1, function (e) {
    var t = e[0] || Port.current_input;
    return assert_port(t), t.get_string((e) => e);
  }),
    define_libfunc("element-empty!", 1, 1, function (e) {
      return $$1(e[0]).prop("value") ? $$1(e[0]).val("") : $$1(e[0]).empty();
    }),
    alias_libfunc("element-empty!", "element-clear!"),
    define_libfunc("element-visible?", 1, 1, function (e) {
      return $$1(e[0]).is(":visible");
    }),
    define_libfunc("element-toggle!", 1, 1, function (e) {
      return $$1(e[0]).toggle();
    }),
    define_libfunc("element-hide!", 1, 1, function (e) {
      return $$1(e[0]).hide();
    }),
    define_libfunc("element-show!", 1, 1, function (e) {
      return $$1(e[0]).show();
    }),
    define_libfunc("element-remove!", 1, 1, function (e) {
      return $$1(e[0]).remove();
    }),
    define_libfunc("element-update!", 2, 2, function (e) {
      return $$1(e[0]).html(e[1]);
    }),
    define_libfunc("element-set-value!", 2, 2, function (e) {
      return $$1(e[0]).val(e[1]);
    }),
    define_libfunc("element-replace!", 2, 2, function (e) {
      return $$1(e[0]).replaceWith(e[1]);
    }),
    define_libfunc("element-insert!", 2, 2, function (e) {
      return $$1(e[0]).append(e[1]);
    }),
    define_libfunc("element-wrap!", 3, 3, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-ancestors", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-descendants", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-first-descendant", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-immediate-descendants", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-previous-sibling", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-next-sibling", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-siblings", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-match?", 2, 2, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-up", 3, 3, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-down", 3, 3, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-previous", 3, 3, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-next", 3, 3, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-select", 1, 1, function (e) {
      $$1(e[0]).select();
    }),
    define_libfunc("element-adjacent", 0, 0, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-identify", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-read-attribute", 2, 2, function (e) {
      return (
        assert_string(e[1]),
        e[1].startsWith("data-") ? $$1(e[0]).attr(e[1]) : $$1(e[0]).prop(e[1])
      );
    });
  alias_libfunc("console-log", "clog");
  var element_write_attribute = function (e) {
    return (
      assert_string(e[1]),
      e[1].startsWith("data-")
        ? $$1(e[0]).attr(e[1], e[2])
        : $$1(e[0]).prop(e[1], e[2])
    );
  };
  define_libfunc("element-write-attribute", 3, 3, function (e) {
    return (
      deprecate("element-write-attribute", "1.0", "element-write-attribute!"),
      element_write_attribute(e)
    );
  }),
    define_libfunc("element-write-attribute!", 3, 3, element_write_attribute),
    define_libfunc("element-height", 1, 1, function (e) {
      return $$1(e[0]).height();
    }),
    define_libfunc("element-width", 1, 1, function (e) {
      return $$1(e[0]).width();
    }),
    define_libfunc("element-class-names", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-has-class-name?", 2, 2, function (e) {
      return assert_string(e[1]), $$1(e[0]).hasClass(e[1]);
    });
  var element_add_class_name = function (e) {
    return assert_string(e[1]), $$1(e[0]).addClass(e[1]);
  };
  define_libfunc("element-add-class-name", 2, 2, function (e) {
    return (
      deprecate("element-add-class-name", "1.0", "element-add-class-name!"),
      element_add_class_name(e)
    );
  }),
    define_libfunc("element-add-class-name!", 2, 2, element_add_class_name);
  var element_remove_class_name = function (e) {
    return assert_string(e[1]), $$1(e[0]).removeClass(e[1]);
  };
  define_libfunc("element-remove-class-name", 2, 2, function (e) {
    return (
      deprecate(
        "element-remove-class-name",
        "1.0",
        "element-remove-class-name!"
      ),
      element_remove_class_name(e)
    );
  }),
    define_libfunc(
      "element-remove-class-name!",
      2,
      2,
      element_remove_class_name
    );
  var element_toggle_class_name = function (e) {
    return assert_string(e[1]), $$1(e[0]).toggleClass(e[1]);
  };
  define_libfunc("element-toggle-class-name", 2, 2, function (e) {
    return (
      deprecate(
        "element-toggle-class-name",
        "1.0",
        "element-toggle-class-name!"
      ),
      element_toggle_class_name(e)
    );
  }),
    define_libfunc(
      "element-toggle-class-name!",
      2,
      2,
      element_toggle_class_name
    ),
    define_libfunc("element-clean-whitespace!", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-empty?", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-descendant-of!", 2, 2, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("scroll-to-element!", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-style", 2, 2, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-opacity", 2, 2, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-style-set!", 2, 2, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-opacity-set!", 2, 2, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-dimensions", 1, 1, function (e) {
      return new Values($$1(e[0]).width(), $$1(e[0]).height());
    }),
    define_libfunc("element-make-positioned!", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-undo-positioned!", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-make-clipping!", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-undo-clipping!", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-cumulative-offset", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-positioned-offset", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-absolutize!", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-relativize!", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-cumulative-scroll-offset", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-offset-parent", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-viewport-offset", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-clone-position!", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-absolutize!", 1, 1, function (e) {
      throw new Bug("not yet implemented");
    }),
    define_libfunc("element-focus!", 1, 1, function (e) {
      return $$1(e[0]).focus();
    });
  const create_elements_by_string = function (e) {
      var t = (e = e.to_array()).shift();
      t instanceof BiwaSymbol && (t = t.name);
      var n = t.match(/(.*)\.(.*)/);
      n && ((t = n[1]), e.unshift(Sym("class"), n[2])),
        (n = t.match(/(.*)\#(.*)/)) && ((t = n[1]), e.unshift(Sym("id"), n[2]));
      for (var r = [], i = ["<" + t], a = 0; a < e.length; a++)
        e[a] instanceof BiwaSymbol
          ? (i.push(" " + e[a].name + '="' + e[a + 1] + '"'), a++)
          : e[a] instanceof Pair
          ? r.push(create_elements_by_string(e[a]))
          : r.push(e[a]);
      return (
        i.push(">"), i.push(r.join("")), i.push("</" + t + ">"), i.join("")
      );
    },
    tree_all = function (e, t) {
      return e === nil || (!1 !== t(e.car) && tree_all(e.cdr, t));
    };
  define_libfunc("element-new", 1, 1, function (e) {
    return tree_all(e[0], function (e) {
      return (
        "string" == typeof e || e instanceof BiwaSymbol || e instanceof Pair
      );
    })
      ? $$1(create_elements_by_string(e[0]))[0]
      : nil;
  });
  const element_content = function (e) {
    return $$1(e).prop("value") ? $$1(e).val() : escape($$1(e).html());
  };
  define_libfunc("element-content", 1, 1, function (e) {
    return element_content(e[0]);
  }),
    define_libfunc("load", 1, 1, function (e, t) {
      var n = e[0];
      assert_string(n);
      var r = new Interpreter(t);
      return new Pause(function (e) {
        $$1.ajax(n, {
          dataType: "text",
          mimeType: "text/plain; charset=UTF-8",
          success: function (t) {
            r.evaluate(t, function () {
              return e.resume(undef);
            });
          },
          error: function () {
            throw new Error("load: network error: failed to load " + n);
          },
        });
      });
    });
  const _require = function (e, t, n) {
    var r = $$1("<script/>", { src: e });
    $$1("body").append(r);
    var i = new Function("return !!(" + t + ")");
    i()
      ? n()
      : setTimeout(function () {
          i() ? n() : setTimeout(arguments.callee, 10);
        }, 10);
  };
  define_libfunc("js-load", 2, 2, function (e) {
    var t = e[0],
      n = e[1];
    return (
      assert_string(t),
      assert_string(n),
      new Pause(function (e) {
        _require(t, "window." + n, function () {
          e.resume(undef);
        });
      })
    );
  });
  const getelem = function (e) {
    e.length > 1 && !1 === e[1] && (e[1] = []);
    var t = $$1.apply(this, e);
    return t.length > 0 && t;
  };
  define_libfunc("$", 1, 2, getelem),
    define_libfunc("getelem", 1, 2, getelem),
    define_libfunc("dom-element", 1, 1, function (e) {
      return $$1(e[0])[0];
    }),
    define_libfunc("set-style!", 3, 3, function (e) {
      return assert_string(e[1]), $$1(e[0]).css(e[1], e[2]), undef;
    }),
    define_libfunc("get-style", 2, 2, function (e) {
      return assert_string(e[1]), $$1(e[0]).css(e[1]);
    }),
    define_libfunc("set-content!", 2, 2, function (e) {
      assert_string(e[1]);
      var t = e[1].replace(/\n/g, "<br>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;");
      return $$1(e[0]).html(t), undef;
    }),
    define_libfunc("get-content", 1, 1, function (e) {
      return element_content(e[0]);
    }),
    define_libfunc("set-handler!", 3, 3, function (e, t) {
      throw new Error(
        "set-handler! is obsolete, please use add-handler! instead"
      );
    }),
    define_libfunc("add-handler!", 3, 3, function (e, t) {
      var n = e[0],
        r = e[1],
        i = e[2],
        a = function (e) {
          return new Interpreter(t).invoke_closure(i, [e]);
        };
      return $$1(n).on(r, a), a;
    }),
    define_libfunc("remove-handler!", 3, 3, function (e, t) {
      var n = e[0],
        r = e[1],
        i = e[2];
      return $$1(n).off(r, i), undef;
    }),
    define_libfunc("wait-for", 2, 2, function (e) {
      var t = e[0],
        n = e[1],
        r = $$1(t);
      r.biwascheme_wait_for = r.biwascheme_wait_for || {};
      var i = r.biwascheme_wait_for[n];
      return (
        i && r.off(n, i),
        new Pause(function (e) {
          var t = function (i) {
            return (
              (r.biwascheme_wait_for[n] = void 0), r.off(n, t), e.resume(i)
            );
          };
          (r.biwascheme_wait_for[n] = t), r.on(n, t);
        })
      );
    }),
    define_libfunc("domelem", 1, null, function (e) {
      throw new Error("obsolete");
    }),
    define_libfunc("dom-remove-children!", 1, 1, function (e) {
      return (
        Console.puts(
          "warning: dom-remove-children! is obsolete. use element-empty! instead"
        ),
        $$1(e[0]).empty(),
        undef
      );
    }),
    define_libfunc("dom-create-element", 1, 1, function (e) {
      throw new Error("obsolete");
    }),
    define_libfunc("element-append-child!", 2, 2, function (e) {
      return $$1(e[0]).append(e[1]);
    }),
    define_libfunc("dom-remove-child!", 2, 2, function (e) {
      throw new Error("obsolete");
    }),
    define_libfunc("http-request", 1, 1, function (e) {
      var t = e[0];
      return (
        assert_string(t),
        new Pause(function (e) {
          $$1.get(
            t,
            function (t) {
              e.resume(t);
            },
            "text"
          );
        })
      );
    }),
    define_libfunc("http-post", 2, 2, function (e) {
      var t = e[0];
      assert_string(t);
      var n = e[1];
      assert_list(n);
      var r = alist_to_js_obj(n);
      return new Pause(function (e) {
        $$1.post(
          t,
          r,
          function (t) {
            e.resume(t);
          },
          "text"
        );
      });
    });
  const jsonp_receiver = [];
  define_libfunc("receive-jsonp", 1, 1, function (e) {
    var t = e[0];
    assert_string(t);
    for (var n = jsonp_receiver, r = 0; r < n.length && null !== n[r]; r++);
    var i = r;
    return (
      (t += "?callback=BiwaScheme.jsonp_receiver[" + i + "]"),
      new Pause(function (e) {
        n[i] = function (t) {
          e.resume(t), (n[i] = null);
        };
        var r = $$1("<script/>", { src: t });
        $$1("body").append(r);
      })
    );
  }),
    define_libfunc("alert", 1, 1, function (e) {
      return alert(e[0]), undef;
    }),
    define_libfunc("confirm", 1, 1, function (e) {
      return confirm(e[0]);
    });
  const DUMP_PAD = "&nbsp;&nbsp;&nbsp;",
    FOLD_LIMIT = 20,
    STACK_MAX_LEN = 80;
  class Dumper {
    constructor(e) {
      (this.dumparea = e || $("#dumparea")[0] || null), this.reset();
    }
    reset() {
      this.dumparea && $(this.dumparea).empty(),
        (this.n_folds = 0),
        (this.closures = []),
        (this.n_dumps = 0),
        (this.cur = -1),
        (this.is_folded = !0);
    }
    is_opc(e) {
      return e instanceof Array && "string" == typeof e[0];
    }
    dump_opc(e, t, n) {
      var r = "",
        i = "",
        a = "";
      (t = t || 0), (n = n || !1);
      Array(t)
        .fill()
        .map(() => {
          i += DUMP_PAD;
        }),
        Array(t + 1)
          .fill()
          .map(() => {
            a += DUMP_PAD;
          }),
        (r += i + '[<span class="dump_opecode">' + e[0] + "</span>");
      for (var s = 1; !(e[s] instanceof Array) && s < e.length; )
        "constant" == e[0]
          ? (r +=
              "&nbsp;<span class='dump_constant'>" +
              this.dump_obj(e[s]) +
              "</span>")
          : (r += "&nbsp;" + this.dump_obj(e[s])),
          s++;
      for (s < e.length && (r += "<br>\n"); s < e.length; s++)
        this.is_opc(e[s])
          ? (r += this.dump_opc(e[s], s == e.length - 1 ? t : t + 1, !0))
          : ((r += s == e.length - 1 ? i : a), (r += this.dump_obj(e[s]))),
          s != e.length - 1 && (r += "<br>\n");
      return (r += "]"), n ? r : this.add_fold(r);
    }
    add_fold(e) {
      var t = e.split(/<br>/gim);
      if (t.length > FOLD_LIMIT) {
        var n =
            " <span style='text-decoration:underline; color:blue; cursor:pointer;'onclick='BiwaScheme.Dumper.toggle_fold(" +
            this.n_folds +
            ")'>more</span>",
          r = "<div style='display:none' class='fold" + this.n_folds + "'>";
        return (
          this.n_folds++,
          [
            t.slice(0, FOLD_LIMIT).join("<br>"),
            n,
            r,
            t.slice(FOLD_LIMIT).join("<br>"),
            "</div>",
          ].join("")
        );
      }
      return e;
    }
    dump_stack(e, t) {
      if (null == e) return inspect(e);
      var n = "<table>";
      if (0 == e.length)
        n += "<tr><td class='dump_dead'>(stack is empty)</td></tr>";
      else if (t < e.length) {
        var r = e.length - 1;
        n +=
          "<tr><td class='dump_dead'>[" +
          r +
          "]</td><td class='dump_dead'>" +
          truncate(this.dump_obj(e[r]), STACK_MAX_LEN) +
          "</td></tr>";
      }
      for (var i = t - 1; i >= 0; i--)
        n +=
          "<tr><td class='dump_stknum'>[" +
          i +
          "]</td><td>" +
          truncate(this.dump_obj(e[i]), STACK_MAX_LEN) +
          "</td></tr>";
      return n + "</table>";
    }
    dump_object(e) {
      var t = [];
      for (var n in e) t.push(n.toString());
      return "#<Object{" + t.join(",") + "}>";
    }
    dump_closure(e) {
      if (!e) return "**BROKEN**";
      if (0 == e.length) return "[]";
      for (var t = null, n = 0; n < this.closures.length; n++)
        this.closures[n] == e && (t = n);
      null == t && ((t = this.closures.length), this.closures.push(e));
      var r = [...e],
        i = r.shift && r.shift();
      return [
        "c",
        t,
        " <span class='dump_closure'>free vars :</span> ",
        this.dump_obj(r),
        " <span class='dump_closure'>body :</span> ",
        truncate(this.dump_obj(i), 100),
      ].join("");
    }
    dump_obj(e) {
      if (e && "function" == typeof e.to_html) return e.to_html();
      var t = to_write$1(e);
      return "[object Object]" == t && (t = this.dump_object(e)), escape(t);
    }
    dump(e) {
      var t = "";
      e instanceof Object
        ? ((t += "<table>"),
          (t +=
            "<tr><td colspan='4'><a href='#' class='header'>#" +
            this.n_dumps +
            "</a></td></tr>"),
          Object.keys(e).forEach(
            function (n) {
              var r = e[n];
              "x" != n &&
                "stack" != n &&
                ((r = "c" == n ? this.dump_closure(r) : this.dump_obj(r)),
                (t +=
                  "<tr><td>" +
                  n +
                  ": </td><td colspan='3'>" +
                  r +
                  "</td></tr>"));
            }.bind(this)
          ),
          (t +=
            "<tr><td>x:</td><td>" +
            (this.is_opc(e.x) ? this.dump_opc(e.x) : this.dump_obj(e.x)) +
            "</td>"),
          (t +=
            "<td style='border-left: 1px solid black'>stack:</td><td>" +
            this.dump_stack(e.stack, e.s) +
            "</td></tr>"),
          (t += "</table>"))
        : (t = escape(inspect(e)) + "<br>\n");
      var n = $("<div/>", { class: "dump" + this.n_dumps });
      n.html(t),
        $(this.dumparea).append(n),
        function (e) {
          $(".header", this.dump_el(this.n_dumps)).click(
            function () {
              this.dump_move_to(e), this.dump_fold();
            }.bind(this)
          );
        }.bind(this)(this.n_dumps),
        n.hide(),
        this.n_dumps++;
    }
    dump_el(e) {
      return $(".dump" + e, this.dumparea);
    }
    dump_move_to(e) {
      e < 0 && (e = this.n_dumps + e),
        0 <= e &&
          e <= this.n_dumps &&
          (this.dump_el(this.cur).hide(),
          (this.cur = e),
          this.dump_el(this.cur).show());
    }
    dump_move(e) {
      0 <= this.cur && this.cur < this.n_dumps && this.dump_el(this.cur).hide(),
        0 <= this.cur + e && this.cur + e < this.n_dumps && (this.cur += e),
        this.dump_el(this.cur).show();
    }
    dump_fold() {
      for (var e = 0; e < this.n_dumps; e++)
        e != this.cur && this.dump_el(e).hide();
      this.is_folded = !0;
    }
    dump_unfold() {
      for (var e = 0; e < this.n_dumps; e++) this.dump_el(e).show();
      this.is_folded = !1;
    }
    dump_toggle_fold() {
      this.is_folded ? this.dump_unfold() : this.dump_fold();
    }
  }
  Dumper.toggle_fold = function (e) {
    $(".fold" + e, this.dumparea).toggle();
  };
  const execute_user_program = function () {
    let e = null;
    const t = document.querySelector("#biwascheme-debugger");
    t && (e = new Dumper(t));
    const n = function (t, n) {
        if ((BiwaScheme.Port.current_error.put_string(t.message + "\n"), e))
          e.dump(n), e.dump_move(1);
        else {
          if ("undefined" == typeof console || !console.error) throw t;
          console.error(t.message);
        }
      },
      r = function (e) {
        const t = new BiwaScheme.Interpreter(n);
        try {
          t.evaluate(e, function () {});
        } catch (e) {
          n(e);
        }
      };
    let i = "";
    for (const e of document.querySelectorAll("script[src$='biwascheme.js']"))
      i += e.innerHTML;
    for (const e of document.querySelectorAll(
      "script[src$='biwascheme-min.js']"
    ))
      i += e.innerHTML;
    i.length > 0 && r(i),
      window.addEventListener("DOMContentLoaded", function () {
        for (const e of document.querySelectorAll(
          "script[type='text/biwascheme']"
        ))
          r(e.innerHTML);
      });
  };
  return (
    (BiwaScheme$1.on_node = !1),
    (BiwaScheme$1.Console = Console),
    (BiwaScheme$1.Port.current_input = current_input),
    (BiwaScheme$1.Port.current_output = current_output),
    (BiwaScheme$1.Port.current_error = current_error),
    (BiwaScheme$1.jsonp_receiver = jsonp_receiver),
    (BiwaScheme$1.Dumper = Dumper),
    (window.BiwaScheme = window.BiwaScheme || {}),
    Object.assign(window.BiwaScheme, BiwaScheme$1),
    execute_user_program(),
    BiwaScheme$1
  );
})();


// codemirror

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/5/LICENSE

// This is CodeMirror (https://codemirror.net/5), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.CodeMirror = factory());
}(this, (function () { 'use strict';

  // Kludges for bugs and behavior differences that can't be feature
  // detected are enabled based on userAgent etc sniffing.
  var userAgent = navigator.userAgent;
  var platform = navigator.platform;

  var gecko = /gecko\/\d/i.test(userAgent);
  var ie_upto10 = /MSIE \d/.test(userAgent);
  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
  var edge = /Edge\/(\d+)/.exec(userAgent);
  var ie = ie_upto10 || ie_11up || edge;
  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
  var webkit = !edge && /WebKit\//.test(userAgent);
  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
  var chrome = !edge && /Chrome\/(\d+)/.exec(userAgent);
  var chrome_version = chrome && +chrome[1];
  var presto = /Opera\//.test(userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);
  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
  var phantom = /PhantomJS/.test(userAgent);

  var ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2);
  var android = /Android/.test(userAgent);
  // This is woefully incomplete. Suggestions for alternative methods welcome.
  var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
  var mac = ios || /Mac/.test(platform);
  var chromeOS = /\bCrOS\b/.test(userAgent);
  var windows = /win/i.test(platform);

  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
  if (presto_version) { presto_version = Number(presto_version[1]); }
  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
  var captureRightClick = gecko || (ie && ie_version >= 9);

  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

  var rmClass = function(node, cls) {
    var current = node.className;
    var match = classTest(cls).exec(current);
    if (match) {
      var after = current.slice(match.index + match[0].length);
      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
    }
  };

  function removeChildren(e) {
    for (var count = e.childNodes.length; count > 0; --count)
      { e.removeChild(e.firstChild); }
    return e
  }

  function removeChildrenAndAdd(parent, e) {
    return removeChildren(parent).appendChild(e)
  }

  function elt(tag, content, className, style) {
    var e = document.createElement(tag);
    if (className) { e.className = className; }
    if (style) { e.style.cssText = style; }
    if (typeof content == "string") { e.appendChild(document.createTextNode(content)); }
    else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]); } }
    return e
  }
  // wrapper for elt, which removes the elt from the accessibility tree
  function eltP(tag, content, className, style) {
    var e = elt(tag, content, className, style);
    e.setAttribute("role", "presentation");
    return e
  }

  var range;
  if (document.createRange) { range = function(node, start, end, endNode) {
    var r = document.createRange();
    r.setEnd(endNode || node, end);
    r.setStart(node, start);
    return r
  }; }
  else { range = function(node, start, end) {
    var r = document.body.createTextRange();
    try { r.moveToElementText(node.parentNode); }
    catch(e) { return r }
    r.collapse(true);
    r.moveEnd("character", end);
    r.moveStart("character", start);
    return r
  }; }

  function contains(parent, child) {
    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
      { child = child.parentNode; }
    if (parent.contains)
      { return parent.contains(child) }
    do {
      if (child.nodeType == 11) { child = child.host; }
      if (child == parent) { return true }
    } while (child = child.parentNode)
  }

  function activeElt(doc) {
    // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
    // IE < 10 will throw when accessed while the page is loading or in an iframe.
    // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
    var activeElement;
    try {
      activeElement = doc.activeElement;
    } catch(e) {
      activeElement = doc.body || null;
    }
    while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
      { activeElement = activeElement.shadowRoot.activeElement; }
    return activeElement
  }

  function addClass(node, cls) {
    var current = node.className;
    if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls; }
  }
  function joinClasses(a, b) {
    var as = a.split(" ");
    for (var i = 0; i < as.length; i++)
      { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i]; } }
    return b
  }

  var selectInput = function(node) { node.select(); };
  if (ios) // Mobile Safari apparently has a bug where select() is broken.
    { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; }; }
  else if (ie) // Suppress mysterious IE10 errors
    { selectInput = function(node) { try { node.select(); } catch(_e) {} }; }

  function doc(cm) { return cm.display.wrapper.ownerDocument }

  function win(cm) { return doc(cm).defaultView }

  function bind(f) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){return f.apply(null, args)}
  }

  function copyObj(obj, target, overwrite) {
    if (!target) { target = {}; }
    for (var prop in obj)
      { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
        { target[prop] = obj[prop]; } }
    return target
  }

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  function countColumn(string, end, tabSize, startIndex, startValue) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) { end = string.length; }
    }
    for (var i = startIndex || 0, n = startValue || 0;;) {
      var nextTab = string.indexOf("\t", i);
      if (nextTab < 0 || nextTab >= end)
        { return n + (end - i) }
      n += nextTab - i;
      n += tabSize - (n % tabSize);
      i = nextTab + 1;
    }
  }

  var Delayed = function() {
    this.id = null;
    this.f = null;
    this.time = 0;
    this.handler = bind(this.onTimeout, this);
  };
  Delayed.prototype.onTimeout = function (self) {
    self.id = 0;
    if (self.time <= +new Date) {
      self.f();
    } else {
      setTimeout(self.handler, self.time - +new Date);
    }
  };
  Delayed.prototype.set = function (ms, f) {
    this.f = f;
    var time = +new Date + ms;
    if (!this.id || time < this.time) {
      clearTimeout(this.id);
      this.id = setTimeout(this.handler, ms);
      this.time = time;
    }
  };

  function indexOf(array, elt) {
    for (var i = 0; i < array.length; ++i)
      { if (array[i] == elt) { return i } }
    return -1
  }

  // Number of pixels added to scroller and sizer to hide scrollbar
  var scrollerGap = 50;

  // Returned or thrown by various protocols to signal 'I'm not
  // handling this'.
  var Pass = {toString: function(){return "CodeMirror.Pass"}};

  // Reused option objects for setSelection & friends
  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

  // The inverse of countColumn -- find the offset that corresponds to
  // a particular column.
  function findColumn(string, goal, tabSize) {
    for (var pos = 0, col = 0;;) {
      var nextTab = string.indexOf("\t", pos);
      if (nextTab == -1) { nextTab = string.length; }
      var skipped = nextTab - pos;
      if (nextTab == string.length || col + skipped >= goal)
        { return pos + Math.min(skipped, goal - col) }
      col += nextTab - pos;
      col += tabSize - (col % tabSize);
      pos = nextTab + 1;
      if (col >= goal) { return pos }
    }
  }

  var spaceStrs = [""];
  function spaceStr(n) {
    while (spaceStrs.length <= n)
      { spaceStrs.push(lst(spaceStrs) + " "); }
    return spaceStrs[n]
  }

  function lst(arr) { return arr[arr.length-1] }

  function map(array, f) {
    var out = [];
    for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i); }
    return out
  }

  function insertSorted(array, value, score) {
    var pos = 0, priority = score(value);
    while (pos < array.length && score(array[pos]) <= priority) { pos++; }
    array.splice(pos, 0, value);
  }

  function nothing() {}

  function createObj(base, props) {
    var inst;
    if (Object.create) {
      inst = Object.create(base);
    } else {
      nothing.prototype = base;
      inst = new nothing();
    }
    if (props) { copyObj(props, inst); }
    return inst
  }

  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  function isWordCharBasic(ch) {
    return /\w/.test(ch) || ch > "\x80" &&
      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
  }
  function isWordChar(ch, helper) {
    if (!helper) { return isWordCharBasic(ch) }
    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
    return helper.test(ch)
  }

  function isEmpty(obj) {
    for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
    return true
  }

  // Extending unicode characters. A series of a non-extending char +
  // any number of extending chars is treated as a single unit as far
  // as editing and measuring is concerned. This is not fully correct,
  // since some scripts/fonts/browsers also treat other configurations
  // of code points as a group.
  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

  // Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
  function skipExtendingChars(str, pos, dir) {
    while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) { pos += dir; }
    return pos
  }

  // Returns the value from the range [`from`; `to`] that satisfies
  // `pred` and is closest to `from`. Assumes that at least `to`
  // satisfies `pred`. Supports `from` being greater than `to`.
  function findFirst(pred, from, to) {
    // At any point we are certain `to` satisfies `pred`, don't know
    // whether `from` does.
    var dir = from > to ? -1 : 1;
    for (;;) {
      if (from == to) { return from }
      var midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
      if (mid == from) { return pred(mid) ? from : to }
      if (pred(mid)) { to = mid; }
      else { from = mid + dir; }
    }
  }

  // BIDI HELPERS

  function iterateBidiSections(order, from, to, f) {
    if (!order) { return f(from, to, "ltr", 0) }
    var found = false;
    for (var i = 0; i < order.length; ++i) {
      var part = order[i];
      if (part.from < to && part.to > from || from == to && part.to == from) {
        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i);
        found = true;
      }
    }
    if (!found) { f(from, to, "ltr"); }
  }

  var bidiOther = null;
  function getBidiPartAt(order, ch, sticky) {
    var found;
    bidiOther = null;
    for (var i = 0; i < order.length; ++i) {
      var cur = order[i];
      if (cur.from < ch && cur.to > ch) { return i }
      if (cur.to == ch) {
        if (cur.from != cur.to && sticky == "before") { found = i; }
        else { bidiOther = i; }
      }
      if (cur.from == ch) {
        if (cur.from != cur.to && sticky != "before") { found = i; }
        else { bidiOther = i; }
      }
    }
    return found != null ? found : bidiOther
  }

  // Bidirectional ordering algorithm
  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
  // that this (partially) implements.

  // One-char codes used for character types:
  // L (L):   Left-to-Right
  // R (R):   Right-to-Left
  // r (AL):  Right-to-Left Arabic
  // 1 (EN):  European Number
  // + (ES):  European Number Separator
  // % (ET):  European Number Terminator
  // n (AN):  Arabic Number
  // , (CS):  Common Number Separator
  // m (NSM): Non-Spacing Mark
  // b (BN):  Boundary Neutral
  // s (B):   Paragraph Separator
  // t (S):   Segment Separator
  // w (WS):  Whitespace
  // N (ON):  Other Neutrals

  // Returns null if characters are ordered as they appear
  // (left-to-right), or an array of sections ({from, to, level}
  // objects) in the order in which they occur visually.
  var bidiOrdering = (function() {
    // Character types for codepoints 0 to 0xff
    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
    // Character types for codepoints 0x600 to 0x6f9
    var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
    function charType(code) {
      if (code <= 0xf7) { return lowTypes.charAt(code) }
      else if (0x590 <= code && code <= 0x5f4) { return "R" }
      else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
      else if (0x6ee <= code && code <= 0x8ac) { return "r" }
      else if (0x2000 <= code && code <= 0x200b) { return "w" }
      else if (code == 0x200c) { return "b" }
      else { return "L" }
    }

    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;

    function BidiSpan(level, from, to) {
      this.level = level;
      this.from = from; this.to = to;
    }

    return function(str, direction) {
      var outerType = direction == "ltr" ? "L" : "R";

      if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) { return false }
      var len = str.length, types = [];
      for (var i = 0; i < len; ++i)
        { types.push(charType(str.charCodeAt(i))); }

      // W1. Examine each non-spacing mark (NSM) in the level run, and
      // change the type of the NSM to the type of the previous
      // character. If the NSM is at the start of the level run, it will
      // get the type of sor.
      for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
        var type = types[i$1];
        if (type == "m") { types[i$1] = prev; }
        else { prev = type; }
      }

      // W2. Search backwards from each instance of a European number
      // until the first strong type (R, L, AL, or sor) is found. If an
      // AL is found, change the type of the European number to Arabic
      // number.
      // W3. Change all ALs to R.
      for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
        var type$1 = types[i$2];
        if (type$1 == "1" && cur == "r") { types[i$2] = "n"; }
        else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R"; } }
      }

      // W4. A single European separator between two European numbers
      // changes to a European number. A single common separator between
      // two numbers of the same type changes to that type.
      for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
        var type$2 = types[i$3];
        if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1"; }
        else if (type$2 == "," && prev$1 == types[i$3+1] &&
                 (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1; }
        prev$1 = type$2;
      }

      // W5. A sequence of European terminators adjacent to European
      // numbers changes to all European numbers.
      // W6. Otherwise, separators and terminators change to Other
      // Neutral.
      for (var i$4 = 0; i$4 < len; ++i$4) {
        var type$3 = types[i$4];
        if (type$3 == ",") { types[i$4] = "N"; }
        else if (type$3 == "%") {
          var end = (void 0);
          for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
          var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
          for (var j = i$4; j < end; ++j) { types[j] = replace; }
          i$4 = end - 1;
        }
      }

      // W7. Search backwards from each instance of a European number
      // until the first strong type (R, L, or sor) is found. If an L is
      // found, then change the type of the European number to L.
      for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
        var type$4 = types[i$5];
        if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L"; }
        else if (isStrong.test(type$4)) { cur$1 = type$4; }
      }

      // N1. A sequence of neutrals takes the direction of the
      // surrounding strong text if the text on both sides has the same
      // direction. European and Arabic numbers act as if they were R in
      // terms of their influence on neutrals. Start-of-level-run (sor)
      // and end-of-level-run (eor) are used at level run boundaries.
      // N2. Any remaining neutrals take the embedding direction.
      for (var i$6 = 0; i$6 < len; ++i$6) {
        if (isNeutral.test(types[i$6])) {
          var end$1 = (void 0);
          for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
          var before = (i$6 ? types[i$6-1] : outerType) == "L";
          var after = (end$1 < len ? types[end$1] : outerType) == "L";
          var replace$1 = before == after ? (before ? "L" : "R") : outerType;
          for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1; }
          i$6 = end$1 - 1;
        }
      }

      // Here we depart from the documented algorithm, in order to avoid
      // building up an actual levels array. Since there are only three
      // levels (0, 1, 2) in an implementation that doesn't take
      // explicit embedding into account, we can build up the order on
      // the fly, without following the level-based algorithm.
      var order = [], m;
      for (var i$7 = 0; i$7 < len;) {
        if (countsAsLeft.test(types[i$7])) {
          var start = i$7;
          for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
          order.push(new BidiSpan(0, start, i$7));
        } else {
          var pos = i$7, at = order.length, isRTL = direction == "rtl" ? 1 : 0;
          for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
          for (var j$2 = pos; j$2 < i$7;) {
            if (countsAsNum.test(types[j$2])) {
              if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)); at += isRTL; }
              var nstart = j$2;
              for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
              order.splice(at, 0, new BidiSpan(2, nstart, j$2));
              at += isRTL;
              pos = j$2;
            } else { ++j$2; }
          }
          if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)); }
        }
      }
      if (direction == "ltr") {
        if (order[0].level == 1 && (m = str.match(/^\s+/))) {
          order[0].from = m[0].length;
          order.unshift(new BidiSpan(0, 0, m[0].length));
        }
        if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
          lst(order).to -= m[0].length;
          order.push(new BidiSpan(0, len - m[0].length, len));
        }
      }

      return direction == "rtl" ? order.reverse() : order
    }
  })();

  // Get the bidi ordering for the given line (and cache it). Returns
  // false for lines that are fully left-to-right, and an array of
  // BidiSpan objects otherwise.
  function getOrder(line, direction) {
    var order = line.order;
    if (order == null) { order = line.order = bidiOrdering(line.text, direction); }
    return order
  }

  // EVENT HANDLING

  // Lightweight event framework. on/off also work on DOM nodes,
  // registering native DOM handlers.

  var noHandlers = [];

  var on = function(emitter, type, f) {
    if (emitter.addEventListener) {
      emitter.addEventListener(type, f, false);
    } else if (emitter.attachEvent) {
      emitter.attachEvent("on" + type, f);
    } else {
      var map = emitter._handlers || (emitter._handlers = {});
      map[type] = (map[type] || noHandlers).concat(f);
    }
  };

  function getHandlers(emitter, type) {
    return emitter._handlers && emitter._handlers[type] || noHandlers
  }

  function off(emitter, type, f) {
    if (emitter.removeEventListener) {
      emitter.removeEventListener(type, f, false);
    } else if (emitter.detachEvent) {
      emitter.detachEvent("on" + type, f);
    } else {
      var map = emitter._handlers, arr = map && map[type];
      if (arr) {
        var index = indexOf(arr, f);
        if (index > -1)
          { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)); }
      }
    }
  }

  function signal(emitter, type /*, values...*/) {
    var handlers = getHandlers(emitter, type);
    if (!handlers.length) { return }
    var args = Array.prototype.slice.call(arguments, 2);
    for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args); }
  }

  // The DOM events that CodeMirror handles can be overridden by
  // registering a (non-DOM) handler on the editor for the event name,
  // and preventDefault-ing the event in that handler.
  function signalDOMEvent(cm, e, override) {
    if (typeof e == "string")
      { e = {type: e, preventDefault: function() { this.defaultPrevented = true; }}; }
    signal(cm, override || e.type, cm, e);
    return e_defaultPrevented(e) || e.codemirrorIgnore
  }

  function signalCursorActivity(cm) {
    var arr = cm._handlers && cm._handlers.cursorActivity;
    if (!arr) { return }
    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
    for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
      { set.push(arr[i]); } }
  }

  function hasHandler(emitter, type) {
    return getHandlers(emitter, type).length > 0
  }

  // Add on and off methods to a constructor's prototype, to make
  // registering events on such objects more convenient.
  function eventMixin(ctor) {
    ctor.prototype.on = function(type, f) {on(this, type, f);};
    ctor.prototype.off = function(type, f) {off(this, type, f);};
  }

  // Due to the fact that we still support jurassic IE versions, some
  // compatibility wrappers are needed.

  function e_preventDefault(e) {
    if (e.preventDefault) { e.preventDefault(); }
    else { e.returnValue = false; }
  }
  function e_stopPropagation(e) {
    if (e.stopPropagation) { e.stopPropagation(); }
    else { e.cancelBubble = true; }
  }
  function e_defaultPrevented(e) {
    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
  }
  function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}

  function e_target(e) {return e.target || e.srcElement}
  function e_button(e) {
    var b = e.which;
    if (b == null) {
      if (e.button & 1) { b = 1; }
      else if (e.button & 2) { b = 3; }
      else if (e.button & 4) { b = 2; }
    }
    if (mac && e.ctrlKey && b == 1) { b = 3; }
    return b
  }

  // Detect drag-and-drop
  var dragAndDrop = function() {
    // There is *some* kind of drag-and-drop support in IE6-8, but I
    // couldn't get it to work yet.
    if (ie && ie_version < 9) { return false }
    var div = elt('div');
    return "draggable" in div || "dragDrop" in div
  }();

  var zwspSupported;
  function zeroWidthElement(measure) {
    if (zwspSupported == null) {
      var test = elt("span", "\u200b");
      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
      if (measure.firstChild.offsetHeight != 0)
        { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8); }
    }
    var node = zwspSupported ? elt("span", "\u200b") :
      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
    node.setAttribute("cm-text", "");
    return node
  }

  // Feature-detect IE's crummy client rect reporting for bidi text
  var badBidiRects;
  function hasBadBidiRects(measure) {
    if (badBidiRects != null) { return badBidiRects }
    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
    var r0 = range(txt, 0, 1).getBoundingClientRect();
    var r1 = range(txt, 1, 2).getBoundingClientRect();
    removeChildren(measure);
    if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
    return badBidiRects = (r1.right - r0.right < 3)
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
    var pos = 0, result = [], l = string.length;
    while (pos <= l) {
      var nl = string.indexOf("\n", pos);
      if (nl == -1) { nl = string.length; }
      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
      var rt = line.indexOf("\r");
      if (rt != -1) {
        result.push(line.slice(0, rt));
        pos += rt + 1;
      } else {
        result.push(line);
        pos = nl + 1;
      }
    }
    return result
  } : function (string) { return string.split(/\r\n?|\n/); };

  var hasSelection = window.getSelection ? function (te) {
    try { return te.selectionStart != te.selectionEnd }
    catch(e) { return false }
  } : function (te) {
    var range;
    try {range = te.ownerDocument.selection.createRange();}
    catch(e) {}
    if (!range || range.parentElement() != te) { return false }
    return range.compareEndPoints("StartToEnd", range) != 0
  };

  var hasCopyEvent = (function () {
    var e = elt("div");
    if ("oncopy" in e) { return true }
    e.setAttribute("oncopy", "return;");
    return typeof e.oncopy == "function"
  })();

  var badZoomedRects = null;
  function hasBadZoomedRects(measure) {
    if (badZoomedRects != null) { return badZoomedRects }
    var node = removeChildrenAndAdd(measure, elt("span", "x"));
    var normal = node.getBoundingClientRect();
    var fromRange = range(node, 0, 1).getBoundingClientRect();
    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
  }

  // Known modes, by name and by MIME
  var modes = {}, mimeModes = {};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  function defineMode(name, mode) {
    if (arguments.length > 2)
      { mode.dependencies = Array.prototype.slice.call(arguments, 2); }
    modes[name] = mode;
  }

  function defineMIME(mime, spec) {
    mimeModes[mime] = spec;
  }

  // Given a MIME type, a {name, ...options} config object, or a name
  // string, return a mode config object.
  function resolveMode(spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
      spec = mimeModes[spec];
    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
      var found = mimeModes[spec.name];
      if (typeof found == "string") { found = {name: found}; }
      spec = createObj(found, spec);
      spec.name = found.name;
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
      return resolveMode("application/xml")
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
      return resolveMode("application/json")
    }
    if (typeof spec == "string") { return {name: spec} }
    else { return spec || {name: "null"} }
  }

  // Given a mode spec (anything that resolveMode accepts), find and
  // initialize an actual mode object.
  function getMode(options, spec) {
    spec = resolveMode(spec);
    var mfactory = modes[spec.name];
    if (!mfactory) { return getMode(options, "text/plain") }
    var modeObj = mfactory(options, spec);
    if (modeExtensions.hasOwnProperty(spec.name)) {
      var exts = modeExtensions[spec.name];
      for (var prop in exts) {
        if (!exts.hasOwnProperty(prop)) { continue }
        if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop]; }
        modeObj[prop] = exts[prop];
      }
    }
    modeObj.name = spec.name;
    if (spec.helperType) { modeObj.helperType = spec.helperType; }
    if (spec.modeProps) { for (var prop$1 in spec.modeProps)
      { modeObj[prop$1] = spec.modeProps[prop$1]; } }

    return modeObj
  }

  // This can be used to attach properties to mode objects from
  // outside the actual mode definition.
  var modeExtensions = {};
  function extendMode(mode, properties) {
    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
    copyObj(properties, exts);
  }

  function copyState(mode, state) {
    if (state === true) { return state }
    if (mode.copyState) { return mode.copyState(state) }
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) { val = val.concat([]); }
      nstate[n] = val;
    }
    return nstate
  }

  // Given a mode and a state (for that mode), find the inner mode and
  // state at the position that the state refers to.
  function innerMode(mode, state) {
    var info;
    while (mode.innerMode) {
      info = mode.innerMode(state);
      if (!info || info.mode == mode) { break }
      state = info.state;
      mode = info.mode;
    }
    return info || {mode: mode, state: state}
  }

  function startState(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true
  }

  // STRING STREAM

  // Fed to the mode parsers, provides helper functions to make
  // parsers more succinct.

  var StringStream = function(string, tabSize, lineOracle) {
    this.pos = this.start = 0;
    this.string = string;
    this.tabSize = tabSize || 8;
    this.lastColumnPos = this.lastColumnValue = 0;
    this.lineStart = 0;
    this.lineOracle = lineOracle;
  };

  StringStream.prototype.eol = function () {return this.pos >= this.string.length};
  StringStream.prototype.sol = function () {return this.pos == this.lineStart};
  StringStream.prototype.peek = function () {return this.string.charAt(this.pos) || undefined};
  StringStream.prototype.next = function () {
    if (this.pos < this.string.length)
      { return this.string.charAt(this.pos++) }
  };
  StringStream.prototype.eat = function (match) {
    var ch = this.string.charAt(this.pos);
    var ok;
    if (typeof match == "string") { ok = ch == match; }
    else { ok = ch && (match.test ? match.test(ch) : match(ch)); }
    if (ok) {++this.pos; return ch}
  };
  StringStream.prototype.eatWhile = function (match) {
    var start = this.pos;
    while (this.eat(match)){}
    return this.pos > start
  };
  StringStream.prototype.eatSpace = function () {
    var start = this.pos;
    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this.pos; }
    return this.pos > start
  };
  StringStream.prototype.skipToEnd = function () {this.pos = this.string.length;};
  StringStream.prototype.skipTo = function (ch) {
    var found = this.string.indexOf(ch, this.pos);
    if (found > -1) {this.pos = found; return true}
  };
  StringStream.prototype.backUp = function (n) {this.pos -= n;};
  StringStream.prototype.column = function () {
    if (this.lastColumnPos < this.start) {
      this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
      this.lastColumnPos = this.start;
    }
    return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  };
  StringStream.prototype.indentation = function () {
    return countColumn(this.string, null, this.tabSize) -
      (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  };
  StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
    if (typeof pattern == "string") {
      var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
      var substr = this.string.substr(this.pos, pattern.length);
      if (cased(substr) == cased(pattern)) {
        if (consume !== false) { this.pos += pattern.length; }
        return true
      }
    } else {
      var match = this.string.slice(this.pos).match(pattern);
      if (match && match.index > 0) { return null }
      if (match && consume !== false) { this.pos += match[0].length; }
      return match
    }
  };
  StringStream.prototype.current = function (){return this.string.slice(this.start, this.pos)};
  StringStream.prototype.hideFirstChars = function (n, inner) {
    this.lineStart += n;
    try { return inner() }
    finally { this.lineStart -= n; }
  };
  StringStream.prototype.lookAhead = function (n) {
    var oracle = this.lineOracle;
    return oracle && oracle.lookAhead(n)
  };
  StringStream.prototype.baseToken = function () {
    var oracle = this.lineOracle;
    return oracle && oracle.baseToken(this.pos)
  };

  // Find the line object corresponding to the given line number.
  function getLine(doc, n) {
    n -= doc.first;
    if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
    var chunk = doc;
    while (!chunk.lines) {
      for (var i = 0;; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; break }
        n -= sz;
      }
    }
    return chunk.lines[n]
  }

  // Get the part of a document between two positions, as an array of
  // strings.
  function getBetween(doc, start, end) {
    var out = [], n = start.line;
    doc.iter(start.line, end.line + 1, function (line) {
      var text = line.text;
      if (n == end.line) { text = text.slice(0, end.ch); }
      if (n == start.line) { text = text.slice(start.ch); }
      out.push(text);
      ++n;
    });
    return out
  }
  // Get the lines between from and to, as array of strings.
  function getLines(doc, from, to) {
    var out = [];
    doc.iter(from, to, function (line) { out.push(line.text); }); // iter aborts when callback returns truthy value
    return out
  }

  // Update the height of a line, propagating the height change
  // upwards to parent nodes.
  function updateLineHeight(line, height) {
    var diff = height - line.height;
    if (diff) { for (var n = line; n; n = n.parent) { n.height += diff; } }
  }

  // Given a line object, find its line number by walking up through
  // its parent links.
  function lineNo(line) {
    if (line.parent == null) { return null }
    var cur = line.parent, no = indexOf(cur.lines, line);
    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
      for (var i = 0;; ++i) {
        if (chunk.children[i] == cur) { break }
        no += chunk.children[i].chunkSize();
      }
    }
    return no + cur.first
  }

  // Find the line at the given vertical position, using the height
  // information in the document tree.
  function lineAtHeight(chunk, h) {
    var n = chunk.first;
    outer: do {
      for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
        var child = chunk.children[i$1], ch = child.height;
        if (h < ch) { chunk = child; continue outer }
        h -= ch;
        n += child.chunkSize();
      }
      return n
    } while (!chunk.lines)
    var i = 0;
    for (; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i], lh = line.height;
      if (h < lh) { break }
      h -= lh;
    }
    return n + i
  }

  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

  function lineNumberFor(options, i) {
    return String(options.lineNumberFormatter(i + options.firstLineNumber))
  }

  // A Pos instance represents a position within the text.
  function Pos(line, ch, sticky) {
    if ( sticky === void 0 ) sticky = null;

    if (!(this instanceof Pos)) { return new Pos(line, ch, sticky) }
    this.line = line;
    this.ch = ch;
    this.sticky = sticky;
  }

  // Compare two positions, return 0 if they are the same, a negative
  // number when a is less, and a positive number otherwise.
  function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

  function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

  function copyPos(x) {return Pos(x.line, x.ch)}
  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
  function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

  // Most of the external API clips given positions to make sure they
  // actually exist within the document.
  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
  function clipPos(doc, pos) {
    if (pos.line < doc.first) { return Pos(doc.first, 0) }
    var last = doc.first + doc.size - 1;
    if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
    return clipToLen(pos, getLine(doc, pos.line).text.length)
  }
  function clipToLen(pos, linelen) {
    var ch = pos.ch;
    if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
    else if (ch < 0) { return Pos(pos.line, 0) }
    else { return pos }
  }
  function clipPosArray(doc, array) {
    var out = [];
    for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]); }
    return out
  }

  var SavedContext = function(state, lookAhead) {
    this.state = state;
    this.lookAhead = lookAhead;
  };

  var Context = function(doc, state, line, lookAhead) {
    this.state = state;
    this.doc = doc;
    this.line = line;
    this.maxLookAhead = lookAhead || 0;
    this.baseTokens = null;
    this.baseTokenPos = 1;
  };

  Context.prototype.lookAhead = function (n) {
    var line = this.doc.getLine(this.line + n);
    if (line != null && n > this.maxLookAhead) { this.maxLookAhead = n; }
    return line
  };

  Context.prototype.baseToken = function (n) {
    if (!this.baseTokens) { return null }
    while (this.baseTokens[this.baseTokenPos] <= n)
      { this.baseTokenPos += 2; }
    var type = this.baseTokens[this.baseTokenPos + 1];
    return {type: type && type.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - n}
  };

  Context.prototype.nextLine = function () {
    this.line++;
    if (this.maxLookAhead > 0) { this.maxLookAhead--; }
  };

  Context.fromSaved = function (doc, saved, line) {
    if (saved instanceof SavedContext)
      { return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead) }
    else
      { return new Context(doc, copyState(doc.mode, saved), line) }
  };

  Context.prototype.save = function (copy) {
    var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
    return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
  };


  // Compute a style array (an array starting with a mode generation
  // -- for invalidation -- followed by pairs of end positions and
  // style strings), which is used to highlight the tokens on the
  // line.
  function highlightLine(cm, line, context, forceToEnd) {
    // A styles array always starts with a number identifying the
    // mode/overlays that it is based on (for easy invalidation).
    var st = [cm.state.modeGen], lineClasses = {};
    // Compute the base array of styles
    runMode(cm, line.text, cm.doc.mode, context, function (end, style) { return st.push(end, style); },
            lineClasses, forceToEnd);
    var state = context.state;

    // Run overlays, adjust style array.
    var loop = function ( o ) {
      context.baseTokens = st;
      var overlay = cm.state.overlays[o], i = 1, at = 0;
      context.state = true;
      runMode(cm, line.text, overlay.mode, context, function (end, style) {
        var start = i;
        // Ensure there's a token end at the current position, and that i points at it
        while (at < end) {
          var i_end = st[i];
          if (i_end > end)
            { st.splice(i, 1, end, st[i+1], i_end); }
          i += 2;
          at = Math.min(end, i_end);
        }
        if (!style) { return }
        if (overlay.opaque) {
          st.splice(start, i - start, end, "overlay " + style);
          i = start + 2;
        } else {
          for (; start < i; start += 2) {
            var cur = st[start+1];
            st[start+1] = (cur ? cur + " " : "") + "overlay " + style;
          }
        }
      }, lineClasses);
      context.state = state;
      context.baseTokens = null;
      context.baseTokenPos = 1;
    };

    for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
  }

  function getLineStyles(cm, line, updateFrontier) {
    if (!line.styles || line.styles[0] != cm.state.modeGen) {
      var context = getContextBefore(cm, lineNo(line));
      var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
      var result = highlightLine(cm, line, context);
      if (resetState) { context.state = resetState; }
      line.stateAfter = context.save(!resetState);
      line.styles = result.styles;
      if (result.classes) { line.styleClasses = result.classes; }
      else if (line.styleClasses) { line.styleClasses = null; }
      if (updateFrontier === cm.doc.highlightFrontier)
        { cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier); }
    }
    return line.styles
  }

  function getContextBefore(cm, n, precise) {
    var doc = cm.doc, display = cm.display;
    if (!doc.mode.startState) { return new Context(doc, true, n) }
    var start = findStartLine(cm, n, precise);
    var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
    var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);

    doc.iter(start, n, function (line) {
      processLine(cm, line.text, context);
      var pos = context.line;
      line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
      context.nextLine();
    });
    if (precise) { doc.modeFrontier = context.line; }
    return context
  }

  // Lightweight form of highlight -- proceed over this line and
  // update state, but don't save a style array. Used for lines that
  // aren't currently visible.
  function processLine(cm, text, context, startAt) {
    var mode = cm.doc.mode;
    var stream = new StringStream(text, cm.options.tabSize, context);
    stream.start = stream.pos = startAt || 0;
    if (text == "") { callBlankLine(mode, context.state); }
    while (!stream.eol()) {
      readToken(mode, stream, context.state);
      stream.start = stream.pos;
    }
  }

  function callBlankLine(mode, state) {
    if (mode.blankLine) { return mode.blankLine(state) }
    if (!mode.innerMode) { return }
    var inner = innerMode(mode, state);
    if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
  }

  function readToken(mode, stream, state, inner) {
    for (var i = 0; i < 10; i++) {
      if (inner) { inner[0] = innerMode(mode, state).mode; }
      var style = mode.token(stream, state);
      if (stream.pos > stream.start) { return style }
    }
    throw new Error("Mode " + mode.name + " failed to advance stream.")
  }

  var Token = function(stream, type, state) {
    this.start = stream.start; this.end = stream.pos;
    this.string = stream.current();
    this.type = type || null;
    this.state = state;
  };

  // Utility for getTokenAt and getLineTokens
  function takeToken(cm, pos, precise, asArray) {
    var doc = cm.doc, mode = doc.mode, style;
    pos = clipPos(doc, pos);
    var line = getLine(doc, pos.line), context = getContextBefore(cm, pos.line, precise);
    var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
    if (asArray) { tokens = []; }
    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
      stream.start = stream.pos;
      style = readToken(mode, stream, context.state);
      if (asArray) { tokens.push(new Token(stream, style, copyState(doc.mode, context.state))); }
    }
    return asArray ? tokens : new Token(stream, style, context.state)
  }

  function extractLineClasses(type, output) {
    if (type) { for (;;) {
      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
      if (!lineClass) { break }
      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
      var prop = lineClass[1] ? "bgClass" : "textClass";
      if (output[prop] == null)
        { output[prop] = lineClass[2]; }
      else if (!(new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)")).test(output[prop]))
        { output[prop] += " " + lineClass[2]; }
    } }
    return type
  }

  // Run the given mode's parser over a line, calling f for each token.
  function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
    var flattenSpans = mode.flattenSpans;
    if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans; }
    var curStart = 0, curStyle = null;
    var stream = new StringStream(text, cm.options.tabSize, context), style;
    var inner = cm.options.addModeClass && [null];
    if (text == "") { extractLineClasses(callBlankLine(mode, context.state), lineClasses); }
    while (!stream.eol()) {
      if (stream.pos > cm.options.maxHighlightLength) {
        flattenSpans = false;
        if (forceToEnd) { processLine(cm, text, context, stream.pos); }
        stream.pos = text.length;
        style = null;
      } else {
        style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
      }
      if (inner) {
        var mName = inner[0].name;
        if (mName) { style = "m-" + (style ? mName + " " + style : mName); }
      }
      if (!flattenSpans || curStyle != style) {
        while (curStart < stream.start) {
          curStart = Math.min(stream.start, curStart + 5000);
          f(curStart, curStyle);
        }
        curStyle = style;
      }
      stream.start = stream.pos;
    }
    while (curStart < stream.pos) {
      // Webkit seems to refuse to render text nodes longer than 57444
      // characters, and returns inaccurate measurements in nodes
      // starting around 5000 chars.
      var pos = Math.min(stream.pos, curStart + 5000);
      f(pos, curStyle);
      curStart = pos;
    }
  }

  // Finds the line to start with when starting a parse. Tries to
  // find a line with a stateAfter, so that it can start with a
  // valid state. If that fails, it returns the line with the
  // smallest indentation, which tends to need the least context to
  // parse correctly.
  function findStartLine(cm, n, precise) {
    var minindent, minline, doc = cm.doc;
    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
    for (var search = n; search > lim; --search) {
      if (search <= doc.first) { return doc.first }
      var line = getLine(doc, search - 1), after = line.stateAfter;
      if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
        { return search }
      var indented = countColumn(line.text, null, cm.options.tabSize);
      if (minline == null || minindent > indented) {
        minline = search - 1;
        minindent = indented;
      }
    }
    return minline
  }

  function retreatFrontier(doc, n) {
    doc.modeFrontier = Math.min(doc.modeFrontier, n);
    if (doc.highlightFrontier < n - 10) { return }
    var start = doc.first;
    for (var line = n - 1; line > start; line--) {
      var saved = getLine(doc, line).stateAfter;
      // change is on 3
      // state on line 1 looked ahead 2 -- so saw 3
      // test 1 + 2 < 3 should cover this
      if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
        start = line + 1;
        break
      }
    }
    doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
  }

  // Optimize some code when these features are not used.
  var sawReadOnlySpans = false, sawCollapsedSpans = false;

  function seeReadOnlySpans() {
    sawReadOnlySpans = true;
  }

  function seeCollapsedSpans() {
    sawCollapsedSpans = true;
  }

  // TEXTMARKER SPANS

  function MarkedSpan(marker, from, to) {
    this.marker = marker;
    this.from = from; this.to = to;
  }

  // Search an array of spans for a span matching the given marker.
  function getMarkedSpanFor(spans, marker) {
    if (spans) { for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.marker == marker) { return span }
    } }
  }

  // Remove a span from an array, returning undefined if no spans are
  // left (we don't store arrays for lines without spans).
  function removeMarkedSpan(spans, span) {
    var r;
    for (var i = 0; i < spans.length; ++i)
      { if (spans[i] != span) { (r || (r = [])).push(spans[i]); } }
    return r
  }

  // Add a span to a line.
  function addMarkedSpan(line, span, op) {
    var inThisOp = op && window.WeakSet && (op.markedSpans || (op.markedSpans = new WeakSet));
    if (inThisOp && line.markedSpans && inThisOp.has(line.markedSpans)) {
      line.markedSpans.push(span);
    } else {
      line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
      if (inThisOp) { inThisOp.add(line.markedSpans); }
    }
    span.marker.attachLine(line);
  }

  // Used for the algorithm that adjusts markers for a change in the
  // document. These functions cut an array of spans at a given
  // character position, returning an array of remaining chunks (or
  // undefined if nothing remains).
  function markedSpansBefore(old, startCh, isInsert) {
    var nw;
    if (old) { for (var i = 0; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
        ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
      }
    } }
    return nw
  }
  function markedSpansAfter(old, endCh, isInsert) {
    var nw;
    if (old) { for (var i = 0; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
        ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                              span.to == null ? null : span.to - endCh));
      }
    } }
    return nw
  }

  // Given a change object, compute the new set of marker spans that
  // cover the line in which the change took place. Removes spans
  // entirely within the change, reconnects spans belonging to the
  // same marker that appear on both sides of the change, and cuts off
  // spans partially within the change. Returns an array of span
  // arrays with one element for each line in (after) the change.
  function stretchSpansOverChange(doc, change) {
    if (change.full) { return null }
    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
    if (!oldFirst && !oldLast) { return null }

    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
    // Get the spans that 'stick out' on both sides
    var first = markedSpansBefore(oldFirst, startCh, isInsert);
    var last = markedSpansAfter(oldLast, endCh, isInsert);

    // Next, merge those two ends
    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
    if (first) {
      // Fix up .to properties of first
      for (var i = 0; i < first.length; ++i) {
        var span = first[i];
        if (span.to == null) {
          var found = getMarkedSpanFor(last, span.marker);
          if (!found) { span.to = startCh; }
          else if (sameLine) { span.to = found.to == null ? null : found.to + offset; }
        }
      }
    }
    if (last) {
      // Fix up .from in last (or move them into first in case of sameLine)
      for (var i$1 = 0; i$1 < last.length; ++i$1) {
        var span$1 = last[i$1];
        if (span$1.to != null) { span$1.to += offset; }
        if (span$1.from == null) {
          var found$1 = getMarkedSpanFor(first, span$1.marker);
          if (!found$1) {
            span$1.from = offset;
            if (sameLine) { (first || (first = [])).push(span$1); }
          }
        } else {
          span$1.from += offset;
          if (sameLine) { (first || (first = [])).push(span$1); }
        }
      }
    }
    // Make sure we didn't create any zero-length spans
    if (first) { first = clearEmptySpans(first); }
    if (last && last != first) { last = clearEmptySpans(last); }

    var newMarkers = [first];
    if (!sameLine) {
      // Fill gap with whole-line-spans
      var gap = change.text.length - 2, gapMarkers;
      if (gap > 0 && first)
        { for (var i$2 = 0; i$2 < first.length; ++i$2)
          { if (first[i$2].to == null)
            { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)); } } }
      for (var i$3 = 0; i$3 < gap; ++i$3)
        { newMarkers.push(gapMarkers); }
      newMarkers.push(last);
    }
    return newMarkers
  }

  // Remove spans that are empty and don't have a clearWhenEmpty
  // option of false.
  function clearEmptySpans(spans) {
    for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
        { spans.splice(i--, 1); }
    }
    if (!spans.length) { return null }
    return spans
  }

  // Used to 'clip' out readOnly ranges when making a change.
  function removeReadOnlyRanges(doc, from, to) {
    var markers = null;
    doc.iter(from.line, to.line + 1, function (line) {
      if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
        var mark = line.markedSpans[i].marker;
        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
          { (markers || (markers = [])).push(mark); }
      } }
    });
    if (!markers) { return null }
    var parts = [{from: from, to: to}];
    for (var i = 0; i < markers.length; ++i) {
      var mk = markers[i], m = mk.find(0);
      for (var j = 0; j < parts.length; ++j) {
        var p = parts[j];
        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
          { newParts.push({from: p.from, to: m.from}); }
        if (dto > 0 || !mk.inclusiveRight && !dto)
          { newParts.push({from: m.to, to: p.to}); }
        parts.splice.apply(parts, newParts);
        j += newParts.length - 3;
      }
    }
    return parts
  }

  // Connect or disconnect spans from a line.
  function detachMarkedSpans(line) {
    var spans = line.markedSpans;
    if (!spans) { return }
    for (var i = 0; i < spans.length; ++i)
      { spans[i].marker.detachLine(line); }
    line.markedSpans = null;
  }
  function attachMarkedSpans(line, spans) {
    if (!spans) { return }
    for (var i = 0; i < spans.length; ++i)
      { spans[i].marker.attachLine(line); }
    line.markedSpans = spans;
  }

  // Helpers used when computing which overlapping collapsed span
  // counts as the larger one.
  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

  // Returns a number indicating which of two overlapping collapsed
  // spans is larger (and thus includes the other). Falls back to
  // comparing ids when the spans cover exactly the same range.
  function compareCollapsedMarkers(a, b) {
    var lenDiff = a.lines.length - b.lines.length;
    if (lenDiff != 0) { return lenDiff }
    var aPos = a.find(), bPos = b.find();
    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
    if (fromCmp) { return -fromCmp }
    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
    if (toCmp) { return toCmp }
    return b.id - a.id
  }

  // Find out whether a line ends or starts in a collapsed span. If
  // so, return the marker for that span.
  function collapsedSpanAtSide(line, start) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
        { found = sp.marker; }
    } }
    return found
  }
  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

  function collapsedSpanAround(line, ch) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) { for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];
      if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) &&
          (!found || compareCollapsedMarkers(found, sp.marker) < 0)) { found = sp.marker; }
    } }
    return found
  }

  // Test whether there exists a collapsed span that partially
  // overlaps (covers the start or end, but not both) of a new span.
  // Such overlap is not allowed.
  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
    var line = getLine(doc, lineNo);
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) { for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];
      if (!sp.marker.collapsed) { continue }
      var found = sp.marker.find(0);
      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
      if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
          fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
        { return true }
    } }
  }

  // A visual line is a line as drawn on the screen. Folding, for
  // example, can cause multiple logical lines to appear on the same
  // visual line. This finds the start of the visual line that the
  // given line is part of (usually that is the line itself).
  function visualLine(line) {
    var merged;
    while (merged = collapsedSpanAtStart(line))
      { line = merged.find(-1, true).line; }
    return line
  }

  function visualLineEnd(line) {
    var merged;
    while (merged = collapsedSpanAtEnd(line))
      { line = merged.find(1, true).line; }
    return line
  }

  // Returns an array of logical lines that continue the visual line
  // started by the argument, or undefined if there are no such lines.
  function visualLineContinued(line) {
    var merged, lines;
    while (merged = collapsedSpanAtEnd(line)) {
      line = merged.find(1, true).line
      ;(lines || (lines = [])).push(line);
    }
    return lines
  }

  // Get the line number of the start of the visual line that the
  // given line number is part of.
  function visualLineNo(doc, lineN) {
    var line = getLine(doc, lineN), vis = visualLine(line);
    if (line == vis) { return lineN }
    return lineNo(vis)
  }

  // Get the line number of the start of the next visual line after
  // the given line.
  function visualLineEndNo(doc, lineN) {
    if (lineN > doc.lastLine()) { return lineN }
    var line = getLine(doc, lineN), merged;
    if (!lineIsHidden(doc, line)) { return lineN }
    while (merged = collapsedSpanAtEnd(line))
      { line = merged.find(1, true).line; }
    return lineNo(line) + 1
  }

  // Compute whether a line is hidden. Lines count as hidden when they
  // are part of a visual line that starts with another line, or when
  // they are entirely covered by collapsed, non-widget span.
  function lineIsHidden(doc, line) {
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (!sp.marker.collapsed) { continue }
      if (sp.from == null) { return true }
      if (sp.marker.widgetNode) { continue }
      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
        { return true }
    } }
  }
  function lineIsHiddenInner(doc, line, span) {
    if (span.to == null) {
      var end = span.marker.find(1, true);
      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
    }
    if (span.marker.inclusiveRight && span.to == line.text.length)
      { return true }
    for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
      sp = line.markedSpans[i];
      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
          (sp.to == null || sp.to != span.from) &&
          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
          lineIsHiddenInner(doc, line, sp)) { return true }
    }
  }

  // Find the height above the given line.
  function heightAtLine(lineObj) {
    lineObj = visualLine(lineObj);

    var h = 0, chunk = lineObj.parent;
    for (var i = 0; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i];
      if (line == lineObj) { break }
      else { h += line.height; }
    }
    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
      for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
        var cur = p.children[i$1];
        if (cur == chunk) { break }
        else { h += cur.height; }
      }
    }
    return h
  }

  // Compute the character length of a line, taking into account
  // collapsed ranges (see markText) that might hide parts, and join
  // other lines onto it.
  function lineLength(line) {
    if (line.height == 0) { return 0 }
    var len = line.text.length, merged, cur = line;
    while (merged = collapsedSpanAtStart(cur)) {
      var found = merged.find(0, true);
      cur = found.from.line;
      len += found.from.ch - found.to.ch;
    }
    cur = line;
    while (merged = collapsedSpanAtEnd(cur)) {
      var found$1 = merged.find(0, true);
      len -= cur.text.length - found$1.from.ch;
      cur = found$1.to.line;
      len += cur.text.length - found$1.to.ch;
    }
    return len
  }

  // Find the longest line in the document.
  function findMaxLine(cm) {
    var d = cm.display, doc = cm.doc;
    d.maxLine = getLine(doc, doc.first);
    d.maxLineLength = lineLength(d.maxLine);
    d.maxLineChanged = true;
    doc.iter(function (line) {
      var len = lineLength(line);
      if (len > d.maxLineLength) {
        d.maxLineLength = len;
        d.maxLine = line;
      }
    });
  }

  // LINE DATA STRUCTURE

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  var Line = function(text, markedSpans, estimateHeight) {
    this.text = text;
    attachMarkedSpans(this, markedSpans);
    this.height = estimateHeight ? estimateHeight(this) : 1;
  };

  Line.prototype.lineNo = function () { return lineNo(this) };
  eventMixin(Line);

  // Change the content (text, markers) of a line. Automatically
  // invalidates cached information and tries to re-estimate the
  // line's height.
  function updateLine(line, text, markedSpans, estimateHeight) {
    line.text = text;
    if (line.stateAfter) { line.stateAfter = null; }
    if (line.styles) { line.styles = null; }
    if (line.order != null) { line.order = null; }
    detachMarkedSpans(line);
    attachMarkedSpans(line, markedSpans);
    var estHeight = estimateHeight ? estimateHeight(line) : 1;
    if (estHeight != line.height) { updateLineHeight(line, estHeight); }
  }

  // Detach a line from the document tree and its markers.
  function cleanUpLine(line) {
    line.parent = null;
    detachMarkedSpans(line);
  }

  // Convert a style as returned by a mode (either null, or a string
  // containing one or more styles) to a CSS style. This is cached,
  // and also looks for line-wide styles.
  var styleToClassCache = {}, styleToClassCacheWithMode = {};
  function interpretTokenStyle(style, options) {
    if (!style || /^\s*$/.test(style)) { return null }
    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
    return cache[style] ||
      (cache[style] = style.replace(/\S+/g, "cm-$&"))
  }

  // Render the DOM representation of the text of a line. Also builds
  // up a 'line map', which points at the DOM nodes that represent
  // specific stretches of text, and is used by the measuring code.
  // The returned object contains the DOM node, this map, and
  // information about line-wide styles that were set by the mode.
  function buildLineContent(cm, lineView) {
    // The padding-right forces the element to have a 'border', which
    // is needed on Webkit to be able to get line-level bounding
    // rectangles for it (in measureChar).
    var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
    var builder = {pre: eltP("pre", [content], "CodeMirror-line"), content: content,
                   col: 0, pos: 0, cm: cm,
                   trailingSpace: false,
                   splitSpaces: cm.getOption("lineWrapping")};
    lineView.measure = {};

    // Iterate over the logical lines that make up this visual line.
    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
      var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0);
      builder.pos = 0;
      builder.addToken = buildToken;
      // Optionally wire in some hacks into the token-rendering
      // algorithm, to deal with browser quirks.
      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction)))
        { builder.addToken = buildTokenBadBidi(builder.addToken, order); }
      builder.map = [];
      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
      if (line.styleClasses) {
        if (line.styleClasses.bgClass)
          { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || ""); }
        if (line.styleClasses.textClass)
          { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""); }
      }

      // Ensure at least a single node is present, for measuring.
      if (builder.map.length == 0)
        { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))); }

      // Store the map and a cache object for the current logical line
      if (i == 0) {
        lineView.measure.map = builder.map;
        lineView.measure.cache = {};
      } else {
  (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
        ;(lineView.measure.caches || (lineView.measure.caches = [])).push({});
      }
    }

    // See issue #2901
    if (webkit) {
      var last = builder.content.lastChild;
      if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
        { builder.content.className = "cm-tab-wrap-hack"; }
    }

    signal(cm, "renderLine", cm, lineView.line, builder.pre);
    if (builder.pre.className)
      { builder.textClass = joinClasses(builder.pre.className, builder.textClass || ""); }

    return builder
  }

  function defaultSpecialCharPlaceholder(ch) {
    var token = elt("span", "\u2022", "cm-invalidchar");
    token.title = "\\u" + ch.charCodeAt(0).toString(16);
    token.setAttribute("aria-label", token.title);
    return token
  }

  // Build up the DOM representation for a single token, and add it to
  // the line map. Takes care to render special characters separately.
  function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
    if (!text) { return }
    var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
    var special = builder.cm.state.specialChars, mustWrap = false;
    var content;
    if (!special.test(text)) {
      builder.col += text.length;
      content = document.createTextNode(displayText);
      builder.map.push(builder.pos, builder.pos + text.length, content);
      if (ie && ie_version < 9) { mustWrap = true; }
      builder.pos += text.length;
    } else {
      content = document.createDocumentFragment();
      var pos = 0;
      while (true) {
        special.lastIndex = pos;
        var m = special.exec(text);
        var skipped = m ? m.index - pos : text.length - pos;
        if (skipped) {
          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])); }
          else { content.appendChild(txt); }
          builder.map.push(builder.pos, builder.pos + skipped, txt);
          builder.col += skipped;
          builder.pos += skipped;
        }
        if (!m) { break }
        pos += skipped + 1;
        var txt$1 = (void 0);
        if (m[0] == "\t") {
          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
          txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
          txt$1.setAttribute("role", "presentation");
          txt$1.setAttribute("cm-text", "\t");
          builder.col += tabWidth;
        } else if (m[0] == "\r" || m[0] == "\n") {
          txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
          txt$1.setAttribute("cm-text", m[0]);
          builder.col += 1;
        } else {
          txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
          txt$1.setAttribute("cm-text", m[0]);
          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])); }
          else { content.appendChild(txt$1); }
          builder.col += 1;
        }
        builder.map.push(builder.pos, builder.pos + 1, txt$1);
        builder.pos++;
      }
    }
    builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
    if (style || startStyle || endStyle || mustWrap || css || attributes) {
      var fullStyle = style || "";
      if (startStyle) { fullStyle += startStyle; }
      if (endStyle) { fullStyle += endStyle; }
      var token = elt("span", [content], fullStyle, css);
      if (attributes) {
        for (var attr in attributes) { if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class")
          { token.setAttribute(attr, attributes[attr]); } }
      }
      return builder.content.appendChild(token)
    }
    builder.content.appendChild(content);
  }

  // Change some spaces to NBSP to prevent the browser from collapsing
  // trailing spaces at the end of a line when rendering text (issue #1362).
  function splitSpaces(text, trailingBefore) {
    if (text.length > 1 && !/  /.test(text)) { return text }
    var spaceBefore = trailingBefore, result = "";
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
        { ch = "\u00a0"; }
      result += ch;
      spaceBefore = ch == " ";
    }
    return result
  }

  // Work around nonsense dimensions being reported for stretches of
  // right-to-left text.
  function buildTokenBadBidi(inner, order) {
    return function (builder, text, style, startStyle, endStyle, css, attributes) {
      style = style ? style + " cm-force-border" : "cm-force-border";
      var start = builder.pos, end = start + text.length;
      for (;;) {
        // Find the part that overlaps with the start of this text
        var part = (void 0);
        for (var i = 0; i < order.length; i++) {
          part = order[i];
          if (part.to > start && part.from <= start) { break }
        }
        if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, css, attributes) }
        inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes);
        startStyle = null;
        text = text.slice(part.to - start);
        start = part.to;
      }
    }
  }

  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
    var widget = !ignoreWidget && marker.widgetNode;
    if (widget) { builder.map.push(builder.pos, builder.pos + size, widget); }
    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
      if (!widget)
        { widget = builder.content.appendChild(document.createElement("span")); }
      widget.setAttribute("cm-marker", marker.id);
    }
    if (widget) {
      builder.cm.display.input.setUneditable(widget);
      builder.content.appendChild(widget);
    }
    builder.pos += size;
    builder.trailingSpace = false;
  }

  // Outputs a number of spans to make up a line, taking highlighting
  // and marked text into account.
  function insertLineContent(line, builder, styles) {
    var spans = line.markedSpans, allText = line.text, at = 0;
    if (!spans) {
      for (var i$1 = 1; i$1 < styles.length; i$1+=2)
        { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)); }
      return
    }

    var len = allText.length, pos = 0, i = 1, text = "", style, css;
    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes;
    for (;;) {
      if (nextChange == pos) { // Update current marker set
        spanStyle = spanEndStyle = spanStartStyle = css = "";
        attributes = null;
        collapsed = null; nextChange = Infinity;
        var foundBookmarks = [], endStyles = (void 0);
        for (var j = 0; j < spans.length; ++j) {
          var sp = spans[j], m = sp.marker;
          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
            foundBookmarks.push(m);
          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
              nextChange = sp.to;
              spanEndStyle = "";
            }
            if (m.className) { spanStyle += " " + m.className; }
            if (m.css) { css = (css ? css + ";" : "") + m.css; }
            if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle; }
            if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to); }
            // support for the old title property
            // https://github.com/codemirror/CodeMirror/pull/5673
            if (m.title) { (attributes || (attributes = {})).title = m.title; }
            if (m.attributes) {
              for (var attr in m.attributes)
                { (attributes || (attributes = {}))[attr] = m.attributes[attr]; }
            }
            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
              { collapsed = sp; }
          } else if (sp.from > pos && nextChange > sp.from) {
            nextChange = sp.from;
          }
        }
        if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
          { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1]; } } }

        if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
          { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]); } }
        if (collapsed && (collapsed.from || 0) == pos) {
          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                             collapsed.marker, collapsed.from == null);
          if (collapsed.to == null) { return }
          if (collapsed.to == pos) { collapsed = false; }
        }
      }
      if (pos >= len) { break }

      var upto = Math.min(len, nextChange);
      while (true) {
        if (text) {
          var end = pos + text.length;
          if (!collapsed) {
            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes);
          }
          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
          pos = end;
          spanStartStyle = "";
        }
        text = allText.slice(at, at = styles[i++]);
        style = interpretTokenStyle(styles[i++], builder.cm.options);
      }
    }
  }


  // These objects are used to represent the visible (currently drawn)
  // part of the document. A LineView may correspond to multiple
  // logical lines, if those are connected by collapsed ranges.
  function LineView(doc, line, lineN) {
    // The starting line
    this.line = line;
    // Continuing lines, if any
    this.rest = visualLineContinued(line);
    // Number of logical lines in this visual line
    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
    this.node = this.text = null;
    this.hidden = lineIsHidden(doc, line);
  }

  // Create a range of LineView objects for the given lines.
  function buildViewArray(cm, from, to) {
    var array = [], nextPos;
    for (var pos = from; pos < to; pos = nextPos) {
      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
      nextPos = pos + view.size;
      array.push(view);
    }
    return array
  }

  var operationGroup = null;

  function pushOperation(op) {
    if (operationGroup) {
      operationGroup.ops.push(op);
    } else {
      op.ownsGroup = operationGroup = {
        ops: [op],
        delayedCallbacks: []
      };
    }
  }

  function fireCallbacksForOps(group) {
    // Calls delayed callbacks and cursorActivity handlers until no
    // new ones appear
    var callbacks = group.delayedCallbacks, i = 0;
    do {
      for (; i < callbacks.length; i++)
        { callbacks[i].call(null); }
      for (var j = 0; j < group.ops.length; j++) {
        var op = group.ops[j];
        if (op.cursorActivityHandlers)
          { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
            { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm); } }
      }
    } while (i < callbacks.length)
  }

  function finishOperation(op, endCb) {
    var group = op.ownsGroup;
    if (!group) { return }

    try { fireCallbacksForOps(group); }
    finally {
      operationGroup = null;
      endCb(group);
    }
  }

  var orphanDelayedCallbacks = null;

  // Often, we want to signal events at a point where we are in the
  // middle of some work, but don't want the handler to start calling
  // other methods on the editor, which might be in an inconsistent
  // state or simply not expect any other events to happen.
  // signalLater looks whether there are any handlers, and schedules
  // them to be executed when the last operation ends, or, if no
  // operation is active, when a timeout fires.
  function signalLater(emitter, type /*, values...*/) {
    var arr = getHandlers(emitter, type);
    if (!arr.length) { return }
    var args = Array.prototype.slice.call(arguments, 2), list;
    if (operationGroup) {
      list = operationGroup.delayedCallbacks;
    } else if (orphanDelayedCallbacks) {
      list = orphanDelayedCallbacks;
    } else {
      list = orphanDelayedCallbacks = [];
      setTimeout(fireOrphanDelayed, 0);
    }
    var loop = function ( i ) {
      list.push(function () { return arr[i].apply(null, args); });
    };

    for (var i = 0; i < arr.length; ++i)
      loop( i );
  }

  function fireOrphanDelayed() {
    var delayed = orphanDelayedCallbacks;
    orphanDelayedCallbacks = null;
    for (var i = 0; i < delayed.length; ++i) { delayed[i](); }
  }

  // When an aspect of a line changes, a string is added to
  // lineView.changes. This updates the relevant part of the line's
  // DOM structure.
  function updateLineForChanges(cm, lineView, lineN, dims) {
    for (var j = 0; j < lineView.changes.length; j++) {
      var type = lineView.changes[j];
      if (type == "text") { updateLineText(cm, lineView); }
      else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims); }
      else if (type == "class") { updateLineClasses(cm, lineView); }
      else if (type == "widget") { updateLineWidgets(cm, lineView, dims); }
    }
    lineView.changes = null;
  }

  // Lines with gutter elements, widgets or a background class need to
  // be wrapped, and have the extra elements added to the wrapper div
  function ensureLineWrapped(lineView) {
    if (lineView.node == lineView.text) {
      lineView.node = elt("div", null, null, "position: relative");
      if (lineView.text.parentNode)
        { lineView.text.parentNode.replaceChild(lineView.node, lineView.text); }
      lineView.node.appendChild(lineView.text);
      if (ie && ie_version < 8) { lineView.node.style.zIndex = 2; }
    }
    return lineView.node
  }

  function updateLineBackground(cm, lineView) {
    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
    if (cls) { cls += " CodeMirror-linebackground"; }
    if (lineView.background) {
      if (cls) { lineView.background.className = cls; }
      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
    } else if (cls) {
      var wrap = ensureLineWrapped(lineView);
      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
      cm.display.input.setUneditable(lineView.background);
    }
  }

  // Wrapper around buildLineContent which will reuse the structure
  // in display.externalMeasured when possible.
  function getLineContent(cm, lineView) {
    var ext = cm.display.externalMeasured;
    if (ext && ext.line == lineView.line) {
      cm.display.externalMeasured = null;
      lineView.measure = ext.measure;
      return ext.built
    }
    return buildLineContent(cm, lineView)
  }

  // Redraw the line's text. Interacts with the background and text
  // classes because the mode may output tokens that influence these
  // classes.
  function updateLineText(cm, lineView) {
    var cls = lineView.text.className;
    var built = getLineContent(cm, lineView);
    if (lineView.text == lineView.node) { lineView.node = built.pre; }
    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
    lineView.text = built.pre;
    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
      lineView.bgClass = built.bgClass;
      lineView.textClass = built.textClass;
      updateLineClasses(cm, lineView);
    } else if (cls) {
      lineView.text.className = cls;
    }
  }

  function updateLineClasses(cm, lineView) {
    updateLineBackground(cm, lineView);
    if (lineView.line.wrapClass)
      { ensureLineWrapped(lineView).className = lineView.line.wrapClass; }
    else if (lineView.node != lineView.text)
      { lineView.node.className = ""; }
    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
    lineView.text.className = textClass || "";
  }

  function updateLineGutter(cm, lineView, lineN, dims) {
    if (lineView.gutter) {
      lineView.node.removeChild(lineView.gutter);
      lineView.gutter = null;
    }
    if (lineView.gutterBackground) {
      lineView.node.removeChild(lineView.gutterBackground);
      lineView.gutterBackground = null;
    }
    if (lineView.line.gutterClass) {
      var wrap = ensureLineWrapped(lineView);
      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                      ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"));
      cm.display.input.setUneditable(lineView.gutterBackground);
      wrap.insertBefore(lineView.gutterBackground, lineView.text);
    }
    var markers = lineView.line.gutterMarkers;
    if (cm.options.lineNumbers || markers) {
      var wrap$1 = ensureLineWrapped(lineView);
      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"));
      gutterWrap.setAttribute("aria-hidden", "true");
      cm.display.input.setUneditable(gutterWrap);
      wrap$1.insertBefore(gutterWrap, lineView.text);
      if (lineView.line.gutterClass)
        { gutterWrap.className += " " + lineView.line.gutterClass; }
      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
        { lineView.lineNumber = gutterWrap.appendChild(
          elt("div", lineNumberFor(cm.options, lineN),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))); }
      if (markers) { for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
        var id = cm.display.gutterSpecs[k].className, found = markers.hasOwnProperty(id) && markers[id];
        if (found)
          { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
                                     ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))); }
      } }
    }
  }

  function updateLineWidgets(cm, lineView, dims) {
    if (lineView.alignable) { lineView.alignable = null; }
    var isWidget = classTest("CodeMirror-linewidget");
    for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
      next = node.nextSibling;
      if (isWidget.test(node.className)) { lineView.node.removeChild(node); }
    }
    insertLineWidgets(cm, lineView, dims);
  }

  // Build a line's DOM representation from scratch
  function buildLineElement(cm, lineView, lineN, dims) {
    var built = getLineContent(cm, lineView);
    lineView.text = lineView.node = built.pre;
    if (built.bgClass) { lineView.bgClass = built.bgClass; }
    if (built.textClass) { lineView.textClass = built.textClass; }

    updateLineClasses(cm, lineView);
    updateLineGutter(cm, lineView, lineN, dims);
    insertLineWidgets(cm, lineView, dims);
    return lineView.node
  }

  // A lineView may contain multiple logical lines (when merged by
  // collapsed spans). The widgets for all of them need to be drawn.
  function insertLineWidgets(cm, lineView, dims) {
    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
      { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false); } }
  }

  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
    if (!line.widgets) { return }
    var wrap = ensureLineWrapped(lineView);
    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""));
      if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true"); }
      positionLineWidget(widget, node, lineView, dims);
      cm.display.input.setUneditable(node);
      if (allowAbove && widget.above)
        { wrap.insertBefore(node, lineView.gutter || lineView.text); }
      else
        { wrap.appendChild(node); }
      signalLater(widget, "redraw");
    }
  }

  function positionLineWidget(widget, node, lineView, dims) {
    if (widget.noHScroll) {
  (lineView.alignable || (lineView.alignable = [])).push(node);
      var width = dims.wrapperWidth;
      node.style.left = dims.fixedPos + "px";
      if (!widget.coverGutter) {
        width -= dims.gutterTotalWidth;
        node.style.paddingLeft = dims.gutterTotalWidth + "px";
      }
      node.style.width = width + "px";
    }
    if (widget.coverGutter) {
      node.style.zIndex = 5;
      node.style.position = "relative";
      if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px"; }
    }
  }

  function widgetHeight(widget) {
    if (widget.height != null) { return widget.height }
    var cm = widget.doc.cm;
    if (!cm) { return 0 }
    if (!contains(document.body, widget.node)) {
      var parentStyle = "position: relative;";
      if (widget.coverGutter)
        { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"; }
      if (widget.noHScroll)
        { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"; }
      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
    }
    return widget.height = widget.node.parentNode.offsetHeight
  }

  // Return true when the given mouse event happened in a widget
  function eventInWidget(display, e) {
    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
          (n.parentNode == display.sizer && n != display.mover))
        { return true }
    }
  }

  // POSITION MEASUREMENT

  function paddingTop(display) {return display.lineSpace.offsetTop}
  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
  function paddingH(display) {
    if (display.cachedPaddingH) { return display.cachedPaddingH }
    var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
    if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data; }
    return data
  }

  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
  function displayWidth(cm) {
    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
  }
  function displayHeight(cm) {
    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
  }

  // Ensure the lineView.wrapping.heights array is populated. This is
  // an array of bottom offsets for the lines that make up a drawn
  // line. When lineWrapping is on, there might be more than one
  // height.
  function ensureLineHeights(cm, lineView, rect) {
    var wrapping = cm.options.lineWrapping;
    var curWidth = wrapping && displayWidth(cm);
    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
      var heights = lineView.measure.heights = [];
      if (wrapping) {
        lineView.measure.width = curWidth;
        var rects = lineView.text.firstChild.getClientRects();
        for (var i = 0; i < rects.length - 1; i++) {
          var cur = rects[i], next = rects[i + 1];
          if (Math.abs(cur.bottom - next.bottom) > 2)
            { heights.push((cur.bottom + next.top) / 2 - rect.top); }
        }
      }
      heights.push(rect.bottom - rect.top);
    }
  }

  // Find a line map (mapping character offsets to text nodes) and a
  // measurement cache for the given line number. (A line view might
  // contain multiple lines when collapsed ranges are present.)
  function mapFromLineView(lineView, line, lineN) {
    if (lineView.line == line)
      { return {map: lineView.measure.map, cache: lineView.measure.cache} }
    if (lineView.rest) {
      for (var i = 0; i < lineView.rest.length; i++)
        { if (lineView.rest[i] == line)
          { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
      for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
        { if (lineNo(lineView.rest[i$1]) > lineN)
          { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
    }
  }

  // Render a line into the hidden node display.externalMeasured. Used
  // when measurement is needed for a line that's not in the viewport.
  function updateExternalMeasurement(cm, line) {
    line = visualLine(line);
    var lineN = lineNo(line);
    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
    view.lineN = lineN;
    var built = view.built = buildLineContent(cm, view);
    view.text = built.pre;
    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
    return view
  }

  // Get a {top, bottom, left, right} box (in line-local coordinates)
  // for a given character.
  function measureChar(cm, line, ch, bias) {
    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
  }

  // Find a line view that corresponds to the given line number.
  function findViewForLine(cm, lineN) {
    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
      { return cm.display.view[findViewIndex(cm, lineN)] }
    var ext = cm.display.externalMeasured;
    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
      { return ext }
  }

  // Measurement can be split in two steps, the set-up work that
  // applies to the whole line, and the measurement of the actual
  // character. Functions like coordsChar, that need to do a lot of
  // measurements in a row, can thus ensure that the set-up work is
  // only done once.
  function prepareMeasureForLine(cm, line) {
    var lineN = lineNo(line);
    var view = findViewForLine(cm, lineN);
    if (view && !view.text) {
      view = null;
    } else if (view && view.changes) {
      updateLineForChanges(cm, view, lineN, getDimensions(cm));
      cm.curOp.forceUpdate = true;
    }
    if (!view)
      { view = updateExternalMeasurement(cm, line); }

    var info = mapFromLineView(view, line, lineN);
    return {
      line: line, view: view, rect: null,
      map: info.map, cache: info.cache, before: info.before,
      hasHeights: false
    }
  }

  // Given a prepared measurement object, measures the position of an
  // actual character (or fetches it from the cache).
  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
    if (prepared.before) { ch = -1; }
    var key = ch + (bias || ""), found;
    if (prepared.cache.hasOwnProperty(key)) {
      found = prepared.cache[key];
    } else {
      if (!prepared.rect)
        { prepared.rect = prepared.view.text.getBoundingClientRect(); }
      if (!prepared.hasHeights) {
        ensureLineHeights(cm, prepared.view, prepared.rect);
        prepared.hasHeights = true;
      }
      found = measureCharInner(cm, prepared, ch, bias);
      if (!found.bogus) { prepared.cache[key] = found; }
    }
    return {left: found.left, right: found.right,
            top: varHeight ? found.rtop : found.top,
            bottom: varHeight ? found.rbottom : found.bottom}
  }

  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

  function nodeAndOffsetInLineMap(map, ch, bias) {
    var node, start, end, collapse, mStart, mEnd;
    // First, search the line map for the text node corresponding to,
    // or closest to, the target character.
    for (var i = 0; i < map.length; i += 3) {
      mStart = map[i];
      mEnd = map[i + 1];
      if (ch < mStart) {
        start = 0; end = 1;
        collapse = "left";
      } else if (ch < mEnd) {
        start = ch - mStart;
        end = start + 1;
      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
        end = mEnd - mStart;
        start = end - 1;
        if (ch >= mEnd) { collapse = "right"; }
      }
      if (start != null) {
        node = map[i + 2];
        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
          { collapse = bias; }
        if (bias == "left" && start == 0)
          { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
            node = map[(i -= 3) + 2];
            collapse = "left";
          } }
        if (bias == "right" && start == mEnd - mStart)
          { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
            node = map[(i += 3) + 2];
            collapse = "right";
          } }
        break
      }
    }
    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
  }

  function getUsefulRect(rects, bias) {
    var rect = nullRect;
    if (bias == "left") { for (var i = 0; i < rects.length; i++) {
      if ((rect = rects[i]).left != rect.right) { break }
    } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
      if ((rect = rects[i$1]).left != rect.right) { break }
    } }
    return rect
  }

  function measureCharInner(cm, prepared, ch, bias) {
    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

    var rect;
    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
      for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start; }
        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end; }
        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
          { rect = node.parentNode.getBoundingClientRect(); }
        else
          { rect = getUsefulRect(range(node, start, end).getClientRects(), bias); }
        if (rect.left || rect.right || start == 0) { break }
        end = start;
        start = start - 1;
        collapse = "right";
      }
      if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect); }
    } else { // If it is a widget, simply get the box for the whole widget.
      if (start > 0) { collapse = bias = "right"; }
      var rects;
      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
        { rect = rects[bias == "right" ? rects.length - 1 : 0]; }
      else
        { rect = node.getBoundingClientRect(); }
    }
    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
      var rSpan = node.parentNode.getClientRects()[0];
      if (rSpan)
        { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom}; }
      else
        { rect = nullRect; }
    }

    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
    var mid = (rtop + rbot) / 2;
    var heights = prepared.view.measure.heights;
    var i = 0;
    for (; i < heights.length - 1; i++)
      { if (mid < heights[i]) { break } }
    var top = i ? heights[i - 1] : 0, bot = heights[i];
    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                  top: top, bottom: bot};
    if (!rect.left && !rect.right) { result.bogus = true; }
    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

    return result
  }

  // Work around problem with bounding client rects on ranges being
  // returned incorrectly when zoomed on IE10 and below.
  function maybeUpdateRectForZooming(measure, rect) {
    if (!window.screen || screen.logicalXDPI == null ||
        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
      { return rect }
    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
    return {left: rect.left * scaleX, right: rect.right * scaleX,
            top: rect.top * scaleY, bottom: rect.bottom * scaleY}
  }

  function clearLineMeasurementCacheFor(lineView) {
    if (lineView.measure) {
      lineView.measure.cache = {};
      lineView.measure.heights = null;
      if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
        { lineView.measure.caches[i] = {}; } }
    }
  }

  function clearLineMeasurementCache(cm) {
    cm.display.externalMeasure = null;
    removeChildren(cm.display.lineMeasure);
    for (var i = 0; i < cm.display.view.length; i++)
      { clearLineMeasurementCacheFor(cm.display.view[i]); }
  }

  function clearCaches(cm) {
    clearLineMeasurementCache(cm);
    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
    if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true; }
    cm.display.lineNumChars = null;
  }

  function pageScrollX(doc) {
    // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
    // which causes page_Offset and bounding client rects to use
    // different reference viewports and invalidate our calculations.
    if (chrome && android) { return -(doc.body.getBoundingClientRect().left - parseInt(getComputedStyle(doc.body).marginLeft)) }
    return doc.defaultView.pageXOffset || (doc.documentElement || doc.body).scrollLeft
  }
  function pageScrollY(doc) {
    if (chrome && android) { return -(doc.body.getBoundingClientRect().top - parseInt(getComputedStyle(doc.body).marginTop)) }
    return doc.defaultView.pageYOffset || (doc.documentElement || doc.body).scrollTop
  }

  function widgetTopHeight(lineObj) {
    var ref = visualLine(lineObj);
    var widgets = ref.widgets;
    var height = 0;
    if (widgets) { for (var i = 0; i < widgets.length; ++i) { if (widgets[i].above)
      { height += widgetHeight(widgets[i]); } } }
    return height
  }

  // Converts a {top, bottom, left, right} box from line-local
  // coordinates into another coordinate system. Context may be one of
  // "line", "div" (display.lineDiv), "local"./null (editor), "window",
  // or "page".
  function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
    if (!includeWidgets) {
      var height = widgetTopHeight(lineObj);
      rect.top += height; rect.bottom += height;
    }
    if (context == "line") { return rect }
    if (!context) { context = "local"; }
    var yOff = heightAtLine(lineObj);
    if (context == "local") { yOff += paddingTop(cm.display); }
    else { yOff -= cm.display.viewOffset; }
    if (context == "page" || context == "window") {
      var lOff = cm.display.lineSpace.getBoundingClientRect();
      yOff += lOff.top + (context == "window" ? 0 : pageScrollY(doc(cm)));
      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX(doc(cm)));
      rect.left += xOff; rect.right += xOff;
    }
    rect.top += yOff; rect.bottom += yOff;
    return rect
  }

  // Coverts a box from "div" coords to another coordinate system.
  // Context may be "window", "page", "div", or "local"./null.
  function fromCoordSystem(cm, coords, context) {
    if (context == "div") { return coords }
    var left = coords.left, top = coords.top;
    // First move into "page" coordinate system
    if (context == "page") {
      left -= pageScrollX(doc(cm));
      top -= pageScrollY(doc(cm));
    } else if (context == "local" || !context) {
      var localBox = cm.display.sizer.getBoundingClientRect();
      left += localBox.left;
      top += localBox.top;
    }

    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
  }

  function charCoords(cm, pos, context, lineObj, bias) {
    if (!lineObj) { lineObj = getLine(cm.doc, pos.line); }
    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
  }

  // Returns a box for a given cursor position, which may have an
  // 'other' property containing the position of the secondary cursor
  // on a bidi boundary.
  // A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
  // and after `char - 1` in writing order of `char - 1`
  // A cursor Pos(line, char, "after") is on the same visual line as `char`
  // and before `char` in writing order of `char`
  // Examples (upper-case letters are RTL, lower-case are LTR):
  //     Pos(0, 1, ...)
  //     before   after
  // ab     a|b     a|b
  // aB     a|B     aB|
  // Ab     |Ab     A|b
  // AB     B|A     B|A
  // Every position after the last character on a line is considered to stick
  // to the last character on the line.
  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
    lineObj = lineObj || getLine(cm.doc, pos.line);
    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
    function get(ch, right) {
      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
      if (right) { m.left = m.right; } else { m.right = m.left; }
      return intoCoordSystem(cm, lineObj, m, context)
    }
    var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
    if (ch >= lineObj.text.length) {
      ch = lineObj.text.length;
      sticky = "before";
    } else if (ch <= 0) {
      ch = 0;
      sticky = "after";
    }
    if (!order) { return get(sticky == "before" ? ch - 1 : ch, sticky == "before") }

    function getBidi(ch, partPos, invert) {
      var part = order[partPos], right = part.level == 1;
      return get(invert ? ch - 1 : ch, right != invert)
    }
    var partPos = getBidiPartAt(order, ch, sticky);
    var other = bidiOther;
    var val = getBidi(ch, partPos, sticky == "before");
    if (other != null) { val.other = getBidi(ch, other, sticky != "before"); }
    return val
  }

  // Used to cheaply estimate the coordinates for a position. Used for
  // intermediate scroll updates.
  function estimateCoords(cm, pos) {
    var left = 0;
    pos = clipPos(cm.doc, pos);
    if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch; }
    var lineObj = getLine(cm.doc, pos.line);
    var top = heightAtLine(lineObj) + paddingTop(cm.display);
    return {left: left, right: left, top: top, bottom: top + lineObj.height}
  }

  // Positions returned by coordsChar contain some extra information.
  // xRel is the relative x position of the input coordinates compared
  // to the found position (so xRel > 0 means the coordinates are to
  // the right of the character position, for example). When outside
  // is true, that means the coordinates lie outside the line's
  // vertical range.
  function PosWithInfo(line, ch, sticky, outside, xRel) {
    var pos = Pos(line, ch, sticky);
    pos.xRel = xRel;
    if (outside) { pos.outside = outside; }
    return pos
  }

  // Compute the character position closest to the given coordinates.
  // Input must be lineSpace-local ("div" coordinate system).
  function coordsChar(cm, x, y) {
    var doc = cm.doc;
    y += cm.display.viewOffset;
    if (y < 0) { return PosWithInfo(doc.first, 0, null, -1, -1) }
    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
    if (lineN > last)
      { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, 1, 1) }
    if (x < 0) { x = 0; }

    var lineObj = getLine(doc, lineN);
    for (;;) {
      var found = coordsCharInner(cm, lineObj, lineN, x, y);
      var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));
      if (!collapsed) { return found }
      var rangeEnd = collapsed.find(1);
      if (rangeEnd.line == lineN) { return rangeEnd }
      lineObj = getLine(doc, lineN = rangeEnd.line);
    }
  }

  function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
    y -= widgetTopHeight(lineObj);
    var end = lineObj.text.length;
    var begin = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y; }, end, 0);
    end = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch).top > y; }, begin, end);
    return {begin: begin, end: end}
  }

  function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
    var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
    return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
  }

  // Returns true if the given side of a box is after the given
  // coordinates, in top-to-bottom, left-to-right order.
  function boxIsAfter(box, x, y, left) {
    return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x
  }

  function coordsCharInner(cm, lineObj, lineNo, x, y) {
    // Move y into line-local coordinate space
    y -= heightAtLine(lineObj);
    var preparedMeasure = prepareMeasureForLine(cm, lineObj);
    // When directly calling `measureCharPrepared`, we have to adjust
    // for the widgets at this line.
    var widgetHeight = widgetTopHeight(lineObj);
    var begin = 0, end = lineObj.text.length, ltr = true;

    var order = getOrder(lineObj, cm.doc.direction);
    // If the line isn't plain left-to-right text, first figure out
    // which bidi section the coordinates fall into.
    if (order) {
      var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)
                   (cm, lineObj, lineNo, preparedMeasure, order, x, y);
      ltr = part.level != 1;
      // The awkward -1 offsets are needed because findFirst (called
      // on these below) will treat its first bound as inclusive,
      // second as exclusive, but we want to actually address the
      // characters in the part's range
      begin = ltr ? part.from : part.to - 1;
      end = ltr ? part.to : part.from - 1;
    }

    // A binary search to find the first character whose bounding box
    // starts after the coordinates. If we run across any whose box wrap
    // the coordinates, store that.
    var chAround = null, boxAround = null;
    var ch = findFirst(function (ch) {
      var box = measureCharPrepared(cm, preparedMeasure, ch);
      box.top += widgetHeight; box.bottom += widgetHeight;
      if (!boxIsAfter(box, x, y, false)) { return false }
      if (box.top <= y && box.left <= x) {
        chAround = ch;
        boxAround = box;
      }
      return true
    }, begin, end);

    var baseX, sticky, outside = false;
    // If a box around the coordinates was found, use that
    if (boxAround) {
      // Distinguish coordinates nearer to the left or right side of the box
      var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
      ch = chAround + (atStart ? 0 : 1);
      sticky = atStart ? "after" : "before";
      baseX = atLeft ? boxAround.left : boxAround.right;
    } else {
      // (Adjust for extended bound, if necessary.)
      if (!ltr && (ch == end || ch == begin)) { ch++; }
      // To determine which side to associate with, get the box to the
      // left of the character and compare it's vertical position to the
      // coordinates
      sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" :
        (measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight <= y) == ltr ?
        "after" : "before";
      // Now get accurate coordinates for this place, in order to get a
      // base X position
      var coords = cursorCoords(cm, Pos(lineNo, ch, sticky), "line", lineObj, preparedMeasure);
      baseX = coords.left;
      outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
    }

    ch = skipExtendingChars(lineObj.text, ch, 1);
    return PosWithInfo(lineNo, ch, sticky, outside, x - baseX)
  }

  function coordsBidiPart(cm, lineObj, lineNo, preparedMeasure, order, x, y) {
    // Bidi parts are sorted left-to-right, and in a non-line-wrapping
    // situation, we can take this ordering to correspond to the visual
    // ordering. This finds the first part whose end is after the given
    // coordinates.
    var index = findFirst(function (i) {
      var part = order[i], ltr = part.level != 1;
      return boxIsAfter(cursorCoords(cm, Pos(lineNo, ltr ? part.to : part.from, ltr ? "before" : "after"),
                                     "line", lineObj, preparedMeasure), x, y, true)
    }, 0, order.length - 1);
    var part = order[index];
    // If this isn't the first part, the part's start is also after
    // the coordinates, and the coordinates aren't on the same line as
    // that start, move one part back.
    if (index > 0) {
      var ltr = part.level != 1;
      var start = cursorCoords(cm, Pos(lineNo, ltr ? part.from : part.to, ltr ? "after" : "before"),
                               "line", lineObj, preparedMeasure);
      if (boxIsAfter(start, x, y, true) && start.top > y)
        { part = order[index - 1]; }
    }
    return part
  }

  function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
    // In a wrapped line, rtl text on wrapping boundaries can do things
    // that don't correspond to the ordering in our `order` array at
    // all, so a binary search doesn't work, and we want to return a
    // part that only spans one line so that the binary search in
    // coordsCharInner is safe. As such, we first find the extent of the
    // wrapped line, and then do a flat search in which we discard any
    // spans that aren't on the line.
    var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
    var begin = ref.begin;
    var end = ref.end;
    if (/\s/.test(lineObj.text.charAt(end - 1))) { end--; }
    var part = null, closestDist = null;
    for (var i = 0; i < order.length; i++) {
      var p = order[i];
      if (p.from >= end || p.to <= begin) { continue }
      var ltr = p.level != 1;
      var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
      // Weigh against spans ending before this, so that they are only
      // picked if nothing ends after
      var dist = endX < x ? x - endX + 1e9 : endX - x;
      if (!part || closestDist > dist) {
        part = p;
        closestDist = dist;
      }
    }
    if (!part) { part = order[order.length - 1]; }
    // Clip the part to the wrapped line.
    if (part.from < begin) { part = {from: begin, to: part.to, level: part.level}; }
    if (part.to > end) { part = {from: part.from, to: end, level: part.level}; }
    return part
  }

  var measureText;
  // Compute the default text height.
  function textHeight(display) {
    if (display.cachedTextHeight != null) { return display.cachedTextHeight }
    if (measureText == null) {
      measureText = elt("pre", null, "CodeMirror-line-like");
      // Measure a bunch of lines, for browsers that compute
      // fractional heights.
      for (var i = 0; i < 49; ++i) {
        measureText.appendChild(document.createTextNode("x"));
        measureText.appendChild(elt("br"));
      }
      measureText.appendChild(document.createTextNode("x"));
    }
    removeChildrenAndAdd(display.measure, measureText);
    var height = measureText.offsetHeight / 50;
    if (height > 3) { display.cachedTextHeight = height; }
    removeChildren(display.measure);
    return height || 1
  }

  // Compute the default character width.
  function charWidth(display) {
    if (display.cachedCharWidth != null) { return display.cachedCharWidth }
    var anchor = elt("span", "xxxxxxxxxx");
    var pre = elt("pre", [anchor], "CodeMirror-line-like");
    removeChildrenAndAdd(display.measure, pre);
    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
    if (width > 2) { display.cachedCharWidth = width; }
    return width || 10
  }

  // Do a bulk-read of the DOM positions and sizes needed to draw the
  // view, so that we don't interleave reading and writing to the DOM.
  function getDimensions(cm) {
    var d = cm.display, left = {}, width = {};
    var gutterLeft = d.gutters.clientLeft;
    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
      var id = cm.display.gutterSpecs[i].className;
      left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
      width[id] = n.clientWidth;
    }
    return {fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth}
  }

  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
  // but using getBoundingClientRect to get a sub-pixel-accurate
  // result.
  function compensateForHScroll(display) {
    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
  }

  // Returns a function that estimates the height of a line, to use as
  // first approximation until the line becomes visible (and is thus
  // properly measurable).
  function estimateHeight(cm) {
    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
    return function (line) {
      if (lineIsHidden(cm.doc, line)) { return 0 }

      var widgetsHeight = 0;
      if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
        if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height; }
      } }

      if (wrapping)
        { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
      else
        { return widgetsHeight + th }
    }
  }

  function estimateLineHeights(cm) {
    var doc = cm.doc, est = estimateHeight(cm);
    doc.iter(function (line) {
      var estHeight = est(line);
      if (estHeight != line.height) { updateLineHeight(line, estHeight); }
    });
  }

  // Given a mouse event, find the corresponding position. If liberal
  // is false, it checks whether a gutter or scrollbar was clicked,
  // and returns null if it was. forRect is used by rectangular
  // selections, and tries to estimate a character position even for
  // coordinates beyond the right of the text.
  function posFromMouse(cm, e, liberal, forRect) {
    var display = cm.display;
    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

    var x, y, space = display.lineSpace.getBoundingClientRect();
    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
    try { x = e.clientX - space.left; y = e.clientY - space.top; }
    catch (e$1) { return null }
    var coords = coordsChar(cm, x, y), line;
    if (forRect && coords.xRel > 0 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
    }
    return coords
  }

  // Find the view element corresponding to a given line. Return null
  // when the line isn't visible.
  function findViewIndex(cm, n) {
    if (n >= cm.display.viewTo) { return null }
    n -= cm.display.viewFrom;
    if (n < 0) { return null }
    var view = cm.display.view;
    for (var i = 0; i < view.length; i++) {
      n -= view[i].size;
      if (n < 0) { return i }
    }
  }

  // Updates the display.view data structure for a given change to the
  // document. From and to are in pre-change coordinates. Lendiff is
  // the amount of lines added or subtracted by the change. This is
  // used for changes that span multiple lines, or change the way
  // lines are divided into visual lines. regLineChange (below)
  // registers single-line changes.
  function regChange(cm, from, to, lendiff) {
    if (from == null) { from = cm.doc.first; }
    if (to == null) { to = cm.doc.first + cm.doc.size; }
    if (!lendiff) { lendiff = 0; }

    var display = cm.display;
    if (lendiff && to < display.viewTo &&
        (display.updateLineNumbers == null || display.updateLineNumbers > from))
      { display.updateLineNumbers = from; }

    cm.curOp.viewChanged = true;

    if (from >= display.viewTo) { // Change after
      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
        { resetView(cm); }
    } else if (to <= display.viewFrom) { // Change before
      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
        resetView(cm);
      } else {
        display.viewFrom += lendiff;
        display.viewTo += lendiff;
      }
    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
      resetView(cm);
    } else if (from <= display.viewFrom) { // Top overlap
      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cut) {
        display.view = display.view.slice(cut.index);
        display.viewFrom = cut.lineN;
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    } else if (to >= display.viewTo) { // Bottom overlap
      var cut$1 = viewCuttingPoint(cm, from, from, -1);
      if (cut$1) {
        display.view = display.view.slice(0, cut$1.index);
        display.viewTo = cut$1.lineN;
      } else {
        resetView(cm);
      }
    } else { // Gap in the middle
      var cutTop = viewCuttingPoint(cm, from, from, -1);
      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cutTop && cutBot) {
        display.view = display.view.slice(0, cutTop.index)
          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
          .concat(display.view.slice(cutBot.index));
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    }

    var ext = display.externalMeasured;
    if (ext) {
      if (to < ext.lineN)
        { ext.lineN += lendiff; }
      else if (from < ext.lineN + ext.size)
        { display.externalMeasured = null; }
    }
  }

  // Register a change to a single line. Type must be one of "text",
  // "gutter", "class", "widget"
  function regLineChange(cm, line, type) {
    cm.curOp.viewChanged = true;
    var display = cm.display, ext = cm.display.externalMeasured;
    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
      { display.externalMeasured = null; }

    if (line < display.viewFrom || line >= display.viewTo) { return }
    var lineView = display.view[findViewIndex(cm, line)];
    if (lineView.node == null) { return }
    var arr = lineView.changes || (lineView.changes = []);
    if (indexOf(arr, type) == -1) { arr.push(type); }
  }

  // Clear the view.
  function resetView(cm) {
    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
    cm.display.view = [];
    cm.display.viewOffset = 0;
  }

  function viewCuttingPoint(cm, oldN, newN, dir) {
    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
      { return {index: index, lineN: newN} }
    var n = cm.display.viewFrom;
    for (var i = 0; i < index; i++)
      { n += view[i].size; }
    if (n != oldN) {
      if (dir > 0) {
        if (index == view.length - 1) { return null }
        diff = (n + view[index].size) - oldN;
        index++;
      } else {
        diff = n - oldN;
      }
      oldN += diff; newN += diff;
    }
    while (visualLineNo(cm.doc, newN) != newN) {
      if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
      index += dir;
    }
    return {index: index, lineN: newN}
  }

  // Force the view to cover a given range, adding empty view element
  // or clipping off existing ones as needed.
  function adjustView(cm, from, to) {
    var display = cm.display, view = display.view;
    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
      display.view = buildViewArray(cm, from, to);
      display.viewFrom = from;
    } else {
      if (display.viewFrom > from)
        { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view); }
      else if (display.viewFrom < from)
        { display.view = display.view.slice(findViewIndex(cm, from)); }
      display.viewFrom = from;
      if (display.viewTo < to)
        { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)); }
      else if (display.viewTo > to)
        { display.view = display.view.slice(0, findViewIndex(cm, to)); }
    }
    display.viewTo = to;
  }

  // Count the number of lines in the view whose DOM representation is
  // out of date (or nonexistent).
  function countDirtyView(cm) {
    var view = cm.display.view, dirty = 0;
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty; }
    }
    return dirty
  }

  function updateSelection(cm) {
    cm.display.input.showSelection(cm.display.input.prepareSelection());
  }

  function prepareSelection(cm, primary) {
    if ( primary === void 0 ) primary = true;

    var doc = cm.doc, result = {};
    var curFragment = result.cursors = document.createDocumentFragment();
    var selFragment = result.selection = document.createDocumentFragment();

    var customCursor = cm.options.$customCursor;
    if (customCursor) { primary = true; }
    for (var i = 0; i < doc.sel.ranges.length; i++) {
      if (!primary && i == doc.sel.primIndex) { continue }
      var range = doc.sel.ranges[i];
      if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
      var collapsed = range.empty();
      if (customCursor) {
        var head = customCursor(cm, range);
        if (head) { drawSelectionCursor(cm, head, curFragment); }
      } else if (collapsed || cm.options.showCursorWhenSelecting) {
        drawSelectionCursor(cm, range.head, curFragment);
      }
      if (!collapsed)
        { drawSelectionRange(cm, range, selFragment); }
    }
    return result
  }

  // Draws a cursor for the given range
  function drawSelectionCursor(cm, head, output) {
    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
    cursor.style.left = pos.left + "px";
    cursor.style.top = pos.top + "px";
    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

    if (/\bcm-fat-cursor\b/.test(cm.getWrapperElement().className)) {
      var charPos = charCoords(cm, head, "div", null, null);
      var width = charPos.right - charPos.left;
      cursor.style.width = (width > 0 ? width : cm.defaultCharWidth()) + "px";
    }

    if (pos.other) {
      // Secondary cursor, shown when on a 'jump' in bi-directional text
      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
      otherCursor.style.display = "";
      otherCursor.style.left = pos.other.left + "px";
      otherCursor.style.top = pos.other.top + "px";
      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
    }
  }

  function cmpCoords(a, b) { return a.top - b.top || a.left - b.left }

  // Draws the given range as a highlighted selection
  function drawSelectionRange(cm, range, output) {
    var display = cm.display, doc = cm.doc;
    var fragment = document.createDocumentFragment();
    var padding = paddingH(cm.display), leftSide = padding.left;
    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
    var docLTR = doc.direction == "ltr";

    function add(left, top, width, bottom) {
      if (top < 0) { top = 0; }
      top = Math.round(top);
      bottom = Math.round(bottom);
      fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")));
    }

    function drawForLine(line, fromArg, toArg) {
      var lineObj = getLine(doc, line);
      var lineLen = lineObj.text.length;
      var start, end;
      function coords(ch, bias) {
        return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
      }

      function wrapX(pos, dir, side) {
        var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
        var prop = (dir == "ltr") == (side == "after") ? "left" : "right";
        var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
        return coords(ch, prop)[prop]
      }

      var order = getOrder(lineObj, doc.direction);
      iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir, i) {
        var ltr = dir == "ltr";
        var fromPos = coords(from, ltr ? "left" : "right");
        var toPos = coords(to - 1, ltr ? "right" : "left");

        var openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen;
        var first = i == 0, last = !order || i == order.length - 1;
        if (toPos.top - fromPos.top <= 3) { // Single line
          var openLeft = (docLTR ? openStart : openEnd) && first;
          var openRight = (docLTR ? openEnd : openStart) && last;
          var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
          var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
          add(left, fromPos.top, right - left, fromPos.bottom);
        } else { // Multiple lines
          var topLeft, topRight, botLeft, botRight;
          if (ltr) {
            topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
            topRight = docLTR ? rightSide : wrapX(from, dir, "before");
            botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
            botRight = docLTR && openEnd && last ? rightSide : toPos.right;
          } else {
            topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
            topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
            botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
            botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
          }
          add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
          if (fromPos.bottom < toPos.top) { add(leftSide, fromPos.bottom, null, toPos.top); }
          add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
        }

        if (!start || cmpCoords(fromPos, start) < 0) { start = fromPos; }
        if (cmpCoords(toPos, start) < 0) { start = toPos; }
        if (!end || cmpCoords(fromPos, end) < 0) { end = fromPos; }
        if (cmpCoords(toPos, end) < 0) { end = toPos; }
      });
      return {start: start, end: end}
    }

    var sFrom = range.from(), sTo = range.to();
    if (sFrom.line == sTo.line) {
      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
    } else {
      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
      var singleVLine = visualLine(fromLine) == visualLine(toLine);
      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
      if (singleVLine) {
        if (leftEnd.top < rightStart.top - 2) {
          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
        } else {
          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
        }
      }
      if (leftEnd.bottom < rightStart.top)
        { add(leftSide, leftEnd.bottom, null, rightStart.top); }
    }

    output.appendChild(fragment);
  }

  // Cursor-blinking
  function restartBlink(cm) {
    if (!cm.state.focused) { return }
    var display = cm.display;
    clearInterval(display.blinker);
    var on = true;
    display.cursorDiv.style.visibility = "";
    if (cm.options.cursorBlinkRate > 0)
      { display.blinker = setInterval(function () {
        if (!cm.hasFocus()) { onBlur(cm); }
        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
      }, cm.options.cursorBlinkRate); }
    else if (cm.options.cursorBlinkRate < 0)
      { display.cursorDiv.style.visibility = "hidden"; }
  }

  function ensureFocus(cm) {
    if (!cm.hasFocus()) {
      cm.display.input.focus();
      if (!cm.state.focused) { onFocus(cm); }
    }
  }

  function delayBlurEvent(cm) {
    cm.state.delayingBlurEvent = true;
    setTimeout(function () { if (cm.state.delayingBlurEvent) {
      cm.state.delayingBlurEvent = false;
      if (cm.state.focused) { onBlur(cm); }
    } }, 100);
  }

  function onFocus(cm, e) {
    if (cm.state.delayingBlurEvent && !cm.state.draggingText) { cm.state.delayingBlurEvent = false; }

    if (cm.options.readOnly == "nocursor") { return }
    if (!cm.state.focused) {
      signal(cm, "focus", cm, e);
      cm.state.focused = true;
      addClass(cm.display.wrapper, "CodeMirror-focused");
      // This test prevents this from firing when a context
      // menu is closed (since the input reset would kill the
      // select-all detection hack)
      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
        cm.display.input.reset();
        if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20); } // Issue #1730
      }
      cm.display.input.receivedFocus();
    }
    restartBlink(cm);
  }
  function onBlur(cm, e) {
    if (cm.state.delayingBlurEvent) { return }

    if (cm.state.focused) {
      signal(cm, "blur", cm, e);
      cm.state.focused = false;
      rmClass(cm.display.wrapper, "CodeMirror-focused");
    }
    clearInterval(cm.display.blinker);
    setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false; } }, 150);
  }

  // Read the actual heights of the rendered lines, and update their
  // stored heights to match.
  function updateHeightsInViewport(cm) {
    var display = cm.display;
    var prevBottom = display.lineDiv.offsetTop;
    var viewTop = Math.max(0, display.scroller.getBoundingClientRect().top);
    var oldHeight = display.lineDiv.getBoundingClientRect().top;
    var mustScroll = 0;
    for (var i = 0; i < display.view.length; i++) {
      var cur = display.view[i], wrapping = cm.options.lineWrapping;
      var height = (void 0), width = 0;
      if (cur.hidden) { continue }
      oldHeight += cur.line.height;
      if (ie && ie_version < 8) {
        var bot = cur.node.offsetTop + cur.node.offsetHeight;
        height = bot - prevBottom;
        prevBottom = bot;
      } else {
        var box = cur.node.getBoundingClientRect();
        height = box.bottom - box.top;
        // Check that lines don't extend past the right of the current
        // editor width
        if (!wrapping && cur.text.firstChild)
          { width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1; }
      }
      var diff = cur.line.height - height;
      if (diff > .005 || diff < -.005) {
        if (oldHeight < viewTop) { mustScroll -= diff; }
        updateLineHeight(cur.line, height);
        updateWidgetHeight(cur.line);
        if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
          { updateWidgetHeight(cur.rest[j]); } }
      }
      if (width > cm.display.sizerWidth) {
        var chWidth = Math.ceil(width / charWidth(cm.display));
        if (chWidth > cm.display.maxLineLength) {
          cm.display.maxLineLength = chWidth;
          cm.display.maxLine = cur.line;
          cm.display.maxLineChanged = true;
        }
      }
    }
    if (Math.abs(mustScroll) > 2) { display.scroller.scrollTop += mustScroll; }
  }

  // Read and store the height of line widgets associated with the
  // given line.
  function updateWidgetHeight(line) {
    if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i) {
      var w = line.widgets[i], parent = w.node.parentNode;
      if (parent) { w.height = parent.offsetHeight; }
    } }
  }

  // Compute the lines that are visible in a given viewport (defaults
  // the the current scroll position). viewport may contain top,
  // height, and ensure (see op.scrollToPos) properties.
  function visibleLines(display, doc, viewport) {
    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
    top = Math.floor(top - paddingTop(display));
    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
    // forces those lines into the viewport (if possible).
    if (viewport && viewport.ensure) {
      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
      if (ensureFrom < from) {
        from = ensureFrom;
        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
        to = ensureTo;
      }
    }
    return {from: from, to: Math.max(to, from + 1)}
  }

  // SCROLLING THINGS INTO VIEW

  // If an editor sits on the top or bottom of the window, partially
  // scrolled out of view, this ensures that the cursor is visible.
  function maybeScrollWindow(cm, rect) {
    if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
    var doc = display.wrapper.ownerDocument;
    if (rect.top + box.top < 0) { doScroll = true; }
    else if (rect.bottom + box.top > (doc.defaultView.innerHeight || doc.documentElement.clientHeight)) { doScroll = false; }
    if (doScroll != null && !phantom) {
      var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (rect.left) + "px; width: " + (Math.max(2, rect.right - rect.left)) + "px;"));
      cm.display.lineSpace.appendChild(scrollNode);
      scrollNode.scrollIntoView(doScroll);
      cm.display.lineSpace.removeChild(scrollNode);
    }
  }

  // Scroll a given position into view (immediately), verifying that
  // it actually became visible (as line heights are accurately
  // measured, the position of something may 'drift' during drawing).
  function scrollPosIntoView(cm, pos, end, margin) {
    if (margin == null) { margin = 0; }
    var rect;
    if (!cm.options.lineWrapping && pos == end) {
      // Set pos and end to the cursor positions around the character pos sticks to
      // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
      // If pos == Pos(_, 0, "before"), pos and end are unchanged
      end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
      pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
    }
    for (var limit = 0; limit < 5; limit++) {
      var changed = false;
      var coords = cursorCoords(cm, pos);
      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
      rect = {left: Math.min(coords.left, endCoords.left),
              top: Math.min(coords.top, endCoords.top) - margin,
              right: Math.max(coords.left, endCoords.left),
              bottom: Math.max(coords.bottom, endCoords.bottom) + margin};
      var scrollPos = calculateScrollPos(cm, rect);
      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
      if (scrollPos.scrollTop != null) {
        updateScrollTop(cm, scrollPos.scrollTop);
        if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true; }
      }
      if (scrollPos.scrollLeft != null) {
        setScrollLeft(cm, scrollPos.scrollLeft);
        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true; }
      }
      if (!changed) { break }
    }
    return rect
  }

  // Scroll a given set of coordinates into view (immediately).
  function scrollIntoView(cm, rect) {
    var scrollPos = calculateScrollPos(cm, rect);
    if (scrollPos.scrollTop != null) { updateScrollTop(cm, scrollPos.scrollTop); }
    if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft); }
  }

  // Calculate a new scroll position needed to scroll the given
  // rectangle into view. Returns an object with scrollTop and
  // scrollLeft properties. When these are undefined, the
  // vertical/horizontal position does not need to be adjusted.
  function calculateScrollPos(cm, rect) {
    var display = cm.display, snapMargin = textHeight(cm.display);
    if (rect.top < 0) { rect.top = 0; }
    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
    var screen = displayHeight(cm), result = {};
    if (rect.bottom - rect.top > screen) { rect.bottom = rect.top + screen; }
    var docBottom = cm.doc.height + paddingVert(display);
    var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
    if (rect.top < screentop) {
      result.scrollTop = atTop ? 0 : rect.top;
    } else if (rect.bottom > screentop + screen) {
      var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen);
      if (newTop != screentop) { result.scrollTop = newTop; }
    }

    var gutterSpace = cm.options.fixedGutter ? 0 : display.gutters.offsetWidth;
    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft - gutterSpace;
    var screenw = displayWidth(cm) - display.gutters.offsetWidth;
    var tooWide = rect.right - rect.left > screenw;
    if (tooWide) { rect.right = rect.left + screenw; }
    if (rect.left < 10)
      { result.scrollLeft = 0; }
    else if (rect.left < screenleft)
      { result.scrollLeft = Math.max(0, rect.left + gutterSpace - (tooWide ? 0 : 10)); }
    else if (rect.right > screenw + screenleft - 3)
      { result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw; }
    return result
  }

  // Store a relative adjustment to the scroll position in the current
  // operation (to be applied when the operation finishes).
  function addToScrollTop(cm, top) {
    if (top == null) { return }
    resolveScrollToPos(cm);
    cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
  }

  // Make sure that at the end of the operation the current cursor is
  // shown.
  function ensureCursorVisible(cm) {
    resolveScrollToPos(cm);
    var cur = cm.getCursor();
    cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin};
  }

  function scrollToCoords(cm, x, y) {
    if (x != null || y != null) { resolveScrollToPos(cm); }
    if (x != null) { cm.curOp.scrollLeft = x; }
    if (y != null) { cm.curOp.scrollTop = y; }
  }

  function scrollToRange(cm, range) {
    resolveScrollToPos(cm);
    cm.curOp.scrollToPos = range;
  }

  // When an operation has its scrollToPos property set, and another
  // scroll action is applied before the end of the operation, this
  // 'simulates' scrolling that position into view in a cheap way, so
  // that the effect of intermediate scroll commands is not ignored.
  function resolveScrollToPos(cm) {
    var range = cm.curOp.scrollToPos;
    if (range) {
      cm.curOp.scrollToPos = null;
      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
      scrollToCoordsRange(cm, from, to, range.margin);
    }
  }

  function scrollToCoordsRange(cm, from, to, margin) {
    var sPos = calculateScrollPos(cm, {
      left: Math.min(from.left, to.left),
      top: Math.min(from.top, to.top) - margin,
      right: Math.max(from.right, to.right),
      bottom: Math.max(from.bottom, to.bottom) + margin
    });
    scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
  }

  // Sync the scrollable area and scrollbars, ensure the viewport
  // covers the visible area.
  function updateScrollTop(cm, val) {
    if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
    if (!gecko) { updateDisplaySimple(cm, {top: val}); }
    setScrollTop(cm, val, true);
    if (gecko) { updateDisplaySimple(cm); }
    startWorker(cm, 100);
  }

  function setScrollTop(cm, val, forceScroll) {
    val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val));
    if (cm.display.scroller.scrollTop == val && !forceScroll) { return }
    cm.doc.scrollTop = val;
    cm.display.scrollbars.setScrollTop(val);
    if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val; }
  }

  // Sync scroller and scrollbar, ensure the gutter elements are
  // aligned.
  function setScrollLeft(cm, val, isScroller, forceScroll) {
    val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth));
    if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) { return }
    cm.doc.scrollLeft = val;
    alignHorizontally(cm);
    if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val; }
    cm.display.scrollbars.setScrollLeft(val);
  }

  // SCROLLBARS

  // Prepare DOM reads needed to update the scrollbars. Done in one
  // shot to minimize update/measure roundtrips.
  function measureForScrollbars(cm) {
    var d = cm.display, gutterW = d.gutters.offsetWidth;
    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
    return {
      clientHeight: d.scroller.clientHeight,
      viewHeight: d.wrapper.clientHeight,
      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
      viewWidth: d.wrapper.clientWidth,
      barLeft: cm.options.fixedGutter ? gutterW : 0,
      docHeight: docH,
      scrollHeight: docH + scrollGap(cm) + d.barHeight,
      nativeBarWidth: d.nativeBarWidth,
      gutterWidth: gutterW
    }
  }

  var NativeScrollbars = function(place, scroll, cm) {
    this.cm = cm;
    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
    vert.tabIndex = horiz.tabIndex = -1;
    place(vert); place(horiz);

    on(vert, "scroll", function () {
      if (vert.clientHeight) { scroll(vert.scrollTop, "vertical"); }
    });
    on(horiz, "scroll", function () {
      if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal"); }
    });

    this.checkedZeroWidth = false;
    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
    if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px"; }
  };

  NativeScrollbars.prototype.update = function (measure) {
    var needsH = measure.scrollWidth > measure.clientWidth + 1;
    var needsV = measure.scrollHeight > measure.clientHeight + 1;
    var sWidth = measure.nativeBarWidth;

    if (needsV) {
      this.vert.style.display = "block";
      this.vert.style.bottom = needsH ? sWidth + "px" : "0";
      var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
      // A bug in IE8 can cause this value to be negative, so guard it.
      this.vert.firstChild.style.height =
        Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
    } else {
      this.vert.scrollTop = 0;
      this.vert.style.display = "";
      this.vert.firstChild.style.height = "0";
    }

    if (needsH) {
      this.horiz.style.display = "block";
      this.horiz.style.right = needsV ? sWidth + "px" : "0";
      this.horiz.style.left = measure.barLeft + "px";
      var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
      this.horiz.firstChild.style.width =
        Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
    } else {
      this.horiz.style.display = "";
      this.horiz.firstChild.style.width = "0";
    }

    if (!this.checkedZeroWidth && measure.clientHeight > 0) {
      if (sWidth == 0) { this.zeroWidthHack(); }
      this.checkedZeroWidth = true;
    }

    return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
  };

  NativeScrollbars.prototype.setScrollLeft = function (pos) {
    if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos; }
    if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz"); }
  };

  NativeScrollbars.prototype.setScrollTop = function (pos) {
    if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos; }
    if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert, "vert"); }
  };

  NativeScrollbars.prototype.zeroWidthHack = function () {
    var w = mac && !mac_geMountainLion ? "12px" : "18px";
    this.horiz.style.height = this.vert.style.width = w;
    this.horiz.style.visibility = this.vert.style.visibility = "hidden";
    this.disableHoriz = new Delayed;
    this.disableVert = new Delayed;
  };

  NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
    bar.style.visibility = "";
    function maybeDisable() {
      // To find out whether the scrollbar is still visible, we
      // check whether the element under the pixel in the bottom
      // right corner of the scrollbar box is the scrollbar box
      // itself (when the bar is still visible) or its filler child
      // (when the bar is hidden). If it is still visible, we keep
      // it enabled, if it's hidden, we disable pointer events.
      var box = bar.getBoundingClientRect();
      var elt = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
          : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
      if (elt != bar) { bar.style.visibility = "hidden"; }
      else { delay.set(1000, maybeDisable); }
    }
    delay.set(1000, maybeDisable);
  };

  NativeScrollbars.prototype.clear = function () {
    var parent = this.horiz.parentNode;
    parent.removeChild(this.horiz);
    parent.removeChild(this.vert);
  };

  var NullScrollbars = function () {};

  NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
  NullScrollbars.prototype.setScrollLeft = function () {};
  NullScrollbars.prototype.setScrollTop = function () {};
  NullScrollbars.prototype.clear = function () {};

  function updateScrollbars(cm, measure) {
    if (!measure) { measure = measureForScrollbars(cm); }
    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
    updateScrollbarsInner(cm, measure);
    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
        { updateHeightsInViewport(cm); }
      updateScrollbarsInner(cm, measureForScrollbars(cm));
      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
    }
  }

  // Re-synchronize the fake scrollbars with the actual size of the
  // content.
  function updateScrollbarsInner(cm, measure) {
    var d = cm.display;
    var sizes = d.scrollbars.update(measure);

    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
    d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";

    if (sizes.right && sizes.bottom) {
      d.scrollbarFiller.style.display = "block";
      d.scrollbarFiller.style.height = sizes.bottom + "px";
      d.scrollbarFiller.style.width = sizes.right + "px";
    } else { d.scrollbarFiller.style.display = ""; }
    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
      d.gutterFiller.style.display = "block";
      d.gutterFiller.style.height = sizes.bottom + "px";
      d.gutterFiller.style.width = measure.gutterWidth + "px";
    } else { d.gutterFiller.style.display = ""; }
  }

  var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

  function initScrollbars(cm) {
    if (cm.display.scrollbars) {
      cm.display.scrollbars.clear();
      if (cm.display.scrollbars.addClass)
        { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
    }

    cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
      // Prevent clicks in the scrollbars from killing focus
      on(node, "mousedown", function () {
        if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0); }
      });
      node.setAttribute("cm-not-content", "true");
    }, function (pos, axis) {
      if (axis == "horizontal") { setScrollLeft(cm, pos); }
      else { updateScrollTop(cm, pos); }
    }, cm);
    if (cm.display.scrollbars.addClass)
      { addClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
  }

  // Operations are used to wrap a series of changes to the editor
  // state in such a way that each change won't have to update the
  // cursor and display (which would be awkward, slow, and
  // error-prone). Instead, display updates are batched and then all
  // combined and executed at once.

  var nextOpId = 0;
  // Start a new operation.
  function startOperation(cm) {
    cm.curOp = {
      cm: cm,
      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
      startHeight: cm.doc.height, // Used to detect need to update scrollbar
      forceUpdate: false,      // Used to force a redraw
      updateInput: 0,       // Whether to reset the input textarea
      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
      changeObjs: null,        // Accumulated changes, for firing change events
      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
      selectionChanged: false, // Whether the selection needs to be redrawn
      updateMaxLine: false,    // Set when the widest line needs to be determined anew
      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
      scrollToPos: null,       // Used to scroll to a specific position
      focus: false,
      id: ++nextOpId,          // Unique ID
      markArrays: null         // Used by addMarkedSpan
    };
    pushOperation(cm.curOp);
  }

  // Finish an operation, updating the display and signalling delayed events
  function endOperation(cm) {
    var op = cm.curOp;
    if (op) { finishOperation(op, function (group) {
      for (var i = 0; i < group.ops.length; i++)
        { group.ops[i].cm.curOp = null; }
      endOperations(group);
    }); }
  }

  // The DOM updates done when an operation finishes are batched so
  // that the minimum number of relayouts are required.
  function endOperations(group) {
    var ops = group.ops;
    for (var i = 0; i < ops.length; i++) // Read DOM
      { endOperation_R1(ops[i]); }
    for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
      { endOperation_W1(ops[i$1]); }
    for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
      { endOperation_R2(ops[i$2]); }
    for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
      { endOperation_W2(ops[i$3]); }
    for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
      { endOperation_finish(ops[i$4]); }
  }

  function endOperation_R1(op) {
    var cm = op.cm, display = cm.display;
    maybeClipScrollbars(cm);
    if (op.updateMaxLine) { findMaxLine(cm); }

    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                         op.scrollToPos.to.line >= display.viewTo) ||
      display.maxLineChanged && cm.options.lineWrapping;
    op.update = op.mustUpdate &&
      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
  }

  function endOperation_W1(op) {
    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
  }

  function endOperation_R2(op) {
    var cm = op.cm, display = cm.display;
    if (op.updatedDisplay) { updateHeightsInViewport(cm); }

    op.barMeasure = measureForScrollbars(cm);

    // If the max line changed since it was last measured, measure it,
    // and ensure the document's width matches it.
    // updateDisplay_W2 will use these properties to do the actual resizing
    if (display.maxLineChanged && !cm.options.lineWrapping) {
      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
      cm.display.sizerWidth = op.adjustWidthTo;
      op.barMeasure.scrollWidth =
        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
    }

    if (op.updatedDisplay || op.selectionChanged)
      { op.preparedSelection = display.input.prepareSelection(); }
  }

  function endOperation_W2(op) {
    var cm = op.cm;

    if (op.adjustWidthTo != null) {
      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
      if (op.maxScrollLeft < cm.doc.scrollLeft)
        { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true); }
      cm.display.maxLineChanged = false;
    }

    var takeFocus = op.focus && op.focus == activeElt(doc(cm));
    if (op.preparedSelection)
      { cm.display.input.showSelection(op.preparedSelection, takeFocus); }
    if (op.updatedDisplay || op.startHeight != cm.doc.height)
      { updateScrollbars(cm, op.barMeasure); }
    if (op.updatedDisplay)
      { setDocumentHeight(cm, op.barMeasure); }

    if (op.selectionChanged) { restartBlink(cm); }

    if (cm.state.focused && op.updateInput)
      { cm.display.input.reset(op.typing); }
    if (takeFocus) { ensureFocus(op.cm); }
  }

  function endOperation_finish(op) {
    var cm = op.cm, display = cm.display, doc = cm.doc;

    if (op.updatedDisplay) { postUpdateDisplay(cm, op.update); }

    // Abort mouse wheel delta measurement, when scrolling explicitly
    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
      { display.wheelStartX = display.wheelStartY = null; }

    // Propagate the scroll position to the actual DOM scroller
    if (op.scrollTop != null) { setScrollTop(cm, op.scrollTop, op.forceScroll); }

    if (op.scrollLeft != null) { setScrollLeft(cm, op.scrollLeft, true, true); }
    // If we need to scroll a specific position into view, do so.
    if (op.scrollToPos) {
      var rect = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
      maybeScrollWindow(cm, rect);
    }

    // Fire events for markers that are hidden/unidden by editing or
    // undoing
    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
    if (hidden) { for (var i = 0; i < hidden.length; ++i)
      { if (!hidden[i].lines.length) { signal(hidden[i], "hide"); } } }
    if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
      { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide"); } } }

    if (display.wrapper.offsetHeight)
      { doc.scrollTop = cm.display.scroller.scrollTop; }

    // Fire change events, and delayed event handlers
    if (op.changeObjs)
      { signal(cm, "changes", cm, op.changeObjs); }
    if (op.update)
      { op.update.finish(); }
  }

  // Run the given function in an operation
  function runInOp(cm, f) {
    if (cm.curOp) { return f() }
    startOperation(cm);
    try { return f() }
    finally { endOperation(cm); }
  }
  // Wraps a function in an operation. Returns the wrapped function.
  function operation(cm, f) {
    return function() {
      if (cm.curOp) { return f.apply(cm, arguments) }
      startOperation(cm);
      try { return f.apply(cm, arguments) }
      finally { endOperation(cm); }
    }
  }
  // Used to add methods to editor and doc instances, wrapping them in
  // operations.
  function methodOp(f) {
    return function() {
      if (this.curOp) { return f.apply(this, arguments) }
      startOperation(this);
      try { return f.apply(this, arguments) }
      finally { endOperation(this); }
    }
  }
  function docMethodOp(f) {
    return function() {
      var cm = this.cm;
      if (!cm || cm.curOp) { return f.apply(this, arguments) }
      startOperation(cm);
      try { return f.apply(this, arguments) }
      finally { endOperation(cm); }
    }
  }

  // HIGHLIGHT WORKER

  function startWorker(cm, time) {
    if (cm.doc.highlightFrontier < cm.display.viewTo)
      { cm.state.highlight.set(time, bind(highlightWorker, cm)); }
  }

  function highlightWorker(cm) {
    var doc = cm.doc;
    if (doc.highlightFrontier >= cm.display.viewTo) { return }
    var end = +new Date + cm.options.workTime;
    var context = getContextBefore(cm, doc.highlightFrontier);
    var changedLines = [];

    doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
      if (context.line >= cm.display.viewFrom) { // Visible
        var oldStyles = line.styles;
        var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
        var highlighted = highlightLine(cm, line, context, true);
        if (resetState) { context.state = resetState; }
        line.styles = highlighted.styles;
        var oldCls = line.styleClasses, newCls = highlighted.classes;
        if (newCls) { line.styleClasses = newCls; }
        else if (oldCls) { line.styleClasses = null; }
        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
        for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i]; }
        if (ischange) { changedLines.push(context.line); }
        line.stateAfter = context.save();
        context.nextLine();
      } else {
        if (line.text.length <= cm.options.maxHighlightLength)
          { processLine(cm, line.text, context); }
        line.stateAfter = context.line % 5 == 0 ? context.save() : null;
        context.nextLine();
      }
      if (+new Date > end) {
        startWorker(cm, cm.options.workDelay);
        return true
      }
    });
    doc.highlightFrontier = context.line;
    doc.modeFrontier = Math.max(doc.modeFrontier, context.line);
    if (changedLines.length) { runInOp(cm, function () {
      for (var i = 0; i < changedLines.length; i++)
        { regLineChange(cm, changedLines[i], "text"); }
    }); }
  }

  // DISPLAY DRAWING

  var DisplayUpdate = function(cm, viewport, force) {
    var display = cm.display;

    this.viewport = viewport;
    // Store some values that we'll need later (but don't want to force a relayout for)
    this.visible = visibleLines(display, cm.doc, viewport);
    this.editorIsHidden = !display.wrapper.offsetWidth;
    this.wrapperHeight = display.wrapper.clientHeight;
    this.wrapperWidth = display.wrapper.clientWidth;
    this.oldDisplayWidth = displayWidth(cm);
    this.force = force;
    this.dims = getDimensions(cm);
    this.events = [];
  };

  DisplayUpdate.prototype.signal = function (emitter, type) {
    if (hasHandler(emitter, type))
      { this.events.push(arguments); }
  };
  DisplayUpdate.prototype.finish = function () {
    for (var i = 0; i < this.events.length; i++)
      { signal.apply(null, this.events[i]); }
  };

  function maybeClipScrollbars(cm) {
    var display = cm.display;
    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
      display.heightForcer.style.height = scrollGap(cm) + "px";
      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
      display.scrollbarsClipped = true;
    }
  }

  function selectionSnapshot(cm) {
    if (cm.hasFocus()) { return null }
    var active = activeElt(doc(cm));
    if (!active || !contains(cm.display.lineDiv, active)) { return null }
    var result = {activeElt: active};
    if (window.getSelection) {
      var sel = win(cm).getSelection();
      if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
        result.anchorNode = sel.anchorNode;
        result.anchorOffset = sel.anchorOffset;
        result.focusNode = sel.focusNode;
        result.focusOffset = sel.focusOffset;
      }
    }
    return result
  }

  function restoreSelection(snapshot) {
    if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt(snapshot.activeElt.ownerDocument)) { return }
    snapshot.activeElt.focus();
    if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) &&
        snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
      var doc = snapshot.activeElt.ownerDocument;
      var sel = doc.defaultView.getSelection(), range = doc.createRange();
      range.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
      sel.extend(snapshot.focusNode, snapshot.focusOffset);
    }
  }

  // Does the actual updating of the line display. Bails out
  // (returning false) when there is nothing to be done and forced is
  // false.
  function updateDisplayIfNeeded(cm, update) {
    var display = cm.display, doc = cm.doc;

    if (update.editorIsHidden) {
      resetView(cm);
      return false
    }

    // Bail out if the visible area is already rendered and nothing changed.
    if (!update.force &&
        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
        display.renderedView == display.view && countDirtyView(cm) == 0)
      { return false }

    if (maybeUpdateLineNumberWidth(cm)) {
      resetView(cm);
      update.dims = getDimensions(cm);
    }

    // Compute a suitable new viewport (from & to)
    var end = doc.first + doc.size;
    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
    if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom); }
    if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo); }
    if (sawCollapsedSpans) {
      from = visualLineNo(cm.doc, from);
      to = visualLineEndNo(cm.doc, to);
    }

    var different = from != display.viewFrom || to != display.viewTo ||
      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
    adjustView(cm, from, to);

    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
    // Position the mover div to align with the current scroll position
    cm.display.mover.style.top = display.viewOffset + "px";

    var toUpdate = countDirtyView(cm);
    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
      { return false }

    // For big changes, we hide the enclosing element during the
    // update, since that speeds up the operations on most browsers.
    var selSnapshot = selectionSnapshot(cm);
    if (toUpdate > 4) { display.lineDiv.style.display = "none"; }
    patchDisplay(cm, display.updateLineNumbers, update.dims);
    if (toUpdate > 4) { display.lineDiv.style.display = ""; }
    display.renderedView = display.view;
    // There might have been a widget with a focused element that got
    // hidden or updated, if so re-focus it.
    restoreSelection(selSnapshot);

    // Prevent selection and cursors from interfering with the scroll
    // width and height.
    removeChildren(display.cursorDiv);
    removeChildren(display.selectionDiv);
    display.gutters.style.height = display.sizer.style.minHeight = 0;

    if (different) {
      display.lastWrapHeight = update.wrapperHeight;
      display.lastWrapWidth = update.wrapperWidth;
      startWorker(cm, 400);
    }

    display.updateLineNumbers = null;

    return true
  }

  function postUpdateDisplay(cm, update) {
    var viewport = update.viewport;

    for (var first = true;; first = false) {
      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
        // Clip forced viewport to actual scrollable area.
        if (viewport && viewport.top != null)
          { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)}; }
        // Updated line heights might result in the drawn area not
        // actually covering the viewport. Keep looping until it does.
        update.visible = visibleLines(cm.display, cm.doc, viewport);
        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
          { break }
      } else if (first) {
        update.visible = visibleLines(cm.display, cm.doc, viewport);
      }
      if (!updateDisplayIfNeeded(cm, update)) { break }
      updateHeightsInViewport(cm);
      var barMeasure = measureForScrollbars(cm);
      updateSelection(cm);
      updateScrollbars(cm, barMeasure);
      setDocumentHeight(cm, barMeasure);
      update.force = false;
    }

    update.signal(cm, "update", cm);
    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
    }
  }

  function updateDisplaySimple(cm, viewport) {
    var update = new DisplayUpdate(cm, viewport);
    if (updateDisplayIfNeeded(cm, update)) {
      updateHeightsInViewport(cm);
      postUpdateDisplay(cm, update);
      var barMeasure = measureForScrollbars(cm);
      updateSelection(cm);
      updateScrollbars(cm, barMeasure);
      setDocumentHeight(cm, barMeasure);
      update.finish();
    }
  }

  // Sync the actual display DOM structure with display.view, removing
  // nodes for lines that are no longer in view, and creating the ones
  // that are not there yet, and updating the ones that are out of
  // date.
  function patchDisplay(cm, updateNumbersFrom, dims) {
    var display = cm.display, lineNumbers = cm.options.lineNumbers;
    var container = display.lineDiv, cur = container.firstChild;

    function rm(node) {
      var next = node.nextSibling;
      // Works around a throw-scroll bug in OS X Webkit
      if (webkit && mac && cm.display.currentWheelTarget == node)
        { node.style.display = "none"; }
      else
        { node.parentNode.removeChild(node); }
      return next
    }

    var view = display.view, lineN = display.viewFrom;
    // Loop over the elements in the view, syncing cur (the DOM nodes
    // in display.lineDiv) with the view as we go.
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (lineView.hidden) ; else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
        var node = buildLineElement(cm, lineView, lineN, dims);
        container.insertBefore(node, cur);
      } else { // Already drawn
        while (cur != lineView.node) { cur = rm(cur); }
        var updateNumber = lineNumbers && updateNumbersFrom != null &&
          updateNumbersFrom <= lineN && lineView.lineNumber;
        if (lineView.changes) {
          if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false; }
          updateLineForChanges(cm, lineView, lineN, dims);
        }
        if (updateNumber) {
          removeChildren(lineView.lineNumber);
          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
        }
        cur = lineView.node.nextSibling;
      }
      lineN += lineView.size;
    }
    while (cur) { cur = rm(cur); }
  }

  function updateGutterSpace(display) {
    var width = display.gutters.offsetWidth;
    display.sizer.style.marginLeft = width + "px";
    // Send an event to consumers responding to changes in gutter width.
    signalLater(display, "gutterChanged", display);
  }

  function setDocumentHeight(cm, measure) {
    cm.display.sizer.style.minHeight = measure.docHeight + "px";
    cm.display.heightForcer.style.top = measure.docHeight + "px";
    cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
  }

  // Re-align line numbers and gutter marks to compensate for
  // horizontal scrolling.
  function alignHorizontally(cm) {
    var display = cm.display, view = display.view;
    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
    var gutterW = display.gutters.offsetWidth, left = comp + "px";
    for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
      if (cm.options.fixedGutter) {
        if (view[i].gutter)
          { view[i].gutter.style.left = left; }
        if (view[i].gutterBackground)
          { view[i].gutterBackground.style.left = left; }
      }
      var align = view[i].alignable;
      if (align) { for (var j = 0; j < align.length; j++)
        { align[j].style.left = left; } }
    } }
    if (cm.options.fixedGutter)
      { display.gutters.style.left = (comp + gutterW) + "px"; }
  }

  // Used to ensure that the line number gutter is still the right
  // size for the current document size. Returns true when an update
  // is needed.
  function maybeUpdateLineNumberWidth(cm) {
    if (!cm.options.lineNumbers) { return false }
    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
    if (last.length != display.lineNumChars) {
      var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
      display.lineGutter.style.width = "";
      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
      display.lineNumWidth = display.lineNumInnerWidth + padding;
      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
      display.lineGutter.style.width = display.lineNumWidth + "px";
      updateGutterSpace(cm.display);
      return true
    }
    return false
  }

  function getGutters(gutters, lineNumbers) {
    var result = [], sawLineNumbers = false;
    for (var i = 0; i < gutters.length; i++) {
      var name = gutters[i], style = null;
      if (typeof name != "string") { style = name.style; name = name.className; }
      if (name == "CodeMirror-linenumbers") {
        if (!lineNumbers) { continue }
        else { sawLineNumbers = true; }
      }
      result.push({className: name, style: style});
    }
    if (lineNumbers && !sawLineNumbers) { result.push({className: "CodeMirror-linenumbers", style: null}); }
    return result
  }

  // Rebuild the gutter elements, ensure the margin to the left of the
  // code matches their width.
  function renderGutters(display) {
    var gutters = display.gutters, specs = display.gutterSpecs;
    removeChildren(gutters);
    display.lineGutter = null;
    for (var i = 0; i < specs.length; ++i) {
      var ref = specs[i];
      var className = ref.className;
      var style = ref.style;
      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + className));
      if (style) { gElt.style.cssText = style; }
      if (className == "CodeMirror-linenumbers") {
        display.lineGutter = gElt;
        gElt.style.width = (display.lineNumWidth || 1) + "px";
      }
    }
    gutters.style.display = specs.length ? "" : "none";
    updateGutterSpace(display);
  }

  function updateGutters(cm) {
    renderGutters(cm.display);
    regChange(cm);
    alignHorizontally(cm);
  }

  // The display handles the DOM integration, both for input reading
  // and content drawing. It holds references to DOM nodes and
  // display-related state.

  function Display(place, doc, input, options) {
    var d = this;
    this.input = input;

    // Covers bottom-right square when both scrollbars are present.
    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
    d.scrollbarFiller.setAttribute("cm-not-content", "true");
    // Covers bottom of gutter when coverGutterNextToScrollbar is on
    // and h scrollbar is present.
    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
    d.gutterFiller.setAttribute("cm-not-content", "true");
    // Will contain the actual code, positioned to cover the viewport.
    d.lineDiv = eltP("div", null, "CodeMirror-code");
    // Elements are added to these to represent selection and cursors.
    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
    // A visibility: hidden element used to find the size of things.
    d.measure = elt("div", null, "CodeMirror-measure");
    // When lines outside of the viewport are measured, they are drawn in this.
    d.lineMeasure = elt("div", null, "CodeMirror-measure");
    // Wraps everything that needs to exist inside the vertically-padded coordinate system
    d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                      null, "position: relative; outline: none");
    var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
    // Moved around its parent to cover visible view.
    d.mover = elt("div", [lines], null, "position: relative");
    // Set to the height of the document, allowing scrolling.
    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
    d.sizerWidth = null;
    // Behavior of elts with overflow: auto and padding is
    // inconsistent across browsers. This is used to ensure the
    // scrollable area is big enough.
    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
    // Will contain the gutters, if any.
    d.gutters = elt("div", null, "CodeMirror-gutters");
    d.lineGutter = null;
    // Actual scrollable element.
    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
    d.scroller.setAttribute("tabIndex", "-1");
    // The element in which the editor lives.
    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");
    // See #6982. FIXME remove when this has been fixed for a while in Chrome
    if (chrome && chrome_version >= 105) { d.wrapper.style.clipPath = "inset(0px)"; }

    // This attribute is respected by automatic translation systems such as Google Translate,
    // and may also be respected by tools used by human translators.
    d.wrapper.setAttribute('translate', 'no');

    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
    if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true; }

    if (place) {
      if (place.appendChild) { place.appendChild(d.wrapper); }
      else { place(d.wrapper); }
    }

    // Current rendered range (may be bigger than the view window).
    d.viewFrom = d.viewTo = doc.first;
    d.reportedViewFrom = d.reportedViewTo = doc.first;
    // Information about the rendered lines.
    d.view = [];
    d.renderedView = null;
    // Holds info about a single rendered line when it was rendered
    // for measurement, while not in view.
    d.externalMeasured = null;
    // Empty space (in pixels) above the view
    d.viewOffset = 0;
    d.lastWrapHeight = d.lastWrapWidth = 0;
    d.updateLineNumbers = null;

    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
    d.scrollbarsClipped = false;

    // Used to only resize the line number gutter when necessary (when
    // the amount of lines crosses a boundary that makes its width change)
    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
    // Set to true when a non-horizontal-scrolling line widget is
    // added. As an optimization, line widget aligning is skipped when
    // this is false.
    d.alignWidgets = false;

    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    d.maxLine = null;
    d.maxLineLength = 0;
    d.maxLineChanged = false;

    // Used for measuring wheel scrolling granularity
    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

    // True when shift is held down.
    d.shift = false;

    // Used to track whether anything happened since the context menu
    // was opened.
    d.selForContextMenu = null;

    d.activeTouch = null;

    d.gutterSpecs = getGutters(options.gutters, options.lineNumbers);
    renderGutters(d);

    input.init(d);
  }

  // Since the delta values reported on mouse wheel events are
  // unstandardized between browsers and even browser versions, and
  // generally horribly unpredictable, this code starts by measuring
  // the scroll effect that the first few mouse wheel events have,
  // and, from that, detects the way it can convert deltas to pixel
  // offsets afterwards.
  //
  // The reason we want to know the amount a wheel event will scroll
  // is that it gives us a chance to update the display before the
  // actual scrolling happens, reducing flickering.

  var wheelSamples = 0, wheelPixelsPerUnit = null;
  // Fill in a browser-detected starting value on browsers where we
  // know one. These don't have to be accurate -- the result of them
  // being wrong would just be a slight flicker on the first wheel
  // scroll (if it is large enough).
  if (ie) { wheelPixelsPerUnit = -.53; }
  else if (gecko) { wheelPixelsPerUnit = 15; }
  else if (chrome) { wheelPixelsPerUnit = -.7; }
  else if (safari) { wheelPixelsPerUnit = -1/3; }

  function wheelEventDelta(e) {
    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail; }
    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail; }
    else if (dy == null) { dy = e.wheelDelta; }
    return {x: dx, y: dy}
  }
  function wheelEventPixels(e) {
    var delta = wheelEventDelta(e);
    delta.x *= wheelPixelsPerUnit;
    delta.y *= wheelPixelsPerUnit;
    return delta
  }

  function onScrollWheel(cm, e) {
    // On Chrome 102, viewport updates somehow stop wheel-based
    // scrolling. Turning off pointer events during the scroll seems
    // to avoid the issue.
    if (chrome && chrome_version == 102) {
      if (cm.display.chromeScrollHack == null) { cm.display.sizer.style.pointerEvents = "none"; }
      else { clearTimeout(cm.display.chromeScrollHack); }
      cm.display.chromeScrollHack = setTimeout(function () {
        cm.display.chromeScrollHack = null;
        cm.display.sizer.style.pointerEvents = "";
      }, 100);
    }
    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;
    var pixelsPerUnit = wheelPixelsPerUnit;
    if (e.deltaMode === 0) {
      dx = e.deltaX;
      dy = e.deltaY;
      pixelsPerUnit = 1;
    }

    var display = cm.display, scroll = display.scroller;
    // Quit if there's nothing to scroll here
    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
    if (!(dx && canScrollX || dy && canScrollY)) { return }

    // Webkit browsers on OS X abort momentum scrolls when the target
    // of the scroll event is removed from the scrollable element.
    // This hack (see related code in patchDisplay) makes sure the
    // element is kept around.
    if (dy && mac && webkit) {
      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
        for (var i = 0; i < view.length; i++) {
          if (view[i].node == cur) {
            cm.display.currentWheelTarget = cur;
            break outer
          }
        }
      }
    }

    // On some browsers, horizontal scrolling will cause redraws to
    // happen before the gutter has been realigned, causing it to
    // wriggle around in a most unseemly way. When we have an
    // estimated pixels/delta value, we just handle horizontal
    // scrolling entirely here. It'll be slightly off from native, but
    // better than glitching out.
    if (dx && !gecko && !presto && pixelsPerUnit != null) {
      if (dy && canScrollY)
        { updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * pixelsPerUnit)); }
      setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * pixelsPerUnit));
      // Only prevent default scrolling if vertical scrolling is
      // actually possible. Otherwise, it causes vertical scroll
      // jitter on OSX trackpads when deltaX is small and deltaY
      // is large (issue #3579)
      if (!dy || (dy && canScrollY))
        { e_preventDefault(e); }
      display.wheelStartX = null; // Abort measurement, if in progress
      return
    }

    // 'Project' the visible viewport to cover the area that is being
    // scrolled into view (if we know enough to estimate it).
    if (dy && pixelsPerUnit != null) {
      var pixels = dy * pixelsPerUnit;
      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
      if (pixels < 0) { top = Math.max(0, top + pixels - 50); }
      else { bot = Math.min(cm.doc.height, bot + pixels + 50); }
      updateDisplaySimple(cm, {top: top, bottom: bot});
    }

    if (wheelSamples < 20 && e.deltaMode !== 0) {
      if (display.wheelStartX == null) {
        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
        display.wheelDX = dx; display.wheelDY = dy;
        setTimeout(function () {
          if (display.wheelStartX == null) { return }
          var movedX = scroll.scrollLeft - display.wheelStartX;
          var movedY = scroll.scrollTop - display.wheelStartY;
          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
            (movedX && display.wheelDX && movedX / display.wheelDX);
          display.wheelStartX = display.wheelStartY = null;
          if (!sample) { return }
          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
          ++wheelSamples;
        }, 200);
      } else {
        display.wheelDX += dx; display.wheelDY += dy;
      }
    }
  }

  // Selection objects are immutable. A new one is created every time
  // the selection changes. A selection is one or more non-overlapping
  // (and non-touching) ranges, sorted, and an integer that indicates
  // which one is the primary selection (the one that's scrolled into
  // view, that getCursor returns, etc).
  var Selection = function(ranges, primIndex) {
    this.ranges = ranges;
    this.primIndex = primIndex;
  };

  Selection.prototype.primary = function () { return this.ranges[this.primIndex] };

  Selection.prototype.equals = function (other) {
    if (other == this) { return true }
    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
    for (var i = 0; i < this.ranges.length; i++) {
      var here = this.ranges[i], there = other.ranges[i];
      if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) { return false }
    }
    return true
  };

  Selection.prototype.deepCopy = function () {
    var out = [];
    for (var i = 0; i < this.ranges.length; i++)
      { out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head)); }
    return new Selection(out, this.primIndex)
  };

  Selection.prototype.somethingSelected = function () {
    for (var i = 0; i < this.ranges.length; i++)
      { if (!this.ranges[i].empty()) { return true } }
    return false
  };

  Selection.prototype.contains = function (pos, end) {
    if (!end) { end = pos; }
    for (var i = 0; i < this.ranges.length; i++) {
      var range = this.ranges[i];
      if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
        { return i }
    }
    return -1
  };

  var Range = function(anchor, head) {
    this.anchor = anchor; this.head = head;
  };

  Range.prototype.from = function () { return minPos(this.anchor, this.head) };
  Range.prototype.to = function () { return maxPos(this.anchor, this.head) };
  Range.prototype.empty = function () { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch };

  // Take an unsorted, potentially overlapping set of ranges, and
  // build a selection out of it. 'Consumes' ranges array (modifying
  // it).
  function normalizeSelection(cm, ranges, primIndex) {
    var mayTouch = cm && cm.options.selectionsMayTouch;
    var prim = ranges[primIndex];
    ranges.sort(function (a, b) { return cmp(a.from(), b.from()); });
    primIndex = indexOf(ranges, prim);
    for (var i = 1; i < ranges.length; i++) {
      var cur = ranges[i], prev = ranges[i - 1];
      var diff = cmp(prev.to(), cur.from());
      if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
        if (i <= primIndex) { --primIndex; }
        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
      }
    }
    return new Selection(ranges, primIndex)
  }

  function simpleSelection(anchor, head) {
    return new Selection([new Range(anchor, head || anchor)], 0)
  }

  // Compute the position of the end of a change (its 'to' property
  // refers to the pre-change end).
  function changeEnd(change) {
    if (!change.text) { return change.to }
    return Pos(change.from.line + change.text.length - 1,
               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
  }

  // Adjust a position to refer to the post-change position of the
  // same text, or the end of the change if the change covers it.
  function adjustForChange(pos, change) {
    if (cmp(pos, change.from) < 0) { return pos }
    if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
    if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch; }
    return Pos(line, ch)
  }

  function computeSelAfterChange(doc, change) {
    var out = [];
    for (var i = 0; i < doc.sel.ranges.length; i++) {
      var range = doc.sel.ranges[i];
      out.push(new Range(adjustForChange(range.anchor, change),
                         adjustForChange(range.head, change)));
    }
    return normalizeSelection(doc.cm, out, doc.sel.primIndex)
  }

  function offsetPos(pos, old, nw) {
    if (pos.line == old.line)
      { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
    else
      { return Pos(nw.line + (pos.line - old.line), pos.ch) }
  }

  // Used by replaceSelections to allow moving the selection to the
  // start or around the replaced test. Hint may be "start" or "around".
  function computeReplacedSel(doc, changes, hint) {
    var out = [];
    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      var from = offsetPos(change.from, oldPrev, newPrev);
      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
      oldPrev = change.to;
      newPrev = to;
      if (hint == "around") {
        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
        out[i] = new Range(inv ? to : from, inv ? from : to);
      } else {
        out[i] = new Range(from, from);
      }
    }
    return new Selection(out, doc.sel.primIndex)
  }

  // Used to get the editor into a consistent state again when options change.

  function loadMode(cm) {
    cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
    resetModeState(cm);
  }

  function resetModeState(cm) {
    cm.doc.iter(function (line) {
      if (line.stateAfter) { line.stateAfter = null; }
      if (line.styles) { line.styles = null; }
    });
    cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
    startWorker(cm, 100);
    cm.state.modeGen++;
    if (cm.curOp) { regChange(cm); }
  }

  // DOCUMENT DATA STRUCTURE

  // By default, updates that start and end at the beginning of a line
  // are treated specially, in order to make the association of line
  // widgets and marker elements with the text behave more intuitive.
  function isWholeLineUpdate(doc, change) {
    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
      (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
  }

  // Perform a change on the document data structure.
  function updateDoc(doc, change, markedSpans, estimateHeight) {
    function spansFor(n) {return markedSpans ? markedSpans[n] : null}
    function update(line, text, spans) {
      updateLine(line, text, spans, estimateHeight);
      signalLater(line, "change", line, change);
    }
    function linesFor(start, end) {
      var result = [];
      for (var i = start; i < end; ++i)
        { result.push(new Line(text[i], spansFor(i), estimateHeight)); }
      return result
    }

    var from = change.from, to = change.to, text = change.text;
    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

    // Adjust the line structure
    if (change.full) {
      doc.insert(0, linesFor(0, text.length));
      doc.remove(text.length, doc.size - text.length);
    } else if (isWholeLineUpdate(doc, change)) {
      // This is a whole-line replace. Treated specially to make
      // sure line objects move the way they are supposed to.
      var added = linesFor(0, text.length - 1);
      update(lastLine, lastLine.text, lastSpans);
      if (nlines) { doc.remove(from.line, nlines); }
      if (added.length) { doc.insert(from.line, added); }
    } else if (firstLine == lastLine) {
      if (text.length == 1) {
        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
      } else {
        var added$1 = linesFor(1, text.length - 1);
        added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
        doc.insert(from.line + 1, added$1);
      }
    } else if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
      doc.remove(from.line + 1, nlines);
    } else {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
      var added$2 = linesFor(1, text.length - 1);
      if (nlines > 1) { doc.remove(from.line + 1, nlines - 1); }
      doc.insert(from.line + 1, added$2);
    }

    signalLater(doc, "change", doc, change);
  }

  // Call f for all linked documents.
  function linkedDocs(doc, f, sharedHistOnly) {
    function propagate(doc, skip, sharedHist) {
      if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
        var rel = doc.linked[i];
        if (rel.doc == skip) { continue }
        var shared = sharedHist && rel.sharedHist;
        if (sharedHistOnly && !shared) { continue }
        f(rel.doc, shared);
        propagate(rel.doc, doc, shared);
      } }
    }
    propagate(doc, null, true);
  }

  // Attach a document to an editor.
  function attachDoc(cm, doc) {
    if (doc.cm) { throw new Error("This document is already in use.") }
    cm.doc = doc;
    doc.cm = cm;
    estimateLineHeights(cm);
    loadMode(cm);
    setDirectionClass(cm);
    cm.options.direction = doc.direction;
    if (!cm.options.lineWrapping) { findMaxLine(cm); }
    cm.options.mode = doc.modeOption;
    regChange(cm);
  }

  function setDirectionClass(cm) {
  (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
  }

  function directionChanged(cm) {
    runInOp(cm, function () {
      setDirectionClass(cm);
      regChange(cm);
    });
  }

  function History(prev) {
    // Arrays of change events and selections. Doing something adds an
    // event to done and clears undo. Undoing moves events from done
    // to undone, redoing moves them in the other direction.
    this.done = []; this.undone = [];
    this.undoDepth = prev ? prev.undoDepth : Infinity;
    // Used to track when changes can be merged into a single undo
    // event
    this.lastModTime = this.lastSelTime = 0;
    this.lastOp = this.lastSelOp = null;
    this.lastOrigin = this.lastSelOrigin = null;
    // Used by the isClean() method
    this.generation = this.maxGeneration = prev ? prev.maxGeneration : 1;
  }

  // Create a history change event from an updateDoc-style change
  // object.
  function historyChangeFromChange(doc, change) {
    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
    linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true);
    return histChange
  }

  // Pop all selection events off the end of a history array. Stop at
  // a change event.
  function clearSelectionEvents(array) {
    while (array.length) {
      var last = lst(array);
      if (last.ranges) { array.pop(); }
      else { break }
    }
  }

  // Find the top change event in the history. Pop off selection
  // events that are in the way.
  function lastChangeEvent(hist, force) {
    if (force) {
      clearSelectionEvents(hist.done);
      return lst(hist.done)
    } else if (hist.done.length && !lst(hist.done).ranges) {
      return lst(hist.done)
    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
      hist.done.pop();
      return lst(hist.done)
    }
  }

  // Register a change in the history. Merges changes that are within
  // a single operation, or are close together with an origin that
  // allows merging (starting with "+") into a single event.
  function addChangeToHistory(doc, change, selAfter, opId) {
    var hist = doc.history;
    hist.undone.length = 0;
    var time = +new Date, cur;
    var last;

    if ((hist.lastOp == opId ||
         hist.lastOrigin == change.origin && change.origin &&
         ((change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500)) ||
          change.origin.charAt(0) == "*")) &&
        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
      // Merge this change into the last event
      last = lst(cur.changes);
      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
        // Optimized case for simple insertion -- don't want to add
        // new changesets for every character typed
        last.to = changeEnd(change);
      } else {
        // Add new sub-event
        cur.changes.push(historyChangeFromChange(doc, change));
      }
    } else {
      // Can not be merged, start a new event.
      var before = lst(hist.done);
      if (!before || !before.ranges)
        { pushSelectionToHistory(doc.sel, hist.done); }
      cur = {changes: [historyChangeFromChange(doc, change)],
             generation: hist.generation};
      hist.done.push(cur);
      while (hist.done.length > hist.undoDepth) {
        hist.done.shift();
        if (!hist.done[0].ranges) { hist.done.shift(); }
      }
    }
    hist.done.push(selAfter);
    hist.generation = ++hist.maxGeneration;
    hist.lastModTime = hist.lastSelTime = time;
    hist.lastOp = hist.lastSelOp = opId;
    hist.lastOrigin = hist.lastSelOrigin = change.origin;

    if (!last) { signal(doc, "historyAdded"); }
  }

  function selectionEventCanBeMerged(doc, origin, prev, sel) {
    var ch = origin.charAt(0);
    return ch == "*" ||
      ch == "+" &&
      prev.ranges.length == sel.ranges.length &&
      prev.somethingSelected() == sel.somethingSelected() &&
      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
  }

  // Called whenever the selection changes, sets the new selection as
  // the pending selection in the history, and pushes the old pending
  // selection into the 'done' array when it was significantly
  // different (in number of selected ranges, emptiness, or time).
  function addSelectionToHistory(doc, sel, opId, options) {
    var hist = doc.history, origin = options && options.origin;

    // A new event is started when the previous origin does not match
    // the current, or the origins don't allow matching. Origins
    // starting with * are always merged, those starting with + are
    // merged when similar and close together in time.
    if (opId == hist.lastSelOp ||
        (origin && hist.lastSelOrigin == origin &&
         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
      { hist.done[hist.done.length - 1] = sel; }
    else
      { pushSelectionToHistory(sel, hist.done); }

    hist.lastSelTime = +new Date;
    hist.lastSelOrigin = origin;
    hist.lastSelOp = opId;
    if (options && options.clearRedo !== false)
      { clearSelectionEvents(hist.undone); }
  }

  function pushSelectionToHistory(sel, dest) {
    var top = lst(dest);
    if (!(top && top.ranges && top.equals(sel)))
      { dest.push(sel); }
  }

  // Used to store marked span information in the history.
  function attachLocalSpans(doc, change, from, to) {
    var existing = change["spans_" + doc.id], n = 0;
    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
      if (line.markedSpans)
        { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans; }
      ++n;
    });
  }

  // When un/re-doing restores text containing marked spans, those
  // that have been explicitly cleared should not be restored.
  function removeClearedSpans(spans) {
    if (!spans) { return null }
    var out;
    for (var i = 0; i < spans.length; ++i) {
      if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i); } }
      else if (out) { out.push(spans[i]); }
    }
    return !out ? spans : out.length ? out : null
  }

  // Retrieve and filter the old marked spans stored in a change event.
  function getOldSpans(doc, change) {
    var found = change["spans_" + doc.id];
    if (!found) { return null }
    var nw = [];
    for (var i = 0; i < change.text.length; ++i)
      { nw.push(removeClearedSpans(found[i])); }
    return nw
  }

  // Used for un/re-doing changes from the history. Combines the
  // result of computing the existing spans with the set of spans that
  // existed in the history (so that deleting around a span and then
  // undoing brings back the span).
  function mergeOldSpans(doc, change) {
    var old = getOldSpans(doc, change);
    var stretched = stretchSpansOverChange(doc, change);
    if (!old) { return stretched }
    if (!stretched) { return old }

    for (var i = 0; i < old.length; ++i) {
      var oldCur = old[i], stretchCur = stretched[i];
      if (oldCur && stretchCur) {
        spans: for (var j = 0; j < stretchCur.length; ++j) {
          var span = stretchCur[j];
          for (var k = 0; k < oldCur.length; ++k)
            { if (oldCur[k].marker == span.marker) { continue spans } }
          oldCur.push(span);
        }
      } else if (stretchCur) {
        old[i] = stretchCur;
      }
    }
    return old
  }

  // Used both to provide a JSON-safe object in .getHistory, and, when
  // detaching a document, to split the history in two
  function copyHistoryArray(events, newGroup, instantiateSel) {
    var copy = [];
    for (var i = 0; i < events.length; ++i) {
      var event = events[i];
      if (event.ranges) {
        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
        continue
      }
      var changes = event.changes, newChanges = [];
      copy.push({changes: newChanges});
      for (var j = 0; j < changes.length; ++j) {
        var change = changes[j], m = (void 0);
        newChanges.push({from: change.from, to: change.to, text: change.text});
        if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
          if (indexOf(newGroup, Number(m[1])) > -1) {
            lst(newChanges)[prop] = change[prop];
            delete change[prop];
          }
        } } }
      }
    }
    return copy
  }

  // The 'scroll' parameter given to many of these indicated whether
  // the new cursor position should be scrolled into view after
  // modifying the selection.

  // If shift is held or the extend flag is set, extends a range to
  // include a given position (and optionally a second position).
  // Otherwise, simply returns the range between the given positions.
  // Used for cursor motion and such.
  function extendRange(range, head, other, extend) {
    if (extend) {
      var anchor = range.anchor;
      if (other) {
        var posBefore = cmp(head, anchor) < 0;
        if (posBefore != (cmp(other, anchor) < 0)) {
          anchor = head;
          head = other;
        } else if (posBefore != (cmp(head, other) < 0)) {
          head = other;
        }
      }
      return new Range(anchor, head)
    } else {
      return new Range(other || head, head)
    }
  }

  // Extend the primary selection range, discard the rest.
  function extendSelection(doc, head, other, options, extend) {
    if (extend == null) { extend = doc.cm && (doc.cm.display.shift || doc.extend); }
    setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
  }

  // Extend all selections (pos is an array of selections with length
  // equal the number of selections)
  function extendSelections(doc, heads, options) {
    var out = [];
    var extend = doc.cm && (doc.cm.display.shift || doc.extend);
    for (var i = 0; i < doc.sel.ranges.length; i++)
      { out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend); }
    var newSel = normalizeSelection(doc.cm, out, doc.sel.primIndex);
    setSelection(doc, newSel, options);
  }

  // Updates a single range in the selection.
  function replaceOneSelection(doc, i, range, options) {
    var ranges = doc.sel.ranges.slice(0);
    ranges[i] = range;
    setSelection(doc, normalizeSelection(doc.cm, ranges, doc.sel.primIndex), options);
  }

  // Reset the selection to a single range.
  function setSimpleSelection(doc, anchor, head, options) {
    setSelection(doc, simpleSelection(anchor, head), options);
  }

  // Give beforeSelectionChange handlers a change to influence a
  // selection update.
  function filterSelectionChange(doc, sel, options) {
    var obj = {
      ranges: sel.ranges,
      update: function(ranges) {
        this.ranges = [];
        for (var i = 0; i < ranges.length; i++)
          { this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                     clipPos(doc, ranges[i].head)); }
      },
      origin: options && options.origin
    };
    signal(doc, "beforeSelectionChange", doc, obj);
    if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj); }
    if (obj.ranges != sel.ranges) { return normalizeSelection(doc.cm, obj.ranges, obj.ranges.length - 1) }
    else { return sel }
  }

  function setSelectionReplaceHistory(doc, sel, options) {
    var done = doc.history.done, last = lst(done);
    if (last && last.ranges) {
      done[done.length - 1] = sel;
      setSelectionNoUndo(doc, sel, options);
    } else {
      setSelection(doc, sel, options);
    }
  }

  // Set a new selection.
  function setSelection(doc, sel, options) {
    setSelectionNoUndo(doc, sel, options);
    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
  }

  function setSelectionNoUndo(doc, sel, options) {
    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
      { sel = filterSelectionChange(doc, sel, options); }

    var bias = options && options.bias ||
      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

    if (!(options && options.scroll === false) && doc.cm && doc.cm.getOption("readOnly") != "nocursor")
      { ensureCursorVisible(doc.cm); }
  }

  function setSelectionInner(doc, sel) {
    if (sel.equals(doc.sel)) { return }

    doc.sel = sel;

    if (doc.cm) {
      doc.cm.curOp.updateInput = 1;
      doc.cm.curOp.selectionChanged = true;
      signalCursorActivity(doc.cm);
    }
    signalLater(doc, "cursorActivity", doc);
  }

  // Verify that the selection does not partially select any atomic
  // marked ranges.
  function reCheckSelection(doc) {
    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
  }

  // Return a selection that does not partially select any atomic
  // ranges.
  function skipAtomicInSelection(doc, sel, bias, mayClear) {
    var out;
    for (var i = 0; i < sel.ranges.length; i++) {
      var range = sel.ranges[i];
      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
      var newHead = range.head == range.anchor ? newAnchor : skipAtomic(doc, range.head, old && old.head, bias, mayClear);
      if (out || newAnchor != range.anchor || newHead != range.head) {
        if (!out) { out = sel.ranges.slice(0, i); }
        out[i] = new Range(newAnchor, newHead);
      }
    }
    return out ? normalizeSelection(doc.cm, out, sel.primIndex) : sel
  }

  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
    var line = getLine(doc, pos.line);
    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
      var sp = line.markedSpans[i], m = sp.marker;

      // Determine if we should prevent the cursor being placed to the left/right of an atomic marker
      // Historically this was determined using the inclusiveLeft/Right option, but the new way to control it
      // is with selectLeft/Right
      var preventCursorLeft = ("selectLeft" in m) ? !m.selectLeft : m.inclusiveLeft;
      var preventCursorRight = ("selectRight" in m) ? !m.selectRight : m.inclusiveRight;

      if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
          (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
        if (mayClear) {
          signal(m, "beforeCursorEnter");
          if (m.explicitlyCleared) {
            if (!line.markedSpans) { break }
            else {--i; continue}
          }
        }
        if (!m.atomic) { continue }

        if (oldPos) {
          var near = m.find(dir < 0 ? 1 : -1), diff = (void 0);
          if (dir < 0 ? preventCursorRight : preventCursorLeft)
            { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null); }
          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
            { return skipAtomicInner(doc, near, pos, dir, mayClear) }
        }

        var far = m.find(dir < 0 ? -1 : 1);
        if (dir < 0 ? preventCursorLeft : preventCursorRight)
          { far = movePos(doc, far, dir, far.line == pos.line ? line : null); }
        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
      }
    } }
    return pos
  }

  // Ensure a given position is not inside an atomic range.
  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
    var dir = bias || 1;
    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
    if (!found) {
      doc.cantEdit = true;
      return Pos(doc.first, 0)
    }
    return found
  }

  function movePos(doc, pos, dir, line) {
    if (dir < 0 && pos.ch == 0) {
      if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
      else { return null }
    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
      if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
      else { return null }
    } else {
      return new Pos(pos.line, pos.ch + dir)
    }
  }

  function selectAll(cm) {
    cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
  }

  // UPDATING

  // Allow "beforeChange" event handlers to influence a change
  function filterChange(doc, change, update) {
    var obj = {
      canceled: false,
      from: change.from,
      to: change.to,
      text: change.text,
      origin: change.origin,
      cancel: function () { return obj.canceled = true; }
    };
    if (update) { obj.update = function (from, to, text, origin) {
      if (from) { obj.from = clipPos(doc, from); }
      if (to) { obj.to = clipPos(doc, to); }
      if (text) { obj.text = text; }
      if (origin !== undefined) { obj.origin = origin; }
    }; }
    signal(doc, "beforeChange", doc, obj);
    if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj); }

    if (obj.canceled) {
      if (doc.cm) { doc.cm.curOp.updateInput = 2; }
      return null
    }
    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
  }

  // Apply a change to a document, and add it to the document's
  // history, and propagating it to all linked documents.
  function makeChange(doc, change, ignoreReadOnly) {
    if (doc.cm) {
      if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
      if (doc.cm.state.suppressEdits) { return }
    }

    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
      change = filterChange(doc, change, true);
      if (!change) { return }
    }

    // Possibly split or suppress the update based on the presence
    // of read-only spans in its range.
    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
    if (split) {
      for (var i = split.length - 1; i >= 0; --i)
        { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text, origin: change.origin}); }
    } else {
      makeChangeInner(doc, change);
    }
  }

  function makeChangeInner(doc, change) {
    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
    var selAfter = computeSelAfterChange(doc, change);
    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
    var rebased = [];

    linkedDocs(doc, function (doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change);
        rebased.push(doc.history);
      }
      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
    });
  }

  // Revert a change stored in a document's history.
  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
    var suppress = doc.cm && doc.cm.state.suppressEdits;
    if (suppress && !allowSelectionOnly) { return }

    var hist = doc.history, event, selAfter = doc.sel;
    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

    // Verify that there is a useable event (so that ctrl-z won't
    // needlessly clear selection events)
    var i = 0;
    for (; i < source.length; i++) {
      event = source[i];
      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
        { break }
    }
    if (i == source.length) { return }
    hist.lastOrigin = hist.lastSelOrigin = null;

    for (;;) {
      event = source.pop();
      if (event.ranges) {
        pushSelectionToHistory(event, dest);
        if (allowSelectionOnly && !event.equals(doc.sel)) {
          setSelection(doc, event, {clearRedo: false});
          return
        }
        selAfter = event;
      } else if (suppress) {
        source.push(event);
        return
      } else { break }
    }

    // Build up a reverse change object to add to the opposite history
    // stack (redo when undoing, and vice versa).
    var antiChanges = [];
    pushSelectionToHistory(selAfter, dest);
    dest.push({changes: antiChanges, generation: hist.generation});
    hist.generation = event.generation || ++hist.maxGeneration;

    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

    var loop = function ( i ) {
      var change = event.changes[i];
      change.origin = type;
      if (filter && !filterChange(doc, change, false)) {
        source.length = 0;
        return {}
      }

      antiChanges.push(historyChangeFromChange(doc, change));

      var after = i ? computeSelAfterChange(doc, change) : lst(source);
      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
      if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}); }
      var rebased = [];

      // Propagate to the linked documents
      linkedDocs(doc, function (doc, sharedHist) {
        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
          rebaseHist(doc.history, change);
          rebased.push(doc.history);
        }
        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
      });
    };

    for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
      var returned = loop( i$1 );

      if ( returned ) return returned.v;
    }
  }

  // Sub-views need their line numbers shifted when text is added
  // above or below them in the parent document.
  function shiftDoc(doc, distance) {
    if (distance == 0) { return }
    doc.first += distance;
    doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
      Pos(range.anchor.line + distance, range.anchor.ch),
      Pos(range.head.line + distance, range.head.ch)
    ); }), doc.sel.primIndex);
    if (doc.cm) {
      regChange(doc.cm, doc.first, doc.first - distance, distance);
      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
        { regLineChange(doc.cm, l, "gutter"); }
    }
  }

  // More lower-level change function, handling only a single document
  // (not linked ones).
  function makeChangeSingleDoc(doc, change, selAfter, spans) {
    if (doc.cm && !doc.cm.curOp)
      { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

    if (change.to.line < doc.first) {
      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
      return
    }
    if (change.from.line > doc.lastLine()) { return }

    // Clip the change to the size of this doc
    if (change.from.line < doc.first) {
      var shift = change.text.length - 1 - (doc.first - change.from.line);
      shiftDoc(doc, shift);
      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
                text: [lst(change.text)], origin: change.origin};
    }
    var last = doc.lastLine();
    if (change.to.line > last) {
      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
                text: [change.text[0]], origin: change.origin};
    }

    change.removed = getBetween(doc, change.from, change.to);

    if (!selAfter) { selAfter = computeSelAfterChange(doc, change); }
    if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans); }
    else { updateDoc(doc, change, spans); }
    setSelectionNoUndo(doc, selAfter, sel_dontScroll);

    if (doc.cantEdit && skipAtomic(doc, Pos(doc.firstLine(), 0)))
      { doc.cantEdit = false; }
  }

  // Handle the interaction of a change to a document with the editor
  // that this document is part of.
  function makeChangeSingleDocInEditor(cm, change, spans) {
    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

    var recomputeMaxLength = false, checkWidthStart = from.line;
    if (!cm.options.lineWrapping) {
      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
      doc.iter(checkWidthStart, to.line + 1, function (line) {
        if (line == display.maxLine) {
          recomputeMaxLength = true;
          return true
        }
      });
    }

    if (doc.sel.contains(change.from, change.to) > -1)
      { signalCursorActivity(cm); }

    updateDoc(doc, change, spans, estimateHeight(cm));

    if (!cm.options.lineWrapping) {
      doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
        var len = lineLength(line);
        if (len > display.maxLineLength) {
          display.maxLine = line;
          display.maxLineLength = len;
          display.maxLineChanged = true;
          recomputeMaxLength = false;
        }
      });
      if (recomputeMaxLength) { cm.curOp.updateMaxLine = true; }
    }

    retreatFrontier(doc, from.line);
    startWorker(cm, 400);

    var lendiff = change.text.length - (to.line - from.line) - 1;
    // Remember that these lines changed, for updating the display
    if (change.full)
      { regChange(cm); }
    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
      { regLineChange(cm, from.line, "text"); }
    else
      { regChange(cm, from.line, to.line + 1, lendiff); }

    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
    if (changeHandler || changesHandler) {
      var obj = {
        from: from, to: to,
        text: change.text,
        removed: change.removed,
        origin: change.origin
      };
      if (changeHandler) { signalLater(cm, "change", cm, obj); }
      if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj); }
    }
    cm.display.selForContextMenu = null;
  }

  function replaceRange(doc, code, from, to, origin) {
    var assign;

    if (!to) { to = from; }
    if (cmp(to, from) < 0) { (assign = [to, from], from = assign[0], to = assign[1]); }
    if (typeof code == "string") { code = doc.splitLines(code); }
    makeChange(doc, {from: from, to: to, text: code, origin: origin});
  }

  // Rebasing/resetting history to deal with externally-sourced changes

  function rebaseHistSelSingle(pos, from, to, diff) {
    if (to < pos.line) {
      pos.line += diff;
    } else if (from < pos.line) {
      pos.line = from;
      pos.ch = 0;
    }
  }

  // Tries to rebase an array of history events given a change in the
  // document. If the change touches the same lines as the event, the
  // event, and everything 'behind' it, is discarded. If the change is
  // before the event, the event's positions are updated. Uses a
  // copy-on-write scheme for the positions, to avoid having to
  // reallocate them all on every rebase, but also avoid problems with
  // shared position objects being unsafely updated.
  function rebaseHistArray(array, from, to, diff) {
    for (var i = 0; i < array.length; ++i) {
      var sub = array[i], ok = true;
      if (sub.ranges) {
        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
        for (var j = 0; j < sub.ranges.length; j++) {
          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
        }
        continue
      }
      for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
        var cur = sub.changes[j$1];
        if (to < cur.from.line) {
          cur.from = Pos(cur.from.line + diff, cur.from.ch);
          cur.to = Pos(cur.to.line + diff, cur.to.ch);
        } else if (from <= cur.to.line) {
          ok = false;
          break
        }
      }
      if (!ok) {
        array.splice(0, i + 1);
        i = 0;
      }
    }
  }

  function rebaseHist(hist, change) {
    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
    rebaseHistArray(hist.done, from, to, diff);
    rebaseHistArray(hist.undone, from, to, diff);
  }

  // Utility for applying a change to a line by handle or number,
  // returning the number and optionally registering the line as
  // changed.
  function changeLine(doc, handle, changeType, op) {
    var no = handle, line = handle;
    if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)); }
    else { no = lineNo(handle); }
    if (no == null) { return null }
    if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType); }
    return line
  }

  // The document is represented as a BTree consisting of leaves, with
  // chunk of lines in them, and branches, with up to ten leaves or
  // other branch nodes below them. The top node is always a branch
  // node, and is the document object itself (meaning it has
  // additional methods and properties).
  //
  // All nodes have parent links. The tree is used both to go from
  // line numbers to line objects, and to go from objects to numbers.
  // It also indexes by height, and is used to convert between height
  // and line object, and to find the total height of the document.
  //
  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

  function LeafChunk(lines) {
    this.lines = lines;
    this.parent = null;
    var height = 0;
    for (var i = 0; i < lines.length; ++i) {
      lines[i].parent = this;
      height += lines[i].height;
    }
    this.height = height;
  }

  LeafChunk.prototype = {
    chunkSize: function() { return this.lines.length },

    // Remove the n lines at offset 'at'.
    removeInner: function(at, n) {
      for (var i = at, e = at + n; i < e; ++i) {
        var line = this.lines[i];
        this.height -= line.height;
        cleanUpLine(line);
        signalLater(line, "delete");
      }
      this.lines.splice(at, n);
    },

    // Helper used to collapse a small branch into a single leaf.
    collapse: function(lines) {
      lines.push.apply(lines, this.lines);
    },

    // Insert the given array of lines at offset 'at', count them as
    // having the given height.
    insertInner: function(at, lines, height) {
      this.height += height;
      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
      for (var i = 0; i < lines.length; ++i) { lines[i].parent = this; }
    },

    // Used to iterate over a part of the tree.
    iterN: function(at, n, op) {
      for (var e = at + n; at < e; ++at)
        { if (op(this.lines[at])) { return true } }
    }
  };

  function BranchChunk(children) {
    this.children = children;
    var size = 0, height = 0;
    for (var i = 0; i < children.length; ++i) {
      var ch = children[i];
      size += ch.chunkSize(); height += ch.height;
      ch.parent = this;
    }
    this.size = size;
    this.height = height;
    this.parent = null;
  }

  BranchChunk.prototype = {
    chunkSize: function() { return this.size },

    removeInner: function(at, n) {
      this.size -= n;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var rm = Math.min(n, sz - at), oldHeight = child.height;
          child.removeInner(at, rm);
          this.height -= oldHeight - child.height;
          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
          if ((n -= rm) == 0) { break }
          at = 0;
        } else { at -= sz; }
      }
      // If the result is smaller than 25 lines, ensure that it is a
      // single leaf node.
      if (this.size - n < 25 &&
          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
        var lines = [];
        this.collapse(lines);
        this.children = [new LeafChunk(lines)];
        this.children[0].parent = this;
      }
    },

    collapse: function(lines) {
      for (var i = 0; i < this.children.length; ++i) { this.children[i].collapse(lines); }
    },

    insertInner: function(at, lines, height) {
      this.size += lines.length;
      this.height += height;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at <= sz) {
          child.insertInner(at, lines, height);
          if (child.lines && child.lines.length > 50) {
            // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
            // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
            var remaining = child.lines.length % 25 + 25;
            for (var pos = remaining; pos < child.lines.length;) {
              var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
              child.height -= leaf.height;
              this.children.splice(++i, 0, leaf);
              leaf.parent = this;
            }
            child.lines = child.lines.slice(0, remaining);
            this.maybeSpill();
          }
          break
        }
        at -= sz;
      }
    },

    // When a node has grown, check whether it should be split.
    maybeSpill: function() {
      if (this.children.length <= 10) { return }
      var me = this;
      do {
        var spilled = me.children.splice(me.children.length - 5, 5);
        var sibling = new BranchChunk(spilled);
        if (!me.parent) { // Become the parent node
          var copy = new BranchChunk(me.children);
          copy.parent = me;
          me.children = [copy, sibling];
          me = copy;
       } else {
          me.size -= sibling.size;
          me.height -= sibling.height;
          var myIndex = indexOf(me.parent.children, me);
          me.parent.children.splice(myIndex + 1, 0, sibling);
        }
        sibling.parent = me.parent;
      } while (me.children.length > 10)
      me.parent.maybeSpill();
    },

    iterN: function(at, n, op) {
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var used = Math.min(n, sz - at);
          if (child.iterN(at, used, op)) { return true }
          if ((n -= used) == 0) { break }
          at = 0;
        } else { at -= sz; }
      }
    }
  };

  // Line widgets are block elements displayed above or below a line.

  var LineWidget = function(doc, node, options) {
    if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
      { this[opt] = options[opt]; } } }
    this.doc = doc;
    this.node = node;
  };

  LineWidget.prototype.clear = function () {
    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
    if (no == null || !ws) { return }
    for (var i = 0; i < ws.length; ++i) { if (ws[i] == this) { ws.splice(i--, 1); } }
    if (!ws.length) { line.widgets = null; }
    var height = widgetHeight(this);
    updateLineHeight(line, Math.max(0, line.height - height));
    if (cm) {
      runInOp(cm, function () {
        adjustScrollWhenAboveVisible(cm, line, -height);
        regLineChange(cm, no, "widget");
      });
      signalLater(cm, "lineWidgetCleared", cm, this, no);
    }
  };

  LineWidget.prototype.changed = function () {
      var this$1 = this;

    var oldH = this.height, cm = this.doc.cm, line = this.line;
    this.height = null;
    var diff = widgetHeight(this) - oldH;
    if (!diff) { return }
    if (!lineIsHidden(this.doc, line)) { updateLineHeight(line, line.height + diff); }
    if (cm) {
      runInOp(cm, function () {
        cm.curOp.forceUpdate = true;
        adjustScrollWhenAboveVisible(cm, line, diff);
        signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line));
      });
    }
  };
  eventMixin(LineWidget);

  function adjustScrollWhenAboveVisible(cm, line, diff) {
    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
      { addToScrollTop(cm, diff); }
  }

  function addLineWidget(doc, handle, node, options) {
    var widget = new LineWidget(doc, node, options);
    var cm = doc.cm;
    if (cm && widget.noHScroll) { cm.display.alignWidgets = true; }
    changeLine(doc, handle, "widget", function (line) {
      var widgets = line.widgets || (line.widgets = []);
      if (widget.insertAt == null) { widgets.push(widget); }
      else { widgets.splice(Math.min(widgets.length, Math.max(0, widget.insertAt)), 0, widget); }
      widget.line = line;
      if (cm && !lineIsHidden(doc, line)) {
        var aboveVisible = heightAtLine(line) < doc.scrollTop;
        updateLineHeight(line, line.height + widgetHeight(widget));
        if (aboveVisible) { addToScrollTop(cm, widget.height); }
        cm.curOp.forceUpdate = true;
      }
      return true
    });
    if (cm) { signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle)); }
    return widget
  }

  // TEXTMARKERS

  // Created with markText and setBookmark methods. A TextMarker is a
  // handle that can be used to clear or find a marked position in the
  // document. Line objects hold arrays (markedSpans) containing
  // {from, to, marker} object pointing to such marker objects, and
  // indicating that such a marker is present on that line. Multiple
  // lines may point to the same marker when it spans across lines.
  // The spans will have null for their from/to properties when the
  // marker continues beyond the start/end of the line. Markers have
  // links back to the lines they currently touch.

  // Collapsed markers have unique ids, in order to be able to order
  // them, which is needed for uniquely determining an outer marker
  // when they overlap (they may nest, but not partially overlap).
  var nextMarkerId = 0;

  var TextMarker = function(doc, type) {
    this.lines = [];
    this.type = type;
    this.doc = doc;
    this.id = ++nextMarkerId;
  };

  // Clear the marker.
  TextMarker.prototype.clear = function () {
    if (this.explicitlyCleared) { return }
    var cm = this.doc.cm, withOp = cm && !cm.curOp;
    if (withOp) { startOperation(cm); }
    if (hasHandler(this, "clear")) {
      var found = this.find();
      if (found) { signalLater(this, "clear", found.from, found.to); }
    }
    var min = null, max = null;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (cm && !this.collapsed) { regLineChange(cm, lineNo(line), "text"); }
      else if (cm) {
        if (span.to != null) { max = lineNo(line); }
        if (span.from != null) { min = lineNo(line); }
      }
      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
        { updateLineHeight(line, textHeight(cm.display)); }
    }
    if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
      var visual = visualLine(this.lines[i$1]), len = lineLength(visual);
      if (len > cm.display.maxLineLength) {
        cm.display.maxLine = visual;
        cm.display.maxLineLength = len;
        cm.display.maxLineChanged = true;
      }
    } }

    if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1); }
    this.lines.length = 0;
    this.explicitlyCleared = true;
    if (this.atomic && this.doc.cantEdit) {
      this.doc.cantEdit = false;
      if (cm) { reCheckSelection(cm.doc); }
    }
    if (cm) { signalLater(cm, "markerCleared", cm, this, min, max); }
    if (withOp) { endOperation(cm); }
    if (this.parent) { this.parent.clear(); }
  };

  // Find the position of the marker in the document. Returns a {from,
  // to} object by default. Side can be passed to get a specific side
  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
  // Pos objects returned contain a line object, rather than a line
  // number (used to prevent looking up the same line twice).
  TextMarker.prototype.find = function (side, lineObj) {
    if (side == null && this.type == "bookmark") { side = 1; }
    var from, to;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (span.from != null) {
        from = Pos(lineObj ? line : lineNo(line), span.from);
        if (side == -1) { return from }
      }
      if (span.to != null) {
        to = Pos(lineObj ? line : lineNo(line), span.to);
        if (side == 1) { return to }
      }
    }
    return from && {from: from, to: to}
  };

  // Signals that the marker's widget changed, and surrounding layout
  // should be recomputed.
  TextMarker.prototype.changed = function () {
      var this$1 = this;

    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
    if (!pos || !cm) { return }
    runInOp(cm, function () {
      var line = pos.line, lineN = lineNo(pos.line);
      var view = findViewForLine(cm, lineN);
      if (view) {
        clearLineMeasurementCacheFor(view);
        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
      }
      cm.curOp.updateMaxLine = true;
      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
        var oldHeight = widget.height;
        widget.height = null;
        var dHeight = widgetHeight(widget) - oldHeight;
        if (dHeight)
          { updateLineHeight(line, line.height + dHeight); }
      }
      signalLater(cm, "markerChanged", cm, this$1);
    });
  };

  TextMarker.prototype.attachLine = function (line) {
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp;
      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
        { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this); }
    }
    this.lines.push(line);
  };

  TextMarker.prototype.detachLine = function (line) {
    this.lines.splice(indexOf(this.lines, line), 1);
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp
      ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
    }
  };
  eventMixin(TextMarker);

  // Create a marker, wire it up to the right lines, and
  function markText(doc, from, to, options, type) {
    // Shared markers (across linked documents) are handled separately
    // (markTextShared will call out to this again, once per
    // document).
    if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
    // Ensure we are in an operation.
    if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

    var marker = new TextMarker(doc, type), diff = cmp(from, to);
    if (options) { copyObj(options, marker, false); }
    // Don't connect empty markers unless clearWhenEmpty is false
    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
      { return marker }
    if (marker.replacedWith) {
      // Showing up as a widget implies collapsed (widget replaces text)
      marker.collapsed = true;
      marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
      if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true"); }
      if (options.insertLeft) { marker.widgetNode.insertLeft = true; }
    }
    if (marker.collapsed) {
      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
        { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
      seeCollapsedSpans();
    }

    if (marker.addToHistory)
      { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN); }

    var curLine = from.line, cm = doc.cm, updateMaxLine;
    doc.iter(curLine, to.line + 1, function (line) {
      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
        { updateMaxLine = true; }
      if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0); }
      addMarkedSpan(line, new MarkedSpan(marker,
                                         curLine == from.line ? from.ch : null,
                                         curLine == to.line ? to.ch : null), doc.cm && doc.cm.curOp);
      ++curLine;
    });
    // lineIsHidden depends on the presence of the spans, so needs a second pass
    if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
      if (lineIsHidden(doc, line)) { updateLineHeight(line, 0); }
    }); }

    if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }); }

    if (marker.readOnly) {
      seeReadOnlySpans();
      if (doc.history.done.length || doc.history.undone.length)
        { doc.clearHistory(); }
    }
    if (marker.collapsed) {
      marker.id = ++nextMarkerId;
      marker.atomic = true;
    }
    if (cm) {
      // Sync editor state
      if (updateMaxLine) { cm.curOp.updateMaxLine = true; }
      if (marker.collapsed)
        { regChange(cm, from.line, to.line + 1); }
      else if (marker.className || marker.startStyle || marker.endStyle || marker.css ||
               marker.attributes || marker.title)
        { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text"); } }
      if (marker.atomic) { reCheckSelection(cm.doc); }
      signalLater(cm, "markerAdded", cm, marker);
    }
    return marker
  }

  // SHARED TEXTMARKERS

  // A shared marker spans multiple linked documents. It is
  // implemented as a meta-marker-object controlling multiple normal
  // markers.
  var SharedTextMarker = function(markers, primary) {
    this.markers = markers;
    this.primary = primary;
    for (var i = 0; i < markers.length; ++i)
      { markers[i].parent = this; }
  };

  SharedTextMarker.prototype.clear = function () {
    if (this.explicitlyCleared) { return }
    this.explicitlyCleared = true;
    for (var i = 0; i < this.markers.length; ++i)
      { this.markers[i].clear(); }
    signalLater(this, "clear");
  };

  SharedTextMarker.prototype.find = function (side, lineObj) {
    return this.primary.find(side, lineObj)
  };
  eventMixin(SharedTextMarker);

  function markTextShared(doc, from, to, options, type) {
    options = copyObj(options);
    options.shared = false;
    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
    var widget = options.widgetNode;
    linkedDocs(doc, function (doc) {
      if (widget) { options.widgetNode = widget.cloneNode(true); }
      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
      for (var i = 0; i < doc.linked.length; ++i)
        { if (doc.linked[i].isParent) { return } }
      primary = lst(markers);
    });
    return new SharedTextMarker(markers, primary)
  }

  function findSharedMarkers(doc) {
    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
  }

  function copySharedMarkers(doc, markers) {
    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i], pos = marker.find();
      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
      if (cmp(mFrom, mTo)) {
        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
        marker.markers.push(subMark);
        subMark.parent = marker;
      }
    }
  }

  function detachSharedMarkers(markers) {
    var loop = function ( i ) {
      var marker = markers[i], linked = [marker.primary.doc];
      linkedDocs(marker.primary.doc, function (d) { return linked.push(d); });
      for (var j = 0; j < marker.markers.length; j++) {
        var subMarker = marker.markers[j];
        if (indexOf(linked, subMarker.doc) == -1) {
          subMarker.parent = null;
          marker.markers.splice(j--, 1);
        }
      }
    };

    for (var i = 0; i < markers.length; i++) loop( i );
  }

  var nextDocId = 0;
  var Doc = function(text, mode, firstLine, lineSep, direction) {
    if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep, direction) }
    if (firstLine == null) { firstLine = 0; }

    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
    this.first = firstLine;
    this.scrollTop = this.scrollLeft = 0;
    this.cantEdit = false;
    this.cleanGeneration = 1;
    this.modeFrontier = this.highlightFrontier = firstLine;
    var start = Pos(firstLine, 0);
    this.sel = simpleSelection(start);
    this.history = new History(null);
    this.id = ++nextDocId;
    this.modeOption = mode;
    this.lineSep = lineSep;
    this.direction = (direction == "rtl") ? "rtl" : "ltr";
    this.extend = false;

    if (typeof text == "string") { text = this.splitLines(text); }
    updateDoc(this, {from: start, to: start, text: text});
    setSelection(this, simpleSelection(start), sel_dontScroll);
  };

  Doc.prototype = createObj(BranchChunk.prototype, {
    constructor: Doc,
    // Iterate over the document. Supports two forms -- with only one
    // argument, it calls that for each line in the document. With
    // three, it iterates over the range given by the first two (with
    // the second being non-inclusive).
    iter: function(from, to, op) {
      if (op) { this.iterN(from - this.first, to - from, op); }
      else { this.iterN(this.first, this.first + this.size, from); }
    },

    // Non-public interface for adding and removing lines.
    insert: function(at, lines) {
      var height = 0;
      for (var i = 0; i < lines.length; ++i) { height += lines[i].height; }
      this.insertInner(at - this.first, lines, height);
    },
    remove: function(at, n) { this.removeInner(at - this.first, n); },

    // From here, the methods are part of the public interface. Most
    // are also available from CodeMirror (editor) instances.

    getValue: function(lineSep) {
      var lines = getLines(this, this.first, this.first + this.size);
      if (lineSep === false) { return lines }
      return lines.join(lineSep || this.lineSeparator())
    },
    setValue: docMethodOp(function(code) {
      var top = Pos(this.first, 0), last = this.first + this.size - 1;
      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                        text: this.splitLines(code), origin: "setValue", full: true}, true);
      if (this.cm) { scrollToCoords(this.cm, 0, 0); }
      setSelection(this, simpleSelection(top), sel_dontScroll);
    }),
    replaceRange: function(code, from, to, origin) {
      from = clipPos(this, from);
      to = to ? clipPos(this, to) : from;
      replaceRange(this, code, from, to, origin);
    },
    getRange: function(from, to, lineSep) {
      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
      if (lineSep === false) { return lines }
      if (lineSep === '') { return lines.join('') }
      return lines.join(lineSep || this.lineSeparator())
    },

    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

    getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
    getLineNumber: function(line) {return lineNo(line)},

    getLineHandleVisualStart: function(line) {
      if (typeof line == "number") { line = getLine(this, line); }
      return visualLine(line)
    },

    lineCount: function() {return this.size},
    firstLine: function() {return this.first},
    lastLine: function() {return this.first + this.size - 1},

    clipPos: function(pos) {return clipPos(this, pos)},

    getCursor: function(start) {
      var range = this.sel.primary(), pos;
      if (start == null || start == "head") { pos = range.head; }
      else if (start == "anchor") { pos = range.anchor; }
      else if (start == "end" || start == "to" || start === false) { pos = range.to(); }
      else { pos = range.from(); }
      return pos
    },
    listSelections: function() { return this.sel.ranges },
    somethingSelected: function() {return this.sel.somethingSelected()},

    setCursor: docMethodOp(function(line, ch, options) {
      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
    }),
    setSelection: docMethodOp(function(anchor, head, options) {
      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
    }),
    extendSelection: docMethodOp(function(head, other, options) {
      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
    }),
    extendSelections: docMethodOp(function(heads, options) {
      extendSelections(this, clipPosArray(this, heads), options);
    }),
    extendSelectionsBy: docMethodOp(function(f, options) {
      var heads = map(this.sel.ranges, f);
      extendSelections(this, clipPosArray(this, heads), options);
    }),
    setSelections: docMethodOp(function(ranges, primary, options) {
      if (!ranges.length) { return }
      var out = [];
      for (var i = 0; i < ranges.length; i++)
        { out[i] = new Range(clipPos(this, ranges[i].anchor),
                           clipPos(this, ranges[i].head || ranges[i].anchor)); }
      if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex); }
      setSelection(this, normalizeSelection(this.cm, out, primary), options);
    }),
    addSelection: docMethodOp(function(anchor, head, options) {
      var ranges = this.sel.ranges.slice(0);
      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
      setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
    }),

    getSelection: function(lineSep) {
      var ranges = this.sel.ranges, lines;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
        lines = lines ? lines.concat(sel) : sel;
      }
      if (lineSep === false) { return lines }
      else { return lines.join(lineSep || this.lineSeparator()) }
    },
    getSelections: function(lineSep) {
      var parts = [], ranges = this.sel.ranges;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
        if (lineSep !== false) { sel = sel.join(lineSep || this.lineSeparator()); }
        parts[i] = sel;
      }
      return parts
    },
    replaceSelection: function(code, collapse, origin) {
      var dup = [];
      for (var i = 0; i < this.sel.ranges.length; i++)
        { dup[i] = code; }
      this.replaceSelections(dup, collapse, origin || "+input");
    },
    replaceSelections: docMethodOp(function(code, collapse, origin) {
      var changes = [], sel = this.sel;
      for (var i = 0; i < sel.ranges.length; i++) {
        var range = sel.ranges[i];
        changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
      }
      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
      for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
        { makeChange(this, changes[i$1]); }
      if (newSel) { setSelectionReplaceHistory(this, newSel); }
      else if (this.cm) { ensureCursorVisible(this.cm); }
    }),
    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

    setExtending: function(val) {this.extend = val;},
    getExtending: function() {return this.extend},

    historySize: function() {
      var hist = this.history, done = 0, undone = 0;
      for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done; } }
      for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone; } }
      return {undo: done, redo: undone}
    },
    clearHistory: function() {
      var this$1 = this;

      this.history = new History(this.history);
      linkedDocs(this, function (doc) { return doc.history = this$1.history; }, true);
    },

    markClean: function() {
      this.cleanGeneration = this.changeGeneration(true);
    },
    changeGeneration: function(forceSplit) {
      if (forceSplit)
        { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null; }
      return this.history.generation
    },
    isClean: function (gen) {
      return this.history.generation == (gen || this.cleanGeneration)
    },

    getHistory: function() {
      return {done: copyHistoryArray(this.history.done),
              undone: copyHistoryArray(this.history.undone)}
    },
    setHistory: function(histData) {
      var hist = this.history = new History(this.history);
      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
    },

    setGutterMarker: docMethodOp(function(line, gutterID, value) {
      return changeLine(this, line, "gutter", function (line) {
        var markers = line.gutterMarkers || (line.gutterMarkers = {});
        markers[gutterID] = value;
        if (!value && isEmpty(markers)) { line.gutterMarkers = null; }
        return true
      })
    }),

    clearGutter: docMethodOp(function(gutterID) {
      var this$1 = this;

      this.iter(function (line) {
        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
          changeLine(this$1, line, "gutter", function () {
            line.gutterMarkers[gutterID] = null;
            if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null; }
            return true
          });
        }
      });
    }),

    lineInfo: function(line) {
      var n;
      if (typeof line == "number") {
        if (!isLine(this, line)) { return null }
        n = line;
        line = getLine(this, line);
        if (!line) { return null }
      } else {
        n = lineNo(line);
        if (n == null) { return null }
      }
      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
              widgets: line.widgets}
    },

    addLineClass: docMethodOp(function(handle, where, cls) {
      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
        var prop = where == "text" ? "textClass"
                 : where == "background" ? "bgClass"
                 : where == "gutter" ? "gutterClass" : "wrapClass";
        if (!line[prop]) { line[prop] = cls; }
        else if (classTest(cls).test(line[prop])) { return false }
        else { line[prop] += " " + cls; }
        return true
      })
    }),
    removeLineClass: docMethodOp(function(handle, where, cls) {
      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
        var prop = where == "text" ? "textClass"
                 : where == "background" ? "bgClass"
                 : where == "gutter" ? "gutterClass" : "wrapClass";
        var cur = line[prop];
        if (!cur) { return false }
        else if (cls == null) { line[prop] = null; }
        else {
          var found = cur.match(classTest(cls));
          if (!found) { return false }
          var end = found.index + found[0].length;
          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
        }
        return true
      })
    }),

    addLineWidget: docMethodOp(function(handle, node, options) {
      return addLineWidget(this, handle, node, options)
    }),
    removeLineWidget: function(widget) { widget.clear(); },

    markText: function(from, to, options) {
      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
    },
    setBookmark: function(pos, options) {
      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                      insertLeft: options && options.insertLeft,
                      clearWhenEmpty: false, shared: options && options.shared,
                      handleMouseEvents: options && options.handleMouseEvents};
      pos = clipPos(this, pos);
      return markText(this, pos, pos, realOpts, "bookmark")
    },
    findMarksAt: function(pos) {
      pos = clipPos(this, pos);
      var markers = [], spans = getLine(this, pos.line).markedSpans;
      if (spans) { for (var i = 0; i < spans.length; ++i) {
        var span = spans[i];
        if ((span.from == null || span.from <= pos.ch) &&
            (span.to == null || span.to >= pos.ch))
          { markers.push(span.marker.parent || span.marker); }
      } }
      return markers
    },
    findMarks: function(from, to, filter) {
      from = clipPos(this, from); to = clipPos(this, to);
      var found = [], lineNo = from.line;
      this.iter(from.line, to.line + 1, function (line) {
        var spans = line.markedSpans;
        if (spans) { for (var i = 0; i < spans.length; i++) {
          var span = spans[i];
          if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
                span.from == null && lineNo != from.line ||
                span.from != null && lineNo == to.line && span.from >= to.ch) &&
              (!filter || filter(span.marker)))
            { found.push(span.marker.parent || span.marker); }
        } }
        ++lineNo;
      });
      return found
    },
    getAllMarks: function() {
      var markers = [];
      this.iter(function (line) {
        var sps = line.markedSpans;
        if (sps) { for (var i = 0; i < sps.length; ++i)
          { if (sps[i].from != null) { markers.push(sps[i].marker); } } }
      });
      return markers
    },

    posFromIndex: function(off) {
      var ch, lineNo = this.first, sepSize = this.lineSeparator().length;
      this.iter(function (line) {
        var sz = line.text.length + sepSize;
        if (sz > off) { ch = off; return true }
        off -= sz;
        ++lineNo;
      });
      return clipPos(this, Pos(lineNo, ch))
    },
    indexFromPos: function (coords) {
      coords = clipPos(this, coords);
      var index = coords.ch;
      if (coords.line < this.first || coords.ch < 0) { return 0 }
      var sepSize = this.lineSeparator().length;
      this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
        index += line.text.length + sepSize;
      });
      return index
    },

    copy: function(copyHistory) {
      var doc = new Doc(getLines(this, this.first, this.first + this.size),
                        this.modeOption, this.first, this.lineSep, this.direction);
      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
      doc.sel = this.sel;
      doc.extend = false;
      if (copyHistory) {
        doc.history.undoDepth = this.history.undoDepth;
        doc.setHistory(this.getHistory());
      }
      return doc
    },

    linkedDoc: function(options) {
      if (!options) { options = {}; }
      var from = this.first, to = this.first + this.size;
      if (options.from != null && options.from > from) { from = options.from; }
      if (options.to != null && options.to < to) { to = options.to; }
      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);
      if (options.sharedHist) { copy.history = this.history
      ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
      copySharedMarkers(copy, findSharedMarkers(this));
      return copy
    },
    unlinkDoc: function(other) {
      if (other instanceof CodeMirror) { other = other.doc; }
      if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
        var link = this.linked[i];
        if (link.doc != other) { continue }
        this.linked.splice(i, 1);
        other.unlinkDoc(this);
        detachSharedMarkers(findSharedMarkers(this));
        break
      } }
      // If the histories were shared, split them again
      if (other.history == this.history) {
        var splitIds = [other.id];
        linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true);
        other.history = new History(null);
        other.history.done = copyHistoryArray(this.history.done, splitIds);
        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
      }
    },
    iterLinkedDocs: function(f) {linkedDocs(this, f);},

    getMode: function() {return this.mode},
    getEditor: function() {return this.cm},

    splitLines: function(str) {
      if (this.lineSep) { return str.split(this.lineSep) }
      return splitLinesAuto(str)
    },
    lineSeparator: function() { return this.lineSep || "\n" },

    setDirection: docMethodOp(function (dir) {
      if (dir != "rtl") { dir = "ltr"; }
      if (dir == this.direction) { return }
      this.direction = dir;
      this.iter(function (line) { return line.order = null; });
      if (this.cm) { directionChanged(this.cm); }
    })
  });

  // Public alias.
  Doc.prototype.eachLine = Doc.prototype.iter;

  // Kludge to work around strange IE behavior where it'll sometimes
  // re-fire a series of drag-related events right after the drop (#1551)
  var lastDrop = 0;

  function onDrop(e) {
    var cm = this;
    clearDragCursor(cm);
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
      { return }
    e_preventDefault(e);
    if (ie) { lastDrop = +new Date; }
    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
    if (!pos || cm.isReadOnly()) { return }
    // Might be a file drop, in which case we simply extract the text
    // and insert it.
    if (files && files.length && window.FileReader && window.File) {
      var n = files.length, text = Array(n), read = 0;
      var markAsReadAndPasteIfAllFilesAreRead = function () {
        if (++read == n) {
          operation(cm, function () {
            pos = clipPos(cm.doc, pos);
            var change = {from: pos, to: pos,
                          text: cm.doc.splitLines(
                              text.filter(function (t) { return t != null; }).join(cm.doc.lineSeparator())),
                          origin: "paste"};
            makeChange(cm.doc, change);
            setSelectionReplaceHistory(cm.doc, simpleSelection(clipPos(cm.doc, pos), clipPos(cm.doc, changeEnd(change))));
          })();
        }
      };
      var readTextFromFile = function (file, i) {
        if (cm.options.allowDropFileTypes &&
            indexOf(cm.options.allowDropFileTypes, file.type) == -1) {
          markAsReadAndPasteIfAllFilesAreRead();
          return
        }
        var reader = new FileReader;
        reader.onerror = function () { return markAsReadAndPasteIfAllFilesAreRead(); };
        reader.onload = function () {
          var content = reader.result;
          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
            markAsReadAndPasteIfAllFilesAreRead();
            return
          }
          text[i] = content;
          markAsReadAndPasteIfAllFilesAreRead();
        };
        reader.readAsText(file);
      };
      for (var i = 0; i < files.length; i++) { readTextFromFile(files[i], i); }
    } else { // Normal drop
      // Don't do a replace if the drop happened inside of the selected text.
      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
        cm.state.draggingText(e);
        // Ensure the editor is re-focused
        setTimeout(function () { return cm.display.input.focus(); }, 20);
        return
      }
      try {
        var text$1 = e.dataTransfer.getData("Text");
        if (text$1) {
          var selected;
          if (cm.state.draggingText && !cm.state.draggingText.copy)
            { selected = cm.listSelections(); }
          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
          if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
            { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag"); } }
          cm.replaceSelection(text$1, "around", "paste");
          cm.display.input.focus();
        }
      }
      catch(e$1){}
    }
  }

  function onDragStart(cm, e) {
    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

    e.dataTransfer.setData("Text", cm.getSelection());
    e.dataTransfer.effectAllowed = "copyMove";

    // Use dummy image instead of default browsers image.
    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
    if (e.dataTransfer.setDragImage && !safari) {
      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      if (presto) {
        img.width = img.height = 1;
        cm.display.wrapper.appendChild(img);
        // Force a relayout, or Opera won't use our image for some obscure reason
        img._top = img.offsetTop;
      }
      e.dataTransfer.setDragImage(img, 0, 0);
      if (presto) { img.parentNode.removeChild(img); }
    }
  }

  function onDragOver(cm, e) {
    var pos = posFromMouse(cm, e);
    if (!pos) { return }
    var frag = document.createDocumentFragment();
    drawSelectionCursor(cm, pos, frag);
    if (!cm.display.dragCursor) {
      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
    }
    removeChildrenAndAdd(cm.display.dragCursor, frag);
  }

  function clearDragCursor(cm) {
    if (cm.display.dragCursor) {
      cm.display.lineSpace.removeChild(cm.display.dragCursor);
      cm.display.dragCursor = null;
    }
  }

  // These must be handled carefully, because naively registering a
  // handler for each editor will cause the editors to never be
  // garbage collected.

  function forEachCodeMirror(f) {
    if (!document.getElementsByClassName) { return }
    var byClass = document.getElementsByClassName("CodeMirror"), editors = [];
    for (var i = 0; i < byClass.length; i++) {
      var cm = byClass[i].CodeMirror;
      if (cm) { editors.push(cm); }
    }
    if (editors.length) { editors[0].operation(function () {
      for (var i = 0; i < editors.length; i++) { f(editors[i]); }
    }); }
  }

  var globalsRegistered = false;
  function ensureGlobalHandlers() {
    if (globalsRegistered) { return }
    registerGlobalHandlers();
    globalsRegistered = true;
  }
  function registerGlobalHandlers() {
    // When the window resizes, we need to refresh active editors.
    var resizeTimer;
    on(window, "resize", function () {
      if (resizeTimer == null) { resizeTimer = setTimeout(function () {
        resizeTimer = null;
        forEachCodeMirror(onResize);
      }, 100); }
    });
    // When the window loses focus, we want to show the editor as blurred
    on(window, "blur", function () { return forEachCodeMirror(onBlur); });
  }
  // Called when the window resizes
  function onResize(cm) {
    var d = cm.display;
    // Might be a text scaling operation, clear size caches.
    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
    d.scrollbarsClipped = false;
    cm.setSize();
  }

  var keyNames = {
    3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 145: "ScrollLock",
    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
    221: "]", 222: "'", 224: "Mod", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
  };

  // Number keys
  for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i); }
  // Alphabetic keys
  for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1); }
  // Function keys
  for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2; }

  var keyMap = {};

  keyMap.basic = {
    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
    "Esc": "singleSelection"
  };
  // Note that the save and find-related commands aren't defined by
  // default. User code or addons can define them. Unknown commands
  // are simply ignored.
  keyMap.pcDefault = {
    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
    "fallthrough": "basic"
  };
  // Very basic readline/emacs-style bindings, which are standard on Mac.
  keyMap.emacsy = {
    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
    "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp",
    "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine",
    "Ctrl-T": "transposeChars", "Ctrl-O": "openLine"
  };
  keyMap.macDefault = {
    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
    "fallthrough": ["basic", "emacsy"]
  };
  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

  // KEYMAP DISPATCH

  function normalizeKeyName(name) {
    var parts = name.split(/-(?!$)/);
    name = parts[parts.length - 1];
    var alt, ctrl, shift, cmd;
    for (var i = 0; i < parts.length - 1; i++) {
      var mod = parts[i];
      if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true; }
      else if (/^a(lt)?$/i.test(mod)) { alt = true; }
      else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true; }
      else if (/^s(hift)?$/i.test(mod)) { shift = true; }
      else { throw new Error("Unrecognized modifier name: " + mod) }
    }
    if (alt) { name = "Alt-" + name; }
    if (ctrl) { name = "Ctrl-" + name; }
    if (cmd) { name = "Cmd-" + name; }
    if (shift) { name = "Shift-" + name; }
    return name
  }

  // This is a kludge to keep keymaps mostly working as raw objects
  // (backwards compatibility) while at the same time support features
  // like normalization and multi-stroke key bindings. It compiles a
  // new normalized keymap, and then updates the old object to reflect
  // this.
  function normalizeKeyMap(keymap) {
    var copy = {};
    for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
      var value = keymap[keyname];
      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
      if (value == "...") { delete keymap[keyname]; continue }

      var keys = map(keyname.split(" "), normalizeKeyName);
      for (var i = 0; i < keys.length; i++) {
        var val = (void 0), name = (void 0);
        if (i == keys.length - 1) {
          name = keys.join(" ");
          val = value;
        } else {
          name = keys.slice(0, i + 1).join(" ");
          val = "...";
        }
        var prev = copy[name];
        if (!prev) { copy[name] = val; }
        else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
      }
      delete keymap[keyname];
    } }
    for (var prop in copy) { keymap[prop] = copy[prop]; }
    return keymap
  }

  function lookupKey(key, map, handle, context) {
    map = getKeyMap(map);
    var found = map.call ? map.call(key, context) : map[key];
    if (found === false) { return "nothing" }
    if (found === "...") { return "multi" }
    if (found != null && handle(found)) { return "handled" }

    if (map.fallthrough) {
      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
        { return lookupKey(key, map.fallthrough, handle, context) }
      for (var i = 0; i < map.fallthrough.length; i++) {
        var result = lookupKey(key, map.fallthrough[i], handle, context);
        if (result) { return result }
      }
    }
  }

  // Modifier key presses don't count as 'real' key presses for the
  // purpose of keymap fallthrough.
  function isModifierKey(value) {
    var name = typeof value == "string" ? value : keyNames[value.keyCode];
    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
  }

  function addModifierNames(name, event, noShift) {
    var base = name;
    if (event.altKey && base != "Alt") { name = "Alt-" + name; }
    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name; }
    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Mod") { name = "Cmd-" + name; }
    if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name; }
    return name
  }

  // Look up the name of a key as indicated by an event object.
  function keyName(event, noShift) {
    if (presto && event.keyCode == 34 && event["char"]) { return false }
    var name = keyNames[event.keyCode];
    if (name == null || event.altGraphKey) { return false }
    // Ctrl-ScrollLock has keyCode 3, same as Ctrl-Pause,
    // so we'll use event.code when available (Chrome 48+, FF 38+, Safari 10.1+)
    if (event.keyCode == 3 && event.code) { name = event.code; }
    return addModifierNames(name, event, noShift)
  }

  function getKeyMap(val) {
    return typeof val == "string" ? keyMap[val] : val
  }

  // Helper for deleting text near the selection(s), used to implement
  // backspace, delete, and similar functionality.
  function deleteNearSelection(cm, compute) {
    var ranges = cm.doc.sel.ranges, kill = [];
    // Build up a set of ranges to kill first, merging overlapping
    // ranges.
    for (var i = 0; i < ranges.length; i++) {
      var toKill = compute(ranges[i]);
      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
        var replaced = kill.pop();
        if (cmp(replaced.from, toKill.from) < 0) {
          toKill.from = replaced.from;
          break
        }
      }
      kill.push(toKill);
    }
    // Next, remove those actual ranges.
    runInOp(cm, function () {
      for (var i = kill.length - 1; i >= 0; i--)
        { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete"); }
      ensureCursorVisible(cm);
    });
  }

  function moveCharLogically(line, ch, dir) {
    var target = skipExtendingChars(line.text, ch + dir, dir);
    return target < 0 || target > line.text.length ? null : target
  }

  function moveLogically(line, start, dir) {
    var ch = moveCharLogically(line, start.ch, dir);
    return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before")
  }

  function endOfLine(visually, cm, lineObj, lineNo, dir) {
    if (visually) {
      if (cm.doc.direction == "rtl") { dir = -dir; }
      var order = getOrder(lineObj, cm.doc.direction);
      if (order) {
        var part = dir < 0 ? lst(order) : order[0];
        var moveInStorageOrder = (dir < 0) == (part.level == 1);
        var sticky = moveInStorageOrder ? "after" : "before";
        var ch;
        // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
        // it could be that the last bidi part is not on the last visual line,
        // since visual lines contain content order-consecutive chunks.
        // Thus, in rtl, we are looking for the first (content-order) character
        // in the rtl chunk that is on the last line (that is, the same line
        // as the last (content-order) character).
        if (part.level > 0 || cm.doc.direction == "rtl") {
          var prep = prepareMeasureForLine(cm, lineObj);
          ch = dir < 0 ? lineObj.text.length - 1 : 0;
          var targetTop = measureCharPrepared(cm, prep, ch).top;
          ch = findFirst(function (ch) { return measureCharPrepared(cm, prep, ch).top == targetTop; }, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch);
          if (sticky == "before") { ch = moveCharLogically(lineObj, ch, 1); }
        } else { ch = dir < 0 ? part.to : part.from; }
        return new Pos(lineNo, ch, sticky)
      }
    }
    return new Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
  }

  function moveVisually(cm, line, start, dir) {
    var bidi = getOrder(line, cm.doc.direction);
    if (!bidi) { return moveLogically(line, start, dir) }
    if (start.ch >= line.text.length) {
      start.ch = line.text.length;
      start.sticky = "before";
    } else if (start.ch <= 0) {
      start.ch = 0;
      start.sticky = "after";
    }
    var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
    if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
      // Case 1: We move within an ltr part in an ltr editor. Even with wrapped lines,
      // nothing interesting happens.
      return moveLogically(line, start, dir)
    }

    var mv = function (pos, dir) { return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir); };
    var prep;
    var getWrappedLineExtent = function (ch) {
      if (!cm.options.lineWrapping) { return {begin: 0, end: line.text.length} }
      prep = prep || prepareMeasureForLine(cm, line);
      return wrappedLineExtentChar(cm, line, prep, ch)
    };
    var wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);

    if (cm.doc.direction == "rtl" || part.level == 1) {
      var moveInStorageOrder = (part.level == 1) == (dir < 0);
      var ch = mv(start, moveInStorageOrder ? 1 : -1);
      if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
        // Case 2: We move within an rtl part or in an rtl editor on the same visual line
        var sticky = moveInStorageOrder ? "before" : "after";
        return new Pos(start.line, ch, sticky)
      }
    }

    // Case 3: Could not move within this bidi part in this visual line, so leave
    // the current bidi part

    var searchInVisualLine = function (partPos, dir, wrappedLineExtent) {
      var getRes = function (ch, moveInStorageOrder) { return moveInStorageOrder
        ? new Pos(start.line, mv(ch, 1), "before")
        : new Pos(start.line, ch, "after"); };

      for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
        var part = bidi[partPos];
        var moveInStorageOrder = (dir > 0) == (part.level != 1);
        var ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1);
        if (part.from <= ch && ch < part.to) { return getRes(ch, moveInStorageOrder) }
        ch = moveInStorageOrder ? part.from : mv(part.to, -1);
        if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) { return getRes(ch, moveInStorageOrder) }
      }
    };

    // Case 3a: Look for other bidi parts on the same visual line
    var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent);
    if (res) { return res }

    // Case 3b: Look for other bidi parts on the next visual line
    var nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1);
    if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
      res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
      if (res) { return res }
    }

    // Case 4: Nowhere to move
    return null
  }

  // Commands are parameter-less actions that can be performed on an
  // editor, mostly used for keybindings.
  var commands = {
    selectAll: selectAll,
    singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
    killLine: function (cm) { return deleteNearSelection(cm, function (range) {
      if (range.empty()) {
        var len = getLine(cm.doc, range.head.line).text.length;
        if (range.head.ch == len && range.head.line < cm.lastLine())
          { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
        else
          { return {from: range.head, to: Pos(range.head.line, len)} }
      } else {
        return {from: range.from(), to: range.to()}
      }
    }); },
    deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
      from: Pos(range.from().line, 0),
      to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
    }); }); },
    delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
      from: Pos(range.from().line, 0), to: range.from()
    }); }); },
    delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var leftPos = cm.coordsChar({left: 0, top: top}, "div");
      return {from: leftPos, to: range.from()}
    }); },
    delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
      return {from: range.from(), to: rightPos }
    }); },
    undo: function (cm) { return cm.undo(); },
    redo: function (cm) { return cm.redo(); },
    undoSelection: function (cm) { return cm.undoSelection(); },
    redoSelection: function (cm) { return cm.redoSelection(); },
    goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
    goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
    goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
      {origin: "+move", bias: 1}
    ); },
    goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
      {origin: "+move", bias: 1}
    ); },
    goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
      {origin: "+move", bias: -1}
    ); },
    goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
    }, sel_move); },
    goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({left: 0, top: top}, "div")
    }, sel_move); },
    goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      var pos = cm.coordsChar({left: 0, top: top}, "div");
      if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
      return pos
    }, sel_move); },
    goLineUp: function (cm) { return cm.moveV(-1, "line"); },
    goLineDown: function (cm) { return cm.moveV(1, "line"); },
    goPageUp: function (cm) { return cm.moveV(-1, "page"); },
    goPageDown: function (cm) { return cm.moveV(1, "page"); },
    goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
    goCharRight: function (cm) { return cm.moveH(1, "char"); },
    goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
    goColumnRight: function (cm) { return cm.moveH(1, "column"); },
    goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
    goGroupRight: function (cm) { return cm.moveH(1, "group"); },
    goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
    goWordRight: function (cm) { return cm.moveH(1, "word"); },
    delCharBefore: function (cm) { return cm.deleteH(-1, "codepoint"); },
    delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
    delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
    delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
    delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
    delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
    indentAuto: function (cm) { return cm.indentSelection("smart"); },
    indentMore: function (cm) { return cm.indentSelection("add"); },
    indentLess: function (cm) { return cm.indentSelection("subtract"); },
    insertTab: function (cm) { return cm.replaceSelection("\t"); },
    insertSoftTab: function (cm) {
      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
      for (var i = 0; i < ranges.length; i++) {
        var pos = ranges[i].from();
        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
        spaces.push(spaceStr(tabSize - col % tabSize));
      }
      cm.replaceSelections(spaces);
    },
    defaultTab: function (cm) {
      if (cm.somethingSelected()) { cm.indentSelection("add"); }
      else { cm.execCommand("insertTab"); }
    },
    // Swap the two chars left and right of each selection's head.
    // Move cursor behind the two swapped characters afterwards.
    //
    // Doesn't consider line feeds a character.
    // Doesn't scan more than one line above to find a character.
    // Doesn't do anything on an empty line.
    // Doesn't do anything with non-empty selections.
    transposeChars: function (cm) { return runInOp(cm, function () {
      var ranges = cm.listSelections(), newSel = [];
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty()) { continue }
        var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
        if (line) {
          if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1); }
          if (cur.ch > 0) {
            cur = new Pos(cur.line, cur.ch + 1);
            cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                            Pos(cur.line, cur.ch - 2), cur, "+transpose");
          } else if (cur.line > cm.doc.first) {
            var prev = getLine(cm.doc, cur.line - 1).text;
            if (prev) {
              cur = new Pos(cur.line, 1);
              cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                              prev.charAt(prev.length - 1),
                              Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
            }
          }
        }
        newSel.push(new Range(cur, cur));
      }
      cm.setSelections(newSel);
    }); },
    newlineAndIndent: function (cm) { return runInOp(cm, function () {
      var sels = cm.listSelections();
      for (var i = sels.length - 1; i >= 0; i--)
        { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input"); }
      sels = cm.listSelections();
      for (var i$1 = 0; i$1 < sels.length; i$1++)
        { cm.indentLine(sels[i$1].from().line, null, true); }
      ensureCursorVisible(cm);
    }); },
    openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
    toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
  };


  function lineStart(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLine(line);
    if (visual != line) { lineN = lineNo(visual); }
    return endOfLine(true, cm, visual, lineN, 1)
  }
  function lineEnd(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLineEnd(line);
    if (visual != line) { lineN = lineNo(visual); }
    return endOfLine(true, cm, line, lineN, -1)
  }
  function lineStartSmart(cm, pos) {
    var start = lineStart(cm, pos.line);
    var line = getLine(cm.doc, start.line);
    var order = getOrder(line, cm.doc.direction);
    if (!order || order[0].level == 0) {
      var firstNonWS = Math.max(start.ch, line.text.search(/\S/));
      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
      return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky)
    }
    return start
  }

  // Run a handler that was bound to a key.
  function doHandleBinding(cm, bound, dropShift) {
    if (typeof bound == "string") {
      bound = commands[bound];
      if (!bound) { return false }
    }
    // Ensure previous input has been read, so that the handler sees a
    // consistent view of the document
    cm.display.input.ensurePolled();
    var prevShift = cm.display.shift, done = false;
    try {
      if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
      if (dropShift) { cm.display.shift = false; }
      done = bound(cm) != Pass;
    } finally {
      cm.display.shift = prevShift;
      cm.state.suppressEdits = false;
    }
    return done
  }

  function lookupKeyForEditor(cm, name, handle) {
    for (var i = 0; i < cm.state.keyMaps.length; i++) {
      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
      if (result) { return result }
    }
    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
      || lookupKey(name, cm.options.keyMap, handle, cm)
  }

  // Note that, despite the name, this function is also used to check
  // for bound mouse clicks.

  var stopSeq = new Delayed;

  function dispatchKey(cm, name, e, handle) {
    var seq = cm.state.keySeq;
    if (seq) {
      if (isModifierKey(name)) { return "handled" }
      if (/\'$/.test(name))
        { cm.state.keySeq = null; }
      else
        { stopSeq.set(50, function () {
          if (cm.state.keySeq == seq) {
            cm.state.keySeq = null;
            cm.display.input.reset();
          }
        }); }
      if (dispatchKeyInner(cm, seq + " " + name, e, handle)) { return true }
    }
    return dispatchKeyInner(cm, name, e, handle)
  }

  function dispatchKeyInner(cm, name, e, handle) {
    var result = lookupKeyForEditor(cm, name, handle);

    if (result == "multi")
      { cm.state.keySeq = name; }
    if (result == "handled")
      { signalLater(cm, "keyHandled", cm, name, e); }

    if (result == "handled" || result == "multi") {
      e_preventDefault(e);
      restartBlink(cm);
    }

    return !!result
  }

  // Handle a key from the keydown event.
  function handleKeyBinding(cm, e) {
    var name = keyName(e, true);
    if (!name) { return false }

    if (e.shiftKey && !cm.state.keySeq) {
      // First try to resolve full name (including 'Shift-'). Failing
      // that, see if there is a cursor-motion command (starting with
      // 'go') bound to the keyname without 'Shift-'.
      return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
          || dispatchKey(cm, name, e, function (b) {
               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
                 { return doHandleBinding(cm, b) }
             })
    } else {
      return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
    }
  }

  // Handle a key from the keypress event
  function handleCharBinding(cm, e, ch) {
    return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
  }

  var lastStoppedKey = null;
  function onKeyDown(e) {
    var cm = this;
    if (e.target && e.target != cm.display.input.getField()) { return }
    cm.curOp.focus = activeElt(doc(cm));
    if (signalDOMEvent(cm, e)) { return }
    // IE does strange things with escape.
    if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false; }
    var code = e.keyCode;
    cm.display.shift = code == 16 || e.shiftKey;
    var handled = handleKeyBinding(cm, e);
    if (presto) {
      lastStoppedKey = handled ? code : null;
      // Opera has no cut event... we try to at least catch the key combo
      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
        { cm.replaceSelection("", null, "cut"); }
    }
    if (gecko && !mac && !handled && code == 46 && e.shiftKey && !e.ctrlKey && document.execCommand)
      { document.execCommand("cut"); }

    // Turn mouse into crosshair when Alt is held on Mac.
    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
      { showCrossHair(cm); }
  }

  function showCrossHair(cm) {
    var lineDiv = cm.display.lineDiv;
    addClass(lineDiv, "CodeMirror-crosshair");

    function up(e) {
      if (e.keyCode == 18 || !e.altKey) {
        rmClass(lineDiv, "CodeMirror-crosshair");
        off(document, "keyup", up);
        off(document, "mouseover", up);
      }
    }
    on(document, "keyup", up);
    on(document, "mouseover", up);
  }

  function onKeyUp(e) {
    if (e.keyCode == 16) { this.doc.sel.shift = false; }
    signalDOMEvent(this, e);
  }

  function onKeyPress(e) {
    var cm = this;
    if (e.target && e.target != cm.display.input.getField()) { return }
    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
    var keyCode = e.keyCode, charCode = e.charCode;
    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
    // Some browsers fire keypress events for backspace
    if (ch == "\x08") { return }
    if (handleCharBinding(cm, e, ch)) { return }
    cm.display.input.onKeyPress(e);
  }

  var DOUBLECLICK_DELAY = 400;

  var PastClick = function(time, pos, button) {
    this.time = time;
    this.pos = pos;
    this.button = button;
  };

  PastClick.prototype.compare = function (time, pos, button) {
    return this.time + DOUBLECLICK_DELAY > time &&
      cmp(pos, this.pos) == 0 && button == this.button
  };

  var lastClick, lastDoubleClick;
  function clickRepeat(pos, button) {
    var now = +new Date;
    if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
      lastClick = lastDoubleClick = null;
      return "triple"
    } else if (lastClick && lastClick.compare(now, pos, button)) {
      lastDoubleClick = new PastClick(now, pos, button);
      lastClick = null;
      return "double"
    } else {
      lastClick = new PastClick(now, pos, button);
      lastDoubleClick = null;
      return "single"
    }
  }

  // A mouse down can be a single click, double click, triple click,
  // start of selection drag, start of text drag, new cursor
  // (ctrl-click), rectangle drag (alt-drag), or xwin
  // middle-click-paste. Or it might be a click on something we should
  // not interfere with, such as a scrollbar or widget.
  function onMouseDown(e) {
    var cm = this, display = cm.display;
    if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
    display.input.ensurePolled();
    display.shift = e.shiftKey;

    if (eventInWidget(display, e)) {
      if (!webkit) {
        // Briefly turn off draggability, to allow widgets to do
        // normal dragging things.
        display.scroller.draggable = false;
        setTimeout(function () { return display.scroller.draggable = true; }, 100);
      }
      return
    }
    if (clickInGutter(cm, e)) { return }
    var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
    win(cm).focus();

    // #3261: make sure, that we're not starting a second selection
    if (button == 1 && cm.state.selectingText)
      { cm.state.selectingText(e); }

    if (pos && handleMappedButton(cm, button, pos, repeat, e)) { return }

    if (button == 1) {
      if (pos) { leftButtonDown(cm, pos, repeat, e); }
      else if (e_target(e) == display.scroller) { e_preventDefault(e); }
    } else if (button == 2) {
      if (pos) { extendSelection(cm.doc, pos); }
      setTimeout(function () { return display.input.focus(); }, 20);
    } else if (button == 3) {
      if (captureRightClick) { cm.display.input.onContextMenu(e); }
      else { delayBlurEvent(cm); }
    }
  }

  function handleMappedButton(cm, button, pos, repeat, event) {
    var name = "Click";
    if (repeat == "double") { name = "Double" + name; }
    else if (repeat == "triple") { name = "Triple" + name; }
    name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;

    return dispatchKey(cm,  addModifierNames(name, event), event, function (bound) {
      if (typeof bound == "string") { bound = commands[bound]; }
      if (!bound) { return false }
      var done = false;
      try {
        if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
        done = bound(cm, pos) != Pass;
      } finally {
        cm.state.suppressEdits = false;
      }
      return done
    })
  }

  function configureMouse(cm, repeat, event) {
    var option = cm.getOption("configureMouse");
    var value = option ? option(cm, repeat, event) : {};
    if (value.unit == null) {
      var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
      value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
    }
    if (value.extend == null || cm.doc.extend) { value.extend = cm.doc.extend || event.shiftKey; }
    if (value.addNew == null) { value.addNew = mac ? event.metaKey : event.ctrlKey; }
    if (value.moveOnDrag == null) { value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey); }
    return value
  }

  function leftButtonDown(cm, pos, repeat, event) {
    if (ie) { setTimeout(bind(ensureFocus, cm), 0); }
    else { cm.curOp.focus = activeElt(doc(cm)); }

    var behavior = configureMouse(cm, repeat, event);

    var sel = cm.doc.sel, contained;
    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
        repeat == "single" && (contained = sel.contains(pos)) > -1 &&
        (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) &&
        (cmp(contained.to(), pos) > 0 || pos.xRel < 0))
      { leftButtonStartDrag(cm, event, pos, behavior); }
    else
      { leftButtonSelect(cm, event, pos, behavior); }
  }

  // Start a text drag. When it ends, see if any dragging actually
  // happen, and treat as a click if it didn't.
  function leftButtonStartDrag(cm, event, pos, behavior) {
    var display = cm.display, moved = false;
    var dragEnd = operation(cm, function (e) {
      if (webkit) { display.scroller.draggable = false; }
      cm.state.draggingText = false;
      if (cm.state.delayingBlurEvent) {
        if (cm.hasFocus()) { cm.state.delayingBlurEvent = false; }
        else { delayBlurEvent(cm); }
      }
      off(display.wrapper.ownerDocument, "mouseup", dragEnd);
      off(display.wrapper.ownerDocument, "mousemove", mouseMove);
      off(display.scroller, "dragstart", dragStart);
      off(display.scroller, "drop", dragEnd);
      if (!moved) {
        e_preventDefault(e);
        if (!behavior.addNew)
          { extendSelection(cm.doc, pos, null, null, behavior.extend); }
        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
        if ((webkit && !safari) || ie && ie_version == 9)
          { setTimeout(function () {display.wrapper.ownerDocument.body.focus({preventScroll: true}); display.input.focus();}, 20); }
        else
          { display.input.focus(); }
      }
    });
    var mouseMove = function(e2) {
      moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
    };
    var dragStart = function () { return moved = true; };
    // Let the drag handler handle this.
    if (webkit) { display.scroller.draggable = true; }
    cm.state.draggingText = dragEnd;
    dragEnd.copy = !behavior.moveOnDrag;
    on(display.wrapper.ownerDocument, "mouseup", dragEnd);
    on(display.wrapper.ownerDocument, "mousemove", mouseMove);
    on(display.scroller, "dragstart", dragStart);
    on(display.scroller, "drop", dragEnd);

    cm.state.delayingBlurEvent = true;
    setTimeout(function () { return display.input.focus(); }, 20);
    // IE's approach to draggable
    if (display.scroller.dragDrop) { display.scroller.dragDrop(); }
  }

  function rangeForUnit(cm, pos, unit) {
    if (unit == "char") { return new Range(pos, pos) }
    if (unit == "word") { return cm.findWordAt(pos) }
    if (unit == "line") { return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
    var result = unit(cm, pos);
    return new Range(result.from, result.to)
  }

  // Normal selection, as opposed to text dragging.
  function leftButtonSelect(cm, event, start, behavior) {
    if (ie) { delayBlurEvent(cm); }
    var display = cm.display, doc$1 = cm.doc;
    e_preventDefault(event);

    var ourRange, ourIndex, startSel = doc$1.sel, ranges = startSel.ranges;
    if (behavior.addNew && !behavior.extend) {
      ourIndex = doc$1.sel.contains(start);
      if (ourIndex > -1)
        { ourRange = ranges[ourIndex]; }
      else
        { ourRange = new Range(start, start); }
    } else {
      ourRange = doc$1.sel.primary();
      ourIndex = doc$1.sel.primIndex;
    }

    if (behavior.unit == "rectangle") {
      if (!behavior.addNew) { ourRange = new Range(start, start); }
      start = posFromMouse(cm, event, true, true);
      ourIndex = -1;
    } else {
      var range = rangeForUnit(cm, start, behavior.unit);
      if (behavior.extend)
        { ourRange = extendRange(ourRange, range.anchor, range.head, behavior.extend); }
      else
        { ourRange = range; }
    }

    if (!behavior.addNew) {
      ourIndex = 0;
      setSelection(doc$1, new Selection([ourRange], 0), sel_mouse);
      startSel = doc$1.sel;
    } else if (ourIndex == -1) {
      ourIndex = ranges.length;
      setSelection(doc$1, normalizeSelection(cm, ranges.concat([ourRange]), ourIndex),
                   {scroll: false, origin: "*mouse"});
    } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
      setSelection(doc$1, normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
                   {scroll: false, origin: "*mouse"});
      startSel = doc$1.sel;
    } else {
      replaceOneSelection(doc$1, ourIndex, ourRange, sel_mouse);
    }

    var lastPos = start;
    function extendTo(pos) {
      if (cmp(lastPos, pos) == 0) { return }
      lastPos = pos;

      if (behavior.unit == "rectangle") {
        var ranges = [], tabSize = cm.options.tabSize;
        var startCol = countColumn(getLine(doc$1, start.line).text, start.ch, tabSize);
        var posCol = countColumn(getLine(doc$1, pos.line).text, pos.ch, tabSize);
        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
             line <= end; line++) {
          var text = getLine(doc$1, line).text, leftPos = findColumn(text, left, tabSize);
          if (left == right)
            { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))); }
          else if (text.length > leftPos)
            { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))); }
        }
        if (!ranges.length) { ranges.push(new Range(start, start)); }
        setSelection(doc$1, normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                     {origin: "*mouse", scroll: false});
        cm.scrollIntoView(pos);
      } else {
        var oldRange = ourRange;
        var range = rangeForUnit(cm, pos, behavior.unit);
        var anchor = oldRange.anchor, head;
        if (cmp(range.anchor, anchor) > 0) {
          head = range.head;
          anchor = minPos(oldRange.from(), range.anchor);
        } else {
          head = range.anchor;
          anchor = maxPos(oldRange.to(), range.head);
        }
        var ranges$1 = startSel.ranges.slice(0);
        ranges$1[ourIndex] = bidiSimplify(cm, new Range(clipPos(doc$1, anchor), head));
        setSelection(doc$1, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
      }
    }

    var editorSize = display.wrapper.getBoundingClientRect();
    // Used to ensure timeout re-tries don't fire when another extend
    // happened in the meantime (clearTimeout isn't reliable -- at
    // least on Chrome, the timeouts still happen even when cleared,
    // if the clear happens after their scheduled firing time).
    var counter = 0;

    function extend(e) {
      var curCount = ++counter;
      var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
      if (!cur) { return }
      if (cmp(cur, lastPos) != 0) {
        cm.curOp.focus = activeElt(doc(cm));
        extendTo(cur);
        var visible = visibleLines(display, doc$1);
        if (cur.line >= visible.to || cur.line < visible.from)
          { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e); }}), 150); }
      } else {
        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
        if (outside) { setTimeout(operation(cm, function () {
          if (counter != curCount) { return }
          display.scroller.scrollTop += outside;
          extend(e);
        }), 50); }
      }
    }

    function done(e) {
      cm.state.selectingText = false;
      counter = Infinity;
      // If e is null or undefined we interpret this as someone trying
      // to explicitly cancel the selection rather than the user
      // letting go of the mouse button.
      if (e) {
        e_preventDefault(e);
        display.input.focus();
      }
      off(display.wrapper.ownerDocument, "mousemove", move);
      off(display.wrapper.ownerDocument, "mouseup", up);
      doc$1.history.lastSelOrigin = null;
    }

    var move = operation(cm, function (e) {
      if (e.buttons === 0 || !e_button(e)) { done(e); }
      else { extend(e); }
    });
    var up = operation(cm, done);
    cm.state.selectingText = up;
    on(display.wrapper.ownerDocument, "mousemove", move);
    on(display.wrapper.ownerDocument, "mouseup", up);
  }

  // Used when mouse-selecting to adjust the anchor to the proper side
  // of a bidi jump depending on the visual position of the head.
  function bidiSimplify(cm, range) {
    var anchor = range.anchor;
    var head = range.head;
    var anchorLine = getLine(cm.doc, anchor.line);
    if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) { return range }
    var order = getOrder(anchorLine);
    if (!order) { return range }
    var index = getBidiPartAt(order, anchor.ch, anchor.sticky), part = order[index];
    if (part.from != anchor.ch && part.to != anchor.ch) { return range }
    var boundary = index + ((part.from == anchor.ch) == (part.level != 1) ? 0 : 1);
    if (boundary == 0 || boundary == order.length) { return range }

    // Compute the relative visual position of the head compared to the
    // anchor (<0 is to the left, >0 to the right)
    var leftSide;
    if (head.line != anchor.line) {
      leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
    } else {
      var headIndex = getBidiPartAt(order, head.ch, head.sticky);
      var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);
      if (headIndex == boundary - 1 || headIndex == boundary)
        { leftSide = dir < 0; }
      else
        { leftSide = dir > 0; }
    }

    var usePart = order[boundary + (leftSide ? -1 : 0)];
    var from = leftSide == (usePart.level == 1);
    var ch = from ? usePart.from : usePart.to, sticky = from ? "after" : "before";
    return anchor.ch == ch && anchor.sticky == sticky ? range : new Range(new Pos(anchor.line, ch, sticky), head)
  }


  // Determines whether an event happened in the gutter, and fires the
  // handlers for the corresponding event.
  function gutterEvent(cm, e, type, prevent) {
    var mX, mY;
    if (e.touches) {
      mX = e.touches[0].clientX;
      mY = e.touches[0].clientY;
    } else {
      try { mX = e.clientX; mY = e.clientY; }
      catch(e$1) { return false }
    }
    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
    if (prevent) { e_preventDefault(e); }

    var display = cm.display;
    var lineBox = display.lineDiv.getBoundingClientRect();

    if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
    mY -= lineBox.top - display.viewOffset;

    for (var i = 0; i < cm.display.gutterSpecs.length; ++i) {
      var g = display.gutters.childNodes[i];
      if (g && g.getBoundingClientRect().right >= mX) {
        var line = lineAtHeight(cm.doc, mY);
        var gutter = cm.display.gutterSpecs[i];
        signal(cm, type, cm, line, gutter.className, e);
        return e_defaultPrevented(e)
      }
    }
  }

  function clickInGutter(cm, e) {
    return gutterEvent(cm, e, "gutterClick", true)
  }

  // CONTEXT MENU HANDLING

  // To make the context menu work, we need to briefly unhide the
  // textarea (making it as unobtrusive as possible) to let the
  // right-click take effect on it.
  function onContextMenu(cm, e) {
    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
    if (signalDOMEvent(cm, e, "contextmenu")) { return }
    if (!captureRightClick) { cm.display.input.onContextMenu(e); }
  }

  function contextMenuInGutter(cm, e) {
    if (!hasHandler(cm, "gutterContextMenu")) { return false }
    return gutterEvent(cm, e, "gutterContextMenu", false)
  }

  function themeChanged(cm) {
    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
    clearCaches(cm);
  }

  var Init = {toString: function(){return "CodeMirror.Init"}};

  var defaults = {};
  var optionHandlers = {};

  function defineOptions(CodeMirror) {
    var optionHandlers = CodeMirror.optionHandlers;

    function option(name, deflt, handle, notOnInit) {
      CodeMirror.defaults[name] = deflt;
      if (handle) { optionHandlers[name] =
        notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old); }} : handle; }
    }

    CodeMirror.defineOption = option;

    // Passed to option handlers when there is no old value.
    CodeMirror.Init = Init;

    // These two are, on init, called from the constructor because they
    // have to be initialized before the editor can start at all.
    option("value", "", function (cm, val) { return cm.setValue(val); }, true);
    option("mode", null, function (cm, val) {
      cm.doc.modeOption = val;
      loadMode(cm);
    }, true);

    option("indentUnit", 2, loadMode, true);
    option("indentWithTabs", false);
    option("smartIndent", true);
    option("tabSize", 4, function (cm) {
      resetModeState(cm);
      clearCaches(cm);
      regChange(cm);
    }, true);

    option("lineSeparator", null, function (cm, val) {
      cm.doc.lineSep = val;
      if (!val) { return }
      var newBreaks = [], lineNo = cm.doc.first;
      cm.doc.iter(function (line) {
        for (var pos = 0;;) {
          var found = line.text.indexOf(val, pos);
          if (found == -1) { break }
          pos = found + val.length;
          newBreaks.push(Pos(lineNo, found));
        }
        lineNo++;
      });
      for (var i = newBreaks.length - 1; i >= 0; i--)
        { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)); }
    });
    option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function (cm, val, old) {
      cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
      if (old != Init) { cm.refresh(); }
    });
    option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true);
    option("electricChars", true);
    option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
      throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
    }, true);
    option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true);
    option("autocorrect", false, function (cm, val) { return cm.getInputField().autocorrect = val; }, true);
    option("autocapitalize", false, function (cm, val) { return cm.getInputField().autocapitalize = val; }, true);
    option("rtlMoveVisually", !windows);
    option("wholeLineUpdateBefore", true);

    option("theme", "default", function (cm) {
      themeChanged(cm);
      updateGutters(cm);
    }, true);
    option("keyMap", "default", function (cm, val, old) {
      var next = getKeyMap(val);
      var prev = old != Init && getKeyMap(old);
      if (prev && prev.detach) { prev.detach(cm, next); }
      if (next.attach) { next.attach(cm, prev || null); }
    });
    option("extraKeys", null);
    option("configureMouse", null);

    option("lineWrapping", false, wrappingChanged, true);
    option("gutters", [], function (cm, val) {
      cm.display.gutterSpecs = getGutters(val, cm.options.lineNumbers);
      updateGutters(cm);
    }, true);
    option("fixedGutter", true, function (cm, val) {
      cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
      cm.refresh();
    }, true);
    option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true);
    option("scrollbarStyle", "native", function (cm) {
      initScrollbars(cm);
      updateScrollbars(cm);
      cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
      cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
    }, true);
    option("lineNumbers", false, function (cm, val) {
      cm.display.gutterSpecs = getGutters(cm.options.gutters, val);
      updateGutters(cm);
    }, true);
    option("firstLineNumber", 1, updateGutters, true);
    option("lineNumberFormatter", function (integer) { return integer; }, updateGutters, true);
    option("showCursorWhenSelecting", false, updateSelection, true);

    option("resetSelectionOnContextMenu", true);
    option("lineWiseCopyCut", true);
    option("pasteLinesPerSelection", true);
    option("selectionsMayTouch", false);

    option("readOnly", false, function (cm, val) {
      if (val == "nocursor") {
        onBlur(cm);
        cm.display.input.blur();
      }
      cm.display.input.readOnlyChanged(val);
    });

    option("screenReaderLabel", null, function (cm, val) {
      val = (val === '') ? null : val;
      cm.display.input.screenReaderLabelChanged(val);
    });

    option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset(); }}, true);
    option("dragDrop", true, dragDropChanged);
    option("allowDropFileTypes", null);

    option("cursorBlinkRate", 530);
    option("cursorScrollMargin", 0);
    option("cursorHeight", 1, updateSelection, true);
    option("singleCursorHeightPerLine", true, updateSelection, true);
    option("workTime", 100);
    option("workDelay", 100);
    option("flattenSpans", true, resetModeState, true);
    option("addModeClass", false, resetModeState, true);
    option("pollInterval", 100);
    option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; });
    option("historyEventDelay", 1250);
    option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true);
    option("maxHighlightLength", 10000, resetModeState, true);
    option("moveInputWithCursor", true, function (cm, val) {
      if (!val) { cm.display.input.resetPosition(); }
    });

    option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; });
    option("autofocus", null);
    option("direction", "ltr", function (cm, val) { return cm.doc.setDirection(val); }, true);
    option("phrases", null);
  }

  function dragDropChanged(cm, value, old) {
    var wasOn = old && old != Init;
    if (!value != !wasOn) {
      var funcs = cm.display.dragFunctions;
      var toggle = value ? on : off;
      toggle(cm.display.scroller, "dragstart", funcs.start);
      toggle(cm.display.scroller, "dragenter", funcs.enter);
      toggle(cm.display.scroller, "dragover", funcs.over);
      toggle(cm.display.scroller, "dragleave", funcs.leave);
      toggle(cm.display.scroller, "drop", funcs.drop);
    }
  }

  function wrappingChanged(cm) {
    if (cm.options.lineWrapping) {
      addClass(cm.display.wrapper, "CodeMirror-wrap");
      cm.display.sizer.style.minWidth = "";
      cm.display.sizerWidth = null;
    } else {
      rmClass(cm.display.wrapper, "CodeMirror-wrap");
      findMaxLine(cm);
    }
    estimateLineHeights(cm);
    regChange(cm);
    clearCaches(cm);
    setTimeout(function () { return updateScrollbars(cm); }, 100);
  }

  // A CodeMirror instance represents an editor. This is the object
  // that user code is usually dealing with.

  function CodeMirror(place, options) {
    var this$1 = this;

    if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

    this.options = options = options ? copyObj(options) : {};
    // Determine effective options based on given values and defaults.
    copyObj(defaults, options, false);

    var doc = options.value;
    if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction); }
    else if (options.mode) { doc.modeOption = options.mode; }
    this.doc = doc;

    var input = new CodeMirror.inputStyles[options.inputStyle](this);
    var display = this.display = new Display(place, doc, input, options);
    display.wrapper.CodeMirror = this;
    themeChanged(this);
    if (options.lineWrapping)
      { this.display.wrapper.className += " CodeMirror-wrap"; }
    initScrollbars(this);

    this.state = {
      keyMaps: [],  // stores maps added by addKeyMap
      overlays: [], // highlighting overlays, as added by addOverlay
      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
      overwrite: false,
      delayingBlurEvent: false,
      focused: false,
      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
      pasteIncoming: -1, cutIncoming: -1, // help recognize paste/cut edits in input.poll
      selectingText: false,
      draggingText: false,
      highlight: new Delayed(), // stores highlight worker timeout
      keySeq: null,  // Unfinished key sequence
      specialChars: null
    };

    if (options.autofocus && !mobile) { display.input.focus(); }

    // Override magic textarea content restore that IE sometimes does
    // on our hidden textarea on reload
    if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20); }

    registerEventHandlers(this);
    ensureGlobalHandlers();

    startOperation(this);
    this.curOp.forceUpdate = true;
    attachDoc(this, doc);

    if ((options.autofocus && !mobile) || this.hasFocus())
      { setTimeout(function () {
        if (this$1.hasFocus() && !this$1.state.focused) { onFocus(this$1); }
      }, 20); }
    else
      { onBlur(this); }

    for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
      { optionHandlers[opt](this, options[opt], Init); } }
    maybeUpdateLineNumberWidth(this);
    if (options.finishInit) { options.finishInit(this); }
    for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this); }
    endOperation(this);
    // Suppress optimizelegibility in Webkit, since it breaks text
    // measuring on line wrapping boundaries.
    if (webkit && options.lineWrapping &&
        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
      { display.lineDiv.style.textRendering = "auto"; }
  }

  // The default configuration options.
  CodeMirror.defaults = defaults;
  // Functions to run when options are changed.
  CodeMirror.optionHandlers = optionHandlers;

  // Attach the necessary event handlers when initializing the editor
  function registerEventHandlers(cm) {
    var d = cm.display;
    on(d.scroller, "mousedown", operation(cm, onMouseDown));
    // Older IE's will not fire a second mousedown for a double click
    if (ie && ie_version < 11)
      { on(d.scroller, "dblclick", operation(cm, function (e) {
        if (signalDOMEvent(cm, e)) { return }
        var pos = posFromMouse(cm, e);
        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
        e_preventDefault(e);
        var word = cm.findWordAt(pos);
        extendSelection(cm.doc, word.anchor, word.head);
      })); }
    else
      { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }); }
    // Some browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for these browsers.
    on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); });
    on(d.input.getField(), "contextmenu", function (e) {
      if (!d.scroller.contains(e.target)) { onContextMenu(cm, e); }
    });

    // Used to suppress mouse event handling when a touch happens
    var touchFinished, prevTouch = {end: 0};
    function finishTouch() {
      if (d.activeTouch) {
        touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000);
        prevTouch = d.activeTouch;
        prevTouch.end = +new Date;
      }
    }
    function isMouseLikeTouchEvent(e) {
      if (e.touches.length != 1) { return false }
      var touch = e.touches[0];
      return touch.radiusX <= 1 && touch.radiusY <= 1
    }
    function farAway(touch, other) {
      if (other.left == null) { return true }
      var dx = other.left - touch.left, dy = other.top - touch.top;
      return dx * dx + dy * dy > 20 * 20
    }
    on(d.scroller, "touchstart", function (e) {
      if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
        d.input.ensurePolled();
        clearTimeout(touchFinished);
        var now = +new Date;
        d.activeTouch = {start: now, moved: false,
                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
        if (e.touches.length == 1) {
          d.activeTouch.left = e.touches[0].pageX;
          d.activeTouch.top = e.touches[0].pageY;
        }
      }
    });
    on(d.scroller, "touchmove", function () {
      if (d.activeTouch) { d.activeTouch.moved = true; }
    });
    on(d.scroller, "touchend", function (e) {
      var touch = d.activeTouch;
      if (touch && !eventInWidget(d, e) && touch.left != null &&
          !touch.moved && new Date - touch.start < 300) {
        var pos = cm.coordsChar(d.activeTouch, "page"), range;
        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
          { range = new Range(pos, pos); }
        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
          { range = cm.findWordAt(pos); }
        else // Triple tap
          { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))); }
        cm.setSelection(range.anchor, range.head);
        cm.focus();
        e_preventDefault(e);
      }
      finishTouch();
    });
    on(d.scroller, "touchcancel", finishTouch);

    // Sync scrolling between fake scrollbars and real scrollable
    // area, ensure viewport is updated when scrolling.
    on(d.scroller, "scroll", function () {
      if (d.scroller.clientHeight) {
        updateScrollTop(cm, d.scroller.scrollTop);
        setScrollLeft(cm, d.scroller.scrollLeft, true);
        signal(cm, "scroll", cm);
      }
    });

    // Listen to wheel events in order to try and update the viewport on time.
    on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); });
    on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); });

    // Prevent wrapper from ever scrolling
    on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

    d.dragFunctions = {
      enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e); }},
      over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
      start: function (e) { return onDragStart(cm, e); },
      drop: operation(cm, onDrop),
      leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
    };

    var inp = d.input.getField();
    on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); });
    on(inp, "keydown", operation(cm, onKeyDown));
    on(inp, "keypress", operation(cm, onKeyPress));
    on(inp, "focus", function (e) { return onFocus(cm, e); });
    on(inp, "blur", function (e) { return onBlur(cm, e); });
  }

  var initHooks = [];
  CodeMirror.defineInitHook = function (f) { return initHooks.push(f); };

  // Indent the given line. The how parameter can be "smart",
  // "add"/null, "subtract", or "prev". When aggressive is false
  // (typically set to true for forced single-line indents), empty
  // lines are not indented, and places where the mode returns Pass
  // are left alone.
  function indentLine(cm, n, how, aggressive) {
    var doc = cm.doc, state;
    if (how == null) { how = "add"; }
    if (how == "smart") {
      // Fall back to "prev" when the mode doesn't have an indentation
      // method.
      if (!doc.mode.indent) { how = "prev"; }
      else { state = getContextBefore(cm, n).state; }
    }

    var tabSize = cm.options.tabSize;
    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
    if (line.stateAfter) { line.stateAfter = null; }
    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
    if (!aggressive && !/\S/.test(line.text)) {
      indentation = 0;
      how = "not";
    } else if (how == "smart") {
      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
      if (indentation == Pass || indentation > 150) {
        if (!aggressive) { return }
        how = "prev";
      }
    }
    if (how == "prev") {
      if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize); }
      else { indentation = 0; }
    } else if (how == "add") {
      indentation = curSpace + cm.options.indentUnit;
    } else if (how == "subtract") {
      indentation = curSpace - cm.options.indentUnit;
    } else if (typeof how == "number") {
      indentation = curSpace + how;
    }
    indentation = Math.max(0, indentation);

    var indentString = "", pos = 0;
    if (cm.options.indentWithTabs)
      { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";} }
    if (pos < indentation) { indentString += spaceStr(indentation - pos); }

    if (indentString != curSpaceString) {
      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
      line.stateAfter = null;
      return true
    } else {
      // Ensure that, if the cursor was in the whitespace at the start
      // of the line, it is moved to the end of that space.
      for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
        var range = doc.sel.ranges[i$1];
        if (range.head.line == n && range.head.ch < curSpaceString.length) {
          var pos$1 = Pos(n, curSpaceString.length);
          replaceOneSelection(doc, i$1, new Range(pos$1, pos$1));
          break
        }
      }
    }
  }

  // This will be set to a {lineWise: bool, text: [string]} object, so
  // that, when pasting, we know what kind of selections the copied
  // text was made out of.
  var lastCopied = null;

  function setLastCopied(newLastCopied) {
    lastCopied = newLastCopied;
  }

  function applyTextInput(cm, inserted, deleted, sel, origin) {
    var doc = cm.doc;
    cm.display.shift = false;
    if (!sel) { sel = doc.sel; }

    var recent = +new Date - 200;
    var paste = origin == "paste" || cm.state.pasteIncoming > recent;
    var textLines = splitLinesAuto(inserted), multiPaste = null;
    // When pasting N lines into N selections, insert one line per selection
    if (paste && sel.ranges.length > 1) {
      if (lastCopied && lastCopied.text.join("\n") == inserted) {
        if (sel.ranges.length % lastCopied.text.length == 0) {
          multiPaste = [];
          for (var i = 0; i < lastCopied.text.length; i++)
            { multiPaste.push(doc.splitLines(lastCopied.text[i])); }
        }
      } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
        multiPaste = map(textLines, function (l) { return [l]; });
      }
    }

    var updateInput = cm.curOp.updateInput;
    // Normal behavior is to insert the new text into every selection
    for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
      var range = sel.ranges[i$1];
      var from = range.from(), to = range.to();
      if (range.empty()) {
        if (deleted && deleted > 0) // Handle deletion
          { from = Pos(from.line, from.ch - deleted); }
        else if (cm.state.overwrite && !paste) // Handle overwrite
          { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)); }
        else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n"))
          { from = to = Pos(from.line, 0); }
      }
      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
                         origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")};
      makeChange(cm.doc, changeEvent);
      signalLater(cm, "inputRead", cm, changeEvent);
    }
    if (inserted && !paste)
      { triggerElectric(cm, inserted); }

    ensureCursorVisible(cm);
    if (cm.curOp.updateInput < 2) { cm.curOp.updateInput = updateInput; }
    cm.curOp.typing = true;
    cm.state.pasteIncoming = cm.state.cutIncoming = -1;
  }

  function handlePaste(e, cm) {
    var pasted = e.clipboardData && e.clipboardData.getData("Text");
    if (pasted) {
      e.preventDefault();
      if (!cm.isReadOnly() && !cm.options.disableInput && cm.hasFocus())
        { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }); }
      return true
    }
  }

  function triggerElectric(cm, inserted) {
    // When an 'electric' character is inserted, immediately trigger a reindent
    if (!cm.options.electricChars || !cm.options.smartIndent) { return }
    var sel = cm.doc.sel;

    for (var i = sel.ranges.length - 1; i >= 0; i--) {
      var range = sel.ranges[i];
      if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) { continue }
      var mode = cm.getModeAt(range.head);
      var indented = false;
      if (mode.electricChars) {
        for (var j = 0; j < mode.electricChars.length; j++)
          { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
            indented = indentLine(cm, range.head.line, "smart");
            break
          } }
      } else if (mode.electricInput) {
        if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
          { indented = indentLine(cm, range.head.line, "smart"); }
      }
      if (indented) { signalLater(cm, "electricInput", cm, range.head.line); }
    }
  }

  function copyableRanges(cm) {
    var text = [], ranges = [];
    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
      var line = cm.doc.sel.ranges[i].head.line;
      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
      ranges.push(lineRange);
      text.push(cm.getRange(lineRange.anchor, lineRange.head));
    }
    return {text: text, ranges: ranges}
  }

  function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
    field.setAttribute("autocorrect", autocorrect ? "on" : "off");
    field.setAttribute("autocapitalize", autocapitalize ? "on" : "off");
    field.setAttribute("spellcheck", !!spellcheck);
  }

  function hiddenTextarea() {
    var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none");
    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
    // The textarea is kept positioned near the cursor to prevent the
    // fact that it'll be scrolled into view on input from scrolling
    // our fake cursor out of view. On webkit, when wrap=off, paste is
    // very slow. So make the area wide instead.
    if (webkit) { te.style.width = "1000px"; }
    else { te.setAttribute("wrap", "off"); }
    // If border: 0; -- iOS fails to open keyboard (issue #1287)
    if (ios) { te.style.border = "1px solid black"; }
    return div
  }

  // The publicly visible API. Note that methodOp(f) means
  // 'wrap f in an operation, performed on its `this` parameter'.

  // This is not the complete set of editor methods. Most of the
  // methods defined on the Doc type are also injected into
  // CodeMirror.prototype, for backwards compatibility and
  // convenience.

  function addEditorMethods(CodeMirror) {
    var optionHandlers = CodeMirror.optionHandlers;

    var helpers = CodeMirror.helpers = {};

    CodeMirror.prototype = {
      constructor: CodeMirror,
      focus: function(){win(this).focus(); this.display.input.focus();},

      setOption: function(option, value) {
        var options = this.options, old = options[option];
        if (options[option] == value && option != "mode") { return }
        options[option] = value;
        if (optionHandlers.hasOwnProperty(option))
          { operation(this, optionHandlers[option])(this, value, old); }
        signal(this, "optionChange", this, option);
      },

      getOption: function(option) {return this.options[option]},
      getDoc: function() {return this.doc},

      addKeyMap: function(map, bottom) {
        this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
      },
      removeKeyMap: function(map) {
        var maps = this.state.keyMaps;
        for (var i = 0; i < maps.length; ++i)
          { if (maps[i] == map || maps[i].name == map) {
            maps.splice(i, 1);
            return true
          } }
      },

      addOverlay: methodOp(function(spec, options) {
        var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
        if (mode.startState) { throw new Error("Overlays may not be stateful.") }
        insertSorted(this.state.overlays,
                     {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                      priority: (options && options.priority) || 0},
                     function (overlay) { return overlay.priority; });
        this.state.modeGen++;
        regChange(this);
      }),
      removeOverlay: methodOp(function(spec) {
        var overlays = this.state.overlays;
        for (var i = 0; i < overlays.length; ++i) {
          var cur = overlays[i].modeSpec;
          if (cur == spec || typeof spec == "string" && cur.name == spec) {
            overlays.splice(i, 1);
            this.state.modeGen++;
            regChange(this);
            return
          }
        }
      }),

      indentLine: methodOp(function(n, dir, aggressive) {
        if (typeof dir != "string" && typeof dir != "number") {
          if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev"; }
          else { dir = dir ? "add" : "subtract"; }
        }
        if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive); }
      }),
      indentSelection: methodOp(function(how) {
        var ranges = this.doc.sel.ranges, end = -1;
        for (var i = 0; i < ranges.length; i++) {
          var range = ranges[i];
          if (!range.empty()) {
            var from = range.from(), to = range.to();
            var start = Math.max(end, from.line);
            end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
            for (var j = start; j < end; ++j)
              { indentLine(this, j, how); }
            var newRanges = this.doc.sel.ranges;
            if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
              { replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll); }
          } else if (range.head.line > end) {
            indentLine(this, range.head.line, how, true);
            end = range.head.line;
            if (i == this.doc.sel.primIndex) { ensureCursorVisible(this); }
          }
        }
      }),

      // Fetch the parser token for a given character. Useful for hacks
      // that want to inspect the mode state (say, for completion).
      getTokenAt: function(pos, precise) {
        return takeToken(this, pos, precise)
      },

      getLineTokens: function(line, precise) {
        return takeToken(this, Pos(line), precise, true)
      },

      getTokenTypeAt: function(pos) {
        pos = clipPos(this.doc, pos);
        var styles = getLineStyles(this, getLine(this.doc, pos.line));
        var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
        var type;
        if (ch == 0) { type = styles[2]; }
        else { for (;;) {
          var mid = (before + after) >> 1;
          if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid; }
          else if (styles[mid * 2 + 1] < ch) { before = mid + 1; }
          else { type = styles[mid * 2 + 2]; break }
        } }
        var cut = type ? type.indexOf("overlay ") : -1;
        return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
      },

      getModeAt: function(pos) {
        var mode = this.doc.mode;
        if (!mode.innerMode) { return mode }
        return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
      },

      getHelper: function(pos, type) {
        return this.getHelpers(pos, type)[0]
      },

      getHelpers: function(pos, type) {
        var found = [];
        if (!helpers.hasOwnProperty(type)) { return found }
        var help = helpers[type], mode = this.getModeAt(pos);
        if (typeof mode[type] == "string") {
          if (help[mode[type]]) { found.push(help[mode[type]]); }
        } else if (mode[type]) {
          for (var i = 0; i < mode[type].length; i++) {
            var val = help[mode[type][i]];
            if (val) { found.push(val); }
          }
        } else if (mode.helperType && help[mode.helperType]) {
          found.push(help[mode.helperType]);
        } else if (help[mode.name]) {
          found.push(help[mode.name]);
        }
        for (var i$1 = 0; i$1 < help._global.length; i$1++) {
          var cur = help._global[i$1];
          if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
            { found.push(cur.val); }
        }
        return found
      },

      getStateAfter: function(line, precise) {
        var doc = this.doc;
        line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
        return getContextBefore(this, line + 1, precise).state
      },

      cursorCoords: function(start, mode) {
        var pos, range = this.doc.sel.primary();
        if (start == null) { pos = range.head; }
        else if (typeof start == "object") { pos = clipPos(this.doc, start); }
        else { pos = start ? range.from() : range.to(); }
        return cursorCoords(this, pos, mode || "page")
      },

      charCoords: function(pos, mode) {
        return charCoords(this, clipPos(this.doc, pos), mode || "page")
      },

      coordsChar: function(coords, mode) {
        coords = fromCoordSystem(this, coords, mode || "page");
        return coordsChar(this, coords.left, coords.top)
      },

      lineAtHeight: function(height, mode) {
        height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
        return lineAtHeight(this.doc, height + this.display.viewOffset)
      },
      heightAtLine: function(line, mode, includeWidgets) {
        var end = false, lineObj;
        if (typeof line == "number") {
          var last = this.doc.first + this.doc.size - 1;
          if (line < this.doc.first) { line = this.doc.first; }
          else if (line > last) { line = last; end = true; }
          lineObj = getLine(this.doc, line);
        } else {
          lineObj = line;
        }
        return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
          (end ? this.doc.height - heightAtLine(lineObj) : 0)
      },

      defaultTextHeight: function() { return textHeight(this.display) },
      defaultCharWidth: function() { return charWidth(this.display) },

      getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

      addWidget: function(pos, node, scroll, vert, horiz) {
        var display = this.display;
        pos = cursorCoords(this, clipPos(this.doc, pos));
        var top = pos.bottom, left = pos.left;
        node.style.position = "absolute";
        node.setAttribute("cm-ignore-events", "true");
        this.display.input.setUneditable(node);
        display.sizer.appendChild(node);
        if (vert == "over") {
          top = pos.top;
        } else if (vert == "above" || vert == "near") {
          var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
          hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
          // Default to positioning above (if specified and possible); otherwise default to positioning below
          if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
            { top = pos.top - node.offsetHeight; }
          else if (pos.bottom + node.offsetHeight <= vspace)
            { top = pos.bottom; }
          if (left + node.offsetWidth > hspace)
            { left = hspace - node.offsetWidth; }
        }
        node.style.top = top + "px";
        node.style.left = node.style.right = "";
        if (horiz == "right") {
          left = display.sizer.clientWidth - node.offsetWidth;
          node.style.right = "0px";
        } else {
          if (horiz == "left") { left = 0; }
          else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2; }
          node.style.left = left + "px";
        }
        if (scroll)
          { scrollIntoView(this, {left: left, top: top, right: left + node.offsetWidth, bottom: top + node.offsetHeight}); }
      },

      triggerOnKeyDown: methodOp(onKeyDown),
      triggerOnKeyPress: methodOp(onKeyPress),
      triggerOnKeyUp: onKeyUp,
      triggerOnMouseDown: methodOp(onMouseDown),

      execCommand: function(cmd) {
        if (commands.hasOwnProperty(cmd))
          { return commands[cmd].call(null, this) }
      },

      triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

      findPosH: function(from, amount, unit, visually) {
        var dir = 1;
        if (amount < 0) { dir = -1; amount = -amount; }
        var cur = clipPos(this.doc, from);
        for (var i = 0; i < amount; ++i) {
          cur = findPosH(this.doc, cur, dir, unit, visually);
          if (cur.hitSide) { break }
        }
        return cur
      },

      moveH: methodOp(function(dir, unit) {
        var this$1 = this;

        this.extendSelectionsBy(function (range) {
          if (this$1.display.shift || this$1.doc.extend || range.empty())
            { return findPosH(this$1.doc, range.head, dir, unit, this$1.options.rtlMoveVisually) }
          else
            { return dir < 0 ? range.from() : range.to() }
        }, sel_move);
      }),

      deleteH: methodOp(function(dir, unit) {
        var sel = this.doc.sel, doc = this.doc;
        if (sel.somethingSelected())
          { doc.replaceSelection("", null, "+delete"); }
        else
          { deleteNearSelection(this, function (range) {
            var other = findPosH(doc, range.head, dir, unit, false);
            return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
          }); }
      }),

      findPosV: function(from, amount, unit, goalColumn) {
        var dir = 1, x = goalColumn;
        if (amount < 0) { dir = -1; amount = -amount; }
        var cur = clipPos(this.doc, from);
        for (var i = 0; i < amount; ++i) {
          var coords = cursorCoords(this, cur, "div");
          if (x == null) { x = coords.left; }
          else { coords.left = x; }
          cur = findPosV(this, coords, dir, unit);
          if (cur.hitSide) { break }
        }
        return cur
      },

      moveV: methodOp(function(dir, unit) {
        var this$1 = this;

        var doc = this.doc, goals = [];
        var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
        doc.extendSelectionsBy(function (range) {
          if (collapse)
            { return dir < 0 ? range.from() : range.to() }
          var headPos = cursorCoords(this$1, range.head, "div");
          if (range.goalColumn != null) { headPos.left = range.goalColumn; }
          goals.push(headPos.left);
          var pos = findPosV(this$1, headPos, dir, unit);
          if (unit == "page" && range == doc.sel.primary())
            { addToScrollTop(this$1, charCoords(this$1, pos, "div").top - headPos.top); }
          return pos
        }, sel_move);
        if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
          { doc.sel.ranges[i].goalColumn = goals[i]; } }
      }),

      // Find the word at the given position (as returned by coordsChar).
      findWordAt: function(pos) {
        var doc = this.doc, line = getLine(doc, pos.line).text;
        var start = pos.ch, end = pos.ch;
        if (line) {
          var helper = this.getHelper(pos, "wordChars");
          if ((pos.sticky == "before" || end == line.length) && start) { --start; } else { ++end; }
          var startChar = line.charAt(start);
          var check = isWordChar(startChar, helper)
            ? function (ch) { return isWordChar(ch, helper); }
            : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
            : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); };
          while (start > 0 && check(line.charAt(start - 1))) { --start; }
          while (end < line.length && check(line.charAt(end))) { ++end; }
        }
        return new Range(Pos(pos.line, start), Pos(pos.line, end))
      },

      toggleOverwrite: function(value) {
        if (value != null && value == this.state.overwrite) { return }
        if (this.state.overwrite = !this.state.overwrite)
          { addClass(this.display.cursorDiv, "CodeMirror-overwrite"); }
        else
          { rmClass(this.display.cursorDiv, "CodeMirror-overwrite"); }

        signal(this, "overwriteToggle", this, this.state.overwrite);
      },
      hasFocus: function() { return this.display.input.getField() == activeElt(doc(this)) },
      isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

      scrollTo: methodOp(function (x, y) { scrollToCoords(this, x, y); }),
      getScrollInfo: function() {
        var scroller = this.display.scroller;
        return {left: scroller.scrollLeft, top: scroller.scrollTop,
                height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
      },

      scrollIntoView: methodOp(function(range, margin) {
        if (range == null) {
          range = {from: this.doc.sel.primary().head, to: null};
          if (margin == null) { margin = this.options.cursorScrollMargin; }
        } else if (typeof range == "number") {
          range = {from: Pos(range, 0), to: null};
        } else if (range.from == null) {
          range = {from: range, to: null};
        }
        if (!range.to) { range.to = range.from; }
        range.margin = margin || 0;

        if (range.from.line != null) {
          scrollToRange(this, range);
        } else {
          scrollToCoordsRange(this, range.from, range.to, range.margin);
        }
      }),

      setSize: methodOp(function(width, height) {
        var this$1 = this;

        var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; };
        if (width != null) { this.display.wrapper.style.width = interpret(width); }
        if (height != null) { this.display.wrapper.style.height = interpret(height); }
        if (this.options.lineWrapping) { clearLineMeasurementCache(this); }
        var lineNo = this.display.viewFrom;
        this.doc.iter(lineNo, this.display.viewTo, function (line) {
          if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
            { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo, "widget"); break } } }
          ++lineNo;
        });
        this.curOp.forceUpdate = true;
        signal(this, "refresh", this);
      }),

      operation: function(f){return runInOp(this, f)},
      startOperation: function(){return startOperation(this)},
      endOperation: function(){return endOperation(this)},

      refresh: methodOp(function() {
        var oldHeight = this.display.cachedTextHeight;
        regChange(this);
        this.curOp.forceUpdate = true;
        clearCaches(this);
        scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
        updateGutterSpace(this.display);
        if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5 || this.options.lineWrapping)
          { estimateLineHeights(this); }
        signal(this, "refresh", this);
      }),

      swapDoc: methodOp(function(doc) {
        var old = this.doc;
        old.cm = null;
        // Cancel the current text selection if any (#5821)
        if (this.state.selectingText) { this.state.selectingText(); }
        attachDoc(this, doc);
        clearCaches(this);
        this.display.input.reset();
        scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
        this.curOp.forceScroll = true;
        signalLater(this, "swapDoc", this, old);
        return old
      }),

      phrase: function(phraseText) {
        var phrases = this.options.phrases;
        return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText
      },

      getInputField: function(){return this.display.input.getField()},
      getWrapperElement: function(){return this.display.wrapper},
      getScrollerElement: function(){return this.display.scroller},
      getGutterElement: function(){return this.display.gutters}
    };
    eventMixin(CodeMirror);

    CodeMirror.registerHelper = function(type, name, value) {
      if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []}; }
      helpers[type][name] = value;
    };
    CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
      CodeMirror.registerHelper(type, name, value);
      helpers[type]._global.push({pred: predicate, val: value});
    };
  }

  // Used for horizontal relative motion. Dir is -1 or 1 (left or
  // right), unit can be "codepoint", "char", "column" (like char, but
  // doesn't cross line boundaries), "word" (across next word), or
  // "group" (to the start of next group of word or
  // non-word-non-whitespace chars). The visually param controls
  // whether, in right-to-left text, direction 1 means to move towards
  // the next index in the string, or towards the character to the right
  // of the current position. The resulting position will have a
  // hitSide=true property if it reached the end of the document.
  function findPosH(doc, pos, dir, unit, visually) {
    var oldPos = pos;
    var origDir = dir;
    var lineObj = getLine(doc, pos.line);
    var lineDir = visually && doc.direction == "rtl" ? -dir : dir;
    function findNextLine() {
      var l = pos.line + lineDir;
      if (l < doc.first || l >= doc.first + doc.size) { return false }
      pos = new Pos(l, pos.ch, pos.sticky);
      return lineObj = getLine(doc, l)
    }
    function moveOnce(boundToLine) {
      var next;
      if (unit == "codepoint") {
        var ch = lineObj.text.charCodeAt(pos.ch + (dir > 0 ? 0 : -1));
        if (isNaN(ch)) {
          next = null;
        } else {
          var astral = dir > 0 ? ch >= 0xD800 && ch < 0xDC00 : ch >= 0xDC00 && ch < 0xDFFF;
          next = new Pos(pos.line, Math.max(0, Math.min(lineObj.text.length, pos.ch + dir * (astral ? 2 : 1))), -dir);
        }
      } else if (visually) {
        next = moveVisually(doc.cm, lineObj, pos, dir);
      } else {
        next = moveLogically(lineObj, pos, dir);
      }
      if (next == null) {
        if (!boundToLine && findNextLine())
          { pos = endOfLine(visually, doc.cm, lineObj, pos.line, lineDir); }
        else
          { return false }
      } else {
        pos = next;
      }
      return true
    }

    if (unit == "char" || unit == "codepoint") {
      moveOnce();
    } else if (unit == "column") {
      moveOnce(true);
    } else if (unit == "word" || unit == "group") {
      var sawType = null, group = unit == "group";
      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
      for (var first = true;; first = false) {
        if (dir < 0 && !moveOnce(!first)) { break }
        var cur = lineObj.text.charAt(pos.ch) || "\n";
        var type = isWordChar(cur, helper) ? "w"
          : group && cur == "\n" ? "n"
          : !group || /\s/.test(cur) ? null
          : "p";
        if (group && !first && !type) { type = "s"; }
        if (sawType && sawType != type) {
          if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after";}
          break
        }

        if (type) { sawType = type; }
        if (dir > 0 && !moveOnce(!first)) { break }
      }
    }
    var result = skipAtomic(doc, pos, oldPos, origDir, true);
    if (equalCursorPos(oldPos, result)) { result.hitSide = true; }
    return result
  }

  // For relative vertical movement. Dir may be -1 or 1. Unit can be
  // "page" or "line". The resulting position will have a hitSide=true
  // property if it reached the end of the document.
  function findPosV(cm, pos, dir, unit) {
    var doc = cm.doc, x = pos.left, y;
    if (unit == "page") {
      var pageSize = Math.min(cm.display.wrapper.clientHeight, win(cm).innerHeight || doc(cm).documentElement.clientHeight);
      var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
      y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;

    } else if (unit == "line") {
      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
    }
    var target;
    for (;;) {
      target = coordsChar(cm, x, y);
      if (!target.outside) { break }
      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
      y += dir * 5;
    }
    return target
  }

  // CONTENTEDITABLE INPUT STYLE

  var ContentEditableInput = function(cm) {
    this.cm = cm;
    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
    this.polling = new Delayed();
    this.composing = null;
    this.gracePeriod = false;
    this.readDOMTimeout = null;
  };

  ContentEditableInput.prototype.init = function (display) {
      var this$1 = this;

    var input = this, cm = input.cm;
    var div = input.div = display.lineDiv;
    div.contentEditable = true;
    disableBrowserMagic(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize);

    function belongsToInput(e) {
      for (var t = e.target; t; t = t.parentNode) {
        if (t == div) { return true }
        if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) { break }
      }
      return false
    }

    on(div, "paste", function (e) {
      if (!belongsToInput(e) || signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
      // IE doesn't fire input events, so we schedule a read for the pasted content in this way
      if (ie_version <= 11) { setTimeout(operation(cm, function () { return this$1.updateFromDOM(); }), 20); }
    });

    on(div, "compositionstart", function (e) {
      this$1.composing = {data: e.data, done: false};
    });
    on(div, "compositionupdate", function (e) {
      if (!this$1.composing) { this$1.composing = {data: e.data, done: false}; }
    });
    on(div, "compositionend", function (e) {
      if (this$1.composing) {
        if (e.data != this$1.composing.data) { this$1.readFromDOMSoon(); }
        this$1.composing.done = true;
      }
    });

    on(div, "touchstart", function () { return input.forceCompositionEnd(); });

    on(div, "input", function () {
      if (!this$1.composing) { this$1.readFromDOMSoon(); }
    });

    function onCopyCut(e) {
      if (!belongsToInput(e) || signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()});
        if (e.type == "cut") { cm.replaceSelection("", null, "cut"); }
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm);
        setLastCopied({lineWise: true, text: ranges.text});
        if (e.type == "cut") {
          cm.operation(function () {
            cm.setSelections(ranges.ranges, 0, sel_dontScroll);
            cm.replaceSelection("", null, "cut");
          });
        }
      }
      if (e.clipboardData) {
        e.clipboardData.clearData();
        var content = lastCopied.text.join("\n");
        // iOS exposes the clipboard API, but seems to discard content inserted into it
        e.clipboardData.setData("Text", content);
        if (e.clipboardData.getData("Text") == content) {
          e.preventDefault();
          return
        }
      }
      // Old-fashioned briefly-focus-a-textarea hack
      var kludge = hiddenTextarea(), te = kludge.firstChild;
      disableBrowserMagic(te);
      cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
      te.value = lastCopied.text.join("\n");
      var hadFocus = activeElt(div.ownerDocument);
      selectInput(te);
      setTimeout(function () {
        cm.display.lineSpace.removeChild(kludge);
        hadFocus.focus();
        if (hadFocus == div) { input.showPrimarySelection(); }
      }, 50);
    }
    on(div, "copy", onCopyCut);
    on(div, "cut", onCopyCut);
  };

  ContentEditableInput.prototype.screenReaderLabelChanged = function (label) {
    // Label for screenreaders, accessibility
    if(label) {
      this.div.setAttribute('aria-label', label);
    } else {
      this.div.removeAttribute('aria-label');
    }
  };

  ContentEditableInput.prototype.prepareSelection = function () {
    var result = prepareSelection(this.cm, false);
    result.focus = activeElt(this.div.ownerDocument) == this.div;
    return result
  };

  ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
    if (!info || !this.cm.display.view.length) { return }
    if (info.focus || takeFocus) { this.showPrimarySelection(); }
    this.showMultipleSelections(info);
  };

  ContentEditableInput.prototype.getSelection = function () {
    return this.cm.display.wrapper.ownerDocument.getSelection()
  };

  ContentEditableInput.prototype.showPrimarySelection = function () {
    var sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
    var from = prim.from(), to = prim.to();

    if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
      sel.removeAllRanges();
      return
    }

    var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
    var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
    if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
        cmp(minPos(curAnchor, curFocus), from) == 0 &&
        cmp(maxPos(curAnchor, curFocus), to) == 0)
      { return }

    var view = cm.display.view;
    var start = (from.line >= cm.display.viewFrom && posToDOM(cm, from)) ||
        {node: view[0].measure.map[2], offset: 0};
    var end = to.line < cm.display.viewTo && posToDOM(cm, to);
    if (!end) {
      var measure = view[view.length - 1].measure;
      var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
      end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
    }

    if (!start || !end) {
      sel.removeAllRanges();
      return
    }

    var old = sel.rangeCount && sel.getRangeAt(0), rng;
    try { rng = range(start.node, start.offset, end.offset, end.node); }
    catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
    if (rng) {
      if (!gecko && cm.state.focused) {
        sel.collapse(start.node, start.offset);
        if (!rng.collapsed) {
          sel.removeAllRanges();
          sel.addRange(rng);
        }
      } else {
        sel.removeAllRanges();
        sel.addRange(rng);
      }
      if (old && sel.anchorNode == null) { sel.addRange(old); }
      else if (gecko) { this.startGracePeriod(); }
    }
    this.rememberSelection();
  };

  ContentEditableInput.prototype.startGracePeriod = function () {
      var this$1 = this;

    clearTimeout(this.gracePeriod);
    this.gracePeriod = setTimeout(function () {
      this$1.gracePeriod = false;
      if (this$1.selectionChanged())
        { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }); }
    }, 20);
  };

  ContentEditableInput.prototype.showMultipleSelections = function (info) {
    removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
    removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
  };

  ContentEditableInput.prototype.rememberSelection = function () {
    var sel = this.getSelection();
    this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
    this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
  };

  ContentEditableInput.prototype.selectionInEditor = function () {
    var sel = this.getSelection();
    if (!sel.rangeCount) { return false }
    var node = sel.getRangeAt(0).commonAncestorContainer;
    return contains(this.div, node)
  };

  ContentEditableInput.prototype.focus = function () {
    if (this.cm.options.readOnly != "nocursor") {
      if (!this.selectionInEditor() || activeElt(this.div.ownerDocument) != this.div)
        { this.showSelection(this.prepareSelection(), true); }
      this.div.focus();
    }
  };
  ContentEditableInput.prototype.blur = function () { this.div.blur(); };
  ContentEditableInput.prototype.getField = function () { return this.div };

  ContentEditableInput.prototype.supportsTouch = function () { return true };

  ContentEditableInput.prototype.receivedFocus = function () {
      var this$1 = this;

    var input = this;
    if (this.selectionInEditor())
      { setTimeout(function () { return this$1.pollSelection(); }, 20); }
    else
      { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }); }

    function poll() {
      if (input.cm.state.focused) {
        input.pollSelection();
        input.polling.set(input.cm.options.pollInterval, poll);
      }
    }
    this.polling.set(this.cm.options.pollInterval, poll);
  };

  ContentEditableInput.prototype.selectionChanged = function () {
    var sel = this.getSelection();
    return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
      sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
  };

  ContentEditableInput.prototype.pollSelection = function () {
    if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) { return }
    var sel = this.getSelection(), cm = this.cm;
    // On Android Chrome (version 56, at least), backspacing into an
    // uneditable block element will put the cursor in that element,
    // and then, because it's not editable, hide the virtual keyboard.
    // Because Android doesn't allow us to actually detect backspace
    // presses in a sane way, this code checks for when that happens
    // and simulates a backspace press in this case.
    if (android && chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
      this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs});
      this.blur();
      this.focus();
      return
    }
    if (this.composing) { return }
    this.rememberSelection();
    var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
    var head = domToPos(cm, sel.focusNode, sel.focusOffset);
    if (anchor && head) { runInOp(cm, function () {
      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
      if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true; }
    }); }
  };

  ContentEditableInput.prototype.pollContent = function () {
    if (this.readDOMTimeout != null) {
      clearTimeout(this.readDOMTimeout);
      this.readDOMTimeout = null;
    }

    var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
    var from = sel.from(), to = sel.to();
    if (from.ch == 0 && from.line > cm.firstLine())
      { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length); }
    if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
      { to = Pos(to.line + 1, 0); }
    if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

    var fromIndex, fromLine, fromNode;
    if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
      fromLine = lineNo(display.view[0].line);
      fromNode = display.view[0].node;
    } else {
      fromLine = lineNo(display.view[fromIndex].line);
      fromNode = display.view[fromIndex - 1].node.nextSibling;
    }
    var toIndex = findViewIndex(cm, to.line);
    var toLine, toNode;
    if (toIndex == display.view.length - 1) {
      toLine = display.viewTo - 1;
      toNode = display.lineDiv.lastChild;
    } else {
      toLine = lineNo(display.view[toIndex + 1].line) - 1;
      toNode = display.view[toIndex + 1].node.previousSibling;
    }

    if (!fromNode) { return false }
    var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
    var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
    while (newText.length > 1 && oldText.length > 1) {
      if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
      else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
      else { break }
    }

    var cutFront = 0, cutEnd = 0;
    var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
    while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
      { ++cutFront; }
    var newBot = lst(newText), oldBot = lst(oldText);
    var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                             oldBot.length - (oldText.length == 1 ? cutFront : 0));
    while (cutEnd < maxCutEnd &&
           newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
      { ++cutEnd; }
    // Try to move start of change to start of selection if ambiguous
    if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
      while (cutFront && cutFront > from.ch &&
             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
        cutFront--;
        cutEnd++;
      }
    }

    newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
    newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");

    var chFrom = Pos(fromLine, cutFront);
    var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
    if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
      replaceRange(cm.doc, newText, chFrom, chTo, "+input");
      return true
    }
  };

  ContentEditableInput.prototype.ensurePolled = function () {
    this.forceCompositionEnd();
  };
  ContentEditableInput.prototype.reset = function () {
    this.forceCompositionEnd();
  };
  ContentEditableInput.prototype.forceCompositionEnd = function () {
    if (!this.composing) { return }
    clearTimeout(this.readDOMTimeout);
    this.composing = null;
    this.updateFromDOM();
    this.div.blur();
    this.div.focus();
  };
  ContentEditableInput.prototype.readFromDOMSoon = function () {
      var this$1 = this;

    if (this.readDOMTimeout != null) { return }
    this.readDOMTimeout = setTimeout(function () {
      this$1.readDOMTimeout = null;
      if (this$1.composing) {
        if (this$1.composing.done) { this$1.composing = null; }
        else { return }
      }
      this$1.updateFromDOM();
    }, 80);
  };

  ContentEditableInput.prototype.updateFromDOM = function () {
      var this$1 = this;

    if (this.cm.isReadOnly() || !this.pollContent())
      { runInOp(this.cm, function () { return regChange(this$1.cm); }); }
  };

  ContentEditableInput.prototype.setUneditable = function (node) {
    node.contentEditable = "false";
  };

  ContentEditableInput.prototype.onKeyPress = function (e) {
    if (e.charCode == 0 || this.composing) { return }
    e.preventDefault();
    if (!this.cm.isReadOnly())
      { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0); }
  };

  ContentEditableInput.prototype.readOnlyChanged = function (val) {
    this.div.contentEditable = String(val != "nocursor");
  };

  ContentEditableInput.prototype.onContextMenu = function () {};
  ContentEditableInput.prototype.resetPosition = function () {};

  ContentEditableInput.prototype.needsContentAttribute = true;

  function posToDOM(cm, pos) {
    var view = findViewForLine(cm, pos.line);
    if (!view || view.hidden) { return null }
    var line = getLine(cm.doc, pos.line);
    var info = mapFromLineView(view, line, pos.line);

    var order = getOrder(line, cm.doc.direction), side = "left";
    if (order) {
      var partPos = getBidiPartAt(order, pos.ch);
      side = partPos % 2 ? "right" : "left";
    }
    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
    result.offset = result.collapse == "right" ? result.end : result.start;
    return result
  }

  function isInGutter(node) {
    for (var scan = node; scan; scan = scan.parentNode)
      { if (/CodeMirror-gutter-wrapper/.test(scan.className)) { return true } }
    return false
  }

  function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

  function domTextBetween(cm, from, to, fromLine, toLine) {
    var text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false;
    function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
    function close() {
      if (closing) {
        text += lineSep;
        if (extraLinebreak) { text += lineSep; }
        closing = extraLinebreak = false;
      }
    }
    function addText(str) {
      if (str) {
        close();
        text += str;
      }
    }
    function walk(node) {
      if (node.nodeType == 1) {
        var cmText = node.getAttribute("cm-text");
        if (cmText) {
          addText(cmText);
          return
        }
        var markerID = node.getAttribute("cm-marker"), range;
        if (markerID) {
          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
          if (found.length && (range = found[0].find(0)))
            { addText(getBetween(cm.doc, range.from, range.to).join(lineSep)); }
          return
        }
        if (node.getAttribute("contenteditable") == "false") { return }
        var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);
        if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) { return }

        if (isBlock) { close(); }
        for (var i = 0; i < node.childNodes.length; i++)
          { walk(node.childNodes[i]); }

        if (/^(pre|p)$/i.test(node.nodeName)) { extraLinebreak = true; }
        if (isBlock) { closing = true; }
      } else if (node.nodeType == 3) {
        addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
      }
    }
    for (;;) {
      walk(from);
      if (from == to) { break }
      from = from.nextSibling;
      extraLinebreak = false;
    }
    return text
  }

  function domToPos(cm, node, offset) {
    var lineNode;
    if (node == cm.display.lineDiv) {
      lineNode = cm.display.lineDiv.childNodes[offset];
      if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
      node = null; offset = 0;
    } else {
      for (lineNode = node;; lineNode = lineNode.parentNode) {
        if (!lineNode || lineNode == cm.display.lineDiv) { return null }
        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
      }
    }
    for (var i = 0; i < cm.display.view.length; i++) {
      var lineView = cm.display.view[i];
      if (lineView.node == lineNode)
        { return locateNodeInLineView(lineView, node, offset) }
    }
  }

  function locateNodeInLineView(lineView, node, offset) {
    var wrapper = lineView.text.firstChild, bad = false;
    if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
    if (node == wrapper) {
      bad = true;
      node = wrapper.childNodes[offset];
      offset = 0;
      if (!node) {
        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
        return badPos(Pos(lineNo(line), line.text.length), bad)
      }
    }

    var textNode = node.nodeType == 3 ? node : null, topNode = node;
    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
      textNode = node.firstChild;
      if (offset) { offset = textNode.nodeValue.length; }
    }
    while (topNode.parentNode != wrapper) { topNode = topNode.parentNode; }
    var measure = lineView.measure, maps = measure.maps;

    function find(textNode, topNode, offset) {
      for (var i = -1; i < (maps ? maps.length : 0); i++) {
        var map = i < 0 ? measure.map : maps[i];
        for (var j = 0; j < map.length; j += 3) {
          var curNode = map[j + 2];
          if (curNode == textNode || curNode == topNode) {
            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
            var ch = map[j] + offset;
            if (offset < 0 || curNode != textNode) { ch = map[j + (offset ? 1 : 0)]; }
            return Pos(line, ch)
          }
        }
      }
    }
    var found = find(textNode, topNode, offset);
    if (found) { return badPos(found, bad) }

    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
      found = find(after, after.firstChild, 0);
      if (found)
        { return badPos(Pos(found.line, found.ch - dist), bad) }
      else
        { dist += after.textContent.length; }
    }
    for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
      found = find(before, before.firstChild, -1);
      if (found)
        { return badPos(Pos(found.line, found.ch + dist$1), bad) }
      else
        { dist$1 += before.textContent.length; }
    }
  }

  // TEXTAREA INPUT STYLE

  var TextareaInput = function(cm) {
    this.cm = cm;
    // See input.poll and input.reset
    this.prevInput = "";

    // Flag that indicates whether we expect input to appear real soon
    // now (after some event like 'keypress' or 'input') and are
    // polling intensively.
    this.pollingFast = false;
    // Self-resetting timeout for the poller
    this.polling = new Delayed();
    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
    this.hasSelection = false;
    this.composing = null;
    this.resetting = false;
  };

  TextareaInput.prototype.init = function (display) {
      var this$1 = this;

    var input = this, cm = this.cm;
    this.createField(display);
    var te = this.textarea;

    display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);

    // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
    if (ios) { te.style.width = "0px"; }

    on(te, "input", function () {
      if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null; }
      input.poll();
    });

    on(te, "paste", function (e) {
      if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

      cm.state.pasteIncoming = +new Date;
      input.fastPoll();
    });

    function prepareCopyCut(e) {
      if (signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()});
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm);
        setLastCopied({lineWise: true, text: ranges.text});
        if (e.type == "cut") {
          cm.setSelections(ranges.ranges, null, sel_dontScroll);
        } else {
          input.prevInput = "";
          te.value = ranges.text.join("\n");
          selectInput(te);
        }
      }
      if (e.type == "cut") { cm.state.cutIncoming = +new Date; }
    }
    on(te, "cut", prepareCopyCut);
    on(te, "copy", prepareCopyCut);

    on(display.scroller, "paste", function (e) {
      if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
      if (!te.dispatchEvent) {
        cm.state.pasteIncoming = +new Date;
        input.focus();
        return
      }

      // Pass the `paste` event to the textarea so it's handled by its event listener.
      var event = new Event("paste");
      event.clipboardData = e.clipboardData;
      te.dispatchEvent(event);
    });

    // Prevent normal selection in the editor (we handle our own)
    on(display.lineSpace, "selectstart", function (e) {
      if (!eventInWidget(display, e)) { e_preventDefault(e); }
    });

    on(te, "compositionstart", function () {
      var start = cm.getCursor("from");
      if (input.composing) { input.composing.range.clear(); }
      input.composing = {
        start: start,
        range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
      };
    });
    on(te, "compositionend", function () {
      if (input.composing) {
        input.poll();
        input.composing.range.clear();
        input.composing = null;
      }
    });
  };

  TextareaInput.prototype.createField = function (_display) {
    // Wraps and hides input textarea
    this.wrapper = hiddenTextarea();
    // The semihidden textarea that is focused when the editor is
    // focused, and receives input.
    this.textarea = this.wrapper.firstChild;
    var opts = this.cm.options;
    disableBrowserMagic(this.textarea, opts.spellcheck, opts.autocorrect, opts.autocapitalize);
  };

  TextareaInput.prototype.screenReaderLabelChanged = function (label) {
    // Label for screenreaders, accessibility
    if(label) {
      this.textarea.setAttribute('aria-label', label);
    } else {
      this.textarea.removeAttribute('aria-label');
    }
  };

  TextareaInput.prototype.prepareSelection = function () {
    // Redraw the selection and/or cursor
    var cm = this.cm, display = cm.display, doc = cm.doc;
    var result = prepareSelection(cm);

    // Move the hidden textarea near the cursor to prevent scrolling artifacts
    if (cm.options.moveInputWithCursor) {
      var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
      var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
      result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                          headPos.top + lineOff.top - wrapOff.top));
      result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                           headPos.left + lineOff.left - wrapOff.left));
    }

    return result
  };

  TextareaInput.prototype.showSelection = function (drawn) {
    var cm = this.cm, display = cm.display;
    removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
    removeChildrenAndAdd(display.selectionDiv, drawn.selection);
    if (drawn.teTop != null) {
      this.wrapper.style.top = drawn.teTop + "px";
      this.wrapper.style.left = drawn.teLeft + "px";
    }
  };

  // Reset the input to correspond to the selection (or to be empty,
  // when not typing and nothing is selected)
  TextareaInput.prototype.reset = function (typing) {
    if (this.contextMenuPending || this.composing && typing) { return }
    var cm = this.cm;
    this.resetting = true;
    if (cm.somethingSelected()) {
      this.prevInput = "";
      var content = cm.getSelection();
      this.textarea.value = content;
      if (cm.state.focused) { selectInput(this.textarea); }
      if (ie && ie_version >= 9) { this.hasSelection = content; }
    } else if (!typing) {
      this.prevInput = this.textarea.value = "";
      if (ie && ie_version >= 9) { this.hasSelection = null; }
    }
    this.resetting = false;
  };

  TextareaInput.prototype.getField = function () { return this.textarea };

  TextareaInput.prototype.supportsTouch = function () { return false };

  TextareaInput.prototype.focus = function () {
    if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt(this.textarea.ownerDocument) != this.textarea)) {
      try { this.textarea.focus(); }
      catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
    }
  };

  TextareaInput.prototype.blur = function () { this.textarea.blur(); };

  TextareaInput.prototype.resetPosition = function () {
    this.wrapper.style.top = this.wrapper.style.left = 0;
  };

  TextareaInput.prototype.receivedFocus = function () { this.slowPoll(); };

  // Poll for input changes, using the normal rate of polling. This
  // runs as long as the editor is focused.
  TextareaInput.prototype.slowPoll = function () {
      var this$1 = this;

    if (this.pollingFast) { return }
    this.polling.set(this.cm.options.pollInterval, function () {
      this$1.poll();
      if (this$1.cm.state.focused) { this$1.slowPoll(); }
    });
  };

  // When an event has just come in that is likely to add or change
  // something in the input textarea, we poll faster, to ensure that
  // the change appears on the screen quickly.
  TextareaInput.prototype.fastPoll = function () {
    var missed = false, input = this;
    input.pollingFast = true;
    function p() {
      var changed = input.poll();
      if (!changed && !missed) {missed = true; input.polling.set(60, p);}
      else {input.pollingFast = false; input.slowPoll();}
    }
    input.polling.set(20, p);
  };

  // Read input from the textarea, and update the document to match.
  // When something is selected, it is present in the textarea, and
  // selected (unless it is huge, in which case a placeholder is
  // used). When nothing is selected, the cursor sits after previously
  // seen text (can be empty), which is stored in prevInput (we must
  // not reset the textarea when typing, because that breaks IME).
  TextareaInput.prototype.poll = function () {
      var this$1 = this;

    var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
    // Since this is called a *lot*, try to bail out as cheaply as
    // possible when it is clear that nothing happened. hasSelection
    // will be the case when there is a lot of text in the textarea,
    // in which case reading its value would be expensive.
    if (this.contextMenuPending || this.resetting || !cm.state.focused ||
        (hasSelection(input) && !prevInput && !this.composing) ||
        cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
      { return false }

    var text = input.value;
    // If nothing changed, bail.
    if (text == prevInput && !cm.somethingSelected()) { return false }
    // Work around nonsensical selection resetting in IE9/10, and
    // inexplicable appearance of private area unicode characters on
    // some key combos in Mac (#2689).
    if (ie && ie_version >= 9 && this.hasSelection === text ||
        mac && /[\uf700-\uf7ff]/.test(text)) {
      cm.display.input.reset();
      return false
    }

    if (cm.doc.sel == cm.display.selForContextMenu) {
      var first = text.charCodeAt(0);
      if (first == 0x200b && !prevInput) { prevInput = "\u200b"; }
      if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
    }
    // Find the part of the input that is actually new
    var same = 0, l = Math.min(prevInput.length, text.length);
    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same; }

    runInOp(cm, function () {
      applyTextInput(cm, text.slice(same), prevInput.length - same,
                     null, this$1.composing ? "*compose" : null);

      // Don't leave long text in the textarea, since it makes further polling slow
      if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = ""; }
      else { this$1.prevInput = text; }

      if (this$1.composing) {
        this$1.composing.range.clear();
        this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
                                           {className: "CodeMirror-composing"});
      }
    });
    return true
  };

  TextareaInput.prototype.ensurePolled = function () {
    if (this.pollingFast && this.poll()) { this.pollingFast = false; }
  };

  TextareaInput.prototype.onKeyPress = function () {
    if (ie && ie_version >= 9) { this.hasSelection = null; }
    this.fastPoll();
  };

  TextareaInput.prototype.onContextMenu = function (e) {
    var input = this, cm = input.cm, display = cm.display, te = input.textarea;
    if (input.contextMenuPending) { input.contextMenuPending(); }
    var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
    if (!pos || presto) { return } // Opera is difficult.

    // Reset the current text selection only if the click is done outside of the selection
    // and 'resetSelectionOnContextMenu' option is true.
    var reset = cm.options.resetSelectionOnContextMenu;
    if (reset && cm.doc.sel.contains(pos) == -1)
      { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll); }

    var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
    var wrapperBox = input.wrapper.offsetParent.getBoundingClientRect();
    input.wrapper.style.cssText = "position: static";
    te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
    var oldScrollY;
    if (webkit) { oldScrollY = te.ownerDocument.defaultView.scrollY; } // Work around Chrome issue (#2712)
    display.input.focus();
    if (webkit) { te.ownerDocument.defaultView.scrollTo(null, oldScrollY); }
    display.input.reset();
    // Adds "Select all" to context menu in FF
    if (!cm.somethingSelected()) { te.value = input.prevInput = " "; }
    input.contextMenuPending = rehide;
    display.selForContextMenu = cm.doc.sel;
    clearTimeout(display.detectingSelectAll);

    // Select-all will be greyed out if there's nothing to select, so
    // this adds a zero-width space so that we can later check whether
    // it got selected.
    function prepareSelectAllHack() {
      if (te.selectionStart != null) {
        var selected = cm.somethingSelected();
        var extval = "\u200b" + (selected ? te.value : "");
        te.value = "\u21da"; // Used to catch context-menu undo
        te.value = extval;
        input.prevInput = selected ? "" : "\u200b";
        te.selectionStart = 1; te.selectionEnd = extval.length;
        // Re-set this, in case some other handler touched the
        // selection in the meantime.
        display.selForContextMenu = cm.doc.sel;
      }
    }
    function rehide() {
      if (input.contextMenuPending != rehide) { return }
      input.contextMenuPending = false;
      input.wrapper.style.cssText = oldWrapperCSS;
      te.style.cssText = oldCSS;
      if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos); }

      // Try to detect the user choosing select-all
      if (te.selectionStart != null) {
        if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack(); }
        var i = 0, poll = function () {
          if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
              te.selectionEnd > 0 && input.prevInput == "\u200b") {
            operation(cm, selectAll)(cm);
          } else if (i++ < 10) {
            display.detectingSelectAll = setTimeout(poll, 500);
          } else {
            display.selForContextMenu = null;
            display.input.reset();
          }
        };
        display.detectingSelectAll = setTimeout(poll, 200);
      }
    }

    if (ie && ie_version >= 9) { prepareSelectAllHack(); }
    if (captureRightClick) {
      e_stop(e);
      var mouseup = function () {
        off(window, "mouseup", mouseup);
        setTimeout(rehide, 20);
      };
      on(window, "mouseup", mouseup);
    } else {
      setTimeout(rehide, 50);
    }
  };

  TextareaInput.prototype.readOnlyChanged = function (val) {
    if (!val) { this.reset(); }
    this.textarea.disabled = val == "nocursor";
    this.textarea.readOnly = !!val;
  };

  TextareaInput.prototype.setUneditable = function () {};

  TextareaInput.prototype.needsContentAttribute = false;

  function fromTextArea(textarea, options) {
    options = options ? copyObj(options) : {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabIndex)
      { options.tabindex = textarea.tabIndex; }
    if (!options.placeholder && textarea.placeholder)
      { options.placeholder = textarea.placeholder; }
    // Set autofocus to true if this textarea is focused, or if it has
    // autofocus and no other element is focused.
    if (options.autofocus == null) {
      var hasFocus = activeElt(textarea.ownerDocument);
      options.autofocus = hasFocus == textarea ||
        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
    }

    function save() {textarea.value = cm.getValue();}

    var realSubmit;
    if (textarea.form) {
      on(textarea.form, "submit", save);
      // Deplorable hack to make the submit method do the right thing.
      if (!options.leaveSubmitMethodAlone) {
        var form = textarea.form;
        realSubmit = form.submit;
        try {
          var wrappedSubmit = form.submit = function () {
            save();
            form.submit = realSubmit;
            form.submit();
            form.submit = wrappedSubmit;
          };
        } catch(e) {}
      }
    }

    options.finishInit = function (cm) {
      cm.save = save;
      cm.getTextArea = function () { return textarea; };
      cm.toTextArea = function () {
        cm.toTextArea = isNaN; // Prevent this from being ran twice
        save();
        textarea.parentNode.removeChild(cm.getWrapperElement());
        textarea.style.display = "";
        if (textarea.form) {
          off(textarea.form, "submit", save);
          if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function")
            { textarea.form.submit = realSubmit; }
        }
      };
    };

    textarea.style.display = "none";
    var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
      options);
    return cm
  }

  function addLegacyProps(CodeMirror) {
    CodeMirror.off = off;
    CodeMirror.on = on;
    CodeMirror.wheelEventPixels = wheelEventPixels;
    CodeMirror.Doc = Doc;
    CodeMirror.splitLines = splitLinesAuto;
    CodeMirror.countColumn = countColumn;
    CodeMirror.findColumn = findColumn;
    CodeMirror.isWordChar = isWordCharBasic;
    CodeMirror.Pass = Pass;
    CodeMirror.signal = signal;
    CodeMirror.Line = Line;
    CodeMirror.changeEnd = changeEnd;
    CodeMirror.scrollbarModel = scrollbarModel;
    CodeMirror.Pos = Pos;
    CodeMirror.cmpPos = cmp;
    CodeMirror.modes = modes;
    CodeMirror.mimeModes = mimeModes;
    CodeMirror.resolveMode = resolveMode;
    CodeMirror.getMode = getMode;
    CodeMirror.modeExtensions = modeExtensions;
    CodeMirror.extendMode = extendMode;
    CodeMirror.copyState = copyState;
    CodeMirror.startState = startState;
    CodeMirror.innerMode = innerMode;
    CodeMirror.commands = commands;
    CodeMirror.keyMap = keyMap;
    CodeMirror.keyName = keyName;
    CodeMirror.isModifierKey = isModifierKey;
    CodeMirror.lookupKey = lookupKey;
    CodeMirror.normalizeKeyMap = normalizeKeyMap;
    CodeMirror.StringStream = StringStream;
    CodeMirror.SharedTextMarker = SharedTextMarker;
    CodeMirror.TextMarker = TextMarker;
    CodeMirror.LineWidget = LineWidget;
    CodeMirror.e_preventDefault = e_preventDefault;
    CodeMirror.e_stopPropagation = e_stopPropagation;
    CodeMirror.e_stop = e_stop;
    CodeMirror.addClass = addClass;
    CodeMirror.contains = contains;
    CodeMirror.rmClass = rmClass;
    CodeMirror.keyNames = keyNames;
  }

  // EDITOR CONSTRUCTOR

  defineOptions(CodeMirror);

  addEditorMethods(CodeMirror);

  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
  for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
    { CodeMirror.prototype[prop] = (function(method) {
      return function() {return method.apply(this.doc, arguments)}
    })(Doc.prototype[prop]); } }

  eventMixin(Doc);
  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  CodeMirror.defineMode = function(name/*, mode, …*/) {
    if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name; }
    defineMode.apply(this, arguments);
  };

  CodeMirror.defineMIME = defineMIME;

  // Minimal default mode.
  CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); });
  CodeMirror.defineMIME("text/plain", "null");

  // EXTENSIONS

  CodeMirror.defineExtension = function (name, func) {
    CodeMirror.prototype[name] = func;
  };
  CodeMirror.defineDocExtension = function (name, func) {
    Doc.prototype[name] = func;
  };

  CodeMirror.fromTextArea = fromTextArea;

  addLegacyProps(CodeMirror);

  CodeMirror.version = "5.65.13";

  return CodeMirror;

})));


// matchbrackets, closebrackets, scheme

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/5/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  var ie_lt8 = /MSIE \d/.test(navigator.userAgent) &&
    (document.documentMode == null || document.documentMode < 8);

  var Pos = CodeMirror.Pos;

  var matching = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<", "<": ">>", ">": "<<"};

  function bracketRegex(config) {
    return config && config.bracketRegex || /[(){}[\]]/
  }

  function findMatchingBracket(cm, where, config) {
    var line = cm.getLineHandle(where.line), pos = where.ch - 1;
    var afterCursor = config && config.afterCursor
    if (afterCursor == null)
      afterCursor = /(^| )cm-fat-cursor($| )/.test(cm.getWrapperElement().className)
    var re = bracketRegex(config)

    // A cursor is defined as between two characters, but in in vim command mode
    // (i.e. not insert mode), the cursor is visually represented as a
    // highlighted box on top of the 2nd character. Otherwise, we allow matches
    // from before or after the cursor.
    var match = (!afterCursor && pos >= 0 && re.test(line.text.charAt(pos)) && matching[line.text.charAt(pos)]) ||
        re.test(line.text.charAt(pos + 1)) && matching[line.text.charAt(++pos)];
    if (!match) return null;
    var dir = match.charAt(1) == ">" ? 1 : -1;
    if (config && config.strict && (dir > 0) != (pos == where.ch)) return null;
    var style = cm.getTokenTypeAt(Pos(where.line, pos + 1));

    var found = scanForBracket(cm, Pos(where.line, pos + (dir > 0 ? 1 : 0)), dir, style, config);
    if (found == null) return null;
    return {from: Pos(where.line, pos), to: found && found.pos,
            match: found && found.ch == match.charAt(0), forward: dir > 0};
  }

  // bracketRegex is used to specify which type of bracket to scan
  // should be a regexp, e.g. /[[\]]/
  //
  // Note: If "where" is on an open bracket, then this bracket is ignored.
  //
  // Returns false when no bracket was found, null when it reached
  // maxScanLines and gave up
  function scanForBracket(cm, where, dir, style, config) {
    var maxScanLen = (config && config.maxScanLineLength) || 10000;
    var maxScanLines = (config && config.maxScanLines) || 1000;

    var stack = [];
    var re = bracketRegex(config)
    var lineEnd = dir > 0 ? Math.min(where.line + maxScanLines, cm.lastLine() + 1)
                          : Math.max(cm.firstLine() - 1, where.line - maxScanLines);
    for (var lineNo = where.line; lineNo != lineEnd; lineNo += dir) {
      var line = cm.getLine(lineNo);
      if (!line) continue;
      var pos = dir > 0 ? 0 : line.length - 1, end = dir > 0 ? line.length : -1;
      if (line.length > maxScanLen) continue;
      if (lineNo == where.line) pos = where.ch - (dir < 0 ? 1 : 0);
      for (; pos != end; pos += dir) {
        var ch = line.charAt(pos);
        if (re.test(ch) && (style === undefined ||
                            (cm.getTokenTypeAt(Pos(lineNo, pos + 1)) || "") == (style || ""))) {
          var match = matching[ch];
          if (match && (match.charAt(1) == ">") == (dir > 0)) stack.push(ch);
          else if (!stack.length) return {pos: Pos(lineNo, pos), ch: ch};
          else stack.pop();
        }
      }
    }
    return lineNo - dir == (dir > 0 ? cm.lastLine() : cm.firstLine()) ? false : null;
  }

  function matchBrackets(cm, autoclear, config) {
    // Disable brace matching in long lines, since it'll cause hugely slow updates
    var maxHighlightLen = cm.state.matchBrackets.maxHighlightLineLength || 1000,
      highlightNonMatching = config && config.highlightNonMatching;
    var marks = [], ranges = cm.listSelections();
    for (var i = 0; i < ranges.length; i++) {
      var match = ranges[i].empty() && findMatchingBracket(cm, ranges[i].head, config);
      if (match && (match.match || highlightNonMatching !== false) && cm.getLine(match.from.line).length <= maxHighlightLen) {
        var style = match.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
        marks.push(cm.markText(match.from, Pos(match.from.line, match.from.ch + 1), {className: style}));
        if (match.to && cm.getLine(match.to.line).length <= maxHighlightLen)
          marks.push(cm.markText(match.to, Pos(match.to.line, match.to.ch + 1), {className: style}));
      }
    }

    if (marks.length) {
      // Kludge to work around the IE bug from issue #1193, where text
      // input stops going to the textarea whenever this fires.
      if (ie_lt8 && cm.state.focused) cm.focus();

      var clear = function() {
        cm.operation(function() {
          for (var i = 0; i < marks.length; i++) marks[i].clear();
        });
      };
      if (autoclear) setTimeout(clear, 800);
      else return clear;
    }
  }

  function doMatchBrackets(cm) {
    cm.operation(function() {
      if (cm.state.matchBrackets.currentlyHighlighted) {
        cm.state.matchBrackets.currentlyHighlighted();
        cm.state.matchBrackets.currentlyHighlighted = null;
      }
      cm.state.matchBrackets.currentlyHighlighted = matchBrackets(cm, false, cm.state.matchBrackets);
    });
  }

  function clearHighlighted(cm) {
    if (cm.state.matchBrackets && cm.state.matchBrackets.currentlyHighlighted) {
      cm.state.matchBrackets.currentlyHighlighted();
      cm.state.matchBrackets.currentlyHighlighted = null;
    }
  }

  CodeMirror.defineOption("matchBrackets", false, function(cm, val, old) {
    if (old && old != CodeMirror.Init) {
      cm.off("cursorActivity", doMatchBrackets);
      cm.off("focus", doMatchBrackets)
      cm.off("blur", clearHighlighted)
      clearHighlighted(cm);
    }
    if (val) {
      cm.state.matchBrackets = typeof val == "object" ? val : {};
      cm.on("cursorActivity", doMatchBrackets);
      cm.on("focus", doMatchBrackets)
      cm.on("blur", clearHighlighted)
    }
  });

  CodeMirror.defineExtension("matchBrackets", function() {matchBrackets(this, true);});
  CodeMirror.defineExtension("findMatchingBracket", function(pos, config, oldConfig){
    // Backwards-compatibility kludge
    if (oldConfig || typeof config == "boolean") {
      if (!oldConfig) {
        config = config ? {strict: true} : null
      } else {
        oldConfig.strict = config
        config = oldConfig
      }
    }
    return findMatchingBracket(this, pos, config)
  });
  CodeMirror.defineExtension("scanForBracket", function(pos, dir, style, config){
    return scanForBracket(this, pos, dir, style, config);
  });
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/5/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  var defaults = {
    pairs: "()[]{}''\"\"",
    closeBefore: ")]}'\":;>",
    triples: "",
    explode: "[]{}"
  };

  var Pos = CodeMirror.Pos;

  CodeMirror.defineOption("autoCloseBrackets", false, function(cm, val, old) {
    if (old && old != CodeMirror.Init) {
      cm.removeKeyMap(keyMap);
      cm.state.closeBrackets = null;
    }
    if (val) {
      ensureBound(getOption(val, "pairs"))
      cm.state.closeBrackets = val;
      cm.addKeyMap(keyMap);
    }
  });

  function getOption(conf, name) {
    if (name == "pairs" && typeof conf == "string") return conf;
    if (typeof conf == "object" && conf[name] != null) return conf[name];
    return defaults[name];
  }

  var keyMap = {Backspace: handleBackspace, Enter: handleEnter};
  function ensureBound(chars) {
    for (var i = 0; i < chars.length; i++) {
      var ch = chars.charAt(i), key = "'" + ch + "'"
      if (!keyMap[key]) keyMap[key] = handler(ch)
    }
  }
  ensureBound(defaults.pairs + "`")

  function handler(ch) {
    return function(cm) { return handleChar(cm, ch); };
  }

  function getConfig(cm) {
    var deflt = cm.state.closeBrackets;
    if (!deflt || deflt.override) return deflt;
    var mode = cm.getModeAt(cm.getCursor());
    return mode.closeBrackets || deflt;
  }

  function handleBackspace(cm) {
    var conf = getConfig(cm);
    if (!conf || cm.getOption("disableInput")) return CodeMirror.Pass;

    var pairs = getOption(conf, "pairs");
    var ranges = cm.listSelections();
    for (var i = 0; i < ranges.length; i++) {
      if (!ranges[i].empty()) return CodeMirror.Pass;
      var around = charsAround(cm, ranges[i].head);
      if (!around || pairs.indexOf(around) % 2 != 0) return CodeMirror.Pass;
    }
    for (var i = ranges.length - 1; i >= 0; i--) {
      var cur = ranges[i].head;
      cm.replaceRange("", Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1), "+delete");
    }
  }

  function handleEnter(cm) {
    var conf = getConfig(cm);
    var explode = conf && getOption(conf, "explode");
    if (!explode || cm.getOption("disableInput")) return CodeMirror.Pass;

    var ranges = cm.listSelections();
    for (var i = 0; i < ranges.length; i++) {
      if (!ranges[i].empty()) return CodeMirror.Pass;
      var around = charsAround(cm, ranges[i].head);
      if (!around || explode.indexOf(around) % 2 != 0) return CodeMirror.Pass;
    }
    cm.operation(function() {
      var linesep = cm.lineSeparator() || "\n";
      cm.replaceSelection(linesep + linesep, null);
      moveSel(cm, -1)
      ranges = cm.listSelections();
      for (var i = 0; i < ranges.length; i++) {
        var line = ranges[i].head.line;
        cm.indentLine(line, null, true);
        cm.indentLine(line + 1, null, true);
      }
    });
  }

  function moveSel(cm, dir) {
    var newRanges = [], ranges = cm.listSelections(), primary = 0
    for (var i = 0; i < ranges.length; i++) {
      var range = ranges[i]
      if (range.head == cm.getCursor()) primary = i
      var pos = range.head.ch || dir > 0 ? {line: range.head.line, ch: range.head.ch + dir} : {line: range.head.line - 1}
      newRanges.push({anchor: pos, head: pos})
    }
    cm.setSelections(newRanges, primary)
  }

  function contractSelection(sel) {
    var inverted = CodeMirror.cmpPos(sel.anchor, sel.head) > 0;
    return {anchor: new Pos(sel.anchor.line, sel.anchor.ch + (inverted ? -1 : 1)),
            head: new Pos(sel.head.line, sel.head.ch + (inverted ? 1 : -1))};
  }

  function handleChar(cm, ch) {
    var conf = getConfig(cm);
    if (!conf || cm.getOption("disableInput")) return CodeMirror.Pass;

    var pairs = getOption(conf, "pairs");
    var pos = pairs.indexOf(ch);
    if (pos == -1) return CodeMirror.Pass;

    var closeBefore = getOption(conf,"closeBefore");

    var triples = getOption(conf, "triples");

    var identical = pairs.charAt(pos + 1) == ch;
    var ranges = cm.listSelections();
    var opening = pos % 2 == 0;

    var type;
    for (var i = 0; i < ranges.length; i++) {
      var range = ranges[i], cur = range.head, curType;
      var next = cm.getRange(cur, Pos(cur.line, cur.ch + 1));
      if (opening && !range.empty()) {
        curType = "surround";
      } else if ((identical || !opening) && next == ch) {
        if (identical && stringStartsAfter(cm, cur))
          curType = "both";
        else if (triples.indexOf(ch) >= 0 && cm.getRange(cur, Pos(cur.line, cur.ch + 3)) == ch + ch + ch)
          curType = "skipThree";
        else
          curType = "skip";
      } else if (identical && cur.ch > 1 && triples.indexOf(ch) >= 0 &&
                 cm.getRange(Pos(cur.line, cur.ch - 2), cur) == ch + ch) {
        if (cur.ch > 2 && /\bstring/.test(cm.getTokenTypeAt(Pos(cur.line, cur.ch - 2)))) return CodeMirror.Pass;
        curType = "addFour";
      } else if (identical) {
        var prev = cur.ch == 0 ? " " : cm.getRange(Pos(cur.line, cur.ch - 1), cur)
        if (!CodeMirror.isWordChar(next) && prev != ch && !CodeMirror.isWordChar(prev)) curType = "both";
        else return CodeMirror.Pass;
      } else if (opening && (next.length === 0 || /\s/.test(next) || closeBefore.indexOf(next) > -1)) {
        curType = "both";
      } else {
        return CodeMirror.Pass;
      }
      if (!type) type = curType;
      else if (type != curType) return CodeMirror.Pass;
    }

    var left = pos % 2 ? pairs.charAt(pos - 1) : ch;
    var right = pos % 2 ? ch : pairs.charAt(pos + 1);
    cm.operation(function() {
      if (type == "skip") {
        moveSel(cm, 1)
      } else if (type == "skipThree") {
        moveSel(cm, 3)
      } else if (type == "surround") {
        var sels = cm.getSelections();
        for (var i = 0; i < sels.length; i++)
          sels[i] = left + sels[i] + right;
        cm.replaceSelections(sels, "around");
        sels = cm.listSelections().slice();
        for (var i = 0; i < sels.length; i++)
          sels[i] = contractSelection(sels[i]);
        cm.setSelections(sels);
      } else if (type == "both") {
        cm.replaceSelection(left + right, null);
        cm.triggerElectric(left + right);
        moveSel(cm, -1)
      } else if (type == "addFour") {
        cm.replaceSelection(left + left + left + left, "before");
        moveSel(cm, 1)
      }
    });
  }

  function charsAround(cm, pos) {
    var str = cm.getRange(Pos(pos.line, pos.ch - 1),
                          Pos(pos.line, pos.ch + 1));
    return str.length == 2 ? str : null;
  }

  function stringStartsAfter(cm, pos) {
    var token = cm.getTokenAt(Pos(pos.line, pos.ch + 1))
    return /\bstring/.test(token.type) && token.start == pos.ch &&
      (pos.ch == 0 || !/\bstring/.test(cm.getTokenTypeAt(pos)))
  }
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/5/LICENSE

/**
 * Author: Koh Zi Han, based on implementation by Koh Zi Chun
 * Improved by: Jakub T. Jankiewicz
 */

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("scheme", function () {
    var BUILTIN = "builtin", COMMENT = "comment", STRING = "string",
        SYMBOL = "symbol", ATOM = "atom", NUMBER = "number", BRACKET = "bracket";
    var INDENT_WORD_SKIP = 2;

    function makeKeywords(str) {
        var obj = {}, words = str.split(" ");
        for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
        return obj;
    }

    var keywords = makeKeywords("λ case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?");
    var indentKeys = makeKeywords("define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless");

    function stateStack(indent, type, prev) { // represents a state stack object
        this.indent = indent;
        this.type = type;
        this.prev = prev;
    }

    function pushStack(state, indent, type) {
        state.indentStack = new stateStack(indent, type, state.indentStack);
    }

    function popStack(state) {
        state.indentStack = state.indentStack.prev;
    }

    var binaryMatcher = new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i);
    var octalMatcher = new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i);
    var hexMatcher = new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i);
    var decimalMatcher = new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);

    function isBinaryNumber (stream) {
        return stream.match(binaryMatcher);
    }

    function isOctalNumber (stream) {
        return stream.match(octalMatcher);
    }

    function isDecimalNumber (stream, backup) {
        if (backup === true) {
            stream.backUp(1);
        }
        return stream.match(decimalMatcher);
    }

    function isHexNumber (stream) {
        return stream.match(hexMatcher);
    }

    function processEscapedSequence(stream, options) {
        var next, escaped = false;
        while ((next = stream.next()) != null) {
            if (next == options.token && !escaped) {

                options.state.mode = false;
                break;
            }
            escaped = !escaped && next == "\\";
        }
    }

    return {
        startState: function () {
            return {
                indentStack: null,
                indentation: 0,
                mode: false,
                sExprComment: false,
                sExprQuote: false
            };
        },

        token: function (stream, state) {
            if (state.indentStack == null && stream.sol()) {
                // update indentation, but only if indentStack is empty
                state.indentation = stream.indentation();
            }

            // skip spaces
            if (stream.eatSpace()) {
                return null;
            }
            var returnType = null;

            switch(state.mode){
                case "string": // multi-line string parsing mode
                    processEscapedSequence(stream, {
                        token: "\"",
                        state: state
                    });
                    returnType = STRING; // continue on in scheme-string mode
                    break;
                case "symbol": // escape symbol
                    processEscapedSequence(stream, {
                        token: "|",
                        state: state
                    });
                    returnType = SYMBOL; // continue on in scheme-symbol mode
                    break;
                case "comment": // comment parsing mode
                    var next, maybeEnd = false;
                    while ((next = stream.next()) != null) {
                        if (next == "#" && maybeEnd) {

                            state.mode = false;
                            break;
                        }
                        maybeEnd = (next == "|");
                    }
                    returnType = COMMENT;
                    break;
                case "s-expr-comment": // s-expr commenting mode
                    state.mode = false;
                    if(stream.peek() == "(" || stream.peek() == "["){
                        // actually start scheme s-expr commenting mode
                        state.sExprComment = 0;
                    }else{
                        // if not we just comment the entire of the next token
                        stream.eatWhile(/[^\s\(\)\[\]]/); // eat symbol atom
                        returnType = COMMENT;
                        break;
                    }
                default: // default parsing mode
                    var ch = stream.next();

                    if (ch == "\"") {
                        state.mode = "string";
                        returnType = STRING;

                    } else if (ch == "'") {
                        if (stream.peek() == "(" || stream.peek() == "["){
                            if (typeof state.sExprQuote != "number") {
                                state.sExprQuote = 0;
                            } // else already in a quoted expression
                            returnType = ATOM;
                        } else {
                            stream.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/);
                            returnType = ATOM;
                        }
                    } else if (ch == '|') {
                        state.mode = "symbol";
                        returnType = SYMBOL;
                    } else if (ch == '#') {
                        if (stream.eat("|")) {                    // Multi-line comment
                            state.mode = "comment"; // toggle to comment mode
                            returnType = COMMENT;
                        } else if (stream.eat(/[tf]/i)) {            // #t/#f (atom)
                            returnType = ATOM;
                        } else if (stream.eat(';')) {                // S-Expr comment
                            state.mode = "s-expr-comment";
                            returnType = COMMENT;
                        } else {
                            var numTest = null, hasExactness = false, hasRadix = true;
                            if (stream.eat(/[ei]/i)) {
                                hasExactness = true;
                            } else {
                                stream.backUp(1);       // must be radix specifier
                            }
                            if (stream.match(/^#b/i)) {
                                numTest = isBinaryNumber;
                            } else if (stream.match(/^#o/i)) {
                                numTest = isOctalNumber;
                            } else if (stream.match(/^#x/i)) {
                                numTest = isHexNumber;
                            } else if (stream.match(/^#d/i)) {
                                numTest = isDecimalNumber;
                            } else if (stream.match(/^[-+0-9.]/, false)) {
                                hasRadix = false;
                                numTest = isDecimalNumber;
                            // re-consume the initial # if all matches failed
                            } else if (!hasExactness) {
                                stream.eat('#');
                            }
                            if (numTest != null) {
                                if (hasRadix && !hasExactness) {
                                    // consume optional exactness after radix
                                    stream.match(/^#[ei]/i);
                                }
                                if (numTest(stream))
                                    returnType = NUMBER;
                            }
                        }
                    } else if (/^[-+0-9.]/.test(ch) && isDecimalNumber(stream, true)) { // match non-prefixed number, must be decimal
                        returnType = NUMBER;
                    } else if (ch == ";") { // comment
                        stream.skipToEnd(); // rest of the line is a comment
                        returnType = COMMENT;
                    } else if (ch == "(" || ch == "[") {
                      var keyWord = ''; var indentTemp = stream.column(), letter;
                        /**
                        Either
                        (indent-word ..
                        (non-indent-word ..
                        (;something else, bracket, etc.
                        */

                        while ((letter = stream.eat(/[^\s\(\[\;\)\]]/)) != null) {
                            keyWord += letter;
                        }

                        if (keyWord.length > 0 && indentKeys.propertyIsEnumerable(keyWord)) { // indent-word

                            pushStack(state, indentTemp + INDENT_WORD_SKIP, ch);
                        } else { // non-indent word
                            // we continue eating the spaces
                            stream.eatSpace();
                            if (stream.eol() || stream.peek() == ";") {
                                // nothing significant after
                                // we restart indentation 1 space after
                                pushStack(state, indentTemp + 1, ch);
                            } else {
                                pushStack(state, indentTemp + stream.current().length, ch); // else we match
                            }
                        }
                        stream.backUp(stream.current().length - 1); // undo all the eating

                        if(typeof state.sExprComment == "number") state.sExprComment++;
                        if(typeof state.sExprQuote == "number") state.sExprQuote++;

                        returnType = BRACKET;
                    } else if (ch == ")" || ch == "]") {
                        returnType = BRACKET;
                        if (state.indentStack != null && state.indentStack.type == (ch == ")" ? "(" : "[")) {
                            popStack(state);

                            if(typeof state.sExprComment == "number"){
                                if(--state.sExprComment == 0){
                                    returnType = COMMENT; // final closing bracket
                                    state.sExprComment = false; // turn off s-expr commenting mode
                                }
                            }
                            if(typeof state.sExprQuote == "number"){
                                if(--state.sExprQuote == 0){
                                    returnType = ATOM; // final closing bracket
                                    state.sExprQuote = false; // turn off s-expr quote mode
                                }
                            }
                        }
                    } else {
                        stream.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/);

                        if (keywords && keywords.propertyIsEnumerable(stream.current())) {
                            returnType = BUILTIN;
                        } else returnType = "variable";
                    }
            }
            return (typeof state.sExprComment == "number") ? COMMENT : ((typeof state.sExprQuote == "number") ? ATOM : returnType);
        },

        indent: function (state) {
            if (state.indentStack == null) return state.indentation;
            return state.indentStack.indent;
        },

        fold: "brace-paren",
        closeBrackets: {pairs: "()[]{}\"\""},
        lineComment: ";;"
    };
});

CodeMirror.defineMIME("text/x-scheme", "scheme");

});


// REPL

    const errorMsg = document.getElementById("error")
    const helpDiv = document.getElementById("help")

    const onError = (e) => {
      errorMsg.innerText = e.message
      errorMsg.className = 'errorFlash'
      throw(e)
    }

    const biwascheme = new BiwaScheme.Interpreter(onError)

    const replInput = document.getElementById("replInput")
    const output = document.getElementById("replOutput")
    let inputHistoryFromStorage = window.localStorage.getItem("biwaReplHistory") || "[]"
    let inputHistory = JSON.parse(inputHistoryFromStorage)
    let inputHistoryIndex = -1

    const setCursorAtEnd = () => {
      input.focus()
      input.setCursor(input.lineCount(), 0)
    }

    const histUp = () => {
      inputHistoryIndex = Math.min(inputHistory.length - 1, inputHistoryIndex + 1)
      input.setValue(inputHistory[inputHistoryIndex] || "")
      input.setValue(input.getValue().trim())
      setCursorAtEnd()
    }

    const histDown = () => {
      inputHistoryIndex = Math.max(-1, inputHistoryIndex - 1)
      if (inputHistoryIndex === -1) {
        input.setValue("")
        inputHistoryIndex = -1
      } else {
        input.setValue(inputHistory[inputHistoryIndex])
        input.setValue(input.getValue().trim())
        setCursorAtEnd()
      }
    }

    // remove lines with ;=>
    const cleanReplOutput = (s) => {
      const lines = s.split(/\r?\n/)
      const cleaned = lines.filter(line => !line.startsWith(";=> "))
      return cleaned.join("\n")
    }

    const clearInput = () => {
      input.setValue("")
      input.focus()
    }

    const clearOutput = () => {
      output.value = ""
    }

    const openHelp = () => {
      helpDiv.style.display = "block"
    }

    const closeHelp = () => {
      helpDiv.style.display = "none"
    }

    const input = CodeMirror.fromTextArea(replInput, {
      mode: 'scheme',
      matchBrackets: true,
      lineNumbers: true,
      lineWrapping: true,
      autoCloseBrackets: true,
      extraKeys: {
        "Shift-Enter": () => {
          setCursorAtEnd()
          biwaEval()
        },
        "Alt-P": histUp,
        "Alt-N": histDown,
      }
    })

    // hardcoded style
    input.setSize("100%", "calc(45vh - 4.8rem)")

    function addText(text) {
      const doc = input.getDoc()
      const cursor = doc.getCursor()
      doc.replaceRange(text, cursor)
    }

    function biwaEval() {
      const inputValue = cleanReplOutput(input.getValue().trim())
      inputHistory.unshift(inputValue)
      inputHistoryIndex = -1
      window.localStorage.setItem("biwaReplHistory", JSON.stringify(inputHistory.slice(0, 32)))
      biwascheme.evaluate(inputValue, function (result) {
        output.value += inputValue
        output.value += "\n;=> " + BiwaScheme.to_write(result) + "\n\n"
        output.scrollTop = output.scrollHeight
        input.setValue("")
        errorMsg.innerText = ""
        errorMsg.className = "noError"
      })
    }

// initialize
biwascheme.evaluate('(define atom? (lambda (x) (and (not (pair? x)) (not (null? x)))))', function (result) { console.log("Loaded (atom?)")})
