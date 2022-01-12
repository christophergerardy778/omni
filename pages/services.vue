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
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        >
          <v-row>
            <v-col
              lg="7"
              cols="12"
              :class="$vuetify.breakpoint.smAndDown ? 'text-center' : ''"
            >
              <div
                v-if="!$vuetify.breakpoint.smAndDown"
                v-html="txtImg"
                class="textoImagenPc"
              ></div>
              <div
                v-else
                v-html="txtImg"
                class="textoImagenMobile"
              ></div>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
      <v-col
        cols="12"
        class="text-center tituloSecundario"
        :style="'margin-top:' + ($vuetify.breakpoint.smAndDown ? '79px' : '172px')+';'"
      >
        Services
      </v-col>
      <v-col
        lg="7"
        md="10"
        sm="12"
        cols="12"
        class="subTitulo"
      >
        We want to be part of your supply and distribution chain!
      </v-col>
      <v-col
        lg="7"
        md="10"
        sm="12"
        cols="12"
        class="parrafo"
      >
        Our knowledge in the market and experience,
        alongside the partnerships and commercial
        relationships, we`ve grown with carrier
        companies, allow us to obtain competitive
        rates and better service conditions.
      </v-col>
      <v-col
        lg="8"
        md="11"
        sm="11"
        cols="11"
        style="margin-top: 90px;"
      >
        <v-row justify="center">
          <v-col
            v-for="(card, index) in cards"
            :key="index"
            lg="6"
            md="6"
            sm="12"
            cols="12"
            style="margin-bottom: 23px;"
          >
            <card-servises
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
        style="margin-top: 6px;"
      >
        Industry
      </v-col>
      <v-col
        lg="7"
        md="10"
        sm="12"
        cols="12"
        class="subTitulo"
        :style="$vuetify.breakpoint.smAndDown ? 'padding: 0 10% 0 10%;' : 'padding: 0 10% 0 10%;'"
      >
        Any goods you need to transport? We got you covered! We cover the following commodities.
      </v-col>
      <v-col
        lg="7"
        md="10"
        sm="12"
        cols="12"
        :class="'parrafo' + ($vuetify.breakpoint.smAndDown ? '':' text-center')"
        :style="$vuetify.breakpoint.smAndDown ? 'padding: 20px 10% 0 10%;':'padding: 14px 0 0 0;'"
      >
        We cover the following sectors.
      </v-col>
      <v-col
        lg="8"
        md="10"
        sm="11"
        cols="11"
        style="margin-top: 90px;"
      >
        <v-row justify="center">
          <v-col
            v-for="(card, index) in ICards"
            :key="index"
            lg="6"
            md="6"
            sm="12"
            cols="12"
            style="margin-bottom: 23px;"
          >
            <card-industry
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
        style="margin-top: 6px;"
      >
        Technology
      </v-col>
      <v-col
        lg="7"
        md="10"
        sm="12"
        cols="12"
        class="parrafo"
      >
        Logistics tech support and our development systems team help us operate efficiently and are the key to our logistics operation success.
      </v-col>
      <v-col
        lg="10"
        md="10"
        sm="11"
        cols="11"
        v-if="!$vuetify.breakpoint.smAndDown"
      >
        <v-row
          justify="center"
          class="my-9"
        >
          <v-col
            lg="2"
            md="2"
            sm="12"
            cols="12"
          >
            <div class="text-center mb-3">
              <img src="@/assets/Icon/GraphicStar.svg" />
            </div>
            <div>
              Industry standar technology
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col
            lg="2"
            md="2"
            sm="12"
            cols="12"
          >
            <div class="text-center mb-3">
              <img src="@/assets/Icon/NoteText.svg" />
            </div>
            <div>
              Inventory management
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col
            lg="2"
            md="2"
            sm="12"
            cols="12"
          >
            <div class="text-center mb-3">
              <img src="@/assets/Icon/Clock.svg" />
            </div>
            <div>
              24/7 real time tracking
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col
            lg="3"
            md="3"
            sm="12"
            cols="12"
          >
            <div class="text-center mb-3">
              <img src="@/assets/Icon/Locate.svg" />
            </div>
            <div>
              Track & Trace programs: Four kites, Macro Point, among others
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col
            lg="2"
            md="2"
            sm="12"
            cols="12"
          >
            <div class="text-center mb-3">
              <img src="@/assets/Icon/Box.svg" />
            </div>
            <div>
              Wherehouse management system
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.smAndDown" style="margin-top: 82px;" cols="12">
        <v-row justify="center">
          <v-col
            class="marco"
            cols="10"
          >
            <v-row align="center">
              <v-col
                cols="3"
                class="text-center mt-2"
              >
                <img src="@/assets/Icon/GraphicStar.svg" />
              </v-col>
              <v-col
                cols="9"
                class="parrafoTechnology"
              >
                Industry standar technology
              </v-col>
            </v-row>
          </v-col>
          <v-col
            class="marco"
            cols="10"
          >
            <v-row align="center">
              <v-col
                cols="3"
                class="text-center mt-2"
              >
                <img src="@/assets/Icon/NoteText.svg" />
              </v-col>
              <v-col
                cols="9"
                class="parrafoTechnology"
              >
                Inventory management
              </v-col>
            </v-row>
          </v-col>
          <v-col
            class="marco"
            cols="10"
          >
            <v-row align="center">
              <v-col
                cols="3"
                class="text-center mt-2"
              >
                <img src="@/assets/Icon/Clock.svg" />
              </v-col>
              <v-col
                cols="9"
                class="parrafoTechnology"
              >
                24/7 real time tracking
              </v-col>
            </v-row>
          </v-col>
          <v-col
            class="marco"
            cols="10"
          >
            <v-row align="center">
              <v-col
                cols="3"
                class="text-center mt-2"
              >
                <img src="@/assets/Icon/Locate.svg" />
              </v-col>
              <v-col
                cols="9"
                class="parrafoTechnology"
              >
                Track & Trace programs: Four kites, Macro Point, among others
              </v-col>
            </v-row>
          </v-col>
          <v-col
            class="marco"
            cols="10"
          >
            <v-row align="center">
              <v-col
                cols="3"
                class="text-center mt-2"
              >
                <img src="@/assets/Icon/Box.svg" />
              </v-col>
              <v-col
                cols="9"
                class="parrafoTechnology"
              >
                Wherehouse management system
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col lg="10" md="10" sm="11" cols="11">
        <card-contact-us/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CardServises from '@/components/services/CardServices.vue';
import CardIndustry from '@/components/services/CardIndustry.vue';
import CardContactUs from '~/components/services/CardContactUs.vue';

export default {
  components: {
    CardServises,
    CardIndustry,
    CardContactUs,
  },
  data() {
    return {
      txtImg: `<b>Our service</b> tailored to <b>your needs</b>`,
      cards: [
        {
          titulo: 'Storage',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          detalle:
            'Our warehouse offers storage in Laredo tx, designed to store your loads both in a safe and viable way.',
        },
        {
          titulo: 'Land Transport',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          detalle:
            'Dry Van and Reefer load transport and Delivery nationally. Whith a wide array of partner carriers, we can meet the resources your goods need to reach their destination.',
        },
        {
          titulo: 'Import / Export',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          detalle:
            'We offer integral services which include all other activities implied in operation matters in import and exports through every country`s customs.',
        },
        {
          titulo: 'Transport and Distributions',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          detalle:
            'Door to door services, both on import and Export on both México and US.',
        },
      ],
      ICards: [
        {
          titulo: 'Automotriz',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          detalle:
            'Transportamos toda clase de piezas automotrices de vehículos de forma nacional e internacional.',
        },
        {
          titulo: 'Alimentos',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          detalle:
            'Desarrollamos soluciones de almacenamiento y transporte de productos congelados (perecederos y refrigerados) sensibles a la temperatura y procesdos.',
        },
        {
          titulo: 'Farmacéutico',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          detalle:
            'Contamos con un amplia red de transportistas y servicios logisticos adecuados para el translado de suministros farmacéuticos, sanitarios, cosmeticos y médicos de manera segura.',
        },
        {
          titulo: 'Bebidas',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
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
