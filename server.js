const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
   res.send(`
   <html>
    <body>
     <h1>Life is amazing</h1>
     <h3>Let's start this morning with a diferent start before we start.</h3>
     <ol>
     <li>Don't look at your phone yet 'Believe me he can wait'.</li>
     <li>Seat on Bed, streach and think how amazing life it is.</li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     </ol>
     </body>
   `);
});

app.listen(3000);