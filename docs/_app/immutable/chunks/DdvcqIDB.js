var In = Array.isArray,
  Gt = Array.prototype.indexOf,
  Pn = Array.from,
  bn = Object.defineProperty,
  ct = Object.getOwnPropertyDescriptor,
  Kt = Object.getOwnPropertyDescriptors,
  Cn = Object.prototype,
  Fn = Array.prototype,
  Zt = Object.getPrototypeOf
const Ln = () => {}
function Mn(t) {
  return t()
}
function Et(t) {
  for (var n = 0; n < t.length; n++) t[n]()
}
const g = 2,
  yt = 4,
  Q = 8,
  ot = 16,
  R = 32,
  b = 64,
  V = 128,
  E = 256,
  G = 512,
  d = 1024,
  D = 2048,
  C = 4096,
  P = 8192,
  X = 16384,
  $t = 32768,
  gt = 65536,
  qn = 1 << 17,
  Wt = 1 << 19,
  mt = 1 << 20,
  vt = Symbol('$state'),
  Yn = Symbol('legacy props'),
  jn = Symbol('')
function Tt(t) {
  return t === this.v
}
function zt(t, n) {
  return t != t ? n == n : t !== n || (t !== null && typeof t == 'object') || typeof t == 'function'
}
function At(t) {
  return !zt(t, this.v)
}
function Jt(t) {
  throw new Error('https://svelte.dev/e/effect_in_teardown')
}
function Qt() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived')
}
function Xt(t) {
  throw new Error('https://svelte.dev/e/effect_orphan')
}
function tn() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded')
}
function Bn() {
  throw new Error('https://svelte.dev/e/hydration_failed')
}
function Hn(t) {
  throw new Error('https://svelte.dev/e/props_invalid_value')
}
function Un() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed')
}
function Vn() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed')
}
function nn() {
  throw new Error('https://svelte.dev/e/state_unsafe_local_read')
}
function rn() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation')
}
let tt = !1
function Gn() {
  tt = !0
}
const Kn = 1,
  Zn = 2,
  $n = 4,
  Wn = 8,
  zn = 16,
  Jn = 1,
  Qn = 2,
  en = '[',
  ln = '[!',
  an = ']',
  xt = {},
  Xn = Symbol(),
  tr = 'http://www.w3.org/1999/xhtml'
