var selectLang = document.getElementById("language_selector");
var translateBtn = document.getElementById("translate_button");

translateBtn.addEventListener('click', function(event) {
  var selectLangOptions = selectLang.options[selectLang.selectedIndex];
  var langOptionValue = selectLangOptions.value;
  console.log(langOptionValue);
  toLanguage(langOptionValue);
});

function toLanguage(selected) {
  var userInput = document.getElementById("userInputText").value;
  var userInputArray = userInput.split(" ");
  if(selected === "Spanish"){
    Language.getSpanish(userInputArray);
  } else {
    alert("WRONG");
  }
};