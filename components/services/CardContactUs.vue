<template>
  <v-card
    v-if="!$vuetify.breakpoint.smAndDown"
    class="mb-12"
    color="#F4F4F4"
    elevation="0"
  >
    <v-card-text class="pb-12">
      <v-row justify="center">
        <v-col cols="5">
          <v-row>
            <v-col cols="12" class="titulo">
              {{ $t('services.contact') }}
            </v-col>
            <v-col cols="12" class="parrafoContact">
              {{ $t('services.c_subtitle') }}
            </v-col>
            <v-col cols="12" class="text-right">
              <v-btn
                dark
                raised
                color="#E30707"
                @click="localePathEx('contact-us')"
                >{{ $t('services.c_btn') }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="5">
          <v-img
            :aspect-ratio="16 / 10"
            src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133103/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Contact%20Us/CONTACT_US_ingles_zxum9o.png"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-row v-else justify="center" class="mb-12">
    <v-col cols="11">
      <v-img
        :aspect-ratio="$vuetify.breakpoint.smAndDown ? 11 / 10 : 16 / 10"
        src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133103/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Contact%20Us/CONTACT_US_ingles_zxum9o.png"
      />
    </v-col>
    <v-col cols="11" class="titulo text-center">
      {{ $t('services.contact') }}
      <v-btn
        class="ml-2"
        small
        color="#2E51FF"
        @click="localePathEx('contact-us')"
      >
        <v-icon color="white">mdi-arrow-right</v-icon></v-btn
      >
    </v-col>
    <v-col cols="11" class="parrafoContact">
      {{ $t('services.c_subtitle') }}
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    localePathEx(route) {
      this.$router.push(this.localePath(route))
    },
  },
}
</script>
