const jwt = require('jsonwebtoken');



const verifyToken = (req, res, next)=>{

 try{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if(err) req.status(401).json('invalid token');
            req.user = user;
            next();
        })        
    }
    else{
        res.status(401).json('You are not authenticated');
    }

 }catch(e){
    console.log(e.message);
    res.status(500).json('something went wrong')
 }

}


const verifyTokenAndAuthorization = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id == req.params.id || req.user.isAdmin){
             next();
        }
        else res.status(403).json('You are not allowed to do that')        
    });

}

const verifyTokenAndAdmin = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
             next();
        }
        else res.status(403).json('You are not allowed to do that')        
    });

}


module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}


