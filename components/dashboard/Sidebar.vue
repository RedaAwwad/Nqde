<template>
  <aside class="sidebar">
    <ul class="sidebar__links">
      <li>
        <NuxtLink exact to="/" class="d-flex align-items-center">
          <span>
            <img width="25" src="/icons/icon-chart-bar.svg" alt="chart bar">
          </span>
          <span>الصفحة الرئيسية</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/orders" class="d-flex align-items-center">
          <span>
            <img width="25" src="/icons/icon-cart.svg" alt="cart">
          </span>
          <span>الطلبات</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/customers" class="d-flex align-items-center">
          <span>
            <img width="25" src="/icons/icon-users.svg" alt="users">
          </span>
          <span>العملاء</span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
