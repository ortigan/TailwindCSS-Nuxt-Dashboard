<template>
     <div>
        <div class="flex flex-col justify-between bg-coolGray-900 shadow-inner min-h-screen sidebar">
          <div>
            <div class="p-2">
                <div class="flex flex-col p-2 rounded text-center text-white">
                    <p class="flex justify-center italic font-bold tracking-wider">
                        Ortigan
                    </p>
                    <hr class=" border-t border-coolGray-300" />
                </div>
            </div>
            <!-- Menu Items -->
            <div>
              <span v-for="(item, index) in menu" :key="index">
                <ul class="list-reset w-full flex flex-col justify-center items-center mt-4 " :class="getPath == '/'+item.path ? 'bg-coolGray-50 py-2  border-l-4 border-coolGray-600' : 'font-light' " style="transition-duration: 0.1s">
                  <div>
                      <li class="w-full h-full">
                          <nuxt-link :to="`/${item.path}`">
                          <div class="dropdown-btn text-coolGray-800 text-xs">
                              <div class="flex flex-col">
                                  <p class="text-center">
                                      <i :class="getPath == '/'+item.path ? `text-coolGray-600  fas fa-${item.icon}` : `text-coolGray-600  fas fa-${item.icon}`"></i>
                                  </p>
                                  <p :class="getPath == '/'+item.path ? `text-coolGray-800 ` : `text-coolGray-400`">
                                      {{ item.header }}
                                  </p>
                              </div>
                          </div>
                          </nuxt-link>
                      </li>
                  </div>
                </ul>
              </span>
            </div>
          </div>
          <div class="bg-coolGray-800 p-2 flex justify-center items-center">
            <p class="text-gray-400 text-xs text-center">Developed By <a href="https://www.ortigan.com/" target="_blank" class="font-bold">Ortigan</a></p>
          </div>
        </div>
    </div>
</template>
<script>
import menuItems from './menuItems'
export default {
    data(){
        return{
            menu:  menuItems,
            theme: ''
        }
    },
    methods:{
        getAvatar(){
            return this.$store.state.activeUser.avatar != null ? this.$store.state.activeUser.avatar : 'https://avatars.dicebear.com/api/avataaars/default.svg'
        },
        toggleTheme(){
          this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
          this.$store.commit('theme/SET_THEME', this.theme)
      },
    },
    computed:{
        getPath(){
            return this.$route.path
        },
        getUser(){
            return this.$auth.user.email.substring(0, this.$auth.user.email.lastIndexOf("@"))
        },
        userScope(){
            return this.$store.state.activeUser.scope
        }
    }
}
</script>
<style>
</style>
