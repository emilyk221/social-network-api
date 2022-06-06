const router = require("express").Router();
const { User, Thought } = require("../../models");

// get all users
router.get('/', (req, res) => {
  User.find({})
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .select('-__v')
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// get one user by id
router.get('/:id', (req, res) => {
  User.findOne({ _id: req.params.id })
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .select('-__v')
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!'});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// create a user
router.post('/', ({ body }, res) => {
  User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(400).json(err));
});

// update a specific user
router.put('/:id', ({ params, body }, res) => {
  User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
});

// delete a user
router.delete('/:id', ({ params }, res) => {
  User.findOneAndDelete({ _id: params.id })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
});

// create a friend and add to user's friend array
router.post('/:userId/friends/:friendId', ({ params }, res) => {
  User.findOneAndUpdate(
    { _id: params.userId },
    { $push: { friends: params.friendId } },
    { new: true, runValidators: true }
  )
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => res.json(err));
});

// delete a friend from a user's friend array
router.delete('/:userId/friends/:friendId', ({ params }, res) => {
  User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
});

module.exports = router;