const db = require('../database/models');
const Op = db.Sequelize.Op;

const bcrypt = require('bcryptjs'); 

let controladorDatos =  {
    
    login: (req,res) =>{
        res.render('login');
    },

    profile: (req,res) =>{
        res.render('profile');
    },

    profileEdits: (req,res) =>{
        res.render('profile-edits');
    },

    register: (req,res) =>{
        res.render('register');
    },

    searchResults: (req,res) =>{
        let buscador = req.query.search;
        if ( buscador !== '') {
            res.render('search-results', {title: 'Encontramos esto de ' + buscador + '...'})
        } else {
            res.render('search-results', {title: 'Esto encontramos para vos!'});
        };
        
        let filtro ={
            where:[{
                name_producto: req.query.search
            }]
        }; 

        db.Producto.findAll(filtro).then(respuesta =>{
            res.render('search-results', {lista: respuesta});
        });
    
    },

    registerCreateUser: (req,res) => {
        let passEncriptada = bcrypt.hashSync(req.body.pass);

        db.Usuario.create({
            email: req.body.email,
            pass: passEncriptada
        }).then(usuario => {
            res.redirect('/');
        });
        

    },

    loginValidate: (req, res) => {
        const filtro = {
           where: {
            email: req.body.email,
           } 
        }
        db.Usuario.findOne(filtro).then(resultado =>{
            if(bcrypt.compareSync(req.body.pass, resultado.pass)){
                req.session.resultado = resultado.name;
               if(req.body.remember){
                   res.cookie('userId', usuario.id, {maxAge: 1000 * 60 * 5 });
               } 
            }
           res.redirect('/profile')
        }) 
        
    }

};




module.exports = controladorDatos; 