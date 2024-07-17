const express = require('express');
const path = require('path');
const router = express.Router();
//const cors = require('cors');
//router.use(cors());

const getBooksInfo = require('../javascripts/bookList');

router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/webpages/bookList.html'));
});

router.get('/name/:bookName', function (req, res, next) {
    const bookName = req.params.bookName;
    
    res.sendFile(path.join(__dirname, '../public/books/'+bookName));
});

router.get('/info', async function (req, res, next) {
    try {
        const result = await getBooksInfo();
        res.json(result);

    } catch (error) {
        console.error('Error getting info data:', error);
        res.status(500).json({ error: 'Failed to retrieve info data.' });
    }
});

module.exports = router;