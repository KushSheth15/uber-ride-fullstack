const userModel = require("../models/user.model")

module.exports.createUser = async ({
    firstname,lastname,email,password
})=>{
    if( !email || !password){
        throw new Error("All 'fields are required!");
    }
    console.log("Service calling.....");
    const user =await userModel.create({
        fullName:{
            firstname,lastname
        },
        email,
        password
    })
    return user;
}