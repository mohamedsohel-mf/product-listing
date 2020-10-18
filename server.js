const express = require('express');
const connectDB = require('./config/db');
const app = express();
const productRoutes = require('./routes/products');
//conncet to db
connectDB();


//init middleware for getting json object in controller
app.use(express.json({ extended: false }));

app.use('/api/v1', productRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));