var Language = (function(makeEthiopian) {
  var ethiopianObject = {
    Merry: "Melkam",
    Christmas: "Gena"
  };
  makeEthiopian.getEthiopian = function(userText) {
    for (var prop in ethiopianObject){
      for (var i = 0; i < userText.length; i++){
        if (userText[i] === prop);{
          var translatedUserText = ethiopianObject[prop];
        
        }
      }
    }
        console.log(ethiopianObject[prop]);
  };

  return makeEthiopian;
})(Language || {});