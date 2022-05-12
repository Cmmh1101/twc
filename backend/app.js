

const express = require('express');
const app = express();
const articles = require('./controllers/routes/articles');
const connectDB = require('./db/connect');
require('dotenv').config();


// middleware
app.use(express.static('./public'))
app.use(express.json());
 

// routes

app.use('/api/v1/articles', articles);

const port = 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}


start();



