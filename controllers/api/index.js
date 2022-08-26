const router = require('express').Router();
const postRoutes = require('./postRoutes.js');
const userRoutes = require('./userRoutes.js');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;
