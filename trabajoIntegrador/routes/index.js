var express = require('express');
var router = express.Router();

let controlador = require('../controller/controller');

router.get('/',controlador.index);

router.get('/login',controlador.login);  //ver lo de parametros obligatorios

router.get('/products',controlador.products);

router.get('/productsAdd',controlador.productsAdd);

router.get('/profile',controlador.profile);

router.get('/profileEdits',controlador.profileEdits);

router.get('/register',controlador.register);

router.get('/searchResults',controlador.searchResults);


module.exports = router;
