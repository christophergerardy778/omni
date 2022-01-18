<template>
  <v-container fluid class="pa-0 mb-6">
    <v-row justify="center">
      <v-col cols="12">
        <v-img
          height="634px"
          class="align-center"
          src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133072/Img%20Omni%20WEB/Pag%20SERVICE-%20servicio/HEADER_SERVICE__elevate-GAdkOpqbTfo-unsplash_4_aziai4.png"
        >
          <v-row>
            <v-col
              lg="8"
              cols="12"
              :class="$vuetify.breakpoint.smAndDown ? 'text-center' : ''"
            >
              <div
                v-if="!$vuetify.breakpoint.smAndDown"
                v-html="$t('services.title')"
                class="textoImagenPc"
              ></div>
              <div v-else v-html="$t('services.title')" class="textoImagenMobile"></div>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
      <v-col
        cols="12"
        class="text-center tituloSecundario"
        :style="
          'margin-top:' +
          ($vuetify.breakpoint.smAndDown ? '79px' : '172px') +
          ';'
        "
      >
        {{$t('services.section_one')}}
      </v-col>
      <v-col lg="9" md="10" sm="12" cols="12" class="subTitulo">
        {{$t('services.so_subtitle')}}
      </v-col>
      <v-col lg="9" md="10" sm="12" cols="12" class="parrafo">
        {{$t('services.so_details')}}
      </v-col>
      <v-col lg="10" md="11" sm="11" cols="11" style="margin-top: 90px">
        <v-row justify="center">
          <v-col
            v-for="(card, index) in $t('services.so_crads')"
            :key="index"
            lg="6"
            md="8"
            sm="12"
            cols="12"
            style="margin-bottom: 23px"
          >
            <card-servises
              :id="card.id"
              :titulo="card.titulo"
              :img="card.img"
              :detalle="card.detalle"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        class="text-center tituloSecundario"
        style="margin-top: 6px"
      >
        {{$t('services.industry')}}
      </v-col>
      <v-col
        lg="8"
        md="10"
        sm="12"
        cols="12"
        class="subTitulo text-center"
        :style="
          $vuetify.breakpoint.smAndDown
            ? 'padding: 0 10% 0 10%;'
            : 'padding: 0 10% 0 10%;'
        "
      >
        <div v-html="$t('services.i_subtitle')"></div>
      </v-col>
      <v-col lg="9" md="10" sm="11" cols="11" style="margin-top: 90px">
        <v-row justify="center">
          <v-col
            v-for="(card, index) in $t('services.i_cards')"
            :key="index"
            lg="6"
            md="6"
            sm="12"
            cols="12"
            style="margin-bottom: 23px"
          >
            <card-industry
              :id="card.id"
              :titulo="card.titulo"
              :img="card.img"
              :detalle="card.detalle"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        class="text-center tituloSecundario"
        style="margin-top: 6px"
      >
        {{$t('services.tech')}}
      </v-col>
      <v-col lg="7" md="10" sm="12" cols="12" class="parrafo">
        {{$t('services.t_subtitle')}}
      </v-col>
      <v-col
        lg="10"
        md="10"
        sm="11"
        cols="11"
        v-if="!$vuetify.breakpoint.smAndDown"
      >
        <v-row justify="center" class="my-9">
          <v-col lg="2" md="2" sm="12" cols="12">
            <div class="text-center mb-3">
              <img src="@/assets/Icon/GraphicStar.svg" />
            </div>
            <div>{{$t('services.t_one')}}</div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col lg="2" md="2" sm="12" cols="12">
            <div class="text-center mb-3">
              <img src="@/assets/Icon/NoteText.svg" />
            </div>
            <div>{{$t('services.t_two')}}</div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col lg="2" md="2" sm="12" cols="12">
            <div class="text-center mb-3">
              <img src="@/assets/Icon/Clock.svg" />
            </div>
            <div>{{$t('services.t_three')}}</div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col lg="3" md="3" sm="12" cols="12">
            <div class="text-center mb-3">
              <img src="@/assets/Icon/Locate.svg" />
            </div>
            <div>
              {{$t('services.t_four')}}
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col lg="2" md="2" sm="12" cols="12">
            <div class="text-center mb-3">
              <img src="@/assets/Icon/Box.svg" />
            </div>
            <div>{{$t('services.t_five')}}</div>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        v-if="$vuetify.breakpoint.smAndDown"
        style="margin-top: 82px"
        cols="12"
      >
        <v-row justify="center">
          <v-col class="marco" cols="10">
            <v-row align="center">
              <v-col cols="3" class="text-center mt-2">
                <img src="@/assets/Icon/GraphicStar.svg" />
              </v-col>
              <v-col cols="9" class="parrafoTechnology">
                {{$t('services.t_one')}}
              </v-col>
            </v-row>
          </v-col>
          <v-col class="marco" cols="10">
            <v-row align="center">
              <v-col cols="3" class="text-center mt-2">
                <img src="@/assets/Icon/NoteText.svg" />
              </v-col>
              <v-col cols="9" class="parrafoTechnology">
                {{$t('services.t_two')}}
              </v-col>
            </v-row>
          </v-col>
          <v-col class="marco" cols="10">
            <v-row align="center">
              <v-col cols="3" class="text-center mt-2">
                <img src="@/assets/Icon/Clock.svg" />
              </v-col>
              <v-col cols="9" class="parrafoTechnology">
                {{$t('services.t_three')}}
              </v-col>
            </v-row>
          </v-col>
          <v-col class="marco" cols="10">
            <v-row align="center">
              <v-col cols="3" class="text-center mt-2">
                <img src="@/assets/Icon/Locate.svg" />
              </v-col>
              <v-col cols="9" class="parrafoTechnology">
                {{$t('services.t_four')}}
              </v-col>
            </v-row>
          </v-col>
          <v-col class="marco" cols="10">
            <v-row align="center">
              <v-col cols="3" class="text-center mt-2">
                <img src="@/assets/Icon/Box.svg" />
              </v-col>
              <v-col cols="9" class="parrafoTechnology">
                {{$t('services.t_five')}}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col lg="10" md="10" sm="11" cols="11">
        <card-contact-us />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CardServises from '@/components/services/CardServices.vue'
import CardIndustry from '@/components/services/CardIndustry.vue'
import CardContactUs from '~/components/services/CardContactUs.vue'

export default {
  nuxtI18n: {
    paths: {
      en: '/services',
      es: '/servicios',
    },
  },
  head() {
    return {
      title: this.$t('services.seo.title'),
      meta: [
        { name: 'descripción', content: this.$t('services.seo.description') },
        { name: 'keywords', content: this.$t('services.seo.keywords') },
      ],
    }
  },

  mounted() {
    setTimeout(() => {
      if (this.$route.query.section) {
        window.scrollTo({
          top: document.getElementById(this.$route.query.section).offsetTop,
          behavior: 'smooth',
        })
      }
    }, 1000)
  },
  components: {
    CardServises,
    CardIndustry,
    CardContactUs,
  },
  data() {
    return {
    }
  },
  computed: {
    getImg(imagen) {
      console.log(imagen)
      return require('../assets/Icon/' + imagen)
    },
  },
}
</script>
