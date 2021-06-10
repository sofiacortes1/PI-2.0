const db = require('../database/models');
const Op = db.Sequelize.Op;

let controladorIndex =  {
    index: (req,res) =>{
        if (req.session.resultado){
            res.render('index', {usuario: req.session.resultado});
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

    productDetalle: (req,res) => {
       let id = req.params.id;
       console.log(id);
       db.Producto.findByPk(id).then(resultado => {
        res.render('products');
       })
       

    },

    crearProducto: (req, res) => {
        db.Producto.create({
        color: req.body.color,
        name_producto: req.body.modelo,
        fecha: req.body.fecha,
       }).then(productoCreado =>{ 
           res.redirect('/products' + productoCreado.id)
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