const express = require('express');

const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');

const app = express();
//TODO put this in the env
const PORT = 3000;

app.use('/', indexRouter);
app.use('/books', booksRouter);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

module.exports = app;
