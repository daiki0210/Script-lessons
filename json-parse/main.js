// コマンドライン引数で受け取ったjsonファイルを読み込み、名前：年齢を表示する

const fs = require('fs')
let json = JSON.parse(
  fs.readFileSync(process.argv[2], 'utf8')
  )
  console.log(json)