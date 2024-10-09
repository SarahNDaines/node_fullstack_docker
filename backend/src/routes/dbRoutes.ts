import express from 'express';
import { resetDatabase } from '../controllers/dbController';

const router = express.Router();

router.post('/reset', resetDatabase);

export default router;
