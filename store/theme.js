export const state = () => ({
    theme: 'theme-light'
})

export const mutations = {
    //
    SET_THEME(state, theme) {
        state.theme = theme
    }
}

export const getters = {
    //
    getTheme(state) {
        return state.theme
    }
}

export const actions = {
    //
}