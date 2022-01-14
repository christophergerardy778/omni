<template>
  <div>
    <v-navigation-drawer v-model="isActive" temporary app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <div class="navigationDrawer--title">
                <img src="~/assets/img/logo.png" height="50px" />
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item>
          <v-list-item-content @click="localePathEx('index')">
            <v-btn color="#071C87" block text>
              Home
              <v-spacer/>
              <v-icon right dark large color="#DD0003">
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="localePathEx('about-us')">
          <v-list-item-content>
            <v-btn color="#071C87" block text>
              About Us
              <v-spacer/>
              <v-icon right dark large color="#DD0003">
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="localePathEx('services')">
          <v-list-item-content>
            <v-btn color="#071C87" block text>
              Services
              <v-spacer/>
              <v-icon right dark large color="#DD0003">
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="localePathEx('coverage')">
          <v-list-item-content>
            <v-btn color="#071C87" block text>
              Coverage
              <v-spacer/>
              <v-icon right dark large color="#DD0003">
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" color="#071C87" block text>
                    Contact
                    <v-spacer/>
                    <v-icon right dark large color="#DD0003">
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="goToContactSection('contact')">
                    <v-list-item-title>Quote</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="goToContactSection('join')">
                    <v-list-item-title>Omni Carriers</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevate-on-scroll elevation="1" color="white" fixed>
      <img @click="localePathEx('index')" src="~/assets/img/logo.png" height="100%" />
      <v-spacer />
      <div class="d-none d-md-flex">
        <v-btn text color="#071C87" @click="localePathEx('index')">Home</v-btn>
        <v-btn text color="#071C87" @click="localePathEx('about-us')"
        >About US</v-btn
        >
        <v-btn text color="#071C87" @click="localePathEx('services')">
          Services
        </v-btn>
        <v-btn text color="#071C87" @click="localePathEx('coverage')"
        >Coverage</v-btn
        >
        <!--
        <v-btn text color="#071C87" @click="localePathEx('contact-us')"
          >Contact US</v-btn
        >
        -->
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text color="#071C87"
                v-bind="attrs"
                v-on="on"
              >
                Contact US
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="goToContactSection('contact')">
                <v-list-item-title>Quote</v-list-item-title>
              </v-list-item>
              <v-list-item @click="goToContactSection('join')">
                <v-list-item-title>Omni Carriers</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <v-spacer />
      <div class="d-none d-md-flex app-bar-icon-container">
        <div>
          <v-btn @click="localePathEx('contact-us')" icon dark small color="#071C87"
          ><v-icon>mdi-email</v-icon></v-btn
          >
        </div>
        <div>
          <v-btn
            @click="$i18n.setLocale('es')"
            :outlined="$i18n.locale !== 'es'"
            depressed
            dark
            small
            color="#071C87"
          >ES</v-btn
          >
          <v-btn
            :outlined="$i18n.locale !== 'en'"
            depressed
            small
            dark
            color="#071C87"
            @click="$i18n.setLocale('en')"
          >EN</v-btn
          >
        </div>
      </div>
      <v-app-bar-nav-icon @click="isActive = true" class="d-flex d-md-none" color="#00126A" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    localePathEx(route) {
      this.$router.push(this.localePath(route))
    },
    goToContactSection(sectionName) {
      this.$router.push({ path: 'contact-us', query: { section: sectionName } })
    },
  },
  data: () => ({
    isActive: false,
  }),
}
</script>

<style>
.app-bar-icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
}

.navigationDrawer--title {
  display: flex;
  justify-content: space-between;
}
</style>
