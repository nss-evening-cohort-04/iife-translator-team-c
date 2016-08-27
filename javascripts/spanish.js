var Language = (function(makeSpanish) {
  var spanishObject = {
    Merry: "Feliz",
    Christmas: "Navidad"
  };
  makeSpanish.getSpanish = function(userText) {
    for (var prop in spanishObject){
      for (var i = 0; i < userText.length; i++){
        if (userText[i] === prop)
          var translatedUserText = spanishObject[prop];
      }
    }
  };

  return makeSpanish;
})(Language || {});