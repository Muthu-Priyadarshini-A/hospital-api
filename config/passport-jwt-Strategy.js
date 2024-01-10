const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/Doctor');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}


//JWT authentication Strategy
passport.use(new JWTStrategy(opts, async function (jwtPayLoad, done) {

try{
    let user = await Doctor.findById(jwtPayLoad._id)
    if(user){
        return done(null,user);
    }else{
        return done(null, false)
    }


}catch(err){
    console.log('Error in finding user from JWT');
    return;
}


}));

module.exports = passport;