//包装器对象

//1.当作构造函数
let bool = new Boolean(true);
console.log(typeof bool);  //object
console.log(bool === true);//false
console.log(bool.valueOf());  //true
console.log(toString());   // true

//2.当作函数来用
let a = Boolean(true);
console.log(a);

//0,undefined,null,'',NaN
const oStudent = {}
if(oStudent.name){
    console.log('hello');
}

//Number
let num = new Nember(1,2,3);
console.log(num.length);


let b = Number.parseInt(112121.001);
console.log(b);


let c = Number.parseFloat("123.00");
console.log(c);
console.log(Number.isInteger(c));

let d = Number.isInteger(123.8);
console.log(d);

//String对象

let e = String.fromCharCode(97);
e = String.fromCodePoint('0x10');
console.log(e);
let d = 'hujiao';
console.log(d.slice(1,3));
console.log(d);
d.slice()
