//*ファイルから画像を読み込んで縦横128にリサイズし、違うファイルに入れる

const glob = require("glob")
const sharp = require('sharp');
glob("images/*.?(jpg|png)", {}, function (er, files) {   // globでimagesにある画像を読み込む

  for (i = 0; i < files.length; i++) {
    sharp(files[i])
      .resize(128, 128)   // 128*128にリサイズ
      .toFile(`dest/output${i}.png`);
  }
})



