
var myconfig = {};

myconfig.gmail = {
    user: 'radist2007test@gmail.com',
    password: 'rhfcjdcrfzgmail.com'
};

myconfig.port = 7000;
myconfig.companyname = "radist2007";
myconfig.homepath = "";


myconfig.mongoose = {
    uri: "mongodb://127.0.0.1/cucina",
    options: {
        server: {
            socketOptions: {
                keepAlive: 1
            }
        }
    }
};

myconfig.session = {
    "secret": "nodeJSForever",
    "key": "sid",
    "cookie": {
        "httpOnly": true,
        "maxAge": null
    }
};

myconfig.messages = {
    error: {
        auth: "Неверное имя пользователя или пароль",
        db: "Ошибка базы данных"
    }
};
module.exports = myconfig;