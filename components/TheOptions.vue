<script setup lang="ts">
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const options = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
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
</template>
