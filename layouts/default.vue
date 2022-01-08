<template>
  <v-app dark>
    <app-toolbar />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import AppToolbar from '~/components/AppToolbar.vue'
export default {
  components: { AppToolbar },
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
