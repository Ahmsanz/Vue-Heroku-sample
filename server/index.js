const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const posts = require('./api/routes/posts')
const mongoose = require('mongoose');
const { mongoURI } = require('./config/config')
const db = mongoURI; 

const app = express(); 

// Middleware

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false})  // el segundo parámetro es el sugerido por mongo; el de confluence estará obsoleto pronto.
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

app.use('/api/posts', posts);
// initialize

app.listen(port, () => console.log(`server started on port ${port}`));


