<script setup lang="ts">
import { useOptionsStore } from "@/stores/options";

const options = useOptionsStore();
</script>

<template>
  <div>
    <!-- Basic -->
    <RadioOption v-model="options.basic" tooltip="Hello" name="basic">
      Basic option
    </RadioOption>

    <!-- Reset Link -->
    <GroupOption
      v-model="options.resetLinkDecoration"
      name="resetLinkDecoration"
    >
      Remove anchor tag text decoration
      <template #extraOptions>
        <RadioOption
          v-model="options.resetLinkDecorationWithoutClass"
          name="resetLinkDecorationWithoutClass"
          :disabled="!options.resetLinkDecoration"
        >
          Only without class
        </RadioOption>
      </template>
    </GroupOption>
  </div>
</template>
