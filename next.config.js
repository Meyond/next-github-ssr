const widthCss = require("@zeit/next-css");
const isProduction = process.env.NODE_ENV === "production";

const configs = {
  // 编译输出目录
  distDir: "dist",
  // 是否给每个路由生成Etag
  generateEtags: true,
  // 页面内容缓存配置
  onDemandEntries: {
    // 内容在内存的缓存时长(ms)
    maxInactiveAge: 25 * 1000,
    // 同时缓存多少个页面
    pagesBufferLength: 2
  },
  // 在pages目录下页面文件的后缀
  pageExtensions: ["jsx", "js"],
  // buildId(一般在同一个项目多个节点的部署才会用到)
  generateBuildId: async () => {
    if (process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID;
    }
    return null; // 返回null则使用默认unique id
  },
  // 修改webpack config
  webpack(config, options) {
    return config;
  },
  // 修改webpackDevMiddleware配置
  webpackDevMiddleware: config => {
    return config;
  },
  env: {
    customKey: "value"
  },
  // 服务端渲染配置
  serverRuntimeConfig: {
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET
  },
  // 服务端和客户端渲染配置
  publicRuntimeConfig: {
    staticFolder: "/static"
  }
};

if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}

module.exports = widthCss({}); // 让next支持css文件
