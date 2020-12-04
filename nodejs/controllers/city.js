const express = require('express');
var router =express.Router();

var {city}=require('../models/city');

router.get('/',(req,res)=>{
    city.find((err,docs)=>{
        if(!err)
        {
            console.log('u  sussece');
            res.send(docs);
        }
        else
            console.log('u not sussece'+JSON.stringify(err,undefined,2));
    });
});
router.post('/',(req,res)=>{
    var u=new city({
        name:req.body.name
    });
    u.save((err,doc)=>{
        if(!err)
        {
            res.send(doc);
            console.log('u not sussece');
        }
        else
        console.log('u not sussece'+JSON.stringify(err,undefined,2));
    });
});
module.exports= router;