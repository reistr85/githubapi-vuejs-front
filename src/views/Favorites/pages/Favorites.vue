<template>
  <Card class="mx-auto my-12">
    <template v-slot:title>
      Repositórios Favoritos <v-progress-circular v-if="loadingBtnUnFavorite" class="ml-5" indeterminate color="primary" />
    </template>

    <template v-slot:content>
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
            <v-btn color="secondary" rounded="lg" size="small" class="mt-5" @click="destroyRepository(repository.id)">
              <v-icon>mdi-star</v-icon>
              Desfavoritar
            </v-btn>
            <v-divider class="mt-3"></v-divider>
          </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </Card>
</template>

<script>
import axios from '../../../service/index.js';
import Card from '@/components/Card';

export default {
  name: 'Favorites',
  components: { Card },
  data: () => ({
    repositories: [],
    loadingBtnUnFavorite: false,
  }),
  mounted() {
    this.getRepositories();
  },
  methods: {
    getRepositories() {
      axios.get('/repositories').then((res) => {
        this.repositories = res.data;
      }).catch(() => {
      });
    },
    destroyRepository(id) {
      this.loadingBtnUnFavorite = true;
      axios.delete(`/repositories/${id}`).then(() => {
        this.getRepositories();
      }).finally(() => {
        this.loadingBtnUnFavorite = false;
      });
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