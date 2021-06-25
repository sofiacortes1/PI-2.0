var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

let controlador = require('../controller/controllerDatos');

const profile = multer.diskStorage({
    destination: (req, file, cb) => {
        let rutaDirectorio = 'public/images/profile';
        cb(null, rutaDirectorio);
    },
    filename: (req, file, cb) => {
        let nombreArchivo = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, nombreArchivo);
    }
});

const upload = multer({
    storage: profile
});

router.get('/login', controlador.login);

router.get('/profile/:id', controlador.profile);

router.get('/profileEdits', controlador.profileEdits);

router.get('/register', controlador.register);

router.get('/profile-edits', controlador.profileModify);


router.get('/searchResults', controlador.searchResults);


//rutas con post

router.post('/login', controlador.loginValidate);

router.post('/register', controlador.registerCreateUser);

router.post('/profile-edits', upload.single('imagenProfile'), controlador.profileUpdate);







module.exports = router;