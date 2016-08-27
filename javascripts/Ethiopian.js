var Language = (function(makeEthiopian) {
  var ethiopianObject = {
    Merry: "Melkam",
    Christmas: "Gena",
    and: "Ena",
    a: "a",
    Happy: "Desta",
    New: "Addis",
    Year: "Amet"
  };
  var translatedArray = [];
  makeEthiopian.translateToEthiopian = function(userText) {
    for (var prop in ethiopianObject){
      for (var i = 0; i < userText.length; i++){
        if (userText[i] === prop) {
          translatedArray.push(ethiopianObject[prop]);
        }
      }
    }
    Language.setLanguage(translatedArray);
  };
  return makeEthiopian;
})(Language || {});