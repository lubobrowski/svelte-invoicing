import { q as f, U as p, V as h, W as E, o as _, h as d, z as o, y as T, G as i, x as y } from './DdvcqIDB.js'
function g(n) {
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
    a === void 0 && ((a = g(m ? n : '<!>' + n)), e || (a = f(a)))
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
  return e.nodeType !== 3 && (e.before((e = i())), y(e)), r(e, e), e
}
function L() {
  if (d) return r(o, null), o
  var n = document.createDocumentFragment(),
    t = document.createComment(''),
    e = i()
  return n.append(t, e), r(t, e), n
}
function P(n, t) {
  if (d) {
    ;(_.nodes_end = o), T()
    return
  }
  n !== null && n.before(t)
}
const x = '5'
var u
typeof window < 'u' && ((u = window.__svelte ?? (window.__svelte = {})).v ?? (u.v = new Set())).add(x)
export { P as a, r as b, L as c, N as d, M as t }
