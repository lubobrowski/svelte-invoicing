var Cn = Array.isArray,
  Kt = Array.prototype.indexOf,
  bn = Array.from,
  Pn = Object.defineProperty,
  ct = Object.getOwnPropertyDescriptor,
  Zt = Object.getOwnPropertyDescriptors,
  Fn = Object.prototype,
  Mn = Array.prototype,
  $t = Object.getPrototypeOf
const Ln = () => {}
function qn(t) {
  return t()
}
function wt(t) {
  for (var n = 0; n < t.length; n++) t[n]()
}
const g = 2,
  yt = 4,
  J = 8,
  ot = 16,
  R = 32,
  b = 64,
  V = 128,
  w = 256,
  G = 512,
  d = 1024,
  k = 2048,
  P = 4096,
  C = 8192,
  Q = 16384,
  zt = 32768,
  gt = 65536,
  Yn = 1 << 17,
  Wt = 1 << 19,
  Tt = 1 << 20,
  vt = Symbol('$state'),
  jn = Symbol('legacy props'),
  Bn = Symbol('')
function mt(t) {
  return t === this.v
}
function Xt(t, n) {
  return t != t ? n == n : t !== n || (t !== null && typeof t == 'object') || typeof t == 'function'
}
function At(t) {
  return !Xt(t, this.v)
}
function Jt(t) {
  throw new Error('https://svelte.dev/e/effect_in_teardown')
}
function Qt() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived')
}
function tn(t) {
  throw new Error('https://svelte.dev/e/effect_orphan')
}
function nn() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded')
}
function Hn() {
  throw new Error('https://svelte.dev/e/hydration_failed')
}
function Un(t) {
  throw new Error('https://svelte.dev/e/props_invalid_value')
}
function Vn() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed')
}
function Gn() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed')
}
function rn() {
  throw new Error('https://svelte.dev/e/state_unsafe_local_read')
}
function en() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation')
}
let tt = !1
function Kn() {
  tt = !0
}
const Zn = 1,
  $n = 2,
  zn = 16,
  Wn = 1,
  Xn = 2,
  Jn = 4,
  Qn = 8,
  tr = 16,
  nr = 1,
  rr = 2,
  ln = '[',
  an = '[!',
  sn = ']',
  xt = {},
  er = Symbol(),
  lr = 'http://www.w3.org/1999/xhtml'
