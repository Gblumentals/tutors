	var fs = require('fs');

fs.readFile('catagories.json', function (err, data) {
  if (err) throw err;
  console.log(JSON.stringify(data.toString()));
});