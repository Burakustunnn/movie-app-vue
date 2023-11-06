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
   
  },
});
export default useAuthStore;
