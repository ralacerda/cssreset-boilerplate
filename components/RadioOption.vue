<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
  name: string;
  tooltip?: string;
  disabled?: boolean;
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
  <label :for="name" :class="{ disabled: disabled }">
    <input
      type="checkbox"
      .id="name"
      .name="name"
      role="switch"
      v-model="option"
      :disabled="disabled"
    />
    <slot />
    <span v-if="tooltip" :data-tooltip="tooltip"> ? </span>
  </label>
</template>

<style>
.disabled {
  opacity: 0.6;
}
</style>
