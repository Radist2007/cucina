
exports.get = function(req, res) {

    if(res.locals.username){
        console.log('r_user: ' + res.locals.username);
    }

    res.render('./V_user/v_user', {user: true});
}
