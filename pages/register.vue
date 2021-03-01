<template>
  <div>
    <div class="w-full">
            <div class="mx-auto h-full flex justify-center items-center py-12">
              <div class="container mx-auto">
                <XyzTransition appear-visible>
                <p
                  xyz="fade down ease-in-out-back out-delay-5 "
                  class="text-2xl mb-6 font-bold px-5 text-center text-coolGray-800  "
                >
                  Register  your Free Account
                </p>
                </XyzTransition>
                <div class="flex justify-center">
                  <div class="w-full flex justify-center">
                    <div class="w-full lg:w-1/3 bg-white p-5 rounded-lg shadow-lg">
                      <ValidationObserver v-slot="{ invalid }">
                      <form class="px-4 overflow-y-hidden">
                        <div class="mb-4 relative">
                          <ValidationProvider rules="required" v-slot="{ errors }">
                          <label class="text-xs font-base text-coolGray-800" for="name">
                            Name
                          </label>
                          <input
                            class="w-full mt-1 px-3 py-2 text-xs leading-tight shadow appearance-none focus:outline-none focus:shadow-outline border-none"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            v-model="name"
                            name="name"
                          />
                          <div class="text-red-500 font-base text-xs absolute mt-1">{{ errors[0] }}</div>
                          </ValidationProvider>
                        </div>
                        <div class="mb-4 relative">
                          <ValidationProvider rules="required|email" v-slot="{ errors }">
                          <label class="text-xs font-base text-coolGray-800" for="email">
                            Email
                          </label>
                          <input
                            class="w-full mt-1 px-3 py-2 text-xs leading-tight shadow appearance-none focus:outline-none focus:shadow-outline border-none"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            v-model="email"
                            name="email"
                          />
                          <div class="text-red-500 font-base text-xs absolute mt-1">{{ errors[0] }}</div>
                          </ValidationProvider>
                        </div>
                        <div class="mb-4 relative">
                          <ValidationProvider rules="required|email" v-slot="{ errors }">
                          <label class="text-xs font-base text-coolGray-800" for="contact">
                            Contact Number
                          </label>
                          <input
                            class="w-full mt-1 px-3 py-2 text-xs leading-tight shadow appearance-none focus:outline-none focus:shadow-outline border-none"
                            id="contact"
                            type="number"
                            placeholder="Enter your contact number"
                            v-model="contact"
                            name="contact"
                          />
                          <div class="text-red-500 font-base text-xs absolute mt-1">{{ errors[0] }}</div>
                          </ValidationProvider>
                        </div>
                        <div class="mb-4 relative mt-2">
                          <ValidationProvider rules="pw_rule" v-slot="{ errors }" vid="confirmation">
                          <label class="text-xs font-base text-coolGray-800" for="password">
                            Password
                          </label>
                          <input
                            class="w-full mt-1 px-3 py-2 text-xs leading-tight shadow appearance-none focus:outline-none focus:shadow-outline border-none"
                            id="password"
                            type="password"
                            placeholder="******************"
                            v-model="password"
                            name="password"
                            @keyup.enter="login()"
                          />
                          <div class="text-red-500 font-base text-xs absolute mt-1">{{ errors[0] }}</div>
                          </ValidationProvider>
                        </div>
                        <div class="mb-4 relative mt-2">
                          <ValidationProvider rules="required|confirmed:confirmation" v-slot="{ errors }">
                          <label class="text-xs font-base text-coolGray-800" for="confirm_password">
                            Confirm password
                          </label>
                          <input
                            class="w-full mt-1 px-3 py-2 text-xs leading-tight shadow appearance-none focus:outline-none focus:shadow-outline border-none"
                            id="confirm_password"
                            type="password"
                            placeholder="******************"
                            v-model="confirm_password"
                            name="confirm_password"
                            @keyup.enter="login()"
                          />
                          <div class="text-red-500 font-base text-xs absolute mt-1">{{ errors[0] }}</div>
                          </ValidationProvider>
                        </div>
                        <div class="mb-6 text-center mt-6">
                          <button
                            :disabled="invalid || loading ==  true"
                            :class="invalid ? 'flex justify-center w-full px-4 py-2 bg-coolGray-300 text-white rounded focus:outline-none focus:shadow-outline cursor-not-allowed' : 'flex justify-center w-full px-4 py-2 bg-coolGray-500 text-white rounded focus:outline-none focus:shadow-outline' "
                            type="button"
                            @click="register()"
                          >
                          <p>Register</p>
                          <p v-if="loading" class="ml-2"><half-circle-spinner
                                  :animation-duration="1000"
                                  :size="20"
                                  :color="'#fff'"/>
                          </p>
                          </button>
                        </div>
                         <hr class="mb-4 border-t border-coolGray-300" />
                        <div class="text-center text-xs text-coolGray-800">
                          Already a user?
                          <nuxt-link to="/login" class="inline-block text-xs text-coolGray-500 align-baseline hover:text-coolGray-800">
                                Login
                          </nuxt-link>
                        </div>
                        <div class="text-center">
                          <nuxt-link :to="{ path:'/forgetpassword' }" class="inline-block text-xs text-coolGray-500 align-baseline hover:text-coolGray-800">
                                Forgot Password?
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
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
extend('pw_rule', {
  validate: value => {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return strongRegex.test(value)
  },
  message: 'Passowrd must contain uppercase, lowercase, special char and a digit'
})
export default {
  layout:"full",
  components:{
    ValidationProvider,
    ValidationObserver,
  },
  data(){
        return {
          name:'',
          email: '',
          contact: '',
          password: '',
          confirm_password: '',
          loading: false,
        }
  },
	methods:{
		register(){

    }
	},
}
</script>

