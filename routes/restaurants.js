const express = require('express');
const router = express.Router();

const restaurants = require('../data');

router.get('/', (req, res) => {
    res.json(restaurants);
});

router.get('/:id', (req, res) => {
    const restaurantsID = Number.parseInt(req.params.id, 10);
    const restaurant = restaurants.find((restaurants) => restaurants.id === restaurantsID);
    res.json(restaurant);
});


router.post('/', (req, res) => {
    res.send('POST API');
});

router.put('/:id', (req, res) => {
    res.send('PUT API');
});

router.delete('/:id', (req, res) => {
    const restaurantsID = Number.parseInt(req.params.id, 10);
    const restaurantIndex = restaurants.findIndex((restaurants) => restaurants.id === restaurantsID);
    restaurants.splice(restaurantIndex, 1);
    res.status(204);
    res.send('DELETE API');
});

module.exports = router;