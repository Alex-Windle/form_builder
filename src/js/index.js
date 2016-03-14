// Javascript Entry Point

import $ from 'jquery';

import form_data from './users';

import { makeTextInputs, makeLang, makeTextArea } from './templates'; 

var $app = $('.app');

// put data to page 
// users array: direct text, select and textarea objects
//    to the correct templates
// run the objects through templates
// display result to page using .append

form_data.forEach(function(datum) {

	var template; 

	if (datum.type === "text" || datum.type === "email" || datum.type === "tel") {
		template = makeTextInputs;
	} else if (datum.type === "select") {
		template = makeLang;
	} else {
		template = makeTextArea;
	}

	var display = template(datum);
  	$app.append(display);

});

// users.forEach(function(user) {
//   var template;
//   if (user.type === 'Manager') {
//     template = manager;
//   } else if (user.type === 'Employee') {
//     template = employee;
//   } else if (user.type === 'Customer') {
//     template = customer;
//   }
//   var html = template(user);
//   $app.append( html );
// });

// var $app = $('.app');

// var userTypeToTemplate = {
//   'Manager': manager,
//   'Employee': employee,
//   'Customer': customer
// }

// users.forEach(function(user) {
//   var template = userTypeToTemplate[user.type];
//   var html = template(user);
//   $app.append( html );
// });




