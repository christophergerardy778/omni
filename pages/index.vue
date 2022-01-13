<template>
  <div id="home">
    <div class="home-title-content">
      <div class="home-title-img">
        <h2>Logistics services in México and United States</h2>
        <p>We help you make it possible</p>
      </div>
    </div>
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
                    src="https://blog.citytroops.com/wp-content/uploads/2021/03/Untitled-design-41.png"
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
                    src="https://nulinetransport.com/wp-content/uploads/2019/09/NulineSocialShare-1.jpg"
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
              <v-row class="home-flex-wrap">
                <v-col class="col-12 col-md-8">
                  <v-img
                    height="320"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjtV31wOvqAapnpMCQgPcmAlG9g99X_d3zg&usqp=CAU"
                  />
                </v-col>
                <v-col class="d-flex justify-center flex-column">
                  <h3 class="card-title-home text-center text-md-left">Transport & Distributiont</h3>
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
        <v-col class="col-12 col-md-6">
          <v-card class="home-card-bg" elevation="0">
            <v-card-text>
              <v-row>
                <v-col class="col-12 col-md-8">
                  <v-img
                    height="320"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjtV31wOvqAapnpMCQgPcmAlG9g99X_d3zg&usqp=CAU"
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

    <div class="home-bg-coverge">
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

    <div class="home-bg-coverge-responsive">
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="col-12 col-md-10">
            <v-btn color="#E30707" dark depressed>More info</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container class="my-10">
      <v-row justify="center" align="center">
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
                src="https://blog.citytroops.com/wp-content/uploads/2021/03/Untitled-design-41.png"
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
                src="https://blog.citytroops.com/wp-content/uploads/2021/03/Untitled-design-41.png"
              />
            </div>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-10 mb-10"> </v-col>
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
  </div>
</template>

<script>
export default {
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
  background-image: url('../static/images/home/truckHeader.png');
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
  background-image: url('../static/images/home/continent.png');
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
