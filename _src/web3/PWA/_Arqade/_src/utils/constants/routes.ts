export const ARQADE_ROUTES = [
  // temporarily cast to any because of a Type bug with the router
  {
    path: '',
    animate: true,
    children: [
      { path: '/', component: 'dq-display-app-landing' },
      {
        path: '/about',
        component: 'dq-display-app-about',
        action: async () => { await import('../../displays/_routes/app-about'); },
        children: [
          {
            path: '/', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
          },
          {
            path: '/arqade', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
          },
          {
            path: '/dapps', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
            children: [
              {
                path: '/:dapp', component: 'dq-display-app-coming-soon',
                action: async () => { await import('../../displays/_routes/app-coming-soon'); },
              },
            ]
          },
          {
            path: '/marquette', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
          },
        ]
      },
      {
        path: '/contact', component: 'dq-display-app-coming-soon',
        action: async () => { await import('../../displays/_routes/app-coming-soon'); },
      },
      {
        path: '/login', component: 'dq-display-app-coming-soon',
        action: async () => { await import('../../displays/_routes/app-coming-soon'); },
      },
      {
        path: '/register', component: 'dq-display-app-coming-soon',
        action: async () => { await import('../../displays/_routes/app-coming-soon'); },
      },
      // Auth Gate Below
      {
        path: '/profile', component: 'dq-display-app-coming-soon',
        action: async () => { await import('../../displays/_routes/app-coming-soon'); },
      },
      {
        path: '/qash', component: 'dq-display-app-coming-soon',
        action: async () => { await import('../../displays/_routes/app-coming-soon'); },
        children: [
          {
            path: '/', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
          },
          {
            path: '/exchange', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
          },
          {
            path: '/out', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
          },
        ]
      },
      {
        path: '/dapps', component: 'dq-display-app-coming-soon',
        action: async () => { await import('../../displays/_routes/app-coming-soon'); },
        children: [
          {
            path: '/', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
          },
          {
            path: '/:dapp', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
            children: [
              {
                path: '/share', component: 'dq-display-app-coming-soon',
                action: async () => { await import('../../displays/_routes/app-coming-soon'); },
              },
            ]
          },
        ]
      },
      {
        path: '/marquette', component: 'dq-display-app-coming-soon',
        action: async () => { await import('../../displays/_routes/app-coming-soon'); },
        children: [
          {
            path: '/', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
          },
          {
            path: '/social', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
          },
          {
            path: '/auqtion', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
          },
          {
            path: '/vendors', component: 'dq-display-app-coming-soon',
            action: async () => { await import('../../displays/_routes/app-coming-soon'); },
            children: [
              {
                path: '/:vendor', component: 'dq-display-app-coming-soon',
                action: async () => { await import('../../displays/_routes/app-coming-soon'); },
              },
            ]
          },
        ]
      },
      {
        path: '/qollection', component: 'dq-display-app-coming-soon',
        action: async () => { await import('../../displays/_routes/app-coming-soon'); },
      },
      // Catch-all / 404 page
      {
        path: '(.*)', component: 'dq-display-app-four-oh-four',
        action: async () => { await import('../../displays/_routes/app-four-oh-four'); },
      },
    ],
  } as any,
]
