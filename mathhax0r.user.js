// ==UserScript==
// @name        Math Hax0r
// @namespace   http://hiccup01.com
// @include     http://mzaue2.live.mathletics.com/liveMathletics/#/gameroom
// @version     1
// @grant       none
// ==/UserScript==
console.log("Running");
document.body.getElementsByClassName("questions-text-alignment")[0].innerHTML.split("=")[0].replace(/\s+/g, ''); //Get question
