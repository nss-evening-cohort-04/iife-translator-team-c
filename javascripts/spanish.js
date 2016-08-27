var Language = (function(makeSpanish) {
  var spanishObject = {
    Merry: "Feliz",
<<<<<<< HEAD
    Christmas: "Navidad"
  };
  makeSpanish.getSpanish = function(userText) {
    for (var prop in spanishObject){
      for (var i = 0; i < userText.length; i++){
        if (userText[i] === prop);{
          var translatedUserText = spanishObject[prop];
        
        }
      }
    }
        console.log(spanishObject[prop]);
  };

=======
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
>>>>>>> 8ce96b1460e0f0afa6162ea243e8db054288a4eb
  return makeSpanish;
})(Language || {});