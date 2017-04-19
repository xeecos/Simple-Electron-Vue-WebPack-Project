export default [{
        path: '/',
        component: require('./home/home.vue')
    },
    {
        path: '/editor',
        component: require('./editor/editor.vue')
    },
    {
        path: '/user/:id',
        component: require('./user/user.vue')
    },
    {
        path: '*',
        component: require('./error/error.vue')
    }
]