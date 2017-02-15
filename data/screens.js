var SCREENS = {
	"try_again": {
		"type":			"speech",
		"speech":		"Подумай ещё раз",
		"button":		"Хорошо",
		"response":		"screen::_back"
	},

	"what_is_arbitrage": {
		"bg": 			"bg1.jpg",
		"type": 		"question",
		"character": 	"sherlock",
		"speech": 		"Я не понял ни слова из Вашего письма, только поэтому вы здесь. Не надейтесь, что я возьмусь за какие-то глупости. У меня нет времени на шутки. Выкладывайте, что у Вас случилось, но сначала объясните, что такое этот ваш “арбитраж трафика”?",
		"answers":		[
			{
				"text": "Никаких шуток, мистер Холмс. Арбитраж — покупка и перепродажа трафика по более выгодной цене.",
				"response": "screen::what_is_cpa"
			},
			{
				"text": "Арбитраж - это… Ммм, что-то из высшей математики?",
				"response": "screen::try_again"
			},
			{
				"text": "Уверен, это связано с юриспруденцией.",
				"response": "screen::try_again"
			},
			{
				"text": "Арбитраж — от слова арбитр. Судить что-то.",
				"response": "screen::try_again"
			}
		]
	},

	"what_is_cpa": {
		"type":			"question",
		"speech":		"Да, молодец. Пока твои извилины шевелились, я уже успел изучить тему. Почему пришел именно ты? Ты хоть в курсе, что такое CPA?",
		"answers":		[
			{
				"text": "CPA — Сost Per Action. Цена за действие",
				"response": "screen::meatdumplings"
			},
			{
				"text": "CPA — Create Please Action. Призыв к действию",
				"response": "screen::try_again"
			},
			{
				"text": "CPA — Cost Per Adverts. Цена для арбитражников",
				"response": "screen::try_again"
			},
			{
				"text": "CPA — Can Post All. Разрешение на рекламу",
				"response": "screen::try_again"
			}
		]
	},

	"meatdumplings": {
		"type":			"question",
		"speech":		"Молодец, но ты вряд ли чем-то поможешь мне. Хотя, возможно, пригодится твое знание лексики. Что такое, например, “слив в пельменную”? Как вы приплели отварные изделия из пресного теста к заработку в интернете?",
		"answers":		[
			{
				"text": "Речь, скорее, о потере денег, а не о заработке. Давно сложилось такое устойчивое выражение — значит сливать бюджет в минус.",
				"response": "screen::calc_roi"
			},
			{
				"text": "“Пельменная” — это партнерка такая. Креативные ребята в ней сидят, вот и назвали вычурно",
				"response": "screen::try_again"
			},
			{
				"text": "Это новая сеть фастфудов. Пельмени с креветками, салом, шоколадом… С чем угодно. WOW-товар. Наш ответ McDonalds",
				"response": "screen::try_again"
			},
			{
				"text": "Пельмени — образный деликатес арбитражников. Слить в пельменную = заработать кучу денег на пельмени.",
				"response": "screen::try_again"
			}
		]
	},

	"calc_roi":	{
		"bg":			"roi_task.jpg",
		"type":			"input",
		"speech":		"Хорошо, что ты шутить не начал. Ненавижу низкопробный юмор. В любом случае, брать тебя на дело ради компании — не в моем стиле. Докажи, что ты в теме и выдвигаемся. Надеюсь, считать ты умеешь. Какой ROI получил арбитражник?",
		"answer":		"100",
		"response": 	["screen::lets_go_for_profit", "screen::try_again"]
	},

	"lets_go_for_profit": {
		"bg":			"bg1.jpg",
		"type":			"speech",
		"speech":		"Ладно, логика присутствует, считать умеешь. Давай вернем ваш “профит”. Сначала зайдем к моему знакомому в крупную партнерку. Сдается мне, что вы просто плохо льете. Готов?",
		"button":		"Пойдем",
		"response": 	"screen::room_with_objects"
	},

	"room_with_objects": {
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
				"position":	[0,0],
				"right":	false,
				"response":	"speech::Сейчас не 4 o'clock. Чаепитие(хотя это и чаем не назовешь) подождет"
			},
			{
				"img":		"object3.jpg",
				"position":	[0,0],
				"right":	true
			}
		],
		"response": "screen::roman_cipher" 
	},

	"roman_cipher": {
		"bg":			"cipher.jpg",
		"type":			"input",
		"speech":		"Это явно римский шифр. Но слишком простой. Я на такое тратить энергию не буду, так что давай сам. Могу лишь дать тебе Азбуку и подсказку. Стрелка и число указывает на сколько и в какую сторону нужно сдвинуть буквы, чтобы получилось слово.",
		"answer":		"тизер",
		"response": 	["screen::shaves_room", "screen::try_again"]
	},

	"shaves_room": {
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
				"position": [0,0],
				"right":	true,
				"response":	"speech:sherlock::Концентрат полезной информации по манимейкингу в одном месте? Да, это нам пригодится."
			},
			{
				"img":		"sedative.jpg",
				"position":	[0,0],
				"right":	true,
				"response":	"speech:sherlock::Крепкая нервная система пригодится тебе в борьбе с пельменной."
			},
			{
				"img":		"whiskey.jpg",
				"position":	[0,0],
				"right":	false,
				"response":	"speech:sherlock::Благородный ирландский напиток. Но, его пьют только те, у кого есть профит. У тебя есть?"
			},

		],
		"response":	"screen::this_is_psycho"
	},

	"this_is_psycho": {
		"type":			"speech",
		"character":	"sherlock",
		"speech":		"Этот псих просто развлекается. Что-же, сыграем. Запускай компьютер, арбитражник. Твой час настал.",
		"button":		"Запустить компьютер",
		"response":		"screen::notebook_task"
	},

	"notebook_task": {
		"bg":			"notebook.jpg",
		"type":			"speech",
		"character":	"shave",
		"speech":		"Компьютер, информация и успокоительное — еще не все. Как ты можешь называть себя арбитражником, если даже не знаешь источники трафика? Бьюсь об заклад, ты не отличаешь объявления.",
		"button":		"Посмотреть объявления",
		"response": 	"screen::notebook_vk"
	},

	"notebook_vk": {
		"bg":			"vk_adverts.jpg",
		"type":			"question",
		"speech":		"Что ты видишь на экране?",
		"answers":		[
			{
				"text":		"Тизерные сети",
				"response":	"screen::try_again"
			},
			{
				"text":		"Реклама Вконтакте",
				"response":	"screen::notebook_tiser"
			},
			{
				"text":		"MyTarget",
				"response":	"screen::try_again"
			},
			{
				"text":		"Google Adwords",
				"response":	"screen::try_again"
			},
		]
	},

	"notebook_tiser": {
		"bg":			"tiser.jpg",
		"type":			"question",
		"speech":		"Что ты видишь на экране?",
		"answers":		[
			{
				"text":		"Тизерные сети",
				"response":	"screen::notebook_adwords"
			},
			{
				"text":		"Реклама Вконтакте",
				"response":	"screen::try_again"
			},
			{
				"text":		"MyTarget",
				"response":	"screen::try_again"
			},
			{
				"text":		"Google Adwords",
				"response":	"screen::try_again"
			},
		]
	},

	"notebook_adwords": {
		"bg":			"google_adwords.jpg",
		"type":			"question",
		"speech":		"Что ты видишь на экране?",
		"answers":		[
			{
				"text":		"Тизерные сети",
				"response":	"screen::try_again"
			},
			{
				"text":		"Реклама Вконтакте",
				"response":	"screen::try_again"
			},
			{
				"text":		"MyTarget",
				"response":	"screen::try_again"
			},
			{
				"text":		"Google Adwords",
				"response":	"screen::compare_two_task"
			},
		]
	},

	"compare_two_task": {
		"bg":			"notebook.jpg",
		"type":			"speech",
		"character":	"shave",
		"speech":		"Ладно, источники ты знаешь, а вот понять, какой креатив сделан лучше, сможешь?",
		"button":		"Смогу",
		"response":		"screen::compare_vk"
	},

	"compare_vk": {
		"bg":			"compare_vk.jpg",
		"type":			"question",
		"speech":		"Какой креатив лучше?",
		"answers":		[
			{
				"text":		"1",
				"right":	true
			},
			{
				"text":		"2",
				"right":	false
			}
		],
		"transitions":	{
			"success":		"compare_mytarget",
			"fault":		"try_again"
		}
	},

	"compare_mytarget": {
		"bg":			"compare_mytarget.jpg",
		"type":			"question",
		"speech":		"Какой креатив лучше?",
		"answers":		[
			{
				"text":		"1",
				"right":	true
			},
			{
				"text":		"2",
				"right":	false
			}
		],
		"transitions":	{
			"success":		"compare_yandex",
			"fault":		"try_again"
		}
	},

	"compare_yandex": {
		"bg":			"compare_yandex.jpg",
		"type":			"question",
		"speech":		"Какой креатив лучше?",
		"answers":		[
			{
				"text":		"1",
				"right":	true
			},
			{
				"text":		"2",
				"right":	false
			}
		],
		"transitions":	{
			"success":		"support_task",
			"fault":		"try_again"
		}
	},

	"support_task":	{
		"bg":			"support.jpg",
		"type":			"speech",
		"speech":		"Ты не так плох в техническом плане. Но арбитраж — не только владение инструментами. Вы постоянно жалуетесь на поддержку и саппорт партнерок! А были ли вы в их шкуре? Чувствовали всю боль, тысяч повторяющихся вопросов? Пора прочувствовать. Теперь ты агент поддержки. Покажи свои навыки коммуникации.",
		"button":		"Принять клиента",
		"transitions":	{
			"direct":		"hello_customer"
		}
	},

	"hello_customer": {
		"type":			"question",
		"speech":		"Добрый день. Мне срочно нужна профитная связка.",
		"answers":		[
			{
				"text":		"Уточнить вертикаль, просмотреть статистику, подсказать связки, которые показывают лучшие результат",
				"right":	true
			},
			{
				"text":		"Выдать за ответ один из топ5 офферов",
				"right":	false
			},
			{
				"text":		"Подсказать оффер, на который требуется больше всего трафика",
				"right":	false
			},
			{
				"text":		"В нашей партнерке — все офферы профитные. Выбирайте любой",
				"right":	false
			},
		],
		"transitions":	{
			"success":		"customer_high_return",
			"fault":		"try_again"
		}
	}

}