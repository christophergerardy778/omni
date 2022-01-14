<template>
  <div id="home">
    <!-- <div class="home-title-content">
      <div class="home-title-img">
        <h2>Logistics services in México and United States</h2>
        <p>We help you make it possible</p>
      </div>
    </div> -->
    <v-container fluid class="fill-height pa-0">
      <v-img max-height="858" :aspect-ratio="10/10" src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133094/Img%20Omni%20WEB/Pag%20HOME/Header/service_rgib2n.png">
        <v-row justify="center">
          <v-col cols="12">
            <div class="home-title-content">
        <h2>Logistics services in México and United States</h2>
        <p>We help you make it possible</p>
    </div>
          </v-col>
        </v-row>
      </v-img>
    </v-container>
    <v-container>
      <v-row justify="center" align="center">
        <v-col class="col-md-8">
          <h2 class="text-center home-subtitle">
            We want to be part of your supply and distribution chain!
          </h2>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-col class="col-12 col-md-6">
          <v-card class="home-card-bg" elevation="0">
            <v-card-text>
              <v-row>
                <v-col class="col-12 col-md-8">
                  <v-img
                    height="320"
                    src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133070/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Servicios/Home_Service_Storage_309x327_hwpehn.png"
                  />
                </v-col>
                <v-col class="d-flex justify-center flex-column">
                  <h3 class="card-title-home text-center text-md-left">Storage</h3>
                  <v-btn
                    color="#E30707"
                    class="mt-8"
                    text
                    @click="goToServiceSection('storage')"
                  >
                    View Service
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="col-12 col-md-6">
          <v-card class="home-card-bg" elevation="0">
            <v-card-text>
              <v-row>
                <v-col class="col-12 col-md-8">
                  <v-img
                    height="320"
                    src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133069/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Servicios/Home_Service_Land_Transport__309x327_k9pbts.png"
                  />
                </v-col>
                <v-col class="d-flex justify-center flex-column">
                  <h3 class="card-title-home text-center text-md-left">Land Transport</h3>
                  <v-btn
                    color="#E30707"
                    class="mt-8"
                    text
                    @click="goToServiceSection('land')"
                  >
                    View Service
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="col-12 col-md-6">
          <v-card class="home-card-bg" elevation="0">
            <v-card-text>
              <v-row>
                <v-col class="col-12 col-md-8">
                  <v-img
                    height="320"
                    src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133067/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Servicios/Home_Service_import_309x327_hyraqo.png"
                  />
                </v-col>
                <v-col class="d-flex justify-center flex-column">
                  <h3 class="card-title-home text-center text-md-left">Import & Export</h3>
                  <v-btn
                    color="#E30707"
                    class="mt-8"
                    text
                    @click="goToServiceSection('iae')"
                  >
                    View Service
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="col-12 col-md-6">
          <v-card class="home-card-bg" elevation="0">
            <v-card-text>
              <v-row class="home-flex-wrap">
                <v-col class="col-12 col-md-8">
                  <v-img
                    height="320"
                    src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133070/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Servicios/Home_Service_TransportandDistribution_309x327_gjkttz.png"
                  />
                </v-col>
                <v-col class="d-flex justify-center flex-column">
                  <h3 class="card-title-home text-center text-md-left">Transport & Distribution</h3>
                  <v-btn
                    color="#E30707"
                    class="mt-8"
                    text
                    @click="goToServiceSection('transport')"
                  >
                    View Service
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="my-10">
        <v-col class="col-md-8">
          <h2 class="text-center home-subtitle">
            Reasons why we are your best option!
          </h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="my-10">
      <v-row>
        <v-col class="col-12 col-md-3">
          <div class="section">
            <div class="section-badge">
              <div class="section-badge-img" />
            </div>
            <div class="section-line">
              <img
                src="../static/images/home/line1.png"
                width="165"
                height="31"
              />
            </div>
          </div>
          <p class="section-txt">
            Solutions up to scale: We offer experience and flexibility to
            satisfy any type of project
          </p>
        </v-col>
        <v-col class="col-12 col-md-3">
          <div class="section">
            <div class="section-badge">
              <div class="section-badge-img" />
            </div>
            <div class="section-line">
              <img
                src="../static/images/home/line2.png"
                width="165"
                height="28"
              />
            </div>
          </div>
          <p class="section-txt">
            Track & Trace: Constant monitoring of merchandise visualizing load’s
            location at all times
          </p>
        </v-col>
        <v-col class="col-12 col-md-3">
          <div class="section">
            <div class="section-badge">
              <div class="section-badge-img" />
            </div>
            <div class="section-line">
              <img
                src="../static/images/home/line3.png"
                width="165"
                height="31"
              />
            </div>
          </div>
          <p class="section-txt">
            Competitive rates: Maintaining quality in our services every time
          </p>
        </v-col>
        <v-col class="col-12 col-md-3">
          <div class="section">
            <div class="section-badge">
              <div class="section-badge-img" />
            </div>
          </div>
          <p class="section-txt">
            Guaranteed safety: Making sure our strategic partners comply with
            our necesary permits in order to be part of our operation and
            guarantee the safety of your load
          </p>
        </v-col>
      </v-row>
    </v-container>

    <div class="home-bg-coverge-responsive">
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="col-12 col-md-10">
            <h3 class="card-title-home">Coverage</h3>
            <p class="mt-4">Expand your company’s horizons!</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container v-if="$vuetify.breakpoint.smAndDown" fluid class="pa-0">
      <v-row justify="center">
        <v-col cols="11">
          <v-img class="align-end" position="20%" :aspect-ratio="5/6" src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642134508/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Coverage/continent_dyobdi.png">
            <v-row justify="center">
              <v-col cols="12" class="text-center">
                <v-btn dark color="#E30707">More info</v-btn>
              </v-col>
            </v-row>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="!$vuetify.breakpoint.smAndDown" class="home-bg-coverge">
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="col-12 col-md-10">
            <div>
              <h3 class="card-title-home">Coverage</h3>
              <p class="mt-4">Expand your company’s horizons!</p>
              <v-btn
                color="#E30707"
                dark
                depressed
                @click="$router.push('coverage')"
                >More info</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- <div class="home-bg-coverge-responsive">
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="col-12 col-md-10">
            <v-btn color="#E30707" dark depressed>More info</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div> -->

    <v-container class="my-10">
      <v-row v-if="!$vuetify.breakpoint.smAndDown" justify="center" align="center">
        <v-col class="col-12 col-md-10 mb-10">
          <v-row>
            <div class="col-md-6">
              <h4 class="home-subtitle-1">Contact us</h4>
              <p class="mt-4">
                Find out how we can help out and bring solutions to all your
                logistics needs.
              </p>
              <div class="target-btn">
                <v-btn
                  color="#E30707"
                  dark
                  depressed
                  @click="goToContactSection('contact')"
                  >More info</v-btn
                >
              </div>
            </div>
            <div class="col-md-6">
              <v-img
                height="200"
                src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133103/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Contact%20Us/CONTACT_US_ingles_zxum9o.png"
              />
            </div>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-10 mb-10">
          <v-row>
            <v-col class="col-md-6">
              <h4 class="home-subtitle-1">Certified & Safe Transport</h4>
              <p class="mt-4">
                We certify only the best carrier in the business to transport
                our clients loads in a fast & safe way. Want to be an OMNI
                Carrier?
              </p>
              <div class="target-btn">
                <v-btn
                  color="#E30707"
                  dark
                  depressed
                  @click="goToContactSection('join')"
                  >More info</v-btn
                >
              </div>
            </v-col>
            <div class="col-md-6">
              <v-img
                height="200"
                src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133059/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Cartified%20and%20Safe/Home__Certified_376x214_b8vvbe.png"
              />
            </div>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-10 mb-10"> </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.smAndDown" justify="center" no-gutters class="marco">
        <v-col cols="12" class="text-center">
          <v-img
                :aspect-ratio="5/5"
                height="319"
                src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133103/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Contact%20Us/CONTACT_US_ingles_zxum9o.png"
              />
        </v-col>
        <v-col cols="12" class="text-center subTituloMobile my-4">
          Contact Us <v-btn class="ml-2" small color="#2E51FF"  @click="localePathEx('contact-us')"> <v-icon color="white">mdi-arrow-right</v-icon></v-btn>
        </v-col>
        <v-col cols="10" class="textoMobil my-3 mb-9">
          Find out how we can help out and bring solutions to all your logistics needs.
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.smAndDown" justify="center" no-gutters class="marco mt-12" style="background-color: #f2f4f6">
        <v-col cols="12" class="text-center">
          <v-img
                :aspect-ratio="5/5"
                height="319"
                src="https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133059/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Cartified%20and%20Safe/Home__Certified_376x214_b8vvbe.png"
              />
        </v-col>
        <v-col cols="12" class="text-center subTituloMobile my-4">
          Certified & Safe Transport <v-btn class="ml-2" small color="#2E51FF"  @click="goToContactSection('join')"> <v-icon color="white">mdi-arrow-right</v-icon></v-btn>
        </v-col>
        <v-col cols="10" class="textoMobil my-3 mb-9">
          We certify only the best carrier in the business to transport
          our clients loads in a fast & safe way. Want to be an OMNI
          Carrier?
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mb-10">
      <v-row align="center" justify="center">
        <v-col class="col-12 col-md-10">
          <h3 class="home-subtitle-1">
            We guarantee the safety of your loads by working with today's
            standard carrier certifications.
          </h3>
          <p class="mt-4">
            We make sure our strategic partners comply with necessary
            certifications and permits in order to be a part of our operation
            and offer excellent service.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-col lg="12" md="12" sm="11" cols="11">
          <swiper-certificates/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SwiperCertificates from "~/components/SwiperCertificates";
