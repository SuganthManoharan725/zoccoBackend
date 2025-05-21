const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/remindercontroller');

router.get('/', reminderController.getAll);
router.post('/', reminderController.create);
router.put('/:id', reminderController.update);
router.delete('/:id', reminderController.remove);
router.put('/:id/complete', reminderController.markDone)

module.exports = router;
