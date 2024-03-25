const express = require('express');
const authController = require('../controllers/authController');
const blogController = require('../controllers/blogController');
const commentController = require('../controllers/commentController');
const auth = require('../middlewares/auth');

const router = express.Router();

// user
// register
router.post('/register', authController.register);

// login
router.post('/login', authController.login);

// logout
router.post('/logout', auth, authController.logout);

// refresh
router.get('/refresh', authController.refresh);

// blog
// create
router.post('/blog', auth, blogController.create);

// read all blogs
router.get('/blog/all', auth, blogController.getAll);

// read blog by id
router.get('/blog/:id', auth, blogController.getById);

// update
router.put('/blog', auth, blogController.update);

// delete
router.delete('/blog/:id', auth, blogController.delete);

// comment
// create comment
router.post('/comment', auth, commentController.create);

// read comments by blog id
router.get('/comment/:id', auth, commentController.getById);

module.exports = router;