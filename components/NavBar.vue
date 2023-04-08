<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
// in logout func we will do 1-make user.value = null 2- romove jwt from cokies browser 3- navigate to homepage
const Logout = async () => {
  //1-make user.value = null
  //2- romove jwt from cokies browser
  const { error } = supabase.auth.signOut();

  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: { event: "SIGNED_OUT", session: null },
    });
  } catch (error) {
    return console.log(error);
  }
  // Implementing the Logout Functionality
  user.value = null;
  navigateTo("/");

  if (error) {
    console.log(error);
  }
};
</script>
<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink class="mr-5" to="/profile/listings">Profile</NuxtLink>
      <p class="cursor-pointer" @click="Logout">Logout</p>
    </div>
    <NuxtLink v-else class="/login">Login</NuxtLink>
  </header>
</template>
