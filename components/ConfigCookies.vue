<template>
  <v-dialog fullscreen v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        text>
          CONFIGURAR COOKIES
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <v-row justify="center" style="padding-top: 64px;">
          <v-col :class="$vuetify.breakpoint.smAndDown ? '' : 'text-center'" class="configTitle pa-0 pb-1" cols="12" style="border-bottom: 1px solid #4D4D4D;">
            Cookies
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text :style="$vuetify.breakpoint.smAndDown ? 'margin-top: 30px;' : 'margin-top: 54px;'">
        <v-row justify="center">
          <v-col class="configText" lg="10" md="11" sm="12" cols="12">
            Cuando se accede a un sitio web, este puede almacenar datos en el navegador a través de
las cookies. Esta información puede estar relacionada con el dispositivo utilizado o tus
preferencias de usuario y se utiliza principalmente para optimizar el funcionamiento de la
página. Estos datos generalmente no te identifican de forma directa, pero te proporcionan
una navegación más personalizada.
Si lo deseas, a continuación puedes excluir algunos tipos de cookies. Haz clic en las
diferentes categorías para obtener más información y cambiar la configuración
predeterminada. Ten en cuenta que al bloquear algunas cookies tu experiencia de usuario y
los servicios que ofrecemos pueden verse afectados.
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    }
  }
}
</script>
<style scoped>
.configTitle {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
.configText {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
}
@media screen and (max-width: 600px) {
  .configTitle {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
  }
  .configText {
    font-size: 12px;
    font-style: norsmal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
  }
}
</style>
