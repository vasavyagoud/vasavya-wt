const express =  require('express');
const route = express .Router();
route.get('/',(req,res) => {
    res.status(200);
    res.send('hello, world! in GET');
});
route.post('/',(req,res) => {
    res.status(201);
    res.send('hello,world! In POST');
});
module.exports = route;