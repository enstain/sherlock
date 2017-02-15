function OptionsReader()
{
	this.game_data = GAME_OPTIONS;
	this.screens_data = SCREENS;
}

OptionsReader.prototype.returnGameOptions = function()
{
	return this.game_data;
}

OptionsReader.prototype.returnScreensOptions = function()
{
	return this.screens_data;
}