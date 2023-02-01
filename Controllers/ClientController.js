const express = require('express');
var router = express.Router();

var { Clients } = require('../Models/Client');

router.get(`/`, async (req, res) => {
    const client = await Clients.find();

    if (!client) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(client);
})

router.get('/:id', async (req, res) => {
    const client = await Clients.findById(req.params.id);

    if (!client) {
        res.status(500).json({ message: 'The Client with the given ID was not found.' })
    }
    res.status(200).send(client);
})

router.post('/', async (req, res) => {
    let client = new Clients({
        fullname: req.body.fullname,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
    })
    client = await client.save();

    if (!client)
        return res.status(400).send('the Admin cannot be created!')

    res.send(client);
})

module.exports = router;