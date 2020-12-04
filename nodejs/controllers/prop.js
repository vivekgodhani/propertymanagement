const express = require('express');
var router =express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {prop}=require('../models/prop');

const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${file.originalname}`)
    }
  })
  

  const upload = multer({ storage: storage })
  router.get('/',(req,res)=>{
    prop.find((err,docs)=>{
        if(!err)
        {
            console.log(docs);
            res.send(docs);
        }
        else
            console.log('u not sussece'+JSON.stringify(err,undefined,2));
    });
});

router.post('/',(req,res)=>{
    console.log(req.body.path)
    console.log(req.body.add)
    var u=new prop({
        title:req.body.title,
        description:req.body.description,
        path : req.body.path,
        country:req.body.country,
        state:req.body.state,
        city:req.body.city,
        add:req.body.add
    });
    u.save((err,doc)=>{
        if(!err)
        {
            console.log('u not sussece');
        }
        else
        console.log('u not sussece'+JSON.stringify(err,undefined,2));
    });
});

router.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log(req.body.name);
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file);
  })
module.exports= router;
