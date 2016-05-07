// ==UserScript==
// @name        Math Hax0r
// @namespace   http://hiccup01.com
// @include     http://mzaue2.live.mathletics.com/liveMathletics/#/gameroom
// @version     1
// @grant       none
// @require     https://raw.githubusercontent.com/Hardmath123/nearley/master/lib/nearley.js
// @require     https://raw.githubusercontent.com/hiccup01/mathhax0r/master/grammar.js
// ==/UserScript==
//console.log("Running");
/*var question;
var answer;
question = document.body.getElementsByClassName("questions-text-alignment")[0].innerHTML.split("=")[0].replace(/\s+/g, ''); //Get question
function evaluate(expression) {
                    var p = new nearley.Parser(arithmetic.ParserRules, arithmetic.ParserStart)
                    try {
                        p.feed(expression); //Input
                        if (!p.results[0]) {
                            throw new Error();
                        }
                        if (isNaN(p.results[0]) || p.results[0] === Infinity) {
                            throw new Error();
                        }
                        return p.results[0].toString(); //Output
                    } catch(e) {
                        console.log("Something bad happened... :" + e);
                    }
                }
function type(text) {
document.body.getElementsByClassName("questions-input-adjustment")[0].value = text;
$('questions-input-adjustment')
  .trigger({
    type: 'keypress',
    which: "\u0013".charCodeAt(0)      
   });
}

function addStuff(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "https://raw.githubusercontent.com/Hardmath123/nearley/master/lib/nearley.js");
  document.body.appendChild(script);
  script = document.createElement("script");
  script.setAttribute("src", "https://raw.githubusercontent.com/hiccup01/mathhax0r/master/grammar.js");
  document.body.appendChild(script);
}
addStuff(function() {
	answer = evaluate(question);
	console.log(answer);
});*/
(function() {
	alert(typeof module)
});