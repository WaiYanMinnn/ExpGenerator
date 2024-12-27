const express = require('express');

const Partner= require('../models/partner');
const partnerRouter = express.Router();

partnerRouter.route('/')

.get((req,res,next)=>{
    Partner.find()
    .then(partners=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(partners);
    })
    .catch(err=>next(err));
})
.post((req,res,next)=>{
    Partner.create(req.body)
    .then(partner=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(partner);
    })
    .catch(err=>next(err));
})
.put((req,res)=>{
    res.statusCode=403;
    res.end('Put opertion is not support on /partners');
})
.delete((req,res,next)=>{
    Partner.deleteMany()
    .then(response=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(response);
    })
    .catch(err=>next(err));
});
partnerRouter.route('/:partnerId')
.get((req,res,next)=>{
    Partner.findById(req.params.partnerId)
    .then(partner=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(partner);
    })
    .catch(err =>next(err));
})
.post((req,res)=>{
    res.statusCode=403;
    res.end(`Post operation not supported on /partners/${req.params.partnerId}.`);
})
.put((req,res,next)=>{
    Partner.findByIdAndUpdate(req.params.partnerId,{$set:req.body},{new:true})
    .then(partner=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(partner);
    })
    .catch(err => next(err));
})
.delete((req,res,next)=>{
    Partner.findByIdAndDelete(req.params.partnerId)
    .then(response=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(response);
    })
    .catch(err=>next(err));
});
// partnerRouter.route('/:partnerId/comments')
// .get((req,res,next)=>{
//     Partner.findById(req.params.partnerId)
//     .then(partner=>{
//         if(partner){
//             res.statusCode=200;
//             res.setHeader('Content-Type','application/json');
//             res.json(partner.comments);
//         }
//         else{
//             err=new Error(`partner ID ${req.params.partnerId} is not valid`);
//             err.statusCode=404;
//             return next(err);
//         }
//     })
//     .catch(err =>next(err));

// })
// .post((req,res,next)=>{
//     Partner.findById(req.params.partnerId)
//     .then(partner=>{
//         if(partner){
//             partner.comment.push(req.body);
//             partner.save()
//             .then(partner=>{
//                 res.statusCode=200;
//                 res.setHeader('Content-Type','application/json');
//                 res.json(partner.comments);
//             })
//             .catch(err =>next(err));
//         }
//         else{
//             err = new Error(`Partner ${req.params.partnerId} is not found`);
//             err.statusCode=404;
//             return next(err);
//         }
//     })
//     .catch(err=>next(err));

// })
// .put((req,res)=>{
//     res.statusCode=403;
//     res.end(`put operation is not supported on /partner/${req.params.partnerId}/comments`);
// })
// .delete((req,res,next)=>{
//     Partner.findById(req.params.partnerId)
//     .then(partner=>{
//         if (partner){
//             for (i=partner.comments.length-1;i>=0;i--){
//                 partner.comments.id(partner.comments[i]._id).deleteOne();
//             }
//             partner.save()
//             .then(partner=>{
//                 res.statusCode=200;
//                 res.setHeader('Content-Type','application/json');
//                 res.json(partner.comments);
//             })
//             .catch(err => next(err));
//         }
//         else{
//             err= new Error(`Partner ${req.params.partnerId} is not found`);
//             err.statusCode=404;
//             return next(err);
//         }
//     })
//     .catch(err => next(err));

// })
// Partner.route('/:partnerId/comments/:commentId')
// .get((req,res,next)=>{
//     Partner.findById(req.params.partnerId)
//     .then(partner=>{
//         if (partner && partner.comments.id(req.params.commentId)){
//             res.statusCode=200;
//             res.setHeader('Content-Type','application/json');
//             res.json(partner.comments.id(req.params.commentId));
//         }
//         else {
//             err= new Error(`Partner ${req.params.partnerId} was not found`);
//             err.statusCode=404;
//             return next(err);
//         }
//     })
//     .catch(err =>next(err));

// })
// .post((req,res,next)=>{
//     res.statusCode=403;
//     res.end(`This operation is not support on partner/${req.params.partnerId}/comments/${req.params.commentId}`);

// })
// .put((req,res,next)=>{
//     Partner.findById(req.params.partnerId)
//     .then(partner=>{
//         if(partner && partner.comments.id(req.params.commentId)){
//             if(req.body.)
//         }
//     })

// })
// .delete((req,res,next)=>{

// })
module.exports=partnerRouter;
