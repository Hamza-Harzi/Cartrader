<script setup>
definePageMeta({
  layout: "custom",
  // nesta3mlo l middleware bich nehmiw l route wela les page mte3na maynajem yode5lelhom ken ma ya3mel login
  // middleware: 3ayetna lil auth min lfolder middleware li fi westo l file auth
});

const route = useRoute();
const { data: messages } = useFetch(
  `/api/car/listings/${route.params.id}/message`
);
</script>

<template>
  <div class="rounded shadow mt-20">
    {{ data }}
    <CarMessageCard
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
  </div>
</template>
