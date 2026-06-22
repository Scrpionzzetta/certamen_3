const express = require('express');
const router = express.Router();

let videojuegos = [
  { id: 1, nombre: 'Albion', genero: 'mmo rpg' },
  { id: 2, nombre: 'Arc Riders', genero: 'extraction shooter' },
  { id: 3, nombre: 'Stray', genero: 'Aventura' },
];

router.get(
  '/', (req, res) => {
    res.json(videojuegos);
  }
);

router.get('/:id', (req, res) => {
  const vjuegos = videojuegos.find(u => u.id === parseInt(req.params.id));

  if (!vjuegos) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(vjuegos);
});

router.post(
  '/', (req, res) => {
    const {nombre, genero} = req.body;
    const nuevoId = videojuegos.length > 0 ? videojuegos[videojuegos.length - 1].id +1 : 1;
    const vjuegos = {id: nuevoId, nombre, genero};
    videojuegos.push(nuevoJuego);
    res.status(201).json(vjuegos);
  }
);

router.put('/:id', (req, res) => {
  const vjuegos = videojuegos.find(u => u.id === parseInt(req.params.id));
  if (!vjuegos) {
    return res.status(404).json({ error: 'Usuario no encontrado que pena' });
  }
  const { nombre, genero } = req.body;
  if (nombre !== undefined) vjuegos.nombre = nombre;
  if (genero !== undefined) vjuegos.genero = genero;
  res.json(vjuegos);
});

router.delete('/:id', (req, res) => {
  const index = videojuegos.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Juego no encontrado' });
  }
  const eliminado = videojuegos.splice(index, 1)[0];
  res.json({ mensaje: 'Juego eliminado', Juego: eliminado });
});

module.exports = router;

