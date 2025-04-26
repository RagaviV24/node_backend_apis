const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const productRoute=require('./routes/product.route');
const dotenv=require('dotenv');


dotenv.config();
// Middleware to parse JSON
app.use(express.json());

//  Test route
app.get('/ragavi', (req, res) => {
  res.send('hello Ragavi ...');
});


//route
app.use('/api/products',productRoute);



//  MongoDB connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((error) => console.log('Connection error:', error));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
