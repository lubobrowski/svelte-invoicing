import { t as u, a as f } from '../chunks/D3n58O8m.js'
import '../chunks/BxM4WkWX.js'
import { A as g, B as h, C as x, x as r, z as t, y as _ } from '../chunks/B2UK0Pz5.js'
import { s as i } from '../chunks/aO88gx1_.js'
import { i as b } from '../chunks/Cg8IXsyJ.js'
import { s as k, p as c } from '../chunks/e9rwlafQ.js'
const y = {
  get error() {
    return c.error
  },
  get status() {
    return c.status
  }
}
k.updated.check
const m = y
var $ = u(
  '<div class="card bg-error card-xl m-6 shadow-sm"><div class="card-body"><h2 class="card-title"> </h2> <p> </p></div></div>'
)
function q(d, v) {
  g(v, !1), b()
  var a = $(),
    e = r(a),
    s = r(e),
    n = r(s, !0)
  t(s)
  var o = _(s, 2),
    l = r(o, !0)
  t(o),
    t(e),
    t(a),
    h(() => {
      var p
      i(n, m.status), i(l, (p = m.error) == null ? void 0 : p.message)
    }),
    f(d, a),
    x()
}
export { q as component }
