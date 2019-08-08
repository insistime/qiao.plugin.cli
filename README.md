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
1. colors
2. progress
3. inquirer
4. commander

## documentation
1. colors, https://www.npmjs.com/package/colors
2. progress, https://www.npmjs.com/package/progress
3. inquirer, https://github.com/SBoudrias/Inquirer.js
4. commander, https://www.npmjs.com/package/commander

# api
## colors
```javascript
'use strict';

var qiaoPluginCli = require('qiao.plugin.cli');

// colors
console.log(qiaoPluginCli.colors.green('hello'));
```

## progress
```javascript
'use strict';

var qiaoPluginCli = require('qiao.plugin.cli');

var test = function(){
	var bar		= new qiaoPluginCli.progress(':bar', { total: 10 });
	var timer 	= setInterval(function () {
		bar.tick();
		
		if(bar.complete){
			console.log('\ncomplete\n');
			clearInterval(timer);
		}
	}, 100);
};

test();
```

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

## cmd
```javascript
'use strict';

var qiaoPluginCli = require('qiao.plugin.cli');

// cmd
qiaoPluginCli.cmd
	.version('0.0.1', '-v, --version')
	.usage('<command> [options]')
	.description('qiao.plugin.cli is a nodejs cli tool')
	.command('test <dir>')
	.option('-s --ss', 'ss')
	.action(function(dir, options){
		console.log(dir, options);
	});

// parse
qiaoPluginCli.cmd.parse(process.argv);
```

# version
## 0.0.6.20190808
1. update npms

## 0.0.5.20190128
1. add progress

## 0.0.4.20190109
1. update inquirer@6.2.1
2. add colors 

## 0.0.3.20181127
1. cmd.js
2. add.js

## 0.0.2.20181120
1. add commander

## 0.0.1.20181023
1. init project
2. add inquirer
3. add ask method
