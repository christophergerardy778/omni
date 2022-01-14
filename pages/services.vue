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
                v-html="txtImg"
                class="textoImagenPc"
              ></div>
              <div v-else v-html="txtImg" class="textoImagenMobile"></div>
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
        Services
      </v-col>
      <v-col lg="9" md="10" sm="12" cols="12" class="subTitulo">
        We want to be part of your supply and distribution chain!
      </v-col>
      <v-col lg="9" md="10" sm="12" cols="12" class="parrafo">
        Our knowledge in the market and experience, alongside the partnerships
        and commercial relationships, we`ve grown with carrier companies, allow
        us to obtain competitive rates and better service conditions.
      </v-col>
      <v-col lg="10" md="11" sm="11" cols="11" style="margin-top: 90px">
        <v-row justify="center">
          <v-col
            v-for="(card, index) in cards"
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
        Industry
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
        <div v-html="industryD"></div>
      </v-col>
      <v-col lg="8" md="10" sm="11" cols="11" style="margin-top: 90px">
        <v-row justify="center">
          <v-col
            v-for="(card, index) in ICards"
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
        Technology
      </v-col>
      <v-col lg="7" md="10" sm="12" cols="12" class="parrafo">
        Logistics tech support and our development systems team help us operate
        efficiently and are the key to our logistics operation success.
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
            <div>Industry standar technology</div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col lg="2" md="2" sm="12" cols="12">
            <div class="text-center mb-3">
              <img src="@/assets/Icon/NoteText.svg" />
            </div>
            <div>Inventory management</div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col lg="2" md="2" sm="12" cols="12">
            <div class="text-center mb-3">
              <img src="@/assets/Icon/Clock.svg" />
            </div>
            <div>24/7 real time tracking</div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col lg="3" md="3" sm="12" cols="12">
            <div class="text-center mb-3">
              <img src="@/assets/Icon/Locate.svg" />
            </div>
            <div>
              Track & Trace programs: Four kites, Macro Point, among others
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col lg="2" md="2" sm="12" cols="12">
            <div class="text-center mb-3">
              <img src="@/assets/Icon/Box.svg" />
            </div>
            <div>Wherehouse management system</div>
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
                Industry standar technology
              </v-col>
            </v-row>
          </v-col>
          <v-col class="marco" cols="10">
            <v-row align="center">
              <v-col cols="3" class="text-center mt-2">
                <img src="@/assets/Icon/NoteText.svg" />
              </v-col>
              <v-col cols="9" class="parrafoTechnology">
                Inventory management
              </v-col>
            </v-row>
          </v-col>
          <v-col class="marco" cols="10">
            <v-row align="center">
              <v-col cols="3" class="text-center mt-2">
                <img src="@/assets/Icon/Clock.svg" />
              </v-col>
              <v-col cols="9" class="parrafoTechnology">
                24/7 real time tracking
              </v-col>
            </v-row>
          </v-col>
          <v-col class="marco" cols="10">
            <v-row align="center">
              <v-col cols="3" class="text-center mt-2">
                <img src="@/assets/Icon/Locate.svg" />
              </v-col>
              <v-col cols="9" class="parrafoTechnology">
                Track & Trace programs: Four kites, Macro Point, among others
              </v-col>
            </v-row>
          </v-col>
          <v-col class="marco" cols="10">
            <v-row align="center">
              <v-col cols="3" class="text-center mt-2">
                <img src="@/assets/Icon/Box.svg" />
              </v-col>
              <v-col cols="9" class="parrafoTechnology">
                Wherehouse management system
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
      txtImg: `<b>Our service</b> tailored to <b>your needs</b>`,
      industryD: 'Any goods you need to transport? We got you covered! <br>We cover the following commodities.',
      cards: [
        {
          id: 'storage',
          titulo: 'Storage',
          img: 'https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133075/Img%20Omni%20WEB/Pag%20SERVICE-%20servicio/Service/SERVICE__Storage_438x155_2_xchv1a.png',
          detalle:
            'Our warehouse offers storage in Laredo tx, designed to store your loads both in a safe and viable way.',
        },
        {
          id: 'land',
          titulo: 'Land Transport',
          img: 'https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133075/Img%20Omni%20WEB/Pag%20SERVICE-%20servicio/Service/SERVICE__Land_Transport_438x155_eewl4s.png',
          detalle:
            'Dry Van and Reefer load transport and Delivery nationally. Whith a wide array of partner carriers, we can meet the resources your goods need to reach their destination.',
        },
        {
          id: 'iae',
          titulo: 'Import / Export',
          img: 'https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133074/Img%20Omni%20WEB/Pag%20SERVICE-%20servicio/Service/SERVICE__importexport_438x155_npgduh.png',
          detalle:
            'We offer integral services which include all other activities implied in operation matters in import and exports through every country`s customs.',
        },
        {
          id: 'transport',
          titulo: 'Transport and Distributions',
          img: 'https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133076/Img%20Omni%20WEB/Pag%20SERVICE-%20servicio/Service/SERVICE__Transporand_distrib_438x155_ohfrlw.png',
          detalle:
            'Door to door services, both on import and Export on both México and US.',
        },
      ],
      ICards: [
        {
          id: 'auto',
          titulo: 'Automotriz',
          img: 'https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133072/Img%20Omni%20WEB/Pag%20SERVICE-%20servicio/industry/Service__Industry_Autoparts_384x133_qfhhtn.png',
          detalle:
            'Transportamos toda clase de piezas automotrices de vehículos de forma nacional e internacional.',
        },
        {
          id: 'alimentos',
          titulo: 'Food',
          img: 'https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133073/Img%20Omni%20WEB/Pag%20SERVICE-%20servicio/industry/Service__Industry_food_384x133_fja7i3.png',
          detalle:
            'Desarrollamos soluciones de almacenamiento y transporte de productos congelados (perecederos y refrigerados) sensibles a la temperatura y procesdos.',
        },
        {
          id: 'farma',
          titulo: 'Farmacéutico',
          img: 'https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133073/Img%20Omni%20WEB/Pag%20SERVICE-%20servicio/industry/Service__Industry_Pharma_384x133_lelqme.png',
          detalle:
            'Contamos con un amplia red de transportistas y servicios logisticos adecuados para el translado de suministros farmacéuticos, sanitarios, cosmeticos y médicos de manera segura.',
        },
        {
          id: 'beers',
          titulo: 'Bebidas',
          img: 'https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133073/Img%20Omni%20WEB/Pag%20SERVICE-%20servicio/industry/Service__Industry_Beverages_384x133_pmtmgv.png',
          detalle: 'Alcohólicas y no alcohólicas.',
        },
      ],
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
