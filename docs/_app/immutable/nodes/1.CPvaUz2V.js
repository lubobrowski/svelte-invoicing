import { t as b, a as x } from '../chunks/W-T0yYy1.js'
import '../chunks/D-sHlrmk.js'
import {
  c as k,
  M as y,
  u,
  O as d,
  b as $,
  P as h,
  Q as w,
  R as J,
  S as K,
  J as M,
  T as O,
  K as P,
  d as p,
  r as l,
  s as Q
} from '../chunks/DdvcqIDB.js'
import { s as m } from '../chunks/BcOzDe96.js'
import { s as R, p as v } from '../chunks/DFw8FdhZ.js'
function S(a = !1) {
  const t = k,
    s = t.l.u
  if (!s) return
  let o = () => J(t.s)
  if (a) {
    let e = 0,
      r = {}
    const c = K(() => {
      let f = !1
      const n = t.s
      for (const i in n) n[i] !== r[i] && ((r[i] = n[i]), (f = !0))
      return f && e++, e
    })
    o = () => h(c)
  }
  s.b.length &&
    y(() => {
      g(t, o), d(s.b)
    }),
    u(() => {
      const e = $(() => s.m.map(w))
      return () => {
        for (const r of e) typeof r == 'function' && r()
      }
    }),
    s.a.length &&
      u(() => {
        g(t, o), d(s.a)
      })
}
function g(a, t) {
  if (a.l.s) for (const s of a.l.s) h(s)
  t()
}
const T = {
  get error() {
    return v.error
  },
  get status() {
    return v.status
  }
}
R.updated.check
const _ = T
var j = b(
  '<div class="card bg-error card-xl shadow-sm m-6"><div class="card-body"><h2 class="card-title"> </h2> <p> </p></div></div>'
)
function D(a, t) {
  M(t, !1), S()
  var s = j(),
    o = p(s),
    e = p(o),
    r = p(e, !0)
  l(e)
  var c = Q(e, 2),
    f = p(c, !0)
  l(c),
    l(o),
    l(s),
    O(() => {
      var n
      m(r, _.status), m(f, (n = _.error) == null ? void 0 : n.message)
    }),
    x(a, s),
    P()
}
export { D as component }
