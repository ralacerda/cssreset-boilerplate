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
  <div>
    <RadioOption v-model="options.basic" tooltip="Hello" name="basic">
      Basic option
    </RadioOption>

    <RadioOption
      v-model="options.resetLinkDecoration"
      name="resetLinkDecoration"
    >
      Remove anchor tag text decoration
    </RadioOption>

    <RadioOption
      v-model="options.resetLinkDecorationWithoutClass"
      name="resetLinkDecoration"
    >
      Only without class
    </RadioOption>
  </div>
</template>
