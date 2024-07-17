const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');


const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, '../public/books/') }); // Specify destination folder for uploaded files

const auxJavascriptBooks = require('../javascripts/bookList');

//get the bookList page
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/webpages/bookList.html'));
});

//return a book by its name
router.get('/name/:bookName', function (req, res, next) {
    const bookName = req.params.bookName;

    res.sendFile(path.join(__dirname, '../public/books/' + bookName));
});

//get the titles of all books
router.get('/info', async function (req, res, next) {
    try {
        const result = await auxJavascriptBooks.getBooksInfo();
        res.json(result);

    } catch (error) {
        console.error('Error getting info data:', error);
        res.status(500).json({ error: 'Failed to retrieve info data.' });
    }
});

//upload a book
router.post('/upload', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            throw new Error('No file uploaded.');
        }

        let oldPath = req.file.path;
        let newPath = req.file.destination + req.file.originalname;

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                throw err;
            }

            res.send('File uploaded successfully. \n If it does not appear on thie list soon, refresh the page.');
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
});

module.exports = router;