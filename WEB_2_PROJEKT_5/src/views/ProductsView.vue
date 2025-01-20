<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Modern Armchair',
          description: 'Comfortable and stylish armchair for your living room.',
          image: './images/furniture_1.jpg',
        },
        {
          id: 2,
          name: 'Wooden Table',
          description: 'Elegant wooden table for your bed room.',
          image: './images/furniture_2.jpg',
        },

        {
          id: 3,
          name: 'Coffee Table',
          description: 'Sleek and modern coffee table to complement your living room.',
          image: './images/furniture_3.jpg',
        },
        {
          id: 4,
          name: 'Luxury Sofa',
          description: 'Relax in comfort with this luxury sofa.',
          image: './images/furniture_4.jpg',
        },
        {
          id: 5,
          name: 'Small Desk',
          description: 'A small desk for your living room needs.',
          image: './images/furniture_5.jpg',
        },
        {
          id: 6,
          name: 'Wooden desk',
          description: 'A beautiful desk for your home.',
          image: './images/furniture_6.jpg',
        },
        {
          id: 7,
          name: 'Cozy Sofa',
          description: 'Cozy and stylish sofa for a good family time.',
          image: './images/furniture_7.jpg',
        },
        {
          id: 8,
          name: 'Elegant Sofa',
          description: 'Elegant and stylish sofa for your living room.',
          image: './images/furniture_8.jpg',
        },
        {
          id: 9,
          name: 'Leather Sofa',
          description: 'Functional and stylish sofa for any room.',
          image: './images/furniture_9.jpg',
        },
        {
          id: 10,
          name: 'Table with Chairs',
          description: 'Elegant and stylish dining table with set of chairs.',
          image: './images/furniture_10.jpg',
        },
      ],
    }
  },
}
</script>

<template>
  <main class="products-page">
    <section class="hero">
      <h3>Our Products</h3>
      <p>Explore our wide selection of high-quality furniture pieces.</p>
    </section>

    <section class="product-list">
      <div class="container">
        <!-- Dynamic product cards -->
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <button>View Details</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.products-page {
  margin-top: 2rem;
}

.hero {
  background-color: #f5e1ce;
  padding: 5%;
  text-align: center;
  margin-top: 5%;
}

.hero h3 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
