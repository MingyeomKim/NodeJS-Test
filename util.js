const util = {};

util.parseError = function(errors){

}

// 로그인 상태를 파악, 로그인이 되지 않은 경우 에러 메세지 띄우기(route에서 cb로 사용될 함수이다. )
util.isLoggedin = function(req, res, next){
    if(req.isAuthenticated()){ // passport에서 제공하는 함수.
        next();
    }
    else{ // 로그인이 되어있지 않으면 로그인 페이지로 redirect
        req.flash('errors', {login : 'Please login first'});
        res.redirect('/login');
    }
}

// ?
util.noPermission = function(req,res){
    req.flash('errors', {login : "You don't have permission"});
    req.logout();
    res.redirect('/login');
}

module.exports = util;