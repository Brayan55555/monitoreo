const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');

const app = express();
//importing routes
const customerRoutes = require('./routes/customer');

//settings
app.set('port', process.env.PORT || 3100);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: '192.168.0.108',
    user: 'user',
    password: 'password',
    port: 3306,
    database: 'db'
}, 'single'));
app.use(express.urlencoded({extended: false}));
// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// startingf the server
app.listen(app.get('port'), () => {
    console.log('Server is running on port 3000');
});