import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    totalPrice(state) {
      return state.cartItems.reduce((total, item) => total + item.price, 0)
    },
    itemCount(state) {
      return state.cartItems.length
    },
  },
  actions: {
    addToCart(product) {
      this.cartItems.push(product)
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId)
    },
    clearCart() {
      this.cartItems = []
    },
  },
})
