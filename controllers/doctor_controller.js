const Doctor = require('../models/Doctor');
const jwt = require('jsonwebtoken');

//doctor register controller action
module.exports.register = async function (req, res) {
    // console.log(req.body);
    try {
        let doctor = await Doctor.findOne({ Username: req.body.email });
        if (doctor) {
            return res.status(200).json({
                message: "Doctor is already registered ,please login",
                data: {
                    doctor: doctor
                }
            })
        }
        else {
            doctor = await Doctor.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                // speciality: req.body.speciality,
                phone: req.body.phone,
            });
            return res.status(200).json({
                message: 'You are successfully registered',
                data: {
                    doctor: doctor
                }
            })
        }
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({
            message: 'Internal error in registering'
        })
    }
}


// doctor login controller action
module.exports.login = async function(req,res){
    try{
        let doctor = await Doctor.findOne({email:req.body.email});
        if(!doctor || doctor.password != req.body.password){
            return res.status(422).json({
                message:"Invalid Username or Password",
            });
        }
        return res.status(200).json({
            message :"Logged in sucessfully",
            data:{
                token:jwt.sign(doctor.toJSON(),'secret',{expiresIn:'2000000'}),
            }
        })
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message:'Internal server Error'
        })
    }
}