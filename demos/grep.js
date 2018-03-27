let shell = require('shelljs');

console.log( shell.ls('*.js').grep('app_').toString() );
