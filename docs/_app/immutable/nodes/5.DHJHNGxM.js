import { t as x, a as y } from '../chunks/W-T0yYy1.js'
import '../chunks/D-sHlrmk.js'
import { d as t, s as a, n as _, r as s } from '../chunks/DdvcqIDB.js'
import { s as b } from '../chunks/ChEyJHnC.js'
import { b as p } from '../chunks/CFxZUInS.js'
var h = x(
  '<div class="card card-sm bg-base-100 shadow-sm"><div class="card-body"><div class="grid grid-cols-2"><p class="mt-2 text-sm"></p> <div><p class="mt-2 text-sm"></p> <p class="mt-2 text-sm font-semibold">93,00 PLN / h</p></div></div> <div class="card-actions"><button class="btn btn-sm btn-square"><img alt="Edytuj" class="w-5"></button> <button class="btn btn-sm btn-square"><img alt="Edytuj" class="w-5"></button> <button class="btn btn-md ml-auto">Wystaw fakturę</button></div></div></div>'
)
function c(m) {
  const i = `SZPITAL SPECJALISTYCZNY IM. ŚWIĘTEJ RODZINY				
SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ`,
    o = 'Usługi pielęgniarskie na podstawie umowy 351/2024'
  var n = h(),
    d = t(n),
    r = t(d),
    v = t(r)
  v.textContent = i
  var e = a(v, 2),
    f = t(e)
  ;(f.textContent = o), _(2), s(e), s(r)
  var u = a(r, 2),
    l = t(u),
    w = t(l)
  b(w, 'src', `${p ?? ''}/icons/compose.svg`), s(l)
  var g = a(l, 2),
    I = t(g)
  b(I, 'src', `${p ?? ''}/icons/trash.svg`), s(g), _(2), s(u), s(d), s(n), y(m, n)
}
var E = x(
  '<div class="grid grid-cols-1 px-2 gap-y-3"><div class="grid grid-cols-2 mx-4 my-4"><h2 class="text-3xl font-semibold">Szablony</h2> <a class="btn btn-lg btn-secondary">Stwórz nowy</a></div> <!> <!> <!> <!></div>'
)
function L(m) {
  var i = E(),
    o = t(i),
    n = a(t(o), 2)
  b(n, 'href', `${p ?? ''}/invoices/new`), s(o)
  var d = a(o, 2)
  c(d)
  var r = a(d, 2)
  c(r)
  var v = a(r, 2)
  c(v)
  var e = a(v, 2)
  c(e), s(i), y(m, i)
}
export { L as component }
