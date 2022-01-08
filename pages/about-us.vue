<template>
  <div>
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
          <v-col class="col-md-4"> </v-col>
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
    <v-container>
      <v-row>
        <v-col class="col-md-4">
          <h2 class="color-about-us">
            Interested in forming part of OMNI as a partner carrier?
          </h2>
          <p class="mt-10 about-us__text">
            We want to build a strong and permanent relationship with people who
            are passionate about the transportation and logistics industry,
            become an OMNI Carrier and succeed on your own terms.
          </p>
        </v-col>
        <v-col class="col-md-8">
          <div class="d-flex red justify-end">
            <div class="about-us__form_background-color">
              <v-form ref="form" v-model="valid" lazy-validation>
                <div class="about-us__form-container">
                  <div>
                    <p class="mb-1 white--text">Destination <span>*</span></p>
                    <v-text-field background="white" outlined dense />
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
                    <v-btn color="#E30707" dark depressed>more info</v-btn>
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
  })
}
</script>

<style scoped lang="scss">
.color-about-us {
  color: #00126a;
}

.about-us__text {
  line-height: 32px;
}

.about-us__background-container {
  padding: 48px 0;
  background-color: #f4f4f4;
}

.about-us__form_background-color {
  background-color: #071c87;
  width: 60%;
  border-radius: 8px;
}

.about-us__form-container {
  padding: 24px;
}

::v-deep .v-input__control > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  background-color: white;
}
</style>
