const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

const app = express();

const post = require ('./routes/api/post');

 const database = require('./keys/keys');

// connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(database.mongoURI,{
    useNewUrlParser:true
})
.then(()=>console.log('MongoDB connected'))
.catch(err => console.log(err));

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/post', post)

const port = 5000

app.get('/', (req, res) => {
    res.send('Home route working');
})

app.listen(port, console.log(`app running on port ${port}`));