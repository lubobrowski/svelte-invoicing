import { t as _, a as x } from '../chunks/D3n58O8m.js'
import '../chunks/BxM4WkWX.js'
import { A as E, x as a, z as e, y as r, B as H, C as F, o as i, D as B, F as k } from '../chunks/B2UK0Pz5.js'
import { i as C } from '../chunks/_tsBNSNM.js'
import { f as M, e as N, i as S, l as P } from '../chunks/CFhPmK0h.js'
import { s as z } from '../chunks/CRiABWrf.js'
import { i as V } from '../chunks/Cg8IXsyJ.js'
import { o as Y } from '../chunks/CErrqjYu.js'
import { b as I } from '../chunks/stiKCeq_.js'
import { s as j } from '../chunks/aO88gx1_.js'
var G = _(
  '<div class="card card-sm bg-base-100 shadow-sm"><div class="card-body"><div class="grid grid-cols-2"><h2 class="card-title text-xl"> </h2> <p class="text-right text-lg font-semibold"> </p> <p class="mt-2 text-sm"> </p> <p class="mt-2 text-right text-lg font-bold"> </p></div> <div class="card-actions justify-end"><button class="btn btn-sm btn-square"><img alt="Drukuj" class="w-5"></button> <button class="btn btn-sm btn-square"><img alt="Szczegóły" class="w-5"></button></div></div></div>'
)
function J(L, n) {
  E(n, !0)
  var s = G(),
    v = a(s),
    m = a(v),
    o = a(m),
    u = a(o)
  e(o)
  var c = r(o, 2),
    w = a(c, !0)
  e(c)
  var l = r(c, 2),
    h = a(l, !0)
  e(l)
  var g = r(l, 2),
    q = a(g, !0)
  e(g), e(m)
  var f = r(m, 2),
    p = a(f),
    y = a(p)
  z(y, 'src', `${I ?? ''}/icons/printer.svg`), e(p)
  var D = r(p, 2),
    b = a(D)
  z(b, 'src', `${I ?? ''}/icons/view-show.svg`),
    e(D),
    e(f),
    e(v),
    e(s),
    H(
      (A) => {
        j(u, `Nr ${n.invoice.number ?? ''}`), j(w, n.invoice.issueDate), j(h, n.invoice.customerData), j(q, A)
      },
      [() => M(n.invoice.totalValue)]
    ),
    x(L, s),
    F()
}
var K = _('<p class="loading loading-spinner loading-xl mx-auto mt-4 text-center"></p>'),
  O = _('<p class="text-center">Nie ma więcej do wyświetlenia.</p>'),
  Q = _('<p>Brak faktur do wyświetlenia.</p>'),
  R = _(
    '<div class="grid grid-cols-1 gap-y-3 px-2 pb-24"><div class="mx-4 my-4 grid grid-cols-2"><h2 class="text-3xl font-semibold">Faktury</h2></div> <!> <!> <!> <!> <a class="fixed btn btn-secondary btn-xl rounded-2xl bottom-5 right-5"><img alt="Dodaj" class="w-7"></a></div>'
  )
function st(L, n) {
  E(n, !1)
  let s = B([]),
    v = 0
  const m = 5
  let o = B(!1),
    u = B(!1)
  async function c() {
    if (i(o) || i(u)) return
    k(o, !0)
    const t = await P(v, m)
    t.length === 0 ? k(u, !0) : (k(s, [...i(s), ...t]), (v += 1)), k(o, !1)
  }
  function w() {
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && c()
  }
  Y(
    () => (
      c(),
      window.addEventListener('scroll', w),
      () => {
        window.removeEventListener('scroll', w)
      }
    )
  ),
    V()
  var l = R(),
    h = r(a(l), 2)
  N(
    h,
    1,
    () => i(s),
    S,
    (t, d) => {
      J(t, {
        get invoice() {
          return i(d)
        }
      })
    }
  )
  var g = r(h, 2)
  {
    var q = (t) => {
      var d = K()
      x(t, d)
    }
    C(g, (t) => {
      i(o) && t(q)
    })
  }
  var f = r(g, 2)
  {
    var p = (t) => {
      var d = O()
      x(t, d)
    }
    C(f, (t) => {
      i(u) && i(s).length > 0 && t(p)
    })
  }
  var y = r(f, 2)
  {
    var D = (t) => {
      var d = Q()
      x(t, d)
    }
    C(y, (t) => {
      i(s).length === 0 && t(D)
    })
  }
  var b = r(y, 2)
  z(b, 'href', `${I ?? ''}/invoices/new`)
  var A = a(b)
  z(A, 'src', `${I ?? ''}/icons/document-add.svg`), e(b), e(l), x(L, l), F()
}
export { st as component }
