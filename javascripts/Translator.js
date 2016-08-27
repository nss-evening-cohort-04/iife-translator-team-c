var Language = (function() {
	var finalOutput = "";
  return {
    	setLanguage: function(array){
      	finalOutput = array.join(" ");
    	},
    	getLanguage: function() {
    		return finalOutput
    	}
    }
})();