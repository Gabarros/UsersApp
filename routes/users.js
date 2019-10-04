module.exports = (app) => {
    app.get('/users', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                name: 'Gabriel',
                idade: 23,
                id: 1
            }]
        });

    });

    app.get('/users/admin', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                name: 'Gabriel',
                idade: 23,
                type: "Admin",
                id: 1
            }]
        });


    });

};
