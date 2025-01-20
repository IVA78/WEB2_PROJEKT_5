<template>
  <section class="hero">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.hero {
  background-color: #f5e1ce;
  padding: 5%;
  text-align: center;
  margin-top: 5%;
  border-radius: 0.5rem;
}

.hero h3 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
}
</style>
