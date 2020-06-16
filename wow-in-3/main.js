//* 1から50までの数字を表示する。ただし3のつく数字と3の倍数のときだけ"WOW"と表示する

for (i = 1; i <= 50; i++) {
    if (i % 3 === 0 || /3/.test(i)) {   //正規表現で3を見つけている
        console.log('AHO!!!')
    } else {
        console.log(i)
    }
}















// let array = []
// for (i = 1; i <= 50; i++) {
//     array.push(i) //1~50の数字が入った配列を作る
//     if (i % 3 === 0 || /3/.test(i)) {   //正規表現で3を見つけている
//         console.log('AHO!!!')
//     } else {
//         console.log(i)
//     }
// }






//includesメソッドを使ったcode

// let array1 = []

// for (i = 1; i <= 50; i++){
//   array1.push(i)
//   const last = String(array1.slice(-1)[0])

//// console.log(last)
//     if (i %3 === 0  || last.includes("3") === true) {
//     console.log("WOW!")
//     }
//     else {
//         console.log(i)
//     }
// }






//indexOfメソッドを使ったcode

// let array1 = []

// for (i = 1; i <= 50; i++){
//   array1 = i

//     if (i %3 === 0  || String(array1).indexOf("3") === 0) {
//     console.log("WOW!")
//     }
//     else {
//         console.log(i)
//     }
// }





// const last = array.slice(-1)[0]; // ★これ

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected output: true

// console.log(pets.includes('at'));

