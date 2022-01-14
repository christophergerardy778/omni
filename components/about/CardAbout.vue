<template>
  <v-container fluid class="pa-0">
    <v-row class="marco" align="center" v-if="$vuetify.breakpoint.smAndDown">
      <v-col cols="7" class="pa-0">
        <v-img
          :aspect-ratio="10/10"
          :src="img"
        />
      </v-col>
      <v-col cols="5" class="subTituloMobile pa-0 pl-3">
        {{titulo}}
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.smAndDown">
      <v-col cols="11" class="textoMobil">
        {{detalle}}
      </v-col>
    </v-row>
    <v-row v-if="!$vuetify.breakpoint.smAndDown">
      <v-col cols="8">
        <div class="subTituloMobile">
          {{titulo}}:
        </div>
        <div class="textoSimple ml-0">
          {{detalle}}
        </div>
      </v-col>
      <v-col cols="4" class="pa-0">
        <v-img
          :aspect-ratio="10/10"
          :src="img"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    titulo: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    detalle: {
      type: String,
      require: true,
    },
  },
}
</script>