function Rt(t) {
  console.warn('https://svelte.dev/e/hydration_mismatch')
}
let i = null
function pt(t) {
  i = t
}
function nr(t, n = !1, r) {
  var e = (i = { p: i, c: null, d: !1, e: null, m: !1, s: t, x: null, l: null })
  tt && !n && (i.l = { s: null, u: null, r1: [], r2: ft(!1) }),
    vn(() => {
      e.d = !0
    })
}
function rr(t) {
  const n = i
  if (n !== null) {
    const s = n.e
    if (s !== null) {
      var r = o,
        e = u
      n.e = null
      try {
        for (var a = 0; a < s.length; a++) {
          var l = s[a]
          W(l.effect), $(l.reaction), bt(l.fn)
        }
      } finally {
        W(r), $(e)
      }
    }
    ;(i = n.p), (n.m = !0)
  }
  return {}
}
function nt() {
  return !tt || (i !== null && i.l === null)
}
const M = new Map()
function ft(t, n) {
  var r = { f: 0, v: t, reactions: null, equals: Tt, rv: 0, wv: 0 }
  return r
}
function er(t) {
  return sn(ft(t))
}
function lr(t, n = !1) {
  var e
  const r = ft(t)
  return n || (r.equals = At), tt && i !== null && i.l !== null && ((e = i.l).s ?? (e.s = [])).push(r), r
}
function sn(t) {
  return u !== null && !y && (u.f & g) !== 0 && (A === null ? gn([t]) : A.push(t)), t
}
function ar(t, n) {
  return u !== null && !y && nt() && (u.f & (g | ot)) !== 0 && (A === null || !A.includes(t)) && rn(), un(t, n)
}
function un(t, n) {
  if (!t.equals(n)) {
    var r = t.v
    j ? M.set(t, n) : M.set(t, r),
      (t.v = n),
      (t.wv = Bt()),
      kt(t, D),
      nt() && o !== null && (o.f & d) !== 0 && (o.f & (R | b)) === 0 && (w === null ? mn([t]) : w.push(t))
  }
  return n
}
function kt(t, n) {
  var r = t.reactions
  if (r !== null)
    for (var e = nt(), a = r.length, l = 0; l < a; l++) {
      var s = r[l],
        f = s.f
      ;(f & D) === 0 && ((!e && s === o) || (x(s, n), (f & (d | E)) !== 0 && ((f & g) !== 0 ? kt(s, C) : et(s))))
    }
}
let O = !1
function sr(t) {
  O = t
}
let m
function q(t) {
  if (t === null) throw (Rt(), xt)
  return (m = t)
}
function ur() {
  return q(I(m))
}
function or(t) {
  if (O) {
    if (I(m) !== null) throw (Rt(), xt)
    m = t
  }
}
function fr(t = 1) {
  if (O) {
    for (var n = t, r = m; n--; ) r = I(r)
    m = r
  }
}
function ir() {
  for (var t = 0, n = m; ; ) {
    if (n.nodeType === 8) {
      var r = n.data
      if (r === an) {
        if (t === 0) return n
        t -= 1
      } else (r === en || r === ln) && (t += 1)
    }
    var e = I(n)
    n.remove(), (n = e)
  }
}
var ht, on, Dt, St
function _r() {
  if (ht === void 0) {
    ;(ht = window), (on = /Firefox/.test(navigator.userAgent))
    var t = Element.prototype,
      n = Node.prototype
    ;(Dt = ct(n, 'firstChild').get),
      (St = ct(n, 'nextSibling').get),
      (t.__click = void 0),
      (t.__className = void 0),
      (t.__attributes = null),
      (t.__style = void 0),
      (t.__e = void 0),
      (Text.prototype.__t = void 0)
  }
}
function lt(t = '') {
  return document.createTextNode(t)
}
function at(t) {
  return Dt.call(t)
}
function I(t) {
  return St.call(t)
}
function cr(t, n) {
  if (!O) return at(t)
  var r = at(m)
  if (r === null) r = m.appendChild(lt())
  else if (n && r.nodeType !== 3) {
    var e = lt()
    return r == null || r.before(e), q(e), e
  }
  return q(r), r
}
function vr(t, n) {
  if (!O) {
    var r = at(t)
    return r instanceof Comment && r.data === '' ? I(r) : r
  }
  return m
}
function pr(t, n = 1, r = !1) {
  let e = O ? m : t
  for (var a; n--; ) (a = e), (e = I(e))
  if (!O) return e
  var l = e == null ? void 0 : e.nodeType
  if (r && l !== 3) {
    var s = lt()
    return e === null ? a == null || a.after(s) : e.before(s), q(s), s
  }
  return q(e), e
}
function hr(t) {
  t.textContent = ''
}
function Ot(t) {
  var n = g | D,
    r = u !== null && (u.f & g) !== 0 ? u : null
  return (
    o === null || (r !== null && (r.f & E) !== 0) ? (n |= E) : (o.f |= mt),
    {
      ctx: i,
      deps: null,
      effects: null,
      equals: Tt,
      f: n,
      fn: t,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: r ?? o
    }
  )
}
function dr(t) {
  const n = Ot(t)
  return (n.equals = At), n
}
function Nt(t) {
  var n = t.effects
  if (n !== null) {
    t.effects = null
    for (var r = 0; r < n.length; r += 1) N(n[r])
  }
}
function fn(t) {
  for (var n = t.parent; n !== null; ) {
    if ((n.f & g) === 0) return n
    n = n.parent
  }
  return null
}
function _n(t) {
  var n,
    r = o
  W(fn(t))
  try {
    Nt(t), (n = Ut(t))
  } finally {
    W(r)
  }
  return n
}
function It(t) {
  var n = _n(t),
    r = (k || (t.f & E) !== 0) && t.deps !== null ? C : d
  x(t, r), t.equals(n) || ((t.v = n), (t.wv = Bt()))
}
function Pt(t) {
  o === null && u === null && Xt(), u !== null && (u.f & E) !== 0 && o === null && Qt(), j && Jt()
}
function cn(t, n) {
  var r = n.last
  r === null ? (n.last = n.first = t) : ((r.next = t), (t.prev = r), (n.last = t))
}
function F(t, n, r, e = !0) {
  var a = o,
    l = {
      ctx: i,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: t | D,
      first: null,
      fn: n,
      last: null,
      next: null,
      parent: a,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0
    }
  if (r)
    try {
      it(l), (l.f |= $t)
    } catch (_) {
      throw (N(l), _)
    }
  else n !== null && et(l)
  var s =
    r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (mt | V)) === 0
  if (!s && e && (a !== null && cn(l, a), u !== null && (u.f & g) !== 0)) {
    var f = u
    ;(f.effects ?? (f.effects = [])).push(l)
  }
  return l
}
function vn(t) {
  const n = F(Q, null, !1)
  return x(n, d), (n.teardown = t), n
}
function wr(t) {
  Pt()
  var n = o !== null && (o.f & R) !== 0 && i !== null && !i.m
  if (n) {
    var r = i
    ;(r.e ?? (r.e = [])).push({ fn: t, effect: o, reaction: u })
  } else {
    var e = bt(t)
    return e
  }
}
function Er(t) {
  return Pt(), pn(t)
}
function yr(t) {
  const n = F(b, t, !0)
  return (r = {}) =>
    new Promise((e) => {
      r.outro
        ? wn(n, () => {
            N(n), e(void 0)
          })
        : (N(n), e(void 0))
    })
}
function bt(t) {
  return F(yt, t, !1)
}
function pn(t) {
  return F(Q, t, !0)
}
function gr(t, n = [], r = Ot) {
  const e = n.map(r)
  return hn(() => t(...e.map(On)))
}
function hn(t, n = 0) {
  return F(Q | ot | n, t, !0)
}
function mr(t, n = !0) {
  return F(Q | R, t, !0, n)
}
function Ct(t) {
  var n = t.teardown
  if (n !== null) {
    const r = j,
      e = u
    wt(!0), $(null)
    try {
      n.call(null)
    } finally {
      wt(r), $(e)
    }
  }
}
function Ft(t, n = !1) {
  var r = t.first
  for (t.first = t.last = null; r !== null; ) {
    var e = r.next
    ;(r.f & b) !== 0 ? (r.parent = null) : N(r, n), (r = e)
  }
}
function dn(t) {
  for (var n = t.first; n !== null; ) {
    var r = n.next
    ;(n.f & R) === 0 && N(n), (n = r)
  }
}
function N(t, n = !0) {
  var r = !1
  if ((n || (t.f & Wt) !== 0) && t.nodes_start !== null) {
    for (var e = t.nodes_start, a = t.nodes_end; e !== null; ) {
      var l = e === a ? null : I(e)
      e.remove(), (e = l)
    }
    r = !0
  }
  Ft(t, n && !r), J(t, 0), x(t, X)
  var s = t.transitions
  if (s !== null) for (const _ of s) _.stop()
  Ct(t)
  var f = t.parent
  f !== null && f.first !== null && Lt(t),
    (t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null)
}
function Lt(t) {
  var n = t.parent,
    r = t.prev,
    e = t.next
  r !== null && (r.next = e),
    e !== null && (e.prev = r),
    n !== null && (n.first === t && (n.first = e), n.last === t && (n.last = r))
}
function wn(t, n) {
  var r = []
  Mt(t, r, !0),
    En(r, () => {
      N(t), n && n()
    })
}
function En(t, n) {
  var r = t.length
  if (r > 0) {
    var e = () => --r || n()
    for (var a of t) a.out(e)
  } else n()
}
function Mt(t, n, r) {
  if ((t.f & P) === 0) {
    if (((t.f ^= P), t.transitions !== null)) for (const s of t.transitions) (s.is_global || r) && n.push(s)
    for (var e = t.first; e !== null; ) {
      var a = e.next,
        l = (e.f & gt) !== 0 || (e.f & R) !== 0
      Mt(e, n, l ? r : !1), (e = a)
    }
  }
}
function Tr(t) {
  qt(t, !0)
}
function qt(t, n) {
  if ((t.f & P) !== 0) {
    ;(t.f ^= P), (t.f & d) === 0 && (t.f ^= d), B(t) && (x(t, D), et(t))
    for (var r = t.first; r !== null; ) {
      var e = r.next,
        a = (r.f & gt) !== 0 || (r.f & R) !== 0
      qt(r, a ? n : !1), (r = e)
    }
    if (t.transitions !== null) for (const l of t.transitions) (l.is_global || n) && l.in()
  }
}
let Y = [],
  st = []