export default {
  components: {SwiperCertificates},
  nuxtI18n: {
    paths: {
      en: '/home',
      es: '/inicio',
    },
  },
  name: 'IndexPage',
  methods: {
    goToServiceSection(sectionName) {
      this.$router.push({ path: 'services', query: { section: sectionName } })
    },
    goToContactSection(sectionName) {
      this.$router.push({ path: 'contact-us', query: { section: sectionName } })
    },
  },
}
</script>
<style scoped>
.home-subtitle {
  font-size: 48px;
  color: #00126a;
}

.home-title-content {
  align-content: center;
  height: 120vh;
  padding-bottom: 2rem;

  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.38);
}

.home-title-content h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 56px;

  padding: 7rem 25% 0;
}

.home-title-content p {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
}

.home-title-img {
  background-image: url('https://res.cloudinary.com/omni-international-logistics/image/upload/v1642133094/Img%20Omni%20WEB/Pag%20HOME/Header/service_rgib2n.png');
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-position: center;
}

.home-subtitle-1 {
  font-size: 36px;
  color: #00126a;
}

.home-flex-wrap {
  flex-wrap: nowrap;
}

.home-card-bg {
  background-color: #f2f4f6;
}

.card-title-home {
  line-height: normal;
  color: #00126a;
  font-size: 32px;
}

