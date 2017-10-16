
var Users = require('../models/M_people/m_user').User;
var Myconfig = require('../myconfig');
var async = require('async');

exports.commonMiddleware = function (req, res, next){

//====================================================================================//
//======================================= Языковые переменные =============================================//
//====================================================================================//

//====================================================================================//
//=================================== Параллельный запуск функций =================================================//
//====================================================================================//

    async.parallel([
        // getEnvironment,
        getUserRights,
        // getCurrentDate,
        // getConferences
    ], function(err){
        if (err){
            // log.error('------ Error ------ ' + err);
            console.log('common err');
            next();
        } else {
            console.log('common async next');
            next();
        }
    });

//====================================================================================//
//=================================== Переменные res.locals =================================================//
//====================================================================================//

   function getEnvironment(callback){

        var originalPageUrl = req.originalUrl;

        if (originalPageUrl.indexOf('?') != -1){
            originalPageUrl = originalPageUrl.substr(0, originalPageUrl.indexOf('?'));
        }
        res.locals.pageurl = req.protocol + '://' + req.get('host') + originalPageUrl;
        res.locals.currenthost = req.headers.host;
        res.locals.companyname = Myconfig.companyname;

        res.locals.language = language;
        res.locals.urltail = '';
        if (language != 'default'){
            res.locals.urltail = '?language=' + language;
        }
        res.locals.languages = Myconfig.languages;
        res.locals.locals = Myconfig.locals;

        res.locals.metatitle = '';
        res.locals.metadescription = '';
        res.locals.metakeywords = '';
        res.locals.socialimage = Myconfig.images.socialimage;

        res.locals.page = '';
        res.locals.pagination = null;

        res.locals.env = process.env.NODE_ENV;

        callback();
    }

//====================================================================================//
//=================================== Проверка прав администратора =================================================//
//====================================================================================//

    function getUserRights(callback){

        if (req.session.admin){

            Admin.findOne({_id: req.session.admin}, function(err, admin){

                if (admin){
                    console.log('common adminrights yes');
                    res.locals.adminrights = admin.rights;
                    res.locals.adminame = admin.username;

                } else {

                    console.log('common user no');
                    res.locals.adminrights = '';
                    res.locals.adminname = '';
                }

                callback();
            })

        } else if (req.session.user){

            Users.findOne({_id: req.session.user}, function(err, user){

                if (user){
                    console.log('common userRights yes');
                    res.locals.usergihts = user.rights;
                    res.locals.username = user.username;

                } else {

                    console.log('common user no');
                    res.locals.usergights = '';
                    res.locals.username = '';
                }

                callback();
            })

        } else {

            res.locals.usergights = '';
            res.locals.username = '';
            callback();
        }
    }


//====================================================================================//
//=================================== Переменные для текущего месяца и года =================================================//
//====================================================================================//

//====================================================================================//
//=================================== Сбор конференций для основного меню блога =================================================//
//====================================================================================//

};

