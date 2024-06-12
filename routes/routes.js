import express from 'express';
import * as ctrl from '../controllers/mainController.js';

const router = express.Router();

// Define routes
router.get('/', ctrl.home);
            
export default router;
