<script>
import axios from 'axios'
import Hero from '@/components/Hero.vue'
import Cart from '@/components/Cart.vue'
import { useCartStore } from '@/stores/cart'

export default {
  name: 'Products',
  components: {
    Hero,
    Cart,
  },
  data() {
    return {
      products: [],
      loading: true,
    }
  },
  methods: {
    addToCart(product) {
      const cartStore = useCartStore()
      cartStore.addToCart(product)
    },
  },
  async mounted() {
    try {
      const response = await axios.get(
        'https://run.mocky.io/v3/8055e4b5-dab2-4bac-b914-196da811a7cd',
      )

      this.products = response.data

      //console.log('response.data: ', response.data)
    } catch (error) {
      console.error('Greška pri dohvaćanju podataka:', error)
    } finally {
      this.loading = false
    }
  },
}
</script>

<template>
  <main class="products-page">
    <Hero
      title="Our Products"
      text="Explore our wide selection of high-quality furniture pieces."
    />

    <section class="product-list">
      <div class="container">
        <!-- Dynamic product cards -->
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <button @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </section>
    <Cart />
  </main>
</template>

<style scoped>
.products-page {
  margin-top: 2rem;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1%;
  padding: 1%;
}

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

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
