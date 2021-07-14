const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.path === '/users/login' || req.path === '/users/register'){
        console.log('next')
        return next();
    }

    const authorizationHeader = req.headers['authorization'];
    
    const token = authorizationHeader.split(' ')[1].trim();
    if(!token) {
        res.status(401).json(err);
        return;
    }

    jwt.verify(token, "dobadov3", (err, data) => {
        if(err) {
            res.status(401).json(err);
            return;
        }else{
            next();
        }
    });

}