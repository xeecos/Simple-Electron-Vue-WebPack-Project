<template>
  <main-layout>
    <p>Welcome user {{ $route.params.id }}</p>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    }
  }
</script>
