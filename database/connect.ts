const DB = require('pg').Pool

const db = new DB({
    host: "localhost",
    user: "Test",
    port: 5432,
    password: "12344",
    database: "template"
})

module.exports = db