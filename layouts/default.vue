<template>
  <div :class="getTheme">
      <!--Screen-->
      <div class="flex flex-col min-h-screen h-screen bg-background-secondary">
          <div class="flex flex-1 overflow-y-hidden">
              <!--Sidebar-->
              <transition name="slide">
              <aside v-if="isActive" id="sidebar" class="transition duration-300 ease-in-out w-1/2 lg:w-1/12  hidden md:block lg:block">
                  <SideBar/>
              </aside>
              </transition>
              <!--Main-->
              <transition name="slide">
              <main class="bg-gray-100 flex-1 overflow-y-auto lg:p-4">
                <!-- Navigation -->
                <Navbar/>
                <div class="overflow-y-auto mt-2 lg:mt-4 ">
                  <Nuxt />
                </div>
              </main>
              </transition>
          </div>
      </div>
  </div>
</template>
<script>
import Navbar from '~/components/Navigation/Navbar'
import SideBar from '~/components/Navigation/Sidebar'
export default {
  components:{
    Navbar,
    SideBar
  },
  computed:{
    isActive(){
      return this.$store.state.navigation.sideBarState
    },
  }
}
</script>
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
transition: ease all 0.2s;
}
main{
  width: 100%;
  transition: transform 0.2s ease;
}
.slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }
</style>
