<template>
  <v-container fluid class="pa-0">
    <v-card
    :height="$vuetify.breakpoint.smAndDown ? '198px':'367px'"
    color="#F2F4F6"
  >
    <v-card-text :class="$vuetify.breakpoint.smAndDown ? 'py-0 pl-3':'pt-0'">
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          :class="$vuetify.breakpoint.smAndDown ? 'pa-0':''"
          lg="11"
          md="11"
          sm="6"
          cols="6"
        >
          <v-img
            :height="$vuetify.breakpoint.smAndDown ? '198px' : '155px'"
            :aspect-ratio="13/5"
            :src="img"
          ></v-img>
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.smAndDown"
          cols="6"
        >
          <v-row>
            <v-col
              cols="12"
              class="subTituloMobile text-center"
            >
              {{titulo}}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row v-if="!$vuetify.breakpoint.smAndDown">
        <v-col
          cols="12"
          class="subTituloSimple"
        >
          {{titulo}}
        </v-col>
        <v-col
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
  <v-row class="mt-3 px-4" v-if="$vuetify.breakpoint.smAndDown">
    <v-col cols="12" class="textoMobil">
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
  },
}
</script>
<style scoped>
.subTituloSimple {
  font-size: 24px;
  color: #071c87;
  margin: 14px 0 0 12px;
  padding-top: 0px;
  padding-bottom: 0px;
  /* padding: 0 0 0 0; */
  font-weight: 600;
  line-height: 32px;
}
.subTituloMobile {
  font-size: 20px;
  color: #071c87;
  padding-top: 0px;
  padding-bottom: 0px;
  font-weight: 600;
  line-height: 32px;
}
.textoSimple {
  font-size: 16px;
  line-height: 26px;
  margin: 8px 0 0 12px;
  padding-top: 0px;
  color: black;
  font-weight: normal;
}
.textoMobil {
  font-size: 18px;
  line-height: 26px;
  margin: 8px 0 0 12px;
  padding-top: 0px;
  color: black;
  font-weight: normal;
}
</style>
