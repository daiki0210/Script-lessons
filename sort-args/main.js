//背景が透明の文字入り画像を作成し、それを他の画像に合成する

const index = 'Iamcrazy'
// const a = (index.charCodeAt(0))

const util = require('util')
const childProcess = require('child_process')
const exec = util.promisify(childProcess.exec)

async function main() {

  // for (i = 0; i < 2; i++) {
  //   aiueo = a + i

  // const result = await exec(`convert -size 400x400 -font Monoton-Regular-webfont.ttf -fill blue  -gravity center -draw 'text 0,0 ${index}' bg.png  image.png`);

  // await exec(`convert  -font ./NotoSansJP-Regular.otf -fill black -size  -gravity center -draw 'text 0,0 ${index}' bg.png  image.png`)

await exec(`convert -size 400x200 -font Monoton-Regular.ttf -fill blue -gravity center -transparent white label:hayato test.png `);
  // console.log(result);

  // if (String.fromCharCode(aiueo) === 'ん')
  //   break
  // }
}

main()

