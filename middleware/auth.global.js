export default defineNuxtRouteMiddleware((to, from) => {
  // nesta3mlo l middleware bich nehmiw l route wela les page mte3na maynajem yode5lelhom ken ma ya3mel login
  if (to.path.includes("profile")) {
    const user = useSupabaseUser();
    if (user.value) {
      return;
    }
    return navigateTo("/login");
  }
});
