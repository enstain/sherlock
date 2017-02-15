describe("New game", function() {

	before(function() {
		this.game = new Game();
	});

	it("should has null current screen", function() {
		assert.isNull(this.game.current_screen);
	});

	it("should has first screen after start", function() {
		this.game.start();
		assert.isNotNull(this.game.current_screen.id);
	})

});

describe("Game", function() {

	beforeEach(function() {
		this.game = new Game();
	});

	it("should go to previous screen when have back transition", function() {

		this.game.current_screen = new Screen({'id': 'screen2', 'type': 'speech', 'previous_screen': new Screen({'id': 'screen1', 'type': 'speech'})});

		var openScreenCall = sinon.stub(this.game, "openScreen"),
			response = {
				'type': 'screen',
				'value': '_back'
			};

		this.game.handle(response);

		assert(openScreenCall.called);
		assert(openScreenCall.calledWith('screen1'));
	});

	it("should go to next screen when have direct transition", function() {

		this.game.current_screen = new Screen({'id': 'screen1', 'type': 'speech'});

		var openScreenCall = sinon.stub(this.game, "openScreen"),
			response = {
				'type': 'screen',
				'value': 'screen2'
			};

		this.game.handle(response);

		assert(openScreenCall.called);
		assert(openScreenCall.calledWith('screen2'));
	});

	it("should call render new speech when have speech response", function() {

		var showSpeechCall = sinon.stub(this.game, "showSpeech"),
			speechObject = {
				'character': 'sherlock',
				'text': "Respond text"
			},
			response = {
				'type': 'speech',
				'value': speechObject
			};

		this.game.handle(response);

		assert(showSpeechCall.called);
		assert(showSpeechCall.calledWith(speechObject));
	});

	it("should go to external link when have redirect response", function() {

		var redirectCall = sinon.stub(this.game, "goToUrl"),
			response = {
				'type': 'redirect',
				'value': 'http://google.com'
			};

		this.game.handle(response);

		assert(redirectCall.called);
		assert(redirectCall.calledWith('http://google.com'));
	})

});