import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
// import vitePluginImp from "vite-plugin-imp";
import path from "path";

// import themePreprocessorPlugin, {
//   getModulesScopeGenerater,
// } from "@zougt/vite-plugin-theme-preprocessor";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { "@": path.resolve(process.cwd(), "src") } },
  root: process.cwd(), // 项目根目录
  base: "./", // 开发或生产环境服务的 公共基础路径
  mode: process.env.NODE_ENV,
  // esbuild: {
  //   jsxFactory: 'h',
  //   jsxFragment: 'Fragment'
  // },
  plugins: [
    // themePreprocessorPlugin({
    //   scss: {
    //     multipleScopeVars: [
    //       {
    //         scopeName: "theme-default",
    //         path: path.resolve("src/theme/default-vars.scss"),
    //       },
    //       {
    //         scopeName: "theme-mauve",
    //         path: path.resolve("src/theme/mauve-vars.scss"),
    //       },
    //     ],
    //     // 默认取 multipleScopeVars[0].scopeName
    //     defaultScopeName: "",
    //     // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
    //     extract: true,
    //     // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
    //     outputDir: "",
    //     // 会选取defaultScopeName对应的主题css文件在html添加link
    //     themeLinkTagId: "theme-link-tag",
    //     // "head"||"head-prepend" || "body" ||"body-prepend"
    //     themeLinkTagInjectTo: "head",
    //     // 是否对抽取的css文件内对应scopeName的权重类名移除
    //     removeCssScopeName: false,
    //     // 可以自定义css文件名称的函数
    //     customThemeCssFileName: (scopeName) => scopeName,
    //   },
    //   // less: {
    //   //   multipleScopeVars: [
    //   //     {
    //   //       scopeName: "theme-default",
    //   //       path: path.resolve("src/theme/default-vars.less"),
    //   //     },
    //   //     {
    //   //       scopeName: "theme-mauve",
    //   //       path: path.resolve("src/theme/mauve-vars.less"),
    //   //     },
    //   //   ],
    //   // },
    // }),
    // themePreprocessorPlugin({
    //   scss: {
    //     multipleScopeVars: [
    //       {
    //         scopeName: "theme-default",
    //         path: path.resolve("src/theme/default-vars.scss"),
    //       },
    //       {
    //         scopeName: "theme-mauve",
    //         path: path.resolve("src/theme/mauve-vars.scss"),
    //       },
    //     ],
    //     // 默认取 multipleScopeVars[0].scopeName
    //     defaultScopeName: "",
    //     // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
    //     extract: true,
    //     // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
    //     outputDir: "",
    //     // 会选取defaultScopeName对应的主题css文件在html添加link
    //     themeLinkTagId: "theme-link-tag",
    //     // "head"||"head-prepend" || "body" ||"body-prepend"
    //     themeLinkTagInjectTo: "head",
    //     // 是否对抽取的css文件内对应scopeName的权重类名移除
    //     removeCssScopeName: false,
    //     // 可以自定义css文件名称的函数
    //     customThemeCssFileName: (scopeName) => {
    //       console.log(scopeName, 'scopeName...')
    //       return scopeName
    //     },
    //   },
    //   // less: {
    //   //   multipleScopeVars: [
    //   //     {
    //   //       scopeName: "theme-default",
    //   //       path: path.resolve("src/theme/default-vars.less"),
    //   //     },
    //   //     {
    //   //       scopeName: "theme-mauve",
    //   //       path: path.resolve("src/theme/mauve-vars.less"),
    //   //     },
    //   //   ],
    //   // },
    // }),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: "antd-mobile",
    //       style: (name) => `antd-mobile/lib/${name}/style/index.css`,
    //     },
    //     {
    //       libName: "antd",
    //       style: (name) => `antd/lib/${name}/style/index.css`,
    //     },
    //   ],
    // }),
    reactRefresh(),
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `$themeGreen: #14ff00;
  //       $themeRed: #ff0600;
  //       $themeYellowLight: rgb(250, 215, 90);
  //       $themeYellowDark: #e3c122;
  //       $themeGray: rgb(206, 206, 206);
  //       $themeGrayMid: rgb(230, 230, 230);
  //       $themeGrayDark: rgb(94, 94, 94);
  //       $themeTransDark: rgba(26, 26, 26, 0.74);
  //       $themeBlack: #111111;
  //       $themeShadow: 0px 4px 20px 0px rgba(199, 199, 199, 0.5);
  //       `,
  //     },
  //   },
  //   postcss: {
  //     plugins: [
  //       require("postcss-pxtorem")({
  //         // 把px单位换算成rem单位
  //         rootValue: 32, // 换算基数，默认100，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
  //         propList: ["*"], //属性的选择器，*表示通用
  //         unitPrecision: 5, // 允许REM单位增长到的十进制数字,小数点后保留的位数。
  //         exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法
  //       }),
  //     ],
  //   },
  // },
  server: {
    port: 1994, // 开发环境启动的端口
    open: true, // 在服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径名。
    proxy: {
      "/blogs": {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: "http://192.168.31.40:7002/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 将 /api 重写为空
      },
    },
  },
  build: {
    target: 'es2020', // 设置最终构建的浏览器兼容目标
    outDir: 'dist', // 指定输出路径
    sourcemap: true,
  }
});

// const toggleTheme = (scopeName = "theme-default") => {
//   let styleLink: any = document.getElementById("theme-link-tag");
//   if (styleLink) {
//     // 假如存在id为theme-link-tag 的link标签，直接修改其href
//     styleLink.href = `/${scopeName}.css`;
//     // 注：如果是removeCssScopeName:true移除了主题文件的权重类名，就可以不用修改className 操作
//     document.documentElement.className = scopeName;
//   } else {
//     // 不存在的话，则新建一个
//     styleLink = document.createElement("link");
//     (styleLink as any).type = "text/css";
//     (styleLink as any).rel = "stylesheet";
//     (styleLink as any).id = "theme-link-tag";
//     (styleLink as any).href = `/${scopeName}.css`;
//     // 注：如果是removeCssScopeName:true移除了主题文件的权重类名，就可以不用修改className 操作
//     document.documentElement.className = scopeName;
//     document.head.append(styleLink);
//   }
//   console.log(styleLink)
// };
