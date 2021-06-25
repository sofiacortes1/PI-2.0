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

        db.Producto.findAll(filtroNuevo).then(todoNuevo => {
            db.Producto.findAll(filtroViejo).then(todoViejo => {
                if (req.session.resultado) {
                    res.render('index', {
                        usuario: req.session.resultado,
                        productosNuevos: todoNuevo,
                        productosViejos: todoViejo,
                        error: error
                    });
                } else {
                    res.render('index', {
                        usuario: "anonimo",
                        productosNuevos: todoNuevo,
                        productosViejos: todoViejo, 
                        error: error
                    });
                }
            })

        }).catch(error => console.log(error));

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
                    association: 'usuario',
                    include: [{
                        association: 'comentario'
                    }]
                }
            ],
            
        }
        let id = req.params.id;
        
        console.log(filtro);

        db.Producto.findByPk(id, filtro).then(resultado => {
            console.log(JSON.stringify(resultado, null, 10));
            res.render('products', {
                resultado: resultado, 
            });

        })
    },

    crearProducto: (req, res) => {
        db.Producto.create({
            descripcion: req.body.descripcion,
            name_producto: req.body.modelo,
            imagen: req.file.filename,
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
            productos_id: req.params.id
        }).then(
            res.redirect('/products/' + req.params.id),
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
    
    }









    //borrar: (req,res) => {
    //    db.Comentario.destroy({
    //       where: {
    //         id: req.body.id
    //        }
    //   }).then(() => {
    //       res.redirect('/products')
    //   })

    //  },

};



module.exports = controladorIndex;