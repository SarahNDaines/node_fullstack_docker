// src/controllers/mytableController.js

const MyTable = require("../models/myTable");

const getMyTableData = async (req, res) => {
  try {
    const data = await MyTable.getAll();
    res.send(data);
  } catch (err) {
    console.error('Query failed:', err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { getMyTableData };
