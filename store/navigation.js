export const strict = false
export const state = () => ({
    sideBarState: true,
    sideBarMobileState: true
});

export const mutations = {
    //
    SET_SIDEBAR_STATE(state, data) {
        state.sideBarState = data
    },
    SET_SIDEBAR_MOBILE_STATE(state, data) {
        state.sideBarMobileState = data
    }
}

export const getters = {
    //
}

export const actions = {

    //
}