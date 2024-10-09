import express, { Request, Response } from 'express';
import { getContactsHandler, getContactByIDHandler } from '../controllers/contactsController';

const router = express.Router();

router.get('/contacts', (req: Request, res: Response) => getContactsHandler(req, res));
router.get('/contacts/:id', (req: Request, res: Response) => getContactByIDHandler(req, res));

export default router;
