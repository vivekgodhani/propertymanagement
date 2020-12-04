const express = require('express');
const bodyparser =  require('body-parser');
const {mongoose} = require('./db.js');
var userc=require('./controllers/userc.js');
var propc=require('./controllers/prop.js');
var country=require('./controllers/country.js');

var state=require('./controllers/state.js');

var city=require('./controllers/city.js');
const cors=require('cors');

var app = express();
app.use(bodyparser.json());
app.use(cors({ origin : 'http://localhost:4200'}));
app.listen(3000,()=> console.log('server start at :3000'));
app.get('/',(req,res)=>{
    res.json({"Vivek":"name","age":21})
});
app.use('/user',userc);
app.use('/country',country);
app.use('/prop',propc);
app.use('/city',city);
app.use('/state',state);