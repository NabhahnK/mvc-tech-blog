const express = require('express')
const router = express.Router()
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('profile');
});

module.exports = router;