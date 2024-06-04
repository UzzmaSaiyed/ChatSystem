const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/c', (req, res) => {
    res.send('Chatz welcomes you!!!');
});
// basic routing


// const fs = require('fs');

// fs.readFile('public/index.html', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading index.html:', err);
//         return;
//     }
//     console.log('index.html contents:', data);
// });
// if readfile written below listen it wont work



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

