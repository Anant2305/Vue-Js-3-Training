import { ref } from "vue"
import { projectAuth } from "../Firebase/config"

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(_user => {
    console.log('User state change. current user: ', _user)
    user.value = _user
})

const getuser = () => {
    return { user }
}

export default getuser