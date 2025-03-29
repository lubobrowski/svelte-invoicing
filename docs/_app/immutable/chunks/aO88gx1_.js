import {
  a1 as P,
  a2 as O,
  a3 as R,
  a0 as V,
  a4 as C,
  P as k,
  a5 as T,
  a6 as M,
  H as Y,
  $,
  a7 as b,
  d as g,
  s as A,
  a as W,
  g as v,
  K as j,
  a8 as q,
  a9 as B,
  W as K,
  O as z,
  aa as F,
  ab as G,
  f as J,
  h as E,
  A as Q,
  k as U,
  C as X
} from './B2UK0Pz5.js'
import { b as Z } from './D3n58O8m.js'
const x = ['touchstart', 'touchmove']
function aa(a) {
  return x.includes(a)
}
const ra = new Set(),
  D = new Set()
function m(a) {
  var N
  var r = this,
    s = r.ownerDocument,
    c = a.type,
    o = ((N = a.composedPath) == null ? void 0 : N.call(a)) || [],
    e = o[0] || a.target,
    u = 0,
    _ = a.__root
  if (_) {
    var d = o.indexOf(_)
    if (d !== -1 && (r === document || r === window)) {
      a.__root = r
      return
    }
    var h = o.indexOf(r)
    if (h === -1) return
    d <= h && (u = d)
  }
  if (((e = o[u] || a.target), e !== r)) {
    P(a, 'currentTarget', {
      configurable: !0,
      get() {
        return e || s
      }
    })
    var w = C,
      i = k
    O(null), R(null)
    try {
      for (var t, n = []; e !== null; ) {
        var f = e.assignedSlot || e.parentNode || e.host || null
        try {
          var l = e['__' + c]
          if (l != null && (!e.disabled || a.target === e))
            if (V(l)) {
              var [I, ...L] = l
              I.apply(e, [a, ...L])
            } else l.call(e, a)
        } catch (y) {
          t ? n.push(y) : (t = y)
        }
        if (a.cancelBubble || f === r || f === null) break
        e = f
      }
      if (t) {
        for (let y of n)
          queueMicrotask(() => {
            throw y
          })
        throw t
      }
    } finally {
      ;(a.__root = r), delete a.currentTarget, O(w), R(i)
    }
  }
}
function na(a, r) {
  var s = r == null ? '' : typeof r == 'object' ? r + '' : r
  s !== (a.__t ?? (a.__t = a.nodeValue)) && ((a.__t = s), (a.nodeValue = s + ''))
}
function ea(a, r) {
  return H(a, r)
}
function ia(a, r) {
  T(), (r.intro = r.intro ?? !1)
  const s = r.target,
    c = E,
    o = v
  try {
    for (var e = M(s); e && (e.nodeType !== 8 || e.data !== Y); ) e = $(e)
    if (!e) throw b
    g(!0), A(e), W()
    const u = H(a, { ...r, anchor: e })
    if (v === null || v.nodeType !== 8 || v.data !== j) throw (q(), b)
    return g(!1), u
  } catch (u) {
    if (u === b) return r.recover === !1 && B(), T(), K(s), g(!1), ea(a, r)
    throw u
  } finally {
    g(c), A(o)
  }
}
const p = new Map()
function H(a, { target: r, anchor: s, props: c = {}, events: o, context: e, intro: u = !0 }) {
  T()
  var _ = new Set(),
    d = (i) => {
      for (var t = 0; t < i.length; t++) {
        var n = i[t]
        if (!_.has(n)) {
          _.add(n)
          var f = aa(n)
          r.addEventListener(n, m, { passive: f })
          var l = p.get(n)
          l === void 0 ? (document.addEventListener(n, m, { passive: f }), p.set(n, 1)) : p.set(n, l + 1)
        }
      }
    }
  d(z(ra)), D.add(d)
  var h = void 0,
    w = F(() => {
      var i = s ?? r.appendChild(G())
      return (
        J(() => {
          if (e) {
            Q({})
            var t = U
            t.c = e
          }
          o && (c.$$events = o), E && Z(i, null), (h = a(i, c) || {}), E && (k.nodes_end = v), e && X()
        }),
        () => {
          var f
          for (var t of _) {
            r.removeEventListener(t, m)
            var n = p.get(t)
            --n === 0 ? (document.removeEventListener(t, m), p.delete(t)) : p.set(t, n)
          }
          D.delete(d), i !== s && ((f = i.parentNode) == null || f.removeChild(i))
        }
      )
    })
  return S.set(h, w), h
}
let S = new WeakMap()
function oa(a, r) {
  const s = S.get(a)
  return s ? (S.delete(a), s(r)) : Promise.resolve()
}
export { ia as h, ea as m, na as s, oa as u }
