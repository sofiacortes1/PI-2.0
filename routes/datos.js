var express = require('express');
var router = express.Router();

let controlador = require('../controller/controllerDatos');


router.get('/login',controlador.login);  

router.get('/profile',controlador.profile);

router.get('/profileEdits',controlador.profileEdits);

router.get('/register',controlador.register);

router.get('/searchResults',controlador.searchResults);


//rutas con post

router.post('/profile', controlador.registerCreateUser); 

router.post('/login', controlador.loginValidate);


module.exports = router;
