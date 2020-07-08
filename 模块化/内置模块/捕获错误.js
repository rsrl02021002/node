const fs = require('fs')

console.log(123)
try{
    var dir = fs.readdirSync('../测试')
}
catch(err){
    console.log("出错了");
    console.log(err);
    console.log(this)
    console.log(err.__proto__);
}
console.log(this)
console.log(this.__proto__);
console.log(456)
// // 出现错误，会阻塞其他语句执行
// var dir = fs.readdirSync('../测试')
// console.log(123)
// console.log(dir)
