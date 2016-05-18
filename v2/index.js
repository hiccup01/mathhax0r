//Math HAx0r - attempt 2 - phantomJS
var page = require('webpage').create();
var js = require('fs');
var userToken = "ddmoFAXS7i2HcAPtFtKGIubYHkXaeVMNiFTZ5MSDsK4";
page.open('http://mzaue2.live.mathletics.com/liveMathletics/#/login?classId=0&lang=en_AU&userToken=' + userToken + '%2C&isPreview=true', function(status, e) {
  console.log("Status: " + status);
  if(status === "success") {
  	console.log("success");
  	setTimeout(function() {
  		console.log(page.evaluate(function() {
  			$("button_vsComputer").click();
  			setTimeout(function() {
  				return document.body.getElementsByClassName("questions-input-adjustment")[0].value;
  			}, 10000);
  		})
  		setTimeout(function() {
  				page.render("speakycat.png");
  				//phantom.exit();
  			}, 12000);
  		);  
  	}, 7000)
  } else {
  	console.log(status, e);
  	phantom.exit();
  }
});

