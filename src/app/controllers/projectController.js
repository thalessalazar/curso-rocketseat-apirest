const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

const Project = require('../models/Projects');
const Task = require('../models/Tasks');

router.use(authMiddleware);

// router.get('/', (req, res) => {
//     console.log('user: ', req.userid);
//     return res.status(200).send({
//         ok: true,
//         userid: req.userid
//     });
// });

//List projects
router.get('/', async (req, res, next) => {
    try {
        const projectsList = await Project.find();
        if (!projectsList) {
            return res.status(400).send({
                err: 'Not avaible, try again!'
            })
        }
        return res.status(200).send({ projectsList })

    } catch (err) {
        return res.status(400).send({ err: err })
    }
});

//list Projects Details
router.get('/show/:id', async (req, res, next) => {
});

//create project
router.post('/save', async (req, res, next) => {
    
});

//update project
router.put('/update/:id', (req, res, next) => {

});

//delete project
router.delete('/delete/:id', (req, res, next) => {

});

module.exports = app => app.use('/projects', router);