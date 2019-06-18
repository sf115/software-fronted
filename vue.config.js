module.exports = {
  devServer: {
    // 默认端口
    port: 8081,
    host: "localhost",
    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        changeOrigin: true
      }
    }
  },
  pages: {
    main: {
      // page的入口
      entry: "src/main/main.js",
      // 模板来源
      template: "src/main/index.html",
      filename: "index.html",
      title: "main Page",
      chunks: ["chunk-vendors", "chunk-common", "main"]
    },
    login: {
      // page 的入口
      entry: "src/login/main.js",
      // 模板来源
      template: "src/login/login.html",
      // 在 dist/index.html 的输出
      filename: "login.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "login Page",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "login"]
    }
  },
  productionSourceMap: false
  // 生成环境配置
  // 默认按部署在服务器根路径配置
  // 编译时资源按相对路径声明，可部署在任意路径
  // publicPath: "./",
  // productionSourceMap: false
};
