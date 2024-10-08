// src/routes/mytableRoutes.js
const express = require('express');
const { getMyTableData } = require('../controllers/mytableController');

const router = express.Router();

router.get('/', getMyTableData);

module.exports = router;
