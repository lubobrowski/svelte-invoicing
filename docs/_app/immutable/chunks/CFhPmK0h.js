import {
  b as q,
  h as z,
  a as B,
  o as x,
  J,
  c as Q,
  r as A,
  s as S,
  d as b,
  g as D,
  K as G,
  e as K,
  f as W,
  p as j,
  M as E,
  O as $,
  P as C,
  Q as ee,
  R as ae,
  S as R,
  T as te,
  V as ne,
  W as re,
  X as ie,
  Y as se,
  Z as le,
  _ as oe,
  $ as ue,
  a0 as fe
} from './B2UK0Pz5.js'
function ye(a, e) {
  return e
}
function de(a, e, t, s) {
  for (var m = [], u = e.length, l = 0; l < u; l++) ne(e[l].e, m, !0)
  var v = u > 0 && m.length === 0 && t !== null
  if (v) {
    var f = t.parentNode
    re(f), f.append(t), s.clear(), w(a, e[0].prev, e[u - 1].next)
  }
  ie(m, () => {
    for (var g = 0; g < u; g++) {
      var n = e[g]
      v || (s.delete(n.k), w(a, n.prev, n.next)), se(n.e, !v)
    }
  })
}
function ze(a, e, t, s, m, u = null) {
  var l = a,
    v = { flags: e, items: new Map(), first: null }
  z && B()
  var f = null,
    g = !1,
    n = J(() => {
      var d = t()
      return fe(d) ? d : d == null ? [] : $(d)
    })
  q(() => {
    var d = x(n),
      r = d.length
    if (g && r === 0) return
    g = r === 0
    let c = !1
    if (z) {
      var o = l.data === Q
      o !== (r === 0) && ((l = A()), S(l), b(!1), (c = !0))
    }
    if (z) {
      for (var y = null, p, i = 0; i < r; i++) {
        if (D.nodeType === 8 && D.data === G) {
          ;(l = D), (c = !0), b(!1)
          break
        }
        var h = d[i],
          M = s(h, i)
        ;(p = L(D, v, y, null, h, M, i, m, e, t)), v.items.set(M, p), (y = p)
      }
      r > 0 && S(A())
    }
    z || ce(d, v, l, m, e, s, t),
      u !== null &&
        (r === 0
          ? f
            ? K(f)
            : (f = W(() => u(l)))
          : f !== null &&
            j(f, () => {
              f = null
            })),
      c && b(!0),
      x(n)
  }),
    z && (l = D)
}
function ce(a, e, t, s, m, u, l) {
  var v = a.length,
    f = e.items,
    g = e.first,
    n = g,
    d,
    r = null,
    c = [],
    o = [],
    y,
    p,
    i,
    h
  for (h = 0; h < v; h += 1) {
    if (((y = a[h]), (p = u(y, h)), (i = f.get(p)), i === void 0)) {
      var M = n ? n.e.nodes_start : t
      ;(r = L(M, e, r, r === null ? e.first : r.next, y, p, h, s, m, l)), f.set(p, r), (c = []), (o = []), (n = r.next)
      continue
    }
    if ((me(i, y, h), (i.e.f & E) !== 0 && K(i.e), i !== n)) {
      if (d !== void 0 && d.has(i)) {
        if (c.length < o.length) {
          var T = o[0],
            _
          r = T.prev
          var I = c[0],
            k = c[c.length - 1]
          for (_ = 0; _ < c.length; _ += 1) O(c[_], T, t)
          for (_ = 0; _ < o.length; _ += 1) d.delete(o[_])
          w(e, I.prev, k.next), w(e, r, I), w(e, k, T), (n = T), (r = k), (h -= 1), (c = []), (o = [])
        } else
          d.delete(i), O(i, n, t), w(e, i.prev, i.next), w(e, i, r === null ? e.first : r.next), w(e, r, i), (r = i)
        continue
      }
      for (c = [], o = []; n !== null && n.k !== p; )
        (n.e.f & E) === 0 && (d ?? (d = new Set())).add(n), o.push(n), (n = n.next)
      if (n === null) continue
      i = n
    }
    c.push(i), (r = i), (n = i.next)
  }
  if (n !== null || d !== void 0) {
    for (var N = d === void 0 ? [] : $(d); n !== null; ) (n.e.f & E) === 0 && N.push(n), (n = n.next)
    var Z = N.length
    if (Z > 0) {
      var X = null
      de(e, N, X, f)
    }
  }
  ;(C.first = e.first && e.first.e), (C.last = r && r.e)
}
function me(a, e, t, s) {
  ee(a.v, e), (a.i = t)
}
function L(a, e, t, s, m, u, l, v, f, g) {
  var n = (f & le) !== 0,
    d = (f & oe) === 0,
    r = n ? (d ? ae(m) : R(m)) : m,
    c = (f & te) === 0 ? l : R(l),
    o = { i: c, v: r, k: u, a: null, e: null, prev: t, next: s }
  try {
    return (
      (o.e = W(() => v(a, r, c, g), z)),
      (o.e.prev = t && t.e),
      (o.e.next = s && s.e),
      t === null ? (e.first = o) : ((t.next = o), (t.e.next = o.e)),
      s !== null && ((s.prev = o), (s.e.prev = o.e)),
      o
    )
  } finally {
  }
}
function O(a, e, t) {
  for (var s = a.next ? a.next.e.nodes_start : t, m = e ? e.e.nodes_start : t, u = a.e.nodes_start; u !== s; ) {
    var l = ue(u)
    m.before(u), (u = l)
  }
}
function w(a, e, t) {
  e === null ? (a.first = t) : ((e.next = t), (e.e.next = t && t.e)),
    t !== null && ((t.prev = e), (t.e.prev = e && e.e))
}
const V = [
    {
      taxIdNumber: '4326008081',
      fullName: 'Uniwersytecki Szpital Kliniczny w Olsztynie',
      streetAddress: 'ul. Warszawska 30',
      postalCode: '10-082',
      city: 'Olsztyn'
    },
    {
      taxIdNumber: '6443125780',
      fullName:
        'Samodzielny Publiczny Zakład Opieki Zdrowotnej Centralny Szpital Kliniczny Uniwersytetu Medycznego w Łodzi',
      streetAddress: 'ul. Pomorska 251',
      postalCode: '92-213',
      city: 'Łódź'
    },
    {
      taxIdNumber: '4326008081',
      fullName:
        'Samodzielny Publiczny Szpital Kliniczny im. prof. Witolda Orłowskiego Centrum Medycznego Kształcenia Podyplomowego w Warszawie',
      streetAddress: 'ul. Czerniakowska 231',
      postalCode: '00-416',
      city: 'Warszawa'
    }
  ],
  ve = [
    'Usługi pielęgniarskie',
    'Usługi pielęgniarskie za marzec 2025',
    'Usługi pielęgniarskie w zakresie pielęgniarstwa anestezjologicznego i intensywnej terapii na podstawie umowy nr 119/2024'
  ]
