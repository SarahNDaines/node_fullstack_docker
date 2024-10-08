const pool = require('../config/database');

class Contact {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  // Method to create an instance from a database row
  static fromRow(row) {
    return new Contact(row.id, row.name);
  }

  // Method to retrieve an instance by ID
  static async getById(id) {
    const result = await pool.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return result.rows.length ? Contact.fromRow(result.rows[0]) : null;
  }

  // Method to retrieve all instances
  static async getAll() {
    const result = await pool.query('SELECT * FROM contacts');
    return result.rows.map(Contact.fromRow);
  }
}

module.exports = Contact;
