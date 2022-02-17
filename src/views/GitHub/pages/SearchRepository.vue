<template>
  <v-card elevation="2" max-width="1000" class="mx-auto my-12">
    <v-card-title>
      Pesquisar Repositório no GitHub
    </v-card-title>
    <v-divider></v-divider>

    <v-card-text>
      <v-text-field v-model="search" label="Nome do repositório Git" placeholder="digite o nome" outlined dense></v-text-field>
    </v-card-text>

    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="primary" @click="actionSearch()">Pesquisar</v-btn>
    </v-card-actions>
  </v-card>

  <v-card max-width="1000" class="mx-auto">
    <v-list three-line>
      <v-card-title>{{ repository.full_name }}</v-card-title>
      <v-divider></v-divider>

        <v-card-text>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="repository.organization?.avatar_url"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ repository.description }}</v-list-item-title>
              <v-list-item-subtitle>{{ repository.avatar_url }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
    </v-list>
  </v-card>
</template>

<script>
import axios from '../../../service/index.js';

export default {
  name: 'SearchRepository',
  data() {
    return {
      search: '',
      repository: {}
    }
  },
  methods: {
    async actionSearch() {
      const res = await axios.post('/github/get-repository-by-name', { name: this.search });

     this.repository = res.data[0];
    }
  }
}
</script>

<style>

</style>