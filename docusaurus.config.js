// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "寶貝兔親子牙醫聯盟",
  tagline: "兒牙｜舒眠｜早療｜植牙中心｜偏遠地區行動醫療",
  url: "https://github.com",
  baseUrl: "/baby_dentist/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "observer1220", // Usually your GitHub org/user name.
  projectName: "baby_dentist", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
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
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "寶貝兔親子牙醫聯盟",
        logo: {
          alt: "baby tooth logo",
          src: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1692254506/favicon_iecad5.png",
        },
        items: [
          {
            label: "關於寶貝兔",
            position: "left",
            to: "/clinic_info",
          },
          {
            label: "隱適美矯正",
            position: "left",
            items: [
              {
                label: "隱適美矯正",
                to: "/docs/Invisalign/3-1-隱適美矯正",
              },
              {
                label: "自鎖式矯正",
                to: "/docs/Invisalign/3-2-自鎖式矯正",
              },
            ],
          },
          {
            position: "left",
            label: "美學牙科",
            items: [
              {
                label: "美學植牙",
                to: "/docs/EstheticDentistry/4-1-美學植牙",
              },
              {
                label: "美學瓷牙貼片",
                to: "/docs/EstheticDentistry/4-2-美學瓷牙貼片",
              },
              {
                label: "牙齦整形",
                to: "/docs/EstheticDentistry/4-3-牙齦整形",
              },
              {
                label: "牙齒美白",
                to: "/docs/EstheticDentistry/4-4-牙齒美白",
              },
              {
                label: "全口重建",
                to: "/docs/EstheticDentistry/4-5-全口重建",
              },
            ],
          },
          {
            label: "舒眠鎮靜",
            position: "left",
            to: "/docs/舒眠鎮靜",
          },
          {
            label: "我選擇寶貝兔",
            position: "left",
            to: "/blog",
          },
          {
            label: "ESG服務",
            position: "left",
            to: "/esg",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "關於我們",
            items: [
              {
                label: "關於寶貝兔",
                to: "/clinic_info",
              },
              {
                label: "我選擇寶貝兔",
                to: "/blog",
              },
              {
                label: "舒眠鎮靜",
                to: "/docs/舒眠鎮靜",
              },
              {
                label: "ESG服務",
                to: "/blog",
              },
            ],
          },
          {
            title: "隱適美矯正",
            items: [
              {
                label: "隱適美矯正",
                to: "/docs/Invisalign/3-1-隱適美矯正",
              },
              {
                label: "自鎖式矯正",
                to: "/docs/Invisalign/3-2-自鎖式矯正",
              },
            ],
          },
          {
            title: "美學牙科",
            items: [
              {
                label: "美學植牙",
                to: "/docs/EstheticDentistry/4-1-美學植牙",
              },
              {
                label: "美學瓷牙貼片",
                to: "/docs/EstheticDentistry/4-2-美學瓷牙貼片",
              },
              {
                label: "牙齦整形",
                to: "/docs/EstheticDentistry/4-3-牙齦整形",
              },
              {
                label: "牙齒美白",
                to: "/docs/EstheticDentistry/4-4-牙齒美白",
              },
              {
                label: "全口重建",
                to: "/docs/EstheticDentistry/4-5-全口重建",
              },
            ],
          },
          {
            title: "立即預約",
            items: [
              {
                label: "青埔寶貝兔",
                href: "https://lin.ee/PgXd1aC",
              },
              {
                label: "左營寶貝兔",
                href: "https://lin.ee/WuCQy05",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 寶貝兔親子牙醫聯盟`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
};

module.exports = config;
