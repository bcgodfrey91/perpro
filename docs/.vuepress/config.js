module.exports = {
  title: 'Perpro',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/' },
    ],
    sidebar: [
      {
        title: 'Take Homes',
        collapsable: false,
        children: [
          '/examples/take-homes/',
          '/examples/take-homes/button',
          '/examples/take-homes/calendar',
          '/examples/take-homes/giphy',
          '/examples/take-homes/idea-box',
          '/examples/take-homes/name-in-a-hat',
          '/examples/take-homes/site-replication',
          '/examples/take-homes/to-do-list',
          '/examples/take-homes/weather',
        ]
      },
      {
        title: 'Projects',
        collapsable: false,
        children: [
          '/examples/personal-projects/',
        ]
      }
    ]
  }
}
