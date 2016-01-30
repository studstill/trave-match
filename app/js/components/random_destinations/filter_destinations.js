var fullListArray = require('./destinationArrayJSON.js');
var curatedListArray = require('./destinationArray.js');
// console.log(curatedListArray);

var filteredArray = curatedListArray.map(function(city) {
  var object = {};
  object.airportCode = city;
  object.cityName = "";
  for(var i = 0; i < fullListArray.length; i++){
    if(fullListArray[i]["AAE"] === city)
      object.cityName = fullListArray[i]["Annaba"];
  }
  return object;
});
console.log(filteredArray);
