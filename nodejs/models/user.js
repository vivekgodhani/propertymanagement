const mongoose =require('mongoose');

var user = mongoose.model('user',{
    email:{type :String},
    password:{type :String},
    name : { type:String },
    dbo:{type:String},
    add:{type:String},
    country:{type:String},
    state:{type:String},
    city:{type:String}
})
module.exports = {user};