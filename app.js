const express = require('express');
const morgan = require('morgan');

const userRoutes = require('./routes/userroutes');

require('dotenv').config();
const mongoose = require('mongoose');
//or
// const dotenv = require('dotenv');
const app = express();
// dotenv.config();
//console.log('env-----------', process.env.CREDIT_CARD);

//const ejs = require('ejs');

//const user = require('./models/user');
const port = process.env.PORT || 9000;

app.set('view engine', 'ejs');

app.use(express.json());
//to pass data from frontend to backend
app.use(express.urlencoded({extended: true}));
app.use(express.static('uploads'));
app.use(morgan('dev'));



mongoose.connect(process.env.MONGO_URL).then((result) => {
    if(result) console.log('Connected to Mongodb');
    else console.log('No Connection to Mongodb');
}).catch((error) => console.log(error)
 )

 // const dBconnect = async() => {
     //     try {
         //         const connect = await mongoose.connect(mongourl)
         //         if(connect) console.log('mongodb connected');
         //     } catch(error) {
             //         console.log(error)
             //     }
             // }
             
             // dBconnect();
             app.use(userRoutes);
             
             app.listen(port, () => console.log(`Server runs on port ${port}`));
