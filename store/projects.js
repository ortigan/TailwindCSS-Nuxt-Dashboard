export const strict = false
export const state = () => ({
    projects: []
});

export const mutations = {
    //
    SET_PROJECTS(state, data) {
        state.projects = data
    },
    ADD_PROJECT(state, data) {
        state.projects.unshift(data)
    }
}

export const getters = {
    GET_PROJECT(state, id) {
        return state.projects.find(x => x.id == id)
    },
    GET_PROJECTS(state) {
        return state.projects
    }
}

export const actions = {
    create(context, data) {
        return new Promise((resolve, reject) => {
            this.$axios.$post(`${process.env.baseURL}/project/create`, data)
                .then(res => {
                    context.commit('ADD_PROJECT', res.project)
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    //
    getAll(context) {
        return new Promise((resolve, reject) => {
            this.$axios.$get(`${process.env.baseURL}/projects`)
                .then(res => {
                    context.commit('SET_PROJECTS', res.projects)
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    update(context, data) {
        return new Promise((resolve, reject) => {
            this.$axios.$post(`${process.env.baseURL}/project/update/${data.id}`, data.payload)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    delete(context, data) {
        return new Promise((resolve, reject) => {
            this.$axios.$post(`${process.env.baseURL}/project/delete/${data}`)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
}
