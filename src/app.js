const express = require('express');
const logger = require('./middlewares/logger');
const vJuegosRouter = require('./routes/videojuegos');
const app = express();

app.use(express.json());
app.use(logger);
app.use('/catalogo', vJuegosRouter);

const PORT = 3500;
app.listen(PORT,() => 
    {
        console.log('Server start on PORT:  ', PORT);
    }
);