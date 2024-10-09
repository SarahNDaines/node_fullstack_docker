import { Contact } from '../../../shared/models/contact';
import pool from '../config/database';

export const getContactById = async (id: string): Promise<Contact | null> => {
  const result = await pool.query('SELECT * FROM contacts WHERE id = $1', [id]);
  return result.rows.length ? Contact.fromRow(result.rows[0]) : null;
};

export const getAllContacts = async (): Promise<Contact[]> => {
  const result = await pool.query('SELECT * FROM contacts');
  return result.rows.map(Contact.fromRow);
};
