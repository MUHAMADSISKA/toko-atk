<template>
  <div id="app">
      <Navbar />
      <router-view />
  </div>
</template>

<script>
import Navbar from './components/AppNavbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
      Navbar
  }
});
</script>