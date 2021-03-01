<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="relative h-8 w-8 mt-1 rounded overflow-hidden focus:outline-none focus:border-white"
      style="z-index: 999"
    >
      <img
        class="h-full w-full object-cover"
        src="https://avatars.dicebear.com/api/initials/human.svg"
        alt="Image"
      />
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed inset-0 bg-gray-900 opacity-25 cursor-default h-full w-full"
      style="z-index: 99"
    ></button>
    <div
      v-if="isOpen"
      class="absolute cursor-pointer top-auto right-0 flex flex-col bg-white w-48 py-1 mt-2 rounded-md shadow-xl text-sm"
      style="z-index: 999"
    >
      <nuxt-link to="/">
        <a
          href=""
          @click="isOpen = !isOpen"
          class="px-4 py-1 block text-gray-800 hover:bg-gray-100 hover:text-gray-800"
          >
          <i class="text-coolGray-800  fas fa-tachometer-alt"></i>
          Home</a
        >
      </nuxt-link>
      <p
        class="px-4 py-1 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
        @click="logout()"
      >
        <i class="text-coolGray-800  fas fa-sign-out-alt"></i> Logout
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    const handleEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.isOpen = false;
      }
    };
    document.addEventListener("keydown", handleEscape);
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", handleEscape);
    });
  },
  methods: {
    logout() {
        this.$router.push({ path: "/login" });
    }
  },
};
</script>
