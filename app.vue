<script setup>
const basic = ref(false);
</script>

<template>
  <h1>CSS Reset Boiler Plate</h1>
  <div class="grid">
    <div>
      <label for="switch">
        <input
          type="checkbox"
          id="switch"
          name="switch"
          role="switch"
          v-model="basic"
        />
        Border reset
      </label>
    </div>

    <template v-if="basic">
      <code>Something</code>
    </template>
  </div>
</template>
