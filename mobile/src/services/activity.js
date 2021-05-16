import { DatabaseConnection } from "../database/connection";

const db = DatabaseConnection.getConnection();

export default class ActivityService {
	static create({ date, time, name }) {
		return new Promise((resolve, reject) =>
			db.transaction(
				tx => {
					tx.executeSql(
						`INSERT INTO activities (date, time, name) VALUES (?, ?, ?)`,
						[date, time, name],
						(_, { insertId, rows }) => {
							resolve(insertId);
						}
					),
						sqlError => {
							console.error(sqlError);
						};
				},
				txError => {
					console.error(txError);
				}
			)
		);
	}

	static deleteById(id) {
		db.transaction(
			tx => {
				tx.executeSql(
					`DELETE FROM activities WHERE id = ?;`,
					[id],
					(_, { rows }) => {}
				),
					sqlError => {
						console.error(sqlError);
					};
			},
			txError => {
				console.error(txError);
			}
		);
	}

	static updateById({ id, date, time, name }) {
		return new Promise((resolve, reject) =>
			db.transaction(
				tx => {
					tx.executeSql(
						`UPDATE activities SET date = ?, time = ?, name = ? where id = ?;`,
						[date, time, name, id],
						() => {}
					),
						sqlError => {
							console.error(sqlError);
						};
				},
				txError => {
					console.error(txError);
				}
			)
		);
	}

	static findById(id) {
		return new Promise((resolve, reject) =>
			db.transaction(
				tx => {
					tx.executeSql(
						`SELECT * FROM activities WHERE id = ?`,
						[id],
						(_, { rows }) => {
							resolve(rows);
						}
					),
						sqlError => {
							console.error(sqlError);
						};
				},
				txError => {
					console.error(txError);
				}
			)
		);
	}

	static findAll() {
		return new Promise((resolve, reject) =>
			db.transaction(
				tx => {
					tx.executeSql(`SELECT * FROM activities`, [], (_, { rows }) => {
						resolve(rows);
					}),
						sqlError => {
							console.error(sqlError);
						};
				},
				txError => {
					console.error(txError);
				}
			)
		);
	}
}
