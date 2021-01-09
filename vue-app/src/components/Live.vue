<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-layout row wrap>
          <v-col v-for="person in team" :key="person.name">
            <v-card class="text-center ma-3">
              <v-responsive class='pt-2'>
                <v-img>
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                </v-img>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{person.name}}</div>
                <div class="grey--text">{{person.job}}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="grey">
                  <v-icon small center></v-icon>
                  <span>Go To Video</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-layout>  
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        team: [
          {name:'Dominic', job:'winning'},
          {name:'kyle', job:'running'},
          {name:'stan', job:'jumping'},
          {name:'Dominic', job:'winning'},
          {name:'kyle', job:'running'},
          {name:'stan', job:'jumping'},
          {name:'Dominic', job:'winning'},
          {name:'kyle', job:'running'},
          {name:'stan', job:'jumping'},
          {name:'Dominic', job:'winning'},
          {name:'kyle', job:'running'},
          {name:'stan', job:'jumping'},
        ]
      }
    }
  }
</script>
