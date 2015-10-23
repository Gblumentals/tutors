var fs = require('fs');

var getCatagories = function(){
	// var data;
 fs.readFile('files/catagories.json', function (err, data) {
  if (err) throw err;
data = JSON.parse(JSON.stringify(data.toString()));
	console.log(data);
});
};

console.log(getCatagories());