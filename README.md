# urls
## homepage
[https://code.insistime.com/qiao.plugin.cli](https://code.insistime.com/qiao.plugin.cli)

## github
[https://github.com/insistime/qiao.plugin.cli](https://github.com/insistime/qiao.plugin.cli)

## npm
[https://www.npmjs.com/package/qiao.plugin.cli](https://www.npmjs.com/package/qiao.plugin.cli)

# started
## install
npm install qiao.plugin.cli

## dependencies
1. inquirer

## documentation
1. inquirer, https://github.com/SBoudrias/Inquirer.js

# api
## ask
```javascript
'use strict';

var qiaoPluginCli = require('qiao.plugin.cli');

var test = async function(){
	var questions = [{
	    type	: 'list',
	    name	: 'type',
	    message	: 'What type of code do you want to generate?',
	    choices	: ['front', 'server', 'manage']
	}];
	
	var answers = await qiaoPluginCli.ask(questions);
	console.log(answers);
};

test();
```

# version
## 0.0.2.20181120
1. add commander

## 0.0.1.20181023
1. init project
2. add inquirer
3. add ask method