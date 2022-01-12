<template>
  <v-app-bar app elevate-on-scroll elevation="1" color="white" fixed>
    <img src="~/assets/img/logo.png" height="100%" />
    <v-spacer />
    <div class="d-none d-md-flex">
      <v-btn text color="#071C87" @click="localePathEx('index')">Home</v-btn>
      <v-btn text color="#071C87">About US</v-btn>
      <v-btn text color="#071C87">Services</v-btn>
      <v-btn text color="#071C87">Coverge</v-btn>
      <v-btn text color="#071C87" @click="localePathEx('contact-us')">Contact US</v-btn>
    </div>
    <v-spacer />
    <div class="d-none d-md-flex app-bar-icon-container">
      <div>
        <v-btn icon dark small color="#071C87"
          ><v-icon>mdi-email</v-icon></v-btn
        >
      </div>
      <div>
        <v-btn
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
        >
      </div>
    </div>
    <v-app-bar-nav-icon class="d-flex d-md-none" color="#00126A" />
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    localePathEx(route) {
      this.$router.push(this.localePath(route))
    },
  },
}
</script>

<style>
.app-bar-icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
}
</style>
