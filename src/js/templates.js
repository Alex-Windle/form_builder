export function makeTextInputs(input) {

			return 
			`
			<label for="${input.id}"> </label>
			<input type="text" id="${input.id}" placeholder="${input.label}"><br>
			`

};

export function selectBox(language){

	var languagesList = language.options;

	var languageHtml = languagesList.map(function(lang) {
		return 
		`
		<label for="${lang.value}"></label>
		<select id="${lang.value}">
		<option value="${lang.value}">${lang.label}</option>

		`
		//select tag, look @ lang stuff
	});
};

export function makeTextArea(input) {
	return 
		`
		<label for="${input.id}"></label>
		<input type="textarea" id="${input.id}" value="${input.label}"><br>
		`
	};

//SCRATCH WORK
// export function makeLang(lang) {

// return 
// 			`
// 			<select id="${lang.id}">
// 						<option value="${lang.id}">${lang.label}</option>
// 				  		<option value="EN">English</option>
// 				  		<option value="FR">French</option>
// 				  		<option value="SP">Spanish</option>
// 				  		<option value="CH">Chinese</option>
// 				  		<option value="JP">Japanese</option>
// 				  </select><br>
// 			`
// };
