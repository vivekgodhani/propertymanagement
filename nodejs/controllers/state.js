const express = require('express');
var router =express.Router();

var {state}=require('../models/state');

router.get('/',(req,res)=>{
    state.find((err,docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log('u not sussece'+JSON.stringify(err,undefined,2));
    });
});
router.post('/',(req,res)=>{
    var u=new state({
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