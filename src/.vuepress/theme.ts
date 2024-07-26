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
      }
    }
  },

  // Theme Plugins
  plugins: {
    blog: false,
    comment: false,
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
      stylize: [{
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended"
            };
        }
      }],
      playground: {
        presets: ["ts", "vue"],
      },
      vuePlayground: true,
      demo: true,
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      delay: 800
    },
    pwa: false,
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
    sitemap: false
  }
}, {
  custom: true
});
