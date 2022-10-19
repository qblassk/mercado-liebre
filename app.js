const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));

const PORT = process.env.PORT || 3000;
app.listen(port, () => 
   console.log('Servidor funcionando en puerto ' + PORT));

app.get('/', (req, res) => {
   res.sendFile(path.resolve('views/home.html'));
});
