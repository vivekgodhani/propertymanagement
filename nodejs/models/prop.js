const mongoose =require('mongoose');

var prop = mongoose.model('prop',{
    title:{type:String}, 
    description:{type:String}, 
    path:{type:String},
    country:{type:String}, 
    state :{type:String},
    city:{type:String} ,
    add:{type:String} 
})
module.exports = {prop};
