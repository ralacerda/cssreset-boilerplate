<script setup lang="ts">
import { useOptionsStore } from "@/stores/options";

const options = useOptionsStore();
</script>
<template>
  <code>
    <!-- Basic -->
    <template v-if="options.basic"> Something </template>

    <!-- Reset Link -->
    <template v-if="options.resetLinkDecoration">
      <pre>
a<template v-if="options.resetLinkDecorationWithoutClass">:not([class])</template> {
  text-decoration-skip-ink: auto;
}     </pre>
    </template>
  </code>
</template>
