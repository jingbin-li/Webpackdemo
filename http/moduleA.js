// (function (window) {
//   var name = "jingbin";
//   var age = 23;
//   function tell() {
//     console.log("我的名字是", name);
//     console.log("我的年龄是", age);
//   }
//   window.jingbinModule = { tell };
// })(window);

// //AMD 异步模块定义
// define("getSum", ["math"], function () {
//   return function (a, b) {
//     console.log("sum:" + math.sum(a, b));
//   };
// });

// //commonjs
// //通过require 函数引入
// const math = require("./math");
// //通过exports 将其导出
// exports.getSum = function (a, b) {
//   return a + b;
// };

// //ES6 MODULE
// //import 导入
// import math from "./math";
// //export 导出
// export function sum(a, b) {
//   return a + b;
// }
