const express = require('express');
var router = express.Router();

var { Foods } = require('../Models/Food');

router.get(`/`, async (req, res) => {
    const foods = await Foods.find();

    if (!foods) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(foods);
})

router.get('/:id', async (req, res) => {
    const foods = await Foods.findById(req.params.id);

    if (!foods) {
        res.status(500).json({ message: 'The Client with the given ID was not found.' })
    }
    res.status(200).send(foods);
})

router.post('/', async (req, res) => {
    let foods = new Foods({
        // hotelid: req.body.hotelid,
        description: req.body.description,
        price: req.body.price,
        title: req.body.title,
        image: req.body.image,
    })
    foods = await foods.save();

    if (!foods)
        return res.status(400).send('the Admin cannot be created!')

    res.send(foods);
})

module.exports = router;