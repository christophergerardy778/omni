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
            <v-form @submit.prevent="sendContactUsEmail">
              <div>
                <p class="mb-1">Name <span>*</span></p>
                <v-text-field
                  color="#00126a"
                  outlined
                  dense
                  :error-messages="contactUsFormName"
                  @input="$v.contactUsForm.name.$touch()"
                  @blur="$v.contactUsForm.name.$touch()"
                  v-model="contactUsForm.name"
                />
              </div>
              <div>
                <p class="mb-1">Name of company</p>
                <v-text-field
                  color="#00126a"
                  outlined
                  dense
                  v-model="contactUsForm.company"
                />
              </div>
              <div>
                <p class="mb-1">Email <span>*</span></p>
                <v-text-field
                  color="#00126a"
                  outlined
                  dense
                  :error-messages="contactUsEmail"
                  @input="$v.contactUsForm.email.$touch()"
                  @blur="$v.contactUsForm.email.$touch()"
                  v-model="contactUsForm.email"
                />
              </div>
              <div>
                <p class="mb-1">Telephone <span>*</span></p>
                <v-text-field
                  color="#00126a"
                  outlined
                  dense
                  :error-messages="contactUsTelephone"
                  @input="$v.contactUsForm.telephone.$touch()"
                  @blur="$v.contactUsForm.telephone.$touch()"
                  v-model="contactUsForm.telephone"
                />
              </div>
              <div>
                <p class="mb-1">Equipament requiered</p>
                <v-text-field
                  color="#00126a"
                  outlined
                  dense
                  v-model="contactUsForm.equipment"
                />
              </div>
              <div>
                <p class="mb-1">Source</p>
                <v-text-field
                  color="#00126a"
                  outlined
                  dense
                  v-model="contactUsForm.source"
                />
              </div>
              <div>
                <p class="mb-1">Destination</p>
                <v-text-field
                  color="#00126a"
                  outlined
                  dense
                  v-model="contactUsForm.destination"
                />
              </div>
              <div>
                <p class="mb-1">Comments</p>
                <v-textarea
                  color="#00126a"
                  outlined
                  dense
                  v-model="contactUsForm.comments"
                />
              </div>
              <div class="d-flex justify-end">
                <v-btn color="#E30707" dark depressed type="submit"
                  >more info</v-btn
                >
              </div>
            </v-form>
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
              <v-form @submit.prevent="sendJoinUsEmail">
                <div class="about-us__form-container">
                  <div>
                    <p class="mb-1 white--text">Destination</p>
                    <v-text-field
                      dense
                      outlined
                      v-model="joinUsForm.destination"
                    />
                  </div>
                  <div>
                    <p class="mb-1 white--text">Phone <span>*</span></p>
                    <v-text-field
                      dense
                      outlined
                      color="white"
                      v-model="joinUsForm.telephone"
                      :error-messages="joinUsTelephone"
                      @input="$v.joinUsForm.telephone.$touch()"
                      @blur="$v.joinUsForm.telephone.$touch()"
                    />
                  </div>
                  <div>
                    <p class="mb-1 white--text">Email <span>*</span></p>
                    <v-text-field
                      color="white"
                      outlined
                      dense
                      v-model="joinUsForm.email"
                      :error-messages="joinUsEmail"
                      @input="$v.joinUsForm.email.$touch()"
                      @blur="$v.joinUsForm.email.$touch()"
                    />
                  </div>
                  <div>
                    <p class="mb-1 white--text">Company</p>
                    <v-text-field color="white" outlined dense />
                  </div>
                  <div>
                    <p class="mb-1 white--text">Message</p>
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
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  async mounted() {
    const re = await this.$axios.post('/api/email-contact-us');
    console.log('hola');
    console.log(re);
  },
  mixins: [validationMixin],
  nuxtI18n: {
    paths: {
      en: '/contact-us',
      es: '/contactanos',
    },
  },
  validations: {
    contactUsForm: {
      name: { required },
      email: { required, email },
      telephone: { required, minLength: minLength(10) },
    },
    joinUsForm: {
      email: { required, email },
      telephone: { required, minLength: minLength(10) },
    },
  },
  data: () => ({
    contactUsForm: {
      type: 0,
      name: '',
      company: '',
      email: '',
      telephone: '',
      equipment: '',
      source: '',
      destination: '',
      comments: '',
    },
    joinUsForm: {
      type: 1,
      destination: '',
      telephone: '',
      email: '',
      company: '',
      message: '',
    },
  }),
  methods: {
    sendJoinUsEmail() {
      this.$v.joinUsForm.$touch()
      if (this.$v.joinUsForm.invalid) {
        console.log('pasa')
      } else {
        console.log('no pasa')
      }
    },
    sendContactUsEmail() {
      this.$v.contactUsForm.$touch()
      if (this.$v.contactUsForm.invalid) {
        console.log('pasa')
      } else {
        console.log('no pasa')
      }
    },
  },
  computed: {
    contactUsFormName() {
      const errors = []
      if (!this.$v.contactUsForm.name.$dirty) return errors
      !this.$v.contactUsForm.name.required && errors.push('Name is required.')
      return errors
    },
    contactUsEmail() {
      const errors = []
      if (!this.$v.contactUsForm.email.$dirty) return errors
      !this.$v.contactUsForm.email.email && errors.push('Must be valid e-mail')
      !this.$v.contactUsForm.email.required && errors.push('E-mail is required')
      return errors
    },
    contactUsTelephone() {
      const errors = []
      if (!this.$v.contactUsForm.telephone.$dirty) return errors
      !this.$v.contactUsForm.telephone.minLength &&
        errors.push('Telephone must be at min 10 characters long')
      !this.$v.contactUsForm.telephone.required &&
        errors.push('Telephone is required.')
      return errors
    },
    joinUsEmail() {
      const errors = []
      if (!this.$v.joinUsForm.email.$dirty) return errors
      !this.$v.joinUsForm.email.email && errors.push('Must be valid e-mail')
      !this.$v.joinUsForm.email.required && errors.push('E-mail is required')
      return errors
    },
    joinUsTelephone() {
      const errors = []
      if (!this.$v.joinUsForm.telephone.$dirty) return errors
      !this.$v.joinUsForm.telephone.minLength &&
        errors.push('Telephone must be at min 10 characters long')
      !this.$v.joinUsForm.telephone.required &&
        errors.push('Telephone is required.')
      return errors
    },
  },
}
</script>

<style scoped lang="scss">
.color-about-us {
  color: #00126a;
}

.header-container {
  background-color: #071c87;
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
