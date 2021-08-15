const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const config = require('./config/key');
const passport = require('./config/passport');

mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology : true, 
    useCreateIndex : true, 
    useFindAndModify :false,
})
.then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err));

ddd

const app = express();
app.get('/', (req, res) => res.send("Hello, World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 
