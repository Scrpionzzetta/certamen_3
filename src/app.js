const express = require('express');
const cors = require('cors');
const path    = require('path'); 
const logger = require('./middlewares/logger');
const vJuegosRouter = require('./routes/videojuegos');
const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/catalogo', vJuegosRouter);

const PORT = 3500;
app.listen(PORT,() => 
    {
        console.log('Server start on PORT:  ', PORT);
    }
);