<template>
  <v-container
    fluid
    class="pa-0 mb-6"
  >
  <v-row justify="center">
      <v-col cols="12">
        <v-img
          height="634px"
          class="align-center"
          src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133045/Img%20Omni%20WEB/Pag%20ABOUT%20US-%20Nosotros/header/HEADER_ABOUT_US_1366x634_vmety5.png"
        >
          <v-row>
            <v-col
              lg="10"
              cols="12"
              :class="$vuetify.breakpoint.smAndDown ? 'text-center' : ''"
            >
              <div
                v-if="!$vuetify.breakpoint.smAndDown"
                v-html="$t('about.title')"
                class="textoImagenPc"
              ></div>
              <div
                v-else
                v-html="$t('about.title')"
                class="textoImagenMobile"
              ></div>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
      <v-col
        cols="12"
        :class="$vuetify.breakpoint.smAndDown ? 'titulo text-center' : 'tituloSecundario text-center'"
        :style="'margin-top:' + ($vuetify.breakpoint.smAndDown ? '79px' : '172px')+';'"
      >
        {{$t('about.section_one')}}
      </v-col>
      <v-col
        lg="10"
        md="10"
        sm="11"
        cols="11"
        style="margin-top: 90px;"
      >
        <v-row justify="center">
          <v-col
            v-for="(card, index) in $t('about.so_card_about')"
            :key="index"
            lg="6"
            md="6"
            sm="12"
            cols="12"
            style="margin-bottom: 23px;"
          >
            <card-about
              :titulo="card.titulo"
              :img="card.img"
              :detalle="card.detalle"
            />
          </v-col>
          <v-col cols="12" style="margin: 80px 0 40px 0">
            <omni-about/>
          </v-col>
        </v-row>
      </v-col>
  </v-row>
  </v-container>
</template>
<script>
import CardAbout from '@/components/about/CardAbout.vue';
import OmniAbout from '@/components/about/OmniAbout.vue';

export default {
  components: {
    CardAbout,
    OmniAbout,
  },
  data() {
    return {
    }
  }
}
</script>
