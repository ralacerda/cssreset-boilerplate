<script setup lang="ts">
interface Options {
  basic: boolean;
}

defineProps<{
  options: Options;
}>();
</script>
<template>
  <template v-if="options.basic">
    <code>Something</code>
  </template>
</template>
