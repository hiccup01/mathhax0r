// ==UserScript==
// @name        Math h4X0r
// @namespace   http://hiccup01.com
// @description Shreks prototec maths
// @include     http*://maths.prototec.co.nz
// @version     3.3
// @grant       GM_registerMenuCommand
// ==/UserScript==
'use strict';
function parseQuestionHTML(nodes) { // Nodes = question tr contents
	var out = [];
	for (var i = 0; i < nodes.length; i++) {
		if (nodes[i].innerHTML.charAt(0) == "<") { // If input
		out.push("input");
	} else {
		out.push(nodes[i].innerHTML);
	}}
	return out;
}

function switchInputTarget(arr) { // Function to turn things like 10 - input = 2 into 10 - 2 = input
	if (arr[arr.length-1] != "input") {
		switch(arr[1]) {
			case "–": //Em-da2sh
				return [arr[0], "–", arr[4], "=", "input"]
			break;
			case "+": 
				return [arr[4], "–", arr[0], "=", "input"]
			break;
			default:
			console.log(arr[1] + " default");
			break;
		}
	} else {
		return arr
	}
}
function doTheMaths(question) {
	switch(question[1]) {
		case "+":
			return (parseInt(question[0]) + parseInt(question[2]))
		break;
		case "–": //Em-dash
			return (question[0] - question[2])
		break;
		case "×":
			return (question[0] * question[2])
		break;
		case "÷":
			return (question[0] / question[2])
		break;
		default:
			return question
		break;
	}
}
function isSheet() {if (document.getElementById('main').childNodes[0].innerHTML == "Introduce Yourself") {return false;} else {return true;}}
function setAnswers() {
if (isSheet() == true) {
	var sets = document.getElementsByClassName('set') // All the sets of questions
var set
for (var i = 0; i < sets.length; i++) {
	set = sets[i].childNodes[1].childNodes[0]
	for (var j = 0; j < set.childNodes.length; j++) {
		if (set.childNodes[j].childNodes[2].innerHTML.charAt(0) == "<") {
			set.childNodes[j].childNodes[2].childNodes[0].value = doTheMaths(switchInputTarget(parseQuestionHTML(set.childNodes[j].childNodes)));
			//console.log(doTheMaths(switchInputTarget(parseQuestionHTML(set.childNodes[j].childNodes))));
		} else {
			set.childNodes[j].childNodes[4].childNodes[0].value = doTheMaths(switchInputTarget(parseQuestionHTML(set.childNodes[j].childNodes)));
			//console.log(doTheMaths(switchInputTarget(parseQuestionHTML(set.childNodes[j].childNodes))))	
		}
		

	}
}}}
function clearAnswers() {
	if (isSheet() == true) {
		var sets = document.getElementsByClassName('set') // All the sets of questions
var set
for (var i = 0; i < sets.length; i++) {
	set = sets[i].childNodes[1].childNodes[0]
	for (var j = 0; j < set.childNodes.length; j++) {
		if (set.childNodes[j].childNodes[2].innerHTML.charAt(0) == "<") {
			set.childNodes[j].childNodes[2].childNodes[0].value = "";
		} else {
			set.childNodes[j].childNodes[4].childNodes[0].value = "";
		}
		

	}
}
	}
}

function randAnswers() {
	if (isSheet() == true) {
		var sets = document.getElementsByClassName('set') // All the sets of questions
var set
for (var i = 0; i < sets.length; i++) {
	set = sets[i].childNodes[1].childNodes[0]
	for (var j = 0; j < set.childNodes.length; j++) {
		if (set.childNodes[j].childNodes[2].innerHTML.charAt(0) == "<") {
			set.childNodes[j].childNodes[2].childNodes[0].value = Math.random();
		} else {
			set.childNodes[j].childNodes[4].childNodes[0].value = Math.random();
		}
		

	}
}
	}
}

GM_registerMenuCommand("Math h4X0r - Fill all", setAnswers);
GM_registerMenuCommand("Math h4x0r - Clear All", clearAnswers);
GM_registerMenuCommand("Math h4X0r - Random All", randAnswers);
