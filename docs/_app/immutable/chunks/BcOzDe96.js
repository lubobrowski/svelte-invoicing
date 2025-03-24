import {
  f as V,
  i as R,
  j as A,
  k as C,
  m as M,
  o as I,
  p as T,
  q as P,
  H as Y,
  t as j,
  v as E,
  w as g,
  x as D,
  y as q,
  z as v,
  A as B,
  B as $,
  C as z,
  D as F,
  E as G,
  F as J,
  G as K,
  I as W,
  J as Q,
  c as U,
  h as b,
  K as X
} from './DdvcqIDB.js'
import { b as Z } from './W-T0yYy1.js'
const x = ['touchstart', 'touchmove']
function rr(r) {
  return x.includes(r)
}
const er = new Set(),
  O = new Set()
function m(r) {
  var N
  var e = this,
    s = e.ownerDocument,
    c = r.type,
    o = ((N = r.composedPath) == null ? void 0 : N.call(r)) || [],
    t = o[0] || r.target,
    u = 0,
    _ = r.__root
  if (_) {
    var d = o.indexOf(_)
    if (d !== -1 && (e === document || e === window)) {
      r.__root = e
      return
    }
    var h = o.indexOf(e)
    if (h === -1) return
    d <= h && (u = d)
  }
  if (((t = o[u] || r.target), t !== e)) {
    V(r, 'currentTarget', {
      configurable: !0,
      get() {
        return t || s
      }
    })
    var w = M,
      i = I
    R(null), A(null)
    try {
      for (var a, n = []; t !== null; ) {
        var f = t.assignedSlot || t.parentNode || t.host || null
        try {
          var l = t['__' + c]
          if (l != null && (!t.disabled || r.target === t))
            if (C(l)) {
              var [H, ...L] = l
              H.apply(t, [r, ...L])
            } else l.call(t, r)
        } catch (y) {
          a ? n.push(y) : (a = y)
        }
        if (r.cancelBubble || f === e || f === null) break
        t = f
      }
      if (a) {
        for (let y of n)
          queueMicrotask(() => {
            throw y
          })
        throw a
      }
    } finally {
      ;(r.__root = e), delete r.currentTarget, R(w), A(i)
    }
  }
}
function nr(r, e) {
  var s = e == null ? '' : typeof e == 'object' ? e + '' : e
  s !== (r.__t ?? (r.__t = r.nodeValue)) && ((r.__t = s), (r.nodeValue = s + ''))
}
function tr(r, e) {
  return k(r, e)
}
function ir(r, e) {
  T(), (e.intro = e.intro ?? !1)
  const s = e.target,
    c = b,
    o = v
  try {
    for (var t = P(s); t && (t.nodeType !== 8 || t.data !== Y); ) t = j(t)
    if (!t) throw E
    g(!0), D(t), q()
    const u = k(r, { ...e, anchor: t })
    if (v === null || v.nodeType !== 8 || v.data !== B) throw ($(), E)
    return g(!1), u
  } catch (u) {
    if (u === E) return e.recover === !1 && z(), T(), F(s), g(!1), tr(r, e)
    throw u
  } finally {
    g(c), D(o)
  }
}
const p = new Map()
function k(r, { target: e, anchor: s, props: c = {}, events: o, context: t, intro: u = !0 }) {
  T()
  var _ = new Set(),
    d = (i) => {
      for (var a = 0; a < i.length; a++) {
        var n = i[a]
        if (!_.has(n)) {
          _.add(n)
          var f = rr(n)
          e.addEventListener(n, m, { passive: f })
          var l = p.get(n)
          l === void 0 ? (document.addEventListener(n, m, { passive: f }), p.set(n, 1)) : p.set(n, l + 1)
        }
      }
    }
  d(G(er)), O.add(d)
  var h = void 0,
    w = J(() => {
      var i = s ?? e.appendChild(K())
      return (
        W(() => {
          if (t) {
            Q({})
            var a = U
            a.c = t
          }
          o && (c.$$events = o), b && Z(i, null), (h = r(i, c) || {}), b && (I.nodes_end = v), t && X()
        }),
        () => {
          var f
          for (var a of _) {
            e.removeEventListener(a, m)
            var n = p.get(a)
            --n === 0 ? (document.removeEventListener(a, m), p.delete(a)) : p.set(a, n)
          }
          O.delete(d), i !== s && ((f = i.parentNode) == null || f.removeChild(i))
        }
      )
    })
  return S.set(h, w), h
}
let S = new WeakMap()
function or(r, e) {
  const s = S.get(r)
  return s ? (S.delete(r), s(e)) : Promise.resolve()
}
export { ir as h, tr as m, nr as s, or as u }
