<template>
  <v-card elevation="2" max-width="1000">
    <v-card-title>
      <slot name="title" />
    </v-card-title>
    <v-divider></v-divider>

    <v-card-content>
      <slot name="content" />
    </v-card-content>

    <v-divider></v-divider>
    <v-card-actions>
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>