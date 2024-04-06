const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

router.get('/', recipesController.getAllRecipes);
router.get('/:id', recipesController.getRecipeById);
router.post('/', recipesController.addRecipe);
router.put('/:id', recipesController.updateRecipeById);
router.delete('/:id', recipesController.deleteRecipeById);

module.exports = router;
