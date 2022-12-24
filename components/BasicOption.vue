<script setup lang="ts">
import { useOptionsStore } from "@/stores/options";
const options = useOptionsStore();
</script>

<template>
  <BaseResult :show="options.basic">
    <!-- prettier-ignore -->
    p {
      color: red;
    }
  </BaseResult>
</template>
