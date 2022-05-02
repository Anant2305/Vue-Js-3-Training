import { ref, watchEffect, unsub } from "vue"
import { projectFirestore } from "../Firebase/config"

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')
    
    collectionRef.onSnapshot(snap => {
        console.log('snapshot')
        let results = []

        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
    }, () => {
        console.log(err.message)
        documents.value = nullerror.value = 'couls not fetch data'
    })

    watchEffect((onInvalidate) => {
        //unsubscribe from pre collection when watcher is stopped(componenet unmounted)
        onInvalidate(() => unsub())
    })

    return { error, documents }
}

export default getCollection