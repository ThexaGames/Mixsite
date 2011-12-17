(function (mixapp, undefined) {
	// create the login namespace
	mixapp.login = {};

	mixapp.login.submitLoginForm = function() {
		// load values from the form
		var form = document.getElementById("loginForm");
		var username = form.elements["username"].value;
		var password = form.elements["password"].value;
		var csrf = form.elements["csrfmiddlewaretoken"].value;

		// hide the form and display the loading indicator
		document.getElementById("loginDiv").style.display = "none";
		document.getElementById("loggingInDiv").style.display = "block";
	}

}(window.mixapp = window.mixapp || {}));