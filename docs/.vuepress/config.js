module.exports = {
  title: 'Perpro',
  description: 'A place for discovering personal project and coding challenge ideas for front end developers.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Personal Projects', link: '/personal-projects/' },
      { text: 'Take Homes', link: '/take-homes/'},
    ],
    sidebar: {
      '/personal-projects/': [
        '',
        'audio-player',
        'breakout',
        'chat-app',
        'finance-app',
        'graphql',
        'kanban-board',
        'portfolio',
        'serverless',
      ],
      '/take-homes/': [
        '',
        'beer',
        'button',
        'calendar',
        'drag-and-drop',
        'giphy',
        'name-in-a-hat',
        'site-replication',
        'to-do-list',
        'weather',
      ]
    }
  }
}
