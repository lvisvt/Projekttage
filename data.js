const fs = require('fs')

function read() {
    return JSON.parse(fs.readFileSync('data.json'))
}

function write(data) {
    fs.writeFileSync('data.json', JSON.stringify(data))
}

module.exports = { read, write }