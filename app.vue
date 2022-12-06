<script setup>
const options = reactive({ basic: false });
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
          v-model="options.basic"
        />
        Border reset
      </label>
    </div>

    <TheResult :options="options" />
  </div>
</template>
