var express = require('express');
var router = express.Router();

let controlador = require('../controller/controllerIndex');

router.get('/',controlador.index);

router.get('/products',controlador.products);

router.get('/products-add',controlador.productsAdd);


//RUTAS POR POST

router.post('/crear-producto', controlador.crearProducto);

router.post('/agregar-comentario', controlador.agregarComentario);




module.exports = router;
