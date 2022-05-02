<template>
  <div>
      <nav v-if="user">
          <div>
              <p>Hey There {{ user.displayName }}</p>
              <p class='email'>Currenlty logged in as {{ user.email }}</p>
          </div>
          <button @click="handleClick">Logout</button>
      </nav>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
    setup() {
        const { logout, error } = useLogout()
        const { user } = getUser()

        const handleClick = async () => {
            await logout()
            if(!error.value) {
                console.log('user logged out')
            }
        }

        return { handleClick, user  }
    }
}
</script>

<style>

</style>