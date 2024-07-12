import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import  connectDB  from './config/db'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello rijo');
});



app.listen(port, () => {
    connectDB();
    console.log(`Example app listening at http://localhost:${port}`);
});