function Yt() {
  var t = Y
  ;(Y = []), Et(t)
}
function yn() {
  var t = st
  ;(st = []), Et(t)
}
function Ar(t) {
  Y.length === 0 && queueMicrotask(Yt), Y.push(t)
}
function dt() {
  Y.length > 0 && Yt(), st.length > 0 && yn()
}
let U = !1,
  K = !1,
  Z = null,
  S = !1,
  j = !1
function wt(t) {
  j = t
}
let L = []
let u = null,
  y = !1
function $(t) {
  u = t
}
let o = null
function W(t) {
  o = t
}
let A = null
function gn(t) {
  A = t
}
let c = null,
  h = 0,
  w = null
function mn(t) {
  w = t
}
let jt = 1,
  z = 0,
  k = !1
function Bt() {
  return ++jt
}
function B(t) {
  var v
  var n = t.f
  if ((n & D) !== 0) return !0
  if ((n & C) !== 0) {
    var r = t.deps,
      e = (n & E) !== 0
    if (r !== null) {
      var a,
        l,
        s = (n & G) !== 0,
        f = e && o !== null && !k,
        _ = r.length
      if (s || f) {
        var T = t,
          H = T.parent
        for (a = 0; a < _; a++)
          (l = r[a]),
            (s || !((v = l == null ? void 0 : l.reactions) != null && v.includes(T))) &&
              (l.reactions ?? (l.reactions = [])).push(T)
        s && (T.f ^= G), f && H !== null && (H.f & E) === 0 && (T.f ^= E)
      }
      for (a = 0; a < _; a++) if (((l = r[a]), B(l) && It(l), l.wv > t.wv)) return !0
    }
    ;(!e || (o !== null && !k)) && x(t, d)
  }
  return !1
}
function Tn(t, n) {
  for (var r = n; r !== null; ) {
    if ((r.f & V) !== 0)
      try {
        r.fn(t)
        return
      } catch {
        r.f ^= V
      }
    r = r.parent
  }
  throw ((U = !1), t)
}
function An(t) {
  return (t.f & X) === 0 && (t.parent === null || (t.parent.f & V) === 0)
}
function rt(t, n, r, e) {
  if (U) {
    if ((r === null && (U = !1), An(n))) throw t
    return
  }
  r !== null && (U = !0)
  {
    Tn(t, n)
    return
  }
}
function Ht(t, n, r = !0) {
  var e = t.reactions
  if (e !== null)
    for (var a = 0; a < e.length; a++) {
      var l = e[a]
      ;(l.f & g) !== 0 ? Ht(l, n, !1) : n === l && (r ? x(l, D) : (l.f & d) !== 0 && x(l, C), et(l))
    }
}
function Ut(t) {
  var _t
  var n = c,
    r = h,
    e = w,
    a = u,
    l = k,
    s = A,
    f = i,
    _ = y,
    T = t.f
  ;(c = null),
    (h = 0),
    (w = null),
    (k = (T & E) !== 0 && (y || !S || u === null)),
    (u = (T & (R | b)) === 0 ? t : null),
    (A = null),
    pt(t.ctx),
    (y = !1),
    z++
  try {
    var H = (0, t.fn)(),
      v = t.deps
    if (c !== null) {
      var p
      if ((J(t, h), v !== null && h > 0)) for (v.length = h + c.length, p = 0; p < c.length; p++) v[h + p] = c[p]
      else t.deps = v = c
      if (!k) for (p = h; p < v.length; p++) ((_t = v[p]).reactions ?? (_t.reactions = [])).push(t)
    } else v !== null && h < v.length && (J(t, h), (v.length = h))
    if (nt() && w !== null && !y && v !== null && (t.f & (g | C | D)) === 0) for (p = 0; p < w.length; p++) Ht(w[p], t)
    return a !== null && (z++, w !== null && (e === null ? (e = w) : e.push(...w))), H
  } finally {
    ;(c = n), (h = r), (w = e), (u = a), (k = l), (A = s), pt(f), (y = _)
  }
}
function xn(t, n) {
  let r = n.reactions
  if (r !== null) {
    var e = Gt.call(r, t)
    if (e !== -1) {
      var a = r.length - 1
      a === 0 ? (r = n.reactions = null) : ((r[e] = r[a]), r.pop())
    }
  }
  r === null &&
    (n.f & g) !== 0 &&
    (c === null || !c.includes(n)) &&
    (x(n, C), (n.f & (E | G)) === 0 && (n.f ^= G), Nt(n), J(n, 0))
}
function J(t, n) {
  var r = t.deps
  if (r !== null) for (var e = n; e < r.length; e++) xn(t, r[e])
}
function it(t) {
  var n = t.f
  if ((n & X) === 0) {
    x(t, d)
    var r = o,
      e = i,
      a = S
    ;(o = t), (S = !0)
    try {
      ;(n & ot) !== 0 ? dn(t) : Ft(t), Ct(t)
      var l = Ut(t)
      ;(t.teardown = typeof l == 'function' ? l : null), (t.wv = jt)
      var s = t.deps,
        f
    } catch (_) {
      rt(_, t, r, e || t.ctx)
    } finally {
      ;(S = a), (o = r)
    }
  }
}
function Rn() {
  try {
    tn()
  } catch (t) {
    if (Z !== null) rt(t, Z, null)
    else throw t
  }
}
function Vt() {
  var t = S
  try {
    var n = 0
    for (S = !0; L.length > 0; ) {
      n++ > 1e3 && Rn()
      var r = L,
        e = r.length
      L = []
      for (var a = 0; a < e; a++) {
        var l = Dn(r[a])
        kn(l)
      }
    }
  } finally {
    ;(K = !1), (S = t), (Z = null), M.clear()
  }
}
function kn(t) {
  var n = t.length
  if (n !== 0)
    for (var r = 0; r < n; r++) {
      var e = t[r]
      if ((e.f & (X | P)) === 0)
        try {
          B(e) &&
            (it(e),
            e.deps === null &&
              e.first === null &&
              e.nodes_start === null &&
              (e.teardown === null ? Lt(e) : (e.fn = null)))
        } catch (a) {
          rt(a, e, null, e.ctx)
        }
    }
}
function et(t) {
  K || ((K = !0), queueMicrotask(Vt))
  for (var n = (Z = t); n.parent !== null; ) {
    n = n.parent
    var r = n.f
    if ((r & (b | R)) !== 0) {
      if ((r & d) === 0) return
      n.f ^= d
    }
  }
  L.push(n)
}
function Dn(t) {
  for (var n = [], r = t; r !== null; ) {
    var e = r.f,
      a = (e & (R | b)) !== 0,
      l = a && (e & d) !== 0
    if (!l && (e & P) === 0) {
      if ((e & yt) !== 0) n.push(r)
      else if (a) r.f ^= d
      else {
        var s = u
        try {
          ;(u = r), B(r) && it(r)
        } catch (T) {
          rt(T, r, null, r.ctx)
        } finally {
          u = s
        }
      }
      var f = r.first
      if (f !== null) {
        r = f
        continue
      }
    }
    var _ = r.parent
    for (r = r.next; r === null && _ !== null; ) (r = _.next), (_ = _.parent)
  }
  return n
}
function Sn(t) {
  var n
  for (dt(); L.length > 0; ) (K = !0), Vt(), dt()
  return n
}
async function xr() {
  await Promise.resolve(), Sn()
}
function On(t) {
  var n = t.f,
    r = (n & g) !== 0
  if (u !== null && !y) {
    A !== null && A.includes(t) && nn()
    var e = u.deps
    t.rv < z &&
      ((t.rv = z),
      c === null && e !== null && e[h] === t ? h++ : c === null ? (c = [t]) : (!k || !c.includes(t)) && c.push(t))
  } else if (r && t.deps === null && t.effects === null) {
    var a = t,
      l = a.parent
    l !== null && (l.f & E) === 0 && (a.f ^= E)
  }
  return r && ((a = t), B(a) && It(a)), j && M.has(t) ? M.get(t) : t.v
}
function Rr(t) {
  var n = y
  try {
    return (y = !0), t()
  } finally {
    y = n
  }
}
const Nn = -7169
function x(t, n) {
  t.f = (t.f & Nn) | n
}
function kr(t) {
  if (!(typeof t != 'object' || !t || t instanceof EventTarget)) {
    if (vt in t) ut(t)
    else if (!Array.isArray(t))
      for (let n in t) {
        const r = t[n]
        typeof r == 'object' && r && vt in r && ut(r)
      }
  }
}
function ut(t, n = new Set()) {
  if (typeof t == 'object' && t !== null && !(t instanceof EventTarget) && !n.has(t)) {
    n.add(t), t instanceof Date && t.getTime()
    for (let e in t)
      try {
        ut(t[e], n)
      } catch {}
    const r = Zt(t)
    if (
      r !== Object.prototype &&
      r !== Array.prototype &&
      r !== Map.prototype &&
      r !== Set.prototype &&
      r !== Date.prototype
    ) {
      const e = Kt(r)
      for (let a in e) {
        const l = e[a].get
        if (l)
          try {
            l.call(t)
          } catch {}
      }
    }
  }
}
export {
  ft as $,
  an as A,
  Rt as B,
  Bn as C,
  hr as D,
  Pn as E,
  yr as F,
  lt as G,
  en as H,
  mr as I,
  nr as J,
  rr as K,
  jn as L,
  Er as M,
  tr as N,
  Et as O,
  On as P,
  Mn as Q,
  kr as R,
  Ot as S,
  gr as T,
  on as U,
  Jn as V,
  Qn as W,
  vr as X,
  vt as Y,
  Cn as Z,
  Fn as _,
  Kt as a,
  Vn as a0,
  Xn as a1,
  ar as a2,
  ct as a3,
  Un as a4,
  hn as a5,
  gt as a6,
  ln as a7,
  ir as a8,
  Tr as a9,
  wn as aa,
  bt as ab,
  pn as ac,
  Ar as ad,
  Hn as ae,
  qn as af,
  dr as ag,
  $n as ah,
  At as ai,
  lr as aj,
  Wn as ak,
  Yn as al,
  Zn as am,
  Kn as an,
  zn as ao,
  Sn as ap,
  er as aq,
  xr as ar,
  Ln as as,
  zt as at,
  Rr as b,
  i as c,
  cr as d,
  Gn as e,
  bn as f,
  Zt as g,
  O as h,
  $ as i,
  W as j,
  In as k,
  tt as l,
  u as m,
  fr as n,
  o,
  _r as p,
  at as q,
  or as r,
  pr as s,
  I as t,
  wr as u,
  xt as v,
  sr as w,
  q as x,
  ur as y,
  m as z
}
