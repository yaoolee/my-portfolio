import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";  
import adminRoutes from "./routes/admin.js";
import apiRoutes from "./routes/api.js";
import cors from "cors";

const __dirname= import.meta.dirname;

const app = express();
const port= process.env.PORT || "3000";
dotenv.config();



app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI)

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://portfolio-one-eosin-91.vercel.app'
  ]
}));
app.use('/', adminRoutes);
app.use('/api', apiRoutes);




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});