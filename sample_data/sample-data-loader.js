const fs = require('fs');

module.exports = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('sample_data/sample-data.json', (err, data) => {
            return err ? reject(err) : resolve(JSON.parse(data));
        });
    });
};
