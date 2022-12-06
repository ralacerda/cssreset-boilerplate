<script setup lang="ts">
import Options from "../options.interface";

defineProps<{
  options: Options;
}>();
</script>
<template>
  <code>
    <template v-if="options.basic"> Something </template>
    <template v-if="options.resetLinkDecoration">
      <pre>
a<template v-if="options.resetLinkDecorationWithoutClass">:not([class])</template> {
  text-decoration-skip-ink: auto;
}     </pre>
    </template>
  </code>
</template>
