import express from 'express';
import * as watchController from '../controllers/watch.controller.js';

const router = express.Router();

router.get('/getWatches', watchController.getAllWatches);
router.get('/getWatch/:id', watchController.getWatchById);
router.post('/postWatch', watchController.postWatch);
router.put('/updateWatch/:id', watchController.updateWatch);
router.delete('/deleteWatch/:id', watchController.deleteWatch);

export default router;
