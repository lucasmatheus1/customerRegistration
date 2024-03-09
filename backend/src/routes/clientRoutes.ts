const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/clientController');

router.get('/', ClientController.find);
router.post('/', ClientController.create);
router.get('/:id', ClientController.findById);
// router.put('/:id', ClientController.update);
// router.delete('/:id', ClientController.delete);

export default router;
