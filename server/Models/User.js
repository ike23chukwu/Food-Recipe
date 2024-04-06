const db = require('../config/db');

class UserService {
    static async getAllUsers() {
        let sql = `SELECT * FROM users`;
        const [users] = await db.execute(sql);
        return users;
    }

    static async getUserById(id) {
        let sql = `SELECT * FROM users WHERE id = ?`;
        const [user] = await db.execute(sql, [id]);
        return user[0];
    }

    static async createUser(userData) {
        let { username, email, password, bio } = userData;
        let sql = `INSERT INTO users (username, email, password, bio) VALUES (?, ?, ?, ?)`;
        await db.execute(sql, [username, email, password, bio]);
        return { username, email, bio };
    }

    static async updateUser(id, updatedUserData) {
        let { username, email, bio } = updatedUserData;
        let sql = `UPDATE users SET username = ?, email = ?, bio = ? WHERE id = ?`;
        await db.execute(sql, [username, email, bio, id]);
        return updatedUserData;
    }

    static async deleteUser(id) {
        let sql = `DELETE FROM users WHERE id = ?`;
        await db.execute(sql, [id]);
    }
}

module.exports = UserService;
