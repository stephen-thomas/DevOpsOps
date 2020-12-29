<template>
  <v-app>
    <!-- Header & Tab Select -->
      <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-3 basil--text">
            DevOpsOps
          </h1>
        </v-card-title>

        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="basil"
          grow
        >
          <v-tab
            v-for="item in pages"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </v-card>

    <!-- Main Page Content -->
    <v-main v-model="tab">

      <!-- Live Page (Tab) -->
      <div v-if="pages[tab] == 'Live'">
        <Live></Live>
      </div>

      <!-- World Map Page (Tab) -->
      <div v-if="pages[tab] == 'World Map'">
        <WorldMap></WorldMap>
      </div>

      <!-- World Map Page (Tab) -->
      <div v-if="pages[tab] == 'Request Music'">
        <Requests></Requests>
      </div>

    </v-main>
  </v-app>
</template>

<script>
/**
Import Components Here. Components should be stored in the components folder. 

Components for the main page are conditionally rendered based off the value of pages[tab]. Tab is a variable that reprsents the index of the selected string from the 'pages' list in the controller bellow.
*/
import Requests from './components/Requests.vue'
import Live from './components/Live.vue'
import WorldMap from './components/WorldMap.vue'

  export default {
    name: 'App',

    components: {
      Requests,
      Live,
      WorldMap,
    },
    data () {
      return {
        // The following variables hold the state for internal page routing
        tab: 1,
        pages: [
          'Live', 'World Map', 'Request Music',
        ],
      }
    },
  }
</script>

<style>
/* Helper classes */

/* These are styles I found online for the basil color scheme */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>