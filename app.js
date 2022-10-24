const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT_APP = process.env.PORT || 3005;
app.listen(PORT_APP, () => 
   console.log('Servidor funcionando en puerto ' + PORT_APP));

app.get('/', (req, res) => {
   res.sendFile(path.resolve('views/home.html'));
});

app.get('/register.html', (req, res) => {
   res.sendFile(path.resolve('views/register.html'));
});

app.get('/login.html', (req, res) => {
   res.sendFile(path.resolve('views/login.html'));
});

app.post('/', (req, res) => {
   return res.send(req.body);
})
