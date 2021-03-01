<template>
     <div>
        <button v-if="show" @click="show = false" tabindex="-1" class="fixed inset-0 bg-black opacity-0 cursor-default h-full w-full"></button>
        <nav class="bg-white w-full shadow sm:fixed md:static" id="mainNav">
            <div class="flex items-center justify-between px-4 py-1 text-base text-gray-700">
                <div>
                    <div class="flex items-center ">
                        <!-- Mobile Toggler -->
                        <span @click="show = !show" class="inline-block md:hidden">
                            <i v-if="!show" class="text-coolGray-800  fas fa-bars"></i>
                            <i v-else class="text-coolGray-800  fas fa-times"></i>
                        </span>
                        <!-- Desktop Toggler -->
                        <span class="mr-2 hidden lg:block">
                          <i class="text-coolGray-800  fas fa-bars" @click="toggleSideBar()"></i>
                        </span>
                    </div>
                </div>
                <div class="flex flex-row justify-between items-center">
                     <p class="hidden lg:inline-block mr-4 text-sm">Hello, Human</p>
                     <div>
                      <AccountSettings/>
                     </div>
                </div>
            </div>
        </nav>
        <!-- Mobile ONLY -->
        <section>
            <transition name="slide-fade">
              <SidebarMobile v-if="show" @closeSideBar="show = !show" />
            </transition>
        </section>
    </div>
</template>
<script>
import AccountSettings from './AccountSettings'
import SidebarMobile from '../../components/Navigation/SidebarMobile'

export default {
    components:{
        AccountSettings,
        SidebarMobile,
    },
  data() {
    return {
      isOpen: false,
      showItems:false,
      show: false
    }
  },
  methods:{
      toggleSideBar(){
        var state = this.$store.state.navigation.sideBarState
        this.$store.commit('navigation/SET_SIDEBAR_STATE', !state)
      },
  }
}
</script>
<style scoped>
*{
    transition: all ease-in-out 0.1s;
}

#mobileSideNav{
    display:none;
}
.slide-fade-enter-active {
  /* transition: all .3s ease; */
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}
.slide-fade-leave-active {
  transition: all ease-out 0.2s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
