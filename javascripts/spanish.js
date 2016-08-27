var Language = (function(makeSpanish) {
  var spanishObject = {
    Merry: "Feliz",
    Christmas: "Navidad"
  };
  var translatedUserText = [];
  makeSpanish.getSpanish = function(userText) {
    for (var prop in spanishObject){
      for (var i = 0; i < userText.length; i++){
        if (userText[i] === prop){
          // console.log(spanishObject[prop]);
          // //return spanishObject[prop]
          var translatedUserText = spanishObject[prop];
          console.log(translatedUserText);
          console.log(spanishObject[prop]);
        }
      }
    }
  };
  // makeSpanish.getSpanish = function(userText) {
    
  //   for (var prop in spanishObject){
  //   console.log(userText.contains(spanishObject[prop]));
  //   };
  // };
  return makeSpanish;
})(Language || {});