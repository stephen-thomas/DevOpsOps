<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-layout row wrap>
          <v-col v-for="video in videoData" :key="video.id.videoId">
            <v-card max-width="300" class="text-center ma-3">
              <v-responsive class='pt-2'>
                <v-img :src="video.snippet.thumbnails.high.url"></v-img>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{video.snippet.title}}</div>
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
  import json from '../json/test_data.json'
  export default {
    data() {
      return {
        videoData: json.items
      }
    }
  }
</script>
