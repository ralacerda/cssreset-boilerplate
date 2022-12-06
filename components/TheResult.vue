<script setup lang="ts">
import Options from "../options.interface";

defineProps<{
  options: Options;
}>();
</script>
<template>
  <template v-if="options.basic">
    <code>Something</code>
  </template>
</template>
