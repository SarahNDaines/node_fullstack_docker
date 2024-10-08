const Contact = require("../models/contact");

const getContacts = async (req, res) => {
  try {
    const data = await Contact.getAll();
    res.send(data);
  } catch (err) {
    console.error('Query failed:', err);
    res.status(500).send('Internal Server Error');
  }
};

const getContactByID = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Contact.getById(id);
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

module.exports = { getContacts, getContactByID };
