<template>
  <v-app dark>
    <app-toolbar />
    <v-main>
      <Nuxt />
      <v-btn fab fixed bottom right color="#00E676" dark @click="goToWhatsApp">
        <v-icon color="white">mdi-whatsapp</v-icon>
      </v-btn>
    </v-main>
    <app-footer />
    <app-cookies/>
  </v-app>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue';
import AppToolbar from '~/components/AppToolbar.vue';
import AppCookies from '~/components/AppCookies.vue';
export default {
  components: { AppToolbar, AppFooter, AppCookies },
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
<style>
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
.tituloSecundario {
  font-size: 48px;
  color: #00126A;
  font-weight: 700;
  line-height: 55px;
}
.subTitulo {
  font-size: 24px;
  color: #00126A;
  font-weight: 600;
  padding: 0 10% 0 10%;
  margin-top: 49px;
  line-height: 32px;
}
.textoImagenPc {
  font-size: 75px;
  color: white;
  font-weight: 500;
  line-height: 78px;
  padding: 0 10% 0 10%;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.82);
}
.textoImagenMobile {
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  padding: 0 10% 0 10%;
  color: white;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.82);
  margin-bottom: 150px;
}
.parrafo {
  font-size: 18px;
  font-weight: normal;
  padding: 20px 10% 0 10%;
  line-height: 32px;
}
.parrafoTechnology {
  font-size: 18px;
  font-weight: normal;
  line-height: 32px;
  color: #4d4d4d;
}
.marco {
  border: 1px solid #c9c6c6;
  margin: 0px 0px 20px 0px;
}
.titulo {
  color: #00126A;
  font-size: 30px;
  font-weight: 700;
  font-style: normal;
  line-height: 40px;
}
.parrafoContact {
  color: #4D4D4D;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 32px;
}
.subTituloSimple {
  font-size: 24px;
  color: #00126A;
  margin: 14px 0 0 12px;
  padding-top: 0px;
  padding-bottom: 0px;
  /* padding: 0 0 0 0; */
  font-weight: 600;
  line-height: 32px;
}
.miniTituloSimple {
  font-size: 16px;
  color: #00126A;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}
.subTituloMobile {
  font-size: 20px;
  color: #00126A;
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
.tituloCreditos {
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  font-style: normal;
}
</style>

