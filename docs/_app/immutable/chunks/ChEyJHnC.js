import { L as n, N as c, g as p, h as a, a as g } from './DdvcqIDB.js'
const d = Symbol('is custom element'),
	N = Symbol('is html')
function M(s, r, o, i) {
	var t = h(s)
	;(a &&
		((t[r] = s.getAttribute(r)),
		r === 'src' || r === 'srcset' || (r === 'href' && s.nodeName === 'LINK'))) ||
		(t[r] !== (t[r] = o) &&
			(r === 'loading' && (s[n] = o),
			o == null
				? s.removeAttribute(r)
				: typeof o != 'string' && A(s).includes(r)
					? (s[r] = o)
					: s.setAttribute(r, o)))
}
function h(s) {
	return (
		s.__attributes ??
		(s.__attributes = { [d]: s.nodeName.includes('-'), [N]: s.namespaceURI === c })
	)
}
var f = new Map()
function A(s) {
	var r = f.get(s.nodeName)
	if (r) return r
	f.set(s.nodeName, (r = []))
	for (var o, i = s, t = Element.prototype; t !== i; ) {
		o = g(i)
		for (var _ in o) o[_].set && r.push(_)
		i = p(i)
	}
	return r
}
export { M as s }
