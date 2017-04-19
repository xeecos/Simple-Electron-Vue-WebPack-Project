export default [
    // 动态路径参数 以冒号开头
    {
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
    }
]