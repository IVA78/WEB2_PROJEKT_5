<template>
  <div class="not-found">
    <h1>Sorry, page not found.</h1>
    <p>Try going back to the <router-link to="/">homepage</router-link> or use navigation bar.</p>
    <img src="../../public/images/404-error.png" alt="404 Error" />
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 15%;
  color: #555;
}

.not-found h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.not-found img {
  width: 300px;
  max-width: 100%;
  height: auto;
}
</style>
