// @ts-check
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '陈晓铜 · Web Developer',
  tagline: '把新的想法，做成真正好用的 Web 体验',
  url: 'https://nicolerobinn.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Nicolerobinn',
  projectName: 'Nicolerobinn.GitHub.io',
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
    localeConfigs: {
      'zh-CN': {
        label: '简体中文',
        htmlLang: 'zh-CN',
      },
    },
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: '晓铜的博客',
          blogDescription: '关于 Web 开发、技术探索与持续学习的记录。',
          path: './blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            title: '晓铜的博客',
            description: '关于 Web 开发、技术探索与持续学习的记录。',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og-home.png',
      navbar: {
        title: 'CX.',
        hideOnScroll: true,
        items: [
          {to: '/', label: '首页', position: 'right', exact: true},
          {to: '/blog', label: '博客', position: 'right'},
          {href: '/#about', label: '关于', position: 'right'},
          {
            href: 'https://github.com/Nicolerobinn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '探索',
            items: [
              {
                label: '首页',
                to: '/',
              },
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '关于我',
                href: '/#about',
              },
            ],
          },
          {
            title: '联系',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Nicolerobinn',
              },
            ],
          },
        ],
        logo: {
          alt: '陈晓铜',
          src: 'img/avatar.jpg',
          width: 44,
          height: 44,
        },
        copyright: `© ${new Date().getFullYear()} 陈晓铜 · 保持好奇，持续创造。`,
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          name: 'keywords',
          content: '陈晓铜, Web Developer, 前端开发, 技术博客',
        },
      ],
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
