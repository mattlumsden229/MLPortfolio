const path = require('path');
const express = require('express');
const app = express();

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is live on ${process.env.PORT}`);
});