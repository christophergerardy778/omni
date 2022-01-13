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
        v-if="!$vuetify.breakpoint.smAndDown"
        cols="11"
        style="margin-top: 123px;"
      >
        <v-img
          :aspect-ratio="16/12"
          position="top right"
          class="align-end"
          src="https://res.cloudinary.com/di5ipzjgm/image/upload/v1642008050/Develop/Group_166_2_k9l5cq.png"
        >
          <v-row no-gutters style="margin-bottom: 48%;">
            <v-col
              cols="12"
              class="text-center titulo"
            >Coverage</v-col>
            <v-col
              cols="12"
              class="text-center textoMobil"
            >Expand your company´s horizonts!</v-col>
          </v-row>
          <v-row
            align="end"
            class="mb-12"
          >
            <v-col cols="4">
              <div class="miniTituloSimple ml-3 mb-6">México Logistic points:</div>
              <v-row no-gutters>
                <v-col
                  class="textoSimple"
                  v-for="(m, i) in mex"
                  :key="i"
                  cols="5"
                >
                  {{m}}
                </v-col>
              </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              align-self="start"
              cols="4"
            >
              <div class="miniTituloSimple ml-3 mb-6">All USA</div>
              <v-row no-gutters>
                <v-col
                  class="textoSimple"
                  v-for="(m, i) in usa"
                  :key="i"
                  cols="12"
                >
                  {{m}}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
      <v-col v-else cols="12">
        <v-row justify="center" style="margin-top: 100px;">
          <v-col cols="11" class="titulo text-center">
            Coverage
          </v-col>
          <v-col cols="8" class="parrafoTechnology mt-2">
            Expand your company´s horizonts!
          </v-col>
          <v-col cols="11">
            <v-img
              position="top center"
              :aspect-ratio="10/28"
              src="https://res.cloudinary.com/di5ipzjgm/image/upload/v1642025784/Develop/continente_gris_2_oevreb.png">
              <v-row justify="center">
                <v-col cols="12" class="text-center parrafoTechnology" style="line-height: 23px;">
                  <div>México</div>
                  <div>Logistics Points</div>
                </v-col>
                <v-col cols="12">
                  <v-img
                    src="https://res.cloudinary.com/di5ipzjgm/image/upload/v1642025590/Develop/Coverage__Mex_562x360_rgb1ay.png"
                  />
                </v-col>
                <v-col cols="12">
              <v-row no-gutters>
                <v-col
                  class="textoSimple"
                  v-for="(m, i) in mex"
                  :key="i"
                  cols="5"
                >
                  {{m}}
                </v-col>
              </v-row>
            </v-col>
            <v-col
              cols="12"
              class="text-center"
              style="margin-top: 100px;"
            >
              <div class="textoSimple">All USA</div>
              <v-row no-gutters>
                <v-col
                  class="textoSimple"
                  v-for="(m, i) in usa"
                  :key="i"
                  cols="12"
                >
                  {{m}}
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-img
              src="https://res.cloudinary.com/di5ipzjgm/image/upload/v1642025593/Develop/Coverage__USA_509x324_w4acxb.png"/>
            </v-col>
              </v-row>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      txtImg: 'We <b>Take</b> your <b>company further</b>',
      mex: [
        'Nuevo León',
        'Jalisco',
        'Coahuila',
        'Michoacán',
        'Zacatecas',
        'Puebla',
        'San Luis Potosí',
        'Estado de México',
        'Querétaro',
        'CDMX',
        'Guanajuato',
        'Hidalgo',
      ],
      usa: ['(Exept Alaska and Hawaii)'],
    }
  },
}
</script>
