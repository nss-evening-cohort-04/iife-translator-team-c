var Language = (function(makeSpanish) {
  var spanishObject = {
    Merry: "Feliz",
    Christmas: "Navidad",
    and: "y",
    a: "un",
    Happy: "Feliz",
    New: "Nuevo",
    Year: "Año"
  };
  var translatedArray = [];
  makeSpanish.translateToSpanish = function(userText) {
    for (var prop in spanishObject){
      for (var i = 0; i < userText.length; i++){
        if (userText[i] === prop) {
          translatedArray.push(spanishObject[prop]);
        }
      }
    }
    Language.setLanguage(translatedArray);
  };
  return makeSpanish;
})(Language || {});