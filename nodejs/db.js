const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pms',{ 
    useNewUrlParser:true,
    useUnifiedTopology: true },(err)=>{
    if(!err)
        console.log('sussece');
    else
        console.log('not sussece'+JSON.stringify(err,undefined,2));
});
module.exports = mongoose;