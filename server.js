const express = require('express');
const port = process.env.port || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

 app.use('/api', apiRoutes);
 app.use('/', htmlRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});