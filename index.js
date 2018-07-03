require('dotenv').config()

const express = require('express')
const app = express()

const helmet = require('helmet');
const compression = require('compression');

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => res.render('home'))

app.listen(3000, () => console.log('Example app listening on port 4000!'))