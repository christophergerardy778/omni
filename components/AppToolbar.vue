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
              {{ $t('navitationMenu.home') }}
              <v-spacer />
              <v-icon right dark large color="#DD0003">
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="localePathEx('about-us')">
          <v-list-item-content>
            <v-btn color="#071C87" block text>
              {{ $t('navitationMenu.aboutUs') }}
              <v-spacer />
              <v-icon right dark large color="#DD0003">
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="localePathEx('services')">
          <v-list-item-content>
            <v-btn color="#071C87" block text>
              {{ $t('navitationMenu.services') }}
              <v-spacer />
              <v-icon right dark large color="#DD0003">
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="localePathEx('coverage')">
          <v-list-item-content>
            <v-btn color="#071C87" block text>
              {{ $t('navitationMenu.coverage') }}
              <v-spacer />
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
                    {{ $t('navitationMenu.contactUs') }}
                    <v-spacer />
                    <v-icon right dark large color="#DD0003">
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="goToContactSection('contact')">
                    <v-list-item-title>{{
                      $t('navitationMenu.contactUsQuote')
                    }}</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="goToContactSection('join')">
                    <v-list-item-title>{{
                      $t('navitationMenu.contactUsCarrier')
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevate-on-scroll elevation="1" color="white" fixed>
      <img
        @click="localePathEx('index')"
        src="~/assets/img/logo.png"
        height="100%"
      />
      <v-spacer />
      <div class="d-none d-md-flex">
        <v-btn text color="#071C87" @click="localePathEx('index')">{{
          $t('navitationMenu.home')
        }}</v-btn>
        <v-btn text color="#071C87" @click="localePathEx('about-us')">{{
          $t('navitationMenu.aboutUs')
        }}</v-btn>
        <v-btn text color="#071C87" @click="localePathEx('services')">
          {{ $t('navitationMenu.services') }}
        </v-btn>
        <v-btn text color="#071C87" @click="localePathEx('coverage')">{{
          $t('navitationMenu.coverage')
        }}</v-btn>
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text color="#071C87" v-bind="attrs" v-on="on">
                Contact US
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="goToContactSection('contact')">
                <v-list-item-title>{{
                  $t('navitationMenu.contactUsQuote')
                }}</v-list-item-title>
              </v-list-item>
              <v-list-item @click="goToContactSection('join')">
                <v-list-item-title>{{
                  $t('navitationMenu.contactUsCarrier')
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <v-spacer />
      <div class="d-none d-md-flex app-bar-icon-container">
        <div>
          <v-btn
            @click="localePathEx('contact-us')"
            icon
            dark
            small
            color="#071C87"
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
      <div class="d-md-none d-flex app-bar-icon-container-mini">
        <div style="display: flex;" class="pt-5">
            <p @click="$i18n.setLocale('es')" :class="$i18n.locale !== 'es' ? 'mr-2 inactivo':'mr-2 activo'">ES</p>
            <p @click="$i18n.setLocale('en')" :class="$i18n.locale !== 'en' ? 'inactivo':'activo'">ENG</p>
        </div>
        <div>
          <v-app-bar-nav-icon
            @click="isActive = true"
            class="d-flex"
            color="#00126A"
          />
        </div>
      </div>
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
.app-bar-icon-container-mini {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0px;
}

.navigationDrawer--title {
  display: flex;
  justify-content: space-between;
}
.activo {
  font-family: Crossten Soft;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 133% */
  color: #00126A;
}
.inactivo {
  font-family: Crossten Soft;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 133% */
  color: #C4C4C4;
}
</style>