function he(a, e) {
  return new Date(a.getTime() + Math.random() * (e.getTime() - a.getTime()))
}
function Y(a) {
  return a[Math.floor(Math.random() * a.length)]
}
function U(a, e) {
  let t = a + ''
  for (; t.length < e; ) t = '0' + t
  return t
}
function ge(a) {
  return `${a.getFullYear()}-${U(a.getMonth() + 1, 2)}-${U(a.getDate(), 2)}`
}
function F(a) {
  return [a.fullName, a.streetAddress, a.postalCode, a.city, a.taxIdNumber].join(' ')
}
function pe(a) {
  let e = []
  const t = new Date('2025-01-01'),
    s = new Date(Date.now())
  let m = Math.round(Math.random() * 100)
  for (let u = 0; u < a; u++) {
    let l = he(t, s),
      v = ge(l),
      f = 1e3 + Math.round(Math.random() * 2e4) / 2
    e.push({ number: `${m++}/2025`, issueDate: v, customerData: F(Y(V)), totalValue: f })
  }
  return e
}
function _e() {
  const a = []
  for (let e of V)
    a.push({ customerData: F(e), itemDescription: Y(ve), hourlyRate: 50 + Math.round(Math.random() * 160) / 2 })
  return a
}
function De(a) {
  return (
    a
      .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      .replace(',', ' ')
      .replace('.', ',') + ' PLN'
  )
}
const P = pe(40),
  H = _e()
async function Me(a, e) {
  const t = a * e
  return await new Promise((s) => setTimeout(s, 1e3)), P.slice(t, Math.min(P.length, t + e))
}
async function Te(a, e) {
  console.log('load templates', a)
  const t = a * e
  return await new Promise((s) => setTimeout(s, 500)), H.slice(t, Math.min(H.length + 1, t + e))
}
export { Te as a, ze as e, De as f, ye as i, Me as l }
