const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectMongoose = require('./configs/mongodb');
const router = require('./routes/index')
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
connectMongoose();

router(app);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
