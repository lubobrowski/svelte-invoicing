const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      '../nodes/0.CbvaRrmR.js',
      '../chunks/W-T0yYy1.js',
      '../chunks/DdvcqIDB.js',
      '../chunks/D-sHlrmk.js',
      '../chunks/ChEyJHnC.js',
      '../chunks/CFxZUInS.js',
      '../assets/0.x60bCv52.css',
      '../nodes/1.CPvaUz2V.js',
      '../chunks/BcOzDe96.js',
      '../chunks/DFw8FdhZ.js',
      '../chunks/Cpa1U-J8.js',
      '../nodes/2.CAxr3c_-.js',
      '../nodes/3.DOB5YVxI.js',
      '../nodes/4.BYqGT5Ye.js',
      '../nodes/5.DHJHNGxM.js'
    ])
) => i.map((i) => d[i])
var ee = (t) => {
  throw TypeError(t)
}
var te = (t, e, n) => e.has(t) || ee('Cannot ' + n)
var E = (t, e, n) => (te(t, e, 'read from private field'), n ? n.call(t) : e.get(t)),
  K = (t, e, n) =>
    e.has(t) ? ee('Cannot add the same private member more than once') : e instanceof WeakSet ? e.add(t) : e.set(t, n),
  Z = (t, e, n, u) => (te(t, e, 'write to private field'), u ? u.call(t, n) : e.set(t, n), n)
