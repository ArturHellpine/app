import { defineStore } from 'pinia'

export const main = defineStore('main', {
    state: () => ({
        selected: [],
    }),
    getters: {
        selectedCount: (state) => state.selected.length,
    },
    actions: {}
})
