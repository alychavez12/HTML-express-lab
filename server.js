const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
   res.send(`
   <html>
    <body>
     <h1>Life is amazing</h1>
    </body>
   `);
});

app.listen(3000);