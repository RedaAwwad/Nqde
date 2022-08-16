<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="navbar-brand__container d-flex justify-content-xl-center aling-items-center">
      <button @click="updateNavbarStatus" class="btn p-1 ml-3 ml-sm-5 d-xl-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#fff" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      <NuxtLink to="/" class="navbar-brand mx-0">
        <img src="/logo.svg" height="45" alt="Nqde">
      </NuxtLink>
    </div>

    <form class="search-form d-none d-lg-flex">
      <div class="search-form__icon">
        <img width="15" src="/icons/icon-search.svg" alt="search">
      </div>
      <input class="form-control" type="text" placeholder="مالذي تبحث عنه؟" aria-label="مالذي تبحث عنه؟">
    </form>

    <ul class="navbar-nav flex-row mr-lg-auto align-items-center">
      <li class="nav-item line mx-4 d-none d-lg-block"></li>
      <li class="nav-item d-none d-sm-block">
        <label class="toggle mb-0">
          <input type="checkbox" />
        </label>
      </li>
      <li class="nav-item">
        <button class="btn search-icon p-1 d-lg-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#fff" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
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
            <div class="d-none d-sm-flex flex-column">
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
  name: 'TopHeader',
  methods: {
    updateNavbarStatus() {
      this.$store.commit('ui/UPDATE_SIDEBAR_STATUS');
    }
  }
}
</script>