.home-bg-coverge {
  height: 436px;
  display: flex;
  align-items: center;
  background-color: #f2f4f6;
  background-position-x: right;
  background-size: auto 100%;
  background-image: url('https://res.cloudinary.com/omni-international-logistics/image/upload/v1642134508/Img%20Omni%20WEB/Pag%20HOME/Seccion%20Coverage/continent_dyobdi.png');
}

.home-bg-coverge-responsive {
  display: none;
}

.section {
  display: flex;
  margin-bottom: 2rem;
}

.section-badge {
  background: #ccd4ff;
  height: 56px;
  width: 56px;

  border-radius: 50px;
}

.section-badge-img {
  height: 100%;
  width: 100%;

  background-image: url('../static/images/home/img.png');
  background-position: center;
}

.section-line {
  max-width: 70%;
  padding: 1rem;
  background-position: center;
}

.target-btn {
  text-align: right;
}

@media screen and (max-width: 1000px) {
  .home-title-content h2 {
    padding: 7rem 10% 0;
    font-size: 48px;
  }
  .home-title-content p {
    padding: 0 10% 0;
    font-size: 20px;
  }
}

@media screen and (max-width: 959px) {
  .home-flex-wrap {
    flex-wrap: wrap;
  }

  .target-btn {
    text-align: center;
  }

  .section {
    display: none;
  }
  .section-txt {
    margin: 0;
    padding: 1rem;
    background: #f2f4f6;
    border-radius: 3px;
  }

  .home-bg-coverge {
    background-position: center;
  }

  .home-bg-coverge div {
    display: none;
  }

  .home-bg-coverge-responsive {
    display: initial;
    text-align: center;
  }

  .home-bg-coverge-responsive h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;

    letter-spacing: -1px;
    color: #00126a;
  }

  .home-bg-coverge-responsive p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;

    text-align: center;
    font-feature-settings: 'salt' on, 'liga' off;

    color: #4d4d4d;
  }
}

@media screen and (max-width: 600px) {
  .home-title-content h2 {
    padding: 5rem 0 0;
  }
  .home-title-content p {
    padding: 0;
  }
}
</style>
