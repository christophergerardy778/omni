<template>
  <swiper class="swiper mobile-swiper-slider" :options="swiperOption">
    <swiper-slide>
      <img
        width="auto"
        height="48"
        src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642182261/Omni/Home/Certificado_logo_fast_107.92x30.35_sayzkz.png"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        width="auto"
        height="48"
        src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642182262/Omni/Home/CTPAT_140.52x46.09_hckgfd.png"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        width="auto"
        height="48"
        src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642182262/Omni/Home/iso_91.06x41.59_fems2p.png"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        width="auto"
        height="48"
        src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642182262/Omni/Home/UIIAL_115.79x38.35_rs3dkd.png"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        width="auto"
        height="48"
        src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642182261/Omni/Home/Logo_SCT_97.74x40.54_kf2fx8.png"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        width="auto"
        height="94"
        src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642182261/Omni/Home/logo_semarnat_119.46x119.46_rija1f.png"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        width="auto"
        height="70"
        src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642182262/Omni/Home/logo_transporte-limpio_84.71x67.33_qoxspv.png"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        width="auto"
        height="64"
        src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642182262/Omni/Home/iso_int_55.02x59.37_ehxzuu.png"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        width="auto"
        height="64"
        src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642182262/Omni/Home/OEA_81.81x44.16_nkpolt.png"
      />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'SwiperCertificates',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }
  },
}
</script>

<style lang="scss" scoped>

.mobile-swiper-slider {
  display: none;
}

@media screen and (max-width: 768px) {
  .mobile-swiper-slider {
    display: block;
  }
}
</style>
