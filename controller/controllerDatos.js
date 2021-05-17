const db = require('../database/models');
const Op = db.Sequelize.Op;

const bcrypt = 


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
        }
        
        let filtro ={
            where:[{
                name_producto: req.query.search
            }]
        }; 

        db.Producto.findAll(filtro).then(respuesta =>{
            res.render('search-results', {lista: respuesta});
        });
    
    },

    registerCreatUser: (req,res) => {
        


    }


};




module.exports = controladorDatos; 