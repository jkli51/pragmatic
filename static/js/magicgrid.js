!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).MagicGrid = e()
}(this, (function () {
    "use strict";

    function t(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    function e(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object")
    }

    function n(t, e, n) {
        return e = c(e), function (t, e) {
            if (e && ("object" == typeof e || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, l() ? Reflect.construct(e, [], c(t).constructor) : e.apply(t, n))
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e, n) {
        (function (t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        })(t, e), e.set(t, n)
    }

    function o(t, n, i) {
        return t.set(e(t, n), i), i
    }

    function s(t, e, n) {
        return e && function (t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, h(i.key), i)
            }
        }(t.prototype, e), Object.defineProperty(t, "prototype", {writable: !1}), t
    }

    function a(e, n) {
        var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!i) {
            if (Array.isArray(e) || (i = function (e, n) {
                if (e) {
                    if ("string" == typeof e) return t(e, n);
                    var i = {}.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? t(e, n) : void 0
                }
            }(e)) || n) {
                i && (e = i);
                var r = 0, o = function () {
                };
                return {
                    s: o, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (t) {
                        throw t
                    }, f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s, a = !0, u = !1;
        return {
            s: function () {
                i = i.call(e)
            }, n: function () {
                var t = i.next();
                return a = t.done, t
            }, e: function (t) {
                u = !0, s = t
            }, f: function () {
                try {
                    a || null == i.return || i.return()
                } finally {
                    if (u) throw s
                }
            }
        }
    }

    function u(t, e, n) {
        return (e = h(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
    }

    function l() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            })))
        } catch (t) {
        }
        return (l = function () {
            return !!t
        })()
    }

    function f(t, e) {
        return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        }, f(t, e)
    }

    function h(t) {
        var e = function (t, e) {
            if ("object" != typeof t || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(t, e);
                if ("object" != typeof i) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t, "string");
        return "symbol" == typeof e ? e : e + ""
    }

    function y(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    var v = s((function t(e, n, r) {
        i(this, t), u(this, "id", void 0), u(this, "event", void 0), u(this, "handler", void 0), this.id = e, this.event = n, this.handler = r
    })), d = v, p = new WeakMap, m = function () {
        return s((function t() {
            i(this, t), u(this, "listeners", void 0), r(this, p, void 0), this.listeners = [], o(p, this, 0)
        }), [{
            key: "removeListener", value: function (t) {
                var e = this.listeners.findIndex((function (e) {
                    return e.id === t
                }));
                return -1 !== e && (this.listeners.splice(e, 1), !0)
            }
        }, {
            key: "addListener", value: function (t, n) {
                var i, r, s, a, u = (o(p, this, (a = this, i = (s = p).get(e(s, a)), r = i++, i)), r);
                return this.listeners.push(new d(u, t, n)), u
            }
        }, {
            key: "emit", value: function (t, e) {
                var n, i = a(this.listeners);
                try {
                    for (i.s(); !(n = i.n()).done;) {
                        var r = n.value;
                        r.event === t && r.handler(e)
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
            }
        }])
    }(), b = function (t) {
        throw new Error("Missing property '".concat(t, "' in MagicGrid config"))
    }, g = function (t) {
        if (!t) throw new Error("No config object has been provided.");
        for (var e = 0, n = ["useTransform", "center"]; e < n.length; e++) {
            var i = n[e];
            "boolean" != typeof t[i] && (t[i] = !0)
        }
        "number" != typeof t.gutter && (t.gutter = 25), t.container || b("container"), t.items || t.static || b("items or static")
    }, w = function (t) {
        var e, n = t[0], i = a(t);
        try {
            for (i.s(); !(e = i.n()).done;) {
                var r = e.value;
                r.height < n.height && (n = r)
            }
        } catch (t) {
            i.e(t)
        } finally {
            i.f()
        }
        return n
    }, O = "gridReady", j = "positionComplete", C = 200;
    return y(function (t) {
        function e(t) {
            var r;
            return i(this, e), r = n(this, e), g(t), t.container instanceof HTMLElement ? (r.container = t.container, r.containerClass = t.container.className) : (r.containerClass = t.container, r.container = document.querySelector(t.container)), r.static = t.static || !1, r.size = t.items, r.gutter = t.gutter, r.maxColumns = t.maxColumns || !1, r.useMin = t.useMin || !1, r.useTransform = t.useTransform, r.animate = t.animate || !1, r.center = t.center, r.styledItems = new Set, r.resizeObserver = null, r.isPositioning = !1, r
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {writable: !1}), e && f(t, e)
        }(e, t), s(e, [{
            key: "setContainer", value: function (t) {
                var e = this.container;
                this.container = t, this.resizeObserver.unobserve(e), this.resizeObserver.observe(t)
            }
        }, {
            key: "initStyles", value: function () {
                if (this.ready()) {
                    this.container.style.position = "relative";
                    for (var t = this.items(), e = 0; e < t.length; e++) if (!this.styledItems.has(t[e])) {
                        var n = t[e].style;
                        n.position = "absolute", this.animate && (n.transition = "".concat(this.useTransform ? "transform" : "top, left", " 0.2s ease")), this.styledItems.add(t[e])
                    }
                }
            }
        }, {
            key: "items", value: function () {
                return this.container.children
            }
        }, {
            key: "colWidth", value: function () {
                return this.items()[0].getBoundingClientRect().width + this.gutter
            }
        }, {
            key: "setup", value: function () {
                var t = this.container.getBoundingClientRect().width, e = this.colWidth(), n = Math.floor(t / e) || 1,
                    i = [];
                this.maxColumns && n > this.maxColumns && (n = this.maxColumns);
                for (var r = 0; r < n; r++) i[r] = {height: 0, index: r};
                return {cols: i, wSpace: t - n * e + this.gutter}
            }
        }, {
            key: "nextCol", value: function (t, e) {
                return this.useMin ? w(t) : t[e % t.length]
            }
        }, {
            key: "positionItems", value: function () {
                if (!this.isPositioning) {
                    this.isPositioning = !0;
                    var t = this.setup(), e = t.cols, n = t.wSpace, i = 0, r = this.colWidth(), o = this.items();
                    n = this.center ? Math.floor(n / 2) : 0, this.initStyles();
                    for (var s = 0; s < o.length; s++) {
                        var a = this.nextCol(e, s), u = o[s], c = a.height ? this.gutter : 0,
                            l = a.index * r + n + "px", f = a.height + c + "px";
                        this.useTransform ? u.style.transform = "translate(".concat(l, ", ").concat(f, ")") : (u.style.top = f, u.style.left = l), a.height += u.getBoundingClientRect().height + c, a.height > i && (i = a.height)
                    }
                    this.container.style.height = i + this.gutter + "px", this.isPositioning = !1, this.emit(j)
                }
            }
        }, {
            key: "ready", value: function () {
                return !!this.static || this.items().length >= this.size
            }
        }, {
            key: "getReady", value: function () {
                var t = this, e = setInterval((function () {
                    t.container = document.querySelector(t.containerClass), t.ready() && (clearInterval(e), t.listen())
                }), 100)
            }
        }, {
            key: "observeContainerResize", value: function () {
                var t = this;
                this.resizeObserver || (this.resizeObserver = new ResizeObserver((function () {
                    setTimeout((function () {
                        t.positionItems()
                    }), C)
                })), this.resizeObserver.observe(this.container))
            }
        }, {
            key: "listen", value: function () {
                var t = this;
                this.ready() ? (window.addEventListener("resize", (function () {
                    setTimeout((function () {
                        t.positionItems()
                    }), C)
                })), this.observeContainerResize(), this.positionItems(), this.emit(O)) : this.getReady()
            }
        }, {
            key: "onReady", value: function (t) {
                return this.addListener(O, t)
            }
        }, {
            key: "onPositionComplete", value: function (t) {
                return this.addListener(j, t)
            }
        }])
    }(m))
}));

let magicGrid = new MagicGrid({
  container: '.container',
  animate: true,
  gutter: 12,
  static: true,
  useMin: true
});

var masonrys = document.getElementsByTagName("img");

for (let i = 0; i < masonrys.length; i++) {
    masonrys[i].addEventListener('load', function () {
        magicGrid.positionItems();
    }, false);
}

magicGrid.listen();