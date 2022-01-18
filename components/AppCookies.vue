<template>
  <v-navigation-drawer v-if="drawer"
    :width="$vuetify.breakpoint.smAndDown ? '' : '472px'"
    :style="$vuetify.breakpoint.smAndDown ? 'height: 400px;':''"
    v-model="drawer"
    absolute
    temporary
    permanent
    bottom
    app
  >
    <v-row
      :style="
        $vuetify.breakpoint.smAndDown
          ? 'margin-top: 10px;'
          : 'margin-top: 150px;'
      "
      justify="center"
    >
      <v-col class="cookiesTitle" cols="10" v-html="title"> </v-col>
      <v-col class="cookiesContenido" cols="10">
        Los datos recopilados NO identifican a los usuarios. Utilizamos cookies
        propias y de terceros con finalidades analíticas y para mostrarte
        publicidad relacionada con tus preferencias y basada en tus hábitos de
        navegación y tu perfil. Puedes configurarlas o rechazarlas haciendo clic
        en "Configurar cookies". También puedes aceptarlas todas pulsando
        “Aceptar todas las cookies”. Para más información, lee nuestra Política
        de cookies.
      </v-col>
      <v-col cols="10">
        <v-switch
          inset
          v-model="tech"
          color="#A3B2FF"
          label="Cookies de tecnologia"
        ></v-switch>
        Ayuda a Omni International Logistics a mejorar el rendimiento recopilando e informando sobre cómo usa el sitio web.
      </v-col>
      <v-col cols="10">
        <v-expansion-panels class="elevation-0">
          <v-expansion-panel v-for="(item, i) in 1" :key="i">
            <v-expansion-panel-header>
              Nombre de cookie
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center" no-gutters>
                <v-col class="mt-3" lg="6" md="6" sm="12">
                  Cookie
                </v-col>
                <v-col class="mt-3" lg="6" md="6" sm="12">
                  Omni International Logistics
                </v-col>
                <v-col class="mt-3" lg="6" md="6" sm="12">
                  Business
                </v-col>
                <v-col class="mt-3" lg="6" md="6" sm="12">
                  Content Management Platform
                </v-col>
                <v-col class="mt-3" lg="6" md="6" sm="12">
                  Cookie name
                </v-col>
                <v-col class="mt-3" lg="6" md="6" sm="12">
                  is_form_submited
                </v-col>
                <v-col class="mt-3" lg="6" md="6" sm="12">
                  Purpose
                </v-col>
                <v-col class="mt-3" lg="6" md="6" sm="12">
                  Post the submission of the CRM Form, this cookie is set to allow the user to access gated content without submitting the form again for the subsequent visits.
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        :style="$vuetify.breakpoint.smAndDown ? '' : 'margin-top: 30px;'"
        class="text-center mb-6"
        cols="12"
      >
        <v-btn @click="aceptar(tech)" dark color="#00126A">ACEPTAR PREFERENCIA DE COOKIES</v-btn>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>
<script>
import config from '@/components/ConfigCookies.vue'

export default {
  components: {
    config,
  },
  data() {
    return {
      drawer: !this.$cookies.get('cookies_hidde'),
      title: 'Tu privacidad es<br>importante para nosotros.',
      tech: false,
    }
  },
  methods: {
    aceptar(check) {
      if(check) {
        this.$ga.enable() // Activate module
        this.$ga.page(this.$route.path) // Track current route
      }
      this.$cookies.set('cookies_hidde', true , {});
      this.drawer = !this.drawer;
    }
  }
}
</script>
<style>
.cookiesTitle {
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
}
.cookiesContenido {
  font-size: 20px;
  line-height: 24px;
  font-style: normal;
  font-weight: 400;
}
@media screen and (max-width: 600px) {
  .cookiesTitle {
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    line-height: 32px;
  }
  .cookiesContenido {
    font-size: 12px;
    line-height: 20px;
    font-style: normal;
    font-weight: 400;
  }
}
</style>
