// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '寶貝兔牙醫診所',
  tagline: '兒牙｜美學｜身障｜植牙中心｜偏遠地區行動醫療',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: '寶貝兔牙醫診所',
        logo: {
          alt: 'baby tooth logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            label: '診所資訊',
            position: 'left',
            to: '/clinic_info'
          },
          {
            label: '醫師團隊',
            position: 'left',
            to: '/doctor_team'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '診療項目',
          },
          {
            label: '偏鄉服務',
            position: 'left',
            to: '/blog',
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '診療項目',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社群經營',
            items: [
              {
                label: '寶貝兔牙醫診所－華夏店',
                href: 'https://www.facebook.com/babytoothclinic/',
              },
              {
                label: '寶貝兔牙醫診所－青埔店',
                href: 'https://www.facebook.com/BABYTOOTH2021/',
              }
            ],
          },
          {
            title: '更多資訊',
            items: [
              {
                label: '偏鄉服務',
                to: '/blog',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 寶貝兔親子牙醫診所－箴雅設計網路工作室`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
