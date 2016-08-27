var Language = (function() {
	var finalOutput = "";
  return {
    	setLanguage: function(array){
     	 //if (selected = "french"){
      	finalOutput = array.join(" ");
    	},
    	getLanguage: function() {
    		return finalOutput
    	}
    }
})();