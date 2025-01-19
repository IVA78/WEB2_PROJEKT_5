<script setup></script>

<template>
  <main class="main">
    <section class="hero">
      <div class="welcome-text">
        <h1>Welcome to Simply Furniture</h1>
        <p>Discover high-quality furniture that fits your style and needs.</p>
      </div>
    </section>

    <section class="description">
      <div class="container">
        <h2>About Us</h2>
        <p>
          Simply Furniture offers a wide range of beautiful, durable, and affordable furniture to
          transform your living spaces. Whether you're furnishing your living room, bedroom, or home
          office, we have the perfect pieces to match your style and needs.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main {
  margin-top: 0;
}

.hero {
  background-image: url('../assets/images/home.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-text {
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
}

.welcome-text h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.welcome-text p {
  font-size: 1.2rem;
}

.description {
  padding: 5%;
  background-color: #fcfaf7;
}

.description .container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.description h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.description p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
}
</style>
