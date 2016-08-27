var Language = (function(makeFrench) {
  var frenchObject = {
    Merry: "Joyeux",
    Christmas: "Noël",
    and: "et",
    a: "une",
    Happy: "Content",
    New: "Nouveau",
    Year: "An"
  };
  var translatedArray = [];
  makeFrench.translateToFrench = function(userText) {
    for (var prop in frenchObject){
      for (var i = 0; i < userText.length; i++){
        if (userText[i] === prop) {
          translatedArray.push(frenchObject[prop]);
        }
      }
    }
    Language.setLanguage(translatedArray);
  };
  return makeFrench;
})(Language || {});