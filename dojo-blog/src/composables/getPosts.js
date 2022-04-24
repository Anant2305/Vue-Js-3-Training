import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
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
      // *********** USING JSON DATA ******
      //   let data = await fetch("http://localhost:3000/posts")
      //   if(!data.ok){
      //       throw Error('No Data Available')
      //   }
      //   posts.value = await data.json()

      // *********** USING FIRESTORM CLOUD DATABASE ************

          const res = await projectFirestore.collection('posts')
            .orderBy('createdAt', 'desc')
            .get()

          posts.value = res.docs.map(doc => {
            //console.log(doc.data())
            return { ...doc.data(), id: doc.id }
          })

       }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { posts, error, load }

}

export default getPosts