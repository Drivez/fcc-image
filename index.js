const express = require('express');

const app = express();
const routes = require('./routes/index');
app.use('/', routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


const port = process.env.PORT || 3000;
const server = app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});
