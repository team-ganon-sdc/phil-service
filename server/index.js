const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Similar Component listening on port ${port}!`));