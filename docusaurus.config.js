// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Linux Learning",
  tagline: "CWorld 在学习 Linux 时的一些笔记",
  url: "https://linux.cworld.top",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cworld1", // Usually your GitHub org/user name.
  projectName: "linux-learning", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
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
          editUrl: "https://github.com/cworld1/linux-learning/blob/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/cworld1/linux-learning/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "CWorld Project",
        logo: {
          alt: "CWorld Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "README",
            position: "left",
            label: "笔记",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          { to: "https://blog.cworld.top/", label: "博客", position: "right" },
          {
            href: "https://github.com/cworld1/linux-learning",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "笔记",
            items: [
              {
                label: "笔记简述",
                to: "/docs",
              },
            ],
          },
          {
            title: "联系",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/cworld0",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/cworld0",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "个人博客",
                to: "https://blog.cworld.top/",
              },
              {
                label: "GitHub",
                href: "https://github.com/cworld1/linux-learning",
              },
            ],
          },
        ],
        copyright: `Copyright ©${new Date().getFullYear()} CWorld • \
          <a href="https://docusaurus.io/">Docusaurus 2</a> 强力驱动 • \
          总访问 <span id="busuanzi_value_site_pv">???</span> 次`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  // scripts: ["https://busuanzi.icodeq.com/busuanzi.pure.mini.js"],

  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      },
    ],
  ],
};

module.exports = config;
