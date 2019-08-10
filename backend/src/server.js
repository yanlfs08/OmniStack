const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ezk8k.mongodb.net/omnistack?retryWrites=true&w=majority', {
  useNewUrlParser: true
});
server.use(express.json());
server.use(routes);

server.listen(3333);
