var User = require('../../models/M_people/m_user').User;
var myconfig = require('../../myconfig');

exports.get = function(req, res) {

    res.render('./V_reception/v_reception');
}

exports.login = function(req, res) {

    res.render('./V_reception/v_reception_login');
}

exports.loginPOST = function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

    User.authorize(username, password, function(err, user){

        if (err){
            if (err === 403){
                console.log('login err auth: ' + myconfig.messages.error.auth);
                res.send({mess: myconfig.messages.error.auth});
            }else{
                console.log('login err db: ' + myconfig.messages.error.db);
                res.send(myconfig.messages.error.db);
            }
        } else {

            req.session.user = user._id;
            req.session.username = user.username;
            console.log('logined: ' + user._id);
            console.log('logined: ' + user.username);
            var link = "/user/" + username;
            console.log('link: ' + link);
            res.send({link: link});
        }
    });
    // res.redirect('/user/' + username);
}

exports.registration = function(req, res) {

    res.render('./V_reception/v_reception_registration');
}

exports.registrationPOST = function(req, res) {

    console.log('r_reception.registrationPOST: ');

    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    function checkUser(){

        User.authorize(username, password, function(err, user){

            if (err){
                if (err === 403){
                    console.log('registered err auth: ' + myconfig.messages.error.auth);
                    res.send({mess: myconfig.messages.error.auth});
                }else{
                    console.log('registered err db: ' + myconfig.messages.error.db);
                    res.send(myconfig.messages.error.db);
                }
            } else {

                req.session.user = user._id;
                req.session.username = user.username;
                console.log('registered: ' + user._id);
                console.log('registered: ' + user.username);
                var link = "/user/" + username;
                console.log('link: ' + link);
                res.send({link: link});
            }
        });
    }

    User.createUser(username, email, password, function(val, val2){
        checkUser();
    });
}