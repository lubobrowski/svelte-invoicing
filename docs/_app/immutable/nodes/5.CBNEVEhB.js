import { t as _, a as w } from '../chunks/D3n58O8m.js'
import '../chunks/BxM4WkWX.js'
import { A, x as a, z as e, y as i, G as M, B as S, C as B, o, D as L, F as h } from '../chunks/B2UK0Pz5.js'
import { i as T } from '../chunks/_tsBNSNM.js'
import { f as $, e as F, i as G, a as N } from '../chunks/CFhPmK0h.js'
import { s as y } from '../chunks/CRiABWrf.js'
import { i as P } from '../chunks/Cg8IXsyJ.js'
import { o as R } from '../chunks/CErrqjYu.js'
import { b as j } from '../chunks/stiKCeq_.js'
import { s as q } from '../chunks/aO88gx1_.js'
var W = _(
  '<div class="card card-sm bg-base-100 shadow-sm"><div class="card-body"><div class="grid grid-cols-2"><p class="mt-2 text-sm"> </p> <div><p class="mt-2 text-sm font-semibold"> </p></div></div> <div class="card-actions"><button class="btn btn-sm btn-square"><img alt="Edytuj" class="w-5"></button> <button class="btn btn-sm btn-square"><img alt="Edytuj" class="w-5"></button> <button class="btn btn-md ml-auto">Wystaw fakturę</button></div></div></div>'
)
function Y(D, d) {
  A(d, !0)
  var s = W(),
    m = a(s),
    v = a(m),
    r = a(v),
    c = a(r, !0)
  e(r)
  var p = i(r, 2),
    u = a(p),
    b = a(u)
  e(u), e(p), e(v)
  var f = i(v, 2),
    l = a(f),
    E = a(l)
  y(E, 'src', `${j ?? ''}/icons/compose.svg`), e(l)
  var g = i(l, 2),
    k = a(g)
  y(k, 'src', `${j ?? ''}/icons/trash.svg`),
    e(g),
    M(2),
    e(f),
    e(m),
    e(s),
    S(
      (x) => {
        q(c, d.template.customerData), q(b, `${x ?? ''} / h`)
      },
      [() => $(d.template.hourlyRate)]
    ),
    w(D, s),
    B()
}
var I = _('<p class="loading loading-spinner loading-xl mx-auto mt-4 text-center"></p>'),
  J = _('<p class="text-center">Nie ma więcej do wyświetlenia.</p>'),
  K = _('<p>Brak szablonów do wyświetlenia.</p>'),
  O = _(
    '<div class="grid grid-cols-1 gap-y-3 px-2 pb-24"><div class="mx-4 my-4 grid grid-cols-2"><h2 class="text-3xl font-semibold">Szablony</h2></div> <!> <!> <!> <!> <a class="fixed btn btn-secondary btn-xl rounded-2xl bottom-5 right-5"><img alt="Dodaj" class="w-7"></a></div>'
  )
function rt(D, d) {
  A(d, !1)
  let s = L([]),
    m = 0
  const v = 5
  let r = L(!1),
    c = L(!1)
  async function p() {
    if (o(r) || o(c)) return
    h(r, !0)
    const t = await N(m, v)
    t.length === 0 ? h(c, !0) : (h(s, [...o(s), ...t]), (m += 1)), h(r, !1)
  }
  function u() {
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && p()
  }
  R(
    () => (
      p(),
      window.addEventListener('scroll', u),
      () => {
        window.removeEventListener('scroll', u)
      }
    )
  ),
    P()
  var b = O(),
    f = i(a(b), 2)
  F(
    f,
    1,
    () => o(s),
    G,
    (t, n) => {
      Y(t, {
        get template() {
          return o(n)
        }
      })
    }
  )
  var l = i(f, 2)
  {
    var E = (t) => {
      var n = I()
      w(t, n)
    }
    T(l, (t) => {
      o(r) && t(E)
    })
  }
  var g = i(l, 2)
  {
    var k = (t) => {
      var n = J()
      w(t, n)
    }
    T(g, (t) => {
      o(c) && o(s).length > 0 && t(k)
    })
  }
  var x = i(g, 2)
  {
    var C = (t) => {
      var n = K()
      w(t, n)
    }
    T(x, (t) => {
      o(s).length === 0 && t(C)
    })
  }
  var z = i(x, 2)
  y(z, 'href', `${j ?? ''}/templates/new`)
  var H = a(z)
  y(H, 'src', `${j ?? ''}/icons/add-outline.svg`), e(z), e(b), w(D, b), B()
}
export { rt as component }
