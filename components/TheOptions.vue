<script setup lang="ts">
import Options from "../options.interface";

const props = defineProps<{
  modelValue: Options;
}>();

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
  <RadioOption v-model="options.basic" tooltip="Hello">
    Basic option
  </RadioOption>
</template>
