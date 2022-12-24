<script setup lang="ts">
defineProps(["show"]);
</script>

<template>
  <ClientOnly>
    <Teleport to="#result">
      <code class="language-css" v-show="show">
        <slot />
      </code>
    </Teleport>
  </ClientOnly>
</template>
