const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream("test.zip");
const archive = archiver('zip', {});
archive.pipe(output);
archive.file("main.js", { name: "helloWorld.js" });
archive.file("main.py", { name: "helloWorld.py" });
archive.file("main.php", { name: "helloWorld.php" });
archive.finalize()