const express = require('express');
const { set } = require('mongoose');
var router =express.Router();

var {user}=require('../models/user');

router.get('/',(req,res)=>{
    p=req.query.id
    console.log(p);
    var q={email:p}
    user.findOne(q,(err,docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log('u not sussece'+JSON.stringify(err,undefined,2));
    });
});
router.post('/login',(req,res)=>{
    console.log('in logine');
    var uname= req.body.email;
    var pass = req.body.password;
    console.log('in logine'+uname+"  "+pass);
    var query = { email:uname,password:pass };
    user.findOne(query, function(err, docs) {
        if(!err)
            res.send(docs);
        else
            console.log('u not sussece'+JSON.stringify(err,undefined,2));
      });
});
router.post('/',(req,res)=>{
    var u=new user({
        email:req.body.email,
        password:req.body.password,
        name : req.body.name,
        dbo:req.body.dbo,
        add:req.body.add,
        country:req.body.country,
        state:req.body.state,
        city:req.body.city
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
router.put('/:id', (req, res) => {
    var emp = {
        email:req.body.email,
        password:req.body.password,
        name : req.body.name,
        dbo:req.body.dbo,
        add:req.body.add,
        country:req.body.country,
        state:req.body.state,
        city:req.body.city
    };
    user.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports= router;
