const http = require('http');
const app = require('./app.js');
const port = 3001;

app.listen(port, () => console.log(`Server running on port ${port}`))