const express = require('express');

const campsiteRouter = express.Router();

campsiteRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will send all the campsites to you');
})
.post((req,res)=>{
    res.end(`Will update the campsite:${req.body.name} and the description:${req.body.description}`);
})
.put((req,res)=>{
    res.statusCode=403;
    res.end('Put opertion is not support on /campsites');
})
.delete((req,res)=>{
    res.end('Will delete all the campsites');
});
campsiteRouter.route('/:campsiteId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end(`Will send detail of the campsite: ${req.params.campsiteId} to you.`);
})
.post((req,res)=>{
    res.statusCode=403;
    res.end(`Post operation not supported on /campsites/${req.params.campsiteId}.`);
})
.put((req,res)=>{
    res.end (`Updating the campsite : ${req.params.campsiteId} \n
        Will update the campsite : ${req.body.name}\n
        with the description : ${req.body.description}`);
})
.delete((req,res)=>{
    res.end(`Will delete the campsite: ${req.params.campsiteId}`);
})
module.exports=campsiteRouter;
