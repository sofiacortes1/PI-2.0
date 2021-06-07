const db = require('../database/models');
const Op = db.Sequelize.Op;

let controladorIndex =  {
    index: (req,res) =>{
        if (req.session.usuarioLogueado){
            res.render('index', {usuario: req.session.usuarioLogueado});
        }
        else {
            res.render('index', {usuario: "anonimo"});
        }
    
    },

    products: (req,res) =>{
        res.render('products');
    },

    productsAdd: (req,res) =>{
        res.render('products-add');
    },
    crear: (req, res) => {
        db.Producto.create({
        color: req.body.color,
        name_producto: req.body.modelo,
        fecha: req.body.fecha,
       }).then(productoCreado =>{ 
           res.redirect('/datos/profile' + productoCreado)
       });

    }, 
     agregarComentario: (req,res) => {
        console.log("llega?")
        db.Comentario.create({
            texto: req.body.agregar,
        }).then(comentAgregado => {
            res.redirect('/products' + comentAgregado.id)

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