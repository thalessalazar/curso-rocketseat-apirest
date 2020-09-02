const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

const router = express.Router();
const User = require('../models/User');


function generateToken(params = {}) {
    return jwt.sign({ params }, authConfig.secret, {
        expiresIn: 86400
    });
}



router.post('/register', async (req, res, next) => {
    const { email } = req.body;

    try {

        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'User already exists' });
        }

        const user = await User.create(req.body);

        const token = generateToken({ id: user.id });
        user.password = undefined;
        return res.status(200).send({ user, token });

    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});



router.post('/authenticate', async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return res.status(400).send({ error: 'User not found' });
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ error: 'Invalid password' });
    }
    user.password = undefined;

    const token = generateToken({ id: user.id });

    res.status(200).send({ user, token });
});



router.post('/forgot_password', async (req, rex, next) => {

});

module.exports = app => app.use('/auth', router);
