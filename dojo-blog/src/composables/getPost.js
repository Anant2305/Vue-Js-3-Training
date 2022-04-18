import { ref } from 'vue'

const getPost = (id) => {
    /* ********* USING PROPS ************ */
    const post = ref(null)
    const error = ref(null)

    /* ********** USING ASYNC *********** */
    const load = async () => {
      try {

        //simulate a delay
        await new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
        let data = await fetch("http://localhost:3000/posts/" + id)
        if(!data.ok){
            throw Error('Post not Available')
        }
        post.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { post, error, load }

}

export default getPost