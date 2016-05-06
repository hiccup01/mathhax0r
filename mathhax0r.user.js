// ==UserScript==
// @name        Math Hax0r
// @namespace   http://hiccup01.com
// @include     http://mzaue2.live.mathletics.com/liveMathletics/#/gameroom
// @version     1
// @grant       none
// @require     https://raw.githubusercontent.com/Hardmath123/nearley/master/lib/nearley.js
// ==/UserScript==
console.log("Running");
document.body.getElementsByClassName("questions-text-alignment")[0].innerHTML.split("=")[0].replace(/\s+/g, ''); //Get question
// This is an example of how to use a nearley-made grammar.
var PROMPT = "> ";
var nearley = require("../../lib/nearley.js");
var grammar = require("./grammar.js");

// This is where the action is.
function runmath(s) {
    var ans;
    try {// We want to catch parse errors and die appropriately

        // Make a parser and feed the input
        ans = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
            .feed(s);
        
        // Check if there are any results
        if (ans.results.length) {
            return ans.results[0].toString();
        } else {
            // This means the input is incomplete.
            var out = "Error: incomplete input, parse failed. :(";
            return out;
        }
    } catch(e) {
        // Panic in style, by graphically pointing out the error location.
        var out = new Array(PROMPT.length + e.offset + 1).join("-") + "^  Error.";
        //                                  --------
        //                                         ^ This comes from nearley!
        return out;
    }
}