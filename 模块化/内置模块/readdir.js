const fs = require('fs')

// 同步读取文件目录
// var dir = fs.readdirSync('../')
// console.log(dir)

// 异步读取文件目录
fs.readdir('../',(err,data)=>{
    if (err){
        console.log("读取失败")
    }else{
        console.log(data)
    }
})

// 规范：
// 错误的回调优先 默认为null