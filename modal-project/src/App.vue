<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" ref="name">
    <button @click="handleClick">click me</button>
    <teleport to=".modals" v-if="showModal" >
      <Modal theme="sale" @close="toggleModal">
          <template v-slot:links>
            <a href="#">Sign Up now</a>
            <a href="#">More Info</a>
          </template>

          <h1>Ninja Giveaway!</h1>
          <p>Grb Your Ninja Swah for HALF PRICE!</p>
      </Modal>
    </teleport>

    <teleport to=".modals" v-if="showModalTwo" >
      <Modal @close="toggleModalTwo">
          <h1>Sign up to news letter</h1>
          <p>For updates and promo codes</p>
      </Modal>
    </teleport>

    <button @click="toggleModal" >Open Modal</button>
    <button @click="toggleModalTwo" >Open Other Modal</button>
  </div>
</template>

<script>

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: "My First Vue App",
      header: "sign up fo the Giveaway",
      text: "Hello World",
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
