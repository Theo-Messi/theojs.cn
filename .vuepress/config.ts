import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: "Theo-Messi Homepage",
  description: "Theo-Messi Homepage",
  bundler: viteBundler(),
  // dest: "public",
  head: [
    ["link", { rel: "icon", href: "https://i.theovan.cn/avatar.png" }],
  ],
  theme: recoTheme({
    colorMode: "dark",
    style: "@vuepress-reco/style-default",
    logo: "https://i.theovan.cn/avatar.png",
    author: "Theo-Messi",
    authorAvatar: "https://i.theovan.cn/avatar.png",
    docsRepo: "https://github.com/Theo-Messi/Homepage",
    docsBranch: "main",
  }),
});
