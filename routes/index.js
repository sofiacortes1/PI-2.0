var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

let controlador = require('../controller/controllerIndex');

const guardar = multer.diskStorage({
    destination: (req, file, cb) =>{
        let rutaDirectorio = 'public/images/products';
        cb(null, rutaDirectorio);
    },
    filename:(req, file, cb)=> {
        let nombreArchivo = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, nombreArchivo);
    }
});

const upload = multer ({
    storage: guardar
});


router.get('/',controlador.index);

router.get('/products',controlador.products);

router.get('/products/:id',controlador.productDetalle);

router.get('/products-add',controlador.productsAdd);

router.get('/logout',controlador.logout);

router.get('/borrar-producto', controlador.borrarProducto);

router.get('/producto-editar', controlador.productoAEditar);

router.get('/borrar-comentario', controlador.borrarComentario);

//RUTAS POR POST

router.post('/crear-producto', upload.single('imagen'), controlador.crearProducto);

router.post('/agregar-comentario', controlador.AgregarComentario);

router.post('/producto-editar', controlador.productoAEditar);

router.post('/borrar-producto', controlador.borrarProducto);

router.post('/borrar-comentario', controlador.borrarComentario);




module.exports = router;
