<template>
  <div class="view">
    <login />
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'HomeView',
  components: { Login }
}
</script>

<style scoped lang="scss">
.view {
    height: 100%;
}

@media (min-width: 2500px) {
    .view {
        display: flex;
        align-items: center;

        &:deep(.wrapper) {
            margin-top: 0;
        }
    }
}
</style>
