const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Member = require('../models/member');

router.get("/", (req, res, next) => {
    console.log(mongoose.connection.readyState);
    res.status(200).json({
        message: 'Get request handled successfully',
        createdTeamMember: 'member'
    });
});

router.post('/', (req,res,next) => {

    const member = new Member({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        drink: req.body.drink
    })
    member.save().then(result => {
        console.log(result);
    })
        .catch(err => console.log(err));
    res.status(200).json({
        message: 'Post request handled successfully',
        createdTeamMember: member
    });
});

router.get('/:memberId', (req,res,next) => {
    const id = req.params.memberId;
    Member.findById(id)
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    });

module.exports = router;