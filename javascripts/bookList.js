const fs = require('fs');
const path = require('path');

function getBooksInfo() {
    return new Promise((resolve, reject) => {
        const booksList = [];

        fs.readdir(path.join(__dirname, '../public/books'), (err, files) => {
            if (err) {
                console.error('Error reading directory:', err);
                reject(err);
                return;
            }

            files.forEach(file => {
                booksList.push(file);
            });

            resolve(booksList);
        });
    });
}

module.exports = {
    getBooksInfo,
};