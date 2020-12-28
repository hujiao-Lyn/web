# 四川文产院 2018 级《WEB 前端实训》试卷答卷

> 答卷说明：
> 1. 本试卷满分 100 分，120 分钟完卷。
> 2. 本次考试为开卷考试。
> 3. 本试卷适用于 2018 级移动专业 1、2 班

## 一、选择题（30 分，共 15 题，每题 2 分，答案包含单选、多选）

1. JavaScript 中声明变量的关键字包括：____________a b c ___。
2. 如下属于 JavaScript 原始数据类型的有：______a  d_____。
3. 在什么时候会出现 undefined?____a b c d___
4. 以下数组方法中，哪一个是用于删除数组中的第一个元素?______c_
5. 定义函数的方式包括：______a b c d____
6. 间接调用函数的方法包括：_________a b c___
7. 下述有关闭包的叙述，正确的有：______a b c d_______。
8. 下面有关纯函数的叙述，正确的有：______a b c___________。
9. 面向对象编程的基本特征包括：_________b c d__________。
10. 在 JavaScript 中创建对象的方式包括：____________a b c d______。
11. 在 JavaScript 中，执行上下文的创建分为两个阶段，这两个阶段是：___c d_________。
12. 变量声明的三种方式中，变量可以提升的方式包括：___a_____。
13. 在 JavaScript 中，有关 this 值的说法，正确的包括：____________a c_。
14. 下面有关 ES6 类的说法，正确的包括：_________a b d___。
15. 下面有关 ES6 类的静态方法，正确的包括：______a c______。

------

## 二、代码填空题（20 分，共 5 题，每题 4 分）

1. 控制台的输出为：`________student undefined____________`。
2. 控制台的输出为：`______________1________`。
3. 控制台的输出为：`________I am outside!______________`。
4. 控制台的输出为：`_________I am outside!_____________`。
5. 控制台的输出为：
    `______小明______`
    `__________hi__`
-------

## 三、代码题（50 分，共 5 题，每题 10 分）

1. 斐波那契（Fibonacci）数组的计算是一项很耗时的操作，请使用 Memoization 技术对斐波那契数组的计算进行优化。

```js
//斐波那契数组
function memoF(n) {
    memoF.cache = memoF.cache || {};
    if (!memoF.cache[n]) {
      memoF.cache[n] = n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
    }
      return memoF.cache[n];
  }
  console.time();
  console.log(memoF(30));
  console.timeEnd();
// 输出
// 832040
// default: 7.360ms
```

-------

2. 代码为：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
.a:hover{
        color:red;
    }
ul{
    list-style: none;
}
</style>
<body>
    <ul id="list">
        <li class="a">Java</li>
        <li class="a">python</li>
        <li class="a">JavaScript</li>
    </ul>
    <input type="text" id="bookName"/>
    <button id="add" onclick="addBook()">+</button>
    <button id="del">-</button>
    <script>
        const books=document.querySelector("#list")
        const bookName=document.querySelector("#bookName")
        const add=document.querySelector("#add")
        const del=document.querySelector("#del")
        var i=0;//判断点击的按钮
        const addBook=()=>{
            const oElement=document.createElement('li')//创建标签
            oElement.className=`a`;//给新添加的设置class
            const oText=document.createTextNode(bookName.value)//创建文本
            oElement.appendChild(oText)//向元素添加子元素
            books.appendChild(oElement)
            bookName.value=""
             var a=document.getElementsByClassName(`lis+${i}`);//查找class
            a[0].className="a";//设置属性

        }
        const delbook=()=>{
            books.removeChild(books.lastElementChild)
        }
        add.addEventListener("click",addBook)
        del.addEventListener("click",delbook)
    </script>
</body>
</html>
```

-------

3. 代码为：

```js
const oArray = [1, 2, 2, 3, null, null, undefined, undefined, 4, 4];
//数组去重
const oArray = [1, 2, 2, 3, null, null, undefined, undefined, 4, 4];
const mySet = new Set(oArray);
const oArray1 = [...mySet]; 
console.log(oArray1);
//输出：[ 1, 2, 3, null, undefined, 4 ]
```

-------

4. 代码：

```js
const oArray = [1, 2, 12, 10, 33, 7, 9, 22];


// 数组排序
const oArray = [1, 2, 12, 10, 33, 7, 9, 22];

function num(a, b) {
  return a - b;
}

oArray.sort(num);   
console.log(oArray);   
//输出[1,  2,  7,  9, 10, 12, 22, 33]
```

-------

5. 代码：

```js
const oArray = [0, 12, 7, 8, 9, 24, 1];

// 5.数组偶数求和
const oArray = [0, 12, 7, 8, 9, 24, 1].filter(x => x%2 ===0);
console.log(oArray)  //[ 0, 12, 8, 24 ]
let sum = oArray.reduce((acc, val) => acc +val);
console.log(sum);   
 //输出和为：44
```





完成答卷后，请将答卷上传到个人远程仓库。否则以零分处理。

​        