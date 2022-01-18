<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col lg="10" md="11" sm="12" class="subTituloMobile mt-3 text-center">
        {{$t('privacy.title')}}
      </v-col>
      <v-col lg="10" md="11" sm="12" class="pb-12"
            style="text-align: justify; margin-top: 30px;">
          <div v-html="$t('privacy.text')"></div>
      </v-col>
    </v-row>
  </v-container>
</template>
