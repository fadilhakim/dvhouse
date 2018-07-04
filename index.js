require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const http = require('http');
const routes = require('./routes/routes.js')
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const helmet = require('helmet');
const compression = require('compression');

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))

routes(app);

const port = process.env.PORT || 80;
app.listen(port, () => console.log('Example app listening on port 3000!'))