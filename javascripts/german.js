var Language = (function(makeGerman) {
  
  var germanObject = {
    Merry: "Frohe",
    Christmas: "Weihnachten",
    and: "und",
    a: "ein",
    Happy: "glückliches",
    New: "Neues",
    Year: "Jahr"
  };

  var translatedArray = [];
  makeGerman.translateToGerman = function(userText) {
    for (var prop in germanObject){
      for (var i = 0; i < userText.length; i++){
        if (userText[i] === prop) {
          translatedArray.push(germanObject[prop]);
        }
      }
    }
    Language.setLanguage(translatedArray);
  };
  return makeGerman;
})(Language || {});