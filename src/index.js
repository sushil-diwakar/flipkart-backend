const express = require("express");
const Connection = require('../Database/db.js');
const productRoutes = require("./routes/productdetails.js"); // Adjust the path as per your folder structure

const app = express();
const PORT = 8000;

//cors
const cors = require('cors');
app.use(cors({
    origin: "http://localhost:3000"
}));

//calling db connection function
Connection.connection();

// Middleware for parsing JSON
app.use(express.json());

// Use product routes
app.use("/api", productRoutes); // All routes will be prefixed with /api

// Example: /api/products or /api/products/:id

app.listen(PORT,()=>{
    console.log(`Server is listening port ${PORT}`);
})