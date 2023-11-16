const User = require('../model/User');
console.log(User);
console.log(User.userInfo());

//GET/user
exports.user = (req, res) => {
    console.log(User.userInfo());

    res.render('user', {userInfo: User.userInfo()});
}