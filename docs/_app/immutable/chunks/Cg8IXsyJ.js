import { k as d, u as m, l as i, m as l, n as g, o as p, q as v, t as b, v as k } from './B2UK0Pz5.js'
function x(n = !1) {
  const t = d,
    e = t.l.u
  if (!e) return
  let r = () => b(t.s)
  if (n) {
    let o = 0,
      s = {}
    const _ = k(() => {
      let c = !1
      const a = t.s
      for (const f in a) a[f] !== s[f] && ((s[f] = a[f]), (c = !0))
      return c && o++, o
    })
    r = () => p(_)
  }
  e.b.length &&
    m(() => {
      u(t, r), l(e.b)
    }),
    i(() => {
      const o = g(() => e.m.map(v))
      return () => {
        for (const s of o) typeof s == 'function' && s()
      }
    }),
    e.a.length &&
      i(() => {
        u(t, r), l(e.a)
      })
}
function u(n, t) {
  if (n.l.s) for (const e of n.l.s) p(e)
  t()
}
export { x as i }
