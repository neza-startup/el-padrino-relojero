import express from 'express';
import * as accessoryController from '../controllers/accessory.controller.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/getAccessories', accessoryController.getAllAccessories);
router.get('/getAccessory/:id', accessoryController.getAccessoryById);
router.post('/postAccessory', upload.array('images', 5), accessoryController.postAccessory);
router.put('/updateAccessory/:id', accessoryController.updateAccessory);
router.delete('/deleteAccessory/:id', accessoryController.deleteAccessory);

export default router;
