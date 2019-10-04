let express = require('express');
let routes = express.Router();



routes.get('/', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users:[{
            name: 'Gabriel',
            idade: 23,
            id: 1
        }]
    });

});

routes.get('/admin',(req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users:[{
            name: 'Gabriel',
            idade: 23,
            type: "Admin",
            id: 1
        }]
    });


})

module.exports = routes;
