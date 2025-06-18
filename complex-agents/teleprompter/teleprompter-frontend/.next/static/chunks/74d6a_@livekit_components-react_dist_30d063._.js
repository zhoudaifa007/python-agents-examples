(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/74d6a_@livekit_components-react_dist_30d063._.js", {

"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/contexts-568EHGLp.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "$": (()=>Cs),
    "A": (()=>zo),
    "B": (()=>Eo),
    "C": (()=>oo),
    "D": (()=>ds),
    "E": (()=>es),
    "F": (()=>ks),
    "G": (()=>Uo),
    "H": (()=>ts),
    "I": (()=>rs),
    "J": (()=>Ko),
    "K": (()=>Qo),
    "L": (()=>Co),
    "M": (()=>Ho),
    "N": (()=>hs),
    "O": (()=>vs),
    "P": (()=>ms),
    "Q": (()=>ls),
    "R": (()=>$n),
    "S": (()=>os),
    "T": (()=>ss),
    "U": (()=>Bi),
    "V": (()=>ws),
    "W": (()=>Bo),
    "X": (()=>Rt),
    "Y": (()=>Yo),
    "Z": (()=>ps),
    "_": (()=>Ps),
    "a": (()=>As),
    "a0": (()=>qo),
    "a1": (()=>F),
    "a2": (()=>Ss),
    "a3": (()=>Es),
    "a4": (()=>xs),
    "a5": (()=>Wo),
    "a6": (()=>jo),
    "a7": (()=>is),
    "a8": (()=>Xo),
    "a9": (()=>Rn),
    "aa": (()=>Dn),
    "ab": (()=>fs),
    "ac": (()=>Oo),
    "ad": (()=>Sr),
    "ae": (()=>xr),
    "af": (()=>Nn),
    "ag": (()=>Mn),
    "ah": (()=>$s),
    "ai": (()=>Ts),
    "aj": (()=>Lo),
    "ak": (()=>Ls),
    "al": (()=>Ro),
    "am": (()=>Mo),
    "an": (()=>Io),
    "ao": (()=>Do),
    "ap": (()=>be),
    "aq": (()=>Fo),
    "ar": (()=>Os),
    "as": (()=>Ao),
    "at": (()=>_o),
    "au": (()=>No),
    "av": (()=>$o),
    "aw": (()=>Ds),
    "ax": (()=>_s),
    "b": (()=>bs),
    "c": (()=>Ms),
    "d": (()=>us),
    "e": (()=>Go),
    "f": (()=>Rs),
    "g": (()=>co),
    "h": (()=>cs),
    "i": (()=>Is),
    "j": (()=>xo),
    "k": (()=>gs),
    "l": (()=>_),
    "m": (()=>ko),
    "n": (()=>ji),
    "o": (()=>ao),
    "p": (()=>N),
    "q": (()=>Zo),
    "r": (()=>no),
    "s": (()=>ys),
    "t": (()=>On),
    "u": (()=>Ns),
    "v": (()=>ns),
    "w": (()=>To),
    "x": (()=>Jo),
    "y": (()=>as),
    "z": (()=>Vo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/livekit-client@2.7.5/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Ke = Math.min, ue = Math.max, ke = Math.round, te = (e)=>({
        x: e,
        y: e
    }), Bn = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}, Vn = {
    start: "end",
    end: "start"
};
function bt(e, t, n) {
    return ue(e, Ke(t, n));
}
function Ne(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function oe(e) {
    return e.split("-")[0];
}
function $e(e) {
    return e.split("-")[1];
}
function jt(e) {
    return e === "x" ? "y" : "x";
}
function Wt(e) {
    return e === "y" ? "height" : "width";
}
function Ue(e) {
    return [
        "top",
        "bottom"
    ].includes(oe(e)) ? "y" : "x";
}
function Bt(e) {
    return jt(Ue(e));
}
function Hn(e, t, n) {
    n === void 0 && (n = !1);
    const r = $e(e), i = Bt(e), o = Wt(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = Oe(s)), [
        s,
        Oe(s)
    ];
}
function zn(e) {
    const t = Oe(e);
    return [
        Qe(e),
        t,
        Qe(t)
    ];
}
function Qe(e) {
    return e.replace(/start|end/g, (t)=>Vn[t]);
}
function Yn(e, t, n) {
    const r = [
        "left",
        "right"
    ], i = [
        "right",
        "left"
    ], o = [
        "top",
        "bottom"
    ], s = [
        "bottom",
        "top"
    ];
    switch(e){
        case "top":
        case "bottom":
            return n ? t ? i : r : t ? r : i;
        case "left":
        case "right":
            return t ? o : s;
        default:
            return [];
    }
}
function Gn(e, t, n, r) {
    const i = $e(e);
    let o = Yn(oe(e), n === "start", r);
    return i && (o = o.map((s)=>s + "-" + i), t && (o = o.concat(o.map(Qe)))), o;
}
function Oe(e) {
    return e.replace(/left|right|bottom|top/g, (t)=>Bn[t]);
}
function Kn(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    };
}
function Qn(e) {
    return typeof e != "number" ? Kn(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    };
}
function Le(e) {
    const { x: t, y: n, width: r, height: i } = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    };
}
function yt(e, t, n) {
    let { reference: r, floating: i } = e;
    const o = Ue(t), s = Bt(t), a = Wt(s), c = oe(t), u = o === "y", l = r.x + r.width / 2 - i.width / 2, f = r.y + r.height / 2 - i.height / 2, h = r[a] / 2 - i[a] / 2;
    let d;
    switch(c){
        case "top":
            d = {
                x: l,
                y: r.y - i.height
            };
            break;
        case "bottom":
            d = {
                x: l,
                y: r.y + r.height
            };
            break;
        case "right":
            d = {
                x: r.x + r.width,
                y: f
            };
            break;
        case "left":
            d = {
                x: r.x - i.width,
                y: f
            };
            break;
        default:
            d = {
                x: r.x,
                y: r.y
            };
    }
    switch($e(t)){
        case "start":
            d[s] -= h * (n && u ? -1 : 1);
            break;
        case "end":
            d[s] += h * (n && u ? -1 : 1);
            break;
    }
    return d;
}
const Jn = async (e, t, n)=>{
    const { placement: r = "bottom", strategy: i = "absolute", middleware: o = [], platform: s } = n, a = o.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    }), { x: l, y: f } = yt(u, r, c), h = r, d = {}, m = 0;
    for(let p = 0; p < a.length; p++){
        const { name: g, fn: v } = a[p], { x: E, y: P, data: L, reset: C } = await v({
            x: l,
            y: f,
            initialPlacement: r,
            placement: h,
            strategy: i,
            middlewareData: d,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        l = E ?? l, f = P ?? f, d = {
            ...d,
            [g]: {
                ...d[g],
                ...L
            }
        }, C && m <= 50 && (m++, typeof C == "object" && (C.placement && (h = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : C.rects), { x: l, y: f } = yt(u, h, c)), p = -1);
    }
    return {
        x: l,
        y: f,
        placement: h,
        strategy: i,
        middlewareData: d
    };
};
async function Vt(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: i, platform: o, rects: s, elements: a, strategy: c } = e, { boundary: u = "clippingAncestors", rootBoundary: l = "viewport", elementContext: f = "floating", altBoundary: h = !1, padding: d = 0 } = Ne(t, e), m = Qn(d), g = a[h ? f === "floating" ? "reference" : "floating" : f], v = Le(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: l,
        strategy: c
    })), E = f === "floating" ? {
        ...s.floating,
        x: r,
        y: i
    } : s.reference, P = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), L = await (o.isElement == null ? void 0 : o.isElement(P)) ? await (o.getScale == null ? void 0 : o.getScale(P)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, C = Le(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: E,
        offsetParent: P,
        strategy: c
    }) : E);
    return {
        top: (v.top - C.top + m.top) / L.y,
        bottom: (C.bottom - v.bottom + m.bottom) / L.y,
        left: (v.left - C.left + m.left) / L.x,
        right: (C.right - v.right + m.right) / L.x
    };
}
const qn = function(e) {
    return e === void 0 && (e = {}), {
        name: "flip",
        options: e,
        async fn (t) {
            var n, r;
            const { placement: i, middlewareData: o, rects: s, initialPlacement: a, platform: c, elements: u } = t, { mainAxis: l = !0, crossAxis: f = !0, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: p = !0, ...g } = Ne(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset) return {};
            const v = oe(i), E = oe(a) === a, P = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), L = h || (E || !p ? [
                Oe(a)
            ] : zn(a));
            !h && m !== "none" && L.push(...Gn(a, p, m, P));
            const C = [
                a,
                ...L
            ], ie = await Vt(t, g), K = [];
            let T = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (l && K.push(ie[v]), f) {
                const S = Hn(i, s, P);
                K.push(ie[S[0]], ie[S[1]]);
            }
            if (T = [
                ...T,
                {
                    placement: i,
                    overflows: K
                }
            ], !K.every((S)=>S <= 0)) {
                var x, I;
                const S = (((x = o.flip) == null ? void 0 : x.index) || 0) + 1, V = C[S];
                if (V) return {
                    data: {
                        index: S,
                        overflows: T
                    },
                    reset: {
                        placement: V
                    }
                };
                let X = (I = T.filter((Z)=>Z.overflows[0] <= 0).sort((Z, ce)=>Z.overflows[1] - ce.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!X) switch(d){
                    case "bestFit":
                        {
                            var w;
                            const Z = (w = T.map((ce)=>[
                                    ce.placement,
                                    ce.overflows.filter((ge)=>ge > 0).reduce((ge, Un)=>ge + Un, 0)
                                ]).sort((ce, ge)=>ce[1] - ge[1])[0]) == null ? void 0 : w[0];
                            Z && (X = Z);
                            break;
                        }
                    case "initialPlacement":
                        X = a;
                        break;
                }
                if (i !== X) return {
                    reset: {
                        placement: X
                    }
                };
            }
            return {};
        }
    };
};
async function Xn(e, t) {
    const { placement: n, platform: r, elements: i } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = oe(n), a = $e(n), c = Ue(n) === "y", u = [
        "left",
        "top"
    ].includes(s) ? -1 : 1, l = o && c ? -1 : 1, f = Ne(t, e);
    let { mainAxis: h, crossAxis: d, alignmentAxis: m } = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...f
    };
    return a && typeof m == "number" && (d = a === "end" ? m * -1 : m), c ? {
        x: d * l,
        y: h * u
    } : {
        x: h * u,
        y: d * l
    };
}
const Zn = function(e) {
    return e === void 0 && (e = 0), {
        name: "offset",
        options: e,
        async fn (t) {
            var n, r;
            const { x: i, y: o, placement: s, middlewareData: a } = t, c = await Xn(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: i + c.x,
                y: o + c.y,
                data: {
                    ...c,
                    placement: s
                }
            };
        }
    };
}, er = function(e) {
    return e === void 0 && (e = {}), {
        name: "shift",
        options: e,
        async fn (t) {
            const { x: n, y: r, placement: i } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: a = {
                fn: (g)=>{
                    let { x: v, y: E } = g;
                    return {
                        x: v,
                        y: E
                    };
                }
            }, ...c } = Ne(e, t), u = {
                x: n,
                y: r
            }, l = await Vt(t, c), f = Ue(oe(i)), h = jt(f);
            let d = u[h], m = u[f];
            if (o) {
                const g = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", E = d + l[g], P = d - l[v];
                d = bt(E, d, P);
            }
            if (s) {
                const g = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", E = m + l[g], P = m - l[v];
                m = bt(E, m, P);
            }
            const p = a.fn({
                ...t,
                [h]: d,
                [f]: m
            });
            return {
                ...p,
                data: {
                    x: p.x - n,
                    y: p.y - r
                }
            };
        }
    };
};
function Fe() {
    return typeof window < "u";
}
function ve(e) {
    return Ht(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function U(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function J(e) {
    var t;
    return (t = (Ht(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ht(e) {
    return Fe() ? e instanceof Node || e instanceof U(e).Node : !1;
}
function H(e) {
    return Fe() ? e instanceof Element || e instanceof U(e).Element : !1;
}
function G(e) {
    return Fe() ? e instanceof HTMLElement || e instanceof U(e).HTMLElement : !1;
}
function wt(e) {
    return !Fe() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof U(e).ShadowRoot;
}
function Ee(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: i } = z(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && ![
        "inline",
        "contents"
    ].includes(i);
}
function tr(e) {
    return [
        "table",
        "td",
        "th"
    ].includes(ve(e));
}
function je(e) {
    return [
        ":popover-open",
        ":modal"
    ].some((t)=>{
        try {
            return e.matches(t);
        } catch  {
            return !1;
        }
    });
}
function st(e) {
    const t = at(), n = H(e) ? z(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || [
        "transform",
        "perspective",
        "filter"
    ].some((r)=>(n.willChange || "").includes(r)) || [
        "paint",
        "layout",
        "strict",
        "content"
    ].some((r)=>(n.contain || "").includes(r));
}
function nr(e) {
    let t = ne(e);
    for(; G(t) && !de(t);){
        if (st(t)) return t;
        if (je(t)) return null;
        t = ne(t);
    }
    return null;
}
function at() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function de(e) {
    return [
        "html",
        "body",
        "#document"
    ].includes(ve(e));
}
function z(e) {
    return U(e).getComputedStyle(e);
}
function We(e) {
    return H(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    };
}
function ne(e) {
    if (ve(e) === "html") return e;
    const t = // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    wt(e) && e.host || // Fallback.
    J(e);
    return wt(t) ? t.host : t;
}
function zt(e) {
    const t = ne(e);
    return de(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : G(t) && Ee(t) ? t : zt(t);
}
function Je(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const i = zt(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), s = U(i);
    if (o) {
        const a = qe(s);
        return t.concat(s, s.visualViewport || [], Ee(i) ? i : [], a && n ? Je(a) : []);
    }
    return t.concat(i, Je(i, [], n));
}
function qe(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Yt(e) {
    const t = z(e);
    let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
    const i = G(e), o = i ? e.offsetWidth : n, s = i ? e.offsetHeight : r, a = ke(n) !== o || ke(r) !== s;
    return a && (n = o, r = s), {
        width: n,
        height: r,
        $: a
    };
}
function Gt(e) {
    return H(e) ? e : e.contextElement;
}
function le(e) {
    const t = Gt(e);
    if (!G(t)) return te(1);
    const n = t.getBoundingClientRect(), { width: r, height: i, $: o } = Yt(t);
    let s = (o ? ke(n.width) : n.width) / r, a = (o ? ke(n.height) : n.height) / i;
    return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: s,
        y: a
    };
}
const rr = /* @__PURE__ */ te(0);
function Kt(e) {
    const t = U(e);
    return !at() || !t.visualViewport ? rr : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    };
}
function ir(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== U(e) ? !1 : t;
}
function we(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const i = e.getBoundingClientRect(), o = Gt(e);
    let s = te(1);
    t && (r ? H(r) && (s = le(r)) : s = le(e));
    const a = ir(o, n, r) ? Kt(o) : te(0);
    let c = (i.left + a.x) / s.x, u = (i.top + a.y) / s.y, l = i.width / s.x, f = i.height / s.y;
    if (o) {
        const h = U(o), d = r && H(r) ? U(r) : r;
        let m = h, p = qe(m);
        for(; p && r && d !== m;){
            const g = le(p), v = p.getBoundingClientRect(), E = z(p), P = v.left + (p.clientLeft + parseFloat(E.paddingLeft)) * g.x, L = v.top + (p.clientTop + parseFloat(E.paddingTop)) * g.y;
            c *= g.x, u *= g.y, l *= g.x, f *= g.y, c += P, u += L, m = U(p), p = qe(m);
        }
    }
    return Le({
        width: l,
        height: f,
        x: c,
        y: u
    });
}
function or(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
    const o = i === "fixed", s = J(r), a = t ? je(t.floating) : !1;
    if (r === s || a && o) return n;
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    }, u = te(1);
    const l = te(0), f = G(r);
    if ((f || !f && !o) && ((ve(r) !== "body" || Ee(s)) && (c = We(r)), G(r))) {
        const h = we(r);
        u = le(r), l.x = h.x + r.clientLeft, l.y = h.y + r.clientTop;
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - c.scrollLeft * u.x + l.x,
        y: n.y * u.y - c.scrollTop * u.y + l.y
    };
}
function sr(e) {
    return Array.from(e.getClientRects());
}
function Xe(e, t) {
    const n = We(e).scrollLeft;
    return t ? t.left + n : we(J(e)).left + n;
}
function ar(e) {
    const t = J(e), n = We(e), r = e.ownerDocument.body, i = ue(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = ue(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Xe(e);
    const a = -n.scrollTop;
    return z(r).direction === "rtl" && (s += ue(t.clientWidth, r.clientWidth) - i), {
        width: i,
        height: o,
        x: s,
        y: a
    };
}
function cr(e, t) {
    const n = U(e), r = J(e), i = n.visualViewport;
    let o = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
    if (i) {
        o = i.width, s = i.height;
        const u = at();
        (!u || u && t === "fixed") && (a = i.offsetLeft, c = i.offsetTop);
    }
    return {
        width: o,
        height: s,
        x: a,
        y: c
    };
}
function ur(e, t) {
    const n = we(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, o = G(e) ? le(e) : te(1), s = e.clientWidth * o.x, a = e.clientHeight * o.y, c = i * o.x, u = r * o.y;
    return {
        width: s,
        height: a,
        x: c,
        y: u
    };
}
function St(e, t, n) {
    let r;
    if (t === "viewport") r = cr(e, n);
    else if (t === "document") r = ar(J(e));
    else if (H(t)) r = ur(t, n);
    else {
        const i = Kt(e);
        r = {
            ...t,
            x: t.x - i.x,
            y: t.y - i.y
        };
    }
    return Le(r);
}
function Qt(e, t) {
    const n = ne(e);
    return n === t || !H(n) || de(n) ? !1 : z(n).position === "fixed" || Qt(n, t);
}
function lr(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Je(e, [], !1).filter((a)=>H(a) && ve(a) !== "body"), i = null;
    const o = z(e).position === "fixed";
    let s = o ? ne(e) : e;
    for(; H(s) && !de(s);){
        const a = z(s), c = st(s);
        !c && a.position === "fixed" && (i = null), (o ? !c && !i : !c && a.position === "static" && !!i && [
            "absolute",
            "fixed"
        ].includes(i.position) || Ee(s) && !c && Qt(e, s)) ? r = r.filter((l)=>l !== s) : i = a, s = ne(s);
    }
    return t.set(e, r), r;
}
function fr(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
    const s = [
        ...n === "clippingAncestors" ? je(t) ? [] : lr(t, this._c) : [].concat(n),
        r
    ], a = s[0], c = s.reduce((u, l)=>{
        const f = St(t, l, i);
        return u.top = ue(f.top, u.top), u.right = Ke(f.right, u.right), u.bottom = Ke(f.bottom, u.bottom), u.left = ue(f.left, u.left), u;
    }, St(t, a, i));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    };
}
function dr(e) {
    const { width: t, height: n } = Yt(e);
    return {
        width: t,
        height: n
    };
}
function pr(e, t, n) {
    const r = G(t), i = J(t), o = n === "fixed", s = we(e, !0, o, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = te(0);
    if (r || !r && !o) if ((ve(t) !== "body" || Ee(i)) && (a = We(t)), r) {
        const d = we(t, !0, o, t);
        c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
    } else i && (c.x = Xe(i));
    let u = 0, l = 0;
    if (i && !r && !o) {
        const d = i.getBoundingClientRect();
        l = d.top + a.scrollTop, u = d.left + a.scrollLeft - // RTL <body> scrollbar.
        Xe(i, d);
    }
    const f = s.left + a.scrollLeft - c.x - u, h = s.top + a.scrollTop - c.y - l;
    return {
        x: f,
        y: h,
        width: s.width,
        height: s.height
    };
}
function He(e) {
    return z(e).position === "static";
}
function xt(e, t) {
    if (!G(e) || z(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return J(e) === n && (n = n.ownerDocument.body), n;
}
function Jt(e, t) {
    const n = U(e);
    if (je(e)) return n;
    if (!G(e)) {
        let i = ne(e);
        for(; i && !de(i);){
            if (H(i) && !He(i)) return i;
            i = ne(i);
        }
        return n;
    }
    let r = xt(e, t);
    for(; r && tr(r) && He(r);)r = xt(r, t);
    return r && de(r) && He(r) && !st(r) ? n : r || nr(e) || n;
}
const hr = async function(e) {
    const t = this.getOffsetParent || Jt, n = this.getDimensions, r = await n(e.floating);
    return {
        reference: pr(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    };
};
function vr(e) {
    return z(e).direction === "rtl";
}
const mr = {
    convertOffsetParentRelativeRectToViewportRelativeRect: or,
    getDocumentElement: J,
    getClippingRect: fr,
    getOffsetParent: Jt,
    getElementRects: hr,
    getClientRects: sr,
    getDimensions: dr,
    getScale: le,
    isElement: H,
    isRTL: vr
}, gr = Zn, br = er, yr = qn, wr = (e, t, n)=>{
    const r = /* @__PURE__ */ new Map(), i = {
        platform: mr,
        ...n
    }, o = {
        ...i.platform,
        _c: r
    };
    return Jn(e, t, {
        ...i,
        platform: o
    });
};
var Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xr(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qt = {
    exports: {}
};
(function(e) {
    (function(t, n) {
        e.exports ? e.exports = n() : t.log = n();
    })(Sr, function() {
        var t = function() {}, n = "undefined", r = typeof window !== n && typeof window.navigator !== n && /Trident\/|MSIE /.test(window.navigator.userAgent), i = [
            "trace",
            "debug",
            "info",
            "warn",
            "error"
        ], o = {}, s = null;
        function a(p, g) {
            var v = p[g];
            if (typeof v.bind == "function") return v.bind(p);
            try {
                return Function.prototype.bind.call(v, p);
            } catch  {
                return function() {
                    return Function.prototype.apply.apply(v, [
                        p,
                        arguments
                    ]);
                };
            }
        }
        function c() {
            console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [
                console,
                arguments
            ])), console.trace && console.trace();
        }
        function u(p) {
            return p === "debug" && (p = "log"), typeof console === n ? !1 : p === "trace" && r ? c : console[p] !== void 0 ? a(console, p) : console.log !== void 0 ? a(console, "log") : t;
        }
        function l() {
            for(var p = this.getLevel(), g = 0; g < i.length; g++){
                var v = i[g];
                this[v] = g < p ? t : this.methodFactory(v, p, this.name);
            }
            if (this.log = this.debug, typeof console === n && p < this.levels.SILENT) return "No console available for logging";
        }
        function f(p) {
            return function() {
                typeof console !== n && (l.call(this), this[p].apply(this, arguments));
            };
        }
        function h(p, g, v) {
            return u(p) || f.apply(this, arguments);
        }
        function d(p, g) {
            var v = this, E, P, L, C = "loglevel";
            typeof p == "string" ? C += ":" + p : typeof p == "symbol" && (C = void 0);
            function ie(w) {
                var S = (i[w] || "silent").toUpperCase();
                if (!(typeof window === n || !C)) {
                    try {
                        window.localStorage[C] = S;
                        return;
                    } catch  {}
                    try {
                        window.document.cookie = encodeURIComponent(C) + "=" + S + ";";
                    } catch  {}
                }
            }
            function K() {
                var w;
                if (!(typeof window === n || !C)) {
                    try {
                        w = window.localStorage[C];
                    } catch  {}
                    if (typeof w === n) try {
                        var S = window.document.cookie, V = encodeURIComponent(C), X = S.indexOf(V + "=");
                        X !== -1 && (w = /^([^;]+)/.exec(S.slice(X + V.length + 1))[1]);
                    } catch  {}
                    return v.levels[w] === void 0 && (w = void 0), w;
                }
            }
            function T() {
                if (!(typeof window === n || !C)) {
                    try {
                        window.localStorage.removeItem(C);
                    } catch  {}
                    try {
                        window.document.cookie = encodeURIComponent(C) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                    } catch  {}
                }
            }
            function x(w) {
                var S = w;
                if (typeof S == "string" && v.levels[S.toUpperCase()] !== void 0 && (S = v.levels[S.toUpperCase()]), typeof S == "number" && S >= 0 && S <= v.levels.SILENT) return S;
                throw new TypeError("log.setLevel() called with invalid level: " + w);
            }
            v.name = p, v.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
            }, v.methodFactory = g || h, v.getLevel = function() {
                return L ?? P ?? E;
            }, v.setLevel = function(w, S) {
                return L = x(w), S !== !1 && ie(L), l.call(v);
            }, v.setDefaultLevel = function(w) {
                P = x(w), K() || v.setLevel(w, !1);
            }, v.resetLevel = function() {
                L = null, T(), l.call(v);
            }, v.enableAll = function(w) {
                v.setLevel(v.levels.TRACE, w);
            }, v.disableAll = function(w) {
                v.setLevel(v.levels.SILENT, w);
            }, v.rebuild = function() {
                if (s !== v && (E = x(s.getLevel())), l.call(v), s === v) for(var w in o)o[w].rebuild();
            }, E = x(s ? s.getLevel() : "WARN");
            var I = K();
            I != null && (L = x(I)), l.call(v);
        }
        s = new d(), s.getLogger = function(g) {
            if (typeof g != "symbol" && typeof g != "string" || g === "") throw new TypeError("You must supply a name when creating a logger.");
            var v = o[g];
            return v || (v = o[g] = new d(g, s.methodFactory)), v;
        };
        var m = typeof window !== n ? window.log : void 0;
        return s.noConflict = function() {
            return typeof window !== n && window.log === s && (window.log = m), s;
        }, s.getLoggers = function() {
            return o;
        }, s.default = s, s;
    });
})(qt);
var Er = qt.exports;
const Tr = /* @__PURE__ */ xr(Er);
var Ze = function(e, t) {
    return Ze = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(n, r) {
        n.__proto__ = r;
    } || function(n, r) {
        for(var i in r)Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    }, Ze(e, t);
};
function q(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    Ze(e, t);
    function n() {
        this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Cr(e, t, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function(s) {
            s(o);
        });
    }
    return new (n || (n = Promise))(function(o, s) {
        function a(l) {
            try {
                u(r.next(l));
            } catch (f) {
                s(f);
            }
        }
        function c(l) {
            try {
                u(r.throw(l));
            } catch (f) {
                s(f);
            }
        }
        function u(l) {
            l.done ? o(l.value) : i(l.value).then(a, c);
        }
        u((r = r.apply(e, t || [])).next());
    });
}
function Xt(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (o[0] & 1) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    }, r, i, o, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return s.next = a(0), s.throw = a(1), s.return = a(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this;
    }), s;
    "TURBOPACK unreachable";
    function a(u) {
        return function(l) {
            return c([
                u,
                l
            ]);
        };
    }
    function c(u) {
        if (r) throw new TypeError("Generator is already executing.");
        for(; s && (s = 0, u[0] && (n = 0)), n;)try {
            if (r = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
            switch(i = 0, o && (u = [
                u[0] & 2,
                o.value
            ]), u[0]){
                case 0:
                case 1:
                    o = u;
                    break;
                case 4:
                    return n.label++, {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    n.label++, i = u[1], u = [
                        0
                    ];
                    continue;
                case 7:
                    u = n.ops.pop(), n.trys.pop();
                    continue;
                default:
                    if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        n = 0;
                        continue;
                    }
                    if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                        n.label = u[1];
                        break;
                    }
                    if (u[0] === 6 && n.label < o[1]) {
                        n.label = o[1], o = u;
                        break;
                    }
                    if (o && n.label < o[2]) {
                        n.label = o[2], n.ops.push(u);
                        break;
                    }
                    o[2] && n.ops.pop(), n.trys.pop();
                    continue;
            }
            u = t.call(e, n);
        } catch (l) {
            u = [
                6,
                l
            ], i = 0;
        } finally{
            r = o = 0;
        }
        if (u[0] & 5) throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        };
    }
}
function pe(e) {
    var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && r >= e.length && (e = void 0), {
                value: e && e[r++],
                done: !e
            };
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function he(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var r = n.call(e), i, o = [], s;
    try {
        for(; (t === void 0 || t-- > 0) && !(i = r.next()).done;)o.push(i.value);
    } catch (a) {
        s = {
            error: a
        };
    } finally{
        try {
            i && !i.done && (n = r.return) && n.call(r);
        } finally{
            if (s) throw s.error;
        }
    }
    return o;
}
function Se(e, t, n) {
    if (n || arguments.length === 2) for(var r = 0, i = t.length, o; r < i; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
    return e.concat(o || Array.prototype.slice.call(t));
}
function fe(e) {
    return this instanceof fe ? (this.v = e, this) : new fe(e);
}
function Pr(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []), i, o = [];
    return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", s), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    "TURBOPACK unreachable";
    function s(d) {
        return function(m) {
            return Promise.resolve(m).then(d, f);
        };
    }
    function a(d, m) {
        r[d] && (i[d] = function(p) {
            return new Promise(function(g, v) {
                o.push([
                    d,
                    p,
                    g,
                    v
                ]) > 1 || c(d, p);
            });
        }, m && (i[d] = m(i[d])));
    }
    function c(d, m) {
        try {
            u(r[d](m));
        } catch (p) {
            h(o[0][3], p);
        }
    }
    function u(d) {
        d.value instanceof fe ? Promise.resolve(d.value.v).then(l, f) : h(o[0][2], d);
    }
    function l(d) {
        c("next", d);
    }
    function f(d) {
        c("throw", d);
    }
    function h(d, m) {
        d(m), o.shift(), o.length && c(o[0][0], o[0][1]);
    }
}
function Ar(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof pe == "function" ? pe(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
        return this;
    }, n);
    "TURBOPACK unreachable";
    function r(o) {
        n[o] = e[o] && function(s) {
            return new Promise(function(a, c) {
                s = e[o](s), i(a, c, s.done, s.value);
            });
        };
    }
    function i(o, s, a, c) {
        Promise.resolve(c).then(function(u) {
            o({
                value: u,
                done: a
            });
        }, s);
    }
}
function A(e) {
    return typeof e == "function";
}
function ct(e) {
    var t = function(r) {
        Error.call(r), r.stack = new Error().stack;
    }, n = e(t);
    return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ze = ct(function(e) {
    return function(n) {
        e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
            return i + 1 + ") " + r.toString();
        }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
    };
});
function _e(e, t) {
    if (e) {
        var n = e.indexOf(t);
        0 <= n && e.splice(n, 1);
    }
}
var Te = function() {
    function e(t) {
        this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
    }
    return e.prototype.unsubscribe = function() {
        var t, n, r, i, o;
        if (!this.closed) {
            this.closed = !0;
            var s = this._parentage;
            if (s) if (this._parentage = null, Array.isArray(s)) try {
                for(var a = pe(s), c = a.next(); !c.done; c = a.next()){
                    var u = c.value;
                    u.remove(this);
                }
            } catch (p) {
                t = {
                    error: p
                };
            } finally{
                try {
                    c && !c.done && (n = a.return) && n.call(a);
                } finally{
                    if (t) throw t.error;
                }
            }
            else s.remove(this);
            var l = this.initialTeardown;
            if (A(l)) try {
                l();
            } catch (p) {
                o = p instanceof ze ? p.errors : [
                    p
                ];
            }
            var f = this._finalizers;
            if (f) {
                this._finalizers = null;
                try {
                    for(var h = pe(f), d = h.next(); !d.done; d = h.next()){
                        var m = d.value;
                        try {
                            Et(m);
                        } catch (p) {
                            o = o ?? [], p instanceof ze ? o = Se(Se([], he(o)), he(p.errors)) : o.push(p);
                        }
                    }
                } catch (p) {
                    r = {
                        error: p
                    };
                } finally{
                    try {
                        d && !d.done && (i = h.return) && i.call(h);
                    } finally{
                        if (r) throw r.error;
                    }
                }
            }
            if (o) throw new ze(o);
        }
    }, e.prototype.add = function(t) {
        var n;
        if (t && t !== this) if (this.closed) Et(t);
        else {
            if (t instanceof e) {
                if (t.closed || t._hasParent(this)) return;
                t._addParent(this);
            }
            (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
        }
    }, e.prototype._hasParent = function(t) {
        var n = this._parentage;
        return n === t || Array.isArray(n) && n.includes(t);
    }, e.prototype._addParent = function(t) {
        var n = this._parentage;
        this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [
            n,
            t
        ] : t;
    }, e.prototype._removeParent = function(t) {
        var n = this._parentage;
        n === t ? this._parentage = null : Array.isArray(n) && _e(n, t);
    }, e.prototype.remove = function(t) {
        var n = this._finalizers;
        n && _e(n, t), t instanceof e && t._removeParent(this);
    }, e.EMPTY = function() {
        var t = new e();
        return t.closed = !0, t;
    }(), e;
}(), Zt = Te.EMPTY;
function en(e) {
    return e instanceof Te || e && "closed" in e && A(e.remove) && A(e.add) && A(e.unsubscribe);
}
function Et(e) {
    A(e) ? e() : e.unsubscribe();
}
var tn = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
}, nn = {
    setTimeout: function(e, t) {
        for(var n = [], r = 2; r < arguments.length; r++)n[r - 2] = arguments[r];
        return setTimeout.apply(void 0, Se([
            e,
            t
        ], he(n)));
    },
    clearTimeout: function(e) {
        var t = nn.delegate;
        return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e);
    },
    delegate: void 0
};
function rn(e) {
    nn.setTimeout(function() {
        throw e;
    });
}
function Ie() {}
function Ae(e) {
    e();
}
var ut = function(e) {
    q(t, e);
    function t(n) {
        var r = e.call(this) || this;
        return r.isStopped = !1, n ? (r.destination = n, en(n) && n.add(r)) : r.destination = _r, r;
    }
    return t.create = function(n, r, i) {
        return new et(n, r, i);
    }, t.prototype.next = function(n) {
        this.isStopped || this._next(n);
    }, t.prototype.error = function(n) {
        this.isStopped || (this.isStopped = !0, this._error(n));
    }, t.prototype.complete = function() {
        this.isStopped || (this.isStopped = !0, this._complete());
    }, t.prototype.unsubscribe = function() {
        this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
    }, t.prototype._next = function(n) {
        this.destination.next(n);
    }, t.prototype._error = function(n) {
        try {
            this.destination.error(n);
        } finally{
            this.unsubscribe();
        }
    }, t.prototype._complete = function() {
        try {
            this.destination.complete();
        } finally{
            this.unsubscribe();
        }
    }, t;
}(Te), kr = Function.prototype.bind;
function Ye(e, t) {
    return kr.call(e, t);
}
var Or = function() {
    function e(t) {
        this.partialObserver = t;
    }
    return e.prototype.next = function(t) {
        var n = this.partialObserver;
        if (n.next) try {
            n.next(t);
        } catch (r) {
            Ce(r);
        }
    }, e.prototype.error = function(t) {
        var n = this.partialObserver;
        if (n.error) try {
            n.error(t);
        } catch (r) {
            Ce(r);
        }
        else Ce(t);
    }, e.prototype.complete = function() {
        var t = this.partialObserver;
        if (t.complete) try {
            t.complete();
        } catch (n) {
            Ce(n);
        }
    }, e;
}(), et = function(e) {
    q(t, e);
    function t(n, r, i) {
        var o = e.call(this) || this, s;
        if (A(n) || !n) s = {
            next: n ?? void 0,
            error: r ?? void 0,
            complete: i ?? void 0
        };
        else {
            var a;
            o && tn.useDeprecatedNextContext ? (a = Object.create(n), a.unsubscribe = function() {
                return o.unsubscribe();
            }, s = {
                next: n.next && Ye(n.next, a),
                error: n.error && Ye(n.error, a),
                complete: n.complete && Ye(n.complete, a)
            }) : s = n;
        }
        return o.destination = new Or(s), o;
    }
    return t;
}(ut);
function Ce(e) {
    rn(e);
}
function Lr(e) {
    throw e;
}
var _r = {
    closed: !0,
    next: Ie,
    error: Lr,
    complete: Ie
}, lt = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ft(e) {
    return e;
}
function Ir(e) {
    return e.length === 0 ? ft : e.length === 1 ? e[0] : function(n) {
        return e.reduce(function(r, i) {
            return i(r);
        }, n);
    };
}
var O = function() {
    function e(t) {
        t && (this._subscribe = t);
    }
    return e.prototype.lift = function(t) {
        var n = new e();
        return n.source = this, n.operator = t, n;
    }, e.prototype.subscribe = function(t, n, r) {
        var i = this, o = Mr(t) ? t : new et(t, n, r);
        return Ae(function() {
            var s = i, a = s.operator, c = s.source;
            o.add(a ? a.call(o, c) : c ? i._subscribe(o) : i._trySubscribe(o));
        }), o;
    }, e.prototype._trySubscribe = function(t) {
        try {
            return this._subscribe(t);
        } catch (n) {
            t.error(n);
        }
    }, e.prototype.forEach = function(t, n) {
        var r = this;
        return n = Tt(n), new n(function(i, o) {
            var s = new et({
                next: function(a) {
                    try {
                        t(a);
                    } catch (c) {
                        o(c), s.unsubscribe();
                    }
                },
                error: o,
                complete: i
            });
            r.subscribe(s);
        });
    }, e.prototype._subscribe = function(t) {
        var n;
        return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
    }, e.prototype[lt] = function() {
        return this;
    }, e.prototype.pipe = function() {
        for(var t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n];
        return Ir(t)(this);
    }, e.prototype.toPromise = function(t) {
        var n = this;
        return t = Tt(t), new t(function(r, i) {
            var o;
            n.subscribe(function(s) {
                return o = s;
            }, function(s) {
                return i(s);
            }, function() {
                return r(o);
            });
        });
    }, e.create = function(t) {
        return new e(t);
    }, e;
}();
function Tt(e) {
    var t;
    return (t = e ?? tn.Promise) !== null && t !== void 0 ? t : Promise;
}
function Dr(e) {
    return e && A(e.next) && A(e.error) && A(e.complete);
}
function Mr(e) {
    return e && e instanceof ut || Dr(e) && en(e);
}
function Rr(e) {
    return A(e == null ? void 0 : e.lift);
}
function B(e) {
    return function(t) {
        if (Rr(t)) return t.lift(function(n) {
            try {
                return e(n, this);
            } catch (r) {
                this.error(r);
            }
        });
        throw new TypeError("Unable to lift unknown Observable type");
    };
}
function j(e, t, n, r, i) {
    return new Nr(e, t, n, r, i);
}
var Nr = function(e) {
    q(t, e);
    function t(n, r, i, o, s, a) {
        var c = e.call(this, n) || this;
        return c.onFinalize = s, c.shouldUnsubscribe = a, c._next = r ? function(u) {
            try {
                r(u);
            } catch (l) {
                n.error(l);
            }
        } : e.prototype._next, c._error = o ? function(u) {
            try {
                o(u);
            } catch (l) {
                n.error(l);
            } finally{
                this.unsubscribe();
            }
        } : e.prototype._error, c._complete = i ? function() {
            try {
                i();
            } catch (u) {
                n.error(u);
            } finally{
                this.unsubscribe();
            }
        } : e.prototype._complete, c;
    }
    return t.prototype.unsubscribe = function() {
        var n;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var r = this.closed;
            e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
        }
    }, t;
}(ut), $r = ct(function(e) {
    return function() {
        e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
    };
}), re = function(e) {
    q(t, e);
    function t() {
        var n = e.call(this) || this;
        return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
    }
    return t.prototype.lift = function(n) {
        var r = new Ct(this, this);
        return r.operator = n, r;
    }, t.prototype._throwIfClosed = function() {
        if (this.closed) throw new $r();
    }, t.prototype.next = function(n) {
        var r = this;
        Ae(function() {
            var i, o;
            if (r._throwIfClosed(), !r.isStopped) {
                r.currentObservers || (r.currentObservers = Array.from(r.observers));
                try {
                    for(var s = pe(r.currentObservers), a = s.next(); !a.done; a = s.next()){
                        var c = a.value;
                        c.next(n);
                    }
                } catch (u) {
                    i = {
                        error: u
                    };
                } finally{
                    try {
                        a && !a.done && (o = s.return) && o.call(s);
                    } finally{
                        if (i) throw i.error;
                    }
                }
            }
        });
    }, t.prototype.error = function(n) {
        var r = this;
        Ae(function() {
            if (r._throwIfClosed(), !r.isStopped) {
                r.hasError = r.isStopped = !0, r.thrownError = n;
                for(var i = r.observers; i.length;)i.shift().error(n);
            }
        });
    }, t.prototype.complete = function() {
        var n = this;
        Ae(function() {
            if (n._throwIfClosed(), !n.isStopped) {
                n.isStopped = !0;
                for(var r = n.observers; r.length;)r.shift().complete();
            }
        });
    }, t.prototype.unsubscribe = function() {
        this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
    }, Object.defineProperty(t.prototype, "observed", {
        get: function() {
            var n;
            return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype._trySubscribe = function(n) {
        return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
    }, t.prototype._subscribe = function(n) {
        return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
    }, t.prototype._innerSubscribe = function(n) {
        var r = this, i = this, o = i.hasError, s = i.isStopped, a = i.observers;
        return o || s ? Zt : (this.currentObservers = null, a.push(n), new Te(function() {
            r.currentObservers = null, _e(a, n);
        }));
    }, t.prototype._checkFinalizedStatuses = function(n) {
        var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
        i ? n.error(o) : s && n.complete();
    }, t.prototype.asObservable = function() {
        var n = new O();
        return n.source = this, n;
    }, t.create = function(n, r) {
        return new Ct(n, r);
    }, t;
}(O), Ct = function(e) {
    q(t, e);
    function t(n, r) {
        var i = e.call(this) || this;
        return i.destination = n, i.source = r, i;
    }
    return t.prototype.next = function(n) {
        var r, i;
        (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
    }, t.prototype.error = function(n) {
        var r, i;
        (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
    }, t.prototype.complete = function() {
        var n, r;
        (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
    }, t.prototype._subscribe = function(n) {
        var r, i;
        return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Zt;
    }, t;
}(re), on = function(e) {
    q(t, e);
    function t(n) {
        var r = e.call(this) || this;
        return r._value = n, r;
    }
    return Object.defineProperty(t.prototype, "value", {
        get: function() {
            return this.getValue();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype._subscribe = function(n) {
        var r = e.prototype._subscribe.call(this, n);
        return !r.closed && n.next(this._value), r;
    }, t.prototype.getValue = function() {
        var n = this, r = n.hasError, i = n.thrownError, o = n._value;
        if (r) throw i;
        return this._throwIfClosed(), o;
    }, t.prototype.next = function(n) {
        e.prototype.next.call(this, this._value = n);
    }, t;
}(re), Ur = {
    now: function() {
        return Date.now();
    },
    delegate: void 0
}, Fr = function(e) {
    q(t, e);
    function t(n, r) {
        return e.call(this) || this;
    }
    return t.prototype.schedule = function(n, r) {
        return this;
    }, t;
}(Te), Pt = {
    setInterval: function(e, t) {
        for(var n = [], r = 2; r < arguments.length; r++)n[r - 2] = arguments[r];
        return setInterval.apply(void 0, Se([
            e,
            t
        ], he(n)));
    },
    clearInterval: function(e) {
        return clearInterval(e);
    },
    delegate: void 0
}, jr = function(e) {
    q(t, e);
    function t(n, r) {
        var i = e.call(this, n, r) || this;
        return i.scheduler = n, i.work = r, i.pending = !1, i;
    }
    return t.prototype.schedule = function(n, r) {
        var i;
        if (r === void 0 && (r = 0), this.closed) return this;
        this.state = n;
        var o = this.id, s = this.scheduler;
        return o != null && (this.id = this.recycleAsyncId(s, o, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(s, this.id, r), this;
    }, t.prototype.requestAsyncId = function(n, r, i) {
        return i === void 0 && (i = 0), Pt.setInterval(n.flush.bind(n, this), i);
    }, t.prototype.recycleAsyncId = function(n, r, i) {
        if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1) return r;
        r != null && Pt.clearInterval(r);
    }, t.prototype.execute = function(n, r) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var i = this._execute(n, r);
        if (i) return i;
        this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }, t.prototype._execute = function(n, r) {
        var i = !1, o;
        try {
            this.work(n);
        } catch (s) {
            i = !0, o = s || new Error("Scheduled action threw falsy error");
        }
        if (i) return this.unsubscribe(), o;
    }, t.prototype.unsubscribe = function() {
        if (!this.closed) {
            var n = this, r = n.id, i = n.scheduler, o = i.actions;
            this.work = this.state = this.scheduler = null, this.pending = !1, _e(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, e.prototype.unsubscribe.call(this);
        }
    }, t;
}(Fr), At = function() {
    function e(t, n) {
        n === void 0 && (n = e.now), this.schedulerActionCtor = t, this.now = n;
    }
    return e.prototype.schedule = function(t, n, r) {
        return n === void 0 && (n = 0), new this.schedulerActionCtor(this, t).schedule(r, n);
    }, e.now = Ur.now, e;
}(), Wr = function(e) {
    q(t, e);
    function t(n, r) {
        r === void 0 && (r = At.now);
        var i = e.call(this, n, r) || this;
        return i.actions = [], i._active = !1, i;
    }
    return t.prototype.flush = function(n) {
        var r = this.actions;
        if (this._active) {
            r.push(n);
            return;
        }
        var i;
        this._active = !0;
        do if (i = n.execute(n.state, n.delay)) break;
        while (n = r.shift())
        if (this._active = !1, i) {
            for(; n = r.shift();)n.unsubscribe();
            throw i;
        }
    }, t;
}(At), Br = new Wr(jr), Vr = new O(function(e) {
    return e.complete();
});
function Hr(e) {
    return e && A(e.schedule);
}
function sn(e) {
    return e[e.length - 1];
}
function Be(e) {
    return Hr(sn(e)) ? e.pop() : void 0;
}
function zr(e, t) {
    return typeof sn(e) == "number" ? e.pop() : t;
}
var dt = function(e) {
    return e && typeof e.length == "number" && typeof e != "function";
};
function an(e) {
    return A(e == null ? void 0 : e.then);
}
function cn(e) {
    return A(e[lt]);
}
function un(e) {
    return Symbol.asyncIterator && A(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function ln(e) {
    return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Yr() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var fn = Yr();
function dn(e) {
    return A(e == null ? void 0 : e[fn]);
}
function pn(e) {
    return Pr(this, arguments, function() {
        var n, r, i, o;
        return Xt(this, function(s) {
            switch(s.label){
                case 0:
                    n = e.getReader(), s.label = 1;
                case 1:
                    s.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]), s.label = 2;
                case 2:
                    return [
                        4,
                        fe(n.read())
                    ];
                case 3:
                    return r = s.sent(), i = r.value, o = r.done, o ? [
                        4,
                        fe(void 0)
                    ] : [
                        3,
                        5
                    ];
                case 4:
                    return [
                        2,
                        s.sent()
                    ];
                case 5:
                    return [
                        4,
                        fe(i)
                    ];
                case 6:
                    return [
                        4,
                        s.sent()
                    ];
                case 7:
                    return s.sent(), [
                        3,
                        2
                    ];
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    return n.releaseLock(), [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
}
function hn(e) {
    return A(e == null ? void 0 : e.getReader);
}
function Y(e) {
    if (e instanceof O) return e;
    if (e != null) {
        if (cn(e)) return Gr(e);
        if (dt(e)) return Kr(e);
        if (an(e)) return Qr(e);
        if (un(e)) return vn(e);
        if (dn(e)) return Jr(e);
        if (hn(e)) return qr(e);
    }
    throw ln(e);
}
function Gr(e) {
    return new O(function(t) {
        var n = e[lt]();
        if (A(n.subscribe)) return n.subscribe(t);
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
}
function Kr(e) {
    return new O(function(t) {
        for(var n = 0; n < e.length && !t.closed; n++)t.next(e[n]);
        t.complete();
    });
}
function Qr(e) {
    return new O(function(t) {
        e.then(function(n) {
            t.closed || (t.next(n), t.complete());
        }, function(n) {
            return t.error(n);
        }).then(null, rn);
    });
}
function Jr(e) {
    return new O(function(t) {
        var n, r;
        try {
            for(var i = pe(e), o = i.next(); !o.done; o = i.next()){
                var s = o.value;
                if (t.next(s), t.closed) return;
            }
        } catch (a) {
            n = {
                error: a
            };
        } finally{
            try {
                o && !o.done && (r = i.return) && r.call(i);
            } finally{
                if (n) throw n.error;
            }
        }
        t.complete();
    });
}
function vn(e) {
    return new O(function(t) {
        Xr(e, t).catch(function(n) {
            return t.error(n);
        });
    });
}
function qr(e) {
    return vn(pn(e));
}
function Xr(e, t) {
    var n, r, i, o;
    return Cr(this, void 0, void 0, function() {
        var s, a;
        return Xt(this, function(c) {
            switch(c.label){
                case 0:
                    c.trys.push([
                        0,
                        5,
                        6,
                        11
                    ]), n = Ar(e), c.label = 1;
                case 1:
                    return [
                        4,
                        n.next()
                    ];
                case 2:
                    if (r = c.sent(), !!r.done) return [
                        3,
                        4
                    ];
                    if (s = r.value, t.next(s), t.closed) return [
                        2
                    ];
                    c.label = 3;
                case 3:
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        3,
                        11
                    ];
                case 5:
                    return a = c.sent(), i = {
                        error: a
                    }, [
                        3,
                        11
                    ];
                case 6:
                    return c.trys.push([
                        6,
                        ,
                        9,
                        10
                    ]), r && !r.done && (o = n.return) ? [
                        4,
                        o.call(n)
                    ] : [
                        3,
                        8
                    ];
                case 7:
                    c.sent(), c.label = 8;
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    if (i) throw i.error;
                    return [
                        7
                    ];
                case 10:
                    return [
                        7
                    ];
                case 11:
                    return t.complete(), [
                        2
                    ];
            }
        });
    });
}
function ee(e, t, n, r, i) {
    r === void 0 && (r = 0), i === void 0 && (i = !1);
    var o = t.schedule(function() {
        n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
    }, r);
    if (e.add(o), !i) return o;
}
function mn(e, t) {
    return t === void 0 && (t = 0), B(function(n, r) {
        n.subscribe(j(r, function(i) {
            return ee(r, e, function() {
                return r.next(i);
            }, t);
        }, function() {
            return ee(r, e, function() {
                return r.complete();
            }, t);
        }, function(i) {
            return ee(r, e, function() {
                return r.error(i);
            }, t);
        }));
    });
}
function gn(e, t) {
    return t === void 0 && (t = 0), B(function(n, r) {
        r.add(e.schedule(function() {
            return n.subscribe(r);
        }, t));
    });
}
function Zr(e, t) {
    return Y(e).pipe(gn(t), mn(t));
}
function ei(e, t) {
    return Y(e).pipe(gn(t), mn(t));
}
function ti(e, t) {
    return new O(function(n) {
        var r = 0;
        return t.schedule(function() {
            r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
        });
    });
}
function ni(e, t) {
    return new O(function(n) {
        var r;
        return ee(n, t, function() {
            r = e[fn](), ee(n, t, function() {
                var i, o, s;
                try {
                    i = r.next(), o = i.value, s = i.done;
                } catch (a) {
                    n.error(a);
                    return;
                }
                s ? n.complete() : n.next(o);
            }, 0, !0);
        }), function() {
            return A(r == null ? void 0 : r.return) && r.return();
        };
    });
}
function bn(e, t) {
    if (!e) throw new Error("Iterable cannot be null");
    return new O(function(n) {
        ee(n, t, function() {
            var r = e[Symbol.asyncIterator]();
            ee(n, t, function() {
                r.next().then(function(i) {
                    i.done ? n.complete() : n.next(i.value);
                });
            }, 0, !0);
        });
    });
}
function ri(e, t) {
    return bn(pn(e), t);
}
function ii(e, t) {
    if (e != null) {
        if (cn(e)) return Zr(e, t);
        if (dt(e)) return ti(e, t);
        if (an(e)) return ei(e, t);
        if (un(e)) return bn(e, t);
        if (dn(e)) return ni(e, t);
        if (hn(e)) return ri(e, t);
    }
    throw ln(e);
}
function pt(e, t) {
    return t ? ii(e, t) : Y(e);
}
function kt() {
    for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
    var n = Be(e);
    return pt(e, n);
}
function oi(e) {
    return e instanceof Date && !isNaN(e);
}
var si = ct(function(e) {
    return function(n) {
        n === void 0 && (n = null), e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = n;
    };
});
function ai(e, t) {
    var n = oi(e) ? {
        first: e
    } : typeof e == "number" ? {
        each: e
    } : e, r = n.first, i = n.each, o = n.with, s = o === void 0 ? ci : o, a = n.scheduler, c = a === void 0 ? Br : a, u = n.meta, l = u === void 0 ? null : u;
    if (r == null && i == null) throw new TypeError("No timeout provided.");
    return B(function(f, h) {
        var d, m, p = null, g = 0, v = function(E) {
            m = ee(h, c, function() {
                try {
                    d.unsubscribe(), Y(s({
                        meta: l,
                        lastValue: p,
                        seen: g
                    })).subscribe(h);
                } catch (P) {
                    h.error(P);
                }
            }, E);
        };
        d = f.subscribe(j(h, function(E) {
            m == null || m.unsubscribe(), g++, h.next(p = E), i > 0 && v(i);
        }, void 0, void 0, function() {
            m != null && m.closed || m == null || m.unsubscribe(), p = null;
        })), !g && v(r != null ? typeof r == "number" ? r : +r - c.now() : i);
    });
}
function ci(e) {
    throw new si(e);
}
function k(e, t) {
    return B(function(n, r) {
        var i = 0;
        n.subscribe(j(r, function(o) {
            r.next(e.call(t, o, i++));
        }));
    });
}
var ui = Array.isArray;
function li(e, t) {
    return ui(t) ? e.apply(void 0, Se([], he(t))) : e(t);
}
function fi(e) {
    return k(function(t) {
        return li(e, t);
    });
}
function di(e, t, n, r, i, o, s, a) {
    var c = [], u = 0, l = 0, f = !1, h = function() {
        f && !c.length && !u && t.complete();
    }, d = function(p) {
        return u < r ? m(p) : c.push(p);
    }, m = function(p) {
        u++;
        var g = !1;
        Y(n(p, l++)).subscribe(j(t, function(v) {
            t.next(v);
        }, function() {
            g = !0;
        }, void 0, function() {
            if (g) try {
                u--;
                for(var v = function() {
                    var E = c.shift();
                    s || m(E);
                }; c.length && u < r;)v();
                h();
            } catch (E) {
                t.error(E);
            }
        }));
    };
    return e.subscribe(j(t, d, function() {
        f = !0, h();
    })), function() {};
}
function ht(e, t, n) {
    return n === void 0 && (n = 1 / 0), A(t) ? ht(function(r, i) {
        return k(function(o, s) {
            return t(r, o, i, s);
        })(Y(e(r, i)));
    }, n) : (typeof t == "number" && (n = t), B(function(r, i) {
        return di(r, i, e, n);
    }));
}
function yn(e) {
    return e === void 0 && (e = 1 / 0), ht(ft, e);
}
function pi() {
    return yn(1);
}
function De() {
    for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
    return pi()(pt(e, Be(e)));
}
var hi = [
    "addListener",
    "removeListener"
], vi = [
    "addEventListener",
    "removeEventListener"
], mi = [
    "on",
    "off"
];
function tt(e, t, n, r) {
    if (A(n) && (r = n, n = void 0), r) return tt(e, t, n).pipe(fi(r));
    var i = he(yi(e) ? vi.map(function(a) {
        return function(c) {
            return e[a](t, c, n);
        };
    }) : gi(e) ? hi.map(Ot(e, t)) : bi(e) ? mi.map(Ot(e, t)) : [], 2), o = i[0], s = i[1];
    if (!o && dt(e)) return ht(function(a) {
        return tt(a, t, n);
    })(Y(e));
    if (!o) throw new TypeError("Invalid event target");
    return new O(function(a) {
        var c = function() {
            for(var u = [], l = 0; l < arguments.length; l++)u[l] = arguments[l];
            return a.next(1 < u.length ? u : u[0]);
        };
        return o(c), function() {
            return s(c);
        };
    });
}
function Ot(e, t) {
    return function(n) {
        return function(r) {
            return e[n](t, r);
        };
    };
}
function gi(e) {
    return A(e.addListener) && A(e.removeListener);
}
function bi(e) {
    return A(e.on) && A(e.off);
}
function yi(e) {
    return A(e.addEventListener) && A(e.removeEventListener);
}
function wi() {
    for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
    var n = Be(e), r = zr(e, 1 / 0), i = e;
    return i.length ? i.length === 1 ? Y(i[0]) : yn(r)(pt(i, n)) : Vr;
}
function vt(e, t) {
    return B(function(n, r) {
        var i = 0;
        n.subscribe(j(r, function(o) {
            return e.call(t, o, i++) && r.next(o);
        }));
    });
}
function Si(e, t, n, r, i) {
    return function(o, s) {
        var a = n, c = t, u = 0;
        o.subscribe(j(s, function(l) {
            var f = u++;
            c = a ? e(c, l, f) : (a = !0, l), s.next(c);
        }, i));
    };
}
function xi(e, t) {
    return t === void 0 && (t = ft), e = e ?? Ei, B(function(n, r) {
        var i, o = !0;
        n.subscribe(j(r, function(s) {
            var a = t(s);
            (o || !e(i, a)) && (o = !1, i = a, r.next(s));
        }));
    });
}
function Ei(e, t) {
    return e === t;
}
function Ti(e) {
    return B(function(t, n) {
        try {
            t.subscribe(n);
        } finally{
            n.add(e);
        }
    });
}
function Ci(e, t) {
    return B(Si(e, t, arguments.length >= 2, !0));
}
function Pi(e) {
    return B(function(t, n) {
        var r = !1, i = j(n, function() {
            i == null || i.unsubscribe(), r = !0;
        }, Ie);
        Y(e).subscribe(i), t.subscribe(j(n, function(o) {
            return r && n.next(o);
        }));
    });
}
function R() {
    for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
    var n = Be(e);
    return B(function(r, i) {
        (n ? De(e, r, n) : De(e, r)).subscribe(i);
    });
}
function wn(e, t) {
    return B(function(n, r) {
        var i = null, o = 0, s = !1, a = function() {
            return s && !i && r.complete();
        };
        n.subscribe(j(r, function(c) {
            i == null || i.unsubscribe();
            var u = 0, l = o++;
            Y(e(c, l)).subscribe(i = j(r, function(f) {
                return r.next(t ? t(c, f, l, u++) : f);
            }, function() {
                i = null, a();
            }));
        }, function() {
            s = !0, a();
        }));
    });
}
function Lt(e) {
    return B(function(t, n) {
        Y(e).subscribe(j(n, function() {
            return n.complete();
        }, Ie)), !n.closed && t.subscribe(n);
    });
}
var Ai = Object.defineProperty, ki = Object.defineProperties, Oi = Object.getOwnPropertyDescriptors, _t = Object.getOwnPropertySymbols, Li = Object.prototype.hasOwnProperty, _i = Object.prototype.propertyIsEnumerable, It = (e, t, n)=>t in e ? Ai(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, Q = (e, t)=>{
    for(var n in t || (t = {}))Li.call(t, n) && It(e, n, t[n]);
    if (_t) for (var n of _t(t))_i.call(t, n) && It(e, n, t[n]);
    return e;
}, ye = (e, t)=>ki(e, Oi(t)), W = (e, t, n)=>new Promise((r, i)=>{
        var o = (c)=>{
            try {
                a(n.next(c));
            } catch (u) {
                i(u);
            }
        }, s = (c)=>{
            try {
                a(n.throw(c));
            } catch (u) {
                i(u);
            }
        }, a = (c)=>c.done ? r(c.value) : Promise.resolve(c.value).then(o, s);
        a((n = n.apply(e, t)).next());
    }), Sn = "lk";
function F(e) {
    return typeof e > "u" ? !1 : Ii(e) || Di(e);
}
function Ii(e) {
    var t;
    return e ? e.hasOwnProperty("participant") && e.hasOwnProperty("source") && e.hasOwnProperty("track") && typeof ((t = e.publication) == null ? void 0 : t.track) < "u" : !1;
}
function Di(e) {
    return e ? e.hasOwnProperty("participant") && e.hasOwnProperty("source") && e.hasOwnProperty("publication") && typeof e.publication < "u" : !1;
}
function xe(e) {
    return e ? e.hasOwnProperty("participant") && e.hasOwnProperty("source") && typeof e.publication > "u" : !1;
}
function N(e) {
    if (typeof e == "string" || typeof e == "number") return `${e}`;
    if (xe(e)) return `${e.participant.identity}_${e.source}_placeholder`;
    if (F(e)) return `${e.participant.identity}_${e.publication.source}_${e.publication.trackSid}`;
    throw new Error(`Can't generate a id for the given track reference: ${e}`);
}
function Ao(e, t) {
    return e === void 0 || t === void 0 ? !1 : F(e) && F(t) ? e.publication.trackSid === t.publication.trackSid : N(e) === N(t);
}
function ko(e, t) {
    return typeof t > "u" ? !1 : F(e) ? t.some((n)=>n.participant.identity === e.participant.identity && F(n) && n.publication.trackSid === e.publication.trackSid) : xe(e) ? t.some((n)=>n.participant.identity === e.participant.identity && xe(n) && n.source === e.source) : !1;
}
function Mi(e, t) {
    return xe(e) && F(t) && t.participant.identity === e.participant.identity && t.source === e.source;
}
function Oo(e) {
    return e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalParticipant"];
}
function Lo() {
    const e = document.createElement("p");
    e.style.width = "100%", e.style.height = "200px";
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
    const n = e.offsetWidth;
    t.style.overflow = "scroll";
    let r = e.offsetWidth;
    return n === r && (r = t.clientWidth), document.body.removeChild(t), n - r;
}
function _o() {
    return typeof document < "u";
}
function Ri(e) {
    e = Q({}, e);
    const t = "(?:(?:[a-z]+:)?//)?", n = "(?:\\S+(?::\\S*)?@)?", r = new RegExp("(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", "g").source, u = `(?:${t}|www\\.)${n}(?:localhost|${r}|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#][^\\s"]*)?`;
    return e.exact ? new RegExp(`(?:^${u}$)`, "i") : new RegExp(u, "ig");
}
var Dt = "[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*";
function Ni({ exact: e } = {}) {
    return e ? new RegExp(`^${Dt}$`) : new RegExp(Dt, "g");
}
function Io(e, t) {
    return W(this, null, function*() {
        const { x: n, y: r } = yield wr(e, t, {
            placement: "top",
            middleware: [
                gr(6),
                yr(),
                br({
                    padding: 5
                })
            ]
        });
        return {
            x: n,
            y: r
        };
    });
}
function Do(e, t) {
    return !e.contains(t.target);
}
var Mo = ()=>({
        email: Ni(),
        url: Ri({})
    });
function Ro(e, t) {
    const n = Object.entries(t).map(([o, s], a)=>Array.from(e.matchAll(s)).map(({ index: c, 0: u })=>({
                type: o,
                weight: a,
                content: u,
                index: c ?? 0
            }))).flat().sort((o, s)=>{
        const a = o.index - s.index;
        return a !== 0 ? a : o.weight - s.weight;
    }).filter(({ index: o }, s, a)=>{
        if (s === 0) return !0;
        const c = a[s - 1];
        return c.index + c.content.length <= o;
    }), r = [];
    let i = 0;
    for (const { type: o, content: s, index: a } of n)a > i && r.push(e.substring(i, a)), r.push({
        type: o,
        content: s
    }), i = a + s.length;
    return e.length > i && r.push(e.substring(i)), r;
}
var $i = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ConnectionStateChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].RoomMetadataChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ActiveSpeakersChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ConnectionQualityChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantPermissionsChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantMetadataChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantNameChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantAttributesChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackMuted,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnmuted,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackPublished,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnpublished,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackStreamStateChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackSubscriptionFailed,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackSubscriptionPermissionChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackSubscriptionStatusChanged
], xn = [
    ...$i,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].LocalTrackPublished,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].LocalTrackUnpublished
], Ui = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackPublished,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackUnpublished,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackMuted,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackUnmuted,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackStreamStateChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackSubscribed,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackUnsubscribed,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackSubscriptionPermissionChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackSubscriptionFailed,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].LocalTrackPublished,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].LocalTrackUnpublished
], Fi = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].ConnectionQualityChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].IsSpeakingChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].ParticipantMetadataChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].ParticipantPermissionsChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackMuted,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackUnmuted,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackPublished,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackUnpublished,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackStreamStateChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackSubscriptionFailed,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackSubscriptionPermissionChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackSubscriptionStatusChanged
], En = [
    ...Fi,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].LocalTrackPublished,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].LocalTrackUnpublished
], _ = Tr.getLogger("lk-components-js");
_.setDefaultLevel("WARN");
function No(e, t = {}) {
    var n;
    _.setLevel(e), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLogLevel"])((n = t.liveKitClientLogLevel) != null ? n : e);
}
function $o(e, t = {}) {
    var n;
    const r = _.methodFactory;
    _.methodFactory = (i, o, s)=>{
        const a = r(i, o, s), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogLevel"][i], u = c >= o && c < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogLevel"].silent;
        return (l, f)=>{
            f ? a(l, f) : a(l), u && e(c, l, f);
        };
    }, _.setLevel(_.getLevel()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLogExtension"])((n = t.liveKitClientLogExtension) != null ? n : e);
}
var Uo = [
    {
        columns: 1,
        rows: 1
    },
    {
        columns: 1,
        rows: 2,
        orientation: "portrait"
    },
    {
        columns: 2,
        rows: 1,
        orientation: "landscape"
    },
    {
        columns: 2,
        rows: 2,
        minWidth: 560
    },
    {
        columns: 3,
        rows: 3,
        minWidth: 700
    },
    {
        columns: 4,
        rows: 4,
        minWidth: 960
    },
    {
        columns: 5,
        rows: 5,
        minWidth: 1100
    }
];
function ji(e, t, n, r) {
    if (e.length < 1) throw new Error("At least one grid layout definition must be provided.");
    const i = Wi(e);
    if (n <= 0 || r <= 0) return i[0];
    let o = 0;
    const s = n / r > 1 ? "landscape" : "portrait";
    let a = i.find((c, u, l)=>{
        o = u;
        const f = l.findIndex((h, d)=>{
            const m = !h.orientation || h.orientation === s, p = d > u, g = h.maxTiles === c.maxTiles;
            return p && g && m;
        }) !== -1;
        return c.maxTiles >= t && !f;
    });
    if (a === void 0) if (a = i[i.length - 1], a) _.warn(`No layout found for: participantCount: ${t}, width/height: ${n}/${r} fallback to biggest available layout (${a}).`);
    else throw new Error("No layout or fallback layout found.");
    if ((n < a.minWidth || r < a.minHeight) && o > 0) {
        const c = i[o - 1];
        a = ji(i.slice(0, o), c.maxTiles, n, r);
    }
    return a;
}
function Wi(e) {
    return [
        ...e
    ].map((t)=>{
        var n, r;
        return {
            name: `${t.columns}x${t.rows}`,
            columns: t.columns,
            rows: t.rows,
            maxTiles: t.columns * t.rows,
            minWidth: (n = t.minWidth) != null ? n : 0,
            minHeight: (r = t.minHeight) != null ? r : 0,
            orientation: t.orientation
        };
    }).sort((t, n)=>t.maxTiles !== n.maxTiles ? t.maxTiles - n.maxTiles : t.minWidth !== 0 || n.minWidth !== 0 ? t.minWidth - n.minWidth : t.minHeight !== 0 || n.minHeight !== 0 ? t.minHeight - n.minHeight : 0);
}
function Fo() {
    return typeof navigator < "u" && navigator.mediaDevices && !!navigator.mediaDevices.getDisplayMedia;
}
function jo(e, t) {
    var n;
    return ye(Q({}, e), {
        receivedAtMediaTimestamp: (n = t.rtpTimestamp) != null ? n : 0,
        receivedAt: t.timestamp
    });
}
function Wo(e, t, n) {
    return [
        ...e,
        ...t
    ].reduceRight((r, i)=>(r.find((o)=>o.id === i.id) || r.unshift(i), r), []).slice(0 - n);
}
var Tn = [], Cn = {
    showChat: !1,
    unreadMessages: 0,
    showSettings: !1
};
function Bi(e) {
    return typeof e == "object";
}
function Bo(e) {
    return Array.isArray(e) && e.filter(Bi).length > 0;
}
function Pn(e, t) {
    return t.audioLevel - e.audioLevel;
}
function An(e, t) {
    return e.isSpeaking === t.isSpeaking ? 0 : e.isSpeaking ? -1 : 1;
}
function kn(e, t) {
    var n, r, i, o;
    return e.lastSpokeAt !== void 0 || t.lastSpokeAt !== void 0 ? ((r = (n = t.lastSpokeAt) == null ? void 0 : n.getTime()) != null ? r : 0) - ((o = (i = e.lastSpokeAt) == null ? void 0 : i.getTime()) != null ? o : 0) : 0;
}
function Me(e, t) {
    var n, r, i, o;
    return ((r = (n = e.joinedAt) == null ? void 0 : n.getTime()) != null ? r : 0) - ((o = (i = t.joinedAt) == null ? void 0 : i.getTime()) != null ? o : 0);
}
function Vi(e, t) {
    return F(e) ? F(t) ? 0 : -1 : F(t) ? 1 : 0;
}
function Hi(e, t) {
    const n = e.participant.isCameraEnabled, r = t.participant.isCameraEnabled;
    return n !== r ? n ? -1 : 1 : 0;
}
function Vo(e) {
    const t = [], n = [], r = [], i = [];
    e.forEach((a)=>{
        a.participant.isLocal && a.source === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera ? t.push(a) : a.source === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare ? n.push(a) : a.source === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera ? r.push(a) : i.push(a);
    });
    const o = zi(n), s = Yi(r);
    return [
        ...t,
        ...o,
        ...s,
        ...i
    ];
}
function zi(e) {
    const t = [], n = [];
    return e.forEach((i)=>{
        i.participant.isLocal ? t.push(i) : n.push(i);
    }), t.sort((i, o)=>Me(i.participant, o.participant)), n.sort((i, o)=>Me(i.participant, o.participant)), [
        ...n,
        ...t
    ];
}
function Yi(e) {
    const t = [], n = [];
    return e.forEach((r)=>{
        r.participant.isLocal ? t.push(r) : n.push(r);
    }), n.sort((r, i)=>r.participant.isSpeaking && i.participant.isSpeaking ? Pn(r.participant, i.participant) : r.participant.isSpeaking !== i.participant.isSpeaking ? An(r.participant, i.participant) : r.participant.lastSpokeAt !== i.participant.lastSpokeAt ? kn(r.participant, i.participant) : F(r) !== F(i) ? Vi(r, i) : r.participant.isCameraEnabled !== i.participant.isCameraEnabled ? Hi(r, i) : Me(r.participant, i.participant)), [
        ...t,
        ...n
    ];
}
function Ho(e) {
    const t = [
        ...e
    ];
    t.sort((r, i)=>{
        if (r.isSpeaking && i.isSpeaking) return Pn(r, i);
        if (r.isSpeaking !== i.isSpeaking) return An(r, i);
        if (r.lastSpokeAt !== i.lastSpokeAt) return kn(r, i);
        const o = r.videoTrackPublications.size > 0, s = i.videoTrackPublications.size > 0;
        return o !== s ? o ? -1 : 1 : Me(r, i);
    });
    const n = t.find((r)=>r instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalParticipant"]);
    if (n) {
        const r = t.indexOf(n);
        r >= 0 && (t.splice(r, 1), t.length > 0 ? t.splice(0, 0, n) : t.push(n));
    }
    return t;
}
function Gi(e, t) {
    return e.reduce((n, r, i)=>i % t === 0 ? [
            ...n,
            [
                r
            ]
        ] : [
            ...n.slice(0, -1),
            [
                ...n.slice(-1)[0],
                r
            ]
        ], []);
}
function Mt(e, t) {
    const n = Math.max(e.length, t.length);
    return new Array(n).fill([]).map((r, i)=>[
            e[i],
            t[i]
        ]);
}
function Re(e, t, n) {
    return e.filter((r)=>!t.map((i)=>n(i)).includes(n(r)));
}
function nt(e) {
    return e.map((t)=>typeof t == "string" || typeof t == "number" ? `${t}` : N(t));
}
function Ki(e, t) {
    return {
        dropped: Re(e, t, N),
        added: Re(t, e, N)
    };
}
function Qi(e) {
    return e.added.length !== 0 || e.dropped.length !== 0;
}
function rt(e, t) {
    const n = t.findIndex((r)=>N(r) === N(e));
    if (n === -1) throw new Error(`Element not part of the array: ${N(e)} not in ${nt(t)}`);
    return n;
}
function Ji(e, t, n) {
    const r = rt(e, n), i = rt(t, n);
    return n.splice(r, 1, t), n.splice(i, 1, e), n;
}
function qi(e, t) {
    const n = rt(e, t);
    return t.splice(n, 1), t;
}
function Xi(e, t) {
    return [
        ...t,
        e
    ];
}
function Ge(e, t) {
    return Gi(e, t);
}
function zo(e, t, n) {
    let r = Zi(e, t);
    if (r.length < t.length) {
        const s = Re(t, r, N);
        r = [
            ...r,
            ...s
        ];
    }
    const i = Ge(r, n), o = Ge(t, n);
    if (Mt(i, o).forEach(([s, a], c)=>{
        if (s && a) {
            const u = Ge(r, n)[c], l = Ki(u, a);
            Qi(l) && (_.debug(`Detected visual changes on page: ${c}, current: ${nt(s)}, next: ${nt(a)}`, {
                changes: l
            }), l.added.length === l.dropped.length && Mt(l.added, l.dropped).forEach(([f, h])=>{
                if (f && h) r = Ji(f, h, r);
                else throw new Error(`For a swap action we need a addition and a removal one is missing: ${f}, ${h}`);
            }), l.added.length === 0 && l.dropped.length > 0 && l.dropped.forEach((f)=>{
                r = qi(f, r);
            }), l.added.length > 0 && l.dropped.length === 0 && l.added.forEach((f)=>{
                r = Xi(f, r);
            }));
        }
    }), r.length > t.length) {
        const s = Re(r, t, N);
        r = r.filter((a)=>!s.map(N).includes(N(a)));
    }
    return r;
}
function Zi(e, t) {
    return e.map((n)=>{
        const r = t.find((i)=>// If the IDs match or ..
            N(n) === N(i) || // ... if the current item is a placeholder and the new item is the track reference can replace it.
            typeof n != "number" && xe(n) && F(i) && Mi(n, i));
        return r ?? n;
    });
}
function $(e) {
    return `${Sn}-${e}`;
}
function Yo(e) {
    const t = Rt(e), n = On(e.participant).pipe(k(()=>Rt(e)), R(t));
    return {
        className: $(e.source === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera || e.source === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare ? "participant-media-video" : "participant-media-audio"),
        trackObserver: n
    };
}
function Rt(e) {
    if (F(e)) return e.publication;
    {
        const { source: t, name: n, participant: r } = e;
        if (t && n) return r.getTrackPublications().find((i)=>i.source === t && i.trackName === n);
        if (n) return r.getTrackPublicationByName(n);
        if (t) return r.getTrackPublication(t);
        throw new Error("At least one of source and name needs to be defined");
    }
}
function se(e, ...t) {
    return new O((r)=>{
        const i = ()=>{
            r.next(e);
        };
        return t.forEach((s)=>{
            e.on(s, i);
        }), ()=>{
            t.forEach((s)=>{
                e.off(s, i);
            });
        };
    }).pipe(R(e));
}
function ae(e, t) {
    return new O((r)=>{
        const i = (...s)=>{
            r.next(s);
        };
        return e.on(t, i), ()=>{
            e.off(t, i);
        };
    });
}
function Go(e) {
    return ae(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ConnectionStateChanged).pipe(k(([t])=>t), R(e.state));
}
function Ko(e) {
    return se(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].RoomMetadataChanged, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ConnectionStateChanged).pipe(k((n)=>({
            name: n.name,
            metadata: n.metadata
        })));
}
function Qo(e) {
    return ae(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ActiveSpeakersChanged).pipe(k(([t])=>t));
}
function Jo(e, t, n = !0) {
    var r;
    const i = ()=>W(this, null, function*() {
            try {
                const a = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"].getLocalDevices(e, n);
                o.next(a);
            } catch (a) {
                t == null || t(a);
            }
        }), o = new re(), s = o.pipe(Ti(()=>{
        var a;
        (a = navigator == null ? void 0 : navigator.mediaDevices) == null || a.removeEventListener("devicechange", i);
    }));
    if (typeof window < "u") {
        if (!window.isSecureContext) throw new Error("Accessing media devices is available only in secure contexts (HTTPS and localhost), in some or all supporting browsers. See: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices");
        (r = navigator == null ? void 0 : navigator.mediaDevices) == null || r.addEventListener("devicechange", i);
    }
    return De(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"].getLocalDevices(e, n).catch((a)=>(t == null || t(a), [])), s);
}
function eo(e) {
    return ae(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].DataReceived);
}
function to(e) {
    return ae(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ChatMessage);
}
function no(e) {
    return se(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].AudioPlaybackStatusChanged).pipe(k((n)=>({
            canPlayAudio: n.canPlaybackAudio
        })));
}
function ro(e) {
    return se(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].VideoPlaybackStatusChanged).pipe(k((n)=>({
            canPlayVideo: n.canPlaybackVideo
        })));
}
function io(e, t) {
    return ae(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ActiveDeviceChanged).pipe(vt(([n])=>n === t), k(([n, r])=>(_.debug("activeDeviceObservable | RoomEvent.ActiveDeviceChanged", {
            kind: n,
            deviceId: r
        }), r)));
}
function qo(e, t) {
    return ae(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantEncryptionStatusChanged).pipe(vt(([, n])=>(t == null ? void 0 : t.identity) === (n == null ? void 0 : n.identity) || !n && (t == null ? void 0 : t.identity) === e.localParticipant.identity), k(([n])=>n), R(t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalParticipant"] ? t.isE2EEEnabled : !!(t != null && t.isEncrypted)));
}
function Xo(e) {
    return ae(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].RecordingStatusChanged).pipe(k(([t])=>t), R(e.isRecording));
}
function me(e, ...t) {
    return new O((r)=>{
        const i = ()=>{
            r.next(e);
        };
        return t.forEach((s)=>{
            e.on(s, i);
        }), ()=>{
            t.forEach((s)=>{
                e.off(s, i);
            });
        };
    }).pipe(R(e));
}
function On(e) {
    return me(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackMuted, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackUnmuted, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].ParticipantPermissionsChanged, // ParticipantEvent.IsSpeakingChanged,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackPublished, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackUnpublished, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].LocalTrackPublished, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].LocalTrackUnpublished, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].MediaDevicesError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackSubscriptionStatusChanged).pipe(k((n)=>{
        const { isMicrophoneEnabled: r, isCameraEnabled: i, isScreenShareEnabled: o } = n, s = n.getTrackPublication(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone), a = n.getTrackPublication(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera);
        return {
            isCameraEnabled: i,
            isMicrophoneEnabled: r,
            isScreenShareEnabled: o,
            cameraTrack: a,
            microphoneTrack: s,
            participant: n
        };
    }));
}
function oo(e) {
    return e ? me(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].ParticipantMetadataChanged, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].ParticipantNameChanged).pipe(k(({ name: n, identity: r, metadata: i })=>({
            name: n,
            identity: r,
            metadata: i
        })), R({
        name: e.name,
        identity: e.identity,
        metadata: e.metadata
    })) : void 0;
}
function so(e) {
    return Ve(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].ConnectionQualityChanged).pipe(k(([n])=>n), R(e.connectionQuality));
}
function Ve(e, t) {
    return new O((r)=>{
        const i = (...s)=>{
            r.next(s);
        };
        return e.on(t, i), ()=>{
            e.off(t, i);
        };
    });
}
function ao(e) {
    var t, n, r, i;
    return me(e.participant, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackMuted, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackUnmuted, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackSubscribed, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].TrackUnsubscribed, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].LocalTrackPublished, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].LocalTrackUnpublished).pipe(k((o)=>{
        var s, a;
        const c = (s = e.publication) != null ? s : o.getTrackPublication(e.source);
        return (a = c == null ? void 0 : c.isMuted) != null ? a : !0;
    }), R((i = (r = (t = e.publication) == null ? void 0 : t.isMuted) != null ? r : (n = e.participant.getTrackPublication(e.source)) == null ? void 0 : n.isMuted) != null ? i : !0));
}
function Zo(e) {
    return Ve(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].IsSpeakingChanged).pipe(k(([t])=>t));
}
function es(e, t = {}) {
    var n;
    let r;
    const i = new O((c)=>(r = c, ()=>a.unsubscribe())).pipe(R(Array.from(e.remoteParticipants.values()))), o = (n = t.additionalRoomEvents) != null ? n : xn, s = Array.from(/* @__PURE__ */ new Set([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ConnectionStateChanged,
        ...o
    ])), a = se(e, ...s).subscribe((c)=>r == null ? void 0 : r.next(Array.from(c.remoteParticipants.values())));
    return e.remoteParticipants.size > 0 && (r == null || r.next(Array.from(e.remoteParticipants.values()))), i;
}
function ts(e, t, n = {}) {
    var r;
    const i = (r = n.additionalEvents) != null ? r : En;
    return se(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ConnectionStateChanged).pipe(wn((s)=>{
        const a = s.getParticipantByIdentity(t);
        return a ? me(a, ...i) : new O((c)=>c.next(void 0));
    }), R(e.getParticipantByIdentity(t)));
}
function ns(e) {
    return Ve(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].ParticipantPermissionsChanged).pipe(k(()=>e.permissions), R(e.permissions));
}
function rs(e, { kind: t, identity: n }, r = {}) {
    var i;
    const o = (i = r.additionalEvents) != null ? i : En, s = (c)=>{
        let u = !0;
        return t && (u = u && c.kind === t), n && (u = u && c.identity === n), u;
    };
    return se(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ConnectionStateChanged).pipe(wn((c)=>{
        const u = Array.from(c.remoteParticipants.values()).find((l)=>s(l));
        return u ? me(u, ...o) : new O((l)=>l.next(void 0));
    }), R(Array.from(e.remoteParticipants.values()).find((c)=>s(c))));
}
function is(e) {
    return typeof e > "u" ? new O() : Ve(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantEvent"].AttributesChanged).pipe(k(([t])=>({
            changed: t,
            attributes: e.attributes
        })), R({
        changed: e.attributes,
        attributes: e.attributes
    }));
}
function os(e, t, n, r, i) {
    const { localParticipant: o } = t, s = (f, h)=>{
        let d = !1;
        switch(f){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera:
                d = h.isCameraEnabled;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone:
                d = h.isMicrophoneEnabled;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare:
                d = h.isScreenShareEnabled;
                break;
        }
        return d;
    }, a = On(o).pipe(k((f)=>s(e, f.participant)), R(s(e, o))), c = new re(), u = (f, h)=>W(this, null, function*() {
            try {
                switch(h ?? (h = n), c.next(!0), e){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera:
                        return yield o.setCameraEnabled(f ?? !o.isCameraEnabled, h, r), o.isCameraEnabled;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone:
                        return yield o.setMicrophoneEnabled(f ?? !o.isMicrophoneEnabled, h, r), o.isMicrophoneEnabled;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare:
                        return yield o.setScreenShareEnabled(f ?? !o.isScreenShareEnabled, h, r), o.isScreenShareEnabled;
                    default:
                        throw new TypeError("Tried to toggle unsupported source");
                }
            } catch (d) {
                if (i && d instanceof Error) {
                    i == null || i(d);
                    return;
                } else throw d;
            } finally{
                c.next(!1);
            }
        });
    return {
        className: $("button"),
        toggle: u,
        enabledObserver: a,
        pendingObserver: c.asObservable()
    };
}
function ss() {
    let e = !1;
    const t = new re(), n = new re(), r = (o)=>W(this, null, function*() {
            n.next(!0), e = o ?? !e, t.next(e), n.next(!1);
        });
    return {
        className: $("button"),
        toggle: r,
        enabledObserver: t.asObservable(),
        pendingObserver: n.asObservable()
    };
}
function as(e, t, n) {
    const r = new on(void 0), i = t ? io(t, e) : r.asObservable(), o = (a, ...c)=>W(this, [
            a,
            ...c
        ], function*(u, l = {}) {
            var f, h, d;
            if (t) {
                _.debug(`Switching active device of kind "${e}" with id ${u}.`), yield t.switchActiveDevice(e, u, l.exact);
                const m = (f = t.getActiveDevice(e)) != null ? f : u;
                m !== u && u !== "default" && _.info(`We tried to select the device with id (${u}), but the browser decided to select the device with id (${m}) instead.`);
                let p;
                e === "audioinput" ? p = (h = t.localParticipant.getTrackPublication(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone)) == null ? void 0 : h.track : e === "videoinput" && (p = (d = t.localParticipant.getTrackPublication(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera)) == null ? void 0 : d.track);
                const g = u === "default" && !p || u === "default" && (p == null ? void 0 : p.mediaStreamTrack.label.startsWith("Default"));
                r.next(g ? u : m);
            } else if (n) {
                yield n.setDeviceId(l.exact ? {
                    exact: u
                } : u);
                const m = yield n.getDeviceId();
                r.next(u === "default" && n.mediaStreamTrack.label.startsWith("Default") ? u : m);
            } else r.value !== u && (_.warn("device switch skipped, please provide either a room or a local track to switch on. "), r.next(u));
        });
    return {
        className: $("media-device-select"),
        activeDeviceObservable: i,
        setActiveMediaDevice: o
    };
}
function cs(e) {
    const t = (r)=>{
        e.disconnect(r);
    };
    return {
        className: $("disconnect-button"),
        disconnect: t
    };
}
function us(e) {
    const t = $("connection-quality"), n = so(e);
    return {
        className: t,
        connectionQualityObserver: n
    };
}
function ls(e) {
    let t = "track-muted-indicator-camera";
    switch(e.source){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera:
            t = "track-muted-indicator-camera";
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone:
            t = "track-muted-indicator-microphone";
            break;
    }
    const n = $(t), r = ao(e);
    return {
        className: n,
        mediaMutedObserver: r
    };
}
function fs(e) {
    return {
        className: "lk-participant-name",
        infoObserver: oo(e)
    };
}
function ds() {
    return {
        className: $("participant-tile")
    };
}
var Nt = {
    CHAT: "lk-chat-topic",
    CHAT_UPDATE: "lk-chat-update-topic"
};
function it(e, t) {
    return W(this, arguments, function*(n, r, i = {}) {
        const { reliable: o, destinationIdentities: s, topic: a } = i;
        yield n.publishData(r, {
            destinationIdentities: s,
            topic: a,
            reliable: o
        });
    });
}
function co(e, t, n) {
    const r = Array.isArray(t) ? t : [
        t
    ], i = eo(e).pipe(vt(([, , , c])=>t === void 0 || c !== void 0 && r.includes(c)), k(([c, u, , l])=>{
        const f = {
            payload: c,
            topic: l,
            from: u
        };
        return n == null || n(f), f;
    }));
    let o;
    const s = new O((c)=>{
        o = c;
    });
    return {
        messageObservable: i,
        isSendingObservable: s,
        send: (c, ...u)=>W(this, [
                c,
                ...u
            ], function*(l, f = {}) {
                o.next(!0);
                try {
                    yield it(e.localParticipant, l, Q({
                        topic: r[0]
                    }, f));
                } finally{
                    o.next(!1);
                }
            })
    };
}
function uo(e) {
    return {
        chatObservable: to(e),
        send: (i)=>W(this, null, function*() {
                return yield e.localParticipant.sendChatMessage(i);
            }),
        edit: (i, o)=>W(this, null, function*() {
                return yield e.localParticipant.editChatMessage(i, o);
            })
    };
}
var lo = new TextEncoder(), fo = new TextDecoder(), Pe = /* @__PURE__ */ new Map(), po = (e)=>lo.encode(JSON.stringify(e)), ho = (e)=>JSON.parse(fo.decode(e));
function ps(e, t) {
    var n, r;
    const i = new re(), o = ()=>{
        var T, x, I;
        return ((T = e.serverInfo) == null ? void 0 : T.edition) === 1 || !!((x = e.serverInfo) != null && x.version) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareVersions"])((I = e.serverInfo) == null ? void 0 : I.version, "1.17.2") > 0;
    }, { messageDecoder: s, messageEncoder: a, channelTopic: c, updateChannelTopic: u } = t ?? {}, l = c ?? Nt.CHAT, f = u ?? Nt.CHAT_UPDATE;
    let h = !1;
    Pe.has(e) || (h = !0);
    const d = (n = Pe.get(e)) != null ? n : /* @__PURE__ */ new Map(), m = (r = d.get(l)) != null ? r : new re();
    if (d.set(l, m), Pe.set(e, d), h) {
        const { messageObservable: T } = co(e, [
            l,
            f
        ]);
        T.pipe(Lt(i)).subscribe(m);
    }
    const { chatObservable: p, send: g } = uo(e), v = s ?? ho, E = wi(m.pipe(k((T)=>{
        const x = v(T.payload), I = ye(Q({}, x), {
            from: T.from
        });
        if (!vo(I)) return I;
    })), p.pipe(k(([T, x])=>ye(Q({}, T), {
            from: x
        })))).pipe(Ci((T, x)=>{
        var I;
        if (!x) return T;
        if ("id" in x && T.find((w)=>{
            var S, V;
            return ((S = w.from) == null ? void 0 : S.identity) === ((V = x.from) == null ? void 0 : V.identity) && w.id === x.id;
        })) {
            const w = T.findIndex((S)=>S.id === x.id);
            if (w > -1) {
                const S = T[w];
                T[w] = ye(Q({}, x), {
                    timestamp: S.timestamp,
                    editTimestamp: (I = x.editTimestamp) != null ? I : x.timestamp
                });
            }
            return [
                ...T
            ];
        }
        return [
            ...T,
            x
        ];
    }, []), Lt(i)), P = new on(!1), L = a ?? po, C = (T)=>W(this, null, function*() {
            P.next(!0);
            try {
                const x = yield g(T), I = L(ye(Q({}, x), {
                    ignore: o()
                }));
                return yield it(e.localParticipant, I, {
                    reliable: !0,
                    topic: l
                }), x;
            } finally{
                P.next(!1);
            }
        }), ie = (T, x)=>W(this, null, function*() {
            const I = Date.now(), w = typeof x == "string" ? {
                id: x,
                message: "",
                timestamp: I
            } : x;
            P.next(!0);
            try {
                const S = yield e.localParticipant.editChatMessage(T, w), V = L(S);
                return yield it(e.localParticipant, V, {
                    topic: f,
                    reliable: !0
                }), S;
            } finally{
                P.next(!1);
            }
        });
    function K() {
        i.next(), i.complete(), Pe.delete(e);
    }
    return e.once(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, K), {
        messageObservable: E,
        isSendingObservable: P,
        send: C,
        update: ie
    };
}
function vo(e) {
    return e.ignore == !0;
}
function hs() {
    const e = (n)=>W(this, null, function*() {
            _.info("Start Audio for room: ", n), yield n.startAudio();
        });
    return {
        className: $("start-audio-button"),
        roomAudioPlaybackAllowedObservable: no,
        handleStartAudioPlayback: e
    };
}
function vs() {
    const e = (n)=>W(this, null, function*() {
            _.info("Start Video for room: ", n), yield n.startVideo();
        });
    return {
        className: $("start-audio-button"),
        roomVideoPlaybackAllowedObservable: ro,
        handleStartVideoPlayback: e
    };
}
function ms() {
    return {
        className: [
            $("button"),
            $("chat-toggle")
        ].join(" ")
    };
}
function gs() {
    return {
        className: [
            $("button"),
            $("focus-toggle-button")
        ].join(" ")
    };
}
function bs() {
    return {
        className: "lk-clear-pin-button lk-button"
    };
}
function ys() {
    return {
        className: "lk-room-container"
    };
}
function $t(e, t, n = !0) {
    const i = [
        e.localParticipant,
        ...Array.from(e.remoteParticipants.values())
    ], o = [];
    return i.forEach((s)=>{
        t.forEach((a)=>{
            const c = Array.from(s.trackPublications.values()).filter((u)=>u.source === a && // either return all or only the ones that are subscribed
                (!n || u.track)).map((u)=>({
                    participant: s,
                    publication: u,
                    source: u.source
                }));
            o.push(...c);
        });
    }), {
        trackReferences: o,
        participants: i
    };
}
function Ut(e, t, n = !1) {
    const { sources: r, kind: i, name: o } = t;
    return Array.from(e.trackPublications.values()).filter((a)=>(!r || r.includes(a.source)) && (!i || a.kind === i) && (!o || a.trackName === o) && // either return all or only the ones that are subscribed
        (!n || a.track)).map((a)=>({
            participant: e,
            publication: a,
            source: a.source
        }));
}
function ws(e, t, n) {
    var r, i;
    const o = (r = n.additionalRoomEvents) != null ? r : xn, s = (i = n.onlySubscribed) != null ? i : !0, a = Array.from(/* @__PURE__ */ new Set([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ConnectionStateChanged,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].LocalTrackPublished,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].LocalTrackUnpublished,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackPublished,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnpublished,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackSubscriptionStatusChanged,
        ...o
    ]).values());
    return se(e, ...a).pipe(k((u)=>{
        const l = $t(u, t, s);
        return _.debug(`TrackReference[] was updated. (length ${l.trackReferences.length})`, l), l;
    }), R($t(e, t, s)));
}
function Ss(e, t) {
    return me(e, ...Ui).pipe(k((r)=>{
        const i = Ut(r, t);
        return _.debug(`TrackReference[] was updated. (length ${i.length})`, i), i;
    }), R(Ut(e, t)));
}
function Ln(e, t) {
    return new O((r)=>{
        const i = (...s)=>{
            r.next(s);
        };
        return e.on(t, i), ()=>{
            e.off(t, i);
        };
    });
}
function xs(e) {
    return Ln(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackEvent"].TranscriptionReceived);
}
function Es(e) {
    return Ln(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackEvent"].TimeSyncUpdate).pipe(k(([t])=>t));
}
function Ts(e, t = 1e3) {
    if (e === null) return kt(!1);
    const n = tt(e, "mousemove", {
        passive: !0
    }).pipe(k(()=>!0)), r = n.pipe(ai({
        each: t,
        with: ()=>De(kt(!1), r.pipe(Pi(n)))
    }), xi());
    return r;
}
function mo(e, t) {
    if (typeof localStorage > "u") {
        _.error("Local storage is not available.");
        return;
    }
    try {
        if (t) {
            const n = Object.fromEntries(Object.entries(t).filter(([, r])=>r !== ""));
            localStorage.setItem(e, JSON.stringify(n));
        }
    } catch (n) {
        _.error(`Error setting item to local storage: ${n}`);
    }
}
function go(e) {
    if (typeof localStorage > "u") {
        _.error("Local storage is not available.");
        return;
    }
    try {
        const t = localStorage.getItem(e);
        if (!t) {
            _.warn(`Item with key ${e} does not exist in local storage.`);
            return;
        }
        return JSON.parse(t);
    } catch (t) {
        _.error(`Error getting item from local storage: ${t}`);
        return;
    }
}
function bo(e) {
    return {
        load: ()=>go(e),
        save: (t)=>mo(e, t)
    };
}
var yo = `${Sn}-user-choices`, be = {
    videoEnabled: !0,
    audioEnabled: !0,
    videoDeviceId: "",
    audioDeviceId: "",
    username: ""
}, { load: wo, save: So } = bo(yo);
function Cs(e, t = !1) {
    t !== !0 && So(e);
}
function Ps(e, t = !1) {
    var n, r, i, o, s;
    const a = {
        videoEnabled: (n = e == null ? void 0 : e.videoEnabled) != null ? n : be.videoEnabled,
        audioEnabled: (r = e == null ? void 0 : e.audioEnabled) != null ? r : be.audioEnabled,
        videoDeviceId: (i = e == null ? void 0 : e.videoDeviceId) != null ? i : be.videoDeviceId,
        audioDeviceId: (o = e == null ? void 0 : e.audioDeviceId) != null ? o : be.audioDeviceId,
        username: (s = e == null ? void 0 : e.username) != null ? s : be.username
    };
    if (t) return a;
    {
        const c = wo();
        return Q(Q({}, a), c ?? {});
    }
}
function _n(e, t) {
    if (t.msg === "show_chat") return {
        ...e,
        showChat: !0,
        unreadMessages: 0
    };
    if (t.msg === "hide_chat") return {
        ...e,
        showChat: !1
    };
    if (t.msg === "toggle_chat") {
        const n = {
            ...e,
            showChat: !e.showChat
        };
        return n.showChat === !0 && (n.unreadMessages = 0), n;
    } else return t.msg === "unread_msg" ? {
        ...e,
        unreadMessages: t.count
    } : t.msg === "toggle_settings" ? {
        ...e,
        showSettings: !e.showSettings
    } : {
        ...e
    };
}
function In(e, t) {
    return t.msg === "set_pin" ? [
        t.trackReference
    ] : t.msg === "clear_pin" ? [] : {
        ...e
    };
}
const Dn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
function As() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Dn);
    if (!e) throw Error("Tried to access LayoutContext context outside a LayoutContextProvider provider.");
    return e;
}
function ks(e) {
    const t = xo();
    if (e ?? (e = t), !e) throw Error("Tried to access LayoutContext context outside a LayoutContextProvider provider.");
    return e;
}
function Os() {
    const [e, t] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useReducer(In, Tn), [n, r] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useReducer(_n, Cn);
    return {
        pin: {
            dispatch: t,
            state: e
        },
        widget: {
            dispatch: r,
            state: n
        }
    };
}
function Ls(e) {
    const [t, n] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useReducer(In, Tn), [r, i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useReducer(_n, Cn);
    return e ?? {
        pin: {
            dispatch: n,
            state: t
        },
        widget: {
            dispatch: i,
            state: r
        }
    };
}
function xo() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Dn);
}
const Mn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
function _s() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Mn);
    if (!e) throw Error("tried to access track context outside of track context provider");
    return e;
}
function Rn() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Mn);
}
function Is(e) {
    const t = Rn(), n = e ?? t;
    if (!n) throw new Error("No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly");
    return n;
}
const Nn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
function Ds() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Nn);
    if (!e) throw Error("tried to access participant context outside of participant context provider");
    return e;
}
function Eo() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Nn);
}
function Ms(e) {
    const t = Eo(), n = Rn(), r = e ?? t ?? (n == null ? void 0 : n.participant);
    if (!r) throw new Error("No participant provided, make sure you are inside a participant context or pass the participant explicitly");
    return r;
}
const $n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
function Rs() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext($n);
    if (!e) throw Error("tried to access room context outside of livekit room component");
    return e;
}
function To() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext($n);
}
function Ns(e) {
    const t = To(), n = e ?? t;
    if (!n) throw new Error("No room provided, make sure you are inside a Room context or pass the room explicitly");
    return n;
}
const Co = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
function $s(e) {
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Co);
    if (e === !0) {
        if (t) return t;
        throw Error("tried to access feature context, but none is present");
    }
    return t;
}
;
 //# sourceMappingURL=contexts-568EHGLp.mjs.map
}}),
"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/room-DfA7knPM.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "L": (()=>Q),
    "a": (()=>B),
    "c": (()=>G),
    "m": (()=>M),
    "r": (()=>J),
    "u": (()=>q),
    "w": (()=>H)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/livekit-client@2.7.5/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/contexts-568EHGLp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
