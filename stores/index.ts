export const useIndexStore = defineStore('index', {
    state: () => ({
        locale: 'ru',
        progress: false,
    }),
    persist: true
})