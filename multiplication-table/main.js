//九九を表示する
for (i = 1; i < 10; i++) {
  let array = []
  for (j = 1; j < 10; j++) {
    array.push(i * j)
  }
  console.log(array.join(' '))
  array = delete array
}
