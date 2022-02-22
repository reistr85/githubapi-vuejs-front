<template>
  <v-alert type="success" v-if="success">Repositório favoritado com sucesso.</v-alert>
  <v-alert type="error" v-if="error">{{ errorMessage }}</v-alert>
  
  <Card class="mx-auto my-12">
    <template v-slot:title>
      Pesquisar Repositório no GitHub
    </template>

    <template v-slot:content>
      <v-text-field v-model="search" label="Digite nome do repositório Git" placeholder="digite o nome"  outlined dense></v-text-field>
    </template>

    <template v-slot:actions>
      <v-btn color="primary" rounded="lg" :loading="loading" @click="actionSearch()"><v-icon>mdi-check-circle</v-icon>Pesquisar</v-btn>
      <v-progress-circular v-if="loadingBtnSearch" class="ml-5" indeterminate color="primary" />
    </template>
  </Card>

  <Card class="mx-auto my-12" v-if="displayCard">
    <template v-slot:title>
      {{ repository.full_name }}
    </template>

    <template v-slot:content>
      <v-list-item>
        <v-img max-width="80" :src="repository.organization?.avatar_url" class="mr-5"></v-img>

        <v-list-item-content>
          <v-list-item-title>{{ repository.description }}</v-list-item-title>
          <v-list-item-subtitle>{{ repository.html_url }}</v-list-item-subtitle>
          <v-chip class="mt-3" size="x-small"  color="primary">{{ repository.stargazers_count }} <v-icon>mdi-star</v-icon></v-chip>
        </v-list-item-content>
      </v-list-item>
    </template>

    <template v-slot:actions>
      <v-btn color="secondary" rounded="lg" :loading="loading" @click="actionFavorite()"><v-icon>mdi-star</v-icon>Favoritar</v-btn>
      <v-progress-circular v-if="loadingBtnFavorite" class="ml-5" indeterminate color="primary" />
    </template>
  </Card>
</template>

<script>
import axios from '../../../service/index.js';
import Card from '@/components/Card';

export default {
  name: 'SearchRepository',
  components: { Card },
  data() {
    return {
      search: '',
      repository: {},
      loader: false,
      displayCard: false,
      success: false,
      error: false,
      errorMessage: '',
      loadingBtnSearch: false,
      loadingBtnFavorite: false,
    }
  },
  methods: {
    actionSearch() {
      if(this.search === '') {
        this.errorMessage = 'Digite o nome do repositório';
        this.error = true;
      }
      this.loadingBtnSearch = true;
      axios.post('/github/get-repository-by-name', { name: this.search }).then((res) => {
        this.repository = res.data;
        this.displayCard = true;
        this.success = false;
        this.error = false;
      }).catch(() => {
      }).finally(() => {
        this.search = ''
        this.loadingBtnSearch = false;
      })
      
    },
    actionFavorite() {
      this.loadingBtnFavorite = true;
      const params = {
        github_id: this.repository.id,
        name: this.repository.full_name,
        description: this.repository.description,
        url: this.repository.html_url,
        avatar_url: this.repository.organization.avatar_url,
        stargazers_count: this.repository.stargazers_count,
        language: this.repository.language
      }

      axios.post('/repositories', params).then(() => {
        this.repository = {}
        this.displayCard = false;
        this.success = true;
      }).catch((err) => {
        this.errorMessage = 'Erro ao favoritar';
        if(err.response?.data?.error)
          this.errorMessage = err.response.data.message
        this.error = true;
      }).finally(() => {
        this.loadingBtnFavorite = false;
      })
    },
  }
}
</script>

<style>

</style>