let shell = require('shelljs');

if (shell.which('git')) {

    shell.exec('git --version');

} else {

    console.log('you do not have git installed.');

}
