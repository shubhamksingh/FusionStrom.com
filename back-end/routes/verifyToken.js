const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next)=>{

 try{
    const authHeader = req.headers.token;
    if(authHeader){
        jwt.verify(req.headers.token, (err, next)=>{
            if(err) req.status(401).json('invalid token');
            else next(); 
        })        
    }
    else{
        res.status(401).json('You are not authenticated');
    }

 }catch(e){
    console.log(e.message);
    req.status(500).json('something went wrong')
 }

}


module.exports = verifyToken;