import {
  Y as j,
  Z as he,
  _ as ge,
  $ as D,
  a0 as ye,
  P as b,
  a1 as R,
  a2 as I,
  a3 as M,
  o as be,
  a4 as Pe,
  g as Ee,
  k as Re,
  h as x,
  y as ue,
  a5 as le,
  a6 as oe,
  H as Ie,
  a7 as we,
  a8 as Se,
  x as Oe,
  w as re,
  a9 as ae,
  I as Q,
  aa as $,
  z as ce,
  ab as Ae,
  ac as Te,
  b as p,
  ad as Le,
  ae as De,
  af as Ne,
  S as B,
  ag as ke,
  ah as qe,
  ai as Ce,
  aj as de,
  ak as je,
  al as ve,
  l as xe,
  am as Be,
  an as Ve,
  ao as Ye,
  ap as Ue,
  f as Me,
  J as He,
  M as Ke,
  u as Ze,
  aq as z,
  ar as ze,
  X as Y,
  s as Fe,
  K as Ge,
  d as Je,
  r as We,
  T as Xe
} from '../chunks/DdvcqIDB.js'
import { h as Qe, m as $e, u as pe, s as et } from '../chunks/BcOzDe96.js'
import { t as _e, a as k, c as F, d as tt } from '../chunks/W-T0yYy1.js'
import { o as rt } from '../chunks/Cpa1U-J8.js'
function N(t, e = null, n) {
  if (typeof t != 'object' || t === null || j in t) return t
  const u = Ee(t)
  if (u !== he && u !== ge) return t
  var a = new Map(),
    l = Re(t),
    f = D(0)
  l && a.set('length', D(t.length))
  var s
  return new Proxy(t, {
    defineProperty(o, r, i) {
      ;(!('value' in i) || i.configurable === !1 || i.enumerable === !1 || i.writable === !1) && Pe()
      var d = a.get(r)
      return d === void 0 ? ((d = D(i.value)), a.set(r, d)) : I(d, N(i.value, s)), !0
    },
    deleteProperty(o, r) {
      var i = a.get(r)
      if (i === void 0) r in o && a.set(r, D(R))
      else {
        if (l && typeof r == 'string') {
          var d = a.get('length'),
            c = Number(r)
          Number.isInteger(c) && c < d.v && I(d, c)
        }
        I(i, R), ne(f)
      }
      return !0
    },
    get(o, r, i) {
      var h
      if (r === j) return t
      var d = a.get(r),
        c = r in o
      if (
        (d === void 0 && (!c || ((h = M(o, r)) != null && h.writable)) && ((d = D(N(c ? o[r] : R, s))), a.set(r, d)),
        d !== void 0)
      ) {
        var v = b(d)
        return v === R ? void 0 : v
      }
      return Reflect.get(o, r, i)
    },
    getOwnPropertyDescriptor(o, r) {
      var i = Reflect.getOwnPropertyDescriptor(o, r)
      if (i && 'value' in i) {
        var d = a.get(r)
        d && (i.value = b(d))
      } else if (i === void 0) {
        var c = a.get(r),
          v = c == null ? void 0 : c.v
        if (c !== void 0 && v !== R) return { enumerable: !0, configurable: !0, value: v, writable: !0 }
      }
      return i
    },
    has(o, r) {
      var v
      if (r === j) return !0
      var i = a.get(r),
        d = (i !== void 0 && i.v !== R) || Reflect.has(o, r)
      if (i !== void 0 || (be !== null && (!d || ((v = M(o, r)) != null && v.writable)))) {
        i === void 0 && ((i = D(d ? N(o[r], s) : R)), a.set(r, i))
        var c = b(i)
        if (c === R) return !1
      }
      return d
    },
    set(o, r, i, d) {
      var P
      var c = a.get(r),
        v = r in o
      if (l && r === 'length')
        for (var h = i; h < c.v; h += 1) {
          var _ = a.get(h + '')
          _ !== void 0 ? I(_, R) : h in o && ((_ = D(R)), a.set(h + '', _))
        }
      c === void 0
        ? (!v || ((P = M(o, r)) != null && P.writable)) && ((c = D(void 0)), I(c, N(i, s)), a.set(r, c))
        : ((v = c.v !== R), I(c, N(i, s)))
      var m = Reflect.getOwnPropertyDescriptor(o, r)
      if ((m != null && m.set && m.set.call(d, i), !v)) {
        if (l && typeof r == 'string') {
          var S = a.get('length'),
            O = Number(r)
          Number.isInteger(O) && O >= S.v && I(S, O + 1)
        }
        ne(f)
      }
      return !0
    },
    ownKeys(o) {
      b(f)
      var r = Reflect.ownKeys(o).filter((c) => {
        var v = a.get(c)
        return v === void 0 || v.v !== R
      })
      for (var [i, d] of a) d.v !== R && !(i in o) && r.push(i)
      return r
    },
    setPrototypeOf() {
      ye()
    }
  })
}
function ne(t, e = 1) {
  I(t, t.v + e)
}
function G(t, e, [n, u] = [0, 0]) {
  x && n === 0 && ue()
  var a = t,
    l = null,
    f = null,
    s = R,
    o = n > 0 ? oe : 0,
    r = !1
  const i = (c, v = !0) => {
      ;(r = !0), d(v, c)
    },
    d = (c, v) => {
      if (s === (s = c)) return
      let h = !1
      if (x && u !== -1) {
        if (n === 0) {
          const m = a.data
          m === Ie
            ? (u = 0)
            : m === we
              ? (u = 1 / 0)
              : ((u = parseInt(m.substring(1))), u !== u && (u = s ? 1 / 0 : -1))
        }
        const _ = u > n
        !!s === _ && ((a = Se()), Oe(a), re(!1), (h = !0), (u = -1))
      }
      s
        ? (l ? ae(l) : v && (l = Q(() => v(a))),
          f &&
            $(f, () => {
              f = null
            }))
        : (f ? ae(f) : v && (f = Q(() => v(a, [n + 1, u]))),
          l &&
            $(l, () => {
              l = null
            })),
        h && re(!0)
    }
  le(() => {
    ;(r = !1), e(i), r || d(null, null)
  }, o),
    x && (a = ce)
}
function J(t, e, n) {
  x && ue()
  var u = t,
    a,
    l
  le(() => {
    a !== (a = e()) && (l && ($(l), (l = null)), a && (l = Q(() => n(u, a))))
  }, oe),
    x && (u = ce)
}
function se(t, e) {
  return t === e || (t == null ? void 0 : t[j]) === e
}
function W(t = {}, e, n, u) {
  return (
    Ae(() => {
      var a, l
      return (
        Te(() => {
          ;(a = l),
            (l = []),
            p(() => {
              t !== n(...l) && (e(t, ...l), a && se(n(...a), t) && e(null, ...a))
            })
        }),
        () => {
          Le(() => {
            l && se(n(...l), t) && e(null, ...l)
          })
        }
      )
    }),
    t
  )
}
let U = !1
function at(t) {
  var e = U
  try {
    return (U = !1), [t(), U]
  } finally {
    U = e
  }
}
function ie(t) {
  var e
  return ((e = t.ctx) == null ? void 0 : e.d) ?? !1
}
function X(t, e, n, u) {
  var H
  var a = (n & Ve) !== 0,
    l = !xe || (n & Be) !== 0,
    f = (n & je) !== 0,
    s = (n & Ye) !== 0,
    o = !1,
    r
  f ? ([r, o] = at(() => t[e])) : (r = t[e])
  var i = j in t || ve in t,
    d = (f && (((H = M(t, e)) == null ? void 0 : H.set) ?? (i && e in t && ((y) => (t[e] = y))))) || void 0,
    c = u,
    v = !0,
    h = !1,
    _ = () => ((h = !0), v && ((v = !1), s ? (c = p(u)) : (c = u)), c)
  r === void 0 && u !== void 0 && (d && l && De(), (r = _()), d && d(r))
  var m
  if (l)
    m = () => {
      var y = t[e]
      return y === void 0 ? _() : ((v = !0), (h = !1), y)
    }
  else {
    var S = (a ? B : ke)(() => t[e])
    ;(S.f |= Ne),
      (m = () => {
        var y = b(S)
        return y !== void 0 && (c = void 0), y === void 0 ? c : y
      })
  }
  if ((n & qe) === 0) return m
  if (d) {
    var O = t.$$legacy
    return function (y, L) {
      return arguments.length > 0 ? ((!l || !L || O || o) && d(L ? m() : y), y) : m()
    }
  }
  var P = !1,
    A = de(r),
    g = B(() => {
      var y = m(),
        L = b(A)
      return P ? ((P = !1), L) : (A.v = y)
    })
  return (
    f && b(g),
    a || (g.equals = Ce),
    function (y, L) {
      if (arguments.length > 0) {
        const C = L ? b(g) : l && f ? N(y) : y
        if (!g.equals(C)) {
          if (((P = !0), I(A, C), h && c !== void 0 && (c = C), ie(g))) return y
          p(() => b(g))
        }
        return y
      }
      return ie(g) ? g.v : b(g)
    }
  )
}
function nt(t) {
  return class extends st {
    constructor(e) {
      super({ component: t, ...e })
    }
  }
}
var T, w
class st {
  constructor(e) {
    K(this, T)
    K(this, w)
    var l
    var n = new Map(),
      u = (f, s) => {
        var o = de(s)
        return n.set(f, o), o
      }
    const a = new Proxy(
      { ...(e.props || {}), $$events: {} },
      {
        get(f, s) {
          return b(n.get(s) ?? u(s, Reflect.get(f, s)))
        },
        has(f, s) {
          return s === ve ? !0 : (b(n.get(s) ?? u(s, Reflect.get(f, s))), Reflect.has(f, s))
        },
        set(f, s, o) {
          return I(n.get(s) ?? u(s, o), o), Reflect.set(f, s, o)
        }
      }
    )
    Z(
      this,
      w,
      (e.hydrate ? Qe : $e)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: a,
        context: e.context,
        intro: e.intro ?? !1,
        recover: e.recover
      })
    ),
      (!((l = e == null ? void 0 : e.props) != null && l.$$host) || e.sync === !1) && Ue(),
      Z(this, T, a.$$events)
    for (const f of Object.keys(E(this, w)))
      f === '$set' ||
        f === '$destroy' ||
        f === '$on' ||
        Me(this, f, {
          get() {
            return E(this, w)[f]
          },
          set(s) {
            E(this, w)[f] = s
          },
          enumerable: !0
        })
    ;(E(this, w).$set = (f) => {
      Object.assign(a, f)
    }),
      (E(this, w).$destroy = () => {
        pe(E(this, w))
      })
  }
  $set(e) {
    E(this, w).$set(e)
  }
  $on(e, n) {
    E(this, T)[e] = E(this, T)[e] || []
    const u = (...a) => n.call(this, ...a)
    return (
      E(this, T)[e].push(u),
      () => {
        E(this, T)[e] = E(this, T)[e].filter((a) => a !== u)
      }
    )
  }
  $destroy() {
    E(this, w).$destroy()
  }
}
;(T = new WeakMap()), (w = new WeakMap())
const it = 'modulepreload',
  ft = function (t, e) {
    return new URL(t, e).href
  },
  fe = {},
  q = function (e, n, u) {
    let a = Promise.resolve()
    if (n && n.length > 0) {
      const f = document.getElementsByTagName('link'),
        s = document.querySelector('meta[property=csp-nonce]'),
        o = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute('nonce'))
      a = Promise.allSettled(
        n.map((r) => {
          if (((r = ft(r, u)), r in fe)) return
          fe[r] = !0
          const i = r.endsWith('.css'),
            d = i ? '[rel="stylesheet"]' : ''
          if (!!u)
            for (let h = f.length - 1; h >= 0; h--) {
              const _ = f[h]
              if (_.href === r && (!i || _.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${r}"]${d}`)) return
          const v = document.createElement('link')
          if (
            ((v.rel = i ? 'stylesheet' : it),
            i || (v.as = 'script'),
            (v.crossOrigin = ''),
            (v.href = r),
            o && v.setAttribute('nonce', o),
            document.head.appendChild(v),
            i)
          )
            return new Promise((h, _) => {
              v.addEventListener('load', h),
                v.addEventListener('error', () => _(new Error(`Unable to preload CSS for ${r}`)))
            })
        })
      )
    }
    function l(f) {
      const s = new Event('vite:preloadError', { cancelable: !0 })
      if (((s.payload = f), window.dispatchEvent(s), !s.defaultPrevented)) throw f
    }
    return a.then((f) => {
      for (const s of f || []) s.status === 'rejected' && l(s.reason)
      return e().catch(l)
    })
  },
  yt = {}
var ut = _e(
    '<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
  ),
  lt = _e('<!> <!>', 1)
function ot(t, e) {
  He(e, !0)
  let n = X(e, 'components', 23, () => []),
    u = X(e, 'data_0', 3, null),
    a = X(e, 'data_1', 3, null)
  Ke(() => e.stores.page.set(e.page)),
    Ze(() => {
      e.stores, e.page, e.constructors, n(), e.form, u(), a(), e.stores.page.notify()
    })
  let l = z(!1),
    f = z(!1),
    s = z(null)
  rt(() => {
    const _ = e.stores.page.subscribe(() => {
      b(l) &&
        (I(f, !0),
        ze().then(() => {
          I(s, N(document.title || 'untitled page'))
        }))
    })
    return I(l, !0), _
  })
  const o = B(() => e.constructors[1])
  var r = lt(),
    i = Y(r)
  {
    var d = (_) => {
        var m = F()
        const S = B(() => e.constructors[0])
        var O = Y(m)
        J(
          O,
          () => b(S),
          (P, A) => {
            W(
              A(P, {
                get data() {
                  return u()
                },
                get form() {
                  return e.form
                },
                children: (g, H) => {
                  var y = F(),
                    L = Y(y)
                  J(
                    L,
                    () => b(o),
                    (C, me) => {
                      W(
                        me(C, {
                          get data() {
                            return a()
                          },
                          get form() {
                            return e.form
                          }
                        }),
                        (V) => (n()[1] = V),
                        () => {
                          var V
                          return (V = n()) == null ? void 0 : V[1]
                        }
                      )
                    }
                  ),
                    k(g, y)
                },
                $$slots: { default: !0 }
              }),
              (g) => (n()[0] = g),
              () => {
                var g
                return (g = n()) == null ? void 0 : g[0]
              }
            )
          }
        ),
          k(_, m)
      },
      c = (_) => {
        var m = F()
        const S = B(() => e.constructors[0])
        var O = Y(m)
        J(
          O,
          () => b(S),
          (P, A) => {
            W(
              A(P, {
                get data() {
                  return u()
                },
                get form() {
                  return e.form
                }
              }),
              (g) => (n()[0] = g),
              () => {
                var g
                return (g = n()) == null ? void 0 : g[0]
              }
            )
          }
        ),
          k(_, m)
      }
    G(i, (_) => {
      e.constructors[1] ? _(d) : _(c, !1)
    })
  }
  var v = Fe(i, 2)
  {
    var h = (_) => {
      var m = ut(),
        S = Je(m)
      {
        var O = (P) => {
          var A = tt()
          Xe(() => et(A, b(s))), k(P, A)
        }
        G(S, (P) => {
          b(f) && P(O)
        })
      }
      We(m), k(_, m)
    }
    G(v, (_) => {
      b(l) && _(h)
    })
  }
  k(t, r), Ge()
}
const bt = nt(ot),
  Pt = [
    () => q(() => import('../nodes/0.CbvaRrmR.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]), import.meta.url),
    () => q(() => import('../nodes/1.CPvaUz2V.js'), __vite__mapDeps([7, 1, 2, 3, 8, 9, 5, 10]), import.meta.url),
    () => q(() => import('../nodes/2.CAxr3c_-.js'), __vite__mapDeps([11, 1, 2, 3]), import.meta.url),
    () => q(() => import('../nodes/3.DOB5YVxI.js'), __vite__mapDeps([12, 1, 2, 3, 4, 5]), import.meta.url),
    () => q(() => import('../nodes/4.BYqGT5Ye.js'), __vite__mapDeps([13, 1, 2, 3]), import.meta.url),
    () => q(() => import('../nodes/5.DHJHNGxM.js'), __vite__mapDeps([14, 1, 2, 3, 4, 5]), import.meta.url)
  ],
  Et = [],
  Rt = { '/': [2], '/invoices': [3], '/invoices/[id]/details': [4], '/templates': [5] },
  ct = {
    handleError: ({ error: t }) => {
      console.error(t)
    },
    reroute: () => {},
    transport: {}
  },
  dt = Object.fromEntries(Object.entries(ct.transport).map(([t, e]) => [t, e.decode])),
  It = !1,
  wt = (t, e) => dt[t](e)
export {
  wt as decode,
  dt as decoders,
  Rt as dictionary,
  It as hash,
  ct as hooks,
  yt as matchers,
  Pt as nodes,
  bt as root,
  Et as server_loads
}
