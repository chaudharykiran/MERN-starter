const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const webpackConfig = require('../../webpack.config');

// create app
const app = express();
const compiler = webpack(webpackConfig);

// HMR(Hot Module Replacement)
if (process.env.NODE_ENV === 'development') {
    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: path.join(__dirname, '../../dist'),
        hot: true,
        historyApiFallback: true
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}

// MongoDB config and Connection
const config = require('./config/config')();
// Set native promises as mongoose promise
mongoose.Promise = global.Promise;
// Connection
mongoose.connect(config.dbUrl, (error) => {
    if (error) {
        console.error('Please make sure MongoDB is installed and running!');
        throw error;
    }
});

// Apply body parser and server public assets
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    limit: '20mb',
    extended: false
}))
app.use(express.static(path.resolve(__dirname, '../../dist')));

// view engine
// app.set('view engine', 'html');

//routes
app.all('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

module.exports = app;
