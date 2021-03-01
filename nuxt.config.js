require('dotenv').config()
export default {
    ssr: false,
    target: 'static',
    head: {
        title: 'Ortigan Nuxt+TailwindCSS Dashboard',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'A Simple Nuxt+TailwindCSS based dashboard.' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [{
            src: `https://kit.fontawesome.com/${process.env.FONT_AWESOME_KEY}.js`,
            defer: true
        }]
    },
    loadingIndicator: {
        name: 'cube-grid',
        color: '#1f74ff',
        background: 'white'
    },
    loading: {
        color: '#2dd4bf',
        height: '3px'
    },
    plugins: [
        '~/plugins/vee-validate.js',
        '~/plugins/notifications.client.js',
        '~/plugins/animXYZ.client.js',
        '~/plugins/epicSpinner.client.js'
    ],
    components: true,
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/dotenv',
        'nuxt-compress'
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/auth',
        'vue-scrollto/nuxt',
        '@nuxtjs/dayjs'
    ],
    axios: {},
    build: {
        transpile: ["vee-validate/dist/rules"],
    }
}