const User = require('../models/user.model');

module.exports.register = async (req, res) => {
   try{
       var newUser = await User.create(req.body); 
       res.status(200).json(newUser);
   }catch(err){
        res.status(500).json(err);
   }
}

module.exports.login = async (req, res) => {
    res.send('LOGIN')
}