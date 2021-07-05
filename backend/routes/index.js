const userRoute = require('./user.route');

const router = (app) => {
    app.get('/', (req, res) => {
        res.send('Server is running!');
    });
    app.use('/users', userRoute);
}

module.exports = router;