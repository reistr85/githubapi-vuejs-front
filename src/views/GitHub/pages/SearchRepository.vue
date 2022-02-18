<template>
  <v-alert type="success" v-if="success">Repositório favoritado com sucesso.</v-alert>
  <v-alert type="error" v-if="error">{{ errorMessage }}</v-alert>
  
  <v-card elevation="2" max-width="1000" class="mx-auto my-12">
    <v-card-title>
      Pesquisar Repositório no GitHub
    </v-card-title>
    <v-divider></v-divider>

    <v-card-content>
      <v-text-field v-model="search" label="Digite nome do repositório Git" placeholder="digite o nome"  outlined dense></v-text-field>
    </v-card-content>

    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="primary" rounded="lg" :loading="loading" @click="actionSearch()">
        <v-icon>mdi-check-circle</v-icon>
        Pesquisar
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-card max-width="1000" class="mx-auto" v-if="displayCard">
    <v-list three-line>
      <v-card-title>{{ repository.full_name }}</v-card-title>
      <v-divider></v-divider>

        <v-card-content>
          <v-list-item>
            <v-img max-width="80" :src="repository.organization?.avatar_url" class="mr-5"></v-img>

            <v-list-item-content>
              <v-list-item-title>{{ repository.description }}</v-list-item-title>
              <v-list-item-subtitle>{{ repository.html_url }}</v-list-item-subtitle>
              <v-chip class="mt-3" size="x-small"  color="primary">{{ repository.stargazers_count }} <v-icon>mdi-star</v-icon></v-chip>
            </v-list-item-content>
          </v-list-item>
        </v-card-content>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="secondary" rounded="lg" :loading="loading" @click="actionFavorite()">
            <v-icon>mdi-star</v-icon>
            Favoritar
          </v-btn>
        </v-card-actions>
    </v-list>
  </v-card>
</template>

<script>
import axios from '../../../service/index.js';

export default {
  name: 'SearchRepository',
  data() {
    return {
      search: 'vuejs/vue',
      repository: {},
      loader: false,
      displayCard: false,
      success: false,
      error: false,
      errorMessage: '',
    }
  },
  methods: {
    async actionSearch() {
      const res = await axios.post('/github/get-repository-by-name', { name: this.search });
      this.repository = res.data[0];
      this.displayCard = true;
      this.success = false;
      this.error = false;
    },
    async actionFavorite() {
      const params = {
        github_id: this.repository.id,
        name: this.repository.full_name,
        description: this.repository.description,
        url: this.repository.html_url,
        avatar_url: this.repository.organization.avatar_url,
        stargazers_count: this.repository.stargazers_count,
        language: this.repository.language
      }

      await axios.post('/repositories', params).then(() => {
        this.repository = {}
        this.displayCard = false;
        this.success = true;
      }).catch((err) => {
        this.errorMessage = 'Erro ao favoritar';
        if(err.response?.data?.error)
          this.errorMessage = err.response.data.message
        this.error = true;
      });
      
    },
  }
}
</script>

<style>

</style>