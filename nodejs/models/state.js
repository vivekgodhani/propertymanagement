const mongoose =require('mongoose');

var state = mongoose.model('state',{
    name:{type:String}
})

module.exports = {state};