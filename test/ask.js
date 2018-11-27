'use strict';

var qiaoPluginCli = require('../lib/qiao.plugin.cli.js');

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