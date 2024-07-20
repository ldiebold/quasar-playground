const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage/IndexPage.vue')
      },
      {
        path: 'friends',
        name: 'friends',
        component: () => import('pages/FriendsPage.vue')
      },
      {
        path: 'scan',
        name: 'scan',
        component: () => import('pages/ScanPage/ScanPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
