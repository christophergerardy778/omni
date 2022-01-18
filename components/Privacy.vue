<template>
  <v-dialog
    v-model="dialog"
    scrollable
    width="800px"
    max-height="200px"
    :fullscreen="$vuetify.breakpoint.smAndDown ? true : false"
  >
    <template v-slot:activator="{ on, attrs }">
      <h4
        v-if="!check"
        v-bind="attrs"
        v-on="on"
        class="font-weight-light text-end"
        style="color: #ffeb00;"
      >
        {{$t('privacy.title')}}
      </h4>
      <div v-else :style="`color: ${color}`">
        <input v-model="acepto" type="checkbox"> {{textAcepto}} <a v-bind="attrs" v-on="on">{{textPrivacy}}</a>
      </div>
    </template>
    <v-card>
      <v-card-title>
        <img
          src="~/assets/img/logo.png"
          width="150"
        />
        <v-spacer></v-spacer>
        <v-icon @click="dialog = false">mdi-close-circle</v-icon>
      </v-card-title>
      <v-card-text>
        <v-row justify="center">
          <v-col
            cols="12"
            class="subTituloMobile mt-3 text-center"
          >
            {{$t('privacy.title')}}
          </v-col>
          <v-col
            cols="11"
            class="pb-12"
            style="text-align: justify;"
          >
          <div v-html="$t('privacy.text')"></div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    check: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'black',
    },
    textAcepto: {
      type: String,
      default: 'I have read and agree the ',
    },
    textPrivacy: {
      type: String,
      default: 'privacy policy.',
    }
  },
  data() {
    return {
      dialog: false,
      acepto: false,
      info1: [
        '<a href="https://www.freepik.es/vectores/camara">Vector de Cámara creado por vectorjuice - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/hombre">Foto de Hombre creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/trabajo">Foto de Trabajo creado por freepik - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/negocios">Foto de Negocios creado por senivpetro - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/edificio">Foto de Edificio creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/personas">Foto de Personas creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/vino">Foto de Vino creado por freepik - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/fondo">Foto de Fondo creado por bedneyimages - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/hombre">Foto de Hombre creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/negocios">Foto de Negocios creado por senivpetro - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/trabajo">Foto de Trabajo creado por freepik - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/tecnologia">Foto de Tecnología creado por freepik - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/edificio">Foto de Edificio creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/comida">Foto de Comida creado por freepik - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/hombre">Foto de Hombre creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/coche">Foto de Coche creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/personas">Foto de Personas creado por aleksandarlittlewolf - www.freepik.es</a>',
      ],
      info2: [
        'Photo by <a href="https://unsplash.com/@meric?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Meriç Dağlı</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        'Photo by <a href="https://unsplash.com/@thekidflame?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ernesto Leon</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        'Photo by <a href="https://unsplash.com/@elevatebeer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Elevate</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      ],
    }
  },
  methods: {
    emitir(value){
      this.$emit('input', value);
    }
  },
  watch: {
    acepto(value){
      this.emitir(value);
    }
  }
}
</script>
