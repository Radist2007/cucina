var reception = require('./R_reception/r_reception');
var guest = require('./R_guest/r_guest');
var user = require('./R_user/r_user');
var admin = require('./R_admin/r_admin');

module.exports = function(app){
    console.log('index')

//admin
app.get('/admin', admin.get);

//user
app.get('/user/:name', user.get);
// app.get('/user/:name/main', user.get);
// app.get('/user/:name/menu', user.menu);
// app.get('/user/:name/dish', user.dish);
// app.get('/user/:name/meat', user.meat);
// app.get('/user/:name/statistics', user.statistics);

//guest
app.get('/', guest.get);
// app.get('/contacts', guest.contacts);
// app.get('/about', guest.about);

//reception
app.get('/reception', reception.get);
app.get('/reception/login', reception.login);
app.post('/reception/login', reception.loginPOST);
// app.get('/reception/logout', reception.logout);
app.get('/reception/registration', reception.registration);
app.post('/reception/registration', reception.registrationPOST);

};