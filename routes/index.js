var express = require('express');
var router = express.Router();

let controlador = require('../controller/controllerIndex');

router.get('/',controlador.index);

router.get('/products',controlador.products);

router.get('/products/:id',controlador.productDetalle);

router.get('/products-add',controlador.productsAdd);

router.get('/logout',controlador.logout);

router.get('/agregar-comentario', controlador.AgregarComentario);

//RUTAS POR POST

router.post('/crear-producto', controlador.crearProducto);

router.post('/agregar-comentario', controlador.AgregarComentario);




module.exports = router;
