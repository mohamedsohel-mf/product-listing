const express = require('express');
const connectDB = require('./config/db');
const app = express();
const productRoutes = require('./routes/products');
//conncet to db
connectDB();


//init middleware for getting json object in controller
app.use(express.json({ extended: false }));

app.use('/api/v1', productRoutes);

if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("fe/build"));

    app.use("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "fe", "build", "index.html"));
    });
}
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));