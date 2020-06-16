//テキストファイルの中にkobeという文字がいくつ含まれているかを表示する

const fs = require('fs')
let text = fs.readFileSync(process.argv[2], 'utf8') //ファイルを呼び出すコード
console.log(text.match(/kobe/g).length); //上記の３文を1行にまとめたコード

// const key = /kobe/g; //探す文字指定
// const found = text.match(key); //kobeをtestの中から探す
// console.log(found.length)













//slackに載ってた解答

// const fs = require('fs')
// var text = fs.readFileSync(process.argv[2], 'utf8')

// let count = 0
// let index = 0
// for(;true;){
//   index = text.indexOf('kobe', index)
//   if(index === -1){
//     break
//   }
//   index++
//   count++
// }
// console.log(count)
