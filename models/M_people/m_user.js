var crypto = require('crypto');
var async = require('async');

var mongoose = require('../../lib/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },
    useremail: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        unique: true
    },
    rights: {
        type: String,
        default: 'user'
    }
});

schema.virtual('password')
.set(function(password){

    this.salt = "salt.virtual"
    // this.salt = Math.random() + 'salt';
    this.hashedPassword = this.encryptPassword(password);
})

.get(function(){

    return 'virtual.password'
});


schema.methods = {
    
    encryptPassword: function (password) {

        return password;
        // return crypto.createHmac('sha256', this.salt).update(password).digest('hex');
    },
    checkPassword: function (password) {

        return true;
        // return this.encryptPassword(password) === this.hashedPassword;
    }
};

schema.statics = {

    authorize: function(username, password, callback){
        console.log('M_USER authorize');
        var User = this;

        async.waterfall([
            function(callback){
        console.log('M_USER authorize async1');
                if (username){
                    User.findOne({username: username}, callback);
                }
            },
            function(user, callback){
        console.log('M_USER authorize async2');
                if (user){

                    console.log('M_USER authorize async2 if');
                    if (user.checkPassword(password)){
                        console.log('M_USER authorize async2 if user.checkPassword');
                        callback(null, user);
                    } else {
                        callback(403);
                        console.log('M_USER authorize async2 if user.checkPassword else');
                    }
                } else {
                    callback(403);
                }
            }
        ], callback);
    },
    createUser: function(username, useremail, password, callback){

        var User = this;

        var userFilter = /^([a-zA-Z0-9_\-])+$/;
        // var emailFilter = /^([a-zA-Z0-9_\-])+$/;
        var passFilter = /^[a-zA-Z0-9,!,%,&,@,#,$,\^,*,?,_,~,+]*$/;

        async.waterfall([
            function(callback){
                if (!userFilter.test(username)) {
                    callback('userError');
                } else {
                    callback(null);
                }
            },
            function(callback){
                if ((!passFilter.test(password)) || (password.length < 4)) {
                    callback('passwordError');
                } else {
                    callback(null);
                }
            },
            function(callback){
                User.findOne({username:username}, function(err, user){
                    if (user) {
                        callback('doubleUser');
                    } else {
                        callback(null);
                    }
                });
            }
        ],
        function(err){

            if (err){
                callback(err);
            } else {

                var user = new User({
                    username: username,
                    useremail: useremail,
                    password: password,
                    // rights: rights
                });

                user.save(function(err){
                    console.log(err);
                    if (err) return callback(err);
                    console.log('m_suer: user created: ' + user);
                    callback (null, user);
                });
            }
        });
    }
};

exports.User = mongoose.model('User', schema);