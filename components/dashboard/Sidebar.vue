<template>
  <div>
    <div @click="closeSidebar" class="sidebar__overlay d-lg-none"
    :class="{ 'show' : isSidebar }"></div>
    <aside class="sidebar" :class="{ 'show' : isSidebar }">
      <ul class="sidebar__links">
        <li @click="closeSidebar">
          <NuxtLink exact to="/" class="d-flex align-items-center">
            <span>
              <img width="25" src="/icons/icon-chart-bar.svg" alt="chart bar">
            </span>
            <span>الصفحة الرئيسية</span>
          </NuxtLink>
        </li>
        <li @click="closeSidebar">
          <NuxtLink to="/orders" class="d-flex align-items-center">
            <span>
              <img width="25" src="/icons/icon-cart.svg" alt="cart">
            </span>
            <span>الطلبات</span>
          </NuxtLink>
        </li>
        <li @click="closeSidebar">
          <NuxtLink to="/customers" class="d-flex align-items-center">
            <span>
              <img width="25" src="/icons/icon-users.svg" alt="users">
            </span>
            <span>العملاء</span>
          </NuxtLink>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters({
      isSidebar: 'ui/isSidebar'
    })
  },
  methods: {
    closeSidebar() {
      this.$store.commit('ui/UPDATE_SIDEBAR_STATUS', false);
    }
  }
}
</script>
