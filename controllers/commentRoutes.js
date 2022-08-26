const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all Posts and JOIN with user data
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('comment', {
      comments,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const commentData = await Comment.findAll({
      where: {
        post_Id: id
      }
    });;

    // Serialize data so the template can read it
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render('comment', {
      comments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;