const Yt = function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
    new MutationObserver(c => {
        for (const f of c)
            if (f.type === "childList")
                for (const h of f.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && o(h)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity), c.referrerpolicy && (f.referrerPolicy = c.referrerpolicy), c.crossorigin === "use-credentials" ? f.credentials = "include" : c.crossorigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function o(c) {
        if (c.ep) return;
        c.ep = !0;
        const f = r(c);
        fetch(c.href, f)
    }
};
Yt();

function Z() {}

function It(e, t) {
    for (const r in t) e[r] = t[r];
    return e
}

function zt(e) {
    return e()
}

function dt() {
    return Object.create(null)
}

function Ae(e) {
    e.forEach(zt)
}

function lt(e) {
    return typeof e == "function"
}

function Ne(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
let Je;

function ht(e, t) {
    return Je || (Je = document.createElement("a")), Je.href = t, e === Je.href
}

function Ht(e) {
    return Object.keys(e).length === 0
}

function Wt(e, ...t) {
    if (e == null) return Z;
    const r = e.subscribe(...t);
    return r.unsubscribe ? () => r.unsubscribe() : r
}

function Zt(e) {
    return e && lt(e.destroy) ? e.destroy : Z
}

function v(e, t) {
    e.appendChild(t)
}

function V(e, t, r) {
    e.insertBefore(t, r || null)
}

function P(e) {
    e.parentNode.removeChild(e)
}

function Ue(e, t) {
    for (let r = 0; r < e.length; r += 1) e[r] && e[r].d(t)
}

function M(e) {
    return document.createElement(e)
}

function xt(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
}

function ce(e) {
    return document.createTextNode(e)
}

function I() {
    return ce(" ")
}

function at() {
    return ce("")
}

function oe(e, t, r, o) {
    return e.addEventListener(t, r, o), () => e.removeEventListener(t, r, o)
}

function k(e, t, r) {
    r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r)
}

function Xe(e, t, r) {
    const o = new Set;
    for (let c = 0; c < e.length; c += 1) e[c].checked && o.add(e[c].__value);
    return r || o.delete(t), Array.from(o)
}

function _t(e) {
    return e === "" ? null : +e
}

function $t(e) {
    return Array.from(e.childNodes)
}

function $e(e, t) {
    t = "" + t, e.wholeText !== t && (e.data = t)
}

function Ye(e, t) {
    e.value = t == null ? "" : t
}

function qt(e, t, r, o) {
    r === null ? e.style.removeProperty(t) : e.style.setProperty(t, r, o ? "important" : "")
}

function en(e, t, {
    bubbles: r = !1,
    cancelable: o = !1
} = {}) {
    const c = document.createEvent("CustomEvent");
    return c.initCustomEvent(e, r, o, t), c
}
let Ke;

function Ge(e) {
    Ke = e
}

function et() {
    if (!Ke) throw new Error("Function called outside component initialization");
    return Ke
}

function tn(e) {
    et().$$.on_mount.push(e)
}

function nn(e) {
    et().$$.after_update.push(e)
}

function rn(e) {
    et().$$.on_destroy.push(e)
}

function sn() {
    const e = et();
    return (t, r, {
        cancelable: o = !1
    } = {}) => {
        const c = e.$$.callbacks[t];
        if (c) {
            const f = en(t, r, {
                cancelable: o
            });
            return c.slice().forEach(h => {
                h.call(e, f)
            }), !f.defaultPrevented
        }
        return !0
    }
}

function pt(e, t) {
    const r = e.$$.callbacks[t.type];
    r && r.slice().forEach(o => o.call(this, t))
}
const Ve = [],
    gt = [],
    We = [],
    bt = [],
    Tt = Promise.resolve();
let it = !1;

function Pt() {
    it || (it = !0, Tt.then(Ft))
}

function Dt() {
    return Pt(), Tt
}

function st(e) {
    We.push(e)
}
const rt = new Set;
let He = 0;

function Ft() {
    const e = Ke;
    do {
        for (; He < Ve.length;) {
            const t = Ve[He];
            He++, Ge(t), ln(t.$$)
        }
        for (Ge(null), Ve.length = 0, He = 0; gt.length;) gt.pop()();
        for (let t = 0; t < We.length; t += 1) {
            const r = We[t];
            rt.has(r) || (rt.add(r), r())
        }
        We.length = 0
    } while (Ve.length);
    for (; bt.length;) bt.pop()();
    it = !1, rt.clear(), Ge(e)
}

function ln(e) {
    if (e.fragment !== null) {
        e.update(), Ae(e.before_update);
        const t = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(st)
    }
}
const Ze = new Set;
let Be;

function ze() {
    Be = {
        r: 0,
        c: [],
        p: Be
    }
}

function qe() {
    Be.r || Ae(Be.c), Be = Be.p
}

function H(e, t) {
    e && e.i && (Ze.delete(e), e.i(t))
}

function ie(e, t, r, o) {
    if (e && e.o) {
        if (Ze.has(e)) return;
        Ze.add(e), Be.c.push(() => {
            Ze.delete(e), o && (r && e.d(1), o())
        }), e.o(t)
    }
}

function Vt(e, t) {
    const r = {},
        o = {},
        c = {
            $$scope: 1
        };
    let f = e.length;
    for (; f--;) {
        const h = e[f],
            d = t[f];
        if (d) {
            for (const u in h) u in d || (o[u] = 1);
            for (const u in d) c[u] || (r[u] = d[u], c[u] = 1);
            e[f] = d
        } else
            for (const u in h) c[u] = 1
    }
    for (const h in o) h in r || (r[h] = void 0);
    return r
}

function Ut(e) {
    return typeof e == "object" && e !== null ? e : {}
}

function Ce(e) {
    e && e.c()
}

function Oe(e, t, r, o) {
    const {
        fragment: c,
        on_mount: f,
        on_destroy: h,
        after_update: d
    } = e.$$;
    c && c.m(t, r), o || st(() => {
        const u = f.map(zt).filter(lt);
        h ? h.push(...u) : Ae(u), e.$$.on_mount = []
    }), d.forEach(st)
}

function Ee(e, t) {
    const r = e.$$;
    r.fragment !== null && (Ae(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = [])
}

function an(e, t) {
    e.$$.dirty[0] === -1 && (Ve.push(e), Pt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function Te(e, t, r, o, c, f, h, d = [-1]) {
    const u = Ke;
    Ge(e);
    const x = e.$$ = {
        fragment: null,
        ctx: null,
        props: f,
        update: Z,
        not_equal: c,
        bound: dt(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (u ? u.$$.context : [])),
        callbacks: dt(),
        dirty: d,
        skip_bound: !1,
        root: t.target || u.$$.root
    };
    h && h(x.root);
    let m = !1;
    if (x.ctx = r ? r(e, t.props || {}, (g, y, ...p) => {
            const C = p.length ? p[0] : y;
            return x.ctx && c(x.ctx[g], x.ctx[g] = C) && (!x.skip_bound && x.bound[g] && x.bound[g](C), m && an(e, g)), y
        }) : [], x.update(), m = !0, Ae(x.before_update), x.fragment = o ? o(x.ctx) : !1, t.target) {
        if (t.hydrate) {
            const g = $t(t.target);
            x.fragment && x.fragment.l(g), g.forEach(P)
        } else x.fragment && x.fragment.c();
        t.intro && H(e.$$.fragment), Oe(e, t.target, t.anchor, t.customElement), Ft()
    }
    Ge(u)
}
class Pe {
    $destroy() {
        Ee(this, 1), this.$destroy = Z
    }
    $on(t, r) {
        const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return o.push(r), () => {
            const c = o.indexOf(r);
            c !== -1 && o.splice(c, 1)
        }
    }
    $set(t) {
        this.$$set && !Ht(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const Ie = [];

function Gt(e, t) {
    return {
        subscribe: Kt(e, t).subscribe
    }
}

function Kt(e, t = Z) {
    let r;
    const o = new Set;

    function c(d) {
        if (Ne(e, d) && (e = d, r)) {
            const u = !Ie.length;
            for (const x of o) x[1](), Ie.push(x, e);
            if (u) {
                for (let x = 0; x < Ie.length; x += 2) Ie[x][0](Ie[x + 1]);
                Ie.length = 0
            }
        }
    }

    function f(d) {
        c(d(e))
    }

    function h(d, u = Z) {
        const x = [d, u];
        return o.add(x), o.size === 1 && (r = t(c) || Z), d(e), () => {
            o.delete(x), o.size === 0 && (r(), r = null)
        }
    }
    return {
        set: c,
        update: f,
        subscribe: h
    }
}

function Qt(e, t, r) {
    const o = !Array.isArray(e),
        c = o ? [e] : e,
        f = t.length < 2;
    return Gt(r, h => {
        let d = !1;
        const u = [];
        let x = 0,
            m = Z;
        const g = () => {
                if (x) return;
                m();
                const p = t(o ? u[0] : u, h);
                f ? h(p) : m = lt(p) ? p : Z
            },
            y = c.map((p, C) => Wt(p, N => {
                u[C] = N, x &= ~(1 << C), d && g()
            }, () => {
                x |= 1 << C
            }));
        return d = !0, g(),
            function() {
                Ae(y), m()
            }
    })
}

function on(e, t) {
    if (e instanceof RegExp) return {
        keys: !1,
        pattern: e
    };
    var r, o, c, f, h = [],
        d = "",
        u = e.split("/");
    for (u[0] || u.shift(); c = u.shift();) r = c[0], r === "*" ? (h.push("wild"), d += "/(.*)") : r === ":" ? (o = c.indexOf("?", 1), f = c.indexOf(".", 1), h.push(c.substring(1, ~o ? o : ~f ? f : c.length)), d += !!~o && !~f ? "(?:/([^/]+?))?" : "/([^/]+?)", ~f && (d += (~o ? "?" : "") + "\\" + c.substring(f))) : d += "/" + c;
    return {
        keys: h,
        pattern: new RegExp("^" + d + (t ? "(?=$|/)" : "/?$"), "i")
    }
}

function cn(e) {
    let t, r, o;
    const c = [e[2]];
    var f = e[0];

    function h(d) {
        let u = {};
        for (let x = 0; x < c.length; x += 1) u = It(u, c[x]);
        return {
            props: u
        }
    }
    return f && (t = new f(h()), t.$on("routeEvent", e[7])), {
        c() {
            t && Ce(t.$$.fragment), r = at()
        },
        m(d, u) {
            t && Oe(t, d, u), V(d, r, u), o = !0
        },
        p(d, u) {
            const x = u & 4 ? Vt(c, [Ut(d[2])]) : {};
            if (f !== (f = d[0])) {
                if (t) {
                    ze();
                    const m = t;
                    ie(m.$$.fragment, 1, 0, () => {
                        Ee(m, 1)
                    }), qe()
                }
                f ? (t = new f(h()), t.$on("routeEvent", d[7]), Ce(t.$$.fragment), H(t.$$.fragment, 1), Oe(t, r.parentNode, r)) : t = null
            } else f && t.$set(x)
        },
        i(d) {
            o || (t && H(t.$$.fragment, d), o = !0)
        },
        o(d) {
            t && ie(t.$$.fragment, d), o = !1
        },
        d(d) {
            d && P(r), t && Ee(t, d)
        }
    }
}

function fn(e) {
    let t, r, o;
    const c = [{
        params: e[1]
    }, e[2]];
    var f = e[0];

    function h(d) {
        let u = {};
        for (let x = 0; x < c.length; x += 1) u = It(u, c[x]);
        return {
            props: u
        }
    }
    return f && (t = new f(h()), t.$on("routeEvent", e[6])), {
        c() {
            t && Ce(t.$$.fragment), r = at()
        },
        m(d, u) {
            t && Oe(t, d, u), V(d, r, u), o = !0
        },
        p(d, u) {
            const x = u & 6 ? Vt(c, [u & 2 && {
                params: d[1]
            }, u & 4 && Ut(d[2])]) : {};
            if (f !== (f = d[0])) {
                if (t) {
                    ze();
                    const m = t;
                    ie(m.$$.fragment, 1, 0, () => {
                        Ee(m, 1)
                    }), qe()
                }
                f ? (t = new f(h()), t.$on("routeEvent", d[6]), Ce(t.$$.fragment), H(t.$$.fragment, 1), Oe(t, r.parentNode, r)) : t = null
            } else f && t.$set(x)
        },
        i(d) {
            o || (t && H(t.$$.fragment, d), o = !0)
        },
        o(d) {
            t && ie(t.$$.fragment, d), o = !1
        },
        d(d) {
            d && P(r), t && Ee(t, d)
        }
    }
}

function un(e) {
    let t, r, o, c;
    const f = [fn, cn],
        h = [];

    function d(u, x) {
        return u[1] ? 0 : 1
    }
    return t = d(e), r = h[t] = f[t](e), {
        c() {
            r.c(), o = at()
        },
        m(u, x) {
            h[t].m(u, x), V(u, o, x), c = !0
        },
        p(u, [x]) {
            let m = t;
            t = d(u), t === m ? h[t].p(u, x) : (ze(), ie(h[m], 1, 1, () => {
                h[m] = null
            }), qe(), r = h[t], r ? r.p(u, x) : (r = h[t] = f[t](u), r.c()), H(r, 1), r.m(o.parentNode, o))
        },
        i(u) {
            c || (H(r), c = !0)
        },
        o(u) {
            ie(r), c = !1
        },
        d(u) {
            h[t].d(u), u && P(o)
        }
    }
}

function mt() {
    const e = window.location.href.indexOf("#/");
    let t = e > -1 ? window.location.href.substr(e + 1) : "/";
    const r = t.indexOf("?");
    let o = "";
    return r > -1 && (o = t.substr(r + 1), t = t.substr(0, r)), {
        location: t,
        querystring: o
    }
}
const ot = Gt(null, function(t) {
    t(mt());
    const r = () => {
        t(mt())
    };
    return window.addEventListener("hashchange", r, !1),
        function() {
            window.removeEventListener("hashchange", r, !1)
        }
});
Qt(ot, e => e.location);
Qt(ot, e => e.querystring);
const vt = Kt(void 0);
async function dn(e) {
    if (!e || e.length < 1 || e.charAt(0) != "/" && e.indexOf("#/") !== 0) throw Error("Invalid parameter location");
    await Dt();
    const t = (e.charAt(0) == "#" ? "" : "#") + e;
    try {
        const r = {
            ...history.state
        };
        delete r.__svelte_spa_router_scrollX, delete r.__svelte_spa_router_scrollY, window.history.replaceState(r, void 0, t)
    } catch {
        console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")
    }
    window.dispatchEvent(new Event("hashchange"))
}

function hn(e, t) {
    if (t = wt(t), !e || !e.tagName || e.tagName.toLowerCase() != "a") throw Error('Action "link" can only be used with <a> tags');
    return kt(e, t), {
        update(r) {
            r = wt(r), kt(e, r)
        }
    }
}

function kt(e, t) {
    let r = t.href || e.getAttribute("href");
    if (r && r.charAt(0) == "/") r = "#" + r;
    else if (!r || r.length < 2 || r.slice(0, 2) != "#/") throw Error('Invalid value for "href" attribute: ' + r);
    e.setAttribute("href", r), e.addEventListener("click", o => {
        o.preventDefault(), t.disabled || xn(o.currentTarget.getAttribute("href"))
    })
}

function wt(e) {
    return e && typeof e == "string" ? {
        href: e
    } : e || {}
}

function xn(e) {
    history.replaceState({
        ...history.state,
        __svelte_spa_router_scrollX: window.scrollX,
        __svelte_spa_router_scrollY: window.scrollY
    }, void 0, void 0), window.location.hash = e
}

function _n(e, t, r) {
    let {
        routes: o = {}
    } = t, {
        prefix: c = ""
    } = t, {
        restoreScrollState: f = !1
    } = t;
    class h {
        constructor(S, j) {
            if (!j || typeof j != "function" && (typeof j != "object" || j._sveltesparouter !== !0)) throw Error("Invalid component object");
            if (!S || typeof S == "string" && (S.length < 1 || S.charAt(0) != "/" && S.charAt(0) != "*") || typeof S == "object" && !(S instanceof RegExp)) throw Error('Invalid value for "path" argument - strings must start with / or *');
            const {
                pattern: U,
                keys: R
            } = on(S);
            this.path = S, typeof j == "object" && j._sveltesparouter === !0 ? (this.component = j.component, this.conditions = j.conditions || [], this.userData = j.userData, this.props = j.props || {}) : (this.component = () => Promise.resolve(j), this.conditions = [], this.props = {}), this._pattern = U, this._keys = R
        }
        match(S) {
            if (c) {
                if (typeof c == "string")
                    if (S.startsWith(c)) S = S.substr(c.length) || "/";
                    else return null;
                else if (c instanceof RegExp) {
                    const ne = S.match(c);
                    if (ne && ne[0]) S = S.substr(ne[0].length) || "/";
                    else return null
                }
            }
            const j = this._pattern.exec(S);
            if (j === null) return null;
            if (this._keys === !1) return j;
            const U = {};
            let R = 0;
            for (; R < this._keys.length;) {
                try {
                    U[this._keys[R]] = decodeURIComponent(j[R + 1] || "") || null
                } catch {
                    U[this._keys[R]] = null
                }
                R++
            }
            return U
        }
        async checkConditions(S) {
            for (let j = 0; j < this.conditions.length; j++)
                if (!await this.conditions[j](S)) return !1;
            return !0
        }
    }
    const d = [];
    o instanceof Map ? o.forEach((L, S) => {
        d.push(new h(S, L))
    }) : Object.keys(o).forEach(L => {
        d.push(new h(L, o[L]))
    });
    let u = null,
        x = null,
        m = {};
    const g = sn();
    async function y(L, S) {
        await Dt(), g(L, S)
    }
    let p = null,
        C = null;
    f && (C = L => {
        L.state && L.state.__svelte_spa_router_scrollY ? p = L.state : p = null
    }, window.addEventListener("popstate", C), nn(() => {
        p ? window.scrollTo(p.__svelte_spa_router_scrollX, p.__svelte_spa_router_scrollY) : window.scrollTo(0, 0)
    }));
    let N = null,
        $ = null;
    const X = ot.subscribe(async L => {
        N = L;
        let S = 0;
        for (; S < d.length;) {
            const j = d[S].match(L.location);
            if (!j) {
                S++;
                continue
            }
            const U = {
                route: d[S].path,
                location: L.location,
                querystring: L.querystring,
                userData: d[S].userData,
                params: j && typeof j == "object" && Object.keys(j).length ? j : null
            };
            if (!await d[S].checkConditions(U)) {
                r(0, u = null), $ = null, y("conditionsFailed", U);
                return
            }
            y("routeLoading", Object.assign({}, U));
            const R = d[S].component;
            if ($ != R) {
                R.loading ? (r(0, u = R.loading), $ = R, r(1, x = R.loadingParams), r(2, m = {}), y("routeLoaded", Object.assign({}, U, {
                    component: u,
                    name: u.name,
                    params: x
                }))) : (r(0, u = null), $ = null);
                const ne = await R();
                if (L != N) return;
                r(0, u = ne && ne.default || ne), $ = R
            }
            j && typeof j == "object" && Object.keys(j).length ? r(1, x = j) : r(1, x = null), r(2, m = d[S].props), y("routeLoaded", Object.assign({}, U, {
                component: u,
                name: u.name,
                params: x
            })).then(() => {
                vt.set(x)
            });
            return
        }
        r(0, u = null), $ = null, vt.set(void 0)
    });
    rn(() => {
        X(), C && window.removeEventListener("popstate", C)
    });

    function he(L) {
        pt.call(this, e, L)
    }

    function fe(L) {
        pt.call(this, e, L)
    }
    return e.$$set = L => {
        "routes" in L && r(3, o = L.routes), "prefix" in L && r(4, c = L.prefix), "restoreScrollState" in L && r(5, f = L.restoreScrollState)
    }, e.$$.update = () => {
        e.$$.dirty & 32 && (history.scrollRestoration = f ? "manual" : "auto")
    }, [u, x, m, o, c, f, he, fe]
}
class pn extends Pe {
    constructor(t) {
        super(), Te(this, t, _n, un, Ne, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
        })
    }
}
var gn = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
    Jt = {
        exports: {}
    };
(function(e, t) {
    (function(r, o) {
        e.exports = o()
    })(gn, function() {
        var r = function() {},
            o = Object.prototype.hasOwnProperty,
            c = Array.prototype.slice;

        function f(i, n) {
            var s;
            return typeof Object.create == "function" ? s = Object.create(i) : (r.prototype = i, s = new r, r.prototype = null), n && d(!0, s, n), s
        }

        function h(i, n, s, l) {
            var a = this;
            return typeof i != "string" && (l = s, s = n, n = i, i = null), typeof n != "function" && (l = s, s = n, n = function() {
                return a.apply(this, arguments)
            }), d(!1, n, a, l), n.prototype = f(a.prototype, s), n.prototype.constructor = n, n.class_ = i || a.class_, n.super_ = a, n
        }

        function d(i, n, s) {
            s = c.call(arguments, 2);
            for (var l, a, _ = 0, b = s.length; _ < b; _++) {
                a = s[_];
                for (l in a)(!i || o.call(a, l)) && (n[l] = a[l])
            }
        }
        var u = h;

        function x() {}
        x.class_ = "Nevis", x.super_ = Object, x.extend = u;
        var m = x,
            g = m,
            y = g.extend(function(i, n, s) {
                this.qrious = i, this.element = n, this.element.qrious = i, this.enabled = Boolean(s)
            }, {
                draw: function(i) {},
                getElement: function() {
                    return this.enabled || (this.enabled = !0, this.render()), this.element
                },
                getModuleSize: function(i) {
                    var n = this.qrious,
                        s = n.padding || 0,
                        l = Math.floor((n.size - s * 2) / i.width);
                    return Math.max(1, l)
                },
                getOffset: function(i) {
                    var n = this.qrious,
                        s = n.padding;
                    if (s != null) return s;
                    var l = this.getModuleSize(i),
                        a = Math.floor((n.size - l * i.width) / 2);
                    return Math.max(0, a)
                },
                render: function(i) {
                    this.enabled && (this.resize(), this.reset(), this.draw(i))
                },
                reset: function() {},
                resize: function() {}
            }),
            p = y,
            C = p.extend({
                draw: function(i) {
                    var n, s, l = this.qrious,
                        a = this.getModuleSize(i),
                        _ = this.getOffset(i),
                        b = this.element.getContext("2d");
                    for (b.fillStyle = l.foreground, b.globalAlpha = l.foregroundAlpha, n = 0; n < i.width; n++)
                        for (s = 0; s < i.width; s++) i.buffer[s * i.width + n] && b.fillRect(a * n + _, a * s + _, a, a)
                },
                reset: function() {
                    var i = this.qrious,
                        n = this.element.getContext("2d"),
                        s = i.size;
                    n.lineWidth = 1, n.clearRect(0, 0, s, s), n.fillStyle = i.background, n.globalAlpha = i.backgroundAlpha, n.fillRect(0, 0, s, s)
                },
                resize: function() {
                    var i = this.element;
                    i.width = i.height = this.qrious.size
                }
            }),
            N = C,
            $ = g.extend(null, {
                BLOCK: [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28]
            }),
            X = $,
            he = g.extend(null, {
                BLOCKS: [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30],
                FINAL_FORMAT: [30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107],
                LEVELS: {
                    L: 1,
                    M: 2,
                    Q: 3,
                    H: 4
                }
            }),
            fe = he,
            L = g.extend(null, {
                EXPONENT: [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0],
                LOG: [255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175]
            }),
            S = L,
            j = g.extend(null, {
                BLOCK: [3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177]
            }),
            U = j,
            R = g.extend(function(i) {
                var n, s, l, a, _, b = i.value.length;
                for (this._badness = [], this._level = fe.LEVELS[i.level], this._polynomial = [], this._value = i.value, this._version = 0, this._stringBuffer = []; this._version < 40 && (this._version++, l = (this._level - 1) * 4 + (this._version - 1) * 16, a = fe.BLOCKS[l++], _ = fe.BLOCKS[l++], n = fe.BLOCKS[l++], s = fe.BLOCKS[l], l = n * (a + _) + _ - 3 + (this._version <= 9), !(b <= l)););
                this._dataBlock = n, this._eccBlock = s, this._neccBlock1 = a, this._neccBlock2 = _;
                var E = this.width = 17 + 4 * this._version;
                this.buffer = R._createArray(E * E), this._ecc = R._createArray(n + (n + s) * (a + _) + _), this._mask = R._createArray((E * (E + 1) + 1) / 2), this._insertFinders(), this._insertAlignments(), this.buffer[8 + E * (E - 8)] = 1, this._insertTimingGap(), this._reverseMask(), this._insertTimingRowAndColumn(), this._insertVersion(), this._syncMask(), this._convertBitStream(b), this._calculatePolynomial(), this._appendEccToData(), this._interleaveBlocks(), this._pack(), this._finish()
            }, {
                _addAlignment: function(i, n) {
                    var s, l = this.buffer,
                        a = this.width;
                    for (l[i + a * n] = 1, s = -2; s < 2; s++) l[i + s + a * (n - 2)] = 1, l[i - 2 + a * (n + s + 1)] = 1, l[i + 2 + a * (n + s)] = 1, l[i + s + 1 + a * (n + 2)] = 1;
                    for (s = 0; s < 2; s++) this._setMask(i - 1, n + s), this._setMask(i + 1, n - s), this._setMask(i - s, n - 1), this._setMask(i + s, n + 1)
                },
                _appendData: function(i, n, s, l) {
                    var a, _, b, E = this._polynomial,
                        A = this._stringBuffer;
                    for (_ = 0; _ < l; _++) A[s + _] = 0;
                    for (_ = 0; _ < n; _++) {
                        if (a = S.LOG[A[i + _] ^ A[s]], a !== 255)
                            for (b = 1; b < l; b++) A[s + b - 1] = A[s + b] ^ S.EXPONENT[R._modN(a + E[l - b])];
                        else
                            for (b = s; b < s + l; b++) A[b] = A[b + 1];
                        A[s + l - 1] = a === 255 ? 0 : S.EXPONENT[R._modN(a + E[0])]
                    }
                },
                _appendEccToData: function() {
                    var i, n = 0,
                        s = this._dataBlock,
                        l = this._calculateMaxLength(),
                        a = this._eccBlock;
                    for (i = 0; i < this._neccBlock1; i++) this._appendData(n, s, l, a), n += s, l += a;
                    for (i = 0; i < this._neccBlock2; i++) this._appendData(n, s + 1, l, a), n += s + 1, l += a
                },
                _applyMask: function(i) {
                    var n, s, l, a, _ = this.buffer,
                        b = this.width;
                    switch (i) {
                        case 0:
                            for (a = 0; a < b; a++)
                                for (l = 0; l < b; l++) !(l + a & 1) && !this._isMasked(l, a) && (_[l + a * b] ^= 1);
                            break;
                        case 1:
                            for (a = 0; a < b; a++)
                                for (l = 0; l < b; l++) !(a & 1) && !this._isMasked(l, a) && (_[l + a * b] ^= 1);
                            break;
                        case 2:
                            for (a = 0; a < b; a++)
                                for (n = 0, l = 0; l < b; l++, n++) n === 3 && (n = 0), !n && !this._isMasked(l, a) && (_[l + a * b] ^= 1);
                            break;
                        case 3:
                            for (s = 0, a = 0; a < b; a++, s++)
                                for (s === 3 && (s = 0), n = s, l = 0; l < b; l++, n++) n === 3 && (n = 0), !n && !this._isMasked(l, a) && (_[l + a * b] ^= 1);
                            break;
                        case 4:
                            for (a = 0; a < b; a++)
                                for (n = 0, s = a >> 1 & 1, l = 0; l < b; l++, n++) n === 3 && (n = 0, s = !s), !s && !this._isMasked(l, a) && (_[l + a * b] ^= 1);
                            break;
                        case 5:
                            for (s = 0, a = 0; a < b; a++, s++)
                                for (s === 3 && (s = 0), n = 0, l = 0; l < b; l++, n++) n === 3 && (n = 0), !((l & a & 1) + !(!n | !s)) && !this._isMasked(l, a) && (_[l + a * b] ^= 1);
                            break;
                        case 6:
                            for (s = 0, a = 0; a < b; a++, s++)
                                for (s === 3 && (s = 0), n = 0, l = 0; l < b; l++, n++) n === 3 && (n = 0), !((l & a & 1) + (n && n === s) & 1) && !this._isMasked(l, a) && (_[l + a * b] ^= 1);
                            break;
                        case 7:
                            for (s = 0, a = 0; a < b; a++, s++)
                                for (s === 3 && (s = 0), n = 0, l = 0; l < b; l++, n++) n === 3 && (n = 0), !((n && n === s) + (l + a & 1) & 1) && !this._isMasked(l, a) && (_[l + a * b] ^= 1);
                            break
                    }
                },
                _calculateMaxLength: function() {
                    return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2
                },
                _calculatePolynomial: function() {
                    var i, n, s = this._eccBlock,
                        l = this._polynomial;
                    for (l[0] = 1, i = 0; i < s; i++) {
                        for (l[i + 1] = 1, n = i; n > 0; n--) l[n] = l[n] ? l[n - 1] ^ S.EXPONENT[R._modN(S.LOG[l[n]] + i)] : l[n - 1];
                        l[0] = S.EXPONENT[R._modN(S.LOG[l[0]] + i)]
                    }
                    for (i = 0; i <= s; i++) l[i] = S.LOG[l[i]]
                },
                _checkBadness: function() {
                    var i, n, s, l, a, _ = 0,
                        b = this._badness,
                        E = this.buffer,
                        A = this.width;
                    for (a = 0; a < A - 1; a++)
                        for (l = 0; l < A - 1; l++)(E[l + A * a] && E[l + 1 + A * a] && E[l + A * (a + 1)] && E[l + 1 + A * (a + 1)] || !(E[l + A * a] || E[l + 1 + A * a] || E[l + A * (a + 1)] || E[l + 1 + A * (a + 1)])) && (_ += R.N2);
                    var ue = 0;
                    for (a = 0; a < A; a++) {
                        for (s = 0, b[0] = 0, i = 0, l = 0; l < A; l++) n = E[l + A * a], i === n ? b[s]++ : b[++s] = 1, i = n, ue += i ? 1 : -1;
                        _ += this._getBadness(s)
                    }
                    ue < 0 && (ue = -ue);
                    var we = 0,
                        de = ue;
                    for (de += de << 2, de <<= 1; de > A * A;) de -= A * A, we++;
                    for (_ += we * R.N4, l = 0; l < A; l++) {
                        for (s = 0, b[0] = 0, i = 0, a = 0; a < A; a++) n = E[l + A * a], i === n ? b[s]++ : b[++s] = 1, i = n;
                        _ += this._getBadness(s)
                    }
                    return _
                },
                _convertBitStream: function(i) {
                    var n, s, l = this._ecc,
                        a = this._version;
                    for (s = 0; s < i; s++) l[s] = this._value.charCodeAt(s);
                    var _ = this._stringBuffer = l.slice(),
                        b = this._calculateMaxLength();
                    i >= b - 2 && (i = b - 2, a > 9 && i--);
                    var E = i;
                    if (a > 9) {
                        for (_[E + 2] = 0, _[E + 3] = 0; E--;) n = _[E], _[E + 3] |= 255 & n << 4, _[E + 2] = n >> 4;
                        _[2] |= 255 & i << 4, _[1] = i >> 4, _[0] = 64 | i >> 12
                    } else {
                        for (_[E + 1] = 0, _[E + 2] = 0; E--;) n = _[E], _[E + 2] |= 255 & n << 4, _[E + 1] = n >> 4;
                        _[1] |= 255 & i << 4, _[0] = 64 | i >> 4
                    }
                    for (E = i + 3 - (a < 10); E < b;) _[E++] = 236, _[E++] = 17
                },
                _getBadness: function(i) {
                    var n, s = 0,
                        l = this._badness;
                    for (n = 0; n <= i; n++) l[n] >= 5 && (s += R.N1 + l[n] - 5);
                    for (n = 3; n < i - 1; n += 2) l[n - 2] === l[n + 2] && l[n + 2] === l[n - 1] && l[n - 1] === l[n + 1] && l[n - 1] * 3 === l[n] && (l[n - 3] === 0 || n + 3 > i || l[n - 3] * 3 >= l[n] * 4 || l[n + 3] * 3 >= l[n] * 4) && (s += R.N3);
                    return s
                },
                _finish: function() {
                    this._stringBuffer = this.buffer.slice();
                    var i, n, s = 0,
                        l = 3e4;
                    for (n = 0; n < 8 && (this._applyMask(n), i = this._checkBadness(), i < l && (l = i, s = n), s !== 7); n++) this.buffer = this._stringBuffer.slice();
                    s !== n && this._applyMask(s), l = fe.FINAL_FORMAT[s + (this._level - 1 << 3)];
                    var a = this.buffer,
                        _ = this.width;
                    for (n = 0; n < 8; n++, l >>= 1) l & 1 && (a[_ - 1 - n + _ * 8] = 1, n < 6 ? a[8 + _ * n] = 1 : a[8 + _ * (n + 1)] = 1);
                    for (n = 0; n < 7; n++, l >>= 1) l & 1 && (a[8 + _ * (_ - 7 + n)] = 1, n ? a[6 - n + _ * 8] = 1 : a[7 + _ * 8] = 1)
                },
                _interleaveBlocks: function() {
                    var i, n, s = this._dataBlock,
                        l = this._ecc,
                        a = this._eccBlock,
                        _ = 0,
                        b = this._calculateMaxLength(),
                        E = this._neccBlock1,
                        A = this._neccBlock2,
                        ue = this._stringBuffer;
                    for (i = 0; i < s; i++) {
                        for (n = 0; n < E; n++) l[_++] = ue[i + n * s];
                        for (n = 0; n < A; n++) l[_++] = ue[E * s + i + n * (s + 1)]
                    }
                    for (n = 0; n < A; n++) l[_++] = ue[E * s + i + n * (s + 1)];
                    for (i = 0; i < a; i++)
                        for (n = 0; n < E + A; n++) l[_++] = ue[b + i + n * a];
                    this._stringBuffer = l
                },
                _insertAlignments: function() {
                    var i, n, s, l = this._version,
                        a = this.width;
                    if (l > 1)
                        for (i = X.BLOCK[l], s = a - 7;;) {
                            for (n = a - 7; n > i - 3 && (this._addAlignment(n, s), !(n < i));) n -= i;
                            if (s <= i + 9) break;
                            s -= i, this._addAlignment(6, s), this._addAlignment(s, 6)
                        }
                },
                _insertFinders: function() {
                    var i, n, s, l, a = this.buffer,
                        _ = this.width;
                    for (i = 0; i < 3; i++) {
                        for (n = 0, l = 0, i === 1 && (n = _ - 7), i === 2 && (l = _ - 7), a[l + 3 + _ * (n + 3)] = 1, s = 0; s < 6; s++) a[l + s + _ * n] = 1, a[l + _ * (n + s + 1)] = 1, a[l + 6 + _ * (n + s)] = 1, a[l + s + 1 + _ * (n + 6)] = 1;
                        for (s = 1; s < 5; s++) this._setMask(l + s, n + 1), this._setMask(l + 1, n + s + 1), this._setMask(l + 5, n + s), this._setMask(l + s + 1, n + 5);
                        for (s = 2; s < 4; s++) a[l + s + _ * (n + 2)] = 1, a[l + 2 + _ * (n + s + 1)] = 1, a[l + 4 + _ * (n + s)] = 1, a[l + s + 1 + _ * (n + 4)] = 1
                    }
                },
                _insertTimingGap: function() {
                    var i, n, s = this.width;
                    for (n = 0; n < 7; n++) this._setMask(7, n), this._setMask(s - 8, n), this._setMask(7, n + s - 7);
                    for (i = 0; i < 8; i++) this._setMask(i, 7), this._setMask(i + s - 8, 7), this._setMask(i, s - 8)
                },
                _insertTimingRowAndColumn: function() {
                    var i, n = this.buffer,
                        s = this.width;
                    for (i = 0; i < s - 14; i++) i & 1 ? (this._setMask(8 + i, 6), this._setMask(6, 8 + i)) : (n[8 + i + s * 6] = 1, n[6 + s * (8 + i)] = 1)
                },
                _insertVersion: function() {
                    var i, n, s, l, a = this.buffer,
                        _ = this._version,
                        b = this.width;
                    if (_ > 6)
                        for (i = U.BLOCK[_ - 7], n = 17, s = 0; s < 6; s++)
                            for (l = 0; l < 3; l++, n--) 1 & (n > 11 ? _ >> n - 12 : i >> n) ? (a[5 - s + b * (2 - l + b - 11)] = 1, a[2 - l + b - 11 + b * (5 - s)] = 1) : (this._setMask(5 - s, 2 - l + b - 11), this._setMask(2 - l + b - 11, 5 - s))
                },
                _isMasked: function(i, n) {
                    var s = R._getMaskBit(i, n);
                    return this._mask[s] === 1
                },
                _pack: function() {
                    var i, n, s, l = 1,
                        a = 1,
                        _ = this.width,
                        b = _ - 1,
                        E = _ - 1,
                        A = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
                    for (n = 0; n < A; n++)
                        for (i = this._stringBuffer[n], s = 0; s < 8; s++, i <<= 1) {
                            128 & i && (this.buffer[b + _ * E] = 1);
                            do a ? b-- : (b++, l ? E !== 0 ? E-- : (b -= 2, l = !l, b === 6 && (b--, E = 9)) : E !== _ - 1 ? E++ : (b -= 2, l = !l, b === 6 && (b--, E -= 8))), a = !a; while (this._isMasked(b, E))
                        }
                },
                _reverseMask: function() {
                    var i, n, s = this.width;
                    for (i = 0; i < 9; i++) this._setMask(i, 8);
                    for (i = 0; i < 8; i++) this._setMask(i + s - 8, 8), this._setMask(8, i);
                    for (n = 0; n < 7; n++) this._setMask(8, n + s - 7)
                },
                _setMask: function(i, n) {
                    var s = R._getMaskBit(i, n);
                    this._mask[s] = 1
                },
                _syncMask: function() {
                    var i, n, s = this.width;
                    for (n = 0; n < s; n++)
                        for (i = 0; i <= n; i++) this.buffer[i + s * n] && this._setMask(i, n)
                }
            }, {
                _createArray: function(i) {
                    var n, s = [];
                    for (n = 0; n < i; n++) s[n] = 0;
                    return s
                },
                _getMaskBit: function(i, n) {
                    var s;
                    return i > n && (s = i, i = n, n = s), s = n, s += n * n, s >>= 1, s += i, s
                },
                _modN: function(i) {
                    for (; i >= 255;) i -= 255, i = (i >> 8) + (i & 255);
                    return i
                },
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            }),
            ne = R,
            pe = p.extend({
                draw: function() {
                    this.element.src = this.qrious.toDataURL()
                },
                reset: function() {
                    this.element.src = ""
                },
                resize: function() {
                    var i = this.element;
                    i.width = i.height = this.qrious.size
                }
            }),
            K = pe,
            ke = g.extend(function(i, n, s, l) {
                this.name = i, this.modifiable = Boolean(n), this.defaultValue = s, this._valueTransformer = l
            }, {
                transform: function(i) {
                    var n = this._valueTransformer;
                    return typeof n == "function" ? n(i, this) : i
                }
            }),
            re = ke,
            ge = g.extend(null, {
                abs: function(i) {
                    return i != null ? Math.abs(i) : null
                },
                hasOwn: function(i, n) {
                    return Object.prototype.hasOwnProperty.call(i, n)
                },
                noop: function() {},
                toUpperCase: function(i) {
                    return i != null ? i.toUpperCase() : null
                }
            }),
            se = ge,
            ee = g.extend(function(i) {
                this.options = {}, i.forEach(function(n) {
                    this.options[n.name] = n
                }, this)
            }, {
                exists: function(i) {
                    return this.options[i] != null
                },
                get: function(i, n) {
                    return ee._get(this.options[i], n)
                },
                getAll: function(i) {
                    var n, s = this.options,
                        l = {};
                    for (n in s) se.hasOwn(s, n) && (l[n] = ee._get(s[n], i));
                    return l
                },
                init: function(i, n, s) {
                    typeof s != "function" && (s = se.noop);
                    var l, a;
                    for (l in this.options) se.hasOwn(this.options, l) && (a = this.options[l], ee._set(a, a.defaultValue, n), ee._createAccessor(a, n, s));
                    this._setAll(i, n, !0)
                },
                set: function(i, n, s) {
                    return this._set(i, n, s)
                },
                setAll: function(i, n) {
                    return this._setAll(i, n)
                },
                _set: function(i, n, s, l) {
                    var a = this.options[i];
                    if (!a) throw new Error("Invalid option: " + i);
                    if (!a.modifiable && !l) throw new Error("Option cannot be modified: " + i);
                    return ee._set(a, n, s)
                },
                _setAll: function(i, n, s) {
                    if (!i) return !1;
                    var l, a = !1;
                    for (l in i) se.hasOwn(i, l) && this._set(l, i[l], n, s) && (a = !0);
                    return a
                }
            }, {
                _createAccessor: function(i, n, s) {
                    var l = {
                        get: function() {
                            return ee._get(i, n)
                        }
                    };
                    i.modifiable && (l.set = function(a) {
                        ee._set(i, a, n) && s(a, i)
                    }), Object.defineProperty(n, i.name, l)
                },
                _get: function(i, n) {
                    return n["_" + i.name]
                },
                _set: function(i, n, s) {
                    var l = "_" + i.name,
                        a = s[l],
                        _ = i.transform(n != null ? n : i.defaultValue);
                    return s[l] = _, _ !== a
                }
            }),
            Y = ee,
            O = g.extend(function() {
                this._services = {}
            }, {
                getService: function(i) {
                    var n = this._services[i];
                    if (!n) throw new Error("Service is not being managed with name: " + i);
                    return n
                },
                setService: function(i, n) {
                    if (this._services[i]) throw new Error("Service is already managed with name: " + i);
                    n && (this._services[i] = n)
                }
            }),
            z = O,
            J = new Y([new re("background", !0, "white"), new re("backgroundAlpha", !0, 1, se.abs), new re("element"), new re("foreground", !0, "black"), new re("foregroundAlpha", !0, 1, se.abs), new re("level", !0, "L", se.toUpperCase), new re("mime", !0, "image/png"), new re("padding", !0, null, se.abs), new re("size", !0, 100, se.abs), new re("value", !0, "")]),
            D = new z,
            T = g.extend(function(i) {
                J.init(i, this, this.update.bind(this));
                var n = J.get("element", this),
                    s = D.getService("element"),
                    l = n && s.isCanvas(n) ? n : s.createCanvas(),
                    a = n && s.isImage(n) ? n : s.createImage();
                this._canvasRenderer = new N(this, l, !0), this._imageRenderer = new K(this, a, a === n), this.update()
            }, {
                get: function() {
                    return J.getAll(this)
                },
                set: function(i) {
                    J.setAll(i, this) && this.update()
                },
                toDataURL: function(i) {
                    return this.canvas.toDataURL(i || this.mime)
                },
                update: function() {
                    var i = new ne({
                        level: this.level,
                        value: this.value
                    });
                    this._canvasRenderer.render(i), this._imageRenderer.render(i)
                }
            }, {
                use: function(i) {
                    D.setService(i.getName(), i)
                }
            });
        Object.defineProperties(T.prototype, {
            canvas: {
                get: function() {
                    return this._canvasRenderer.getElement()
                }
            },
            image: {
                get: function() {
                    return this._imageRenderer.getElement()
                }
            }
        });
        var F = T,
            G = F,
            xe = g.extend({
                getName: function() {}
            }),
            _e = xe,
            be = _e.extend({
                createCanvas: function() {},
                createImage: function() {},
                getName: function() {
                    return "element"
                },
                isCanvas: function(i) {},
                isImage: function(i) {}
            }),
            te = be,
            me = te.extend({
                createCanvas: function() {
                    return document.createElement("canvas")
                },
                createImage: function() {
                    return document.createElement("img")
                },
                isCanvas: function(i) {
                    return i instanceof HTMLCanvasElement
                },
                isImage: function(i) {
                    return i instanceof HTMLImageElement
                }
            }),
            De = me;
        G.use(new De);
        var Qe = G;
        return Qe
    })
})(Jt);
var bn = Jt.exports;

function mn(e) {
    let t, r;
    return {
        c() {
            t = M("img"), ht(t.src, r = e[2]) || k(t, "src", r), k(t, "alt", e[0]), k(t, "class", e[1])
        },
        m(o, c) {
            V(o, t, c)
        },
        p(o, [c]) {
            c & 4 && !ht(t.src, r = o[2]) && k(t, "src", r), c & 1 && k(t, "alt", o[0]), c & 2 && k(t, "class", o[1])
        },
        i: Z,
        o: Z,
        d(o) {
            o && P(t)
        }
    }
}

function vn(e, t, r) {
    const o = new bn;
    let {
        errorCorrection: c = "M"
    } = t, {
        background: f = "#fff"
    } = t, {
        color: h = "#000"
    } = t, {
        size: d = "200"
    } = t, {
        value: u = ""
    } = t, {
        padding: x = 0
    } = t, {
        className: m = "qrcode block"
    } = t, g = "";

    function y() {
        o.set({
            background: f,
            foreground: h,
            level: c,
            padding: x,
            size: d,
            value: u
        }), r(2, g = o.toDataURL("image/jpeg"))
    }
    return tn(() => {
        y()
    }), e.$$set = p => {
        "errorCorrection" in p && r(3, c = p.errorCorrection), "background" in p && r(4, f = p.background), "color" in p && r(5, h = p.color), "size" in p && r(6, d = p.size), "value" in p && r(0, u = p.value), "padding" in p && r(7, x = p.padding), "className" in p && r(1, m = p.className)
    }, e.$$.update = () => {
        e.$$.dirty & 1 && u && y()
    }, [u, m, g, c, f, h, d, x]
}
class kn extends Pe {
    constructor(t) {
        super(), Te(this, t, vn, mn, Ne, {
            errorCorrection: 3,
            background: 4,
            color: 5,
            size: 6,
            value: 0,
            padding: 7,
            className: 1
        })
    }
}

function wn(e) {
    let t, r;
    return {
        c() {
            t = xt("svg"), r = xt("path"), k(r, "d", "M455.850667 796.785778h-46.762667a284.785778 284.785778 0 0 1-238.193778-280.689778c0-47.274667 12.117333-91.534222 32.654222-130.787556l34.872889 48.355556a51.768889 51.768889 0 0 0 91.818667-16.440889l66.104889-237.738667a51.768889 51.768889 0 0 0-49.891556-65.649777l-237.454222 0.341333A51.768889 51.768889 0 0 0 67.128889 196.266667l64.170667 88.974222a396.117333 396.117333 0 0 0-74.069334 230.912 398.222222 398.222222 0 0 0 336.668445 393.500444c5.176889 0.796444 10.24 0.568889 15.189333-0.056889v0.682667h46.762667A56.149333 56.149333 0 0 0 512 854.129778v-1.137778a56.149333 56.149333 0 0 0-56.149333-56.149333zM956.871111 827.790222l-64.227555-88.974222a395.719111 395.719111 0 0 0 74.069333-230.912 398.279111 398.279111 0 0 0-336.668445-393.557333 54.328889 54.328889 0 0 0-15.189333 0.056889v-0.739556h-46.762667A56.092444 56.092444 0 0 0 512 169.813333v1.137778c0 31.061333 25.144889 56.206222 56.092444 56.206222h46.762667a284.785778 284.785778 0 0 1 238.193778 280.689778c0 47.274667-12.117333 91.534222-32.597333 130.787556l-34.929778-48.355556a51.712 51.712 0 0 0-91.761778 16.440889l-66.161778 237.738667a51.768889 51.768889 0 0 0 49.948445 65.649777l237.454222-0.341333a51.768889 51.768889 0 0 0 41.870222-82.090667z"), k(r, "fill", e[0]), k(r, "p-id", "3100"), k(t, "class", "icon"), k(t, "viewBox", "0 0 1024 1024"), k(t, "version", "1.1"), k(t, "xmlns", "http://www.w3.org/2000/svg"), k(t, "p-id", "3099"), k(t, "width", "16"), k(t, "height", "16")
        },
        m(o, c) {
            V(o, t, c), v(t, r)
        },
        p: Z,
        i: Z,
        o: Z,
        d(o) {
            o && P(t)
        }
    }
}

function yn(e, t, r) {
    return ["#6b7280"]
}
class Sn extends Pe {
    constructor(t) {
        super(), Te(this, t, yn, wn, Ne, {
            color: 0
        })
    }
    get color() {
        return this.$$.ctx[0]
    }
}

function yt(e, t, r) {
    const o = e.slice();
    return o[31] = t[r], o[33] = r, o
}

function St(e, t, r) {
    const o = e.slice();
    return o[34] = t[r], o[36] = r, o
}

function Ot(e, t, r) {
    const o = e.slice();
    return o[37] = t[r], o[33] = r, o
}

function Et(e, t, r) {
    const o = e.slice();
    return o[39] = t[r], o[33] = r, o
}

function Mt(e) {
    let t, r, o, c, f, h, d = e[39] + "",
        u, x, m, g, y;
    return {
        c() {
            t = M("span"), r = M("input"), f = I(), h = M("label"), u = ce(d), m = I(), k(r, "id", o = `range${e[33]}`), k(r, "class", "peer"), k(r, "type", "radio"), r.__value = c = e[39], r.value = r.__value, e[15][1].push(r), k(h, "for", x = `range${e[33]}`), k(h, "class", "peer-checked:text-sky-500 peer-checked:font-bold")
        },
        m(p, C) {
            V(p, t, C), v(t, r), r.checked = r.__value === e[1], v(t, f), v(t, h), v(h, u), v(t, m), g || (y = oe(r, "change", e[14]), g = !0)
        },
        p(p, C) {
            C[0] & 2 && (r.checked = r.__value === p[1])
        },
        d(p) {
            p && P(t), e[15][1].splice(e[15][1].indexOf(r), 1), g = !1, y()
        }
    }
}

function Bt(e) {
    let t, r, o, c, f, h, d = e[8][e[37]] + "",
        u, x, m, g, y;
    return {
        c() {
            t = M("span"), r = M("input"), f = I(), h = M("label"), u = ce(d), m = I(), k(r, "id", o = `method${e[33]}`), k(r, "class", "peer"), k(r, "type", "radio"), r.__value = c = e[37], r.value = r.__value, e[15][2].push(r), k(h, "for", x = `method${e[33]}`), k(h, "class", "peer-checked:text-sky-500 peer-checked:font-bold")
        },
        m(p, C) {
            V(p, t, C), v(t, r), r.checked = r.__value === e[0], v(t, f), v(t, h), v(h, u), v(t, m), g || (y = oe(r, "change", e[16]), g = !0)
        },
        p(p, C) {
            C[0] & 1 && (r.checked = r.__value === p[0])
        },
        d(p) {
            p && P(t), e[15][2].splice(e[15][2].indexOf(r), 1), g = !1, y()
        }
    }
}

function Ct(e) {
    let t = (e[34] !== "cloze" ? e[34] : e[7] ? `(${e[31].result})` : "(___)") + "",
        r, o = e[31].methods[e[36]] !== void 0 ? e[9][e[31].methods[e[36]]] + "" : "",
        c;
    return {
        c() {
            r = ce(t), c = ce(o)
        },
        m(f, h) {
            V(f, r, h), V(f, c, h)
        },
        p(f, h) {
            h[0] & 192 && t !== (t = (f[34] !== "cloze" ? f[34] : f[7] ? `(${f[31].result})` : "(___)") + "") && $e(r, t), h[0] & 64 && o !== (o = f[31].methods[f[36]] !== void 0 ? f[9][f[31].methods[f[36]]] + "" : "") && $e(c, o)
        },
        d(f) {
            f && P(r), f && P(c)
        }
    }
}

function At(e) {
    let t, r, o, c, f;
    r = new Sn({});

    function h() {
        return e[24](e[33])
    }
    return {
        c() {
            t = M("span"), Ce(r.$$.fragment), k(t, "class", "invisible cursor-pointer text-xs group-hover:visible print:hidden ml-2"), k(t, "title", "\u91CD\u65B0\u751F\u6210\u672C\u9898")
        },
        m(d, u) {
            V(d, t, u), Oe(r, t, null), o = !0, c || (f = oe(t, "click", h), c = !0)
        },
        p(d, u) {
            e = d
        },
        i(d) {
            o || (H(r.$$.fragment, d), o = !0)
        },
        o(d) {
            ie(r.$$.fragment, d), o = !1
        },
        d(d) {
            d && P(t), Ee(r), c = !1, f()
        }
    }
}

function Nt(e) {
    let t, r, o = (e[33] + 1).toString().padStart(2, "0") + "",
        c, f, h, d, u, x, m = e[31].numbers,
        g = [];
    for (let p = 0; p < m.length; p += 1) g[p] = Ct(St(e, m, p));
    let y = !(e[1] === 10 && e[0] === "add") && At(e);
    return {
        c() {
            t = M("div"), r = M("span"), c = ce(o), f = ce("."), h = I();
            for (let p = 0; p < g.length; p += 1) g[p].c();
            d = I(), y && y.c(), u = I(), k(r, "class", "text-xs text-gray-400 mr-2"), k(t, "class", "flex items-center mb-6.5 group")
        },
        m(p, C) {
            V(p, t, C), v(t, r), v(r, c), v(r, f), v(t, h);
            for (let N = 0; N < g.length; N += 1) g[N].m(t, null);
            v(t, d), y && y.m(t, null), v(t, u), x = !0
        },
        p(p, C) {
            if (C[0] & 704) {
                m = p[31].numbers;
                let N;
                for (N = 0; N < m.length; N += 1) {
                    const $ = St(p, m, N);
                    g[N] ? g[N].p($, C) : (g[N] = Ct($), g[N].c(), g[N].m(t, d))
                }
                for (; N < g.length; N += 1) g[N].d(1);
                g.length = m.length
            }
            p[1] === 10 && p[0] === "add" ? y && (ze(), ie(y, 1, 1, () => {
                y = null
            }), qe()) : y ? (y.p(p, C), C[0] & 3 && H(y, 1)) : (y = At(p), y.c(), H(y, 1), y.m(t, u))
        },
        i(p) {
            x || (H(y), x = !0)
        },
        o(p) {
            ie(y), x = !1
        },
        d(p) {
            p && P(t), Ue(g, p), y && y.d()
        }
    }
}

function Lt(e) {
    let t, r, o, c, f, h;
    return f = new kn({
        props: {
            value: e[5],
            size: "100"
        }
    }), {
        c() {
            t = M("div"), r = M("div"), o = M("div"), o.textContent = "\u626B\u4E00\u626B \u67E5\u7B54\u6848 \xA0", c = I(), Ce(f.$$.fragment), k(r, "class", "flex items-center absolute right-0 bottom-0")
        },
        m(d, u) {
            V(d, t, u), v(t, r), v(r, o), v(r, c), Oe(f, r, null), h = !0
        },
        p(d, u) {
            const x = {};
            u[0] & 32 && (x.value = d[5]), f.$set(x)
        },
        i(d) {
            h || (H(f.$$.fragment, d), h = !0)
        },
        o(d) {
            ie(f.$$.fragment, d), h = !1
        },
        d(d) {
            d && P(t), Ee(f)
        }
    }
}

function On(e) {
    let t, r, o, c, f, h, d, u, x, m, g, y, p, C, N, $, X, he, fe, L, S, j, U, R, ne, pe, K, ke, re, ge, se, ee, Y, O, z, J, D, T, F, G, xe, _e, be, te, me, De, Qe, i, n, s, l, a, _, b, E, A, ue, we, de, ct, Fe, tt, ye, Le, ft, ve, nt, ut, je = e[10],
        le = [];
    for (let w = 0; w < je.length; w += 1) le[w] = Mt(Et(e, je, w));
    let Re = Object.keys(e[8]),
        ae = [];
    for (let w = 0; w < Re.length; w += 1) ae[w] = Bt(Ot(e, Re, w));
    let Me = e[6],
        Q = [];
    for (let w = 0; w < Me.length; w += 1) Q[w] = Nt(yt(e, Me, w));
    const Xt = w => ie(Q[w], 1, 1, () => {
        Q[w] = null
    });
    let W = e[5] && Lt(e);
    return {
        c() {
            t = M("div"), r = M("div"), o = M("strong"), o.textContent = "\u8303\u56F4\uFF1A", c = I();
            for (let w = 0; w < le.length; w += 1) le[w].c();
            f = I(), h = M("div"), d = M("strong"), d.textContent = "\u8FD0\u7B97\uFF1A", u = I();
            for (let w = 0; w < ae.length; w += 1) ae[w].c();
            x = I(), m = M("div"), g = M("strong"), g.textContent = "\u8FD0\u7B97\u6570\uFF1A", y = I(), p = ce(e[2]), C = I(), N = M("input"), $ = I(), X = M("div"), he = M("strong"), he.textContent = "\u89C4\u5219\uFF1A", fe = I(), L = M("span"), S = M("input"), U = I(), R = M("label"), R.textContent = "\u53EF\u8FDB\u4F4D", ne = I(), pe = M("span"), K = M("input"), re = I(), ge = M("label"), ge.textContent = "\u53EF\u9000\u4F4D", se = I(), ee = M("span"), Y = M("input"), O = I(), z = M("label"), z.textContent = "\u53EF\u91CD\u590D", J = I(), D = M("span"), T = M("input"), F = I(), G = M("label"), G.textContent = "\u586B\u7A7A\u9898", xe = I(), _e = M("div"), be = I(), te = M("div"), me = M("span"), De = M("strong"), De.textContent = "\u9898\u6570\uFF1A", Qe = I(), i = ce(e[4]), n = I(), s = M("input"), l = I(), a = M("button"), a.textContent = "\u751F\u6210", _ = I(), b = M("button"), E = ce("\u6253\u5370"), ue = I(), we = M("span"), de = M("input"), ct = I(), Fe = M("label"), Fe.textContent = "\u663E\u793A\u7ED3\u679C", tt = I(), ye = M("div"), Le = M("div");
            for (let w = 0; w < Q.length; w += 1) Q[w].c();
            ft = I(), W && W.c(), k(r, "class", "mx-4 my-2 whitespace-nowrap flex items-center"), k(h, "class", "mx-4 my-2 whitespace-nowrap flex items-center"), k(N, "type", "range"), k(N, "min", "2"), k(N, "max", "4"), k(m, "class", "mx-4 my-2 whitespace-nowrap flex items-center"), k(S, "id", "addCarry"), k(S, "class", "peer"), k(S, "type", "checkbox"), S.disabled = j = ["sub"].includes(e[0]), S.__value = "addCarry", S.value = S.__value, e[15][0].push(S), k(R, "for", "addCarry"), k(R, "class", "peer-checked:text-sky-500 peer-checked:font-bold peer-disabled:text-gray-400 "), k(K, "id", "subBack"), k(K, "class", "peer"), k(K, "type", "checkbox"), K.disabled = ke = ["add"].includes(e[0]) || e[1] === 10, K.__value = "subBack", K.value = K.__value, e[15][0].push(K), k(ge, "for", "subBack"), k(ge, "class", "peer-checked:text-sky-500 peer-checked:font-bold peer-disabled:text-gray-400 "), k(Y, "id", "repeat"), k(Y, "class", "peer"), k(Y, "type", "checkbox"), Y.__value = "repeat", Y.value = Y.__value, e[15][0].push(Y), k(z, "for", "repeat"), k(z, "class", "peer-checked:text-sky-500 peer-checked:font-bold peer-disabled:text-gray-400 "), k(T, "id", "cloze"), k(T, "class", "peer"), k(T, "type", "checkbox"), T.__value = "cloze", T.value = T.__value, e[15][0].push(T), k(G, "for", "cloze"), k(G, "class", "peer-checked:text-sky-500 peer-checked:font-bold peer-disabled:text-gray-400 "), k(X, "class", "mx-4 my-2 whitespace-nowrap flex items-center"), k(_e, "class", "mx-4 my-2 whitespace-nowrap flex items-center"), k(t, "class", "flex flex-wrap items-center justify-center my-6 print:hidden"), k(s, "type", "range"), k(s, "name", "points"), k(s, "min", "1"), k(s, "max", "50"), k(a, "class", "bg-sky-500 border-none text-white px-4 py-1 cursor-pointer hover:bg-sky-400 "), k(b, "class", "bg-sky-500 border-none text-white px-4 py-1 cursor-pointer hover:bg-sky-400 disabled:bg-neutral-400 disabled:text-neutral-200 disabled:cursor-not-allowed disabled:hover:bg-neutral-400 "), b.disabled = A = e[6].length === 0, k(de, "id", "showRes"), k(de, "class", "peer"), k(de, "type", "checkbox"), k(Fe, "for", "showRes"), k(Fe, "class", "peer-checked:text-sky-500 peer-checked:font-bold peer-disabled:text-gray-400 "), k(te, "class", "text-center mb-6 print:hidden"), k(Le, "class", "flex-grow flex-shrink-0 text-xl grid sm:grid-cols-2 md:grid-cols-3 print:p-0 print:shadow-none print:grid-cols-3"), qt(Le, "font-family", "consolas"), k(ye, "class", "relative container max-w-[800px] overflow-hidden mx-auto p-12 pb-20 bg-white")
        },
        m(w, q) {
            V(w, t, q), v(t, r), v(r, o), v(r, c);
            for (let B = 0; B < le.length; B += 1) le[B].m(r, null);
            v(t, f), v(t, h), v(h, d), v(h, u);
            for (let B = 0; B < ae.length; B += 1) ae[B].m(h, null);
            v(t, x), v(t, m), v(m, g), v(m, y), v(m, p), v(m, C), v(m, N), Ye(N, e[2]), v(t, $), v(t, X), v(X, he), v(X, fe), v(X, L), v(L, S), S.checked = ~e[3].indexOf(S.__value), v(L, U), v(L, R), v(X, ne), v(X, pe), v(pe, K), K.checked = ~e[3].indexOf(K.__value), v(pe, re), v(pe, ge), v(X, se), v(X, ee), v(ee, Y), Y.checked = ~e[3].indexOf(Y.__value), v(ee, O), v(ee, z), v(X, J), v(X, D), v(D, T), T.checked = ~e[3].indexOf(T.__value), v(D, F), v(D, G), v(t, xe), v(t, _e), V(w, be, q), V(w, te, q), v(te, me), v(me, De), v(me, Qe), v(me, i), v(me, n), v(me, s), Ye(s, e[4]), v(te, l), v(te, a), v(te, _), v(te, b), v(b, E), v(te, ue), v(te, we), v(we, de), v(we, ct), v(we, Fe), V(w, tt, q), V(w, ye, q), v(ye, Le);
            for (let B = 0; B < Q.length; B += 1) Q[B].m(Le, null);
            v(ye, ft), W && W.m(ye, null), ve = !0, nt || (ut = [oe(N, "change", e[17]), oe(N, "input", e[17]), oe(S, "change", e[18]), oe(K, "change", e[19]), oe(Y, "change", e[20]), oe(T, "change", e[21]), oe(s, "change", e[22]), oe(s, "input", e[22]), oe(a, "click", e[11]), oe(b, "click", e[12]), oe(de, "change", e[23])], nt = !0)
        },
        p(w, q) {
            if (q[0] & 1026) {
                je = w[10];
                let B;
                for (B = 0; B < je.length; B += 1) {
                    const Se = Et(w, je, B);
                    le[B] ? le[B].p(Se, q) : (le[B] = Mt(Se), le[B].c(), le[B].m(r, null))
                }
                for (; B < le.length; B += 1) le[B].d(1);
                le.length = je.length
            }
            if (q[0] & 257) {
                Re = Object.keys(w[8]);
                let B;
                for (B = 0; B < Re.length; B += 1) {
                    const Se = Ot(w, Re, B);
                    ae[B] ? ae[B].p(Se, q) : (ae[B] = Bt(Se), ae[B].c(), ae[B].m(h, null))
                }
                for (; B < ae.length; B += 1) ae[B].d(1);
                ae.length = Re.length
            }
            if ((!ve || q[0] & 4) && $e(p, w[2]), q[0] & 4 && Ye(N, w[2]), (!ve || q[0] & 1 && j !== (j = ["sub"].includes(w[0]))) && (S.disabled = j), q[0] & 8 && (S.checked = ~w[3].indexOf(S.__value)), (!ve || q[0] & 3 && ke !== (ke = ["add"].includes(w[0]) || w[1] === 10)) && (K.disabled = ke), q[0] & 8 && (K.checked = ~w[3].indexOf(K.__value)), q[0] & 8 && (Y.checked = ~w[3].indexOf(Y.__value)), q[0] & 8 && (T.checked = ~w[3].indexOf(T.__value)), (!ve || q[0] & 16) && $e(i, w[4]), q[0] & 16 && Ye(s, w[4]), (!ve || q[0] & 64 && A !== (A = w[6].length === 0)) && (b.disabled = A), q[0] & 8899) {
                Me = w[6];
                let B;
                for (B = 0; B < Me.length; B += 1) {
                    const Se = yt(w, Me, B);
                    Q[B] ? (Q[B].p(Se, q), H(Q[B], 1)) : (Q[B] = Nt(Se), Q[B].c(), H(Q[B], 1), Q[B].m(Le, null))
                }
                for (ze(), B = Me.length; B < Q.length; B += 1) Xt(B);
                qe()
            }
            w[5] ? W ? (W.p(w, q), q[0] & 32 && H(W, 1)) : (W = Lt(w), W.c(), H(W, 1), W.m(ye, null)) : W && (ze(), ie(W, 1, 1, () => {
                W = null
            }), qe())
        },
        i(w) {
            if (!ve) {
                for (let q = 0; q < Me.length; q += 1) H(Q[q]);
                H(W), ve = !0
            }
        },
        o(w) {
            Q = Q.filter(Boolean);
            for (let q = 0; q < Q.length; q += 1) ie(Q[q]);
            ie(W), ve = !1
        },
        d(w) {
            w && P(t), Ue(le, w), Ue(ae, w), e[15][0].splice(e[15][0].indexOf(S), 1), e[15][0].splice(e[15][0].indexOf(K), 1), e[15][0].splice(e[15][0].indexOf(Y), 1), e[15][0].splice(e[15][0].indexOf(T), 1), w && P(be), w && P(te), w && P(tt), w && P(ye), Ue(Q, w), W && W.d(), nt = !1, Ae(ut)
        }
    }
}

function En(e, t, r) {
    let o = "";
    const c = {
        add: "\u52A0\u6CD5",
        sub: "\u51CF\u6CD5",
        add_sub: "\u52A0\u51CF\u6CD5"
    };
    let f = localStorage.getItem("currentMethod") || "add";
    const h = ["+", "-", "\xD7", "\xF7", "="],
        d = [10, 20, 50, 100];
    let u = localStorage.getItem("currentRange") ? parseInt(localStorage.getItem("currentRange")) : 10,
        x = localStorage.getItem("num") ? JSON.parse(localStorage.getItem("num")) : 2,
        m = localStorage.getItem("rules") ? JSON.parse(localStorage.getItem("rules")) : [],
        g = localStorage.getItem("resLen") ? parseInt(localStorage.getItem("resLen")) : 50,
        y = [],
        p = !1;
    const C = (O = 0, z = u) => Math.round(Math.random() * (z - O)) + O,
        N = () => {
            r(6, y = []), r(5, o = "")
        },
        $ = () => {
            let O = [];
            if (m.includes("addCarry"))
                for (; O.length < x;) O.push(C(1));
            else {
                const J = (u - 1).toString().split(""),
                    D = [];
                for (; D.length < x;) D.push([]);
                J.forEach((T, F) => {
                    let G = 0;
                    for (let xe = 0; xe < x; xe++) {
                        const _e = C(0, parseInt(T) - G);
                        G += _e, D[xe].push(_e)
                    }
                }), O = D.reduce((T, F) => (T.push(parseInt(F.join(""))), T), [])
            }
            const z = [];
            for (; z.length < O.length - 1;) z.push(0);
            return {
                numbers: O,
                methods: z,
                result: O.reduce((J, D) => J + D, 0)
            }
        },
        X = () => {
            const O = C();
            let z = [];
            const J = O.toString().split("");
            if (m.includes("subBack")) {
                let F = O;
                z.push(O);
                for (var D = 0; D < x - 1; D++) {
                    const G = C(0, F - 1);
                    F = F - G, z.push(G)
                }
            } else {
                const F = [];
                for (; F.length < x - 1;) F.push([]);
                J.forEach((G, xe) => {
                    let _e = parseInt(G);
                    for (let be = 0; be < x - 1; be++) {
                        const te = C(0, _e);
                        _e -= te, F[be].push(te)
                    }
                }), z = F.reduce((G, xe) => (G.push(parseInt(xe.join(""))), G), [O])
            }
            const T = [];
            for (; T.length < z.length - 1;) T.push(1);
            return {
                numbers: z,
                methods: T,
                result: z.reduce((F, G) => (F === 0 ? F = G : F = F - G, F), 0)
            }
        },
        he = () => {
            let O;
            switch (f) {
                case "add":
                    O = $();
                    break;
                case "sub":
                    O = X();
                    break;
                case "add_sub":
                    O = C(0, 2) ? $() : X()
            }
            if (console.log(JSON.stringify(O, null, 2)), m.includes("cloze")) {
                const z = C(0, O.numbers.length - 1);
                O.numbers.push(O.result), O.methods.push(4), O.result = O.numbers[z], O.numbers[z] = "cloze"
            } else O.numbers.push("cloze"), O.methods.push(4);
            return console.log(JSON.stringify(O, null, 2)), O
        },
        fe = () => {
            let O = [],
                z = 0;
            for (; O.length < g && z < 999;) {
                z++;
                const J = he();
                J.numbers.includes(0) || (m.includes("repeat") || (O = O.filter(D => JSON.stringify(D) !== JSON.stringify(J))), O.push(J))
            }
            r(6, y = O), L()
        },
        L = () => {
            const O = [];
            y.forEach(z => {
                O.push(z.result.toString(36).padStart(2, "_"))
            }), r(5, o = location.href + (location.hash === "" ? "#/" : "") + O.join(""))
        },
        S = () => {
            window.print()
        },
        j = O => {
            if (m.includes("repeat")) r(6, y[O] = he(), y);
            else {
                let z, J = 0;
                for (; z === void 0 && J < 100;) {
                    J++;
                    const D = he();
                    !y.some(F => JSON.stringify(F) === JSON.stringify(D)) && !D.numbers.includes(0) && (z = D)
                }
                r(6, y[O] = z, y)
            }
            L()
        },
        U = [
            [],
            [],
            []
        ];

    function R() {
        u = this.__value, r(1, u)
    }

    function ne() {
        f = this.__value, r(0, f)
    }

    function pe() {
        x = _t(this.value), r(2, x)
    }

    function K() {
        m = Xe(U[0], this.__value, this.checked), r(3, m), r(0, f), r(1, u)
    }

    function ke() {
        m = Xe(U[0], this.__value, this.checked), r(3, m), r(0, f), r(1, u)
    }

    function re() {
        m = Xe(U[0], this.__value, this.checked), r(3, m), r(0, f), r(1, u)
    }

    function ge() {
        m = Xe(U[0], this.__value, this.checked), r(3, m), r(0, f), r(1, u)
    }

    function se() {
        g = _t(this.value), r(4, g)
    }
    const ee = O => r(7, p = O.currentTarget.checked),
        Y = O => j(O);
    return e.$$.update = () => {
        e.$$.dirty[0] & 1 && (localStorage.setItem("currentMethod", f), N()), e.$$.dirty[0] & 2 && (localStorage.setItem("currentRange", u.toString()), N()), e.$$.dirty[0] & 4 && (localStorage.setItem("num", x.toString()), N()), e.$$.dirty[0] & 9 && f === "sub" && r(3, m = m.filter(O => O !== "addCarry")), e.$$.dirty[0] & 11 && (f === "add" || u === 10) && r(3, m = m.filter(O => O !== "subBack")), e.$$.dirty[0] & 8 && (localStorage.setItem("rules", JSON.stringify(m)), N()), e.$$.dirty[0] & 16 && (N(), localStorage.setItem("resLen", g.toString())), e.$$.dirty[0] & 3 && (document.title = `${u}\u4EE5\u5185${c[f]}`)
    }, [f, u, x, m, g, o, y, p, c, h, d, fe, S, j, R, U, ne, pe, K, ke, re, ge, se, ee, Y]
}
class Mn extends Pe {
    constructor(t) {
        super(), Te(this, t, En, On, Ne, {}, null, [-1, -1])
    }
}

function jt(e, t, r) {
    const o = e.slice();
    return o[3] = t[r], o[5] = r, o
}

function Rt(e) {
    let t, r, o = e[5] + 1 + "",
        c, f, h = e[3].toString().padStart(2) + "",
        d;
    return {
        c() {
            t = M("pre"), r = M("span"), c = ce(o), f = ce("."), d = ce(h), k(r, "class", "text-base text-gray-400 mr-2"), k(t, "class", "flex items-center justify-center")
        },
        m(u, x) {
            V(u, t, x), v(t, r), v(r, c), v(r, f), v(t, d)
        },
        p: Z,
        d(u) {
            u && P(t)
        }
    }
}

function Bn(e) {
    let t, r, o, c, f, h, d, u, x = e[0],
        m = [];
    for (let g = 0; g < x.length; g += 1) m[g] = Rt(jt(e, x, g));
    return {
        c() {
            t = M("div");
            for (let g = 0; g < m.length; g += 1) m[g].c();
            r = I(), o = M("div"), o.innerHTML = '<img alt="" class="w-full block" src="https://s2.loli.net/2022/06/27/mxuA4jgQ72rzVkF.jpg"/>', c = I(), f = M("div"), h = M("a"), h.textContent = "\u7EE7\u7EED\u751F\u6210\u6570\u5B66\u9898", k(t, "class", "container max-w-[800px] flex-grow flex-shrink-0 mx-auto p-12 shadow bg-white text-3xl grid sm:grid-cols-2 md:grid-cols-4 print:p-0 print:shadow-none print:grid-cols-4"), qt(t, "font-family", "consolas"), k(h, "href", "###"), k(h, "class", "inline-block text-sky-500 p-8 no-underline"), k(f, "class", "text-center")
        },
        m(g, y) {
            V(g, t, y);
            for (let p = 0; p < m.length; p += 1) m[p].m(t, null);
            V(g, r, y), V(g, o, y), V(g, c, y), V(g, f, y), v(f, h), d || (u = Zt(hn.call(null, h, {
                href: "/"
            })), d = !0)
        },
        p(g, [y]) {
            if (y & 1) {
                x = g[0];
                let p;
                for (p = 0; p < x.length; p += 1) {
                    const C = jt(g, x, p);
                    m[p] ? m[p].p(C, y) : (m[p] = Rt(C), m[p].c(), m[p].m(t, null))
                }
                for (; p < m.length; p += 1) m[p].d(1);
                m.length = x.length
            }
        },
        i: Z,
        o: Z,
        d(g) {
            g && P(t), Ue(m, g), g && P(r), g && P(o), g && P(c), g && P(f), d = !1, u()
        }
    }
}

function Cn(e, t, r) {
    let {
        params: o = {
            resultString: ""
        }
    } = t;
    const c = [];
    document.title = "\u67E5\u770B\u7ED3\u679C";
    const f = o.resultString.split("");
    for (; f.length >= 2;) {
        let h = f.splice(0, 2).join("");
        h = h.replace("_", ""), c.push(parseInt(h, 36))
    }
    return c.length === 0 && (alert("\u4E8C\u7EF4\u7801\u5F02\u5E38"), dn("/")), e.$$set = h => {
        "params" in h && r(1, o = h.params)
    }, [c, o]
}
class An extends Pe {
    constructor(t) {
        super(), Te(this, t, Cn, Bn, Ne, {
            params: 1
        })
    }
}
var Nn = {
    "/": Mn,
    "/:resultString": An
};

function Ln(e) {
    let t, r, o;
    return r = new pn({
        props: {
            routes: Nn
        }
    }), {
        c() {
            t = M("main"), Ce(r.$$.fragment), k(t, "class", "relative")
        },
        m(c, f) {
            V(c, t, f), Oe(r, t, null), o = !0
        },
        p: Z,
        i(c) {
            o || (H(r.$$.fragment, c), o = !0)
        },
        o(c) {
            ie(r.$$.fragment, c), o = !1
        },
        d(c) {
            c && P(t), Ee(r)
        }
    }
}
class jn extends Pe {
    constructor(t) {
        super(), Te(this, t, null, Ln, Ne, {})
    }
}
new jn({
    target: document.getElementById("app")
});