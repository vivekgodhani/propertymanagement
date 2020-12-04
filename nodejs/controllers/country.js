const express = require('express');
var router =express.Router();

var {country}=require('../models/country');

router.get('/',(req,res)=>{
    country.find((err,docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log('u not sussece'+JSON.stringify(err,undefined,2));
    });
});
router.post('/',(req,res)=>{
    var u=new country({
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