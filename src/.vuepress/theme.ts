import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

// Import custom CSS (if any other custom styles are needed)
// import "./styles/custom.css";

export default hopeTheme({
  // Theme Basic
  hostname: "https://ieda.oscc.cc",
  author: {
    name: "iEDA",
    url: "https://github.com/OSCC-Project",
    email: "ieda.oscc@gmail.com"
  },
  favicon: "/res/images/logo/ieda_icon.png",

  // Theme Layout
  // Navbar
//   navbarFont: {
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#333"
//   },
  navbarIcon: true,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"]
  },


  logo: "/res/images/logo/ieda_logo_b.png",
  logoDark: "/res/images/logo/ieda_logo_d.png",

  repo: "OSCC-Project/iEDA",
  repoDisplay: true,
  repoLabel: "GitHub",
  navbarAutoHide: "mobile",
  hideSiteNameOnMobile: true,

  // Sidebar
  sidebarIcon: true,
  sidebarSorter: ["readme", "order", "title", "filename"],
  headerDepth: 2,

  // Route Navigation
  breadcrumb: true,
  breadcrumbIcon: true,
  prevLink: true,
  nextLink: true,


  // Title
  titleIcon: true,
  // pageInfo: false,
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],


  // Meta
  lastUpdated: true,
  contributors: true,
  editLink: true,
  docsRepo: "oscc-web/ieda-website",
  docsBranch: "main",
  docsDir: "src",

  //home
  home: "/",

  // Footer
  footer: "GPL License | Copyright © iEDA | 2023 - Now",
  copyright: false,
  displayFooter: true,
  // Others
  toc: false,

  // Theme Appearance
  iconAssets: "fontawesome",
  darkmode: "toggle",
//   darkmode: "switch",
  themeColor: true,
  fullscreen: false,
  backToTop: true,
  pure: false,
  print: false,

  // Theme i18N
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  // Theme Plugins
  plugins: {
    blog: {
      medias: {
        Baidu: "https://example.com",
        BiliBili: "https://example.com",
        Facebook: "https://example.com",
        Gitee: "https://example.com",
        GitHub: "https://example.com",
        Gmail: "mailto:info@example.com",
        Instagram: "https://example.com",
        Linkedin: "https://example.com",
        QQ: "https://example.com",
        Twitter: "https://example.com",
        Wechat: "https://example.com",
        Weibo: "https://example.com",
        Whatsapp: "https://example.com",
        Youtube: "https://example.com",
        Zhihu: "https://example.com",
      },
    },
    // comment: false,
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    copyright: {
      author: "iEDA",
      license: "GPL-3.0",
      triggerWords: 1,
      global: true,
      disableCopy: false,
      disableSelection: false
    },
    feed: {
      rss: false,
      rssOutputFilename: "rss.xml"
    },
    mdEnhance: {
      gfm: true,
      alert: true,
      container: true,
      checkLinks: {
        status: "dev"
      },
      vPre: true,
      tabs: true,
      codetabs: true,
      align: true,
      attrs: true,
      sup: true,
      sub: true,
      footnote: true,
      mark: true,
      figure: true,
      imgLazyload: false,
      imgMark: true,
      imgSize: true,
      tasklist: true,
      include: true,
      katex: true,
      mathjax: true,
      chart: true,
      echarts: true,
      flowchart: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      vuePlayground: true,
      demo: true,
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      kotlinPlayground: true,
      markmap: true,
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      sandpack: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({
            tag,
          }): {
            tag: string;
            attrs: Record<string, string>;
            content: string;
          } | void => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      delay: 800
    },
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            // eslint-disable-next-line @typescript-eslint/naming-convention
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
    components: {
      components: [
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "StackBlitz",
        "VideoPlayer",
        "YouTube"
      ]
    },
    git: true,
    prismjs: true,
    photoSwipe: true,
    readingTime: {
      wordPerMinute: 300
    },
    seo: false,
    sitemap: false,
    searchPro: true,
  }
}, {
  custom: true
});
