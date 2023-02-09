// Run node parse.ts <csv file to parse> to get an Up and a Down migration file in user directory
const fs = require("fs");
const parse = require("csv-parse");
const { argv } = require("process");

let rows = 0;
var up = "";
console.log(argv[2]);
fs.createReadStream(argv[2])
  .pipe(parse({ delimiter: "," }))
  .on("data", function (csvrow) {
    //do something with csvrow
    console.log(csvrow);
  })
  .on("end", function () {
    //do something with csvData

    fs.writeFile("newFile.txt", up, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
      console.log(`Up Parse complete: ${rows} rows`);
    });
  });
