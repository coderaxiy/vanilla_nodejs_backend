const mysql = require('mysql2')

const pool = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'99Y01m18D',
    database:'greenshop'
})

module.exports = {pool}
