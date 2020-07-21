# shaxzyhours
Hourboost software for Steam. Can be used to increase your hours in CSGO, TF2, DOTA 2 or whatever game you want on several accounts simultaneously. Can be run on linux and windows OS using Nodejs.


running:
```
git clone https://github.com/Shaxzy/shaxzyhours.git
npm install
node IdlerConfig
```
enter your steam accounts credentials in IdlerConfig.js
```
config.username = 'nick1';
config.password = 'pass1';
```
choose what games you want to idle IdlerConfig.js
```
config.games = [730,440,570]
```
730 = csgo
game id's can be found here: https://steamdb.info/apps/
