//无顺序
const oStudent = {
    studentName: 'hujiao',
    age:20,
    org: ['lovo','smart'],
    len:null,
    len1:undefined,
    course:{name:'java',day:1},
    learn: function(){
        console.log('hello, student');
    },
    learn2(){
        console.log('hello2')
    }
};

delete oStudent.len;
console.log(oStudent.len);  //undefined
oStudent.learn();
oStudent.learn2();
oStudent['learn']();
console.log(oStudent['age']);
console.log(oStudent["student Name"]);

const oStudent1 = new Object();
oStudent1.studentName = 'hu';
oStudent1.age = 21;

//计算属性
let a = 'student',b = 'Name';
const oStudent1 = {
    [a+b]:'zdj',
    age:20
};
console.log(oStudent1);

//简写
let studentName = 'hujiao',age = 20;
const oStudent2 ={
    studentName:studentName,
    age:age
};

const oStudent3 = {studentName,age};
console.log(oStudent3.studentName);


//判断属性和方法是否存在
const teacher = {
    name:'hu',
    age:20
};
//1.通过in 运算符判断
console.log('name' in teacher);   //ture
console.log('sName' in teacher);  //false

//2.通过逻辑表达式判断
if (teacher.name !== undefined){
    console.log('teacher.name 存在！');
}
//3.通过hasOwnProperty()判断
if(teacher.hasOwnProperty('name')){
    console.log('我有这个属性存在！');
}


//属性方法遍历
const oStudent4 = {
    'student Name': 'hujiao',
    age:20,
    org: ['lovo','smart'],
    len:null,
    len1:undefined,
    course:{name:'java',day:1},
    learn: function(){
        console.log('hello, student');
    },
    learn2(){
        console.log('hello2')
    }
};

console.log(oStuden4.course.name);
// for (let p in oStudent4){
//     console.log(p)
// }

// console.log(Object.keys(oStudent4));

// for (let p of Object.keys(oStudent4)){
//     console.log(p);
// }

// const values1 = Object.values(oStudent4);
// console.log(values1);

// for (let value of valuess1){
//     console.log(values1);
// }

const [a,b] = Object.entries(oStudent4);
console.log([a,b]);

for (let [a,b] of Object.entries(oStudent4)){
    console.log(`key:${a},value:${b}`);
}


//按引用赋值
const aa = {name:'hujiao'};
const bb = aa;
bb.name = 'Lyn';
console.log(aa.name);


const dice = {
    side: 6,
    roll() {
        return Math.floor(Math.random()* this.side) +1;
    }
}
console.log(dice.roll());

let x =1,y=2,z=3;
console.log(Math.max(x,y,z));

const myMath1 = {
    max:function(...num){
        return num;
    }
};




