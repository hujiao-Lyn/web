解析示例代码：

![1604838380539](C:\Users\hujia\AppData\Roaming\Typora\typora-user-images\1604838380539.png)

一、文字解析

1.当代码运行时，JavaScript 引擎首先创建一个全局执行上下文来执行全局代码。

 创建阶段的全局上下文就是

![1604838810806](C:\Users\hujia\AppData\Roaming\Typora\typora-user-images\1604838810806.png)

2.执行阶段，变量赋值完成。于是，在执行阶段期间，全局执行上下文就变成：

![1604838793374](C:\Users\hujia\AppData\Roaming\Typora\typora-user-images\1604838793374.png)

3.当遇到调用函数 multiply(20, 30) 时，就创建一个新的函数执行上下文来执行该函数代码。于是，在创建阶段期间，该函数执行上下文就是这样的：

![1604838833475](C:\Users\hujia\AppData\Roaming\Typora\typora-user-images\1604838833475.png)

4.之后，该执行上下文进入执行阶段，也就是说，该函数内的变量赋值已经完成。于是，在执行阶段期间，该函数执行上下文就是这样的：

![1604838852771](C:\Users\hujia\AppData\Roaming\Typora\typora-user-images\1604838852771.png)



二、图表解析：

1.全局执行上下文：

![1604840845949](C:\Users\hujia\AppData\Roaming\Typora\typora-user-images\1604840845949.png)





2.函数执行上下文：

![1604841564400](C:\Users\hujia\AppData\Roaming\Typora\typora-user-images\1604841564400.png)