export default defineNuxtRouteMiddleware((to, from) => {
    // console.log(to);
    // console.log(from);

    //logica de autenticacao seria colocado aqui, mude para false, para ver o bloquear.
    const isLoggedIn = true;

  if (!isLoggedIn) {
    return navigateTo('/login')
  }
})
