import { Request, Response } from 'express';
import { getContactById, getAllContacts } from '../db/ContactQueries';

export const getContactsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getAllContacts();
    res.send(data);
  } catch (err) {
    console.error('Query failed:', err);
    res.status(500).send('Internal Server Error');
  }
};

export const getContactByIDHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const data = await getContactById(id);
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({ error: 'ID not found' });
    }
  } catch (err) {
    console.error('Query failed:', err);
    res.status(500).send('Internal Server Error');
  }
};
