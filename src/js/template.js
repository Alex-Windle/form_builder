export function makeTextArea(input) {

return 
			`
			<label for="${input.id}"></label>
			<textarea id="${input.id}"></textarea><br>
			`
};






export function makeLang(lang) {

return 
			`
			<select id="${lang.id}">
						<option value="${lang.id}">${lang.label}</option>
				  		<option value="EN">English</option>
				  		<option value="FR">French</option>
				  		<option value="SP">Spanish</option>
				  		<option value="CH">Chinese</option>
				  		<option value="JP">Japanese</option>
				  </select><br>
			`
};





export function makeTextInputs(input) {

return 
			`
			<label for="${input.id}"></label>
			<input type="text" id="${input.id}" placeholder="${input.label}"><br>
			`
};
