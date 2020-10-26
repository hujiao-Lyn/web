//第一题
const tipCalculator = bills =>{
    const tips = []
    const costs = []
    bills.forEach(bill =>
        {
            let tip;
            if (bill <50)
        {
            tip = bill * 0.2
        }else if (bill >= 50 && bill <200){
            tip = bill * 0.15
        }else{
            tip = bill * 0.1
        }
        const cost = bill + tip
        tips.push(tip)
        costs.push(cost)
    })
    console.log(tips,costs)    
}
tipCalculator([124,48,268])

//第二题
function mean(a,b,c){

    return (a+b+c)/3
}
function mean1(...args){
    let sum = 0;
    for(let arg of args){
        sum = arg + sum
    }
    return sum / args.length
}
console.log(mean1(1,2,3,4))


function mean2(...args){
    return args.reduce((acc,val) => acc + val) /args.length
}
console.log(mean2(1,2,3,4))


function mean3(...args){
    const args1 = args.filter( x => x%2 ==0)
    console.log(args1)
    return args1.reduce((acc,val) => acc + val) /args1.length
    //一条语句写完
    //return args.filter( x => x%2 ==0).reduce((x,y) =>x+y) /args.filter( x => x%2 ==0).length
}
console.log(mean3(1,2,3,12))