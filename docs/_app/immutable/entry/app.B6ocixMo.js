const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      '../nodes/0.BpYdHJTA.js',
      '../chunks/D3n58O8m.js',
      '../chunks/B2UK0Pz5.js',
      '../chunks/BxM4WkWX.js',
      '../chunks/CRiABWrf.js',
      '../chunks/stiKCeq_.js',
      '../assets/0.Doloz1DR.css',
      '../nodes/1.CI0Cy09w.js',
      '../chunks/aO88gx1_.js',
      '../chunks/Cg8IXsyJ.js',
      '../chunks/e9rwlafQ.js',
      '../chunks/CErrqjYu.js',
      '../nodes/2.BrIyzCDK.js',
      '../nodes/3.VGQnJfRy.js',
      '../chunks/_tsBNSNM.js',
      '../chunks/CFhPmK0h.js',
      '../nodes/4.zIxLuWBq.js',
      '../nodes/5.CBNEVEhB.js'
    ])
) => i.map((i) => d[i])
var X = (t) => {
  throw TypeError(t)
}
var $ = (t, e, s) => e.has(t) || X('Cannot ' + s)
var E = (t, e, s) => ($(t, e, 'read from private field'), s ? s.call(t) : e.get(t)),
  F = (t, e, s) =>
    e.has(t) ? X('Cannot add the same private member more than once') : e instanceof WeakSet ? e.add(t) : e.set(t, s),
  M = (t, e, s, v) => ($(t, e, 'write to private field'), v ? v.call(t, s) : e.set(t, s), s)
