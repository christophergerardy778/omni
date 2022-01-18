<template>
  <v-navigation-drawer v-if="drawer"
    :width="$vuetify.breakpoint.smAndDown ? '' : '472px'"
    :style="$vuetify.breakpoint.smAndDown ? 'height: 400px;':''"
    v-model="drawer"
    absolute
    temporary
    permanent
    bottom
    touchless
    app
  >
    <v-row
      justify="center"
    >
      <v-col
        class="text-right mt-8" cols="10"><v-btn
            @click="$i18n.setLocale('es')"
            :outlined="$i18n.locale !== 'es'"
            depressed
            dark
            small
            color="#071C87"
            >ES</v-btn
          >
          <v-btn
            :outlined="$i18n.locale !== 'en'"
            depressed
            small
            dark
            color="#071C87"
            @click="$i18n.setLocale('en')"
            >EN</v-btn
          ></v-col>
      <v-col class="cookiesTitle" cols="10" v-html="$t('cookies.title')"> </v-col>
      <v-col class="cookiesContenido" cols="10" v-html="$t('cookies.description')">
      </v-col>
      <v-col
        :style="$vuetify.breakpoint.smAndDown ? '' : 'margin-top: 10px;'"
        class="text-center mb-6"
        cols="12"
      >
        <v-btn @click="aceptar(true)" dark color="#00126A">{{$t('cookies.btn_one')}}</v-btn>
      </v-col>
      <v-col cols="10">
        <v-switch
          inset
          v-model="cen"
          readonly
          color="#A3B2FF"
          :label="$t('cookies.option_one')"
        ></v-switch>
        <div class="infoCookie">{{$t('cookies.message')}}</div>
        <div class="mt-3">{{$t('cookies.oo_description')}}</div>
        <v-switch
          inset
          v-model="tech"
          color="#A3B2FF"
          :label="$t('cookies.option_two')"
        ></v-switch>
        {{$t('cookies.od_description')}}
      </v-col>
      <v-col
        :style="$vuetify.breakpoint.smAndDown ? '' : 'margin-top: 10px;'"
        class="text-center mb-6"
        cols="12"
      >
        <v-btn @click="aceptar(tech)" dark color="#00126A">{{$t('cookies.btn_two')}}</v-btn>
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
      drawer: !this.$cookies.get('ch_cookies'),
      cen: true,
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
      this.$cookies.set('ch_cookies', true , {});
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
.infoCookie {
  color: cadetblue;
  font-size: 13px;
  justify-content: center;
  margin: 0 0 0 15%;
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
