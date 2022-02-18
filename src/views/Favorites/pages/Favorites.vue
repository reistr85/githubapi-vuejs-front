<template>
  <v-card elevation="2" max-width="1000" class="mx-auto my-12 cardRepositories">
    <v-card-title>
      Repositórios Favoritos
    </v-card-title>
    <v-divider></v-divider>
    
    <v-card-content>
      <v-list two-line>
        <v-list-item v-for="repository in repositories" :key="repository.id">
        <v-list-item-content class="d-flex list-item-content">
          <div class="mr-5">
            <v-img width="80" :src="repository.avatar_url"></v-img>
          </div>

          <div class="content-main">
            <v-list-item-title v-html="repository.name"></v-list-item-title>
            <v-list-item-subtitle v-html="repository.description"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="repository.url" class="mt-3"></v-list-item-subtitle>
            <v-chip class="mt-3" size="x-small" color="primary">{{ repository.stargazers_count }} <v-icon>mdi-star</v-icon></v-chip>
            
            <br>
            <v-btn color="secondary" rounded="lg" size="small" class="mt-5" :loading="loading" @click="destroyRepository(repository.id)">
              <v-icon>mdi-star</v-icon>
              Desfavoritar
            </v-btn>
            <v-divider class="mt-3"></v-divider>
          </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-content>
  </v-card>
</template>

<script>
import axios from '../../../service/index.js';
  export default {
    data: () => ({
      repositories: [],
    }),
    mounted() {
      this.getRepositories();
    },
    methods: {
      async getRepositories() {
        const res = await axios.get('/repositories');
        this.repositories = res.data;
      },
      async destroyRepository(id) {
        await axios.delete(`/repositories/${id}`);
        this.getRepositories();
      },
    }
  }
</script>

<style scoped>
.v-list {
  overflow: hidden !important;
}

.list-item-content, .content-main {
  width: 100% !important;
}
</style>