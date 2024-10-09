import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import pool from '../config/database';

export const resetDatabase = async (req: Request, res: Response): Promise<void> => {
  try {
    const initSQL = readFileSync(join(__dirname, '../config/init.sql'), 'utf8');
    await pool.query(initSQL);
    res.send({ message: 'Database has been reset successfully.' });
  } catch (err: any) {
    console.error('Database reset failed:', err.message); // More detailed error message
    res.status(500).send({ error: 'Internal Server Error', details: err.message });
  }
};
