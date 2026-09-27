import express from 'express';
import * as watchController from '../controllers/watch.controller.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/getWatches', watchController.getAllWatches);
router.get('/getWatch/:id', watchController.getWatchById);
router.post('/postWatch', upload.array('images', 5), watchController.postWatch);
router.put('/updateWatch/:id', watchController.updateWatch);
router.delete('/deleteWatch/:id', watchController.deleteWatch);

export default router;
