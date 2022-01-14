<template>
<v-container fluid class="pa-0">
  <v-card
    :height="$vuetify.breakpoint.smAndDown ? '':'346px'"
    elevation="0"
    color="#F2F4F6"
  >
    <v-card-text :class="$vuetify.breakpoint.smAndDown ? 'pa-0' : 'pa-0 pt-6'">
      <v-row>
        <v-col
          lg="10"
          md="10"
          sm="12"
          cols="12"
          :class="$vuetify.breakpoint.smAndDown ? 'my-0 pt-0 pb-0' : 'my-0 pb-0 pt-1'"
        >
          <v-img
            :height="$vuetify.breakpoint.smAndDown ? '196px' : '155px'"
            :aspect-ratio="13/5"
            :src="img"
          ></v-img>
        </v-col>
        <v-col
          v-if="!$vuetify.breakpoint.smAndDown"
          cols="12"
          class="subTituloSimple"
        >
          {{titulo}}
        </v-col>
        <v-col
          v-if="!$vuetify.breakpoint.smAndDown"
          lg="10"
          md="10"
          sm="11"
          cols="11"
          class="textoSimple"
        >
          {{detalle}}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-row v-if="$vuetify.breakpoint.smAndDown" justify="center" style="margin-top: 20px;">
    <v-col
          cols="12"
          class="subTituloSimple text-center mb-6"
        >
          {{titulo}}
        </v-col>
        <v-col
          lg="10"
          md="10"
          sm="11"
          cols="11"
          class="textoSimple mb-5"
        >
          {{detalle}}
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
  }
}
</script>
