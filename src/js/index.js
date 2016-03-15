// Javascript Entry Point

import $ from 'jquery';

import form_data from './users';

import { makeTextInputs, selectBox, makeTextArea } from './templates'; 

var $app = $('.app');

form_data.forEach(function(datum) {
	var template; 
	if (datum.type === "text" || datum.type === "email" || datum.type === "tel") {
		template = makeTextInputs;
	} else if (datum.type === "select") {
		template = selectBox;
	} else if (datum.type === "textarea") {
		template = makeTextArea;
	}

	var display = template(datum);
  	$app.append( display );

});
















































