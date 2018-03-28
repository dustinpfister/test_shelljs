let shell = require('shelljs');

shell.exec('git --version', function (code, out, err) {

    if (code === 0) {

        let regex = out.match(/\d.\d.\d/);

        if (regex) {

            let v = regex[0].split('.');

            if (v[0] >= 2 && v[1] >= 8) {

                console.log('Using 2.8.x or later I see, good.');

            } else {

                console.log('kicking it old school? Okay, fine, see if I care.');

            }

        } else {

            console.log('ahhh... hua?');

        }

    } else {

        console.log('what!? really?');
        console.log(err);

    }

});
