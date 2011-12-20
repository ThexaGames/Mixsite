(function (mixapp, undefined) {
	
	var COLORS = [
	{
		find: "red",
		replace: "#767C7F"
	},
	{
		find: "green",
		replace: "B1BABF"
	},
	{
		find: "blue",
		replace: "#EDF8FF",
	},
	{
		find: "black",
		replace: "#3B3E40",
	},
	{
		find: "orange",
		replace: "#D5DFE5",
	},
	];
	
	function parseCSS() {
		// loop through the stylesheets
		for(var i = 0; i < document.styleSheets.length; i++) {
			// loop through the rules
			var rules = document.styleSheets[i].cssRules;
			for(var j = 0; j < rules.length; j++) {
				parseRule(rules[j]);
				//alert("added: " + rules[j].cssText)
			}
			// reactivate this sheet
			document.styleSheets[i].disabled = true;
			document.styleSheets[i].disabled = false;
		}
	}
	
	function parseRule(rule) {
		var style = rule.style;
		// search for each of the colours and replace them in turn
		for(var k = 0; k < COLORS.length; k++) {
			if(style != undefined) {
				if(style.getPropertyValue("color") == COLORS[k].find) {
					// replace this with the given value
					style.setProperty("color", COLORS[k].replace);
				}
				if(style.getPropertyValue("background-color") == COLORS[k].find) {
					// replace this with the given value
					style.setProperty("background-color", COLORS[k].replace);
				}
			}
		}
	}
	
	// register the parsing function to be called once the document has loaded
	mixapp.util.registerOnloadFunction(parseCSS);
	
}(window.mixapp = window.mixapp || {}));