import { t as d, a as r } from '../chunks/W-T0yYy1.js'
import '../chunks/D-sHlrmk.js'
import { d as s, s as c, r as l } from '../chunks/DdvcqIDB.js'
var v = d(
	'<fieldset class="fieldset"><label class="fieldset-label" for="email">Email</label> <input id="email" type="email" class="input" placeholder="Email"> <label for="password" class="fieldset-label">Hasło</label> <input id="password" type="password" class="input" placeholder="Hasło"> <div><a class="link link-hover" href="/">Przypomnij hasło?</a></div> <button class="btn btn-lg btn-secondary mt-4">Zaloguj</button></fieldset>'
)
function p(e) {
	var a = v()
	r(e, a)
}
var b = d(
	'<div class="hero bg-base-300 min-h-screen"><div class="hero-content flex-col"><div><h1 class="text-5xl font-bold">Logowanie</h1> <p class="py-6">Proszę się zalogować żeby móc korzystać z tej strony.</p></div> <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"><div class="card-body"><!></div></div></div></div>'
)
function u(e) {
	var a = b(),
		i = s(a),
		o = c(s(i), 2),
		t = s(o),
		n = s(t)
	p(n), l(t), l(o), l(i), l(a), r(e, a)
}
export { u as component }
