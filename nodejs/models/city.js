const mongoose =require('mongoose');

var city = mongoose.model('city',{
    name:{type:String}
})

module.exports = {city};