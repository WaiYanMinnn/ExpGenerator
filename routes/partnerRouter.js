const express = require('express');

const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will send all the partners to you');
})
.post((req,res)=>{
    res.end(`Will update the partner:${req.body.name} and the description:${req.body.description}`);
})
.put((req,res)=>{
    res.statusCode=403;
    res.end('Put opertion is not support on /partners');
})
.delete((req,res)=>{
    res.end('Will delete all the partners');
});
partnerRouter.route('/:partnerId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end(`Will send detail of the partner: ${req.params.partnerId} to you.`);
})
.post((req,res)=>{
    res.statusCode=403;
    res.end(`Post operation not supported on /partners/${req.params.partnerId}.`);
})
.put((req,res)=>{
    res.end (`Updating the partner : ${req.params.partnerId} \n
        Will update the partner : ${req.body.name}\n
        with the description : ${req.body.description}`);
})
.delete((req,res)=>{
    res.end(`Will delete the partner: ${req.params.partnerId}`);
})
module.exports=partnerRouter;
