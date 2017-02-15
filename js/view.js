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
	$('#bg').css('background', 'url(img/bg/'+image_url+')');
}

View.prototype.handleSpeech = function(speechObject) {
	this.renderSpeech(speechObject.text);
	this.renderCharacter(speechObject.character);
}

View.prototype.renderSpeech = function(speech) {
	$('#speech').hide();
	$('#speech').html(speech);
	$('#speech').fadeIn();
}

View.prototype.renderCharacter = function(character) {
	$('#character').html(character);	
}

View.prototype.renderActions = function() {
	$('#actions').html('');
	$('#objects').html('');

	this.screen.callRenderActions(this);
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

	input = $('<input/>', {
		type: 'text',
	});

	button = $('<button>', {
		text: button_text
	});

	$('#actions').append(input);
	$('#actions').append(button);

	button.click(function() {
		var response = callback(input.val());
		controller.handle(response);
	})
}

View.prototype.renderObject = function(object, callback) {
	var controller = this.controller;

	var objectElement = $('<img/>', {
		src: 'img/objects/'+object.img
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