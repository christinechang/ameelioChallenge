let fs = require('fs');
// const URL = 'https://drive.google.com/file/d/1W2fctaQGHKuJP0fm6OI3SMAzLQ8b1SVp/view';

const FILE_NAME = './assets/books.json';

let bookRepo = {
    get: function(resolve, reject) {
        fs.readFile(FILE_NAME, function(err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    },
    insert: function (newData, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                let books = JSON.parse(data);
                books.push(newData);
                fs.writeFile(FILE_NAME, JSON.stringify(books), function(err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(newData);
                    }
                });
            }   
        });
    },
};

module.exports = bookRepo;