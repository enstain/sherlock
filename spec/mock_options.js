

var GAME_OPTIONS = {
	"start_screen": "screen_input"
};

var SCREENS = {
	"try_again": {
		"type": 		"speech",
		"speech": 		"Try again!",
		"button": 		"Ok",
		"response": 	"screen::_back"
	},

	"screen_input": {
		"type":			"input",
		"speech":		"Type 100",
		"answer":		"100",
		"response":		["screen::screen_speech", "screen::try_again"]
	},

	"screen_speech": {
		"type": 		"speech",
		"speech": 		"Another screen with speech",
		"button": 		"Go!",
		"response":   	"screen::screen_question"
	},

	"screen_question": {
		"bg": 			"bg1.jpg",
		"type": 		"question",
		"character": 	"sherlock",
		"speech": 		"Я не понял ни слова из Вашего письма, только поэтому вы здесь. Не надейтесь, что я возьмусь за какие-то глупости. У меня нет времени на шутки. Выкладывайте, что у Вас случилось, но сначала объясните, что такое этот ваш “арбитраж трафика”?",
		"answers":		[
			{
				"text": "Никаких шуток, мистер Холмс. Арбитраж — покупка и перепродажа трафика по более выгодной цене.",
				"response": "screen::screen_objects"
			},
			{
				"text": "Lol",
				"response": "screen::try_again"
			}
		]
	},

	"screen_objects": {
		"bg":			"room.jpg",
		"type":			"select",
		"speech":		"Хм, пустота.  Вопрос в том, куда все подевались и как пройти дальше?",
		"objects":		[
			{
				"img":		"object1.jpg",
				"position":	[0,0],
				"right":	false,
				"response": "speech::Решил похудеть и просочиться в дверную щель? Гениально… Зачем я только взял тебя с собой?"
			},
			{
				"img":		"object2.jpg",
				"position":	[30,30],
				"right":	false,
				"response":	"speech::Сейчас не 4 o'clock. Чаепитие(хотя это и чаем не назовешь) подождет"
			},
			{
				"img":		"object3.jpg",
				"position":	[70,70],
				"right":	true
			}
		],
		"response": "screen::screen_multiple_objects"
	},

	"screen_multiple_objects": {
		"bg":			"shaves_room.jpg",
		"type":			"select",
		"character":	"shave",
		"speech":		"О, отчаянный арбитражник и какой-то чудик. Вы не заслуживаете профита! Обленились и ищите готовые решения! Никакого креатива. Хотя, чтобы получить профит каждому нужно лишь 3 вещи! Уверен, ты не найдешь даже их!",
		"objects":		[
			{
				"img":		"computer.jpg",
				"position":	[0,0],
				"right":	true,
				"response":	"speech:sherlock::Главное оружие найдено. Но не каждый человек с компьютером — арбитражник. Что еще?"
			},
			{
				"img":		"conversion.jpg",
				"position": [30,0],
				"right":	true,
				"response":	"speech:sherlock::Концентрат полезной информации по манимейкингу в одном месте? Да, это нам пригодится."
			},
			{
				"img":		"sedative.jpg",
				"position":	[0,30],
				"right":	true,
				"response":	"speech:sherlock::Sedative response"
			},
			{
				"img":		"whiskey.jpg",
				"position":	[30,30],
				"right":	false,
				"response":	"speech:sherlock::Whiskey response"
			},

		],
		"response":	"screen::screen_last"
	},

	"screen_last": {
		"type": "speech",
		"speech": "Goodbye my lover",
		"button": "Go away",
		"response": "redirect::http://google.com"
	}
};