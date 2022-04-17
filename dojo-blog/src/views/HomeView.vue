<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <p ref="p">My Name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Add 1 age</button>
    <input type="text" v-model="name"> -->
    <!-- <h2>Refs</h2>
    <p>{{ ninjaOne.name}} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name}} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button> -->
    <!-- <input type="text" v-model="search">
    <p>Search Term = {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div> -->
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'
import PostList from '../components/PostList.vue'
export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    // const p = ref(null)
    // const name = ref('mario')
    // const age = ref(30)

    //const ninjaOne = ref({ name: 'mario', age: 30 })
    //const ninjaTwo = reactive({ name: 'luigi', age: 35})

    //const handleClick = () => {
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = "hello, Ninjas"
      // name.value = "luigi"
      // age.value = 35
    //}

    /* const updateNinjaOne = () => {
        ninjaOne.value.age = 40
    } 

        const updateNinjaTwo = () => {
        ninjaTwo.age = 45
    }

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo }
    */
    /* 
      ******* USING COMPUTED, WATCH & WATCHEFFECT *******
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koppa', 'peach'])

    watch(search, () => {
      console.log('watch function ran')
    })

    watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return { names, search, matchingNames }
    */

      /* ********* USING PROPS ************ */
      const posts = ref([
        { title: 'Welcome to the Blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis mi sollicitudin, viverra nunc a, vulputate dolor. Aliquam euismod est id libero condimentum varius. Donec rutrum quam nisl, vitae suscipit urna viverra eget. Nam quis tellus libero. Donec dolor magna, volutpat vitae condimentum eget, fermentum in nunc. Aliquam lobortis porta cursus. Quisque facilisis arcu vel arcu interdum interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. ', id: 1 },
        { title: 'Top CSS Tips', body: 'Lorem ipsum', id: 2 }
      ])

      /* *************** USING LIFECYCLE HOOKS ************ */
      const showPosts = ref(true)

      return { posts, showPosts }

  }
}
</script>
