//John的队伍

var arr = [89,120,103];

var sum = 0;

for(var i=0;i<arr.length;i++){

sum += arr[i];

}

var avg1 = sum/arr.length;

console.log( "john队伍的平均分是：", + avg1 );

//Mike的队伍

var arr = [116,94,123];

var sum = 0;

for(var i=0;i<arr.length;i++){

sum += arr[i];

}

var avg2 = sum/arr.length;

console.log("mike队伍的平均分是：", + avg2);

//Mary的队伍

var arr = [97,134,105];

var sum = 0;

for(var i=0;i<arr.length;i++){

sum += arr[i];

}

var avg3 = sum/arr.length;

console.log("mary队伍的平均分是：", + avg3);

//判断哪个队伍获胜

if ( avg1 >avg2 && avg1 > avg3) {

console.log("John的队伍获胜，平均分是： " + avg1 )

} else if (avg2 > avg1 && avg2 > avg3) {

console.log("Mike的队伍获胜，平均分是： " + avg2 )

} else if (avg3 > avg1 && avg3> avg2) {

console.log("mary的队伍获胜，平均分是： " + avg3 )}