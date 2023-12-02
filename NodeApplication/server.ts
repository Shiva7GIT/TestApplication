import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { router } from './controller/controller';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use(router)

app.listen(port,()=>{
    console.log('server running')
    mongoose.connect("mongodb://127.0.0.1:27017/PRODUCT")
.then
    console.log('db connected')
})
