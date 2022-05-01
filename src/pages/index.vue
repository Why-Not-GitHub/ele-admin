<script lang="ts" setup>
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
</script>
<template>
  <div class="index-page">
    x: {{x}}  y: {{y}}
  </div>
</template>

<style scoped lang="scss">

</style>
