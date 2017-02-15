
function Game() {
	this.options_reader = new OptionsReader();
	var game_options = this.options_reader.returnGameOptions();

	this.start_screen = game_options.start_screen || null;
	this.current_screen = null;
}

Game.prototype.start = function() {
	this.openScreen(this.start_screen);
}

Game.prototype.openScreen = function(screenID) {
	this.current_screen = this.loadScreen(screenID);
}

Game.prototype.loadScreen = function(screenID) {
	var options = this.readScreenOptions(screenID);

	options.id = screenID; 
	options.previous_screen = this.current_screen; 

	screen = new Screen(options);
	screen.compareWithPrevious();

	this.view = new View(this, screen);
	this.view.render();

	return screen;
}

Game.prototype.readScreenOptions = function(screenID) {
	var options = this.options_reader.returnScreensOptions();

	return options[screenID];
}

Game.prototype.handle = function(response) {
	if (!response) {
		return false;
	}

	switch(response.type) {
		case 'screen':
			var screenID = (response.value == '_back') ? this.current_screen.previous_screen.id : response.value;
			this.openScreen(screenID);
			break;

		case 'speech':
			this.showSpeech(response.value);
			break;

		case 'redirect':
			this.goToUrl(response.value);
			break;

		default:
			return false;
			break;
	}
}

Game.prototype.showSpeech = function(speech) {
	this.view.handleSpeech(speech);
}

Game.prototype.goToUrl = function(link) {
	return document.location.href = link;
}