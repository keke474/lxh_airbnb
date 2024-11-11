const path = require('path')  //path是nodeJS的一个内置模块
const CracoLessPlugin = require('craco-less');

const resolve = pathname => path.resolve(__dirname, pathname)
/**
* path.resolve() 它的作用是拼接路径，其传参个数没有限制，每个参数均表示一段路径
* console.log(__dirname);  d:\Code\24Project\React_Project\lxh_airbnb
*/
// d:\Code\24Project\React_Project\lxh_airbnb\src
console.log(path.resolve(__dirname, 'src'));

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin
    },
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      // 每次写这个很麻烦，所以创建了resolve函数
      "utils": path.resolve(__dirname, "src/utils")
    },
    resolve: {
      alias: {
        '@mui/styled-engine': '@mui/styled-engine-sc'
      }
    }
  }
}

