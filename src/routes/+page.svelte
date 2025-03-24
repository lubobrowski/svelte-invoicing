<script>
  import LoginForm from '../lib/components/LoginForm.svelte'
</script>

<div class="hero bg-base-300 min-h-screen">
  <div class="hero-content flex-col">
    <div class="">
      <h1 class="text-5xl font-bold">Logowanie</h1>
      <p class="py-6">Proszę się zalogować żeby móc korzystać z tej strony.</p>
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <LoginForm />
      </div>
    </div>
  </div>
</div>
