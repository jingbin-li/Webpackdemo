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
