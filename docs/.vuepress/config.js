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
          '/examples/take-homes/backend',
          '/examples/take-homes/frontend',
        ]
      },
      {
        title: 'Projects',
        collapsable: false,
        children: [
          '/examples/personal-projects/',
          '/examples/personal-projects/backend',
          '/examples/personal-projects/frontend',
        ]
      }
    ]
  }
}
