<template>
  
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="228"
            >
              <h1>Location</h1>
              <p>{{city}}</p>
              <p>{{country}}</p>
              <p>{{region}}</p>
              <p>{{ip}}</p>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              id="parent"
              min-height="70vh"
              rounded="lg"
            >
              <svg height="100%" width="100%" id="my_dataviz"></svg>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import * as d3 from 'd3v4';
import axios from 'axios';

export default {
  name: "WorldMap",
  data() {
    return {
      location: null,
      errorStr: null,
      city: null,
      country: null,
      ip: null,
      hostname: null,
      timezone: null,
      region: null,
    }
  },

  methods: {
    renderMap(error, dataGeo){
        // The svg
        var svg = d3.select("#my_dataviz")
        svg.attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 960 500");
        
        var width = 766;
        var height = 662.188;

        // Map and projection
        var projection = d3.geoMercator()
            .scale(100)
            .translate([ width / 2, height / 2 ])

        // Draw the map
        svg.append("g")
            .selectAll("path")
            .data(dataGeo.features)
            .enter()
            .append("path")
              .attr("fill", "#b8b8b8")
              .attr("d", d3.geoPath()
                  .projection(projection)
              )
            .style("stroke", "none")
            .style("opacity", 1)

          }
  },

  // Retrieve Users Location At Startup to Populate Heatmap
  created(){
    const url = 'http://ipinfo.io/json?token=7c783b82a63603';
    axios.get(url).then(response => {
      this.location = response.data;
      this.city = this.location.city;
      this.country = this.location.country;
      this.ip = this.location.ip;
      this.hostname = this.location.hostname;
      this.timezone = this.location.timezone;
      this.region = this.location.region;
    })

  },
  mounted(){
    d3.queue()
      .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")  // World shape
      .defer(d3.csv, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_gpsLocSurfer.csv") // Position of circles
      .await(this.renderMap);

  }
}
</script>
