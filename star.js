/*定义一个空字符串作为“*”之间的间隔*/
let str = "";
/*外层循环控制行数,先输出上半部分的4行 */
        for (let row = 1; row <= 4; row++) {

            for (let j = 1; j <= 4 - row; j++) {    
                str = str + " "                      
            } 
            for (let i = 1; i <= row; i++) {
                str = str + "* ";
            }
            /*换行 */
            str = str + "\n";
        }
        /*外层循环控制行数,输出下半部分的3行*/
        for (let row = 1; row <= 3; row++) {

            for (let j = 1; j <= row; j++) {         
                str = str + " " 
            } 
            for (let i = 1; i <= 4 - row; i++) { 
                str = str + "* ";                       
            }
            str = str + "\n";
        }
        console.log(str);
