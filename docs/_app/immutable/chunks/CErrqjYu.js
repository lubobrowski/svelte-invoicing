import { l as o, k as t, I as c, n as l } from './B2UK0Pz5.js'
function u(n) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component')
}
function r(n) {
  t === null && u(),
    c && t.l !== null
      ? a(t).m.push(n)
      : o(() => {
          const e = l(n)
          if (typeof e == 'function') return e
        })
}
function a(n) {
  var e = n.l
  return e.u ?? (e.u = { a: [], b: [], m: [] })
}
export { r as o }
