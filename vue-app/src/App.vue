<template>
  <v-app>
    <v-main>
        <AppBar/>
        <h1>Test</h1>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
export default {
  name: 'App',

  components: {
      AppBar
  },

  data: () => ({
    //
  }),
};
</script>
