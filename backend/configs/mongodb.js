const mongoose = require('mongoose');

const connect = () => {
    mongoose
        .connect(
            "mongodb+srv://dobadov3:dobadov3333@cluster0.ao976.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("DB is connected");
        })
        .catch((err) => console.log(err));
};

module.exports = connect;