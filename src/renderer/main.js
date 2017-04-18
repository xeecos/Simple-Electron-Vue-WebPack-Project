import Vue from 'vue'
import routes from './routes'

const app = new Vue({
    el: '#app',
    data: {
        currentRoute: "/"
    },
    computed: {
        ViewComponent() {
            const matchingView = routes[this.currentRoute];
            console.log(this.currentRoute)
            return matchingView ?
                require('./' + matchingView.toString().toLowerCase() + '/' + matchingView.toString().toLowerCase() + '.vue') :
                require('./excepts/error.vue')
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
})

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})