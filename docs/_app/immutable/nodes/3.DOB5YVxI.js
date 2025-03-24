import { t as x, a as _ } from '../chunks/W-T0yYy1.js'
import '../chunks/D-sHlrmk.js'
import { s as t, d as s, n as h, r as a } from '../chunks/DdvcqIDB.js'
import { s as g } from '../chunks/ChEyJHnC.js'
import { b as p } from '../chunks/CFxZUInS.js'
var I = x(
  '<div class="card card-sm bg-base-100 shadow-sm"><div class="card-body"><div class="grid grid-cols-2"><h2 class="card-title text-xl">Nr 14/2025</h2> <p class="text-right text-lg font-semibold">2025-02-28</p> <p class="mt-2 text-sm"></p> <p class="mt-2 text-right text-lg font-bold">12 364,50 PLN</p></div> <div class="justify-end card-actions"><button class="btn btn-sm btn-square"><img alt="Drukuj" class="w-5"></button> <button class="btn btn-sm btn-square"><img alt="Szczegóły" class="w-5"></button></div></div></div>'
)
function c(d) {
  const n = `SZPITAL SPECJALISTYCZNY IM. ŚWIĘTEJ RODZINY				
SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ`
  var o = I(),
    b = s(o),
    i = s(b),
    l = t(s(i), 4)
  ;(l.textContent = n), h(2), a(i)
  var v = t(i, 2),
    r = s(v),
    m = s(r)
  g(m, 'src', `${p ?? ''}/icons/printer.svg`), a(r)
  var e = t(r, 2),
    u = s(e)
  g(u, 'src', `${p ?? ''}/icons/view-show.svg`), a(e), a(v), a(b), a(o), _(d, o)
}
var w = x(
  '<div class="join mx-auto shadow-md"><button class="join-item btn btn-sm">«</button> <button class="join-item btn btn-sm">Strona 3 / 7</button> <button class="join-item btn btn-sm">»</button></div>'
)
function f(d) {
  var n = w()
  _(d, n)
}
var y = x(
  '<div class="grid grid-cols-1 px-2 gap-y-3"><div class="grid grid-cols-2 mx-4 my-4"><h2 class="text-3xl font-semibold">Faktury</h2> <a class="btn btn-lg btn-secondary">Wystaw nową</a></div> <!> <!> <!> <!> <!> <!> <!></div>'
)
function A(d) {
  var n = y(),
    o = s(n),
    b = t(s(o), 2)
  g(b, 'href', `${p ?? ''}/invoices/new`), a(o)
  var i = t(o, 2)
  f(i)
  var l = t(i, 2)
  c(l)
  var v = t(l, 2)
  c(v)
  var r = t(v, 2)
  c(r)
  var m = t(r, 2)
  c(m)
  var e = t(m, 2)
  c(e)
  var u = t(e, 2)
  f(u), a(n), _(d, n)
}
export { A as component }
