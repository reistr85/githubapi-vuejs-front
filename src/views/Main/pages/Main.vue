<template>
  <v-app>
    <v-main>
      <v-app-bar elevation="4" outlined>
        <v-bottom-navigation>
          <v-btn @click="$router.push({ name: 'home' })">
            <span>Início</span>

            <v-icon>mdi-history</v-icon>
          </v-btn>

          <v-btn @click="$router.push({ name: 'git-hub' })">
            <span>GitHub</span>

            <v-icon>mdi-map-marker</v-icon>
          </v-btn>

          <v-btn @click="$router.push({ name: 'favorites' })">
            <span>Favoritos</span>

            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-app-bar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
    }
  },
}
</script>

<style>

</style>