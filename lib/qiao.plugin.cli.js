'use strict';

var inquirer = require('inquirer');

/**
 * ask
 * 	questions, https://github.com/SBoudrias/Inquirer.js
 */
exports.ask = function(questions){
	return inquirer.prompt(questions);
};