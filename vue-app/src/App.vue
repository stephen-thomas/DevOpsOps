<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>

    </v-app-bar>
    
    <v-main>
        <h1>Test</h1>

        <Requests/>

    </v-main>
  </v-app>
</template>


<script>

import Requests from './components/Requests.vue'

export default {
  name: 'App',

  components: {
    Requests
  },

  data: () => ({
    //
  }),
};
</script>
