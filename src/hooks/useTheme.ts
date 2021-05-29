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
const toggleTheme = (scopeName = "theme-default") => {
  let styleLink: any = document.getElementById("theme-link-tag");
  if (styleLink) {
    // 假如存在id为theme-link-tag 的link标签，直接修改其href
    styleLink.href = `/${scopeName}.css`;
    // 注：如果是removeCssScopeName:true移除了主题文件的权重类名，就可以不用修改className 操作
    document.documentElement.className = scopeName;
  } else {
    // 不存在的话，则新建一个
    styleLink = document.createElement("link");
    styleLink.type = "text/css";
    styleLink.rel = "stylesheet";
    styleLink.id = "theme-link-tag";
    styleLink.href = `/${scopeName}.css`;
    // 注：如果是removeCssScopeName:true移除了主题文件的权重类名，就可以不用修改className 操作
    document.documentElement.className = scopeName;
    document.head.append(styleLink);
  }
};
export default toggleTheme
