<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-row v-if="$vuetify.breakpoint.smAndDown" justify="center" class="mb-9">
      <v-col
        cols="12"
        class="titulo text-center"
      >
        OMNI Headquarters
      </v-col>
      <v-col cols="12">
        <v-img
          :aspect-ratio="10/10"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        />
      </v-col>
      <v-col cols="10" class="parrafoContact">
        With offices across the Unites States and Mexico, we will work with you to find solutions in your region.
      </v-col>
      <v-col cols="10" class="textoSimple ml-0">
        <div v-html="Unites"> </div>
      </v-col>
      <v-col cols="10" class="textoSimple ml-0">
        <div v-html="Mex"> </div>
      </v-col>
    </v-row>
    <v-card v-else elevation="0" color="#F2F4F6">
      <v-img
        :aspect-ratio="16/7"
        max-height="500px"
        contain
        position="right"
        src="https://res.cloudinary.com/di5ipzjgm/image/upload/v1642007964/Develop/AboutUs__Headquarters504x419_hnseu2.png">
        <v-row justify="center" class="mt-4">
          <v-col lg="8" md="10" cols="10" class="subTituloSimple">
            OMNI Headquarters
          </v-col>
          <v-col lg="8" md="10" cols="10" class="parrafoContact pl-4 mt-1">
            <div style="max-width: 237px;">
              With offices across the Unites States and Mexico, we will work with you to find solutions in your region.
            </div>
            <div v-html="Unites" class="mt-4"></div>
            <div v-html="Mex" class="mt-4"></div>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      Unites: '<b>Unites States</b> <br/> Laredo Texas <br/> Fresno California',
      Mex: '<b>México</b> <br/> Nuevo Laredo Tamaulipas',
    }
  }
}
</script>
