<template>
  <v-dialog
    v-model="dialog"
    scrollable
    width="800px"
    :fullscreen="$vuetify.breakpoint.smAndDown ? true : false"
  >
    <template v-slot:activator="{ on, attrs }">
      <h4
        v-bind="attrs"
        v-on="on"
        class="white--text"
      >
        Images Credit
        <v-icon
          color="white"
          left
        >
          mdi-chevron-down
        </v-icon>
      </h4>
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
        <v-row>
          <v-col v-if="!$vuetify.breakpoint.smAndDown" cols="5">
            <v-col cols="12" class="subTituloMobile">
              Images Credits
            </v-col>
            <v-img style="margin-top: 200px;" :aspect-ratio="6/7" src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133044/Img%20Omni%20WEB/Dialogo_1_nxiurb.png"/>
          </v-col>
          <v-col v-if="$vuetify.breakpoint.smAndDown" cols="12" class="subTituloMobile mt-3 text-center">
              Images Credits
          </v-col>
          <v-col v-if="$vuetify.breakpoint.smAndDown" cols="11">
            <v-img :aspect-ratio="6/6" src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133044/Img%20Omni%20WEB/Dialogo_1_nxiurb.png"/>
          </v-col>
          <v-col lg="7" md="7" sm="11" cols="11" class="pb-12">
            <div class="tituloCreditos mb-6">Freepik</div>
            <div v-for="(dat, index) in info1" :key="index" v-html="dat"></div>
            <div class="tituloCreditos my-6">Unsplash</div>
            <div v-for="(dat, index) in info2" :key="index" v-html="dat"></div>
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
}
</script>
