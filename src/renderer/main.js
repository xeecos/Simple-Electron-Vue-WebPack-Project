import VueRouter from 'vue-router'
import Vue from 'vue/dist/vue.js'
import routes from './routes'
Vue.use(VueRouter);
Vue.config.debug = true
Vue.config.devtools = true
const router = new VueRouter({
    routes: routes
});
const app = new Vue({
    router,
    template: `<div id="app"><router-view class="view"></router-view></div>`
}).$mount('#app');