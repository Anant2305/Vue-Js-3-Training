import { ref } from 'vue'

const getPosts = () => {
    /* ********* USING PROPS ************ */
    const posts = ref([])
    const error = ref(null)

    /* ********** USING ASYNC *********** */
    const load = async () => {
        //simulate a delay
        await new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
      try {
        let data = await fetch("http://localhost:3000/posts")
        if(!data.ok){
            throw Error('No Data Available')
        }
        posts.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { posts, error, load }

}

export default getPosts