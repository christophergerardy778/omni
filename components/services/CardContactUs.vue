<template>
  <v-card v-if="!$vuetify.breakpoint.smAndDown" class="mb-12" color="#F4F4F4" elevation="0">
    <v-card-text class="pb-12">
      <v-row justify="center">
        <v-col cols="5">
          <v-row>
            <v-col cols="12" class="titulo">
              Contact us
            </v-col>
            <v-col cols="12" class="parrafoContact">
              Find out how we can help out and bring solutions to all your logistic needs.
            </v-col>
            <v-col cols="12" class="text-right">
              <v-btn dark raised color="#E30707">More info</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="5">
          <v-img
            :aspect-ratio="16/10"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-row v-else justify="center" class="mb-12">
    <v-col cols="11">
      <v-img
            :aspect-ratio="$vuetify.breakpoint.smAndDown ? 11/10 : 16/10"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          />
    </v-col>
    <v-col cols="11" class="titulo text-center">
              Contact us <v-btn class="ml-2" small color="#2E51FF"> <v-icon color="white">mdi-arrow-right</v-icon></v-btn>
            </v-col>
            <v-col cols="11" class="parrafoContact">
              Find out how we can help out and bring solutions to all your logistic needs.
            </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
