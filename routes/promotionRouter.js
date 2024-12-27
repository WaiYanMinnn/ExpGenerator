const express=require('express');

const promotionRouter= express.Router();
const Promotion= require('../models/promotion');
const partnerRouter = require('./partnerRouter');
const { response } = require('../app');

promotionRouter.route('/')
.get((req,res,next)=>{
    Promotion.find()
    .then(promotion=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(promotion);
    })
    .catch(err => next(err));
})
.post((req,res)=>{
    Promotion.create(req.body)
    .then(promotion=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(promotion);
    })
    .catch(err => next(err));

})
.put((req,res)=>{
    res.statusCode=403;
    res.end('Put operation is not support in this promotions route');
})
.delete((req,res)=>{
    Promotion.deleteMany()
    .then(response=>{
        res.statusCode=200;
        res.setHeader('Content-type','application/json');
        res.json(response);
    })
    .catch(err => next(err));
});
promotionRouter.route('/:promotionId')
.get((req,res)=>{
    Promotion.findById(req.params.promotionId)
    .then(promotion=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(promotion);
    })
    .catch(err => next(err));
})
.post((req,res)=>{
    res.statusCode=403;
    res.end(`Post operation is not support in this promotion:${req.params.promotionId}.`);
})
.put((req,res,next)=>{
    Promotion.findByIdAndUpdate(req.params.promotionId,{$set:req.body},{new:true})
    .then(promotion=>{
        res.statusCode=200;
        res.setHeader('Content-type','application/json');
        res.json(promotion);
    })
    .catch(err => next(err));

})
.delete((req,res,next)=>{
    Promotion.findByIdAndDelete(req.params.promotionId)
    .then(response=>{
        res.statusCode=200;
        res.setHeader('Content_type','application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports=promotionRouter;