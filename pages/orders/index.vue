<template>
  <div class="d-flex">
    <SidePanel class="bg-white"></SidePanel>
    <div class="dashboard__content-grid">
      <div class="container p-4">
        <div v-if="loading" class="row">
          <div v-for="(order, index) in 4" :key="index" class="col-6 col-sm-3 col-md-4 col-lg-2 col-xl-3 col-2xl-2">
            <div class="category-card">
              <div class="category-card__icon p-0 mb-3 overflow-hidden">
                <b-skeleton class="mb-0" animation="wave" width="100%" height="100%"></b-skeleton>
              </div>
              <h5 class="category-card__title d-flex justify-content-center">
                <b-skeleton animation="wave" width="65%" height="15px"></b-skeleton>
              </h5>
            </div>
          </div>
        </div>
        <div v-else class="row">
          <div v-for="(category, index) in categories" :key="index" class="col-6 col-sm-3 col-md-4 col-lg-2 col-xl-3 col-2xl-2">
            <NuxtLink :to="`/orders/${category.slug}`" class="category-card">
              <div class="category-card__icon bg-white">
                <img :src="category.image" :alt="category.title">
              </div>
              <h5 class="category-card__title">
                {{ category.title }}
              </h5>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { categories } from '@/services';

export default {
  name: 'OrdersPage',
  layout: 'dashboard',
  data() {
    return {
      loading: true,
      categories: []
    }
  },
  methods: {
     getCategories() {
      setTimeout(() => {
        this.categories = categories;
        this.loading = false;
      }, 1000);
    },
  },
  mounted() {
    this.getCategories();
  }
}
</script>
