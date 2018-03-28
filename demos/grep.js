let shell = require('shelljs');

console.log( shell.ls('*.js').grep('_[0-9]{8}').toString() );
