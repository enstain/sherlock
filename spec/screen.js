describe("New screen", function() {

	var options = {
			"bg": "bg1.jpg",
			"type": "question",
			"character": "sherlock",
			"speech": "Hello"
		},

		screen = new Screen(options);

	it("should has right bg", function() {
		assert.equal(screen.bg, "bg1.jpg");
	});

	it("should has right type", function() {
		assert.equal(screen.type, "question");
	});

	it("should has right character", function() {
		assert.equal(screen.character, "sherlock");
	});

	it("should has right speech", function() {
		assert.equal(screen.speech, "Hello");
	});

	var second_screen_options = {
			"previous_screen": screen,
			"type": "speech",
			"speech": "Welcome to this screen"
		},

		second_screen = new Screen(second_screen_options);
		second_screen.compareWithPrevious();

	it("should inherit bg from previous screen", function() {
		assert.equal(second_screen.bg, options.bg);
	});

	it("should inherit character from previous screen", function() {
		assert.equal(second_screen.character, options.character);
	});

	it("should return right screen transition response", function() {
		var response_data = "screen::another_screen",
			response = screen.returnResponseObject(response_data);

		assert.equal(response.type, "screen");
		assert.equal(response.value, "another_screen");
	});

	it("should return right redirect transition response", function() {
		var response_data = "redirect::http://google.com",
			response = screen.returnResponseObject(response_data);

		assert.equal(response.type, "redirect");
		assert.equal(response.value, "http://google.com");
	});

	it("should return right simple speech response", function() {
		var response_data = "speech::Hello",
			response = screen.returnResponseObject(response_data);

		assert.equal(response.type, "speech");
		assert.equal(response.value.character, "sherlock");
		assert.equal(response.value.text, "Hello");
	});

	it("should return right complex speech response", function() {
		var response_data = "speech:shave::Goodbye",
			response = screen.returnResponseObject(response_data);

		assert.equal(response.type, "speech");
		assert.equal(response.value.character, "shave");
		assert.equal(response.value.text, "Goodbye");
	});

});

describe('Speech screen', function() {

	var options = {
			'type': 'speech',
			'speech': 'Hello',
			'button': 'Action',
			'response': 'screen::another_screen'
		},

		screen = new Screen(options);

	it("should make response for button click", function() {
		var view = new View();
		var renderCall = sinon.spy(view, "renderButton");

		screen.callRenderActions(view);

		assert(renderCall.called);
		assert(renderCall.calledWith({'text': 'Action'}));
	})

});

describe('Select screen', function() {

	it("should return multiple select if many objects is right to choose", function() {
		var options = {
			'type': 'select',
			'objects': [
				{
					right: true
				},
				{
					right: true
				},
				{
					right: false
				}
			]
		};

		screen = new Screen(options);
		isMultipleSelect = screen.isMultipleSelect();

		assert.isTrue(isMultipleSelect);
	});

	it("should return not multiple select if many objects is right to choose", function() {
		var options = {
			'type': 'select',
			'objects': [
				{
					right: true
				},
				{
					right: false
				},
				{
					right: false
				}
			]
		};

		screen = new Screen(options);
		isMultipleSelect = screen.isMultipleSelect();

		assert.isNotTrue(isMultipleSelect);
	});

});