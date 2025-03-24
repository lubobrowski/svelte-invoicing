import { t as g, a as _ } from '../chunks/W-T0yYy1.js'
import '../chunks/D-sHlrmk.js'
import { h as y, y as k, d as a, r as t, s, X as $ } from '../chunks/DdvcqIDB.js'
import { s as f } from '../chunks/ChEyJHnC.js'
import { b as c } from '../chunks/CFxZUInS.js'
function S(l, e, r, o, d) {
	var n
	y && k()
	var i = (n = e.$$slots) == null ? void 0 : n[r],
		v = !1
	i === !0 && ((i = e.children), (v = !0)), i === void 0 || i(l, v ? () => o : o)
}
const j = !1,
	T = Object.freeze(
		Object.defineProperty({ __proto__: null, ssr: j }, Symbol.toStringTag, { value: 'Module' })
	)
var M = g(
	'<div class="navbar bg-indigo-900 text-gray-300 shadow-sm"><div class="flex-1"><a class="btn btn-ghost text-xl"><span class="text-orange-500">Svelte</span> Invoicing</a></div> <div class="flex gap-2"><div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></div> <ul tabindex="-1" class="menu menu-lg dropdown-content bg-base-100 text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow"><li><a>Strona główna</a></li> <li><a>Faktury</a></li> <li><a>Szablony</a></li> <li><a>Wyloguj</a></li></ul></div></div></div>'
)
function z(l) {
	var e = M(),
		r = a(e),
		o = a(r)
	f(o, 'href', `${c ?? ''}/`), t(r)
	var d = s(r, 2),
		i = a(d),
		v = s(a(i), 2),
		n = a(v),
		p = a(n)
	f(p, 'href', `${c ?? ''}/`), t(n)
	var u = s(n, 2),
		m = a(u)
	f(m, 'href', `${c ?? ''}/invoices`), t(u)
	var b = s(u, 2),
		w = a(b)
	f(w, 'href', `${c ?? ''}/templates`), t(b)
	var h = s(b, 2),
		x = a(h)
	f(x, 'href', `${c ?? ''}/logout`), t(h), t(v), t(i), t(d), t(e), _(l, e)
}
var O = g('<!> <!>', 1)
function W(l, e) {
	var r = O(),
		o = $(r)
	z(o)
	var d = s(o, 2)
	S(d, e, 'default', {}), _(l, r)
}
export { W as component, T as universal }
