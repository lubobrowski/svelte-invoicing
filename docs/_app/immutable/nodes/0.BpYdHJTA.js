import { t as g, a as _ } from '../chunks/D3n58O8m.js'
import '../chunks/BxM4WkWX.js'
import { h as y, a as k, x as a, z as t, y as s, af as $ } from '../chunks/B2UK0Pz5.js'
import { s as f } from '../chunks/CRiABWrf.js'
import { b as c } from '../chunks/stiKCeq_.js'
function S(l, e, r, o, v) {
  var n
  y && k()
  var i = (n = e.$$slots) == null ? void 0 : n[r],
    d = !1
  i === !0 && ((i = e.children), (d = !0)), i === void 0 || i(l, d ? () => o : o)
}
const j = !1,
  T = Object.freeze(Object.defineProperty({ __proto__: null, ssr: j }, Symbol.toStringTag, { value: 'Module' }))
var z = g(
  '<div class="navbar bg-indigo-900 text-gray-300 shadow-sm"><div class="flex-1"><a class="btn btn-ghost text-xl"><span class="text-orange-500">Svelte</span> Invoicing</a></div> <div class="flex gap-2"><div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></div> <ul tabindex="-1" class="menu menu-lg dropdown-content bg-base-100 text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow"><li><a>Strona główna</a></li> <li><a>Faktury</a></li> <li><a>Szablony</a></li> <li><a>Wyloguj</a></li></ul></div></div></div>'
)
function M(l) {
  var e = z(),
    r = a(e),
    o = a(r)
  f(o, 'href', `${c ?? ''}/`), t(r)
  var v = s(r, 2),
    i = a(v),
    d = s(a(i), 2),
    n = a(d),
    p = a(n)
  f(p, 'href', `${c ?? ''}/`), t(n)
  var u = s(n, 2),
    m = a(u)
  f(m, 'href', `${c ?? ''}/invoices`), t(u)
  var b = s(u, 2),
    x = a(b)
  f(x, 'href', `${c ?? ''}/templates`), t(b)
  var h = s(b, 2),
    w = a(h)
  f(w, 'href', `${c ?? ''}/logout`), t(h), t(d), t(i), t(v), t(e), _(l, e)
}
var O = g('<!> <!>', 1)
function W(l, e) {
  var r = O(),
    o = $(r)
  M(o)
  var v = s(o, 2)
  S(v, e, 'default', {}), _(l, r)
}
export { W as component, T as universal }
