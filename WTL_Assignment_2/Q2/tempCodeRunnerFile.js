const fs = require("fs");
fs.mkdir("wtlab", (err) => {
  if (err) {
    console.error(err);
  }
});
fs.writeFile("wtlab/file1.txt", "This is the contents of file 1", (err) => {
  if (err) {
    console.error(err);
  }
});

fs.writeFile("wtlab/file2.txt", "This is the contents of file 2", (err) => {
  if (err) {
    console.error(err);
  }
});
fs.readdir("wtlab", (err, files) => {
  if (err) {
    console.error(err);
  } else {
    console.log(files);
  }
});