function Rt(t) {
  console.warn('https://svelte.dev/e/hydration_mismatch')
}
let i = null
function pt(t) {
  i = t
}
function ar(t, n = !1, r) {
  var e = (i = { p: i, c: null, d: !1, e: null, m: !1, s: t, x: null, l: null })
  tt && !n && (i.l = { s: null, u: null, r1: [], r2: ft(!1) }),
    pn(() => {
      e.d = !0
    })
}
function sr(t) {
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
          z(l.effect), $(l.reaction), Pt(l.fn)
        }
      } finally {
        z(r), $(e)
      }
    }
    ;(i = n.p), (n.m = !0)
  }
  return {}
}
function nt() {
  return !tt || (i !== null && i.l === null)
}
const L = new Map()
function ft(t, n) {
  var r = { f: 0, v: t, reactions: null, equals: mt, rv: 0, wv: 0 }
  return r
}
function ur(t) {
  return Dt(ft(t))
}
function un(t, n = !1) {
  var e
  const r = ft(t)
  return n || (r.equals = At), tt && i !== null && i.l !== null && ((e = i.l).s ?? (e.s = [])).push(r), r
}
function or(t, n = !1) {
  return Dt(un(t, n))
}
function Dt(t) {
  return u !== null && !y && (u.f & g) !== 0 && (A === null ? Tn([t]) : A.push(t)), t
}
function fr(t, n) {
  return u !== null && !y && nt() && (u.f & (g | ot)) !== 0 && (A === null || !A.includes(t)) && en(), on(t, n)
}
function on(t, n) {
  if (!t.equals(n)) {
    var r = t.v
    j ? L.set(t, n) : L.set(t, r),
      (t.v = n),
      (t.wv = Ht()),
      kt(t, k),
      nt() && o !== null && (o.f & d) !== 0 && (o.f & (R | b)) === 0 && (E === null ? mn([t]) : E.push(t))
  }
  return n
}
function kt(t, n) {
  var r = t.reactions
  if (r !== null)
    for (var e = nt(), a = r.length, l = 0; l < a; l++) {
      var s = r[l],
        f = s.f
      ;(f & k) === 0 && ((!e && s === o) || (x(s, n), (f & (d | w)) !== 0 && ((f & g) !== 0 ? kt(s, P) : et(s))))
    }
}
let I = !1
function ir(t) {
  I = t
}
let T
function q(t) {
  if (t === null) throw (Rt(), xt)
  return (T = t)
}
function _r() {
  return q(N(T))
}
function cr(t) {
  if (I) {
    if (N(T) !== null) throw (Rt(), xt)
    T = t
  }
}
function vr(t = 1) {
  if (I) {
    for (var n = t, r = T; n--; ) r = N(r)
    T = r
  }
}
function pr() {
  for (var t = 0, n = T; ; ) {
    if (n.nodeType === 8) {
      var r = n.data
      if (r === sn) {
        if (t === 0) return n
        t -= 1
      } else (r === ln || r === an) && (t += 1)
    }
    var e = N(n)
    n.remove(), (n = e)
  }
}
var ht, fn, St, It
function hr() {
  if (ht === void 0) {
    ;(ht = window), (fn = /Firefox/.test(navigator.userAgent))
    var t = Element.prototype,
      n = Node.prototype
    ;(St = ct(n, 'firstChild').get),
      (It = ct(n, 'nextSibling').get),
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
  return St.call(t)
}
function N(t) {
  return It.call(t)
}
function dr(t, n) {
  if (!I) return at(t)
  var r = at(T)
  if (r === null) r = T.appendChild(lt())
  else if (n && r.nodeType !== 3) {
    var e = lt()
    return r == null || r.before(e), q(e), e
  }
  return q(r), r
}
function Er(t, n) {
  if (!I) {
    var r = at(t)
    return r instanceof Comment && r.data === '' ? N(r) : r
  }
  return T
}
function wr(t, n = 1, r = !1) {
  let e = I ? T : t
  for (var a; n--; ) (a = e), (e = N(e))
  if (!I) return e
  var l = e == null ? void 0 : e.nodeType
  if (r && l !== 3) {
    var s = lt()
    return e === null ? a == null || a.after(s) : e.before(s), q(s), s
  }
  return q(e), e
}
function yr(t) {
  t.textContent = ''
}
function Ot(t) {
  var n = g | k,
    r = u !== null && (u.f & g) !== 0 ? u : null
  return (
    o === null || (r !== null && (r.f & w) !== 0) ? (n |= w) : (o.f |= Tt),
    {
      ctx: i,
      deps: null,
      effects: null,
      equals: mt,
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
function gr(t) {
  const n = Ot(t)
  return (n.equals = At), n
}
function Nt(t) {
  var n = t.effects
  if (n !== null) {
    t.effects = null
    for (var r = 0; r < n.length; r += 1) O(n[r])
  }
}
function _n(t) {
  for (var n = t.parent; n !== null; ) {
    if ((n.f & g) === 0) return n
    n = n.parent
  }
  return null
}
function cn(t) {
  var n,
    r = o
  z(_n(t))
  try {
    Nt(t), (n = Vt(t))
  } finally {
    z(r)
  }
  return n
}
function Ct(t) {
  var n = cn(t),
    r = (D || (t.f & w) !== 0) && t.deps !== null ? P : d
  x(t, r), t.equals(n) || ((t.v = n), (t.wv = Ht()))
}
function bt(t) {
  o === null && u === null && tn(), u !== null && (u.f & w) !== 0 && o === null && Qt(), j && Jt()
}
function vn(t, n) {
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
      f: t | k,
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
      it(l), (l.f |= zt)
    } catch (_) {
      throw (O(l), _)
    }
  else n !== null && et(l)
  var s =
    r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (Tt | V)) === 0
  if (!s && e && (a !== null && vn(l, a), u !== null && (u.f & g) !== 0)) {
    var f = u
    ;(f.effects ?? (f.effects = [])).push(l)
  }
  return l
}
function pn(t) {
  const n = F(J, null, !1)
  return x(n, d), (n.teardown = t), n
}
function Tr(t) {
  bt()
  var n = o !== null && (o.f & R) !== 0 && i !== null && !i.m
  if (n) {
    var r = i
    ;(r.e ?? (r.e = [])).push({ fn: t, effect: o, reaction: u })
  } else {
    var e = Pt(t)
    return e
  }
}
function mr(t) {
  return bt(), hn(t)
}
function Ar(t) {
  const n = F(b, t, !0)
  return (r = {}) =>
    new Promise((e) => {
      r.outro
        ? wn(n, () => {
            O(n), e(void 0)
          })
        : (O(n), e(void 0))
    })
}
function Pt(t) {
  return F(yt, t, !1)
}
function hn(t) {
  return F(J, t, !0)
}
function xr(t, n = [], r = Ot) {
  const e = n.map(r)
  return dn(() => t(...e.map(On)))
}
function dn(t, n = 0) {
  return F(J | ot | n, t, !0)
}
function Rr(t, n = !0) {
  return F(J | R, t, !0, n)
}
function Ft(t) {
  var n = t.teardown
  if (n !== null) {
    const r = j,
      e = u
    Et(!0), $(null)
    try {
      n.call(null)
    } finally {
      Et(r), $(e)
    }
  }
}
function Mt(t, n = !1) {
  var r = t.first
  for (t.first = t.last = null; r !== null; ) {
    var e = r.next
    ;(r.f & b) !== 0 ? (r.parent = null) : O(r, n), (r = e)
  }
}
function En(t) {
  for (var n = t.first; n !== null; ) {
    var r = n.next
    ;(n.f & R) === 0 && O(n), (n = r)
  }
}
function O(t, n = !0) {
  var r = !1
  if ((n || (t.f & Wt) !== 0) && t.nodes_start !== null) {
    for (var e = t.nodes_start, a = t.nodes_end; e !== null; ) {
      var l = e === a ? null : N(e)
      e.remove(), (e = l)
    }
    r = !0
  }
  Mt(t, n && !r), X(t, 0), x(t, Q)
  var s = t.transitions
  if (s !== null) for (const _ of s) _.stop()
  Ft(t)
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
  qt(t, r, !0),
    yn(r, () => {
      O(t), n && n()
    })
}
function yn(t, n) {
  var r = t.length
  if (r > 0) {
    var e = () => --r || n()
    for (var a of t) a.out(e)
  } else n()
}
function qt(t, n, r) {
  if ((t.f & C) === 0) {
    if (((t.f ^= C), t.transitions !== null)) for (const s of t.transitions) (s.is_global || r) && n.push(s)
    for (var e = t.first; e !== null; ) {
      var a = e.next,
        l = (e.f & gt) !== 0 || (e.f & R) !== 0
      qt(e, n, l ? r : !1), (e = a)
    }
  }
}
function Dr(t) {
  Yt(t, !0)
}
function Yt(t, n) {
  if ((t.f & C) !== 0) {
    ;(t.f ^= C), (t.f & d) === 0 && (t.f ^= d), B(t) && (x(t, k), et(t))
    for (var r = t.first; r !== null; ) {
      var e = r.next,
        a = (r.f & gt) !== 0 || (r.f & R) !== 0
      Yt(r, a ? n : !1), (r = e)
    }
    if (t.transitions !== null) for (const l of t.transitions) (l.is_global || n) && l.in()
  }
}
let Y = [],
  st = []
function jt() {
  var t = Y
  ;(Y = []), wt(t)
}
function gn() {
  var t = st
  ;(st = []), wt(t)
}
function kr(t) {
  Y.length === 0 && queueMicrotask(jt), Y.push(t)
}
function dt() {
  Y.length > 0 && jt(), st.length > 0 && gn()
}
let U = !1,
  K = !1,
  Z = null,
  S = !1,
  j = !1
function Et(t) {
  j = t
}
let M = []
let u = null,
  y = !1
function $(t) {
  u = t
}
let o = null
function z(t) {
  o = t
}
let A = null
function Tn(t) {
  A = t
}
let c = null,
  h = 0,
  E = null
function mn(t) {
  E = t
}
let Bt = 1,
  W = 0,
  D = !1
function Ht() {
  return ++Bt
}
function B(t) {
  var v
  var n = t.f
  if ((n & k) !== 0) return !0
  if ((n & P) !== 0) {
    var r = t.deps,
      e = (n & w) !== 0
    if (r !== null) {
      var a,
        l,
        s = (n & G) !== 0,
        f = e && o !== null && !D,
        _ = r.length
      if (s || f) {
        var m = t,
          H = m.parent
        for (a = 0; a < _; a++)
          (l = r[a]),
            (s || !((v = l == null ? void 0 : l.reactions) != null && v.includes(m))) &&
              (l.reactions ?? (l.reactions = [])).push(m)
        s && (m.f ^= G), f && H !== null && (H.f & w) === 0 && (m.f ^= w)
      }
      for (a = 0; a < _; a++) if (((l = r[a]), B(l) && Ct(l), l.wv > t.wv)) return !0
    }
    ;(!e || (o !== null && !D)) && x(t, d)
  }
  return !1
}
function An(t, n) {
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
function xn(t) {
  return (t.f & Q) === 0 && (t.parent === null || (t.parent.f & V) === 0)
}
function rt(t, n, r, e) {
  if (U) {
    if ((r === null && (U = !1), xn(n))) throw t
    return
  }
  r !== null && (U = !0)
  {
    An(t, n)
    return
  }
}
function Ut(t, n, r = !0) {
  var e = t.reactions
  if (e !== null)
    for (var a = 0; a < e.length; a++) {
      var l = e[a]
      ;(l.f & g) !== 0 ? Ut(l, n, !1) : n === l && (r ? x(l, k) : (l.f & d) !== 0 && x(l, P), et(l))
    }
}
function Vt(t) {
  var _t
  var n = c,
    r = h,
    e = E,
    a = u,
    l = D,
    s = A,
    f = i,
    _ = y,
    m = t.f
  ;(c = null),
    (h = 0),
    (E = null),
    (D = (m & w) !== 0 && (y || !S || u === null)),
    (u = (m & (R | b)) === 0 ? t : null),
    (A = null),
    pt(t.ctx),
    (y = !1),
    W++
  try {
    var H = (0, t.fn)(),
      v = t.deps
    if (c !== null) {
      var p
      if ((X(t, h), v !== null && h > 0)) for (v.length = h + c.length, p = 0; p < c.length; p++) v[h + p] = c[p]
      else t.deps = v = c
      if (!D) for (p = h; p < v.length; p++) ((_t = v[p]).reactions ?? (_t.reactions = [])).push(t)
    } else v !== null && h < v.length && (X(t, h), (v.length = h))
    if (nt() && E !== null && !y && v !== null && (t.f & (g | P | k)) === 0) for (p = 0; p < E.length; p++) Ut(E[p], t)
    return a !== null && (W++, E !== null && (e === null ? (e = E) : e.push(...E))), H
  } finally {
    ;(c = n), (h = r), (E = e), (u = a), (D = l), (A = s), pt(f), (y = _)
  }
}
function Rn(t, n) {
  let r = n.reactions
  if (r !== null) {
    var e = Kt.call(r, t)
    if (e !== -1) {
      var a = r.length - 1
      a === 0 ? (r = n.reactions = null) : ((r[e] = r[a]), r.pop())
    }
  }
  r === null &&
    (n.f & g) !== 0 &&
    (c === null || !c.includes(n)) &&
    (x(n, P), (n.f & (w | G)) === 0 && (n.f ^= G), Nt(n), X(n, 0))
}
function X(t, n) {
  var r = t.deps
  if (r !== null) for (var e = n; e < r.length; e++) Rn(t, r[e])
}
function it(t) {
  var n = t.f
  if ((n & Q) === 0) {
    x(t, d)
    var r = o,
      e = i,
      a = S
    ;(o = t), (S = !0)
    try {
      ;(n & ot) !== 0 ? En(t) : Mt(t), Ft(t)
      var l = Vt(t)
      ;(t.teardown = typeof l == 'function' ? l : null), (t.wv = Bt)
      var s = t.deps,
        f
    } catch (_) {
      rt(_, t, r, e || t.ctx)
    } finally {
      ;(S = a), (o = r)
    }
  }
}
function Dn() {
  try {
    nn()
  } catch (t) {
    if (Z !== null) rt(t, Z, null)
    else throw t
  }
}
function Gt() {
  var t = S
  try {
    var n = 0
    for (S = !0; M.length > 0; ) {
      n++ > 1e3 && Dn()
      var r = M,
        e = r.length
      M = []
      for (var a = 0; a < e; a++) {
        var l = Sn(r[a])
        kn(l)
      }
    }
  } finally {
    ;(K = !1), (S = t), (Z = null), L.clear()
  }
}
function kn(t) {
  var n = t.length
  if (n !== 0)
    for (var r = 0; r < n; r++) {
      var e = t[r]
      if ((e.f & (Q | C)) === 0)
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
  K || ((K = !0), queueMicrotask(Gt))
  for (var n = (Z = t); n.parent !== null; ) {
    n = n.parent
    var r = n.f
    if ((r & (b | R)) !== 0) {
      if ((r & d) === 0) return
      n.f ^= d
    }
  }
  M.push(n)
}
function Sn(t) {
  for (var n = [], r = t; r !== null; ) {
    var e = r.f,
      a = (e & (R | b)) !== 0,
      l = a && (e & d) !== 0
    if (!l && (e & C) === 0) {
      if ((e & yt) !== 0) n.push(r)
      else if (a) r.f ^= d
      else {
        var s = u
        try {
          ;(u = r), B(r) && it(r)
        } catch (m) {
          rt(m, r, null, r.ctx)
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
function In(t) {
  var n
  for (dt(); M.length > 0; ) (K = !0), Gt(), dt()
  return n
}
async function Sr() {
  await Promise.resolve(), In()
}
function On(t) {
  var n = t.f,
    r = (n & g) !== 0
  if (u !== null && !y) {
    A !== null && A.includes(t) && rn()
    var e = u.deps
    t.rv < W &&
      ((t.rv = W),
      c === null && e !== null && e[h] === t ? h++ : c === null ? (c = [t]) : (!D || !c.includes(t)) && c.push(t))
  } else if (r && t.deps === null && t.effects === null) {
    var a = t,
      l = a.parent
    l !== null && (l.f & w) === 0 && (a.f ^= w)
  }
  return r && ((a = t), B(a) && Ct(a)), j && L.has(t) ? L.get(t) : t.v
}
function Ir(t) {
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
function Or(t) {
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
    const r = $t(t)
    if (
      r !== Object.prototype &&
      r !== Array.prototype &&
      r !== Map.prototype &&
      r !== Set.prototype &&
      r !== Date.prototype
    ) {
      const e = Zt(r)
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
  N as $,
  ar as A,
  xr as B,
  sr as C,
  or as D,
  gt as E,
  fr as F,
  vr as G,
  ln as H,
  tt as I,
  gr as J,
  sn as K,
  Bn as L,
  C as M,
  lr as N,
  bn as O,
  o as P,
  on as Q,
  un as R,
  ft as S,
  $n as T,
  er as U,
  qt as V,
  yr as W,
  yn as X,
  O as Y,
  Zn as Z,
  zn as _,
  _r as a,
  Cn as a0,
  Pn as a1,
  $ as a2,
  z as a3,
  u as a4,
  hr as a5,
  at as a6,
  xt as a7,
  Rt as a8,
  Hn as a9,
  Sr as aA,
  Ln as aB,
  Xt as aC,
  Ar as aa,
  lt as ab,
  fn as ac,
  nr as ad,
  rr as ae,
  Er as af,
  vt as ag,
  Fn as ah,
  Mn as ai,
  Gn as aj,
  ct as ak,
  Vn as al,
  Pt as am,
  hn as an,
  kr as ao,
  Un as ap,
  Yn as aq,
  Jn as ar,
  At as as,
  Qn as at,
  jn as au,
  Xn as av,
  Wn as aw,
  tr as ax,
  In as ay,
  ur as az,
  dn as b,
  an as c,
  ir as d,
  Dr as e,
  Rr as f,
  T as g,
  I as h,
  $t as i,
  Zt as j,
  i as k,
  Tr as l,
  wt as m,
  Ir as n,
  On as o,
  wn as p,
  qn as q,
  pr as r,
  q as s,
  Or as t,
  mr as u,
  Ot as v,
  Kn as w,
  dr as x,
  wr as y,
  cr as z
}
