//* ログファイルの中からエラーの内容だけを抜き出して表示する

const fs = require('fs')
let logfile = fs.readFileSync(process.argv[2], 'utf8')   //ファイルを呼び出すコード
const array = logfile.split('\n')    //3つの配列にする

for (i = 0; i < array.length; i++){
  console.log(array[i].substring(6, 27));     //6文字目から27文字目までを抜き出す
}

//?ヒント
//*splitメソッドを使って改行を機転に3つの配列に分割し、substringメソッドを使って抜き出す場所を決める
