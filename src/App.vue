<template>
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable width="150px" collapse="" side="left"
      v-model:open="openSide"
    >
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-header>Menu</v-ons-list-header>
          <v-ons-list-item v-for="page in pages" :key="page" tappable modifier="chevron"
            @click="currentPage = page; openSide = false"
          >
            <div class="center">{{ page }}</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <component :is="currentPage" :toggle-menu="() => openSide = !openSide"></component>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
  import home from './components/homePage.vue';
  import news from './components/newsPage.vue';
  import settings from './components/settingsPage.vue';

  export default {
    data() {
      return {
        currentPage: 'home',
        pages: ['home', 'news', 'settings'],
        openSide: false
      };
    },
    components: {
      home,
      news,
      settings
    }
  }
</script>
