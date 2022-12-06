<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
  tooltip?: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const option = computed({
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
      v-model="option"
    />
    <slot />
    <span v-if="tooltip" :data-tooltip="tooltip"> ? </span>
  </label>
</template>
