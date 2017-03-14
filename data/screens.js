var SCREENS = {
	"try_again": {
		"type":			"speech",
		"speech":		"Подумай ещё раз",
		"button":		"Хорошо",
		"response":		"screen::_back"
	},

	"start": {
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
		"bg":			"roi.jpg",
		"type":			"input",
		"speech":		"Хорошо, что ты шутить не начал. Ненавижу низкопробный юмор. В любом случае, брать тебя на дело ради компании — не в моем стиле. Докажи, что ты в теме и выдвигаемся. Надеюсь, считать ты умеешь. Какой ROI получил арбитражник?",
		"answer":		"100",
		"response": 	["screen::lets_go_for_profit", "screen::try_again"]
	},

	"lets_go_for_profit": {
		"bg":			"bg1.jpg",
		"type":			"speech",
		"speech":		"Ладно, логика присутствует, считать умеешь. Давай вернем ваш “профит”. Сначала зайдем к моему знакомому в крупную партнерку. Сдается мне, что вы просто плохо льете. Готов?",
		"button":		"Пойти с Шерлоком",
		"response": 	"screen::room_with_objects"
	},

	"room_with_objects": {
		"bg":			"room.jpg",
		"character": 	"sherlock", 
		"type":			"select",
		"speech":		"Хм, пустота.  Вопрос в том, куда все подевались и как пройти дальше?",
		"objects":		[
			{
				"img":		"code.png",
				"position":	[730,110],
				"right":	false,
				"response": "speech::Похоже, что на замке шифр из 5 букв. Нужно найти и разгадать его, арбитражник!"	
			},
			{
				"img":		"abgymnic.png",
				"position":	[280,350],
				"right":	false,
				"response": "speech::Решил похудеть и просочиться в дверную щель? Гениально… Зачем я только взял тебя с собой?"
			},
			{
				"img":		"monk_tea.png",
				"position":	[0,300],
				"right":	false,
				"response":	"speech::Сейчас не 4 o'clock. Чаепитие(хотя это и чаем не назовешь) подождет"
			},
			{
				"img":		"titan_gel.png",
				"position":	[760,240],
				"right":	false,
				"response": "speech::Я уже сомневаюсь, что ты привел меня в пустую комнату искать профит… Может вернемся к делу?"
			},
			{
				"img":		"banana.png",
				"position":	[550,10],
				"right":	false,
				"response": "speech::Это еще что? Не могу представить себе, зачем такие пошлости на работе? Что можно рекламировать ЭТИМ?"
			},
			{
				"img":		"dumplings.png",
				"position":	[160,-30],
				"right":	false,
				"response": "speech::Вы все помешаны на пельмешках? Или это такое плоское чувство юмора?"
			},
			{
				"img":		"waiter.png",
				"position":	[90,130],
				"right":	false,
				"response": "speech::Даже ждун устал наблюдать за твоими попытками… Напрягись, арбитражник!"
			},
			{
				"img":		"games.png",
				"position":	[240,105],
				"right":	false,
				"response": "speech::Отличная мысль. Не завод, так игровые автоматы! Гениально… Зачем тебе вообще профит?"
			},
			{
				"img":		"cipher.png",
				"position":	[280,20],
				"right":	true
			},
		],
		"response": "screen::roman_cipher" 
	},

	"roman_cipher": {
		"bg":			"cipher.jpg",
		"type":			"input",
		"speech":		"Это явно римский шифр. Но слишком простой. Я на такое тратить энергию не буду, так что давай сам. Могу лишь дать тебе Азбуку и подсказку. Стрелка и число указывает на сколько и в какую сторону нужно сдвинуть буквы, чтобы получилось слово.",
		"answer":		"тизер",
		"response": 	["screen::room_unlocked", "screen::try_again"]
	},

	"room_unlocked": {
		"bg": 			"room_unlocked.jpg",
		"type": 		"speech",
		"speech": 		"Ооо, кто-то играет с нами. Становится интересно",
		"button": 		"Пойти с Шерлоком",
		"response": 	"screen::shaves_room"
	},

	"shaves_room": {
		"bg":			"shaves_room.jpg",
		"type":			"select",
		"character":	"shave",
		"speech":		"О, отчаянный арбитражник и какой-то чудик. Вы не заслуживаете профита! Обленились и ищите готовые решения! Никакого креатива. Хотя, чтобы получить профит каждому нужно лишь 3 вещи! Уверен, ты не найдешь даже их!",
		"objects":		[
			{
				"img":		"computer.png",
				"position":	[230,280],
				"right":	true,
				"response":	"speech:sherlock::Главное оружие найдено. Но не каждый человек с компьютером — арбитражник. Что еще?"
			},
			{
				"img":		"conversion.png",
				"position": [340,0],
				"right":	true,
				"response":	"speech:sherlock::Концентрат полезной информации по манимейкингу в одном месте? Да, это нам пригодится."
			},
			{
				"img":		"sedative.png",
				"position":	[760,280],
				"right":	true,
				"response":	"speech:sherlock::Крепкая нервная система пригодится тебе в борьбе с пельменной."
			},
			{
				"img":		"vodka.png",
				"position":	[-30,150],
				"right":	false,
				"response":	"speech:sherlock::Я, конечно, слышал, что под алкоголем придумываются лучшие связки, но не в твоем случае"
			},
			{
				"img":		"whiskey.png",
				"position":	[160,260],
				"right":	false,
				"response":	"speech:sherlock::Благородный ирландский напиток. Но, его пьют только те, у кого есть профит. У тебя есть?"
			},
			{
				"img":		"headphones.png",
				"position":	[-20,-10],
				"right":	false,
				"response":	"speech:sherlock::Хочешь слушать звук монеток падающих на WebMoney? Без профита тебе это не пригодится"
			},
			{
				"img":		"cigarettes.png",
				"position":	[230,370],
				"right":	false,
				"response":	"speech:sherlock::Ты бы еще выбрал вэйп. Можно успокоить нервы другим способом."
			},
			{
				"img":		"urna.png",
				"position":	[20,300],
				"right":	false,
				"response":	"speech:sherlock::Не уверен, что мусорное ведро — самый необходимый предмет. Хотя, тебе виднее."
			},
			{
				"img":		"couch.png",
				"position":	[395,225],
				"right":	false,
				"response":	"speech:sherlock::Да, да. Посиди. Тебе же некуда спешить..."
			},
			{
				"img":		"skull.png",
				"position":	[710,-60],
				"right":	false,
				"response":	"speech:sherlock::Решил призвать черную магию? Ты в каком веке живешь? Еще по дереву постучи, авось профит вернется"
			},
			{
				"img":		"notes.png",
				"position":	[110,130],
				"right":	false,
				"response":	"speech:sherlock::Классическая музыка, конечно, улучшает мозговую активность, но тебе нужны более практичные предметы"
			}

		],
		"response":	"screen::notebook_task"
	},

	"notebook_task": {
		"bg":			"shaves_room_solved.jpg",
		"type":			"speech",
		"character":	"shave",
		"speech":		"Компьютер, информация и успокоительное — еще не все. Как ты можешь называть себя арбитражником, если даже не знаешь источники трафика? Бьюсь об заклад, ты не отличаешь объявления.",
		"button":		"Посмотреть объявления",
		"response": 	"screen::notebook_vk"
	},

	"notebook_vk": {
		"bg":			"vk_adverts.jpg",
		"type":			"select",
		"speech":		"Что ты видишь на экране?",
		"objects":		[
			{
				"img":		"../vk.png",
				"position":	[-20,300],
				"right":	true
			},
			{
				"img":		"../mytarget.png",
				"position":	[200,300],
				"right":	false,
				"response":	"speech::Серьезно? Не знаешь даже основ? Ты бы еще забыл как дышать"
			},
			{
				"img":		"../adwords.png",
				"position":	[410,300],
				"right":	false,
				"response": "speech::С этим бы и ребенок справился… Мне стыдно за тебя."
			},
			{
				"img":		"../kadam.png",
				"position":	[620,300],
				"right":	false,
				"response": "speech::С этим бы и ребенок справился… Мне стыдно за тебя."
			}
		],
		"response": "screen::notebook_kadam" 
	},

	"notebook_kadam": {
		"bg":			"kadam.jpg",
		"type":			"select",
		"speech":		"Что ты видишь на экране?",
		"objects":		[
			{
				"img":		"../vk.png",
				"position":	[-20,300],
				"right":	false,
				"response":	"speech::Серьезно? Не знаешь даже основ? Ты бы еще забыл как дышать"
			},
			{
				"img":		"../mytarget.png",
				"position":	[200,300],
				"right":	false,
				"response":	"speech::Серьезно? Не знаешь даже основ? Ты бы еще забыл как дышать"
			},
			{
				"img":		"../adwords.png",
				"position":	[410,300],
				"right":	false,
				"response": "speech::С этим бы и ребенок справился… Мне стыдно за тебя."
			},
			{
				"img":		"../kadam.png",
				"position":	[620,300],
				"right":	true
			}
		],
		"response": "screen::notebook_adwords" 
	},

	"notebook_adwords": {
		"bg":			"adwords.jpg",
		"type":			"select",
		"speech":		"Что ты видишь на экране?",
		"objects":		[
			{
				"img":		"../vk.png",
				"position":	[-20,300],
				"right":	false,
				"response":	"speech::Серьезно? Не знаешь даже основ? Ты бы еще забыл как дышать"
			},
			{
				"img":		"../mytarget.png",
				"position":	[200,300],
				"right":	false,
				"response":	"speech::Серьезно? Не знаешь даже основ? Ты бы еще забыл как дышать"
			},
			{
				"img":		"../adwords.png",
				"position":	[410,300],
				"right":	true
				
			},
			{
				"img":		"../kadam.png",
				"position":	[620,300],
				"right":	false,
				"response": "speech::С этим бы и ребенок справился… Мне стыдно за тебя."
			}
		],
		"response": "screen::compare_two_task" 
	},

	"compare_two_task": {
		"bg":			"table.jpg",
		"type":			"speech",
		"character":	"shave",
		"speech":		"Ладно, источники ты знаешь, а вот понять, какой креатив сделан лучше, сможешь?",
		"button":		"Смогу",
		"response":		"screen::compare_vk"
	},

	"compare_vk": {
		"bg":			"none",
		"type":			"select",
		"speech":		"Какой креатив лучше?",
		"objects": 		[
			{
				"img": 		"vk_1.jpg",
				"position": [10,-10],
				"right": 	true
			},
			{
				"img": 		"vk_2.jpg",
				"position": [420,40],
				"right": 	false,
				"response": "speech::Не угадать из 2??? Да ты талант, ничего не скажешь."
			},
		],
		"response": 	"screen::compare_mytarget"
	},

	"compare_mytarget": {
		"bg":			"none",
		"type":			"select",
		"speech":		"Какой креатив лучше?",
		"objects": 		[
			{
				"img": 		"mytarget_1.jpg",
				"position": [0,40],
				"right": 	true
			},
			{
				"img": 		"mytarget_2.jpg",
				"position": [440,40],
				"right": 	false,
				"response": "speech::Может все-таки завод? Больше пользы будет."
			},
		],
		"response": 	"screen::compare_adwords"
	},

	"compare_adwords": {
		"bg":			"none",
		"type":			"select",
		"speech":		"Какой креатив лучше?",
		"objects": 		[
			{
				"img": 		"adwords_1.jpg",
				"position": [160,210],
				"right": 	true
			},
			{
				"img": 		"adwords_2.jpg",
				"position": [150,60],
				"right": 	false,
				"response": "speech::Ты поражаешь меня своим “выдающимся” интеллектом."
			},
		],
		"response": 	"screen::support_task"
	},

	"support_task":	{
		"bg":			"support.jpg",
		"type":			"speech",
		"speech":		"Ты не так плох в техническом плане. Но арбитраж — не только владение инструментами. Вы постоянно жалуетесь на поддержку и саппорт партнерок! А были ли вы в их шкуре? Чувствовали всю боль, тысяч повторяющихся вопросов? Пора прочувствовать. Теперь ты агент поддержки. Покажи свои навыки коммуникации.",
		"button":		"Я не боюсь, Шейв!",
		"response": 	"screen::hello_customer"
	},

	"hello_customer": {
		"type":			"question",
		"character": 	"customer",
		"speech":		"Добрый день. Мне срочно нужна профитная связка.",
		"answers":		[
			{
				"text":		"Уточнить вертикаль, просмотреть статистику, подсказать связки, которые показывают лучшие результат",
				"response":	"screen::high_cashback"
			},
			{
				"text":		"Выдать за ответ один из топ5 офферов",
				"response":	"screen::try_again"
			},
			{
				"text":		"Подсказать оффер, на который требуется больше всего трафика",
				"response":	"screen::try_again"
			},
			{
				"text":		"В нашей партнерке — все офферы профитные. Выбирайте любой",
				"response":	"screen::try_again"
			},
		],
	},

	"high_cashback": {
		"type":			"question",
		"character": 	"customer",
		"speech":		"Можно мне повышенные отчисления?",
		"answers":		[
			{
				"text":		"Безусловно. Давайте оценим трафик и его объемы, а так же посмотрим, какие условия может дать рекламодатель.",
				"response":	"screen::why_hold"
			},
			{
				"text":		"Легко. Сколько накинуть сверху? 20% хватит?",
				"response":	"screen::try_again"
			},
			{
				"text":		"Ты что, лучше всех? У нас даже топы на таких условиях льют, так что не ной.",
				"response":	"screen::try_again"
			},
			{
				"text":		"Мы не на базаре. Здесь не торгуются. Не можешь лить трафик — иди на завод.",
				"response":	"screen::try_again"
			},
		],
	},

	"why_hold": {
		"type":			"question",
		"character": 	"customer",
		"speech":		"Почему я не могу сразу получить выплату? Зачем вам холд???",
		"answers":		[
			{
				"text":		"Это время нужно, чтобы проверить качество трафика, который вы предоставляете. После этого времени вы получит выплату, если выполнили все условия по оферу.",
				"response":	"screen::what_is_subid"
			},
			{
				"text":		"Чтобы такие умники, не наливали фрод.",
				"response":	"screen::try_again"
			},
			{
				"text":		"Не забивайте себе голову. Таково наши условия и их нельзя изменить.",
				"response":	"screen::try_again"
			},
			{
				"text":		"Нам же тоже нужны деньги, вы так не думаете? Откуда они будут, если мы их сразу будем раздавать?",
				"response":	"screen::try_again"
			},
		],
	},

	"what_is_subid": {
		"type":			"question",
		"character": 	"customer",
		"speech":		"Что за SUB ID? Зачем мне это?",
		"answers":		[
			{
				"text":		"SUD ID позволяет вам размечать трафик и понимать откуда приходят конверсии. Это поможет вам в дальнейшей оптимизации. Могу помочь вам с разметкой.",
				"response":	"screen::help_me"
			},
			{
				"text":		"Пойдите погуглите.",
				"response":	"screen::try_again"
			},
			{
				"text":		"Вы же тут арбитражник? Как вы собирались лить, если ничего не знаете?",
				"response":	"screen::try_again"
			},
			{
				"text":		"SUB ID — ваш номер в системе, по которому мы понимаем кто же льет трафик. Впишите свой номер кабинета.",
				"response":	"screen::try_again"
			},
		],
	},

	"help_me": {
		"type":			"question",
		"character": 	"customer",
		"speech":		"Я савиршенно ни разбераюсь в арбитраже, но хочу зоробатывать))))) Памогите!",
		"answers":		[
			{
				"text":		"Настоятельно рекомендую вам в начале ознакомиться с основами арбитража. Почитайте профильные форумы, блоги, паблики и изучите всевозможную информацию в интернете. Можете начать с conversion.im",
				"response":	"screen::the_end"
			},
			{
				"text":		"Это не красный крест. Здесь каждый помогает себе сам.",
				"response":	"screen::try_again"
			},
			{
				"text":		"Можете посмотреть технические инструкции в нашем FAQ, и смело запускать трафик.",
				"response":	"screen::try_again"
			},
			{
				"text":		"Арбитраж — дело несложное. Закидывайте деньги в источник, генерируйте ссылку и поехали. На ходу разберетесь.",
				"response":	"screen::try_again"
			},
		],
	},

	"the_end": {
		"bg":			"the_end.jpg",
		"type":			"select",
		"character": 	"shave", 
		"speech":		"Жаль, что в мое время не было такого адекватного саппорта в партнерках… Наверное, нельзя было лить в неизвестные партнерки-однодневки. Поэтому сейчас мне приходится мстить им всем, а профит остался только в лучших партнерках Рунета и буржа. Туда мне хода нет, но ты можешь выбрать любую из моего проверенного списка. Их не коснулась моя шейв-рука, и они генерируют море профита каждый день. Каждая из них - лучшая в своей нише. Ты прошел испытание, наслаждайся морем профита и бонусами!",
		"objects": 		[
			{
				"img": 		"adcombo.png",
				"position": [-50,150],
				"right": 	false,
				"response": "speech::Adcombo"
			},
			{
				"img": 		"wapclick.png",
				"position": [180,190],
				"right": 	false,
				"response": "speech::Wapclick"
			},
			{
				"img": 		"alfaleads.png",
				"position": [320,190],
				"right": 	false,
				"response": "speech::Alfaleads"
			},
			{
				"img": 		"zorka.png",
				"position": [580,190],
				"right": 	false,
				"response": "speech::Zorka"
			},
			{
				"img": 		"ctr.png",
				"position": [730,190],
				"right": 	false,
				"response": "speech::CTR"
			},
		],
		"response": 	"screen::start"
	},

}