(function (mixapp, undefined) {
	// define the util namespace
	mixapp.util = {};
	
	
	// onload function
	var onloadFunctions = new Array();
	mixapp.util.bodyLoaded = function() {
		// run any functions that have registered to be run at load
		for(var i = 0; i < onloadFunctions.length; i++) {
			onloadFunctions[i].call();
		}
	}
	
	mixapp.util.registerOnloadFunction = function(onloadFunction) {
		onloadFunctions.push(onloadFunction);
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
		
		return http;
	}
	
	mixapp.util.getAjax = function(url, onReadyStateChange) {
		var http = new XMLHttpRequest();
		http.open("GET", url, true);
		http.onreadystatechange = onReadyStateChange;
		
		http.send();
		
		return http;
	}
	
}(window.mixapp = window.mixapp || {}));