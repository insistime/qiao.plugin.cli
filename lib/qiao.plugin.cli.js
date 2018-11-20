'use strict';

var inquirer 	= require('inquirer');
var commander	= require('commander');

/**
 * ask
 * 	questions, https://github.com/SBoudrias/Inquirer.js
 */
exports.ask = function(questions){
	return inquirer.prompt(questions);
};

/**
 * cmd
 * 	commander, https://www.npmjs.com/package/commander
 */
exports.cmd = commander;