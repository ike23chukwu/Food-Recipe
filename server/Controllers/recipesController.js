const Recipe = require('../Models/Recipe');

const recipeController = {
    getAllRecipes: async (req, res) => {
        try {
            const recipes = await Recipe.find();
            res.status(200).json(recipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
            res.status(500).json({ error: 'An error occurred while fetching recipes' });
        }
    },

    getRecipeById: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id);
            if (!recipe) {
                return res.status(404).json({ error: 'Recipe not found' });
            }
            res.status(200).json(recipe);
        } catch (error) {
            console.error('Error fetching recipe by ID:', error);
            res.status(500).json({ error: 'An error occurred while fetching recipe' });
        }
    },

    addRecipe: async (req, res) => {
        try {
            const { title, ingredients, instructions } = req.body;
            const recipe = new Recipe({ title, ingredients, instructions });
            await recipe.save();
            res.status(201).json(recipe);
        } catch (error) {
            console.error('Error adding recipe:', error);
            res.status(500).json({ error: 'An error occurred while adding recipe' });
        }
    },

    updateRecipeById: async (req, res) => {
        try {
            const { title, ingredients, instructions } = req.body;
            const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, { title, ingredients, instructions }, { new: true });
            if (!updatedRecipe) {
                return res.status(404).json({ error: 'Recipe not found' });
            }
            res.status(200).json(updatedRecipe);
        } catch (error) {
            console.error('Error updating recipe by ID:', error);
            res.status(500).json({ error: 'An error occurred while updating recipe' });
        }
    },

    deleteRecipeById: async (req, res) => {
        try {
            const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
            if (!deletedRecipe) {
                return res.status(404).json({ error: 'Recipe not found' });
            }
            res.status(200).json(deletedRecipe);
        } catch (error) {
            console.error('Error deleting recipe by ID:', error);
            res.status(500).json({ error: 'An error occurred while deleting recipe' });
        }
    },



};

module.exports = recipeController;
