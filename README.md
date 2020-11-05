# Webpackdemo

webpack 学习

**作用域**

运行时-变量 函数 对象 可访问性

作用域决定了代码中变量和其他资源的可见性

1.模块化的优点

- 作用域封装
  ```
  (function (window) {
    var name = "jingbin";
    var age = 23;
    function tell() {
      console.log("我的名字是", name);
      console.log("我的年龄是", age);
    }
    window.jingbinModule = { tell };
  })(window);
  ```
- 重用性
- 解除耦合

**模块化方案进化史**

```
//AMD 异步模块定义
define("getSum", ["math"], function () {
  return function (a, b) {
    console.log("sum:" + math.sum(a, b));
  };
});

//commonjs
//通过require 函数引入
const math = require("./math");
//通过exports 将其导出
exports.getSum = function (a, b) {
  return a + b;
};

//ES6 MODULE
//import 导入
import math from "./math";
//export 导出
export function sum(a, b) {
  return a + b;
}

```

**webpack的打包机制**

1.webpack与立即执行函数的关系

2.webpack打包的核心逻辑
