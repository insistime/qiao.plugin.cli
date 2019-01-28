'use strict';

var qiaoPluginCli = require('../lib/qiao.plugin.cli.js');

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