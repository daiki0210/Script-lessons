// 完成形の画像の大きさは、(w = 1000, h = 800)
// ロゴは、真ん中に
// サンプルの文字のfontはMonoton-Regular.ttfで、縦と横のは（400px,200px）

// const sharp = require('sharp');
// const util = require('util')
// const childProcess = require('child_process')
// const exec = util.promisify(childProcess.exec)
// const logo = sharp('nike.png')
// const bg = sharp('green.png')
// const title = sharp('test.png')
// const bgHeight = 800
// const bgWidth = 1000
// const logoHeigth = 300
// const logoWidth = 160


// async function main() {
//   const metaBg = await bg.metadata()
//   const bufLogo = await logo.toBuffer()
//   const bufTitle = await title.toBuffer()
//   const greenBg = await bg.resize(bgWidth, bgHeight)
//   const nikeLogo = await logo.resize(300, 160)
//   // const logoSize = 100
//   // await exec(`convert -size 400x200 -font Monoton-Regular-webfont.ttf -fill blue -gravity center -transparent white label:Sample test.png`);

//   bg
//     .composite(
//       [{
//         input: bufLogo,
//         left: Math.floor(greenBg.width / 2),
//         top: Math.floor(greenBg.height / 2)
//       },
//       {
//         input: bufTitle,
//         // left: 100,
//         // top: 100
//       }
//       ])
//     .toFile('output01.png', function (err) {
//     });
// }
// main()


// 完成形の画像の大きさは、(w = 1000, h = 800)
// ロゴは、真ん中に
// サンプルの文字のfontはMonoton-Regular.ttfで、縦と横のは（400px,200px）

async function main() {
  const sharp = require('sharp')
  const util = require('util')
  const childProcess = require('child_process')
  const exec = util.promisify(childProcess.exec)
  const logoHeight = 160
  const logoWidth = 300
  const bgHeight = 800
  const bgWidth = 1000
  const textHeight = 100
  const textWidth = 400
  const logo = sharp('nike.png')
  const bg = sharp('green.png')
  const text = sharp('text.png')
  exec(`convert -size 400x200 -font Monoton-Regular-webfont.ttf -fill blue -gravity center -transparent white label:Sample text.png`)

  logo.resize(logoWidth, logoHeight)
  bg.resize(bgWidth, bgHeight)
  text.resize(textWidth, textHeight)
  const bufLogo = await logo.toBuffer() //画像を入れるためには、パスを通すか、Bufferにしないといけない
  const bufText = await text.toBuffer()

  bg
    .composite(
      [{
        input: bufLogo,
        left: bgWidth / 2 - logoWidth / 2, //topとleftは両方記載しないとエラーになるよ。
        top: bgHeight / 2 - logoHeight / 2
      },
      {
        input: bufText,
        left: textWidth * 2,
        top: 0
      }
    ])
    .toFile('output02.png', function (err) {
    });
}
main()

















// const index = '僕はキチガイ'
// // const a = (index.charCodeAt(0))

// const util = require('util')
// const childProcess = require('child_process')
// const exec = util.promisify(childProcess.exec)

// async function main() {

//   // for (i = 0; i < 2; i++) {
//   //   aiueo = a + i

//     const result = await exec(`convert -font ./NotoSansJP-Regular.otf -fill black -pointsize 40  -gravity center -draw 'text 0,0 ${index}' bg.png  image.png`)
//     console.log(result);

//     // if (String.fromCharCode(aiueo) === 'ん')
//     //   break
//   // }
// }

// main()



// const sharp = require('sharp');
// // const img = sharp('prog-ac-logo.png')

// sharp('bg.jpg')

//   .composite([
//     {
//       input: 'overlay.png',
//       gravity: 'southeast'
//     }])
//   .toFile('output2.png', function (err) {
//     // output.jpg is a 300 pixels wide and 200 pixels high image
//     // containing a scaled and cropped version of input.jpg
//   })
