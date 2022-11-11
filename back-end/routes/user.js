const router = require('express').Router();


router.get('/usertest', (req, res)=>{
    res.send('user test is successful');
})


router.post('/userposttest', (req, res)=>{
    console.log(req.body.username);
    res.send('user your username is'+ req.body.username);

})


module.exports = router;