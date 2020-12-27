<template>
  <v-app>
    <v-main>
        <AppBar/>
        <h1>Test</h1>
        <Requests/>
    </v-main>
  </v-app>
</template>

<script>
import Requests from './components/Requests.vue'
import AppBar from './components/AppBar.vue'

export default {
  name: 'App',

  components: {
    Requests,
    AppBar
  },

  data: () => ({
    //
  }),
};
</script>
