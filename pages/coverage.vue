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
                v-html="$t('coverage.title')"
                class="textoImagenPc"
              ></div>
              <div
                v-else
                v-html="$t('coverage.title_mobil')"
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
          src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133058/Img%20Omni%20WEB/Pag%20COVERAGE-%20cobertura/Group_166_2_fhrzho.png"
        >
          <v-row no-gutters style="margin-bottom: 48%;">
            <v-col
              cols="12"
              class="text-center tituloSecundario"
            > {{$t('coverage.coverage')}}</v-col>
            <v-col
              cols="12"
              class="text-center textoMobil"
            >{{$t('coverage.c_details')}}</v-col>
          </v-row>
          <v-row
            align="end"
            class="mb-12"
          >
            <v-col cols="4">
              <div class="miniTituloSimple ml-3 mb-6" v-html="$t('coverage.mex')"></div>
              <v-row no-gutters>
                <v-col
                  class="textoSimple"
                  v-for="(m, i) in $t('coverage.c_mex')"
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
              <div class="miniTituloSimple ml-3 mb-6">{{$t('coverage.usa')}}</div>
              <v-row no-gutters>
                <v-col
                  class="textoSimple"
                  v-for="(m, i) in $t('coverage.c_usa')"
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
            {{$t('coverage.coverage')}}
          </v-col>
          <v-col cols="8" class="parrafoTechnology mt-2">
            {{$t('coverage.c_details')}}
          </v-col>
          <v-col cols="11">
            <v-img
              position="top center"
              :aspect-ratio="10/28"
              src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133050/Img%20Omni%20WEB/Pag%20COVERAGE-%20cobertura/continente_gris_2_icxfrd.png">
              <v-row justify="center">
                <v-col cols="12" class="text-center parrafoTechnology" style="line-height: 23px;">
                  <!-- <div>México</div>
                  <div>Logistics Points</div> -->
                  <div v-html="$t('coverage.mex')"></div>
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
                  v-for="(m, i) in $t('coverage.c_mex')"
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
              <div class="textoSimple">{{$t('coverage.usa')}}</div>
              <v-row no-gutters>
                <v-col
                  class="textoSimple"
                  v-for="(m, i) in $t('coverage.c_usa')"
                  :key="i"
                  cols="12"
                >
                  {{m}}
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-img
              src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133055/Img%20Omni%20WEB/Pag%20COVERAGE-%20cobertura/Coverage__USA_509x324_lfb7yi.png"/>
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
    }
  },
}
</script>
