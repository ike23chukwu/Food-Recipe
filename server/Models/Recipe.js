const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'Daniel',
    password: '20022311DAnny@',
    database: 'daniel',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = {
    getAllRecipes: async () => {
        const [rows] = await pool.query('SELECT * FROM recipes');
        return rows;
    },
    getRecipeById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM recipes WHERE id = ?', [id]);
        return rows[0];
    },
    createRecipe: async (recipeData) => {
        const { title, description, ingredients, instructions, creatorId } = recipeData;
        await pool.query('INSERT INTO recipes (title, description, ingredients, instructions, creator_id) VALUES (?, ?, ?, ?, ?)', [title, description, ingredients, instructions, creatorId]);
        return recipeData;
    },
    updateRecipe: async (id, updatedRecipeData) => {
        const { title, description, ingredients, instructions } = updatedRecipeData;
        await pool.query('UPDATE recipes SET title = ?, description = ?, ingredients = ?, instructions = ? WHERE id = ?', [title, description, ingredients, instructions, id]);
        return updatedRecipeData;
    },
    deleteRecipe: async (id) => {
        await pool.query('DELETE FROM recipes WHERE id = ?', [id]);
    }
};
