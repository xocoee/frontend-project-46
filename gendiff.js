#!/usr/bin/env node

const { Command } = require('commander'); 
const program = new Command();

program
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number')
    //.option('-h, --help', 'output usage information')
    .option('-f, --format <type>', 'output format')
    .arguments('<filepath1> <filepath2>');

program.parse();

const options = program.opts();
const version = '0.0.1'
if (options.version) console.log(version);
