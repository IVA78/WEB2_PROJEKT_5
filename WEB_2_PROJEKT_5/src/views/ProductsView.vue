<script>
import axios from 'axios'
import Hero from '@/components/Hero.vue'
import Cart from '@/components/Cart.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useCartStore } from '@/stores/cart'

export default {
  name: 'Products',
  components: {
    Hero,
    Cart,
    ProductCard,
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
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @product-added="addToCart"
        />
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

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
