const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Index.vue')

        }]
    },
    {
        path: '/catalogues',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: 'region',
            name: 'region',
            component: () =>
                import ('src/pages/catalogues/Region.vue')
        }, {
            path: 'district',
            name: 'district',
            component: () =>
                import ('src/pages/catalogues/District.vue')
        }, {
            path: 'community',
            name: 'community',
            component: () =>
                import ('src/pages/catalogues/Community.vue')
        }, {
            path: 'city',
            name: 'city',
            component: () =>
                import ('src/pages/catalogues/City.vue')
        }, {
            path: 'city_district',
            name: 'city_district',
            component: () =>
                import ('src/pages/catalogues/City_district.vue')
        }, {
            path: 'street',
            name: 'street',
            component: () =>
                import ('src/pages/catalogues/Street.vue')
        }, {
            path: 'person',
            name: 'person',
            component: () =>
                import ('src/pages/catalogues/Person.vue')
        }, ]
    },
    {
        path: '/about',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/About.vue')
        }]
    },
    {
        path: '/profile',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Profile.vue')
        }]
    },
    {
        path: '/settings',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Settings.vue')
        }]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes