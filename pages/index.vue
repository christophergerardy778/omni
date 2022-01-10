<template>
  <div>
    <p>{{ $t('welcome') }}</p>
    <v-btn @click="$i18n.setLocale('es')">ES</v-btn>
    <v-btn @click="$i18n.setLocale('en')">EN</v-btn>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/home',
      es: '/inicio'
    }
  },
  name: 'IndexPage',
}
</script>
<style scoped>
.color-about-us {
  color: #00126a;
}

.about-us__text {
  line-height: 32px;
}

.about-us__background-container {
  padding: 48px 0;
  background-color: #f4f4f4;
}
</style>
