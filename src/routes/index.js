const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const adminRouter = require('./admin');
const error = require('./../middlewares/error');
const {isAdmin , isLogin} = require("../middlewares/auth");

router.use('/auth', authRouter);
router.use('/user', isLogin, userRouter);
router.use('/admin', isLogin, isAdmin, adminRouter);

router.use(error);

module.exports = router;