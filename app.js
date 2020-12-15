import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";

import mealRoutes from "./routes/meals";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/', mealRoutes);


app.listen(port);