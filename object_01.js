//对象字面量语法创建对象
 const dog = {
     name:'豆豆',
     breed:'泰迪',
     color:'棕色',
     bark(){
         return '汪汪';
     },

 };

console.log(dog.toString());

 //构造函数创建对象
 function Dog (name,breed,color){
     this.name = name;
     this.breed = breed;
     this.color = color
 }
 Dog.prototype.bark = function(){
     return '汪汪';
 }

 let dog1 = new Dog('豆豆','泰迪','棕色');
 dog1.bark();

 //object.create()创建对象
 const dog = {
     name:'豆豆',
     breed:'泰迪',
     color:'棕色',
     bark(){
         return '汪汪';
     },
 };

 let dog1 = Object.create(dog);

 //ES6 Class 语法创建对象
 class Dog{
     constructor(name,breed,color){
        this.name = name;
        this.breed = breed;
        this.color = color
     }
     bark(){
            return '汪汪';
     }
 }
let dog1 = Object.create(dog);

//

const empty = {};
console.log(empty.__proto__);

class Dog{
    constructor(name) {
        this.name= name;
    }
    bark(){
        return '汪汪';
    }
}

class JiWaWa extends Dog {
    constructor(name) {
        super(name);
    }
    smallBark(){
        return '低声汪汪叫';
    }
}

let myPet = new JiWaWa('当当');
console.log(myPet.__proto__);  //JiWaWa {}
console.log(myPet.__proto__.__proto__);   //Dog {}
console.log(myPet.__proto__.__proto__.__proto__);   //{}


class User {

}
let user1 = new User();

//类表达式
const User = class{

};
let User2 = new User();
//类声明和类表达式都是不提升的

//函数声明与函数表达式
function getUser(){

}
//函数声明要提升的，提升到作用域的顶部
//window.getUser()

const getUser = function(){};


//加上constructor方法，初始化
class User{
    constructor(name1){
        this.name = name1;
        //隐式创建了一个实例字段：name
    }
}

let user1 = new User('hu');
console.log(user1.name);

class User{
    name1 = "jiao";//显示定义实例字段
    constructor(name){
        this.name = name; //隐式定义实例字段
    }
}

let user1 = new User('HU')
console.log(user1.name1);
console.log(user1.name);

//定义私有实例字段
class User{
    #name;
    constructor(name){
        this.#name = name;
    }
}
let user1 = new User('hu');
console.log(user1.#name);



//公共静态字段
class User{
    static TYPE_ADMIN = "admin";
    static TYPE_REGULAR = "regular";
    name;
    type;
    constructor(name,type,TYPE_ADMIN,TYPE_REGULAR){
        this.name = name;
        this.type = type;
        TYPE_ADMIN = 'admin';
    }
}

//ES5实现
function User(name,type){
    this.name = name;
    this.type = type;
}
User.prototype.TYPE_ADMIN = 'admin';
User.prototype.TYPE_REGULAR = "regular";





console.log(User.TYPE_REGULAR);
const admin = new User("网站管理员",User.TYPE_ADMIN);
