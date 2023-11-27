
const useAuthStore = defineStore("authStore", {
  state: () => ({
    currentAuth:  null,
    loading: false,
  }),
  getters: {
    getCurrentAuth() {
      return this.currentAuth;
    },
  },
  actions: {
    authSuccess(data) {
      this.currentAuth = data;
    },
    authFail() {
      this.currentAuth = null;
    },
  nuxtServerInit (_,context){
    const cookie = context.reg.headers.cookie.split(';').find(c=>c.trim().startsWith("auth"))
    this.currentAuth = cookie.split(';')[1]

  }
  },
});
export default useAuthStore;
