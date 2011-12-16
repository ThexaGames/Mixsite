(function (mixapp, undefined) {
	// define the util namespace
	mixapp.util = {};
	
	
	// onload function
	mixapp.util.onloadFunctions = new Array();
	mixapp.util.bodyLoaded = function() {
		// run any functions that have registered to be run at load
		var functions = mixapp.util.onloadFunctions;
		for(var i = 0; i < functions.length; i++) {
			functions[i].call();
		}
	}
	
	mixapp.util.registerOnloadFunction = function(onloadFunction) {
		mixapp.util.onloadFunctions.push(onloadFunction);
	}
	
	
	// ajax request functions
	mixapp.util.postAjax = function(url, onReadyStateChange, params) {
		var http = new XMLHttpRequest();
		http.open("POST", url, true);
		
		//Send the proper header information along with the request
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.setRequestHeader("Content-length", params.length);
		http.setRequestHeader("Connection", "close");
		http.onreadystatechange = onReadyStateChange;
		
		http.send(params);
	}
	
}(window.mixapp = window.mixapp || {}));