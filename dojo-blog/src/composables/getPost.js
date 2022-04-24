import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
    /* ********* USING PROPS ************ */
    const post = ref(null)
    const error = ref(null)

    /* ********** USING ASYNC *********** */
    const load = async () => {
      try {
        // ******* USING JSON DB **************
        //simulate a delay
        // await new Promise(resolve => {
        //     setTimeout(resolve, 1000)
        // })
        // let data = await fetch("http://localhost:3000/posts/" + id)
        // if(!data.ok){
        //     throw Error('Post not Available')
        // }
        // post.value = await data.json()

        // ********* USING FIRESTORM CLOUD DB
        let res = await projectFirestore.collection('posts').doc(id).get()
        if(!res.exists) {
          throw Error("Error - Posts does not exists")
        }
        post.value = { ...res.data(), id: res.id }

      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { post, error, load }

}

export default getPost