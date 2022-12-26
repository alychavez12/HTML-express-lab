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
     <li>Look outside, go outside, how amazing clouds are right.</li>
     <li>Have some breakfast, take a shower, smile, now you can see your phone...</li>
     <li>Text someone that you love something positive 'making others happy, will make you happy'</li>
     <li>Now go work and be happy because you have a job. </li>
     
     </ol>
     </body>
   `);
});

app.listen(3000);