;
;
function L(n) {
    var e, o, t = "";
    if (typeof n == "string" || typeof n == "number") t += n;
    else if (typeof n == "object") if (Array.isArray(n)) {
        var r = n.length;
        for(e = 0; e < r; e++)n[e] && (o = L(n[e])) && (t && (t += " "), t += o);
    } else for(o in n)n[o] && (t && (t += " "), t += o);
    return t;
}
function A() {
    for(var n, e, o = 0, t = "", r = arguments.length; o < r; o++)(n = arguments[o]) && (e = L(n)) && (t && (t += " "), t += e);
    return t;
}
function _(...n) {
    return (...e)=>{
        for (const o of n)if (typeof o == "function") try {
            o(...e);
        } catch (t) {
            console.error(t);
        }
    };
}
function M(...n) {
    const e = {
        ...n[0]
    };
    for(let o = 1; o < n.length; o++){
        const t = n[o];
        for(const r in t){
            const d = e[r], a = t[r];
            typeof d == "function" && typeof a == "function" && // This is a lot faster than a regex.
            r[0] === "o" && r[1] === "n" && r.charCodeAt(2) >= /* 'A' */ 65 && r.charCodeAt(2) <= /* 'Z' */ 90 ? e[r] = _(d, a) : (r === "className" || r === "UNSAFE_className") && typeof d == "string" && typeof a == "string" ? e[r] = A(d, a) : e[r] = a !== void 0 ? a : d;
        }
    }
    return e;
}
function I(n) {
    return n !== void 0;
}
function B(...n) {
    return M(...n.filter(I));
}
function G(n, e, o) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.map(n, (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(t) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(n) ? (t.props.class && (e ?? (e = {}), e.class = A(t.props.class, e.class), e.style = {
            ...t.props.style,
            ...e.style
        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(t, {
            ...e,
            key: o
        })) : t);
}
function H(n) {
    var e, o;
    if (typeof window < "u" && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] < "u" && // eslint-disable-next-line turbo/no-undeclared-env-vars
    (((e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] == null ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) == null ? void 0 : e.NODE_ENV) === "dev" || // eslint-disable-next-line turbo/no-undeclared-env-vars
    ((o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] == null ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) == null ? void 0 : o.NODE_ENV) === "development")) {
        const t = document.querySelector(".lk-room-container");
        t && !getComputedStyle(t).getPropertyValue("--lk-has-imported-styles") && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].warn("It looks like you're not using the `@livekit/components-styles package`. To render the UI with the default styling, please import it in your layout or page.");
    }
}
function J(n, e) {
    return n === "processor" && e && typeof e == "object" && "name" in e ? e.name : n === "e2ee" && e ? "e2ee-enabled" : e;
}
const T = {
    connect: !0,
    audio: !1,
    video: !1
};
function q(n) {
    const { token: e, serverUrl: o, options: t, room: r, connectOptions: d, connect: a, audio: p, video: y, screen: g, onConnected: v, onDisconnected: h, onError: c, onMediaDeviceFailure: b, onEncryptionError: E, simulateParticipants: w, ...P } = {
        ...T,
        ...n
    };
    t && r && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].warn("when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead.");
    const [s, O] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(), C = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(a);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "q.useEffect": ()=>{
            O(r ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"](t));
        }
    }["q.useEffect"], [
        r,
        JSON.stringify(t, J)
    ]);
    const F = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "q.useMemo[F]": ()=>{
            const { className: m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])();
            return M(P, {
                className: m
            });
        }
    }["q.useMemo[F]"], [
        P
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "q.useEffect": ()=>{
            if (!s) return;
            const m = {
                "q.useEffect.m": ()=>{
                    const f = s.localParticipant;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].debug("trying to publish local tracks"), Promise.all([
                        f.setMicrophoneEnabled(!!p, typeof p != "boolean" ? p : void 0),
                        f.setCameraEnabled(!!y, typeof y != "boolean" ? y : void 0),
                        f.setScreenShareEnabled(!!g, typeof g != "boolean" ? g : void 0)
                    ]).catch({
                        "q.useEffect.m": (R)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].warn(R), c == null || c(R);
                        }
                    }["q.useEffect.m"]);
                }
            }["q.useEffect.m"], S = {
                "q.useEffect.S": (f)=>{
                    const R = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaDeviceFailure"].getFailure(f);
                    b == null || b(R);
                }
            }["q.useEffect.S"], k = {
                "q.useEffect.k": (f)=>{
                    E == null || E(f);
                }
            }["q.useEffect.k"], N = {
                "q.useEffect.N": (f)=>{
                    h == null || h(f);
                }
            }["q.useEffect.N"], D = {
                "q.useEffect.D": ()=>{
                    v == null || v();
                }
            }["q.useEffect.D"];
            return s.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].SignalConnected, m).on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].MediaDevicesError, S).on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].EncryptionError, k).on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, N).on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Connected, D), ({
                "q.useEffect": ()=>{
                    s.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].SignalConnected, m).off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].MediaDevicesError, S).off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].EncryptionError, k).off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, N).off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Connected, D);
                }
            })["q.useEffect"];
        }
    }["q.useEffect"], [
        s,
        p,
        y,
        g,
        c,
        E,
        b,
        v,
        h
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "q.useEffect": ()=>{
            if (s) {
                if (w) {
                    s.simulateParticipants({
                        participants: {
                            count: w
                        },
                        publish: {
                            audio: !0,
                            useRealTracks: !0
                        }
                    });
                    return;
                }
                if (a) {
                    if (C.current = !0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].debug("connecting"), !e) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].debug("no token yet");
                        return;
                    }
                    if (!o) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].warn("no livekit url provided"), c == null || c(Error("no livekit url provided"));
                        return;
                    }
                    s.connect(o, e, d).catch({
                        "q.useEffect": (m)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].warn(m), C.current === !0 && (c == null || c(m));
                        }
                    }["q.useEffect"]);
                } else __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].debug("disconnecting because connect is false"), C.current = !1, s.disconnect();
            }
        }
    }["q.useEffect"], [
        a,
        e,
        JSON.stringify(d),
        s,
        c,
        o,
        w
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "q.useEffect": ()=>{
            if (s) return ({
                "q.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].info("disconnecting on onmount"), s.disconnect();
                }
            })["q.useEffect"];
        }
    }["q.useEffect"], [
        s
    ]), {
        room: s,
        htmlProps: F
    };
}
const Q = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(e, o) {
    const { room: t, htmlProps: r } = q(e);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: o,
        ...r
    }, t && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["R"].Provider, {
        value: t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"].Provider, {
        value: e.featureFlags
    }, e.children)));
});
;
 //# sourceMappingURL=room-DfA7knPM.mjs.map
}}),
"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/hooks-aMI94FOv.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "A": (()=>Et),
    "B": (()=>Lt),
    "C": (()=>Ye),
    "D": (()=>St),
    "E": (()=>Mt),
    "F": (()=>Xe),
    "G": (()=>z),
    "H": (()=>xe),
    "I": (()=>Ct),
    "J": (()=>Ot),
    "K": (()=>Dt),
    "L": (()=>Rt),
    "M": (()=>G),
    "N": (()=>Nt),
    "O": (()=>Ze),
    "P": (()=>qt),
    "Q": (()=>Qt),
    "R": (()=>jt),
    "S": (()=>xt),
    "T": (()=>it),
    "U": (()=>dt),
    "V": (()=>Kt),
    "W": (()=>ft),
    "X": (()=>Yt),
    "Y": (()=>Zt),
    "a": (()=>I),
    "b": (()=>Ut),
    "c": (()=>yt),
    "d": (()=>Pt),
    "e": (()=>Tt),
    "f": (()=>Vt),
    "g": (()=>Bt),
    "h": (()=>_t),
    "i": (()=>ht),
    "j": (()=>b),
    "k": (()=>Jt),
    "l": (()=>It),
    "m": (()=>Ht),
    "n": (()=>kt),
    "o": (()=>At),
    "p": (()=>zt),
    "q": (()=>je),
    "r": (()=>Ke),
    "s": (()=>Xt),
    "t": (()=>Wt),
    "u": (()=>vt),
    "v": (()=>Ft),
    "w": (()=>$t),
    "x": (()=>wt),
    "y": (()=>Gt),
    "z": (()=>gt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/livekit-client@2.7.5/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/contexts-568EHGLp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/room-DfA7knPM.mjs [app-client] (ecmascript)");
;
;
;
;
const Qe = (e)=>{
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(e);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Qe.useEffect": ()=>{
            n.current = e;
        }
    }["Qe.useEffect"]), n;
};
function $e(e, n) {
    const t = He(), a = Qe(n);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect({
        "$e.useLayoutEffect": ()=>{
            let s = !1;
            const c = e.current;
            if (!c) return;
            function o(u, i) {
                s || a.current(u, i);
            }
            return t == null || t.subscribe(c, o), ({
                "$e.useLayoutEffect": ()=>{
                    s = !0, t == null || t.unsubscribe(c, o);
                }
            })["$e.useLayoutEffect"];
        }
    }["$e.useLayoutEffect"], [
        e.current,
        t,
        a
    ]), t == null ? void 0 : t.observer;
}
function Ge() {
    let e = !1, n = [];
    const t = /* @__PURE__ */ new Map();
    if (typeof window > "u") return;
    const a = new ResizeObserver((s, c)=>{
        n = n.concat(s), e || window.requestAnimationFrame(()=>{
            const o = /* @__PURE__ */ new Set();
            for(let u = 0; u < n.length; u++){
                if (o.has(n[u].target)) continue;
                o.add(n[u].target);
                const i = t.get(n[u].target);
                i == null || i.forEach((l)=>l(n[u], c));
            }
            n = [], e = !1;
        }), e = !0;
    });
    return {
        observer: a,
        subscribe (s, c) {
            a.observe(s);
            const o = t.get(s) ?? [];
            o.push(c), t.set(s, o);
        },
        unsubscribe (s, c) {
            const o = t.get(s) ?? [];
            if (o.length === 1) {
                a.unobserve(s), t.delete(s);
                return;
            }
            const u = o.indexOf(c);
            u !== -1 && o.splice(u, 1), t.set(s, o);
        }
    };
}
let D;
const He = ()=>D || (D = Ge()), je = (e)=>{
    const [n, t] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        width: 0,
        height: 0
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect({
        "je.useLayoutEffect": ()=>{
            if (e.current) {
                const { width: s, height: c } = e.current.getBoundingClientRect();
                t({
                    width: s,
                    height: c
                });
            }
        }
    }["je.useLayoutEffect"], [
        e.current
    ]);
    const a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "je.useCallback[a]": (s)=>t(s.contentRect)
    }["je.useCallback[a]"], []);
    return $e(e, a), n;
};
function b(e, n, t = !0) {
    const [a, s] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(n);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "b.useEffect": ()=>{
            if (t && s(n), typeof window > "u" || !e) return;
            const c = e.subscribe(s);
            return ({
                "b.useEffect": ()=>c.unsubscribe()
            })["b.useEffect"];
        }
    }["b.useEffect"], [
        e,
        t
    ]), a;
}
function gt(e) {
    const n = (c)=>typeof window < "u" ? window.matchMedia(c).matches : !1, [t, a] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(n(e));
    function s() {
        a(n(e));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "gt.useEffect": ()=>{
            const c = window.matchMedia(e);
            return s(), c.addListener ? c.addListener(s) : c.addEventListener("change", s), ({
                "gt.useEffect": ()=>{
                    c.removeListener ? c.removeListener(s) : c.removeEventListener("change", s);
                }
            })["gt.useEffect"];
        }
    }["gt.useEffect"], [
        e
    ]), t;
}
function St(e) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(e), t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "St.useCallback[t]": async ()=>{
            await n.startAudio();
        }
    }["St.useCallback[t]"], [
        n
    ]), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "St.useMemo[a]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(n)
    }["St.useMemo[a]"], [
        n
    ]), { canPlayAudio: s } = b(a, {
        canPlayAudio: n.canPlaybackAudio
    });
    return {
        canPlayAudio: s,
        startAudio: t
    };
}
function vt(e) {
    const { state: n, dispatch: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])().pin;
    return {
        buttonProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "vt.useMemo": ()=>{
                const { className: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(e, {
                    className: s,
                    disabled: !(n != null && n.length),
                    onClick: {
                        "vt.useMemo": ()=>{
                            t && t({
                                msg: "clear_pin"
                            });
                        }
                    }["vt.useMemo"]
                });
            }
        }["vt.useMemo"], [
            e,
            t,
            n
        ])
    };
}
function ht(e = {}) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(e.participant), { className: t, connectionQualityObserver: a } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ht.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(n)
    }["ht.useMemo"], [
        n
    ]), s = b(a, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionQuality"].Unknown);
    return {
        className: t,
        quality: s
    };
}
function I(e) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(e), t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "I.useMemo[t]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(n)
    }["I.useMemo[t]"], [
        n
    ]);
    return b(t, n.state);
}
function Mt(e, n) {
    const t = typeof e == "function" ? e : n, a = typeof e == "string" ? e : void 0, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(), { send: c, messageObservable: o, isSendingObservable: u } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Mt.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(s, a, t)
    }["Mt.useMemo"], [
        s,
        a,
        t
    ]), i = b(o, void 0), l = b(u, !1);
    return {
        message: i,
        send: c,
        isSending: l
    };
}
function yt(e) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(), t = I(n);
    return {
        buttonProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "yt.useMemo": ()=>{
                const { className: s, disconnect: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(n);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(e, {
                    className: s,
                    onClick: {
                        "yt.useMemo": ()=>c(e.stopTracks ?? !0)
                    }["yt.useMemo"],
                    disabled: t === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Disconnected
                });
            }
        }["yt.useMemo"], [
            n,
            e,
            t
        ])
    };
}
function Xe(e) {
    if (e.publication instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalTrackPublication"]) {
        const n = e.publication.track;
        if (n) {
            const { facingMode: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["facingModeFromLocalTrack"])(n);
            return t;
        }
    }
    return "undefined";
}
function Pt({ trackRef: e, props: n }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(e), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(), { className: s } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Pt.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])()
    }["Pt.useMemo"], []), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Pt.useMemo[c]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(t, a == null ? void 0 : a.pin.state)
    }["Pt.useMemo[c]"], [
        t,
        a == null ? void 0 : a.pin.state
    ]);
    return {
        mergedProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "Pt.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(n, {
                    className: s,
                    onClick: {
                        "Pt.useMemo": (u)=>{
                            var i, l, d, f, p;
                            (i = n.onClick) == null || i.call(n, u), c ? (d = a == null ? void 0 : (l = a.pin).dispatch) == null || d.call(l, {
                                msg: "clear_pin"
                            }) : (p = a == null ? void 0 : (f = a.pin).dispatch) == null || p.call(f, {
                                msg: "set_pin",
                                trackReference: t
                            });
                        }
                    }["Pt.useMemo"]
                })
        }["Pt.useMemo"], [
            n,
            s,
            t,
            c,
            a == null ? void 0 : a.pin
        ]),
        inFocus: c
    };
}
function kt(e, n, t = {}) {
    const a = t.gridLayouts ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"], { width: s, height: c } = je(e), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])(a, n, s, c);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "kt.useEffect": ()=>{
            e.current && o && (e.current.style.setProperty("--lk-col-count", o == null ? void 0 : o.columns.toString()), e.current.style.setProperty("--lk-row-count", o == null ? void 0 : o.rows.toString()));
        }
    }["kt.useEffect"], [
        e,
        o
    ]), {
        layout: o,
        containerWidth: s,
        containerHeight: c
    };
}
function z(e, n = {}) {
    var u, i;
    const t = typeof e == "string" ? n.participant : e.participant, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(t), s = typeof e == "string" ? {
        participant: a,
        source: e
    } : e, [c, o] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(!!((u = s.publication) != null && u.isMuted || (i = a.getTrackPublication(s.source)) != null && i.isMuted));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "z.useEffect": ()=>{
            const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(s).subscribe(o);
            return ({
                "z.useEffect": ()=>l.unsubscribe()
            })["z.useEffect"];
        }
    }["z.useEffect"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"])(s)
    ]), c;
}
function xe(e) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(e), t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "xe.useMemo[t]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(n)
    }["xe.useMemo[t]"], [
        n
    ]);
    return b(t, n.isSpeaking);
}
function Ye(e = {}) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(e.room), [t, a] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(n.localParticipant), [s, c] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(t.isMicrophoneEnabled), [o, u] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(t.isMicrophoneEnabled), [i, l] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(t.lastMicrophoneError), [d, f] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(t.lastCameraError), [p, m] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(t.isMicrophoneEnabled), [g, S] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(void 0), [M, v] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(void 0), P = (h)=>{
        u(h.isCameraEnabled), c(h.isMicrophoneEnabled), m(h.isScreenShareEnabled), v(h.cameraTrack), S(h.microphoneTrack), l(h.participant.lastMicrophoneError), f(h.participant.lastCameraError), a(h.participant);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Ye.useEffect": ()=>{
            const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(n.localParticipant).subscribe(P);
            return ({
                "Ye.useEffect": ()=>h.unsubscribe()
            })["Ye.useEffect"];
        }
    }["Ye.useEffect"], [
        n
    ]), {
        isMicrophoneEnabled: s,
        isScreenShareEnabled: p,
        isCameraEnabled: o,
        microphoneTrack: g,
        cameraTrack: M,
        lastMicrophoneError: i,
        lastCameraError: d,
        localParticipant: t
    };
}
function Et() {
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(), n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Et.useMemo[n]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"])(e.localParticipant)
    }["Et.useMemo[n]"], [
        e
    ]);
    return b(n, e.localParticipant.permissions);
}
function Tt({ kind: e, room: n, track: t, requestPermissions: a, onError: s }) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Tt.useMemo[o]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"])(e, s, a)
    }["Tt.useMemo[o]"], [
        e,
        a,
        s
    ]), u = b(o, []), [i, l] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState((c == null ? void 0 : c.getActiveDevice(e)) ?? ""), { className: d, activeDeviceObservable: f, setActiveMediaDevice: p } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Tt.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"])(e, n ?? c, t)
    }["Tt.useMemo"], [
        e,
        n,
        c,
        t
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Tt.useEffect": ()=>{
            const m = f.subscribe({
                "Tt.useEffect.m": (g)=>{
                    g && g !== i && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].info("setCurrentDeviceId", g), l(g));
                }
            }["Tt.useEffect.m"]);
            return ({
                "Tt.useEffect": ()=>{
                    m == null || m.unsubscribe();
                }
            })["Tt.useEffect"];
        }
    }["Tt.useEffect"], [
        f
    ]), {
        devices: u,
        className: d,
        activeDeviceId: i,
        setActiveMediaDevice: p
    };
}
function wt({ kind: e, onError: n }) {
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "wt.useMemo[t]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"])(e, n)
    }["wt.useMemo[t]"], [
        e,
        n
    ]);
    return b(t, []);
}
function Ke(e, n, t = {}) {
    const a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef([]), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(-1), c = n !== s.current, o = typeof t.customSortFunction == "function" ? t.customSortFunction(e) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"])(e);
    let u = [
        ...o
    ];
    if (c === !1) try {
        u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"])(a.current, o, n);
    } catch (i) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].error("Error while running updatePages(): ", i);
    }
    return c ? a.current = o : a.current = u, s.current = n, u;
}
function At(e, n) {
    const [t, a] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(1), s = Math.max(Math.ceil(n.length / e), 1);
    t > s && a(s);
    const c = t * e, o = c - e, u = (f)=>{
        a((p)=>f === "next" ? p === s ? p : p + 1 : p === 1 ? p : p - 1);
    }, i = (f)=>{
        f > s ? a(s) : f < 1 ? a(1) : a(f);
    }, d = Ke(n, e).slice(o, c);
    return {
        totalPageCount: s,
        nextPage: ()=>u("next"),
        prevPage: ()=>u("previous"),
        setPage: i,
        firstItemIndex: o,
        lastItemIndex: c,
        tracks: d,
        currentPage: t
    };
}
function Ct(e = {}) {
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"])();
    e.participant && (n = e.participant);
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Ct.useMemo[t]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"])(n)
    }["Ct.useMemo[t]"], [
        n
    ]), { identity: a, name: s, metadata: c } = b(t, {
        name: n == null ? void 0 : n.name,
        identity: n == null ? void 0 : n.identity,
        metadata: n == null ? void 0 : n.metadata
    });
    return {
        identity: a,
        name: s,
        metadata: c
    };
}
function Ot(e = {}) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(e.participant), t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Ot.useMemo[t]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"])(n)
    }["Ot.useMemo[t]"], [
        n
    ]);
    return b(t, n.permissions);
}
function It({ trackRef: e, onParticipantClick: n, disableSpeakingIndicator: t, htmlProps: a }) {
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(e), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "It.useMemo[c]": ()=>{
            const { className: p } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"])();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(a, {
                className: p,
                onClick: {
                    "It.useMemo[c]": (m)=>{
                        var g;
                        if ((g = a.onClick) == null || g.call(a, m), typeof n == "function") {
                            const S = s.publication ?? s.participant.getTrackPublication(s.source);
                            n({
                                participant: s.participant,
                                track: S
                            });
                        }
                    }
                }["It.useMemo[c]"]
            });
        }
    }["It.useMemo[c]"], [
        a,
        n,
        s.publication,
        s.source,
        s.participant
    ]), o = s.participant.getTrackPublication(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone), u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "It.useMemo[u]": ()=>({
                participant: s.participant,
                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                publication: o
            })
    }["It.useMemo[u]"], [
        o,
        s.participant
    ]), i = z(s), l = z(u), d = xe(s.participant), f = Xe(s);
    return {
        elementProps: {
            "data-lk-audio-muted": l,
            "data-lk-video-muted": i,
            "data-lk-speaking": t === !0 ? !1 : d,
            "data-lk-local-participant": s.participant.isLocal,
            "data-lk-source": s.source,
            "data-lk-facing-mode": f,
            ...c
        }
    };
}
function G(e = {}) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(e.room), [t, a] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState([]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "G.useEffect": ()=>{
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])(n, {
                additionalRoomEvents: e.updateOnlyOn
            }).subscribe(a);
            return ({
                "G.useEffect": ()=>s.unsubscribe()
            })["G.useEffect"];
        }
    }["G.useEffect"], [
        n,
        JSON.stringify(e.updateOnlyOn)
    ]), t;
}
function Dt(e = {}) {
    const n = G(e), { localParticipant: t } = Ye(e);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Dt.useMemo": ()=>[
                t,
                ...n
            ]
    }["Dt.useMemo"], [
        t,
        n
    ]);
}
function Lt(e) {
    return e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(e), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Lt.useMemo": ()=>(e == null ? void 0 : e.pin.state) !== void 0 && e.pin.state.length >= 1 ? e.pin.state : []
    }["Lt.useMemo"], [
        e.pin.state
    ]);
}
function Rt(e, n = {}) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(), [a] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(n.updateOnlyOn), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Rt.useMemo[s]": ()=>typeof e == "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"])(t, e, {
                additionalEvents: a
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"])(t, e, {
                additionalEvents: a
            })
    }["Rt.useMemo[s]"], [
        t,
        JSON.stringify(e),
        a
    ]), [c, o] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        p: void 0
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Rt.useEffect": ()=>{
            const u = s.subscribe({
                "Rt.useEffect.u": (i)=>o({
                        p: i
                    })
            }["Rt.useEffect.u"]);
            return ({
                "Rt.useEffect": ()=>u.unsubscribe()
            })["Rt.useEffect"];
        }
    }["Rt.useEffect"], [
        s
    ]), c.p;
}
function Ft(e = {}) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(e.room), t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Ft.useMemo[t]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["J"])(n)
    }["Ft.useMemo[t]"], [
        n
    ]), { name: a, metadata: s } = b(t, {
        name: n.name,
        metadata: n.metadata
    });
    return {
        name: a,
        metadata: s
    };
}
function Ze() {
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(), n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Ze.useMemo[n]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"])(e)
    }["Ze.useMemo[n]"], [
        e
    ]);
    return b(n, e.activeSpeakers);
}
function Nt(e) {
    const [n, t] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"])(e)), a = Ze();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Nt.useEffect": ()=>{
            t((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"])(e));
        }
    }["Nt.useEffect"], [
        a,
        e
    ]), n;
}
function Vt({ room: e, props: n }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(e), { className: a, roomAudioPlaybackAllowedObservable: s, handleStartAudioPlayback: c } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Vt.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N"])()
    }["Vt.useMemo"], []), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Vt.useMemo[o]": ()=>s(t)
    }["Vt.useMemo[o]"], [
        t,
        s
    ]), { canPlayAudio: u } = b(o, {
        canPlayAudio: t.canPlaybackAudio
    });
    return {
        mergedProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "Vt.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(n, {
                    className: a,
                    onClick: {
                        "Vt.useMemo": ()=>{
                            c(t);
                        }
                    }["Vt.useMemo"],
                    style: {
                        display: u ? "none" : "block"
                    }
                })
        }["Vt.useMemo"], [
            n,
            a,
            u,
            c,
            t
        ]),
        canPlayAudio: u
    };
}
function Bt({ room: e, props: n }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(e), { className: a, roomVideoPlaybackAllowedObservable: s, handleStartVideoPlayback: c } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Bt.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["O"])()
    }["Bt.useMemo"], []), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Bt.useMemo[o]": ()=>s(t)
    }["Bt.useMemo[o]"], [
        t,
        s
    ]), { canPlayVideo: u } = b(o, {
        canPlayVideo: t.canPlaybackVideo
    });
    return {
        mergedProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "Bt.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(n, {
                    className: a,
                    onClick: {
                        "Bt.useMemo": ()=>{
                            c(t);
                        }
                    }["Bt.useMemo"],
                    style: {
                        display: u ? "none" : "block"
                    }
                })
        }["Bt.useMemo"], [
            n,
            a,
            u,
            c,
            t
        ]),
        canPlayVideo: u
    };
}
function zt(e, n = {}) {
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), s = n.minSwipeDistance ?? 50, c = (i)=>{
        a.current = null, t.current = i.targetTouches[0].clientX;
    }, o = (i)=>{
        a.current = i.targetTouches[0].clientX;
    }, u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "zt.useCallback[u]": ()=>{
            if (!t.current || !a.current) return;
            const i = t.current - a.current, l = i > s, d = i < -s;
            l && n.onLeftSwipe && n.onLeftSwipe(), d && n.onRightSwipe && n.onRightSwipe();
        }
    }["zt.useCallback[u]"], [
        s,
        n
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "zt.useEffect": ()=>{
            const i = e.current;
            return i && (i.addEventListener("touchstart", c, {
                passive: !0
            }), i.addEventListener("touchmove", o, {
                passive: !0
            }), i.addEventListener("touchend", u, {
                passive: !0
            })), ({
                "zt.useEffect": ()=>{
                    i && (i.removeEventListener("touchstart", c), i.removeEventListener("touchmove", o), i.removeEventListener("touchend", u));
                }
            })["zt.useEffect"];
        }
    }["zt.useEffect"], [
        e,
        u
    ]);
}
function Ut({ props: e }) {
    const { dispatch: n, state: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])().widget, { className: a } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Ut.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"])()
    }["Ut.useMemo"], []);
    return {
        mergedProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "Ut.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(e, {
                    className: a,
                    onClick: {
                        "Ut.useMemo": ()=>{
                            n && n({
                                msg: "toggle_chat"
                            });
                        }
                    }["Ut.useMemo"],
                    "aria-pressed": t != null && t.showChat ? "true" : "false",
                    "data-lk-unread-msgs": t ? t.unreadMessages < 10 ? t.unreadMessages.toFixed(0) : "9+" : "0"
                })
        }["Ut.useMemo"], [
            e,
            a,
            n,
            t
        ])
    };
}
function qt(e, n, t = {}) {
    const [a, s] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(void 0);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "qt.useEffect": ()=>{
            var o;
            if (e === void 0) throw Error("token endpoint needs to be defined");
            if (((o = t.userInfo) == null ? void 0 : o.identity) === void 0) return;
            ({
                "qt.useEffect": async ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].debug("fetching token");
                    const u = new URLSearchParams({
                        ...t.userInfo,
                        roomName: n
                    }), i = await fetch(`${e}?${u.toString()}`);
                    if (!i.ok) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].error(`Could not fetch token. Server responded with status ${i.status}: ${i.statusText}`);
                        return;
                    }
                    const { accessToken: l } = await i.json();
                    s(l);
                }
            })["qt.useEffect"]();
        }
    }["qt.useEffect"], [
        e,
        n,
        JSON.stringify(t)
    ]), a;
}
function Jt(e) {
    var c, o;
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(e), { className: t, mediaMutedObserver: a } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Jt.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"])(n)
    }["Jt.useMemo"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"])(n)
    ]);
    return {
        isMuted: b(a, !!((c = n.publication) != null && c.isMuted || (o = n.participant.getTrackPublication(n.source)) != null && o.isMuted)),
        className: t
    };
}
function _t({ source: e, onChange: n, initialState: t, captureOptions: a, publishOptions: s, onDeviceError: c, ...o }) {
    var P;
    const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(), i = (P = u == null ? void 0 : u.localParticipant) == null ? void 0 : P.getTrackPublication(e), l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), { toggle: d, className: f, pendingObserver: p, enabledObserver: m } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "_t.useMemo": ()=>u ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"])(e, u, a, s, c) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])()
    }["_t.useMemo"], [
        u,
        e,
        JSON.stringify(a),
        s
    ]), g = b(p, !1), S = b(m, t ?? !!(i != null && i.isEnabled));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "_t.useEffect": ()=>{
            n == null || n(S, l.current), l.current = !1;
        }
    }["_t.useEffect"], [
        S,
        n
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "_t.useEffect": ()=>{
            t !== void 0 && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].debug("forcing initial toggle state", e, t), d(t));
        }
    }["_t.useEffect"], []);
    const M = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "_t.useMemo[M]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(o, {
                className: f
            })
    }["_t.useMemo[M]"], [
        o,
        f
    ]), v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "_t.useCallback[v]": (h)=>{
            var C;
            l.current = !0, d().catch({
                "_t.useCallback[v]": ()=>l.current = !1
            }["_t.useCallback[v]"]), (C = o.onClick) == null || C.call(o, h);
        }
    }["_t.useCallback[v]"], [
        o,
        d
    ]);
    return {
        toggle: d,
        enabled: S,
        pending: g,
        track: i,
        buttonProps: {
            ...M,
            "aria-pressed": S,
            "data-lk-source": e,
            "data-lk-enabled": S,
            disabled: g,
            onClick: v
        }
    };
}
function Wt(e = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShareAudio,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Unknown
], n = {}) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(n.room), [a, s] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState([]), [c, o] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState([]), u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Wt.useMemo[u]": ()=>e.map({
                "Wt.useMemo[u]": (l)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"])(l) ? l.source : l
            }["Wt.useMemo[u]"])
    }["Wt.useMemo[u]"], [
        JSON.stringify(e)
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Wt.useEffect": ()=>{
            const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"])(t, u, {
                additionalRoomEvents: n.updateOnlyOn,
                onlySubscribed: n.onlySubscribed
            }).subscribe({
                "Wt.useEffect.l": ({ trackReferences: d, participants: f })=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].debug("setting track bundles", d, f), s(d), o(f);
                }
            }["Wt.useEffect.l"]);
            return ({
                "Wt.useEffect": ()=>l.unsubscribe()
            })["Wt.useEffect"];
        }
    }["Wt.useEffect"], [
        t,
        JSON.stringify(n.onlySubscribed),
        JSON.stringify(n.updateOnlyOn),
        JSON.stringify(e)
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Wt.useMemo": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W"])(e)) {
                const l = tt(e, c), d = Array.from(a);
                return c.forEach({
                    "Wt.useMemo": (f)=>{
                        l.has(f.identity) && (l.get(f.identity) ?? []).forEach({
                            "Wt.useMemo": (m)=>{
                                if (a.find({
                                    "Wt.useMemo": ({ participant: S, publication: M })=>f.identity === S.identity && M.source === m
                                }["Wt.useMemo"])) return;
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].debug(`Add ${m} placeholder for participant ${f.identity}.`);
                                const g = {
                                    participant: f,
                                    source: m
                                };
                                d.push(g);
                            }
                        }["Wt.useMemo"]);
                    }
                }["Wt.useMemo"]), d;
            } else return a;
        }
    }["Wt.useMemo"], [
        a,
        c,
        e
    ]);
}
function et(e, n) {
    const t = new Set(e);
    for (const a of n)t.delete(a);
    return t;
}
function tt(e, n) {
    const t = /* @__PURE__ */ new Map();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W"])(e)) {
        const a = e.filter((s)=>s.withPlaceholder).map((s)=>s.source);
        n.forEach((s)=>{
            const c = s.getTrackPublications().map((u)=>{
                var i;
                return (i = u.track) == null ? void 0 : i.source;
            }).filter((u)=>u !== void 0), o = Array.from(et(new Set(a), new Set(c)));
            o.length > 0 && t.set(s.identity, o);
        });
    }
    return t;
}
function nt(e) {
    const [n, t] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["X"])(e)), { trackObserver: a } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "nt.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Y"])(e)
    }["nt.useMemo"], [
        e.participant.sid ?? e.participant.identity,
        e.source
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "nt.useEffect": ()=>{
            const s = a.subscribe({
                "nt.useEffect.s": (c)=>{
                    t(c);
                }
            }["nt.useEffect.s"]);
            return ({
                "nt.useEffect": ()=>s == null ? void 0 : s.unsubscribe()
            })["nt.useEffect"];
        }
    }["nt.useEffect"], [
        a
    ]), {
        participant: e.participant,
        source: e.source ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Unknown,
        publication: n
    };
}
function Qt(e, n) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(n);
    return nt({
        name: e,
        participant: t
    });
}
function $t(e) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(), t = I(n), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "$t.useMemo[a]": ()=>t === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Disconnected
    }["$t.useMemo[a]"], [
        t
    ]), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "$t.useMemo[s]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z"])(n, e)
    }["$t.useMemo[s]"], [
        n,
        e,
        a
    ]), c = b(s.isSendingObservable, !1), o = b(s.messageObservable, []);
    return {
        send: s.send,
        update: s.update,
        chatMessages: o,
        isSending: c
    };
}
function Gt(e = {}) {
    const [n, t] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(e.defaults, e.preventLoad ?? !1)), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Gt.useCallback[a]": (i)=>{
            t({
                "Gt.useCallback[a]": (l)=>({
                        ...l,
                        audioEnabled: i
                    })
            }["Gt.useCallback[a]"]);
        }
    }["Gt.useCallback[a]"], []), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Gt.useCallback[s]": (i)=>{
            t({
                "Gt.useCallback[s]": (l)=>({
                        ...l,
                        videoEnabled: i
                    })
            }["Gt.useCallback[s]"]);
        }
    }["Gt.useCallback[s]"], []), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Gt.useCallback[c]": (i)=>{
            t({
                "Gt.useCallback[c]": (l)=>({
                        ...l,
                        audioDeviceId: i
                    })
            }["Gt.useCallback[c]"]);
        }
    }["Gt.useCallback[c]"], []), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Gt.useCallback[o]": (i)=>{
            t({
                "Gt.useCallback[o]": (l)=>({
                        ...l,
                        videoDeviceId: i
                    })
            }["Gt.useCallback[o]"]);
        }
    }["Gt.useCallback[o]"], []), u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Gt.useCallback[u]": (i)=>{
            t({
                "Gt.useCallback[u]": (l)=>({
                        ...l,
                        username: i
                    })
            }["Gt.useCallback[u]"]);
        }
    }["Gt.useCallback[u]"], []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Gt.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])(n, e.preventSave ?? !1);
        }
    }["Gt.useEffect"], [
        n,
        e.preventSave
    ]), {
        userChoices: n,
        saveAudioInputEnabled: a,
        saveVideoInputEnabled: s,
        saveAudioInputDeviceId: c,
        saveVideoInputDeviceId: o,
        saveUsername: u
    };
}
function Ht(e, n = {}) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(e), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(n.room), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Ht.useMemo[s]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a0"])(a, t)
    }["Ht.useMemo[s]"], [
        a,
        t
    ]);
    return b(s, t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalParticipant"] ? t.isE2EEEnabled : !!(t != null && t.isEncrypted));
}
function jt(e, n = {
    fftSize: 32,
    smoothingTimeConstant: 0
}) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a1"])(e) ? e.publication.track : e, [a, s] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(0);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "jt.useEffect": ()=>{
            if (!t || !t.mediaStream) return;
            const { cleanup: c, analyser: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAudioAnalyser"])(t, n), u = o.frequencyBinCount, i = new Uint8Array(u), d = setInterval({
                "jt.useEffect.d": ()=>{
                    o.getByteFrequencyData(i);
                    let f = 0;
                    for(let p = 0; p < i.length; p++){
                        const m = i[p];
                        f += m * m;
                    }
                    s(Math.sqrt(f / i.length) / 255);
                }
            }["jt.useEffect.d"], 1e3 / 30);
            return ({
                "jt.useEffect": ()=>{
                    c(), clearInterval(d);
                }
            })["jt.useEffect"];
        }
    }["jt.useEffect"], [
        t,
        t == null ? void 0 : t.mediaStream,
        JSON.stringify(n)
    ]), a;
}
const st = (e)=>{
    const n = (t)=>{
        let c = 1 - Math.max(-100, Math.min(-10, t)) * -1 / 100;
        return c = Math.sqrt(c), c;
    };
    return e.map((t)=>t === -1 / 0 ? 0 : n(t));
}, at = {
    bands: 5,
    loPass: 100,
    hiPass: 600,
    updateInterval: 32,
    analyserOptions: {
        fftSize: 2048
    }
};
function Xt(e, n = {}) {
    var o;
    const t = e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"] ? e : (o = e == null ? void 0 : e.publication) == null ? void 0 : o.track, a = {
        ...at,
        ...n
    }, [s, c] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(new Array(a.bands).fill(0));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Xt.useEffect": ()=>{
            if (!t || !(t != null && t.mediaStream)) return;
            const { analyser: u, cleanup: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAudioAnalyser"])(t, a.analyserOptions), l = u.frequencyBinCount, d = new Float32Array(l), p = setInterval({
                "Xt.useEffect.p": ()=>{
                    u.getFloatFrequencyData(d);
                    let m = new Float32Array(d.length);
                    for(let v = 0; v < d.length; v++)m[v] = d[v];
                    m = m.slice(n.loPass, n.hiPass);
                    const g = st(m), S = Math.ceil(g.length / a.bands), M = [];
                    for(let v = 0; v < a.bands; v++){
                        const P = g.slice(v * S, (v + 1) * S).reduce({
                            "Xt.useEffect.p.P": (h, C)=>h += C
                        }["Xt.useEffect.p.P"], 0);
                        M.push(P / S);
                    }
                    c(M);
                }
            }["Xt.useEffect.p"], a.updateInterval);
            return ({
                "Xt.useEffect": ()=>{
                    i(), clearInterval(p);
                }
            })["Xt.useEffect"];
        }
    }["Xt.useEffect"], [
        t,
        t == null ? void 0 : t.mediaStream,
        JSON.stringify(n)
    ]), s;
}
const rt = {
    barCount: 120,
    volMultiplier: 5,
    updateInterval: 20
};
function xt(e, n = {}) {
    var d;
    const t = e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"] ? e : (d = e == null ? void 0 : e.publication) == null ? void 0 : d.track, a = {
        ...rt,
        ...n
    }, s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(new Float32Array()), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(performance.now()), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(0), [u, i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState([]), l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "xt.useCallback[l]": (f)=>{
            i(Array.from(ot(f, a.barCount).map({
                "xt.useCallback[l]": (p)=>Math.sqrt(p) * a.volMultiplier
            }["xt.useCallback[l]"])));
        }
    }["xt.useCallback[l]"], []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "xt.useEffect": ()=>{
            if (!t || !(t != null && t.mediaStream)) return;
            const { analyser: f, cleanup: p } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAudioAnalyser"])(t, {
                fftSize: U(a.barCount)
            }), m = U(a.barCount), g = new Float32Array(m), S = {
                "xt.useEffect.S": ()=>{
                    if (M = requestAnimationFrame(S), f.getFloatTimeDomainData(g), s.current.map({
                        "xt.useEffect.S": (v, P)=>v + g[P]
                    }["xt.useEffect.S"]), o.current += 1, performance.now() - c.current >= a.updateInterval) {
                        const v = g.map({
                            "xt.useEffect.S.v": (P)=>P / o.current
                        }["xt.useEffect.S.v"]);
                        l(v), c.current = performance.now(), o.current = 0;
                    }
                }
            }["xt.useEffect.S"];
            let M = requestAnimationFrame(S);
            return ({
                "xt.useEffect": ()=>{
                    p(), cancelAnimationFrame(M);
                }
            })["xt.useEffect"];
        }
    }["xt.useEffect"], [
        t,
        t == null ? void 0 : t.mediaStream,
        JSON.stringify(n),
        l
    ]), {
        bars: u
    };
}
function U(e) {
    return e < 32 ? 32 : ct(e);
}
function ct(e) {
    let n = 2;
    for(; e >>= 1;)n <<= 1;
    return n;
}
function ot(e, n) {
    const t = Math.floor(e.length / n), a = new Float32Array(n);
    for(let s = 0; s < n; s++){
        const c = t * s;
        let o = 0;
        for(let u = 0; u < t; u++)o = o + Math.abs(e[c + u]);
        a[s] = o / t;
    }
    return a;
}
function it(e, n) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"])(), s = n ? t.getParticipantByIdentity(n) : a, c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "it.useMemo[c]": ()=>s ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a2"])(s, {
                sources: e
            }) : void 0
    }["it.useMemo[c]"], [
        s == null ? void 0 : s.sid,
        s == null ? void 0 : s.identity,
        JSON.stringify(e)
    ]);
    return b(c, []);
}
function ut(e) {
    var t, a, s;
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ut.useMemo[n]": ()=>{
            var c;
            return (c = e == null ? void 0 : e.publication) != null && c.track ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a3"])(e == null ? void 0 : e.publication.track) : void 0;
        }
    }["ut.useMemo[n]"], [
        (t = e == null ? void 0 : e.publication) == null ? void 0 : t.track
    ]);
    return b(n, {
        timestamp: Date.now(),
        rtpTimestamp: (s = (a = e == null ? void 0 : e.publication) == null ? void 0 : a.track) == null ? void 0 : s.rtpTimestamp
    });
}
const lt = {
    bufferSize: 100
};
function dt(e, n) {
    const t = {
        ...lt,
        ...n
    }, [a, s] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState([]), c = ut(e), o = (u)=>{
        var i;
        (i = t.onTranscription) == null || i.call(t, u), s((l)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a5"])(l, // when first receiving a segment, add the current media timestamp to it
            u.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a6"])(d, c)), t.bufferSize));
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "dt.useEffect": ()=>{
            if (!(e != null && e.publication)) return;
            const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a4"])(e.publication).subscribe({
                "dt.useEffect.u": (i)=>{
                    o(...i);
                }
            }["dt.useEffect.u"]);
            return ({
                "dt.useEffect": ()=>{
                    u.unsubscribe();
                }
            })["dt.useEffect"];
        }
    }["dt.useEffect"], [
        e && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"])(e),
        o
    ]), {
        segments: a
    };
}
function ft(e = {}) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"])(), t = e.participant ?? n, a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ft.useMemo[a]": // weird typescript constraint
        ()=>t ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a7"])(t) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a7"])(t)
    }["ft.useMemo[a]"], [
        t
    ]);
    return b(a, {
        attributes: t == null ? void 0 : t.attributes
    });
}
function Yt(e, n = {}) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(n.participant), [a, s] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(t.attributes[e]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Yt.useEffect": ()=>{
            if (!t) return;
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a7"])(t).subscribe({
                "Yt.useEffect.c": (o)=>{
                    o.changed[e] !== void 0 && s(o.attributes[e]);
                }
            }["Yt.useEffect.c"]);
            return ({
                "Yt.useEffect": ()=>{
                    c.unsubscribe();
                }
            })["Yt.useEffect"];
        }
    }["Yt.useEffect"], [
        t,
        e
    ]), a;
}
const q = "lk.agent.state";
function Kt() {
    const e = G().find((o)=>o.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantKind"].AGENT), n = it([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone
    ], e == null ? void 0 : e.identity)[0], { segments: t } = dt(n), a = I(), { attributes: s } = ft({
        participant: e
    }), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Kt.useMemo[c]": ()=>a === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Disconnected ? "disconnected" : a === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Connecting || !e || !(s != null && s[q]) ? "connecting" : s[q]
    }["Kt.useMemo[c]"], [
        s,
        e,
        a
    ]);
    return {
        agent: e,
        state: c,
        audioTrack: n,
        agentTranscriptions: t,
        agentAttributes: s
    };
}
function Zt(e) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(e), t = I(n), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Zt.useMemo[a]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a8"])(n)
    }["Zt.useMemo[a]"], [
        n,
        t
    ]);
    return b(a, n.isRecording);
}
;
 //# sourceMappingURL=hooks-aMI94FOv.mjs.map
}}),
"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/hooks-aMI94FOv.mjs [app-client] (ecmascript) <export e as useMediaDeviceSelect>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useMediaDeviceSelect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/hooks-aMI94FOv.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/hooks-aMI94FOv.mjs [app-client] (ecmascript) <export C as useLocalParticipant>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useLocalParticipant": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/hooks-aMI94FOv.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/components-CG43NVTo.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "A": (()=>Ea),
    "B": (()=>Qt),
    "C": (()=>aa),
    "D": (()=>na),
    "E": (()=>Je),
    "F": (()=>ma),
    "G": (()=>ha),
    "H": (()=>D),
    "I": (()=>Ke),
    "J": (()=>et),
    "K": (()=>tt),
    "L": (()=>va),
    "M": (()=>oa),
    "N": (()=>at),
    "O": (()=>nt),
    "P": (()=>Zt),
    "Q": (()=>rt),
    "R": (()=>wa),
    "S": (()=>ra),
    "T": (()=>da),
    "U": (()=>ct),
    "V": (()=>zt),
    "W": (()=>lt),
    "X": (()=>oe),
    "Y": (()=>it),
    "Z": (()=>G),
    "_": (()=>ot),
    "a": (()=>ya),
    "b": (()=>dt),
    "c": (()=>ca),
    "d": (()=>la),
    "e": (()=>ia),
    "f": (()=>ua),
    "g": (()=>ga),
    "h": (()=>fa),
    "i": (()=>Ra),
    "j": (()=>fe),
    "k": (()=>Ma),
    "l": (()=>$t),
    "m": (()=>ba),
    "n": (()=>ea),
    "o": (()=>ta),
    "p": (()=>st),
    "q": (()=>sa),
    "r": (()=>ue),
    "s": (()=>W),
    "t": (()=>B),
    "u": (()=>de),
    "v": (()=>pa),
    "w": (()=>ka),
    "x": (()=>Vt),
    "y": (()=>Ft),
    "z": (()=>Ye)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/livekit-client@2.7.5/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/hooks-aMI94FOv.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/contexts-568EHGLp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/room-DfA7knPM.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const ea = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(n, a) {
    const { buttonProps: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(n);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
        ref: a,
        ...r
    }, n.children);
}), ta = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ room: n, ...a }, r) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(n);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: r,
        ...a
    }, c);
}), aa = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(n, a) {
    const { mergedProps: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        props: n
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
        ref: a,
        ...r
    }, n.children);
}), na = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(n, a) {
    const { buttonProps: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(n);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
        ref: a,
        ...r
    }, n.children);
}), Ye = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "currentColor",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708L11 10.293V4.5A1.5 1.5 0 0 0 9.5 3H3.707zM0 4.5a1.5 1.5 0 0 1 .943-1.393l9.532 9.533c-.262.224-.603.36-.975.36h-8A1.5 1.5 0 0 1 0 11.5z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "m15.2 3.6-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4z"
    })), Je = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "currentColor",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M0 4.5A1.5 1.5 0 0 1 1.5 3h8A1.5 1.5 0 0 1 11 4.5v7A1.5 1.5 0 0 1 9.5 13h-8A1.5 1.5 0 0 1 0 11.5zM15.2 3.6l-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4z"
    })), ra = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        viewBox: "0 0 24 24",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "#FFF",
        d: "M4.99 3.99a1 1 0 0 0-.697 1.717L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 1 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0-.727-1.717 1 1 0 0 0-.687.303L12 10.586 5.707 4.293a1 1 0 0 0-.717-.303z"
    })), ca = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 18,
        fill: "none",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v13.594a.75.75 0 0 1-1.234.572l-3.691-3.12a1.25 1.25 0 0 0-.807-.296H2.75A2.75 2.75 0 0 1 0 10.75v-8ZM2.75 1.5c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h7.518c.65 0 1.279.23 1.775.65l2.457 2.077V2.75c0-.69-.56-1.25-1.25-1.25H2.75Z",
        clipRule: "evenodd"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
        clipRule: "evenodd"
    })), D = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentcolor",
        fillRule: "evenodd",
        d: "M5.293 2.293a1 1 0 0 1 1.414 0l4.823 4.823a1.25 1.25 0 0 1 0 1.768l-4.823 4.823a1 1 0 0 1-1.414-1.414L9.586 8 5.293 3.707a1 1 0 0 1 0-1.414z",
        clipRule: "evenodd"
    })), Ke = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("g", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M10 1.75h4.25m0 0V6m0-4.25L9 7M6 14.25H1.75m0 0V10m0 4.25L7 9"
    }))), la = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentcolor",
        fillRule: "evenodd",
        d: "M8.961.894C8.875-.298 7.125-.298 7.04.894c-.066.912-1.246 1.228-1.76.472-.67-.99-2.186-.115-1.664.96.399.824-.465 1.688-1.288 1.289-1.076-.522-1.95.994-.961 1.665.756.513.44 1.693-.472 1.759-1.192.086-1.192 1.836 0 1.922.912.066 1.228 1.246.472 1.76-.99.67-.115 2.186.96 1.664.824-.399 1.688.465 1.289 1.288-.522 1.076.994 1.95 1.665.961.513-.756 1.693-.44 1.759.472.086 1.192 1.836 1.192 1.922 0 .066-.912 1.246-1.228 1.76-.472.67.99 2.186.115 1.664-.96-.399-.824.465-1.688 1.288-1.289 1.076.522 1.95-.994.961-1.665-.756-.513-.44-1.693.472-1.759 1.192-.086 1.192-1.836 0-1.922-.912-.066-1.228-1.246-.472-1.76.99-.67.115-2.186-.96-1.664-.824.399-1.688-.465-1.289-1.288.522-1.076-.994-1.95-1.665-.961-.513.756-1.693.44-1.759-.472ZM8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10Z",
        clipRule: "evenodd"
    })), ia = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2 2.75A2.75 2.75 0 0 1 4.75 0h6.5A2.75 2.75 0 0 1 14 2.75v10.5A2.75 2.75 0 0 1 11.25 16h-6.5A2.75 2.75 0 0 1 2 13.25v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25h-6.5c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 0 1-1.5 0v-.5Z",
        clipRule: "evenodd"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M8.78 7.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H1.75a.75.75 0 0 1 0-1.5h4.69l-.97-.97a.75.75 0 0 1 1.06-1.06l2.25 2.25Z",
        clipRule: "evenodd"
    })), et = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentcolor",
        fillRule: "evenodd",
        d: "M4 6.104V4a4 4 0 1 1 8 0v2.104c1.154.326 2 1.387 2 2.646v4.5A2.75 2.75 0 0 1 11.25 16h-6.5A2.75 2.75 0 0 1 2 13.25v-4.5c0-1.259.846-2.32 2-2.646ZM5.5 4a2.5 2.5 0 0 1 5 0v2h-5V4Z",
        clipRule: "evenodd"
    })), tt = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "currentColor",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M12.227 11.52a5.477 5.477 0 0 0 1.246-2.97.5.5 0 0 0-.995-.1 4.478 4.478 0 0 1-.962 2.359l-1.07-1.07C10.794 9.247 11 8.647 11 8V3a3 3 0 0 0-6 0v1.293L1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708zM8 12.5c.683 0 1.33-.152 1.911-.425l.743.743c-.649.359-1.378.59-2.154.66V15h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.522a5.502 5.502 0 0 1-4.973-4.929.5.5 0 0 1 .995-.098A4.5 4.5 0 0 0 8 12.5z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M8.743 10.907 5 7.164V8a3 3 0 0 0 3.743 2.907z"
    })), at = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "currentColor",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fillRule: "evenodd",
        d: "M2.975 8.002a.5.5 0 0 1 .547.449 4.5 4.5 0 0 0 8.956 0 .5.5 0 1 1 .995.098A5.502 5.502 0 0 1 8.5 13.478V15h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.522a5.502 5.502 0 0 1-4.973-4.929.5.5 0 0 1 .448-.547z",
        clipRule: "evenodd"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M5 3a3 3 0 1 1 6 0v5a3 3 0 0 1-6 0z"
    })), nt = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "currentcolor",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
    })), rt = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "currentcolor",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("g", {
        opacity: 0.25
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
    }))), ct = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "currentcolor",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("g", {
        opacity: 0.25
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
    }))), lt = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "currentColor",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("g", {
        opacity: 0.25
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4Zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-9Zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V.5Z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4Zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-9Zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V.5Z"
    }))), oe = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 16,
        fill: "none",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h14.5A2.75 2.75 0 0 1 20 2.75v10.5A2.75 2.75 0 0 1 17.25 16H2.75A2.75 2.75 0 0 1 0 13.25V2.75ZM2.75 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25H2.75Z",
        clipRule: "evenodd"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.47 4.22a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v4.69a.75.75 0 0 1-1.5 0V6.56l-.97.97a.75.75 0 0 1-1.06-1.06l2.25-2.25Z",
        clipRule: "evenodd"
    })), it = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 16,
        fill: "none",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("g", {
        fill: "currentColor"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M7.28 4.22a.75.75 0 0 0-1.06 1.06L8.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L10 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L11.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L10 6.94z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fillRule: "evenodd",
        d: "M2.75 0A2.75 2.75 0 0 0 0 2.75v10.5A2.75 2.75 0 0 0 2.75 16h14.5A2.75 2.75 0 0 0 20 13.25V2.75A2.75 2.75 0 0 0 17.25 0zM1.5 2.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H2.75c-.69 0-1.25-.56-1.25-1.25z",
        clipRule: "evenodd"
    }))), G = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M8 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0Z",
        clipRule: "evenodd"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M8 12a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 12Z",
        clipRule: "evenodd",
        opacity: 0.7
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 1.072a.75.75 0 0 1 .274 1.024l-1.25 2.165a.75.75 0 0 1-1.299-.75l1.25-2.165A.75.75 0 0 1 12 1.072Z",
        clipRule: "evenodd"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6 11.464a.75.75 0 0 1 .274 1.025l-1.25 2.165a.75.75 0 0 1-1.299-.75l1.25-2.165A.75.75 0 0 1 6 11.464Z",
        clipRule: "evenodd",
        opacity: 0.6
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.928 4a.75.75 0 0 1-.274 1.025l-2.165 1.25a.75.75 0 1 1-.75-1.3l2.165-1.25A.75.75 0 0 1 14.928 4Z",
        clipRule: "evenodd"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.536 10a.75.75 0 0 1-.275 1.024l-2.165 1.25a.75.75 0 0 1-.75-1.298l2.165-1.25A.75.75 0 0 1 4.536 10Z",
        clipRule: "evenodd",
        opacity: 0.5
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16 8a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 16 8Z",
        clipRule: "evenodd"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 4 8Z",
        clipRule: "evenodd",
        opacity: 0.4
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.928 12a.75.75 0 0 1-1.024.274l-2.165-1.25a.75.75 0 0 1 .75-1.299l2.165 1.25A.75.75 0 0 1 14.928 12Z",
        clipRule: "evenodd",
        opacity: 0.9
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.536 6a.75.75 0 0 1-1.025.275l-2.165-1.25a.75.75 0 1 1 .75-1.3l2.165 1.25A.75.75 0 0 1 4.536 6Z",
        clipRule: "evenodd",
        opacity: 0.3
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 14.928a.75.75 0 0 1-1.024-.274l-1.25-2.165a.75.75 0 0 1 1.298-.75l1.25 2.165A.75.75 0 0 1 12 14.928Z",
        clipRule: "evenodd",
        opacity: 0.8
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6 4.536a.75.75 0 0 1-1.024-.275l-1.25-2.165a.75.75 0 1 1 1.299-.75l1.25 2.165A.75.75 0 0 1 6 4.536Z",
        clipRule: "evenodd",
        opacity: 0.2
    })), ot = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("g", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M13.25 7H9m0 0V2.75M9 7l5.25-5.25M2.75 9H7m0 0v4.25M7 9l-5.25 5.25"
    }))), st = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ trackRef: n, ...a }, r) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a9"])(), { mergedProps: o, inFocus: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
        trackRef: n ?? c,
        props: a
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aa"].Consumer, null, (l)=>l !== void 0 && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
            ref: r,
            ...o
        }, a.children ? a.children : s ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(ot, null) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(Ke, null)));
}), oa = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ kind: n, initialSelection: a, onActiveDeviceChange: r, onDeviceListChange: c, onDeviceSelectError: o, exactMatch: s, track: l, requestPermissions: i, onError: u, ...d }, f) {
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(), E = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "oa.useCallback[E]": (w)=>{
            m && m.emit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].MediaDevicesError, w), u == null || u(w);
        }
    }["oa.useCallback[E]"], [
        m,
        u
    ]), { devices: p, activeDeviceId: h, setActiveMediaDevice: g, className: k } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
        kind: n,
        room: m,
        track: l,
        requestPermissions: i,
        onError: E
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "oa.useEffect": ()=>{
            a !== void 0 && g(a);
        }
    }["oa.useEffect"], [
        g
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "oa.useEffect": ()=>{
            typeof c == "function" && c(p);
        }
    }["oa.useEffect"], [
        c,
        p
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "oa.useEffect": ()=>{
            h && h !== "" && (r == null || r(h));
        }
    }["oa.useEffect"], [
        h
    ]);
    const C = async (w)=>{
        try {
            await g(w, {
                exact: s
            });
        } catch (v) {
            if (v instanceof Error) o == null || o(v);
            else throw v;
        }
    }, b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "oa.useMemo[b]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(d, {
                className: k
            }, {
                className: "lk-list"
            })
    }["oa.useMemo[b]"], [
        k,
        d
    ]);
    function S(w, v, R) {
        return w === v || R === 0 && v === "default";
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("ul", {
        ref: f,
        ...b
    }, p.map((w, v)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("li", {
            key: w.deviceId,
            id: w.deviceId,
            "data-lk-active": S(w.deviceId, h, v),
            "aria-selected": S(w.deviceId, h, v),
            role: "option"
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
            className: "lk-button",
            onClick: ()=>C(w.deviceId)
        }, w.label))));
}), sa = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ label: n = "Allow Audio", ...a }, r) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(), { mergedProps: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
        room: c,
        props: a
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
        ref: r,
        ...o
    }, n);
}), ua = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ label: n, ...a }, r) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(), { mergedProps: o, canPlayAudio: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
        room: c,
        props: a
    }), { mergedProps: l, canPlayVideo: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])({
        room: c,
        props: o
    }), { style: u, ...d } = l;
    return u.display = s && i ? "none" : "block", /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
        ref: r,
        style: u,
        ...d
    }, n ?? `Start ${s ? "Video" : "Audio"}`);
});
function se(t, n) {
    switch(t){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone:
            return n ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(at, null) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(tt, null);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera:
            return n ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(Je, null) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(Ye, null);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare:
            return n ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(it, null) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(oe, null);
        default:
            return;
    }
}
function ut(t) {
    switch(t){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionQuality"].Excellent:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(nt, null);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionQuality"].Good:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(rt, null);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionQuality"].Poor:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(ct, null);
        default:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(lt, null);
    }
}
const da = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ showIcon: n, ...a }, r) {
    const { buttonProps: c, enabled: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(a);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
        ref: r,
        ...c
    }, (n ?? !0) && se(a.source, o), a.children);
}), ue = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(n, a) {
    const { className: r, quality: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(n), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ue.useMemo[o]": ()=>({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(n, {
                    className: r
                }),
                "data-lk-quality": c
            })
    }["ue.useMemo[o]"], [
        c,
        n,
        r
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: a,
        ...o
    }, n.children ?? ut(c));
}), B = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ participant: n, ...a }, r) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(n), { className: o, infoObserver: s } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "B.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ab"])(c)
    }["B.useMemo"], [
        c
    ]), { identity: l, name: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(s, {
        name: c.name,
        identity: c.identity,
        metadata: c.metadata
    }), u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "B.useMemo[u]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(a, {
                className: o,
                "data-lk-participant-name": i
            })
    }["B.useMemo[u]"], [
        a,
        o,
        i
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        ref: r,
        ...u
    }, i !== "" ? i : l, a.children);
}), de = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ trackRef: n, show: a = "always", ...r }, c) {
    const { className: o, isMuted: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(n), l = a === "always" || a === "muted" && s || a === "unmuted" && !s, i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "de.useMemo[i]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(r, {
                className: o
            })
    }["de.useMemo[i]"], [
        o,
        r
    ]);
    return l ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: c,
        ...i,
        "data-lk-muted": s
    }, r.children ?? se(n.source, !s)) : null;
}), dt = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        width: 320,
        height: 320,
        viewBox: "0 0 320 320",
        preserveAspectRatio: "xMidYMid meet",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M160 180C204.182 180 240 144.183 240 100C240 55.8172 204.182 20 160 20C115.817 20 79.9997 55.8172 79.9997 100C79.9997 144.183 115.817 180 160 180Z",
        fill: "white",
        fillOpacity: 0.25
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        d: "M97.6542 194.614C103.267 191.818 109.841 192.481 115.519 195.141C129.025 201.466 144.1 205 159.999 205C175.899 205 190.973 201.466 204.48 195.141C210.158 192.481 216.732 191.818 222.345 194.614C262.703 214.719 291.985 253.736 298.591 300.062C300.15 310.997 291.045 320 280 320H39.9997C28.954 320 19.8495 310.997 21.4087 300.062C28.014 253.736 57.2966 214.72 97.6542 194.614Z",
        fill: "white",
        fillOpacity: 0.25
    }));
