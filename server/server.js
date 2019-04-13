const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

const server = express();
const port = process.env.PORT || 3000;

server.use(morgan('dev'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, '../public')));

server.use('/api', router);

server.listen(port, () => console.log(`Listening on port ${port}`));
