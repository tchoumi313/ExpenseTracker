import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import  connectDB  from './config/db'
import authRouter from './routes/auth.routes';

const app = express();
const port = process.env.PORT;
app.use (express.json());


app.use('/api/auth',authRouter);

app.get('/', (req : Request, res : Response) => {
    res.send('hello rijo');
});

app.listen(port, () => {
    connectDB();
    console.log(`Example app listening at http://localhost:${port}`);
});

