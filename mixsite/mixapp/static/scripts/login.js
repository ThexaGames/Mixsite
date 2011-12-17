(function (mixapp, undefined) {
	
	// create the login namespace
	mixapp.login = {};
	
	loginStateChangeFunctions = new Array();
	
	mixapp.login.registerLoginStateChangeFunction = function(stateChangeFunction) {
		// add this function to the array
		loginStateChangeFunctions.push(stateChangeFunction);
	}
	
	function loginStateChanged(state) {
		// loop through and call all the registered functions
		for(var i = 0; i < loginStateChangeFunctions.length; i++) {
			loginStateChangeFunctions[i].call(state);
		}
	}
	
	
	
	function loginSuccess() {
		// send an alert about the change
		loginStateChanged(true);
		// hide the login form and show the profile div
		//TODO transition animations
		document.getElementById("loggingInDiv").style.display = "none";
		document.getElementById("loginErrorDiv").style.display = "none";
		document.getElementById("profileDiv").style.display = "block";
	}
	
	function loginFailed() {
		// send an alert about the change
		loginStateChanged(false);
		// display the login form again and show the error message
		//TODO transition animations
		document.getElementById("loggingInDiv").style.display = "none";
		document.getElementById("loginDiv").style.display = "block";
		document.getElementById("loginErrorDiv").style.display = "block";
	}
	
	mixapp.login.submitLoginForm = function() {
		// load values from the form
		var form = document.getElementById("loginForm");
		var username = form.elements["username"].value;
		var password = form.elements["password"].value;
		var csrf = form.elements["csrfmiddlewaretoken"].value;
		
		// hide the form and display the loading indicator
		//TODO transition animations
		document.getElementById("loginDiv").style.display = "none";
		document.getElementById("loggingInDiv").style.display = "block";
		
		// send the ajax login request
		var params = "username=" + username + "&password=" + password + "&csrfmiddlewaretoken=" + csrf;
		var http = mixapp.util.postAjax("/api/authenticate", function() {
			if(http.readyState == 4) {
				if(http.status == 200) {
					// login was a success
					loginSuccess();
				} else if(http.status == 403) {
					// login was denied
					loginFailed();
				} else {
					alert("A problem occured processing the login request.")
				}
			}
		}, params);
	}
	
}(window.mixapp = window.mixapp || {}));