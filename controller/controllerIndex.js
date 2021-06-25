const db = require('../database/models');
const Op = db.Sequelize.Op;

let controladorIndex = {
    index:(req, res, next)=>{
        //Crear dos filtros, uno para viejos y uno para nuevos en esos mismos filtros incluyo asociasiones desde productos para poder llamarlo en la vista
        let filtro={
            
            order:[
                ['createdAt','DESC'],
            ],
            limit: 4, 
            //Creo las relaciones
            include: [
                {association: "comentario"},
                {association:'usuario'}
            ]}
        
        let filtroViejos={
           
            order:[
                ['createdAt','ASC'],
            ],
            limit: 4, 
            include: [
                {association: "comentario"},
                {association:'usuario'}
            ]}
        //promesas anidadas 
        db.Producto.findAll(filtro).then(productos=>{
        db.Producto.findAll(filtroViejos).then(
           productosViejos =>
           {res.render('index', {
               productosNuevos : productos, 
               productosViejos : productosViejos})
           console.log(JSON.stringify(productos, null, 10));
        })})

        

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
            console.log(JSON.stringify(resultado, null, 10));
        

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

    

    productoAEditar: (req, res) => {
        db.Producto.findByPk(req.params.id).then(productoAEditar => {
            res.render('products-edits', {
                producto: productoAEditar,
                error: null
            })
        })
    },

    productoUpdate: (req, res) => {
        if(!req.body.descripcion || !req.body.modelo){
            db.Producto.findOne({
                where: {
                    id: req.body.id
                }
            }).then(productoAEditar => {
                res.render('products-edits', {
                    producto: productoAEditar, 
                    error: "La descricpion y el modelo no pueden estar vacios"
                })
            })

        }
        if(req.file){
            db.Producto.update({
                descripcion: req.body.descripcion,
                name_producto: req.body.modelo,
                imagen: req.file.filename
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(() => {
                res.redirect('/products/' + req.body.id)
            });
        }else{
            db.Producto.update({
                descripcion: req.body.descripcion,
                name_producto: req.body.modelo,
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(() => {
                res.redirect('/products/' + req.body.id)

            });
        } 
        
    
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

    borrarComentario: (req,res) => {
        db.Comentario.destroy({
           where: {
             id: req.body.borrar
            }
       }).then(() => {
           res.redirect('/products/' + req.body.id )
       }).catch(error => console.log(error));

      },

};



module.exports = controladorIndex;