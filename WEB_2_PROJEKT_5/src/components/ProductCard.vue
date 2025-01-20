<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      this.$emit('product-added', this.product)
    },
  },
}
</script>

<style scoped>
.product-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  width: 250px;
  text-align: center;
  padding: 1rem;
  transition: transform 0.3s;
}

.product-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.product-card h3 {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.product-card p {
  font-size: 1.1rem;
  color: #555;
}

.product-card button {
  background-color: #b08e6b;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.product-card button:hover {
  background-color: #9c7b58;
}

.product-card:hover {
  transform: translateY(-5px);
}
</style>