import {
  ag as j,
  ah as ue,
  ai as oe,
  S as T,
  aj as ce,
  o as b,
  U as R,
  F as w,
  ak as Y,
  P as le,
  al as de,
  i as ve,
  a0 as _e,
  h as p,
  a as me,
  b as he,
  E as ge,
  f as ye,
  p as be,
  g as Pe,
  am as Ee,
  an as Re,
  n as Q,
  ao as we,
  ap as Ie,
  aq as Se,
  v as q,
  J as Oe,
  ar as xe,
  as as Ae,
  R as ae,
  at as Le,
  au as se,
  I as Te,
  av as De,
  aw as ke,
  ax as Ce,
  ay as Ne,
  a1 as je,
  A as qe,
  u as Be,
  l as Ue,
  az as G,
  aA as Ve,
  af as U,
  y as Ye,
  C as ze,
  x as Fe,
  z as Me,
  B as Ge
} from '../chunks/B2UK0Pz5.js'
import { h as Ke, m as Ze, u as Je, s as We } from '../chunks/aO88gx1_.js'
import { t as ie, a as k, c as K, d as He } from '../chunks/D3n58O8m.js'
import { i as Z } from '../chunks/_tsBNSNM.js'
import { o as Qe } from '../chunks/CErrqjYu.js'
function D(t, e = null, s) {
  if (typeof t != 'object' || t === null || j in t) return t
  const v = ve(t)
  if (v !== ue && v !== oe) return t
  var n = new Map(),
    l = _e(t),
    f = T(0)
  l && n.set('length', T(t.length))
  var i
  return new Proxy(t, {
    defineProperty(u, r, a) {
      ;(!('value' in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && de()
      var o = n.get(r)
      return o === void 0 ? ((o = T(a.value)), n.set(r, o)) : w(o, D(a.value, i)), !0
    },
    deleteProperty(u, r) {
      var a = n.get(r)
      if (a === void 0) r in u && n.set(r, T(R))
      else {
        if (l && typeof r == 'string') {
          var o = n.get('length'),
            c = Number(r)
          Number.isInteger(c) && c < o.v && w(o, c)
        }
        w(a, R), ee(f)
      }
      return !0
    },
    get(u, r, a) {
      var y
      if (r === j) return t
      var o = n.get(r),
        c = r in u
      if (
        (o === void 0 && (!c || ((y = Y(u, r)) != null && y.writable)) && ((o = T(D(c ? u[r] : R, i))), n.set(r, o)),
        o !== void 0)
      ) {
        var d = b(o)
        return d === R ? void 0 : d
      }
      return Reflect.get(u, r, a)
    },
    getOwnPropertyDescriptor(u, r) {
      var a = Reflect.getOwnPropertyDescriptor(u, r)
      if (a && 'value' in a) {
        var o = n.get(r)
        o && (a.value = b(o))
      } else if (a === void 0) {
        var c = n.get(r),
          d = c == null ? void 0 : c.v
        if (c !== void 0 && d !== R) return { enumerable: !0, configurable: !0, value: d, writable: !0 }
      }
      return a
    },
    has(u, r) {
      var d
      if (r === j) return !0
      var a = n.get(r),
        o = (a !== void 0 && a.v !== R) || Reflect.has(u, r)
      if (a !== void 0 || (le !== null && (!o || ((d = Y(u, r)) != null && d.writable)))) {
        a === void 0 && ((a = T(o ? D(u[r], i) : R)), n.set(r, a))
        var c = b(a)
        if (c === R) return !1
      }
      return o
    },
    set(u, r, a, o) {
      var P
      var c = n.get(r),
        d = r in u
      if (l && r === 'length')
        for (var y = a; y < c.v; y += 1) {
          var _ = n.get(y + '')
          _ !== void 0 ? w(_, R) : y in u && ((_ = T(R)), n.set(y + '', _))
        }
      c === void 0
        ? (!d || ((P = Y(u, r)) != null && P.writable)) && ((c = T(void 0)), w(c, D(a, i)), n.set(r, c))
        : ((d = c.v !== R), w(c, D(a, i)))
      var m = Reflect.getOwnPropertyDescriptor(u, r)
      if ((m != null && m.set && m.set.call(o, a), !d)) {
        if (l && typeof r == 'string') {
          var S = n.get('length'),
            O = Number(r)
          Number.isInteger(O) && O >= S.v && w(S, O + 1)
        }
        ee(f)
      }
      return !0
    },
    ownKeys(u) {
      b(f)
      var r = Reflect.ownKeys(u).filter((c) => {
        var d = n.get(c)
        return d === void 0 || d.v !== R
      })
      for (var [a, o] of n) o.v !== R && !(a in u) && r.push(a)
      return r
    },
    setPrototypeOf() {
      ce()
    }
  })
}
function ee(t, e = 1) {
  w(t, t.v + e)
}
function J(t, e, s) {
  p && me()
  var v = t,
    n,
    l
  he(() => {
    n !== (n = e()) && (l && (be(l), (l = null)), n && (l = ye(() => s(v, n))))
  }, ge),
    p && (v = Pe)
}
function te(t, e) {
  return t === e || (t == null ? void 0 : t[j]) === e
}
function W(t = {}, e, s, v) {
  return (
    Ee(() => {
      var n, l
      return (
        Re(() => {
          ;(n = l),
            (l = []),
            Q(() => {
              t !== s(...l) && (e(t, ...l), n && te(s(...n), t) && e(null, ...n))
            })
        }),
        () => {
          we(() => {
            l && te(s(...l), t) && e(null, ...l)
          })
        }
      )
    }),
    t
  )
}
let V = !1
function Xe(t) {
  var e = V
  try {
    return (V = !1), [t(), V]
  } finally {
    V = e
  }
}
function re(t) {
  var e
  return ((e = t.ctx) == null ? void 0 : e.d) ?? !1
}
function H(t, e, s, v) {
  var z
  var n = (s & ke) !== 0,
    l = !Te || (s & De) !== 0,
    f = (s & Le) !== 0,
    i = (s & Ce) !== 0,
    u = !1,
    r
  f ? ([r, u] = Xe(() => t[e])) : (r = t[e])
  var a = j in t || se in t,
    o = (f && (((z = Y(t, e)) == null ? void 0 : z.set) ?? (a && e in t && ((g) => (t[e] = g))))) || void 0,
    c = v,
    d = !0,
    y = !1,
    _ = () => ((y = !0), d && ((d = !1), i ? (c = Q(v)) : (c = v)), c)
  r === void 0 && v !== void 0 && (o && l && Ie(), (r = _()), o && o(r))
  var m
  if (l)
    m = () => {
      var g = t[e]
      return g === void 0 ? _() : ((d = !0), (y = !1), g)
    }
  else {
    var S = (n ? q : Oe)(() => t[e])
    ;(S.f |= Se),
      (m = () => {
        var g = b(S)
        return g !== void 0 && (c = void 0), g === void 0 ? c : g
      })
  }
  if ((s & xe) === 0) return m
  if (o) {
    var O = t.$$legacy
    return function (g, L) {
      return arguments.length > 0 ? ((!l || !L || O || u) && o(L ? m() : g), g) : m()
    }
  }
  var P = !1,
    x = ae(r),
    h = q(() => {
      var g = m(),
        L = b(x)
      return P ? ((P = !1), L) : (x.v = g)
    })
  return (
    f && b(h),
    n || (h.equals = Ae),
    function (g, L) {
      if (arguments.length > 0) {
        const N = L ? b(h) : l && f ? D(g) : g
        if (!h.equals(N)) {
          if (((P = !0), w(x, N), y && c !== void 0 && (c = N), re(h))) return g
          Q(() => b(h))
        }
        return g
      }
      return re(h) ? h.v : b(h)
    }
  )
}
function $e(t) {
  return class extends pe {
    constructor(e) {
      super({ component: t, ...e })
    }
  }
}
var A, I
class pe {
  constructor(e) {
    F(this, A)
    F(this, I)
    var l
    var s = new Map(),
      v = (f, i) => {
        var u = ae(i)
        return s.set(f, u), u
      }
    const n = new Proxy(
      { ...(e.props || {}), $$events: {} },
      {
        get(f, i) {
          return b(s.get(i) ?? v(i, Reflect.get(f, i)))
        },
        has(f, i) {
          return i === se ? !0 : (b(s.get(i) ?? v(i, Reflect.get(f, i))), Reflect.has(f, i))
        },
        set(f, i, u) {
          return w(s.get(i) ?? v(i, u), u), Reflect.set(f, i, u)
        }
      }
    )
    M(
      this,
      I,
      (e.hydrate ? Ke : Ze)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: n,
        context: e.context,
        intro: e.intro ?? !1,
        recover: e.recover
      })
    ),
      (!((l = e == null ? void 0 : e.props) != null && l.$$host) || e.sync === !1) && Ne(),
      M(this, A, n.$$events)
    for (const f of Object.keys(E(this, I)))
      f === '$set' ||
        f === '$destroy' ||
        f === '$on' ||
        je(this, f, {
          get() {
            return E(this, I)[f]
          },
          set(i) {
            E(this, I)[f] = i
          },
          enumerable: !0
        })
    ;(E(this, I).$set = (f) => {
      Object.assign(n, f)
    }),
      (E(this, I).$destroy = () => {
        Je(E(this, I))
      })
  }
  $set(e) {
    E(this, I).$set(e)
  }
  $on(e, s) {
    E(this, A)[e] = E(this, A)[e] || []
    const v = (...n) => s.call(this, ...n)
    return (
      E(this, A)[e].push(v),
      () => {
        E(this, A)[e] = E(this, A)[e].filter((n) => n !== v)
      }
    )
  }
  $destroy() {
    E(this, I).$destroy()
  }
}
;(A = new WeakMap()), (I = new WeakMap())
const et = 'modulepreload',
  tt = function (t, e) {
    return new URL(t, e).href
  },
  ne = {},
  C = function (e, s, v) {
    let n = Promise.resolve()
    if (s && s.length > 0) {
      const f = document.getElementsByTagName('link'),
        i = document.querySelector('meta[property=csp-nonce]'),
        u = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'))
      n = Promise.allSettled(
        s.map((r) => {
          if (((r = tt(r, v)), r in ne)) return
          ne[r] = !0
          const a = r.endsWith('.css'),
            o = a ? '[rel="stylesheet"]' : ''
          if (!!v)
            for (let y = f.length - 1; y >= 0; y--) {
              const _ = f[y]
              if (_.href === r && (!a || _.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${r}"]${o}`)) return
          const d = document.createElement('link')
          if (
            ((d.rel = a ? 'stylesheet' : et),
            a || (d.as = 'script'),
            (d.crossOrigin = ''),
            (d.href = r),
            u && d.setAttribute('nonce', u),
            document.head.appendChild(d),
            a)
          )
            return new Promise((y, _) => {
              d.addEventListener('load', y),
                d.addEventListener('error', () => _(new Error(`Unable to preload CSS for ${r}`)))
            })
        })
      )
    }
    function l(f) {
      const i = new Event('vite:preloadError', { cancelable: !0 })
      if (((i.payload = f), window.dispatchEvent(i), !i.defaultPrevented)) throw f
    }
    return n.then((f) => {
      for (const i of f || []) i.status === 'rejected' && l(i.reason)
      return e().catch(l)
    })
  },
  vt = {}
var rt = ie(
    '<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
  ),
  nt = ie('<!> <!>', 1)
function at(t, e) {
  qe(e, !0)
  let s = H(e, 'components', 23, () => []),
    v = H(e, 'data_0', 3, null),
    n = H(e, 'data_1', 3, null)
  Be(() => e.stores.page.set(e.page)),
    Ue(() => {
      e.stores, e.page, e.constructors, s(), e.form, v(), n(), e.stores.page.notify()
    })
  let l = G(!1),
    f = G(!1),
    i = G(null)
  Qe(() => {
    const _ = e.stores.page.subscribe(() => {
      b(l) &&
        (w(f, !0),
        Ve().then(() => {
          w(i, D(document.title || 'untitled page'))
        }))
    })
    return w(l, !0), _
  })
  const u = q(() => e.constructors[1])
  var r = nt(),
    a = U(r)
  {
    var o = (_) => {
        var m = K()
        const S = q(() => e.constructors[0])
        var O = U(m)
        J(
          O,
          () => b(S),
          (P, x) => {
            W(
              x(P, {
                get data() {
                  return v()
                },
                get form() {
                  return e.form
                },
                children: (h, z) => {
                  var g = K(),
                    L = U(g)
                  J(
                    L,
                    () => b(u),
                    (N, fe) => {
                      W(
                        fe(N, {
                          get data() {
                            return n()
                          },
                          get form() {
                            return e.form
                          }
                        }),
                        (B) => (s()[1] = B),
                        () => {
                          var B
                          return (B = s()) == null ? void 0 : B[1]
                        }
                      )
                    }
                  ),
                    k(h, g)
                },
                $$slots: { default: !0 }
              }),
              (h) => (s()[0] = h),
              () => {
                var h
                return (h = s()) == null ? void 0 : h[0]
              }
            )
          }
        ),
          k(_, m)
      },
      c = (_) => {
        var m = K()
        const S = q(() => e.constructors[0])
        var O = U(m)
        J(
          O,
          () => b(S),
          (P, x) => {
            W(
              x(P, {
                get data() {
                  return v()
                },
                get form() {
                  return e.form
                }
              }),
              (h) => (s()[0] = h),
              () => {
                var h
                return (h = s()) == null ? void 0 : h[0]
              }
            )
          }
        ),
          k(_, m)
      }
    Z(a, (_) => {
      e.constructors[1] ? _(o) : _(c, !1)
    })
  }
  var d = Ye(a, 2)
  {
    var y = (_) => {
      var m = rt(),
        S = Fe(m)
      {
        var O = (P) => {
          var x = He()
          Ge(() => We(x, b(i))), k(P, x)
        }
        Z(S, (P) => {
          b(f) && P(O)
        })
      }
      Me(m), k(_, m)
    }
    Z(d, (_) => {
      b(l) && _(y)
    })
  }
  k(t, r), ze()
}
const _t = $e(at),
  mt = [
    () => C(() => import('../nodes/0.BpYdHJTA.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]), import.meta.url),
    () => C(() => import('../nodes/1.CI0Cy09w.js'), __vite__mapDeps([7, 1, 2, 3, 8, 9, 10, 5, 11]), import.meta.url),
    () => C(() => import('../nodes/2.BrIyzCDK.js'), __vite__mapDeps([12, 1, 2, 3]), import.meta.url),
    () =>
      C(
        () => import('../nodes/3.VGQnJfRy.js'),
        __vite__mapDeps([13, 1, 2, 3, 14, 15, 4, 9, 11, 5, 8]),
        import.meta.url
      ),
    () => C(() => import('../nodes/4.zIxLuWBq.js'), __vite__mapDeps([16, 1, 2, 3]), import.meta.url),
    () =>
      C(() => import('../nodes/5.CBNEVEhB.js'), __vite__mapDeps([17, 1, 2, 3, 14, 15, 4, 9, 11, 5, 8]), import.meta.url)
  ],
  ht = [],
  gt = { '/': [2], '/invoices': [3], '/invoices/[id]/details': [4], '/templates': [5] },
  st = {
    handleError: ({ error: t }) => {
      console.error(t)
    },
    reroute: () => {},
    transport: {}
  },
  it = Object.fromEntries(Object.entries(st.transport).map(([t, e]) => [t, e.decode])),
  yt = !1,
  bt = (t, e) => it[t](e)
export {
  bt as decode,
  it as decoders,
  gt as dictionary,
  yt as hash,
  st as hooks,
  vt as matchers,
  mt as nodes,
  _t as root,
  ht as server_loads
}
