<template>
  <nav :class="navbarClass">
    <div class="logo">Simply Furniture</div>
    <nav class="nav-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/products" class="nav-link">Products</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
    </nav>
    <label class="darkmode">
      Dark Mode
      <input type="checkbox" v-model="isDarkMode" @change="toggleNavbarColor" />
    </label>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isDarkMode: false,
    }
  },
  computed: {
    navbarClass() {
      return {
        'navbar-dark': this.isDarkMode,
        'navbar-light': !this.isDarkMode,
      }
    },
  },
  methods: {
    toggleNavbarColor() {
      console.log('Navbar color changed')
    },
  },
}
</script>

<style scoped>
.navbar-light {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5e1ce;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 98%;
  top: 1%;
  left: 1%;
}

.navbar-dark {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #947a61;
  color: #555;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 98%;
  top: 1%;
  left: 1%;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 1%;
}

.nav-links {
  font-size: 10rem;
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 2%;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #555;
  font-size: 1.7rem;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.nav-link:hover {
  background-color: #b08e6b;
  color: black;
}

.darkmode {
  padding-right: 5%;
}

/* Responsive styles */
@media (max-width: 768px) {
}
</style>
