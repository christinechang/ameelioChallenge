let fs = require('fs');

const FILE_NAME = './assets/100_books.json';

let bookRepo = {
    get: function(resolve, reject) {
        fs.readFile(FILE_NAME, function(err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
                console.log('get books', JSON.parse(data)[0].title);
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