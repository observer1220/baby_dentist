// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '寶貝兔牙醫診所',
  tagline: '兒牙｜舒眠｜早療｜植牙中心｜偏遠地區行動醫療',
  url: 'https://github.com',
  baseUrl: '/baby_dentist/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'observer1220', // Usually your GitHub org/user name.
  projectName: 'baby_dentist', // Usually your repo name.

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
          src: 'img/logo.png',
        },
        items: [
          {
            label: '診所資訊',
            position: 'left',
            to: '/clinic_info'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '診療項目',
          },
          {
            label: '醫療團隊',
            position: 'left',
            to: '/team'
          },
          {
            label: '門診時間',
            position: 'left',
            to: '/work_time',
          },
          {
            label: '案例分享',
            position: 'left',
            to: '/blog',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '關於我們',
            items: [
              {
                label: '診所資訊',
                to: '/clinic_info',
              },
              {
                label: '門診時間',
                to: '/work_time',
              },
              {
                label: '醫療團隊',
                to: '/team',
              },
              {
                label: '診療項目',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Facebook',
            items: [
              {
                label: '寶貝兔牙醫 華夏店',
                href: 'https://www.facebook.com/babytoothclinic',
              },
              {
                label: '寶貝兔牙醫 青埔店',
                href: 'https://www.facebook.com/BABYTOOTH2021',
              }
            ],
          },
          {
            title: '更多資訊',
            items: [
              {
                label: '山區醫療',
                to: '/blog',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 寶貝兔親子牙醫診所`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      }
    }),
};

module.exports = config;
