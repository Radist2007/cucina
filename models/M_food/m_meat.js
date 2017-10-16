var async = require('async');

var mongoose = require('../../lib/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    meatName: {
        type: String,
        unique: true,
        required: true
    },
    meatProtein: {
        type: String,
        unique: true,
        required: true
    },
    meatFats: {
        type: String,
        unique: true,
        required: true
    },
    meatCarbohydrates: {
        type: String,
        unique: true,
        required: true,
        default: 'user'
    },
    meatCalories: {
        type: String,
        default: 'user'
    }
});

schema.statics = {

    createMeat: function(meatName, meatProtein, meatFats, meatCalories, callback){

        var Meat = this;

        var meat = new Meat({
            username: username,
            useremail: useremail,
            password: password,
            // rights: rights
        });

        meat.save(function(err){
            console.log(err);
            if (err) return callback(err);
            console.log('m_meat: meat created: ' + meat);
            callback (null, meat);
        });
    }
};

exports.Meat = mongoose.model('Meat', schema);