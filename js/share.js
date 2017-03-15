Share = {
	title: 'Арбитражный квест: "Этюд о пропавшем профите"',
	description: "Мир CPA уже не будет прежним! Профит пропал… Совсем пропал…. Арбитражник, да прибудет с тобой отвага и смелость. Только ты и Шерлок Холмс смогут распутать это сложное дело. Вперед!",
	picture: "http://quest.conversion.im/img/sherlock.jpg",
	url: "http://quest.conversion.im",

	vk: function() {
		url  = 'https://vk.com/share.php?';
		url += 'url='          + encodeURIComponent(this.url);
		url += '&title='       + encodeURIComponent(this.title);
		url += '&description=' + encodeURIComponent(this.description);
		url += '&image='       + encodeURIComponent(this.picture);
		url += '&noparse=true';
		Share.popup(url);
	},
	fb: function() {
		url  = 'https://www.facebook.com/sharer.php?';
		url += '&u='       + encodeURIComponent(this.url);
		url += '&title='     + encodeURIComponent(this.title);
		url += '&description='   + encodeURIComponent(this.description);
		url += '&picture=' + encodeURIComponent(this.picture);
		Share.popup(url);
	},
	tw: function() {
		url  = 'https://twitter.com/intent/tweet?';
		url += 'text='      + encodeURIComponent(this.title);
		url += '&url='      + encodeURIComponent(this.url);
		Share.popup(url);
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};