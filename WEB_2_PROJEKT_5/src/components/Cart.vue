<template>
  <section class="cart">
    <h3>Your Cart</h3>
    <div v-if="cartItems.length === 0">Your cart is empty.</div>
    <div v-else>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - ${{ item.price }}
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p>Total: ${{ totalPrice }}</p>
    </div>
  </section>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  name: 'Cart',
  computed: {
    cartItems() {
      const cartStore = useCartStore()
      return cartStore.cartItems
    },
    totalPrice() {
      const cartStore = useCartStore()
      return cartStore.totalPrice
    },
  },
  methods: {
    removeFromCart(productId) {
      const cartStore = useCartStore()
      cartStore.removeFromCart(productId)
    },
  },
}
</script>

<style scoped>
.cart {
  margin: 5%;
  padding: 1%;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  max-width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 70%;
  top: 10%;
  transform: translateX(-50%);
}

.cart h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
}

.cart ul {
  list-style: none;
  padding: 0;
}

.cart li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.cart li button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cart li button:hover {
  background-color: #e60000;
}

.cart p {
  font-size: 18px;
  font-weight: bold;
  text-align: right;
  margin-top: 15px;
  color: #333;
}

.cart .empty-cart {
  font-size: 18px;
  text-align: center;
  color: #777;
}
</style>
