require('dotenv').config();
const express = require('express')
const cors = require('cors')
const connectDB = require('./db/db');
const routes = require('./routes/routes')
const app = express()
app.use(express.json())
app.use(cors())
app.use("",routes);
connectDB();

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("Listening on server "+PORT)
});

