const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/clientController');

router.get('/', ClientController.getClients);
// router.post('/', UserController.createUser);
// router.get('/:id', UserController.getUserById);
// router.put('/:id', UserController.updateUser);
// router.delete('/:id', UserController.deleteUser);

export default router;