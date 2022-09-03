const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes');
const updateRoutes = require('./updateRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/update', updateRoutes);

module.exports = router;
