<template>
  <v-footer color="#071C87">
    <v-container>
      <v-row>
        <v-col class="col-12 pb-0">
          <img src="~/assets/img/logo_white.png" width="150" />
        </v-col>
        <v-col class="col-12 col-md-3 white--text">
          <p class="mt-4">
            Omni International Logistics is more than just a logistics agency.
            We're your complete solution for cross border commerce. Get to know
            where we come from and where we are headed.
          </p>
        </v-col>
        <v-col class="col-12 col-md-2 offset-md-1 offset-sm0">
          <img-credits />
        </v-col>
        <!-- <v-col class="col-12 col-md-2 offset-md-3 offset-sm0"> -->
        <v-col class="col-12 col-md-2">
          <h4 class="white--text">Contact</h4>
          <div class="white--text d-flex align-center mt-4">
            <a href="tel:8673343939" class="call-to">
              <v-icon color="white">mdi-cellphone</v-icon>
              <p class="mb-0 ml-4">(867) 3343939</p>
            </a>
          </div>
        </v-col>
        <v-col class="col-12 col-md-4">
          <h4 class="white--text">Locations</h4>
          <div class="white--text d-flex align-center mt-4">
            <v-icon color="white">mdi-map-marker</v-icon>
            <p class="mb-0 ml-4">
              Paseo Colón 3607 Colonia Jardín, Nuevo Laredo Tamaulipas C.P.
              88260
            </p>
          </div>
          <div class="white--text d-flex align-center mt-4">
            <v-icon color="white">mdi-map-marker</v-icon>
            <p class="mb-0 ml-4">14203 Distribution Avenue LaredoTexas</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-col
          ><h4 class="white--text font-weight-light">
            © 2022 All rights reserved
          </h4>
          <privacy />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import ImgCredits from '@/components/ImgCredits.vue'
import Privacy from '@/components/Privacy.vue'

export default {
  components: {
    ImgCredits,
    Privacy,
  },
}
</script>

<style>
.call-to {
  display: flex;
  align-items: center;
  color: white !important;
  text-decoration: none;
}
</style>
