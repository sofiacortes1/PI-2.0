const db = require('../database/models');
const Op = db.Sequelize.Op;

const bcrypt = require('bcryptjs');

let controladorDatos = {

    login: (req, res) => {
        res.render('login', {error: null});
    },

    profile: (req, res) => {
        let id = req.params.id;
        const filtro = {
            include: [

                {
                    association: 'comentario'
                },
                {
                    association: 'producto',
                    include: [{
                        association: 'comentario'
                    }]
                }
            ],
        }
        db.Usuario.findByPk(id, filtro).then(usuarios => {
            if (usuarios) {
                res.render('profile', {
                    usuarios: usuarios,
                })
            } else {
                res.render('index', {
                    error: 'No existe el perfil buscado'
                }) // que si no existe el perfil te mande directo al index y t diga q no existe
            }

            console.log(JSON.stringify(usuarios, null, 10));
        }).catch(error => {
            console.log(error)
        })

    },

    profileEdits: (req, res) => {
        db.Usuario.findByPk(req.params.id).then(perfilAEditar => {
        res.render('profile-edits', {
            error: null,
            usuario:perfilAEditar
        });
        })
    },

    register: (req, res) => {
        res.render('register', {
            error: null
        });
    },

    searchResults: (req, res) => {
        let buscador = req.query.search;
        let title = 'x';
        if (buscador !== '') {
            title = 'Encontramos esto de ' + buscador + '...'
        } else {
            title = 'Encontramos esto para vos!'
        };

        let filtro = {
            where: [{
                [Op.or]: [{
                        name_producto: buscador
                    },
                    {
                        descripcion: {
                            [Op.like]: '%' + buscador + '%'
                        }
                    }
                ]
            }]
        };

        db.Producto.findAll(filtro).then(respuesta => {
            console.log(filtro);

            res.render('search-results', {
                lista: respuesta,
                title: title
            });
        }).catch(error => console.log(error));

    },

    registerCreateUser: (req, res) => {
        if (!req.body.name || !req.body.lname || !req.body.email || !req.body.date || !req.body.age || !req.body.pass || !req.file) {
            res.render('register', {
                error: 'No puede haber campos vacios'
            })
        }

        let passEncriptada = bcrypt.hashSync(req.body.pass);

        if (req.body.email.includes('@')) {
            if (req.body.pass.length < 3) {
                res.render('register', {
                    error: 'La contraseña debe tener mas de 3 digitos'
                })
            }
            db.Usuario.findOne({
                where:{
                    email: req.body.email
                }
            }).then(resultado => {
                if(resultado){
                    res.render('register', {
                        error: 'este mail ya existe' 
                    })
                }
                db.Usuario.create({
                    first_name: req.body.name,
                    last_name: req.body.lname,
                    email: req.body.email,
                    contraseña: passEncriptada,
                    age: req.body.age,
                    birth_date: req.body.date,
                    imagen: req.file.filename
    
                }).then(usuario => {
                    res.redirect('login');
                }).catch(error => console.log(error))
            })
            
        } else {
            res.render('register', {
                error: 'No pusiste email'
            })
        }


    },

    loginValidate: (req, res) => {
        const filtro = {
            where: {
                email: req.body.email,
            }
        }
        console.log("en loginValidate");

        db.Usuario.findOne(filtro).then(resultado => {
                // return res.send(resultado); 
                if(resultado ){ 
                    if (bcrypt.compareSync(req.body.pass, resultado.contraseña)) {

                        req.session.resultado = {}
                        req.session.resultado.email = resultado.email;
                        req.session.resultado.first_name = resultado.first_name
                        req.session.resultado.id = resultado.id
    
                        if (req.body.remember) {
                            res.cookie('userId', resultado.id, {
                                maxAge: 100000 * 60 * 5
                            });
                            console.log("probando if");
                        } else {
                            console.log("probando else");
                        }
                    } else {
                        console.log("probando2");
                        res.render('login', {error:'la contraseña es incorrecta'})
                    }
    
                    res.redirect('/datos/profile/' + resultado.id)
                
                } else {
                    res.render('login', {error: 'El mail ingresado no existe'})
                }
                    


                
            })
            .catch(error => console.log(error))
    },

    profileModify: (req, res) => {
        db.Usuario.findByPk(req.query.id).then(perfilAEditar => {
            res.render('profile', {
                perfil: perfilAEditar
            })
        })
    },

    profileUpdate: (req, res) => {
        if(!req.body.name || !req.body.email ) {
            db.Usuario.findByPk(req.body.id).then(perfilAEditar => {
                res.render('profile-edits', {
                    error: "los Campos no pueden estar vacios",
                    usuario:perfilAEditar
                });
                })
        }
        if (req.file){
            if (req.body.password){
                let pass=bcrypt.hashSync(req.body.password)
                db.Usuario.update({
                    first_name: req.body.name,
                    email: req.body.email,
                    contraseña: pass,
                    imagen: req.file.filename,
    
                }, {
                    where: {
                        id: req.body.id
                    }
                })
                .then(() => {
                    res.redirect('/datos/profile/' + req.body.id)
    
            }).catch(error => console.log(error))
            }else{
                db.Usuario.update({
                    first_name: req.body.name,
                    email: req.body.email,
                    imagen: req.file.filename,
    
                }, {
                    where: {
                        id: req.body.id
                    }
                })
                .then(() => {
                    res.redirect('/datos/profile/' + req.body.id)
    
            }).catch(error => console.log(error))
            }
        }else if(req.body.password){
            let pass=bcrypt.hashSync(req.body.password)
            db.Usuario.update({
                first_name: req.body.name,
                email: req.body.email,
                contraseña: pass,
                

            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(() => {
                res.redirect('/datos/profile/' + req.body.id)

        }).catch(error => console.log(error))
        }else{
            db.Usuario.update({
                first_name: req.body.name,
                email: req.body.email,
                

            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(() => {
                res.redirect('/datos/profile/' + req.body.id)

        }).catch(error => console.log(error)) 
        }
        
    }






};




module.exports = controladorDatos;