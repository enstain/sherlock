
function Screen(options) 
{
	this.id = options.id || null;
	this.previous_screen = options.previous_screen || null;
	this.bg = options.bg || null;

	if (!!~['speech', 'question', 'input', 'select'].indexOf(options.type)) {
		this.type = options.type;	
	} else {
		throw new Error('wrong type of screen');
	}
	
	this.character = options.character || null;
	this.speech = options.speech || "";

	this.button = options.button || null;
	this.answer = options.answer || null;
	this.answers = options.answers || null;
	this.input = options.input || null;
	this.objects = options.objects || null;
	this.response = options.response || null;
};

Screen.prototype.compareWithPrevious = function() {
	if (this.previous_screen !== null) {
		this.bg = this.bg || this.previous_screen.bg;
		this.character = this.character || this.previous_screen.character;
	}
}

Screen.prototype.callRenderActions = function(view) {
	switch(this.type) {
		case 'speech':
			this.callRenderButton(view);
			break;

		case 'question':
			this.callRenderAnswers(view);
			break;

		case 'input':
			this.callRenderInput(view);
			break;

		case 'select':
			this.callRenderObjects(view);
			break;
	}
}

Screen.prototype.callRenderButton = function(view) {
	var buttonObject = {
			'text': this.button
		},
		callback = function() {
			return this.returnResponseObject(this.response);
		}

	view.renderButton(buttonObject, callback.bind(this));
}

Screen.prototype.callRenderAnswers = function(view) {

	this.answers.forEach(function(answer) {
		var callback = function(selected_answer) {
				return this.returnResponseObject(selected_answer.response);
			}
		view.renderButton(answer, callback.bind(this));
	}, this);
}

Screen.prototype.callRenderInput = function(view) {
	var button_text = "Ok",
		callback = function(input_value) {
			if (input_value == this.answer) {
				return this.returnResponseObject(this.response[0]);
			} else {
				return this.returnResponseObject(this.response[1]);
			}
		};

	view.renderInput(button_text, callback.bind(this));
}

Screen.prototype.callRenderObjects = function(view) {

	var count_objects_to_select = this.countObjectsToSelect();
	this.selected_objects = [];

	this.objects.forEach(function(object) {
		var callback = function(selected_object, element) {
			if (selected_object.right && !~this.selected_objects.indexOf(selected_object)) {
				this.selected_objects.push(selected_object);
				view.highlightObject(element);
			}

			if ((this.selected_objects.length < count_objects_to_select) || (!selected_object.right)) {
				return this.returnResponseObject(object.response);
			} else {
				return this.returnResponseObject(this.response);
			}
		}

		view.renderObject(object, callback.bind(this));
	}, this);
}

Screen.prototype.countObjectsToSelect = function() {
	if (this.type == 'select') {
		var objects_to_select = this.objects.filter(function(object) { 
			return !!object.right 
		});
		
		return objects_to_select.length;
	}

	return 0;
}

Screen.prototype.isMultipleSelect = function() {
	var count = this.countObjectsToSelect();
	return (count > 1);
}

Screen.prototype.returnResponseObject = function(response_data) {
	var response = {},
		response_array = response_data.split('::'),
		response_type = response_array[0],
		response_value = response_array[1];

	if (~response_type.indexOf('speech')) {
		var complex_speech = response_type.split(':'),
			type = complex_speech[0],
			character = complex_speech[1] || this.character;

		response.type = type;
		response.value = {
			character: character,
			text: response_value
		};
	} else {
		response.type = response_type;
		response.value = response_value;
	}

	return response;
}
