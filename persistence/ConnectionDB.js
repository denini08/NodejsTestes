const mongoose = require('mongoose')
const dbconfig = require('../config/db.json')
let mongoConn = null

mongoose.Promise = global.Promise;

(() => {
    const url = 'mongodb://' + dbconfig.address + ':' + dbconfig.port + '/' + dbconfig.db
    mongoConn = mongoose.createConnection(url, (err) => {
        if (err) {
            throw Error(err)
        }
        console.log('connectado ao DB, GGizi')
    })

})()

module.exports = mongoConn