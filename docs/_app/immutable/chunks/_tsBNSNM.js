import {
  b as _,
  h as u,
  a as g,
  E as h,
  H as S,
  c as D,
  r as H,
  s as k,
  d as I,
  e as b,
  f as v,
  p as A,
  U as F,
  g as L
} from './B2UK0Pz5.js'
function U(E, m, [t, s] = [0, 0]) {
  u && t === 0 && g()
  var a = E,
    f = null,
    e = null,
    c = F,
    p = t > 0 ? h : 0,
    i = !1
  const N = (n, l = !0) => {
      ;(i = !0), o(l, n)
    },
    o = (n, l) => {
      if (c === (c = n)) return
      let T = !1
      if (u && s !== -1) {
        if (t === 0) {
          const r = a.data
          r === S ? (s = 0) : r === D ? (s = 1 / 0) : ((s = parseInt(r.substring(1))), s !== s && (s = c ? 1 / 0 : -1))
        }
        const R = s > t
        !!c === R && ((a = H()), k(a), I(!1), (T = !0), (s = -1))
      }
      c
        ? (f ? b(f) : l && (f = v(() => l(a))),
          e &&
            A(e, () => {
              e = null
            }))
        : (e ? b(e) : l && (e = v(() => l(a, [t + 1, s]))),
          f &&
            A(f, () => {
              f = null
            })),
        T && I(!0)
    }
  _(() => {
    ;(i = !1), m(N), i || o(null, null)
  }, p),
    u && (a = L)
}
export { U as i }
