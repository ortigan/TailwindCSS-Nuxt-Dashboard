<template>
  <div>
    <div
      class="absolute bg-coolGray-900 min-h-screen h-screen w-1/3"
      style="z-index: 999999"
    >
      <aside
        id="sidebar"
        class="flex flex-col justify-between md:hidden min-h-screen h-screen overflow-y-hidden"
      >
        <div>
          <!-- User Details -->
          <div class="m-2 p-2 rounded-md">
            <div class="flex flex-col p-2 rounded text-center text-white">
              <p
                class="flex justify-center italic font-bold tracking-wider"
              >
                Ortigan
              </p>
              <hr class="border-t border-coolGray-300" />
            </div>
          </div>
          <!-- Menu -->
          <span v-for="(item, index) in menu" :key="index">
            <ul
              class="list-reset w-full flex flex-col justify-center items-center mt-4"
              :class="
                getPath == '/' + item.path
                  ? 'bg-coolGray-50 py-2  border-l-4 border-coolGray-600'
                  : 'font-light'
              "
              style="transition-duration: 0.1s"
            >
              <div>
                <li class="w-full h-full" @click="closeEevnt()">
                  <nuxt-link :to="`/${item.path}`">
                    <div class="dropdown-btn text-coolGray-800 text-xs">
                      <div class="flex flex-col">
                        <p class="text-center">
                          <i
                            :class="
                              getPath == '/' + item.path
                                ? `text-coolGray-600  fas fa-${item.icon}`
                                : `text-coolGray-600  fas fa-${item.icon}`
                            "
                          ></i>
                        </p>
                        <p
                          :class="
                            getPath == '/' + item.path
                              ? `text-coolGray-800 `
                              : `text-coolGray-400`
                          "
                        >
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
        <div class="bg-gray-800 p-2 flex justify-center items-center">
          <div @click.prevent="toggleTheme">
            <p v-if="theme == 'theme-dark'">
              <span class="p-2 bg-black text-white rounded-md text-xs"
                >Light Mode
              </span>
            </p>
            <p v-else>
              <span class="p-2 bg-black text-white rounded-md text-xs">
                Dark Mode</span
              >
            </p>
            <!-- <img v-if="theme == 'theme-dark'" src="~/assets/svg/Light-Mode.svg" alt="" srcset="">
                    <img v-else src="~/assets/svg/Dark-Mode.svg" alt="" srcset=""> -->
          </div>
          <p class="text-gray-600 text-xs">
            Developed By
            <a
              href="https://www.ortigan.com/"
              target="_blank"
              class="italic font-bold"
              >Ortigan</a
            >
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
import menuItems from "./menuItems";
export default {
  data() {
    return {
      menu: menuItems,
      theme: "",
    };
  },
  methods: {
    closeEevnt() {
      this.$emit("closeSideBar");
    },
    getAvatar() {
      return this.$store.state.activeUser.avatar != null
        ? this.$store.state.activeUser.avatar
        : "https://avatars.dicebear.com/api/avataaars/default.svg";
    },
    toggleTheme() {
      this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";
      this.$store.commit("theme/SET_THEME", this.theme);
    },
  },
  computed: {
    getPath() {
      return this.$route.path;
    },
    currentUser() {
      return this.$store.state.activeUser.name;
    },
    userScope() {
      return this.$store.state.activeUser.scope;
    },
  },
};
</script>

