	var fs = require('fs');

 fs.readFile('catagories.json', function (err, data) {
  if (err) throw err;
  return JSON.stringify(data.toString());
});