import { ref } from "vue"
import { projectFirestore } from "../Firebase/config"

const useCollection = (collection) => {
    const error = ref(null)

    const addDoc = async(doc) => {
        error.value = null

        try {
            await projectFirestore.collection(collection).add(doc)
        } catch(err) {
            console.log(er.message)
            error.value = "could not send message"
        }
    }

    return { addDoc, error, }
}

export default useCollection