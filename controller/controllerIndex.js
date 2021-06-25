const db = require('../database/models');
const Op = db.Sequelize.Op;

let controladorIndex = {
    index: (req, res) => {
        // dos filtros (uno para nuevos y otro para viejos) dos variables, todoNuevos, todoViejos
        let filtroNuevo = {
            order: [
                ['createdAt', 'DESC'],
            ],

            limit: 4
        }

        let filtroViejo = {
            order: [
                ['createdAt', 'ASC'],
            ],

            limit: 4
        } 
        let filtroRelacion = {
            include: [
                
                {
                    association: 'producto',
                    include: [{
                        association: 'comentario'
                    }]
                },
                {
                    association: 'usuario'
                }
            ]
        }

        db.Producto.findAll(filtroNuevo, filtroRelacion).then(todoNuevo => {
            db.Producto.findAll(filtroViejo, filtroRelacion).then(todoViejo => {
                if (req.session.resultado) {
                    res.render('index', {
                        usuario: req.session.resultado,
                        productosNuevos: todoNuevo,
                        productosViejos: todoViejo,

                        
                    });
                } else {
                    res.render('index', {
                        usuario: "anonimo",
                        productosNuevos: todoNuevo,
                        productosViejos: todoViejo, 
                    });
                }
            })

        }).catch(error => console.log(error));
        console.log(filtroRelacion);

    },

    products: (req, res) => {
        res.render('products');
    },

    productsAdd: (req, res) => {
        res.render('products-add');
    },

    productDetalle: (req, res) => {
        const filtro = {
            include: [
                
                {
                    association: 'comentario',
                    include: [{
                        association: 'usuario'
                    }]
                },
                {
                    association: 'usuario'
                }
            ],

            order: [[
                "comentario", "createdAt", "DESC"
            ]]
            
        }
        let id = req.params.id;
        
        console.log(filtro);

        db.Producto.findByPk(id, filtro).then(resultado => {
            if(resultado){
                res.render('products', {
                producto: resultado, 
                usuario: resultado.usuario,
                comentario: resultado.comentario
                })
    
            } else {
                res.render('products')

            }
        

        })
    },

    crearProducto: (req, res) => { 
        
        if ( !req.body.descripcion || !req.body.modelo || !req.file.filename ) {
            res.render('products', {
                error: 'No puede haber campos vacios'
            })
        }

        db.Producto.create({
            descripcion: req.body.descripcion,
            name_producto: req.body.modelo,
            imagen: req.file.filename,
            usuarios_id: req.session.resultado.id
        }).then(productoCreado => {
            console.log(productoCreado);

            res.redirect('/products/' + productoCreado.id)
        });
    },

    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        res.redirect('/');
    },

    AgregarComentario: (req, res) => {
        db.Comentario.create({
            texto: req.body.agregar,
            usuarios_id: req.session.resultado.id,
            productos_id: req.body.editar
        }).then(
            res.redirect('/products/' + req.body.editar),
        ).catch(error => console.log(error));

    },

    borrarProducto: (req, res) => {
        db.Producto.destroy({
            where: {
                id: req.body.borrar
            }
        }).then(() => {
            res.redirect('/')
        }).catch(error => console.log(error));
    },

    productoAEditar: (req, res) => {
        db.Producto.findByPk(req.query.id).then(productoAEditar => {
            res.render('products', {
                producto: productoAEditar
            })
        })
    },

    productoUpdate: (req, res) => {
        db.Produto.update({
                descripcion: req.body.descripcion,
                name_producto: req.body.modelo,
                imagen: req.file.filename
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(() => {
                res.redirect('/products')


            });
    
    },

    borrarComentario: (req,res) => {
        db.Comentario.destroy({
           where: {
             id: req.body.borrar
            }
       }).then(() => {
           res.redirect('/products')
       }).catch(error => console.log(error));

      },

};



module.exports = controladorIndex;