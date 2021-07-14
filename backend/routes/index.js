const userRoute = require('./user.route');
const postRoute = require('./post.route');

const router = (app) => {
    app.get('/', (req, res) => {
        res.send('Server is running!');
    });
    app.use('/users', userRoute);
    app.use("/posts", postRoute);
}

module.exports = router;