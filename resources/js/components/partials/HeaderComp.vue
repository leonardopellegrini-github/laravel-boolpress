<template>
<header class="d-flex justify-content-center">


    <nav class="navbar-expand-lg navbar-light">

  <div class="navbar collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: 'Blog' }">Blog</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: 'About' }">About</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: 'Contacts' }">Contacts</router-link>
      </li>

    </ul>
  </div>
</nav>

</header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
header{
  background-color: black;
  
}
.navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
  color:white;
}
</style>