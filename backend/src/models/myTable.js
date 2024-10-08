// src/models/MyTable.js
const pool = require('../config/database');

class MyTable {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  // Method to create an instance from a database row
  static fromRow(row) {
    return new MyTable(row.id, row.name);
  }

  // Method to insert an instance into the database
  static async insert(name) {
    const result = await pool.query(
      'INSERT INTO mytable (name) VALUES ($1) RETURNING *',
      [name]
    );
    return MyTable.fromRow(result.rows[0]);
  }

  // Method to retrieve an instance by ID
  static async getById(id) {
    const result = await pool.query('SELECT * FROM mytable WHERE id = $1', [id]);
    return result.rows.length ? MyTable.fromRow(result.rows[0]) : null;
  }

  // Method to retrieve all instances
  static async getAll() {
    const result = await pool.query('SELECT * FROM mytable');
    return result.rows.map(MyTable.fromRow);
  }
}

module.exports = MyTable;
