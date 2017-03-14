function View(controller, screen) {
	this.controller = controller;
	this.screen = screen;
}

View.prototype.render = function() {
	this.renderBackground(this.screen.bg);

	speech = {
		'character': this.screen.character,
		'text': this.screen.speech
	};

	this.handleSpeech(speech);
	this.renderActions()
}

View.prototype.renderBackground = function(image_url) {

	if (image_url != 'none') {
		$('#bg').css('background-image', 'url(/img/bg/'+image_url+')');
	} else {
		$('#bg').css('background-image', '');
	}
}

View.prototype.handleSpeech = function(speechObject) {
	this.renderSpeech(speechObject.text);
	this.renderCharacter(speechObject.character);
}

View.prototype.renderSpeech = function(speech) {
	$('#speech > p').hide();
	$('#speech > p').html(speech);
	$('#speech > p').fadeIn();
}

View.prototype.renderCharacter = function(character) {
	$('#character').css({'background-image': 'url(/img/characters/'+character+'.png)'});
}

View.prototype.renderActions = function() {
	var self = this;

	$('#task').removeClass();
	$('#task').addClass(this.screen.type);

	$('#actions').hide().html('');
	$('#objects').hide().html('');	

	self.screen.callRenderActions(self);

	if (this.screen.type == 'question') {
		$('#actions').append('<div class="gear"></div>');
	}

	$('#actions').fadeIn();
	$('#objects').fadeIn();
	
}

View.prototype.renderButton = function(buttonObject, callback) {
	var controller = this.controller;

	button = $('<button>', {
		text: buttonObject.text,
	});

	$('#actions').append(button);

	button.click(function() {
		var response = callback(buttonObject);
		controller.handle(response);
	});
}

View.prototype.renderInput = function(button_text, callback) {
	var controller = this.controller;

	input_wrapper = $('<div class="input_wrapper"></div>');

	input = $('<input/>', {
		type: 'text',
		placeholder: 'ответ'
	});

	input_wrapper.append(input);

	button = $('<button>', {
		text: button_text
	});

	$('#actions').append(input_wrapper);
	$('#actions').append(button);

	button.click(function() {
		var response = callback(input.val());
		controller.handle(response);
	})
}

View.prototype.renderObject = function(object, callback) {
	var controller = this.controller;

	var objectElement = $('<img/>', {
		src: 'img/objects/'+this.screen.id+'/'+object.img
	});

	objectElement.addClass('object');

	objectElement.css({'left': object.position[0], 'top': object.position[1]});

	$('#objects').append(objectElement);

	object.element = objectElement;

	objectElement.click(function() {
		var response = callback(object, objectElement);
		controller.handle(response);
	})

}

View.prototype.highlightObject = function(objectElement) {
	objectElement.addClass('selected');
	return true;
}