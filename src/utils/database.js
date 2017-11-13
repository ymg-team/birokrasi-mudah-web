import mysql from 'mysql'
import dbConf from '../../config/database'

const conf = dbConf[process.env.NODE_ENV]
const connection = mysql.createConnection(dbconf)
const debugDb = require('debug')('app:db')

connection.connect(err => {
    if(err) throw err 
    
    // log
    debugDb(`DB connected to ${dbconf.host} as ${dbconf.user} at ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}`)
})
// end of connection

/**
 * function to execute mysql query string
 * @param {string} query
 */
connection.exec = query => {
    // log
    debugDb(`DB query : "${query}" by ${dbconf.user} at ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}`)
    
    return new Promise((resolve, reject) => {
        return connection.query(query, (err, rows, fields) => {
            if(err) console.log('query error :', err)
            resolve({err, rows})
        })
    })
}

export default connection



