var selectLang = document.getElementById("language_selector");
var translateBtn = document.getElementById("translate_button");
var outputArea = document.getElementById("output");
var playBtn = document.getElementById("play_text");

translateBtn.addEventListener('click', function(event) {
  var selectLangOptions = selectLang.options[selectLang.selectedIndex];
  var langOptionValue = selectLangOptions.value;
  toLanguage(langOptionValue);
  outputArea.innerHTML = Language.getLanguage();
});

function toLanguage(selected) {
  var userInput = document.getElementById("userInputText").value;
  var userInputArray = userInput.split(" ");
  if(selected === "Spanish"){
    Language.translateToSpanish(userInputArray);
  };
  if(selected === "German") {
  	Language.translateToGerman(userInputArray);
  };
  if (selected === "French") {
  	Language.translateToFrench(userInputArray);
  }; 
  if (selected === "Ethiopian") {
  	Language.translateToEthiopian(userInputArray);
  };
  if (selected === "Santa") {
  	Language.translateToSanta(userInputArray);
  };
};
playBtn.addEventListener('click', function(event) {
	responsiveVoice.speak(outputArea.innerHTML);
});
