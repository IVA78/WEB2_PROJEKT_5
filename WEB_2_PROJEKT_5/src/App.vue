<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
</script>

<template>
  <div id="app">
    <!-- Navigacijska traka na vrhu -->
    <header>
      <Navbar />
    </header>

    <!-- Glavni dio za učitavanje stranica -->
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* Osnovni stilovi za layout */
#app {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
}

header {
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

main {
  flex: 1;
  padding: 1rem;
  background-color: #ffffff;
}

/* Stilovi za veće zaslone */
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
