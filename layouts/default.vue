<template>
  <v-app dark>
    <app-toolbar />
    <v-main>
      <Nuxt />
      <v-btn fab fixed bottom right color="#00E676" dark @click="goToWhatsApp">
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import AppToolbar from '~/components/AppToolbar.vue'
export default {
  components: { AppToolbar, AppFooter },
  name: 'DefaultLayout',
  data: () => ({}),
  methods: {
    goToWhatsApp() {
      window.open(
        'https://api.whatsapp.com/send/?phone=+1956602-5372&text=%C2%A1Hola%20me%20gustaria%20informacion%20sobre%20sus%20servicios!',
        '_blank'
      )
    },
  },
}
</script>
