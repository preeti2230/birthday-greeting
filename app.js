const express = require('express');
let app = express();
const PORT = 2000;
app.get('/', (req, res) => {
    res.send('Happy Birthday!');
});
app.listen(PORT, () => {
        console.log('Server is running at http://localhost:2000');
});

