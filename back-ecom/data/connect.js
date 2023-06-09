const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

class DB {
    static database = undefined
    static connect() {
        open({
            filename: './data/test.db',
            driver: sqlite3.Database
        }).then((db) => {
            // do your thing
            this.database = db
            console.log("database ok");
        })
    }
}

module.exports = DB