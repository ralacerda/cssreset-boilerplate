<script setup lang="ts">
import { useOptionsStore } from "@/stores/options";
import "../prism/prism.js";
import "../prism/prism.css";

const options = useOptionsStore();
</script>

<template>
  <pre id="result" />
  <BasicOption />
  <ResetLinkDecoration />
</template>
