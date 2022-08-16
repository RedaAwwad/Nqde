<template>
  <div>
    <TopHeader />
    <div class="dashboard__wrapper">
      <Sidebar />
      <div class="dashboard__content nice-scroll">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout'
}
</script>
