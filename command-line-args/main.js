//?ステップアップ課題
//*コマンドライン引数で渡された数を小さい順に並べた配列を生成してconsole.log()で出力してください。ただしArray型のメソッドを使うことを禁止します(push()を除く)。入力される数値は0以上9999以下とします。Number型への型変換はしてOK
//*※問題の意図は「sort()を使わずに数値の並び替えをしてください」です。
//*実行結果
// [
//   1,  2,  2,  4,
//   5,  10, 11, 12,
//   13, 13, 25, 42,
//   59
// ]
//*実行コマンド
//node main.js 2 13 42 5 25 59 1 4 13 12 11 10 2


const numArray = []
const result = []
for (i = 2; i < process.argv.length; i++) {
  numArray.push(Number(process.argv[i]))
}

for (let num = 0; num < 9999; num++) {
  for (i = 0; i < process.argv.length; i++) {
    if (numArray[i] === num) {
      result.push(numArray[i])
    }
  }
}
console.log(result)
//でもこのコードだと小数点以下が表示されない



//*提出初期コード

const numArray = []
const result = []
for (i = 2; i < process.argv.length; i++) {
  numArray.push(Number(process.argv[i]))
}

function main(num) {
  for (i = 0; i < process.argv.length; i++) {
    if (numArray[i] === num) {
      result.push(numArray[i])
    }
  }
}

for (j = 0; j < 9999; j++) {
  main(j)
}
console.log(result)


function min(array) {
  let num = 0
  for (i = 2; i < argv.length; i++) {
    if (array[i] === i) {
      let num = array[i]
    }
    console.log(num)
  }
}