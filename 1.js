//函数的属性
function getStudent(name,gender){
    return'';

}
console.log(getStudent.length); //2

//函数的属性
function getStudent1(name,...gender){
    return'';

}
console.log(getStudent1.length);  //1
console.log(getStudent1.name);


const getStudent2 = function (){
    return"";

}
console.log(getStudent2.name);  //getStudent2
console.log(getStudent2.prototype)


function add(c,d){
    console.log(this.a+this.b+c+d);
}
add(3,4);  //NaN

let num = {a:1,b:2};
add.call(num,3,4);//10

const person ={
    name:"hujiao",
    say:function(){
        return`你好，我是${this.name}`;
    },
}
function moreSay(age,hobby){
    console.log(`${this.say()},我${age}岁,喜欢${hobby}`);

}
moreSay.call(person,49,"写代码");

var lastName = 'global_name';
const func = function(firstName){
    return firstName + "" +this.lastName;
};
var persion = {
    lastName:"person_name",
}
let a = func("hujiao");
console.log(a);
let b = func.call(persion,"hujiao");
console.log(b);
let c = func.call();
console.log(c);
let d = func.call(null,"hujiao");
console.log(d);
let e = func.call(undefined,"hujiao");
console.log(e);



//apply()
let array = ['a','b'];
let elements = [0,1,2];

let a = [...array,...elements];
console.log(a);  //[ 'a', 'b', 0, 1, 2 ]

array.push.apply(array, elements);
console.log(array);  //[ 'a', 'b', 0, 1, 2 ]

const numbers = [5,6,2,3,7];

let max = Math.max.apply(null,numbers);
console.log(max);  //7

//bind()

var small = {
    a: 1,
    go: function (b,c,d) {
        console.log(this.a+b+c+d);
    },
};
var large = {
    a :100,
};
small.go(2,3,4);  //10
small.go.call(large,2,3,4);  //109
let bindTest1 = small.go.bind(large,2,3,4);
bindTest1(4);  //109
let bindTest2 = small.go.bind(large,2,3);
bindTest2(4);   //109
let bindTest3 = small.go.bind(large,2);
bindTest3(3,4)   //109

const person = {
    age:20,
    getNameAndAge:function(name){
        return name + " " +this.age;
    },
};
//直接在person对象上调用方法
person.getNameAndAge("hujiao");   //hujiao 20
//将方法的引用赋值给变量  nameAndAge
const nameAndAge  = person.getNameAndAge;
//通过引用nameAndAge ,调用赋值给他的函数
nameAndAge("hujiao");//hujiao  undefined  (函数在个局作用域)
const boundNameAndAge = nameAndAge.bind(person,"hujiao");
boundNameAndAge();//hujiao   20  (bind()创建一个新函数，将this调用
//不带任何参数绑定
const boundNameAndAge = nameAndAge.bind();
boundNameAndAge("hujiao");//hujiao  undefined
//将 'this' 设置为 'undefined'
const boundNameAndAge = nameAndAge.bind(undefined,"hujiao");
boundNameAndAge();//hujiao  undefined

const boundNameAndAge = nameAndAge.bind(null,"hujiao");
boundNameAndAge();


//函数的toString()方法

const getStudent = function(){
    return 'hu';
}
console.log(getStudent.toString());

console.log(Math.max.toString());

//Memoizaton

function square(x){
    return x * x
}
function square(x){
    square.cache = square.cache || {};
    if(!square.cache[x]){
        square.cache[x] = x * x;
    }
    return square.cache[x];
}
square(3);
square(11);
console.log(square.cache);  //{ '3': 9, '11': 121 }
square(3)



const fina = function(n){
    // if (n<2){
    //     return n;
    // }else{
    //     return fina(n-1)+fina(n-2);
    // }
    return n <2? n:fina(n-1) + fina(n-2);
};

console.time()
console.log(fina(40))
console.timeEnd()


const finaCache = function(n){
    finaCache.cache = finaCache.cache || {};   //判断属性是否定义
    // if (finaCache != undefined){
    // finaCache.cache = finaCache.cache;
    // }else{
    //     finaCache = {}
    // }
    if ( !finaCache.cache [n] ) {
        finaCache.cache[n] = n < 2 ? n: finaCache(n-1)+ finaCache(n-2);
    }
    return finaCache.cache[n];
}

console.time();
finaCache(40);
console.timeEnd();
console.time();
finaCache(40);
console.timeEnd();


//立即调用的函数表达式：  IIFE

(function() {
    var temp = 2;
})();
console.log(temp)

//等同于es6
{
    var temp = 1;
}
console.log(temp);



//模块模式
var myModule = (function(){
    var myPrivateVar, myPrivateMethod;
    myPrivateVar = 0; //私有变量
    myPrivateMethod = function (foo) {
        //私有方法
        console.log(foo);
    };
    return{
        myPublicVar : "foo",  //公开变量
        myPublicFunction: function(bar){
            //公开方法
            myPrivateVar++;
            myPrivateMethod(bar);
        },
    };
})();


//暴露的模块模式
var myRevealingModule = (function(){
    var privateCounter = 0;
    function privateFunction(){
        privateCounter++;
    }
    function publicFunction() {
        publicIncrement();
    }
    function publicIncrement(){
        privateFunction();
    }
    function publicGetCount(){
        return privateCounter;
    }
    //暴露公有属性和方法，指向私有属性和方法
    return{
        start:publicFunction,
        increment:publicIncrement,
        count:publicGetCount,
    };
})();

myRevealingModule.start();
myRevealingModule.increment();
myRevealingModule.count();


//closure闭包
function outerFunc(){
    let outerVar = "I am outside!";
    function innerFunc(){
        console.log(outerVar);
    }
    return innerFunc;
}
const myInnerFunc = outerFunc();
myInnerFunc();   //输出 "I am outside!"

// const myGlobal = 0;
// function func(){
//     const myVar = 1;

// }
//闭包的事件处理程序
let countClicked = 0;
myButton.addEventLiistener('click',function handleClick(){
    countClicked++;
    myText.innerText = `You clicked ${countClicked} times`;
});

const message = "Hello, World!";
setTimeout(function callback() {
  console.log(message); // 输出 "Hello, World!"
}, 1000);

function multiply(a) {
  return function executeMultiply(b) {
    return a * b;
  };
}

const double = multiply(2);
double(3); // => 6
double(5); // => 10
const triple = multiply(3);
triple(4); // => 12

function multiplier(x, y) {
  return x * y;
}
const tax = multiplier(0.22, 400); // 88

function multiplier(x, y) {
  if (y === undefined) {
    return function (z) {
      return x * z;
    };
  } else {
    return x * y;
  }
}
calcTax = multiplier(0.22);
calcTax(400); // 88