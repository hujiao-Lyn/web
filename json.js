const oStudent={
    studentName:"hujiao",
    age:20,
    len:null,
    len1:undefined,
    org:['love','smart'],
    course:{name:'hu',day:1},
    learn:function(){
        console.log("ai bb")
    }
}
let a = JSON.stringify(oStudent)
console.log(a)

const b = `{'studentName':"hujiao","age":20,"len":null,"org":["love","smart"],"course":{"name":
"ww","day":1}}`
const a = JSON.parse(b)
console.log(a)


for (let p in a){
    console.log(p)
}
