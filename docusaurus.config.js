// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FusionCRM",
  tagline: "Dokumentáció és Tudásbázis",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://fusioncrm.hu/",
  baseUrl: "/",

  organizationName: "fusioncrm", // Usually your GitHub org/user name.
  projectName: "fusioncrmdocs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "hu",
    locales: ["hu"]
  },

  plugins: [
    "docusaurus-plugin-sass",
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'GTM-5TBMCF6',
        anonymizeIP: true,
      },
    ],
  ],
  
 scripts: [],
stylesheets: [
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),

          editUrl: "https://github.com/wpcraftagency/hub.nestlywp/blob/main/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/wpcraftagency/hub.nestlywp/blob/main/",
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

      algolia: {
        // The application ID provided by Algolia
        appId: "PEGF6C8Q8Y",
        // Public API key: it is safe to commit it
        apiKey: "44dbebc8d658be083a2adf5913fa8119",
        indexName: "hellolol",
        // Optional: see doc section below
        contextualSearch: false,
      },

      image: "img/hellowp-hub.png",
      navbar: {
        title: "FusionCRM",
        logo: {
          alt: "FusionCRM",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "docs/dokumentacio/",
            label: "Dokumentació",
            position: "left",
            activeBaseRegex: "docs/(next|v8)",
          },
          {
            href: "https://github.com/wpcraftagency/hub.nestlywp",
            label: "GitHub",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        links: [

        ],
        logo: {
          alt: "NestlyWP!",
          src: "img/logo-260-60-color.svg",
          srcDark: "img/logo-260-60-wihte-green.svg",
          href: "https://fusioncrm.hu",
        },
        copyright: `© ${new Date().getFullYear()} FusionCRM <br> A forráskód <a href="/mit-licensz">MIT</a>, a weboldal tartalma <a href="/cc-by-nc-sa-4.0">CC BY NC SA 4.0 license</a> alatt áll.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php", "css"],
      },
    }),
};

module.exports = config;
