const express = require('express');
require('dotenv').config()

const indexRouter = require('./routes/indexRouter');
const booksRouter = require('./routes/booksRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', indexRouter);
app.use('/books', booksRouter);

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);

module.exports = app;
