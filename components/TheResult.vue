<script setup lang="ts">
import { useOptionsStore } from "@/stores/options";
import "../prism/prism.js";
import "../prism/prism.css";

const options = useOptionsStore();
</script>
<template>
  <pre>
    <code class="language-css" v-show="options.basic">
    p { 
      color: red 
    }
    </code>
    <code class="language-css" v-show="options.resetLinkDecoration">
    a {
      text-decoration-skip-ink: auto;
    }
    </code>
  </pre>
</template>
