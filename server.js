const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const moment = require('moment');

//APPS----
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(flash());
app.use(express.json());
app.use(express.static( __dirname + '/author/dist/author' ));

app.use(session({
    secret: 'sessionsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
//APPS ----
 
 
 //MONGOOSE CONNECTION
 mongoose.connect('mongodb://localhost/authors', {useNewUrlParser: true});
 // ---------
 require('./server/config/routes.js')(app)
 app.listen(8000, () => console.log("listening on port 8000"));