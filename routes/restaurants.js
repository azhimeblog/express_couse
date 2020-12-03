const express = require('express');
const router = express.Router();

const restaurants = require('../data');
let currentRestaurantsId = 9;

router.get('/', (req, res) => {
    res.json(restaurants);
});

router.get('/:id', (req, res) => {
    const restaurantsID = Number.parseInt(req.params.id, 10);
    const restaurant = restaurants.find((restaurants) => restaurants.id === restaurantsID);
    res.json(restaurant);
});


router.post('/', (req, res) => {
    currentRestaurantsId += 1;
    // console.log(req.body);
    const newRestaurant = {
        id: currentRestaurantsId,
        ...req.body
    };
    restaurants.push(newRestaurant);
    res.json(newRestaurant);
});

router.put('/:id', (req, res) => {
    const restaurantsID = Number.parseInt(req.params.id, 10);
    const restaurantIndex = restaurants.findIndex((restaurants) => restaurants.id === restaurantsID);

    const updateRestaurants = {
        id: restaurantsID,
        ...req.body
    };
    restaurants[restaurantIndex] = updateRestaurants;

    res.json(updateRestaurants);
});

router.delete('/:id', (req, res) => {
    const restaurantsID = Number.parseInt(req.params.id, 10);
    const restaurantIndex = restaurants.findIndex((restaurants) => restaurants.id === restaurantsID);
    restaurants.splice(restaurantIndex, 1);
    res.status(204);
    res.send('DELETE API');
});

module.exports = router;