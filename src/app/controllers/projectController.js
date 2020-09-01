const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    console.log('user: ', req.userid);
    return res.status(200).send({
        ok: true,
        userid: req.userid
    });
});

module.exports = app => app.use('/projects', router);