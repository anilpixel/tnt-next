// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'tntd',
  url: 'https://tnt.tongdun.me/',
  baseUrl: '/tntd/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  favicon: 'img/favicon.png',
  organizationName: 'tntd', // Usually your GitHub org/user name.
  projectName: 'tntd', // Usually your repo name.

  scripts: [
    'https://cdn.jsdelivr.net/npm/@babel/standalone@7.16.4/babel.min.js',
  ],

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      fr: {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-Hans',
      },
    },
  },
  plugins: [
    [
      'docusaurus-plugin-less',
      {
        lessOptions: {
          javascriptEnabled: true,
          math: 'always',
          modifyVars: {
            hack: 'true; @import "tntd/themes/default/variables.less";',
          },
        },
      },
    ],
    // [
    //   require.resolve('@easyops-cn/docusaurus-search-local'),
    //   {
    //     hashed: true,
    //     language: ['en', 'zh'],
    //   },
    // ],
    // './postcss-tailwind-loader',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: '/',
            position: 'left',
            label: '首页',
          },
          {
            type: 'doc',
            docId: 'design/intro',
            position: 'left',
            label: '设计',
          },
          {
            type: 'doc',
            docId: 'components-intro',
            position: 'left',
            label: '组件',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: '文档',
            items: [
              {
                label: '设计',
                to: '/design/intro',
              },
              {
                label: '组件',
                to: '/components/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
    }),
}

module.exports = config
