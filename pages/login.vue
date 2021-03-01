<template>
  <div>
    <div class="w-full h-screen">
            <div class="mx-auto h-full flex justify-center items-center">
              <div class="container mx-auto">
                <XyzTransition appear-visible>
                <p
                  xyz="fade down ease-in-out-back out-delay-5 "
                  class="text-2xl font-bold px-5 text-center text-coolGray-800  "
                >
                Login  To your Account  <i class="fas fa-cogs"></i>
                </p>
                </XyzTransition>
                <p
                  xyz="fade down ease-in-out-back out-delay-5 "
                  class="text-sm px-5 text-center text-coolGray-500 mb-6 mt-1"
                >
                  Hey there! Welcome back. Good to see you again.
                </p>
                <div class="flex justify-center">
                  <div class="w-full flex justify-center">
                    <div class="w-full lg:w-1/3 bg-white p-5 rounded-lg shadow-lg">
                      <ValidationObserver v-slot="{ invalid }">
                      <form class="px-6 overflow-y-hidden">
                        <div class="mb-4 relative">
                          <ValidationProvider rules="required|email" v-slot="{ errors }">
                          <label class="text-xs font-base text-coolGray-800" for="email">
                            Email
                          </label>
                          <input
                            class="w-full mt-1 px-3 py-2 text-xs  leading-tight shadow appearance-none focus:outline-none focus:shadow-outline border-none"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            v-model="email"
                            name="Email"
                          />
                          <div class="text-red-500 font-base text-xs absolute mt-1">{{ errors[0] }}</div>
                          </ValidationProvider>
                        </div>
                        <div class="mb-4 relative mt-2">
                          <ValidationProvider rules="required" v-slot="{ errors }">
                          <label class="text-xs font-base text-coolGray-800" for="password">
                            Password
                          </label>
                          <input
                            class="w-full mt-1 px-3 py-2 text-xs leading-tight shadow appearance-none focus:outline-none focus:shadow-outline border-none"
                            id="password"
                            type="password"
                            placeholder="******************"
                            v-model="password"
                            name="Password"
                            @keyup.enter="login()"
                          />
                          <div class="text-red-500 font-base text-xs absolute mt-1">{{ errors[0] }}</div>
                          </ValidationProvider>
                        </div>
                        <div class="mb-4 text-center mt-6">
                          <button
                            :disabled="invalid || loading ==  true"
                            :class="invalid ? 'flex justify-center w-full px-4 py-2 bg-coolGray-300 text-white rounded focus:outline-none focus:shadow-outline cursor-not-allowed' : 'flex justify-center w-full px-4 py-2 bg-coolGray-800 text-white rounded focus:outline-none focus:shadow-outline' "
                            type="button"
                            class=""
                            @click="login()"
                          >
                          <p class="text-sm">Login</p>
                          <p v-if="loading" class="ml-2"><half-circle-spinner
                                  :animation-duration="1000"
                                  :size="20"
                                  :color="'#fff'"/>
                          </p>
                          </button>
                        </div>
                        <hr class="mb-4 border-t border-coolGray-300" />
                        <div class="text-center text-coolGray-800 text-xs">
                          New here?
                          <nuxt-link to="/register" class="inline-block text-xs text-coolGray-600 align-baseline hover:text-coolGray-800">
                                Register
                          </nuxt-link>
                        </div>
                        <div class="text-center text-xs">
                          <nuxt-link :to="{ path:'/forgetpassword' }" class="inline-block text-coolGray-500 align-baseline hover:text-coolGray-800">
                                Forgot Password?
                          </nuxt-link>
                        </div>
                        <div class="flex flex-col justify-center rounded items-center mt-4 bg-gray-100 p-2 text-gray-500 text-xs">
                          <div>Email: human@email.com</div>
                          <div>Password: Human@123</div>
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
          loading: false,
        }
  },
	methods:{
		login(){
      this.loading = true
      if(this.email == 'human@email.com' && this.password == 'Human@123') {
         this.loading = false
        this.$toast.success('Login Successfull',{
          position: 'top-right'
        })
        this.$router.push({
          path: '/'
        })
      } else {
        this.loading = false
        this.$toast.error('Some error occured',{
          position: 'top-right'
        })
      }
    }
	}
}
</script>
