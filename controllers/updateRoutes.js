const express = require('express')
const router = express.Router()
const { Post } = require('../models');

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        // Serialize data so the template can read it
        const post = postData.get({ plain: true });

        res.render('update', {
            ...post,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;