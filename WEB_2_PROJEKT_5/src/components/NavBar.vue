<template>
  <nav class="navbar">
    <div class="logo">Simply Furniture</div>
    <nav class="nav-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
    </nav>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.navbar {
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

/* Responsive styles */
@media (max-width: 768px) {
}
</style>
