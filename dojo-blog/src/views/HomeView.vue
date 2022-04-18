<template>
  <div class="home">
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
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>Loading .... <Spinner /></div>
    <!-- <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a post</button> -->
    
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'HomeView',
  components: { PostList, Spinner, TagCloud },
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

      /* *************** USING LIFECYCLE HOOKS ************ */
      const showPosts = ref(true)

      /* ******** USING COMPOSABLES OR COMPOSITIONS ************** */
      const { posts, error, load } = getPosts()
      
      load()

      return { posts, showPosts, error}

  }
}
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
 .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
