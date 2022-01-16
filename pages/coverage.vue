<template>
  <v-container fluid class="pa-0 mb-6">
    <v-row justify="center">
      <v-col cols="12">
        <v-img
          height="634px"
          class="align-center"
          src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133059/Img%20Omni%20WEB/Pag%20COVERAGE-%20cobertura/header/header_Coverage_1366x_634_mof8sq.png"
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
              <div v-else v-html="txtImgMobil" class="textoImagenMobile"></div>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
      <v-col
        v-if="!$vuetify.breakpoint.smAndDown"
        cols="11"
        style="margin-top: 123px"
      >
        <v-img
          :aspect-ratio="16 / 12"
          position="top right"
          class="align-end"
          src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133058/Img%20Omni%20WEB/Pag%20COVERAGE-%20cobertura/Group_166_2_fhrzho.png"
        >
          <v-row no-gutters style="margin-bottom: 48%">
            <v-col cols="12" class="text-center tituloSecundario"
              >Coverage</v-col
            >
            <v-col cols="12" class="text-center textoMobil"
              >Expand your company´s horizonts!</v-col
            >
          </v-row>
          <v-row align="end" class="mb-12">
            <v-col cols="4">
              <div class="miniTituloSimple ml-3 mb-6">
                México Logistic points:
              </div>
              <v-row no-gutters>
                <v-col
                  class="textoSimple"
                  v-for="(m, i) in mex"
                  :key="i"
                  cols="5"
                >
                  {{ m }}
                </v-col>
              </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col align-self="start" cols="4">
              <div class="miniTituloSimple ml-3 mb-6">All USA</div>
              <v-row no-gutters>
                <v-col
                  class="textoSimple"
                  v-for="(m, i) in usa"
                  :key="i"
                  cols="12"
                >
                  {{ m }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
      <v-col v-else cols="12">
        <v-row justify="center" style="margin-top: 100px">
          <v-col cols="11" class="titulo text-center"> Coverage </v-col>
          <v-col cols="8" class="parrafoTechnology mt-2">
            Expand your company´s horizonts!
          </v-col>
          <v-col cols="11">
            <v-img
              position="top center"
              :aspect-ratio="10 / 28"
              src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133050/Img%20Omni%20WEB/Pag%20COVERAGE-%20cobertura/continente_gris_2_icxfrd.png"
            >
              <v-row justify="center">
                <v-col
                  cols="12"
                  class="text-center parrafoTechnology"
                  style="line-height: 23px"
                >
                  <div>México</div>
                  <div>Logistics Points</div>
                </v-col>
                <v-col cols="12">
                  <v-img
                    src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133054/Img%20Omni%20WEB/Pag%20COVERAGE-%20cobertura/Coverage__Mex_562x360_zi8qyj.png"
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
                      {{ m }}
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" class="text-center" style="margin-top: 100px">
                  <div class="textoSimple">All USA</div>
                  <v-row no-gutters>
                    <v-col
                      class="textoSimple"
                      v-for="(m, i) in usa"
                      :key="i"
                      cols="12"
                    >
                      {{ m }}
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <v-img
                    src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133055/Img%20Omni%20WEB/Pag%20COVERAGE-%20cobertura/Coverage__USA_509x324_lfb7yi.png"
                  />
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
  nuxtI18n: {
    paths: {
      en: '/coverage',
      es: '/cobertura',
    },
  },
  head() {
    return {
      title: this.$t('coverage.seo.title'),
      meta: [
        { name: 'descripción', content: this.$t('coverage.seo.description') },
        { name: 'keywords', content: this.$t('coverage.seo.keywords') },
      ],
    }
  },

  data() {
    return {
      txtImg: 'We <b>Take</b> your <b>company further</b>',
      txtImgMobil: 'We <b>Take</b><br> your <b>company <br>further</b>',
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
