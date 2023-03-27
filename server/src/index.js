import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';
import { photographsRouter } from './routes/photographs.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/photographs", photographsRouter);

mongoose.connect("mongodb+srv://nachevaantoniya:naturephotographs@photographs.tfgdidn.mongodb.net/photographs");

app.listen(3001, () => console.log("Server started!"));
