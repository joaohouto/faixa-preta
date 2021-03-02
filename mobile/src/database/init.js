import { DatabaseConnection } from './connection'

var db = null
export default class DatabaseInit {

    constructor() {
        db = DatabaseConnection.getConnection()
        this.initialize()
    }

    initialize() {
        var sql = [
            `CREATE TABLE IF NOT EXISTS activities (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                date TEXT,
                time INTEGER,
                name TEXT
            );`,
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.error(error);
            }, () => {
                console.log("✅ Database initialized!");
            }
        );
    }

}