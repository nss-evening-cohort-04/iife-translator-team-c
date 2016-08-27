var Language = (function(makeSpanish) {
  var spanishObject = {
    "Merry": "Feliz",
    "Christmas": "Navidad"
  };
  makeSpanish.getSpanish = function(userInputArray) {
    var spanishArray = [];
    for (var prop in spanishObject) {
      spanishArray.push(prop);
      console.log(spanishArray);
    }
  }
  return makeSpanish;
})(Language || {});