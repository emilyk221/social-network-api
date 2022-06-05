const router = require("express").Router();
const { User, Thought } = require("../../models");

// get all thoughts
router.get('/', (req, res) => {
  Thought.find({})
    .populate({
      path: 'users',
      select: '-__v'
    })
    .select('-__v')
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;