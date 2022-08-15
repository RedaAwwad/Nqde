<template>
  <div class="d-flex">
    <SidePanel class="bg-white"></SidePanel>
    <div class="dashboard__content-grid">
      <div class="container p-4">
        <div class="row">
          <div v-for="(category, index) in categories" :key="index" class="col-md-4 col-xl-3">
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
export default {
  name: 'OrdersPage',
  layout: 'dashboard',
  data() {
    return {
      categories: [
        {
          id: 1,
          title: 'ساخن',
          desc: '',
          image: '/icons/icon-hot.svg',
          slug: 'hot'
        },
        {
          id: 2,
          title: 'حلويات',
          desc: '',
          image: '/icons/icon-dessert.svg',
          slug: 'dessert'
        }
      ]
    }
  }
}
</script>
