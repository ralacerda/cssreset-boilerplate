<script setup lang="ts">
import { useOptionsStore } from "@/stores/options";
const options = useOptionsStore();
</script>

<template>
  <BaseResult
    :show="
      options.resetLinkDecoration && !options.resetLinkDecorationWithoutClass
    "
  >
    <!-- prettier-ignore -->
    a {
      text-decoration: none;
    }
  </BaseResult>
  <BaseResult
    :show="
      options.resetLinkDecoration && options.resetLinkDecorationWithoutClass
    "
  >
    <!-- prettier-ignore -->
    a:not[class] {
      text-decoration: none;
    }
  </BaseResult>
</template>
