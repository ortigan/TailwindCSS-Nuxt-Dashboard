<template>
      <div class="w-full h-screen">
            <div class="mx-auto h-full flex justify-center items-center py-12">
              <div class="container mx-auto">
                <XyzTransition appear-visible>
                <p
                  xyz="fade down ease-in-out-back out-delay-5 "
                  class="text-2xl font-bold px-5 text-center text-coolGray-800  "
                >
                  <span class="line">Forgot</span>  your password?
                </p>
                </XyzTransition>
                <p
                  xyz="fade down ease-in-out-back out-delay-5 "
                  class="text-sm px-5 text-center text-coolGray-700 mb-6 mt-1"
                >
                  We get it, stuff happens. Just enter your email address below <br />and we'll send you a link to reset your password.
                </p>
                <div class="flex justify-center">
                  <div class="w-full flex justify-center">
                    <div class="w-full lg:w-1/3 bg-white p-5 rounded-lg shadow-lg">
                      <ValidationObserver v-slot="{ invalid }">
                      <form class="px-4 overflow-y-hidden">
                        <div class="mb-4 relative">
                          <ValidationProvider rules="required|email" v-slot="{ errors }">
                          <label class="text-xs font-base text-coolGray-800" for="email">
                            Email
                          </label>
                          <input
                            class="w-full mt-1 px-3 py-2 text-xs leading-tight shadow appearance-none focus:outline-none focus:shadow-outline border-none"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            v-model="email"
                            name="email"
                          />
                          <div class="text-red-500 font-base text-xs absolute mt-1">{{ errors[0] }}</div>
                          </ValidationProvider>
                        </div>
                        <div class="text-center mt-6">
                          <button
                            :disabled="invalid || loading ==  true"
                            :class="invalid ? 'flex justify-center w-full px-4 py-2 bg-coolGray-300 text-white rounded focus:outline-none focus:shadow-outline cursor-not-allowed' : 'flex justify-center w-full px-4 py-2 bg-coolGray-500 text-white rounded focus:outline-none focus:shadow-outline' "
                            type="button"
                            @click="login()"
                          >
                          <p class="text-sm">Submit</p>
                          <p v-if="loading" class="ml-2"><half-circle-spinner
                                  :animation-duration="1000"
                                  :size="20"
                                  :color="'#fff'"/>
                          </p>
                          </button>
                        </div>
                        <hr class="my-4 border-t border-coolGray-300" />
                        <div class="text-center text-xs text-coolGray-800">
                          Already a user?
                          <nuxt-link to="/login" class="inline-block text-xs text-coolGray-500 align-baseline hover:text-coolGray-800">
                                Login
                          </nuxt-link>
                        </div>
                        <div class="text-center text-xs text-coolGray-800">
                          New here?
                          <nuxt-link :to="{ path:'/register' }" class="inline-block text-xs text-coolGray-500 align-baseline hover:text-coolGray-800">
                                Register
                          </nuxt-link>
                        </div>
                      </form>
                      </ValidationObserver>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  layout:"full",
  components:{
    ValidationProvider,
    ValidationObserver,
  },
    data(){
        return {
          email: '',
          password: '',
          remember_me: false,
          loading: false,
        }
  },
	methods:{
		clearFields(){
			this.email = ""
			this.password = ""
    },
	}
}
</script>
<style scoped>
</style>
