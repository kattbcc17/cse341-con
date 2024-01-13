var express = require('express');
var app = express();
var PORT = 3000;


app.use('/', require('./routes'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});