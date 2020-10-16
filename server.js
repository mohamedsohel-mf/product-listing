const express = require('express');
var cors = require('cors')
const connectDB = require('./config/db');
const app = express();
const productRoutes = require('./routes/products');
app.use(cors())
//conncet to db
connectDB();

//init middleware for getting json object in controller
app.use(express.json({ extended: false }));

// cors
console.log("hiii");
// app.use((req, res, next) => {
//     console.log('inside', res);
//     // Allows all websites
//     res.header("Access-Control-Allow-Origin", "*");
  
//     // Allows only this website
//     // res.header("Access-Control-Allow-Origin", "https://mywebsite.com");
  
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE")
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With,Content-Type,Authorization, Accept, XMLHttpRequest","*"
//     );
//     if (req.method === "OPTIONS") {
//         res.header("Access-Control-Allow-Headers", "*");
//       res.header("Access-Control-Allow-Headers", "GET,PUT,POST,PATCH,DELETE");
//       res.status(200).json({});
//     }
//     next();
//   });
// app.get('/api/v1/products/:filter', function (req, res, next) {
//     console.log('hiiii');
//     res.json({msg: 'This is CORS-enabled for all origins!'})
//   })  
app.use('/api/v1', productRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));