const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');


router.get('/', profileController.getProfile);


router.put('/', profileController.updateProfile);


router.delete('/', profileController.deleteProfile);

module.exports = router;
