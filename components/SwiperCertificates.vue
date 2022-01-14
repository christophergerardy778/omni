<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <img src="../static/certificates/logo_fast.png">
    </swiper-slide>
    <swiper-slide>
      <img src="../static/certificates/logo-CTPAT-NUEVO-01.png">
    </swiper-slide>
    <swiper-slide>
      <img src="../static/certificates/logo_iso9001.png">
    </swiper-slide>
    <swiper-slide>
      <img src="../static/certificates/UIIALogo.png">
    </swiper-slide>
    <swiper-slide>
      <img src="../static/certificates/Logo_SCT.png">
    </swiper-slide>
    <swiper-slide>
      <img src="../static/certificates/logo_transporte-limpio.png">
    </swiper-slide>
    <swiper-slide>
      <img src="../static/certificates/logo_semarnat.png">
    </swiper-slide>
    <swiper-slide>
      <img src="../static/certificates/logo_iso.png">
    </swiper-slide>
    <swiper-slide>
      <img src="../static/certificates/logo_oea.png">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "SwiperCertificates",

  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
