// Javascript Entry Point

import $ from 'jquery';

import form_data from './users';

import { makeTextInputs, selectBox, makeTextArea } from './templates'; 

var $app = $('.app');



form_data.forEach(function(datum) {

	var template; 
	if (datum.type === "text" || datum.type === "email" || datum.type === "tel") {
		template = makeTextInputs;
		// console.log("makeTextInputs");
		console.log(template);
	} else if (datum.type === "select") {
		template = selectBox;
		console.log(template);
		// console.log("selectBox");
	} else if (datum.type === "textarea") {
		template = makeTextArea;
		// console.log("makeTextArea");
		console.log(template);
	}

	var display = template(datum);
	$app.append(display);

});


form_data.forEach(function(datum) {

	var template; 
	if (datum.type === "text" || datum.type === "email" || datum.type === "tel") {
		template = makeTextInputs;
		// console.log("makeTextInputs");
		// console.log(template);
	} else if (datum.type === "select") {
		template = selectBox;
		// console.log(template);
		// console.log("selectBox");
	} else if (datum.type === "textarea") {
		template = makeTextArea;
		// console.log("makeTextArea");
		// console.log(template);
	}

	var display = template(datum);
	$app.append(display);

});













