function me(t, n = {}) {
    const [a, r] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["X"])(t)), [c, o] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(a == null ? void 0 : a.isMuted), [s, l] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(a == null ? void 0 : a.isSubscribed), [i, u] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(a == null ? void 0 : a.track), [d, f] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState("landscape"), m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(), { className: E, trackObserver: p } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "me.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Y"])(t)
    }["me.useMemo"], [
        t.participant.sid ?? t.participant.identity,
        t.source,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a1"])(t) && t.publication.trackSid
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "me.useEffect": ()=>{
            const h = p.subscribe({
                "me.useEffect.h": (g)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].debug("update track", g), r(g), o(g == null ? void 0 : g.isMuted), l(g == null ? void 0 : g.isSubscribed), u(g == null ? void 0 : g.track);
                }
            }["me.useEffect.h"]);
            return ({
                "me.useEffect": ()=>h == null ? void 0 : h.unsubscribe()
            })["me.useEffect"];
        }
    }["me.useEffect"], [
        p
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "me.useEffect": ()=>{
            var h, g;
            return i && (m.current && i.detach(m.current), (h = n.element) != null && h.current && !((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ac"])(t.participant) && (i == null ? void 0 : i.kind) === "audio") && i.attach(n.element.current)), m.current = (g = n.element) == null ? void 0 : g.current, ({
                "me.useEffect": ()=>{
                    m.current && (i == null || i.detach(m.current));
                }
            })["me.useEffect"];
        }
    }["me.useEffect"], [
        i,
        n.element
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "me.useEffect": ()=>{
            var h, g;
            if (typeof ((h = a == null ? void 0 : a.dimensions) == null ? void 0 : h.width) == "number" && typeof ((g = a == null ? void 0 : a.dimensions) == null ? void 0 : g.height) == "number") {
                const k = a.dimensions.width > a.dimensions.height ? "landscape" : "portrait";
                f(k);
            }
        }
    }["me.useEffect"], [
        a
    ]), {
        publication: a,
        isMuted: c,
        isSubscribed: s,
        track: i,
        elementProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(n.props, {
            className: E,
            "data-lk-local-participant": t.participant.isLocal,
            "data-lk-source": a == null ? void 0 : a.source,
            ...(a == null ? void 0 : a.kind) === "video" && {
                "data-lk-orientation": d
            }
        })
    };
}
var mt = "Expected a function", Q = NaN, ft = "[object Symbol]", ht = /^\s+|\s+$/g, gt = /^[-+]0x[0-9a-f]+$/i, vt = /^0b[01]+$/i, Et = /^0o[0-7]+$/i, pt = parseInt, wt = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ad"] == "object" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ad"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ad"].Object === Object && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ad"], kt = typeof self == "object" && self && self.Object === Object && self, Mt = wt || kt || Function("return this")(), Rt = Object.prototype, yt = Rt.toString, bt = Math.max, St = Math.min, Z = function() {
    return Mt.Date.now();
};
function Ct(t, n, a) {
    var r, c, o, s, l, i, u = 0, d = !1, f = !1, m = !0;
    if (typeof t != "function") throw new TypeError(mt);
    n = U(n) || 0, j(a) && (d = !!a.leading, f = "maxWait" in a, o = f ? bt(U(a.maxWait) || 0, n) : o, m = "trailing" in a ? !!a.trailing : m);
    function E(v) {
        var R = r, T = c;
        return r = c = void 0, u = v, s = t.apply(T, R), s;
    }
    function p(v) {
        return u = v, l = setTimeout(k, n), d ? E(v) : s;
    }
    function h(v) {
        var R = v - i, T = v - u, q = n - R;
        return f ? St(q, o - T) : q;
    }
    function g(v) {
        var R = v - i, T = v - u;
        return i === void 0 || R >= n || R < 0 || f && T >= o;
    }
    function k() {
        var v = Z();
        if (g(v)) return C(v);
        l = setTimeout(k, h(v));
    }
    function C(v) {
        return l = void 0, m && r ? E(v) : (r = c = void 0, s);
    }
    function b() {
        l !== void 0 && clearTimeout(l), u = 0, r = i = c = l = void 0;
    }
    function S() {
        return l === void 0 ? s : C(Z());
    }
    function w() {
        var v = Z(), R = g(v);
        if (r = arguments, c = this, i = v, R) {
            if (l === void 0) return p(i);
            if (f) return l = setTimeout(k, n), E(i);
        }
        return l === void 0 && (l = setTimeout(k, n)), s;
    }
    return w.cancel = b, w.flush = S, w;
}
function j(t) {
    var n = typeof t;
    return !!t && (n == "object" || n == "function");
}
function It(t) {
    return !!t && typeof t == "object";
}
function Pt(t) {
    return typeof t == "symbol" || It(t) && yt.call(t) == ft;
}
function U(t) {
    if (typeof t == "number") return t;
    if (Pt(t)) return Q;
    if (j(t)) {
        var n = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = j(n) ? n + "" : n;
    }
    if (typeof t != "string") return t === 0 ? t : +t;
    t = t.replace(ht, "");
    var a = vt.test(t);
    return a || Et.test(t) ? pt(t.slice(2), a ? 2 : 8) : gt.test(t) ? Q : +t;
}
var Tt = Ct;
const X = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ae"])(Tt);
function xt(t) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t);
    n.current = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            n.current();
        }, []);
}
function At(t, n = 500, a) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    xt(()=>{
        r.current && r.current.cancel();
    });
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const o = X(t, n, a), s = (...l)=>o(...l);
        return s.cancel = ()=>{
            o.cancel();
        }, s.isPending = ()=>!!r.current, s.flush = ()=>o.flush(), s;
    }, [
        t,
        n,
        a
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        r.current = X(t, n, a);
    }, [
        t,
        n,
        a
    ]), c;
}
function Nt(t, n, a) {
    const r = (u, d)=>u === d, c = t instanceof Function ? t() : t, [o, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(c), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(c), i = At(s, n, a);
    return r(l.current, c) || (i(c), l.current = c), [
        o,
        i
    ];
}
function Lt({ threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: r = !1, initialIsIntersecting: c = !1, onChange: o } = {}) {
    var s;
    const [l, i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [u, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>({
            isIntersecting: c,
            entry: void 0
        })), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    f.current = o;
    const m = ((s = u.entry) == null ? void 0 : s.isIntersecting) && r;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!l || !("IntersectionObserver" in window) || m) return;
        let h;
        const g = new IntersectionObserver((k)=>{
            const C = Array.isArray(g.thresholds) ? g.thresholds : [
                g.thresholds
            ];
            k.forEach((b)=>{
                const S = b.isIntersecting && C.some((w)=>b.intersectionRatio >= w);
                d({
                    isIntersecting: S,
                    entry: b
                }), f.current && f.current(S, b), S && r && h && (h(), h = void 0);
            });
        }, {
            threshold: t,
            root: n,
            rootMargin: a
        });
        return g.observe(l), ()=>{
            g.disconnect();
        };
    }, [
        l,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        JSON.stringify(t),
        n,
        a,
        m,
        r
    ]);
    const E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var h;
        !l && (h = u.entry) != null && h.target && !r && !m && E.current !== u.entry.target && (E.current = u.entry.target, d({
            isIntersecting: c,
            entry: void 0
        }));
    }, [
        l,
        u.entry,
        r,
        m,
        c
    ]);
    const p = [
        i,
        !!u.isIntersecting,
        u.entry
    ];
    return p.ref = p[0], p.isIntersecting = p[1], p.entry = p[2], p;
}
const zt = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ onTrackClick: n, onClick: a, onSubscriptionStatusChanged: r, trackRef: c, manageSubscription: o, ...s }, l) {
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(c), u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useImperativeHandle(l, {
        "zt.useImperativeHandle": ()=>u.current
    }["zt.useImperativeHandle"]);
    const d = Lt({
        root: u.current
    }), [f] = Nt(d, 3e3);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "zt.useEffect": ()=>{
            o && i.publication instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteTrackPublication"] && (f == null ? void 0 : f.isIntersecting) === !1 && (d == null ? void 0 : d.isIntersecting) === !1 && i.publication.setSubscribed(!1);
        }
    }["zt.useEffect"], [
        f,
        i,
        o
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "zt.useEffect": ()=>{
            o && i.publication instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteTrackPublication"] && (d == null ? void 0 : d.isIntersecting) === !0 && i.publication.setSubscribed(!0);
        }
    }["zt.useEffect"], [
        d,
        i,
        o
    ]);
    const { elementProps: m, publication: E, isSubscribed: p } = me(i, {
        element: u,
        props: s
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "zt.useEffect": ()=>{
            r == null || r(!!p);
        }
    }["zt.useEffect"], [
        p,
        r
    ]);
    const h = (g)=>{
        a == null || a(g), n == null || n({
            participant: i == null ? void 0 : i.participant,
            track: E
        });
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("video", {
        ref: u,
        ...m,
        muted: !0,
        onClick: h
    });
}), W = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ trackRef: n, onSubscriptionStatusChanged: a, volume: r, muted: c, ...o }, s) {
    const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(n), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useImperativeHandle(s, {
        "W.useImperativeHandle": ()=>i.current
    }["W.useImperativeHandle"]);
    const { elementProps: u, isSubscribed: d, track: f, publication: m } = me(l, {
        element: i,
        props: o
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "W.useEffect": ()=>{
            a == null || a(!!d);
        }
    }["W.useEffect"], [
        d,
        a
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "W.useEffect": ()=>{
            f === void 0 || r === void 0 || (f instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteAudioTrack"] ? f.setVolume(r) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].warn("Volume can only be set on remote audio tracks."));
        }
    }["W.useEffect"], [
        r,
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "W.useEffect": ()=>{
            m === void 0 || c === void 0 || (m instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteTrackPublication"] ? m.setEnabled(!c) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].warn("Can only call setEnabled on remote track publications."));
        }
    }["W.useEffect"], [
        c,
        m,
        f
    ]), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("audio", {
        ref: i,
        ...u
    });
});
function Vt(t) {
    const n = !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"])();
    return t.participant && !n ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["af"].Provider, {
        value: t.participant
    }, t.children) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, t.children);
}
function Ft(t) {
    const n = !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a9"])();
    return t.trackRef && !n ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ag"].Provider, {
        value: t.trackRef
    }, t.children) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, t.children);
}
const Zt = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ trackRef: n, children: a, onParticipantClick: r, disableSpeakingIndicator: c, ...o }, s) {
    var E, p;
    const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(n), { elementProps: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])({
        htmlProps: o,
        disableSpeakingIndicator: c,
        onParticipantClick: r,
        trackRef: l
    }), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(l.participant), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(), f = (E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ah"])()) == null ? void 0 : E.autoSubscription, m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Zt.useCallback[m]": (h)=>{
            l.source && !h && d && d.pin.dispatch && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(l, d.pin.state) && d.pin.dispatch({
                msg: "clear_pin"
            });
        }
    }["Zt.useCallback[m]"], [
        l,
        d
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: s,
        style: {
            position: "relative"
        },
        ...i
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(Ft, {
        trackRef: l
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(Vt, {
        participant: l.participant
    }, a ?? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a1"])(l) && (((p = l.publication) == null ? void 0 : p.kind) === "video" || l.source === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera || l.source === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare) ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(zt, {
        trackRef: l,
        onSubscriptionStatusChanged: m,
        manageSubscription: f
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a1"])(l) && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(W, {
        trackRef: l,
        onSubscriptionStatusChanged: m
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: "lk-participant-placeholder"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(dt, null)), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: "lk-participant-metadata"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: "lk-participant-metadata-item"
    }, l.source === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, u && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(et, {
        style: {
            marginRight: "0.25rem"
        }
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(de, {
        trackRef: {
            participant: l.participant,
            source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone
        },
        show: "muted"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(B, null)) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(oe, {
        style: {
            marginRight: "0.25rem"
        }
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(B, null, "'s screen"))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(ue, {
        className: "lk-participant-metadata-item"
    }))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(st, {
        trackRef: l
    }))));
});
function ma(t) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(t, {
        className: "lk-focus-layout"
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ...n
    }, t.children);
}
function fa({ trackRef: t, ...n }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(Zt, {
        trackRef: t,
        ...n
    });
}
function fe({ tracks: t, ...n }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, t.map((a)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ag"].Provider, {
            value: a,
            key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"])(a)
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(n.children))));
}
function Ht({ totalPageCount: t, nextPage: n, prevPage: a, currentPage: r, pagesContainer: c }) {
    const [o, s] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(!1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Ht.useEffect": ()=>{
            let l;
            return c && (l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ai"])(c.current, 2e3).subscribe(s)), ({
                "Ht.useEffect": ()=>{
                    l && l.unsubscribe();
                }
            })["Ht.useEffect"];
        }
    }["Ht.useEffect"], [
        c
    ]), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: "lk-pagination-control",
        "data-lk-user-interaction": o
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
        className: "lk-button",
        onClick: a
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(D, null)), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        className: "lk-pagination-count"
    }, `${r} of ${t}`), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
        className: "lk-button",
        onClick: n
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(D, null)));
}
const Bt = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ totalPageCount: n, currentPage: a }, r) {
    const c = new Array(n).fill("").map((o, s)=>s + 1 === a ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
            "data-lk-active": !0,
            key: s
        }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
            key: s
        }));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: r,
        className: "lk-pagination-indicator"
    }, c);
});
function ha({ tracks: t, ...n }) {
    const a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createRef(), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ha.useMemo[r]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(n, {
                className: "lk-grid-layout"
            })
    }["ha.useMemo[r]"], [
        n
    ]), { layout: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])(a, t.length), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(c.maxTiles, t);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"])(a, {
        onLeftSwipe: o.nextPage,
        onRightSwipe: o.prevPage
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: a,
        "data-lk-pagination": o.totalPageCount > 1,
        ...r
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(fe, {
        tracks: o.tracks
    }, n.children), t.length > c.maxTiles && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(Bt, {
        totalPageCount: o.totalPageCount,
        currentPage: o.currentPage
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(Ht, {
        pagesContainer: a,
        ...o
    })));
}
const jt = 130, Ot = 140, Y = 1, he = 16 / 10, _t = (1 - he) * -1;
function ga({ tracks: t, orientation: n, ...a }) {
    const r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), [c, o] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(0), { width: s, height: l } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(r), i = n || (l >= s ? "vertical" : "horizontal"), u = i === "vertical" ? Math.max(s * _t, jt) : Math.max(l * he, Ot), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aj"])(), f = Math.max(i === "vertical" ? (l - d) / u : (s - d) / u, Y);
    let m = Math.round(f);
    Math.abs(f - c) < 0.5 ? m = Math.round(c) : c !== f && o(f);
    const E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(t, m);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect({
        "ga.useLayoutEffect": ()=>{
            r.current && (r.current.dataset.lkOrientation = i, r.current.style.setProperty("--lk-max-visible-tiles", m.toString()));
        }
    }["ga.useLayoutEffect"], [
        m,
        i
    ]), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("aside", {
        key: i,
        className: "lk-carousel",
        ref: r,
        ...a
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(fe, {
        tracks: E
    }, a.children));
}
function va({ value: t, onPinChange: n, onWidgetChange: a, children: r }) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ak"])(t);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "va.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].debug("PinState Updated", {
                state: c.pin.state
            }), n && c.pin.state && n(c.pin.state);
        }
    }["va.useEffect"], [
        c.pin.state,
        n
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "va.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"].debug("Widget Updated", {
                widgetState: c.widget.state
            }), a && c.widget.state && a(c.widget.state);
        }
    }["va.useEffect"], [
        a,
        c.widget.state
    ]), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aa"].Provider, {
        value: c
    }, r);
}
const Ea = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ trackRef: n, ...a }, r) {
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(n), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(d, {
        bands: 7,
        loPass: 300
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", {
        ref: r,
        width: "100%",
        height: "100%",
        viewBox: "0 0 200 90",
        ...a,
        className: "lk-audio-visualizer"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("g", {
        style: {
            transform: `translate(${(200 - 7 * 10) / 2}px, 0)`
        }
    }, f.map((m, E)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("rect", {
            key: E,
            x: E * 10,
            y: 90 / 2 - m * 50 / 2,
            width: 6,
            height: m * 50
        }))));
});
function pa({ participants: t, ...n }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, t.map((a)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["af"].Provider, {
            value: a,
            key: a.identity
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(n.children))));
}
function wa({ volume: t, muted: n }) {
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShareAudio,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Unknown
    ], {
        updateOnlyOn: [],
        onlySubscribed: !0
    }).filter((r)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ac"])(r.participant) && r.publication.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        style: {
            display: "none"
        }
    }, a.map((r)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(W, {
            key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"])(r),
            trackRef: r,
            volume: t,
            muted: n
        })));
}
const ka = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ childrenPosition: n = "before", children: a, ...r }, c) {
    const { name: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"])();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        ref: c,
        ...r
    }, n === "before" && a, o, n === "after" && a);
});
function $t(t) {
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "$t.useMemo[n]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(t, {
                className: "lk-toast"
            })
    }["$t.useMemo[n]"], [
        t
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ...n
    }, t.children);
}
const Wt = (t)=>{
    const n = [];
    for(let a = 0; a < t; a++)n.push([
        a,
        t - 1 - a
    ]);
    return n;
}, J = (t)=>[
        [
            Math.floor(t / 2)
        ],
        [
            -1
        ]
    ], qt = (t, n, a)=>{
    const [r, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [o, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        []
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (t === "thinking") s(J(n));
        else if (t === "connecting" || t === "initializing") {
            const i = [
                ...Wt(n)
            ];
            s(i);
        } else s(t === "listening" ? J(n) : t === void 0 ? [
            new Array(n).fill(0).map((i, u)=>u)
        ] : [
            []
        ]);
        c(0);
    }, [
        t,
        n
    ]);
    const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let i = performance.now();
        const u = (d)=>{
            d - i >= a && (c((m)=>m + 1), i = d), l.current = requestAnimationFrame(u);
        };
        return l.current = requestAnimationFrame(u), ()=>{
            l.current !== null && cancelAnimationFrame(l.current);
        };
    }, [
        a,
        n,
        t,
        o.length
    ]), o[r % o.length];
}, Dt = /* @__PURE__ */ new Map([
    [
        "connecting",
        2e3
    ],
    [
        "initializing",
        2e3
    ],
    [
        "listening",
        500
    ],
    [
        "thinking",
        150
    ]
]), Gt = (t, n)=>{
    if (t === void 0) return 1e3;
    let a = Dt.get(t);
    if (a) switch(t){
        case "connecting":
            a /= n;
            break;
    }
    return a;
}, Qt = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ state: n, options: a, barCount: r = 15, trackRef: c, children: o, ...s }, l) {
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(s, {
        className: "lk-audio-bar-visualizer"
    });
    let u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a9"])();
    c && (u = c);
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(u, {
        bands: r,
        loPass: 100,
        hiPass: 200
    }), f = (a == null ? void 0 : a.minHeight) ?? 20, m = (a == null ? void 0 : a.maxHeight) ?? 100, E = qt(n, r, Gt(n, r) ?? 100);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: l,
        ...i,
        "data-lk-va-state": n
    }, d.map((p, h)=>o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(o, {
            "data-lk-highlighted": E.includes(h),
            "data-lk-bar-index": h,
            className: "lk-audio-bar",
            style: {
                height: `${Math.min(m, Math.max(f, p * 100 + 5))}%`
            }
        }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
            key: h,
            "data-lk-highlighted": E.includes(h),
            "data-lk-bar-index": h,
            className: `lk-audio-bar ${E.includes(h) && "lk-highlighted"}`,
            style: {
                // TODO transform animations would be more performant, however the border-radius gets distorted when using scale transforms. a 9-slice approach (or 3 in this case) could work
                // transform: `scale(1, ${Math.min(maxHeight, Math.max(minHeight, volume))}`,
                height: `${Math.min(m, Math.max(f, p * 100 + 5))}%`
            }
        })));
}), Ma = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ children: n, disableSpeakingIndicator: a, onParticipantClick: r, trackRef: c, ...o }, s) {
    const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(c), { elementProps: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])({
        trackRef: l,
        htmlProps: o,
        disableSpeakingIndicator: a,
        onParticipantClick: r
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: s,
        style: {
            position: "relative",
            minHeight: "160px"
        },
        ...i
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ag"].Provider, {
        value: l
    }, n ?? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a1"])(l) && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(W, {
        trackRef: l
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(Qt, {
        barCount: 7,
        options: {
            minHeight: 8
        }
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: "lk-participant-metadata"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: "lk-participant-metadata-item"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(de, {
        trackRef: l
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(B, null)), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(ue, {
        className: "lk-participant-metadata-item"
    })))));
});
function Ra(t) {
    const [n, a] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(void 0), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(t.room);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Ra.useEffect": ()=>{
            switch(r){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Reconnecting:
                    a(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(G, {
                        className: "lk-spinner"
                    }), " Reconnecting"));
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Connecting:
                    a(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(G, {
                        className: "lk-spinner"
                    }), " Connecting"));
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$livekit$2d$client$40$2$2e$7$2e$5$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Disconnected:
                    a(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, "Disconnected"));
                    break;
                default:
                    a(void 0);
                    break;
            }
        }
    }["Ra.useEffect"], [
        r
    ]), n ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement($t, {
        className: "lk-toast-connection-state"
    }, n) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null);
}
const ya = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function({ entry: n, hideName: a = !1, hideTimestamp: r = !1, messageFormatter: c, ...o }, s) {
    var f, m, E;
    const l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ya.useMemo[l]": ()=>c ? c(n.message) : n.message
    }["ya.useMemo[l]"], [
        n.message,
        c
    ]), i = !!n.editTimestamp, u = new Date(n.timestamp), d = navigator ? navigator.language : "en-US";
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("li", {
        ref: s,
        className: "lk-chat-entry",
        title: u.toLocaleTimeString(d, {
            timeStyle: "full"
        }),
        "data-lk-message-origin": (f = n.from) != null && f.isLocal ? "local" : "remote",
        ...o
    }, (!r || !a || i) && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        className: "lk-meta-data"
    }, !a && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("strong", {
        className: "lk-participant-name"
    }, ((m = n.from) == null ? void 0 : m.name) ?? ((E = n.from) == null ? void 0 : E.identity)), (!r || i) && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        className: "lk-timestamp"
    }, i && "edited ", u.toLocaleTimeString(d, {
        timeStyle: "short"
    }))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        className: "lk-message-body"
    }, l));
});
function ba(t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["al"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["am"])()).map((n, a)=>{
        if (typeof n == "string") return n;
        {
            const r = n.content.toString(), c = n.type === "url" ? /^http(s?):\/\//.test(r) ? r : `https://${r}` : `mailto:${r}`;
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("a", {
                className: "lk-chat-link",
                key: a,
                href: c,
                target: "_blank",
                rel: "noreferrer"
            }, r);
        }
    });
}
;
 //# sourceMappingURL=components-CG43NVTo.mjs.map
}}),
"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/components-CG43NVTo.mjs [app-client] (ecmascript) <export T as TrackToggle>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TrackToggle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CG43NVTo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CG43NVTo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/components-CG43NVTo.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/hooks-aMI94FOv.mjs [app-client] (ecmascript) <export a as useConnectionState>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useConnectionState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/hooks-aMI94FOv.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/contexts-568EHGLp.mjs [app-client] (ecmascript) <export w as useMaybeRoomContext>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useMaybeRoomContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$568EHGLp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/contexts-568EHGLp.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/hooks-aMI94FOv.mjs [app-client] (ecmascript) <export t as useTracks>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTracks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$aMI94FOv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/hooks-aMI94FOv.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/room-DfA7knPM.mjs [app-client] (ecmascript) <export L as LiveKitRoom>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LiveKitRoom": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$DfA7knPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/room-DfA7knPM.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/components-CG43NVTo.mjs [app-client] (ecmascript) <export R as RoomAudioRenderer>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RoomAudioRenderer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CG43NVTo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["R"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$livekit$2b$components$2d$react$40$2$2e$6$2e$10_$40$livekit$2b$krisp$2d$noise$2d$filter$40$0$2e$2$2e$13_livekit$2d$client$40$2$2e$7$2e$5_$5f$liv_kqcea42va3unrgtwveu7ljo6dq$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CG43NVTo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@livekit+components-react@2.6.10_@livekit+krisp-noise-filter@0.2.13_livekit-client@2.7.5__liv_kqcea42va3unrgtwveu7ljo6dq/node_modules/@livekit/components-react/dist/components-CG43NVTo.mjs [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=74d6a_%40livekit_components-react_dist_30d063._.js.map