import { a6 as f, ac as p, ad as h, ae as E, P as _, h as d, g as o, a as T, ab as i, s as g } from './B2UK0Pz5.js'
function y(n) {
  var t = document.createElement('template')
  return (t.innerHTML = n), t.content
}
function r(n, t) {
  var e = _
  e.nodes_start === null && ((e.nodes_start = n), (e.nodes_end = t))
}
function M(n, t) {
  var e = (t & h) !== 0,
    c = (t & E) !== 0,
    a,
    m = !n.startsWith('<!>')
  return () => {
    if (d) return r(o, null), o
    a === void 0 && ((a = y(m ? n : '<!>' + n)), e || (a = f(a)))
    var s = c || p ? document.importNode(a, !0) : a.cloneNode(!0)
    if (e) {
      var l = f(s),
        v = s.lastChild
      r(l, v)
    } else r(s, s)
    return s
  }
}
function N(n = '') {
  if (!d) {
    var t = i(n + '')
    return r(t, t), t
  }
  var e = o
  return e.nodeType !== 3 && (e.before((e = i())), g(e)), r(e, e), e
}
function P() {
  if (d) return r(o, null), o
  var n = document.createDocumentFragment(),
    t = document.createComment(''),
    e = i()
  return n.append(t, e), r(t, e), n
}
function b(n, t) {
  if (d) {
    ;(_.nodes_end = o), T()
    return
  }
  n !== null && n.before(t)
}
const w = '5'
var u
typeof window < 'u' && ((u = window.__svelte ?? (window.__svelte = {})).v ?? (u.v = new Set())).add(w)
export { b as a, r as b, P as c, N as d, M as t }
