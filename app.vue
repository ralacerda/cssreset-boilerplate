<script setup>
const options = reactive({ basic: false });
</script>

<template>
  <h1>CSS Reset Boiler Plate</h1>
  <div class="grid">
    <TheOptions v-model="options" />
    <TheResult :options="options" />
  </div>
</template>
