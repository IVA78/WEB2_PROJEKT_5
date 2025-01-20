<template>
  <main class="main">
    <section class="hero">
      <div class="welcome-text">
        <h1>Welcome to Simply Furniture</h1>
        <p>Discover high-quality furniture that fits your style and needs.</p>
      </div>
    </section>

    <br />
    <hr />
    <br />

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

    <br />
    <hr />
    <br />

    <section class="contact">
      <div class="container">
        <h2>Contact Us</h2>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Write your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  alert(`Thank you, ${formData.value.name}! We have received your message.`)

  formData.value.name = ''
  formData.value.email = ''
  formData.value.message = ''
}
</script>

<style scoped>
.main {
  margin-top: 0;
}

.hero {
  background-image: url('../../dist/images/home.jpg');
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

/* Contact Section */
.contact {
  padding: 5%;
  background-color: #f9f9f9;
}

.contact .container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group input,
.form-group textarea {
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #555;
}
</style>
