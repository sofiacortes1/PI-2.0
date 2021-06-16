const db = require('../database/models');
const Op = db.Sequelize.Op;

const bcrypt = require('bcryptjs'); 

let controladorDatos =  {
    
    login: (req,res) =>{
        res.render('login');
    },

    profile: (req,res) =>{
        res.render('profile');
        const filtro = {
            include: [
                {assosiation: 'productos', include: 'pusuario'}
            ]
        }
    },

    profileEdits: (req,res) =>{
        res.render('profile-edits');
    },

    register: (req,res) =>{
        res.render('register');
    },

    searchResults: (req,res) =>{
        let buscador = req.query.search;
        let title = 'x';
        if ( buscador !== '') {
            title = 'Encontramos esto de ' + buscador + '...'
        } else {
            title= 'Esto encontramos para vos!'
        };
        
        let filtro ={
            where:[{
                name_producto: req.query.search
            }]
        }; 

        db.Producto.findAll(filtro).then(respuesta =>{
            res.render('search-results', {lista: respuesta, title: title});
        });
    
    },

    registerCreateUser: (req,res) => {
        let passEncriptada = bcrypt.hashSync(req.body.pass);

        db.Usuario.create({
            first_name: req.body.name,
            last_name: req.body.lname,
            email: req.body.email,
            contraseña: passEncriptada,
            age: req.body.age,
            birth_date: req.body.date
        }).then(usuario => {
            res.redirect('login' );
        }).catch(error=>console.log(error));

    
    },

    loginValidate: (req, res) => {
        const filtro = {
           where: {
            email: req.body.email,
           } 
        }
        console.log("en loginValidate");
        
        db.Usuario.findOne(filtro).then(resultado =>{
           // return res.send(resultado); 
            
            if(bcrypt.compareSync(req.body.pass, resultado.contraseña)){
               
                req.session.resultado = {}
                req.session.resultado.email = resultado.email;
                req.session.resultado.first_name = resultado.first_name
                req.session.resultado.id = resultado.id

               if(req.body.remember){
                   res.cookie('userId', resultado.id, {maxAge: 1000 * 60 * 5 });
                   console.log("probando if");
                }  else {
                    console.log("probando else");
                }
            }else{
                console.log("probando2");
                
            }

           res.redirect('/datos/profile')
        }) 
        .catch(error => console.log(error))
    }

};




module.exports = controladorDatos; 