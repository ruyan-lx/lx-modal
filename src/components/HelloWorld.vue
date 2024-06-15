<template>
  <h1>{{ msg }}</h1>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()


</script>
<style scoped>

</style>
