const express=require('express');

const promotionRouter= express.Router();

promotionRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will send all the promotions to you');
})
.post((req,res)=>{
    res.end(`Will update the promotions:${req.body.name} with the description ${req.body.description}`);

})
.put((req,res)=>{
    res.statusCode=403;
    res.end('Put operation is not support in this promotions route');
})
.delete((req,res)=>{
    res.end('Will delete all the promotions ');
});
promotionRouter.route('/:promotionId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end(`Will send detail of the promotion : ${req.params.promotionId}. `);
})
.post((req,res)=>{
    res.statusCode=403;
    res.end(`Post operation is not support in this promotion:${req.params.promotionId}.`);
})
.put((req,res)=>{
    res.end(`Will update the promotions with name :${req.body.name} and description:${req.body.description}.`);
})
.delete((req,res)=>{
    res.end(`Will delete the promotion:${req.params.promotionId}`);
});

module.exports=promotionRouter;