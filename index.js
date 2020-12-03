const express = require('express');
const restaurantsRouter = require('./routes/restaurants');
const app = express();
const logger = require('./middleware/logger');

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//COSTOMMIDDLEWARE
app.use(logger);

//ROUTER
app.use('/apis/restaurants', restaurantsRouter);

app.get('/', (req, res) => {
    res.send('<h1> Hello EXPRESS</h1>');
});
app.listen(3000, () => {
    console.log('Listen on port 3000');
});