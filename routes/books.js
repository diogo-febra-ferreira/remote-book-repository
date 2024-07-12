const express = require('express');
const path = require('path');
const router = express.Router();
//const cors = require('cors');
//router.use(cors());

/* GET books page. */
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/webpages/bookList.html'));
});

router.get('/lorem-ipsum', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/books/lorem_ipsum.pdf'));
});

module.exports = router;