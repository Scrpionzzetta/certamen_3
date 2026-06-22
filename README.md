# certamen_3

Agregar carpeta de imagenes:
src/img

Instalamos Cors
npm i cors

agregamos el use app.use(cors());


agregamos la carpeta img y su ruta
app.use('/img', express.static(path.join(__dirname, 'img')));
