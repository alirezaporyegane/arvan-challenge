import { defineStore } from 'pinia'
import { useCookies } from '@/composables/useCookie'
import { Cookies } from '@/types/Cookies'
import type { Auth } from '@/types/Users'

export const useAuthStore = defineStore('auth', {
  state() {
    return {
      account: null as Nullable<Auth>
    }
  },
  getters: {
    accessToken(state) {
      return state.account?.user.token
    }
  },
  actions: {
    setAccount(value: Auth) {
      this.account = value
    },
    logout() {
      this.account = null

      const cookies = useCookies()
      cookies.remove(Cookies.AUTH)
    }
  }
})
