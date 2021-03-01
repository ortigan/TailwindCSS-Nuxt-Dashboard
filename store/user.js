export const strict = false
export const state = () => ({
    activeUser: [],
});

export const mutations = {
    //
    SET_USER(state, data) {
        state.activeUser = data
    },
}

export const getters = {
    //
}

export const actions = {
    login(context, data) {
        return new Promise((resolve, reject) => {
            this.$axios.$post(`/login`, {
                    email: data.email,
                    password: data.password,
                })
                .then(res => {
                    resolve(res)
                    localStorage.setItem('token', res.token)
                    context.commit('SET_USER', res.user)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
}