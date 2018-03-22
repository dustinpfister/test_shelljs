let shell = require('shelljs');

if (shell.which('mongod')) {

    console.log('looks like mongo db is installed');

} else {

    console.log('mongo db is not installed.');

}
