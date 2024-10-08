const express = require('express');
const { getContacts, getContactByID } = require('../controllers/contactsController');

const router = express.Router();

router.get('/contacts', getContacts);
router.get('/contacts/:id', getContactByID);

module.exports = router;
