<script setup lang="ts">
import Option from "options.interface";

const options: Option = reactive({
  basic: false,
  resetLinkDecoration: false,
  resetLinkDecorationWithoutClass: false,
});
</script>

<template>
  <main class="container">
    <header>
      <h1>CSS Reset Boiler Plate</h1>
    </header>
    <div class="grid">
      <TheOptions v-model="options" />
      <TheResult :options="options" />
    </div>
  </main>
</template>
