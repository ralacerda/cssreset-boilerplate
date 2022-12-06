<script setup lang="ts">
import Option from "options.interface";

const options: Option = {
  basic: false,
  resetLinkDecoration: false,
  resetLinkDecorationWithoutClass: false,
};

const userOptions = useLocalStorage("userOptions", reactive(options));
</script>

<template>
  <main class="container">
    <header>
      <h1>CSS Reset Boiler Plate</h1>
    </header>
    <div class="grid">
      <TheOptions v-model="userOptions" />
      <TheResult :options="userOptions" />
    </div>
  </main>
</template>
