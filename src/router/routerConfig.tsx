import { lazy } from 'react'

export const routerConfig = [
    {
        name: 'Home',
        path: '/',
        key: 'home',
        component: lazy(() => import('../pages/Home'))
    }, {
        name: 'Blog',
        path: '/blog',
        key: 'blog',
        component: lazy(()=>import('../pages/Blog'))
    }, {
        name: 'Music',
        path: '/music',
        key: 'music',
        component: lazy(()=>import('../pages/Music'))
    },
    {
        name: 'Message',
        path: '/message',
        key: 'message',
        component: lazy(()=>import('../pages/Message'))
    }, {
        name: 'About',
        path: '/about',
        key: 'about',
        component: lazy(()=>import('../pages/About'))
    }, {
        name: 'Example',
        path: '/example',
        key: 'example',
        component: lazy(()=>import('../pages/Example'))
    }, {
        name: 'Movie',
        path: '/movie',
        key: 'movie',
        component: lazy(()=>import('../pages/Movie'))
    }
]