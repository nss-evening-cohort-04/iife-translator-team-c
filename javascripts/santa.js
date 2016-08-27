var Language = (function(makeSanta) {
  var santaObject = {
    Merry: "HoHoHo",
    Christmas: "HoHoHo",
    and: "HoHoHo",
    a: "HoHoHo",
    Happy: "HoHoHo",
    New: "HoHoHo",
    Year: "HoHoHo"
  };
  var translatedArray = [];
  makeSanta.translateToSanta = function(userText) {
    for (var prop in santaObject){
      for (var i = 0; i < userText.length; i++){
        if (userText[i] === prop) {
          translatedArray.push(santaObject[prop]);
        }
      }
    }
    Language.setLanguage(translatedArray);
  };
  return makeSanta;
})(Language || {});