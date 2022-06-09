<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const routes = useRoute()
const path = computed(() => routes.path)
</script>

<template>
  <router-view :key="path" v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<style></style>
