<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="navbar-brand__container d-flex justify-content-center aling-items-center">
      <NuxtLink to="/" class="navbar-brand mx-0">
        <img src="/logo.svg" height="45" alt="Nqde">
      </NuxtLink>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <form class="search-form">
      <div class="search-form__icon">
        <img width="15" src="/icons/icon-search.svg" alt="search">
      </div>
      <input class="form-control" type="text" placeholder="مالذي تبحث عنه؟" aria-label="مالذي تبحث عنه؟">
    </form>

    <ul class="navbar-nav mr-auto align-items-center">
      <li class="nav-item line mx-4"></li>
      <li class="nav-item">
        <label class="toggle mb-0">
          <input type="checkbox" />
        </label>
      </li>
      <b-nav-item-dropdown text="Lang" right>
        <template #button-content>
          <div class="notification-btn d-flex justify-content-center align-items-center">
            <img width="15px" src="/icons/icon-notifications.svg" alt="notifications">
          </div>
        </template>
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Action</a>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown text="Lang" right>
        <template #button-content>
          <div class="user-dropdown-btn d-flex align-items-center text-white">
            <div class="d-flex flex-column">
              <span>عبدالله</span>
              <span>334456655</span>
            </div>
            <div>
              <img src="/imgs/avatar.png" width="45" height="45" alt="avatar">
            </div>
          </div>
        </template>
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Action</a>
      </b-nav-item-dropdown>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>
