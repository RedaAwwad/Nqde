<template>
  <div>
    <TopHeader />
    <div class="dashboard__wrapper">
      <Sidebar />
      <div class="dashboard__content">
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
