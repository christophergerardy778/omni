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
              lg="6"
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
        :class="$vuetify.breakpoint.smAndDown ? 'titulo text-center' : 'tituloSecundario text-center'"
        :style="'margin-top:' + ($vuetify.breakpoint.smAndDown ? '79px' : '172px')+';'"
      >
        About Us
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
            v-for="(card, index) in AUCards"
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
          <v-col cols="12">
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
      txtImg: `<b>Eficiency</b> in our process <b>Always</b>`,
      AUCards : [
        {
          titulo: 'Our Company',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          detalle: 'Since 2019, we began our journey in establishing our Logistics enterprise Headquarters in Laredo, Tx.',
        },
        {
          titulo: 'Our most important values',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          detalle: 'Omni´s team embody our core values of trust, innovation, expertise and safety.',
        },
        {
          titulo: 'Our vision',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          detalle: 'At OMNI, our vision is to bring compelling value through outsourcing.',
        },
        {
          titulo: 'Our mission',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          detalle: 'Our mission statement says it all: Creating the most efficient transportation network in North America. We continuously look for new ways that our people, process and technology can be used to move freight transportation forward.',
        },
      ],
    }
  }
}
</script>
