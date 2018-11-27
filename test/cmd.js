'use strict';

var qiaoPluginCli = require('../lib/qiao.plugin.cli');

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