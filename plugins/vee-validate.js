import Vue from 'vue';
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { ValidationProvider, ValidationObserver } from "vee-validate";

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});


// extend("required", {
//     ...required,
//     message: "This field is required"
// });

// extend("alpha", {
//     ...alpha,
//     message: "This field must only contain alphabetic characters"
// });