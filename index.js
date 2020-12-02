const express = require('express');
const restaurantsRouter = require('./routes/restaurants');

const app = express();


app.use('/apis/restaurants', restaurantsRouter);

app.get('/', (req, res) => {
    res.send('<h1> Hello EXPRESS</h1>');
});
app.listen(3000, () => {
    console.log('Listen on port 3000');
});