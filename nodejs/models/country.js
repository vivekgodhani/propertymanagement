const mongoose =require('mongoose');

var country = mongoose.model('country',{
    name:{type:String}
})

module.exports = {country};