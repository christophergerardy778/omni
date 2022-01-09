<template>
  <div>
    <div class="text-center header-container">
      <v-container class="py-10">
        <v-row justify="center">
          <v-col class="col-md-6">
            <h1 class="text-header-title white--text">
              Schedule a <b>call ¡Contact us!</b>
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="about-us__background-container">
      <v-container>
        <v-row>
          <v-col class="col-md-4">
            <h2 class="color-about-us">
              Do you need to quote a service? Looking to book one of our
              services? Send us your information and we'll contact you briefly
            </h2>
            <p class="mt-8 about-us__text">
              Contact us to find out how we can help you formulate the solutions
              to your logistical problems.
            </p>
          </v-col>
          <v-col class="col-md-4">
            <v-img
              src="https://img.freepik.com/foto-gratis/mano-persona-sosteniendo-telefono-movil-tienda-ropa_23-2148041841.jpg?size=338&ext=jpg"
            />
            <div class="py-4 pl-4">
              <div class="d-flex align-center">
                <v-icon color="#E30707">mdi-phone</v-icon>
                <p class="mb-0 ml-4">(867) 3343939</p>
              </div>

              <div class="d-flex align-center mt-4">
                <v-icon color="#E30707">mdi-whatsapp</v-icon>
                <p class="mb-0 ml-4">+1 (956) 602-5372</p>
              </div>
            </div>
          </v-col>
          <v-col class="col-md-4">
            <div>
              <p class="mb-1">Name <span>*</span></p>
              <v-text-field color="#00126a" outlined dense />
            </div>
            <div>
              <p class="mb-1">Name of company <span>*</span></p>
              <v-text-field color="#00126a" outlined dense />
            </div>
            <div>
              <p class="mb-1">Email <span>*</span></p>
              <v-text-field color="#00126a" outlined dense />
            </div>
            <div>
              <p class="mb-1">Telephone <span>*</span></p>
              <v-text-field color="#00126a" outlined dense />
            </div>
            <div>
              <p class="mb-1">Equipament requiered <span>*</span></p>
              <v-text-field color="#00126a" outlined dense />
            </div>
            <div>
              <p class="mb-1">Source <span>*</span></p>
              <v-text-field color="#00126a" outlined dense />
            </div>
            <div>
              <p class="mb-1">Destination <span>*</span></p>
              <v-text-field color="#00126a" outlined dense />
            </div>
            <div>
              <p class="mb-1">Comments <span>*</span></p>
              <v-textarea color="#00126a" outlined dense />
            </div>
            <div class="d-flex justify-end">
              <v-btn color="#E30707" dark depressed>more info</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="about-us__padding-container">
      <v-row class="px-4">
        <v-col class="col-12 col-md-4">
          <h2 class="color-about-us">
            Interested in forming part of OMNI as a partner carrier?
          </h2>
          <p class="mt-10 about-us__text">
            We want to build a strong and permanent relationship with people who
            are passionate about the transportation and logistics industry,
            become an OMNI Carrier and succeed on your own terms.
          </p>
        </v-col>
        <v-col class="col-12 col-md-8 about-us__background-image">
          <div class="d-flex justify-end">
            <div class="about-us__form_background-color">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="validate"
              >
                <div class="about-us__form-container">
                  <div>
                    <p class="mb-1 white--text">Destination <span>*</span></p>
                    <v-text-field
                      background="white"
                      outlined
                      dense
                      :rules="destinationRules"
                    />
                  </div>
                  <div>
                    <p class="mb-1 white--text">Phone <span>*</span></p>
                    <v-text-field color="white" outlined dense />
                  </div>
                  <div>
                    <p class="mb-1 white--text">Email <span>*</span></p>
                    <v-text-field color="white" outlined dense />
                  </div>
                  <div>
                    <p class="mb-1 white--text">Company <span>*</span></p>
                    <v-text-field color="white" outlined dense />
                  </div>
                  <div>
                    <p class="mb-1 white--text">Message <span>*</span></p>
                    <v-textarea color="#00126a" outlined dense />
                  </div>
                  <div class="d-flex justify-end">
                    <v-btn color="#E30707" type="submit" dark depressed
                      >more info</v-btn
                    >
                  </div>
                </div>
              </v-form>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    destinationRules: [(value) => !!value || 'Required.'],
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>

<style scoped lang="scss">
.color-about-us {
  color: #00126a;
}

.header-container {
  background-color: #071C87;
}

.text-header-title {
  font-size: 75px;
}

.about-us__text {
  line-height: 32px;
}

.about-us__background-container {
  padding: 48px 0;
  background-color: #f4f4f4;
}

.about-us__padding-container {
  padding: 64px 0;
}

.about-us__form_background-color {
  background-color: #071c87;
  width: 60%;
  border-radius: 8px;
}

.about-us__form-container {
  padding: 24px;
}

.about-us__background-image {
  background-image: url('https://motoradiesel.com/dev/wp-content/uploads/2019/12/1-7-778x522.jpg');
  background-size: 100% 100%;
  background-origin: content-box;
}

::v-deep .v-input__control > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  background-color: white;
}
</style>
