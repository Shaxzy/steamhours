    var steamClientFactory = require('./steamClient.js');
    var configsArray = [];
    var config;
    var botArray = [];
    
    config = {};
    config.username = 'nick1';
    config.password = 'pass1';
    config.sharedSecret = ''; //Shared Secret(for 2FA only) https://github.com/Jessecar96/SteamDesktopAuthenticator/releases
    config.games = [730,440,570]
    configsArray.push(config);
	
    config = {};
    config.username = 'nick2';
    config.password = 'pass2';
    config.sharedSecret = ''; //Shared Secret(for 2FA only) https://github.com/Jessecar96/SteamDesktopAuthenticator/releases
    config.games = [730,440,570]
    configsArray.push(config);
	
	
	
    console.log('Number of configurations set up: ' + configsArray.length);
     
    for	(index = 0; index < configsArray.length; index++) {
    	var config = configsArray[index];
		
		var bot = steamClientFactory.buildBot(config);
		bot.doLogin();
		botArray.push(bot);
    }
     
    console.log('Running ' + botArray.length + ' bots.');
